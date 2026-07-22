const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  
  const testPage = async (url) => {
    console.log(`\nTesting ${url}`);
    const page = await browser.newPage();
    page.on('console', msg => {
      const type = msg.type();
      if (type === 'error' || type === 'warning') {
        console.log(`PAGE LOG [${type}]:`, msg.text());
      }
    });
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log(`Page loaded. Body height: ${pageHeight}`);
    
    await page.close();
  };

  await testPage('https://ozpercin-web-5333.vercel.app/urunler.html');
  await testPage('https://ozpercin-web-5333.vercel.app/iletisim.html');
  
  await browser.close();
})();
