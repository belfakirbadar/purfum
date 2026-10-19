/* =============================================================
   ABDEPERFUMES — ELITE 10K MAD ENGINE + GOOGLE SHEETS LIVE CMS
   - Full 3-Language Localization (FR / AR / EN) including Mobile Menu
   - Live Google Sheets Inventory & Price Sync (Zero Backend Needed)
   - 3D Magnetic Bottle Tilt & Smooth Scroll Reveal Animations
   ============================================================= */
'use strict';

/* =============================================================
   1. CONFIGURATION & GOOGLE SHEETS LIVE CMS
   Kifach t-rbet Google Sheets m3a s-site:
   1) Sawb Google Sheet fiha had l-a3mida f S-ster 1 (Row 1):
      id | img | format | price | name | name_ar | tagline_fr | tagline_ar | tagline_en | notes_fr | notes_ar | notes_en | stock
   2) F Google Sheets, sir l: File -> Share -> Publish to web
   3) Khtar "Comma-separated values (.csv)" w klik 3la Publish
   4) Copier d-dak l-link w 7tto hna wast GOOGLE_SHEET_CSV_URL:
   ============================================================= */
var GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsrxjjFazbhGyYuea5GcrVjMBfXEYlKLTV2-8RVj7dtlIUiStcW30GkfO3MMWdw4h1EsAur5tJ3pJ9/pub?gid=763742095&single=true&output=csv';
var WHATSAPP_NUMBER = '212609539103';

/* =============================================================
   2. DEFAULT 34 PERFUMES DATABASE (FALLBACK & INITIAL LOAD)
   ============================================================= */
