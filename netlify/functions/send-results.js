const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const buildHtml = (payload) => {
  const rows = payload.answers
    .map((item) => {
      const status = item.correct ? "Correct" : "Incorrect";
      const statusColor = item.correct ? "#176351" : "#b83b3b";
      return `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #dce4df;vertical-align:top;">
            <p style="margin:0 0 6px;font-weight:700;">${item.number}. ${escapeHtml(item.question)}</p>
            <p style="margin:0 0 4px;color:${statusColor};font-weight:600;">${status}</p>
            <p style="margin:0 0 4px;"><strong>Your answer:</strong> ${escapeHtml(item.selected)}</p>
            <p style="margin:0 0 4px;"><strong>Correct answer:</strong> ${escapeHtml(item.correctAnswer)}</p>
            <p style="margin:0;color:#61706b;">${escapeHtml(item.explanation)}</p>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#10251f;line-height:1.5;max-width:680px;margin:0 auto;">
      <h1 style="margin:0 0 8px;font-size:22px;">AWS Cloud Practitioner practice results</h1>
      <p style="margin:0 0 16px;color:#61706b;">Week ${payload.week} · ${escapeHtml(payload.title)}</p>
      <p style="margin:0 0 8px;">Hi ${escapeHtml(payload.name)},</p>
      <p style="margin:0 0 16px;">
        You scored <strong>${payload.percent}%</strong>
        (${payload.correctCount}/${payload.total}). Here is a full copy of your responses.
      </p>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin:24px 0 0;color:#61706b;font-size:13px;">
        This message was sent by AWS Cloud Practitioner Practice Exams.
      </p>
    </div>
  `;
};

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Email service is not configured yet." })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON body." })
    };
  }

  const email = String(payload.email || "").trim();
  const name = String(payload.name || "").trim();
  if (!name || !EMAIL_REGEX.test(email) || !Array.isArray(payload.answers)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Name, email, and answers are required." })
    };
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "AWS Practice Exams <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: `Your Week ${payload.week} practice exam results (${payload.percent}%)`,
      html: buildHtml(payload)
    })
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: result.message || "Resend could not send the email."
      })
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ ok: true, id: result.id })
  };
};
