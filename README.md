# Thrive Africa Cloud Foundations Quizzes

Weekly quizzes for the Thrive Africa Cloud Foundations cohort. Learners enter their name and email, answer a **fixed** question set (same order for everyone), get instant explanations, and receive results by email.

## Live site

Hosted on Netlify (auto-deploys from `main`):

https://aws-cloud-practitioner-quiz.netlify.app

## Local development

```bash
npx netlify dev
```

Open the URL Netlify prints (usually `http://localhost:8888`).

## Environment variables (Netlify)

Set these in **Site settings → Environment variables**:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Cloud Foundations <noreply@quiz.davidyayaochuko.com>` |

## Files

- `index.html` — page structure
- `styles.css` — layout and visuals
- `questions.js` — weekly question banks (currently Week 1 and Week 2)
- `app.js` — quiz flow, scoring, feedback, email trigger
- `netlify/functions/send-results.js` — emails result summary via Resend

## Fixed question order

Question order and option order are **not** shuffled. Every learner sees the same paper. Edit `questions.js` only when you want to change the shared set.

## Editing questions

```js
{
  id: "unique-id",
  question: "Question text",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0,
  explanation: "Why the answer is correct."
}
```

`answer` is zero-based: `0` means A, `1` means B, `2` means C, and `3` means D.

Pass mark for the cohort is **70%**.
