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
    'hero.subtitle': '1972 yılından bu yana 3 mm ile 11 mm çap aralığında yüksek mukavemetli standart ve özel cıvata, somun ve perçin üretimi.',
    'hero.cta': 'Ürün Kataloğu',
    'hero.contact': 'Bize Ulaşın',
    
    'stats.established': 'Kuruluş',
    'stats.area': 'Kapalı Alan',
    'stats.diameter': 'Çap Aralığı',
    'stats.standards': 'Üretim Normları',
    
    'home.aboutTitle': 'Özperçin Cıvata Sanayi A.Ş.',
    'home.aboutSubtitle': 'Hassas Kalıp Tasarımı ve Entegre Soğuk Dövme',
    'home.aboutText1': 'Özperçin, yarım asrı aşan tecrübesiyle İstanbul Beylikdüzü Organize Sanayi Bölgesi\'nde yer alan tesislerinde üretim yapmaktadır. Bağlantı elemanları üretiminde kritik öneme sahip olan kalıpları, kendi bünyesindeki kalıphane ve tesviye ünitesinde tasarlayıp üretmektedir.',
    'home.aboutText2': 'Hammadde temini dışındaki tüm aşamaları (kalıp tasarımı, dövme presleme, ikincil diş açma/delme işlemleri) kendi çatısı altında toplayan tesisimiz, otomotiv, beyaz eşya, büro mobilyaları, bisiklet ve çocuk arabaları gibi birçok ana ve yan sanayi koluna hizmet sunmaktadır.',
    'home.aboutCta': 'Kurumsal Bilgilerimiz',
    
    'home.productsTitle': 'Ürün Gruplarımız',
    'home.productsDesc': 'Soğuk dövme ve talaşlı şekillendirme ile ürettiğimiz başlıca bağlantı elemanları.',
    'home.prodHexDesc': 'DIN 931, DIN 933 standartlarında, 8.8, 10.9, 12.9 mukavemet sınıflarında standart ve özel cıvata imalatı.',
    'home.prodFlangeDesc': 'Montaj yüzeyindeki basıncı dağıtan pul entegreli, gevşemeye dayanıklı flanşlı bağlantı elemanları.',
    'home.prodNutsDesc': 'DIN 934 standart altı köşe somunlar, fiberli emniyet somunları ve flanşlı somun imalatları.',
    'home.prodCustomDesc': 'Çizime uygun dolu, yarım ve tam delikli perçinler, kademeli cıvatalar, bisiklet pedal milleri ve saplamalar.',
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
    'products.tabFlange': 'Flanşlı Cıvatalar',
    'products.tabNuts': 'Somunlar',
    'products.tabCustom': 'Özel İmalat & Perçinler',
    'products.hexTitle': 'Altıgen Başlı Cıvatalar',
    'products.hexDesc': 'Genel makine, çelik konstrüksiyon ve montaj sanayisinde kullanılan, standart altıgen kafa tasarımına sahip, yüksek dayanımlı bağlantı elemanlarıdır. Soğuk dövme yöntemimizle yüksek mukavemet ve hassas diş yapısı elde edilir.',
    'products.tableTitle': 'Teknik Özellikler',
    'products.thParam': 'Parametre',
    'products.thVal': 'Değer / Özellik',
    'products.tdMaterial': 'Malzeme Standardı',
    'products.tdSizes': 'Boyut Aralığı',
    'products.tdCoatings': 'Yüzey Kaplama',
    'products.coatingsHex': 'Elektro Galvaniz (Mavi/Beyaz/Sarı Cr3+), Çinko Nikel, Fosfat Kaplama, Pasivasyon',
    'products.hexItem1': 'Tam Diş Altıgen Cıvata (DIN 933)',
    'products.hexItem2': 'Yarım Diş Altıgen Cıvata (DIN 931)',
    'products.flangeTitle': 'Flanşlı Cıvatalar',
    'products.flangeDesc': 'Baş kısmının altında entegre bir pul (flanş) barındıran bu cıvatalar, baskıyı geniş bir alana yayarak montaj yapılan yüzeye zarar gelmesini engeller ve gevşemeye karşı ekstra direnç sağlar. Özellikle otomotiv ve beyaz eşya montaj hatlarında yaygın olarak tercih edilir.',
    'products.coatingsFlange': 'Çinko Pul Kaplama (Zinc Flake), Çinko Nikel, Elektro Galvaniz (Cr3+), Geomet',
    'products.flangeItem1': 'Düz Flanşlı Altıgen Cıvata (DIN 6921)',
    'products.flangeItem2': 'Tırtıllı Flanşlı Altıgen Cıvata',
    'products.nutsTitle': 'Somunlar',
    'products.nutsDesc': 'Cıvatalar veya saplamalarla birleştirilen, içinde vida dişi barındıran bağlantı elemanlarıdır. Soğuk dövme şekillendirme ve sonrasındaki hassas diş açma operasyonları ile üretilmektedir. Yüksek mukavemet sınıflarında sıkma ve tork değerlerini tam karşılar.',
    'products.coatingsNuts': 'Galvaniz kaplama (mavi, sarı), Çinko Nikel, Bakır kaplama, waxlama/yağlama',
    'products.nutItem1': 'Altı Köşe Somun (DIN 934)',
    'products.nutItem2': 'Fiberli Emniyet Somunu (DIN 985)',
    'products.customTitle': 'Özel İmalat Parçalar & Perçinler',
    'products.customDesc': 'Özperçin\'in soğuk dövme ve kalıp tasarımı kabiliyetlerinin en yüksek düzeyde sergilendiği gruptur. Teknik resim veya örneğe uygun olarak kademeli, kanallı, delikli perçinler, bisiklet pedal milleri, teker tabla sacları, teker orta pimleri ve trifon dişliler bu grupta üretilmektedir.',
    'products.specOps': 'Kademeli gövde dövme, kanal açma, delik delme (yarım/tam delikli perçin), trifon ve trapezoidal diş açma',
    'products.specItem1': 'Dolu Perçinler (Yuvarlak/Yassı Başlı)',
    'products.specItem2': 'Kademeli & Konik Perçinler',
    'products.specItem3': 'Bisiklet Pedal Milleri ve Saplamalar',
    
    // Uretim Page
    'production.pageTitle': 'Üretim Tesisleri',
    'production.pageSubtitle': 'Entegre üretim parkurumuzda soğuk dövme ve hassas talaşlı imalat operasyonları.',
    'production.title': 'Üretim Kabiliyetlerimiz',
    'production.subtitle': '1000m² Kapalı Alanda Entegre Çözümler',
    'production.p1': 'Özperçin Cıvata Sanayi A.Ş., Beylikdüzü Organize Sanayi Bölgesi\'nde yer alan 1000 metrekarelik kapalı imalat tesislerinde modern soğuk dövme teknolojileri kullanarak üretim yapmaktadır. Tesisimizde hammaddeden bitmiş ürüne giden süreçte, tasarım ve kalıp yapımı dahil tüm aşamalar denetlenmektedir.',
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
    'production.step4Desc': 'Cıvata ve saplamalara ovalama yöntemiyle diş açılır, perçinlere delik delme ve kanal açma işlemleri uygulanır.',
    'production.step5Title': 'Isıl İşlem & Kaplama',
    'production.step5Desc': 'Belirlenen mukavemet sınıfları (8.8, 10.9) ve korozyon kaplama gereksinimleri için onaylı iş ortaklarımızda ısıl işlem ve kaplama yapılır.',
    'production.step6Title': 'Final Kontrol & Paketleme',
    'production.step6Desc': 'Boyutsal, sertlik ve tork testlerinden geçen ürünler, etiketlenerek sevkiyata hazır hale getirilir.',
    
    // Quality Page
    'quality.pageTitle': 'Kalite Yönetimi',
    'quality.pageSubtitle': 'DIN, ISO ve TSE standartlarına uygun, hata payı minimize edilmiş ölçüm ve güvence sistemleri.',
    'quality.title': 'Kalite Politikamız',
    'quality.subtitle': 'Hata Önleme ve Hassas Kontrol',
    'quality.p1': 'Özperçin Cıvata Sanayi A.Ş. olarak, sıfır hata felsefesine yakın bir tolerans hassasiyeti ile çalışmaktayız. Üretilen tüm standart cıvata, somun ve perçin gruplarının yanı sıra, özel üretim parçalarda da uluslararası standartların (DIN, ISO, ISO 9001:2015) öngördüğü normları eksiksiz karşılamaktayız.',
    'quality.p2': 'Laboratuvar kontrol süreçlerimizde, hammaddenin kimyasal ve mekanik analizlerinden başlayarak soğuk şekillendirme, diş açma, delik delme, ısıl işlem ve kaplama sonrası final aşamalarına kadar her parti ürün izlenebilir bir biçimde takip edilmektedir.',
    'quality.p3': 'Çevre ve Sağlık Uyumluluğu: Üretim süreçlerimizde kullanılan tüm yağlar ve yan sanayi kaplama operasyonlarımız RoHS (Tehlikeli Maddelerin Sınırlandırılması) ve REACH (Kimyasalların Kaydı, Değerlendirilmesi, İzni ve Kısıtlanması) direktiflerine tamamen uygundur.',
    'quality.stage1': '1. Giriş Kalite Kontrol',
    'quality.stage1Desc': 'Tesisimize giren her parti filmaşin demir/çelik malzemenin üretici analiz sertifikaları denetlenir. Boyutsal toleranslar, mikrometrelerle ölçülerek onaylanır.',
    'quality.stage2': '2. Proses Kalite Kontrol',
    'quality.stage2Desc': 'Pres dövme ve diş ovalama aşamalarında, operatörler ve kalite teknisyenleri tarafından belirli periyotlarla örnekler alınarak boyutsal kumpas, mastar ve profil projektör kontrolleri yapılır.',
    'quality.stage3': '3. Final Kalite Kontrol ve Test',
    'quality.stage3Desc': 'Bitmiş parçalar üzerinde mekanik dayanım sınıfı (8.8, 10.9) testleri, sertlik testleri (HV, HRC) ve kaplama kalınlık kontrolleri yapılarak sevkiyat onayı verilir.',
    'quality.certTitle': 'Standartlar ve Uyumluluklar',
    'quality.certDesc': 'İmalat süreçlerimizde ve ürünlerimizde tam uyum sağladığımız endüstriyel standartlar.',
    'quality.cert1': 'Kalite Yönetim Sistemi Standardı',
    'quality.cert2': 'Çevre ve İnsan Sağlığı Direktifleri Uyumu',
    'quality.cert3': 'Alman Standartlar Enstitüsü Üretim Uyumluluğu',
    'quality.cert4': 'Uluslararası Bağlantı Elemanları Boyutsal Tolerans Standartları',
    
    // Contact Page
    'contact.pageTitle': 'İletişim',
    'contact.pageSubtitle': 'Sipariş, teknik teklif ve sorularınız için bizimle doğrudan irtibata geçebilirsiniz.',
    'contact.title': 'İrtibat Bilgileri',
    'contact.desc': 'Fabrika konumumuz ve aktif iletişim kanallarımız.',
    'contact.addressTitle': 'Adres',
    'contact.phoneTitle': 'Telefon Hatlarımız',
    'contact.emailTitle': 'E-Posta',
    'contact.hoursTitle': 'Çalışma Saatleri',
    'contact.hoursText': 'Pazartesi - Cuma: 08:30 - 18:30 <br>Cumartesi: 08:30 - 13:00 <br>Pazar: Kapalı',
    'contact.formName': 'Adınız Soyadınız *',
    'contact.formEmail': 'E-Posta Adresiniz *',
    'contact.formSubject': 'Konu *',
    'contact.formMessage': 'Mesajınız *',
    'contact.formSubmit': 'Mesajı Gönder',
    'contact.mapTitle': 'Harita Konumu',
    'contact.mapDesc': 'Fabrikamız Beylikdüzü Organize Sanayi Bölgesi içinde yer almaktadır.',
    
    // Footer & Generic
    'footer.desc': '1972\'den beri endüstriyel bağlantı elemanlarında güvenilir ve yüksek mukavemetli üretim ortağınız.',
    'footer.quickLinks': 'Hızlı Bağlantılar'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.production': 'Production',
    'nav.quality': 'Quality',
    'nav.contact': 'Contact',
    
    'hero.title': 'Cold Forging Technology <br><span class="text-gradient">in Industrial Fasteners</span>',
    'hero.subtitle': 'Manufacturing high-strength standard and custom bolts, nuts, and rivets in the 3 mm to 11 mm diameter range since 1972.',
    'hero.cta': 'Product Catalog',
    'hero.contact': 'Contact Us',
    
    'stats.established': 'Established',
    'stats.area': 'Indoor Area',
    'stats.diameter': 'Diameter Range',
    'stats.standards': 'Production Norms',
    
    'home.aboutTitle': 'Özperçin Cıvata Sanayi A.Ş.',
    'home.aboutSubtitle': 'Precise Mold Design and Integrated Cold Forging',
    'home.aboutText1': 'Özperçin, with more than half a century of experience, manufactures in its facilities located in the Istanbul Beylikdüzü Organized Industrial Zone. We design and manufacture our own tooling and dies in-house, which are critical for fastener production.',
    'home.aboutText2': 'Bringing all manufacturing phases under one roof—except raw material sourcing—our plant serves key sectors such as Automotive, White Goods, Office Furniture, Bicycles, Baby Strollers, and their supplier networks.',
    'home.aboutCta': 'Corporate Profile',
    
    'home.productsTitle': 'Our Product Range',
    'home.productsDesc': 'Key fasteners manufactured using cold forging and secondary machining.',
    'home.prodHexDesc': 'Standard and custom bolts in DIN 931, DIN 933 standards, with strength classes 8.8, 10.9, 12.9.',
    'home.prodFlangeDesc': 'Loosening-resistant flange fasteners with integrated washers that distribute mounting pressure.',
    'home.prodNutsDesc': 'DIN 934 standard hexagon nuts, nylon insert lock nuts, and flange nuts.',
    'home.prodCustomDesc': 'Solid, semi-tubular and tubular rivets, shoulder/step bolts, bicycle pedal shafts, and studs according to drawings.',
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
    'products.tabFlange': 'Flange Bolts',
    'products.tabNuts': 'Nuts',
    'products.tabCustom': 'Custom Parts & Rivets',
    'products.hexTitle': 'Hexagon Head Bolts',
    'products.hexDesc': 'High-strength fasteners with standard hexagonal head design, widely used in machinery, steel structures, and assembly industries. Cold forging ensures high tensile strength and precise thread profiling.',
    'products.tableTitle': 'Technical Specifications',
    'products.thParam': 'Parameter',
    'products.thVal': 'Value / Specification',
    'products.tdMaterial': 'Material Standard',
    'products.tdSizes': 'Size Range',
    'products.tdCoatings': 'Surface Coating',
    'products.coatingsHex': 'Electro-Galvanized (Blue/White/Yellow Cr3+), Zinc-Nickel, Phosphating, Passivation',
    'products.hexItem1': 'Full-Thread Hex Bolt (DIN 933)',
    'products.hexItem2': 'Half-Thread Hex Bolt (DIN 931)',
    'products.flangeTitle': 'Flange Bolts',
    'products.flangeDesc': 'Featuring an integrated washer (flange) beneath the bolt head, these bolts distribute clamping force over a broader surface area, protecting assembly components and providing extra resistance to loosening. Widely used in automotive and domestic appliance lines.',
    'products.coatingsFlange': 'Zinc Flake Coating, Zinc-Nickel, Electro-Galvanized (Cr3+), Geomet',
    'products.flangeItem1': 'Plain Flange Hex Bolt (DIN 6921)',
    'products.flangeItem2': 'Serrated Flange Hex Bolt',
    'products.nutsTitle': 'Nuts',
    'products.nutsDesc': 'Mating fasteners containing internal threads used with bolts or studs. Manufactured via cold forging followed by high-precision tapping. Complies fully with torque requirements in high-strength classes.',
    'products.coatingsNuts': 'Galvanized (blue, yellow), Zinc-Nickel, Copper Plating, Waxing/Oiling',
    'products.nutItem1': 'Hexagon Nut (DIN 934)',
    'products.nutItem2': 'Nylon Insert Lock Nut (DIN 985)',
    'products.customTitle': 'Custom Components & Rivets',
    'products.customDesc': 'This group represents the highest level of Özperçin\'s cold forging and custom tooling capabilities. Step, grooved, semi-tubular and tubular rivets, bicycle pedal shafts, wheel plate sheet components, center pins, and self-tapping/trifon studs are manufactured according to technical drawings.',
    'products.specOps': 'Shoulder body forging, slotting, drilling (semi/full tubular rivets), self-tapping and trapezoidal thread rolling',
    'products.specItem1': 'Solid Rivets (Round/Flat Head)',
    'products.specItem2': 'Shoulder & Conical Rivets',
    'products.specItem3': 'Bicycle Pedal Shafts and Studs',
    
    // Uretim Page
    'production.pageTitle': 'Production Facilities',
    'production.pageSubtitle': 'Cold forging and precision machining operations in our integrated production facility.',
    'production.title': 'Production Capabilities',
    'production.subtitle': 'Integrated Solutions in 1000m² Covered Area',
    'production.p1': 'Özperçin Cıvata Sanayi A.Ş. manufactures using modern cold forging technologies in its 1000 square meter indoor production plant in the Beylikdüzü Organized Industrial Zone. We control all steps from wire raw material to finished product, including tooling design.',
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
    'production.step4Desc': 'Threads are rolled into bolts/studs; rivets undergo drilling and slotting operations.',
    'production.step5Title': 'Heat Treat & Plating',
    'production.step5Desc': 'Heat treatment and electroplating are performed by certified partners to achieve required strength classes (8.8, 10.9) and anti-corrosion properties.',
    'production.step6Title': 'Final Inspection & Packing',
    'production.step6Desc': 'Products undergoing dimensional check, hardness testing, and torque tests are packed for dispatch.',
    
    // Quality Page
    'quality.pageTitle': 'Quality Management',
    'quality.pageSubtitle': 'Measurement and inspection systems complying with DIN, ISO, and TSE standards.',
    'quality.title': 'Quality Policy',
    'quality.subtitle': 'Defect Prevention and Precise Inspection',
    'quality.p1': 'At Özperçin Cıvata Sanayi A.Ş., we operate under strict tolerances approaching zero-defect manufacturing. We meet dimensional and material requirements defined by DIN/ISO norms for standard lines as well as custom components.',
    'quality.p2': 'Our laboratory tracking covers raw material chemical/mechanical analysis, heading, threading, heat treatment, and post-plating batches to guarantee complete traceability.',
    'quality.p3': 'Environmental Directives: All processing lubricants and secondary plating operations comply fully with RoHS (Restriction of Hazardous Substances) and REACH (Registration, Evaluation, Authorization and Restriction of Chemicals).',
    'quality.stage1': '1. Incoming Quality Control',
    'quality.stage1Desc': 'Analysis certificates of all incoming wire rod batches are verified. Wire diameters are checked using precision micrometers.',
    'quality.stage2': '2. In-Process Inspection',
    'quality.stage2Desc': 'During forging and rolling, parts are sampled periodically for kumpas, thread gauges, and profile projector dimensions.',
    'quality.stage3': '3. Final Quality Control',
    'quality.stage3Desc': 'Finished products undergo mechanical class checks (8.8, 10.9), hardness tests (HV, HRC), and coating thickness checks before packing.',
    'quality.certTitle': 'Standards & Compliance',
    'quality.certDesc': 'Industrial standards and directives fully observed throughout our manufacturing operations.',
    'quality.cert1': 'Quality Management System Standard',
    'quality.cert2': 'Compliance with Environmental and Human Health Directives',
    'quality.cert3': 'German Standardization Institute Production Compliance',
    'quality.cert4': 'International Fastener Dimensional Tolerance Standards',
    
    // Contact Page
    'contact.pageTitle': 'Contact',
    'contact.pageSubtitle': 'Contact us directly for inquiries, technical drawings, and quotes.',
    'contact.title': 'Contact Details',
    'contact.desc': 'Our factory location and active communication lines.',
    'contact.addressTitle': 'Address',
    'contact.phoneTitle': 'Phone Lines',
    'contact.emailTitle': 'Email',
    'contact.hoursTitle': 'Working Hours',
    'contact.hoursText': 'Monday - Friday: 08:30 - 18:30 <br>Saturday: 08:30 - 13:00 <br>Sunday: Closed',
    'contact.formName': 'Full Name *',
    'contact.formEmail': 'Email Address *',
    'contact.formSubject': 'Subject *',
    'contact.formMessage': 'Your Message *',
    'contact.formSubmit': 'Send Message',
    'contact.mapTitle': 'Map Location',
    'contact.mapDesc': 'Our factory is located inside the Beylikdüzü Organized Industrial Zone.',
    
    // Footer & Generic
    'footer.desc': 'Your reliable partner in industrial fasteners since 1972.',
    'footer.quickLinks': 'Quick Links'
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

  // Form handling & security sanitization
  initSecureForm();

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

