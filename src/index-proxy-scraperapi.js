/**
 * Baseado:
 * https://blog.apify.com/how-to-make-headless-chrome-and-puppeteer-use-a-proxy-server-with-authentication-249a21a79212#5875
 */

const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');

//const sitealvo = 'https://siteratelimit.herokuapp.com/';
const sitealvo = 'https://www.meuip.com.br/';

(async () => {
    console.time('#acesso');
    const oldProxyUrl = 'http://scraperapi:820885e53a20453d1fc9afj08jwfa0j@proxy-server.scraperapi.com:8001';
    const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

    console.log(newProxyUrl);

    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: [`--proxy-server=${newProxyUrl}`],
    });
    const page = await browser.newPage();
    
    console.log('Opening page ...');

    //let tentativas = 12;
    await page.setDefaultNavigationTimeout(0);

    await page.goto(sitealvo);
    await page.screenshot({path: 'examplescraperapi2.png'});

    /*for(let i = 0;i< tentativas; i++){
       
        await page.goto(sitealvo);
        //console.log(sitealvo)

    };*/


    

    await browser.close();
    await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
    console.timeEnd('#acesso');
})();