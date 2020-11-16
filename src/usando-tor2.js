/**
 * Site tor
 * https://www.torproject.org/
 */

const puppeteer = require('puppeteer');
const exec = require('child_process').exec;

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--proxy-server=socks5://127.0.0.1:9050'
    ],
  });
  const page = await browser.newPage();
  
  await page.goto('https://www.meuip.com.br/');

  await page.screenshot({ 
    path: 'meuip-usandoTor.png', 
    fullPage: 'true' 
  });
  
  await browser.close();
})();