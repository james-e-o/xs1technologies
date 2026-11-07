import { industries, siteUrl, solutions } from "@/lib/site-data";

export default function sitemap() {
  if (!siteUrl) return [];

  const paths = [
    "",
    "/solutions",
    ...solutions.filter((solution) => !solution.href).map(({ slug }) => `/solutions/${slug}`),
    "/industries",
    ...industries.map(({ slug }) => `/industries/${slug}`),
    "/products/zerp-8",
    "/training",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
