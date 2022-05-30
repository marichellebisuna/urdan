export const mailgun = mailGun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: process.env.MAILGUN_HOST,
});