var PERFUMES = [
  /* --- COLLECTION 30ML (11 PARFUMS - 30 MAD) --- */
  {
    id: 'p30-01', img: '30-1.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Burberry Her', name_ar: 'بربري هير (Burberry Her)',
    tagline: { fr: 'Audace fruitée, baies gourmandes et sillage ambré.', ar: 'جرأة فاكهية منعشة، توت بري ولمسة عنبرية ناعمة.', en: 'Fruity boldness, luscious berries and amber sillage.' },
    notes: { fr: 'Baies rouges, Cerise, Jasmin éclatant, Musc blanc, Ambre doux', ar: 'توت أحمر، كرز، ياسمين مشرق، مسك أبيض، عنبر دافئ', en: 'Red Berries, Cherry, Bright Jasmine, White Musk, Soft Amber' }
  },
  {
    id: 'p30-02', img: '30-2.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Stronger With You Intensely', name_ar: 'سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)',
    tagline: { fr: 'Intensité captivante de cannelle épicée et vanille ambrée.', ar: 'كثافة شرقية آسرة بنفحات القرفة والفانيليا العنبرية.', en: 'Captivating intensity of spicy cinnamon and amber vanilla.' },
    notes: { fr: 'Poivre rose, Cannelle, Lavande noble, Toffee, Vanille orientale, Ambre', ar: 'فلفل وردي، قرفة، خزامى نبيلة، كراميل التوفي، فانيليا شرقية، عنبر', en: 'Pink Pepper, Cinnamon, Noble Lavender, Toffee, Oriental Vanilla, Amber' }
  },
  {
    id: 'p30-03', img: '30-3.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Good Girl', name_ar: 'جود جيرل (Good Girl)',
    tagline: { fr: 'Dualité captivante entre tubéreuse éclatante et cacao intense.', ar: 'تناغم ساحر بين إشراقة مسك الروم وعمق الكاكاو الفاخر.', en: 'Captivating duality of luminous tuberose and rich cocoa.' },
    notes: { fr: 'Amande, Café noir, Tubéreuse, Jasmin Sambac, Fève Tonka, Cacao', ar: 'لوز، قهوة سوداء، مسك الروم، ياسمين سامباك، حبوب التونكا، كاكاو', en: 'Almond, Black Coffee, Tuberose, Sambac Jasmine, Tonka Bean, Cocoa' }
  },
  {
    id: 'p30-04', img: '30-4.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Candy Love', name_ar: 'كاندي لوف (Candy Love)',
    tagline: { fr: 'Gourmandise féerique de pomme d’amour et chantilly vanillée.', ar: 'حلوى ساحرة بنفحات التفاح المكرمل والكريمة المخفوقة.', en: 'Enchanting gourmand treat of candy apple and vanilla whipped cream.' },
    notes: { fr: 'Pomme d’amour croquante, Rose Centifolia, Chantilly onctueuse, Vanille', ar: 'تفاح مكرمل مقرمش، ورد الجوري، كريمة مخفوقة ناعمة، فانيليا', en: 'Crisp Candy Apple, Centifolia Rose, Whipped Cream, Vanilla' }
  },
  {
    id: 'p30-05', img: '30-5.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Gucci Guilty', name_ar: 'غوتشي غيلتي (Gucci Guilty)',
    tagline: { fr: 'Séduction audacieuse, mandarine vive et cœur fleuri de lilas ambré.', ar: 'جاذبية جريئة بنفحات المندرين المنعش والليلك والعنبر الحسي.', en: 'Bold seduction with crisp mandarin and an amber lilac heart.' },
    notes: { fr: 'Mandarine, Poivre rose, Lilas, Pêche veloutée, Patchouli, Ambre doré', ar: 'يوسفي، فلفل وردي، ليلك، خوخ مخملي، باتشولي، عنبر ذهبي', en: 'Mandarin, Pink Pepper, Lilac, Velvety Peach, Patchouli, Golden Amber' }
  },
  {
    id: 'p30-06', img: '30-6.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Burberry Her', name_ar: 'بربري هير (Burberry Her)',
    tagline: { fr: 'Élégance britannique vibrante aux baies sauvages et musc poudré.', ar: 'أناقة بريطانية مفعمة بالحيوية مع التوت البري والمسك البودري.', en: 'Vibrant British elegance of wild berries and powdery musk.' },
    notes: { fr: 'Framboise, Mûre, Cassis, Jasmin lumineux, Musc ambré, Cèdre doux', ar: 'توت العليق، توت العليق الأسود، كشمش، ياسمين، مسك وعنبر، خشب الأرز', en: 'Raspberry, Blackberry, Blackcurrant, Luminous Jasmine, Amber Musk, Soft Cedar' }
  },
  {
    id: 'p30-07', img: '30-7.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Good Girl', name_ar: 'جود جيرل (Good Girl)',
    tagline: { fr: 'Féminité affirmée, sillage sophistiqué de jasmin et fève tonka.', ar: 'أنوثة واثقة وفخامة طاغية من الياسمين الأبيض وحبوب التونكا.', en: 'Confident femininity with a sophisticated trail of jasmine and tonka bean.' },
    notes: { fr: 'Bergamote, Fleur d’oranger, Jasmin Sambac, Tubéreuse, Fève Tonka, Praliné', ar: 'برغموت، زهر البرتقال، ياسمين سامباك، مسك الروم، حبوب التونكا، برالين', en: 'Bergamot, Orange Blossom, Sambac Jasmine, Tuberose, Tonka Bean, Praline' }
  },
  {
    id: 'p30-08', img: '30-8.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Le Male Le Parfum', name_ar: 'لو مال لو بارفان (Le Male Le Parfum)',
    tagline: { fr: 'Charisme ténébreux, cardamome noble et lavande vanillée envoûtante.', ar: 'كاريزما رجولية آسرة بالهيل الفاخر والخزامى والفانيليا الدافئة.', en: 'Commanding charisma, noble cardamom and spellbinding vanillic lavender.' },
    notes: { fr: 'Cardamome, Lavande noble, Iris poudré, Vanille orientale, Bois précieux', ar: 'هيل فاخر، خزامى نبيلة، سوسن بودري، فانيليا شرقية، أخشاب ثمينة', en: 'Cardamom, Noble Lavender, Powdery Iris, Oriental Vanilla, Precious Woods' }
  },
  {
    id: 'p30-09', img: '30-9.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Light Blue', name_ar: 'لايت بلو (Light Blue)',
    tagline: { fr: 'Fraîcheur méditerranéenne éclatante de citron sicilien et pomme Granny.', ar: 'انتعاش البحر الأبيض المتوسط بليمون صقلية والتفاح الأخضر المنعش.', en: 'Sparkling Mediterranean freshness of Sicilian lemon and crisp Granny Apple.' },
    notes: { fr: 'Citron de Sicile, Pomme Granny Smith, Bambou, Jasmin délicat, Cèdre, Musc', ar: 'ليمون صقلي، تفاح جراني سميث، خيزران، ياسمين، خشب الأرز، مسك أبيض', en: 'Sicilian Lemon, Granny Smith Apple, Bamboo, Delicate Jasmine, Cedar, White Musk' }
  },
  {
    id: 'p30-10', img: '30-10.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Yara', name_ar: 'يارا (Lattafa Yara)',
    tagline: { fr: 'Douceur crémeuse exotique, vanille veloutée et fruits tropicaux.', ar: 'نعومة كريمية استوائية تأسر الحواس بنفحات الفانيليا والمندرين.', en: 'Exotic creamy sweetness, velvety vanilla and tropical fruits.' },
    notes: { fr: 'Héliotrope, Mandarine, Orchidée, Fruits tropicaux, Vanille crémeuse, Musc', ar: 'هيليوتروب، يوسفي، أوركيد، فواكه استوائية، فانيليا كريمية، مسك ناعم', en: 'Heliotrope, Mandarin, Orchid, Tropical Fruits, Creamy Vanilla, Soft Musk' }
  },
  {
    id: 'p30-11', img: '30-11.jpeg', format: '30ml', price: 30, stock: true,
    name: 'Bleu de Chanel', name_ar: 'بلو دي شانيل (Bleu de Chanel)',
    tagline: { fr: 'Liberté absolue, sillage boisé aromatique d’une pure élégance.', ar: 'حرية مطلقة وأناقة خشبية عطرية خالدة بالبخور وخشب الأرز.', en: 'Absolute freedom, pure timeless aromatic woody elegance.' },
    notes: { fr: 'Pamplemousse vif, Menthe, Encens, Gingembre, Bois de cèdre, Santal', ar: 'جريب فروت، نعناع منعش، بخور، زنجبيل، خشب الأرز، خشب الصندل', en: 'Crisp Grapefruit, Mint, Incense, Ginger, Cedarwood, Sandalwood' }
  },

  /* --- COLLECTION 50ML (23 PARFUMS - 50 MAD) --- */
  {
    id: 'p50-01', img: '50-1.jpeg', format: '50ml', price: 50, stock: true,
    name: 'One Million', name_ar: 'وان مليون (One Million)',
    tagline: { fr: 'L’icône flamboyante du cuir épicé, audacieuse et captivante.', ar: 'أيقونة الجلود المتبلة، الفخامة والجرأة والجاذبية الطاغية.', en: 'The flamboyant icon of spicy leather, bold and captivating.' },
    notes: { fr: 'Mandarine sanguine, Menthe poivrée, Cannelle, Rose absolue, Cuir blond, Ambre', ar: 'يوسفي أحمر، نعناع، قرفة، خلاصة الورد، جلد أشقر، عنبر ذهبي', en: 'Blood Mandarin, Peppermint, Cinnamon, Rose Absolute, Blond Leather, Amber' }
  },
  {
    id: 'p50-02', img: '50-2.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Libre', name_ar: 'ليبر (YSL Libre)',
    tagline: { fr: 'L’esprit de la liberté flamboyante, lavande florale et fleur d’oranger.', ar: 'عطر الحرية والجرأة، مزيج ساحر بين الخزامى الفرنسية وزهر البرتقال.', en: 'The spirit of fierce freedom, floral lavender and sensual orange blossom.' },
    notes: { fr: 'Lavande de France, Mandarine, Fleur d’oranger du Maroc, Jasmin Sambac, Vanille de Madagascar', ar: 'خزامى فرنسية، يوسفي، زهر البرتقال المغربي، ياسمين سامباك، فانيليا مدغشقر', en: 'French Lavender, Mandarin, Moroccan Orange Blossom, Sambac Jasmine, Madagascar Vanilla' }
  },
  {
    id: 'p50-03', img: '50-3.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Bleu de Chanel', name_ar: 'بلو دي شانيل (Bleu de Chanel)',
    tagline: { fr: 'Signature royale de l’élégance masculine, cèdre noble et encens.', ar: 'التوقيع الملكي للأناقة الرجالية، خشب الأرز النبيل مع لمسة بخور ساحرة.', en: 'Royal signature of masculine elegance, noble cedar and deep incense.' },
    notes: { fr: 'Pamplemousse, Menthe fraîche, Poivre rose, Noix de muscade, Cèdre, Bois de santal', ar: 'جريب فروت، نعناع منعش، فلفل وردي، جوزة الطيب، خشب الأرز، خشب الصندل', en: 'Grapefruit, Fresh Mint, Pink Pepper, Nutmeg, Cedarwood, Sandalwood' }
  },
  {
    id: 'p50-04', img: '50-4.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Good Girl', name_ar: 'جود جيرل (Good Girl)',
    tagline: { fr: 'Sensualité mystérieuse et contrastée, tubéreuse blanche et cacao noir.', ar: 'أنوثة ساحرة متباينة بين براءة الزهور البيضاء وجاذبية الكاكاو الداكن.', en: 'Mysterious contrasted sensuality, white tuberose and dark cocoa.' },
    notes: { fr: 'Amande douce, Café torréfié, Tubéreuse capiteuse, Jasmin Sambac, Fève Tonka, Cacao', ar: 'لوز حلو، قهوة محمصة، مسك الروم، ياسمين سامباك، حبوب التونكا، كاكاو داكن', en: 'Sweet Almond, Roasted Coffee, Tuberose, Sambac Jasmine, Tonka Bean, Cocoa' }
  },
  {
    id: 'p50-05', img: '50-5.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Candy Love', name_ar: 'كاندي لوف (Candy Love)',
    tagline: { fr: 'Tourbillon gourmand et joyeux de pomme d’amour croquante et chantilly.', ar: 'بهجة عطرية لذيذة بنفحات التفاح السكري والكريمة المخفوقة الفاخرة.', en: 'Joyful gourmand swirl of crisp candy apple and whipped cream.' },
    notes: { fr: 'Pomme d’amour sucrée, Mandarine pétillante, Rose Centifolia, Chantilly vanillée', ar: 'تفاح مكرمل سكري، يوسفي فوار، ورد الجوري، كريمة الفانيليا المخفوقة', en: 'Sweet Candy Apple, Sparkling Mandarin, Centifolia Rose, Vanilla Whipped Cream' }
  },
  {
    id: 'p50-06', img: '50-6.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Candy Love', name_ar: 'كاندي لوف (Candy Love)',
    tagline: { fr: 'Plaisir sucré et romantique aux accords pétillants de fruits rouges et vanille.', ar: 'سحر رومانسي حلو بنفحات الفواكه الحمراء الفوارة والفانيليا الناعمة.', en: 'Sweet romantic pleasure with sparkling red fruit and vanilla accords.' },
    notes: { fr: 'Pomme d’amour glacée, Baies rouges, Cœur de rose, Crème onctueuse, Vanille bourbon', ar: 'تفاح مكرمل، توت أحمر، قلب الورد، كريمة ناعمة، فانيليا بوربون', en: 'Glazed Candy Apple, Red Berries, Rose Heart, Silky Cream, Bourbon Vanilla' }
  },
  {
    id: 'p50-07', img: '50-7.jpeg', format: '50ml', price: 50, stock: true,
    name: 'L’Interdit Rouge', name_ar: 'لانتيردي روج (L’Interdit Rouge)',
    tagline: { fr: 'Frisson charnel incandescent, bouquet blanc teinté d’épices ardentes.', ar: 'إثارة متوهجة تأسر الأنفاس، باقة زهور بيضاء بتوابل حمراء ملتهبة.', en: 'Incandescent carnal thrill, white bouquet tinted with fiery red spices.' },
    notes: { fr: 'Orange sanguine, Gingembre épicé, Feuille de piment, Tubéreuse, Patchouli, Santal', ar: 'برتقال أحمر، زنجبيل متبل، أوراق البيمنتو، مسك الروم، باتشولي، خشب الصندل', en: 'Blood Orange, Spicy Ginger, Pimento Leaf, Tuberose, Patchouli, Sandalwood' }
  },
  {
    id: 'p50-08', img: '50-8.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Escada Taj', name_ar: 'إسكادا تاج (Escada Taj)',
    tagline: { fr: 'Éclat tropical envoûtant de mangue Alfonso et nectar de fruits solaires.', ar: 'إشراقة استوائية ساحرة بمانجو ألفونسو ونكتار الفواكه الصيفية المنعشة.', en: 'Enchanting tropical glow of Alphonso mango and solar fruit nectar.' },
    notes: { fr: 'Mangue Alfonso, Nectarine juteuse, Fleur de lotus, Framboise, Crème de coco, Santal', ar: 'مانجو ألفونسو، نكتارين ناضج، زهر اللوتس، توت، كريمة جوز الهند، صندل', en: 'Alphonso Mango, Juicy Nectarine, Lotus Blossom, Raspberry, Coconut Cream, Sandalwood' }
  },
  {
    id: 'p50-09', img: '50-9.jpeg', format: '50ml', price: 50, stock: true,
    name: 'L’Interdit Rouge', name_ar: 'لانتيردي روج (L’Interdit Rouge)',
    tagline: { fr: 'Sensualité incandescente, bouquet floral obscur aux accents boisés fumés.', ar: 'جاذبية متوهجة وباقة زهرية آسرة بلمسات خشبية شرقية دافئة.', en: 'Incandescent sensuality, dark floral bouquet with warm smoky woods.' },
    notes: { fr: 'Orange sanguine, Gingembre rouge, Jasmin Sambac, Tubéreuse, Vétiver, Patchouli', ar: 'برتقال أحمر، زنجبيل أحمر، ياسمين سامباك، مسك الروم، نجيل الهند، باتشولي', en: 'Blood Orange, Red Ginger, Sambac Jasmine, Tuberose, Vetiver, Patchouli' }
  },
  {
    id: 'p50-10', img: '50-10.jpeg', format: '50ml', price: 50, stock: true,
    name: 'L’Interdit Rouge', name_ar: 'لانتيردي روج (L’Interdit Rouge)',
    tagline: { fr: 'Passion rouge braise, fusion hypnotique d’agrumes chauds et tubéreuse veloutée.', ar: 'شغف أحمر كالجمر، مزيج مغناطيسي من الحمضيات الدافئة ومسك الروم المخملي.', en: 'Fiery red passion, hypnotic fusion of warm citrus and velvety tuberose.' },
    notes: { fr: 'Agrumes épicés, Gingembre, Fleur d’oranger éclatante, Tubéreuse, Santal doux, Ambre', ar: 'حمضيات متبلة، زنجبيل، زهر البرتقال المشرق، مسك الروم، صندل ناعم، عنبر', en: 'Spiced Citrus, Ginger, Bright Orange Blossom, Tuberose, Soft Sandalwood, Amber' }
  },
  {
    id: 'p50-11', img: '50-11.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Dior Sauvage Elixir', name_ar: 'ديور سوفاج إكسير (Dior Sauvage Elixir)',
    tagline: { fr: 'Concentration mythique et souveraine, cœur d’épices chaudes et lavande surpuissante.', ar: 'تركيز أسطوري فائق القوة، قلب التوابل الدافئة والخزامى المركزة الفاخرة.', en: 'Mythic sovereign concentration, warm spice heart and ultra-potent lavender.' },
    notes: { fr: 'Cannelle, Noix de muscade, Cardamome, Cœur de lavande de Nyons, Réglisse, Santal ambré', ar: 'قرفة، جوزة الطيب، هيل، قلب الخزامى الفرنسية المركزة، عرق السوس، صندل عنبري', en: 'Cinnamon, Nutmeg, Cardamom, Nyons Lavender Essence, Licorice, Amber Sandalwood' }
  },
  {
    id: 'p50-12', img: '50-12.jpeg', format: '50ml', price: 50, stock: true,
    name: 'La Belle', name_ar: 'لا بيل (Jean Paul Gaultier La Belle)',
    tagline: { fr: 'Féminité ultra-charnelle et magnétique, poire addictive et gousse de vanille.', ar: 'أنوثة مغرية وجذابة للغاية بنفحات الكمثرى الناضجة والفانيليا الشرقية المركزة.', en: 'Ultra-carnal magnetic femininity, addictive pear and rich vanilla pod.' },
    notes: { fr: 'Poire verte juteuse, Bergamote zestée, Cœur floral, Gousse de vanille, Fève Tonka ambrée', ar: 'كمثرى خضراء ناضجة، برغموت، لمسات زهرية، قرن الفانيليا، حبوب التونكا العنبرية', en: 'Juicy Green Pear, Zesty Bergamot, Floral Notes, Vanilla Pod, Amber Tonka Bean' }
  },
  {
    id: 'p50-13', img: '50-13.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Stronger With You Intensely', name_ar: 'سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)',
    tagline: { fr: 'Chaleur ambrée addictive, épices vibrantes et accord toffee vanillé.', ar: 'دفء عنبري ساحر وتوابل ملتهبة مع كراميل التوفي والفانيليا الغنية.', en: 'Addictive amber warmth, vibrant spices and vanillic toffee accord.' },
    notes: { fr: 'Poivre rose, Genévrier, Cannelle, Sauge sclarée, Toffee caramel, Vanille fumée, Suède', ar: 'فلفل وردي، عرعر، قرفة، ميرمية، كراميل التوفي، فانيليا مدخنة، جلد السويد', en: 'Pink Pepper, Juniper, Cinnamon, Clary Sage, Caramel Toffee, Smoked Vanilla, Suede' }
  },
  {
    id: 'p50-14', img: '50-14.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Azzaro Wanted', name_ar: 'أزارو وونتد (Azzaro Wanted)',
    tagline: { fr: 'Arme de séduction solaire et boisée, citron énergisant et cardamome ardente.', ar: 'سلاح الجاذبية الرجولية الواثقة، ليمون مفعم بالحيوية وهيل حار مع نجيل الهند.', en: 'Solar woody weapon of seduction, energizing lemon and fiery cardamom.' },
    notes: { fr: 'Citron de Calabre, Gingembre, Cardamome du Guatemala, Cade, Vétiver d’Haïti, Fève Tonka', ar: 'ليمون كالابريا، زنجبيل، هيل غواتيمالي، خشب العرعر، نجيل الهند الهايتي، حبوب التونكا', en: 'Calabrian Lemon, Ginger, Guatemalan Cardamom, Cade Wood, Haitian Vetiver, Tonka Bean' }
  },
  {
    id: 'p50-15', img: '50-15.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Stronger With You Intensely', name_ar: 'سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)',
    tagline: { fr: 'Sillage d’une intensité fougueuse, cannelle orientale et bois d’ambre.', ar: 'فوحان قوي بنفحات القرفة الشرقية والأخشاب العنبرية الدافئة.', en: 'Trail of fiery intensity, oriental cinnamon and amber woods.' },
    notes: { fr: 'Cannelle épicée, Poivre rose, Lavande, Châtaigne glacée, Vanille Bourbon, Ambre', ar: 'قرفة متبلة، فلفل وردي، خزامى، كستناء محلاة، فانيليا بوربون، عنبر دافئ', en: 'Spicy Cinnamon, Pink Pepper, Lavender, Glazed Chestnut, Bourbon Vanilla, Amber' }
  },
  {
    id: 'p50-16', img: '50-16.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Gucci Guilty', name_ar: 'غوتشي غيلتي (Gucci Guilty)',
    tagline: { fr: 'Séduction contemporaine aromatique et boisée, lavande vive et patchouli noble.', ar: 'جاذبية عصرية راقية بنفحات اللافندر المنعش وزهر البرتقال والباتشولي النبيل.', en: 'Contemporary aromatic woody seduction, crisp lavender and noble patchouli.' },
    notes: { fr: 'Lavande française, Citron d’Italie, Fleur d’oranger, Cèdre de Virginie, Patchouli', ar: 'خزامى فرنسية، ليمون إيطالي، زهر البرتقال، خشب الأرز، باتشولي فاخر', en: 'French Lavender, Italian Lemon, Orange Blossom, Virginian Cedar, Patchouli' }
  },
  {
    id: 'p50-17', img: '50-17.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Stronger With You Absolutely', name_ar: 'سترونجر ويذ يو أبسولوتلي (Stronger With You Absolutely)',
    tagline: { fr: 'Opulence ambrée magnétique, accord liqueur de rhum et vanille de Madagascar.', ar: 'فخامة عنبرية مغناطيسية، خلاصة مشروب الروم الفاخر والفانيليا الدافئة.', en: 'Magnetic amber opulence, refined rum liqueur accord and Madagascar vanilla.' },
    notes: { fr: 'Accord Rhum ambré, Bergamote, Davana, Châtaigne glacée, Cèdre fumé, Vanille Bourbon', ar: 'خلاصة الروم العنبري، برغموت، دافانا، كستناء محلاة، أرز مدخن، فانيليا بوربون', en: 'Amber Rum Accord, Bergamot, Davana, Glazed Chestnut, Smoked Cedar, Bourbon Vanilla' }
  },
  {
    id: 'p50-18', img: '50-18.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Candy Love', name_ar: 'كاندي لوف (Candy Love)',
    tagline: { fr: 'Gourmandise irrésistible de pomme d’amour, cœur de rose et chantilly veloutée.', ar: 'عالم سكري ساحر يمتزج فيه رحيق التفاح بالورد الناعم والقشطة اللذيذة.', en: 'Irresistible treat of candy apple, rose heart and velvety whipped cream.' },
    notes: { fr: 'Pomme d’amour rouge, Mandarine sucrée, Rose Centifolia, Crème chantilly, Vanille', ar: 'تفاح أحمر حلو، يوسفي حلو، ورد الجوري، كريمة الشانتي، فانيليا ناعمة', en: 'Red Candy Apple, Sweet Mandarin, Centifolia Rose, Whipped Cream, Soft Vanilla' }
  },
  {
    id: 'p50-19', img: '50-19.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Valentino Born In Roma', name_ar: 'فالنتينو بورن إن روما (Valentino Born In Roma)',
    tagline: { fr: 'Haute couture romaine audacieuse, trio de jasmins nobles et vanille Bourbon.', ar: 'أناقة الهوت كوتور الإيطالية، ثلاثي الياسمين الفاخر مع فانيليا بوربون والكشميران.', en: 'Edgy Roman haute couture, trio of noble jasmines and Bourbon vanilla.' },
    notes: { fr: 'Cassis, Bergamote d’Italie, Jasmin Grandiflorum, Jasmin Sambac, Vanille Bourbon, Cashmeran', ar: 'كشمش أسود، برغموت إيطالي، ياسمين ملكي، ياسمين سامباك، فانيليا بوربون، كشميران', en: 'Blackcurrant, Italian Bergamot, Jasmine Grandiflorum, Sambac Jasmine, Bourbon Vanilla, Cashmeran' }
  },
  {
    id: 'p50-20', img: '50-20.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Le Male Le Parfum', name_ar: 'لو مال لو بارفان (Le Male Le Parfum)',
    tagline: { fr: 'Allure souveraine de capitaine ténébreux, cardamome royale et vanille boisée.', ar: 'حضور القائد المهيب، هيل ملكي فاخر مع الخزامى السوداء والفانيليا الخشبية.', en: 'Sovereign commander allure, royal cardamom and warm woody vanilla.' },
    notes: { fr: 'Cardamome intense, Lavande noire, Iris poudré, Vanille orientale, Bois précieux', ar: 'هيل مكثف، خزامى سوداء، سوسن بودري، فانيليا شرقية، أخشاب ثمينة', en: 'Intense Cardamom, Black Lavender, Powdery Iris, Oriental Vanilla, Precious Woods' }
  },
  {
    id: 'p50-21', img: '50-21.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Light Blue', name_ar: 'لايت بلو (Light Blue)',
    tagline: { fr: 'Brise méditerranéenne ensoleillée de citron de Sicile, pomme et cèdre pur.', ar: 'نسيم البحر المتوسط الصيفي المنعش بالليمون الصقلي والتفاح وخشب الأرز النقي.', en: 'Sunny Mediterranean breeze of Sicilian lemon, crisp apple and pure cedar.' },
    notes: { fr: 'Citron de Sicile, Pomme Granny Smith, Bambou, Jasmin, Bois de cèdre, Muscs blancs', ar: 'ليمون صقلي، تفاح جراني سميث، خيزران، ياسمين، خشب الأرز، مسك أبيض', en: 'Sicilian Lemon, Granny Smith Apple, Bamboo, Jasmine, Cedarwood, White Musk' }
  },
  {
    id: 'p50-22', img: '50-22.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Black Opium', name_ar: 'بلاك أوبيوم (Black Opium)',
    tagline: { fr: 'Adrénaline nocturne irrésistible, café noir électrisant et fleurs blanches sensuelles.', ar: 'جاذبية ليلية ساحرة تجمع القهوة السوداء المنعشة والزهور البيضاء والفانيليا.', en: 'Irresistible nocturnal adrenaline, electrifying black coffee and sensual white flowers.' },
    notes: { fr: 'Grains de café noir, Poivre rose, Fleur d’oranger, Jasmin Sambac, Vanille, Patchouli', ar: 'حبوب القهوة السوداء، فلفل وردي، زهر البرتقال، ياسمين سامباك، فانيليا، باتشولي', en: 'Black Coffee Beans, Pink Pepper, Orange Blossom, Sambac Jasmine, Vanilla, Patchouli' }
  },
  {
    id: 'p50-23', img: '50-23.jpeg', format: '50ml', price: 50, stock: true,
    name: 'Ultra Male', name_ar: 'ألترا مال (Ultra Male)',
    tagline: { fr: 'Séducteur nocturne fruité et épicé, poire noire gourmande et vanille boisée.', ar: 'ساحر ليلي جريء ومغري بنفحات الكمثرى السوداء والقرفة والفانيليا الخشبية.', en: 'Fruity and spicy nocturnal seducer, dark pear and woody vanilla.' },
    notes: { fr: 'Poire noire, Lavande fraîche, Cannelle épicée, Sauge, Vanille noire, Ambre boisé', ar: 'كمثرى سوداء، خزامى منعشة، قرفة دافئة، ميرمية، فانيليا سوداء، عنبر خشبي', en: 'Black Pear, Fresh Lavender, Spicy Cinnamon, Sage, Black Vanilla, Woody Amber' }
  }
];

