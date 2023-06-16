interface Image {
  src: string;
  alt: string;
  resolutions: {
    small: string;
    medium: string;
    large: string;
  };
}

export const images: Image[] = [
  {
    src: "/images/hero/hero_01d.jpg",
    alt: "Image 1",
    resolutions: {
      small: "/images/hero/hero_01m.jpg",
      medium: "/images/hero/hero_01t.jpg",
      large: "/images/hero/hero_01d.jpg",
    },
  },
  {
    src: "/images/hero/hero_02d.jpg",
    alt: "Image 2",
    resolutions: {
      small: "/images/hero/hero_02m.jpg",
      medium: "/images/hero/hero_02t.jpg",
      large: "/images/hero/hero_02d.jpg",
    },
  },
  {
    src: "/images/hero/hero_03d.jpg",
    alt: "Image 3",
    resolutions: {
      small: "/images/hero/hero_03m.jpg",
      medium: "/images/hero/hero_03t.jpg",
      large: "/images/hero/hero_03d.jpg",
    },
  },
];