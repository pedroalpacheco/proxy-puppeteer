const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=zproxy.lum-superproxy.io:22225']
  });
  const page = await browser.newPage();
    await page.authenticate({
        username: 'lum-customer-hl_dfaec034-zone-static',
        password: 'ewwmcuotlpm4'
    });
    await page.goto('http://lumtest.com/myip.json');
    await page.screenshot({path: 'iliminati.png'});
    await browser.close();
})();