import './style.css'

// Language Dictionary (Fact-based, non-exaggerated translation keys)
const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.production': 'Üretim',
    'nav.quality': 'Kalite',
    'nav.contact': 'İletişim',
    
    'hero.title': 'Endüstriyel Bağlantı Elemanlarında <br><span class="text-gradient">Soğuk Dövme Teknolojisi</span>',
    'hero.subtitle': '1972 yılından bu yana 3 mm ile 11 mm çap aralığında yüksek mukavemetli standart ve özel cıvata ve perçin üretimi.',
    'hero.cta': 'Ürün Kataloğu',
    'hero.contact': 'Bize Ulaşın',
    
    'stats.established': 'Kuruluş',
    'stats.area': 'Kapalı Alan',
    'stats.diameter': 'Çap Aralığı',
    'stats.standards': 'Üretim Normları',
    
    'home.aboutTitle': 'Özperçin Cıvata Sanayi',
    'home.aboutSubtitle': 'Hassas Kalıp Tasarımı ve Entegre Soğuk Dövme',
    'home.aboutText1': 'Özperçin, yarım asrı aşan tecrübesiyle İstanbul Beylikdüzü Organize Sanayi Bölgesi\'nde yer alan tesislerinde üretim yapmaktadır. Bağlantı elemanları üretiminde kritik öneme sahip olan kalıpları, kendi bünyesindeki kalıphane ve tesviye ünitesinde tasarlayıp üretmektedir.',
    'home.aboutText2': 'Hammadde temini dışındaki tüm aşamaları (kalıp tasarımı, dövme presleme, ikincil diş açma/delme işlemleri) kendi çatısı altında toplayan tesisimiz, otomotiv, beyaz eşya, büro mobilyaları, bisiklet ve çocuk arabaları gibi birçok ana ve yan sanayi koluna hizmet sunmaktadır.',
    'home.aboutCta': 'Kurumsal Bilgilerimiz',
    
    'home.productsTitle': 'Ürün Gruplarımız',
    'home.productsDesc': 'Soğuk dövme ve talaşlı şekillendirme ile ürettiğimiz başlıca bağlantı elemanları.',
    'home.prodHexDesc': 'DIN 931, DIN 933 standartlarında, 8.8, 10.9, 12.9 mukavemet sınıflarında standart ve özel cıvata imalatı.',
    'home.prodSolidRivetsDesc': 'Çizime uygun yuvarlak, mercimek veya yassı başlı dolu perçinler ve kademeli perçin imalatı.',
    'home.prodSemiTubularRivetsDesc': 'Montaj kolaylığı sağlayan çizime uygun yarım delikli perçin imalatı.',
    'home.productsCta': 'Tüm Kataloğu & Teknik Detayları İncele',
    
    'home.sectorsTitle': 'Hizmet Verdiğimiz Sektörler',
    'home.sectorsDesc': 'Ürünlerimizin yoğun olarak kullanıldığı ana ve yan sanayi kolları.',
    'sectors.auto': 'Otomotiv Yan Sanayi',
    'sectors.appliances': 'Beyaz Eşya',
    'sectors.furniture': 'Büro Mobilyaları',
    'sectors.bicycles': 'Bisiklet & Bebek Arabaları',
    
    'home.ctaTitle': 'Proje veya Teknik Resim Talebiniz mi Var?',
    'home.ctaText': 'Teknik çizimleriniz doğrultusunda özel bağlantı elemanları için fiyat teklifi ve numune talebinde bulunabilirsiniz.',
    'home.ctaButton': 'İletişime Geçin',
    
    // Hakkimizda Page
    'about.pageTitle': 'Hakkımızda',
    'about.pageSubtitle': '1972\'den beri tecrübe ve hassasiyetle üretiyoruz.',
    'about.title': 'Kurumsal Profil',
    'about.subtitle': 'Yarım Asrı Aşan Üretim Gücü',
    'about.p1': 'Özperçin Cıvata ve Perçin Sanayii; 1972 yılında kurulmuş olup, bağlantı elemanları imalatı sektöründe köklü bir geçmişe sahiptir. İstanbul Bayrampaşa\'da başlayan üretim serüvenimiz, bugün Beylikdüzü Organize Sanayi Bölgesi\'ndeki (Birlik Sanayi Sitesi) 1000 metrekarelik kapalı alana sahip modern tesislerimizde devam etmektedir.',
    'about.p2': 'Şirketimiz, uzman kadrosu ve modern soğuk dövme makine parkuru ile 3 mm ile 11 mm çap aralığındaki yüksek mukavemetli standart ve özel bağlantı elemanlarının üretimini gerçekleştirmektedir. Hammadde temini dışındaki tüm kalıp, tasarım ve tesviye süreçlerini kendi bünyesinde yürüten entegre bir tesise sahibiz.',
    'about.p3': 'Üretimimizin büyük bir bölümünü Büro Mobilyaları, Otomotiv, Beyaz Eşya, Bisiklet, Çocuk Arabaları ve bu sektörlere bağlı yan sanayilere tedarik etmekteyiz. Müşteri ihtiyaçları doğrultusunda paslanmaz çelik, bakır, alüminyum ve demir gibi farklı malzemelerden teknik resme uygun özel imalatlar yapmaktayız.',
    'about.statYear': 'Kuruluş Yılı',
    'about.statArea': 'Üretim Alanı',
    'about.statDiameter': 'Çap Aralığı',
    'about.statYears': 'Yıllık Tecrübe',
    'about.missionTitle': 'Misyonumuz',
    'about.missionText': 'Müşterilerimizin özel teknik gereksinimlerine göre en yüksek kalitede, standart ve özel bağlantı elemanlarını üreterek sanayinin kesintisiz ve güvenli bir şekilde çalışmasına katkıda bulunmak.',
    'about.visionTitle': 'Vizyonumuz',
    'about.visionText': 'Soğuk dövme teknolojisindeki teknolojik gelişmeleri sürekli entegre ederek, kaliteden ödün vermeden yerel ve global sanayide aranan, güvenilir çözüm ortağı konumumuzu sürdürmek.',
    'about.valuesTitle': 'Değerlerimiz',
    'about.valuesText': 'Sayısal verilere ve kalite standartlarına dayalı üretim yapmak, teknik resim hassasiyetine tam uyum sağlamak, şeffaf iletişim ve müşteri odaklı esnek üretim yapısını korumak.',
    
    // Urunler Page
    'products.pageTitle': 'Ürün Kataloğu',
    'products.pageSubtitle': 'Standart ve özel teknik resme uygun soğuk dövme bağlantı elemanlarımız.',
    'products.tabHex': 'Altıgen Başlı Cıvatalar',
    'products.tabSolidRivets': 'Dolu Perçinler',
    'products.tabSemiTubularRivets': 'Yarım Delikli Perçinler',
    'products.hexTitle': 'Altıgen Başlı Cıvatalar',
    'products.hexDesc': 'Genel makine, çelik konstrüksiyon ve montaj sanayisinde kullanılan, standart altıgen kafa tasarımına sahip, yüksek dayanımlı bağlantı elemanlarıdır. Soğuk dövme yöntemimizle yüksek mukavemet ve hassas diş yapısı elde edilir.',
    'products.tableTitle': 'Teknik Özellikler',
    'products.thParam': 'Parametre',
    'products.thVal': 'Değer / Özellik',
    'products.tdMaterial': 'Malzeme Standardı',
    'products.tdSizes': 'Boyut Aralığı',
    'products.tdCoatings': 'Yüzey Kaplama',
    'products.tdSpecOps': 'Özel Operasyonlar',
    'products.coatingsHex': 'Çinko, Nikel, Janjan',
    'products.hexMaterialVal': 'Sınıf 8.8, 10.9, 12.9',
    'products.hexSizesVal': 'M3 - M11 (Çap: 3mm - 11mm, Boy: 8mm - 80mm)',
    'products.hexItem1': 'Tam Diş Altıgen Cıvata (DIN 933)',
    'products.hexItem2': 'Yarım Diş Altıgen Cıvata (DIN 931)',
    'products.solidRivetsTitle': 'Dolu Perçinler',
    'products.solidRivetsDesc': 'Yuvarlak başlı, mercimek başlı, havşa başlı ve yassı başlı dolu perçinler. Kalıp tasarımımız sayesinde yüksek boyutsal hassasiyete ve mukavemete sahiptir. Otomotiv, beyaz eşya ve genel sanayide yoğun şekilde kullanılır.',
    'products.solidRivetsItem1': 'Dolu Perçinler (DIN 660, DIN 661, DIN 674 vb.)',
    'products.solidRivetsItem2': 'Kademeli & Konik Perçinler',
    'products.solidMaterials': 'Paslanmaz Çelik (304, 316), Alüminyum, Bakır',
    'products.solidSizes': 'Çap: M3 - M11 (3mm - 11mm), Boy: 5mm - 120mm',
    'products.solidSpecOps': 'Kademeli kafa/gövde dövme, konik dövme, kafa markalama',
    'products.semiTubularRivetsTitle': 'Yarım Delikli Perçinler',
    'products.semiTubularRivetsDesc': 'Baş kısmından itibaren gövde boyunca belirli bir derinliğe kadar delinmiş perçinlerdir. Kolay perçinlenme ve montaj avantajı sağlar, otomotiv ve beyaz eşya montaj hatlarında sıkça tercih edilir.',
    'products.semiTubularRivetsItem1': 'Yarım Delikli Perçinler (DIN 7338)',
    'products.semiTubularMaterials': 'Kaliteli Demir Malzeme (Qst36-3, T4, 1006, 20MnB4)',
    'products.semiTubularSizes': 'Çap: M3 - M10 (3mm - 10mm), Delik Derinliği: Standart veya çizime özel',
    'products.semiTubularSpecOps': 'Yarım delik dövme presleme',
    
    // Uretim Page
    'production.pageTitle': 'Üretim Tesisleri',
    'production.pageSubtitle': 'Entegre üretim parkurumuzda soğuk dövme ve hassas talaşlı imalat operasyonları.',
    'production.title': 'Üretim Kabiliyetlerimiz',
    'production.subtitle': '1000m² Kapalı Alanda Entegre Çözümler',
    'production.p1': 'Özperçin Cıvata Sanayi, Beylikdüzü Organize Sanayi Bölgesi\'nde yer alan 1000 metrekarelik kapalı imalat tesislerinde modern soğuk dövme teknolojileri kullanarak üretim yapmaktadır. Tesisimizde hammaddeden bitmiş ürüne giden süreçte, tasarım ve kalıp yapımı dahil tüm aşamalar denetlenmektedir.',
    'production.p2': 'Soğuk Dövme Parkuru: 3.0 mm ile 11.0 mm çaplar arasındaki tel malzemeleri yüksek hız ve hassasiyetle şekillendirebilen çok istasyonlu cıvata ve perçin dövme makinelerinden oluşur. Soğuk dövme, talaşlı imalata göre yüksek mukavemet, sıfıra yakın hammadde firesi ve pürüzsüz yüzey kalitesi sunmaktadır.',
    'production.p3': 'Kendi Kalıphanemiz ve Tesviye Tesisimiz: Müşterilerimizin özel parça çizimlerine göre gerekli olan şekillendirme ve kesme kalıpları, kendi bünyemizdeki CNC ve manuel tezgahlarımızda tasarlanıp üretilmektedir. Bu sayede yeni ürün devreye alma süreleri kısalmakta ve tolerans sınırları hassasiyetle kontrol edilmektedir.',
    'production.cardTitle': 'Makine Parkuru Detayları',
    'production.mach1': 'Çok İstasyonlu Soğuk Dövme Presleri: ',
    'production.mach2': 'Diş Ovalama & Açma Makineleri: ',
    'production.mach3': 'Perçin Delme Presleri: ',
    'production.mach4': 'Tasarım & Kalıphane: ',
    'production.processTitle': 'Üretim Akış Sürecimiz',
    'production.processDesc': 'Hammaddeden sevkiyata kadar uyguladığımız adım adım imalat aşamaları.',
    'production.step1Title': 'Hammadde Hazırlığı',
    'production.step1Desc': 'Sertifikalı filmaşin çelikler tesisimize gelir, kalite kontrolden geçerek doğrultulur ve kalibrelendirilir.',
    'production.step2Title': 'Kalıp & Ayar Tasarımı',
    'production.step2Desc': 'Teknik resme uygun şekillendirme kalıpları kendi kalıphanemizde hazırlanır ve preslere bağlanır.',
    'production.step3Title': 'Soğuk Şekillendirme',
    'production.step3Desc': 'Çok istasyonlu preslerde malzemeye yüksek basınç altında, soğuk olarak kafa ve gövde formu verilir.',
    'production.step4Title': 'Diş Ovalama ve İşleme',
    'production.step4Desc': 'Cıvatalara ovalama yöntemiyle diş açılır, perçinlere kanal açma işlemleri uygulanır.',
    'production.step5Title': 'Kaplama',
    'production.step5Desc': 'Korozyon önleyici kaplama gereksinimleri için onaylı iş ortaklarımızda kaplama yapılır.',
    'production.step6Title': 'Final Kontrol & Paketleme',
    'production.step6Desc': 'Boyutsal, sertlik ve tork testlerinden geçen ürünler, etiketlenerek sevkiyata hazır hale getirilir.',
    
    // Quality Page
    'quality.pageTitle': 'Kalite Yönetimi',
    'quality.pageSubtitle': 'Müşteri taleplerine ve teknik resim toleranslarına uygun, hata payı minimize edilmiş ölçüm ve güvence sistemleri.',
    'quality.title': 'Kalite Politikamız',
    'quality.subtitle': 'Hata Önleme ve Hassas Kontrol',
    'quality.p1': 'Özperçin Cıvata Sanayi olarak, sıfır hata felsefesine yakın bir tolerans hassasiyeti ile çalışmaktayız. Üretilen tüm standart cıvata ve perçin gruplarının yanı sıra, özel üretim parçalarda da müşteri teknik çizimlerinin öngördüğü ölçü ve toleransları eksiksiz karşılamaktayız.',
    'quality.p2': 'Laboratuvar kontrol süreçlerimizde, hammaddenin kimyasal ve mekanik analizlerinden başlayarak soğuk şekillendirme, diş açma, delik delme ve kaplama sonrası final aşamalarına kadar her parti ürün izlenebilir bir biçimde takip edilmektedir.',
    'quality.stage1': '1. Giriş Kalite Kontrol',
    'quality.stage1Desc': 'Tesisimize giren her parti filmaşin demir/çelik malzemenin üretici analiz sertifikaları denetlenir. Boyutsal toleranslar, mikrometrelerle ölçülerek onaylanır.',
    'quality.stage2': '2. Proses Kalite Kontrol',
    'quality.stage2Desc': 'Pres dövme ve diş ovalama aşamalarında, operatörler ve kalite teknisyenleri tarafından belirli periyotlarla örnekler alınarak boyutsal kumpas ve mastar kontrolleri yapılır.',
    'quality.machineryTitle': 'Laboratuvar ve Test Cihazlarımız',
    'quality.machinerySubtitle': 'Yüksek hassasiyete ve uluslararası normlara uygun test cihazları.',
    'quality.machine1': 'Çekme Dayanımı Testi',
    'quality.machine1Desc': 'Ürünlerin kopma ve gerilme sınırlarını belirlemek için kullanılan hidrolik çekme-kopma test cihazı.',
    'quality.machine2': 'Emniyet Yükü & Basma Testi',
    'quality.machine2Desc': 'Bağlantı elemanlarının kalıcı deformasyona uğramadan taşıyabileceği maksimum yük testleri.',
    
    // Contact Page
    'contact.pageTitle': 'İletişim',
    'contact.pageSubtitle': 'Sipariş, teknik teklif ve sorularınız için bizimle doğrudan irtibata geçebilirsiniz.',
    'contact.title': 'İrtibat Bilgileri',
    'contact.desc': 'Fabrika konumumuz ve aktif iletişim kanallarımız.',
    'contact.addressTitle': 'Adres',
    'contact.phoneTitle': 'Telefon Hatlarımız',
    'contact.faxTitle': 'Faks',
    'contact.emailTitle': 'E-Posta',
    'contact.hoursTitle': 'Çalışma Saatleri',
    'contact.hoursText': 'Pazartesi - Cuma: 08:00 - 18:00 <br>Cumartesi - Pazar: Kapalı',
    'contact.formName': 'Adınız Soyadınız *',
    'contact.formEmail': 'E-Posta Adresiniz *',
    'contact.formSubject': 'Konu *',
    'contact.formMessage': 'Mesajınız *',
    'contact.formSubmit': 'Mesajı Gönder',
    'contact.mapTitle': 'Harita Konumu',
    'contact.mapDesc': 'Fabrikamız Beylikdüzü Organize Sanayi Bölgesi içinde yer almaktadır.',
    
    // Footer & Generic
    'footer.desc': '1972\'den beri endüstriyel bağlantı elemanlarında güvenilir ve yüksek mukavemetli üretim ortağınız.',
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.contactTitle': 'İletişim Bilgileri',
    'footer.address': 'Birlik Sanayi Sitesi 1. Cd. No:24/13 Beylikdüzü / İstanbul'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.production': 'Production',
    'nav.quality': 'Quality',
    'nav.contact': 'Contact',
    
    'hero.title': 'Cold Forging Technology <br><span class="text-gradient">in Industrial Fasteners</span>',
    'hero.subtitle': 'Manufacturing high-strength standard and custom bolts and rivets in the 3 mm to 11 mm diameter range since 1972.',
    'hero.cta': 'Product Catalog',
    'hero.contact': 'Contact Us',
    
    'stats.established': 'Established',
    'stats.area': 'Indoor Area',
    'stats.diameter': 'Diameter Range',
    'stats.standards': 'Production Norms',
    
    'home.aboutTitle': 'Özperçin Cıvata Sanayi',
    'home.aboutSubtitle': 'Precise Mold Design and Integrated Cold Forging',
    'home.aboutText1': 'Özperçin, with more than half a century of experience, manufactures in its facilities located in the Istanbul Beylikdüzü Organized Industrial Zone. We design and manufacture our own tooling and dies in-house, which are critical for fastener production.',
    'home.aboutText2': 'Bringing all manufacturing phases under one roof—except raw material sourcing—our plant serves key sectors such as Automotive, White Goods, Office Furniture, Bicycles, Baby Strollers, and their supplier networks.',
    'home.aboutCta': 'Corporate Profile',
    
    'home.productsTitle': 'Our Product Range',
    'home.productsDesc': 'Key fasteners manufactured using cold forging and secondary machining.',
    'home.prodHexDesc': 'Standard and custom bolts in DIN 931, DIN 933 standards, with strength classes 8.8, 10.9, 12.9.',
    'home.prodSolidRivetsDesc': 'Manufacturing of round, truss, and flat head solid rivets and shoulder rivets according to drawings.',
    'home.prodSemiTubularRivetsDesc': 'Manufacturing of custom semi-tubular rivets for easy assembly.',
    'home.productsCta': 'View Catalog & Technical Specs',
    
    'home.sectorsTitle': 'Sectors We Serve',
    'home.sectorsDesc': 'Primary and secondary industrial sectors where our products are extensively used.',
    'sectors.auto': 'Automotive Supply Chain',
    'sectors.appliances': 'White Goods',
    'sectors.furniture': 'Office Furniture',
    'sectors.bicycles': 'Bicycles & Strollers',
    
    'home.ctaTitle': 'Have a Project or Custom Blueprint?',
    'home.ctaText': 'You can request price quotes and sample production for custom fasteners according to your technical drawings.',
    'home.ctaButton': 'Get In Touch',
    
    // Hakkimizda Page
    'about.pageTitle': 'About Us',
    'about.pageSubtitle': 'Manufacturing with experience and precision since 1972.',
    'about.title': 'Corporate Profile',
    'about.subtitle': 'Over Half a Century of Production Power',
    'about.p1': 'Özperçin Cıvata ve Perçin Sanayii was founded in 1972 and holds a deep-rooted history in the fastener manufacturing sector. Our production journey, which began in Bayrampaşa, Istanbul, continues today in our modern facilities with 1000 square meters of covered area in the Beylikdüzü Organized Industrial Zone (Birlik Industrial Site).',
    'about.p2': 'Our company manufactures high-strength standard and special fasteners in the diameter range of 3 mm to 11 mm with its expert staff and modern cold forging machine park. We run an integrated facility that conducts all mold tooling, drafting, and secondary leveling processes in-house.',
    'about.p3': 'We supply the majority of our production to Office Furniture, Automotive, White Goods, Bicycles, Baby Strollers, and their related sub-industries. We perform custom manufacturing from different materials such as stainless steel, copper, aluminum, and iron in accordance with technical drawings.',
    'about.statYear': 'Established Year',
    'about.statArea': 'Production Area',
    'about.statDiameter': 'Diameter Range',
    'about.statYears': 'Years of Experience',
    'about.missionTitle': 'Our Mission',
    'about.missionText': 'To contribute to the continuous and safe operation of the industry by manufacturing the highest quality standard and custom fasteners according to the special technical specifications of our customers.',
    'about.visionTitle': 'Our Vision',
    'about.visionText': 'To maintain our position as a sought-after, reliable solution partner in the local and global industry by continuously integrating technological developments in cold forging technology.',
    'about.valuesTitle': 'Our Values',
    'about.valuesText': 'Manufacturing based on numerical data and quality standards, ensuring full compliance with engineering drawings, and maintaining transparent communication and an agile production structure.',
    
    // Urunler Page
    'products.pageTitle': 'Product Catalog',
    'products.pageSubtitle': 'Standard and custom cold-forged fasteners matching technical drawings.',
    'products.tabHex': 'Hexagon Head Bolts',
    'products.tabSolidRivets': 'Solid Rivets',
    'products.tabSemiTubularRivets': 'Semi-Tubular Rivets',
    'products.hexTitle': 'Hexagon Head Bolts',
    'products.hexDesc': 'High-strength fasteners with standard hexagonal head design, widely used in machinery, steel structures, and assembly industries. Cold forging ensures high tensile strength and precise thread profiling.',
    'products.tableTitle': 'Technical Specifications',
    'products.thParam': 'Parameter',
    'products.thVal': 'Value / Specification',
    'products.tdMaterial': 'Material Standard',
    'products.tdSizes': 'Size Range',
    'products.tdCoatings': 'Surface Coating',
    'products.tdSpecOps': 'Special Operations',
    'products.coatingsHex': 'Zinc, Nickel, Iridescent Zinc',
    'products.hexMaterialVal': 'Class 8.8, 10.9, 12.9',
    'products.hexSizesVal': 'M3 - M11 (Diameter: 3mm - 11mm, Length: 8mm - 80mm)',
    'products.hexItem1': 'Full-Thread Hex Bolt (DIN 933)',
    'products.hexItem2': 'Half-Thread Hex Bolt (DIN 931)',
    'products.solidRivetsTitle': 'Solid Rivets',
    'products.solidRivetsDesc': 'Round head, flat head, truss head, and countersunk solid rivets. High dimensional accuracy and strength due to our tooling design. Widely used in automotive, white goods, and general industry.',
    'products.solidRivetsItem1': 'Solid Rivets (DIN 660, DIN 661, DIN 674 etc.)',
    'products.solidRivetsItem2': 'Shoulder & Conical Rivets',
    'products.solidMaterials': 'Stainless Steel (304, 316), Aluminum, Copper',
    'products.solidSizes': 'Diameter: M3 - M11 (3mm - 11mm), Length: 5mm - 120mm',
    'products.solidSpecOps': 'Shoulder body/head forging, conical heading, head marking',
    'products.semiTubularRivetsTitle': 'Semi-Tubular Rivets',
    'products.semiTubularRivetsDesc': 'Fasteners designed with a partial hole at the tip of the shank, reducing the force required for application. Widely used in automotive, electronics, and appliance assemblies.',
    'products.semiTubularRivetsItem1': 'Semi-Tubular Rivets (DIN 7338)',
    'products.semiTubularMaterials': 'High-Quality Iron Material (Qst36-3, T4, 1006, 20MnB4)',
    'products.semiTubularSizes': 'Diameter: M3 - M10 (3mm - 10mm), Hole Depth: Standard or custom to drawing',
    'products.semiTubularSpecOps': 'Semi-tubular cold heading',
    
    // Uretim Page
    'production.pageTitle': 'Production Facilities',
    'production.pageSubtitle': 'Cold forging and precision machining operations in our integrated production facility.',
    'production.title': 'Production Capabilities',
    'production.subtitle': 'Integrated Solutions in 1000m² Covered Area',
    'production.p1': 'Özperçin Cıvata Sanayi manufactures using modern cold forging technologies in its 1000 square meter indoor production plant in the Beylikdüzü Organized Industrial Zone. We control all steps from wire raw material to finished product, including tooling design.',
    'production.p2': 'Cold Forging Line: Comprises multi-station bolt and rivet forging headers capable of shaping wire raw materials between 3.0 mm and 11.0 mm diameters with high speed and precision. Cold forging yields superior strength, near-zero material waste, and smooth surface quality compared to machined alternatives.',
    'production.p3': 'In-House Tooling Shop: Custom dies required for custom parts are designed and produced on our CNC and manual machine tools. This reduces lead times for new product implementation and maintains dimensional tolerances.',
    'production.cardTitle': 'Machine Park Details',
    'production.mach1': 'Multi-Station Cold Headers: ',
    'production.mach2': 'Thread Rollers: ',
    'production.mach3': 'Rivet Drilling Presses: ',
    'production.mach4': 'Tooling & Die Design Shop: ',
    'production.processTitle': 'Our Production Workflow',
    'production.processDesc': 'Step-by-step manufacturing phases applied from wire rod to shipping.',
    'production.step1Title': 'Raw Material Prep',
    'production.step1Desc': 'Certified wire rod steel is checked for quality, straightened, and drawn to diameter.',
    'production.step2Title': 'Die Tooling Setup',
    'production.step2Desc': 'Shaping dies matching drawings are prepared in our tooling shop and loaded to cold headers.',
    'production.step3Title': 'Cold Heading',
    'production.step3Desc': 'Under high pressure, cold headers shape the wire into bolt heads and bodies without heat.',
    'production.step4Title': 'Thread Rolling & Milling',
    'production.step4Desc': 'Threads are rolled into bolts; rivets undergo slotting operations.',
    'production.step5Title': 'Plating',
    'production.step5Desc': 'Electroplating and anti-corrosion coating are performed by certified partners.',
    'production.step6Title': 'Final Inspection & Packing',
    'production.step6Desc': 'Products undergoing dimensional check, hardness testing, and torque tests are packed for dispatch.',
    
    // Quality Page
    'quality.pageTitle': 'Quality Management',
    'quality.pageSubtitle': 'High-precision measurement and quality assurance systems with minimized margin of error.',
    'quality.title': 'Quality Policy',
    'quality.subtitle': 'Defect Prevention and Precise Inspection',
    'quality.p1': 'At Özperçin Cıvata Sanayi, we operate under strict tolerances approaching zero-defect manufacturing. We fully meet all dimensional and material specifications defined in customer blueprints for both standard and custom fastener components.',
    'quality.p2': 'Our laboratory tracking covers raw material chemical/mechanical analysis, heading, threading, and post-plating batches to guarantee complete traceability.',
    'quality.stage1': '1. Incoming Quality Control',
    'quality.stage1Desc': 'Analysis certificates of all incoming wire rod batches are verified. Wire diameters are checked using precision micrometers.',
    'quality.stage2': '2. In-Process Inspection',
    'quality.stage2Desc': 'During forging and rolling, parts are sampled periodically for calipers and thread gauges.',
    'quality.machineryTitle': 'Our Laboratory & Testing Equipment',
    'quality.machinerySubtitle': 'High-precision testing equipment matching international standards.',
    'quality.machine1': 'Tensile Strength Test',
    'quality.machine1Desc': 'Hydraulic tensile tester used to determine loading thresholds and ultimate tensile strength of fasteners.',
    'quality.machine2': 'Proof Load & Compression Test',
    'quality.machine2Desc': 'Maximum load capacity tests without causing permanent deformation on structural fasteners.',
    
    // Contact Page
    'contact.pageTitle': 'Contact',
    'contact.pageSubtitle': 'Contact us directly for inquiries, technical drawings, and quotes.',
    'contact.title': 'Contact Details',
    'contact.desc': 'Our factory location and active communication lines.',
    'contact.addressTitle': 'Address',
    'contact.phoneTitle': 'Phone Lines',
    'contact.faxTitle': 'Fax',
    'contact.emailTitle': 'Email',
    'contact.hoursTitle': 'Working Hours',
    'contact.hoursText': 'Monday - Friday: 08:00 - 18:00 <br>Saturday - Sunday: Closed',
    'contact.formName': 'Full Name *',
    'contact.formEmail': 'Email Address *',
    'contact.formSubject': 'Subject *',
    'contact.formMessage': 'Your Message *',
    'contact.formSubmit': 'Send Message',
    'contact.quickTitle': 'Fast Contact',
    'contact.quickDesc': 'For all orders, price quotes, and technical inquiries, you can reach our factory directly via phone or email.',
    'contact.callDirect': 'Call Direct: +90 212 876 11 00',
    'contact.emailDirect': 'Email: info@ozpercin.com',
    'contact.mapTitle': 'Map Location',
    'contact.mapDesc': 'Our factory is located inside the Beylikdüzü Organized Industrial Zone.',
    
    // Footer & Generic
    'footer.desc': 'Your reliable partner in industrial fasteners since 1972.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactTitle': 'Contact Information',
    'footer.address': 'Birlik Industrial Site 1. St. No:24/13 Beylikduzu / Istanbul'
  }
};

