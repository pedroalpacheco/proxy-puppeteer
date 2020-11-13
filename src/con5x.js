const puppeteer = require('puppeteer');

const url = 'https://siteratelimit.herokuapp.com/';

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
    });

	for (let i = 0; i < 5; i++) {
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForTimeout(1500);
        await page.close();
	}

    await browser.close();
})();