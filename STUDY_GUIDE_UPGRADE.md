# Study Guide & From Notes Upgrade - Pedagogy-First Resources

## Overview

Transformed the Study Guide and From Notes workflows from simple flashcard generators into comprehensive, pedagogy-first study resource creators with fail-closed validation, structured output, and precise specifications.

---

## Key Changes

### **A. Enhanced UI Controls**

#### **Study Guide Tab**
1. **Pedagogy Preset Dropdown** - Same 6 options as Quiz tab
2. **Output Format Radio** - PDF (A4) or PPTX (16:9)
3. **Depth Dropdown** with clear expectations:
   - Quick (8–10 pages) — core concepts + flashcards
   - Standard (15–20) — adds worked examples + problems
   - Deep (25+) — adds concept map, glossary, planner
4. **Components Checklist** (all ON by default):
   - Concept Map
   - Glossary
   - Worked Examples
   - Problem Set
   - Case Vignettes
   - Self-Check Quiz
   - Reflection Prompts
   - Study Planner

#### **From Notes Tab**
1. **Notes Input** - Textarea for pasting lecture notes (min 400 words)
2. **Pedagogy Preset** - Same 6 options
3. **Output Format** - PDF or PPTX
4. **Simplified structure** - Fixed set of components optimized for notes

---

### **B. Prompt Structure**

Both workflows now generate ultra-specific prompts with:

#### **Fail-Closed Validation**
```
MINIMUM MATERIAL CHECK (FAIL-CLOSED)
If combined usable text < 500 words after dedupe: STOP and return EXACTLY:
INSUFFICIENT_CONTENT — Ensure captions & contents panels are open and loaded.
```

#### **Structured Output (15 Sections)**
1. Title page
2. Executive summary (≤200 words)
3. Learning outcomes (3–6; Bloom-tagged)
4. Key concepts (linked to flashcard IDs)
5. Concept map (textual outline)
6. Glossary (12–30 terms, plain English)
7. Worked examples (2–4 with step-by-step + "common slips")
8. Problem set (6–10 questions + solutions + hints)
9. Case vignettes (2–3 scenarios + discussion prompts)
10. **Flashcards (20–40 cards)** with:
    - Card ID (FC-01, FC-02...)
    - Question / Answer
    - Difficulty tag (Intro / Apply / Extend)
    - Source breadcrumb (slide no. / timestamp)
    - **Appendix A: CSV-ready table** for Anki import
11. Self-check quiz (8–12 printable items + answer key)
12. Reflection & metacognition prompts
13. Study planner (2-week spaced retrieval schedule)
14. Further support (rewatch timestamps)
15. Accessibility checklist

---

### **C. Pedagogy Integration**

Every prompt now includes pedagogy notes from the selected preset:

**Example (Concept Check - Retrieval)**:
```
PEDAGOGY NOTES
• Use retrieval-practice style questions that check essential concepts from the lecture.
• Distractors must reflect plausible misunderstandings taken from the lecture wording only.
• Brief feedback explains the correct idea and points to a timestamp if detectable.
```

These notes shape the entire output — questions, examples, cases, reflections.

---

### **D. Depth Profiles**

#### **Quick (8–10 pages)**
- Concise sections
- 20–25 flashcards
- Minimal worked examples (1–2)
- 4–6 problems
- No concept map or planner

#### **Standard (15–20 pages)** ← Default
- Fuller worked examples (2–4)
- 20–30 flashcards
- 6–10 problems with hints + solutions
- Includes all core components

#### **Deep (25+ pages)**
- Full concept map
- Extended glossary (20–30 terms)
- 30–40 flashcards
- Study planner with spaced retrieval
- Reflection prompts
- All optional components included

---

### **E. Flashcard Structure**

All flashcards follow this precise format:

**In-Document Format**:
```
**FC-01** [Intro]
Q: What is Newton's Second Law?
A: F = ma (Force equals mass times acceleration)
Example: A 2kg book pushed with 10N force accelerates at 5 m/s².
Source: Slide 12 / See around 15:32
```

**Appendix A: CSV Table**:
```
| ID    | Question              | Answer        | Topic          | Difficulty | Source    |
|-------|-----------------------|---------------|----------------|------------|-----------|
| FC-01 | What is Newton's...   | F = ma        | Mechanics      | Intro      | Slide 12  |
| FC-02 | Calculate force...    | 20N           | Force Calcs    | Apply      | 18:45     |
```

**Why CSV?**: Direct import to Anki, Quizlet, or spreadsheet tools.

---

### **F. QUB Branding**