// Secure Form Submission (Input validation, honeypot, XSS sanitization, Rate-Limiting)
function initSecureForm() {
  const form = document.getElementById('secure-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Honeypot check (anti-spam bot)
    const honeypot = document.getElementById('honeypot').value;
    if (honeypot) {
      console.warn('Spam submission detected by honeypot.');
      return;
    }

    // 2. Rate Limiting (1 request per 30 seconds max)
    const lastSubmit = localStorage.getItem('contact_form_last_submit');
    const now = Date.now();
    if (lastSubmit && (now - parseInt(lastSubmit, 10) < 30000)) {
      showFormStatus('error', currentLang === 'tr' 
        ? 'Lütfen yeni bir mesaj göndermeden önce 30 saniye bekleyin.' 
        : 'Please wait 30 seconds before sending another message.');
      return;
    }

    // Input elements
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Clean prior error status
    resetErrors([nameInput, emailInput, subjectInput, messageInput]);

    let isValid = true;

    // 3. Sanitization (Defense against XSS)
    const nameVal = sanitize(nameInput.value.trim());
    const emailVal = sanitize(emailInput.value.trim());
    const subjectVal = sanitize(subjectInput.value.trim());
    const messageVal = sanitize(messageInput.value.trim());

    // 4. Strict Validation
    if (!nameVal || nameVal.length < 3) {
      showInputError(nameInput, currentLang === 'tr' 
        ? 'Lütfen geçerli bir ad soyad girin (En az 3 karakter).' 
        : 'Please enter a valid name (At least 3 characters).');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      showInputError(emailInput, currentLang === 'tr'
        ? 'Lütfen geçerli bir e-posta adresi girin.'
        : 'Please enter a valid email address.');
      isValid = false;
    }

    if (!subjectVal || subjectVal.length < 5) {
      showInputError(subjectInput, currentLang === 'tr'
        ? 'Lütfen geçerli bir konu girin (En az 5 karakter).'
        : 'Please enter a valid subject (At least 5 characters).');
      isValid = false;
    }

    if (!messageVal || messageVal.length < 10) {
      showInputError(messageInput, currentLang === 'tr'
        ? 'Lütfen detaylı bir mesaj yazın (En az 10 karakter).'
        : 'Please enter a detailed message (At least 10 characters).');
      isValid = false;
    }

    if (!isValid) return;

    // 5. Asynchronous Simulated submit
    const submitBtn = document.getElementById('form-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';

    setTimeout(() => {
      // Save submission time for rate limit
      localStorage.setItem('contact_form_last_submit', Date.now().toString());

      showFormStatus('success', currentLang === 'tr'
        ? 'Mesajınız başarıyla ve güvenli bir şekilde iletildi. Teşekkür ederiz.'
        : 'Your message has been sent successfully and securely. Thank you.');

      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'tr' ? 'Mesajı Gönder' : 'Send Message';
    }, 1200);
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

function showFormStatus(type, msg) {
  const statusBox = document.getElementById('form-status-box');
  if (!statusBox) return;

  statusBox.className = `form-status ${type}`;
  statusBox.textContent = msg;
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
    const factoryCoords = [41.0125, 28.6690];
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
      ? '<strong>Özperçin Cıvata Sanayi A.Ş.</strong><br>Birlik Sanayi Sitesi 1. Cd. No:24/13<br>Beylikdüzü / İstanbul'
      : '<strong>Özperçin Cıvata Sanayi A.Ş.</strong><br>Birlik Industrial Site 1. St. No:24/13<br>Beylikdüzü / Istanbul';

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
