const puppeteer = require('puppeteer');

const url = 'https://www.meuip.com.br/';

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        args: ['--proxy-server=zproxy.lum-superproxy.io:22225']>
    });
    const page = await browser.newPage();
    await page.goto(url)
    await page.screenshot({ path: 'meuip.png', fullPage: 'true' });
    await browser.close();
})();