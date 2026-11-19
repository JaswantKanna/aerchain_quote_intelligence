# Vercel Hosting Guide — AI Chatbot

## 1. Push project to GitHub
Create a repository and upload the complete project folder, including `api/chat.js`, `vercel.json`, and `index.html`. Do not upload a real `.env` file or API key.

## 2. Import to Vercel
- Go to https://vercel.com and sign in.
- Add New → Project → import the GitHub repository.
- Framework Preset: Other.
- Root Directory: project root.
- Build Command: leave empty.
- Output Directory: leave empty.
- Deploy.

## 3. Enable AI chat
In Vercel → Project → Settings → Environment Variables:
- `OPENAI_API_KEY`: your secret API key.
- `OPENAI_MODEL`: optional; defaults to `gpt-5.5` in the API route.

Select the deployment environments you need and save. Redeploy so the serverless function receives the variables.

## 4. Verify
Open the deployment URL, click **Ask Aerchain AI**, and try:
- Who is the cheapest quality-qualified vendor?
- Which quotations are incomplete?
- Compare lead times.
- What are the key award risks?

If the API key is absent or the AI request fails, the UI switches to a limited Demo mode. This is expected for local file-open testing; `/api/chat` is not available when opening `index.html` directly from disk.

## Security
- Never put API keys in `index.html`, client-side JavaScript, screenshots, or GitHub.
- The API key is used only in the Vercel serverless route.
- The endpoint is a prototype; add authentication, rate limits, request logging policy, and abuse protection before production use.


## Brand assets
The refreshed prototype uses a brand-inspired sparkle mark and wordmark. The official logo file was not available for embedding; use an approved logo asset if the submission requires exact corporate artwork.


## Aerchain brand system

- **Logo:** authentic user-provided Aerchain logo and wordmark assets.
- **Primary orange:** `#EF5433` (matched to supplied logo artwork).
- **Charcoal:** `#211F20`.
- **Workspace background:** `#F8F7F6`; cards and surfaces are white.
- **Accent tint:** `#FFF1EC`.
- The prototype uses orange for primary actions, active navigation, AI assistant identity and emphasis; neutral surfaces maintain enterprise readability.


Branding note: the prototype header uses the exact supplied Aerchain corporate wordmark image (`aerchain_corporate_wording.png`); the original orange symbol asset is retained for the AI assistant identity.
