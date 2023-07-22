interface Card {
  picture: {
    src: string;
    alt: string;
    resolutions: {
      small: string;
      medium: string;
      large: string;
    };
  };
  data: {
    date: string;
    location: string;
    level: string;
  };
  title: string;
  text: string;
}

export const cards: Card[] = [
  {
    picture: {
      src: '/images/news/news_01d.jpg',
      alt: 'Image 1',
      resolutions: {
        small: '/images/news/news_01m.jpg',
        medium: '/images/news/news_01t.jpg',
        large: '/images/news/news_01d.jpg',
      },
    },
    data: {
      date: '09.02.23',
      location: 'Monaco',
      level: 'International',
    },
    title: 'Balkan Conference',
    text: 'The road ahead: Leading forward in uncertainty. In this context, the Chamber of Young Entrepreneurs JCI Moldova is setting the scene for discussing all of the above, in the search for knowledge and practical tools for SMEs, by hosting the Balkan Conference with the generic “The road ahead: leading forward in uncertainty”.',
  },
  {
    picture: {
      src: '/images/news/news_02d.jpg',
      alt: 'Image 2',
      resolutions: {
        small: '/images/news/news_02m.jpg',
        medium: '/images/news/news_02t.jpg',
        large: '/images/news/news_02d.jpg',
      },
    },
    data: {
      date: '18.03.23',
      location: 'Paris',
      level: 'International',
    },
    title: 'Alternative power sources',
    text: 'Kyiv celebrates the acquisition of two exceptional solar power plants, generously provided by Roy Group Energy, with support from JCI France.',
  },
  {
    picture: {
      src: '/images/news/news_03d.jpg',
      alt: 'Image 3',
      resolutions: {
        small: '/images/news/news_03m.jpg',
        medium: '/images/news/news_03t.jpg',
        large: '/images/news/news_03d.jpg',
      },
    },
    data: {
      date: '24.05.23',
      location: 'Kyiv',
      level: 'Local',
    },
    title: 'JCI Ukraine held a national conference in Kyiv',
    text: 'The national conference served as a platform for professional development, leadership training, and the exchange of innovative ideas.',
  },
  {
    picture: {
      src: '/images/news/news_01d.jpg',
      alt: 'Image 1',
      resolutions: {
        small: '/images/news/news_01m.jpg',
        medium: '/images/news/news_01t.jpg',
        large: '/images/news/news_01d.jpg',
      },
    },
    data: {
      date: '09.02.23',
      location: 'Monaco',
      level: 'International',
    },
    title: 'Balkan Conference',
    text: 'The road ahead: Leading forward in uncertainty. In this context, the Chamber of Young Entrepreneurs JCI Moldova is setting the scene for discussing all of the above, in the search for knowledge and practical tools for SMEs, by hosting the Balkan Conference with the generic “The road ahead: leading forward in uncertainty”.',
  },
  {
    picture: {
      src: '/images/news/news_02d.jpg',
      alt: 'Image 2',
      resolutions: {
        small: '/images/news/news_02m.jpg',
        medium: '/images/news/news_02t.jpg',
        large: '/images/news/news_02d.jpg',
      },
    },
    data: {
      date: '18.03.23',
      location: 'Paris',
      level: 'International',
    },
    title: 'Alternative power sources',
    text: 'Kyiv celebrates the acquisition of two exceptional solar power plants, generously provided by Roy Group Energy, with support from JCI France.',
  },
  {
    picture: {
      src: '/images/news/news_03d.jpg',
      alt: 'Image 3',
      resolutions: {
        small: '/images/news/news_03m.jpg',
        medium: '/images/news/news_03t.jpg',
        large: '/images/news/news_03d.jpg',
      },
    },
    data: {
      date: '24.05.23',
      location: 'Kyiv',
      level: 'Local',
    },
    title: 'JCI Ukraine held a national conference in Kyiv',
    text: 'The national conference served as a platform for professional development, leadership training, and the exchange of innovative ideas.',
  },
];
