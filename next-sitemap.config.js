/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nirvanayogaschool.edu',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // exclude dynamic routes mapped elsewhere
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