/* =============================================================
   3. COMPLETE MULTILINGUAL DICTIONARY (FR / AR / EN)
   ============================================================= */
var I18N = {
  fr: {
    dir: 'ltr',
    pageTitle: 'Abdeperfumes — Des Parfums Qui Vous Ressemblent | Haute Parfumerie',
    navSubTag: 'Haute Parfumerie',
    navAll: 'Catalogue',
    nav50: 'Collection 50ml',
    nav30: 'Collection 30ml',
    navSavoir: 'Signature',
    navFormats: 'Formats',
    cart: 'Panier',
    marquee: 'LIVRAISON EXPRESS 24H/48H PARTOUT AU MAROC — CONCENTRATION EXTRAIT 30% — LONGUE TENUE +24H GARANTIE — FORMATS 30ML (30 MAD) & 50ML (50 MAD)',
    heroBadge1: 'LA MAISON ABDEPERFUMES',
    heroBadge2: 'FRAGRANCES D’EXCEPTION',
    heroTitle: 'Des parfums qui<br /><em class="text-champagne italic font-normal">vous ressemblent.</em>',
    heroSub: 'Plus qu’un parfum, une signature. Découvrez nos extraits de haute parfumerie formulés pour une tenue intense et un sillage inoubliable, disponibles en formats 30ml et 50ml.',
    heroBtn1: 'Découvrir la Collection',
    heroBtn2: 'Collection 50ml — 50 MAD',
    pillar1Title: 'Qualité', pillar1Sub: 'Premium',
    pillar2Title: 'Parfums', pillar2Sub: 'Authentiques',
    pillar3Title: 'Longue', pillar3Sub: 'Tenue 24h+',
    pillar4Title: 'Pour Tous', pillar4Sub: 'Les Styles',
    showcaseTag: 'ÉLÉGANCE À CHAQUE INSTANT',
    chipExtrait: 'Extrait Concentré 30%',
    pedestalTitle: 'Signature Abdeperfumes',
    pedestalSub: 'Format Nomade 30ml (30 MAD) & Prestige 50ml (50 MAD)',
    catTag: 'COLLECTION OFFICIELLE',
    catHeading: 'Le Studio des Fragrances',
    catBody: 'Choisissez vos flacons 30ml (30 MAD) ou 50ml (50 MAD), ajoutez-les au panier et validez votre commande en un clic.',
    tabAll: 'Tous les Parfums',
    tab50: 'Collection 50ml',
    tab30: 'Collection 30ml',
    search: 'Rechercher un parfum (Sauvage, Gucci, One Million...)',
    noResultsTitle: 'Aucune fragrance trouvée',
    noResultsSub: 'Essayez un autre nom ou cliquez sur Tous les Parfums.',
    quickView: 'Aperçu Studio',
    addCart: 'Ajouter au Panier',
    added: 'Ajouté',
    soldOut: 'Épuisé',
    currency: 'MAD',
    bentoTag: 'PLUS QU’UN PARFUM, UNE SIGNATURE',
    bentoHeading: 'L’Exigence de la Haute Parfumerie',
    bento1Tag: '01 / CONCENTRATION EXTRAIT',
    bento1Badge: '25% – 35%',
    bento1Title: 'Sillage Intense & Fidélité Olfactive',
    bento1Desc: 'Nos formules respectent une concentration élevée en essences pures. Dès la première vaporisation, les notes de tête, de cœur et de fond se déploient avec une richesse remarquable.',
    bento1Num: '24 Heures+',
    bento1Stat: 'Tenue sur Peau & Vêtements',
    bento2Tag: '02 / PRIX DIRECT STUDIO',
    bento2Badge: 'SANS INTERMÉDIAIRE',
    bento2Title: 'Le Luxe Accessible à Tous',
    bento2Desc: 'Payez la noblesse du jus, pas le marketing superflu. Deux tarifs transparents : 30 MAD pour le format 30ml et 50 MAD pour le flacon facetté 50ml.',
    bento2Num: '30 / 50 MAD',
    bento2Stat: 'Tarif Unique Garanti',
    bento3Tag: '03 / EXPÉDITION RAPIDE PARTOUT AU MAROC',
    bento3Title: 'Livraison Express 24h à 48h dans Toutes les Villes',
    bento3Desc: 'Sélectionnez vos parfums dans le catalogue, validez votre panier et notre équipe prépare immédiatement votre commande avec suivi personnalisé.',
    bento3Cta: 'Choisir Mes Parfums',
    cities: ['Casablanca', 'Marrakech', 'Rabat', 'Ouarzazate', 'Agadir', 'Tanger', 'Fès', 'Meknès'],
    colTag: 'DEUX SIGNATURES VISUELLES',
    collectionsHeading: 'Choisissez Votre Format',
    col30Tag: 'COLLECTION NOMADE',
    col30Title: 'Format 30ml — Le Nomade',
    col30Desc: 'Flacon cylindrique élégant au bouchon boisé noir. Parfait pour vous accompagner partout ou composer un coffret découverte.',
    col30Btn: 'Voir les parfums 30ml',
    col50Tag: 'COLLECTION PRESTIGE',
    col50Title: 'Format 50ml — Le Classique',
    col50Desc: 'Flacon en verre facetté au bouchon cristal. Une pièce maîtresse réunissant les plus grandes icônes de la parfumerie mondiale.',
    col50Btn: 'Voir les parfums 50ml',
    cartTag: 'VOTRE SÉLECTION',
    cartTitle: 'Votre Panier',
    cartEmptyTitle: 'Votre panier est vide.',
    cartEmptySub: 'Explorez nos fragrances et ajoutez vos coups de cœur.',
    cartTotalLabel: 'Total de la commande',
    waOrder: 'Commander sur WhatsApp',
    waGreeting: 'Salam Abdeperfumes, je souhaite commander :',
    toastAdded: 'ajouté au panier',
    modalNotesLabel: 'Notes Olfactives :',
    modalLongevity: 'Concentration Extrait — Longue Tenue 24h+',
    footerSubTag: 'Plus qu’un parfum, une signature',
    footerDesc: 'La maison marocaine dédiée aux extraits de parfums authentiques et concentrés. Créations iconiques en formats 30ml et 50ml, livrées partout au Maroc.',
    footerCol1Title: 'Collections',
    footerCol2Title: 'La Maison',
    footerLinkAll: 'Catalogue Complet',
    footerLink50: 'Format 50ml (50 MAD)',
    footerLink30: 'Format 30ml (30 MAD)',
    footerLinkQualite: 'Qualité Premium',
    footerLinkTenue: 'Longue Tenue 24h',
    footerLinkFormats: 'Nos Formats',
    footerSocialTitle: 'Contact & Commandes',
    footerCopy: '© 2026 Abdeperfumes Maroc — Des parfums qui vous ressemblent. Livraison partout au Maroc.',
    vipWaText: 'WhatsApp VIP',
    techwebBadge: 'Agence Digitale Officielle • Ouarzazate, Maroc',
    techwebDesc: 'Ce site web officiel a été entièrement conçu, développé et optimisé par l\'agence digitale <strong>TechWeb</strong> à Ouarzazate. Architecture sur-mesure ultra-fluide, synchronisation Google Sheets en temps réel et expérience e-commerce haut de gamme.',
    techwebBtnVisit: 'Découvrir l\'Agence TechWeb',
    techwebBtnContact: 'Lancer un Projet (+212 711-218301)',
    seoLocalTitle: 'Abdeperfumes Ouarzazate — Haute Parfumerie & Extraits de Parfum au Maroc',
    seoLocalDesc: 'Fondée par <strong>Abdelghani El Mahjouby</strong> (&lrm;عبد الغني المحجوبي&lrm;) à <strong>Ouarzazate</strong>, la maison <strong>Abdeperfumes</strong> est spécialisée dans la création et la distribution d\'extraits de parfum d\'exception à haute concentration (30% d\'essences pures). Formats nomades 30ml (30 MAD) et prestige 50ml (50 MAD) avec tenue supérieure à 24 heures. Commandes en ligne livrées rapidement à Casablanca, Rabat, Marrakech, Ouarzazate, Fès, Tanger, Agadir et sur l\'ensemble du territoire marocain. Plateforme digitale officielle réalisée par l\'agence web <strong>TechWeb Ouarzazate</strong>.'
  },
  ar: {
    dir: 'rtl',
    pageTitle: 'عبدو للعطور | عطور فاخرة تشبه شخصيتك — Abdeperfumes',
    navSubTag: 'عطور فاخرة ومركزة',
    navAll: 'الكتالوج',
    nav50: 'مجموعة 50ml',
    nav30: 'مجموعة 30ml',
    navSavoir: 'الجودة والأصالة',
    navFormats: 'الأحجام والأسعار',
    cart: 'السلة',
    marquee: 'توصيل سريع 24/48 ساعة لجميع مدن المغرب — تركيز إكسترا 30% — ثبات وفوحان يدوم أكثر من 24 ساعة — حجم 30 مل (30 درهم) و 50 مل (50 درهم)',
    heroBadge1: 'دار عبدو للعطور الفاخرة',
    heroBadge2: 'تشكيلة عطور حصرية',
    heroTitle: 'عطور فاخرة<br /><em class="text-champagne italic font-normal">تشبه شخصيتك وتعكس حضورك.</em>',
    heroSub: 'أكثر من مجرد عطر، إنها بصمتك الخاصة التي تدوم. اكتشف خلاصاتنا المركزة بنسبة عالية لثبات مذهل وسحر لا يُنسى، متوفرة بحجمين 30 مل و 50 مل.',
    heroBtn1: 'اكتشف العطور الحصرية',
    heroBtn2: 'مجموعة 50ml — 50 درهم',
    pillar1Title: 'جودة', pillar1Sub: 'عالية وممتازة',
    pillar2Title: 'عطور', pillar2Sub: 'مركزة وأصلية',
    pillar3Title: 'ثبات', pillar3Sub: 'يدوم +24 ساعة',
    pillar4Title: 'تناسب', pillar4Sub: 'جميع الأذواق',
    showcaseTag: 'أناقة وفخامة في كل لحظة',
    chipExtrait: 'تركيز إكسترا 30%',
    pedestalTitle: 'بصمة Abdeperfumes الملكية',
    pedestalSub: 'الحجم العملي 30ml (30 درهم) والحجم الكلاسيكي 50ml (50 درهم)',
    catTag: 'المجموعة الرسمية الكاملة',
    catHeading: 'ستوديو العطور الفاخرة',
    catBody: 'اختر عطورك المفضلة بحجم 30 مل (30 درهم) أو 50 مل (50 درهم)، أضفها إلى السلة وأكد طلبيتك عبر واتساب بضغطة زر.',
    tabAll: 'جميع العطور',
    tab50: 'مجموعة 50ml',
    tab30: 'مجموعة 30ml',
    search: 'ابحث عن عطر (سوفاج، غوتشي، وان مليون، عود...)',
    noResultsTitle: 'لم يتم العثور على أي عطر مطابق',
    noResultsSub: 'جرب البحث باسم آخر أو اضغط على جميع العطور.',
    quickView: 'معاينة العطر',
    addCart: 'أضف إلى السلة',
    added: 'تمت الإضافة',
    soldOut: 'نفذت الكمية',
    currency: 'درهم',
    bentoTag: 'أكثر من مجرد عطر، إنها بصمتك الخاصة',
    bentoHeading: 'معايير الدقة في صناعة العطور',
    bento1Tag: '01 / تركيز إكسترا عالي',
    bento1Badge: '25% – 35%',
    bento1Title: 'فوحان قوي وثبات مطابق للأصل',
    bento1Desc: 'تتميز تركيباتنا بنسبة تركيز عالية جداً من الزيوت العطرية النقية. من الرشة الأولى، تتألق النوتات العليا والقلبية والقاعدية بعمق استثنائي.',
    bento1Num: '+24 ساعة',
    bento1Stat: 'ثبات على البشرة والملابس',
    bento2Tag: '02 / سعر الستوديو المباشر',
    bento2Badge: 'بدون وسطاء',
    bento2Title: 'الفخامة متاحة للجميع بأفضل سعر',
    bento2Desc: 'ادفع ثمن جودة العطر النقي فقط. تسعيرة واضحة وموحدة: 30 درهم لحجم 30ml العملي، و 50 درهم لقنينة 50ml الكريستالية الفاخرة.',
    bento2Num: '30 / 50 درهم',
    bento2Stat: 'سعر حصري مضمون',
    bento3Tag: '03 / شحن سريع لجميع أنحاء المغرب',
    bento3Title: 'توصيل سريع خلال 24 إلى 48 ساعة لكافة المدن',
    bento3Desc: 'اختر عطورك من الكتالوج، أكد سلتك عبر واتساب، وسيقوم فريقنا بتجهيز وإرسال طلبيتك فوراً مع تتبع مباشر حتى باب منزلك.',
    bento3Cta: 'اختر عطورك الآن',
    cities: ['الدار البيضاء', 'مراكش', 'الرباط', 'ورزازات', 'أكادير', 'طنجة', 'فاس', 'مكناس'],
    colTag: 'تصميمان يجمعان الأناقة والعملية',
    collectionsHeading: 'اختر الحجم المناسب لك',
    col30Tag: 'الحجم العملي اليومي',
    col30Title: 'حجم 30ml — رفيقك في كل مكان',
    col30Desc: 'قنينة أسطوانية أنيقة بغطاء خشبي أسود، مثالية للجيب أو الحقيبة اليومية ولتجربة عدة عطور متنوعة.',
    col30Btn: 'تصفح عطور 30ml',
    col50Tag: 'حجم الفخامة الكلاسيكي',
    col50Title: 'حجم 50ml — القنينة الملكية',
    col50Desc: 'قنينة زجاجية مضلعة بغطاء كريستالي فاخر، تضم أشهر وأرقى العطور العالمية الأكثر طلباً.',
    col50Btn: 'تصفح عطور 50ml',
    cartTag: 'اختياراتك الفاخرة',
    cartTitle: 'سلة المشتريات',
    cartEmptyTitle: 'سلة المشتريات فارغة حالياً.',
    cartEmptySub: 'تصفح الكتالوج وأضف عطورك المفضلة.',
    cartTotalLabel: 'مجموع الطلبية',
    waOrder: 'تأكيد الطلب عبر واتساب',
    waGreeting: 'السلام عليكم Abdeperfumes، أود طلب العطور التالية :',
    toastAdded: 'تمت إضافته إلى السلة',
    modalNotesLabel: 'النوتات العطرية :',
    modalLongevity: 'تركيز إكسترا — ثبات يدوم أكثر من 24 ساعة',
    footerSubTag: 'أكثر من مجرد عطر، إنها بصمة',
    footerDesc: 'الدار المغربية المتخصصة في العطور المركزة عالية الجودة. تشكيلة فاخرة بحجم 30 مل و 50 مل مع توصيل سريع لكافة مدن المغرب.',
    footerCol1Title: 'المجموعات',
    footerCol2Title: 'دار العطور',
    footerLinkAll: 'الكتالوج الكامل',
    footerLink50: 'حجم 50ml (50 درهم)',
    footerLink30: 'حجم 30ml (30 درهم)',
    footerLinkQualite: 'جودة ممتازة',
    footerLinkTenue: 'ثبات 24 ساعة',
    footerLinkFormats: 'الأحجام المتوفرة',
    footerSocialTitle: 'التواصل والطلبات',
    footerCopy: '© 2026 Abdeperfumes المغرب — عطور تشبه شخصيتك. توصيل لجميع المدن.',
    vipWaText: 'واتساب VIP',
    techwebBadge: 'الوكالة الرقمية الرسمية • ورزازات، المغرب',
    techwebDesc: 'تم تصميم وتطوير وتحسين هذه المنصة الرسمية بالكامل من طرف وكالة <strong>TechWeb</strong> الرقمية بمدينة ورزازات. بنية برمجية فائقة السرعة، ربط مباشر مع Google Sheets وتجربة تسوق إلكتروني متكاملة.',
    techwebBtnVisit: 'زيارة موقع وكالة TechWeb',
    techwebBtnContact: 'بدء مشروع جديد (+212 711-218301)',
    seoLocalTitle: 'دار عبدو للعطور (Abdeperfumes) ورزازات — عطور فاخرة ومركزة بالمغرب',
    seoLocalDesc: 'تأسست دار <strong>Abdeperfumes</strong> بمدينة <strong>ورزازات</strong> (جهة درعة تافيلالت) بإشراف <strong>عبد الغني المحجوبي</strong>، لتقديم تشكيلة حصرية من 34 عطراً مركزاً بنسبة نقاء 30% مع ثبات يتجاوز 24 ساعة. متوفرة بحجم 30 مل (30 درهم) و 50 مل (50 درهم). خدمة توصيل سريع وموثوق إلى الدار البيضاء، الرباط، مراكش، ورزازات، طنجة، فاس، أكادير وكافة مدن المملكة المغربية. تم تطوير الموقع الرسمي بواسطة وكالة <strong>TechWeb ورزازات</strong>.'
  },
  en: {
    dir: 'ltr',
    pageTitle: 'Abdeperfumes — Fragrances That Define You | Haute Parfumerie',
    navSubTag: 'Haute Parfumerie',
    navAll: 'Catalog',
    nav50: '50ml Collection',
    nav30: '30ml Collection',
    navSavoir: 'Signature',
    navFormats: 'Formats',
    cart: 'Bag',
    marquee: 'EXPRESS 24H/48H DELIVERY ACROSS MOROCCO — 30% EXTRAIT CONCENTRATION — 24H+ LONGEVITY GUARANTEED — 30ML (30 MAD) & 50ML (50 MAD)',
    heroBadge1: 'THE HOUSE OF ABDEPERFUMES',
    heroBadge2: 'EXCEPTIONAL FRAGRANCES',
    heroTitle: 'Fragrances that<br /><em class="text-champagne italic font-normal">define your signature.</em>',
    heroSub: 'More than a fragrance, a personal signature. Discover our high-concentration extrait de parfum crafted for intense 24h+ longevity and an unforgettable trail, in 30ml & 50ml.',
    heroBtn1: 'Explore the Collection',
    heroBtn2: '50ml Collection — 50 MAD',
    pillar1Title: 'Quality', pillar1Sub: 'Premium',
    pillar2Title: 'Fragrances', pillar2Sub: 'Authentic',
    pillar3Title: 'Lasting', pillar3Sub: '24h+ Longevity',
    pillar4Title: 'For Every', pillar4Sub: 'Lifestyle',
    showcaseTag: 'ELEGANCE IN EVERY MOMENT',
    chipExtrait: 'Concentrated Extrait 30%',
    pedestalTitle: 'Abdeperfumes Signature',
    pedestalSub: 'Nomad 30ml (30 MAD) & Prestige 50ml (50 MAD)',
    catTag: 'OFFICIAL COLLECTION',
    catHeading: 'The Fragrance Studio',
    catBody: 'Select your favorite 30ml (30 MAD) or 50ml (50 MAD) bottles, add them to your bag, and confirm your order in one click.',
    tabAll: 'All Perfumes',
    tab50: '50ml Collection',
    tab30: '30ml Collection',
    search: 'Search a fragrance (Sauvage, Gucci, One Million...)',
    noResultsTitle: 'No fragrance found',
    noResultsSub: 'Try another search term or click All Perfumes.',
    quickView: 'Studio Preview',
    addCart: 'Add to Bag',
    added: 'Added',
    soldOut: 'Sold Out',
    currency: 'MAD',
    bentoTag: 'MORE THAN A PERFUME, A SIGNATURE',
    bentoHeading: 'The Standard of Haute Parfumerie',
    bento1Tag: '01 / EXTRAIT CONCENTRATION',
    bento1Badge: '25% – 35%',
    bento1Title: 'Intense Trail & Olfactory Fidelity',
    bento1Desc: 'Our formulas boast a high concentration of pure essences. From the very first spray, top, heart, and base notes unfold with remarkable depth.',
    bento1Num: '24 Hours+',
    bento1Stat: 'Lasting on Skin & Fabric',
    bento2Tag: '02 / DIRECT STUDIO PRICING',
    bento2Badge: 'NO MIDDLEMAN',
    bento2Title: 'Luxury Accessible to All',
    bento2Desc: 'Pay for the nobility of the juice, not inflated marketing. Two crystal-clear prices: 30 MAD for 30ml nomad format and 50 MAD for 50ml faceted bottle.',
    bento2Num: '30 / 50 MAD',
    bento2Stat: 'Guaranteed Fixed Price',
    bento3Tag: '03 / FAST SHIPPING ACROSS MOROCCO',
    bento3Title: 'Express Delivery in 24h to 48h to All Cities',
    bento3Desc: 'Select your fragrances from the catalog, confirm your bag, and our team immediately prepares your order with personalized tracking.',
    bento3Cta: 'Select My Fragrances',
    cities: ['Casablanca', 'Marrakech', 'Rabat', 'Ouarzazate', 'Agadir', 'Tangier', 'Fes', 'Meknes'],
    colTag: 'TWO VISUAL SIGNATURES',
    collectionsHeading: 'Choose Your Size',
    col30Tag: 'NOMAD COLLECTION',
    col30Title: '30ml Format — The Nomad',
    col30Desc: 'Sleek cylindrical bottle with a dark wooden cap. Perfect to carry anywhere or curate a bespoke discovery set.',
    col30Btn: 'View 30ml Fragrances',
    col50Tag: 'PRESTIGE COLLECTION',
    col50Title: '50ml Format — The Classic',
    col50Desc: 'Faceted glass flacon with crystal-cut stopper. A statement piece featuring the most legendary global fragrance icons.',
    col50Btn: 'View 50ml Fragrances',
    cartTag: 'YOUR SELECTION',
    cartTitle: 'Your Bag',
    cartEmptyTitle: 'Your bag is empty.',
    cartEmptySub: 'Explore our fragrances and add your favorites.',
    cartTotalLabel: 'Order Total',
    waOrder: 'Order via WhatsApp',
    waGreeting: 'Hello Abdeperfumes, I would like to order:',
    toastAdded: 'added to bag',
    modalNotesLabel: 'Olfactory Notes :',
    modalLongevity: 'Extrait Concentration — 24h+ Long-Lasting',
    footerSubTag: 'More than a perfume, a signature',
    footerDesc: 'The Moroccan perfume house dedicated to authentic, high-concentration fragrance extracts in 30ml and 50ml, delivered across Morocco.',
    footerCol1Title: 'Collections',
    footerCol2Title: 'The House',
    footerLinkAll: 'Complete Catalog',
    footerLink50: '50ml Format (50 MAD)',
    footerLink30: '30ml Format (30 MAD)',
    footerLinkQualite: 'Premium Quality',
    footerLinkTenue: '24h Long-Lasting',
    footerLinkFormats: 'Our Formats',
    footerSocialTitle: 'Contact & Orders',
    footerCopy: '© 2026 Abdeperfumes Morocco — Fragrances that define your signature. Delivery across Morocco.',
    vipWaText: 'WhatsApp VIP',
    techwebBadge: 'Official Digital Agency • Ouarzazate, Morocco',
    techwebDesc: 'This official website was entirely engineered, designed, and optimized by the digital agency <strong>TechWeb</strong> based in Ouarzazate. Bespoke high-speed architecture, real-time Google Sheets sync, and an elite e-commerce experience.',
    techwebBtnVisit: 'Discover TechWeb Agency',
    techwebBtnContact: 'Start a Project (+212 711-218301)',
    seoLocalTitle: 'Abdeperfumes Ouarzazate — Haute Parfumerie & Concentrated Fragrances in Morocco',
    seoLocalDesc: 'Founded by <strong>Abdelghani El Mahjouby</strong> in <strong>Ouarzazate</strong> (Drâa-Tafilalet region), <strong>Abdeperfumes</strong> specializes in luxury high-concentration fragrance extracts (30% pure essences) lasting 24h+. Available in 30ml (30 MAD) and 50ml (50 MAD). Express shipping to Casablanca, Rabat, Marrakech, Ouarzazate, Tangier, Fes, Agadir, and across Morocco. Official web platform built by <strong>TechWeb Ouarzazate</strong>.'
  }
};

