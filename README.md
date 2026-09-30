# envcheck-playground

A small, deliberately boring app for trying the [deployhealth](https://deployhealth.dev) GitHub App.
Every env var it reads is declared in `.env.example`, so the base branch scans clean.

## Try the PR check

1. Install the App on this repo: https://github.com/apps/deployhealth
2. Sign in at https://deployhealth.dev and create a project with this repo's `owner/name`.
3. Open a pull request that adds an env var reference without declaring it, for example in `src/config.js`:

   ```js
   stripeKey: process.env.STRIPE_KEY,
   ```

   Within a minute, `deployhealth[bot]` comments listing `STRIPE_KEY` as not declared and a
   `deployhealth / env` check appears.
4. Push a second commit adding `STRIPE_KEY=` to `.env.example`. The same comment updates and the check passes.

## Scan locally

```sh
npm run scan
```

Runs the scanner in dry-run mode: nothing is sent anywhere.
