export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: "AI API key is not configured. Demo mode is available." });
  try {
    const { messages, dataset, fx } = req.body || {};
    if (!Array.isArray(messages) || !messages.length || !dataset) return res.status(400).json({ error: "Missing conversation or procurement dataset." });
    const safeMessages = messages.slice(-8).map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content || "").slice(0, 4000) }));
    const context = JSON.stringify({ dataset, fx: Number(fx || 83.5) }).slice(0, 28000);
    const instructions = `You are Aerchain AI, a concise, professional procurement intelligence assistant inside a quote-comparison prototype. Use only the supplied demo dataset for dataset-specific facts. The dataset is synthetic. Do not invent quote values, supplier commitments, quality certifications, freight, taxes, capacity, or missing data. Currency normalization for USD quotes uses the demo FX assumption ₹${Number(fx || 83.5).toFixed(2)}/USD. The prototype does NOT calculate landed cost and does NOT normalize freight or taxes. Distinguish facts, calculations, assumptions, and recommendations. Treat quality status separately from price. Missing quote values are unknown, never zero. Buyer makes final award decisions. If asked beyond data, say what additional information is needed. Prefer a short answer with a clear conclusion, bullets for reasoning, and caveats. Dataset context: ${context}`;
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-5.5", instructions, input: safeMessages, max_output_tokens: 700 })
    });
    const payload = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: payload?.error?.message || "The AI provider returned an error." });
    const answer = payload.output?.flatMap(item => item.content || []).filter(c => c.type === "output_text").map(c => c.text).join("\n") || payload.output_text || "No response text was returned.";
    return res.status(200).json({ answer });
  } catch (error) {
    return res.status(500).json({ error: "Unable to process the chat request." });
  }
}
