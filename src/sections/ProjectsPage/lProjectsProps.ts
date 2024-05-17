export interface IProjectItem {
  id: number;
  multimedia: [
    {
      id: number;
      photo: string;
      alt_text_en: string;
      alt_text_uk: string;
      project: number;
    }
  ];
  partners: [
    {
      id: number;
      partner_photo: string;
      partner_photo_alt_text_en: string;
      partner_photo_alt_text_uk: string;
      partner_link: string | null;
      project: number;
    }
  ];
  name_en: string;
  name_uk: string;
  founder_en: string;
  founder_uk: string;
  short_description_en: string;
  short_description_uk: string;
  amount_en: string;
  amount_uk: string;
  donation_link: string;
  overview_en: string;
  overview_uk: string;
  project_detail_en: string;
  project_detail_uk: string;
  impact_en: string;
  impact_uk: string;
  contact_en: string;
  contact_uk: string;
  done: boolean;
  order_number: number;
}

export interface IProjectsProps {
  projectsData: IProjectItem[];
}

export interface ICompletedProjects {
  card: IProjectItem;
}

export interface IIntroSection {
  currentProject: IProjectItem;
}

export interface IProjects {
  projects: IProjectItem[];
}

export interface ICurrentProject extends IIntroSection, IProjects {}
