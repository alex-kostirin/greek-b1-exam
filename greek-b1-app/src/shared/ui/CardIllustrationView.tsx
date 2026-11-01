import React from 'react';
import { VocabularyItem } from '../types/vocabulary';

interface VisualSceneSpec {
  primaryCode: string;
  secondaryCode: string;
  gradientClass: string;
  glowClass: string;
}

const KEYWORD_SCENES: { pattern: RegExp; spec: VisualSceneSpec }[] = [
  {
    pattern: /ευγενής|αγενής|συμπεριφορά/i,
    spec: {
      primaryCode: '1f91d',
      secondaryCode: '1f621',
      gradientClass: 'from-indigo-500/30 via-purple-500/20 to-slate-900',
      glowClass: 'bg-indigo-400/25',
    },
  },
  {
    pattern: /συνεπής|ωράριο|προθεσμία|καθυστέρηση|προσωρινός|σπάνια/i,
    spec: {
      primaryCode: '23f0',
      secondaryCode: '1f4c5',
      gradientClass: 'from-amber-500/30 via-orange-500/20 to-slate-900',
      glowClass: 'bg-amber-400/25',
    },
  },
  {
    pattern: /ειλικρινής|εμπιστοσύνη|υπόσχομαι/i,
    spec: {
      primaryCode: '1f91e',
      secondaryCode: '1f49b',
      gradientClass: 'from-teal-500/30 via-emerald-500/20 to-slate-900',
      glowClass: 'bg-teal-400/25',
    },
  },
  {
    pattern: /υπομονετικός|αισιόδοξος|διάθεση|ενθουσιασμένος|απολαμβάνω/i,
    spec: {
      primaryCode: '1f60a',
      secondaryCode: '2728',
      gradientClass: 'from-yellow-500/30 via-amber-500/20 to-slate-900',
      glowClass: 'bg-yellow-400/25',
    },
  },
  {
    pattern: /φιλόξενος|γενναιόδωρος|χάρη σε/i,
    spec: {
      primaryCode: '1f381',
      secondaryCode: '2615',
      gradientClass: 'from-rose-500/30 via-pink-500/20 to-slate-900',
      glowClass: 'bg-rose-400/25',
    },
  },
  {
    pattern: /μετακόμιση|μεταφορική/i,
    spec: {
      primaryCode: '1f69a',
      secondaryCode: '1f4e6',
      gradientClass: 'from-orange-500/30 via-amber-500/20 to-slate-900',
      glowClass: 'bg-orange-400/25',
    },
  },
  {
    pattern: /ενοίκιο|ιδιοκτήτης|συμβόλαιο|διαμέρισμα|επιπλωμένος|ευρύχωρος/i,
    spec: {
      primaryCode: '1f3e0',
      secondaryCode: '1f511',
      gradientClass: 'from-cyan-500/30 via-sky-500/20 to-slate-900',
      glowClass: 'bg-cyan-400/25',
    },
  },
  {
    pattern: /βλάβη|ζημιά|επισκευή|κατεστραμμένος|σπασμένος|διαρροή/i,
    spec: {
      primaryCode: '1f527',
      secondaryCode: '26a0',
      gradientClass: 'from-red-500/30 via-orange-500/20 to-slate-900',
      glowClass: 'bg-red-400/25',
    },
  },
  {
    pattern: /θέρμανση|κλιματισμός|ηλεκτρική|λογαριασμός/i,
    spec: {
      primaryCode: '1f4a1',
      secondaryCode: '26a1',
      gradientClass: 'from-sky-500/30 via-blue-500/20 to-slate-900',
      glowClass: 'bg-sky-400/25',
    },
  },
  {
    pattern: /φασαρία|θόρυβος/i,
    spec: {
      primaryCode: '1f50a',
      secondaryCode: '1f62b',
      gradientClass: 'from-fuchsia-500/30 via-rose-500/20 to-slate-900',
      glowClass: 'bg-fuchsia-400/25',
    },
  },
  {
    pattern: /εκδήλωση|παράσταση|έκθεση|ψυχαγωγία|φεστιβάλ|συναυλία/i,
    spec: {
      primaryCode: '1f3ad',
      secondaryCode: '1f3a8',
      gradientClass: 'from-purple-500/30 via-fuchsia-500/20 to-slate-900',
      glowClass: 'bg-purple-400/25',
    },
  },
  {
    pattern: /προορισμός|ταξιδιωτικό|ξενάγηση|αξιοθέατα/i,
    spec: {
      primaryCode: '1f5fa',
      secondaryCode: '1f9f3',
      gradientClass: 'from-sky-500/30 via-teal-500/20 to-slate-900',
      glowClass: 'bg-sky-400/25',
    },
  },
  {
    pattern: /κράτηση|διαμονή|κατάλυμα|υποδοχή|παροχές|πολυτελής/i,
    spec: {
      primaryCode: '1f3e8',
      secondaryCode: '1f6ce',
      gradientClass: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
      glowClass: 'bg-blue-400/25',
    },
  },
  {
    pattern: /αναχώρηση|άφιξη|επιβίβαση|αποσκευές|πτήση/i,
    spec: {
      primaryCode: '2708',
      secondaryCode: '1f3ab',
      gradientClass: 'from-cyan-500/30 via-blue-500/20 to-slate-900',
      glowClass: 'bg-cyan-400/25',
    },
  },
  {
    pattern: /καιρού|καύσωνας|καταιγίδα|ηλιόλουστος|κλιματική/i,
    spec: {
      primaryCode: '26c5',
      secondaryCode: '26c8',
      gradientClass: 'from-amber-500/30 via-sky-500/20 to-slate-900',
      glowClass: 'bg-amber-400/25',
    },
  },
  {
    pattern: /εκπτώσεις|καταναλωτής|απόδειξη|εγγύηση|επιστροφή|αντικατάσταση|αποζημίωση|προσιτός|σπαταλώ/i,
    spec: {
      primaryCode: '1f6cd',
      secondaryCode: '1f4b3',
      gradientClass: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
      glowClass: 'bg-emerald-400/25',
    },
  },
  {
    pattern: /ελαττωματικό|ποιότητα|παραγγελία/i,
    spec: {
      primaryCode: '1f4e6',
      secondaryCode: '1f50d',
      gradientClass: 'from-rose-500/30 via-amber-500/20 to-slate-900',
      glowClass: 'bg-rose-400/25',
    },
  },
  {
    pattern: /διατροφή|άσκηση|γυμναστική|ισορροπία|ευεξία|υγιής|καταναλώνω/i,
    spec: {
      primaryCode: '1f957',
      secondaryCode: '1f3cb',
      gradientClass: 'from-green-500/30 via-emerald-500/20 to-slate-900',
      glowClass: 'bg-green-400/25',
    },
  },
  {
    pattern: /σύμπτωμα|εξέταση|θεραπεία|συνταγή|φάρμακα|ανάρρωση|κάπνισμα|άγχος/i,
    spec: {
      primaryCode: '1fa7a',
      secondaryCode: '1f48a',
      gradientClass: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
      glowClass: 'bg-teal-400/25',
    },
  },
  {
    pattern: /περιβάλλοντος|πουλιά|πανίδα|ανακύκλωση|ρύπανση|σκουπίδια|πυρκαγιά|λειψυδρία|εθελοντισμός/i,
    spec: {
      primaryCode: '1f333',
      secondaryCode: '1f426',
      gradientClass: 'from-emerald-500/30 via-lime-500/20 to-slate-900',
      glowClass: 'bg-emerald-400/25',
    },
  },
  {
    pattern: /βιογραφικό|συνέντευξη|εργασίας|προσόντα|μισθός|πρόσληψη|ανεργία|συνάδελφος|τηλεργασία|πιστοποιητικό/i,
    spec: {
      primaryCode: '1f4bc',
      secondaryCode: '1f393',
      gradientClass: 'from-blue-500/30 via-sky-500/20 to-slate-900',
      glowClass: 'bg-blue-400/25',
    },
  },
  {
    pattern: /διαδίκτυο|δικτύωσης|επαφή|αποξένωση|ιστοσελίδα|κωδικός|ενημέρωση/i,
    spec: {
      primaryCode: '1f4f1',
      secondaryCode: '1f310',
      gradientClass: 'from-violet-500/30 via-indigo-500/20 to-slate-900',
      glowClass: 'bg-violet-400/25',
    },
  },
  {
    pattern: /δήμος|μεταφοράς|κίνηση|στάθμευσης|πεζοδρόμιο|πρόστιμο|υπηρεσία|έγγραφο/i,
    spec: {
      primaryCode: '1f3db',
      secondaryCode: '1f697',
      gradientClass: 'from-slate-500/35 via-sky-500/20 to-slate-900',
      glowClass: 'bg-sky-400/25',
    },
  },
];

