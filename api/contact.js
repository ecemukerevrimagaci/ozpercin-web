import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message, honeypot } = req.body || {};

    // Anti-spam honeypot check
    if (honeypot) {
      return res.status(200).json({ success: true, message: 'Mesajınız gönderildi.' });
    }

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Lütfen tüm alanları doldurun.' });
    }

    const emailSubject = `Özperçin Web İletişim Formu: ${subject}`;
    const emailBodyHtml = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #1E293B; max-width: 600px; border: 1px solid #E2E8F0; border-radius: 12px; background: #FFFFFF;">
        <h2 style="color: #0F172A; border-bottom: 2px solid #2563EB; padding-bottom: 10px; margin-top: 0;">🔩 Yeni Web İletişim Formu Mesajı</h2>
        <p style="margin: 8px 0;"><strong>Gönderen Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 8px 0;"><strong>E-Posta Adresi:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #2563EB;">${escapeHtml(email)}</a></p>
        <p style="margin: 8px 0;"><strong>Konu:</strong> ${escapeHtml(subject)}</p>
        <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;">
        <p style="margin: 8px 0;"><strong>Mesaj:</strong></p>
        <div style="background: #F8FAFC; padding: 16px; border-left: 4px solid #2563EB; border-radius: 6px; white-space: pre-wrap; color: #334155;">${escapeHtml(message)}</div>
        <br>
        <small style="color: #94A3B8; display: block; margin-top: 12px;">Bu e-posta ozpercin.com web sitesi iletişim formundan otomatik olarak gönderilmiştir.</small>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: 'mail.ozpercin.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@ozpercin.com',
        pass: 'OZP@2026@ozp'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const info = await transporter.sendMail({
      from: '"Özperçin Web Formu" <info@ozpercin.com>',
      to: 'info@ozpercin.com',
      replyTo: email,
      subject: emailSubject,
      html: emailBodyHtml
    });

    console.log('Contact form email sent successfully via SMTP:', info.messageId);
    return res.status(200).json({ success: true, message: 'Mesajınız başarıyla iletildi.' });

  } catch (error) {
    console.error('Serverless SMTP Contact Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'E-posta gönderilirken sunucu hatası oluştu: ' + error.message 
    });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
