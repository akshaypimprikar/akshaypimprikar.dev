import { chromium } from 'playwright';
const browser = await chromium.launch();

const pages = ['/', '/career', '/work/pragma', '/work/financetracker', '/apps'];
const base = 'https://akshaypimprikardev.vercel.app';

const ctx375 = await browser.newContext({ viewport: { width: 375, height: 812 } });
for (const p of pages) {
  const page = await ctx375.newPage();
  await page.goto(base + p, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2200);
  const name = p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '');
  await page.screenshot({ path: `/private/tmp/claude-501/-Users-akshaypimprikar-Desktop-Claude-FinanceTracker/2dcbb325-a614-426e-a961-00292183290f/scratchpad/mobile_${name}.png`, fullPage: true });
  // measure header overflow
  const headerBox = await page.evaluate(() => {
    const h = document.querySelector('.site-header');
    if (!h) return null;
    return { scrollWidth: h.scrollWidth, clientWidth: h.clientWidth, viewportWidth: window.innerWidth };
  });
  console.log(name, 'header', JSON.stringify(headerBox));
  await page.close();
}

const ctxDesktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
for (const p of pages) {
  const page = await ctxDesktop.newPage();
  await page.goto(base + p, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2200);
  const name = p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_/, '');
  await page.screenshot({ path: `/private/tmp/claude-501/-Users-akshaypimprikar-Desktop-Claude-FinanceTracker/2dcbb325-a614-426e-a961-00292183290f/scratchpad/desktop_${name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
console.log('done');
