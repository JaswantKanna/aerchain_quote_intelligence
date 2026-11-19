# Aerchain Quote Intelligence — Assignment Prototype

A browser-based procurement quote-comparison prototype with a floating AI Procurement Assistant. The demo uses synthetic corrugated-packaging data: 30 line items and five vendors.

## Run locally
Open `index.html` in a browser. The UI and limited fallback chat work without a server. **Open-ended AI chat requires deployment to Vercel and an API key**, because the key must not be placed in browser code.

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. Import the repository in Vercel (Framework Preset: Other; no build command; root output).
3. In Vercel → Project Settings → Environment Variables, add `OPENAI_API_KEY`.
4. Optionally add `OPENAI_MODEL` (default: `gpt-5.5`).
5. Redeploy. The `/api/chat` route will call the OpenAI Responses API from the server.
6. Open the deployment URL and test the chatbot.

## Features
- Overview of vendor responses and exceptions
- RFx draft screen
- Quote comparison matrix
- Synthetic-data calculations and existing analyst prompts
- Award scenario
- CSV export
- Floating Aerchain AI Assistant: conversational dataset Q&A, suggested prompts, responsive chat panel, clear/close controls
- Demo fallback when API is not configured

## Demo assumptions
- Currency conversion uses a fixed demo FX assumption of ₹83.50/USD.
- Data is fabricated for demonstration.
- Freight, taxes, volume tiers, capacity, and full landed-cost logic are not modeled.
- Quality statuses are synthetic questionnaire outcomes.

## AI assistant limits
- Answers are grounded in the synthetic dataset passed to the server.
- It is not connected to live procurement systems or vendor documents.
- The assistant is decision support; verify facts and assumptions before award.
- Never commit API keys to GitHub or put them in frontend code.
- The demo fallback is pattern-based and limited; it is not an LLM.

## Files
- `index.html` — prototype UI and chatbot
- `api/chat.js` — Vercel serverless endpoint
- `vercel.json` — deployment configuration
- `.env.example` — environment variable names (no secrets)
- `product_decisions.md` / `.docx` — product decisions
- `demo_script.md` — walkthrough
- `Aerchain_Quote_Intelligence_Product_Presentation.pptx` — presentation
- `SUBMISSION_CHECKLIST.md` — final checklist


## Brand refresh
The prototype UI uses an Aerchain-inspired cyan/blue/violet gradient, deep-ink navigation, modern card styling, and a sparkle mark paired with an Aerchain wordmark. The official logo asset was not available in this package; replace the brand-inspired mark with an approved official logo before external publication if required.


## Aerchain brand system

- **Logo:** authentic user-provided Aerchain logo and wordmark assets.
- **Primary orange:** `#EF5433` (matched to supplied logo artwork).
- **Charcoal:** `#211F20`.
- **Workspace background:** `#F8F7F6`; cards and surfaces are white.
- **Accent tint:** `#FFF1EC`.
- The prototype uses orange for primary actions, active navigation, AI assistant identity and emphasis; neutral surfaces maintain enterprise readability.


Branding note: the prototype header uses the exact supplied Aerchain corporate wordmark image (`aerchain_corporate_wording.png`); the original orange symbol asset is retained for the AI assistant identity.
