import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('https://www.lucadelcorona.com', { waitUntil: 'networkidle' });

await page.screenshot({ path: 'public/banner.jpg', fullPage: false });

await browser.close();