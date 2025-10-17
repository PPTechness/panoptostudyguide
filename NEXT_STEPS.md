# Next Steps - Testing the Fail-Closed Guards

## ✅ What's Been Updated

Your Prompt Builder now has **fail-closed guards** that prevent empty QTI files. The key changes:

1. **Panopto Preflight Checklist** (yellow panel) - Ensures lecturers prepare the page correctly
2. **PANOPTO_BLOCK** - Explicit instructions for Copilot to read page content
3. **300-Word Minimum Check** - Returns diagnostic message if insufficient content
4. **Enhanced Title Detection** - Multiple fallback strategies
5. **Updated Canvas Instructions** - References preflight and diagnostics

---

## 🧪 Testing Instructions

### Test 1: Success Case (Full Content)

**Goal**: Verify Copilot reads content and generates proper quiz

1. **Open a Panopto video** in your browser (full Watch page, not Canvas embed)
2. **Complete preflight steps**:
   - Open Captions panel
   - Open Contents/Slides panel
   - Scroll transcript to bottom (loads all captions)
   - Open Copilot sidebar
   - Enable "Use page content" / "Allow this page"

3. **Open the Prompt Builder** (`index.html`)
4. **Configure**:
   - Leave defaults (MC only, Brief feedback, Concept Check pedagogy)
   - Title source: "Use Panopto video title" (checked)
5. **Copy prompt** using top or bottom button
6. **Paste into Copilot** in the Panopto tab
7. **Wait for generation**

**Expected Result**:
- ✅ Copilot generates two files
- ✅ `[Title]_quiz_qti.zip` contains `assessment.xml` with 3 MC questions
- ✅ `[Title]_quiz.pdf` shows questions, options, answers, feedback
- ✅ Questions are based on actual lecture content
- ✅ Feedback includes timestamps like "See around 12:34"

---

### Test 2: Fail-Closed Case (Insufficient Content)

**Goal**: Verify diagnostic message when content not loaded

1. **Open a Panopto video** (full Watch page)
2. **Do NOT open Captions or Contents panels** (skip preflight)
3. **Open the Prompt Builder** (`index.html`)
4. **Copy prompt** and **paste into Copilot**
5. **Wait for response**

**Expected Result**:
- ✅ Copilot returns: `INSUFFICIENT_PAGE_CONTENT — Open captions & contents panels, scroll transcript fully, enable 'Use page content', then run again.`
- ✅ NO files generated (no empty .zip or .pdf)
- ✅ Clear instruction on what to do next

6. **Now complete preflight steps**:
   - Open Captions panel
   - Open Contents/Slides panel
   - Scroll transcript
   - Re-paste prompt

**Expected Result**:
- ✅ Copilot now generates proper files (Test 1 results)

---

### Test 3: Title Detection

**Goal**: Verify robust title detection

1. **Test with Panopto page open**:
   - Radio: "Use Panopto video title" ✓
   - Check preview prompt → should show actual Panopto title
   
2. **Test custom title**:
   - Radio: "Type a custom title"
   - Enter: "My Test Quiz"
   - Check preview prompt → should show "My Test Quiz"
   - Filename should be: `My_Test_Quiz`

3. **Test without Panopto page**:
   - Close Panopto tab
   - Radio: "Use Panopto video title" ✓
   - Should fallback to placeholder or last detected title

**Expected Result**:
- ✅ Title radio toggles disable/enable input field
- ✅ Detected title appears in prompt
- ✅ Slug converts to ASCII safe filename

---

### Test 4: Preflight Panel

**Goal**: Verify UI elements work

1. **Page loads** → Preflight panel visible (yellow background)
2. **Click "Hide"** → Panel disappears
3. **Reload page** → Panel reappears (not persistent dismissal)
4. **Click "Hide" on About panel** → About panel disappears

**Expected Result**:
- ✅ Preflight panel dismisses correctly
- ✅ Both info panels function independently
- ✅ No JavaScript errors in console

---

### Test 5: Character Count

**Goal**: Verify prompt stays under 8,000 chars

1. **Default settings** (MC only, 3 per type):
   - Check character count → should be ~2,500-3,500 chars
   
2. **Add more question types**:
   - Select: MC, MA, TF, SA, Essay, Numerical
   - Check character count → should increase but stay <5,000
   
3. **Increase count**:
   - Questions per type: 10
   - All types selected
   - Check character count → should be <7,500

**Expected Result**:
- ✅ Character counter updates live
- ✅ Progress bar shows green/yellow/red
- ✅ Status badge shows "Ready" / "Near limit" / "Too long"
- ✅ Even max settings stay under 8,000 limit

---

### Test 6: Canvas Import

**Goal**: End-to-end workflow

1. **Generate quiz** from Panopto video (Test 1)
2. **Download** both files
3. **Open Canvas** course
4. **Go to**: Settings → Import Course Content
5. **Select**: Content Type = "QTI .zip file"
6. **Upload** the `.zip` file
7. **Click Import**
8. **Wait** for import to complete
9. **Check Quizzes** (or Assignments for New Quizzes)

