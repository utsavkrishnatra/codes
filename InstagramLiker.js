const puppeteer =  require('puppeteer');
const { id,ps } = require('./credentials');
let tab;

(async function(){
    

try {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null, // page size reset
        args: ["--start-maximized"], // browser maximize
        slowMo: 50
      });
    let pages = await browser.pages();
    let tab =  pages[0];
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector("input[name ='username']",{visible:true});
    await tab.type("input[name ='username']",id);
    await tab.type("input[name ='password']",ps);
    await Promise.all([tab.waitForNavigation
        ({waitUntil:"networkidle2"})
        ,tab.click(".sqdOP.L3NKy.y3zKF")]);
    await tab.click(".sqdOP.yWX7d.y3zKF");
    await await tab.waitForSelector('.aOOlW.HoLwm' , {visible:true});
    await tab.click(".aOOlW.HoLwm ");
    await tab.waitForSelector(".XTCLo.x3qfX",{visible:true});
    await tab.type(".XTCLo.x3qfX","pepper_pepcoding");
    await tab.waitForSelector(".-qQT3 ",{visible:true});
    await Promise.all([tab.waitForNavigation({waitUntil:"networkidle2"}),await tab.click(".-qQT3 ")]);
    await tab.waitForSelector(".eLAPa",{visible:true});
    await tab.waitForSelector(".k9GMp .Y8-fY .g47SY",{visible:true})
    let SpanElts = await tab.$$(".k9GMp .Y8-fY .g47SY");

    // for (let index = 0; index < SpanElts.length; index++) {
    //     let textElt = await tab.evaluate(function(elem){return elem.textContent;},SpanElts[index]);
    //     console.log(textElt);
        
    // }
    let text =  await tab.evaluate(function(elem){return elem.textContent;},SpanElts[0]);
    // Number(text)//console.log(text); //.fr66n .wpO6b // ._65Bje.coreSpriteRightPaginationArrow
    await tab.click(".eLAPa");
    for(let i =0;i<Number(text);i++)
    {
        await tab.waitForSelector(".fr66n .wpO6b",{visible: true});
        await tab.click(".fr66n .wpO6b");
        await tab.click("._65Bje.coreSpriteRightPaginationArrow");
    }
} catch (error) {
  console.log(error);
}
    



})();
