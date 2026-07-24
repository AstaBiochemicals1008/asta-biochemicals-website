import Script from "next/script";

/**
 * Cloudflare Web Analytics — cookieless, privacy-friendly traffic stats.
 *
 * Activates only when NEXT_PUBLIC_CF_BEACON_TOKEN is set (Vercel → Settings →
 * Environment Variables), so nothing loads until you add your beacon token.
 * The token is a public identifier (it ships in the page HTML), not a secret.
 */
export default function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  if (!token) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
