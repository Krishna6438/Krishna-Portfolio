import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR STACK:', err.stack));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    console.log("Navigating to http://localhost:5174/ ...");
    await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });

    console.log("Extracting root HTML...");
    const rootHTML = await page.evaluate(() => {
        return document.getElementById('root')?.innerHTML.substring(0, 500);
    });
    console.log("ROOT HTML START:", rootHTML);

    await browser.close();
})();
