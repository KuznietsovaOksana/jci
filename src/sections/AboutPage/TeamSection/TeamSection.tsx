import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { MemberCard } from '@/components/cards/MemberCard';
import { IMemberCardProps } from '@/types/typesApiProps';
import { ITeamSection } from './sectionTypes';
import { Title } from '@/components/typography/Title';
import { Tabs } from '@/components/common/Tabs';

import { useLocalization } from '@/contexts/LocalizationContext';
import { useScreen } from '@/hooks/use_screen';

import s from './TeamSection.module.css';

export const TeamSection = ({ memberCardData }: IMemberCardProps) => {
  const { locale } = useLocalization();
  const { t } = useTranslation('whoWeArePage');
  const data = t('team_section', {
    returnObjects: true,
    defaultValue: '',
  }) as ITeamSection;

  const [numberTab, setNumberTab] = useState(0);
  const onClickTabTeam = (index: number) => setNumberTab(index);

  const [isMounted, setIsMounted] = useState(false);
  const { isMobile } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const tabs = [data.type_one, data.type_two];
  return (
    <>
      <Section>
        <Container>
          <div className={s.block_title}>
            <Title className={s.title}>
              {data.title}
              <span className={s.title_span}>{data.span_title}</span>
            </Title>
            <Tabs type='team' tabs={{ tabs }} onClickTabTeam={onClickTabTeam} />
          </div>
          {isMobile && (
            <div className='projectSliderContainer sliderContainerTablet'>
              <div className='projectSliderCards sliderCardsTablet'>
                {memberCardData.length > 0 ? (
                  memberCardData.map((member, index) => {
                    if (
                      member.team_choice !== 'board_of_directors' &&
                      numberTab === 0
                    )
                      return null;
                    if (
                      member.team_choice !== 'local_leaders' &&
                      numberTab === 1
                    )
                      return null;
                    return (
                      <SwiperSlide key={index}>
                        <MemberCard
                          photo={member.photo}
                          nameSurname={
                            locale === 'uk'
                              ? member.name_surname_ua
                              : member.name_surname_en
                          }
                          alt={
                            locale === 'uk'
                              ? member.alt_text_ua
                              : member.alt_text_en
                          }
                          position={
                            locale === 'uk'
                              ? member.position_ua
                              : member.position_en
                          }
                          experience1={
                            locale === 'uk'
                              ? member.previous_experience_1_ua
                              : member.previous_experience_1_en
                          }
                          experience2={
                            locale === 'uk'
                              ? member.previous_experience_2_ua
                              : member.previous_experience_2_en
                          }
                          experience3={
                            locale === 'uk'
                              ? member.previous_experience_3_ua
                              : member.previous_experience_3_en
                          }
                          experience4={
                            locale === 'uk'
                              ? member.previous_experience_4_ua
                              : member.previous_experience_4_en
                          }
                          experience5={
                            locale === 'uk'
                              ? member.previous_experience_5_ua
                              : member.previous_experience_5_en
                          }
                          facebook_link={member.facebook_link}
                        />
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <p>No members available.</p>
                )}
              </div>
            </div>
          )}
          <div className={s.team_list}>
            {!isMobile &&
              (memberCardData.length > 0 ? (
                memberCardData.map((member, index) => {
                  if (
                    member.team_choice !== 'board_of_directors' &&
                    numberTab === 0
                  )
                    return null;
                  if (member.team_choice !== 'local_leaders' && numberTab === 1)
                    return null;
                  return (
                    <MemberCard
                      key={index}
                      photo={member.photo}
                      nameSurname={
                        locale === 'uk'
                          ? member.name_surname_ua
                          : member.name_surname_en
                      }
                      alt={
                        locale === 'uk'
                          ? member.alt_text_ua
                          : member.alt_text_en
                      }
                      position={
                        locale === 'uk'
                          ? member.position_ua
                          : member.position_en
                      }
                      experience1={
                        locale === 'uk'
                          ? member.previous_experience_1_ua
                          : member.previous_experience_1_en
                      }
                      experience2={
                        locale === 'uk'
                          ? member.previous_experience_2_ua
                          : member.previous_experience_2_en
                      }
                      experience3={
                        locale === 'uk'
                          ? member.previous_experience_3_ua
                          : member.previous_experience_3_en
                      }
                      experience4={
                        locale === 'uk'
                          ? member.previous_experience_4_ua
                          : member.previous_experience_4_en
                      }
                      experience5={
                        locale === 'uk'
                          ? member.previous_experience_5_ua
                          : member.previous_experience_5_en
                      }
                      facebook_link={member.facebook_link}
                    />
                  );
                })
              ) : (
                <p>No members available.</p>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
};
