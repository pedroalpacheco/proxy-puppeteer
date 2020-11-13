const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: [
            '--proxy-server=proxy.crawlera.com:8010'
        ]
    });
    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
        'Proxy-Authorization': 'Basic ' + Buffer.from('0bce17a8029f48438684f93c5d515048').toString('base64'),
    });
    
    console.log('Opening page ...');
    try {
        await page.goto('https://siteratelimit.herokuapp.com/');
    } catch(err) {
        console.log(err);
    }
  
    console.log('Taking a screenshot ...');
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
})();