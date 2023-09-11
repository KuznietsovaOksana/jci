

interface Data {
  projectName: string;
  organization: string;
  moneyAmount: string;
  imageSrc: string;
  imageAlt: string;

}

export const data: Data = {
  projectName: 'Housing for IDP',
  organization: 'JCI "OLIMP"',
  moneyAmount: '800,000 EUR',
  imageSrc: '/images/projects/project_01dt_add.jpg',
  imageAlt: 'Image 1',
};

export const projectName = data.projectName;
export const organization = data.organization;
export const moneyAmount = data.moneyAmount;
export const imgSrc = data.imageSrc;
export const imgAlt = data.imageAlt;

