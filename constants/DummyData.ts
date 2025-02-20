import { ImageItem, SolidItem } from "./Types";

const solidData: SolidItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  backgroundColor: `rgba(82, 78, 183,${1 - index / 10})`,
  type: "SOLID",
}));

const imagesData: ImageItem[] = [
  {
    id: 1,
    link: "https://images.pexels.com/photos/2104153/pexels-photo-2104153.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 2,
    link: "https://images.pexels.com/photos/3784721/pexels-photo-3784721.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 3,
    link: "https://images.pexels.com/photos/4631079/pexels-photo-4631079.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 4,
    link: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 5,
    link: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 6,
    link: "https://images.pexels.com/photos/3784223/pexels-photo-3784223.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 7,
    link: "https://images.pexels.com/photos/1819655/pexels-photo-1819655.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 8,
    link: "https://images.pexels.com/photos/3493770/pexels-photo-3493770.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
  {
    id: 9,
    link: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
];

export { imagesData, solidData };
