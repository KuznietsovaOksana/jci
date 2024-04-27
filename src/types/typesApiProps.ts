import { AccordionProps } from '@/components/common/Accordion/Accordion.props';
import { IHeroProps } from '@/sections/MainPage/HeroSection/heroProps';
import { IPresidentProps } from '@/sections/MainPage/OurPresident/PresidentProps';
import { IPartnersProps } from '@/sections/MainPage/PartnersSection/PartnersProps';
import { IAchievementsProps } from '@/sections/MainPage/TogetherSection/achievementsProps';
import { IMediaProps } from '@/sections/MainPage/ImpactSection/mediaProps';

import { IMemberCardProps } from '@/sections/AboutPage/TeamSection/type';
import { IMainPhotoProps } from '@/sections/AboutPage/MainSection/type';
import { ILatestMewsProps } from '@/sections/NewsPage/LatestNewsSection/latestNewsProps';
import { IProjectsProps } from '@/sections/ProjectsPage/lProjectsProps';

export interface IMainApiProps
  extends AccordionProps,
    IAchievementsProps,
    IPresidentProps,
    IHeroProps,
    IPartnersProps,
    IMediaProps,
    ILatestMewsProps,
    IProjectsProps {}

export interface IAboutApiProps extends IMemberCardProps, IMainPhotoProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INewsApiProps extends ILatestMewsProps {}
