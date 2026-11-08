import type { WordVisualScene } from '../../types/illustration';

export const BATCH11_SCENES: Record<string, WordVisualScene> = {
  "μάθε τέχνη κι άσ' τηνε...": {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #111827 0%, #78350f 55%, #d97706 100%)',
    glow: 'rgba(245, 158, 11, 0.46)',
    primaryEmoji: '🛠️',
    secondaryEmoji: '📚',
    accentEmoji: '💡',
    caption: 'Освой ремесло — и у тебя всегда будет опора.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 24c14-5 27-2 40 7v31c-13-9-26-12-40-7V24Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.72"/>
      <path d="M100 24c-14-5-27-2-40 7v31c13-9 26-12 40-7V24Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.72"/>
      <path d="M60 31v31M28 33c9-1 16 1 23 5M92 33c-9-1-16 1-23 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.38"/>
      <path d="m78 14 7 7-15 15-9 2 2-9 15-15Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="94" cy="56" r="10" fill="currentColor" opacity="0.1"/>
      <path d="M89 56h10M94 51v10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  },
  'οι εξετάσεις (δίνω εξετάσεις)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #172554 0%, #1d4ed8 58%, #0e7490 100%)',
    glow: 'rgba(59, 130, 246, 0.48)',
    primaryEmoji: '📝',
    secondaryEmoji: '✍️',
    accentEmoji: '⏳',
    caption: 'Экзамены: знания выходят на сцену, а волнение остаётся за кулисами.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 12h40l14 14v42H30V12Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.78"/>
      <path d="M70 12v15h14M40 32h25M40 41h19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.48"/>
      <path d="m40 55 6 6 14-15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="94" cy="25" r="13" stroke="currentColor" stroke-width="1.6" opacity="0.62"/>
      <path d="M94 17v9l6 3M94 8v3M94 39v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.72"/>
      <circle cx="94" cy="25" r="17" fill="currentColor" opacity="0.06"/>
    </svg>`,
  },
  'ο υποψήφιος / η υποψήφια': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #111827 0%, #312e81 55%, #4f46e5 100%)',
    glow: 'rgba(129, 140, 248, 0.46)',
    primaryEmoji: '🧑‍💼',
    secondaryEmoji: '📄',
    accentEmoji: '🌟',
    caption: 'Кандидат — не только анкета, а потенциал, который нужно раскрыть.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="27" r="10" stroke="currentColor" stroke-width="1.7"/>
      <path d="M41 62c2-15 8-23 19-23s17 8 19 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="27" cy="36" r="6" stroke="currentColor" stroke-width="1.4" opacity="0.42"/>
      <path d="M15 62c1-11 5-17 12-17 5 0 9 3 11 8M93 36a6 6 0 1 0 0 .1M105 62c-1-11-5-17-12-17-5 0-9 3-11 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.42"/>
      <path d="m60 7 2 4 4 .6-3 3 .7 4.4-3.7-2-3.7 2 .7-4.4-3-3 4-.6 2-4Z" fill="currentColor" opacity="0.28"/>
      <path d="M35 68h50" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.22"/>
    </svg>`,
  },
  'η ύλη των εξετάσεων': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #052e2b 0%, #0f766e 58%, #155e75 100%)',
    glow: 'rgba(45, 212, 191, 0.4)',
    primaryEmoji: '📚',
    secondaryEmoji: '🗂️',
    accentEmoji: '✅',
    caption: 'Вся программа экзамена — на одной карте повторения.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12h40l12 12v44H24V12Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.76"/>
      <path d="M64 12v13h12M34 29h23M34 39h30M34 49h24M34 59h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.46"/>
      <circle cx="91" cy="45" r="18" fill="currentColor" opacity="0.08"/>
      <path d="M80 36c8-4 15-2 22 4v22c-7-6-14-8-22-4V36Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M102 40v22M85 44c4-1 8 0 12 3M85 51c4-1 8 0 12 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.48"/>
      <circle cx="91" cy="20" r="5" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
    </svg>`,
  },
  'περνάω στο πανεπιστήμιο / στη σχολή': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 52%, #0e7490 100%)',
    glow: 'rgba(99, 102, 241, 0.48)',
    primaryEmoji: '🎓',
    secondaryEmoji: '🏛️',
    accentEmoji: '🎯',
    caption: 'Заветный результат открывает двери вуза.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 66V31L60 13l36 18v35M18 31h84" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.76"/>
      <path d="M34 66V39h52v27M48 66V47h24v19" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity="0.58"/>
      <circle cx="60" cy="27" r="3" fill="currentColor" opacity="0.72"/>
      <path d="M10 58h30m-7-7 7 7-7 7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 70h64" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.24"/>
      <circle cx="60" cy="47" r="27" stroke="currentColor" stroke-width="1" stroke-dasharray="3 6" opacity="0.14"/>
    </svg>`,
  },
  'το διαγώνισμα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #334155 52%, #0f766e 100%)',
    glow: 'rgba(20, 184, 166, 0.38)',
    primaryEmoji: '📝',
    secondaryEmoji: '🖊️',
    accentEmoji: '🔍',
    caption: 'Контрольная — срез знаний и навигатор для дальнейшей работы.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 10h46l14 14v44H28V10Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.76"/>
      <path d="M74 10v15h14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.5"/>
      <circle cx="41" cy="33" r="3" stroke="currentColor" stroke-width="1.4"/>
      <path d="M51 33h22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.48"/>
      <circle cx="41" cy="46" r="3" stroke="currentColor" stroke-width="1.4"/>
      <path d="m51 46 5 5 12-13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m82 57 15-15 7 7-15 15-9 2 2-9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M12 72h96" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.18"/>
    </svg>`,
  },
  'οι βαθμοί (καλοί / κακοί βαθμοί)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #172554 0%, #3730a3 48%, #9a3412 100%)',
    glow: 'rgba(129, 140, 248, 0.4)',
    primaryEmoji: '📊',
    secondaryEmoji: '📝',
    accentEmoji: '🌟',
    caption: 'Оценки — маяки: где курс верен, а где нужен рывок.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 12v56" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.24"/>
      <circle cx="33" cy="28" r="15" stroke="currentColor" stroke-width="1.6" opacity="0.68"/>
      <path d="m24 29 6 6 12-14M18 62l11-10 8 5 14-17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="88" cy="28" r="15" stroke="currentColor" stroke-width="1.6" opacity="0.42"/>
      <path d="m81 21 14 14M95 21 81 35M70 48l10 7 9-4 14 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity="0.58"/>
      <circle cx="33" cy="28" r="20" fill="currentColor" opacity="0.05"/>
      <circle cx="88" cy="28" r="20" fill="currentColor" opacity="0.05"/>
    </svg>`,
  },
  'οι επαναλήψεις': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #082f49 0%, #0369a1 55%, #155e75 100%)',
    glow: 'rgba(56, 189, 248, 0.42)',
    primaryEmoji: '🔁',
    secondaryEmoji: '📚',
    accentEmoji: '🧠',
    caption: 'Повторение превращает разрозненные факты в прочную систему.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37 25c6-8 15-12 26-11 9 1 16 5 21 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="m78 17 6 9-10 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M83 55c-6 8-15 12-26 11-9-1-16-5-21-12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="m42 63-6-9 10-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41 30c8-3 14-1 19 4v23c-5-5-11-7-19-4V30ZM79 30c-8-3-14-1-19 4v23c5-5 11-7 19-4V30Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.68"/>
      <circle cx="60" cy="40" r="29" fill="currentColor" opacity="0.04"/>
    </svg>`,
  },
  'καλύπτω τα κενά και τις αδυναμίες': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #052e16 0%, #166534 52%, #0f766e 100%)',
    glow: 'rgba(52, 211, 153, 0.42)',
    primaryEmoji: '🧩',
    secondaryEmoji: '🎯',
    accentEmoji: '💡',
    caption: 'Закрываем пробелы — и слабые места становятся точками роста.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 58h30l8-12 8 12h46M24 58v10M96 58v10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M44 18h32v24H44z" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.38"/>
      <path d="m50 30 7 7 14-16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="60" cy="30" r="23" fill="currentColor" opacity="0.06"/>
      <path d="M52 46 60 32l8 14M18 70h84" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.42"/>
      <circle cx="60" cy="30" r="3" fill="currentColor" opacity="0.7"/>
    </svg>`,
  },
  'μαθαίνω παπαγαλία': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #7e22ce 52%, #be185d 100%)',
    glow: 'rgba(217, 70, 239, 0.4)',
    primaryEmoji: '🦜',
    secondaryEmoji: '📚',
    accentEmoji: '💡',
    caption: 'Попугай повторяет слова, но понимание остаётся за кадром.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10v60" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.22"/>
      <path d="M16 18h36v28H35l-11 9v-9h-8V18Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity="0.72"/>
      <path d="M25 29h18M25 37h13M29 12c5-5 12-5 17 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      <path d="M73 25c7-10 23-8 27 2 4 9-3 15-9 20v7H78v-7c-7-5-12-13-5-22Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M78 60h13M80 65h9M68 17l36 48" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.58"/>
      <circle cx="86" cy="35" r="23" fill="currentColor" opacity="0.05"/>
    </svg>`,
  },
  'ξέρω νεράκι': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #083344 0%, #0e7490 52%, #0284c7 100%)',
    glow: 'rgba(34, 211, 238, 0.44)',
    primaryEmoji: '💧',
    secondaryEmoji: '🧠',
    accentEmoji: '✅',
    caption: 'Материал усвоен назубок — отвечаю легко и уверенно.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 9c-8 13-22 26-22 40a22 22 0 0 0 44 0C82 35 68 22 60 9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="m48 48 8 8 17-20" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 62c8 5 15 5 23 0M77 62c8 5 15 5 23 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.38"/>
      <circle cx="91" cy="19" r="8" fill="currentColor" opacity="0.12"/>
      <path d="M88 19h6M91 16v6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.72"/>
    </svg>`,
  },
  'η διά βίου μάθηση': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #020617 0%, #1e3a8a 52%, #0f766e 100%)',
    glow: 'rgba(45, 212, 191, 0.4)',
    primaryEmoji: '♾️',
    secondaryEmoji: '📚',
    accentEmoji: '🌱',
    caption: 'Диплом — не финиш: учёба идёт рядом всю жизнь.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 64h18V53h18V42h18V31h22" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M91 22h9v9M24 27a39 39 0 0 1 63-11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m80 9 8 7-10 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="27" r="4" fill="currentColor" opacity="0.5"/>
      <path d="M45 64c6-3 11-2 15 2 4-4 9-5 15-2v7c-6-3-11-2-15 2-4-4-9-5-15-2v-7Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity="0.58"/>
      <circle cx="60" cy="40" r="34" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'αποκτώ νέες δεξιότητες και γνώσεις': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #022c22 0%, #047857 55%, #4d7c0f 100%)',
    glow: 'rgba(52, 211, 153, 0.44)',
    primaryEmoji: '🧠',
    secondaryEmoji: '🛠️',
    accentEmoji: '✨',
    caption: 'Новый навык плюс новое знание — ещё одна ступень вверх.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="29" cy="53" r="11" stroke="currentColor" stroke-width="1.6" opacity="0.62"/>
      <circle cx="60" cy="37" r="11" stroke="currentColor" stroke-width="1.6" opacity="0.78"/>
      <circle cx="91" cy="20" r="11" stroke="currentColor" stroke-width="1.6"/>
      <path d="M38 47 51 41M69 31l13-7M24 53h10M29 48v10M86 20h10M91 15v10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="m54 37 4 4 8-10M18 68h84" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m102 48 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="currentColor" opacity="0.28"/>
    </svg>`,
  },
  'το επάγγελμα / το επάγγελμα του μέλλοντος': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #020617 0%, #312e81 52%, #0e7490 100%)',
    glow: 'rgba(96, 165, 250, 0.44)',
    primaryEmoji: '💼',
    secondaryEmoji: '🚀',
    accentEmoji: '🔮',
    caption: 'Профессия будущего рождается там, где навыки встречают технологии.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10v60" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.22"/>
      <rect x="15" y="30" width="36" height="29" rx="4" stroke="currentColor" stroke-width="1.6" opacity="0.72"/>
      <path d="M26 30v-8h14v8M15 41c11 5 25 5 36 0M31 43v5h5v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M88 13c11 5 16 16 13 29L90 53 78 41c-2-13 1-23 10-28Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <circle cx="90" cy="30" r="5" stroke="currentColor" stroke-width="1.4"/>
      <path d="m81 49-5 11 11-5M97 47l4 11-11-5M70 20h-7M69 29h-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.68"/>
    </svg>`,
  },
  'η αγορά εργασίας': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #111827 0%, #1e3a8a 55%, #b45309 100%)',
    glow: 'rgba(96, 165, 250, 0.42)',
    primaryEmoji: '📊',
    secondaryEmoji: '🏢',
    accentEmoji: '🤝',
    caption: 'Рынок труда движется: спрос, предложение и твоя ниша.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 65h88M25 65V49h12v16M47 65V37h12v28M69 65V25h12v40" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.72"/>
      <path d="m21 35 20-13 17 6 29-17M78 11h9v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="97" cy="47" r="8" stroke="currentColor" stroke-width="1.5" opacity="0.58"/>
      <path d="M86 65c1-8 5-12 11-12s10 4 11 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.58"/>
      <circle cx="60" cy="39" r="34" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'αναζητώ δουλειά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c0a09 0%, #44403c 52%, #b45309 100%)',
    glow: 'rgba(251, 191, 36, 0.4)',
    primaryEmoji: '🔍',
    secondaryEmoji: '💼',
    accentEmoji: '📄',
    caption: 'Ищу не просто вакансию, а место для следующего шага.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="28" width="51" height="33" rx="5" stroke="currentColor" stroke-width="1.7" opacity="0.72"/>
      <path d="M32 28v-8h23v8M18 40c15 6 36 6 51 0M40 43v5h7v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="83" cy="41" r="18" fill="currentColor" opacity="0.07"/>
      <circle cx="83" cy="41" r="17" stroke="currentColor" stroke-width="1.8"/>
      <path d="m95 53 12 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <path d="m83 32 2.5 5 5.5.8-4 4 .9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-4 5.5-.8 2.5-5Z" fill="currentColor" opacity="0.34"/>
    </svg>`,
  },
  'ο σύμβουλος καριέρας': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #172554 0%, #4338ca 52%, #0f766e 100%)',
    glow: 'rgba(129, 140, 248, 0.44)',
    primaryEmoji: '🧭',
    secondaryEmoji: '💼',
    accentEmoji: '💡',
    caption: 'Карьерный компас: совет, стратегия и реалистичный маршрут.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="30" r="9" stroke="currentColor" stroke-width="1.6" opacity="0.68"/>
      <path d="M15 62c2-14 7-21 16-21s14 7 16 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.68"/>
      <circle cx="89" cy="30" r="9" stroke="currentColor" stroke-width="1.6" opacity="0.68"/>
      <path d="M73 62c2-14 7-21 16-21s14 7 16 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.68"/>
      <circle cx="60" cy="43" r="16" fill="currentColor" opacity="0.08"/>
      <circle cx="60" cy="43" r="15" stroke="currentColor" stroke-width="1.5"/>
      <path d="m66 33-4 12-9 6 4-12 9-6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M45 12h30v15H56l-7 6v-6h-4V12Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity="0.48"/>
    </svg>`,
  },
  'βάζω επαγγελματικούς στόχους': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #6d28d9 55%, #b45309 100%)',
    glow: 'rgba(192, 132, 252, 0.44)',
    primaryEmoji: '🎯',
    secondaryEmoji: '📈',
    accentEmoji: '🧭',
    caption: 'Цель на горизонте превращает план в последовательные шаги.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="82" cy="33" r="25" stroke="currentColor" stroke-width="1.4" opacity="0.28"/>
      <circle cx="82" cy="33" r="16" stroke="currentColor" stroke-width="1.6" opacity="0.52"/>
      <circle cx="82" cy="33" r="6" stroke="currentColor" stroke-width="1.8"/>
      <path d="M17 61 75 37M67 33l10 2-2 10" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 66h20V57h17V47h16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity="0.58"/>
      <circle cx="82" cy="33" r="30" fill="currentColor" opacity="0.04"/>
      <path d="M18 18v12M12 24h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.42"/>
    </svg>`,
  },
  'το βιογραφικό σημείωμα (CV)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #111827 0%, #334155 55%, #64748b 100%)',
    glow: 'rgba(203, 213, 225, 0.34)',
    primaryEmoji: '📄',
    secondaryEmoji: '👔',
    accentEmoji: '✨',
    caption: 'Одна страница, которая убедительно рассказывает о твоём опыте.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 8h43l15 15v49H30V8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.8"/>
      <path d="M73 8v16h15" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.5"/>
      <circle cx="47" cy="34" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M36 53c1-9 5-13 11-13s10 4 11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M64 32h14M64 40h14M64 48h10M41 62h35" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.48"/>
      <path d="m99 12 2 4 4 .6-3 3 .7 4.4-3.7-2-3.7 2 .7-4.4-3-3 4-.6 2-4Z" fill="currentColor" opacity="0.3"/>
    </svg>`,
  },
  'η συνέντευξη για δουλειά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #020617 0%, #1e40af 52%, #0f766e 100%)',
    glow: 'rgba(96, 165, 250, 0.44)',
    primaryEmoji: '🤝',
    secondaryEmoji: '💼',
    accentEmoji: '💬',
    caption: 'Диалог, в котором опыт встречается с ожиданиями работодателя.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="29" cy="27" r="8" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="91" cy="27" r="8" stroke="currentColor" stroke-width="1.6"/>
      <path d="M14 53c1-12 6-18 15-18s14 6 15 18M76 53c1-12 6-18 15-18s14 6 15 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.72"/>
      <path d="M12 59h96M40 59v10M80 59v10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M48 10h25v17H59l-7 6v-6h-4V10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M55 18h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.58"/>
      <circle cx="60" cy="59" r="3" fill="currentColor" opacity="0.4"/>
    </svg>`,
  },
  'η προϋπηρεσία / η εμπειρία': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1c1917 0%, #57534e 52%, #a16207 100%)',
    glow: 'rgba(251, 191, 36, 0.38)',
    primaryEmoji: '🧳',
    secondaryEmoji: '📈',
    accentEmoji: '🏅',
    caption: 'Опыт — это решённые задачи, а не только годы в трудовой.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 65h21V54h20V43h20V32h27" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <circle cx="86" cy="20" r="11" stroke="currentColor" stroke-width="1.6"/>
      <path d="M86 14v7l5 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m29 17 4 8 9 1-6.5 6 1.5 9-8-4-8 4 1.5-9-6.5-6 9-1 4-8Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity="0.48"/>
      <path d="M15 71h88" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.2"/>
      <circle cx="56" cy="43" r="3" fill="currentColor" opacity="0.5"/>
    </svg>`,
  },
  'τα προσόντα (πτυχίο, ξένες γλώσσες)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #172554 0%, #1d4ed8 52%, #047857 100%)',
    glow: 'rgba(52, 211, 153, 0.4)',
    primaryEmoji: '🎓',
    secondaryEmoji: '🌍',
    accentEmoji: '🗣️',
    caption: 'Диплом, языки и навыки складываются в сильный профиль.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20h53v39H18z" stroke="currentColor" stroke-width="1.7" opacity="0.76"/>
      <path d="M27 30h25M27 39h19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.48"/>
      <circle cx="58" cy="46" r="7" stroke="currentColor" stroke-width="1.5"/>
      <path d="m55 52-2 13 6-4 6 4-2-13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M79 13h27v19H93l-7 6v-6h-7V13ZM80 45h25v16H93l-6 5v-5h-7V45Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.72"/>
      <path d="M86 22h13M87 53h11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="92" cy="22" r="17" fill="currentColor" opacity="0.04"/>
    </svg>`,
  },
  'ο μισθός / ο βασικός μισθός': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #052e16 0%, #166534 52%, #a16207 100%)',
    glow: 'rgba(250, 204, 21, 0.4)',
    primaryEmoji: '💰',
    secondaryEmoji: '💶',
    accentEmoji: '📄',
    caption: 'Базовый оклад — цифра, за которой стоят ценность и договорённости.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="42" cy="39" r="24" stroke="currentColor" stroke-width="1.7"/>
      <circle cx="42" cy="39" r="17" stroke="currentColor" stroke-width="1.3" opacity="0.34"/>
      <path d="M52 29c-4-3-9-4-13-2-7 3-9 11-5 18 4 8 14 9 20 3M27 36h18M27 43h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M72 60h35M76 60V47h8v13M88 60V35h8v25M100 60V23h7v37" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity="0.72"/>
      <path d="M70 67h38" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.28"/>
      <circle cx="42" cy="39" r="29" fill="currentColor" opacity="0.04"/>
    </svg>`,
  },
  'η μονιμότητα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 52%, #0f766e 100%)',
    glow: 'rgba(45, 212, 191, 0.38)',
    primaryEmoji: '🛡️',
    secondaryEmoji: '📜',
    accentEmoji: '⚓',
    caption: 'Постоянный контракт даёт уверенность строить планы.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 9 93 20v22c0 17-12 25-33 31-21-6-33-14-33-31V20L60 9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <circle cx="60" cy="25" r="4" stroke="currentColor" stroke-width="1.5"/>
      <path d="M60 29v28M49 37h22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M44 48c2 10 8 15 16 15s14-5 16-15M39 48h10M71 48h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60 15 87 24v17c0 13-9 20-27 26-18-6-27-13-27-26V24l27-9Z" stroke="currentColor" stroke-width="1" opacity="0.18"/>
      <circle cx="60" cy="41" r="29" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'το ωράριο εργασίας (πλήρες / μερικό)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #111827 0%, #1e3a8a 52%, #0e7490 100%)',
    glow: 'rgba(56, 189, 248, 0.4)',
    primaryEmoji: '⏰',
    secondaryEmoji: '📅',
    accentEmoji: '⚖️',
    caption: 'Полный день или частичная занятость: ритм работы должен быть прозрачным.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10v60" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.22"/>
      <circle cx="33" cy="40" r="23" stroke="currentColor" stroke-width="1.7"/>
      <path d="M33 25v16l11 7M33 13v5M33 62v5M6 40h5M55 40h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M94 18a22 22 0 1 0 0 44V18Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M94 18v44M94 27v14l-10 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.72"/>
      <path d="M72 40a22 22 0 0 1 22-22" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4" opacity="0.34"/>
      <circle cx="33" cy="40" r="28" fill="currentColor" opacity="0.04"/>
    </svg>`,
  },
  'οι αργίες και οι άδειες': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #083344 0%, #0369a1 58%, #d97706 100%)',
    glow: 'rgba(251, 191, 36, 0.42)',
    primaryEmoji: '🏖️',
    secondaryEmoji: '📅',
    accentEmoji: '🌴',
    caption: 'Праздники и отпуск — законное время для отдыха и перезагрузки.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 22h59v45H16zM16 34h59M29 15v14M63 15v14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.76"/>
      <path d="M27 44h8M43 44h8M59 44h8M27 55h8M43 55h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.48"/>
      <circle cx="94" cy="22" r="10" stroke="currentColor" stroke-width="1.5"/>
      <path d="M94 6v5M94 33v5M78 22h5M105 22h5M83 11l4 4M101 29l4 4M105 11l-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.62"/>
      <path d="M82 67c4-13 11-22 22-27M84 55c8 0 15 3 20 10M91 46c-2-7 0-13 5-18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
  },
  'η επαγγελματική ικανοποίηση': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #022c22 0%, #047857 55%, #ca8a04 100%)',
    glow: 'rgba(250, 204, 21, 0.4)',
    primaryEmoji: '🌟',
    secondaryEmoji: '💼',
    accentEmoji: '😊',
    caption: 'Когда работа приносит смысл, растут и результат, и желание развиваться.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="17" y="30" width="51" height="33" rx="5" stroke="currentColor" stroke-width="1.7" opacity="0.76"/>
      <path d="M31 30v-8h23v8M17 42c15 6 36 6 51 0M39 44v5h7v-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M88 16c6-8 17-3 15 6-2 9-15 17-15 17S75 31 73 22c-2-9 9-14 15-6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M77 65c4-9 11-14 20-14M88 65c2-6 7-10 14-11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.46"/>
      <path d="m88 24 2 4 4 .6-3 3 .7 4.4-3.7-2-3.7 2 .7-4.4-3-3 4-.6 2-4Z" fill="currentColor" opacity="0.28"/>
    </svg>`,
  },
  'βγάζω το ψωμί μου': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1c1917 0%, #78350f 52%, #d97706 100%)',
    glow: 'rgba(251, 146, 60, 0.44)',
    primaryEmoji: '🍞',
    secondaryEmoji: '💼',
    accentEmoji: '💰',
    caption: 'Ежедневный труд превращается в хлеб и независимость.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 49c0-12 10-22 23-22h34c13 0 23 10 23 22 0 8-6 13-13 13H33c-7 0-13-5-13-13Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M45 29c-5 5-6 12-3 18M61 27c-5 6-6 13-3 19M77 29c-5 5-6 12-3 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.56"/>
      <circle cx="27" cy="18" r="9" stroke="currentColor" stroke-width="1.5"/>
      <path d="M27 13v10M22 18h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.68"/>
      <path d="M14 69h92" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.24"/>
      <circle cx="60" cy="45" r="34" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'ξεκινάω από το μηδέν': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #020617 0%, #1e1b4b 52%, #2563eb 100%)',
    glow: 'rgba(96, 165, 250, 0.46)',
    primaryEmoji: '🌱',
    secondaryEmoji: '🚀',
    accentEmoji: '0️⃣',
    caption: 'Ноль — не пустота, а стартовая линия нового пути.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="31" cy="40" r="21" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="31" cy="40" r="8" stroke="currentColor" stroke-width="1.5" opacity="0.42"/>
      <path d="M55 57h15V46h15V35h20M54 40h38m-8-8 8 8-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 69h82" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.22"/>
      <path d="M31 18c0-7 4-11 11-12-1 7-4 11-11 12ZM31 18c-1-6-5-9-11-9 1 6 4 9 11 9Z" fill="currentColor" opacity="0.24"/>
      <circle cx="31" cy="40" r="27" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'απαιτητική δουλειά': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1c1917 0%, #7f1d1d 52%, #b45309 100%)',
    glow: 'rgba(251, 113, 133, 0.4)',
    primaryEmoji: '🧗',
    secondaryEmoji: '💼',
    accentEmoji: '⚡',
    caption: 'Высокая планка требует выносливости, поддержки и грамотного темпа.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m10 65 31-44 17 23 12-17 40 38H10Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="m32 34 9 8 9-9M63 41l7 7 7-7" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" opacity="0.42"/>
      <path d="m60 9-9 17h10l-5 15 19-23H64l5-9h-9Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" opacity="0.28"/>
      <path d="M16 72h88" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.22"/>
      <circle cx="41" cy="21" r="4" fill="currentColor" opacity="0.5"/>
    </svg>`,
  },
  'η ανεργία / ο άνεργος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 55%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.34)',
    primaryEmoji: '📉',
    secondaryEmoji: '🪑',
    accentEmoji: '💼',
    caption: 'Без работы, но не без ценности: поиск продолжается.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 31h31v24H25zM20 55h41M29 55v14M52 55v14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.72"/>
      <path d="M25 31c0-9 6-15 15-15s16 6 16 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.48"/>
      <path d="M70 17h35v37H70z" stroke="currentColor" stroke-width="1.4" opacity="0.28"/>
      <path d="m74 26 9 7 8-3 10 15M95 45h6v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 71h94" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.2"/>
      <circle cx="40" cy="43" r="25" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'η πρόσληψη / προσλαμβάνω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #022c22 0%, #047857 55%, #059669 100%)',
    glow: 'rgba(52, 211, 153, 0.46)',
    primaryEmoji: '🤝',
    secondaryEmoji: '📄',
    accentEmoji: '✅',
    caption: 'Подписанный контракт — навстречу новой команде.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 13h40v51H15z" stroke="currentColor" stroke-width="1.7" opacity="0.72"/>
      <path d="M24 26h20M24 35h15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.48"/>
      <circle cx="43" cy="51" r="10" stroke="currentColor" stroke-width="1.5"/>
      <path d="m38 51 4 4 7-9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m59 43 12-8 11 7 8-4 17 14-9 9-12-8-8 6c-4 3-9 2-12-1l-7-7v-8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="m71 35 8 13M90 38l-9 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.58"/>
      <circle cx="82" cy="48" r="27" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'η απόλυση / απολύω': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #292524 0%, #450a0a 52%, #7f1d1d 100%)',
    glow: 'rgba(248, 113, 113, 0.38)',
    primaryEmoji: '📦',
    secondaryEmoji: '🚪',
    accentEmoji: '📄',
    caption: 'Дверь закрывается не по твоему выбору; важно сохранить опору.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 10h48v58H25zM35 18h28v50H35z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" opacity="0.72"/>
      <circle cx="56" cy="44" r="2.5" fill="currentColor"/>
      <path d="M77 40h30m-8-8 8 8-8 8" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 61h23l4 9H8l4-9ZM16 61V49h15v12M20 49v-5h7v5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.62"/>
      <path d="M18 55h12" stroke="currentColor" stroke-width="1.3" opacity="0.42"/>
      <circle cx="49" cy="40" r="34" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'η παραίτηση / παραιτούμαι': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #111827 0%, #4c1d95 52%, #0f766e 100%)',
    glow: 'rgba(167, 139, 250, 0.42)',
    primaryEmoji: '✍️',
    secondaryEmoji: '📄',
    accentEmoji: '🚪',
    caption: 'Решение уйти — тоже шаг: осознанный и оформленный.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 14h51v43H17z" stroke="currentColor" stroke-width="1.7" opacity="0.74"/>
      <path d="M27 27h29M27 36h21M27 45h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.46"/>
      <path d="M27 52c7-8 10 6 17-2 4-5 7-3 10 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="m51 57 32-34 9 9-32 34-13 4 4-13Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="m77 30 9 9M82 67h25M95 59v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.58"/>
      <circle cx="43" cy="35" r="29" fill="currentColor" opacity="0.035"/>
    </svg>`,
  },
  'οι υπερωρίες': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c0a09 0%, #7c2d12 55%, #d97706 100%)',
    glow: 'rgba(251, 146, 60, 0.44)',
    primaryEmoji: '🌙',
    secondaryEmoji: '⏰',
    accentEmoji: '💼',
    caption: 'Часы сверх графика видны в табеле — и на балансе сил.',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="38" r="27" stroke="currentColor" stroke-width="1.8"/>
      <path d="M45 21v18l14 8M45 7v5M45 64v5M14 38h5M71 38h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M91 12c-9 3-13 12-9 21 4 10 15 13 24 7-3 10-12 16-23 14-13-2-21-14-18-26 3-12 15-19 26-16Z" fill="currentColor" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" opacity="0.18"/>
      <path d="M16 71h90M80 62h27v9H80z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.58"/>
      <circle cx="45" cy="38" r="32" fill="currentColor" opacity="0.035"/>
      <path d="m101 15 1.5 3.5L106 20l-3.5 1.5L101 25l-1.5-3.5L96 20l3.5-1.5L101 15Z" fill="currentColor" opacity="0.5"/>
    </svg>`,
  },
};
