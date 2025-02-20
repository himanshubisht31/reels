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

export { SolidItem, ImageItem, CarouselItem };