/* =============================================================
   4. STATE & DOM HELPERS
   ============================================================= */
var state = {
  filter: 'all',
  query: '',
  lang: localStorage.getItem('abde_lang') || 'fr',
  theme: localStorage.getItem('abde_theme') || 'dark',
  cart: JSON.parse(localStorage.getItem('abde_cart') || '[]')
};

function byId(id) {
  return document.getElementById(id);
}

function qsa(sel, root) {
  return Array.prototype.slice.call((root || document).querySelectorAll(sel));
}

function findPerfume(id) {
  for (var i = 0; i < PERFUMES.length; i++) {
    if (PERFUMES[i].id === id) {
      return PERFUMES[i];
    }
  }
  return null;
}

function resolveImgSrc(imgVal) {
  if (!imgVal) { return '50-1.jpeg'; }
  var str = String(imgVal).trim();
  if (str.indexOf('http://') === 0 || str.indexOf('https://') === 0 || str.indexOf('data:') === 0) {
    return str;
  }
  if (/\.(jpeg|jpg|png|webp|avif)$/i.test(str)) {
    return str;
  }
  return str + '.jpeg';
}

/* =============================================================
   5. RESPONSIVE & 3D TILT CSS FIXES (FIXES DESKTOP BURGER BUG)
   ============================================================= */
