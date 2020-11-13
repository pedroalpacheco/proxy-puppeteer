/**
 * Baseado:
 * https://blog.apify.com/how-to-make-headless-chrome-and-puppeteer-use-a-proxy-server-with-authentication-249a21a79212#5875
 */

const puppeteer = require('puppeteer');


//const sitealvo = 'https://siteratelimit.herokuapp.com/';
const sitealvo = 'https://www.meuip.com.br/';

(async () => {
    console.time('#acesso');
    //const oldProxyUrl = 'http://scraperapi:820885e53a20453d1fc9afj08jwfa0j@proxy-server.scraperapi.com:8001';
    //const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);
    const proxyUrl = 'http://proxy-server.scraperapi.com:8001';
    

    const browser = await puppeteer.launch({
        headless:false,
        ignoreHTTPSErrors: true,
        args: [`--proxy-server=${proxyUrl}`],
    });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // set the HTTP Basic Authentication credential
    await page.authenticate({
        'username':'scraperapi', 
        'password':'820885e53a20453d1fc9afj08jwfa0'
    });
    
    console.log('Opening page ...');

    
    await page.setDefaultNavigationTimeout(0);

    await page.goto(sitealvo);
    await page.screenshot({path: 'examplescraperapi3.png'})

    await browser.close();
    console.timeEnd('#acesso');
})();