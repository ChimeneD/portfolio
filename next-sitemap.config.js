const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chimene.dev';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/profile' },
      { userAgent: '*', disallow: '/cart' },
      { userAgent: '*', disallow: '/checkout' },
      { userAgent: '*', disallow: '/wishlist' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/profile', '/checkout', '/cart', '/wishlist'],
};