#### **Color Palette**
```css
--qub-red: #E0001B  (primary accents)
--ink: #E7F0FF       (backgrounds)
--bg: #0B0F14        (dark mode option)
```

#### **Typography**
- System fonts (Inter, -apple-system, SF)
- WCAG AA contrast ratios
- Clear headings (H1/H2 structure)
- No images-of-text

#### **Accessibility**
Every output includes an **Accessibility Checklist**:
- Proper heading hierarchy
- Alt-text guidance ("describe function, not decoration")
- Meaningful link text
- Color contrast compliance
- No reliance on color alone

---

### **G. Source Acquisition**

#### **Study Guide (Panopto)**
```
SOURCE ACQUISITION (MANDATORY)
Read DOM text in priority:
  1) Full Captions/Transcript (scroll if needed)
  2) Contents/Slides titles and slide text
  3) Visible notes/doc panel
Deduplicate near-identical lines and remove timestamps/artefacts.
```

#### **From Notes (Pasted Text)**
```
INPUT NORMALISATION
Parse headings and bullets from notes;
keep order; deduplicate repeated lines;
remove stray formatting.

NOTES PROVIDED
[User's pasted notes here]
```

---

### **H. Example Outputs**

#### **Study Guide: Standard Depth + All Components**

```
Lecture: Introduction to Machine Learning
Date: January 2025

EXECUTIVE SUMMARY (172 words)
This study pack covers supervised learning fundamentals...

LEARNING OUTCOMES
1. Define supervised learning (Remember - Bloom)
2. Apply linear regression to datasets (Apply - Bloom)
3. Evaluate model performance using metrics (Analyze - Bloom)
...

KEY CONCEPTS
• Supervised Learning — Algorithm learns from labeled data →FC-03
• Feature Engineering — Transform raw data into predictive vars →FC-07
...

CONCEPT MAP
Machine Learning
├── Supervised Learning
│   ├── Classification →FC-12
│   └── Regression →FC-18
└── Unsupervised Learning
    └── Clustering →FC-22

GLOSSARY
Overfitting : Model learns noise; poor generalization
Training Set : Data used to fit model parameters
...

WORKED EXAMPLES
Example 1: Linear Regression
Given: dataset with 100 samples...
Step 1: Split data (80/20 train/test)
  Why: Prevents overfitting
  Common slip: Using test data during training
...

PROBLEM SET
1. [Recall] Define the bias-variance tradeoff
   Hint: Think about model complexity
2. [Apply] Calculate MSE for predictions: [2,4,5] vs [2,3,6]
   Hint: MSE = mean((y - ŷ)²)
...

SOLUTIONS
1. Bias-variance: High bias = underfitting...
2. MSE = ((0)² + (1)² + (1)²) / 3 = 0.667

FLASHCARDS
**FC-01** [Intro]
Q: What is supervised learning?
A: Learning from labeled examples to make predictions
Source: Slide 3 / 05:22

**FC-02** [Apply]
Q: Name two supervised learning tasks
A: Classification (categories) and Regression (continuous values)
Source: Slide 5
...

APPENDIX A: Flashcard Export (CSV)
id,question,answer,topic,difficulty,source
FC-01,"What is supervised learning?","Learning from labeled examples",Intro,Intro,05:22
FC-02,"Name two supervised tasks","Classification and Regression",Types,Apply,Slide 5
...

SELF-CHECK QUIZ
1. The process of splitting data into train/test sets is called:
   a) Cross-validation
   b) Data partitioning ✓
   c) Feature scaling
   d) Regularization
   
Answer key: 1-b. Rationale: Partitioning ensures held-out test data...

REFLECTION PROMPTS
What I can do: Explain supervised learning basics
What confuses me: How to choose regularization strength
Next step: Practice implementing linear regression in Python

STUDY PLANNER
Day 1: Review FC-01..10; attempt problems 1–3
Day 3: Review FC-11..20; rewatch 15:00–25:00
Day 7: Self-check quiz; review missed concepts
Day 14: Full practice quiz; review all flashcards

FURTHER SUPPORT
Rewatch spots:
• 05:22 — Supervised learning definition
• 12:15 — Linear regression example
• 18:40 — Overfitting explanation
• 25:30 — Model evaluation metrics
• 32:10 — Summary and next steps

ACCESSIBILITY CHECKLIST
✓ H1/H2 headings used throughout
✓ Flashcard IDs provide clear navigation
✓ No color-only indicators
✓ Contrast ratios meet WCAG AA
✓ All formulas explained in text
```

**File**: `Introduction_to_Machine_Learning_study.pdf` (18 pages)

---

#### **From Notes: Quick Depth**

