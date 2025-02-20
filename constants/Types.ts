type SolidItem = {
  id: number;
  backgroundColor: string;
  type: "SOLID";
};

type ImageItem = {
  id: number;
  link: string;
  type: "IMAGE";
};

type VideoItem = {
  id: number;
  videoLink: string;
  type: "VIDEO";
  caption: string;
};

type CarouselItem = SolidItem | ImageItem | VideoItem;
type TileProps = {
  title: string;
  color: string;
};

export { SolidItem, ImageItem, CarouselItem, TileProps, VideoItem };
