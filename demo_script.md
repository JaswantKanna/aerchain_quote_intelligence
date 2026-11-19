# Demo Walkthrough Script (3–4 minutes)

## 1. Set the context (20 seconds)
“Quote Intelligence is designed around a procurement bottleneck: vendors respond in different formats and buyers spend time reconciling the quotes before they can evaluate them. This prototype focuses on making the comparison transparent and decision-ready.”

## 2. Overview (35 seconds)
“Here are five supplier responses across 30 packaging line items. The workspace surfaces response completeness, quality status and commercial exceptions rather than hiding them inside a spreadsheet.”

## 3. Comparison (45 seconds)
“Missing quote values are not treated as zero. GlobalPack’s USD pricing is converted using a visible demo FX assumption. Quality eligibility is shown separately from price. Freight and taxes are not normalized in this prototype, so totals are indicative rather than landed cost.”

## 4. AI assistant (60–90 seconds)
Click **Ask Aerchain AI**. Ask: “Who is the cheapest quality-qualified vendor?” Then ask: “What are the key risks with the lowest bidder?”

“Instead of navigating the table, a buyer can ask a natural-language question. The assistant receives the synthetic dataset, explains its conclusion, and calls out caveats. When deployed with the API key, it uses the OpenAI Responses API through a server-side Vercel function. If AI is not configured, the limited fallback is clearly labelled Demo mode.”

## 5. Award decision (35 seconds)
“The award view compares a single-vendor basket with a theoretical line-by-line split. This is not an automatic recommendation. Freight consolidation, capacity, taxes, supplier risk and operational complexity need validation before a buyer makes the award.”

## 6. Close (15 seconds)
“The next iteration would focus on document ingestion, evidence-linked extraction, confidence scores, validated landed-cost normalization, and a procurement assistant connected to trusted calculations—not autonomous purchasing.”

## Demo setup note
For open-ended AI responses, deploy on Vercel and configure `OPENAI_API_KEY`. Do not show the API key. The local browser-open version supports only limited Demo-mode answers.


## Branded walkthrough cue
Begin by pointing out the Aerchain-inspired gradient, branded workspace navigation, and floating AI assistant. Note that the logo treatment is a brand-inspired placeholder pending an official asset.


## Aerchain brand system

- **Logo:** authentic user-provided Aerchain logo and wordmark assets.
- **Primary orange:** `#EF5433` (matched to supplied logo artwork).
- **Charcoal:** `#211F20`.
- **Workspace background:** `#F8F7F6`; cards and surfaces are white.
- **Accent tint:** `#FFF1EC`.
- The prototype uses orange for primary actions, active navigation, AI assistant identity and emphasis; neutral surfaces maintain enterprise readability.


Branding note: the prototype header uses the exact supplied Aerchain corporate wordmark image (`aerchain_corporate_wording.png`); the original orange symbol asset is retained for the AI assistant identity.
