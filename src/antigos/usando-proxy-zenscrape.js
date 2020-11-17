/*const puppeteer = require('puppeteer');

const url = 'https://www.meuip.com.br/';
const sitealvo = 'https://siteratelimit.herokuapp.com/';

(async () => {
    const browser = await puppeteer.launch({
        //headless:false,
        args: ['--proxy-server=http://Pedro:$tmaUc~D!nD^"B`7@hub.zenscrape.com:31112']
    });
    const page = await browser.newPage();
    await page.goto(url)
    await page.screenshot({ path: 'meuip-zenscrape.png', fullPage: 'true' });
    await browser.close();
})();*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=hub.zenscrape.com:31112']
  });
  const page = await browser.newPage();
    await page.authenticate({
        username: 'Pedro',
        password: '$tmaUc~D!nD^"B`7'
    });
    await page.goto('http://lumtest.com/myip.json');
    await page.screenshot({path: 'meuip-zenscrape.png'});
    await browser.close();
})();