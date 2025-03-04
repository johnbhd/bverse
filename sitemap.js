const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const BASE_URL = 'https://bverse-tm.vercel.app/'; // Change to your website URL

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });

pages.forEach(page => sitemapStream.write(page));
sitemapStream.end();

streamToPromise(sitemapStream).then(data => {
  fs.writeFileSync('public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generated successfully!');
});
