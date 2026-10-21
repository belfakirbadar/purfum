/* ═══════════════════════════════════════════════════════════════════
   Abdeperfumes — Haute Parfumerie du Maroc
   Production Vanilla Architecture (FR / AR / EN)
   Zero Dependencies · 100% Robust · Awwwards Art Direction
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. AUTHENTIC PERFUME CATALOGUE (34 Fragrances) ─────────────────── */
var PERFUMES = [
  {
    "id": "p30-01",
    "img": "30-1.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Burberry Her",
    "name_ar": "بربري هير (Burberry Her)",
    "tagline_fr": "Audace fruitée, baies gourmandes et sillage ambré.",
    "tagline_ar": "جرأة فاكهية منعشة، توت بري ولمسة عنبرية ناعمة.",
    "tagline_en": "Fruity boldness, luscious berries and amber sillage.",
    "notes_fr": "Baies rouges, Cerise, Jasmin éclatant, Musc blanc, Ambre doux",
    "notes_ar": "توت أحمر، كرز، ياسمين مشرق، مسك أبيض، عنبر دافئ",
    "notes_en": "Red Berries, Cherry, Bright Jasmine, White Musk, Soft Amber",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p30-02",
    "img": "30-2.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Stronger With You Intensely",
    "name_ar": "سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)",
    "tagline_fr": "Intensité captivante de cannelle épicée et vanille ambrée.",
    "tagline_ar": "كثافة شرقية آسرة بنفحات القرفة والفانيليا العنبرية.",
    "tagline_en": "Captivating intensity of spicy cinnamon and amber vanilla.",
    "notes_fr": "Poivre rose, Cannelle, Lavande noble, Toffee, Vanille orientale, Ambre",
    "notes_ar": "فلفل وردي، قرفة، خزامى نبيلة، كراميل التوفي، فانيليا شرقية، عنبر",
    "notes_en": "Pink Pepper, Cinnamon, Noble Lavender, Toffee, Oriental Vanilla, Amber",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p30-03",
    "img": "30-3.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Good Girl",
    "name_ar": "جود جيرل (Good Girl)",
    "tagline_fr": "Dualité captivante entre tubéreuse éclatante et cacao intense.",
    "tagline_ar": "تناغم ساحر بين إشراقة مسك الروم وعمق الكاكاو الفاخر.",
    "tagline_en": "Captivating duality of luminous tuberose and rich cocoa.",
    "notes_fr": "Amande, Café noir, Tubéreuse, Jasmin Sambac, Fève Tonka, Cacao",
    "notes_ar": "لوز، قهوة سوداء، مسك الروم، ياسمين سامباك، حبوب التونكا، كاكاو",
    "notes_en": "Almond, Black Coffee, Tuberose, Sambac Jasmine, Tonka Bean, Cocoa",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p30-04",
    "img": "30-4.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Candy Love",
    "name_ar": "كاندي لوف (Candy Love)",
    "tagline_fr": "Gourmandise féerique de pomme d’amour et chantilly vanillée.",
    "tagline_ar": "حلوى ساحرة بنفحات التفاح المكرمل والكريمة المخفوقة.",
    "tagline_en": "Enchanting gourmand treat of candy apple and vanilla whipped cream.",
    "notes_fr": "Pomme d’amour croquante, Rose Centifolia, Chantilly onctueuse, Vanille",
    "notes_ar": "تفاح مكرمل مقرمش، ورد الجوري، كريمة مخفوقة ناعمة، فانيليا",
    "notes_en": "Crisp Candy Apple, Centifolia Rose, Whipped Cream, Vanilla",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p30-05",
    "img": "30-5.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Gucci Guilty",
    "name_ar": "غوتشي غيلتي (Gucci Guilty)",
    "tagline_fr": "Séduction audacieuse, mandarine vive et cœur fleuri de lilas ambré.",
    "tagline_ar": "جاذبية جريئة بنفحات المندرين المنعش والليلك والعنبر الحسي.",
    "tagline_en": "Bold seduction with crisp mandarin and an amber lilac heart.",
    "notes_fr": "Mandarine, Poivre rose, Lilas, Pêche veloutée, Patchouli, Ambre doré",
    "notes_ar": "يوسفي، فلفل وردي، ليلك، خوخ مخملي، باتشولي، عنبر ذهبي",
    "notes_en": "Mandarin, Pink Pepper, Lilac, Velvety Peach, Patchouli, Golden Amber",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p30-06",
    "img": "30-6.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Burberry Her",
    "name_ar": "بربري هير (Burberry Her)",
    "tagline_fr": "Élégance britannique vibrante aux baies sauvages et musc poudré.",
    "tagline_ar": "أناقة بريطانية مفعمة بالحيوية مع التوت البري والمسك البودري.",
    "tagline_en": "Vibrant British elegance of wild berries and powdery musk.",
    "notes_fr": "Framboise, Mûre, Cassis, Jasmin lumineux, Musc ambré, Cèdre doux",
    "notes_ar": "توت العليق، توت العليق الأسود، كشمش، ياسمين، مسك وعنبر، خشب الأرز",
    "notes_en": "Raspberry, Blackberry, Blackcurrant, Luminous Jasmine, Amber Musk, Soft Cedar",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p30-07",
    "img": "30-7.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Good Girl",
    "name_ar": "جود جيرل (Good Girl)",
    "tagline_fr": "Féminité affirmée, sillage sophistiqué de jasmin et fève tonka.",
    "tagline_ar": "أنوثة واثقة وفخامة طاغية من الياسمين الأبيض وحبوب التونكا.",
    "tagline_en": "Confident femininity with a sophisticated trail of jasmine and tonka bean.",
    "notes_fr": "Bergamote, Fleur d’oranger, Jasmin Sambac, Tubéreuse, Fève Tonka, Praliné",
    "notes_ar": "برغموت، زهر البرتقال، ياسمين سامباك، مسك الروم، حبوب التونكا، برالين",
    "notes_en": "Bergamot, Orange Blossom, Sambac Jasmine, Tuberose, Tonka Bean, Praline",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p30-08",
    "img": "30-8.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Le Male Le Parfum",
    "name_ar": "لو مال لو بارفان (Le Male Le Parfum)",
    "tagline_fr": "Charisme ténébreux, cardamome noble et lavande vanillée envoûtante.",
    "tagline_ar": "كاريزما رجولية آسرة بالهيل الفاخر والخزامى والفانيليا الدافئة.",
    "tagline_en": "Commanding charisma, noble cardamom and spellbinding vanillic lavender.",
    "notes_fr": "Cardamome, Lavande noble, Iris poudré, Vanille orientale, Bois précieux",
    "notes_ar": "هيل فاخر، خزامى نبيلة، سوسن بودري، فانيليا شرقية، أخشاب ثمينة",
    "notes_en": "Cardamom, Noble Lavender, Powdery Iris, Oriental Vanilla, Precious Woods",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p30-09",
    "img": "30-9.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Light Blue",
    "name_ar": "لايت بلو (Light Blue)",
    "tagline_fr": "Fraîcheur méditerranéenne éclatante de citron sicilien et pomme Granny.",
    "tagline_ar": "انتعاش البحر الأبيض المتوسط بليمون صقلية والتفاح الأخضر المنعش.",
    "tagline_en": "Sparkling Mediterranean freshness of Sicilian lemon and crisp Granny Apple.",
    "notes_fr": "Citron de Sicile, Pomme Granny Smith, Bambou, Jasmin délicat, Cèdre, Musc",
    "notes_ar": "ليمون صقلي، تفاح جراني سميث، خيزران، ياسمين، خشب الأرز، مسك أبيض",
    "notes_en": "Sicilian Lemon, Granny Smith Apple, Bamboo, Delicate Jasmine, Cedar, White Musk",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p30-10",
    "img": "30-10.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Yara",
    "name_ar": "يارا (Lattafa Yara)",
    "tagline_fr": "Douceur crémeuse exotique, vanille veloutée et fruits tropicaux.",
    "tagline_ar": "نعومة كريمية استوائية تأسر الحواس بنفحات الفانيليا والمندرين.",
    "tagline_en": "Exotic creamy sweetness, velvety vanilla and tropical fruits.",
    "notes_fr": "Héliotrope, Mandarine, Orchidée, Fruits tropicaux, Vanille crémeuse, Musc",
    "notes_ar": "هيليوتروب، يوسفي، أوركيد، فواكه استوائية، فانيليا كريمية، مسك ناعم",
    "notes_en": "Heliotrope, Mandarin, Orchid, Tropical Fruits, Creamy Vanilla, Soft Musk",
    "category": "gourmand",
    "stock": true
  },
  {
    "id": "p30-11",
    "img": "30-11.jpeg",
    "format": "30ml",
    "price": 30,
    "name": "Bleu de Chanel",
    "name_ar": "بلو دي شانيل (Bleu de Chanel)",
    "tagline_fr": "Liberté absolue, sillage boisé aromatique d’une pure élégance.",
    "tagline_ar": "حرية مطلقة وأناقة خشبية عطرية خالدة بالبخور وخشب الأرز.",
    "tagline_en": "Absolute freedom, pure timeless aromatic woody elegance.",
    "notes_fr": "Pamplemousse vif, Menthe, Encens, Gingembre, Bois de cèdre, Santal",
    "notes_ar": "جريب فروت، نعناع منعش، بخور، زنجبيل، خشب الأرز، خشب الصندل",
    "notes_en": "Crisp Grapefruit, Mint, Incense, Ginger, Cedarwood, Sandalwood",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-01",
    "img": "50-1.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "One Million",
    "name_ar": "وان مليون (One Million)",
    "tagline_fr": "L’icône flamboyante du cuir épicé, audacieuse et captivante.",
    "tagline_ar": "أيقونة الجلود المتبلة، الفخامة والجرأة والجاذبية الطاغية.",
    "tagline_en": "The flamboyant icon of spicy leather, bold and captivating.",
    "notes_fr": "Mandarine sanguine, Menthe poivrée, Cannelle, Rose absolue, Cuir blond, Ambre",
    "notes_ar": "يوسفي أحمر، نعناع، قرفة، خلاصة الورد، جلد أشقر، عنبر ذهبي",
    "notes_en": "Blood Mandarin, Peppermint, Cinnamon, Rose Absolute, Blond Leather, Amber",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-02",
    "img": "50-2.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Libre",
    "name_ar": "ليبر (YSL Libre)",
    "tagline_fr": "L’esprit de la liberté flamboyante, lavande florale et fleur d’oranger.",
    "tagline_ar": "عطر الحرية والجرأة، مزيج ساحر بين الخزامى الفرنسية وزهر البرتقال.",
    "tagline_en": "The spirit of fierce freedom, floral lavender and sensual orange blossom.",
    "notes_fr": "Lavande de France, Mandarine, Fleur d’oranger du Maroc, Jasmin Sambac, Vanille de Madagascar",
    "notes_ar": "خزامى فرنسية، يوسفي، زهر البرتقال المغربي، ياسمين سامباك، فانيليا مدغشقر",
    "notes_en": "French Lavender, Mandarin, Moroccan Orange Blossom, Sambac Jasmine, Madagascar Vanilla",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-03",
    "img": "50-3.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Bleu de Chanel",
    "name_ar": "بلو دي شانيل (Bleu de Chanel)",
    "tagline_fr": "Signature royale de l’élégance masculine, cèdre noble et encens.",
    "tagline_ar": "التوقيع الملكي للأناقة الرجالية، خشب الأرز النبيل مع لمسة بخور ساحرة.",
    "tagline_en": "Royal signature of masculine elegance, noble cedar and deep incense.",
    "notes_fr": "Pamplemousse, Menthe fraîche, Poivre rose, Noix de muscade, Cèdre, Bois de santal",
    "notes_ar": "جريب فروت، نعناع منعش، فلفل وردي، جوزة الطيب، خشب الأرز، خشب الصندل",
    "notes_en": "Grapefruit, Fresh Mint, Pink Pepper, Nutmeg, Cedarwood, Sandalwood",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-04",
    "img": "50-4.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Good Girl",
    "name_ar": "جود جيرل (Good Girl)",
    "tagline_fr": "Sensualité mystérieuse et contrastée, tubéreuse blanche et cacao noir.",
    "tagline_ar": "أنوثة ساحرة متباينة بين براءة الزهور البيضاء وجاذبية الكاكاو الداكن.",
    "tagline_en": "Mysterious contrasted sensuality, white tuberose and dark cocoa.",
    "notes_fr": "Amande douce, Café torréfié, Tubéreuse capiteuse, Jasmin Sambac, Fève Tonka, Cacao",
    "notes_ar": "لوز حلو، قهوة محمصة، مسك الروم، ياسمين سامباك، حبوب التونكا، كاكاو داكن",
    "notes_en": "Sweet Almond, Roasted Coffee, Tuberose, Sambac Jasmine, Tonka Bean, Cocoa",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-05",
    "img": "50-5.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Candy Love",
    "name_ar": "كاندي لوف (Candy Love)",
    "tagline_fr": "Tourbillon gourmand et joyeux de pomme d’amour croquante et chantilly.",
    "tagline_ar": "بهجة عطرية لذيذة بنفحات التفاح السكري والكريمة المخفوقة الفاخرة.",
    "tagline_en": "Joyful gourmand swirl of crisp candy apple and whipped cream.",
    "notes_fr": "Pomme d’amour sucrée, Mandarine pétillante, Rose Centifolia, Chantilly vanillée",
    "notes_ar": "تفاح مكرمل سكري، يوسفي فوار، ورد الجوري، كريمة الفانيليا المخفوقة",
    "notes_en": "Sweet Candy Apple, Sparkling Mandarin, Centifolia Rose, Vanilla Whipped Cream",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-06",
    "img": "50-6.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Candy Love",
    "name_ar": "كاندي لوف (Candy Love)",
    "tagline_fr": "Plaisir sucré et romantique aux accords pétillants de fruits rouges et vanille.",
    "tagline_ar": "سحر رومانسي حلو بنفحات الفواكه الحمراء الفوارة والفانيليا الناعمة.",
    "tagline_en": "Sweet romantic pleasure with sparkling red fruit and vanilla accords.",
    "notes_fr": "Pomme d’amour glacée, Baies rouges, Cœur de rose, Crème onctueuse, Vanille bourbon",
    "notes_ar": "تفاح مكرمل، توت أحمر، قلب الورد، كريمة ناعمة، فانيليا بوربون",
    "notes_en": "Glazed Candy Apple, Red Berries, Rose Heart, Silky Cream, Bourbon Vanilla",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-07",
    "img": "50-7.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "L’Interdit Rouge",
    "name_ar": "لانتيردي روج (L’Interdit Rouge)",
    "tagline_fr": "Frisson charnel incandescent, bouquet blanc teinté d’épices ardentes.",
    "tagline_ar": "إثارة متوهجة تأسر الأنفاس، باقة زهور بيضاء بتوابل حمراء ملتهبة.",
    "tagline_en": "Incandescent carnal thrill, white bouquet tinted with fiery red spices.",
    "notes_fr": "Orange sanguine, Gingembre épicé, Feuille de piment, Tubéreuse, Patchouli, Santal",
    "notes_ar": "برتقال أحمر، زنجبيل متبل، أوراق البيمنتو، مسك الروم، باتشولي، خشب الصندل",
    "notes_en": "Blood Orange, Spicy Ginger, Pimento Leaf, Tuberose, Patchouli, Sandalwood",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-08",
    "img": "50-8.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Escada Taj",
    "name_ar": "إسكادا تاج (Escada Taj)",
    "tagline_fr": "Éclat tropical envoûtant de mangue Alfonso et nectar de fruits solaires.",
    "tagline_ar": "إشراقة استوائية ساحرة بمانجو ألفونسو ونكتار الفواكه الصيفية المنعشة.",
    "tagline_en": "Enchanting tropical glow of Alphonso mango and solar fruit nectar.",
    "notes_fr": "Mangue Alfonso, Nectarine juteuse, Fleur de lotus, Framboise, Crème de coco, Santal",
    "notes_ar": "مانجو ألفونسو، نكتارين ناضج، زهر اللوتس، توت، كريمة جوز الهند، صندل",
    "notes_en": "Alphonso Mango, Juicy Nectarine, Lotus Blossom, Raspberry, Coconut Cream, Sandalwood",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-09",
    "img": "50-9.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "L’Interdit Rouge",
    "name_ar": "لانتيردي روج (L’Interdit Rouge)",
    "tagline_fr": "Sensualité incandescente, bouquet floral obscur aux accents boisés fumés.",
    "tagline_ar": "جاذبية متوهجة وباقة زهرية آسرة بلمسات خشبية شرقية دافئة.",
    "tagline_en": "Incandescent sensuality, dark floral bouquet with warm smoky woods.",
    "notes_fr": "Orange sanguine, Gingembre rouge, Jasmin Sambac, Tubéreuse, Vétiver, Patchouli",
    "notes_ar": "برتقال أحمر، زنجبيل أحمر، ياسمين سامباك، مسك الروم، نجيل الهند، باتشولي",
    "notes_en": "Blood Orange, Red Ginger, Sambac Jasmine, Tuberose, Vetiver, Patchouli",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-10",
    "img": "50-10.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "L’Interdit Rouge",
    "name_ar": "لانتيردي روج (L’Interdit Rouge)",
    "tagline_fr": "Passion rouge braise, fusion hypnotique d’agrumes chauds et tubéreuse veloutée.",
    "tagline_ar": "شغف أحمر كالجمر، مزيج مغناطيسي من الحمضيات الدافئة ومسك الروم المخملي.",
    "tagline_en": "Fiery red passion, hypnotic fusion of warm citrus and velvety tuberose.",
    "notes_fr": "Agrumes épicés, Gingembre, Fleur d’oranger éclatante, Tubéreuse, Santal doux, Ambre",
    "notes_ar": "حمضيات متبلة، زنجبيل، زهر البرتقال المشرق، مسك الروم، صندل ناعم، عنبر",
    "notes_en": "Spiced Citrus, Ginger, Bright Orange Blossom, Tuberose, Soft Sandalwood, Amber",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-11",
    "img": "50-11.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Dior Sauvage Elixir",
    "name_ar": "ديور سوفاج إكسير (Dior Sauvage Elixir)",
    "tagline_fr": "Concentration mythique et souveraine, cœur d’épices chaudes et lavande surpuissante.",
    "tagline_ar": "تركيز أسطوري فائق القوة، قلب التوابل الدافئة والخزامى المركزة الفاخرة.",
    "tagline_en": "Mythic sovereign concentration, warm spice heart and ultra-potent lavender.",
    "notes_fr": "Cannelle, Noix de muscade, Cardamome, Cœur de lavande de Nyons, Réglisse, Santal ambré",
    "notes_ar": "قرفة، جوزة الطيب، هيل، قلب الخزامى الفرنسية المركزة، عرق السوس، صندل عنبري",
    "notes_en": "Cinnamon, Nutmeg, Cardamom, Nyons Lavender Essence, Licorice, Amber Sandalwood",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-12",
    "img": "50-12.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "La Belle",
    "name_ar": "لا بيل (Jean Paul Gaultier La Belle)",
    "tagline_fr": "Féminité ultra-charnelle et magnétique, poire addictive et gousse de vanille.",
    "tagline_ar": "أنوثة مغرية وجذابة للغاية بنفحات الكمثرى الناضجة والفانيليا الشرقية المركزة.",
    "tagline_en": "Ultra-carnal magnetic femininity, addictive pear and rich vanilla pod.",
    "notes_fr": "Poire verte juteuse, Bergamote zestée, Cœur floral, Gousse de vanille, Fève Tonka ambrée",
    "notes_ar": "كمثرى خضراء ناضجة، برغموت، لمسات زهرية، قرن الفانيليا، حبوب التونكا العنبرية",
    "notes_en": "Juicy Green Pear, Zesty Bergamot, Floral Notes, Vanilla Pod, Amber Tonka Bean",
    "category": "gourmand",
    "stock": true
  },
  {
    "id": "p50-13",
    "img": "50-13.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Stronger With You Intensely",
    "name_ar": "سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)",
    "tagline_fr": "Chaleur ambrée addictive, épices vibrantes et accord toffee vanillé.",
    "tagline_ar": "دفء عنبري ساحر وتوابل ملتهبة مع كراميل التوفي والفانيليا الغنية.",
    "tagline_en": "Addictive amber warmth, vibrant spices and vanillic toffee accord.",
    "notes_fr": "Poivre rose, Genévrier, Cannelle, Sauge sclarée, Toffee caramel, Vanille fumée, Suède",
    "notes_ar": "فلفل وردي، عرعر، قرفة، ميرمية، كراميل التوفي، فانيليا مدخنة، جلد السويد",
    "notes_en": "Pink Pepper, Juniper, Cinnamon, Clary Sage, Caramel Toffee, Smoked Vanilla, Suede",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-14",
    "img": "50-14.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Azzaro Wanted",
    "name_ar": "أزارو وونتد (Azzaro Wanted)",
    "tagline_fr": "Arme de séduction solaire et boisée, citron énergisant et cardamome ardente.",
    "tagline_ar": "سلاح الجاذبية الرجولية الواثقة، ليمون مفعم بالحيوية وهيل حار مع نجيل الهند.",
    "tagline_en": "Solar woody weapon of seduction, energizing lemon and fiery cardamom.",
    "notes_fr": "Citron de Calabre, Gingembre, Cardamome du Guatemala, Cade, Vétiver d’Haïti, Fève Tonka",
    "notes_ar": "ليمون كالابريا، زنجبيل، هيل غواتيمالي، خشب العرعر، نجيل الهند الهايتي، حبوب التونكا",
    "notes_en": "Calabrian Lemon, Ginger, Guatemalan Cardamom, Cade Wood, Haitian Vetiver, Tonka Bean",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-15",
    "img": "50-15.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Stronger With You Intensely",
    "name_ar": "سترونجر ويذ يو إنتنسلي (Stronger With You Intensely)",
    "tagline_fr": "Sillage d’une intensité fougueuse, cannelle orientale et bois d’ambre.",
    "tagline_ar": "فوحان قوي بنفحات القرفة الشرقية والأخشاب العنبرية الدافئة.",
    "tagline_en": "Trail of fiery intensity, oriental cinnamon and amber woods.",
    "notes_fr": "Cannelle épicée, Poivre rose, Lavande, Châtaigne glacée, Vanille Bourbon, Ambre",
    "notes_ar": "قرفة متبلة، فلفل وردي، خزامى، كستناء محلاة، فانيليا بوربون، عنبر دافئ",
    "notes_en": "Spicy Cinnamon, Pink Pepper, Lavender, Glazed Chestnut, Bourbon Vanilla, Amber",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-16",
    "img": "50-16.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Gucci Guilty",
    "name_ar": "غوتشي غيلتي (Gucci Guilty)",
    "tagline_fr": "Séduction contemporaine aromatique et boisée, lavande vive et patchouli noble.",
    "tagline_ar": "جاذبية عصرية راقية بنفحات اللافندر المنعش وزهر البرتقال والباتشولي النبيل.",
    "tagline_en": "Contemporary aromatic woody seduction, crisp lavender and noble patchouli.",
    "notes_fr": "Lavande française, Citron d’Italie, Fleur d’oranger, Cèdre de Virginie, Patchouli",
    "notes_ar": "خزامى فرنسية، ليمون إيطالي، زهر البرتقال، خشب الأرز، باتشولي فاخر",
    "notes_en": "French Lavender, Italian Lemon, Orange Blossom, Virginian Cedar, Patchouli",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-17",
    "img": "50-17.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Stronger With You Absolutely",
    "name_ar": "سترونجر ويذ يو أبسولوتلي (Stronger With You Absolutely)",
    "tagline_fr": "Opulence ambrée magnétique, accord liqueur de rhum et vanille de Madagascar.",
    "tagline_ar": "فخامة عنبرية مغناطيسية، خلاصة مشروب الروم الفاخر والفانيليا الدافئة.",
    "tagline_en": "Magnetic amber opulence, refined rum liqueur accord and Madagascar vanilla.",
    "notes_fr": "Accord Rhum ambré, Bergamote, Davana, Châtaigne glacée, Cèdre fumé, Vanille Bourbon",
    "notes_ar": "خلاصة الروم العنبري، برغموت، دافانا، كستناء محلاة، أرز مدخن، فانيليا بوربون",
    "notes_en": "Amber Rum Accord, Bergamot, Davana, Glazed Chestnut, Smoked Cedar, Bourbon Vanilla",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-18",
    "img": "50-18.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Candy Love",
    "name_ar": "كاندي لوف (Candy Love)",
    "tagline_fr": "Gourmandise irrésistible de pomme d’amour, cœur de rose et chantilly veloutée.",
    "tagline_ar": "عالم سكري ساحر يمتزج فيه رحيق التفاح بالورد الناعم والقشطة اللذيذة.",
    "tagline_en": "Irresistible treat of candy apple, rose heart and velvety whipped cream.",
    "notes_fr": "Pomme d’amour rouge, Mandarine sucrée, Rose Centifolia, Crème chantilly, Vanille",
    "notes_ar": "تفاح أحمر حلو، يوسفي حلو، ورد الجوري، كريمة الشانتي، فانيليا ناعمة",
    "notes_en": "Red Candy Apple, Sweet Mandarin, Centifolia Rose, Whipped Cream, Soft Vanilla",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-19",
    "img": "50-19.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Valentino Born In Roma",
    "name_ar": "فالنتينو بورن إن روما (Valentino Born In Roma)",
    "tagline_fr": "Haute couture romaine audacieuse, trio de jasmins nobles et vanille Bourbon.",
    "tagline_ar": "أناقة الهوت كوتور الإيطالية، ثلاثي الياسمين الفاخر مع فانيليا بوربون والكشميران.",
    "tagline_en": "Edgy Roman haute couture, trio of noble jasmines and Bourbon vanilla.",
    "notes_fr": "Cassis, Bergamote d’Italie, Jasmin Grandiflorum, Jasmin Sambac, Vanille Bourbon, Cashmeran",
    "notes_ar": "كشمش أسود، برغموت إيطالي، ياسمين ملكي، ياسمين سامباك، فانيليا بوربون، كشميران",
    "notes_en": "Blackcurrant, Italian Bergamot, Jasmine Grandiflorum, Sambac Jasmine, Bourbon Vanilla, Cashmeran",
    "category": "fresh",
    "stock": true
  },
  {
    "id": "p50-20",
    "img": "50-20.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Le Male Le Parfum",
    "name_ar": "لو مال لو بارفان (Le Male Le Parfum)",
    "tagline_fr": "Allure souveraine de capitaine ténébreux, cardamome royale et vanille boisée.",
    "tagline_ar": "حضور القائد المهيب، هيل ملكي فاخر مع الخزامى السوداء والفانيليا الخشبية.",
    "tagline_en": "Sovereign commander allure, royal cardamom and warm woody vanilla.",
    "notes_fr": "Cardamome intense, Lavande noire, Iris poudré, Vanille orientale, Bois précieux",
    "notes_ar": "هيل مكثف، خزامى سوداء، سوسن بودري، فانيليا شرقية، أخشاب ثمينة",
    "notes_en": "Intense Cardamom, Black Lavender, Powdery Iris, Oriental Vanilla, Precious Woods",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-21",
    "img": "50-21.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Light Blue",
    "name_ar": "لايت بلو (Light Blue)",
    "tagline_fr": "Brise méditerranéenne ensoleillée de citron de Sicile, pomme et cèdre pur.",
    "tagline_ar": "نسيم البحر المتوسط الصيفي المنعش بالليمون الصقلي والتفاح وخشب الأرز النقي.",
    "tagline_en": "Sunny Mediterranean breeze of Sicilian lemon, crisp apple and pure cedar.",
    "notes_fr": "Citron de Sicile, Pomme Granny Smith, Bambou, Jasmin, Bois de cèdre, Muscs blancs",
    "notes_ar": "ليمون صقلي، تفاح جراني سميث، خيزران، ياسمين، خشب الأرز، مسك أبيض",
    "notes_en": "Sicilian Lemon, Granny Smith Apple, Bamboo, Jasmine, Cedarwood, White Musk",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-22",
    "img": "50-22.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Black Opium",
    "name_ar": "بلاك أوبيوم (Black Opium)",
    "tagline_fr": "Adrénaline nocturne irrésistible, café noir électrisant et fleurs blanches sensuelles.",
    "tagline_ar": "جاذبية ليلية ساحرة تجمع القهوة السوداء المنعشة والزهور البيضاء والفانيليا.",
    "tagline_en": "Irresistible nocturnal adrenaline, electrifying black coffee and sensual white flowers.",
    "notes_fr": "Grains de café noir, Poivre rose, Fleur d’oranger, Jasmin Sambac, Vanille, Patchouli",
    "notes_ar": "حبوب القهوة السوداء، فلفل وردي، زهر البرتقال، ياسمين سامباك، فانيليا، باتشولي",
    "notes_en": "Black Coffee Beans, Pink Pepper, Orange Blossom, Sambac Jasmine, Vanilla, Patchouli",
    "category": "woody",
    "stock": true
  },
  {
    "id": "p50-23",
    "img": "50-23.jpeg",
    "format": "50ml",
    "price": 50,
    "name": "Ultra Male",
    "name_ar": "ألترا مال (Ultra Male)",
    "tagline_fr": "Séducteur nocturne fruité et épicé, poire noire gourmande et vanille boisée.",
    "tagline_ar": "ساحر ليلي جريء ومغري بنفحات الكمثرى السوداء والقرفة والفانيليا الخشبية.",
    "tagline_en": "Fruity and spicy nocturnal seducer, dark pear and woody vanilla.",
    "notes_fr": "Poire noire, Lavande fraîche, Cannelle épicée, Sauge, Vanille noire, Ambre boisé",
    "notes_ar": "كمثرى سوداء، خزامى منعشة، قرفة دافئة، ميرمية، فانيليا سوداء، عنبر خشبي",
    "notes_en": "Black Pear, Fresh Lavender, Spicy Cinnamon, Sage, Black Vanilla, Woody Amber",
    "category": "woody",
    "stock": true
  }
];

