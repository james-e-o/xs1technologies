import { siteUrl } from "@/lib/site-data";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).toString() } : {}),
  };
}
