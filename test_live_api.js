async function testVercelApiContact() {
  try {
    console.log('Sending POST to https://ozpercin-web-5333.vercel.app/api/contact ...');
    const res = await fetch('https://ozpercin-web-5333.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: 'Vercel Live Tester',
        email: 'info@ozpercin.com',
        subject: 'Canlı Vercel SMTP Testi',
        message: 'Bu Vercel canlı /api/contact fonksiyonundan cPanel SMTP ile gönderilen test mesajıdır.'
      })
    });
    console.log('HTTP Status Code:', res.status);
    const text = await res.text();
    console.log('Raw Response:', text);
  } catch (err) {
    console.error('Fetch Error:', err);
  }
}

testVercelApiContact();