/* ── 2. FEATURED HERO HIGHLIGHTS (Multilingual) ────────────────────── */
var HERO_FEATURED = [
  {
    id: 'p50-01',
    name: 'One Million',
    name_ar: 'ون مليون (One Million)',
    name_en: 'One Million',
    format: '50ml',
    price: 50,
    img: '50-1.jpeg',
    notes: 'Mandarine sanguine, Menthe, Cannelle, Cuir blond, Ambre',
    notes_ar: 'يوسفي، نعناع، قرفة، جلد فاخر، عنبر دافئ',
    notes_en: 'Blood Mandarin, Mint, Cinnamon, Blond Leather, Amber',
    tag: 'Extrait 35% · Cuir & Épicé',
    tag_ar: 'إكستري 35% · جلد وتوابل',
    tag_en: 'Extrait 35% · Leather & Spice'
  },
  {
    id: 'p50-02',
    name: 'Libre',
    name_ar: 'ليبر (Libre)',
    name_en: 'Libre',
    format: '50ml',
    price: 50,
    img: '50-2.jpeg',
    notes: 'Fleur d\'oranger du Maroc, Lavande française, Vanille de Madagascar',
    notes_ar: 'زهر البرتقال المغربي، خزامى فرنسية، فانيليا مدغشقر',
    notes_en: 'Moroccan Orange Blossom, French Lavender, Madagascar Vanilla',
    tag: 'Extrait 32% · Floral Sensuel',
    tag_ar: 'إكستري 32% · زهور حسية',
    tag_en: 'Extrait 32% · Sensual Floral'
  },
  {
    id: 'p50-11',
    name: 'Dior Sauvage Elixir',
    name_ar: 'ديور سوفاج إلكسير (Sauvage Elixir)',
    name_en: 'Dior Sauvage Elixir',
    format: '50ml',
    price: 50,
    img: '50-11.jpeg',
    notes: 'Cannelle, Noix de muscade, Lavande de Nyons, Santal ambré',
    notes_ar: 'قرفة، جوزة الطيب، خزامى نقية، صندل عنبري',
    notes_en: 'Cinnamon, Nutmeg, Pure Lavender, Amber Sandalwood',
    tag: 'Concentration Mythique · Boisé',
    tag_ar: 'تركيز أسطوري · خشب وتوابل',
    tag_en: 'Mythic Concentration · Woody'
  },
  {
    id: 'p30-03',
    name: 'Good Girl',
    name_ar: 'جود جيرل (Good Girl)',
    name_en: 'Good Girl',
    format: '30ml',
    price: 30,
    img: '30-3.jpeg',
    notes: 'Amande, Café noir, Tubéreuse, Fève Tonka, Cacao noir',
    notes_ar: 'لوز، قهوة سوداء، مسك الروم، حبوب التونكا، كاكاو',
    notes_en: 'Almond, Black Coffee, Tuberose, Tonka Bean, Rich Cocoa',
    tag: 'Format Nomade · Gourmand & Oriental',
    tag_ar: 'حجم الجيب · شرقي وسكري',
    tag_en: 'Pocket Size · Gourmand & Amber'
  }
];

