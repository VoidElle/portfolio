import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(process.env.SITE_URL, { waitUntil: 'networkidle' });
await page.screenshot({ path: 'public/banner.jpg', fullPage: false });

await browser.close();