# Quick Start Guide - QUB Prompt Builder

## 🎓 What is this tool?

The Queen's University Belfast Prompt Builder helps you create high-quality Canvas quizzes and study materials from your Panopto lecture recordings using AI (Copilot). It's pedagogy-first, ensuring your assessment aligns with Beyond Blended Learning principles.

---

## 🚀 Getting Started (3 Steps)

### 1. Open Your Panopto Video
- Navigate to your Panopto video in your browser
- Keep this tab open

### 2. Configure Your Quiz
- Choose a **Pedagogy Preset** that matches your learning goals:
  - **Concept Check** - Quick retrieval practice
  - **Worked Examples** - Step-by-step problem solving
  - **Case/Scenario** - Apply ideas to realistic situations
  - **Debate/Critical Analysis** - Compare viewpoints
  - **Metacognitive Reflection** - Process and next steps
  - **Accessibility-First** - UDL-compliant, plain English

- Adjust settings:
  - **Title**: Auto-detected from Panopto or enter custom
  - **Language**: Default is English (UK)
  - **Questions per type**: How many of each question
  - **Feedback level**: Brief (default) or Detailed
  - **Question Types**: Start with Multiple Choice (MC), add others if needed

### 3. Generate & Import
- Click **"Copy Prompt to Clipboard"**
- Open **Copilot sidebar** in your Panopto tab
- Paste the prompt
- Copilot will generate:
  - ✅ A Canvas QTI `.zip` file
  - ✅ A lecturer PDF with answers

---

## 📥 Importing to Canvas

1. In Canvas, go to your course
2. Navigate to: **Settings → Import Course Content**
3. Select **"QTI .zip file"** as Content Type
4. Choose your downloaded `.zip` file
5. Click **Import**
6. Find your quiz under **Quizzes** (or **Assignments** for New Quizzes)
7. Review and publish

**Note**: If you see an "Item Bank" instead of a quiz, Canvas auto-rewrote some items. Just open the bank and create a quiz from those items.

---

## 🎯 Pedagogy Presets Explained

### Concept Check (Retrieval)
**Best for**: Checking understanding of core concepts  
**Question style**: Clear stems, one best answer, misconception-based distractors  
**Example use**: Post-lecture formative quiz, revision checks

### Worked Examples (Scaffolded)
**Best for**: Problem-solving, methods, processes  
**Question style**: Step-by-step with "why this step" notes  
**Example use**: Maths, science, lab procedures

### Case/Scenario-Based
**Best for**: Application, clinical reasoning, real-world situations  
**Question style**: Short scenarios with defensible answers  
**Example use**: Medicine, nursing, business cases

### Debate / Critical Analysis
**Best for**: Evaluating arguments, comparing viewpoints  
**Question style**: Contrastive options with evidence-based justification  
**Example use**: Social sciences, humanities, policy analysis

### Metacognitive Reflection
**Best for**: Process awareness, learning strategies  
**Question style**: Short answer or essay prompts about approach  
**Example use**: Capstone assessments, reflective practice

### Accessibility-First (UDL)
**Best for**: Inclusive assessment for all learners  
**Question style**: Plain UK English, no images required, multiple representations  
**Example use**: Any context requiring WCAG compliance or Student Support Agreements

---

## 📚 Study Guide Workflow

1. Switch to **"Study Guide"** tab
2. Choose format:
   - **PDF Flashcards** - Print-ready cards
   - **PowerPoint** - Editable slides (uses QUB master template)
   - **Complete Pack** - Cards + summary + crib sheet

3. Configure options:
   - Content density (key terms, definitions, examples)
   - Include timestamps from video
   - Add 1-page exam crib sheet

4. Copy prompt, paste into Copilot with Panopto video open
5. Download your QUB-branded study materials

---

## 🎨 QUB Branding

All outputs automatically include:
- ✅ Queen's University Belfast logo
- ✅ QUB red accent colour (#E0001B)
- ✅ Professional master template (for PPTX)
- ✅ Consistent institutional branding

---

## 💡 Pro Tips

### For Best Results:
- **Use clear Panopto titles** - They auto-populate the quiz name
- **Start with MC only** - Add other types as needed
- **Choose Brief feedback** - Good balance of detail and speed
- **Match pedagogy to outcomes** - Align with your module goals

### Common Issues:
- **"Too long" warning**: Reduce question types or questions per type
- **No title detected**: Switch to "Type a custom title"
- **Item bank instead of quiz**: Normal for some rewrites—just build quiz from bank
- **Missing branding in study guide**: Ensure Copilot has access to template files

### Canvas-Specific Notes:
- **New Quizzes**: Appears under Assignments
- **Classic Quizzes**: Appears under Quizzes
- **Question banks**: Canvas safety feature for invalid items
- **Partial credit**: Available for Multiple Answers questions

---

## 🔧 Technical Details

### Supported Question Types:
- ✅ Multiple Choice (MC) - Single best answer
- ✅ Multiple Answers (MA) - Select all that apply
- ✅ True/False (TF) - Binary choice
- ✅ Short Answer (SA) - Exact text matching
- ✅ Essay - Unscored text response
- ✅ Numerical - Number with tolerance
- ✅ Matching - Pair items (auto-rewrites if invalid)

### Guardrails:
- **Count lock**: Produces exactly the number of items requested
- **Strict validation**: Falls back to Essay/SA if item can't be validated
- **XML escaping**: Ensures Canvas compatibility
- **Character limit**: 8,000 chars (monitored with progress bar)
- **No external data**: Uses only your Panopto captions/slides

### Beyond Blended Alignment:
All pedagogy presets reference:
- **Four Aspects**: Time, Place, Materials, Groups
- **Six Pillars**: Place, Platform, Pace, Blend, Flex, Support

---

## 📖 Further Resources

### QUB Documentation:
- Beyond Blended Guide
- Four Aspects of Designing Beyond Blended Learning
- Canvas Support (canvas.qub.ac.uk/support)

### Pedagogy Support:
- Student Wellbeing and Accessible Learning Support
- Module Design Sprint resources
- Curriculum Design Workshops

### Technical Support:
- Panopto Help (panopto.qub.ac.uk/help)
- Canvas Guides (community.canvaslms.com/guides)
- Academic Practice & eLearning team

---

## ✅ Checklist for First-Time Users

Before you start:
- [ ] Have a Panopto video recorded with captions/transcript
- [ ] Know your Canvas course site
- [ ] Understand your learning outcomes
- [ ] Choose appropriate pedagogy approach

After generating:
- [ ] Downloaded QTI .zip file
- [ ] Downloaded lecturer PDF
- [ ] Imported to Canvas successfully
- [ ] Reviewed all questions and answers
- [ ] Set appropriate points and time limits
- [ ] Configured availability dates
- [ ] Published quiz (or saved as draft)

---

## 🆘 Need Help?

**Tool Issues**: Check that:
1. You're using a supported browser (Chrome, Edge, Safari)
2. Copilot sidebar is accessible in Panopto
3. You've selected at least one question type
4. Character count is under 8,000

**Canvas Import Issues**:
1. Ensure you selected "QTI .zip file" (not "Canvas Cartridge")
2. Check import log for any errors
3. Look in both Quizzes and Item Banks
4. Contact Canvas support if issues persist

**Pedagogy Questions**:
- Academic Practice & eLearning team
- Module design consultations
- Peer pedagogy discussions

---

## 🎉 You're Ready!

Open your Panopto video, configure your quiz, copy the prompt, and let Copilot do the heavy lifting. Your Canvas-ready, QUB-branded assessment is just three steps away.

**Happy Teaching! 🎓**

