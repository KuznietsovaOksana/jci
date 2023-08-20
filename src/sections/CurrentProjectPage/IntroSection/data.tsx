export interface ImageProps {
  src: string;
  alt: string;
}

interface Data {
  projectName: string;
  organization: string;
  moneyAmount: string;
  images: ImageProps[];
}

export const data: Data = {
  projectName: 'Housing for IDP',
  organization: 'JCI "OLIMP"',
  moneyAmount: '800,000 EUR',
  images: [
    {
      src: '/images/projects/project_01dt_add.jpg',
      alt: 'Image 1',
    },
    {
      src: '/images/projects/project_01dt_hover.png',
      alt: 'Image 2',
    },
    {
      src: '/images/projects/project_01dt.jpg',
      alt: 'Image 3',
    },
  ],
};

export const projectName = data.projectName;
export const organization = data.organization;
export const moneyAmount = data.moneyAmount;
export const images = data.images;