```
Notes Pack: Week 3 - Cell Biology

EXECUTIVE SUMMARY (85 words)
Quick reference for cell structure and function...

LEARNING OUTCOMES
1. Identify major organelles (Remember)
2. Explain cellular respiration (Understand)
3. Compare plant/animal cells (Analyze)

KEY CONCEPTS
• Mitochondria — Powerhouse; ATP production →FC-02
• Chloroplasts — Photosynthesis; plants only →FC-05
...

WORKED EXAMPLES (if procedures present)
OR
MINI-CASES (if conceptual)
Case: A cell with many mitochondria...
Q1: What does this suggest about energy needs?
Q2: Name two cell types with high mitochondria count

PROBLEM SET
1. Sketch and label a plant cell
2. Explain why red blood cells lack nuclei
3. Calculate ATP yield from glucose oxidation
...

SOLUTIONS
1. [Diagram description: cell wall, chloroplasts...]
2. More room for hemoglobin; shorter lifespan
3. ~38 ATP per glucose (glycolysis + Krebs + ETC)

FLASHCARDS (25 cards)
**FC-01** [Intro]
Q: What is the function of the nucleus?
A: Contains DNA; controls cell activities
...

APPENDIX A: [CSV table]

REFLECTION PROMPTS
What I understand: Basic organelle functions
What to review: Detailed ATP synthesis steps
Next: Draw and label 5 different cell types

ACCESSIBILITY CHECKLIST
[Same as Study Guide]
```

**File**: `Lecture_Notes_Pack.pdf` (9 pages)

---

### **I. Character Count**

#### **Study Guide Prompt**
- **Typical length**: 2,800–3,500 characters
- **With all components**: 3,200–4,000 characters
- **Maximum (deep + all)**: 4,500 characters
- **Well under 8,000 limit**: ✅

#### **From Notes Prompt**
- **Typical length**: 2,200–2,800 characters
- **With notes included**: Variable (notes add to context, not prompt)
- **Base prompt**: <2,500 characters
- **Well under 8,000 limit**: ✅

---

### **J. State Management**

#### **New State Variables**

```javascript
state = {
  // Study Guide
  studyPedagogy: 'Concept Check (Retrieval)',
  sgFormat: 'pdf',  // 'pdf' | 'pptx'
  studyDepth: 'standard',  // 'quick' | 'standard' | 'deep'
  studyComponents: {
    conceptMap: true,
    glossary: true,
    worked: true,
    problems: true,
    cases: true,
    selfcheck: true,
    reflect: true,
    planner: true
  },
  
  // From Notes
  notesPedagogy: 'Concept Check (Retrieval)',
  notesFormat: 'pdf',  // 'pdf' | 'pptx'
  notesInput: ''  // User-pasted notes
}
```

#### **New Constants**

```javascript
const STUDY_COMPONENTS = [
  { id: 'conceptMap', label: 'Concept Map' },
  { id: 'glossary', label: 'Glossary' },
  { id: 'worked', label: 'Worked Examples' },
  { id: 'problems', label: 'Problem Set' },
  { id: 'cases', label: 'Case Vignettes' },
  { id: 'selfcheck', label: 'Self-Check Quiz' },
  { id: 'reflect', label: 'Reflection Prompts' },
  { id: 'planner', label: 'Study Planner' }
];
```

---

### **K. Functions Added/Updated**

1. **`initStudyComponents()`** - Renders component chips
2. **`buildStudyPrompt()`** - Complete rewrite; 45 lines → 70 lines
3. **`buildNotesPrompt()`** - Complete rewrite; 25 lines → 45 lines
4. **Event handlers** - Added for 8 new controls

---

## Benefits

### **For Lecturers**
✅ **Rich resources** generated automatically
✅ **Pedagogy-driven** structure ensures quality
✅ **Fail-closed** prevents empty/useless output
✅ **Customizable depth** for different needs
✅ **QUB-branded** professional appearance

### **For Students**
✅ **Comprehensive study pack** in one file
✅ **Flashcards with IDs** for easy reference
✅ **CSV export** for Anki/Quizlet
✅ **Worked examples** show problem-solving
✅ **Study planner** with spaced retrieval
✅ **Timestamps** for rewatching key moments
✅ **Accessible** design follows WCAG AA

### **For Developers**
✅ **Precise specifications** reduce Copilot errors
✅ **Clear validation rules** catch problems early
✅ **Modular components** easy to customize
✅ **Well-documented** output structure

---

## Testing Checklist

### **Study Guide Tab**

