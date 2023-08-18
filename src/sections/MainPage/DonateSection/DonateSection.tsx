import React from 'react';

import { DonateSectionComponent } from '@/components/sections/DonateSectionComponent';

export interface TextProps {
  heading: string;
}

export const DonateSection: React.FC<TextProps> = ({ heading }) => {
  return <DonateSectionComponent heading={heading} />;
};
