# Study Guide Layout Refresh - Horizontal Cards

## Problem
The Study Guide page had tall, narrow columns (5 columns × 260px min-height) that created an unattractive vertical layout that was difficult to scan.

## Solution
Redesigned the layout with Synthesia-inspired horizontal cards in a **3-column, 2-row grid** with an Output Format selector as the first card.

---

## Layout Changes

### Before:
- ❌ 5 narrow columns (220-260px width)
- ❌ 260px minimum height (very tall)
- ❌ Heavy borders (6px solid)
- ❌ Complex chip-style bullet points
- ❌ No output format selector visible

### After:
- ✅ 3 wider columns (responsive)
- ✅ Natural height (no min-height constraint)
- ✅ Clean card design (subtle shadows)
- ✅ Simple checkmark bullet points
- ✅ Output Format card as first card

---

## New Grid Layout

```
┌──────────────┬──────────────┬──────────────┐
│ OUTPUT       │ CORE         │ KNOWLEDGE    │
│ FORMAT       │ CONCEPTS     │ TOOLS        │
│ (Word/PPT)   │              │              │
└──────────────┴──────────────┴──────────────┘
┌──────────────┬──────────────┬──────────────┐
│ PRACTICE &   │ REFLECTION   │ EXTENSION &  │
│ TESTING      │ & PLANNING   │ SUPPORT      │
│              │              │              │
└──────────────┴──────────────┴──────────────┘
```

**Total: 6 cards (1 format selector + 5 tool cards)**

---

## Visual Design Updates

### Card Styling (Synthesia-inspired)
```css
.tool-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  padding: 24px;
  gap: 16px;
  border: 2px solid transparent;
}

.tool-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transform: translateY(-4px);
  border-color: var(--tool-accent);
}
```

### Bullet Points
- **Before**: Chip-style boxes with borders
- **After**: Clean checkmarks with tool accent color
```css
.tool-points li::before {
  content: '✓';
  color: var(--tool-accent);
  font-weight: 700;
}
```

### Output Format Card
- Gradient background (#f8f9fa → #ffffff)
- Pill-shaped format buttons (rounded: 999px)
- Active state with Queen's Red (#E0001B)
- Hover effects on both options

---

## Responsive Breakpoints

| Screen Width | Columns | Layout |
|--------------|---------|--------|
| > 900px | 3 | Default grid |
| 600-900px | 2 | Stacked pairs |
| < 600px | 1 | Single column |

---

## CSS Changes Summary

### Grid
```css
/* Before */
grid-template-columns: repeat(5, minmax(220px, 1fr));

/* After */
grid-template-columns: repeat(3, 1fr);
max-width: 1200px;
margin: 0 auto;
```

### Cards
- **Padding**: 2rem 1.75rem → 24px
- **Gap**: 1.25rem → 16px
- **Border**: 6px solid → 2px solid transparent
- **Border-radius**: var(--radius-xl) → 12px
- **Shadow**: Heavy → Subtle (0 4px 12px)
- **Min-height**: 260px → Removed (natural height)

### Badge
- **Padding**: 0.625rem 1rem → 8px 16px
- **Width**: Full → fit-content
- **Background**: Heavy border → Clean rounded

### Buttons
- **Border-radius**: var(--radius) → 8px
- **Padding**: 1rem 1.5rem → 12px 20px
- **Hover**: Enhanced translateY(-2px)

---

## JavaScript Changes

### New Output Format Card
Added in `mountStudyToolCards()`:
1. Creates output format card first
2. Renders Word/PowerPoint toggle buttons
3. Highlights active format based on `state.studyFormat`
4. Updates `state.studyFormat` on click

**No changes to**:
- Prompt generation logic ✓
- Tool builder functions ✓
- Copy functionality ✓
- State management (except format toggle) ✓

---

## Features Added

### 1. Output Format Selector Card
- **Position**: First card (top-left)
- **Options**: Word (.docx) / PowerPoint (.pptx)
- **Default**: Word
- **Behavior**: Pill-style toggle with active state

### 2. Cleaner Visual Hierarchy
- Less border weight
- More whitespace
- Subtle shadows
- Hover lift effect

### 3. Better Readability
- Wider cards = more horizontal space
- Natural height = less scrolling within cards
- Checkmarks instead of boxes = cleaner scan

---

## Files Modified

**index.html**:
- **Lines 604-796**: CSS for grid, cards, badges, buttons, format selector
- **Lines 2885-2946**: JavaScript for mounting cards with format selector

**Files NOT Modified**:
- No prompt generation functions changed ✓
- No tool builder logic touched ✓
- No state object structure changed ✓

---

## Testing Checklist

- [ ] Open index.html in browser
- [ ] Navigate to Study Guide tab
- [ ] Verify 3 columns, 2 rows layout
- [ ] Verify Output Format card appears first
- [ ] Click Word button → should become active (red)
- [ ] Click PowerPoint button → should become active (red)
- [ ] Hover over tool cards → should lift with shadow
- [ ] Click "Copy Prompt" buttons → should still work
- [ ] Resize browser → should respond at 900px and 600px
- [ ] Check all 5 tool cards render correctly
- [ ] Verify colors match tool accents (orange, purple, blue, pink, green)

---

## Benefits

1. ✅ **More Scannable** - Wider cards, cleaner layout
2. ✅ **Less Cluttered** - Removed heavy borders and chip backgrounds
3. ✅ **More Professional** - Synthesia-inspired clean design
4. ✅ **Better UX** - Output format selector visible upfront
5. ✅ **Responsive** - Works on all screen sizes
6. ✅ **Faster Reading** - Checkmarks instead of boxes
7. ✅ **No Breaking Changes** - All prompts and functions intact

---

**Status**: ✅ Complete  
**Date**: 2025-10-24  
**Design Inspiration**: Synthesia.io  
**Layout**: 3 columns × 2 rows (6 cards total)

