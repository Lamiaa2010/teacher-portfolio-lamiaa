// ===== كل المحتوى هنا. إضافة إنجاز جديد = إضافة سطر في القائمة items =====
// type: cert | course | initiative | project | honor
// file: مسار الملف داخل فولدر files (صورة أو PDF) - اختياري
// placeholder:true يعني مكان محجوز لحد ما تتبعت البيانات الحقيقية
window.SITE = {
  name: { ar: "لمياء توفيق", en: "Lamiaa Tawfeek" },
  role: { ar: "مهندسة ومعلمة حاسب آلي وروبوتات", en: "Engineer, Computer & Robotics Teacher" },
  tagline: {
    ar: "أصنع تجارب تعلّم تفاعلية تُلهم طالباتي وتنمّي مهاراتهن.",
    en: "An engineer's mind, a teacher's heart: turning technology into living learning for her students."
  },
  contact: { email: "mrs.lamiatawfeek@gmail.com" },
  // معايير ملف إنجاز (من هيكل الملف الذي أرسلته لمياء)
  // مجلدات Drive الموجودة لكل معيار (مشاركة بالرابط - للقراءة). 5 و assess غير موجودين بنفس الاسم.
  folders: {
    "1":"12Drpcyg0cHIdvybaDaO4mbk6KBmnZ69-","2":"1GqnDkOVCRq6eOIYlbz20xWi1vbpS6MtA","3":"1h5RK07PezgRKQxnctRQvvOqxLcv-NpPX",
    "4":"10Uq9VwV9unCWN09fifibRkeLRBzojEOr","5":"1wO58nBykibFltgaCHFL9j-VvecaTxCLE","assess":"1c4z2mrTvRR9Ere___7qxA49p2OWMfTRz","6":"1szWvweX8lfdDKiIlHfuxsFnoRpj9G4Nr","7":"1uMvIXF3ZsZKdtzV3uI68tR2T1wKmjlys",
    "8":"1O5zRjoQdhI2QFzdweZ-mVz0zy1TCFXuM","plan":"1jS13vyi5r2V4uCLwHQXltjodlxKv47Zh","results":"1iDqIg_QKxg_nO64DU4tHgrB7NqNI77V0"
  },
  standards: [
    {n:1, ar:"أداء الواجبات الوظيفية"},{n:2, ar:"التفاعل مع المجتمع المهني"},{n:3, ar:"التفاعل مع أولياء الأمور"},
    {n:4, ar:"التنوع في استراتيجيات التدريس"},{n:5, ar:"تحسين نتائج المتعلمين"},{n:6, ar:"الإدارة الصفية"},
    {n:7, ar:"تهيئة البيئة التعليمية"},{n:8, ar:"توظيف تقنيات ووسائل التعلم المناسبة"}
  ],
  // std: رقم المعيار (1-8) أو plan / results / assess
  items: [
    { id: 1, std: "8", date: "2026-11",
      title: { ar: "التقنية الرقمية <span class='bn'><i>١</i><i>-</i><i>١</i></span> <span class='gr'>(أولى ثانوي)</span>", en: "Interactive Digital Technology 1-1 (Grade 10)" },
      desc: { ar: "كتاب تفاعلي لمنهج أولى ثانوي، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 10 course, with the same animation, video and worksheets." },
      link: "https://lamiaa2010.github.io/alzahraa-digital-tech-g10/", book: true },
    { id: 2, std: "8", date: "2026-11",
      title: { ar: "التقنية الرقمية <span class='bn'><i>٣</i></span> <span class='gr'>(ثالث ثانوي)</span>", en: "Interactive Digital Technology 3 (Grade 12)" },
      desc: { ar: "كتاب تفاعلي لمنهج ثالث ثانوي، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 12 course, with the same animation, video and worksheets." },
      link: "https://lamiaa2010.github.io/alzahraa-digital-tech-g10/".replace("g10","g12"), book: true },
    { id: 3, std: "t2", term2: true, placeholder: true, book: true,
      title: { ar: "التقنية الرقمية <span class='bn'><i>١</i><i>-</i><i>٢</i></span> <span class='gr'>(أولى ثانوي)</span>", en: "Interactive Digital Technology 1-2 (Grade 10)" },
      desc: { ar: "كتاب تفاعلي لمنهج أولى ثانوي، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 10 course, with the same animation, video and worksheets." } },
    { id: 4, std: "t2", term2: true, placeholder: true, book: true,
      title: { ar: "التقنية الرقمية <span class='bn'><i>٢</i><i>-</i><i>٢</i></span> <span class='gr'>(ثانية ثانوي)</span>", en: "Interactive Digital Technology 2-2 (Grade 11)" },
      desc: { ar: "كتاب تفاعلي لمنهج ثانية ثانوي، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 11 course, with the same animation, video and worksheets." } }
  ]
};
