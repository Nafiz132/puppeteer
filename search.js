const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const searchTerm = 'Puppeteer';

    await page.goto('https://www.google.com');

    await page.type('input[name="q"]', searchTerm);
    await page.keyboard.press('Enter');

    await page.waitForSelector('#search');

    const results = await page.evaluate(() => {
        let titles = Array.from(document.querySelectorAll('h3')).map(h3 => h3.innerText);
        return titles;
    });

    console.log(results);

    await browser.close();
})();