function injectRuntimeFixes() {
  if (byId('abde-runtime-fixes')) { return; }
  var st = document.createElement('style');
  st.id = 'abde-runtime-fixes';
  st.textContent =
    '@media (min-width: 1024px) {' +
    '  #navBurger { display: none !important; }' +
    '  #mobileNav { display: none !important; }' +
    '}' +
    '.product-card, .studio-poster-stage { transform-style: preserve-3d; will-change: transform; }';
  document.head.appendChild(st);
}

/* =============================================================
   6. GOOGLE SHEETS LIVE CSV PARSER & SYNC
   ============================================================= */
function parseCSV(text) {
  var rows = [];
  var row = [];
  var cur = '';
  var inQuotes = false;

  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    var next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(cur.trim());
        cur = '';
      } else if (ch === '\n' || (ch === '\r' && next === '\n')) {
        row.push(cur.trim());
        if (row.join('').length > 0) { rows.push(row); }
        row = [];
        cur = '';
        if (ch === '\r') { i++; }
      } else if (ch !== '\r') {
        cur += ch;
      }
    }
  }
  if (cur.length > 0 || row.length > 0) {
    row.push(cur.trim());
    if (row.join('').length > 0) { rows.push(row); }
  }
  return rows;
}

function syncFromGoogleSheets() {
  /* Allow setting or updating the Google Sheet CSV link via URL parameter ?sheet=CSV_URL */
  var sheetParam = null;
  try {
    var urlParams = new URLSearchParams(window.location.search);
    sheetParam = urlParams.get('sheet');
    if (sheetParam) {
      if (sheetParam === 'clear' || sheetParam === 'reset') {
        localStorage.removeItem('abde_sheet_url');
        sheetParam = null;
      } else {
        localStorage.setItem('abde_sheet_url', sheetParam);
      }
    }
  } catch (err) {
    /* Safe fallback if URLSearchParams is unavailable */
  }

  var savedSheetUrl = '';
  try {
    savedSheetUrl = localStorage.getItem('abde_sheet_url') || '';
  } catch (err) {
    savedSheetUrl = '';
  }

  var sheetUrl = sheetParam || savedSheetUrl || GOOGLE_SHEET_CSV_URL || '';
  if (!sheetUrl) { return; }

  var sep = sheetUrl.indexOf('?') === -1 ? '?' : '&';
  var fetchUrl = sheetUrl + sep + 't=' + new Date().getTime();

  fetch(fetchUrl)
    .then(function (res) { return res.text(); })
    .then(function (csvText) {
      var rows = parseCSV(csvText);
      if (!rows || rows.length < 2) { return; }

      /* 1. Read Row 1 headers and convert to lowercase trimmed strings */
      var headers = (rows[0] || []).map(function (h) {
        return String(h || '').toLowerCase().trim();
      });

      /* 2. Smart header matcher: search dynamically for common aliases */
      var findCol = function (aliases) {
        /* Pass 1: Exact lowercase match */
        for (var a = 0; a < aliases.length; a++) {
          var alias = aliases[a].toLowerCase().trim();
          for (var h = 0; h < headers.length; h++) {
            if (headers[h] === alias) {
              return h;
            }
          }
        }
        /* Pass 2: Normalized match (ignoring whitespace, underscores, dashes) */
        for (var a = 0; a < aliases.length; a++) {
          var cleanAlias = aliases[a].toLowerCase().replace(/[\s_\-]+/g, '');
          for (var h = 0; h < headers.length; h++) {
            var normH = headers[h].replace(/[\s_\-]+/g, '');
            if (normH === cleanAlias) {
              return h;
            }
          }
        }
        /* Pass 3: Loose containment match for longer words (e.g., 'price (mad)' -> 'price') */
        for (var a = 0; a < aliases.length; a++) {
          var cleanAlias = aliases[a].toLowerCase().replace(/[\s_\-]+/g, '');
          if (cleanAlias.length < 3) { continue; }
          for (var h = 0; h < headers.length; h++) {
            var normH = headers[h].replace(/[\s_\-]+/g, '');
            if (normH.indexOf(cleanAlias) !== -1) {
              return h;
            }
          }
        }
        return -1;
      };

      /* Map columns dynamically using alias dictionaries */
      var idxId = findCol(['id', 'sku', 'code', 'ref', 'reference']);
      var idxName = findCol(['name', 'nom', 'title', 'produit', 'perfume', 'parfum', 'product']);
      var idxNameAr = findCol(['name_ar', 'arabic', 'nom_ar', 'namear', 'nomar', 'arabe']);
      var idxFormat = findCol(['format', 'size', 'volume', 'ml', 'taille', 'contenance']);
      var idxPrice = findCol(['price', 'prix', 'mad', 'tarif', 'montant', 'cost']);
      var idxImg = findCol(['img', 'image', 'photo', 'picture', 'visuel']);

      /* Taglines: multilingual + generic aliases */
      var idxTaglineGeneric = findCol(['tagline', 'desc', 'subtitle', 'description']);
      var idxTaglineFr = findCol(['tagline_fr', 'taglinefr', 'desc_fr', 'description_fr']);
      var idxTaglineAr = findCol(['tagline_ar', 'taglinear', 'desc_ar', 'description_ar']);
      var idxTaglineEn = findCol(['tagline_en', 'taglineen', 'desc_en', 'description_en']);

      /* Olfactory Notes: multilingual + generic aliases */
      var idxNotesGeneric = findCol(['notes', 'ingredients', 'olfactive', 'pyramide', 'senteurs']);
      var idxNotesFr = findCol(['notes_fr', 'notesfr', 'notes_olfactives_fr']);
      var idxNotesAr = findCol(['notes_ar', 'notesar', 'notes_olfactives_ar']);
      var idxNotesEn = findCol(['notes_en', 'notesen', 'notes_olfactives_en']);

      /* Stock availability */
      var idxStock = findCol(['stock', 'dispo', 'available', 'quantite', 'disponible', 'in_stock']);

      /* Safe cell extractor with trimming */
      var getCell = function (row, colIdx) {
        if (colIdx === -1 || !row || typeof row[colIdx] === 'undefined') {
          return '';
        }
        return String(row[colIdx] || '').trim();
      };

      var loaded = [];
      for (var r = 1; r < rows.length; r++) {
        var row = rows[r];
        if (!row || row.length === 0) { continue; }

        var nameVal = getCell(row, idxName);
        if (!nameVal) { continue; } /* Skip empty rows */

        var idVal = getCell(row, idxId) || ('gs-' + r);
        var nameArVal = getCell(row, idxNameAr) || nameVal;

        /* 3. Safe fallback & normalization for Format */
        var rawFormat = getCell(row, idxFormat).toLowerCase();
        var formatVal = (rawFormat.indexOf('30') !== -1) ? '30ml' : '50ml';

        /* Safe fallback & normalization for Price */
        var rawPrice = getCell(row, idxPrice);
        var priceClean = rawPrice.replace(/[^0-9.,]/g, '').replace(',', '.');
        var priceVal = parseFloat(priceClean);
        if (isNaN(priceVal) || priceVal <= 0) {
          priceVal = (formatVal === '30ml' ? 30 : 50);
        }

        /* Safe fallback for Image */
        var rawImg = getCell(row, idxImg);
        var imgVal = rawImg || (formatVal === '30ml' ? '30-1.jpeg' : '50-1.jpeg');

        /* Safe fallback for Stock */
        var stockRaw = (getCell(row, idxStock) || 'true').toLowerCase();
        var inStock = !(
          stockRaw === 'false' ||
          stockRaw === '0' ||
          stockRaw === 'non' ||
          stockRaw === 'no' ||
          stockRaw === 'out' ||
          stockRaw === 'rupture' ||
          stockRaw === 'non disponible'
        );

        /* Tagline fallbacks */
        var genericTagline = getCell(row, idxTaglineGeneric);
        var taglineFr = getCell(row, idxTaglineFr) || genericTagline || 'Extrait de parfum haute concentration.';
        var taglineAr = getCell(row, idxTaglineAr) || 'عطر مركز فاخر بثبات عالي.';
        var taglineEn = getCell(row, idxTaglineEn) || genericTagline || 'High-concentration luxury perfume extract.';

        /* Notes fallbacks */
        var genericNotes = getCell(row, idxNotesGeneric);
        var notesFr = getCell(row, idxNotesFr) || genericNotes || 'Essences nobles & accord signature';
        var notesAr = getCell(row, idxNotesAr) || genericNotes || 'خلاصات عطرية نقية وثابتة';
        var notesEn = getCell(row, idxNotesEn) || genericNotes || 'Noble essences & signature accord';

        loaded.push({
          id: idVal,
          img: imgVal,
          format: formatVal,
          price: priceVal,
          stock: inStock,
          name: nameVal,
          name_ar: nameArVal,
          tagline: {
            fr: taglineFr,
            ar: taglineAr,
            en: taglineEn
          },
          notes: {
            fr: notesFr,
            ar: notesAr,
            en: notesEn
          }
        });
      }

      if (loaded.length > 0) {
        PERFUMES = loaded;
        applyLanguage(state.lang);
      }
    })
    .catch(function () {
      /* Fallback silently to built-in 34 perfumes if offline */
    });
}

