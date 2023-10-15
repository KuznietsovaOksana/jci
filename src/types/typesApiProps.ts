import { AccordionProps } from '@/components/common/Accordion/Accordion.props';
import { IPresidentProps } from '@/sections/MainPage/OurPresident/PresidentProps';
import { IAchievementsProps } from '@/sections/MainPage/TogetherSection/achievementsProps';

export interface IMainApiProps
  extends AccordionProps,
    IAchievementsProps,
    IPresidentProps {}
