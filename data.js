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
  // معايير ملف الإنجاز (من هيكل الملف الذي أرسلته لمياء)
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
      title: { ar: "كتاب التقنية الرقمية ١-١ التفاعلي (أولى ثانوي)", en: "Interactive Digital Technology 1-1 (Grade 10)" },
      desc: { ar: "كتاب تفاعلي لمنهج أولى ثانوي يتضمن ١٧ درسًا في ٤ وحدات، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 10 course, with 17 lessons in 4 units, and the same animation, video and worksheets." },
      link: "https://lamiaa2010.github.io/alzahraa-digital-tech-g10/", book: true },
    { id: 2, std: "8", date: "2026-11",
      title: { ar: "كتاب التقنية الرقمية ٣ التفاعلي (ثالث ثانوي)", en: "Interactive Digital Technology 3 (Grade 12)" },
      desc: { ar: "كتاب تفاعلي لمنهج ثالث ثانوي يتضمن قسم الذكاء الاصطناعي، بنفس أسلوب التفاعل والفيديو وأوراق العمل.",
              en: "An interactive book for the Grade 12 course, including the AI section, with the same animation, video and worksheets." },
      link: "https://lamiaa2010.github.io/alzahraa-digital-tech-g10/".replace("g10","g12"), book: true },
    { id: 3, std: "t2", term2: true, placeholder: true, book: true,
      title: { ar: "كتاب التقنية الرقمية <span dir='ltr'>١-٢</span> التفاعلي (أولى ثانوي)", en: "Interactive Digital Technology 1-2 (Grade 10)" },
      desc: { ar: "كتاب تفاعلي لمنهج أولى ثانوي للفصل الدراسي الثاني، بنفس أسلوب التفاعل والفيديو وأوراق العمل. قريبًا بإذن الله.", en: "An interactive book for the Grade 10 course, second term, with the same animation, video and worksheets. Coming soon." } },
    { id: 4, std: "t2", term2: true, placeholder: true, book: true,
      title: { ar: "كتاب التقنية الرقمية <span dir='ltr'>٢-٢</span> التفاعلي (ثانية ثانوي)", en: "Interactive Digital Technology 2-2 (Grade 11)" },
      desc: { ar: "كتاب تفاعلي لمنهج ثانية ثانوي للفصل الدراسي الثاني، بنفس أسلوب التفاعل والفيديو وأوراق العمل. قريبًا بإذن الله.", en: "An interactive book for the Grade 11 course, second term, with the same animation, video and worksheets. Coming soon." } }
  ]
};
