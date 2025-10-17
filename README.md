# Panopto Canvas Prompt Builder

A clean, intuitive web application for generating AI-powered prompts to create Canvas quizzes and study materials from Panopto lectures.

## ✨ Key Features

**Simple by Default, Powerful When You Need It**
- 🎯 One-click prompt generation with smart presets
- 🎨 Clean, Apple/Google-inspired design
- 📱 Mobile-friendly and responsive
- ♿ Fully accessible (WCAG 2.2 AA)
- 🌍 Multilingual support (UK English default)
- 🚀 Zero setup - just open and use

## 🚀 Quick Start

### 1. Open the App
Simply open `index.html` in any modern browser.

### 2. Choose Your Workflow
Pick one of three workflows at the top:
- **Quiz** - Generate Canvas QTI quizzes
- **Study Guide** - Create flashcards and study materials
- **From Notes** - Transform lecturer notes into resources

### 3. Select a Preset
Click a subject preset:
- 🔬 **STEM** - Concept checks & numericals
- 🏥 **Clinical** - Cases & applications
- 💼 **Business** - Scenarios & analysis
- 📖 **Humanities** - Essays & critical thinking

### 4. Copy & Go!
Click the big blue **"📋 Copy Prompt to Clipboard"** button and paste into Copilot in your Panopto browser window.

## 🎛️ Need More Control?

Click **"Customise Options ▼"** to reveal advanced settings:
- Lecture title
- Language selection
- Question types
- Questions per type
- Feedback levels
- And more...

## 📖 The Three Workflows

### Quiz Workflow
Generate Canvas-compatible QTI quiz packages:
- **Output:** QTI ZIP file + companion PDF
- **Question Types:** Multiple Choice, Multiple Answers, True/False, Short Answer, Essay, Numerical, Matching
- **Features:** Detailed feedback, one-question-per-page PDFs, UK English defaults

### Study Guide Workflow
Create comprehensive study materials:
- **Formats:** PDF flashcards, PowerPoint slides, or complete study packs
- **Content:** Flashcards grouped by topic, one-page exam cribs, timestamps from videos
- **Features:** Configurable density (terms only, +definitions, +examples)

### From Notes Workflow
Transform lecturer notes into teaching materials:
- **Outputs:** Quizzes, flashcards, or worksheets
- **Source:** Paste your notes directly
- **Features:** Maintains source breadcrumbs, preserves structure

## 🎓 Canvas Integration

### Method 1: Direct Upload
1. Upload `index.html` to Canvas Files
2. Get the published URL
3. Share with staff or embed in a page:
```html
<iframe src="YOUR_FILE_URL" width="100%" height="900px" frameborder="0"></iframe>
```

### Method 2: External Hosting
Host on your institution's web server and link from Canvas navigation.

### Method 3: LTI Integration
Contact your Canvas administrator to add as an external tool.

## 💡 Design Philosophy

**Progressive Disclosure**
- Start simple with sensible defaults
- Reveal complexity only when needed
- One-click for common tasks
- Deep customisation for power users

**Accessibility First**
- Clean visual hierarchy
- High contrast colours
- Keyboard navigation
- Screen reader friendly
- Semantic HTML

**Inspired by the Best**
- Apple's tutorial pages: clarity and elegance
- Google Education: simplicity and ease
- Modern web standards: fast and responsive

## 🛠️ Technical Details

### Single-File Architecture
- **Zero dependencies** - Pure HTML, CSS, and JavaScript
- **< 50KB** - Loads instantly
- **Offline-ready** - Works without internet once loaded
- **Privacy-first** - No data sent anywhere; everything stays in your browser

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Standards
- WCAG 2.2 AA compliant
- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Focus indicators

## 📋 What The Prompts Do

Your generated prompts instruct Copilot to:

**For Quizzes:**
- Extract content from Panopto captions, slides, and uploaded notes (no external data)
- Create valid Canvas QTI XML packages
- Generate companion PDFs with one question per page
- Include detailed or brief feedback as specified
- Apply pedagogical best practices
- Ensure exact question counts (no missing items)

**For Study Guides:**
- Create flashcards grouped by topic
- Include timestamps from video where detectable
- Generate one-page exam crib sheets
- Output as PDF (A4) or PowerPoint (16:9)
- Maintain accessibility (alt text, clear typography)

**For Notes-Based Content:**
- Transform lecturer notes into structured materials
- Create quizzes, flashcards, or practice worksheets
- Preserve source references
- Apply consistent formatting

## 🌍 UK English & Inclusive Language

The app follows Queen's University Belfast guidance:
- UK English spelling throughout
- "Student Wellbeing and Accessible Learning Support" terminology
- Inclusive, person-first language
- "Student Support Agreement (SSA)" nomenclature

## 🎨 Customisation

### Change Colours
Edit the CSS `:root` variables:
```css
:root {
  --primary: #007aff;
  --success: #34c759;
  --bg: #ffffff;
  --text: #1d1d1f;
}
```

### Add New Presets
Edit the `PRESETS` object in the JavaScript:
```javascript
PRESETS.mypreset = {
  questionTypes: ['multiple_choice_question', 'essay_question'],
  quizCount: 3,
  quizFeedback: 'detailed'
};
```

## 📊 Quality Assurance

Every prompt includes compliance checks:
- ✅ Exact target question counts
- ✅ Valid Canvas question types only
- ✅ Proper XML structure and escaping
- ✅ Required metadata fields
- ✅ One question per page in PDFs
- ✅ UTF-8 encoding
- ✅ No external data sources

## 🚫 What This App Doesn't Do

- ❌ **No AI processing** - The app just builds prompts; Copilot does the AI work
- ❌ **No data storage** - Nothing is saved or sent anywhere
- ❌ **No user accounts** - No sign-in required
- ❌ **No analytics** - Your usage is private

## 💬 Support

### Common Questions

**Q: Where does the AI processing happen?**
A: In Copilot when you paste the prompt. This app only generates the prompt text.

**Q: Can I save my settings?**
A: Not yet, but you can bookmark the page and use the same preset each time. Advanced users can add query-string saving in the future.

**Q: Does this work offline?**
A: Yes! Once loaded, the app works offline. However, you'll need internet to use Copilot.

**Q: Can I edit the generated quiz after creation?**
A: Yes! Import the QTI ZIP into Canvas, then edit questions in Canvas's quiz editor.

## 🎯 Best Practices

1. **Start with a preset** - They're tuned for different disciplines
2. **Keep lecture titles clear** - Helps with file naming
3. **Test with short videos first** - Verify the output before scaling up
4. **Use the preview** - Check your prompt before copying
5. **Keep prompts under 7500 characters** - Yellow warning at 7500, red at 8000

## 📦 Files Included

- `index.html` - The complete app (self-contained)
- `README.md` - This documentation

## 📄 Licence

Created for Queen's University Belfast staff and students.

---

**Version:** 2.0.0  
**Last Updated:** October 2025  
**Designed for educators, by educators** ❤️

### What's New in v2.0

- 🎨 Complete redesign with clean, modern UI
- 🎯 Progressive disclosure - simple by default
- 📱 Improved mobile experience
- ♿ Enhanced accessibility
- 🚀 Faster, more intuitive workflow
- 💡 One-click prompt generation
