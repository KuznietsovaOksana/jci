import dynamic from 'next/dynamic';

const Care = dynamic(() => import('public/icons/caring_graphic.svg'));
const Help = dynamic(() => import('public/icons/helping_graphic.svg'));
const Reliable = dynamic(() => import('public/icons/reliable_graphic.svg'));
const Sustainable = dynamic(
  () => import('public/icons/sustainable_graphic.svg')
);
const Trusted = dynamic(() => import('public/icons/trusted_graphic.svg'));

interface Characteristic {
  icon: React.ReactNode;
  key: string;
}

export const characteristicData: Characteristic[] = [
  { key: 'reliable', icon: <Reliable /> },
  { key: 'trusted', icon: <Trusted /> },
  { key: 'caring', icon: <Care /> },
  { key: 'helping', icon: <Help /> },
  { key: 'sustainable', icon: <Sustainable /> },
];