const MODULE_FALLBACK_SCENES: Record<string, VisualSceneSpec> = {
  '1. Характер': {
    primaryCode: '1f9d1',
    secondaryCode: '1f4ac',
    gradientClass: 'from-indigo-500/30 via-purple-500/20 to-slate-900',
    glowClass: 'bg-indigo-400/25',
  },
  '2. Жилье и переезд': {
    primaryCode: '1f3e0',
    secondaryCode: '1f69a',
    gradientClass: 'from-cyan-500/30 via-sky-500/20 to-slate-900',
    glowClass: 'bg-cyan-400/25',
  },
  '3. Время и досуг': {
    primaryCode: '23f0',
    secondaryCode: '1f3ad',
    gradientClass: 'from-purple-500/30 via-pink-500/20 to-slate-900',
    glowClass: 'bg-purple-400/25',
  },
  '4. Путешествия': {
    primaryCode: '2708',
    secondaryCode: '1f3dd',
    gradientClass: 'from-sky-500/30 via-teal-500/20 to-slate-900',
    glowClass: 'bg-sky-400/25',
  },
  '5. Покупки и жалобы': {
    primaryCode: '1f6cd',
    secondaryCode: '1f4b0',
    gradientClass: 'from-emerald-500/30 via-teal-500/20 to-slate-900',
    glowClass: 'bg-emerald-400/25',
  },
  '6. Здоровье и ЗОЖ': {
    primaryCode: '1f957',
    secondaryCode: '1fa7a',
    gradientClass: 'from-green-500/30 via-emerald-500/20 to-slate-900',
    glowClass: 'bg-green-400/25',
  },
  '7. Экология и Кипр': {
    primaryCode: '1f333',
    secondaryCode: '1f30d',
    gradientClass: 'from-emerald-500/30 via-lime-500/20 to-slate-900',
    glowClass: 'bg-emerald-400/25',
  },
  '8. Работа и учеба': {
    primaryCode: '1f4bc',
    secondaryCode: '1f4dd',
    gradientClass: 'from-blue-500/30 via-indigo-500/20 to-slate-900',
    glowClass: 'bg-blue-400/25',
  },
  '9. Технологии и СМИ': {
    primaryCode: '1f4bb',
    secondaryCode: '1f4f1',
    gradientClass: 'from-violet-500/30 via-purple-500/20 to-slate-900',
    glowClass: 'bg-violet-400/25',
  },
  '10. Город и службы': {
    primaryCode: '1f3d9',
    secondaryCode: '1f68c',
    gradientClass: 'from-sky-500/30 via-slate-500/20 to-slate-900',
    glowClass: 'bg-sky-400/25',
  },
  '11. Топ-Глаголы B1': {
    primaryCode: '26a1',
    secondaryCode: '1f3af',
    gradientClass: 'from-amber-500/30 via-orange-500/20 to-slate-900',
    glowClass: 'bg-amber-400/25',
  },
  '12. Связки и Штампы': {
    primaryCode: '270d',
    secondaryCode: '1f4dc',
    gradientClass: 'from-teal-500/30 via-cyan-500/20 to-slate-900',
    glowClass: 'bg-teal-400/25',
  },
  '13. Чтение №3 (Формы)': {
    primaryCode: '1f9e9',
    secondaryCode: '1f4d6',
    gradientClass: 'from-fuchsia-500/30 via-purple-500/20 to-slate-900',
    glowClass: 'bg-fuchsia-400/25',
  },
  '14. Ловушки Аудирования': {
    primaryCode: '1f3a7',
    secondaryCode: '1f4a1',
    gradientClass: 'from-rose-500/30 via-orange-500/20 to-slate-900',
    glowClass: 'bg-rose-400/25',
  },
};

