import { AccordionProps } from '@/components/common/Accordion/Accordion.props';
import { IHeroProps } from '@/sections/MainPage/HeroSection/heroProps';
import { IPresidentProps } from '@/sections/MainPage/OurPresident/PresidentProps';
import { IPartnersProps } from '@/sections/MainPage/PartnersSection/PartnersProps';
import { IAchievementsProps } from '@/sections/MainPage/TogetherSection/achievementsProps';

export interface IMainApiProps
  extends AccordionProps,
    IAchievementsProps,
    IPresidentProps,
    IHeroProps,
    IPartnersProps {}

export interface IMemberCardItem {
  photo: string;
  alt_text_en: string;
  alt_text_ua: string;
  team_choice: string;
  facebook_link: string | null;
  name_surname_en: string;
  name_surname_ua: string;
  position_en: string;
  position_ua: string;
  previous_experience_1_en: string;
  previous_experience_1_ua: string;
  previous_experience_2_en: string;
  previous_experience_2_ua: string;
  previous_experience_3_en: string | null;
  previous_experience_3_ua: string | null;
  previous_experience_4_en: string | null;
  previous_experience_4_ua: string | null;
  previous_experience_5_en: null | null;
  previous_experience_5_ua: null | null;
}

export interface IMemberCardProps {
  memberCardData: IMemberCardItem[];
}

// export interface IAboutApiProps extends IMemberCardProps {}
