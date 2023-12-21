import { AccordionProps } from '@/components/common/Accordion/Accordion.props';
import { IHeroProps } from '@/sections/MainPage/HeroSection/heroProps';
import { IPresidentProps } from '@/sections/MainPage/OurPresident/PresidentProps';
import { IPartnersProps } from '@/sections/MainPage/PartnersSection/PartnersProps';
import { IAchievementsProps } from '@/sections/MainPage/TogetherSection/achievementsProps';
import { IMemberCardProps } from '@/sections/AboutPage/TeamSection/type';
import { IMainPhotoProps } from '@/sections/AboutPage/MainSection/type';

export interface IMainApiProps
  extends AccordionProps,
    IAchievementsProps,
    IPresidentProps,
    IHeroProps,
    IPartnersProps {}

export interface IAboutApiProps extends IMemberCardProps, IMainPhotoProps {}
