interface AccordionItem {
  id: number;
  question_en: string;
  question_uk: string;
  answer_en: string;
  answer_uk: string;
}

export interface AccordionProps {
  faqData: AccordionItem[];
}
