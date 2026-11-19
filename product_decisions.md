# Product Decisions Note — Aerchain Quote Intelligence

## Product direction
The prototype helps a category buyer turn five vendor responses for 30 corrugated-packaging line items into a comparable, reviewable decision. The AI assistant is an interaction layer over the same demo dataset—not a substitute for validated procurement data or buyer approval.

## User and scenario
A category buyer evaluating five suppliers. The dataset deliberately includes a partial response, a USD quotation, quality pass/pending/fail outcomes, freight exclusions, and different quoted lead times.

## MVP decisions
- Keep the RFx brief and line-item scope visible.
- Put vendor comparison at the centre of the experience.
- Surface quote gaps and commercial exceptions.
- Separate quality eligibility from price ranking.
- Make the USD conversion assumption visible.
- Add a floating **Aerchain AI Assistant** so buyers can ask questions in natural language without leaving the comparison workspace.
- The assistant receives the current synthetic dataset and can summarize, compare, calculate supported scenarios, and explain risks. It should distinguish data facts from assumptions and recommendations.
- Keep award decision support; the buyer remains accountable for award.

## Chatbot experience
- Bottom-right floating launcher; opens a responsive chat panel.
- Welcome message and suggested procurement questions.
- Conversation history retained for the current browser session only.
- Clear, close and send controls; keyboard Enter sends, Shift+Enter adds a line.
- AI response path uses a server-side Vercel function and OpenAI Responses API. The API key is stored as a Vercel environment variable and never in browser code.
- If the AI service is not configured or unavailable, the prototype falls back to a transparent, limited demo answer set for common procurement questions. The UI labels this as Demo mode.

## Trust and guardrails
- Use only the supplied synthetic dataset for vendor-specific facts.
- Missing quotes are unknown, never zero.
- USD is converted using the demo FX assumption of ₹83.50/USD.
- Freight and taxes are not normalized; the prototype does not calculate landed cost.
- Quality status is separate from price.
- Do not invent certifications, supplier capacity, risk scores, or contractual terms.
- AI suggestions are not automatic award decisions.

## What is implemented
Dashboard, synthetic dataset, quote matrix, fixed USD-to-INR normalization, missing-quote visibility, calculation-based analyst patterns, award scenario, CSV export, chatbot interface, Vercel serverless chat route, and a limited offline fallback.

## Deployment requirements for AI mode
Deploy the project to Vercel and set `OPENAI_API_KEY` in Project Settings → Environment Variables. Optionally set `OPENAI_MODEL`. Redeploy after adding the variable. The API key is not included in the ZIP or source. Without it, the chatbot operates in Demo mode.

## What is not implemented
No vendor document upload, OCR, quote extraction, evidence links, live vendor portal, email ingestion, ERP integration, freight/tax normalization, capacity validation, supplier-risk scoring, or automatic award. The chatbot is grounded in the synthetic prototype dataset and is not connected to production procurement systems.

## Next iteration
1. Ingest PDF, XLSX, DOCX, email and image responses.
2. Extract fields into a validated schema and retain source snippets.
3. Display confidence and flag ambiguous units, currency and exclusions.
4. Normalize units and landed-cost components with buyer review.
5. Connect the assistant to validated calculations and evidence citations.
6. Test with procurement users on quote completeness, corrections, decision time and answer trust.


## Brand & UI direction
Aerchain-inspired gradient accents (cyan/blue/violet), deep ink navigation, cool neutral canvas, white cards, subtle borders/shadows, rounded surfaces, modern sans-serif typography, and a branded AI chat surface. The official logo file was unavailable in this package; a sparkle mark + wordmark placeholder is used and should be replaced with an approved logo asset if needed.


## Aerchain brand system

- **Logo:** authentic user-provided Aerchain logo and wordmark assets.
- **Primary orange:** `#EF5433` (matched to supplied logo artwork).
- **Charcoal:** `#211F20`.
- **Workspace background:** `#F8F7F6`; cards and surfaces are white.
- **Accent tint:** `#FFF1EC`.
- The prototype uses orange for primary actions, active navigation, AI assistant identity and emphasis; neutral surfaces maintain enterprise readability.


**Branding:** The prototype header uses the exact Aerchain corporate wordmark image supplied for this assessment. The original orange symbol asset remains unchanged and is used in the AI assistant identity.