/* =============================================================
   7. TOAST, THEME & MARQUEE CONTROLLERS
   ============================================================= */
var toastTimeout = null;

function showToast(perfumeName) {
  var toast = byId('luxuryToast');
  var toastMsg = byId('toastMsg');
  if (!toast || !toastMsg) { return; }

  var t = I18N[state.lang] || I18N.fr;
  toastMsg.textContent = perfumeName + ' — ' + t.toastAdded;
  toast.classList.add('is-visible');

  if (toastTimeout) { clearTimeout(toastTimeout); }
  toastTimeout = setTimeout(function () {
    toast.classList.remove('is-visible');
  }, 3000);
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem('abde_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');

  var sun = byId('iconSun');
  var moon = byId('iconMoon');
  if (sun && moon) {
    sun.classList.toggle('hidden', theme !== 'dark');
    moon.classList.toggle('hidden', theme === 'dark');
  }
}

function renderMarquee(text) {
  var track = byId('marqueeTrack');
  if (!track) { return; }
  var item = '<span class="mx-6">' + text + '</span>';
  track.innerHTML = item + item + item + item;
}

function renderCities(cityList) {
  var container = byId('cityPillsContainer');
  if (!container || !cityList) { return; }
  var html = '';
  for (var i = 0; i < cityList.length; i++) {
    html += '<span class="city-pill">' + cityList[i] + '</span>';
  }
  container.innerHTML = html;
}

/* =============================================================
   8. FULL LANGUAGE & MOBILE MENU TRANSLATION ENGINE
   ============================================================= */
function getFormatCounts() {
  var total = PERFUMES.length;
  var c50 = 0;
  var c30 = 0;
  for (var i = 0; i < PERFUMES.length; i++) {
    if (PERFUMES[i].format === '50ml') { c50++; }
    if (PERFUMES[i].format === '30ml') { c30++; }
  }
  return { all: total, c50: c50, c30: c30 };
}

