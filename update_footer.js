import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlFiles = [
  'index.html',
  'hakkimizda.html',
  'urunler.html',
  'uretim.html',
  'kalite.html',
  'iletisim.html'
];

const targetContent = `        <div class="footer-links">
          <h4 data-i18n="footer.quickLinks">`;

const newContent = `        <div class="footer-contact footer-links">
          <h4 data-i18n="footer.contactTitle">İletişim Bilgileri</h4>
          <a href="https://maps.google.com/?q=Birlik+Sanayi+Sitesi+Beylikduzu+Istanbul" target="_blank" rel="noopener" style="display:flex; gap:0.5rem; align-items:flex-start; line-height:1.4; max-width: 280px;"><span style="font-size:1.1rem">📍</span> <span data-i18n="footer.address">Birlik Sanayi Sitesi 1. Cd. No:24/13 Beylikdüzü / İstanbul</span></a>
          <a href="tel:+902128761100" style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:1.1rem">📞</span> +90 212 876 11 00</a>
          <a href="mailto:info@ozpercin.com" style="display:flex; gap:0.5rem; align-items:center;"><span style="font-size:1.1rem">✉️</span> info@ozpercin.com</a>
        </div>
        <div class="footer-links">
          <h4 data-i18n="footer.quickLinks">`;

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(targetContent) && !content.includes('footer-contact')) {
    content = content.replace(targetContent, newContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file}`);
  }
});