function resolveSceneSpec(item: VocabularyItem): VisualSceneSpec {
  for (const entry of KEYWORD_SCENES) {
    if (entry.pattern.test(item.greek) || entry.pattern.test(item.russian)) {
      return entry.spec;
    }
  }
  return (
    MODULE_FALLBACK_SCENES[item.module] ?? {
      primaryCode: '1f4da',
      secondaryCode: '2728',
      gradientClass: 'from-sky-500/30 via-indigo-500/20 to-slate-900',
      glowClass: 'bg-sky-400/25',
    }
  );
}

interface CardIllustrationViewProps {
  item: VocabularyItem;
  compact?: boolean;
}

export const CardIllustrationView: React.FC<CardIllustrationViewProps> = ({
  item,
  compact = false,
}) => {
  const scene = resolveSceneSpec(item);
  const primaryUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${scene.primaryCode}.svg`;
  const secondaryUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${scene.secondaryCode}.svg`;

  return (
    <div
      className={`relative w-full ${
        compact ? 'h-20' : 'h-28'
      } rounded-2xl bg-gradient-to-br ${
        scene.gradientClass
      } border border-white/10 overflow-hidden flex items-center justify-center shrink-0`}
    >
      <div
        className={`absolute w-28 h-28 rounded-full blur-2xl ${scene.glowClass}`}
      />

      <div className="relative flex items-center justify-center">
        <img
          src={primaryUrl}
          alt=""
          draggable={false}
          className={`${
            compact ? 'w-12 h-12' : 'w-16 h-16'
          } drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)] transition-transform duration-300`}
        />
        <div className="absolute -bottom-1.5 -right-4 w-8 h-8 rounded-xl bg-slate-900/90 border border-white/15 p-1.5 flex items-center justify-center shadow-lg">
          <img
            src={secondaryUrl}
            alt=""
            draggable={false}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