function applyLanguage(lang) {
  if (!I18N[lang]) { lang = 'fr'; }
  state.lang = lang;
  localStorage.setItem('abde_lang', lang);
  var t = I18N[lang];
  var counts = getFormatCounts();

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.title = t.pageTitle;

  qsa('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  /* Desktop Navbar */
  if (byId('navSubTag')) { byId('navSubTag').textContent = t.navSubTag; }
  if (byId('navLinkAll')) { byId('navLinkAll').textContent = t.navAll + ' (' + counts.all + ')'; }
  if (byId('navLink50')) { byId('navLink50').textContent = t.nav50; }
  if (byId('navLink30')) { byId('navLink30').textContent = t.nav30; }
  if (byId('navLinkSavoir')) { byId('navLinkSavoir').textContent = t.navSavoir; }
  if (byId('navLinkFormats')) { byId('navLinkFormats').textContent = t.navFormats; }
  if (byId('navCartText')) { byId('navCartText').textContent = t.cart; }

  /* Mobile Dropdown Menu (Fixes French links in image_512379.jpg) */
  var mobLinks = qsa('#mobileNav a');
  if (mobLinks.length >= 5) {
    mobLinks[0].textContent = t.navAll + ' (' + counts.all + ')';
    mobLinks[1].textContent = t.nav50 + ' (' + counts.c50 + ')';
    mobLinks[2].textContent = t.nav30 + ' (' + counts.c30 + ')';
    mobLinks[3].textContent = t.navSavoir;
    mobLinks[4].textContent = t.navFormats;
  }

  /* Marquee & Hero */
  renderMarquee(t.marquee);
  if (byId('heroBadge1')) { byId('heroBadge1').textContent = t.heroBadge1; }
  if (byId('heroBadge2')) { byId('heroBadge2').textContent = counts.all + ' ' + t.heroBadge2; }
  if (byId('heroTitle')) { byId('heroTitle').innerHTML = t.heroTitle; }
  if (byId('heroSubtitle')) { byId('heroSubtitle').textContent = t.heroSub; }
  if (byId('heroBtnPrimary')) { byId('heroBtnPrimary').textContent = t.heroBtn1 + ' (' + counts.all + ')'; }
  if (byId('heroBtnSecondary')) { byId('heroBtnSecondary').textContent = t.heroBtn2; }

  /* 4 Pillars */
  if (byId('pillar1Title')) { byId('pillar1Title').textContent = t.pillar1Title; }
  if (byId('pillar1Sub')) { byId('pillar1Sub').textContent = t.pillar1Sub; }
  if (byId('pillar2Title')) { byId('pillar2Title').textContent = t.pillar2Title; }
  if (byId('pillar2Sub')) { byId('pillar2Sub').textContent = t.pillar2Sub; }
  if (byId('pillar3Title')) { byId('pillar3Title').textContent = t.pillar3Title; }
  if (byId('pillar3Sub')) { byId('pillar3Sub').textContent = t.pillar3Sub; }
  if (byId('pillar4Title')) { byId('pillar4Title').textContent = t.pillar4Title; }
  if (byId('pillar4Sub')) { byId('pillar4Sub').textContent = t.pillar4Sub; }

  /* Pedestal */
  if (byId('showcaseTag')) { byId('showcaseTag').textContent = t.showcaseTag; }
  if (byId('chipExtrait')) { byId('chipExtrait').textContent = t.chipExtrait; }
  if (byId('pedestalTitle')) { byId('pedestalTitle').textContent = t.pedestalTitle; }
  if (byId('pedestalSub')) { byId('pedestalSub').textContent = t.pedestalSub; }

  /* Catalogue & Filter Counts */
  if (byId('catTag')) { byId('catTag').textContent = t.catTag; }
  if (byId('catalogueHeading')) { byId('catalogueHeading').textContent = t.catHeading; }
  if (byId('catBody')) { byId('catBody').textContent = t.catBody; }
  if (byId('tabAllText')) { byId('tabAllText').textContent = t.tabAll; }
  if (byId('tab50Text')) { byId('tab50Text').textContent = t.tab50; }
  if (byId('tab30Text')) { byId('tab30Text').textContent = t.tab30; }
  if (byId('countAll')) { byId('countAll').textContent = String(counts.all); }
  if (byId('count50')) { byId('count50').textContent = String(counts.c50); }
  if (byId('count30')) { byId('count30').textContent = String(counts.c30); }
  if (byId('searchInput')) { byId('searchInput').placeholder = t.search; }
  if (byId('noResultsText')) { byId('noResultsText').textContent = t.noResultsTitle; }
  if (byId('noResultsSub')) { byId('noResultsSub').textContent = t.noResultsSub; }

  /* Bento Grid */
  if (byId('bentoTag')) { byId('bentoTag').textContent = t.bentoTag; }
  if (byId('bentoHeading')) { byId('bentoHeading').textContent = t.bentoHeading; }
  if (byId('bento1Tag')) { byId('bento1Tag').textContent = t.bento1Tag; }
  if (byId('bento1Badge')) { byId('bento1Badge').textContent = t.bento1Badge; }
  if (byId('bento1Title')) { byId('bento1Title').textContent = t.bento1Title; }
  if (byId('bento1Desc')) { byId('bento1Desc').textContent = t.bento1Desc; }
  if (byId('bento1Num')) { byId('bento1Num').textContent = t.bento1Num; }
  if (byId('bento1Stat')) { byId('bento1Stat').textContent = t.bento1Stat; }
  if (byId('bento2Tag')) { byId('bento2Tag').textContent = t.bento2Tag; }
  if (byId('bento2Badge')) { byId('bento2Badge').textContent = t.bento2Badge; }
  if (byId('bento2Title')) { byId('bento2Title').textContent = t.bento2Title; }
  if (byId('bento2Desc')) { byId('bento2Desc').textContent = t.bento2Desc; }
  if (byId('bento2Num')) { byId('bento2Num').textContent = t.bento2Num; }
  if (byId('bento2Stat')) { byId('bento2Stat').textContent = t.bento2Stat; }
  if (byId('bento3Tag')) { byId('bento3Tag').textContent = t.bento3Tag; }
  if (byId('bento3Title')) { byId('bento3Title').textContent = t.bento3Title; }
  if (byId('bento3Desc')) { byId('bento3Desc').textContent = t.bento3Desc; }
  if (byId('bento3Cta')) { byId('bento3Cta').textContent = t.bento3Cta; }
  renderCities(t.cities);

  /* Dual Formats */
  if (byId('colTag')) { byId('colTag').textContent = t.colTag; }
  if (byId('collectionsHeading')) { byId('collectionsHeading').textContent = t.collectionsHeading; }
  if (byId('col30Tag')) { byId('col30Tag').textContent = t.col30Tag + ' (' + counts.c30 + ')'; }
  if (byId('col30Title')) { byId('col30Title').textContent = t.col30Title; }
  if (byId('col30Desc')) { byId('col30Desc').textContent = t.col30Desc; }
  if (byId('col30Btn')) { byId('col30Btn').textContent = t.col30Btn; }
  if (byId('col50Tag')) { byId('col50Tag').textContent = t.col50Tag + ' (' + counts.c50 + ')'; }
  if (byId('col50Title')) { byId('col50Title').textContent = t.col50Title; }
  if (byId('col50Desc')) { byId('col50Desc').textContent = t.col50Desc; }
  if (byId('col50Btn')) { byId('col50Btn').textContent = t.col50Btn; }

  /* Cart, Modal & Footer */
  if (byId('cartTag')) { byId('cartTag').textContent = t.cartTag; }
  if (byId('cartTitle')) { byId('cartTitle').textContent = t.cartTitle; }
  if (byId('cartEmptyTitle')) { byId('cartEmptyTitle').textContent = t.cartEmptyTitle; }
  if (byId('cartEmptySub')) { byId('cartEmptySub').textContent = t.cartEmptySub; }
  if (byId('cartTotalLabel')) { byId('cartTotalLabel').textContent = t.cartTotalLabel; }
  if (byId('btnWhatsAppText')) { byId('btnWhatsAppText').textContent = t.waOrder; }
  if (byId('modalNotesLabel')) { byId('modalNotesLabel').textContent = t.modalNotesLabel; }
  if (byId('modalLongevity')) { byId('modalLongevity').textContent = t.modalLongevity; }
  if (byId('modalAddText')) { byId('modalAddText').textContent = t.addCart; }
  if (byId('footerSubTag')) { byId('footerSubTag').textContent = t.footerSubTag; }
  if (byId('footerDesc')) { byId('footerDesc').textContent = t.footerDesc; }
  if (byId('footerCol1Title')) { byId('footerCol1Title').textContent = t.footerCol1Title; }
  if (byId('footerCol2Title')) { byId('footerCol2Title').textContent = t.footerCol2Title; }
  if (byId('footerLinkAll')) { byId('footerLinkAll').textContent = t.footerLinkAll; }
  if (byId('footerLink50')) { byId('footerLink50').textContent = t.footerLink50; }
  if (byId('footerLink30')) { byId('footerLink30').textContent = t.footerLink30; }
  if (byId('footerLinkQualite')) { byId('footerLinkQualite').textContent = t.footerLinkQualite; }
  if (byId('footerLinkTenue')) { byId('footerLinkTenue').textContent = t.footerLinkTenue; }
  if (byId('footerLinkFormats')) { byId('footerLinkFormats').textContent = t.footerLinkFormats; }
  if (byId('footerSocialTitle')) { byId('footerSocialTitle').textContent = t.footerSocialTitle; }
  if (byId('footerCopy')) { byId('footerCopy').textContent = t.footerCopy; }
  if (byId('vipWaText')) { byId('vipWaText').textContent = t.vipWaText; }
  if (byId('techwebBadge')) { byId('techwebBadge').textContent = t.techwebBadge; }
  if (byId('techwebDesc')) { byId('techwebDesc').innerHTML = t.techwebDesc; }
  if (byId('techwebBtnVisit')) { byId('techwebBtnVisit').textContent = t.techwebBtnVisit; }
  if (byId('techwebBtnContact')) { byId('techwebBtnContact').textContent = t.techwebBtnContact; }
  if (byId('seoLocalTitle')) { byId('seoLocalTitle').textContent = t.seoLocalTitle; }
  if (byId('seoLocalDesc')) { byId('seoLocalDesc').innerHTML = t.seoLocalDesc; }

  renderGrid();
  renderCart();
  if (currentModalId) { openModal(currentModalId); }
}

/* =============================================================
   9. RENDER CATALOGUE GRID & 3D MAGNETIC HOVER
   ============================================================= */
function renderGrid() {
  var grid = byId('productGrid');
  var noRes = byId('noResults');
  if (!grid) { return; }

  var q = state.query.trim().toLowerCase();
  var t = I18N[state.lang] || I18N.fr;

  var filtered = PERFUMES.filter(function (p) {
    var matchFormat = state.filter === 'all' || p.format === state.filter;
    if (!matchFormat) { return false; }
    if (!q) { return true; }
    var nameFr = (p.name || '').toLowerCase();
    var nameAr = (p.name_ar || '').toLowerCase();
    var notesFr = (p.notes && p.notes.fr ? p.notes.fr : '').toLowerCase();
    var notesAr = (p.notes && p.notes.ar ? p.notes.ar : '').toLowerCase();
    return nameFr.indexOf(q) !== -1 || nameAr.indexOf(q) !== -1 || notesFr.indexOf(q) !== -1 || notesAr.indexOf(q) !== -1;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noRes) { noRes.hidden = false; }
    return;
  }
  if (noRes) { noRes.hidden = true; }

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var p = filtered[i];
    var isOut = p.stock === false;
    var displayName = state.lang === 'ar' ? (p.name_ar || p.name) : p.name;
    var displayNotes = (p.notes && p.notes[state.lang]) ? p.notes[state.lang] : p.notes.fr;
    var displayFormat = state.lang === 'ar' ? (p.format === '30ml' ? '30 مل' : '50 مل') : p.format;
    var imgSrc = resolveImgSrc(p.img);

    html +=
      '<article class="product-card group reveal-item' + (isOut ? ' is-out-of-stock' : '') + '" data-id="' + p.id + '">' +
      '<div class="studio-photo-frame aspect-[4/5] mb-4 cursor-pointer relative" data-action="quickview" data-id="' + p.id + '">' +
      '<img src="' + imgSrc + '" alt="' + displayName + '" width="300" height="375" loading="lazy" decoding="async" class="studio-bottle-photo w-full h-full object-cover" />' +
      '<div class="studio-vignette-mask" aria-hidden="true"></div>' +
      '<span class="absolute top-3 left-3 z-20 ' + (isOut ? 'badge-soldout' : 'badge-gold') + '">' + (isOut ? t.soldOut : displayFormat) + '</span>' +
      '<button type="button" data-action="quickview" data-id="' + p.id + '" class="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-obsidian/90 border border-champagne/40 text-[11px] font-bold text-alabaster opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">' +
      t.quickView +
      '</button>' +
      '</div>' +
      '<div class="px-1 flex-1 flex flex-col justify-between relative z-10">' +
      '<div>' +
      '<h3 class="font-serif text-xl font-semibold text-champagne leading-snug mb-1.5">' + displayName + '</h3>' +
      '<p class="text-xs opacity-75 line-clamp-2 mb-3 leading-relaxed">' + displayNotes + '</p>' +
      '</div>' +
      '<div class="pt-3 border-t border-champagne/15 flex items-center justify-between gap-2">' +
      '<span class="font-serif text-xl font-bold text-goldlight">' + p.price + ' ' + t.currency + '</span>' +
      '<button type="button" data-action="addcart" data-id="' + p.id + '" ' + (isOut ? 'disabled' : '') + ' class="btn-gold-solid px-4 py-2.5 rounded-full text-xs font-bold">' +
      (isOut ? t.soldOut : t.addCart) +
      '</button>' +
      '</div>' +
      '</div>' +
      '</article>';
  }

  grid.innerHTML = html;

  setTimeout(function () {
    qsa('.reveal-item', grid).forEach(function (el, idx) {
      setTimeout(function () { el.classList.add('revealed'); }, Math.min(idx * 35, 350));
    });
    bind3DTilt();
  }, 30);
}

