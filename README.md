# ThriveAfrica AWS Quiz Hub

A responsive, zero-dependency quiz interface for AWS Cloud Practitioner Weeks 1–3.

## Included

- 20 fresh multiple-choice questions per week
- Required radio-button answers
- Immediate score after submission
- Correct/incorrect status for every question
- Student answer, correct answer, and explanation
- Incorrect-answer review filter
- Best score saved in the student's browser
- Mobile and desktop layouts

## Run locally

Open `index.html` in a browser.

For a local web server, run this command inside the project folder:

```powershell
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## Publish and embed in Notion

This site is set up for **GitHub Pages** (deploy from the `main` branch root).

After the Pages URL is live:

1. Copy the public HTTPS URL (`https://<user>.github.io/thriveafrica-aws-quiz/`).
2. Open the relevant Notion page.
3. Type `/embed`.
4. Paste the quiz URL.
5. Resize the embedded block.

## Current data behavior

The student's name and best scores are stored only in that browser using `localStorage`. There is no login, backend, or central tutor dashboard in this version.

If centralized student reporting is needed later, connect the app to a database and authentication provider.

## Files

- `index.html` — page structure and templates
- `styles.css` — ThriveAfrica visual design
- `questions.js` — Week 1–3 question banks
- `app.js` — quiz flow, scoring, feedback, filtering, and local progress

## Editing questions

Each question in `questions.js` has this structure:

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
