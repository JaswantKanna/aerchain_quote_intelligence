# Walkthrough Script (5–6 minutes)

Use this as a guide, not as a script to read word-for-word. Keep the screen moving and explain why you made the decisions.

## Opening
“I approached this as a buyer workflow problem. The painful part isn't receiving five quotes; it is reconciling them into something the buyer can compare and defend. I focused the prototype on that decision point.”

## Overview
“This is a packaging RFx with five vendors and 30 line items. I included a few realistic exceptions so the comparison is not a perfect happy path: one partial response, a USD quotation, different lead times, quality statuses and freight exceptions.”

## Comparison
“Here I want the buyer to see both the quoted value and the exceptions. Missing quotes are not treated as zero. Currency conversion is explicit. In a production build, I would also normalize units and landed cost, and show the original source beside every extracted field.”

## Analyst
“I'm demonstrating a few questions buyers commonly ask after looking at the table: cheapest overall, cheapest among quality-qualified suppliers, missing items and a split-award scenario. In this prototype, these are calculated from the dataset using supported query patterns. I have not connected a live LLM yet.”

## Award view
“I intentionally stop short of auto-award. A theoretical split can look cheaper but may introduce freight, capacity, coordination or quality risk. The buyer needs those trade-offs before making a decision.”

## Close
“My first next step would be document ingestion with field-level evidence and confidence. Then I would connect a real AI analyst to a validated procurement data model, with calculation tools rather than relying on free-form generated numbers.”