/* ── 3. COMPREHENSIVE I18N DICTIONARY (FR / AR / EN) ───────────────── */
var I18N = {
  fr: {
    nav_brand_tagline: 'Haute Parfumerie · Maroc',
    nav_savoir_faire: 'Savoir-Faire',
    nav_catalogue: 'Catalogue',
    nav_collections: 'Collections',
    nav_guide: 'Guide & FAQ',
    hero_eyebrow: 'La Maison du Parfum Marocain · Ouarzazate',
    hero_title: "L'Art de<br><em>la Haute Séduction</em>",
    hero_sub: "Des extraits de parfum haute concentration (25-35%) élaborés à partir des matières les plus nobles. Une signature olfactive envoûtante, tenue 24h garantie, prix direct studio (30 MAD & 50 MAD).",
    hero_btn_explore: 'Découvrir la Collection',
    hero_btn_consult: 'Conseil Olfactif',
    hero_badge_sub: 'Haute Concentration',
    hero_featured_label: 'Fragrance Signature',
    hero_chips_label: 'Sélection rapide :',
    hero_scroll: 'Défiler',
    hero_rating_clients: '+1,500 clients conquis au Maroc',
    stat_fragrances_total: 'Haute Parfumerie',
    stat_collection_title: 'Exclusive',
    stat_collection_sub: 'Haute Parfumerie',
    stat_concentration: 'Huiles Pures',
    stat_longevity: 'Tenue Certifiée',
    nav_cart: 'Panier',
    perk_concentration: 'Concentration Extrait 25-35%',
    perk_longevity: 'Tenue Garantie 24h',
    perk_delivery: 'Livraison Partout au Maroc (COD)',
    bento_eyebrow: "L'Expérience Abdeperfumes",
    bento_title: 'Chaque détail,<br>pensé pour votre sillage',
    bento1_stat: '25-35',
    bento1_title: 'Concentration Extrait Pure',
    bento1_body: 'Nos formules renferment jusqu\'à 35% de matières premières nobles, garantissant un sillage opulent et une tenue exceptionnelle du matin jusqu\'au soir.',
    bento1_pill1: 'Haute-Parfumerie',
    bento1_pill2: 'Tenue 24h+',
    bento2_title: 'Prix Direct Studio',
    bento2_body: 'Zéro intermédiaire, zéro marge marketing artificielle. Vous investissez à 100% dans la formule olfactive.',
    bento2_p1_label: 'Format 30ml',
    bento2_p1_val: '30 MAD',
    bento2_p2_label: 'Format 50ml',
    bento2_p2_val: '50 MAD',
    bento3_title: 'Tenue & Sillage Testés au Maroc',
    bento3_body: 'Compositions équilibrées pour résister aux chaleurs et sublimer le sillage sur peau chaude toute la journée.',
    bento4_title: 'Paiement à la Livraison (COD)',
    bento4_body: 'Commandez en toute confiance. Expédition soignée dans toutes les villes du Maroc sous 24h à 48h.',
    cat_eyebrow: 'Collection Haute Parfumerie',
    cat_title: "Nos Fragrances d'Exception",
    cat_body: 'Sélection raffinée inspirée des plus grands sillages de la parfumerie mondiale, revisités avec passion.',
    filter_all: 'Toutes les créations',
    filter_50ml: 'Collection 50ml — Prestige',
    filter_30ml: 'Collection 30ml — Nomade',
    unit_fragrances: 'Fragrances',
    coll_30_badge: 'Format Nomade · 30ml',
    coll_50_badge: 'Format Prestige · 50ml',
    cat_all: 'Toutes les familles',
    cat_woody: 'Boisé & Épicé',
    cat_amber: 'Oriental & Ambré',
    cat_fresh: 'Floral & Frais',
    cat_gourmand: 'Gourmand & Sucré',
    search_placeholder: 'Rechercher un parfum (ex: One Million, Sauvage)...',
    no_results: 'Aucun parfum ne correspond à votre recherche.',
    card_quick_view: 'Aperçu',
    card_add_cart: 'Ajouter',
    card_added: 'Ajouté',
    card_notes_label: 'Notes',
    card_out_of_stock: 'Épuisé',
    coll_eyebrow: 'Deux Formats, Un Seul Standard',
    coll_title: 'Nos Deux Collections',
    coll_30_title: 'Collection 30ml — Nomade',
    coll_30_desc: 'Le flacon voyageur. Compact, ultra-concentré, glissable dans votre poche ou sac à main pour une retouche élégante à tout moment.',
    coll_30_btn: 'Voir la Collection 30ml',
    coll_50_title: 'Collection 50ml — Prestige',
    coll_50_desc: 'Le flacon de prestige par excellence. Un volume généreux, une présence somptueuse sur votre coiffeuse pour des mois d\'enchantement.',
    coll_50_btn: 'Voir la Collection 50ml',
    faq_eyebrow: 'Guide & Foire Aux Questions',
    faq_title: 'Tout Savoir sur Nos Parfums',
    faq_desc: 'Transparence, formulation artisanale et engagement d\'excellence pour votre satisfaction partout au Maroc.',
    faq_q1: 'Pourquoi choisir nos Extraits de Parfum (25-35% de concentration) ?',
    faq_a1: 'La majorité des parfums du commerce sont des Eaux de Toilette (8-12%) ou des Eaux de Parfum (15-18%). Chez Abdeperfumes, nos créations sont de véritables Extraits de Parfum dosés entre 25% et 35% d\'essences pures. Ce dosage maximal garantit une tenue spectaculaire supérieure à 24 heures sur peau et vêtements, ainsi qu\'un sillage raffiné et sans alcool agressif.',
    faq_q2: 'Comment se déroulent la livraison et le paiement au Maroc ?',
    faq_a2: 'Nous assurons une expédition rapide sous 24h à 48h dans toutes les villes du Royaume : Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir, Ouarzazate, Meknès, Oujda, Tétouan, Laâyoune et toutes les autres localités. Vous réglez votre commande en espèces à la livraison (Cash on Delivery) lors de la remise de votre colis par le livreur.',
    faq_q3: 'Quelles sont les fragrances les plus populaires au Maroc ?',
    faq_a3: 'Notre collection réunit les signatures les plus plébiscitées au Maroc : One Million, Sauvage Elixir, Libre, Good Girl, Bleu de Chanel, Baccarat Rouge 540, Black Opium, Stronger With You Intensely, Ultra Male, Candy Love, Yara, et bien d\'autres. Chaque fragrance est proposée en 30ml (30 MAD) et 50ml (50 MAD).',
    faq_q4: 'Comment passer commande ou demander conseil ?',
    faq_a4: 'Il vous suffit d\'ajouter vos parfums favoris au panier et de cliquer sur « Commander via WhatsApp ». Vous pouvez également nous écrire directement sur WhatsApp au +212 609 539 103 pour obtenir une recommandation olfactive personnalisée selon vos préférences (boisé, oriental, gourmand, frais).',
    cart_title: 'Votre Sélection',
    cart_empty_title: 'Votre panier est vide',
    cart_empty_sub: 'Explorez notre catalogue et ajoutez vos créations préférées.',
    cart_total_label: 'Total estimé',
    cart_btn_whatsapp: 'Commander via WhatsApp',
    modal_notes_label: 'Pyramide Olfactive',
    modal_longevity: 'Tenue certifiée jusqu\'à 24h sur peau.',
    modal_add_btn: 'Ajouter au Panier',
    toast_added: 'ajouté à votre sélection',
    toast_view_cart: 'Voir panier',
    perk_1_title: 'Concentration 25-35%',
    perk_1_sub: 'Extraits de parfum purs',
    perk_2_title: 'Tenue 24h Garantie',
    perk_2_sub: 'Sillage longue durée certifié',
    perk_3_title: 'Partout au Maroc',
    perk_3_sub: 'Livraison rapide 24h-48h',
    perk_4_title: 'Paiement à la Livraison',
    perk_4_sub: 'Cash on Delivery sécurisé',
    footer_about_p: 'Maison artisanale de haute parfumerie fondée à Ouarzazate. Formulations exclusives à haute concentration (25-35%), tenue 24h garantie, prix direct atelier sans intermédiaire (30 MAD & 50 MAD).',
    footer_col_collections: 'Collections & Fragrances',
    footer_col_cities: 'Livraison Partout au Maroc',
    footer_col_agency: 'Réalisation Digitale',
    footer_techweb_badge: 'Agence Digitale & Ingénierie Web',
    footer_techweb_desc: 'Site web vitrine et e-commerce conçu, développé et optimisé SEO par l\'équipe Tech Web.',
    footer_techweb_btn: 'Visiter le site web de l\'agence',
    footer_techweb_note: '✦ Partenaire Digital Officiel · Tech Web',
    curr_mad: 'MAD',
    footer_copy: '© 2026 Abdeperfumes. Tous droits réservés. Maison de Haute Parfumerie Artisanale au Maroc.'
  },
  ar: {
    nav_brand_tagline: 'الدار المغربية للعطور الفاخرة',
    nav_savoir_faire: 'خبرتنا',
    nav_catalogue: 'الكتالوج',
    nav_collections: 'المجموعات',
    nav_guide: 'دليل العطور وFAQ',
    hero_eyebrow: 'الدار المغربية للعطور الفاخرة · ورزازات',
    hero_title: 'فن <em>الجاذبية والأناقة</em>',
    hero_sub: 'مستخلصات عطرية بتركيز استثنائي (25-35%) مصنوعة من أنبل الزيوت والخامات العالمية. ثبات مضمون يدوم 24 ساعة وسحر لا ينسى، بسعر الاستوديو المباشر (30 و 50 درهم).',
    hero_btn_explore: 'اكتشف المجموعة الفاخرة',
    hero_btn_consult: 'استشارة عطرية',
    hero_badge_sub: 'تركيز فائق الفخامة',
    hero_featured_label: 'العطر المميز',
    hero_chips_label: 'اختيار سريع :',
    hero_scroll: 'تمرير للأسفل',
    hero_rating_clients: '+1,500 عميل سعيد بالمغرب',
    stat_fragrances_total: 'عطور فاخرة',
    stat_collection_title: 'مجموعة حصرية',
    stat_collection_sub: 'عطور نقية وفاخرة',
    stat_concentration: 'زيوت نقية',
    stat_longevity: 'ثبات معتمد',
    nav_cart: 'السلة',
    perk_concentration: 'تركيز إكستري 25-35%',
    perk_longevity: 'ثبات مضمون 24 ساعة',
    perk_delivery: 'توصيل لجميع مدن المغرب (COD)',
    bento_eyebrow: 'تجربة Abdeperfumes',
    bento_title: 'كل تفصيل مصمم<br>ليترك بصمتك العطرية',
    bento1_stat: '25-35',
    bento1_title: 'تركيز إكستري فائق النقاء',
    bento1_body: 'تحتوي تركيباتنا على ما يصل إلى 35% من الزيوت العطرية النقية، مما يضمن فوحاناً غنياً وثباتاً أسطورياً من الصباح حتى المساء.',
    bento1_pill1: 'عطور راقية',
    bento1_pill2: 'ثبات +24 ساعة',
    bento2_title: 'سعر الورشة المباشر',
    bento2_body: 'بدون وسطاء وبدون تكاليف تسويق مضخمة. تدفع فقط ثمن نقاء وفخامة العطر داخل القارورة.',
    bento2_p1_label: 'حجم 30 مل',
    bento2_p1_val: '30 درهم',
    bento2_p2_label: 'حجم 50 مل',
    bento2_p2_val: '50 درهم',
    bento3_title: 'ثبات وفوحان مجرب بالمغرب',
    bento3_body: 'تركيبات متوازنة تم تصميمها خصيصاً لتلائم الأجواء وتتألق مع حرارة البشرة الطبيعية طوال اليوم.',
    bento4_title: 'الدفع عند الاستلام (COD)',
    bento4_body: 'اطلب بكل راحة وأمان. توصيل سريع ومضمون إلى باب بيتك في جميع مدن المملكة (الدار البيضاء، الرباط، مراكش، طنجة، ورزازات...) خلال 24 إلى 48 ساعة.',
    cat_eyebrow: 'مجموعة العطور الفاخرة',
    cat_title: 'تشكيلة العطور الاستثنائية',
    cat_body: 'مجموعة منتقاة بعناية مستوحاة من أشهر الأيقونات العطرية العالمية مع لمسة حرفية أصيلة.',
    filter_all: 'جميع العطور',
    filter_50ml: 'مجموعة 50 مل — الفخامة',
    filter_30ml: 'مجموعة 30 مل — الجيب',
    unit_fragrances: 'عطراً',
    coll_30_badge: 'حجم الجيب والسفر · 30 مل',
    coll_50_badge: 'حجم الفخامة والهيبة · 50 مل',
    cat_all: 'جميع العائلات',
    cat_woody: 'خشبي وتوابل',
    cat_amber: 'شرقي وعنبر',
    cat_fresh: 'زهري ومنعش',
    cat_gourmand: 'سكري وحلويات',
    search_placeholder: 'ابحث عن اسم عطر (مثال: One Million, Sauvage)...',
    no_results: 'لم يتم العثور على عطر يطابق بحثك.',
    card_quick_view: 'معاينة سريعة',
    card_add_cart: 'أضف للسلة',
    card_added: 'تمت الإضافة',
    card_notes_label: 'النوتات',
    card_out_of_stock: 'نفد من المخزون',
    coll_eyebrow: 'حجمان بمعيار فخامة واحد',
    coll_title: 'مجموعاتنا العطرية',
    coll_30_title: 'مجموعة 30 مل — الجيب والسفر',
    coll_30_desc: 'قارورة السفر العملية. تصميم مدمج بتركيز فائق، يرافقك في جيبك أو حقيبتك للمسة أناقة في أي وقت.',
    coll_30_btn: 'استعرض مجموعة 30 مل',
    coll_50_title: 'مجموعة 50 مل — الفخامة والهيبة',
    coll_50_desc: 'قارورة الفخامة والتميز. حجم سخي وحضور طاغٍ يزين طاولتك لأشهر طويلة من التألق اليومي.',
    coll_50_btn: 'استعرض مجموعة 50 مل',
    faq_eyebrow: 'الأسئلة الشائعة والدليل العطري',
    faq_title: 'كل ما تود معرفته عن عطورنا',
    faq_desc: 'الشفافية، الصياغة الحرفية والالتزام بالتميز لرضاكم التام في جميع أنحاء المغرب.',
    faq_q1: 'لماذا تتميز عطور Abdeperfumes بثبات استثنائي يدوم 24 ساعة؟',
    faq_a1: 'نعتمد في تركيباتنا على تركيز إكستري دو بارفان (Extrait de Parfum) النقي بنسبة تتراوح بين 25% و 35%، وهي أعلى درجات التركيز في عالم العطور، مما يضمن ثباتاً أسطورياً وفوحاناً راقياً يدوم طوال اليوم على الجلد والملابس.',
    faq_q2: 'كيف يتم الدفع والتوصيل في المغرب؟',
    faq_a2: 'نوفر خدمة الدفع نقداً عند الاستلام (COD). يصلك طلبك مغلفاً بعناية إلى باب بيتك في جميع مدن المغرب (الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير، ورزازات...) خلال 24 إلى 48 ساعة فقط.',
    faq_q3: 'ما هي أشهر العطور المتوفرة لديكم؟',
    faq_a3: 'نوفر تشكيلة واسعة من أشهر العطور العالمية معاد صياغتها بأعلى جودة زيوت، من بينها: One Million, Dior Sauvage Elixir, Libre, Good Girl, Bleu de Chanel, Baccarat Rouge 540, Black Opium, Stronger With You Intensely وغيرها، بسعر 30 و 50 درهم.',
    faq_q4: 'كيف يمكنني الطلب أو استشارة الخبير؟',
    faq_a4: 'يمكنك إضافة عطرك مباشرة إلى السلة في الموقع والضغط على «إتمام الطلب عبر واتساب»، أو التواصل مباشرة مع فريقنا عبر واتساب على الرقم 0609539103 لمساعدتك في اختيار العطر المناسب لذوقك.',
    cart_title: 'سلة مشترياتك',
    cart_empty_title: 'سلتك فارغة حالياً',
    cart_empty_sub: 'تصفح الكتالوج واختر عطرك المفضل الآن.',
    cart_total_label: 'المجموع الإجمالي',
    cart_btn_whatsapp: 'إتمام الطلب عبر واتساب',
    modal_notes_label: 'الهرم العطري',
    modal_longevity: 'ثبات معتمد يدوم حتى 24 ساعة على الجلد.',
    modal_add_btn: 'إضافة إلى السلة',
    toast_added: 'تمت إضافته إلى السلة بنجاح',
    toast_view_cart: 'فتح السلة',
    perk_1_title: 'تركيز فائق 25-35%',
    perk_1_sub: 'مستخلصات عطرية نقية',
    perk_2_title: 'ثبات 24 ساعة مضمون',
    perk_2_sub: 'فوحان طويل الأمد معتمد',
    perk_3_title: 'توصيل لجميع مدن المغرب',
    perk_3_sub: 'شحن سريع خلال 24-48 ساعة',
    perk_4_title: 'الدفع عند الاستلام',
    perk_4_sub: 'أداء نقدي آمن عند المعاينة',
    footer_about_p: 'دار عطور مغربية حرفية تأسست في ورزازات، متخصصة في مستخلصات العطور النقية بتركيز 25-35% وثبات 24 ساعة، وبأسعار ورشة شفافة ومباشرة بدون وسطاء (30 و 50 درهم).',
    footer_col_collections: 'المجموعات والعطور',
    footer_col_cities: 'التوصيل لجميع مدن المغرب',
    footer_col_agency: 'التصميم والتطوير',
    footer_techweb_badge: 'وكالة رقمية وهندسة برمجية',
    footer_techweb_desc: 'موقع إلكتروني وتجربة مستخدم فاخرة تم تصميمها وتطويرها وتحسينها لمحركات البحث بواسطة فريق Tech Web.',
    footer_techweb_btn: 'زيارة الموقع الرسمي للوكالة',
    footer_techweb_note: '✦ الشريك الرقمي الرسمي · Tech Web',
    curr_mad: 'درهم',
    footer_copy: '© 2026 عطور عبد الفاخرة (Abdeperfumes). جميع الحقوق محفوظة.'
  },
  en: {
    nav_brand_tagline: 'High Perfumery · Morocco',
    nav_savoir_faire: 'Savoir-Faire',
    nav_catalogue: 'Catalogue',
    nav_collections: 'Collections',
    nav_guide: 'Guide & FAQ',
    hero_eyebrow: 'The Moroccan House of High Perfumery · Ouarzazate',
    hero_title: 'The Art of<br><em>Seduction</em>',
    hero_sub: 'Extrait de parfum formulations with 25-35% high concentration from precious noble ingredients. Guaranteed 24h longevity and captivating sillage at direct studio pricing (30 MAD & 50 MAD).',
    hero_btn_explore: 'Explore The Collection',
    hero_btn_consult: 'Scent Consultation',
    hero_badge_sub: 'Haute Concentration',
    hero_featured_label: 'Signature Scent',
    hero_chips_label: 'Quick Selection:',
    hero_scroll: 'Scroll',
    hero_rating_clients: '+1,500 delighted clients in Morocco',
    stat_fragrances_total: 'Fine Fragrances',
    stat_collection_title: 'Exclusive',
    stat_collection_sub: 'Fine Perfumery',
    stat_concentration: 'Pure Oils',
    stat_longevity: 'Certified Hold',
    nav_cart: 'Bag',
    perk_concentration: '25-35% Extrait Concentration',
    perk_longevity: 'Guaranteed 24h Longevity',
    perk_delivery: 'Delivery Across All Morocco (COD)',
    bento_eyebrow: 'The Abdeperfumes Experience',
    bento_title: 'Every detail,<br>crafted for your signature trail',
    bento1_stat: '25-35',
    bento1_title: 'Pure Extrait Concentration',
    bento1_body: 'Our blends feature up to 35% noble raw ingredients, providing magnificent projection and enduring longevity from morning to night.',
    bento1_pill1: 'Haute-Parfumerie',
    bento1_pill2: '24h+ Hold',
    bento2_title: 'Direct Studio Pricing',
    bento2_body: 'No distributors, zero artificial retail markups. You invest 100% into pure perfume quality.',
    bento2_p1_label: '30ml Size',
    bento2_p1_val: '30 MAD',
    bento2_p2_label: '50ml Size',
    bento2_p2_val: '50 MAD',
    bento3_title: 'Sillage Tested for Moroccan Weather',
    bento3_body: 'Expertly balanced accords engineered to withstand warmth and blossom on your skin all day long.',
    bento4_title: 'Cash on Delivery (COD)',
    bento4_body: 'Order with total peace of mind. Fast, insured courier delivery to all Moroccan cities in 24h to 48h.',
    cat_eyebrow: 'Haute Parfumerie Collection',
    cat_title: 'Our Signature Fragrances',
    cat_body: 'A curated selection inspired by legendary icons of world perfumery, re-imagined with passion.',
    filter_all: 'All Creations',
    filter_50ml: '50ml Prestige Collection',
    filter_30ml: '30ml Nomade Collection',
    unit_fragrances: 'Fragrances',
    coll_30_badge: 'Nomade Edition · 30ml',
    coll_50_badge: 'Prestige Edition · 50ml',
    cat_all: 'All Families',
    cat_woody: 'Woody & Spicy',
    cat_amber: 'Oriental & Amber',
    cat_fresh: 'Floral & Fresh',
    cat_gourmand: 'Gourmand & Sweet',
    search_placeholder: 'Search perfume name (e.g., One Million, Sauvage)...',
    no_results: 'No perfume matched your search criteria.',
    card_quick_view: 'Preview',
    card_add_cart: 'Add to Cart',
    card_added: 'Added',
    card_notes_label: 'Notes',
    card_out_of_stock: 'Sold Out',
    coll_eyebrow: 'Two Formats, One Standard',
    coll_title: 'Our Signature Collections',
    coll_30_title: '30ml Collection — Nomadic',
    coll_30_desc: 'The pocket companion. Compact, concentrated, slips into your pocket or handbag for quick luxury reapplication on the move.',
    coll_30_btn: 'View 30ml Collection',
    coll_50_title: '50ml Collection — Prestige',
    coll_50_desc: 'The ultimate vanity centerpiece. Generous volume, commanding aura, months of lavish daily pleasure.',
    coll_50_btn: 'View 50ml Collection',
    faq_eyebrow: 'Guide & Frequently Asked Questions',
    faq_title: 'Everything You Need to Know',
    faq_desc: 'Transparency, artisanal excellence, and uncompromising quality across Morocco.',
    faq_q1: 'Why choose our Extraits de Parfum (25-35% concentration)?',
    faq_a1: 'Commercial perfumes are typically Eau de Toilette (8-12%) or Eau de Parfum (15-18%). At Abdeperfumes, we formulate genuine Extraits de Parfum with 25-35% pure noble perfume oils. This delivers over 24 hours of guaranteed longevity and a lavish, captivating trail without alcohol harshness.',
    faq_q2: 'How does shipping and payment work in Morocco?',
    faq_a2: 'We offer express delivery across Morocco within 24 to 48 hours to all cities: Casablanca, Rabat, Marrakech, Fes, Tangier, Agadir, Ouarzazate, and more. You pay with Cash on Delivery (COD) once you receive and inspect your package.',
    faq_q3: 'What are the most popular fragrances in Morocco?',
    faq_a3: 'Our collection includes acclaimed worldwide inspirations: One Million, Sauvage Elixir, Libre, Good Girl, Bleu de Chanel, Baccarat Rouge 540, Black Opium, Stronger With You Intensely, Ultra Male, and more, in 30ml (30 MAD) and 50ml (50 MAD).',
    faq_q4: 'How can I order or request consultation?',
    faq_a4: 'Add your selections to the online cart and click "Order via WhatsApp", or text us directly on WhatsApp at +212 609 539 103 for custom recommendations based on your preferences.',
    cart_title: 'Your Selection',
    cart_empty_title: 'Your cart is empty',
    cart_empty_sub: 'Browse our collection and pick your favorite fragrances.',
    cart_total_label: 'Estimated Total',
    cart_btn_whatsapp: 'Order via WhatsApp',
    modal_notes_label: 'Olfactory Pyramid',
    modal_longevity: 'Certified hold up to 24 hours on warm skin.',
    modal_add_btn: 'Add to Cart',
    toast_added: 'added to your selection',
    toast_view_cart: 'View Cart',
    perk_1_title: '25-35% Concentration',
    perk_1_sub: 'Pure extrait de parfum',
    perk_2_title: 'Guaranteed 24h Longevity',
    perk_2_sub: 'Certified lasting sillage',
    perk_3_title: 'All Across Morocco',
    perk_3_sub: 'Fast 24h-48h delivery',
    perk_4_title: 'Cash on Delivery',
    perk_4_sub: 'Secure payment upon arrival',
    footer_about_p: 'Artisanal haute perfumery house founded in Ouarzazate. High concentration extraits (25-35%), certified 24h longevity, and direct studio pricing (30 MAD & 50 MAD).',
    footer_col_collections: 'Collections & Fragrances',
    footer_col_cities: 'Delivery Across Morocco',
    footer_col_agency: 'Digital Agency',
    footer_techweb_badge: 'Digital Agency & Web Engineering',
    footer_techweb_desc: 'Bespoke showcase and e-commerce web platform designed, developed, and SEO-optimized by Tech Web.',
    footer_techweb_btn: 'Visit Agency Website',
    footer_techweb_note: '✦ Official Digital Partner · Tech Web',
    curr_mad: 'MAD',
    footer_copy: '© 2026 Abdeperfumes. All rights reserved. Moroccan Haute Parfumerie.'
  }
};

