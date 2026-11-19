# Product Decisions Note

## What I focused on
The assignment describes a familiar procurement problem: buyers receive vendor quotes in different formats and spend time reconciling them before they can make a decision. I focused the prototype on the comparison stage, because a buyer cannot trust an award recommendation until the quotes are comparable.

## User and scenario
A category buyer evaluating five suppliers for 30 corrugated-packaging line items. The dataset includes a partial response, a USD quote, different lead times, quality questionnaire outcomes, and freight exceptions.

## MVP decisions
- Keep the RFx brief and line-item scope visible.
- Put vendor comparison at the centre of the experience.
- Show quote gaps and commercial exceptions rather than hiding them.
- Separate quality eligibility from price ranking.
- Make currency assumptions visible.
- Support a small set of buyer questions with calculations against the dataset.
- Treat the award view as decision support; the buyer remains accountable for the award.

## Why I did not automate award
Price alone is not enough. Freight, delivery, capacity, quality, supplier risk and the operational cost of splitting an award can change the decision. The prototype surfaces a scenario but does not make the purchasing decision.

## What is deliberately out of scope
Live email, vendor portal, production document OCR, live LLM calls, source-evidence links, ERP integration, purchase-order creation and automatic award execution.

## What is implemented
Dashboard, synthetic vendor dataset, quote matrix, fixed USD-to-INR normalization assumption, missing-quote visibility, supported calculation-based analyst prompts, award scenario and CSV export.

## What is not implemented
The RFx copilot is a structured demo screen rather than a live LLM workflow. The analyst supports defined question patterns rather than open-ended AI reasoning. No uploaded vendor documents are actually extracted. These are the next technical steps, not claims about this build.

## Next iteration
1. Ingest PDF, XLSX, DOCX, email and image responses.
2. Extract fields into a validated schema and retain source snippets.
3. Display confidence and flag ambiguous units, currency and exclusions.
4. Normalize units and landed-cost components with buyer review.
5. Add an AI analyst that queries a validated data layer and uses calculation tools.
6. Test with procurement users on quote completeness, corrections and decision time.
