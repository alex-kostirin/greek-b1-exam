import type { WordVisualScene } from '../../types/illustration';

/**
 * Визуальные сцены для главы 3: время, досуг, спорт, хобби и искусство.
 *
 * SVG-мотивы представляют собой декоративные фрагменты, рассчитанные
 * на viewBox="0 0 120 80". Цвет наследуется через currentColor.
 */
export const BATCH7_SCENES: Record<string, WordVisualScene> = {
  'ο ελεύθερος χρόνος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    glow: '0 0 36px rgba(113, 178, 128, 0.45)',
    primaryEmoji: '1f3d6',
    secondaryEmoji: '1f4d6',
    accentEmoji: '2600',
    caption: 'Когда будильник молчит, а планы выбираешь сам',
    svgMotif:
      '<circle cx="94" cy="20" r="9" fill="currentColor" opacity=".28"/><path d="M8 62c20-24 38-24 58 0s32 18 46 0M20 70h80" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'η εφηβεία / ο έφηβος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #5f2c82 0%, #49a09d 100%)',
    glow: '0 0 36px rgba(150, 111, 214, 0.42)',
    primaryEmoji: '1f9d2',
    secondaryEmoji: '1f680',
    accentEmoji: '2728',
    caption: 'Первые права, поздние прогулки и бесконечное «я уже взрослый»',
    svgMotif:
      '<path d="M16 66h24V52h24V38h24V24h20M88 16h20v20M28 34l4-8 4 8 8 4-8 4-4 8-4-8-8-4Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'η δραστηριότητα (οι δραστηριότητες)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    glow: '0 0 36px rgba(255, 112, 98, 0.42)',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '1f3c3',
    accentEmoji: '1f3a8',
    caption: 'В календаре не остаётся пустых клеток — от курсов до вечерней пробежки',
    svgMotif:
      '<rect x="18" y="18" width="84" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 32h84M36 12v12M84 12v12M34 44h12m12 0h12m12 0h8M34 56h12m12 0h12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'αξιοποιώ / η αξιοποίηση': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    glow: '0 0 36px rgba(56, 239, 125, 0.36)',
    primaryEmoji: '1f527',
    secondaryEmoji: '23f3',
    accentEmoji: '1f4a1',
    caption: 'Из пустого промежутка между делами вдруг получается маленький проект',
    svgMotif:
      '<path d="M18 14h32M18 66h32M24 14c0 16 20 20 20 26S24 50 24 66M44 14c0 16-20 20-20 26s20 10 20 26M72 64V38m0 12c-14 0-20-8-20-18 13 0 20 7 20 18Zm0-4c14 0 22-8 22-20-14 0-22 8-22 20Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'σκοτώνω την ώρα μου': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    glow: '0 0 36px rgba(130, 140, 155, 0.32)',
    primaryEmoji: '1f4f1',
    secondaryEmoji: '231b',
    accentEmoji: '1f634',
    caption: 'Листаешь ленту, а за окном незаметно стемнело',
    svgMotif:
      '<rect x="18" y="12" width="38" height="56" rx="7" fill="none" stroke="currentColor" stroke-width="3"/><path d="M30 20h14M34 60h6M70 28h34M70 58h34M76 28c0 10 22 12 22 15S76 50 76 58M98 28c0 10-22 12-22 15s22 7 22 15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'ωφέλιμος ≠ ανώφελος': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
    glow: '0 0 36px rgba(150, 201, 61, 0.38)',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '1f5d1',
    accentEmoji: '2696',
    caption: 'Одно занятие оставляет навык, другое — только усталые глаза',
    svgMotif:
      '<path d="M60 10v60M16 52l12 12 22-34M76 28l24 24m0-24L76 52" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="40" r="3" fill="currentColor" opacity=".45"/>',
  },
  'ξεκούραστος ≠ κουραστικός': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    glow: '0 0 36px rgba(102, 166, 255, 0.42)',
    primaryEmoji: '1f60c',
    secondaryEmoji: '1f62b',
    accentEmoji: '26a1',
    caption: 'После прогулки легко дышится; после бесконечных поручений хочется тишины',
    svgMotif:
      '<path d="M60 10v60M12 50c10-26 24-26 38 0M18 58c8-10 18-10 26 0M72 52l8-18 8 18 8-28 12 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'ψυχαγωγώ / η ψυχαγωγία / ψυχαγωγικός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #7f7fd5 0%, #91eae4 100%)',
    glow: '0 0 36px rgba(145, 234, 228, 0.42)',
    primaryEmoji: '1f3aa',
    secondaryEmoji: '1f3ae',
    accentEmoji: '1f3b6',
    caption: 'Лёгкий вечер, после которого мысли становятся светлее',
    svgMotif:
      '<path d="M12 58c20-36 34 18 52-16s30-10 44-26M88 12l4 8 8 4-8 4-4 8-4-8-8-4 8-4ZM28 18v14m-7-7h14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'διασκεδάζω / η διασκέδαση / διασκεδαστικός': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    glow: '0 0 36px rgba(255, 210, 0, 0.42)',
    primaryEmoji: '1f389',
    secondaryEmoji: '1f602',
    accentEmoji: '1f3b5',
    caption: 'Смех друзей слышен ещё до того, как открылась дверь',
    svgMotif:
      '<path d="M24 62L48 26 60 64ZM52 22c12-10 22-10 34-2M72 12l4-8M94 28l12-4M84 46l10 10M24 22l-8-8M18 42H6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="66" cy="60" r="4" fill="currentColor" opacity=".45"/><circle cx="102" cy="58" r="3" fill="currentColor" opacity=".45"/>',
  },
  'αθλούμαι / το άθλημα / αθλητικός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    glow: '0 0 36px rgba(252, 112, 26, 0.4)',
    primaryEmoji: '1f3c3',
    secondaryEmoji: '1f3c5',
    accentEmoji: '1f4aa',
    caption: 'Кроссовки у двери, пульс быстрее, а настроение выше',
    svgMotif:
      '<path d="M8 44h24l8-18 12 36 10-24 8 12h42M20 68h80M92 16l4 8 8 4-8 4-4 8-4-8-8-4 8-4Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'κάνω καιρό να...': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)',
    glow: '0 0 36px rgba(215, 221, 232, 0.36)',
    primaryEmoji: '1f5d3',
    secondaryEmoji: '1f342',
    accentEmoji: '23f3',
    caption: 'С прошлой встречи сменились сезоны, а сообщение так и осталось черновиком',
    svgMotif:
      '<rect x="16" y="18" width="54" height="46" rx="6" fill="none" stroke="currentColor" stroke-width="3"/><path d="M16 32h54M30 12v12M56 12v12M82 62c20-10 20-28 4-38-12 16-12 28-4 38Zm0 0 12-24M28 44h28M28 54h18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'γοητεύω / η γοητεία / γοητευτικός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
    glow: '0 0 36px rgba(142, 45, 226, 0.46)',
    primaryEmoji: '2728',
    secondaryEmoji: '1f3ad',
    accentEmoji: '1f440',
    caption: 'Один взгляд на сцену — и зал забывает проверить телефон',
    svgMotif:
      '<path d="M60 10l6 16 16 6-16 6-6 16-6-16-16-6 16-6ZM22 48l4 10 10 4-10 4-4 10-4-10-10-4 10-4ZM98 42l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
  },
  'διακρίνω το χρήσιμο από το καταστροφικό': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #396afc 0%, #2948ff 100%)',
    glow: '0 0 36px rgba(57, 106, 252, 0.4)',
    primaryEmoji: '1f9ed',
    secondaryEmoji: '1f331',
    accentEmoji: '1f525',
    caption: 'Перед каждым «да» — секунда паузы: это поможет или разрушит?',
    svgMotif:
      '<path d="M60 40H18m0 0 14-14M18 40l14 14M60 40h42m0 0-14-14m14 14L88 54M22 66V54m0 4c-10 0-14-6-14-12 9 0 14 5 14 12Zm0-4c10 0 14-6 14-14-9 0-14 6-14 14ZM94 66c-10-8-8-18 2-28 0 8 12 12 6 22-2 4-5 6-8 6Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'κυνηγώ τα προσόντα / τα πτυχία': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)',
    glow: '0 0 36px rgba(201, 75, 75, 0.4)',
    primaryEmoji: '1f3af',
    secondaryEmoji: '1f4dc',
    accentEmoji: '1f3c3',
    caption: 'Полка с грамотами растёт быстрее, чем список настоящих увлечений',
    svgMotif:
      '<circle cx="82" cy="38" r="26" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="82" cy="38" r="14" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="82" cy="38" r="4" fill="currentColor"/><path d="M14 60l54-18M12 22h34v26H12zM20 30h18M20 38h12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'προβληματίζω / ο προβληματισμός': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 55%, #ffaf7b 100%)',
    glow: '0 0 36px rgba(215, 109, 119, 0.4)',
    primaryEmoji: '1f914',
    secondaryEmoji: '2753',
    accentEmoji: '1f4ad',
    caption: 'Вопрос без ответа рисует всё новые круги в блокноте',
    svgMotif:
      '<path d="M48 26c0-12 22-14 26-2 4 14-14 14-14 26M60 62h.1M22 40c0-20 18-32 38-32s38 12 38 32-18 32-38 32c-8 0-14-2-20-4l-14 6 6-14c-6-5-10-12-10-20Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'απειλώ / η απειλή / απειλητικός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
    glow: '0 0 36px rgba(44, 83, 100, 0.5)',
    primaryEmoji: '26c8',
    secondaryEmoji: '26a0',
    accentEmoji: '1f5e1',
    caption: 'Тёмная туча над планами, от которой хочется спрятаться',
    svgMotif:
      '<path d="M26 46h60a16 16 0 0 0 2-32 26 26 0 0 0-48-4 18 18 0 0 0-14 36ZM58 42L46 62h14l-4 16 22-26H64l8-10M12 66h20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'το άγχος και η αγωνία': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
    glow: '0 0 36px rgba(66, 134, 244, 0.4)',
    primaryEmoji: '1f630',
    secondaryEmoji: '23f1',
    accentEmoji: '1f4c9',
    caption: 'Перед объявлением результата сердце стучит громче таймера',
    svgMotif:
      '<circle cx="82" cy="42" r="24" fill="none" stroke="currentColor" stroke-width="3"/><path d="M82 42V26M82 42l12 8M72 10h20M82 10v8M8 44h18l6-14 10 28 8-22 8 12h8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'το χόμπι (τα χόμπι)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 100%)',
    glow: '0 0 36px rgba(208, 78, 214, 0.4)',
    primaryEmoji: '1f9f6',
    secondaryEmoji: '1f3a8',
    accentEmoji: '1f3b8',
    caption: 'Полка, где у каждой безделушки есть история выходного дня',
    svgMotif:
      '<path d="M12 64h96M20 64V34h20v30M50 64V24h28v40M84 64V42h20v22" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="30" cy="24" r="10" fill="none" stroke="currentColor" stroke-width="3"/><path d="M56 34h16M56 44h16M90 30l4-8 4 8 8 4-8 4-4 8-4-8-8-4Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
  },
  'η χειροτεχνία': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #eacda3 0%, #d6ae7b 100%)',
    glow: '0 0 36px rgba(214, 174, 123, 0.44)',
    primaryEmoji: '1f9f6',
    secondaryEmoji: '2702',
    accentEmoji: '1f9f5',
    caption: 'Из бумаги, нити и терпения появляется вещь с характером',
    svgMotif:
      '<path d="M20 18h48l20 20-20 28H20ZM68 18v20h20M26 58l24-24M32 66l30-30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="60" r="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="38" cy="66" r="8" fill="none" stroke="currentColor" stroke-width="3"/>',
  },
  'το κέντημα και το ράψιμο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #dd5e89 0%, #f7bb97 100%)',
    glow: '0 0 36px rgba(221, 94, 137, 0.4)',
    primaryEmoji: '1f9f5',
    secondaryEmoji: '1faa1',
    accentEmoji: '1f338',
    caption: 'Петелька за петелькой — и на ткани расцветает узор',
    svgMotif:
      '<path d="M14 14h92v52H14zM26 14v52M42 14v52M58 14v52M74 14v52M90 14v52M14 30h92M14 48h92" fill="none" stroke="currentColor" stroke-width="2" opacity=".35"/><path d="M60 54V34m0 8c-12 0-18-6-18-14 11 0 18 6 18 14Zm0-4c12 0 18-6 18-16-11 0-18 7-18 16ZM22 60c18-16 34-12 46-2s24 10 34-2" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'η γλυπτική / ο γλύπτης': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)',
    glow: '0 0 36px rgba(96, 108, 136, 0.46)',
    primaryEmoji: '1f5ff',
    secondaryEmoji: '1f528',
    accentEmoji: '1f3db',
    caption: 'В грубой глине постепенно проступает чей-то профиль',
    svgMotif:
      '<path d="M34 68h52M42 68V58c0-8 8-10 8-18 0-6-4-8-4-16 0-10 8-16 18-16 12 0 20 8 20 20 0 6-4 10-10 12l4 8-8 4v16M14 18l22 22M10 12l12-4 8 8-4 12M18 62l12-12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'φτιάχνω κοσμήματα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #b993d6 0%, #8ca6db 100%)',
    glow: '0 0 36px rgba(185, 147, 214, 0.44)',
    primaryEmoji: '1f48e',
    secondaryEmoji: '1f4ff',
    accentEmoji: '2728',
    caption: 'Бусины выстроились в орбиту вокруг серебряной застёжки',
    svgMotif:
      '<ellipse cx="60" cy="42" rx="42" ry="24" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/><path d="M60 24l12 12-12 20-12-20ZM46 36h28M52 48l8 8 8-8M96 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
  },
  'η ζωγραφική / ο ζωγράφος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
    glow: '0 0 36px rgba(221, 36, 118, 0.42)',
    primaryEmoji: '1f3a8',
    secondaryEmoji: '1f58c',
    accentEmoji: '1f5bc',
    caption: 'Белый лист ждёт первый смелый мазок ультрамарином',
    svgMotif:
      '<rect x="14" y="12" width="72" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 54l18-20 14 12 12-18 16 26M98 66L76 28M94 70l8-4M68 22h.1" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="64" cy="24" r="5" fill="currentColor" opacity=".35"/>',
  },
  'μαζεύω γραμματόσημα / νομίσματα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1d976c 0%, #93f9b9 100%)',
    glow: '0 0 36px rgba(147, 249, 185, 0.4)',
    primaryEmoji: '1f4ef',
    secondaryEmoji: '1fa99',
    accentEmoji: '1f5fa',
    caption: 'Маленькие квадраты и кругляши хранят целый атлас путешествий',
    svgMotif:
      '<path d="M12 16h38v30H12zM18 22h26v18H18zM66 12h42v54H66zM72 22h30M72 32h30M72 42h18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="88" cy="54" r="8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M28 60h8M32 56v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  },
  'παίζω σκάκι': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
    glow: '0 0 36px rgba(90, 120, 160, 0.42)',
    primaryEmoji: '265f',
    secondaryEmoji: '1f9e0',
    accentEmoji: '23f1',
    caption: 'Тишина за столом, а на шестидесяти четырёх клетках идёт битва',
    svgMotif:
      '<path d="M12 58h96M22 58l6-12h64l6 12M50 46h20M54 46c0-8 12-10 12-20 0-6-4-10-6-10s-6 4-6 10c0 10 12 12 12 20M42 58h36M14 14h20v20H14zM14 34h20M24 14v20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'το ομαδικό άθλημα ≠ το ατομικό άθλημα': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
    glow: '0 0 36px rgba(109, 213, 237, 0.42)',
    primaryEmoji: '1f3c0',
    secondaryEmoji: '1f3be',
    accentEmoji: '1f91d',
    caption: 'Здесь победа делится на всех, там — зависит от одного дыхания',
    svgMotif:
      '<path d="M60 10v60" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="22" cy="30" r="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="44" cy="22" r="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="42" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M28 28l10-4M26 36l10 10M82 64l20-42M92 28c10 0 16 8 16 16s-6 14-16 14-16-6-16-14 6-16 16-16Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'ο στίβος και η κολύμβηση (το κολύμπι)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #0083b0 0%, #00b4db 100%)',
    glow: '0 0 36px rgba(0, 180, 219, 0.42)',
    primaryEmoji: '1f3c3',
    secondaryEmoji: '1f3ca',
    accentEmoji: '1f3c5',
    caption: 'Дорожки: одни размечены на стадионе, другие дрожат голубыми бликами',
    svgMotif:
      '<path d="M8 20c22-12 34-12 52 0M8 34c22-12 34-12 52 0M8 48c22-12 34-12 52 0M68 26c8-8 16-8 24 0s16 8 24 0M68 42c8-8 16-8 24 0s16 8 24 0M68 58c8-8 16-8 24 0s16 8 24 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="92" cy="16" r="6" fill="currentColor" opacity=".35"/>',
  },
  'το μουσικό όργανο / παίζω μουσικό όργανο': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
    glow: '0 0 36px rgba(126, 112, 210, 0.42)',
    primaryEmoji: '1f3b8',
    secondaryEmoji: '1f3b9',
    accentEmoji: '1f3b5',
    caption: 'Пальцы находят знакомые лады, и комната меняет акустику',
    svgMotif:
      '<path d="M12 20h96M12 32h96M12 44h96M12 56h96M34 14v38c0 10-18 12-18 2s18-12 18-2M82 26v30c0 10-18 12-18 2s18-12 18-2M82 26l20-6v28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'πηγαίνω σε συναυλίες': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
    glow: '0 0 36px rgba(249, 83, 198, 0.44)',
    primaryEmoji: '1f3a4',
    secondaryEmoji: '1f3ab',
    accentEmoji: '1f50a',
    caption: 'Свет гаснет, толпа замирает — и первый аккорд накрывает волной',
    svgMotif:
      '<path d="M28 8l18 44M92 8L74 52M14 12l26 38M106 12L80 50M52 50v18M44 68h16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="66" r="7" fill="currentColor" opacity=".4"/><circle cx="88" cy="66" r="7" fill="currentColor" opacity=".4"/><circle cx="60" cy="38" r="10" fill="none" stroke="currentColor" stroke-width="3"/>',
  },
  'ο σύγχρονος χορός / το μπαλέτο': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    glow: '0 0 36px rgba(255, 110, 127, 0.38)',
    primaryEmoji: '1f483',
    secondaryEmoji: '1fa70',
    accentEmoji: '1f3b6',
    caption: 'Один ритм ломает геометрию, другой выстраивает её до совершенства',
    svgMotif:
      '<path d="M60 8v64M10 58l14-28 12 20 16-32M72 58c12-2 20-12 20-26 12 12 16 24 8 34M74 66h32M80 18c6-8 14-8 20 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="36" cy="14" r="5" fill="currentColor" opacity=".35"/><circle cx="90" cy="12" r="5" fill="currentColor" opacity=".35"/>',
  },
  'ο καλλιτέχνης (οι καλλιτέχνες)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #8e0e00 0%, #1f1c18 100%)',
    glow: '0 0 36px rgba(190, 80, 60, 0.4)',
    primaryEmoji: '1f3ad',
    secondaryEmoji: '1f3a8',
    accentEmoji: '1f3a4',
    caption: 'За кулисами — репетиции, на афише — одно имя',
    svgMotif:
      '<path d="M20 8h80L82 56H38ZM60 8v48M38 56l-12 14M82 56l12 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="34" r="10" fill="none" stroke="currentColor" stroke-width="3"/><path d="M46 58c2-10 8-14 14-14s12 4 14 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'το μουσικό συγκρότημα (η μπάντα)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #200122 0%, #6f0000 100%)',
    glow: '0 0 36px rgba(170, 50, 80, 0.42)',
    primaryEmoji: '1f3b8',
    secondaryEmoji: '1f941',
    accentEmoji: '1f3a4',
    caption: 'Четыре разных тембра спорят, пока не попадают в один ритм',
    svgMotif:
      '<path d="M12 66h96M20 66V42M46 66V34M74 66V34M100 66V42" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="46" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="74" cy="24" r="9" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="100" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3"/><path d="M34 14l6 6M82 12l-6 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  },
  'η θεατρική παράσταση / τα σκηνικά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7303c0 0%, #ec38bc 100%)',
    glow: '0 0 36px rgba(236, 56, 188, 0.4)',
    primaryEmoji: '1f3ad',
    secondaryEmoji: '1f306',
    accentEmoji: '1f4a1',
    caption: 'Из фанерного окна открывается целый город, пока зрители верят',
    svgMotif:
      '<path d="M10 8h100M16 8c0 26 8 42 24 58H16ZM104 8c0 26-8 42-24 58h24ZM40 66V34l20-16 20 16v32M50 66V44h20v22M88 24l4-8 4 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'η έκθεση ζωγραφικής / φωτογραφίας': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
    glow: '0 0 36px rgba(160, 190, 230, 0.48)',
    primaryEmoji: '1f5bc',
    secondaryEmoji: '1f4f7',
    accentEmoji: '1f3db',
    caption: 'Белые стены, приглушённые шаги и диалог без единого слова',
    svgMotif:
      '<path d="M10 68h100M16 18h34v36H16zM70 12h34v42H70zM22 46l10-12 8 8 6-6M76 44l10-16 12 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="28" r="4" fill="currentColor" opacity=".4"/><circle cx="92" cy="22" r="4" fill="currentColor" opacity=".4"/>',
  },
  'ο ηθοποιός / η ηθοποιός': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #642b73 0%, #c6426e 100%)',
    glow: '0 0 36px rgba(198, 66, 110, 0.42)',
    primaryEmoji: '1f3ad',
    secondaryEmoji: '1f3ac',
    accentEmoji: '2728',
    caption: 'Чужая судьба на два часа становится своей',
    svgMotif:
      '<path d="M12 18h42v34H12zM18 52l6 12M48 52l-6 12M66 18h42v34H66zM72 52l6 12M102 52l-6 12M20 32h.1M40 32h.1M76 32h.1M96 32h.1M24 42c4 4 12 4 16 0M76 46c6-6 14-6 20 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'ο σκηνοθέτης / σκηνοθετώ': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #16222a 0%, #3a6073 100%)',
    glow: '0 0 36px rgba(58, 96, 115, 0.48)',
    primaryEmoji: '1f3ac',
    secondaryEmoji: '1f4e2',
    accentEmoji: '1f3a5',
    caption: 'Один жест за камерой — и десятки людей начинают новый дубль',
    svgMotif:
      '<path d="M12 24h58v38H12zM12 24l10-14h58L70 24M28 10l-8 14M46 10l-8 14M64 10l-8 14M82 30l22-12v40L82 46ZM84 58l14 12M98 58l-14 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'ο συνθέτης / συνθέτω μουσική': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)',
    glow: '0 0 36px rgba(176, 106, 179, 0.42)',
    primaryEmoji: '1f3bc',
    secondaryEmoji: '1f4dd',
    accentEmoji: '1f3b9',
    caption: 'Ночная мелодия сначала становится пятью линиями на бумаге',
    svgMotif:
      '<path d="M12 16h96M12 26h96M12 36h96M12 46h96M12 56h96M42 12v36c0 10-18 12-18 2s18-12 18-2M80 24v34c0 10-18 12-18 2s18-12 18-2M80 24l22-6v10L80 34M100 62l8 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'η ταινία μικρού μήκους ≠ μεγάλου μήκους': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)',
    glow: '0 0 36px rgba(255, 200, 55, 0.4)',
    primaryEmoji: '23f1',
    secondaryEmoji: '1f37f',
    accentEmoji: '1f3ac',
    caption: 'Одна история умещается между двумя станциями, другая занимает весь вечер',
    svgMotif:
      '<path d="M60 10v60M10 22h38v36H10zM72 14h38v52H72zM10 32h38M10 48h38M72 26h38M72 54h38" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="27" r="2" fill="currentColor"/><circle cx="38" cy="53" r="2" fill="currentColor"/><circle cx="82" cy="20" r="2" fill="currentColor"/><circle cx="100" cy="60" r="2" fill="currentColor"/>',
  },
  'η κωμωδία / η περιπέτεια / το θρίλερ': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)',
    glow: '0 0 36px rgba(91, 134, 229, 0.42)',
    primaryEmoji: '1f602',
    secondaryEmoji: '1f628',
    accentEmoji: '1f5fa',
    caption: 'Смеяться, не дышать от погони или ловить каждый скрип — выбирай маршрут',
    svgMotif:
      '<path d="M10 18h30v44H10zM45 18h30v44H45zM80 18h30v44H80zM16 32h.1M32 32h.1M18 48c4 6 12 6 16 0M52 48l8-18 8 18M86 30h18M86 42h12M86 54h18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'τα κινούμενα σχέδια (το animation)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
    glow: '0 0 36px rgba(115, 82, 220, 0.42)',
    primaryEmoji: '1f3a8',
    secondaryEmoji: '1f3ac',
    accentEmoji: '1f98a',
    caption: 'Нарисованный лис моргает — и у отдельных кадров появляется характер',
    svgMotif:
      '<path d="M10 14h44v52H10zM66 14h44v52H66zM10 26h44M66 26h44M22 52l8-12 8 8 6-10M78 54l8-14 10 10M20 20h.1M30 20h.1M76 20h.1M86 20h.1" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 40h12m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'ο βωβός κινηματογράφος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
    glow: '0 0 36px rgba(189, 195, 199, 0.34)',
    primaryEmoji: '1f4fd',
    secondaryEmoji: '1f507',
    accentEmoji: '1f3ac',
    caption: 'Эмоции читаются по глазам, пока титры сменяют диалоги',
    svgMotif:
      '<circle cx="30" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="66" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 66V42h58l18-10v34H18ZM30 24h.1M66 24h.1M88 52h20M30 52h28M30 58h20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'η υποψηφιότητα για Όσκαρ': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #8e6e28 0%, #e9d362 100%)',
    glow: '0 0 36px rgba(233, 211, 98, 0.42)',
    primaryEmoji: '1f3c6',
    secondaryEmoji: '1f4dc',
    accentEmoji: '2728',
    caption: 'Конверт ещё закрыт, а имя уже звучит в списке на красной дорожке',
    svgMotif:
      '<path d="M48 12h24v18c0 12-6 20-12 20s-12-8-12-20ZM48 18H34c0 12 4 18 14 18M72 18h14c0 12-4 18-14 18M60 50v12M46 68h28M50 62h20M12 22h22M12 34h18M12 46h24M94 8l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'κάνω περιοδεία (η περιοδεία)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #2bc0e4 0%, #eaecc6 100%)',
    glow: '0 0 36px rgba(43, 192, 228, 0.38)',
    primaryEmoji: '1f3ab',
    secondaryEmoji: '1f68c',
    accentEmoji: '1f5fa',
    caption: 'Чемодан не разбирается: сегодня новый город, завтра новая сцена',
    svgMotif:
      '<path d="M16 58c10-34 26-36 38-18s26 18 48-18M16 58l-4-12M16 58l12-2M102 22l-12-2M102 22l-2 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 6"/><circle cx="18" cy="18" r="7" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 25c-8-10-10-14-10-18a10 10 0 0 1 20 0c0 4-2 8-10 18ZM56 54h24v14H56zM62 54v-6h12v6" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>',
  },
  'η επαγγελματική καριέρα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)',
    glow: '0 0 36px rgba(38, 208, 206, 0.4)',
    primaryEmoji: '1f4bc',
    secondaryEmoji: '1f4c8',
    accentEmoji: '1f3c5',
    caption: 'Каждая ступень оставляет на визитке новую строку',
    svgMotif:
      '<path d="M12 68h24V52h24V36h24V20h24M84 12h24v24M18 24h34v22H18zM28 24v-8h14v8M18 32h34" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="96" cy="56" r="8" fill="currentColor" opacity=".35"/>',
  },
  'το σενάριο και η ερμηνεία': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #aa076b 0%, #61045f 100%)',
    glow: '0 0 36px rgba(170, 7, 107, 0.42)',
    primaryEmoji: '1f4dc',
    secondaryEmoji: '1f3ad',
    accentEmoji: '1f3a4',
    caption: 'Сухие реплики на странице вдруг получают голос, паузу и слезу',
    svgMotif:
      '<path d="M12 12h46v56H12zM22 24h26M22 34h26M22 44h18M22 56h22M70 26c10-12 28-12 38 0M74 30v24c0 10 24 10 24 0V30M80 38h.1M92 38h.1M82 48c4 4 8 4 12 0M66 64c16-6 30-6 44 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'το γυμναστήριο / η συνδρομή': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
    glow: '0 0 36px rgba(235, 51, 73, 0.4)',
    primaryEmoji: '1f3cb',
    secondaryEmoji: '1f4b3',
    accentEmoji: '1f4aa',
    caption: 'Турникет пропускает по карточке, но гантели придётся поднимать самому',
    svgMotif:
      '<path d="M12 40h12M96 40h12M24 28v24M34 24v32M86 24v32M96 28v24M34 40h52M14 12h48v20H14zM20 20h24M20 26h12M76 54h32v16H76zM86 54v16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'σε χρόνο ρεκόρ': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    glow: '0 0 36px rgba(245, 175, 25, 0.42)',
    primaryEmoji: '23f1',
    secondaryEmoji: '1f3c1',
    accentEmoji: '26a1',
    caption: 'Финишная фотография ещё не готова, а секундомер уже удивлён',
    svgMotif:
      '<circle cx="42" cy="42" r="26" fill="none" stroke="currentColor" stroke-width="3"/><path d="M42 42V24M42 42l14 8M32 8h20M42 8v8M82 68V12M82 14h28L100 28l10 14H82M64 28L54 48h12l-6 20 22-30H70l8-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'ο χρόνος είναι χρήμα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    glow: '0 0 36px rgba(60, 186, 146, 0.42)',
    primaryEmoji: '231b',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f4b8',
    caption: 'Пока стрелка обегает циферблат, кошелёк будто становится легче',
    svgMotif:
      '<circle cx="38" cy="38" r="26" fill="none" stroke="currentColor" stroke-width="3"/><path d="M38 38V20M38 38l14 10M30 6h16M38 6v6M76 26h28l-6 40H70ZM76 26c0-12 24-12 24 0M82 44c8-8 18 4 8 10s-2 12 6 6M88 38v28M14 70h92" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  },
};

export default BATCH7_SCENES;
