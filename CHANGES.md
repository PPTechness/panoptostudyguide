# Prompt Builder Changes - Pedagogy-First QUB Update

## Summary
Transformed the prompt builder from discipline-based presets to pedagogy-first, QUB Beyond Blended-aligned approach. The visual design remains the same, but the content and functionality have been updated.

## Key Changes

### 1. **Pedagogy Presets (Replaces Discipline Presets)**
   - **Removed**: STEM, Clinical, Business, Humanities presets
   - **Added**: Six pedagogy-based presets aligned with QUB's Beyond Blended Framework:
     - Concept Check (Retrieval)
     - Worked Examples (Scaffolded)
     - Case/Scenario-Based
     - Debate / Critical Analysis
     - Metacognitive Reflection
     - Accessibility-First (UDL)
   - Each preset includes:
     - Brief description displayed under the selector
     - Injection points for prompt generation aligned with Beyond Blended Four Aspects and Six Pillars

### 2. **UI Reorganisation**
   - **Customise section moved to top** (now appears before the main action button)
   - **Customise section opens by default** for easier access
   - Removed the "Choose your subject" cards section

### 3. **Title Source Options**
   - Added radio buttons: "Use Panopto title" vs "Enter custom"
   - Default: "Use Panopto title" (checked)
   - When Panopto option selected, the text field is disabled
   - Automatically detects title from:
     1. `og:title` meta tag
     2. `[data-panopto-title]` element
     3. `document.title`

### 4. **Tooltips (Hover Help)**
   - All form controls now have `title` attributes with helpful descriptions:
     - **Lecture Title**: "Displayed in filenames and quiz name. You can use the Panopto video title."
     - **Language**: "Output language and terminology style. Default: English (UK)."
     - **Questions per type**: "How many items to generate for each selected question type."
     - **Feedback level**: Detailed descriptions for Off/Brief/Detailed options
     - **Question Types**: "Start with Multiple Choice; add more if needed. Canvas QTI supported types only."
     - **Copy Prompt**: "Copy the prompt to clipboard"

### 5. **Updated Defaults**
   - **Question Types**: Default is now **Multiple Choice only** (was multiple types)
   - **Feedback Level**: Default is now **Brief** (was Detailed)
   - **Language**: Remains **English (UK)**
   - **Questions per type**: Remains **3**

### 6. **Preview Section Enhancements**
   - **Title changed** to "Your Copilot Prompt"
   - **Character counter** now shows "chars (aim < 8000)"
   - **Helper message added** above preview:
     > "✅ Paste this into your **Copilot sidebar** with your **Panopto video open**. Copilot will read the captions/slides and create your quiz or study pack."
   - **Copy button added at top** of preview (in addition to the main action button)
   - **Placeholder updated**: "Customise your options above and your prompt will appear here"

### 7. **Prompt Generation Updates**
   - **Pedagogy injection**: Selected pedagogy preset's guidance is now injected into the prompt
   - **Beyond Blended alignment**: Prompt includes reference to Four Aspects (Time, Place, Materials, Groups) and Six Pillars (Place, Platform, Pace, Blend, Flex, Support)
   - **Special rules**: Automatic injection of TF and Numerical question structure rules when those types are selected
   - **Strict rewrite guardrail**: Added fallback instructions for when question types can't be created from material
   - **PDF feedback inclusion**: Explicitly includes choice-specific feedback in PDF when feedback is enabled

### 8. **Accessibility Improvements**
   - All interactive elements have proper `title` attributes
   - Radio buttons use semantic HTML with proper labels
   - Maintained keyboard navigation support
   - Contrast ratios meet WCAG AA standards (no theme changes)

## Technical Implementation

### New CSS Classes
- `.radio-group`: Styling for radio button groups
- `.muted`: Subtle text styling for descriptions
- `.helper-message`: Blue-bordered instruction box
- `.preview-actions`: Flexbox layout for action buttons

### New JavaScript Functions
- `detectPanoptoTitle()`: Detects video title from page metadata
- `syncTitleSource()`: Manages title input based on radio selection
- Updated `buildQuizPrompt()`: Injects pedagogy notes and special rules

### New Data Structures
- `PEDAGOGY`: Object containing all six pedagogy presets with briefs and injection points
- Removed `PRESETS`: Old discipline-based presets removed

## Testing Checklist
- [x] Panopto title detection works (uses page title as fallback)
- [x] Radio button toggle enables/disables title input
- [x] MC-only default selection
- [x] Brief feedback default
- [x] Pedagogy selector updates brief text
- [x] Pedagogy notes injected into prompt
- [x] Character counter shows "aim < 8000"
- [x] Copy button at top works
- [x] Copy button at bottom works (existing functionality)
- [x] Helper message displays correctly
- [x] TF/Numerical special rules inject when selected
- [x] Tooltips show on hover
- [x] Customise section opens by default

## Files Modified
- `index.html`: Single-file app with inline CSS and JS

## Preserved Features
- All existing Copilot guardrails (COUNT LOCK, METADATA, XML escaping, etc.)
- Study Guide workflow (unchanged)
- From Notes workflow (unchanged)
- All existing prompt generation logic and structure
- Visual design and colour scheme
- Toast notifications
- Progress bar and status badges
- Character limit checking (8000 chars)

## Notes
- The app now aligns with QUB's Beyond Blended Framework
- Pedagogy-first approach provides more contextually appropriate question generation
- UK English spelling used throughout (e.g., "Favours" not "Favors")
- All original functionality preserved while adding new features

