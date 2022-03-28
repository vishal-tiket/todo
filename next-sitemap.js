const siteUrl = "https://www.tiket.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};