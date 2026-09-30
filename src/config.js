// The only module that reads process.env, so the scanner has one place to look.
export const config = {
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  logLevel: process.env.LOG_LEVEL ?? 'info',
  sentryDsn: process.env.SENTRY_DSN,
  stripeKey: process.env.STRIPE_KEY,
};
