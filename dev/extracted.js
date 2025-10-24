// Pedagogy presets (QUB-aligned)
const PEDAGOGY = {
  "Concept Check (Retrieval)": {
    brief: "Quick checks of core ideas. Tight stems, one clearly best answer, and distractors based on likely misunderstandings.",
    inject: [
      "Use retrieval-practice style questions that check essential concepts from the lecture.",
      "Distractors must reflect plausible misunderstandings taken from the lecture wording only.",
      "Brief feedback explains the correct idea and points to a timestamp if detectable."
    ]
  },
  "Worked Examples (Scaffolded)": {
    brief: "Step-by-step problem solving with hints that fade. Great for methods and processes.",
    inject: [
      "Prefer worked-example prompts with ordered steps.",
      "Add a short 'why this step' note; in detailed feedback include 'common slip' guidance."
    ]
  },
  "Case/Scenario-Based": {
    brief: "Apply the lecture ideas to realistic situations; one answer is most defensible from the material.",
    inject: [
      "Frame items as short scenarios derived strictly from lecture captions/slides.",
      "Provide one best answer; others can be reasonable but less supported."
    ]
  },
  "Debate / Critical Analysis": {
    brief: "Compare viewpoints; justify the preferred answer with evidence from the lecture.",
    inject: [
      "Pose contrastive options; mark the one most defensible by the lecture evidence.",
      "Feedback references the relevant slide/timestamp where possible."
    ]
  },
  "Metacognitive Reflection": {
    brief: "Students reflect on process, limits, and next steps. Good as SA/Essay.",
    inject: [
      "Include prompts that ask students to explain approach and next steps tied to outcomes.",
      "Prefer short-answer or essay for depth where MC is weak."
    ]
  },
  "Accessibility-First (UDL)": {
    brief: "Plain UK English, inclusive phrasing, and multiple means of representation.",
    inject: [
      "Ensure each item stands alone without images; suggest alt text when PDF is generated.",
      "Avoid idioms and culturally specific references."
    ]
  }
};



let state = {
  workflow: 'help',
  pedagogy: 'Concept Check (Retrieval)',
  quizTitle: '',
  quizLang: 'en-GB',
  quizCount: 3,
  quizFeedback: 'detailed',
  questionTypes: ['multiple_choice_question'],
  notesInput: '',
  studyFormat: 'word'
};



const QUESTION_TYPES = [
  { id: 'multiple_choice_question', label: 'Multiple Choice' },
  { id: 'multiple_answers_question', label: 'Multiple Answers' },
  { id: 'true_false_question', label: 'True/False' },
  { id: 'short_answer_question', label: 'Short Answer' },
  { id: 'essay_question', label: 'Essay' },
  { id: 'numerical_question', label: 'Numerical' }
];



const TYPE_LABEL = {
  multiple_choice_question: 'Multiple Choice',
  multiple_answers_question: 'Multiple Answers',
  true_false_question: 'True/False',
  short_answer_question: 'Short Answer',
  essay_question: 'Essay',
  numerical_question: 'Numerical'
};



function getSelectedTypes() {
  const arr = Array.isArray(state.questionTypes) ? state.questionTypes.filter(Boolean) : [];
  return arr.length ? arr : ['multiple_choice_question'];
}



function getQuizCount() {
  let n = parseInt(state.quizCount, 10);
  if (Number.isNaN(n)) n = 3;
  if (n < 1) n = 1;
  if (n > 12) n = 12;
  return n;
}



function getPedagogy() {
  return state.pedagogy || 'Concept Check (Retrieval)';
}



function selectedTypesList() {
  return getSelectedTypes().map(t => TYPE_LABEL[t] || t).join(', ');
}



function detectPanoptoTitle() {
  const og = document.querySelector('meta[property="og:title"]')?.content?.trim();
  const data = document.querySelector('[data-role="session-title"], .session-title, .video-title')?.textContent?.trim();
  const doc = document.title?.trim();
  return og || data || doc || '';
}



const panoptoTitle = detectPanoptoTitle();



function slugify(s) {
  const a = (s || '').normalize('NFKD').replace(/[^\x00-\x7F]/g, '');
  return (a.replace(/[^A-Za-z0-9]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '') || 'Lecture_Quiz');
}



const PANOPTO_BLOCK = `SOURCE PREPARATION
1) Confirm this is a Panopto Watch page (not the Canvas embed).
2) Open Captions/Transcript and Contents/Slides panels; expand any collapsed sections.
3) Scroll the transcript to the very bottom once so every caption loads.
4) Wait until no new lines appear, then read the DOM for captions + slides only (no external sources).

TITLE EXTRACTION (MANDATORY): Extract real video title from <meta property="og:title">, [data-role="session-title"], .session-title, or document.title. Use the real title (e.g., "Week 5: Cell Division") — never "Lecture Quiz" or placeholders.

FAIL-CLOSED: If the combined captions/slides corpus < 300 words after dedupe, return exactly:
  "INSUFFICIENT_PAGE_CONTENT — Expand captions & slides, scroll transcript fully, then retry."
`;



