import type { WordVisualScene } from '../../types/illustration';

/**
 * Batch 4 — Связки и Штампы, Чтение №3 (Формы), Ловушки Аудирования.
 * Каждый ключ — ТОЧНАЯ строка `greek` из словаря.
 */
export const BATCH4_SCENES: Record<string, WordVisualScene> = {
  "Με την παρούσα επιστολή θα ήθελα να...": {
    layout: 'scene',
    gradient: 'from-sky-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f4dd',
    secondaryEmoji: '1f3e8',
    accentEmoji: '1f4e7',
    caption: 'Официальное письмо с печатью',
    svgMotif:
      '<rect x="30" y="24" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M30 28 L60 48 L90 28" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "Αν ήμουν στη θέση σου, θα + Παρατατικός": {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4ac',
    secondaryEmoji: '1f465',
    accentEmoji: '1f914',
    caption: 'Совет другу: на твоём месте',
    svgMotif:
      '<path d="M20 20 h50 a6 6 0 0 1 6 6 v22 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-8 a6 6 0 0 1 -6 -6 v-22 a6 6 0 0 1 6 -6 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M86 34 h20 M98 26 l8 8 -8 8" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "παρόλο που / αν και (+ глагол)": {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-zinc-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '2705',
    accentEmoji: '1f4aa',
    caption: 'Уступка: но всё равно сделал',
    svgMotif:
      '<path d="M10 62 h100" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M40 62 v-30 h20 v30" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M18 40 h84" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />',
  },

  "παρά (+ существительное в Вин.п.)": {
    layout: 'scene',
    gradient: 'from-rose-500/30 via-red-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f6e1',
    secondaryEmoji: '1f4aa',
    accentEmoji: '26a0',
    caption: 'Вопреки усталости — пошёл',
    svgMotif:
      '<path d="M60 12 l26 10 v22 c0 16 -12 24 -26 30 c-14 -6 -26 -14 -26 -30 v-22 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M18 70 L102 18" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" />',
  },

  "λόγω (+ Род.п.) / εξαιτίας (+ Род.п.)": {
    layout: 'scene',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '2708',
    secondaryEmoji: '274c',
    accentEmoji: '26a0',
    caption: 'Из-за забастовки рейс отменён',
    svgMotif:
      '<path d="M16 52 L96 28" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M58 18 l16 6 -16 8 z" fill="currentColor" opacity="0.5" /><circle cx="62" cy="60" r="14" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M54 52 L70 68 M70 52 L54 68" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "χάρη σε (+ Вин.п.)": {
    layout: 'scene',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f60a',
    accentEmoji: '2705',
    caption: 'Благодаря помощи всё вышло',
    svgMotif:
      '<path d="M60 66 C30 46 22 34 30 24 C38 14 54 18 60 30 C66 18 82 14 90 24 C98 34 90 46 60 66 Z" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ώστε να / για να (+ Υποτακτική)": {
    layout: 'scene',
    gradient: 'from-cyan-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f3af',
    secondaryEmoji: '1f4dd',
    accentEmoji: '2705',
    caption: 'Цель: чтобы это не повторилось',
    svgMotif:
      '<circle cx="56" cy="42" r="24" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="56" cy="42" r="11" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M56 42 L104 12" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "με αποτέλεσμα να...": {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '23f0',
    secondaryEmoji: '1f614',
    accentEmoji: '274c',
    caption: 'Следствие: опоздал и всё сорвал',
    svgMotif:
      '<rect x="14" y="30" width="14" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="44" y="30" width="14" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(22 51 45)" /><rect x="76" y="30" width="14" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(44 83 45)" />',
  },

  "Όσον αφορά (+ Вин.п.) / Σχετικά με...": {
    layout: 'scene',
    gradient: 'from-violet-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f4ac',
    secondaryEmoji: '1f4dd',
    accentEmoji: '1f50d',
    caption: 'Переход: что касается уборки',
    svgMotif:
      '<path d="M14 40 h68" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M74 30 l14 10 -14 10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="102" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "Σας ευχαριστώ εκ των προτέρων": {
    layout: 'scene',
    gradient: 'from-teal-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f64f',
    secondaryEmoji: '1f4e7',
    accentEmoji: '23f0',
    caption: 'Заранее благодарю за ответ',
    svgMotif:
      '<circle cx="38" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M38 26 v14 h12" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="70" y="30" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M70 33 L88 46 L106 33" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "Παραμένω στη διάθεσή σας για κάθε διευκρίνιση": {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f4de',
    secondaryEmoji: '1f4dd',
    accentEmoji: '1f50d',
    caption: 'Жду ответа: я к вашим услугам',
    svgMotif:
      '<path d="M28 16 h18 l6 14 -9 7 a36 36 0 0 0 18 18 l7 -9 14 6 v18 a5 5 0 0 1 -5 5 C44 75 12 43 12 21 a5 5 0 0 1 5 -5 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M84 30 l6 6 12 -14" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "δωρεάν = χωρίς χρέωση / ελεύθερη είσοδος": {
    layout: 'cause-effect',
    gradient: 'from-lime-500/30 via-emerald-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f381',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f3ab',
    caption: 'Бесплатно = вход без оплаты',
    svgMotif:
      '<rect x="30" y="34" width="60" height="34" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 34 v34 M30 46 h60" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 34 c-10 -14 -26 -10 -22 0 M60 34 c10 -14 26 -10 22 0" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "υποχρεωτικός ≠ προαιρετικός": {
    layout: 'split',
    gradient: 'from-red-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f512',
    secondaryEmoji: '1f513',
    accentEmoji: '2705',
    caption: 'Обязательный vs по желанию',
    svgMotif:
      '<rect x="18" y="34" width="30" height="26" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 34 v-8 a9 9 0 0 1 18 0 v8" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="72" y="34" width="30" height="26" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M78 34 v-8 a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "διεθνής (-ής, -ές) → τα διεθνή": {
    layout: 'cause-effect',
    gradient: 'from-indigo-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f30d',
    secondaryEmoji: '1f4f0',
    accentEmoji: '2708',
    caption: 'Международный → междунар. СМИ',
    svgMotif:
      '<circle cx="60" cy="40" r="26" stroke="currentColor" strokeWidth="2" fill="none" /><ellipse cx="60" cy="40" rx="12" ry="26" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M34 40 h52" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ακριβής (-ής, -ές) → ακριβή στοιχεία": {
    layout: 'cause-effect',
    gradient: 'from-fuchsia-500/30 via-pink-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f50d',
    secondaryEmoji: '1f4dd',
    accentEmoji: '2705',
    caption: 'Точный → точные данные',
    svgMotif:
      '<circle cx="50" cy="36" r="18" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M63 49 L86 70" stroke="currentColor" strokeWidth="3" fill="none" /><path d="M44 30 h12 M44 38 h12 M44 46 h8" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ασφαλής (-ής, -ές) ≠ επικίνδυνος": {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f6e1',
    secondaryEmoji: '26a0',
    accentEmoji: '1f512',
    caption: 'Безопасный vs опасный',
    svgMotif:
      '<path d="M34 14 l18 7 v16 c0 12 -8 18 -18 22 c-10 -4 -18 -10 -18 -22 v-16 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M86 16 l20 34 h-40 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M86 28 v12 M86 44 v2" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "υγιής (-ής, -ές) / υγιεινός (-ή, -ό)": {
    layout: 'scene',
    gradient: 'from-green-500/30 via-lime-500/20 to-slate-900',
    glow: 'bg-green-400/25',
    primaryEmoji: '1f4aa',
    secondaryEmoji: '1f957',
    accentEmoji: '1fa7a',
    caption: 'Здоровый человек / полезная еда',
    svgMotif:
      '<path d="M18 62 c0 -16 10 -26 22 -26 c10 0 16 6 16 14 c0 6 -4 10 -10 10 h-6 v10 a8 8 0 0 1 -8 8 h-6 a8 8 0 0 1 -8 -8 z" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="88" cy="46" r="20" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M74 46 h28 M88 32 v28" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "βαθύς (-ιά, -ύ) / φαρδύς (-ιά, -ύ)": {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f30a',
    secondaryEmoji: '1f6b6',
    accentEmoji: '1f4aa',
    caption: 'Глубокий вдох / широкий шаг',
    svgMotif:
      '<path d="M20 22 h80 M20 38 h80 M20 54 h80" stroke="currentColor" strokeWidth="2" strokeDasharray="6 5" fill="none" /><path d="M30 70 h60" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M30 64 v12 M90 64 v12" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "βαρύς (-ιά, -ύ) ≠ ελαφρύς (-ιά, -ύ)": {
    layout: 'split',
    gradient: 'from-stone-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-stone-400/25',
    primaryEmoji: '1f4bc',
    secondaryEmoji: '1f388',
    accentEmoji: '1f4aa',
    caption: 'Тяжёлый чемодан vs лёгкий',
    svgMotif:
      '<path d="M40 18 h40 l-6 12 h-28 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M46 30 h28 l6 36 h-40 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M78 22 c14 6 22 18 22 34" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ενδιαφέρων (-ουσα, -ον)": {
    layout: 'scene',
    gradient: 'from-purple-500/30 via-fuchsia-500/20 to-slate-900',
    glow: 'bg-purple-400/25',
    primaryEmoji: '1f3a8',
    secondaryEmoji: '1f3ad',
    accentEmoji: '1f4d6',
    caption: 'Интересная выставка картин',
    svgMotif:
      '<path d="M60 14 c22 0 38 12 38 26 c0 10 -8 14 -16 14 h-8 c-6 0 -8 4 -8 8 c0 6 -4 8 -10 8 C36 70 22 56 22 40 C22 24 38 14 60 14 z" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="44" cy="34" r="4" fill="currentColor" opacity="0.5" /><circle cx="62" cy="28" r="4" fill="currentColor" opacity="0.5" /><circle cx="78" cy="38" r="4" fill="currentColor" opacity="0.5" />',
  },

  "επείγων (-ουσα, -ον)": {
    layout: 'scene',
    gradient: 'from-red-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f6a8',
    secondaryEmoji: '1fa7a',
    accentEmoji: '23f0',
    caption: 'Срочный случай — скорая',
    svgMotif:
      '<path d="M60 18 v-10 M34 28 l-8 -8 M86 28 l8 -8" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="34" y="30" width="52" height="26" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M46 68 h28" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ο/η/το ίδιος (-α, -ο) vs μόνος μου": {
    layout: 'split',
    gradient: 'from-slate-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f465',
    secondaryEmoji: '1f6b6',
    accentEmoji: '1f4ac',
    caption: 'Сам директор vs я один',
    svgMotif:
      '<circle cx="34" cy="26" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M18 70 c0 -14 7 -22 16 -22 c9 0 16 8 16 22" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="88" cy="26" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M72 70 c0 -14 7 -22 16 -22 c9 0 16 8 16 22" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "πολύς, πολλή, πολύ (мн.ч. πολλοί, πολλές, πολλά)": {
    layout: 'scene',
    gradient: 'from-amber-500/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4c8',
    secondaryEmoji: '1f634',
    accentEmoji: '1f4aa',
    caption: 'Много работы / очень устал',
    svgMotif:
      '<rect x="20" y="50" width="16" height="20" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="44" y="38" width="16" height="32" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="68" y="24" width="16" height="46" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M98 24 v20 M98 52 v4" stroke="currentColor" strokeWidth="3" fill="none" />',
  },

  "καλύτερος / χειρότερος / περισσότερος": {
    layout: 'scene',
    gradient: 'from-emerald-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f3c6',
    secondaryEmoji: '1f4c9',
    accentEmoji: '1f4c8',
    caption: 'Лучше / хуже / больше',
    svgMotif:
      '<path d="M14 60 L44 34 L64 48 L104 16" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M96 16 h8 v8" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M14 70 h92" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />',
  },

  "επαρκής (-ής, -ές) ≠ ανεπαρκής": {
    layout: 'split',
    gradient: 'from-cyan-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f4a1',
    secondaryEmoji: '274c',
    accentEmoji: '1f50d',
    caption: 'Достаточно vs недостаточно',
    svgMotif:
      '<path d="M22 24 h30 l-4 40 h-22 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 44 h26" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M68 24 h30 l-4 40 h-22 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M70 60 h26" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "δημοφιλής (-ής, -ές)": {
    layout: 'scene',
    gradient: 'from-orange-500/30 via-yellow-500/20 to-slate-900',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f3d6',
    secondaryEmoji: '1f465',
    accentEmoji: '2708',
    caption: 'Популярный курорт Кипра',
    svgMotif:
      '<circle cx="60" cy="22" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 4 v-2 M42 10 l-4 -4 M78 10 l4 -4" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="30" cy="58" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="62" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="90" cy="58" r="7" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "πολυτελής (-ής, -ές)": {
    layout: 'scene',
    gradient: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f3e8',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f6cb',
    caption: 'Роскошный отель у моря',
    svgMotif:
      '<path d="M20 66 v-30 l20 -14 20 14 v30" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M20 66 h80" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M92 18 l4 8 9 1 -7 6 2 9 -8 -5 -8 5 2 -9 -7 -6 9 -1 z" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "σπάνια ≠ συχνά / τακτικά": {
    layout: 'split',
    gradient: 'from-sky-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '23f0',
    accentEmoji: '1f4c8',
    caption: 'Редко vs часто / регулярно',
    svgMotif:
      '<rect x="14" y="24" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M14 36 h40" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="34" cy="48" r="3" fill="currentColor" opacity="0.6" /><rect x="66" y="24" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M66 36 h40" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="76" cy="46" r="3" fill="currentColor" opacity="0.6" /><circle cx="86" cy="46" r="3" fill="currentColor" opacity="0.6" /><circle cx="96" cy="46" r="3" fill="currentColor" opacity="0.6" /><circle cx="76" cy="54" r="3" fill="currentColor" opacity="0.6" /><circle cx="86" cy="54" r="3" fill="currentColor" opacity="0.6" />',
  },

  "αποκλείεται = είναι αδύνατον": {
    layout: 'cause-effect',
    gradient: 'from-rose-500/30 via-red-500/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '274c',
    secondaryEmoji: '1f68c',
    accentEmoji: '23f0',
    caption: 'Исключено = невозможно',
    svgMotif:
      '<rect x="24" y="26" width="72" height="34" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="40" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="80" cy="64" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M20 18 L100 70" stroke="currentColor" strokeWidth="3" fill="none" />',
  },

  "διστάζω (δίστασα) = δεν είμαι σίγουρος": {
    layout: 'cause-effect',
    gradient: 'from-violet-500/30 via-indigo-500/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f914',
    secondaryEmoji: '1f6aa',
    accentEmoji: '1f4ac',
    caption: 'Колеблюсь = не уверен',
    svgMotif:
      '<circle cx="60" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 28 v22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 50 L32 70 M60 50 L88 70" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "μετανιώνω (μετάνιωσα) για κάτι": {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-blue-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f614',
    secondaryEmoji: '1f4dd',
    accentEmoji: '1f4c9',
    caption: 'Жалею о своём решении',
    svgMotif:
      '<circle cx="62" cy="32" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M54 28 a3 3 0 1 0 0.1 0 M70 28 a3 3 0 1 0 0.1 0" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M52 44 c6 -6 14 -6 20 0" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="30" cy="62" r="5" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="18" cy="72" r="3" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "προτιμώ = μ' αρέσει περισσότερο": {
    layout: 'cause-effect',
    gradient: 'from-pink-500/30 via-rose-500/20 to-slate-900',
    glow: 'bg-pink-400/25',
    primaryEmoji: '1f44d',
    secondaryEmoji: '1f3d6',
    accentEmoji: '1f4ac',
    caption: 'Предпочитаю = нравится больше',
    svgMotif:
      '<rect x="14" y="26" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="66" y="26" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 42 l6 6 12 -14" stroke="currentColor" strokeWidth="3" fill="none" />',
  },

  "πολυσύχναστος ≠ ερημικός / ήσυχος": {
    layout: 'split',
    gradient: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f3d6',
    secondaryEmoji: '1f3d4',
    accentEmoji: '1f465',
    caption: 'Многолюдный пляж vs пустой',
    svgMotif:
      '<circle cx="24" cy="30" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="34" cy="50" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="54" cy="46" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="90" cy="40" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M70 16 v52" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" />',
  },

  "προσωρινός ≠ μόνιμος": {
    layout: 'split',
    gradient: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '1f3e0',
    accentEmoji: '1f4dd',
    caption: 'Временная работа vs постоянная',
    svgMotif:
      '<path d="M14 44 l20 -16 20 16 v26 h-40 z" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" /><path d="M66 44 l20 -16 20 16 v26 h-40 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M86 56 v14" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "μειονεκτώ ≠ υπερέχω": {
    layout: 'split',
    gradient: 'from-lime-500/30 via-green-500/20 to-slate-900',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f4c9',
    secondaryEmoji: '1f4c8',
    accentEmoji: '2696',
    caption: 'Уступать vs превосходить',
    svgMotif:
      '<path d="M30 18 v42" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M20 50 l10 12 10 -12" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M90 62 v-42" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M80 30 l10 -12 10 12" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "αναγκαστικά = δεν είχα άλλη επιλογή": {
    layout: 'cause-effect',
    gradient: 'from-yellow-500/30 via-orange-500/20 to-slate-900',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '1f695',
    secondaryEmoji: '1f68c',
    accentEmoji: '1f614',
    caption: 'Вынужденно = не было выбора',
    svgMotif:
      '<rect x="18" y="30" width="52" height="24" rx="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="32" cy="60" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="56" cy="60" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M84 24 L108 56 M108 24 L84 56" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "ενθουσιασμένος ≠ απογοητευμένος": {
    layout: 'split',
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-slate-900',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f60a',
    secondaryEmoji: '1f61e',
    accentEmoji: '1f3c6',
    caption: 'В восторге vs разочарован',
    svgMotif:
      '<circle cx="34" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M26 34 a3 3 0 1 0 0.1 0 M42 34 a3 3 0 1 0 0.1 0" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 48 c6 8 14 8 20 0" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="88" cy="40" r="22" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M80 34 a3 3 0 1 0 0.1 0 M96 34 a3 3 0 1 0 0.1 0" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M78 54 c6 -8 14 -8 20 0" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "επιβάλλεται = είναι απαραίτητο / πρέπει": {
    layout: 'cause-effect',
    gradient: 'from-blue-500/30 via-violet-500/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '26a0',
    secondaryEmoji: '1f4a7',
    accentEmoji: '2705',
    caption: 'Обязательно = необходимо',
    svgMotif:
      '<path d="M30 14 l16 30 h-32 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M30 24 v10 M30 40 v2" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M70 24 h30 l-4 40 h-22 z" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M72 44 h26" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "αναβάλλεται ≠ ακυρώνεται": {
    layout: 'split',
    gradient: 'from-indigo-500/30 via-violet-500/20 to-slate-900',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f4c5',
    secondaryEmoji: '274c',
    accentEmoji: '1f514',
    caption: 'Переносится vs отменяется',
    svgMotif:
      '<rect x="14" y="24" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M14 36 h40" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M24 48 h20 M38 42 l6 6 -6 6" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="66" y="24" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M66 36 h40" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M76 44 L96 60 M96 44 L76 60" stroke="currentColor" strokeWidth="2" fill="none" />',
  },

  "τουλάχιστον ≠ το πολύ": {
    layout: 'split',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f4c8',
    secondaryEmoji: '1f4c9',
    accentEmoji: '23f0',
    caption: 'Как минимум vs максимум',
    svgMotif:
      '<path d="M14 40 h92" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M30 30 v20 M30 40 h-14" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M90 30 v20 M90 40 h14" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="30" cy="40" r="3" fill="currentColor" /><circle cx="90" cy="40" r="3" fill="currentColor" />',
  },

  "γύρω στα / περίπου = όχι ακριβώς": {
    layout: 'cause-effect',
    gradient: 'from-slate-500/30 via-sky-500/20 to-slate-900',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f4b8',
    secondaryEmoji: '1f3af',
    accentEmoji: '1f914',
    caption: 'Около / примерно, не точно',
    svgMotif:
      '<path d="M18 36 c8 -12 16 12 24 0 c8 -12 16 12 24 0 c8 -12 16 12 24 0" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M60 62 a8 8 0 1 1 8 -8 v4" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="60" cy="70" r="2" fill="currentColor" />',
  },
};