function bind3DTilt() {
  if (window.innerWidth < 1024) { return; }
  qsa('.product-card, .studio-poster-stage').forEach(function (card) {
    if (card.getAttribute('data-tilt') === '1') { return; }
    card.setAttribute('data-tilt', '1');

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(900px) rotateX(' + (-y * 7).toFixed(2) + 'deg) rotateY(' + (x * 7).toFixed(2) + 'deg) translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
}

/* =============================================================
   10. CART & WHATSAPP CHECKOUT
   ============================================================= */
function saveCart() {
  localStorage.setItem('abde_cart', JSON.stringify(state.cart));
}

function addToCart(id, btnEl) {
  var p = findPerfume(id);
  if (!p || p.stock === false) { return; }

  var exists = false;
  for (var i = 0; i < state.cart.length; i++) {
    if (state.cart[i].id === id) {
      state.cart[i].qty += 1;
      exists = true;
      break;
    }
  }
  if (!exists) { state.cart.push({ id: id, qty: 1 }); }

  saveCart();
  renderCart();

  var displayName = state.lang === 'ar' ? (p.name_ar || p.name) : p.name;
  showToast(displayName);

  if (btnEl) {
    var orig = btnEl.textContent;
    btnEl.textContent = (I18N[state.lang] || I18N.fr).added;
    setTimeout(function () { btnEl.textContent = orig; }, 900);
  }
  openCart();
}

function updateQty(id, delta) {
  var next = [];
  for (var i = 0; i < state.cart.length; i++) {
    var item = state.cart[i];
    if (item.id === id) { item.qty += delta; }
    if (item.qty > 0) { next.push(item); }
  }
  state.cart = next;
  saveCart();
  renderCart();
}

function renderCart() {
  var badge = byId('cartBadge');
  var empty = byId('cartEmpty');
  var listEl = byId('cartItems');
  var footer = byId('cartFooter');
  var totalEl = byId('cartTotal');
  if (!listEl) { return; }

  var count = 0;
  var total = 0;
  var html = '';
  var t = I18N[state.lang] || I18N.fr;

  for (var i = 0; i < state.cart.length; i++) {
    var c = state.cart[i];
    var p = findPerfume(c.id);
    if (!p) { continue; }
    count += c.qty;
    total += p.price * c.qty;
    var displayName = state.lang === 'ar' ? (p.name_ar || p.name) : p.name;
    var displayFormat = state.lang === 'ar' ? (p.format === '30ml' ? '30 مل' : '50 مل') : p.format;

    html +=
      '<li class="p-3 rounded-2xl bg-champagne/5 border border-champagne/20 flex items-center gap-3">' +
      '<div class="studio-photo-frame w-16 h-16 shrink-0 rounded-xl">' +
      '<img src="' + resolveImgSrc(p.img) + '" alt="' + displayName + '" class="studio-bottle-photo w-full h-full object-cover" />' +
      '</div>' +
      '<div class="flex-1 min-w-0">' +
      '<p class="font-serif font-semibold text-base text-champagne truncate">' + displayName + '</p>' +
      '<p class="text-[11px] opacity-70">' + displayFormat + ' — ' + (p.price * c.qty) + ' ' + t.currency + '</p>' +
      '</div>' +
      '<div class="flex items-center gap-2">' +
      '<button type="button" data-action="qty-minus" data-id="' + p.id + '" class="w-7 h-7 rounded-full border border-champagne/30 text-xs font-bold hover:bg-champagne hover:text-obsidian transition-colors">-</button>' +
      '<span class="text-xs font-bold w-4 text-center">' + c.qty + '</span>' +
      '<button type="button" data-action="qty-plus" data-id="' + p.id + '" class="w-7 h-7 rounded-full border border-champagne/30 text-xs font-bold hover:bg-champagne hover:text-obsidian transition-colors">+</button>' +
      '</div>' +
      '</li>';
  }

  if (badge) {
    badge.textContent = String(count);
    badge.hidden = count === 0;
  }
  if (empty) { empty.hidden = count > 0; }
  if (footer) { footer.hidden = count === 0; }
  if (totalEl) { totalEl.textContent = total + ' ' + t.currency; }
  listEl.innerHTML = html;
}

function openCart() {
  if (byId('cartDrawer')) { byId('cartDrawer').classList.add('is-open'); }
  if (byId('cartOverlay')) { byId('cartOverlay').classList.add('is-open'); }
}

function closeCart() {
  if (byId('cartDrawer')) { byId('cartDrawer').classList.remove('is-open'); }
  if (byId('cartOverlay')) { byId('cartOverlay').classList.remove('is-open'); }
}

/* =============================================================
   11. QUICK-VIEW MODAL & INITIALIZATION
   ============================================================= */
var currentModalId = null;

function openModal(id) {
  var p = findPerfume(id);
  if (!p) { return; }
  currentModalId = id;
  var t = I18N[state.lang] || I18N.fr;
  var displayName = state.lang === 'ar' ? (p.name_ar || p.name) : p.name;
  var displayNotes = (p.notes && p.notes[state.lang]) ? p.notes[state.lang] : p.notes.fr;
  var displayTagline = (p.tagline && p.tagline[state.lang]) ? p.tagline[state.lang] : p.tagline.fr;
  var displayFormat = state.lang === 'ar' ? (p.format === '30ml' ? '30 مل' : '50 مل') : p.format;

  if (byId('modalImg')) { byId('modalImg').src = resolveImgSrc(p.img); }
  if (byId('modalBadge')) { byId('modalBadge').textContent = displayFormat; }
  if (byId('modalName')) { byId('modalName').textContent = displayName; }
  if (byId('modalTagline')) { byId('modalTagline').textContent = displayTagline; }
  if (byId('modalNotes')) { byId('modalNotes').textContent = displayNotes; }
  if (byId('modalPrice')) { byId('modalPrice').textContent = p.price + ' ' + t.currency; }
  if (byId('modalOverlay')) { byId('modalOverlay').hidden = false; }
}

function closeModal() {
  if (byId('modalOverlay')) { byId('modalOverlay').hidden = true; }
  currentModalId = null;
}

function setFilter(f) {
  state.filter = f;
  qsa('.filter-btn').forEach(function (btn) {
    btn.classList.toggle('filter-btn--active', btn.getAttribute('data-filter') === f);
  });
  renderGrid();
}

function initSpotlight() {
  var spotlight = byId('luxurySpotlight');
  if (!spotlight || window.innerWidth <= 1024) { return; }
  var mx = window.innerWidth / 2;
  var my = window.innerHeight / 2;
  var cx = mx;
  var cy = my;

  window.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
  });

  function loop() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    spotlight.style.transform = 'translate(' + cx + 'px, ' + cy + 'px) translate(-50%, -50%)';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

function init() {
  injectRuntimeFixes();
  applyTheme(state.theme);
  applyLanguage(state.lang);
  initSpotlight();
  bind3DTilt();
  
  /* Defer Google Sheets sync so initial page paint is instantaneous */
  if ('requestIdleCallback' in window) {
    requestIdleCallback(function () { syncFromGoogleSheets(); });
  } else {
    setTimeout(syncFromGoogleSheets, 1200);
  }

  if (byId('themeToggleBtn')) {
    byId('themeToggleBtn').addEventListener('click', function () {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }

  qsa('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  var burger = byId('navBurger');
  var mobNav = byId('mobileNav');
  if (burger && mobNav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      mobNav.classList.toggle('hidden');
      mobNav.classList.toggle('flex');
    });

    document.addEventListener('click', function (e) {
      if (!mobNav.classList.contains('hidden') && !mobNav.contains(e.target) && !burger.contains(e.target)) {
        mobNav.classList.add('hidden');
        mobNav.classList.remove('flex');
      }
    });
  }

  qsa('[data-filter]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var f = el.getAttribute('data-filter');
      if (!f) { return; }
      if (el.tagName === 'A') { e.preventDefault(); }
      setFilter(f);
      if (mobNav) {
        mobNav.classList.add('hidden');
        mobNav.classList.remove('flex');
      }
      var cat = byId('catalogue');
      if (cat && !el.classList.contains('filter-btn')) {
        cat.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  qsa('[data-filter-trigger]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      setFilter(el.getAttribute('data-filter-trigger'));
      var cat = byId('catalogue');
      if (cat) { cat.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  if (byId('searchInput')) {
    byId('searchInput').addEventListener('input', function (e) {
      state.query = e.target.value;
      renderGrid();
    });
  }

  if (byId('productGrid')) {
    byId('productGrid').addEventListener('click', function (e) {
      var target = e.target.closest('[data-action]');
      if (!target) { return; }
      var id = target.getAttribute('data-id');
      var act = target.getAttribute('data-action');
      if (act === 'quickview') { openModal(id); }
      if (act === 'addcart') { addToCart(id, target); }
    });
  }

  if (byId('cartBtn')) { byId('cartBtn').addEventListener('click', openCart); }
  if (byId('cartClose')) { byId('cartClose').addEventListener('click', closeCart); }
  if (byId('cartOverlay')) { byId('cartOverlay').addEventListener('click', closeCart); }

  if (byId('cartItems')) {
    byId('cartItems').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action]');
      if (!btn) { return; }
      var id = btn.getAttribute('data-id');
      var act = btn.getAttribute('data-action');
      if (act === 'qty-plus') { updateQty(id, 1); }
      if (act === 'qty-minus') { updateQty(id, -1); }
    });
  }

  if (byId('btnWhatsApp')) {
    byId('btnWhatsApp').addEventListener('click', function () {
      if (state.cart.length === 0) { return; }
      var t = I18N[state.lang] || I18N.fr;
      var lines = [];
      var total = 0;
      for (var i = 0; i < state.cart.length; i++) {
        var c = state.cart[i];
        var p = findPerfume(c.id);
        if (!p) { continue; }
        var sub = p.price * c.qty;
        total += sub;
        var dName = state.lang === 'ar' ? (p.name_ar || p.name) : p.name;
        var dFmt = state.lang === 'ar' ? (p.format === '30ml' ? '30 مل' : '50 مل') : p.format;
        lines.push('• ' + dName + ' (' + dFmt + ') x' + c.qty + ' = ' + sub + ' ' + t.currency);
      }
      var totalLabel = state.lang === 'ar' ? 'المجموع الإجمالي : ' : 'Total : ';
      var msg = t.waGreeting + '\n\n' + lines.join('\n') + '\n\n' + totalLabel + total + ' ' + t.currency;
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  if (byId('modalClose')) { byId('modalClose').addEventListener('click', closeModal); }
  if (byId('modalOverlay')) {
    byId('modalOverlay').addEventListener('click', function (e) {
      if (e.target === byId('modalOverlay')) { closeModal(); }
    });
  }
  if (byId('modalAddCart')) {
    byId('modalAddCart').addEventListener('click', function () {
      if (currentModalId) {
        addToCart(currentModalId, null);
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}