**Expected Result**:
- ✅ Import succeeds (green checkmark)
- ✅ Quiz appears in Quizzes list
- ✅ Open quiz → 3 questions visible
- ✅ Questions have stems, 4 options each, correct answer marked
- ✅ Feedback present (if Brief/Detailed selected)
- ✅ Questions reflect actual lecture content

**If Item Bank appears instead**:
- ✅ Open Item Bank
- ✅ See 3 questions
- ✅ Create quiz manually from bank
- ✅ This is normal for rewrites/edge cases

---

## 📊 Success Metrics

After testing, you should see:

1. **100% success rate** when preflight steps completed
2. **Clear diagnostic** when preflight skipped
3. **No empty files** generated
4. **Actual lecture content** in questions
5. **Timestamps in feedback** (when available)
6. **Valid Canvas import** every time

---

## 🐛 Troubleshooting

### Issue: Copilot ignores 300-word check
**Solution**: This is rare but possible with older models. Try:
- Rephrasing the FAIL-CLOSED section to be more explicit
- Adding "CRITICAL:" prefix to the instruction
- Contact Microsoft if model ignores explicit instructions

### Issue: Title detection fails
**Solution**: 
- Check if Panopto page has og:title meta tag (View Source)
- Try custom title as workaround
- Report specific page URL for debugging

### Issue: Character limit exceeded
**Solution**:
- Reduce questions per type
- Select fewer question types
- Remove optional sections (timestamps, detailed feedback)

### Issue: Canvas import fails
**Solution**:
- Verify it's a QTI .zip (not Canvas Cartridge)
- Check import log for specific errors
- Open .zip and verify assessment.xml is well-formed
- Try importing into test course first

---

## 📝 What to Document

As you test, note:

1. **Panopto page configuration**:
   - URL pattern (e.g., qub.cloud.panopto.eu/Panopto/Pages/Viewer.aspx)
   - Does og:title exist?
   - Which panels are open by default?

2. **Copilot behavior**:
   - Does it respect fail-closed rule?
   - How long does generation take?
   - Any error messages?

3. **Canvas import**:
   - New Quizzes or Classic?
   - Import success rate
   - Any item bank rewrites?

4. **Question quality**:
   - Relevant to lecture content?
   - Distractors plausible?
   - Feedback helpful?
   - Timestamps accurate?

---

## 🎯 Rollout Plan

Once testing is successful:

### Phase 1: Soft Launch (Week 1)
- Share with 5-10 trusted lecturers
- Gather feedback on preflight clarity
- Monitor INSUFFICIENT_PAGE_CONTENT rate
- Iterate on instructions

### Phase 2: Department Pilot (Week 2-3)
- Roll out to one school/department
- Provide training session (15 min)
- Create video walkthrough
- Support office hours

### Phase 3: Full Launch (Week 4+)
- Announce to all staff
- Update documentation on staff intranet
- Monitor support tickets
- Collect success stories

---

## 📚 Documentation to Create

1. **Video Tutorial** (5 min):
   - Open Panopto Watch page
   - Complete preflight
   - Generate prompt
   - Paste into Copilot
   - Import to Canvas

2. **Quick Reference Card** (1 page):
   - 4 preflight steps
   - Common issues & solutions
   - Support contact

3. **FAQ**:
   - Why do I need to scroll the transcript?
   - What if my video has no captions?
   - Can I use this with embedded videos?
   - What's the 300-word check?

4. **Best Practices Guide**:
   - Choosing pedagogy presets
   - Feedback level recommendations
   - Question type selection
   - Canvas import tips

---

## ✅ Checklist Before Going Live

- [ ] Test with 3+ different Panopto videos
- [ ] Test both success and fail-closed cases
- [ ] Verify Canvas import works
- [ ] Test on Chrome, Edge, Safari
- [ ] Test on Windows and Mac
- [ ] Review character counts (all scenarios)
- [ ] Confirm QUB branding present
- [ ] Check all tooltips display
- [ ] Verify mobile responsiveness
- [ ] Lint JavaScript (no errors)
- [ ] Test with screen reader (basic)
- [ ] Create backup of working version
- [ ] Document rollback procedure
- [ ] Prepare support resources
- [ ] Brief support team
- [ ] Schedule training sessions

---

## 🚀 You're Ready!

The Prompt Builder now has:
- ✅ Fail-closed guards (no more empty files)
- ✅ Clear preflight instructions
- ✅ Robust title detection
- ✅ QUB branding
- ✅ Pedagogy-first approach
- ✅ Canvas import guidance
- ✅ Diagnostic error messages

**Go test with a real Panopto video and see it in action!**

---

## 📞 Support

If you encounter issues during testing:

1. Check `FAIL_CLOSED_GUARDS.md` for technical details
2. Review `EXAMPLE_PROMPT_V13.txt` for expected prompt format
3. Consult `QUB_BRANDING_UPDATE.md` for UI/UX documentation
4. Check browser console for JavaScript errors
5. Verify Panopto page has captions/slides loaded

---

## 🎉 Success!

When it works, you'll see:
- Lecturers confidently using the tool
- Zero empty quiz complaints
- High-quality questions from actual content
- Positive feedback on preflight clarity
- Reduced support burden

**The fail-closed approach transforms ambiguity into clarity. Ship it! 🚢**

