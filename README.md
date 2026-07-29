# AWS Cloud Practitioner Practice Exams

Personal practice quizzes for AWS Certified Cloud Practitioner (CLF-C02), with immediate feedback and emailed results.

## Live site

Hosted on Netlify (auto-deploys from `main`):

https://aws-cloud-practitioner-quiz.netlify.app

## Local development

```powershell
npx netlify dev
```

Open the URL Netlify prints (usually `http://localhost:8888`).

## Environment variables (Netlify)

Set these in **Site settings → Environment variables**:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Optional verified sender, e.g. `AWS Practice Exams <quiz@yourdomain.com>` |

Until you verify a custom domain in Resend, you can use `onboarding@resend.dev` and send only to the email address on your Resend account.

## Files

- `index.html` — page structure
- `styles.css` — layout and visuals
- `questions.js` — Week 1–3 question banks
- `app.js` — quiz flow, scoring, feedback, email trigger
- `netlify/functions/send-results.js` — emails result summary via Resend

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
