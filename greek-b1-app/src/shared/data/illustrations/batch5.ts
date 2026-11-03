import type { WordVisualScene } from '../../types/illustration';

/**
 * Визуальные ассоциации для слов главы 4: характер, отношения,
 * конфликты, дружба и школьный буллинг.
 *
 * Значения primaryEmoji, secondaryEmoji и accentEmoji являются
 * именами файлов Twemoji без расширения .svg.
 */
export const BATCH5_SCENES: Record<string, WordVisualScene> = {
  'ειλικρινής (-ής, -ές) / η ειλικρίνεια': {
    layout: 'scene',
    gradient: 'from-rose-500/30 via-amber-400/20 to-slate-900',
    glow: 'bg-rose-400/25',
    primaryEmoji: '1f90d',
    secondaryEmoji: '1f4ac',
    accentEmoji: '2728',
    caption: 'Сердце без фильтров',
    svgMotif:
      '<path d="M100 164C79 143 42 116 42 78C42 47 79 40 100 67C121 40 158 47 158 78C158 116 121 143 100 164Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M28 100H56M144 100H172M100 22V48M52 42L66 58M148 42L134 58" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.14" /><circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1" />',
  },
  'υπομονετικός ≠ ανυπόμονος': {
    layout: 'split',
    gradient: 'from-sky-500/25 via-orange-500/20 to-slate-900',
    glow: 'bg-sky-400/25',
    primaryEmoji: '23f3',
    secondaryEmoji: '1f4a5',
    accentEmoji: '23f1',
    caption: 'Тихий отсчёт и кнопка «быстрее»',
    svgMotif:
      '<path d="M30 28H88M30 172H88M42 28C42 67 76 73 76 100C76 127 42 133 42 172M76 28C76 67 42 73 42 100C42 127 76 133 76 172" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.18" /><path d="M145 22L114 98H148L124 178L180 80H146L166 22Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.16" /><path d="M100 24V176" stroke="currentColor" stroke-width="1" stroke-dasharray="4 10" opacity="0.1" />',
  },
  'γλυκός ≠ ξινός': {
    layout: 'split',
    gradient: 'from-amber-400/30 via-lime-500/20 to-slate-900',
    glow: 'bg-amber-300/25',
    primaryEmoji: '1f36f',
    secondaryEmoji: '1f34b',
    accentEmoji: '1f609',
    caption: 'Мёд на губах, лимон в ответ',
    svgMotif:
      '<path d="M20 132C38 105 53 105 82 118C63 126 54 146 38 164C29 153 24 143 20 132Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M30 72C49 55 73 58 84 79C66 76 52 84 39 98" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" /><ellipse cx="141" cy="102" rx="39" ry="54" transform="rotate(35 141 102)" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M121 66L159 137M108 103L174 102M137 50L142 153" stroke="currentColor" stroke-width="1" opacity="0.11" />',
  },
  'ψυχρός ≠ θερμός / ζεστός': {
    layout: 'split',
    gradient: 'from-cyan-400/25 via-orange-500/20 to-slate-900',
    glow: 'bg-cyan-300/25',
    primaryEmoji: '2744',
    secondaryEmoji: '1f525',
    accentEmoji: '1f9e3',
    caption: 'Иней на стекле и тепло из открытой двери',
    svgMotif:
      '<path d="M52 28V172M18 62L86 138M18 138L86 62M32 42L52 62L72 42M32 158L52 138L72 158" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.17" /><path d="M144 174C110 157 111 126 131 101C132 121 143 125 149 110C159 86 145 66 157 35C187 73 190 111 177 143C170 161 158 170 144 174Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.18" /><path d="M100 20V180" stroke="currentColor" stroke-width="1" stroke-dasharray="3 11" opacity="0.1" />',
  },
  'πρόθυμος ≠ απρόθυμος': {
    layout: 'split',
    gradient: 'from-emerald-500/25 via-slate-500/20 to-slate-900',
    glow: 'bg-emerald-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f44e',
    accentEmoji: '1f6aa',
    caption: 'Шаг навстречу и отодвинутый стул',
    svgMotif:
      '<path d="M18 104H80M62 80L86 104L62 128M28 146C42 130 62 130 78 146" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.18" /><path d="M127 54H174V146H127M118 174L182 26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.16" /><circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 12" opacity="0.09" />',
  },
  'θρασύς (-ιά, -ύ) / το θράσος': {
    layout: 'scene',
    gradient: 'from-fuchsia-600/25 via-red-500/20 to-slate-950',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f60f',
    secondaryEmoji: '1f6a7',
    accentEmoji: '26a0',
    caption: 'Поднятая бровь и перечёркнутая черта',
    svgMotif:
      '<path d="M38 68C68 43 102 45 126 58M70 91C89 81 109 82 124 91" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.17" /><path d="M25 158L174 42M48 176L184 72" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.15" /><path d="M34 132H166L151 166H49Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" /><circle cx="148" cy="52" r="18" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" />',
  },
  'τρυφερός (-ή, -ό) / η τρυφερότητα': {
    layout: 'scene',
    gradient: 'from-pink-400/30 via-rose-300/20 to-slate-900',
    glow: 'bg-pink-300/25',
    primaryEmoji: '1f970',
    secondaryEmoji: '1f338',
    accentEmoji: '1f56f',
    caption: 'Лепестки на ладони',
    svgMotif:
      '<path d="M100 100C62 87 55 52 73 39C91 27 104 55 100 100ZM100 100C113 62 148 55 161 73C173 91 145 104 100 100ZM100 100C87 138 52 145 39 127C27 109 55 96 100 100ZM100 100C138 113 145 148 127 161C109 173 96 145 100 100Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.17" /><circle cx="100" cy="100" r="17" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M42 174C75 153 125 153 158 174" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.12" />',
  },
  'γκρινιάρης (-α, -ικο) / γκρινιάζω': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-indigo-500/20 to-slate-950',
    glow: 'bg-slate-400/25',
    primaryEmoji: '1f612',
    secondaryEmoji: '1f327',
    accentEmoji: '1f4ad',
    caption: 'Туча над чашкой и бормотание по кругу',
    svgMotif:
      '<path d="M42 92C29 67 49 45 73 53C83 25 126 27 134 57C161 49 179 76 163 96H42Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.17" /><path d="M59 116L49 137M96 116L86 137M137 116L127 137" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.15" /><path d="M150 157C126 180 76 176 58 151C43 130 67 119 86 131C104 142 92 158 77 153" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.12" />',
  },
  'ζηλιάρης (-α, -ικο) / η ζήλια': {
    layout: 'scene',
    gradient: 'from-lime-500/25 via-emerald-700/20 to-slate-950',
    glow: 'bg-lime-400/25',
    primaryEmoji: '1f440',
    secondaryEmoji: '1f49a',
    accentEmoji: '1f512',
    caption: 'Зелёный отблеск и взгляд через плечо',
    svgMotif:
      '<path d="M18 100C54 55 112 43 170 81C139 130 75 148 18 100Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><circle cx="94" cy="96" r="27" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><circle cx="103" cy="91" r="8" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M136 38C151 19 181 29 177 53C174 72 151 83 136 94C121 78 106 65 109 48C113 27 132 27 136 38Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" />',
  },
  'ευαίσθητος ≠ αναίσθητος': {
    layout: 'split',
    gradient: 'from-rose-400/25 via-slate-600/20 to-slate-950',
    glow: 'bg-rose-300/25',
    primaryEmoji: '1f493',
    secondaryEmoji: '1f5ff',
    accentEmoji: '1f4a7',
    caption: 'Капля будит эхо, камень молчит',
    svgMotif:
      '<path d="M51 25C42 45 28 59 28 76C28 94 39 104 52 104C66 104 77 94 77 76C77 59 62 44 51 25Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M15 131C31 115 71 115 88 131M6 153C30 130 76 130 98 153" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" /><path d="M121 48L174 40L184 157L116 166Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M132 82L144 78M157 76L169 73M143 118L163 115" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.12" />',
  },
  'η εμπιστοσύνη / εμπιστεύομαι': {
    layout: 'scene',
    gradient: 'from-blue-500/30 via-teal-400/20 to-slate-900',
    glow: 'bg-blue-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '1f511',
    accentEmoji: '1f9ed',
    caption: 'Мост, на который можно ступить',
    svgMotif:
      '<path d="M12 160L42 132C70 72 130 72 158 132L188 160M42 132H158M60 132V158M82 112V158M118 112V158M140 132V158" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.18" /><path d="M15 174C48 158 69 184 100 170C131 156 153 181 187 164" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" /><circle cx="100" cy="48" r="18" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.14" /><path d="M100 66V88" stroke="currentColor" stroke-width="1.5" opacity="0.14" />',
  },
  'η συμπαράσταση / συμπαραστέκομαι': {
    layout: 'scene',
    gradient: 'from-cyan-500/25 via-blue-500/20 to-slate-900',
    glow: 'bg-cyan-400/25',
    primaryEmoji: '1f450',
    secondaryEmoji: '1f6e1',
    accentEmoji: '1f499',
    caption: 'Плечо рядом, когда земля качается',
    svgMotif:
      '<path d="M22 142C40 117 58 105 82 107L100 124L118 107C142 105 160 117 178 142M38 158C63 137 78 137 100 153C122 137 137 137 162 158" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.18" /><path d="M100 26L145 43V80C145 107 126 126 100 137C74 126 55 107 55 80V43Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.13" /><path d="M15 178L42 169L62 179L88 168L113 179L141 168L185 178" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" />',
  },
  'η αφοσίωση / αφοσιωμένος (-η, -ο)': {
    layout: 'scene',
    gradient: 'from-amber-500/25 via-indigo-500/20 to-slate-950',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f415',
    secondaryEmoji: '267e',
    accentEmoji: '1f3e0',
    caption: 'Один маршрут домой в любую погоду',
    svgMotif:
      '<path d="M22 101C22 58 74 52 100 100C126 148 178 142 178 99C178 56 126 52 100 100C74 148 22 144 22 101Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M118 68L150 40L182 68M128 59V91H172V59M145 91V70H159V91" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.13" /><path d="M34 168C68 153 104 160 132 145" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 8" stroke-linecap="round" opacity="0.12" />',
  },
  'η συνεργασία / συνεργάζομαι': {
    layout: 'scene',
    gradient: 'from-teal-500/30 via-violet-500/20 to-slate-900',
    glow: 'bg-teal-400/25',
    primaryEmoji: '1f91d',
    secondaryEmoji: '2699',
    accentEmoji: '1f9e9',
    caption: 'Шестерёнки сцепились — часы пошли',
    svgMotif:
      '<circle cx="73" cy="103" r="46" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><circle cx="73" cy="103" r="17" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M73 44V58M73 148V162M14 103H28M118 103H132M31 61L41 71M105 135L115 145M31 145L41 135M105 71L115 61" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.14" /><circle cx="139" cy="82" r="34" fill="none" stroke="currentColor" stroke-width="2" opacity="0.15" /><circle cx="139" cy="82" r="11" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.14" />',
  },
  'η παρέα / κάνω παρέα με...': {
    layout: 'scene',
    gradient: 'from-orange-400/30 via-pink-500/20 to-slate-900',
    glow: 'bg-orange-300/25',
    primaryEmoji: '1f465',
    secondaryEmoji: '1f3b8',
    accentEmoji: '1f602',
    caption: 'Один стол, разные истории, общий смех',
    svgMotif:
      '<ellipse cx="100" cy="110" rx="52" ry="31" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M65 137L57 169M135 137L143 169" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.13" /><circle cx="100" cy="38" r="17" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><circle cx="42" cy="80" r="17" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><circle cx="158" cy="80" r="17" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><path d="M76 56L57 69M124 56L143 69M67 53C80 44 88 42 91 42M133 53C120 44 112 42 109 42" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.11" />',
  },
  'κοινωνικός (-ή, -ό) / η κοινωνικότητα': {
    layout: 'scene',
    gradient: 'from-violet-500/30 via-sky-400/20 to-slate-900',
    glow: 'bg-violet-400/25',
    primaryEmoji: '1f5e3',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f389',
    caption: 'Новый голос легко входит в разговор',
    svgMotif:
      '<path d="M24 42H103C113 42 119 49 119 59V91C119 101 113 108 103 108H67L43 128L48 108H24C14 108 8 101 8 91V59C8 49 14 42 24 42Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><path d="M105 87H174C184 87 190 94 190 104V130C190 140 184 147 174 147H158L163 167L139 147H105C95 147 89 140 89 130" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><circle cx="43" cy="75" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><circle cx="64" cy="75" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><circle cx="85" cy="75" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" />',
  },
  'η ψυχραιμία ≠ ο πανικός': {
    layout: 'split',
    gradient: 'from-teal-400/25 via-red-500/20 to-slate-950',
    glow: 'bg-teal-300/25',
    primaryEmoji: '1f9d8',
    secondaryEmoji: '1f631',
    accentEmoji: '1f6a8',
    caption: 'Ровная волна и сорванная кнопка тревоги',
    svgMotif:
      '<path d="M8 76C25 66 39 86 56 76C73 66 82 80 91 77M8 111C25 101 39 121 56 111C73 101 82 115 91 112M8 146C25 136 39 156 56 146C73 136 82 150 91 147" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.17" /><path d="M119 42L143 72L129 89L169 103L140 124L157 158M184 35L166 65L185 80L157 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.17" /><path d="M100 22V178" stroke="currentColor" stroke-width="1" stroke-dasharray="4 10" opacity="0.1" />',
  },
  'παίζω με τα νεύρα κάποιου': {
    layout: 'cause-effect',
    gradient: 'from-yellow-400/25 via-red-500/25 to-slate-950',
    glow: 'bg-yellow-300/25',
    primaryEmoji: '1f3bb',
    secondaryEmoji: '1f4a2',
    accentEmoji: '26a1',
    caption: 'Одна струна дёргается снова и снова',
    svgMotif:
      '<path d="M12 100H58C70 100 68 55 82 55C96 55 92 145 107 145C122 145 116 100 132 100H154" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.19" /><path d="M158 61L166 82L188 74L179 96L196 110L173 112L174 136L157 121L140 137L142 114L119 111L137 97L128 75L150 83Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.16" /><path d="M34 76V124M48 76V124" stroke="currentColor" stroke-width="1" opacity="0.1" />',
  },
  'έφτασα στα όριά μου!': {
    layout: 'cause-effect',
    gradient: 'from-orange-500/30 via-red-600/20 to-slate-950',
    glow: 'bg-orange-400/25',
    primaryEmoji: '1f375',
    secondaryEmoji: '1f4a7',
    accentEmoji: '1f6d1',
    caption: 'Последняя капля над краем чаши',
    svgMotif:
      '<path d="M39 92H151L140 151C137 166 124 174 95 174C66 174 53 166 50 151Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M151 105H164C185 105 184 139 160 139H145M56 111H135" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.14" /><path d="M96 18C87 39 75 49 75 63C75 77 84 85 96 85C108 85 117 77 117 63C117 49 105 38 96 18Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M23 92H174" stroke="currentColor" stroke-width="1" stroke-dasharray="5 8" opacity="0.12" />',
  },
  'βρίσκω την άκρη': {
    layout: 'cause-effect',
    gradient: 'from-emerald-500/25 via-cyan-500/20 to-slate-900',
    glow: 'bg-emerald-300/25',
    primaryEmoji: '1f9f5',
    secondaryEmoji: '1f91d',
    accentEmoji: '1f511',
    caption: 'Нить найдена — узел стал дорожкой',
    svgMotif:
      '<path d="M18 32H82V65H48V99H82V132H27V166H77" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.16" /><path d="M77 166C96 166 91 136 110 136C130 136 120 101 142 101C163 101 151 64 181 52" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.18" /><circle cx="181" cy="52" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><path d="M105 62L128 39M128 39L139 50M128 39L117 50" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.11" />',
  },
  'μαλώνω / ο καβγάς': {
    layout: 'scene',
    gradient: 'from-red-500/30 via-purple-600/20 to-slate-950',
    glow: 'bg-red-400/25',
    primaryEmoji: '1f4a5',
    secondaryEmoji: '1f5ef',
    accentEmoji: '1f4a2',
    caption: 'Два грома на одной кухне',
    svgMotif:
      '<path d="M18 42H82L91 88L59 83L39 105L42 80L18 75ZM182 158H118L109 112L141 117L161 95L158 120L182 125Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.16" /><path d="M105 42L94 78L116 73L92 111L108 112L81 158M72 50L54 32M127 148L148 170" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.18" /><path d="M22 144L55 132M145 66L178 54" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.11" />',
  },
  'η παρεξήγηση / λύνω την παρεξήγηση': {
    layout: 'cause-effect',
    gradient: 'from-indigo-500/25 via-emerald-400/20 to-slate-900',
    glow: 'bg-indigo-300/25',
    primaryEmoji: '1f500',
    secondaryEmoji: '1f4ac',
    accentEmoji: '1f9f5',
    caption: 'Перекрещенные стрелки распутываются в одну линию',
    svgMotif:
      '<path d="M18 52C50 52 54 145 91 145M18 145C50 145 54 52 91 52M75 35L92 52L75 69M75 128L92 145L75 162" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.17" /><path d="M92 100C111 100 103 71 124 71C148 71 130 130 153 130C168 130 169 100 187 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.16" /><path d="M164 84L187 100L164 116" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.16" />',
  },
  'συγχωρώ / η συγχώρεση': {
    layout: 'cause-effect',
    gradient: 'from-sky-400/25 via-emerald-300/20 to-slate-900',
    glow: 'bg-sky-300/25',
    primaryEmoji: '1f54a',
    secondaryEmoji: '1f49d',
    accentEmoji: '1f33f',
    caption: 'Узел развязан, ласточка снова летит',
    svgMotif:
      '<path d="M100 166C80 145 43 121 43 82C43 52 77 43 100 69C123 43 157 52 157 82C157 121 120 145 100 166Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M100 69L88 91L108 106L91 124L105 143" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.16" /><path d="M26 48C44 32 62 35 76 50C87 32 107 24 128 31C110 34 98 44 91 59C70 49 51 48 26 48ZM133 135C151 119 171 120 184 135" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" />',
  },
  'επιθετικός (-ή, -ό) / η επιθετικότητα': {
    layout: 'scene',
    gradient: 'from-red-600/30 via-orange-600/20 to-slate-950',
    glow: 'bg-red-500/30',
    primaryEmoji: '1f621',
    secondaryEmoji: '1f4a5',
    accentEmoji: '26a1',
    caption: 'Красная волна бьёт в стену',
    svgMotif:
      '<path d="M100 22L114 65L143 35L139 79L181 63L153 96L194 108L151 119L179 153L137 135L140 180L113 147L99 190L86 147L58 178L62 134L19 151L48 118L6 105L49 94L22 61L64 78L61 34L87 66Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.17" /><path d="M42 100H158M100 42V158" stroke="currentColor" stroke-width="1" opacity="0.1" /><circle cx="100" cy="100" r="32" fill="none" stroke="currentColor" stroke-width="2" opacity="0.15" />',
  },
  'απειλώ / η απειλή': {
    layout: 'cause-effect',
    gradient: 'from-slate-600/30 via-yellow-500/20 to-slate-950',
    glow: 'bg-yellow-400/25',
    primaryEmoji: '26a0',
    secondaryEmoji: '1f329',
    accentEmoji: '1f5e1',
    caption: 'Тёмная туча с занесённой молнией',
    svgMotif:
      '<path d="M35 91C19 64 43 42 67 50C79 19 124 23 133 54C163 44 184 72 166 96H35Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M110 91L83 137H109L93 180L143 119H116L132 91" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.18" /><path d="M25 173L49 132L73 173ZM49 147V158M49 165V166" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.13" />',
  },
  'κάνω παράπονα / το παράπονο': {
    layout: 'scene',
    gradient: 'from-stone-500/30 via-blue-500/20 to-slate-950',
    glow: 'bg-stone-300/25',
    primaryEmoji: '1f4e2',
    secondaryEmoji: '1f4dd',
    accentEmoji: '1f614',
    caption: 'Чашка остыла, а список всё растёт',
    svgMotif:
      '<path d="M49 26H142L157 42V174H49Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M142 26V43H157M68 65H133M68 88H133M68 111H133M68 134H112M68 157H126" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.14" /><path d="M171 64C193 87 188 124 164 139C148 149 132 140 137 126C142 113 161 117 161 129" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.12" /><path d="M21 60C12 77 15 92 28 103M19 124V151M10 151H37" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.11" />',
  },
  'αντιγράφω σε διαγώνισμα': {
    layout: 'scene',
    gradient: 'from-indigo-500/25 via-cyan-400/20 to-slate-950',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f440',
    secondaryEmoji: '1f4c4',
    accentEmoji: '270f',
    caption: 'Взгляд скользит за край соседнего листа',
    svgMotif:
      '<path d="M21 45H84V164H21ZM116 28H179V147H116Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><path d="M35 70H69M35 91H69M35 112H69M130 54H164M130 75H164M130 96H164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.12" /><path d="M45 25C71 5 103 9 124 28C102 47 69 48 45 25Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><circle cx="87" cy="26" r="9" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><path d="M95 36L145 116" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 7" opacity="0.15" />',
  },
  'μηδενίζω την κόλλα': {
    layout: 'cause-effect',
    gradient: 'from-red-500/30 via-slate-600/25 to-slate-950',
    glow: 'bg-red-400/25',
    primaryEmoji: '0030-20e3',
    secondaryEmoji: '1f4c4',
    accentEmoji: '1f6a8',
    caption: 'Красная линия перечёркивает весь лист',
    svgMotif:
      '<path d="M48 20H132L155 43V180H48Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M132 20V44H155M68 66H130M68 88H130M68 110H119M68 154H128" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.12" /><path d="M25 169L177 31M27 32L175 170" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.17" /><ellipse cx="102" cy="132" rx="24" ry="31" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" />',
  },
  'νιώθω ντροπή / ντρέπομαι': {
    layout: 'scene',
    gradient: 'from-pink-500/30 via-rose-400/20 to-slate-950',
    glow: 'bg-pink-400/25',
    primaryEmoji: '1f633',
    secondaryEmoji: '1f648',
    accentEmoji: '1f4a7',
    caption: 'Щёки вспыхнули, взгляд спрятался за ладонью',
    svgMotif:
      '<path d="M45 157C30 126 31 82 49 53C67 24 133 24 151 53C169 82 170 126 155 157" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.15" /><path d="M61 78C71 70 82 70 91 77M109 77C118 70 129 70 139 78M73 139C88 130 112 130 127 139" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" /><path d="M43 174C51 135 62 101 82 89C92 83 100 91 95 101L83 124L111 91C119 82 131 91 124 102L100 135L126 108C135 99 146 110 138 120L104 165" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.17" />',
  },
  'το πληρώνω ακριβά': {
    layout: 'cause-effect',
    gradient: 'from-amber-500/30 via-red-500/20 to-slate-950',
    glow: 'bg-amber-400/25',
    primaryEmoji: '1f4b8',
    secondaryEmoji: '1f4b0',
    accentEmoji: '1f4c9',
    caption: 'Квитанция длиннее самого поступка',
    svgMotif:
      '<path d="M52 20H143V181L132 172L121 181L110 172L99 181L88 172L77 181L66 172L52 181Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.16" /><path d="M72 49H123M72 73H123M72 97H123M72 121H101M72 151H123" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" /><circle cx="28" cy="42" r="15" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><circle cx="26" cy="91" r="19" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><circle cx="30" cy="151" r="24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><path d="M164 44L184 67L167 93L188 121L164 157" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.13" />',
  },
  'ο σχολικός εκφοβισμός (το bullying)': {
    layout: 'scene',
    gradient: 'from-slate-600/30 via-indigo-600/20 to-slate-950',
    glow: 'bg-indigo-400/25',
    primaryEmoji: '1f3eb',
    secondaryEmoji: '1f6a8',
    accentEmoji: '1f494',
    caption: 'Одинокая парта в круге насмешек',
    svgMotif:
      '<path d="M29 78L100 25L171 78M43 67V158H157V67M83 158V102H117V158M61 91H75M125 91H139" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.14" /><ellipse cx="100" cy="123" rx="88" ry="62" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 9" opacity="0.14" /><path d="M70 132H130V151H70ZM80 151V174M120 151V174" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><circle cx="22" cy="122" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.13" /><circle cx="178" cy="122" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.13" />',
  },
  'το θύμα ≠ ο θύτης': {
    layout: 'split',
    gradient: 'from-sky-500/25 via-red-600/25 to-slate-950',
    glow: 'bg-sky-400/25',
    primaryEmoji: '1f97a',
    secondaryEmoji: '1f621',
    accentEmoji: '2696',
    caption: 'Спрятанные плечи и нависшая тень',
    svgMotif:
      '<path d="M25 160C30 119 43 94 65 88C87 94 94 119 96 160M43 88C38 68 45 45 65 41C85 45 92 68 87 88" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.17" /><path d="M120 169L116 91L139 58L151 25L169 63L188 85L180 169Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" opacity="0.17" /><path d="M100 20V180M71 55H129M82 55L65 91H99ZM118 55L101 91H135Z" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1" />',
  },
  'η βία / ασκώ βία': {
    layout: 'scene',
    gradient: 'from-red-700/30 via-stone-700/25 to-slate-950',
    glow: 'bg-red-500/30',
    primaryEmoji: '1f94a',
    secondaryEmoji: '1f6d1',
    accentEmoji: '26a0',
    caption: 'Кулак вместо слов — красный сигнал',
    svgMotif:
      '<path d="M72 25L128 25L175 72L175 128L128 175L72 175L25 128L25 72Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M100 57V112M100 139V142" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity="0.16" /><path d="M12 52L42 69M8 100H42M14 151L44 132M188 51L158 69M192 100H158M186 151L156 132" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.13" />',
  },
  'απομονώνω / η απομόνωση': {
    layout: 'cause-effect',
    gradient: 'from-slate-500/30 via-purple-700/20 to-slate-950',
    glow: 'bg-slate-300/20',
    primaryEmoji: '1f9f1',
    secondaryEmoji: '1f465',
    accentEmoji: '1f512',
    caption: 'Стена выросла, а голоса остались снаружи',
    svgMotif:
      '<path d="M18 28H112V172H18ZM18 64H112M18 100H112M18 136H112M48 28V64M82 28V64M33 64V100M75 64V100M50 100V136M91 100V136M35 136V172M79 136V172" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.16" /><circle cx="155" cy="99" r="24" fill="none" stroke="currentColor" stroke-width="2" opacity="0.18" /><path d="M155 61V38M155 160V137M117 99H139M171 99H193" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 7" opacity="0.12" /><circle cx="156" cy="35" r="11" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" /><circle cx="183" cy="51" r="11" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" />',
  },
  'η ανακούφιση / ανακουφισμένος (-η, -ο)': {
    layout: 'cause-effect',
    gradient: 'from-sky-400/30 via-emerald-400/20 to-slate-900',
    glow: 'bg-sky-300/25',
    primaryEmoji: '1f60c',
    secondaryEmoji: '1f32c',
    accentEmoji: '1f33f',
    caption: 'Тесный узел ослаб, воздух снова прошёл',
    svgMotif:
      '<path d="M25 104C25 56 82 49 91 84C100 119 52 130 48 98C44 66 107 55 128 89C151 126 112 157 82 139" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.16" /><path d="M93 142C122 139 128 111 150 111H188M111 158C139 161 153 143 181 143M121  seventy" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.01" /><path d="M107 67C130 46 159 48 181 63M125 84H190" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.17" /><path d="M40 163C64 148 83 151 100 166" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.11" />',
  },
  'η απογοήτευση / απογοητευμένος (-η, -ο)': {
    layout: 'scene',
    gradient: 'from-blue-500/25 via-slate-500/25 to-slate-950',
    glow: 'bg-blue-300/20',
    primaryEmoji: '1f61e',
    secondaryEmoji: '1f388',
    accentEmoji: '1f4c9',
    caption: 'Воздушный шар тихо опустился на пол',
    svgMotif:
      '<path d="M101 22C60 22 46 54 55 86C63 114 83 126 100 139C117 126 137 114 145 86C154 54 140 22 101 22Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.16" /><path d="M94 139L100 148L106 139M100 148C76 161 128 169 98 183" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.15" /><path d="M24 176H178M27 55L18 76M174 45L185 66M24 112L11 119" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.11" /><path d="M72 72C84 63 116 63 128 72" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.1" />',
  },
  'η απόγνωση / απελπισμένος (-η, -ο)': {
    layout: 'scene',
    gradient: 'from-indigo-800/40 via-slate-700/30 to-black',
    glow: 'bg-indigo-400/20',
    primaryEmoji: '1f30a',
    secondaryEmoji: '1f319',
    accentEmoji: '1f6df',
    caption: 'Далёкий берег и погасший фонарь',
    svgMotif:
      '<path d="M5 137C28 113 47 153 72 132C96 111 112 150 137 130C158 113 174 135 195 123M5 165C28 141 47 181 72 160C96 139 112 178 137 158C158 141 174 163 195 151" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M139 111L151 48H169L181 111ZM145 73H175M136 111H184M155 48V32H165V48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.13" /><path d="M160 24V12M142 30L132 20M178 30L188 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.09" /><path d="M40 29C52 16 73 20 80 37C66 29 51 35 46 49C38 45 35 36 40 29Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" />',
  },
  'γίνομαι έξω φρενών': {
    layout: 'cause-effect',
    gradient: 'from-red-600/30 via-orange-500/25 to-slate-950',
    glow: 'bg-red-400/30',
    primaryEmoji: '1f92f',
    secondaryEmoji: '1f525',
    accentEmoji: '1f4a2',
    caption: 'Предохранитель сгорел, крышка сорвана',
    svgMotif:
      '<path d="M100 22L113 61L144 35L141 74L181 62L156 94L194 108L154 118L179 153L139 136L139 178L113 146L98 188L86 147L55 176L61 135L20 151L46 117L7 104L47 93L22 59L62 75L60 34L87 63Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity="0.18" /><path d="M64 105C64 75 81 58 100 58C119 58 136 75 136 105M76 105H124M85 127H115" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.15" /><path d="M100 58V33M78 48L67 27M122 48L133 27" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.13" />',
  },
  'μου γυρίζουν τα μυαλά': {
    layout: 'cause-effect',
    gradient: 'from-fuchsia-600/30 via-red-500/25 to-slate-950',
    glow: 'bg-fuchsia-400/25',
    primaryEmoji: '1f9e0',
    secondaryEmoji: '1f300',
    accentEmoji: '1f621',
    caption: 'Мысли закрутились в красную карусель',
    svgMotif:
      '<path d="M101 100C101 76 136 73 143 95C154 128 115 151 82 137C39 119 43 61 83 38C133 9 188 49 184 103C180 164 113 190 59 164C25 147 10 119 16 86" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.18" /><path d="M101 100C89 100 84 89 91 82M143 95L153 75M184 103L194 119M59 164L43 177" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.13" /><circle cx="100" cy="100" r="11" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><path d="M28 39L43 50M157 25L148 43M174 164L157 153" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.11" />',
  },
  'κάνω τα στραβά μάτια': {
    layout: 'scene',
    gradient: 'from-slate-500/30 via-amber-500/20 to-slate-950',
    glow: 'bg-amber-300/20',
    primaryEmoji: '1f648',
    secondaryEmoji: '1f440',
    accentEmoji: '26a0',
    caption: 'Сигнал мигает, а шторы плотно сдвинуты',
    svgMotif:
      '<path d="M18 22H88C70 55 70 145 88 178H18ZM182 22H112C130 55 130 145 112 178H182Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.17" /><path d="M43 30V169M64 30C51 76 51 124 64 169M157 30V169M136 30C149 76 149 124 136 169" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.12" /><path d="M77 100C90 86 110 86 123 100C110 114 90 114 77 100Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><circle cx="100" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.15" /><path d="M100 39L119 73H81ZM100 50V60M100 66V67" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.13" />',
  },
};
