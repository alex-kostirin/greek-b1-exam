import type { WordVisualScene } from '../../types/illustration';

export const BATCH12_SCENES: Record<string, WordVisualScene> = {
  'κεντρίζω τη φαντασία': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    glow: 'rgba(99, 102, 241, 0.45)',
    primaryEmoji: '💡',
    secondaryEmoji: '✨',
    accentEmoji: '🧠',
    caption: 'Искра воображения',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10 L68 30 L90 32 L72 46 L78 68 L60 56 L42 68 L48 46 L30 32 L52 30 Z" fill="currentColor" fillOpacity="0.25" />
      <circle cx="60" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
    </svg>`,
  },
  'η λαχτάρα (με λαχτάρα)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '❤️🔥',
    secondaryEmoji: '😩',
    accentEmoji: '💔',
    caption: 'Жгучее желание',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 20 C40 20 20 40 20 55 C20 70 40 75 60 65 C80 75 100 70 100 55 C100 40 80 20 60 20Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M60 30 L60 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>`,
  },
  'μοιράζομαι τον ενθουσιασμό': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🤝',
    secondaryEmoji: '🎉',
    accentEmoji: '🔥',
    caption: 'Делюсь восторгом',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="15" fill="currentColor" fillOpacity="0.15" />
      <circle cx="80" cy="40" r="15" fill="currentColor" fillOpacity="0.15" />
      <path d="M55 40 L65 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M40 25 L40 15 M40 55 L40 65 M25 40 L15 40 M55 40 L65 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>`,
  },
  'ξεφυλλίζω (ξεφύλλισα)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '📖',
    secondaryEmoji: '👆',
    accentEmoji: '📄',
    caption: 'Листаю страницы',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="15" width="60" height="50" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M45 25 L75 25 M45 35 L75 35 M45 45 L75 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M90 20 L90 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'το οπισθόφυλλο': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    glow: 'rgba(56, 189, 248, 0.45)',
    primaryEmoji: '📚',
    secondaryEmoji: '🔙',
    accentEmoji: '🏷️',
    caption: 'Задняя обложка',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="80" height="60" rx="6" fill="currentColor" fillOpacity="0.08" />
      <rect x="30" y="20" width="60" height="40" rx="3" fill="currentColor" fillOpacity="0.12" />
      <path d="M40 30 L80 30 M40 40 L80 40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
    </svg>`,
  },
  'μιμούμαι (μιμήθηκα)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '🎭',
    secondaryEmoji: '🦜',
    accentEmoji: '👥',
    caption: 'Имитирую, подражаю',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="12" fill="currentColor" fillOpacity="0.15" />
      <circle cx="80" cy="40" r="12" fill="currentColor" fillOpacity="0.15" />
      <path d="M52 40 L68 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
      <path d="M40 28 L40 20 M40 52 L40 60 M28 40 L20 40 M52 40 L60 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'κάνω γκριμάτσες': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #831843 0%, #9d174d 50%, #be185d 100%)',
    glow: 'rgba(236, 72, 153, 0.45)',
    primaryEmoji: '😜',
    secondaryEmoji: '🤪',
    accentEmoji: '😝',
    caption: 'Строю рожицы',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="25" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="35" r="3" fill="currentColor" fillOpacity="0.6" />
      <circle cx="70" cy="35" r="3" fill="currentColor" fillOpacity="0.6" />
      <path d="M45 50 Q60 60 75 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M35 30 L45 35 M85 30 L75 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'χασμουριέμαι (χασμουρήθηκα)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '🥱',
    secondaryEmoji: '😴',
    accentEmoji: '💤',
    caption: 'Зеваю от души',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <path d="M45 35 Q60 20 75 35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="50" cy="35" r="2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="70" cy="35" r="2" fill="currentColor" fillOpacity="0.5" />
      <path d="M30 50 L90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'το ατελείωτο ταξίδι': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '🛤️',
    secondaryEmoji: '♾️',
    accentEmoji: '🌌',
    caption: 'Бесконечное путешествие',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 Q30 20 60 40 T110 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.5" />
      <path d="M20 50 L100 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
    </svg>`,
  },
  'ο λογοτεχνικός ήρωας': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 50%, #5b21b6 100%)',
    glow: 'rgba(168, 85, 247, 0.45)',
    primaryEmoji: '🦸',
    secondaryEmoji: '📜',
    accentEmoji: '⚔️',
    caption: 'Литературный герой',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 15 L70 35 L90 35 L75 48 L80 68 L60 56 L40 68 L45 48 L30 35 L50 35 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="60" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>`,
  },
  'συγκλονιστικός (-ή, -ό)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #701a75 0%, #86198f 50%, #a21caf 100%)',
    glow: 'rgba(192, 38, 211, 0.45)',
    primaryEmoji: '😲',
    secondaryEmoji: '💥',
    accentEmoji: '🌪️',
    caption: 'Потрясающий, шокирующий',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.1" />
      <path d="M60 20 L60 30 M60 50 L60 60 M40 40 L30 40 M80 40 L90 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.5" />
    </svg>`,
  },
  'το λιμνοσπήλαιο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🕳️',
    secondaryEmoji: '💧',
    accentEmoji: '🏞️',
    caption: 'Озерная пещера',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 70 Q60 20 90 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="60" cy="60" rx="25" ry="8" fill="currentColor" fillOpacity="0.15" />
      <path d="M45 60 Q60 50 75 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>`,
  },
  'κρυστάλλινα νερά': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '💎',
    secondaryEmoji: '🌊',
    accentEmoji: '✨',
    caption: 'Кристально чистые воды',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50 Q30 30 60 50 T110 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M20 60 Q40 45 60 60 T100 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="60" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="80" cy="45" r="2" fill="currentColor" fillOpacity="0.4" />
    </svg>`,
  },
  'η άγρια ομορφιά': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '🌋',
    secondaryEmoji: '🌺',
    accentEmoji: '🐆',
    caption: 'Дикая красота',
    svgMotif: `<svg viewox="0 0 120 80" fill="none" xmlns="http://www.w3.og/2000/svg">
      <pah d="M20 70 L40 30 L60 70 L80 30 L100 70" stoke="currentColor" stokeWidth="1.5" fill="none" opacity="0.6" />
      <cicle cx="40" cy="30" r="4" fill="currntColor" fillOpaity="0.4" />
      <cicle cx="80" cy="30" r="4" fill="currntColor" fillOpaity="0.4" />
    </svg>`,
  },
  'η θαλάσσια ιστιοσανίδα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '🏄',
    secondaryEmoji: '🌊',
    accentEmoji: '💨',
    caption: 'Виндсерфинг',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://ww.w3.org/2000/svg">
      <path d="M30 50 Q60 30 90 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M60 30 L60 15 M60 15 L75 20 M60 15 L45 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="30" r="3" fill="currentColor" fillOpacity="0.5" />
    </svg>`,
  },
 'το παραπέντε': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '',
    secondaryEmoji: '☁',
    accentEmoji: '🌬',
    caption: 'Параплан',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 30 Q60 10 90 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M60 30 L60 60 M55 60 L65 60" stroke="currentColor" strokeWidth="1.2" stokeLinecap="round" opacity="0.5" />
      <cicle cx="60" cy="60" r="3" fill="currentColor" fillOpaity="0.5" />
    </svg>`,
  },
  'οι καταδύσες': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '🤿',
    secondaryEmoji: '🐠',
    accentEmoji: '🦑',
    caption: 'Дайвинг',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 Q40 40 60 60 T100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="50" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M60 50 L60 40 M55 45 L65 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>`,
  },
  'η ιππασία': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '🐴',
    secondaryEmoji: '🏇',
    accentEmoji: '🌾',
    caption: 'Веровая езда',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 Q60 30 90 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="35" r="5" fill="currentColor" fillOpacity="0.4" />
      <path d="M60 35 L60 50 M55 45 L65 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>`,
  },
  'κοσμοπολίτικος (-η, -ο)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '🌍',
    secondaryEmoji: '🏙',
    accentEmoji: '✈',
    caption: 'Космополитичный',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="25" fill="currentColor" fillOpacity="0.08" />
      <path d="M35 40 L85 40 M60 15 L60 65" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="60" cy="40" r="8" fill="currentColor" fillOpacity="0.15" />
    </svg>`,
  },
  'μεγαλοπρεπής (-ής, -ές)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '👑',
    secondaryEmoji: '🏛️',
    accentEmoji: '🌟',
    caption: 'Величественный',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 10 L70 30 L90 30 L75 45 L80 65 L60 52 L40 65 L45 45 L30 30 L50 30 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="60" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>`,
  },
  'το βενετσιάνικο φρούριο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '🏰',
    secondaryEmoji: '🇮🇹',
    accentEmoji: '⚓',
    caption: 'Венецианская крепость',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L40 20 L50 20 L50 30 M70 30 L70 20 L80 20 L80 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="45" y="40" width="30" height="20" rx="2" fill="currentColor" fillOpacity="0.15" />
    </svg>`,
  },
  'η τοπική νοστιμιά': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '🍲',
    secondaryEmoji: '🏡',
    accentEmoji: '😋',
    caption: 'Местный деликатес',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 30 Q60 15 80 30 L75 60 L45 60 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M50 30 Q60 20 70 30" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
      <circle cx="60" cy="45" r="5" fill="currentColor" fillOpacity="0.3" />
    </svg>`,
  },
  'το παραδοσιακό έθιμο': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '🎎',
    secondaryEmoji: '🕯️',
    accentEmoji: '💃',
    caption: 'Традиционный обычай',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <path d="M60 20 L60 30 M60 50 L60 60 M40 40 L30 40 M80 40 L90 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacit="0.2" />
    </svg>`,
  },
  'το ναυάγιο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '🚢',
    secondaryEmoji: '💥',
    accentEmoji: '🪸',
    caption: 'Кораблекрушение',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 L40 40 L60 60 L80 40 L100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M30 50 L50 50 M70 50 L90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>`,
  },
  'το θαλάσσιο πάρκο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🐬',
    secondaryEmoji: '🌊',
    accentEmoji: '🏞️',
    caption: 'Морской парк',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50 Q30 30 60 50 T110 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="40" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
      <path d="M30 55 L90 55" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
    </svg>`,
  },
 'η θαλάσσια χελώνα (Καρέττα-Καρέττα)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🐢',
    secondaryEmoji: '🌊',
    accentEmoji: '🥚',
    caption: 'Морская черепаха каретта',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="20" ry="12" fill="currentColor" fillOpacity="0.15" />
      <circle cx="45" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="75" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'η μεσογειακή φώκια (Μονάχους-Μονάχους)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    glow: 'rgba(14, 165, 233, 0.45)',
    primaryEmoji: '🦭',
    secondaryEmoji: '🌊',
    accentEmoji: '🏖️',
    caption: 'Средиземноморский тюлень-монах',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="45" rx="18" ry="14" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="70" cy="40" r="3" fill="currentColor" fillOpacity="0.5" />
      <path d="M45 50 Q60 55 75 50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>`,
  },
  'απέραντος (-η, -ο)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '🌌',
    secondaryEmoji: '♾️',
    accentEmoji: '🏜️',
    caption: 'Бескрайний',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 Q30 20 60 40 T110 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M20 50 Q40 35 60 50 T100 50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="60" cy="40" r="3" fill="currentColor" fillOpacity="0.4" />
    </svg>`,
  },
  'εξαιρετικά παρθένο ελαιόλαδο': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '🫒',
    secondaryEmoji: '🍃',
    accentEmoji: '✨',
    caption: 'Оливковое масло первого отжима',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="40" rx="15" ry="20" fill="currentColor" fillOpacity="0.15" />
      <path d="M60 20 L60 25 M60 55 L60 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
    </svg>`,
  },
  'ο αγροτουρισμός': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🚜',
    secondaryEmoji: '🏡',
    accentEmoji: '🌾',
    caption: 'Агротуризм',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 L40 40 L60 60 L80 40 L100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="45" y="30" width="30" height="20" rx="3" fill="currentColor" fillOpacity="0.1" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>`,
  },
  'μένω άφωνος (-η, -ο)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '😶',
    secondaryEmoji: '🤯',
    accentEmoji: '💬',
    caption: 'Онемел, потерял дар речи',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <path d="M50 35 L55 35 M65 35 L70 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M45 50 L75 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M30 40 L90 40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'το ομηρικό έπος (τα έπη)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '📜',
    secondaryEmoji: '⚔️',
    accentEmoji: '🏺',
    caption: 'Гомеровский эпос',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 20 L90 20 L80 60 L40 60 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L80 30 M40 40 L80 40 M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>`,
  },
  'η αφήγηση / αφηγηματικός': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '🗣️',
    secondaryEmoji: '📖',
    accentEmoji: '🎙️',
    caption: 'Повествование, рассказ',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 Q60 20 90 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>`,
  },
  'το κατόρθωμα (τα κατορθώματα)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '🏆',
    secondaryEmoji: '💪',
    accentEmoji: '🌟',
    caption: 'Подвиг, достижение',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 15 L70 35 L90 35 L75 48 L80 68 L60 56 L40 68 L45 48 L30 35 L50 35 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="60" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>`,
  },
  'αντικειμενικός (-ή, -ό)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '⚖️',
    secondaryEmoji: '🧐',
    accentEmoji: '📊',
    caption: 'Объективный',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 60 L60 20 L90 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'ο αοιδός και ο ραψωδός': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '🎤',
    secondaryEmoji: '🎼',
    accentEmoji: '🏛️',
    caption: 'Аэд и рапсод',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="80" cy="40" r="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M52 40 L68 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
      <path d="M40 28 L40 20 M40 52 L40 60 M28 40 L20 40 M52 40 L60 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'μαθαίνω απ\' έξω (αποστηθίζω)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '🧠',
    secondaryEmoji: '📝',
    accentEmoji: '🔁',
    caption: 'Учу наизусть',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 Q60 20 90 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>`,
  },
  'απαγγέλλω (απήγγειλα)': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '🎭',
    secondaryEmoji: '📜',
    accentEmoji: '🎙️',
    caption: 'Декламирую',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 Q60 20 90 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>`,
  },
  'το αδέσποτο ζώο': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '🐕',
    secondaryEmoji: '🏚️',
    accentEmoji: '💔',
    caption: 'Бездомное животное',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="15" fill="currentColor" fillOpacity="0.1" />
      <path d="M45 35 L55 35 M65 35 L75 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M50 45 Q60 50 70 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>`,
  },
  'η αρμονική συνύπαρξη': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🤝',
    secondaryEmoji: '🌍',
    accentEmoji: '☮️',
    caption: 'Гармоничное сосуществование',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="80" cy="40" r="12" fill="currentColor" fillOpacity="0.1" />
      <path d="M52 40 L68 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
      <path d="M40 28 L40 20 M40 52 L40 60 M28 40 L20 40 M52 40 L60 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'τιμώ τη μνήμη': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '🕯️',
    secondaryEmoji: '🙏',
    accentEmoji: '🕊️',
    caption: 'Чту память',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 20 L60 50 M55 50 L65 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="60" cy="20" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M40 60 L80 60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'το καλλιτεχνικό ομοίωμα': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)',
    glow: 'rgba(139, 92, 246, 0.45)',
    primaryEmoji: '🗿',
    secondaryEmoji: '🎨',
    accentEmoji: '🖼️',
    caption: 'Художественный макет',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L80 30 M40 40 L80 40 M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'η κοινωνική ευθύνη': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '🤲',
    secondaryEmoji: '🌐',
    accentEmoji: '⚖️',
    caption: 'Социальная ответственность',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <path d="M40 40 L80 40 M60 20 L60 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'η εγκατάλειψη ζώων': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '😢',
    secondaryEmoji: '🐱',
    accentEmoji: '🚫',
    caption: 'Оставление животных',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="15" fill="currentColor" fillOpacity="0.1" />
      <path d="M45 35 L55 35 M65 35 L75 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M50 45 Q60 50 70 45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M30 50 L90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'το αγροτουριστικό κατάλυμα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🏡',
    secondaryEmoji: '🌾',
    accentEmoji: '🛏️',
    caption: 'Агротуристическое жилье',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L40 20 L50 20 L50 30 M70 30 L70 20 L80 20 L80 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="45" y="40" width="30" height="20" rx="2" fill="currentColor" fillOpacity="0.15" />
    </svg>`,
  },
  'οι κτηνοτροφικές ασχολίες': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '🐄',
    secondaryEmoji: '🐑',
    accentEmoji: '🌾',
    caption: 'Животноводческие занятия',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 L40 40 L60 60 L80 40 L100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="40" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>`,
  },
  'η παρατήρηση οικοσυστήματος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🔍',
    secondaryEmoji: '🌿',
    accentEmoji: '🦎',
    caption: 'Наблюдение за экосистемой',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="15" fill="currentColor" fillOpacity="0.08" />
      <path d="M45 40 L55 40 M65 40 L75 40 M60 25 L60 35 M60 45 L60 55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="40" r="3" fill="currentColor" fillOpacity="0.4" />
    </svg>`,
  },
  'η παρασκευή φυσικών προϊόντων': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🧪',
    secondaryEmoji: '🌱',
    accentEmoji: '🧴',
    caption: 'Изготовление натуральных продуктов',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L80 30 M40 40 L80 40 M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'ο/η εκπαιδευτικός': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '👩🏫',
    secondaryEmoji: '📚',
    accentEmoji: '✏️',
    caption: 'Учитель/учительница',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="30" r="10" fill="currentColor" fillOpacity="0.15" />
      <path d="M40 50 L80 50 L75 70 L45 70 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 50 L50 40 M70 50 L70 40" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>`,
  },
  'προβληματίζομαι (προβληματίστηκα)': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '🤔',
    secondaryEmoji: '❓',
    accentEmoji: '💭',
    caption: 'Задумываюсь, озадачен',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="15" fill="currentColor" fillOpacity="0.08" />
 <path d="M55 35 L60 40 L65 35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="45" r="2" fill="currentColor" fillOpacity="0.5" />
    </svg>`,
  },
  'τα απαραίτητα προσόντα': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '📋',
    secondaryEmoji: '✅',
    accentEmoji: '💼',
    caption: 'Необходимые качества',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L80 30 M40 40 L80 40 M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'τα κριτήρια επιλογής επαγγέλματος': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '⚖️',
    secondaryEmoji: '💼',
    accentEmoji: '📊',
    caption: 'Критерии выбора профессии',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 60 L60 20 L90 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'ο μη κερδοσκοπικός οργανισμός (ΜΚΟ)': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🏛️',
    secondaryEmoji: '🤝',
    accentEmoji: '💚',
    caption: 'Некоммерческая организация (НКО)',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="60" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <path d="M40 30 L80 30 M40 40 L80 40 M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'η καμπάνια ενημέρωσης': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '📢',
    secondaryEmoji: '📣',
    accentEmoji: '💡',
    caption: 'Информационная кампания',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 L90 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 30 L40 50 M80 30 L80 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'τα ακραία καιρικά φαινόμενα': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '🌪️',
    secondaryEmoji: '🌊',
    accentEmoji: '⚡',
    caption: 'Экстремальные погодные явления',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 60 Q60 20 90 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.4" />
    </svg>`,
  },
  'η ρύπανση του περιβάλλοντος': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
    glow: 'rgba(239, 68, 68, 0.45)',
    primaryEmoji: '🏭',
    secondaryEmoji: '💨',
    accentEmoji: '🌫️',
    caption: 'Загрязнение окружающей среды',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 L40 40 L60 60 L80 40 L100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="40" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
      <path d="M30 50 L90 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'η αντιμετώπιση της κλιματικής κρίσης': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🌍',
    secondaryEmoji: '🔥',
    accentEmoji: '💪',
    caption: 'Борьба с климатическим кризисом',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <path d="M40 40 L80 40 M60 20 L60 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="60" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>`,
  },
  'παρεξηγούμαι με το παραμικρό': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #831843 0%, #9d174d 50%, #be185d 100%)',
    glow: 'rgba(236, 72, 153, 0.45)',
    primaryEmoji: '😤',
    secondaryEmoji: '🤷',
    accentEmoji: '💢',
    caption: 'Обижаюсь по пустякам',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="40" r="15" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 35 L55 35 M65 35 L70 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M45 50 L75 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>`,
  },
  'η χλωρίδα και η πανίδα': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    glow: 'rgba(16, 185, 129, 0.45)',
    primaryEmoji: '🌿',
    secondaryEmoji: '🦌',
    accentEmoji: '🐝',
    caption: 'Флора и фауна',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 60 Q40 30 60 60 T100 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="40" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="45" r="3" fill="currentColor" fillOpacity="0.4" />
    </svg>`,
  },
  'αιτιολογώ την άποψή μου': {
    layout: 'cause-effect',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
    glow: 'rgba(148, 163, 184, 0.45)',
    primaryEmoji: '💬',
    secondaryEmoji: '🧾',
    accentEmoji: '✅',
    caption: 'Обосновываю своё мнение',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 L90 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="60" cy="40" r="5" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 30 L40 50 M80 30 L80 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>`,
  },
  'οι υψηλές αποδοχές': {
    layout: 'split',
    gradient: 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)',
    glow: 'rgba(245, 158, 11, 0.45)',
    primaryEmoji: '💰',
    secondaryEmoji: '📈',
    accentEmoji: '💵',
    caption: 'Высокий доход',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 60 L60 20 L90 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
  'οι προοπτικές εξέλιξης': {
    layout: 'scene',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    glow: 'rgba(59, 130, 246, 0.45)',
    primaryEmoji: '🚀',
    secondaryEmoji: '📊',
    accentEmoji: '🔝',
    caption: 'Перспективы роста',
    svgMotif: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 60 L60 20 L90 60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="40" r="4" fill="currentColor" fillOpacity="0.4" />
      <path d="M40 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
    </svg>`,
  },
};
