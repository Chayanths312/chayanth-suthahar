// Builds the portfolio PDF from portfolio.html.
//   node portfolio/build.js
// Needs Playwright (require('playwright')) with Chromium.
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const src = 'file://' + path.join(__dirname, 'portfolio.html');
  const out = path.join(__dirname, 'Chayanth_Suthahar_Portfolio_DRAFT.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(src, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: out, width: '11in', height: '8.5in', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('Wrote ' + out);
})();
