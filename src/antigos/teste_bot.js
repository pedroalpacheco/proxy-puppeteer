const puppeteer = require('puppeteer');

const url = 'https://bot.sannysoft.com/';
//const url = 'https://antoinevastel.com/bots/';

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
    });
    const page = await browser.newPage();
    await page.goto(url);
    

    //await browser.close();
})();