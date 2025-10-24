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


