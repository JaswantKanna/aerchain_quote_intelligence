# Aerchain Quote Intelligence — Assignment Prototype

A browser-based prototype for the “Kill the Quote Spreadsheet” assignment. The demo uses a synthetic corrugated-packaging dataset with 30 line items and five vendors.

## Open locally
1. Download and extract the assignment ZIP.
2. Open the `aerchain_quote_intelligence` folder.
3. Double-click `index.html` (or right-click → Open with → Chrome).
4. No installation or server is required for the local demo.

## Prototype scope
- Overview of vendor responses and exceptions
- RFx draft screen
- Quote comparison table
- Synthetic data calculations and supported analyst question patterns
- Award scenario view
- CSV export

## Demo assumptions
- Currency conversion uses a fixed demo FX assumption of ₹83.50/USD.
- Data is fabricated for demonstration.
- Freight, taxes, volume tiers, capacity, and full landed-cost logic are not modeled.
- “Quality” statuses are synthetic questionnaire outcomes.

## Important implementation note
This is a front-end prototype. The RFx drafting screen and analyst are not connected to a live LLM. The supported analyst prompts are handled by transparent calculation logic over the synthetic dataset. Document upload, OCR, extraction, evidence links, and live AI reasoning are not implemented. Do not present these as completed features.

## Host it for a public demo
See `HOSTING_GUIDE.md`. Netlify Drop is the simplest option for a static HTML prototype. You must deploy it from your own account; I cannot create a public hosting URL without access to your hosting account.