/* ── 4. REACTIVE APPLICATION STATE ─────────────────────────────────── */
var state = {
  lang: 'fr',
  filterFormat: 'all',
  filterCategory: 'all',
  searchQuery: '',
  cart: [],
  modalId: null,
  heroIndex: 0
};

var toastTimer = null;
var $ = function (id) { return document.getElementById(id); };
var dict = function () { return I18N[state.lang] || I18N.fr; };

var iconRefresh = function () {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
};

var save = function (key, value) {
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  } catch (error) {
    /* Storage can be unavailable in private browsing. */
  }
};

/* Dynamic inventory calculations for all badges, tabs, and titles */
function updateDynamicCounts() {
  var total = PERFUMES.length;
  var count50 = PERFUMES.filter(function (p) { return p.format === '50ml'; }).length;
  var count30 = PERFUMES.filter(function (p) { return p.format === '30ml'; }).length;

  document.querySelectorAll('.dyn-count--total').forEach(function (el) {
    el.textContent = String(total);
  });
  document.querySelectorAll('.dyn-count--50').forEach(function (el) {
    el.textContent = String(count50);
  });
  document.querySelectorAll('.dyn-count--30').forEach(function (el) {
    el.textContent = String(count30);
  });
}

function applyLanguage(language) {
  state.lang = I18N[language] ? language : 'fr';
  var html = document.documentElement;
  html.lang = state.lang;
  html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  
  var strings = dict();
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    var key = element.getAttribute('data-i18n');
    if (strings[key] === undefined) return;
    if (key === 'hero_title' || key === 'bento_title') {
      element.innerHTML = strings[key];
    } else {
      element.textContent = strings[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function (button) {
    var active = button.dataset.lang === state.lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  var search = $('searchInput');
  if (search) {
    search.placeholder = strings.search_placeholder || 'Rechercher un parfum...';
  }

  updateDynamicCounts();
  updateHeroDisplay();
  renderGrid();
  updateCartUI();
  if (state.modalId) openModal(state.modalId);
  save('abde_lang', state.lang);
  iconRefresh();
}

function initHeroFeatured() {
  var container = $('heroChips');
  if (!container) return;
  container.replaceChildren();

  HERO_FEATURED.forEach(function (feature, index) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'hero-chip' + (index === state.heroIndex ? ' is-active' : '');
    button.dataset.index = String(index);
    button.setAttribute('aria-pressed', String(index === state.heroIndex));
    var displayName = state.lang === 'ar' ? (feature.name_ar || feature.name) : feature.name;
    button.setAttribute('aria-label', displayName);
    button.innerHTML = '<img src="' + feature.img + '" alt="" class="hero-chip__img" loading="lazy">' +
      '<span class="hero-chip__name">' + displayName + '</span>';
    container.appendChild(button);
  });

  updateHeroDisplay();
}

function updateHeroDisplay() {
  var feature = HERO_FEATURED[state.heroIndex] || HERO_FEATURED[0];
  if (!feature) return;

  var image = $('heroBottleImg');
  var displayName = state.lang === 'ar' ? (feature.name_ar || feature.name) : feature.name;
  if (image) {
    image.classList.add('is-switching');
    setTimeout(function () {
      image.src = feature.img;
      image.alt = displayName;
      image.classList.remove('is-switching');
    }, 150);
  }

  var title = $('heroBadgeTitle');
  if (title) title.textContent = displayName;

  var price = $('heroBadgePrice');
  if (price) {
    price.textContent = feature.price + (state.lang === 'ar' ? ' درهم' : ' MAD');
  }

  var notes = $('heroBadgeNotes');
  if (notes) {
    notes.textContent = feature['notes_' + state.lang] || feature.notes || '';
  }

  var badge = $('heroBadgeTag');
  if (badge) {
    badge.textContent = feature['tag_' + state.lang] || feature.tag || '';
  }

  document.querySelectorAll('.hero-chip').forEach(function (button, index) {
    var active = index === state.heroIndex;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
    var feat = HERO_FEATURED[index];
    if (feat) {
      var nameEl = button.querySelector('.hero-chip__name');
      if (nameEl) {
        nameEl.textContent = state.lang === 'ar' ? (feat.name_ar || feat.name) : feat.name;
      }
    }
  });
}

/* 3D Holographic Parallax on the Hero Bottle Podium */
function initHeroParallax() {
  var showcase = $('heroShowcase');
  var podium = $('heroPodium');
  var glare = $('heroGlare');
  if (!showcase || !podium) return;

  var rafId = null;
  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;

  function update() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    podium.style.transform = 'perspective(1000px) rotateY(' + currentX.toFixed(2) + 'deg) rotateX(' + (-currentY).toFixed(2) + 'deg)';

    if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      rafId = requestAnimationFrame(update);
    } else {
      rafId = null;
    }
  }

  showcase.addEventListener('mousemove', function (e) {
    var rect = showcase.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var centerX = rect.width / 2;
    var centerY = rect.height / 2;

    targetX = ((x - centerX) / centerX) * 12;
    targetY = ((y - centerY) / centerY) * 12;

    if (glare) {
      var px = (x / rect.width) * 100;
      var py = (y / rect.height) * 100;
      glare.style.background = 'radial-gradient(circle at ' + px.toFixed(1) + '% ' + py.toFixed(1) + '%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)';
      glare.style.opacity = '1';
    }

    if (!rafId) {
      rafId = requestAnimationFrame(update);
    }
  });

  showcase.addEventListener('mouseleave', function () {
    targetX = 0;
    targetY = 0;
    if (glare) glare.style.opacity = '0';
    if (!rafId) {
      rafId = requestAnimationFrame(update);
    }
  });
}

