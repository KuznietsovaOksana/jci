interface IMediaItem {
  id: number;
  photo: string;
  alt_text_photo_en: string;
  alt_text_photo_uk: string;
}

export interface IMediaProps {
  mediaData: IMediaItem[];
}
