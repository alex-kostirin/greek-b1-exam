export interface TemplateBlock {
  label: string;
  greek: string;
  russian: string;
}

export interface ExamTemplate {
  title: string;
  subtitle: string;
  blocks: TemplateBlock[];
}
