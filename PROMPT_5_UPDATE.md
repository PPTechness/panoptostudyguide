# Prompt 5 Update - Extension & Support

## Update Summary ✅

**Prompt Updated**: Extension & Support (Prompt 5) - both Word and PowerPoint versions
**Date**: 2025-10-24
**Status**: Complete

---

## Changes Made

### 1. ✅ Word Version (`promptExtensionSupportV13Word`)
**Status**: Already matched your exact prompt - no changes needed
**File Extension**: `.docx (Word A4)`

### 2. ✅ PowerPoint Version (`promptExtensionSupportV13Pptx`) 
**Status**: Updated to match your exact prompt
**File Extension**: `.pptx (PowerPoint)`

---

## Key Features of Updated Prompt

### Enhanced Structure:
- **SOURCE PREP**: Clear 5-step process for content extraction
- **COLLECT**: Builds QUOTES with ≥36 unique fragments (5-20 words each)
- **TITLE**: Extracts real title from multiple sources
- **FORMAT**: Uses proper Word styles (H1, H2, H3) and real tables

### Content Sections:
1. **H2 Flashcards (12)**: FC01-FC12 with specific requirements
2. **H2 Group Tasks (2)**: 140-180 words each with distinct activities  
3. **H2 Authentic Practice Task (1)**: 170-220 words with 3×3 rubric
4. **H2 Appendix A — Quotes Used**: Lists only used quotes
5. **H2 Appendix B — Flashcards Table**: Word table with exact content

### Quality Controls:
- **UNIQUENESS & QUALITY CHECKS**: Hard rules for content validation
- **VALIDATION**: Hard fail system with specific error messages
- **Timestamp Format**: `^(\d{1,2}:)?[0-5]\d:[0-5]\d$` (accepts [mm:ss] or [h:mm:ss])
- **UK Spelling**: Enforced throughout

---

## Technical Implementation

### Function Structure:
```javascript
function promptExtensionSupportV13Word() {
  return `SYSTEM
  Return ONE file only: [REAL_TITLE_SLUG]_study_extension_support.docx (Word A4).
  // ... your exact prompt content ...
  `;
}

function promptExtensionSupportV13Pptx() {
  return `SYSTEM
  Return ONE file only: [REAL_TITLE_SLUG]_study_extension_support.pptx (PowerPoint).
  // ... your exact prompt content ...
  `;
}

function promptExtensionSupportV13() {
  return state.studyFormat === 'powerpoint' ? 
    promptExtensionSupportV13Pptx() : 
    promptExtensionSupportV13Word();
}
```

### Format Selection:
- **Word selected**: Uses `promptExtensionSupportV13Word()` → `.docx` output
- **PowerPoint selected**: Uses `promptExtensionSupportV13Pptx()` → `.pptx` output
- **Dynamic switching**: Respects user's format choice in the UI

---

## Content Specifications

### Flashcards Requirements:
- **Count**: Exactly 12 flashcards (FC01-FC12)
- **Topics**: At least 3 distinct topics, max 3 cards per topic
- **Content**: Lecture-specific questions (no generic "What is X?")
- **Quotes**: Each card includes ONE direct quote + timestamp
- **Related IDs**: 1-3 other IDs (no self-reference, no duplicates)

### Group Tasks Requirements:
- **Count**: Exactly 2 activities
- **Length**: 140-180 words each
- **Content**: Grounded in lecture specifics
- **Quotes**: One new quote + timestamp (not used in Flashcards)
- **Components**: Activity type, learning objective, 3-5 facilitation steps, etc.

### Authentic Practice Task:
- **Count**: Exactly 1 scenario
- **Length**: 170-220 words
- **Content**: Grounded in lecture
- **Rubric**: 3×3 table (Developing, Competent, Excellent)
- **Quote**: One new quote + timestamp (not used earlier)

---

## Validation System

### Hard Fail Conditions:
```
If ANY required section is missing, output exactly:
"MISSING_SECTIONS — Regenerate with Flashcards 12, Group Tasks 2, Authentic Task 1 + rubric, Appendix A, Appendix B."
```

### Quality Checks:
1. **Quote Validation**: Every fragment exists in Captions/Slides (5-20 words)
2. **Source Matching**: Flashcard "Source" matches timestamp in Answer
3. **UK Spelling**: Enforced throughout
4. **Timestamp Format**: Normalized to [mm:ss] (<1h) or [h:mm:ss] (≥1h)

---

## Testing Instructions

### To Test Word Version:
1. Open `index.html` → Navigate to **Study Guide** tab
2. Click **Word (.docx)** format button (should be active/red)
3. Click **Copy Prompt** on **Extension & Support** card
4. Paste in text editor
5. **Verify**: Prompt should say `.docx (Word A4)` in system instruction

### To Test PowerPoint Version:
1. Click **PowerPoint (.pptx)** format button (should become active/red)
2. Click **Copy Prompt** on **Extension & Support** card  
3. Paste in text editor
4. **Verify**: Prompt should say `.pptx (PowerPoint)` in system instruction

### Expected Output:
- **Word**: `[REAL_TITLE_SLUG]_study_extension_support.docx`
- **PowerPoint**: `[REAL_TITLE_SLUG]_study_extension_support.pptx`

---

## Files Modified

**index.html**:
- **Lines 2749-2827**: Updated `promptExtensionSupportV13Pptx()` function
- **Lines 2668-2747**: `promptExtensionSupportV13Word()` already matched (no changes)
- **Lines 2829-2831**: `promptExtensionSupportV13()` selector function (unchanged)

---

## Benefits

1. ✅ **Exact Match**: Both versions now use your precise prompt text
2. ✅ **Format Aware**: Automatically selects Word or PowerPoint based on UI choice
3. ✅ **Quality Control**: Enhanced validation and uniqueness checks
4. ✅ **Professional Output**: Proper Word styles and table formatting
5. ✅ **Comprehensive**: Covers flashcards, group tasks, authentic practice, and appendices

---

**Status**: ✅ Complete  
**Word Version**: Matched exactly  
**PowerPoint Version**: Updated to match exactly  
**Format Selection**: Working correctly