- [ ] Open Panopto video with captions/slides
- [ ] Switch to Study Guide tab
- [ ] Select pedagogy preset → brief updates
- [ ] Change format to PPTX → prompt updates
- [ ] Change depth to Deep → prompt mentions 25+ pages
- [ ] Untick "Concept Map" → section 5 removed from prompt
- [ ] Untick "Planner" → section 13 removed from prompt
- [ ] Copy prompt → character count reasonable (<5,000)
- [ ] Paste into Copilot → generates study pack
- [ ] Open PDF/PPTX → verify 15 sections present
- [ ] Check flashcards → have IDs, difficulty, sources
- [ ] Check Appendix A → CSV table present
- [ ] Check timestamps → "See around [mm:ss]" format

### **From Notes Tab**

- [ ] Switch to From Notes tab
- [ ] Paste 500+ words of notes
- [ ] Select pedagogy preset → brief updates
- [ ] Change format to PPTX → prompt updates
- [ ] Copy prompt → includes pasted notes
- [ ] Paste into Copilot → generates notes pack
- [ ] Open PDF/PPTX → verify 9 sections present
- [ ] Check flashcards → have IDs, CSVtable
- [ ] No timestamps (notes-based, not video-based)

### **Fail-Closed Cases**

- [ ] Study Guide with no captions open → "INSUFFICIENT_CONTENT"
- [ ] From Notes with <400 words → "INSUFFICIENT_CONTENT"
- [ ] Clear error message with next steps

---

## Known Limitations

1. **No file upload yet** - From Notes requires manual paste (future: drag-drop .txt/.docx)
2. **Fixed component list** - Can't add custom sections (by design for consistency)
3. **CSV in appendix only** - Not a separate download (could add button)
4. **Timestamps** - Only available if Panopto page has them
5. **PPTX master template** - Not auto-applied (Copilot limitation)

---

## Future Enhancements

### **Phase 1 (Quick Wins)**
- [ ] File upload for notes (drag-drop .txt, .docx, .pdf)
- [ ] Character counter for notes input
- [ ] "Download CSV" button for flashcards only
- [ ] Preview section for study pack structure

### **Phase 2 (Medium)**
- [ ] Custom component builder
- [ ] Save/load study pack templates
- [ ] Batch generate for multiple videos
- [ ] Export to Notion/Obsidian format

### **Phase 3 (Advanced)**
- [ ] AI-suggested depth based on video length
- [ ] Auto-detect pedagogy from lecture content
- [ ] Integration with Canvas outcomes
- [ ] Analytics on flashcard difficulty distribution

---

## Rollout Strategy

### **Week 1: Soft Launch**
- Share with 5 pilot lecturers
- Focus on Study Guide only
- Gather feedback on:
  - Clarity of component descriptions
  - Usefulness of depth profiles
  - Quality of flashcards
  - Timestamp accuracy

### **Week 2: Iterate**
- Adjust component descriptions
- Refine prompt based on Copilot behavior
- Add missing validation rules
- Document common issues

### **Week 3: Full Launch**
- Enable both Study Guide and From Notes
- Create 5-min tutorial video
- Update Quick Start Guide
- Announce to all academic staff

---

## Documentation Updates

### **Created**
- ✅ `STUDY_GUIDE_UPGRADE.md` - This document

### **Need to Update**
- [ ] `QUICK_START_GUIDE.md` - Add Study Guide workflow
- [ ] `NEXT_STEPS.md` - Add testing instructions
- [ ] Create `FLASHCARD_FORMAT.md` - Detailed spec

---

## Conclusion

The Study Guide and From Notes workflows are now **pedagogy-first, fail-closed, and ultra-specific**. Copilot receives:
- Clear structure (15 numbered sections)
- Precise formatting (flashcard IDs, CSV appendix)
- Validation rules (500/400 word minimums)
- Pedagogy guidance (6 preset approaches)
- Brand compliance (QUB colors, WCAG AA)

**Result**: Rich, professional study resources that students actually use, generated automatically from lecture materials.

---

## Quick Comparison

| Aspect | Before | After |
|--------|--------|-------|
| **Output** | Simple flashcards | 15-section study pack |
| **Flashcards** | Unstructured Q/A | IDs, difficulty, sources, CSV |
| **Validation** | None | 500-word minimum, fail-closed |
| **Pedagogy** | Generic | 6 presets with guidance |
| **Depth** | One-size-fits-all | Quick / Standard / Deep |
| **Components** | Fixed | 8 toggleable sections |
| **Branding** | Generic | QUB colors, accessibility |
| **Timestamps** | Sometimes | Always (when available) |
| **Study tools** | None | Planner, reflection, self-check |
| **Exports** | PDF only | PDF or PPTX + CSV |

**The upgrade transforms a simple tool into a comprehensive, pedagogically-sound study resource generator.** 🎓

