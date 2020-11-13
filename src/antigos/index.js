const puppeteer = require('puppeteer');

const sitealvo = 'https://siteratelimit.herokuapp.com/';

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null
    });
    const page = await browser.newPage();

    let tentativas = 12;

    for(let i = 0;i< tentativas; i++){
       
        await page.goto(sitealvo);
        //console.log(sitealvo)

    };


    

    //await browser.close();
})();