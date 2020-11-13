const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain');

//const sitealvo = 'https://siteratelimit.herokuapp.com/';
const sitealvo = 'https://www.meuip.com.br/';

(async () => {
    console.time('#acesso');
    const oldProxyUrl = 'http://groups-RESIDENTIAL:WB7WdcuMWmPBSeJdXaK6zERSX@proxy.apify.com:8000';
    const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

    console.log(newProxyUrl);

    const browser = await puppeteer.launch({
        //ignoreHTTPSErrors: true,
        args: [`--proxy-server=${newProxyUrl}`],
        headless: false,
    });
    const page = await browser.newPage();
    
    console.log('Opening page ...');

    //let tentativas = 12;
    await page.setDefaultNavigationTimeout(0);

    await page.goto(sitealvo);
    await page.screenshot({path: 'example-apify.png'});

    /*for(let i = 0;i< tentativas; i++){
       
        await page.goto(sitealvo);
        //console.log(sitealvo)

    };*/


    

    await browser.close();
    await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
    console.timeEnd('#acesso');
})();