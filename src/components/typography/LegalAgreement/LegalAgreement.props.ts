export interface LegalAgreementProps {
  title?: string;
  titleType?: 'h1' | 'h2' | 'h3';
  content: LegalAgreementContent[];
}

export interface LegalAgreementContent {
  type: string;
  text?: string;
  items?: string[];
}
