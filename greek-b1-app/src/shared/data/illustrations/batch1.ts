import type { WordVisualScene } from '../../types/illustration';

/**
 * BATCH1_SCENES
 * Associative visual memory cards for the first 51 Greek B1 vocabulary items.
 * Each key is the EXACT `greek` string from the vocabulary list.
 */
export const BATCH1_SCENES: Record<string, WordVisualScene> = {
  // ─────────────────────────────────────────────────────────────
  // MODULE 1 — Характер
  // ─────────────────────────────────────────────────────────────
  'ευγενής (-ής, -ές) ≠ αγενής': {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f621',
    accentEmoji: '1f3ad',
    caption: 'Вежливый поклон vs Грубый крик',
    svgMotif:
      '<path d="M10 60 Q30 20 60 40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M60 40 Q90 60 110 20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 4" />' +
      '<line x1="60" y1="8" x2="60" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />',
  },
  'συνεπής (-ής, -ές) ≠ ασυνεπής': {
    layout: 'split',
    gradient: 'from-sky-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '23f0',
    secondaryEmoji: '1f634',
    accentEmoji: '1f4c5',
    caption: 'Точно в срок vs Опоздал снова',
    svgMotif:
      '<circle cx="30" cy="40" r="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M30 28 L30 40 L40 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M78 30 L102 50 M102 30 L78 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'ειλικρινής (-ής, -ές)': {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4ac',
    secondaryEmoji: '1f60a',
    accentEmoji: '1f4a1',
    caption: 'Открытое сердце и правда',
    svgMotif:
      '<path d="M60 22 C48 10 26 16 26 34 C26 50 60 66 60 66 C60 66 94 50 94 34 C94 16 72 10 60 22 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M52 38 L58 44 L70 30" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.7" />',
  },
  'υπεύθυνος ≠ ανεύθυνος': {
    layout: 'split',
    gradient: 'from-indigo-500/30 via-violet-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f6e1',
    secondaryEmoji: '1f4a8',
    accentEmoji: '1f4cb',
    caption: 'Держит слово vs Всё забыл',
    svgMotif:
      '<path d="M30 20 L30 60 L50 60 L50 20 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M34 30 L46 30 M34 40 L46 40 M34 50 L42 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />' +
      '<path d="M78 24 Q90 40 78 56 Q66 40 78 24 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="3 3" />',
  },
  'υπομονετικός / η υπομονή': {
    layout: 'scene',
    gradient: 'from-lime-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f9d8',
    secondaryEmoji: '23f3',
    accentEmoji: '1f333',
    caption: 'Терпеливо ждёт, как дерево растёт',
    svgMotif:
      '<path d="M60 70 L60 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />' +
      '<path d="M60 40 Q40 30 34 14 M60 40 Q80 30 86 14 M60 40 Q60 24 60 10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<circle cx="60" cy="40" r="4" fill="currentColor" opacity="0.4" />',
  },
  'αισιόδοξος ≠ απαισιόδοξος': {
    layout: 'split',
    gradient: 'from-yellow-400/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '1f614',
    accentEmoji: '2600',
    caption: 'Стакан полон vs Стакан пуст',
    svgMotif:
      '<circle cx="30" cy="26" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M30 14 L30 6 M30 38 L30 46 M18 26 L10 26 M42 26 L50 26 M21 17 L15 11 M39 17 L45 11 M21 35 L15 41 M39 35 L45 41" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />' +
      '<path d="M78 20 Q90 40 78 60 Q66 40 78 20 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'φιλόξενος / η φιλοξενία': {
    layout: 'scene',
    gradient: 'from-rose-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f957',
    accentEmoji: '1f91d',
    caption: 'Открытый дом и полный стол',
    svgMotif:
      '<path d="M20 44 L60 16 L100 44" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />' +
      '<rect x="30" y="44" width="60" height="26" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<rect x="54" y="54" width="12" height="16" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6" />',
  },
  'εργατικός ≠ τεμπέλης': {
    layout: 'split',
    gradient: 'from-orange-500/30 via-red-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f4aa',
    secondaryEmoji: '1f6cb',
    accentEmoji: '1f527',
    caption: 'В работе весь день vs Диван и лень',
    svgMotif:
      '<path d="M20 60 L20 30 L40 30 L40 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M14 30 L30 16 L46 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M70 50 Q90 50 100 60 L70 60 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'πεισματάρης (-α, -ικο)': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f9d1',
    secondaryEmoji: '1f6a7',
    accentEmoji: '1f4aa',
    caption: 'Стоит на своём, как скала',
    svgMotif:
      '<path d="M40 70 L40 30 Q40 14 60 14 Q80 14 80 30 L80 70" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M30 70 L90 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M60 30 L60 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />',
  },
  'ώριμος ≠ ανώριμος': {
    layout: 'split',
    gradient: 'from-amber-600/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-500/25',
    primaryEmoji: '1f34e',
    secondaryEmoji: '1f343',
    accentEmoji: '1f333',
    caption: 'Спелое яблоко vs Зелёный плод',
    svgMotif:
      '<circle cx="34" cy="42" r="16" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M34 26 Q36 18 42 16" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<circle cx="86" cy="42" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" strokeDasharray="3 3" />',
  },
  'γενναιόδωρος ≠ τσιγκούνης': {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f381',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f91d',
    caption: 'Дарит щедро vs Считает монеты',
    svgMotif:
      '<rect x="18" y="30" width="34" height="26" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M18 30 L35 16 L52 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<circle cx="86" cy="42" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M86 34 L86 50 M80 42 L92 42" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6" />',
  },
  'η προσωπικότητα / ο χαρακτήρας': {
    layout: 'scene',
    gradient: 'from-violet-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '1f3ad',
    accentEmoji: '1f4a1',
    caption: 'Внутренний мир и маски',
    svgMotif:
      '<circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M60 18 Q74 40 60 62 Q46 40 60 18 Z" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.55" />' +
      '<path d="M38 40 L82 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />',
  },
  'η συμπεριφορά': {
    layout: 'scene',
    gradient: 'from-cyan-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f6b6',
    secondaryEmoji: '1f440',
    accentEmoji: '26a0',
    caption: 'Как ведёшь себя — все видят',
    svgMotif:
      '<circle cx="34" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M34 32 L34 54 M34 40 L22 48 M34 40 L46 48 M34 54 L24 68 M34 54 L44 68" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 30 Q90 40 70 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />',
  },
  'η εξωτερική εμφάνιση': {
    layout: 'scene',
    gradient: 'from-pink-500/30 via-fuchsia-500/20 to-slate-900',
    glow: 'bg-pink-400/25',
    primaryEmoji: '1fa9e',
    secondaryEmoji: '1f457',
    accentEmoji: '1f440',
    caption: 'Зеркало и внешний вид',
    svgMotif:
      '<ellipse cx="60" cy="40" rx="24" ry="30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M60 10 L60 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.35" />' +
      '<path d="M48 34 Q60 24 72 34" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />',
  },
  'η εμπιστοσύνη': {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f512',
    accentEmoji: '1f4aa',
    caption: 'Крепкое рукопожатие и замок',
    svgMotif:
      '<path d="M30 40 Q60 20 90 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M30 40 Q60 60 90 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<rect x="52" y="34" width="16" height="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M56 34 L56 28 Q60 22 64 28 L64 34" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />',
  },
  'η παρεξήγηση': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-gray-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f4ac',
    secondaryEmoji: '1f615',
    accentEmoji: '267b',
    caption: 'Спор из-за пустяка',
    svgMotif:
      '<path d="M20 30 L50 30 L50 50 L34 50 L26 58 L26 50 L20 50 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 22 L100 22 L100 42 L84 42 L76 50 L76 42 L70 42 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M56 34 L64 46 M64 34 L56 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />',
  },
  'το προτέρημα ≠ το ελάττωμα': {
    layout: 'split',
    gradient: 'from-teal-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '2705',
    secondaryEmoji: '274c',
    accentEmoji: '2696',
    caption: 'Плюс характера vs Минус',
    svgMotif:
      '<path d="M60 12 L60 68" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />' +
      '<path d="M30 40 L50 40 M40 30 L40 50" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />' +
      '<path d="M70 30 L90 50 M90 30 L70 50" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />',
  },
  'το χάσμα γενεών / η εφηβεία': {
    layout: 'scene',
    gradient: 'from-purple-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-purple-400/25',
    primaryEmoji: '1f465',
    secondaryEmoji: '1f9d2',
    accentEmoji: '1f4f1',
    caption: 'Родители и подросток — пропасть',
    svgMotif:
      '<path d="M10 60 L40 60 L40 30 L10 30 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M80 60 L110 60 L110 30 L80 30 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M44 46 Q60 30 76 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" strokeDasharray="4 4" />' +
      '<path d="M60 40 L60 62" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />',
  },
  'η εντύπωση (κάνω εντύπωση)': {
    layout: 'scene',
    gradient: 'from-fuchsia-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f4a5',
    secondaryEmoji: '1f440',
    accentEmoji: '2728',
    caption: 'Яркий след в памяти',
    svgMotif:
      '<path d="M60 40 L60 12 M60 40 L84 24 M60 40 L84 56 M60 40 L60 68 M60 40 L36 56 M60 40 L36 24" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<circle cx="60" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />',
  },
  'η διάθεση': {
    layout: 'scene',
    gradient: 'from-amber-400/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '1f327',
    accentEmoji: '2600',
    caption: 'Настроение — как погода',
    svgMotif:
      '<circle cx="40" cy="30" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M40 12 L40 6 M40 48 L40 54 M22 30 L16 30 M58 30 L64 30" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />' +
      '<path d="M70 44 Q80 34 90 44 Q100 44 100 54 L70 54 Q62 54 70 44 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 2 — Жилье и переезд
  // ─────────────────────────────────────────────────────────────
  'η μετακόμιση / μετακομίζω': {
    layout: 'scene',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f69a',
    secondaryEmoji: '1f4e6',
    accentEmoji: '1f3e0',
    caption: 'Грузовик везёт коробки в новый дом',
    svgMotif:
      '<rect x="14" y="34" width="46" height="26" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M60 40 L78 40 L86 52 L86 60 L60 60 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="30" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<circle cx="74" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />',
  },
  'η μεταφορική εταιρεία': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f69a',
    secondaryEmoji: '1f4e6',
    accentEmoji: '1f4dd',
    caption: 'Перевозчики и договор',
    svgMotif:
      '<rect x="10" y="30" width="60" height="30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 40 L92 40 L100 52 L100 60 L70 60 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="26" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<circle cx="86" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M20 40 L60 40 M20 50 L50 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />',
  },
  'το ενοίκιο / νοικιάζω': {
    layout: 'scene',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f4b0',
    secondaryEmoji: '1f511',
    accentEmoji: '1f3e0',
    caption: 'Ключ и деньги за аренду',
    svgMotif:
      '<circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M40 34 L40 46 M34 40 L46 40" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6" />' +
      '<circle cx="86" cy="34" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M86 42 L86 62 M86 56 L94 56 M86 62 L94 62" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'ο ιδιοκτήτης / ο ενοικιαστής': {
    layout: 'split',
    gradient: 'from-indigo-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '1f511',
    accentEmoji: '1f91d',
    caption: 'Хозяин дома vs Арендатор',
    svgMotif:
      '<path d="M14 44 L40 22 L66 44" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<rect x="22" y="44" width="36" height="24" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<circle cx="90" cy="34" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M90 42 L90 62 M90 56 L98 56 M90 62 L98 62" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'το συμβόλαιο (υπογράφω)': {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4dd',
    secondaryEmoji: '270d',
    accentEmoji: '1f4bc',
    caption: 'Подпись под договором',
    svgMotif:
      '<rect x="24" y="14" width="52" height="52" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M34 26 L66 26 M34 36 L66 36 M34 46 L54 46" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.5" />' +
      '<path d="M40 58 Q50 50 58 58 Q64 62 70 56" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.65" />',
  },
  'η αγγελία': {
    layout: 'scene',
    gradient: 'from-cyan-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f4f0',
    secondaryEmoji: '1f50d',
    accentEmoji: '1f3e0',
    caption: 'Объявление о сдаче жилья',
    svgMotif:
      '<rect x="30" y="12" width="60" height="56" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M40 24 L80 24 M40 34 L80 34 M40 44 L66 44" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.5" />' +
      '<circle cx="24" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M30 36 L40 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'η βλάβη / η ζημιά': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f527',
    secondaryEmoji: '1f4a5',
    accentEmoji: '26a0',
    caption: 'Поломка и ущерб',
    svgMotif:
      '<path d="M20 60 L40 40 L60 60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M40 40 L40 20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 24 L74 40 L90 40 L78 50 L82 66 L70 56 L58 66 L62 50 L50 40 L66 40 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'η επισκευή / η ανακαίνιση': {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f527',
    secondaryEmoji: '1f3a8',
    accentEmoji: '1f3e0',
    caption: 'Ремонт и обновление дома',
    svgMotif:
      '<path d="M20 60 L20 30 L40 30 L40 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M14 30 L30 16 L46 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 20 L90 40 M90 20 L70 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M80 46 L80 66" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'η θέρμανση / ο κλιματισμός': {
    layout: 'split',
    gradient: 'from-red-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f525',
    secondaryEmoji: '2744',
    accentEmoji: '1f3e0',
    caption: 'Тепло зимой vs Прохлада летом',
    svgMotif:
      '<path d="M30 60 Q22 46 30 34 Q38 22 30 10" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M44 60 Q36 46 44 34 Q52 22 44 10" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.45" />' +
      '<path d="M76 20 L76 60 M76 40 L96 40 M76 30 L90 30 M76 50 L90 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'τα κοινόχρηστα': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-gray-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f9fe',
    secondaryEmoji: '1f3e2',
    accentEmoji: '1f4b0',
    caption: 'Счёт за общие расходы дома',
    svgMotif:
      '<rect x="30" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M40 24 L80 24 M40 34 L80 34 M40 44 L70 44" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.5" />' +
      '<path d="M40 56 L80 56" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<circle cx="20" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'η γειτονιά / ο γείτονας': {
    layout: 'scene',
    gradient: 'from-teal-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f3d8',
    secondaryEmoji: '1f91d',
    accentEmoji: '1f3e0',
    caption: 'Соседский район и приветствие',
    svgMotif:
      '<path d="M10 50 L26 34 L42 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<rect x="16" y="50" width="20" height="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M50 50 L66 34 L82 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<rect x="56" y="50" width="20" height="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M92 40 Q104 40 104 52" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'η φασαρία / ο θόρυβος': {
    layout: 'scene',
    gradient: 'from-purple-500/30 via-fuchsia-500/20 to-slate-900',
    glow: 'bg-purple-400/25',
    primaryEmoji: '1f50a',
    secondaryEmoji: '1f6a8',
    accentEmoji: '1f634',
    caption: 'Громкий шум поздно ночью',
    svgMotif:
      '<path d="M20 40 L34 40 L50 24 L50 56 L34 40 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M58 30 Q68 40 58 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M66 22 Q82 40 66 58" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M74 14 Q96 40 74 66" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />',
  },
  'ευρύχωρος και φωτεινός': {
    layout: 'scene',
    gradient: 'from-yellow-400/30 via-amber-400/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f3e0',
    secondaryEmoji: '2600',
    accentEmoji: '1fa9f',
    caption: 'Просторная светлая комната',
    svgMotif:
      '<rect x="14" y="20" width="92" height="46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<rect x="24" y="30" width="30" height="26" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M24 30 L54 30 M39 30 L39 56 M24 43 L54 43" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />' +
      '<circle cx="86" cy="34" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'επιπλωμένος (-η, -ο)': {
    layout: 'scene',
    gradient: 'from-amber-600/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-500/25',
    primaryEmoji: '1f6cb',
    secondaryEmoji: '1f6cf',
    accentEmoji: '1f3e0',
    caption: 'Мебель в квартире',
    svgMotif:
      '<rect x="16" y="40" width="40" height="22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M16 40 L16 32 Q16 26 24 26 L48 26 Q56 26 56 32 L56 40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<rect x="70" y="30" width="34" height="32" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M70 46 L104 46" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.45" />',
  },
  'βολικός / άνετος': {
    layout: 'scene',
    gradient: 'from-green-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-green-400/25',
    primaryEmoji: '1f6cb',
    secondaryEmoji: '1f60c',
    accentEmoji: '1f3e0',
    caption: 'Удобное кресло и покой',
    svgMotif:
      '<path d="M24 60 L24 40 Q24 30 34 30 L66 30 Q76 30 76 40 L76 60" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M24 46 L76 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M34 60 L34 68 M66 60 L66 68" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'κατεστραμμένος / σπασμένος': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f4a5',
    secondaryEmoji: '1fa9e',
    accentEmoji: '26a0',
    caption: 'Разбитое зеркало в коробке',
    svgMotif:
      '<ellipse cx="60" cy="40" rx="26" ry="30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M60 12 L52 34 L66 40 L54 60 L60 68" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M40 30 L52 34 M80 30 L66 40 M42 52 L54 60" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />',
  },
  'η ηλεκτρική συσκευή': {
    layout: 'scene',
    gradient: 'from-sky-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f50c',
    secondaryEmoji: '1f4bb',
    accentEmoji: '1f4a1',
    caption: 'Бытовая техника и розетка',
    svgMotif:
      '<rect x="20" y="24" width="40" height="34" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="32" cy="40" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.55" />' +
      '<circle cx="48" cy="40" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.55" />' +
      '<path d="M60 40 Q76 40 76 30 L76 20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M70 20 L82 20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />',
  },
  'η διαρροή νερού / η υγρασία': {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f4a7',
    secondaryEmoji: '1f327',
    accentEmoji: '1f6bf',
    caption: 'Протечка трубы в ванной',
    svgMotif:
      '<path d="M20 24 L60 24 L60 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M60 40 Q60 50 54 54 Q48 58 54 62 Q60 66 60 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M80 30 Q86 40 80 50 Q74 40 80 30 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M96 40 Q100 48 96 56 Q92 48 96 40 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />',
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 3 — Время и досуг
  // ─────────────────────────────────────────────────────────────
  'ο ελεύθερος χρόνος': {
    layout: 'scene',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '23f0',
    secondaryEmoji: '1f3d6',
    accentEmoji: '1f60c',
    caption: 'Свободное время у моря',
    svgMotif:
      '<circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M30 16 L30 44 M16 30 L44 30" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />' +
      '<path d="M60 60 Q70 50 80 60 Q90 70 100 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M60 68 Q70 58 80 68 Q90 78 100 68" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />',
  },
  'η δραστηριότητα': {
    layout: 'scene',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '26bd',
    secondaryEmoji: '1f3c3',
    accentEmoji: '1f4aa',
    caption: 'Активные занятия и спорт',
    svgMotif:
      '<circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M40 24 L40 56 M24 40 L56 40" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />' +
      '<path d="M74 30 L74 54 M74 42 L88 42 M74 54 L86 62" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />',
  },
  'το ωράριο εργασίας': {
    layout: 'scene',
    gradient: 'from-indigo-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '23f0',
    accentEmoji: '1f4bc',
    caption: 'График работы по часам',
    svgMotif:
      '<rect x="20" y="18" width="80" height="50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M20 32 L100 32" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M40 18 L40 32 M60 18 L60 32 M80 18 L80 32" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.45" />' +
      '<circle cx="60" cy="48" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M60 42 L60 48 L66 52" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.6" />',
  },
  'οι υποχρεώσεις': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-gray-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f4cb',
    secondaryEmoji: '1f4bc',
    accentEmoji: '1f4dd',
    caption: 'Список обязанностей и дел',
    svgMotif:
      '<rect x="30" y="12" width="60" height="58" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M40 26 L52 26 M40 38 L52 38 M40 50 L52 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M58 26 L80 26 M58 38 L80 38 M58 50 L80 50" stroke="currentColor" strokeWidth="1.6" fill="none" opacity="0.45" />',
  },
  'η προθεσμία': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '23f3',
    secondaryEmoji: '1f4c5',
    accentEmoji: '26a0',
    caption: 'Дедлайн истекает завтра',
    svgMotif:
      '<circle cx="60" cy="40" r="24" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M60 22 L60 40 L74 48" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.65" />' +
      '<path d="M60 8 L60 14 M60 66 L60 72 M28 40 L22 40 M98 40 L92 40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'η καθημερινότητα / η ρουτίνα': {
    layout: 'scene',
    gradient: 'from-gray-500/30 via-slate-500/20 to-slate-900',
    glow: 'bg-gray-400/25',
    primaryEmoji: '1f501',
    secondaryEmoji: '1f4c5',
    accentEmoji: '1f634',
    caption: 'День за днём — одна рутина',
    svgMotif:
      '<path d="M40 40 Q40 20 60 20 Q80 20 80 40 Q80 60 60 60 Q40 60 40 40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.55" />' +
      '<path d="M60 20 L60 12 M60 20 L68 16" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M20 40 L28 40 M92 40 L100 40" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.4" />',
  },
  'η εκδήλωση / το φεστιβάλ': {
    layout: 'scene',
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f3aa',
    secondaryEmoji: '1f3b5',
    accentEmoji: '1f389',
    caption: 'Праздничное мероприятие',
    svgMotif:
      '<path d="M20 60 L60 20 L100 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M30 60 L30 40 M50 60 L50 34 M70 60 L70 34 M90 60 L90 40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="60" cy="14" r="4" fill="currentColor" opacity="0.5" />',
  },
  'η παράσταση / η συναυλία': {
    layout: 'scene',
    gradient: 'from-purple-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-purple-400/25',
    primaryEmoji: '1f3ad',
    secondaryEmoji: '1f3b5',
    accentEmoji: '1f3a4',
    caption: 'Театр и концерт на сцене',
    svgMotif:
      '<path d="M14 16 Q30 30 14 44" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M106 16 Q90 30 106 44" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<rect x="30" y="46" width="60" height="20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M50 30 L50 46 M70 30 L70 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'η έκθεση (ζωγραφικής)': {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f3a8',
    secondaryEmoji: '1f5bc',
    accentEmoji: '1f3db',
    caption: 'Картины на выставке',
    svgMotif:
      '<rect x="20" y="18" width="34" height="44" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M24 54 L34 40 L42 48 L50 34" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />' +
      '<rect x="66" y="18" width="34" height="44" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="83" cy="34" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5" />',
  },
  'η ψυχαγωγία / η διασκέδαση': {
    layout: 'scene',
    gradient: 'from-pink-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-pink-400/25',
    primaryEmoji: '1f3ad',
    secondaryEmoji: '1f389',
    accentEmoji: '1f60a',
    caption: 'Развлечение и радость',
    svgMotif:
      '<circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M34 36 Q40 30 46 36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M34 46 Q40 52 46 46" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />' +
      '<path d="M74 24 L78 40 L94 40 L82 50 L86 66 L74 56 L62 66 L66 50 L54 40 L70 40 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
  'η συμμετοχή / συμμετέχω': {
    layout: 'scene',
    gradient: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f465',
    secondaryEmoji: '1f44d',
    accentEmoji: '1f3af',
    caption: 'Все вместе участвуют',
    svgMotif:
      '<circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="60" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="90" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M30 38 L30 58 M60 32 L60 58 M90 38 L90 58" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<path d="M20 66 L100 66" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />',
  },
  'η είσοδος είναι ελεύθερη': {
    layout: 'scene',
    gradient: 'from-green-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-green-400/25',
    primaryEmoji: '1f6aa',
    secondaryEmoji: '1f3ab',
    accentEmoji: '2705',
    caption: 'Открытая дверь — вход свободный',
    svgMotif:
      '<rect x="30" y="14" width="40" height="56" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<path d="M30 14 L30 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />' +
      '<circle cx="62" cy="42" r="3" fill="currentColor" opacity="0.6" />' +
      '<path d="M80 40 L100 40 M90 30 L100 40 L90 50" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />',
  },
  'η ευκαιρία (χάνω την ευκαιρία)': {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f3af',
    secondaryEmoji: '1f4a1',
    accentEmoji: '23f0',
    caption: 'Удобный случай — не упусти!',
    svgMotif:
      '<circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />' +
      '<circle cx="60" cy="40" r="4" fill="currentColor" opacity="0.6" />' +
      '<path d="M60 8 L60 14 M60 66 L60 72 M28 40 L22 40 M98 40 L92 40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />',
  },
};
