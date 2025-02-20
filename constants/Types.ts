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

type CarouselItem = SolidItem | ImageItem;

type TileProps = {
  title: string;
  color: string;
};

export { SolidItem, ImageItem, CarouselItem, TileProps };
