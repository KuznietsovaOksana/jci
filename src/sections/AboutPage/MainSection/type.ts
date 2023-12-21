export interface IMainPhotoItem {
  id: number;
  photo: string;
  alt_text_photo_en: string;
  alt_text_photo_uk: string;
}

export interface IMainPhotoProps {
  photoMainBannerData: IMainPhotoItem[];
}