function normalized(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();
}

function renderGrid() {
  var grid = $('productGrid');
  if (!grid) return;
  var query = normalized(state.searchQuery.trim());

  var results = PERFUMES.filter(function (product) {
    if (state.filterFormat !== 'all' && product.format !== state.filterFormat) return false;
    if (state.filterCategory !== 'all' && product.category !== state.filterCategory) return false;
    if (!query) return true;
    return [
      product.name,
      product.name_ar,
      product['notes_' + state.lang],
      product.notes_fr,
      product['tagline_' + state.lang],
      product.tagline_fr
    ].some(function (value) {
      return normalized(value).includes(query);
    });
  });

  grid.replaceChildren();
  var empty = $('noResults');
  if (empty) empty.hidden = results.length > 0;

  var currLabel = state.lang === 'ar' ? 'درهم' : 'MAD';

  results.forEach(function (product) {
    var name = state.lang === 'ar' ? (product.name_ar || product.name) : product.name;
    var notes = product['notes_' + state.lang] || product.notes_fr || '';
    var available = product.stock !== false;
    var card = document.createElement('article');
    card.className = 'product-card' + (available ? '' : ' is-sold-out');
    card.dataset.id = product.id;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', name + ' — ' + stringsPrice(product.price));

    var catName = dict()['cat_' + product.category] || '';
    var formatText = product.format === '50ml'
      ? (state.lang === 'ar' ? '50 مل · إكستري دو بارفان' : '50ml · Extrait Pur')
      : (state.lang === 'ar' ? '30 مل · حجم الجيب' : '30ml · Format Nomade');

    card.innerHTML =
      '<div class="product-card__stage">' +
        '<span class="product-card__format-tag">' + formatText + '</span>' +
        '<div class="product-card__halo" aria-hidden="true"></div>' +
        '<img src="' + product.img + '" alt="' + name + '" class="product-card__img" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=\'50-1.jpeg\'">' +
        '<button type="button" class="product-card__quick-btn" data-action="quick" aria-label="' + dict().card_quick_view + '">' +
          '<i data-lucide="eye" aria-hidden="true"></i>' +
          '<span>' + dict().card_quick_view + '</span>' +
        '</button>' +
      '</div>' +
      '<div class="product-card__content">' +
        (catName ? '<span class="product-card__category">' + catName + '</span>' : '') +
        '<h3 class="product-card__title">' + name + '</h3>' +
        '<p class="product-card__notes">' +
          '<strong class="notes-label">' + dict().card_notes_label + ':</strong> ' + notes +
        '</p>' +
        '<div class="product-card__footer">' +
          '<div class="product-card__price">' +
            '<span class="price-val num-clean">' + product.price + '</span>' +
            '<span class="price-curr">' + currLabel + '</span>' +
          '</div>' +
          '<button type="button" class="btn-card-add' + (available ? '' : ' is-disabled') + '" data-action="add" ' + (available ? '' : 'disabled') + ' aria-label="' + dict().card_add_cart + '">' +
            '<i data-lucide="shopping-bag" aria-hidden="true"></i>' +
            '<span>' + (available ? dict().card_add_cart : dict().card_out_of_stock) + '</span>' +
          '</button>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  iconRefresh();
}

function stringsPrice(price) {
  var curr = state.lang === 'ar' ? ' درهم' : ' MAD';
  return price + curr;
}

function openModal(id) {
  var product = PERFUMES.find(function (item) { return item.id === id; });
  if (!product) return;
  state.modalId = id;

  var name = state.lang === 'ar' ? (product.name_ar || product.name) : product.name;
  var currLabel = state.lang === 'ar' ? ' درهم' : ' MAD';
  var modalImg = $('modalImg');
  if (modalImg) {
    modalImg.src = product.img;
    modalImg.alt = name;
    modalImg.onerror = function () {
      this.onerror = null;
      this.src = '50-1.jpeg';
    };
  }
  $('modalBadge').textContent = product.format + ' · Extrait';
  $('modalBadge').className = 'pill ' + (product.format === '50ml' ? 'pill--gold' : 'pill--sage');
  $('modalName').textContent = name;
  $('modalTagline').textContent = product['tagline_' + state.lang] || product.tagline_fr || '';
  $('modalNotes').textContent = product['notes_' + state.lang] || product.notes_fr || '';
  $('modalPrice').textContent = product.price + currLabel;
  $('modalAddCart').disabled = product.stock === false;

  var overlay = $('modalOverlay');
  if (overlay) {
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('has-modal');
  iconRefresh();
}

function closeModal() {
  var overlay = $('modalOverlay');
  if (overlay) {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
  }
  state.modalId = null;
  document.body.classList.remove('has-modal');
}

function persistCart() {
  save('abde_cart', state.cart);
  updateCartUI();
}

function addToCart(id) {
  var product = PERFUMES.find(function (item) { return item.id === id; });
  if (!product || product.stock === false) return;

  var found = state.cart.find(function (item) { return item.id === id; });
  if (found) {
    found.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      name_ar: product.name_ar,
      format: product.format,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }

  persistCart();
  showToast(state.lang === 'ar' ? (product.name_ar || product.name) : product.name);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(function (item) { return item.id !== id; });
  persistCart();
}

function changeQty(id, delta) {
  var item = state.cart.find(function (entry) { return entry.id === id; });
  if (!item) return;
  item.qty = Math.max(0, Number(item.qty) + delta);
  if (!item.qty) {
    state.cart = state.cart.filter(function (entry) { return entry.id !== id; });
  }
  persistCart();
}

function updateCartUI() {
  var count = state.cart.reduce(function (sum, item) { return sum + Number(item.qty || 0); }, 0);
  var total = state.cart.reduce(function (sum, item) { return sum + Number(item.price || 0) * Number(item.qty || 0); }, 0);
  var currLabel = state.lang === 'ar' ? ' درهم' : ' MAD';

  var badge = $('cartBadge');
  if (badge) {
    badge.textContent = String(count);
    badge.hidden = count === 0;
  }

  var footer = $('cartFooter');
  if (footer) footer.hidden = count === 0;

  var empty = $('cartEmpty');
  if (empty) empty.hidden = count !== 0;

  var totalElement = $('cartTotal');
  if (totalElement) totalElement.textContent = total + currLabel;

  var list = $('cartItems');
  if (!list) return;
  list.replaceChildren();

  state.cart.forEach(function (item) {
    var name = state.lang === 'ar' ? (item.name_ar || item.name) : item.name;
    var row = document.createElement('li');
    row.className = 'cart-item';
    row.innerHTML =
      '<img src="' + item.img + '" alt="" class="cart-item__img" onerror="this.onerror=null;this.src=\'50-1.jpeg\'">' +
      '<div class="cart-item__info">' +
        '<h3 class="cart-item__name">' + name + '</h3>' +
        '<span class="cart-item__format">' + item.format + '</span>' +
        '<span class="cart-item__price num-clean">' + (item.price * item.qty) + currLabel + '</span>' +
      '</div>' +
      '<div class="cart-item__actions">' +
        '<div class="qty-counter">' +
          '<button type="button" class="qty-btn" data-action="qty" data-delta="-1" data-id="' + item.id + '" aria-label="Diminuer">−</button>' +
          '<span class="qty-num num-clean">' + item.qty + '</span>' +
          '<button type="button" class="qty-btn" data-action="qty" data-delta="1" data-id="' + item.id + '" aria-label="Augmenter">+</button>' +
        '</div>' +
        '<button type="button" class="cart-item__del" data-action="remove" data-id="' + item.id + '" aria-label="Supprimer">' +
          '<i data-lucide="trash-2" aria-hidden="true"></i>' +
        '</button>' +
      '</div>';
    list.appendChild(row);
  });

  iconRefresh();
}

function openCart() {
  var drawer = $('cartDrawer');
  var overlay = $('cartOverlay');
  if (drawer) {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (overlay) {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('has-cart');
}

function closeCart() {
  var drawer = $('cartDrawer');
  var overlay = $('cartOverlay');
  if (drawer) {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (overlay) {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('has-cart');
}

function showToast(name) {
  var toast = $('cartToast');
  var text = $('toastText');
  if (!toast || !text) return;

  text.textContent = name + ' ' + dict().toast_added;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove('is-visible');
  }, 3200);
}

function buildWhatsAppUrl() {
  var total = state.cart.reduce(function (sum, item) {
    return sum + item.price * item.qty;
  }, 0);

  var lines = state.cart.map(function (item) {
    var name = state.lang === 'ar' ? (item.name_ar || item.name) : item.name;
    return '• ' + name + ' (' + item.format + ') x' + item.qty + ' = ' + item.price * item.qty + ' MAD';
  });

  var greeting = state.lang === 'ar'
    ? 'السلام عليكم، أود تأكيد طلبي من عطور Abdeperfumes :'
    : (state.lang === 'en'
      ? 'Hello Abdeperfumes, I would like to confirm my order :'
      : 'Bonjour Abdeperfumes, je souhaite passer commande :');

  var footerMsg = state.lang === 'ar'
    ? 'المجموع الإجمالي : ' + total + ' درهم\nالاسم والمدينة للعنوان والتوصيل :'
    : (state.lang === 'en'
      ? 'Total : ' + total + ' MAD\nName, city and address :'
      : 'Total : ' + total + ' MAD\nNom, ville et adresse de livraison :');

  var fullText = greeting + '\n\n' + lines.join('\n') + '\n\n' + footerMsg;
  return 'https://wa.me/212609539103?text=' + encodeURIComponent(fullText);
}

function setMenu(open) {
  var button = $('navBurger');
  var menu = $('mobileNav');
  if (button) {
    button.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  }
  if (menu) {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
  }
}

function setFormat(format) {
  state.filterFormat = format;
  document.querySelectorAll('.filter-tab[data-filter-format]').forEach(function (button) {
    button.classList.toggle('is-active', button.dataset.filterFormat === format);
  });
  renderGrid();
}

function bindInteractions() {
  document.addEventListener('click', function (event) {
    var target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    var language = target.closest('.lang-btn[data-lang]');
    if (language) {
      applyLanguage(language.dataset.lang);
      return;
    }

    if (target.closest('#cartBtn')) { openCart(); return; }
    if (target.closest('#cartClose, #cartOverlay')) { closeCart(); return; }
    if (target.closest('#modalClose')) { closeModal(); return; }
    if (target.closest('#modalOverlay') && target === $('modalOverlay')) { closeModal(); return; }

    if (target.closest('#navBurger')) {
      var current = $('navBurger').getAttribute('aria-expanded') === 'true';
      setMenu(!current);
      return;
    }
    if (target.closest('.mobile-nav-link')) {
      setMenu(false);
      return;
    }

    var formatTab = target.closest('.filter-tab[data-filter-format]');
    if (formatTab) {
      setFormat(formatTab.dataset.filterFormat);
      return;
    }

    var category = target.closest('.cat-pill[data-filter-cat]');
    if (category) {
      state.filterCategory = category.dataset.filterCat;
      document.querySelectorAll('.cat-pill[data-filter-cat]').forEach(function (button) {
        button.classList.toggle('is-active', button === category);
      });
      renderGrid();
      return;
    }

    var jump = target.closest('[data-jump-format]');
    if (jump) {
      setFormat(jump.dataset.jumpFormat);
      var catalogueSec = $('catalogue');
      if (catalogueSec) {
        catalogueSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    var toastAction = target.closest('#toastAction');
    if (toastAction) {
      $('cartToast').classList.remove('is-visible');
      openCart();
      return;
    }

    var quantity = target.closest('[data-action="qty"]');
    if (quantity) {
      changeQty(quantity.dataset.id, Number(quantity.dataset.delta));
      return;
    }

    var remove = target.closest('[data-action="remove"]');
    if (remove) {
      removeFromCart(remove.dataset.id);
      return;
    }

    var add = target.closest('[data-action="add"]');
    if (add) {
      var addCard = add.closest('.product-card');
      if (addCard) addToCart(addCard.dataset.id);
      return;
    }

    if (target.closest('#modalAddCart')) {
      if (state.modalId) addToCart(state.modalId);
      return;
    }

    if (target.closest('#btnWhatsApp')) {
      if (state.cart.length) {
        window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
      }
      return;
    }

    var heroChip = target.closest('.hero-chip');
    if (heroChip) {
      state.heroIndex = Number(heroChip.dataset.index) || 0;
      updateHeroDisplay();
      return;
    }

    var card = target.closest('.product-card');
    if (card) {
      openModal(card.dataset.id);
      return;
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
      closeCart();
      setMenu(false);
    }
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.product-card')) {
      event.preventDefault();
      openModal(event.target.dataset.id);
    }
  });

  var search = $('searchInput');
  if (search) {
    search.addEventListener('input', function () {
      state.searchQuery = search.value;
      renderGrid();
    });
  }
}

function initialize() {
  try {
    var lang = localStorage.getItem('abde_lang');
    var cart = JSON.parse(localStorage.getItem('abde_cart') || '[]');
    if (I18N[lang]) state.lang = lang;
    if (Array.isArray(cart)) {
      state.cart = cart.filter(function (item) {
        return item && PERFUMES.some(function (product) { return product.id === item.id; });
      }).map(function (item) {
        item.qty = Math.max(1, Number(item.qty) || 1);
        return item;
      });
    }
    localStorage.removeItem('abde_theme');
    document.documentElement.removeAttribute('data-theme');
  } catch (error) {
    state.cart = [];
  }

  applyLanguage(state.lang);
  initHeroFeatured();
  initHeroParallax();
  bindInteractions();

  var nav = $('navbar');
  var onScroll = function () {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 }) : null;

  document.querySelectorAll('.js-reveal').forEach(function (element) {
    if (observer) observer.observe(element);
    else element.classList.add('is-visible');
  });

  iconRefresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}