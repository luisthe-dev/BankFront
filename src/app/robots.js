export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ads", "/user", "/ages"],
    },
    sitemap: "https://liquetinvest.com/sitemap.xml",
  };
}
