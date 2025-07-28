/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kennethez.github.io/Personal-Portfolio',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*', '/admin/*'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  transform: async (config, path) => {
    // Custom priority for different paths
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/projects')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
