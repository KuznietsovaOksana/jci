interface IAchievementsItem {
  support_en: string;
  support_uk: string;
  helped_en: string;
  helped_uk: string;
  partner_en: string;
  partner_uk: string;
}

export interface IAchievementsProps {
  achievementsData: IAchievementsItem[];
}
