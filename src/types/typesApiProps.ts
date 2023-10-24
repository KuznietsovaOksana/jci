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
