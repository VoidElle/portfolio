import { chromium } from 'playwright';

const browser = await chromium.launch();
const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
});
const page = await context.newPage();
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('https://www.lucadelcorona.com', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'public/banner.jpg', fullPage: false });
await browser.close();