let currentLang = localStorage.getItem('language_preference') || 'tr';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Enforce HTTPS in production client-side
  enforceHTTPS();
  
  // Set Language toggle button text initially
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
  }
  
  // Apply language
  applyTranslations();

  // Navigation menu highlighting
  initNavigationHighlight();

  // Animations observer
  initScrollAnimations();
  
  // Language switch triggers
  initLanguageSwitcher();
  
  // Mobile menu toggle
  initMobileMenu();

  // Form handling removed

  // Map loader (Leaflet)
  initInteractiveMap();
  
  // Tabs controller for catalog
  initCatalogTabs();

  // Footer copyright year
  setCopyrightYear();

  // Navbar scroll shrink effect
  initNavbarScroll();

  // Floating contact button
  initFloatingContact();
});

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Floating WhatsApp / quick contact button
function initFloatingContact() {
  const fab = document.createElement('a');
  fab.href = 'tel:+902128761100';
  fab.id = 'fab-contact';
  fab.setAttribute('aria-label', 'Bizi Arayın');
  fab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.25.2 2.45.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>`;
  fab.title = 'Bizi Arayın: +90 212 876 11 00';
  document.body.appendChild(fab);
}

// Clientside HTTPS Enforcement
function enforceHTTPS() {
  if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    window.location.href = window.location.href.replace('http:', 'https:');
  }
}

// Translate logic
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  
  document.documentElement.lang = currentLang;
}

function initLanguageSwitcher() {
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) return;

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('language_preference', currentLang);
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyTranslations();
      });
    } else {
      applyTranslations();
    }
  });
}

// Navbar link highlight based on path name
function initNavigationHighlight() {
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const path = window.location.pathname;

  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    // Exact home page check
    if ((path === '/' || path === '/index.html') && href === '/') {
      link.classList.add('active');
    } else if (href !== '/' && path.includes(href)) {
      link.classList.add('active');
    }
  });
}

// Scroll animation triggers
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  revealElements.forEach(el => observer.observe(el));
}

// Mobile Menu toggling
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close when clicking links
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}

// Product catalog tab filtering
function initCatalogTabs() {
  const tabButtons = document.querySelectorAll('#catalog-tabs .tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(category);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('secure-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Sanitize and Validate inputs
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const honeypotInput = document.getElementById('honeypot');

    const inputs = [fullnameInput, emailInput, subjectInput, messageInput];
    resetErrors(inputs);

    // Anti-spam Honeypot check
    if (honeypotInput && honeypotInput.value !== '') {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    let isValid = true;
    const nameVal = sanitize(fullnameInput.value.trim());
    const emailVal = sanitize(emailInput.value.trim());
    const subjectVal = sanitize(subjectInput.value.trim());
    const messageVal = sanitize(messageInput.value.trim());

    if (!nameVal || nameVal.length < 2) {
      showInputError(fullnameInput, currentLang === 'tr'
        ? 'Lütfen adınızı ve soyadınızı girin.'
        : 'Please enter your full name.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      showInputError(emailInput, currentLang === 'tr'
        ? 'Lütfen geçerli bir e-posta adresi girin.'
        : 'Please enter a valid email address.');
      isValid = false;
    }

    if (!subjectVal || subjectVal.length < 3) {
      showInputError(subjectInput, currentLang === 'tr'
        ? 'Lütfen geçerli bir konu girin (En az 3 karakter).'
        : 'Please enter a valid subject.');
      isValid = false;
    }

    if (!messageVal || messageVal.length < 5) {
      showInputError(messageInput, currentLang === 'tr'
        ? 'Lütfen mesajınızı yazın.'
        : 'Please enter your message.');
      isValid = false;
    }

    if (!isValid) return;

    const submitBtn = document.getElementById('form-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
    }

    const formData = {
      name: nameVal,
      email: emailVal,
      subject: subjectVal,
      message: messageVal
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.ok && json.success) {
        localStorage.setItem('contact_form_last_submit', Date.now().toString());
        showFormStatus('success', currentLang === 'tr'
          ? 'Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.'
          : 'Your message has been sent successfully. We will get back to you shortly.');
        form.reset();
      } else {
        console.error('SMTP API Response Error:', json);
        const mailtoUrl = `mailto:info@ozpercin.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(`Ad Soyad: ${nameVal}\nE-Posta: ${emailVal}\n\nMesaj:\n${messageVal}`)}`;
        showFormStatus('error', currentLang === 'tr'
          ? `Mesaj gönderilirken sorun oluştu: ${json.message || 'Lütfen tekrar deneyin.'}<br><br><a href="${mailtoUrl}" class="btn btn-secondary" style="margin-top:0.5rem;display:inline-block;padding:0.5rem 1rem;font-size:0.9rem;">E-Posta Programınız ile Gönderin</a>`
          : `An error occurred: ${json.message || 'Please try again.'}<br><br><a href="${mailtoUrl}" class="btn btn-secondary">Send via Mail App</a>`, true);
      }
    })
    .catch(error => {
      console.error('SMTP API Fetch Error:', error);
      const mailtoUrl = `mailto:info@ozpercin.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(`Ad Soyad: ${nameVal}\nE-Posta: ${emailVal}\n\nMesaj:\n${messageVal}`)}`;
      showFormStatus('error', currentLang === 'tr'
        ? `Bağlantı hatası oluştu.<br><br><a href="${mailtoUrl}" class="btn btn-secondary" style="margin-top:0.5rem;display:inline-block;padding:0.5rem 1rem;font-size:0.9rem;">E-Posta Programınız ile Gönderin</a>`
        : `Connection error occurred.<br><br><a href="${mailtoUrl}" class="btn btn-secondary">Send via Mail App</a>`, true);
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'tr' ? 'Mesajı Gönder' : 'Send Message';
      }
    });
  });
}

// Input sanitizer utility to strip HTML characters (Anti XSS)
function sanitize(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function showInputError(inputEl, msg) {
  inputEl.classList.add('invalid');
  const errorBox = document.getElementById(`${inputEl.id}-error`);
  if (errorBox) {
    errorBox.textContent = msg;
  }
}

function resetErrors(inputs) {
  inputs.forEach(input => {
    input.classList.remove('invalid');
    const errorBox = document.getElementById(`${input.id}-error`);
    if (errorBox) {
      errorBox.textContent = '';
    }
  });
  const statusBox = document.getElementById('form-status-box');
  if (statusBox) {
    statusBox.style.display = 'none';
  }
}

function showFormStatus(type, msg, isHtml = false) {
  const statusBox = document.getElementById('form-status-box');
  if (!statusBox) return;

  statusBox.className = `form-status ${type}`;
  if (isHtml) {
    statusBox.innerHTML = msg;
  } else {
    statusBox.textContent = msg;
  }
  statusBox.style.display = 'block';
}

// Interactive Map Loader (Leaflet.js open-source map)
function initInteractiveMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  // Wait for Leaflet to load if needed (handles race conditions)
  if (typeof L === 'undefined') {
    setTimeout(initInteractiveMap, 100);
    return;
  }

  // Prevent double initialization
  if (mapEl._leaflet_id) return;

  try {
    // Fix default marker icon broken paths (common Leaflet CDN issue)
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    // Coordinates for Beylikdüzü OSB Birlik Sanayi Sitesi
    const factoryCoords = [40.999854, 28.659330];
    const map = L.map('map', {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    }).setView(factoryCoords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markerPopupText = currentLang === 'tr'
      ? '<strong>Özperçin Cıvata Sanayi</strong><br>Birlik Sanayi Sitesi 1. Cd. No:24/13<br>Beylikdüzü / İstanbul'
      : '<strong>Özperçin Cıvata Sanayi</strong><br>Birlik Industrial Site 1. St. No:24/13<br>Beylikdüzü / Istanbul';

    L.marker(factoryCoords).addTo(map)
      .bindPopup(markerPopupText)
      .openPopup();

    // Force map to recalculate size (fixes tile rendering in some browsers)
    setTimeout(() => {
      map.invalidateSize();
    }, 300);

  } catch (error) {
    console.error('Error loading interactive map:', error);
    // Fallback: show Google Maps link
    mapEl.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--bg-secondary);border-radius:24px;flex-direction:column;gap:1rem;">
        <p style="color:var(--text-secondary);">Harita yüklenemedi.</p>
        <a href="https://maps.google.com/?q=Birlik+Sanayi+Sitesi+Beylikduzu+Istanbul" target="_blank" rel="noopener" class="btn btn-secondary">Google Maps'te Aç</a>
      </div>`;
  }
}

function setCopyrightYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
