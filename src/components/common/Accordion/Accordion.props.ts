interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  faqs: AccordionItem[];
}
