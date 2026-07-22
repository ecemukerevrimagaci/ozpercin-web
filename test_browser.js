const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  
  const testPage = async (url) => {
    console.log(`\nTesting ${url}`);
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Evaluate tabs
    const tabCount = await page.evaluate(() => document.querySelectorAll('.tab-btn').length);
    console.log(`Tabs found: ${tabCount}`);
    
    await page.close();
  };

  await testPage('https://ozpercin-web-5333.vercel.app/urunler.html');
  await testPage('https://ozpercin-web-5333.vercel.app/iletisim.html');
  
  await browser.close();
})();
