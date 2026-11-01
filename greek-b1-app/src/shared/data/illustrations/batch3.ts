import type { WordVisualScene } from '../../types/illustration';

/**
 * Batch 3 — associative visual memory scenes.
 * 61 Greek B1 vocabulary items (Modules 8–11).
 * Every key is the EXACT `greek` string from the vocabulary list.
 */
export const BATCH3_SCENES: Record<string, WordVisualScene> = {
  // ─────────────────────────── MODULE 8: Работа и учеба ───────────────────────────
  'το βιογραφικό σημείωμα': {
    layout: 'scene',
    gradient: 'from-sky-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f4dd',
    secondaryEmoji: '1f4bc',
    accentEmoji: '1f4e7',
    caption: 'Резюме в конверте для шефа',
    svgMotif:
      '<rect x="34" y="14" width="52" height="52" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M44 30h32M44 40h32M44 50h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'η συνέντευξη (για δουλειά)': {
    layout: 'scene',
    gradient: 'from-violet-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f465',
    secondaryEmoji: '1f4bc',
    accentEmoji: '1f4dd',
    caption: 'Собеседование: рукопожатие',
    svgMotif:
      '<path d="M20 60h80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="42" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="78" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M30 60c0-8 5-14 12-14s12 6 12 14M66 60c0-8 5-14 12-14s12 6 12 14" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'η θέση εργασίας': {
    layout: 'scene',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f4bc',
    secondaryEmoji: '1f4c8',
    accentEmoji: '1f3af',
    caption: 'Вакансия: цель — работа',
    svgMotif:
      '<circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="40" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 40L92 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'τα προσόντα / η προϋπηρεσία': {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f393',
    secondaryEmoji: '1f4c5',
    accentEmoji: '1f4aa',
    caption: 'Диплом + годы стажа',
    svgMotif:
      '<path d="M24 66h20V52h20V38h20V22h20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />',
  },
  'ο μισθός / η αμοιβή': {
    layout: 'scene',
    gradient: 'from-lime-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f4b0',
    secondaryEmoji: '1f4b3',
    accentEmoji: '1f4c8',
    caption: 'Зарплата: мешок денег',
    svgMotif:
      '<ellipse cx="60" cy="60" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="none" /><ellipse cx="60" cy="48" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="none" /><ellipse cx="60" cy="36" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'η πρόσληψη ≠ η απόλυση': {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-slate-500/20 to-rose-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f44d',
    secondaryEmoji: '1f44e',
    accentEmoji: '1f4bc',
    caption: 'Приняли на работу ≠ Уволили',
    svgMotif:
      '<path d="M60 8v64" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" /><path d="M30 56V32M30 32l-8 8M30 32l8 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M90 24v24M90 48l-8-8M90 48l8-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'η ανεργία / ο άνεργος': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-gray-600/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '1f4c9',
    accentEmoji: '1f4dd',
    caption: 'Безработный ищет вакансию',
    svgMotif:
      '<path d="M20 24l24 20 18-12 38 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M100 62H86M100 62V48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'ο συνάδελφος / ο εργοδότης': {
    layout: 'scene',
    gradient: 'from-cyan-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f465',
    accentEmoji: '1f4bc',
    caption: 'Коллеги и начальник',
    svgMotif:
      '<circle cx="40" cy="26" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="80" cy="26" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 62c0-10 7-16 16-16s16 6 16 16M64 62c0-10 7-16 16-16s16 6 16 16" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'η τηλεργασία (δουλεύω από το σπίτι)': {
    layout: 'scene',
    gradient: 'from-indigo-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f4bb',
    secondaryEmoji: '1f3e0',
    accentEmoji: '1f4f1',
    caption: 'Ноутбук дома: удаленка',
    svgMotif:
      '<path d="M30 44l30-22 30 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" /><path d="M38 44v22h44V44" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M52 30a14 14 0 0 1 16 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'το πιστοποιητικό / το πτυχίο': {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f393',
    secondaryEmoji: '1f4dd',
    accentEmoji: '2705',
    caption: 'Диплом и сертификат B1',
    svgMotif:
      '<circle cx="60" cy="34" r="18" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M52 50l-6 22 14-8 14 8-6-22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },

  // ─────────────────────────── MODULE 9: Технологии и СМИ ───────────────────────────
  'το διαδίκτυο / οι ηλεκτρονικές αγορές': {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f30d',
    secondaryEmoji: '1f6cd',
    accentEmoji: '1f4bb',
    caption: 'Онлайн-покупки через сеть',
    svgMotif:
      '<circle cx="60" cy="40" r="24" stroke="currentColor" strokeWidth="2" fill="none" /><ellipse cx="60" cy="40" rx="10" ry="24" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M36 40h48" stroke="currentColor" strokeWidth="2" />',
  },
  'τα μέσα κοινωνικής δικτύωσης': {
    layout: 'scene',
    gradient: 'from-fuchsia-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f4f1',
    secondaryEmoji: '1f465',
    accentEmoji: '1f44d',
    caption: 'Лайки и подписчики в сети',
    svgMotif:
      '<circle cx="60" cy="20" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="26" cy="58" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="94" cy="58" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M56 26L30 52M64 26l26 26M33 58h54" stroke="currentColor" strokeWidth="2" />',
  },
  'η προσωπική επαφή / η επικοινωνία': {
    layout: 'scene',
    gradient: 'from-rose-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f465',
    caption: 'Живое общение, не чат',
    svgMotif:
      '<path d="M18 20h44v26H34l-10 10V46H18z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M62 34h40v24H82l-8 8v-8H62z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'η αποξένωση / η μοναξιά': {
    layout: 'scene',
    gradient: 'from-slate-600/30 via-indigo-900/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '1f4f1',
    accentEmoji: '1f327',
    caption: 'Телефон вместо друзей',
    svgMotif:
      '<circle cx="60" cy="24" r="9" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M42 66c0-12 8-20 18-20s18 8 18 20" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M20 40h16M84 40h16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />',
  },
  'η ιστοσελίδα / η εφαρμογή': {
    layout: 'scene',
    gradient: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f4bb',
    secondaryEmoji: '1f4f1',
    accentEmoji: '1f50d',
    caption: 'Сайт и приложение в телефоне',
    svgMotif:
      '<rect x="18" y="16" width="84" height="52" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M18 30h84" stroke="currentColor" strokeWidth="2" /><circle cx="28" cy="23" r="2.5" fill="currentColor" /><circle cx="38" cy="23" r="2.5" fill="currentColor" />',
  },
  'ο κωδικός πρόσβασης / η ασφάλεια': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-zinc-600/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f512',
    secondaryEmoji: '1f511',
    accentEmoji: '1f6e1',
    caption: 'Пароль и защита данных',
    svgMotif:
      '<rect x="42" y="36" width="36" height="30" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M50 36v-8a10 10 0 0 1 20 0v8" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="50" r="4" fill="currentColor" />',
  },
  'η ενημέρωση / η είδηση': {
    layout: 'scene',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f4f0',
    secondaryEmoji: '1f4fa',
    accentEmoji: '1f4e7',
    caption: 'Новости из газеты и ТВ',
    svgMotif:
      '<rect x="22" y="18" width="76" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M32 30h30M32 40h30M32 50h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><rect x="70" y="28" width="20" height="16" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'το πλεονέκτημα ≠ το μειονέκτημα': {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-slate-500/20 to-rose-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '2705',
    secondaryEmoji: '274c',
    accentEmoji: '2696',
    caption: 'Плюс ≠ Минус: весы выбора',
    svgMotif:
      '<path d="M60 14v52M40 66h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M28 26h64" stroke="currentColor" strokeWidth="2" /><path d="M28 26l-10 16h20zM92 26l-10 16h20z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },

  // ─────────────────────────── MODULE 10: Город и службы ───────────────────────────
  'ο δήμος / ο δήμαρχος / ο δημότης': {
    layout: 'scene',
    gradient: 'from-blue-600/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f3e8',
    secondaryEmoji: '1f465',
    accentEmoji: '1f4dd',
    caption: 'Мэрия, мэр и горожанин',
    svgMotif:
      '<path d="M24 34l36-20 36 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" /><path d="M30 34v30M50 34v30M70 34v30M90 34v30M20 66h80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'τα μέσα μαζικής μεταφοράς': {
    layout: 'scene',
    gradient: 'from-green-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-green-400/25',
    primaryEmoji: '1f68c',
    secondaryEmoji: '1f6b6',
    accentEmoji: '1f4c5',
    caption: 'Автобус, метро и трамвай',
    svgMotif:
      '<rect x="26" y="20" width="68" height="40" rx="8" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M26 38h68" stroke="currentColor" strokeWidth="2" /><circle cx="42" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="78" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'η κίνηση στους δρόμους (το μποτιλιάρισμα)': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f697',
    secondaryEmoji: '1f6a6',
    accentEmoji: '23f0',
    caption: 'Пробка в час пик',
    svgMotif:
      '<path d="M10 60h100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 60V50h16v10M50 60V50h16v10M80 60V50h16v10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M10 70h100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />',
  },
  'ο χώρος στάθμευσης (το πάρκινγκ)': {
    layout: 'scene',
    gradient: 'from-sky-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f697',
    secondaryEmoji: '1f4cd',
    accentEmoji: '1f4b0',
    caption: 'Парковка: место для авто',
    svgMotif:
      '<rect x="42" y="14" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M54 22v20M54 22h8a6 6 0 0 1 0 12h-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M60 50v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'το πεζοδρόμιο / ο πεζόδρομος': {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f6b6',
    secondaryEmoji: '1f3e8',
    accentEmoji: '1f6cd',
    caption: 'Тротуар и пешеходная улица',
    svgMotif:
      '<path d="M14 62h92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M22 62v-8h14v8M46 62v-8h14v8M70 62v-8h14v8" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="24" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 31v14M52 40l8 5 8-5M60 45l-6 12M60 45l6 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'το πρόστιμο / η παράβαση': {
    layout: 'scene',
    gradient: 'from-rose-500/30 via-red-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f4b8',
    secondaryEmoji: '26a0',
    accentEmoji: '1f4dd',
    caption: 'Штраф за нарушение',
    svgMotif:
      '<rect x="26" y="22" width="68" height="40" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 30v16M60 52v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M26 42h68" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />',
  },
  'η δημόσια υπηρεσία / ο πολίτης': {
    layout: 'scene',
    gradient: 'from-indigo-500/30 via-blue-600/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f3e8',
    secondaryEmoji: '1f465',
    accentEmoji: '1f4dd',
    caption: 'Очередь в госучреждении',
    svgMotif:
      '<path d="M14 64h92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="34" cy="34" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="58" cy="34" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="82" cy="34" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 64c0-8 4-14 10-14s10 6 10 14M48 64c0-8 4-14 10-14s10 6 10 14M72 64c0-8 4-14 10-14s10 6 10 14" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'το έγγραφο / η αίτηση': {
    layout: 'scene',
    gradient: 'from-stone-500/30 via-amber-600/20 to-slate-900',
    glow: 'bg-stone-400/25',
    primaryEmoji: '1f4dd',
    secondaryEmoji: '1f4e7',
    accentEmoji: '2705',
    caption: 'Заявление с документами',
    svgMotif:
      '<rect x="30" y="12" width="60" height="56" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M40 26h40M40 36h40M40 46h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M66 54c4-6 8 4 12-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'ο λογαριασμός (ρεύματος / νερού)': {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f9fe',
    secondaryEmoji: '1f4a1',
    accentEmoji: '1f4a7',
    caption: 'Счет за свет и воду',
    svgMotif:
      '<path d="M36 12h48v52l-8-6-8 6-8-6-8 6-8-6-8 6z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M46 26h28M46 36h28M46 46h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },

  // ─────────────────────────── MODULE 11: Топ-Глаголы B1 ───────────────────────────
  'αντιμετωπίζω → αντιμετώπισα': {
    layout: 'cause-effect',
    gradient: 'from-red-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f6e1',
    secondaryEmoji: '1f4aa',
    accentEmoji: '26a0',
    caption: 'Проблема → справился',
    svgMotif:
      '<path d="M14 40h56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M62 32l10 8-10 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M92 22l14 6v12c0 10-6 16-14 20-8-4-14-10-14-20V28z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'αναλαμβάνω → ανέλαβα': {
    layout: 'cause-effect',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f4aa',
    secondaryEmoji: '1f4bc',
    accentEmoji: '2705',
    caption: 'Взял задачу на себя',
    svgMotif:
      '<path d="M20 62h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M40 62V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M32 34l8-8 8 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><rect x="72" y="30" width="34" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'βελτιώνω → βελτίωσα (βελτιώθηκα)': {
    layout: 'cause-effect',
    gradient: 'from-emerald-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f4c8',
    secondaryEmoji: '1f4aa',
    accentEmoji: '2705',
    caption: 'Улучшение: график вверх',
    svgMotif:
      '<path d="M18 62l24-18 16 10 34-30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M92 24H76M92 24v16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'διαπιστώνω → διαπίστωσα': {
    layout: 'cause-effect',
    gradient: 'from-violet-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f50d',
    secondaryEmoji: '1f4dd',
    accentEmoji: '26a0',
    caption: 'Проверил и обнаружил',
    svgMotif:
      '<circle cx="52" cy="34" r="18" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M65 47l18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M44 34h16M44 42h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'ενημερώνω → ενημέρωσα (ενημερώθηκα)': {
    layout: 'cause-effect',
    gradient: 'from-cyan-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f4e7',
    secondaryEmoji: '1f4de',
    accentEmoji: '1f4f0',
    caption: 'Сообщил новость по email',
    svgMotif:
      '<rect x="24" y="24" width="56" height="36" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 28l28 20 28-20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M92 30a10 10 0 0 1 0 14M100 24a18 18 0 0 1 0 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'απογοητεύομαι → απογοητεύτηκα': {
    layout: 'cause-effect',
    gradient: 'from-slate-600/30 via-blue-900/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '1f4c9',
    accentEmoji: '1f4a7',
    caption: 'Разочарование: слезы',
    svgMotif:
      '<path d="M60 62S28 44 28 30a14 14 0 0 1 26-8l6 8 6-8a14 14 0 0 1 26 8c0 14-32 32-32 32z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M60 22l-6 14h12l-6 14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'ικανοποιώ → ικανοποίησα (ικανοποιήθηκα)': {
    layout: 'cause-effect',
    gradient: 'from-lime-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '2705',
    accentEmoji: '1f44d',
    caption: 'Довольный клиент: отлично',
    svgMotif:
      '<circle cx="46" cy="40" r="24" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M36 34h.01M56 34h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M34 46c6 8 18 8 24 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M78 44l8 8 16-18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'παρατηρώ → παρατήρησα': {
    layout: 'cause-effect',
    gradient: 'from-amber-500/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f50e',
    secondaryEmoji: '1f4c8',
    accentEmoji: '1f914',
    caption: 'Заметил рост проблемы',
    svgMotif:
      '<path d="M16 40c14-18 74-18 88 0-14 18-74 18-88 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><circle cx="60" cy="40" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="40" r="3" fill="currentColor" />',
  },
  'επικοινωνώ → επικοινώνησα (με...)': {
    layout: 'cause-effect',
    gradient: 'from-sky-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f4de',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f4e7',
    caption: 'Звоню и пишу: связь',
    svgMotif:
      '<path d="M34 20c-6 0-10 4-10 10 0 20 26 46 46 46 6 0 10-4 10-10l-12-8-8 8c-8-4-18-14-22-22l8-8z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M84 26a16 16 0 0 1 0 22M94 18a26 26 0 0 1 0 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'πραγματοποιούμαι → πραγματοποιήθηκα': {
    layout: 'cause-effect',
    gradient: 'from-purple-500/30 via-fuchsia-500/20 to-slate-900',
    glow: 'bg-purple-400/25',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '1f3ad',
    accentEmoji: '2705',
    caption: 'Событие состоится в срок',
    svgMotif:
      '<rect x="26" y="20" width="68" height="48" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M26 34h68M42 14v12M78 14v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M46 48l8 8 16-16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'χρειάζομαι → χρειάστηκα': {
    layout: 'cause-effect',
    gradient: 'from-orange-500/30 via-red-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '23f0',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f4dd',
    caption: 'Нужно: время и деньги',
    svgMotif:
      '<circle cx="60" cy="40" r="24" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 24v16l12 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'σκέφτομαι → σκέφτηκα': {
    layout: 'cause-effect',
    gradient: 'from-indigo-500/30 via-violet-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f914',
    secondaryEmoji: '1f4a1',
    accentEmoji: '1f4ac',
    caption: 'Думаю: идея в голове',
    svgMotif:
      '<path d="M40 66V52c-8-6-12-14-12-22a24 24 0 0 1 48 0c0 8-4 16-12 22v14z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M52 66h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="60" cy="26" r="6" stroke="currentColor" strokeWidth="2" fill="none" />',
  },
  'δέχομαι → δέχτηκα': {
    layout: 'cause-effect',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f381',
    secondaryEmoji: '1f91d',
    accentEmoji: '2705',
    caption: 'Принял подарок и приглашение',
    svgMotif:
      '<rect x="42" y="34" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 34v28M36 34h48" stroke="currentColor" strokeWidth="2" /><path d="M60 34c-8-12-20-8-14 0M60 34c8-12 20-8 14 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'υπόσχομαι → υποσχέθηκα': {
    layout: 'cause-effect',
    gradient: 'from-rose-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f4dd',
    accentEmoji: '2705',
    caption: 'Обещание скрепили рукой',
    svgMotif:
      '<path d="M20 44l16-10 12 8 12-8 16 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" /><path d="M36 34l-8 14M84 34l8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M48 62h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'αισθάνομαι → αισθάνθηκα (νιώθω → ένιωσα)': {
    layout: 'cause-effect',
    gradient: 'from-fuchsia-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '1f614',
    accentEmoji: '1f4ac',
    caption: 'Чувства: радость и грусть',
    svgMotif:
      '<path d="M60 62S28 44 28 30a14 14 0 0 1 26-8l6 8 6-8a14 14 0 0 1 26 8c0 14-32 32-32 32z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M14 40h14l6-10 8 20 6-10h58" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'ανησυχώ → ανησύχησα': {
    layout: 'cause-effect',
    gradient: 'from-amber-600/30 via-orange-600/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '26a0',
    accentEmoji: '1f327',
    caption: 'Тревога: мысли о плохом',
    svgMotif:
      '<path d="M20 30l10 8 10-8 10 8 10-8 10 8 10-8 10 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" /><circle cx="60" cy="56" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M56 56h.01M64 56h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />',
  },
  'επιλέγω → επέλεξα': {
    layout: 'cause-effect',
    gradient: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f3af',
    secondaryEmoji: '2705',
    accentEmoji: '1f914',
    caption: 'Выбор: одна из двух опций',
    svgMotif:
      '<rect x="18" y="26" width="34" height="30" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="68" y="26" width="34" height="30" rx="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M26 42l6 6 12-14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'προτείνω → πρότεινα': {
    layout: 'cause-effect',
    gradient: 'from-blue-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f4a1',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f44d',
    caption: 'Предлагаю идею: лампочка',
    svgMotif:
      '<circle cx="46" cy="34" r="16" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M40 50h12M42 56h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M72 26h34v22H88l-8 8v-8H72z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'αποφασίζω → αποφάσισα': {
    layout: 'cause-effect',
    gradient: 'from-violet-600/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '2696',
    secondaryEmoji: '2705',
    accentEmoji: '1f4dd',
    caption: 'Решение принято: галочка',
    svgMotif:
      '<path d="M60 16v50M38 66h44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M26 26h68" stroke="currentColor" strokeWidth="2" /><path d="M26 26l-10 16h20zM94 26l-10 16h20z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'καταφέρνω → κατάφερα (να...)': {
    layout: 'cause-effect',
    gradient: 'from-green-500/30 via-lime-500/20 to-slate-900',
    glow: 'bg-green-400/25',
    primaryEmoji: '1f3c6',
    secondaryEmoji: '1f4aa',
    accentEmoji: '2705',
    caption: 'Справился: трофей в руках',
    svgMotif:
      '<path d="M42 20h36v14a18 18 0 0 1-36 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M42 24H30v6a12 12 0 0 0 12 12M78 24h12v6a12 12 0 0 1-12 12" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M54 52h12v10H54zM42 62h36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'συμβαίνει → συνέβη': {
    layout: 'cause-effect',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '26a0',
    secondaryEmoji: '1f4c5',
    accentEmoji: '1f914',
    caption: 'Случилось: событие дня',
    svgMotif:
      '<path d="M66 10L34 44h20l-8 26 34-36H58z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'μειώνω → μείωσα (μειώθηκα)': {
    layout: 'cause-effect',
    gradient: 'from-rose-500/30 via-red-600/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f4c9',
    secondaryEmoji: '1f4b8',
    accentEmoji: '274c',
    caption: 'Сокращение: график вниз',
    svgMotif:
      '<path d="M18 22l24 18 16-10 34 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M92 60H76M92 60V44" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'εξασφαλίζω → εξασφάλισα': {
    layout: 'cause-effect',
    gradient: 'from-slate-500/30 via-blue-700/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f6e1',
    secondaryEmoji: '1f512',
    accentEmoji: '2705',
    caption: 'Гарантия: щит и замок',
    svgMotif:
      '<path d="M60 12l30 10v22c0 16-12 26-30 32-18-6-30-16-30-32V22z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M46 42l10 10 20-22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />',
  },
  'καλύπτω → κάλυψα (τα έξοδα / τις ανάγκες)': {
    layout: 'cause-effect',
    gradient: 'from-emerald-600/30 via-green-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f4b0',
    secondaryEmoji: '1f9fe',
    accentEmoji: '2705',
    caption: 'Зарплата покрыла расходы',
    svgMotif:
      '<path d="M14 40a46 46 0 0 1 92 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M60 40v22a8 8 0 0 0 16 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'ανταποκρίνομαι → ανταποκρίθηκα (σε...)': {
    layout: 'cause-effect',
    gradient: 'from-cyan-600/30 via-teal-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f3af',
    secondaryEmoji: '1f4c8',
    accentEmoji: '1f44d',
    caption: 'Оправдал ожидания: в цель',
    svgMotif:
      '<circle cx="60" cy="40" r="24" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 40L96 8M96 8H82M96 8v14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'επισημαίνω → επισήμανα / τονίζω → τόνισα': {
    layout: 'cause-effect',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4dd',
    secondaryEmoji: '26a0',
    accentEmoji: '1f4ac',
    caption: 'Отмечаю и подчеркиваю',
    svgMotif:
      '<path d="M24 26h56M24 38h56M24 50h34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M24 60h56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M94 22v20M94 50v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />',
  },
  'συνειδητοποιώ → συνειδητοποίησα': {
    layout: 'cause-effect',
    gradient: 'from-indigo-600/30 via-purple-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f4a1',
    secondaryEmoji: '1f914',
    accentEmoji: '2705',
    caption: 'Осознал: вспышка мысли',
    svgMotif:
      '<circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 26v14M60 46v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M22 20l8 8M98 20l-8 8M22 60l8-8M98 60l-8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'προσαρμόζομαι → προσαρμόστηκα': {
    layout: 'cause-effect',
    gradient: 'from-teal-600/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f9e9',
    secondaryEmoji: '1f30d',
    accentEmoji: '2705',
    caption: 'Вписался в новую жизнь',
    svgMotif:
      '<rect x="22" y="24" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="64" y="24" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M56 41h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'εξοικονομώ → εξοικονόμησα (χρόνο / χρήματα)': {
    layout: 'cause-effect',
    gradient: 'from-lime-600/30 via-green-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f4b0',
    secondaryEmoji: '23f0',
    accentEmoji: '1f4c8',
    caption: 'Экономия времени и денег',
    svgMotif:
      '<ellipse cx="56" cy="44" rx="26" ry="18" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M56 26v-8M46 26h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="46" cy="42" r="3" fill="currentColor" /><path d="M82 44h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />',
  },
  'καταναλώνω → κατανάλωσα': {
    layout: 'cause-effect',
    gradient: 'from-orange-600/30 via-red-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f957',
    secondaryEmoji: '1f4a1',
    accentEmoji: '1f4c9',
    caption: 'Потребляю еду и энергию',
    svgMotif:
      '<circle cx="60" cy="42" r="20" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M22 20v40M16 20v12a6 6 0 0 0 12 0V20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M98 20v40M98 20c-6 4-6 14 0 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'επιβαρύνω → επιβάρυνα': {
    layout: 'cause-effect',
    gradient: 'from-stone-600/30 via-amber-700/20 to-slate-900',
    glow: 'bg-stone-400/25',
    primaryEmoji: '1f30d',
    secondaryEmoji: '1f5d1',
    accentEmoji: '26a0',
    caption: 'Пластик давит на планету',
    svgMotif:
      '<circle cx="60" cy="44" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M38 44h44M60 22v44" stroke="currentColor" strokeWidth="2" /><path d="M40 14h40v10H40z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />',
  },
  'απολαμβάνω → απόλαυσα': {
    layout: 'cause-effect',
    gradient: 'from-yellow-500/30 via-amber-400/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '1f3d6',
    accentEmoji: '2600',
    caption: 'Наслаждаюсь солнцем и морем',
    svgMotif:
      '<circle cx="60" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 8v6M60 42v6M40 28h-6M86 28h-6M46 14l4 4M74 14l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 58c8-6 16-6 24 0s16 6 24 0 16-6 24 0 16 6 24 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'φροντίζω → φρόντισα (για...)': {
    layout: 'cause-effect',
    gradient: 'from-rose-500/30 via-pink-400/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f333',
    secondaryEmoji: '1f5d1',
    accentEmoji: '2705',
    caption: 'Забота: чистота в парке',
    svgMotif:
      '<path d="M60 62c-14-10-22-18-22-28a12 12 0 0 1 22-6 12 12 0 0 1 22 6c0 10-8 18-22 28z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" /><path d="M30 66c8-6 20-6 30 0 10-6 22-6 30 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
  'αναγκάζομαι → αναγκάστηκα (να...)': {
    layout: 'cause-effect',
    gradient: 'from-slate-600/30 via-red-900/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f4b8',
    secondaryEmoji: '26a0',
    accentEmoji: '1f614',
    caption: 'Пришлось платить: вынужден',
    svgMotif:
      '<path d="M40 40a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /><path d="M80 40a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />',
  },
};
