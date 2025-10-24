const fs = require("fs");
const path = require("path");
const vm = require("vm");

const indexPath = path.resolve(__dirname, "..", "index.html");
const html = fs.readFileSync(indexPath, "utf8");

function sliceBetween(startMarker, endMarker, includeStart = false) {
  const start = html.indexOf(startMarker);
  if (start === -1) throw new Error(`Missing marker: ${startMarker}`);
  const contentStart = includeStart ? start : start + startMarker.length;
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (end === -1) throw new Error(`Missing marker: ${endMarker}`);
  return html.slice(contentStart, end);
}

const pedSection = sliceBetween("const PEDAGOGY = {", "};", true) + "};";
const stateSection = sliceBetween("let state = {", "};", true) + "};";
const questionTypesSection = sliceBetween("const QUESTION_TYPES = [", "];", true) + "];";
const typeLabelSection = sliceBetween("const TYPE_LABEL = {", "};", true) + "};";
const getSelectedTypesSection = sliceBetween("function getSelectedTypes() {", "\n}", true) + "\n}";
const getQuizCountSection = sliceBetween("function getQuizCount() {", "\n}", true) + "\n}";
const getPedagogySection = sliceBetween("function getPedagogy() {", "\n}", true) + "\n}";
const selectedTypesListSection = sliceBetween("function selectedTypesList() {", "\n}", true) + "\n}";
const detectTitleSection = sliceBetween("function detectPanoptoTitle() {", "\n}", true) + "\n}";
const panoptoTitleSection = sliceBetween("const panoptoTitle =", ";", true) + ";";
const slugifySection = sliceBetween("function slugify(", "\n}", true) + "\n}";
const panoptoBlockSection = sliceBetween("const PANOPTO_BLOCK = `", "`;", true) + "`;";
const buildQuizSection = sliceBetween("function buildQuizPrompt() {", "\n}", true) + "\n}";

const logicScript = [
  pedSection,
  stateSection,
  questionTypesSection,
  typeLabelSection,
  getSelectedTypesSection,
  getQuizCountSection,
  getPedagogySection,
  selectedTypesListSection,
  detectTitleSection,
  panoptoTitleSection,
  slugifySection,
  panoptoBlockSection,
  buildQuizSection
]
  .join("\n\n")
  .replace(/\u2018|\u2019/g, "'")
  .replace(/\u201C|\u201D/g, '"')
  .replace(/\u2013|\u2014/g, "-")
  .replace(/\uFFFD/g, "'")
  .replace(/[^\x00-\x7F]/g, " ");

const noop = () => {};

const documentStub = {
  readyState: "complete",
  addEventListener: noop,
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  title: "",
  body: { appendChild: noop },
  createElement: () => ({ style: {}, appendChild: noop })
};

const sandbox = {
  console,
  document: documentStub,
  window: undefined,
  navigator: { language: "en-GB" },
  setTimeout: noop,
  clearTimeout: noop,
  setInterval: noop,
  clearInterval: noop
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

vm.createContext(sandbox);
try {
  vm.runInContext(logicScript, sandbox, { filename: "index.html" });
} catch (err) {
  console.error("Sanitized script preview:\n", logicScript.slice(0, 400));
  const pos = typeof err.pos === "number" ? err.pos : 0;
  const excerptStart = Math.max(0, pos - 120);
  const excerptEnd = Math.min(logicScript.length, pos + 120);
  const excerpt = logicScript.slice(excerptStart, excerptEnd);
  console.error("Failed to evaluate quiz builder script:", err.message);
  console.error("Excerpt around error:\n", excerpt);
  console.error(
    "Char codes:",
    excerpt
      .split("")
      .map(ch => ch.charCodeAt(0))
      .join(",")
  );
  console.error(err.stack);
  process.exit(1);
}

// Extract state and buildQuizPrompt from the VM context
let quizState;
let buildQuizPrompt;
try {
  quizState = vm.runInContext("state", sandbox);
  buildQuizPrompt = vm.runInContext("buildQuizPrompt", sandbox);
} catch (e) {
  console.error("Failed to extract state or buildQuizPrompt:", e.message);
  console.log("Available in sandbox:", Object.keys(sandbox));
  throw e;
}

if (!quizState) {
  throw new Error("state is not available in sandbox");
}

if (typeof buildQuizPrompt !== "function") {
  throw new Error("buildQuizPrompt is not available");
}

function runCase(pedagogy, types, count) {
  quizState.pedagogy = pedagogy;
  quizState.questionTypes = types.slice();
  quizState.quizCount = count;
  const prompt = buildQuizPrompt();
  console.log("\n=== CASE ===");
  console.log("Pedagogy:", pedagogy);
  console.log("Types:", types);
  console.log("Count:", count);
  console.log("--- CHECKING FOR KEY SECTIONS ---");
  const lines = prompt.split("\n");
  const typeSpecificLine = lines.findIndex(l => l.includes("TYPE-SPECIFIC"));
  const xmlEscapeLine = lines.findIndex(l => l.includes("XML ESCAPE"));
  const validationLine = lines.findIndex(l => l.includes("VALIDATION:"));
  console.log("✓ TYPE-SPECIFIC section at line:", typeSpecificLine > -1 ? typeSpecificLine : "NOT FOUND");
  console.log("✓ XML ESCAPE section at line:", xmlEscapeLine > -1 ? xmlEscapeLine : "NOT FOUND");
  console.log("✓ VALIDATION section at line:", validationLine > -1 ? validationLine : "NOT FOUND");
  console.log("✓ Total prompt length:", prompt.length, "characters");
  console.log("✓ Under 8000 char limit:", prompt.length < 8000 ? "YES ✓" : "NO ✗");
}

runCase("Concept Check (Retrieval)", ["multiple_choice_question"], 2);
runCase(
  "Case/Scenario-Based",
  ["multiple_choice_question", "multiple_answers_question", "true_false_question"],
  4
);
runCase(
  "Worked Examples (Scaffolded)",
  ["short_answer_question", "essay_question", "numerical_question"],
  5
);

// Test with ALL 6 question types (user reported this exceeds 8000 chars)
runCase(
  "Worked Examples (Scaffolded)",
  [
    "multiple_choice_question",
    "multiple_answers_question",
    "true_false_question",
    "short_answer_question",
    "essay_question",
    "numerical_question"
  ],
  3
);
