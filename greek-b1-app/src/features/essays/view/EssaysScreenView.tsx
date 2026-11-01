import React, { useMemo, useState } from 'react';
import { AppIntent } from '../../../model/appIntent';
import { AppState } from '../../../model/appState';
import { ESSAY_UNIVERSAL_TEMPLATES } from '../../../shared/data/essayDataset';
import { ALL_ESSAY_TOPICS } from '../../../shared/data/keg2015To2018Essays';
import { EssayHintPortion, EssayTopic } from '../../../shared/types/essay';
import { LightbulbIcon, PinIcon, VolumeOnIcon } from '../../../shared/ui/Icons';

interface EssaysScreenViewProps {
  state: AppState;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

type EssaySubTab = 'informal' | 'formal' | 'templates';
type EssaySourceFilter =
  | 'all'
  | 'pinned'
  | 'exam_chat'
  | 'keg_2015_2018'
  | 'textbooks'
  | 'completed';

const SUB_TABS: { id: EssaySubTab; label: string }[] = [
  { id: 'informal', label: '1. Неофиц. (100–120)' },
  { id: 'formal', label: '2. Офиц. (150–180)' },
  { id: 'templates', label: '📋 Шаблоны' },
];

const HINT_BUTTON_LABELS = [
  '💡 Подсказка (1/4): Показать шаблон письма',
  '💡 Подсказка (2/4): Открыть 1-ю порцию лексики (база)',
  '💡 Подсказка (3/4): Открыть 2-ю порцию лексики (коллокации)',
  '💡 Подсказка (4/4): Открыть 3-ю порцию лексики (связки и фразы)',
  '✅ Все подсказки открыты (Нажми, чтобы свернуть)',
] as const;

const HINT_BUTTON_STYLES = [
  'border-amber-400/60 bg-amber-400/15 text-amber-200 hover:bg-amber-400/25',
  'border-sky-400/60 bg-sky-400/15 text-sky-200 hover:bg-sky-400/25',
  'border-violet-400/60 bg-violet-400/15 text-violet-200 hover:bg-violet-400/25',
  'border-orange-400/60 bg-orange-400/15 text-orange-200 hover:bg-orange-400/25',
  'border-emerald-400/60 bg-emerald-400/15 text-emerald-200 hover:bg-emerald-400/25',
] as const;

interface SpeakGreekButtonProps {
  text: string;
  speakGreek: (text: string) => void;
}

const SpeakGreekButton: React.FC<SpeakGreekButtonProps> = ({ text, speakGreek }) => (
  <button
    type="button"
    onClick={() => speakGreek(text)}
    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sky-300 transition hover:bg-sky-400/20 active:scale-95"
    aria-label={`Озвучить греческий текст: ${text}`}
    title="Озвучить греческий текст"
  >
    <VolumeOnIcon className="h-3.5 w-3.5" />
  </button>
);

interface VocabPortionViewProps {
  portion: EssayHintPortion;
  speakGreek: (text: string) => void;
}

const VocabPortionView: React.FC<VocabPortionViewProps> = ({ portion, speakGreek }) => (
  <div className="mt-2 space-y-2">
    <p className="text-xs font-semibold leading-relaxed text-slate-300">{portion.title}</p>
    <ul className="space-y-1.5">
      {portion.items.map((item, index) => (
        <li
          key={`${item.greek}-${index}`}
          className="flex items-start gap-2 rounded-lg border border-slate-700/50 bg-slate-900/55 p-2"
        >
          <SpeakGreekButton text={item.greek} speakGreek={speakGreek} />
          <div className="min-w-0 flex-1">
            <p className="break-words text-[13px] font-semibold leading-relaxed text-slate-100">
              {item.greek}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{item.russian}</p>
            {item.note && (
              <span className="mt-1.5 inline-flex rounded-md border border-cyan-400/25 bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-semibold leading-relaxed text-cyan-300">
                {item.note}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

interface TemplateHintViewProps {
  topic: EssayTopic;
  speakGreek: (text: string) => void;
}

const TemplateHintView: React.FC<TemplateHintViewProps> = ({ topic, speakGreek }) => {
  const rows = [
    {
      label: 'Приветствие',
      greek: topic.templateHint.greeting,
      russian: undefined,
    },
    {
      label: 'Вступление',
      greek: topic.templateHint.openingGreek,
      russian: topic.templateHint.openingRussian,
    },
    {
      label: 'Переход к основной части',
      greek: topic.templateHint.bodyBridgeGreek,
      russian: topic.templateHint.bodyBridgeRussian,
    },
    {
      label: 'Заключение',
      greek: topic.templateHint.closingGreek,
      russian: topic.templateHint.closingRussian,
    },
    {
      label: 'Подпись',
      greek: topic.templateHint.signature,
      russian: undefined,
    },
  ];

  return (
    <section className="rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-2.5">
      <h4 className="text-xs font-extrabold text-amber-300">
        📋 Шаг 1: Шаблон под эту тему
      </h4>
      <div className="mt-2 space-y-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="rounded-lg border border-slate-700/50 bg-slate-950/45 p-2"
          >
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {row.label}
                </p>
                <p className="mt-1 whitespace-pre-line break-words text-[13px] font-medium leading-relaxed text-slate-100">
                  {row.greek}
                </p>
                {row.russian && (
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{row.russian}</p>
                )}
              </div>
              <SpeakGreekButton text={row.greek} speakGreek={speakGreek} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

interface EssayTopicCardProps {
  topic: EssayTopic;
  isPinned: boolean;
  isCompleted: boolean;
  hintLevel: number;
  dispatch: (intent: AppIntent) => void;
  speakGreek: (text: string) => void;
}

const EssayTopicCard: React.FC<EssayTopicCardProps> = ({
  topic,
  isPinned,
  isCompleted,
  hintLevel: storedHintLevel,
  dispatch,
  speakGreek,
}) => {
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);
  const hintLevel = Math.max(0, Math.min(4, storedHintLevel));
  const promptDetailsId = `essay-prompt-details-${topic.id}`;

  return (
    <article
      className={`space-y-2.5 rounded-2xl border p-3 shadow-sm transition ${
        isPinned
          ? 'border-amber-400/40 bg-amber-400/[0.045]'
          : 'border-slate-700/70 bg-slate-800/45'
      }`}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <div className="mr-auto flex min-w-0 flex-wrap items-center gap-1.5">
          <span className="rounded-md border border-slate-600/70 bg-slate-900/75 px-1.5 py-0.5 text-[10px] font-bold text-slate-300">
            {topic.sourceBadge}
          </span>
          <span className="rounded-md border border-sky-400/25 bg-sky-400/10 px-1.5 py-0.5 text-[10px] font-bold text-sky-300">
            {topic.wordRange}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => dispatch({ type: 'ESSAY_PIN_TOGGLED', topicId: topic.id })}
            className={`inline-flex min-h-7 items-center justify-center gap-1 rounded-lg border px-2 py-1 text-[10px] font-bold leading-none transition active:scale-95 ${
              isPinned
                ? 'border-amber-400/70 bg-amber-400/20 text-amber-300'
                : 'border-slate-600 bg-slate-900/70 text-slate-300 hover:border-amber-400/40 hover:text-amber-300'
            }`}
            aria-pressed={isPinned}
          >
            <PinIcon className="h-3 w-3 shrink-0" />
            <span>{isPinned ? '📌 Закреплено' : 'Закрепить'}</span>
          </button>

          <button
            type="button"
            onClick={() => dispatch({ type: 'ESSAY_COMPLETED_TOGGLED', topicId: topic.id })}
            className={`inline-flex min-h-7 items-center justify-center rounded-lg border px-2 py-1 text-[10px] font-bold leading-none transition active:scale-95 ${
              isCompleted
                ? 'border-emerald-400/70 bg-emerald-400/20 text-emerald-300'
                : 'border-slate-600 bg-slate-900/70 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300'
            }`}
            aria-pressed={isCompleted}
          >
            {isCompleted ? '✅ Написано' : 'Отметить'}
          </button>
        </div>
      </div>

      <h3 className="text-[15px] font-extrabold leading-snug text-white">{topic.titleRu}</h3>

      <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-2.5">
        <div className="flex items-start gap-2">
          <p className="min-w-0 flex-1 whitespace-pre-line break-words text-[13px] leading-relaxed text-slate-100">
            {topic.promptGreek}
          </p>
          <SpeakGreekButton text={topic.promptGreek} speakGreek={speakGreek} />
        </div>

        <button
          type="button"
          onClick={() => setIsPromptExpanded((currentValue) => !currentValue)}
          className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-300 transition hover:text-sky-200"
          aria-expanded={isPromptExpanded}
          aria-controls={promptDetailsId}
        >
          <span>
            {isPromptExpanded
              ? 'Скрыть перевод задания и чек-лист'
              : 'Показать перевод задания и чек-лист'}
          </span>
          <span aria-hidden="true">{isPromptExpanded ? '▲' : '▼'}</span>
        </button>

        {isPromptExpanded && (
          <div
            id={promptDetailsId}
            className="mt-2.5 space-y-2.5 border-t border-slate-700/70 pt-2.5"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Перевод задания
              </p>
              <p className="mt-1 whitespace-pre-line text-xs leading-relaxed text-slate-300">
                {topic.promptRussian}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Обязательные пункты
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {topic.bulletChecklist.map((checklistItem, index) => (
                  <li
                    key={`${checklistItem}-${index}`}
                    className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-300"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-emerald-400">✓</span>
                    <span>{checklistItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2.5 rounded-xl border border-slate-700/60 bg-slate-950/25 p-2.5">
        <div className="flex items-stretch gap-1.5">
          <button
            type="button"
            onClick={() => dispatch({ type: 'ESSAY_HINT_STEP_ADVANCED', topicId: topic.id })}
            className={`inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border px-2.5 py-2 text-left text-[11px] font-extrabold leading-snug transition active:scale-[0.99] ${HINT_BUTTON_STYLES[hintLevel]}`}
          >
            <LightbulbIcon className="h-4 w-4 shrink-0" />
            <span>{HINT_BUTTON_LABELS[hintLevel]}</span>
          </button>

          {hintLevel > 0 && (
            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'ESSAY_HINT_LEVEL_SET', topicId: topic.id, level: 0 })
              }
              className="shrink-0 rounded-xl border border-slate-600 bg-slate-900/70 px-2.5 text-[10px] font-bold text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
            >
              Скрыть
            </button>
          )}
        </div>

        <div className="flex items-center gap-2" aria-label={`Открыто шагов: ${hintLevel} из 4`}>
          <div className="flex flex-1 gap-1">
            {[1, 2, 3, 4].map((step) => (
              <span
                key={step}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  step <= hintLevel
                    ? hintLevel === 4
                      ? 'bg-emerald-400'
                      : 'bg-amber-400'
                    : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
          <span className="shrink-0 text-[10px] font-bold tabular-nums text-slate-500">
            {hintLevel}/4
          </span>
        </div>

        {hintLevel >= 1 && <TemplateHintView topic={topic} speakGreek={speakGreek} />}

        {hintLevel >= 2 && (
          <section className="rounded-xl border border-sky-400/25 bg-sky-400/[0.055] p-2.5">
            <h4 className="text-xs font-extrabold text-sky-300">
              🔤 Шаг 2: 1-я порция лексики
            </h4>
            <VocabPortionView portion={topic.vocabPortions[0]} speakGreek={speakGreek} />
          </section>
        )}

        {hintLevel >= 3 && (
          <section className="rounded-xl border border-violet-400/25 bg-violet-400/[0.055] p-2.5">
            <h4 className="text-xs font-extrabold text-violet-300">
              📚 Шаг 3: 2-я порция лексики
            </h4>
            <VocabPortionView portion={topic.vocabPortions[1]} speakGreek={speakGreek} />
          </section>
        )}

        {hintLevel >= 4 && (
          <section className="rounded-xl border border-emerald-400/25 bg-emerald-400/[0.055] p-2.5">
            <h4 className="text-xs font-extrabold leading-relaxed text-emerald-300">
              🚀 Шаг 4: 3-я порция лексики (продвинутые конструкции и готовые фразы)
            </h4>
            <VocabPortionView portion={topic.vocabPortions[2]} speakGreek={speakGreek} />
          </section>
        )}
      </div>
    </article>
  );
};

interface UniversalTemplatesViewProps {
  speakGreek: (text: string) => void;
}

const UniversalTemplatesView: React.FC<UniversalTemplatesViewProps> = ({ speakGreek }) => (
  <div className="space-y-3">
    <div className="rounded-xl border border-rose-400/35 bg-rose-400/10 p-3 text-xs leading-relaxed text-rose-100">
      <p className="font-extrabold text-rose-300">⚠️ Важно про имена в шаблонах</p>
      <p className="mt-1">
        <strong>Μαρία</strong> и <strong>Γιώργος Παπαδόπουλος</strong> — вымышленные имена.
        Используй их только как учебный пример и подставляй имя, которое требуется по условию
        конкретного задания. Не вписывай реальные персональные данные.
      </p>
    </div>

    {ESSAY_UNIVERSAL_TEMPLATES.map((template) => (
      <article
        key={template.id}
        className="space-y-3 rounded-2xl border border-slate-700/70 bg-slate-800/45 p-3"
      >
        <div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${
                template.register === 'informal'
                  ? 'border-sky-400/30 bg-sky-400/10 text-sky-300'
                  : 'border-violet-400/30 bg-violet-400/10 text-violet-300'
              }`}
            >
              {template.register === 'informal' ? 'Неофициальное письмо' : 'Официальный текст'}
            </span>
            <span className="rounded-md border border-slate-600 bg-slate-900/70 px-1.5 py-0.5 text-[10px] font-bold text-slate-300">
              {template.wordLimit}
            </span>
          </div>
          <h2 className="mt-2 text-[15px] font-extrabold leading-snug text-white">
            {template.title}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">{template.subtitle}</p>
        </div>

        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-2.5 text-xs leading-relaxed text-amber-100">
          <span className="font-extrabold text-amber-300">⚠️ Правило безопасности: </span>
          {template.safetyRule}
        </div>

        <div className="space-y-2.5">
          {template.blocks.map((block, index) => (
            <section
              key={`${template.id}-${block.blockName}-${index}`}
              className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-2.5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-extrabold text-slate-200">{block.blockName}</h3>
                <span className="shrink-0 rounded-md bg-slate-800 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                  ≈ {block.wordCountApprox} сл.
                </span>
              </div>

              <div className="mt-2 flex items-start gap-2">
                <div className="min-w-0 flex-1">
                  <p className="whitespace-pre-line break-words text-[13px] font-medium leading-relaxed text-slate-100">
                    {block.greek}
                  </p>
                  <p className="mt-1.5 whitespace-pre-line text-xs leading-relaxed text-slate-400">
                    {block.russian}
                  </p>
                </div>
                <SpeakGreekButton text={block.greek} speakGreek={speakGreek} />
              </div>
            </section>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export const EssaysScreenView: React.FC<EssaysScreenViewProps> = ({
  state,
  dispatch,
  speakGreek,
}) => {
  const [subTab, setSubTab] = useState<EssaySubTab>('informal');
  const [sourceFilter, setSourceFilter] = useState<EssaySourceFilter>('all');

  const pinnedIds = state.essayProgress.pinnedIds;
  const completedIds = state.essayProgress.completedIds;

  const pinnedSet = useMemo(() => new Set(pinnedIds), [pinnedIds]);
  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);

  const sectionTopics = useMemo(
    () =>
      subTab === 'templates'
        ? []
        : ALL_ESSAY_TOPICS.filter((topic) => topic.register === subTab),
    [subTab],
  );

  const completedCount = sectionTopics.filter((topic) => completedSet.has(topic.id)).length;
  const pinnedCount = sectionTopics.filter((topic) => pinnedSet.has(topic.id)).length;

  const visibleTopics = useMemo(() => {
    const filteredTopics = sectionTopics.filter((topic) => {
      switch (sourceFilter) {
        case 'pinned':
          return pinnedSet.has(topic.id);
        case 'exam_chat':
          return topic.sourceType === 'exam_chat';
        case 'keg_2015_2018':
          return topic.sourceType === 'keg_2015_2018';
        case 'textbooks':
          return topic.sourceType === 'klik_b1' || topic.sourceType === 'ellinika_b';
        case 'completed':
          return completedSet.has(topic.id);
        case 'all':
        default:
          return true;
      }
    });

    return filteredTopics
      .map((topic, originalIndex) => ({ topic, originalIndex }))
      .sort((left, right) => {
        const pinnedDifference =
          Number(pinnedSet.has(right.topic.id)) - Number(pinnedSet.has(left.topic.id));

        return pinnedDifference || left.originalIndex - right.originalIndex;
      })
      .map(({ topic }) => topic);
  }, [completedSet, pinnedSet, sectionTopics, sourceFilter]);

  const filterOptions: { id: EssaySourceFilter; label: string }[] = [
    { id: 'all', label: 'Все' },
    { id: 'pinned', label: `📌 Закреплённые (${pinnedCount})` },
    { id: 'exam_chat', label: '🔥 Из чата @cylang' },
    { id: 'keg_2015_2018', label: '📕 Сборник 2015–2018' },
    { id: 'textbooks', label: '📘 Учебники Κλικ / Ελληνικά' },
    { id: 'completed', label: '✅ Написанные' },
  ];

  const handleSubTabSelect = (nextSubTab: EssaySubTab) => {
    setSubTab(nextSubTab);
    setSourceFilter('all');
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-3 pb-4">
      <div>
        <h1 className="text-lg font-black tracking-tight text-white">
          Παραγωγή γραπτού λόγου
        </h1>
        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
          Сочинения для экзамена B1: задание, чек-лист и подсказки без готового списывания.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1 rounded-xl border border-slate-700/70 bg-slate-900/75 p-1">
        {SUB_TABS.map((tab) => {
          const isActive = subTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleSubTabSelect(tab.id)}
              className={`min-h-9 rounded-lg px-1.5 py-1.5 text-[10px] font-extrabold leading-tight transition ${
                isActive
                  ? 'bg-sky-400/20 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {subTab === 'templates' ? (
        <UniversalTemplatesView speakGreek={speakGreek} />
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-700/60 bg-slate-800/40 px-3 py-2 text-[11px] text-slate-400">
            <span>
              Написано:{' '}
              <b className="text-emerald-400">
                {completedCount} из {sectionTopics.length}
              </b>
            </span>
            <span>
              Закреплено: <b className="text-amber-400">{pinnedCount}</b>
            </span>
            {visibleTopics.length !== sectionTopics.length && (
              <span>
                Показано: <b className="text-sky-400">{visibleTopics.length}</b>
              </span>
            )}
            <span className="ml-auto text-[10px] text-slate-500">
              {subTab === 'informal' ? 'Письмо другу • 12 баллов' : 'Официальный текст • 13 баллов'}
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {filterOptions.map((filterOption) => {
              const isActive = sourceFilter === filterOption.id;

              return (
                <button
                  key={filterOption.id}
                  type="button"
                  onClick={() => setSourceFilter(filterOption.id)}
                  className={`shrink-0 rounded-full border px-2.5 py-1.5 text-[10px] font-bold leading-none transition ${
                    isActive
                      ? 'border-sky-400/70 bg-sky-400/20 text-sky-300'
                      : 'border-slate-700 bg-slate-900/65 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                  }`}
                  aria-pressed={isActive}
                >
                  {filterOption.label}
                </button>
              );
            })}
          </div>

          {visibleTopics.length > 0 ? (
            <div className="space-y-3">
              {visibleTopics.map((topic) => (
                <EssayTopicCard
                  key={topic.id}
                  topic={topic}
                  isPinned={pinnedSet.has(topic.id)}
                  isCompleted={completedSet.has(topic.id)}
                  hintLevel={state.essayProgress.hintLevels[topic.id] ?? 0}
                  dispatch={dispatch}
                  speakGreek={speakGreek}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/35 px-4 py-8 text-center">
              <p className="text-sm font-bold text-slate-300">В этом фильтре пока нет тем</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Выбери другой источник или вернись к полному списку.
              </p>
              <button
                type="button"
                onClick={() => setSourceFilter('all')}
                className="mt-3 rounded-lg border border-sky-400/40 bg-sky-400/10 px-3 py-1.5 text-xs font-bold text-sky-300 transition hover:bg-sky-400/20"
              >
                Показать все темы
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