function buildQuizPrompt() {
  const title = panoptoTitle || 'Lecture Quiz';
  const slug = slugify(title);
  const count = getQuizCount();
  const types = getSelectedTypes();
  const target = types.length * count;
  const pedagogyKey = getPedagogy();
  const ped = PEDAGOGY[pedagogyKey] || PEDAGOGY["Concept Check (Retrieval)"];
  const pedBlock = ped.inject.map(l => `- ${l}`).join('\n');
  const typesList = selectedTypesList();
  const dynamicBlock = [
    `QUESTIONS PER TYPE: Generate exactly ${count} question(s) for each selected type.`,
    `SELECTED QUESTION TYPES: ${typesList}.`,
    `ADAPT TO PRESET: Make stems, distractors and feedback reflect the selected pedagogy ("${pedagogyKey}").`
  ].join('\n');
  
  let tfNum = '';
  if (types.includes('true_false_question')) tfNum += '\nTF: <response_lid> with 2 labels: True/False.';
  if (types.includes('numerical_question')) tfNum += '\nNUM: <response_num> + tolerance.';
  
  return `SYSTEM: Return EXACTLY 2 files: (1) ${slug}_quiz_qti.zip, (2) ${slug}_quiz.pdf
Use ONLY THIS Panopto page. Language=${state.quizLang}. Do NOT ask questions.
${PANOPTO_BLOCK}
PEDAGOGY: ${pedBlock}

HE STANDARDS: Clear stems testing outcomes (not trivia); plausible distractors from lecture; meaningful feedback explaining WHY with timestamps; mix Bloom levels; university-level precision.
${dynamicBlock}

Q TYPES: ${types.join(', ')} | ${count} per type | TARGET=${target} exactly | Rewrite invalid as essay${tfNum}

QTI ZIP - ${slug}_quiz_qti.zip:
imsmanifest.xml:
<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="man1" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1">
  <resources><resource identifier="res1" type="imsqti_xmlv1p2" href="assessment.xml"><file href="assessment.xml"/></resource></resources>
</manifest>

assessment.xml:
<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2">
  <assessment ident="asmt1" title="[ACTUAL_VIDEO_TITLE]"><section ident="root_section"><!-- ${target} items --></section></assessment>
</questestinterop>

MC ITEM:
<item ident="q1" title="Q1">
<itemmetadata><qtimetadata>
<qtimetadatafield><fieldlabel>question_type</fieldlabel><fieldentry>multiple_choice_question</fieldentry></qtimetadatafield>
<qtimetadatafield><fieldlabel>points_possible</fieldlabel><fieldentry>1</fieldentry></qtimetadatafield>
</qtimetadata></itemmetadata>
<presentation><material><mattext texttype="text/html">STEM</mattext></material>
<response_lid ident="response1" rcardinality="Single"><render_choice shuffle="Yes">
<response_label ident="A"><material><mattext texttype="text/html">OPT_A</mattext></material></response_label>
<response_label ident="B"><material><mattext texttype="text/html">OPT_B</mattext></material></response_label>
<response_label ident="C"><material><mattext texttype="text/html">OPT_C</mattext></material></response_label>
<response_label ident="D"><material><mattext texttype="text/html">OPT_D</mattext></material></response_label>
</render_choice></response_lid></presentation>
<resprocessing><outcomes><decvar varname="SCORE" vartype="Decimal" minvalue="0" maxvalue="100"/></outcomes>
<respcondition continue="No"><conditionvar><varequal respident="response1">CORRECT</varequal></conditionvar>
<setvar varname="SCORE" action="Set">100</setvar>${state.quizFeedback !== 'off' ? '<displayfeedback feedbacktype="Response" linkrefid="fb"/>' : ''}</respcondition></resprocessing>${state.quizFeedback !== 'off' ? '<itemfeedback ident="fb"><material><mattext texttype="text/html">WHY correct [mm:ss]</mattext></material></itemfeedback>' : ''}
</item>

GUARDS: UTF-8; escape XML chars; mattext<=1200; exactly ${target} items; all have metadata

PDF: A4. Title=[ACTUAL_VIDEO_TITLE], TOC, then 1Q/page: number, stem, options, answer${state.quizFeedback !== 'off' ? ', feedback+timestamp' : ''}

VALIDATE: (1) ?%?300w or "INSUFFICIENT_PAGE_CONTENT", (2) Real title extracted, (3) ${target} items, (4) Valid XML, (5) All metadata, (6) HE quality (clear/defensible/plausible/meaningful), (7) Mixed Bloom, (8) Expert-approvable

OUTPUT: [ACTUAL_TITLE_SLUG]_quiz_qti.zip + [ACTUAL_TITLE_SLUG]_quiz.pdf using REAL title from og:title/[data-role="session-title"]/h1/document.title??"NOT "Lecture_Quiz" placeholder.`;
}\n