/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        process.env.NODE_ENV === 'production'
            ? process.env.SITE_URL
            : process.env.SITE_URL_DEV,
    generateRobotsTxt: true,
    exclude: ['/404'],
    outDir: 'out',
}
