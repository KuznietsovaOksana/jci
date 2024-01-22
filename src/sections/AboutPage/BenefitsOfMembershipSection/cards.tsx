interface Card {
  title: string;
  text: string[];
  style: string;
}

export const cards: Card[] = [
  {
    title: 'CYE',
    text: [
      'The JCI Ten Outstanding Young Persons of the World (JCI TOYP) program honors ten outstanding young people under the age of 40 each year. These individuals exemplify the spirit of the JCI Mission. The final ten TOYP nominees will be honored during the JCI World Congress.',
    ],
    style: 'card1',
  },
  {
    title: 'TOYP',
    text: [
      'The JCI Creative Young Entrepreneur Program is a competition with the main objective to motivate JCI’s young leaders. The CYE Program, through sponsors and partners, will reward the winners of the competition for their efforts and also play an important role in inspiring and promoting participants to create innovative new businesses.',
    ],
    style: 'card2',
  },
  {
    title: 'Global Leadership Masterclass',
    text: [
      'JCI’s new Global Leadership Masterclass series follows a talented pool of professional coaches as they break down the key concepts that make an enterprising young leader. Each course is based around one of JCI’s Four Areas of Opportunity: Business and Entrepreneurship, Individual Development, Community Action and International Cooperation.',
    ],
    style: 'card3',
  },
  {
    title: 'RISE',
    text: [
      'Rebuild-Invest-Sustain-Evolve is JCI’s reaction to the Covid-19 pandemic from an economic perspective. This initiative encourages members to develop projects related to the three pillars of',
      'RISE:',
      '1.Sustaining and rebuilding economies by supporting small, local businesses',
      '2.Motivating the workforce through youth entrepreneurship',
      '3.Preserving mental health and well-being.',
    ],
    style: 'card4',
  },
];
