import type { WordVisualScene } from '../../types/illustration';

/**
 * Визуальные сцены для глав 1 и 2.
 *
 * `svgMotif` содержит SVG path data, рассчитанную на viewBox="0 0 100 100".
 * Подписи создают ассоциативный образ и не дублируют перевод слова.
 */
export const BATCH8_SCENES: Record<string, WordVisualScene> = {
  // Глава 1. Характер, поведение, родственники и традиции.

  // 1.
  'το χαρακτηριστικό (τα χαρακτηριστικά)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #312e81 0%, #7c3aed 55%, #d8b4fe 100%)',
    glow: 'rgba(167, 139, 250, 0.48)',
    primaryEmoji: '1f50d',
    secondaryEmoji: '1f464',
    accentEmoji: '2728',
    caption: 'По одной выразительной детали угадывается целый портрет.',
    svgMotif:
      'M50 18c-18 0-32 14-32 32 0 10 4 18 10 24M50 28c-12 0-22 10-22 22 0 16 8 24 16 30M50 38c-7 0-12 5-12 12 0 14 6 22 12 28M50 48c0 12 4 20 10 26M60 34c8 6 12 14 12 24M28 30c5-7 13-11 22-11',
  },

  // 2.
  'η προσωπικότητα / ο χαρακτήρας': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #6d28d9 52%, #db2777 100%)',
    glow: 'rgba(192, 132, 252, 0.46)',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '1f3ad',
    accentEmoji: '2728',
    caption: 'Внутри — целый набор привычек, реакций и принципов.',
    svgMotif:
      'M50 14a18 18 0 1 0 0 36 18 18 0 0 0 0-36M24 86c2-18 12-28 26-28s24 10 26 28M38 30h24M34 70c10 6 22 6 32 0M50 4v6M18 18l5 5M82 18l-5 5',
  },

  // 3.
  'η συμπεριφορά / συμπεριφέρομαι': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #083344 0%, #0f766e 50%, #38bdf8 100%)',
    glow: 'rgba(45, 212, 191, 0.42)',
    primaryEmoji: '1f9d1',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f440',
    caption: 'Поступки рассказывают о человеке раньше, чем он представится.',
    svgMotif:
      'M18 18h48v30H40L28 60V48H18zM28 30h26M28 38h18M70 54c8 4 12 10 12 18M66 66l8 14M48 74l-8 12M74 82h14',
  },

  // 4.
  'η εξωτερική εμφάνιση': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #db2777 52%, #f9a8d4 100%)',
    glow: 'rgba(244, 114, 182, 0.44)',
    primaryEmoji: '1f454',
    secondaryEmoji: '1f457',
    accentEmoji: '2728',
    caption: 'Первое впечатление складывается ещё до приветствия.',
    svgMotif:
      'M24 14h52v72H24zM50 28a10 10 0 1 0 0 20 10 10 0 0 0 0-20M34 72c2-12 8-18 16-18s14 6 16 18M18 22h6M76 22h6M18 78h6M76 78h6',
  },

  // 5.
  'σεμνός (-ή, -ό) / η σεμνότητα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #14532d 0%, #4d7c0f 52%, #bbf7d0 100%)',
    glow: 'rgba(134, 239, 172, 0.4)',
    primaryEmoji: '1f64f',
    secondaryEmoji: '1f338',
    accentEmoji: '2728',
    caption: 'Тихая уверенность без стремления оказаться в центре внимания.',
    svgMotif:
      'M50 82V42M50 54c-12 0-20-6-24-16 12-2 20 4 24 16M50 62c12 0 20-6 24-16-12-2-20 4-24 16M36 86h28M50 30a8 8 0 1 0 0 16 8 8 0 0 0 0-16',
  },

  // 6.
  'δυναμικός (-ή, -ό) / ο δυναμισμός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #ea580c 48%, #facc15 100%)',
    glow: 'rgba(251, 146, 60, 0.5)',
    primaryEmoji: '26a1',
    secondaryEmoji: '1f3c3',
    accentEmoji: '1f680',
    caption: 'Энергия, которая быстро превращает замысел в действие.',
    svgMotif:
      'M56 8 28 54h20l-4 38 28-48H52zM12 76h18M70 76h18M16 64h12M72 62h16M20 88h60',
  },

  // 7.
  'σταθερός (-ή, -ό) / η σταθερότητα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 54%, #67e8f9 100%)',
    glow: 'rgba(96, 165, 250, 0.44)',
    primaryEmoji: '1f3d4',
    secondaryEmoji: '2693',
    accentEmoji: '1f4cd',
    caption: 'На такой фундамент можно опереться даже в переменчивый день.',
    svgMotif:
      'M12 78 36 36l12 20 10-16 30 38zM50 14v22M42 22h16M28 78l8-14 12 20M58 40l8 12M20 88h60',
  },

  // 8.
  'σοβαρός (-ή, -ό) / η σοβαρότητα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #111827 0%, #374151 52%, #818cf8 100%)',
    glow: 'rgba(148, 163, 184, 0.42)',
    primaryEmoji: '1f610',
    secondaryEmoji: '1f4cb',
    accentEmoji: '2696',
    caption: 'Сначала взвесить факты, потом говорить и обещать.',
    svgMotif:
      'M50 14v68M28 26h44M50 20 28 26M50 20l22 6M18 52l10-26 10 26c-4 8-16 8-20 0M62 52l10-26 10 26c-4 8-16 8-20 0M34 84h32',
  },

  // 9.
  'ικανός (-ή, -ό) / η ικανότητα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #a3e635 100%)',
    glow: 'rgba(52, 211, 153, 0.46)',
    primaryEmoji: '1f4aa',
    secondaryEmoji: '1f3af',
    accentEmoji: '2b50',
    caption: 'Сложная задача встречает нужные навыки и спокойное «справлюсь».',
    svgMotif:
      'M50 14a36 36 0 1 0 0 72 36 36 0 0 0 0-72M50 28a22 22 0 1 0 0 44 22 22 0 0 0 0-44M50 42a8 8 0 1 0 0 16 8 8 0 0 0 0-16M50 50 82 18M74 18h8v8',
  },

  // 10.
  'νευρικός (-ή, -ό) / τα νεύρα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #4c0519 0%, #be123c 48%, #7e22ce 100%)',
    glow: 'rgba(251, 113, 133, 0.5)',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '26a1',
    accentEmoji: '1f4a5',
    caption: 'Внутри всё звенит от напряжения, а мелочь становится искрой.',
    svgMotif:
      'M22 30 34 22l8 10 12-18 8 20 16-6-8 20 12 10-20 6-4 20-14-14-16 10 2-22-16-4zM42 42l8 8-6 10 12 8',
  },

  // 11.
  'ήρεμος (-η, -ο) / η ηρεμία': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #164e63 0%, #0284c7 52%, #a5f3fc 100%)',
    glow: 'rgba(103, 232, 249, 0.42)',
    primaryEmoji: '1f9d8',
    secondaryEmoji: '1f30a',
    accentEmoji: '1f319',
    caption: 'Ровное дыхание, тихая гладь и ни одной лишней волны.',
    svgMotif:
      'M12 34c10-10 18 10 28 0s18 10 28 0 18 10 20 0M12 52c10-10 18 10 28 0s18 10 28 0 18 10 20 0M12 70c10-10 18 10 28 0s18 10 28 0 18 10 20 0',
  },

  // 12.
  'έξυπνος (-η, -ο) / η εξυπνάδα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #312e81 0%, #4f46e5 48%, #facc15 100%)',
    glow: 'rgba(253, 224, 71, 0.46)',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '1f4a1',
    accentEmoji: '2728',
    caption: 'Неожиданный поворот мысли — и решение найдено.',
    svgMotif:
      'M50 14a24 24 0 0 0-14 44c6 4 8 8 8 14h12c0-6 2-10 8-14a24 24 0 0 0-14-44M42 80h16M44 88h12M50 4v6M16 20l6 6M84 20l-6 6M42 42l8 8 10-14',
  },

  // 13.
  'το προτέρημα ≠ το ελάττωμα': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #047857 0%, #164e63 46%, #7f1d1d 54%, #be123c 100%)',
    glow: 'rgba(45, 212, 191, 0.38)',
    primaryEmoji: '1f44d',
    secondaryEmoji: '1f44e',
    accentEmoji: '2696',
    caption: 'Одна сторона медали помогает, другая — мешает.',
    svgMotif:
      'M50 12a38 38 0 1 0 0 76 38 38 0 0 0 0-76M50 12v76M28 38h14M35 31v14M64 64h14M22 72c6 4 12 4 18 0M60 28c6-4 12-4 18 0',
  },

  // 14.
  'η φαντασία / έχω φαντασία': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #2e1065 0%, #9333ea 48%, #f472b6 100%)',
    glow: 'rgba(232, 121, 249, 0.48)',
    primaryEmoji: '1f4ad',
    secondaryEmoji: '1f409',
    accentEmoji: '2728',
    caption: 'Обычная тучка вдруг становится драконом над городом.',
    svgMotif:
      'M22 62a14 14 0 0 1 4-28 20 20 0 0 1 38-8 16 16 0 0 1 12 30M28 76c12-12 24 12 36 0s18 0 20 4M62 22l8-10M70 24l12-4M20 88h60',
  },

  // 15.
  'φαίνομαι / μοιάζω με...': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #1e40af 0%, #0e7490 46%, #9f1239 54%, #fb7185 100%)',
    glow: 'rgba(125, 211, 252, 0.4)',
    primaryEmoji: '1f9d1',
    secondaryEmoji: '1f46a',
    accentEmoji: '1f50d',
    caption: 'Черты лица будто перекликаются на двух портретах.',
    svgMotif:
      'M12 22h34v48H12zM54 30h34v48H54zM29 32a7 7 0 1 0 0 14 7 7 0 0 0 0-14M71 40a7 7 0 1 0 0 14 7 7 0 0 0 0-14M18 62c2-8 6-12 11-12s9 4 11 12M60 70c2-8 6-12 11-12s9 4 11 12',
  },

  // 16.
  "το μήλο κάτω απ' τη μηλιά θα πέσει": {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #14532d 0%, #65a30d 48%, #dc2626 100%)',
    glow: 'rgba(190, 242, 100, 0.42)',
    primaryEmoji: '1f34e',
    secondaryEmoji: '1f333',
    accentEmoji: '1f46a',
    caption: 'Семейное сходство заметно даже там, где его не ждут.',
    svgMotif:
      'M50 82V42M50 52 32 34M50 58l18-20M20 34a16 16 0 0 0 30 4 18 18 0 0 0 30-4 12 12 0 0 0-12-16 18 18 0 0 0-34 2 12 12 0 0 0-14 14M72 72a10 10 0 1 0 0 20 10 10 0 0 0 0-20M72 72c0-6 4-10 10-12',
  },

  // 17.
  'οι συγγενείς (κοντινοί και μακρινοί)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #15803d 50%, #fbbf24 100%)',
    glow: 'rgba(74, 222, 128, 0.42)',
    primaryEmoji: '1f46a',
    secondaryEmoji: '1f333',
    accentEmoji: '1f4cd',
    caption: 'Одни ветви совсем рядом, другие тянутся издалека.',
    svgMotif:
      'M50 12v20M28 32h44M28 32v14M50 32v14M72 32v14M18 46h20v18H18zM40 46h20v18H40zM62 46h20v18H62zM28 64v12M50 64v12M72 64v12M18 84h20M40 84h20M62 84h20',
  },

  // 18.
  'η νύφη ≠ ο γαμπρός': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #be185d 0%, #f9a8d4 46%, #1e3a8a 54%, #38bdf8 100%)',
    glow: 'rgba(249, 168, 212, 0.46)',
    primaryEmoji: '1f470',
    secondaryEmoji: '1f935',
    accentEmoji: '1f492',
    caption: 'Два новых места за одним праздничным столом.',
    svgMotif:
      'M36 52a18 18 0 1 0 0 36 18 18 0 0 0 0-36M64 12a18 18 0 1 0 0 36 18 18 0 0 0 0-36M44 44l12 12M50 38l12 12M18 18l8 8M82 70l8 8',
  },

  // 19.
  'ο πεθερός / η πεθερά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #451a03 0%, #a16207 48%, #7c3aed 100%)',
    glow: 'rgba(252, 211, 77, 0.4)',
    primaryEmoji: '1f9d3',
    secondaryEmoji: '1f470',
    accentEmoji: '1f46a',
    caption: 'После свадьбы семейный круг становится заметно шире.',
    svgMotif:
      'M50 12a38 38 0 1 0 0 76 38 38 0 0 0 0-76M50 26a8 8 0 1 0 0 16 8 8 0 0 0 0-16M30 48a7 7 0 1 0 0 14 7 7 0 0 0 0-14M70 48a7 7 0 1 0 0 14 7 7 0 0 0 0-14M36 76c2-12 7-20 14-20s12 8 14 20',
  },

  // 20.
  'το μοναχοπαίδι (το μοναχοπαίδι)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 52%, #fde047 100%)',
    glow: 'rgba(125, 211, 252, 0.44)',
    primaryEmoji: '1f9d2',
    secondaryEmoji: '1f46a',
    accentEmoji: '2b50',
    caption: 'Все детские фотографии в альбоме — с одним героем.',
    svgMotif:
      'M50 12a38 38 0 1 0 0 76 38 38 0 0 0 0-76M50 28l6 14 15 1-12 10 4 15-13-8-13 8 4-15-12-10 15-1zM20 20l6 6M80 20l-6 6',
  },

  // 21.
  'τα ανίψια (ο ανιψιός / η ανιψιά)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 46%, #06b6d4 100%)',
    glow: 'rgba(253, 186, 116, 0.44)',
    primaryEmoji: '1f9d2',
    secondaryEmoji: '1f467',
    accentEmoji: '1f388',
    caption: 'Семейный праздник: взрослые за столом, а младшая ватага уже затеяла игру.',
    svgMotif:
      'M50 18a10 10 0 1 0 0 20 10 10 0 0 0 0-20M28 46a8 8 0 1 0 0 16 8 8 0 0 0 0-16M72 46a8 8 0 1 0 0 16 8 8 0 0 0 0-16M34 88c2-16 8-26 16-26s14 10 16 26M14 84c2-10 7-16 14-16M86 84c-2-10-7-16-14-16',
  },

  // 22.
  'ο χήρος / η χήρα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #020617 0%, #334155 56%, #64748b 100%)',
    glow: 'rgba(148, 163, 184, 0.34)',
    primaryEmoji: '1f9d3',
    secondaryEmoji: '1f5a4',
    accentEmoji: '1f4f7',
    caption: 'Рядом осталась фотография, а в сердце — целая жизнь воспоминаний.',
    svgMotif:
      'M22 12h56v60H22zM50 26a9 9 0 1 0 0 18 9 9 0 0 0 0-18M32 62c2-10 9-16 18-16s16 6 18 16M50 82v8M38 90h24M14 20h8M78 20h8',
  },

  // 23.
  'κερδίζω την αγάπη κάποιου': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #881337 0%, #e11d48 50%, #fb923c 100%)',
    glow: 'rgba(251, 113, 133, 0.5)',
    primaryEmoji: '1f49d',
    secondaryEmoji: '1f91d',
    accentEmoji: '2728',
    caption: 'Маленькие знаки внимания постепенно открывают дверь к сердцу.',
    svgMotif:
      'M18 76c12-22 24-28 34-18s20 4 30-16M50 26c-8-12-24-4-20 8 3 9 20 20 20 20s17-11 20-20c4-12-12-20-20-8M14 84h16M76 12l4 8 8 4-8 4-4 8-4-8-8-4 8-4z',
  },

  // 24.
  'το κουτσομπολιό / κουτσομπολεύω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #451a03 0%, #b45309 46%, #6d28d9 100%)',
    glow: 'rgba(217, 180, 254, 0.42)',
    primaryEmoji: '1f4ac',
    secondaryEmoji: '1f442',
    accentEmoji: '2615',
    caption: 'Шёпот за чашкой кофе обрастает всё новыми подробностями.',
    svgMotif:
      'M12 16h48v30H34L22 58V46H12zM52 52h36v24H76l-8 10V76H52zM24 30h24M24 38h16M62 64h16M70 12c4 4 4 8 0 12M80 10c4 4 4 8 0 12',
  },

  // 25.
  'τα ήθη και τα έθιμα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 48%, #fbbf24 100%)',
    glow: 'rgba(251, 191, 36, 0.44)',
    primaryEmoji: '1f3fa',
    secondaryEmoji: '1f389',
    accentEmoji: '1f4dc',
    caption: 'Из поколения в поколение повторяются знакомые жесты и праздники.',
    svgMotif:
      'M50 16a34 34 0 1 0 34 34M50 16l-8 10M50 16l10 8M50 30a20 20 0 1 1-20 20M50 30l8 8M30 50l-8-8M42 50h16M50 42v16M42 82h16',
  },

  // 26.
  'έρχομαι στον κόσμο / γεννιέμαι': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #9d174d 0%, #f472b6 46%, #7dd3fc 100%)',
    glow: 'rgba(249, 168, 212, 0.48)',
    primaryEmoji: '1f476',
    secondaryEmoji: '1f30d',
    accentEmoji: '1f388',
    caption: 'Первый крик, первый вдох — и начинается новая история.',
    svgMotif:
      'M50 50a16 16 0 1 0 0 32 16 16 0 0 0 0-32M50 10v22M28 20l12 16M72 20 60 36M12 50h22M66 50h22M20 90h60M42 66h2M56 66h2M44 74c4 3 8 3 12 0',
  },

  // Глава 2. Дом, стройка, аренда, переезд, ремонт и быт.

  // 27.
  'η μονοκατοικία ≠ η πολυκατοικία': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #065f46 0%, #14b8a6 46%, #1e1b4b 54%, #4f46e5 100%)',
    glow: 'rgba(94, 234, 212, 0.4)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f3e2',
    accentEmoji: '1f3d8',
    caption: 'Слева — свой двор и тишина, справа — соседи над и под.',
    svgMotif:
      'M8 84h38M12 84V44l16-14 16 14v40M22 84V62h12v22M54 84h38V18H54zM62 28h8M78 28h8M62 42h8M78 42h8M62 56h8M78 56h8M68 84V68h10v16',
  },

  // 28.
  'το διώροφο (διώροφος, -η, -ο)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #f59e0b 100%)',
    glow: 'rgba(147, 197, 253, 0.44)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f3e2',
    accentEmoji: '2b06',
    caption: 'Лестница связывает дневную жизнь внизу с тихими комнатами наверху.',
    svgMotif:
      'M12 86h76M18 86V34l32-22 32 22v52M18 52h64M34 86V66h20v20M62 40h12M30 40h12M66 66v12M62 72h16M54 66l8-6M54 74l8-6',
  },

  // 29.
  'το ρετιρέ': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #172554 0%, #4338ca 48%, #fb7185 100%)',
    glow: 'rgba(165, 180, 252, 0.46)',
    primaryEmoji: '1f3d9',
    secondaryEmoji: '1f305',
    accentEmoji: '1f319',
    caption: 'Над последним этажом прячется маленькая комната с большим небом.',
    svgMotif:
      'M8 84h84M16 84V38h68v46M24 50h12M44 50h12M64 50h12M24 64h12M64 64h12M42 38V20h28v18M42 20l14-10 14 10M52 84V68h12v16M78 8a8 8 0 1 0 8 12',
  },

  // 30.
  'χτίζω / το χτίσιμο': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #facc15 100%)',
    glow: 'rgba(251, 191, 36, 0.46)',
    primaryEmoji: '1f3d7',
    secondaryEmoji: '1f528',
    accentEmoji: '1f9f1',
    caption: 'От чертежа и первого ряда блоков — к стенам и крыше.',
    svgMotif:
      'M12 84h76M20 84V44h60v40M20 44l30-24 30 24M28 56h16M56 56h16M28 68h16M56 68h16M14 30h28M14 30V14M14 14h44M58 14v18M52 32h12',
  },

  // 31.
  'γκρεμίζω / το γκρέμισμα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 48%, #475569 100%)',
    glow: 'rgba(248, 113, 113, 0.46)',
    primaryEmoji: '1f4a5',
    secondaryEmoji: '1f9f1',
    accentEmoji: '26a0',
    caption: 'Пыльный удар — и на месте старой стены открывается пустое пространство.',
    svgMotif:
      'M12 84h34M18 84V38h28v46M18 50h28M18 64h28M54 22l10 12 14-8-2 16 16 4-14 10 8 14-18-2-6 16-8-16-14 4 6-18-12-8 16-6zM8 92h84',
  },

  // 32.
  'τα οικοδομικά υλικά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #422006 0%, #92400e 52%, #d6b28c 100%)',
    glow: 'rgba(217, 164, 110, 0.42)',
    primaryEmoji: '1f9f1',
    secondaryEmoji: '1f4e6',
    accentEmoji: '1f528',
    caption: 'Здесь начинается дом: мешки, доски, песок и аккуратные штабеля.',
    svgMotif:
      'M14 74h24v14H14zM42 74h24v14H42zM70 74h16v14H70zM22 56h24v14H22zM50 56h24v14H50zM30 38h24v14H30zM58 38h20v14H58zM18 22h64M26 14h48',
  },

  // 33.
  'το τούβλο και ο πηλός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #fb923c 100%)',
    glow: 'rgba(251, 146, 60, 0.46)',
    primaryEmoji: '1f9f1',
    secondaryEmoji: '1f3fa',
    accentEmoji: '1f525',
    caption: 'Земля проходит через форму и огонь, чтобы стать частью стены.',
    svgMotif:
      'M14 70c0-18 10-30 24-30s24 12 24 30zM24 40c0-10 6-18 14-18s14 8 14 18M66 42h24v16H66zM58 62h24v16H58zM76 62h16v16H76zM52 50h8M52 70h4M30 82h20',
  },

  // 34.
  'η στέγη (η σκεπή)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0369a1 52%, #7dd3fc 100%)',
    glow: 'rgba(125, 211, 252, 0.42)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f327',
    accentEmoji: '2600',
    caption: 'Сверху — надёжная линия защиты от дождя, ветра и палящего солнца.',
    svgMotif:
      'M10 48 50 16l40 32M20 42v42h60V42M38 84V62h24v22M24 8l-4 8M40 4l-4 8M60 4l-4 8M76 8l-4 8M14 56h6M80 56h6',
  },

  // 35.
  'αντέχω στους σεισμούς': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #020617 0%, #155e75 52%, #14b8a6 100%)',
    glow: 'rgba(45, 212, 191, 0.42)',
    primaryEmoji: '1f3e2',
    secondaryEmoji: '1f4a5',
    accentEmoji: '1f6e1',
    caption: 'Земля дрожит, а продуманный каркас сохраняет дом целым.',
    svgMotif:
      'M50 10 84 24v22c0 22-14 36-34 44-20-8-34-22-34-44V24zM28 54l22-18 22 18M34 50v24h32V50M12 30l8 4M10 50h10M80 12l-6 8M42 62h16',
  },

  // 36.
  'καλύπτω τις ανάγκες': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 48%, #22d3ee 100%)',
    glow: 'rgba(110, 231, 183, 0.42)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '2705',
    accentEmoji: '1f4a1',
    caption: 'У каждого жильца находится своё место, свет и необходимый комфорт.',
    svgMotif:
      'M12 46 42 22l30 24M20 42v40h44V42M34 82V62h16v20M58 30h30v52H58M64 42l4 4 8-10M64 58l4 4 8-10M64 74l4 4 8-10M12 90h76',
  },

  // 37.
  'αν δεν παινέψεις το σπίτι σου...': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #78350f 0%, #d97706 44%, #991b1b 100%)',
    glow: 'rgba(251, 146, 60, 0.44)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f4ac',
    accentEmoji: '26a0',
    caption: 'Стоит перестать ценить свой кров — и он будто грозит обрушиться.',
    svgMotif:
      'M10 48 50 16l40 32M20 42v42h60V42M50 42l-8 12 12 8-10 22M62 8h28v20H76l-8 8V28h-6zM70 16h12M12 90h76',
  },

  // 38.
  'το ενοίκιο / νοικιάζω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 46%, #3730a3 100%)',
    glow: 'rgba(52, 211, 153, 0.42)',
    primaryEmoji: '1f511',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f4c5',
    caption: 'Ключи переходят из рук в руки, а в календаре появляется ежемесячная отметка.',
    svgMotif:
      'M34 34a16 16 0 1 0 0 32 16 16 0 0 0 0-32M50 50h38M76 50v12M86 50v8M54 12h36v26H54zM62 12v8M82 12v8M54 24h36M60 78h30M60 86h22M28 50h12',
  },

  // 39.
  'η μετακόμιση / μετακομίζω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #9a3412 0%, #f97316 46%, #0369a1 100%)',
    glow: 'rgba(253, 186, 116, 0.44)',
    primaryEmoji: '1f4e6',
    secondaryEmoji: '1f69a',
    accentEmoji: '1f511',
    caption: 'Коробки подписаны, дверь старой квартиры закрыта — впереди новый адрес.',
    svgMotif:
      'M8 26h34v34H8zM8 38h34M25 26v34M48 44h28v26H48zM76 52h10l8 10v8H76zM56 70a8 8 0 1 0 0 16 8 8 0 0 0 0-16M84 70a8 8 0 1 0 0 16 8 8 0 0 0 0-16M14 76h30',
  },

  // 40.
  'η ανακαίνιση / ανακαινίζω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 46%, #06b6d4 100%)',
    glow: 'rgba(196, 181, 253, 0.46)',
    primaryEmoji: '1f6e0',
    secondaryEmoji: '1f3a8',
    accentEmoji: '2728',
    caption: 'Старая отделка уходит, и знакомые стены получают вторую жизнь.',
    svgMotif:
      'M14 78 50 42l36 36M24 68v18h52V68M18 18h44v22H18zM62 24h16v10H62M78 29v24M70 54h16M74 62l4 4 8-10M34 74h12',
  },

  // 41.
  'βάζω ένα χέρι (βοηθάω)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 46%, #0f766e 100%)',
    glow: 'rgba(252, 211, 77, 0.44)',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f4e6',
    accentEmoji: '1f4aa',
    caption: 'Один тащит коробку, другой подхватывает — и работа спорится.',
    svgMotif:
      'M12 58c12-2 20 2 28 10l10 10c4 4 10 4 14 0l24-24M12 58l12-12c6-6 14-6 20 0l8 8M40 68l-8 8c-4 4-4 10 0 14M58 18h30v26H58zM58 26h30M73 18v26',
  },

  // 42.
  'έχω πολύ τρέξιμο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 44%, #4338ca 100%)',
    glow: 'rgba(248, 113, 113, 0.46)',
    primaryEmoji: '1f3c3',
    secondaryEmoji: '1f4cb',
    accentEmoji: '23f1',
    caption: 'Телефон, документы, магазин, встреча — день не помещается в список дел.',
    svgMotif:
      'M18 18h36v64H18zM26 30h20M26 42h20M26 54h12M66 20c20 0 20 24 0 24s-20 24 0 24 20 20 4 20M62 12l8 8-8 8M62 80l8 8-8 8M26 68h16',
  },

  // 43.
  'δεν με βολεύει': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #64748b 50%, #9f1239 100%)',
    glow: 'rgba(203, 213, 225, 0.34)',
    primaryEmoji: '1f6ab',
    secondaryEmoji: '1f4c5',
    accentEmoji: '1f914',
    caption: 'Вроде всё неплохо, но график, место или условия упорно не складываются.',
    svgMotif:
      'M18 18h64v66H18zM18 34h64M34 10v16M66 10v16M30 46h12M58 46h12M30 60h12M58 60h12M38 88l24-24M38 64l24 24M12 92h76',
  },

  // 44.
  'δεν μας συμφέρει': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 46%, #334155 100%)',
    glow: 'rgba(248, 113, 113, 0.42)',
    primaryEmoji: '1f4b8',
    secondaryEmoji: '1f4c9',
    accentEmoji: '1f6ab',
    caption: 'Считаем расходы дважды: цифры на калькуляторе говорят «стоп».',
    svgMotif:
      'M14 16v68h74M22 66l18-18 14 10 28-32M68 26h14v14M24 26h18M24 36h12M58 74h20M58 82h20M18 92h70',
  },

  // 45.
  'η βλάβη (οι βλάβες)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #713f12 0%, #eab308 42%, #b91c1c 100%)',
    glow: 'rgba(250, 204, 21, 0.46)',
    primaryEmoji: '26a0',
    secondaryEmoji: '1f527',
    accentEmoji: '1f50c',
    caption: 'Внезапная тишина прибора и мигающий индикатор требуют мастера.',
    svgMotif:
      'M50 12 92 84H8zM50 34v24M50 70v2M20 20l12 12M80 20 68 32M18 88l16-16M82 88 66 72M42 92h16',
  },

  // 46.
  'ο προηγούμενος ιδιοκτήτης': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #3f2d20 0%, #78543a 48%, #312e81 100%)',
    glow: 'rgba(196, 181, 253, 0.36)',
    primaryEmoji: '1f4dc',
    secondaryEmoji: '1f511',
    accentEmoji: '1f464',
    caption: 'В документах осталась подпись человека, который открывал эту дверь до нас.',
    svgMotif:
      'M18 10h48l16 16v64H18zM66 10v18h16M30 44h36M30 56h28M30 68h20M66 58a10 10 0 1 0 0 20 10 10 0 0 0 0-20M76 68h16M86 68v8M30 80h18',
  },

  // 47.
  'η αυτόνομη θέρμανση': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 48%, #dc2626 100%)',
    glow: 'rgba(251, 146, 60, 0.48)',
    primaryEmoji: '1f321',
    secondaryEmoji: '1f3e0',
    accentEmoji: '1f525',
    caption: 'Свой котёл, свой регулятор — тепло включается по расписанию квартиры.',
    svgMotif:
      'M10 48 50 16l40 32M20 42v42h60V42M50 34a12 12 0 0 0-6 22v14a6 6 0 1 0 12 0V56a12 12 0 0 0-6-22M50 58v18M68 58h8M68 68h8M12 90h76',
  },

  // 48.
  'τα κοινόχρηστα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 48%, #b45309 100%)',
    glow: 'rgba(147, 197, 253, 0.4)',
    primaryEmoji: '1f9fe',
    secondaryEmoji: '1f3e2',
    accentEmoji: '1f4b0',
    caption: 'Один конверт на всех: лифт, свет в подъезде и уборка общих мест.',
    svgMotif:
      'M14 12h44v76l-7-5-7 5-7-5-7 5-8-5-8 5zM24 28h24M24 40h24M24 52h16M24 64h20M66 26h24v58H66zM72 38h6M82 38h4M72 50h6M82 50h4M72 62h6M82 62h4',
  },

  // 49.
  'η διακόσμηση / τα έπιπλα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #701a75 0%, #c026d3 48%, #fb7185 100%)',
    glow: 'rgba(240, 171, 252, 0.46)',
    primaryEmoji: '1f6cb',
    secondaryEmoji: '1f3a8',
    accentEmoji: '1f4a1',
    caption: 'Цвет стен, мягкий диван и пара деталей превращают метры в интерьер.',
    svgMotif:
      'M18 48a10 10 0 0 1 20 0v10h24V48a10 10 0 0 1 20 0v26H18zM14 74h72M24 74v12M76 74v12M50 14v22M38 14h24l-6 14H44zM42 58h16M12 92h76',
  },

  // 50.
  'ευρύχωρος και φωτεινός': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #22d3ee 46%, #fde047 100%)',
    glow: 'rgba(254, 240, 138, 0.5)',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '2600',
    accentEmoji: '1f6cb',
    caption: 'Свет из больших окон свободно разливается по комнате без тесноты.',
    svgMotif:
      'M12 14h76v72H12zM50 14v72M12 50h76M50 30a8 8 0 1 0 0 16 8 8 0 0 0 0-16M50 20v4M50 52v4M36 38h4M60 38h4M40 28l4 4M60 28l-4 4M24 72h20M60 72h16',
  },

  // 51.
  'ο υδραυλικός και ο ηλεκτρολόγος': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #075985 0%, #0ea5e9 46%, #713f12 54%, #facc15 100%)',
    glow: 'rgba(125, 211, 252, 0.42)',
    primaryEmoji: '1f527',
    secondaryEmoji: '1f50c',
    accentEmoji: '1f4a7',
    caption: 'Один возвращает воду в трубы, другой — свет в провода.',
    svgMotif:
      'M50 10v80M14 24h24v34H14zM20 58v20M32 58v20M20 32h12M62 22l24 24M86 22 62 46M66 58c8-8 16-8 20 0l-12 12c-4 4-4 10 0 14M62 84h26M20 88h12',
  },

  // 52.
  'ο θερμοσίφωνας (ηλιακός)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #a16207 0%, #facc15 44%, #0891b2 100%)',
    glow: 'rgba(253, 224, 71, 0.48)',
    primaryEmoji: '2600',
    secondaryEmoji: '1f6bf',
    accentEmoji: '1f4a7',
    caption: 'Солнце греет воду на крыше, пока счётчик почти отдыхает.',
    svgMotif:
      'M50 12a12 12 0 1 0 0 24 12 12 0 0 0 0-24M50 2v4M50 42v4M28 24h4M68 24h4M34 8l4 4M66 8l-4 4M20 58h60v26H20zM28 58V46h44v12M34 84v8M66 84v8M38 66c4-6 8 6 12 0s8 6 12 0',
  },

  // 53.
  'το πλυντήριο ρούχων / πιάτων': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #155e75 0%, #06b6d4 46%, #4c1d95 54%, #8b5cf6 100%)',
    glow: 'rgba(103, 232, 249, 0.42)',
    primaryEmoji: '1f455',
    secondaryEmoji: '1f37d',
    accentEmoji: '1f4a7',
    caption: 'Два круга заботы: в одном пенятся вещи, в другом сверкают тарелки.',
    svgMotif:
      'M50 10v80M10 18h32v64H10zM26 34a16 16 0 1 0 0 32 16 16 0 0 0 0-32M18 26h4M32 26h4M70 28a22 22 0 1 0 0 44 22 22 0 0 0 0-44M70 38a12 12 0 1 0 0 24 12 12 0 0 0 0-24M58 84h24',
  },

  // 54.
  'το ψυγείο και η κατάψυξη': {
    layout: 'split',
    gradient: 'linear-gradient(115deg, #164e63 0%, #22d3ee 46%, #172554 54%, #6366f1 100%)',
    glow: 'rgba(165, 243, 252, 0.46)',
    primaryEmoji: '1f9ca',
    secondaryEmoji: '1f34e',
    accentEmoji: '2744',
    caption: 'На верхней полке прохлада, ниже — снежный запас надолго.',
    svgMotif:
      'M24 8h52v84H24zM24 46h52M34 20v14M34 56v16M50 56v24M38 68h24M42 60l16 16M58 60 42 76M64 20v14M18 92h64',
  },
};
