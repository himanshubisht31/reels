import { ImageItem, SolidItem, VideoItem } from "./Types";

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
    id: 9,
    link: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?w=720&h=1280&fit=crop",
    type: "IMAGE",
  },
];

const tileData = [
  { id: 1, title: "VIDEO", color: "#ffcebe" },
  { id: 2, title: "IMAGE", color: "#ffe3c0" },
  { id: 3, title: "SOLID", color: "#ffe9f0" },
];

const videosData: VideoItem[] = [
  {
    id: 1,
    videoLink: "https://cdn.pixabay.com/video/2024/08/16/226795_large.mp4",
    type: "VIDEO",
    caption: "Aerial view of a car driving on a road",
  },
  {
    id: 2,
    videoLink:
      "https://media.istockphoto.com/id/2152228621/video/modern-car-driving-towards-mountain.mp4?s=mp4-640x640-is&k=20&c=sGpCCROFdjksB-_otzolqFpUaYobINPUYSVdGQMK01I=",
    type: "VIDEO",
    caption: "Modern car driving towards mountain",
  },
  {
    id: 3,
    videoLink:
      "https://media.istockphoto.com/id/1436175177/video/gardena-pass-with-sella-group-and-mt-langkofel-in-the-dolomites-mountains.mp4?s=mp4-640x640-is&k=20&c=duGGFGhJ6YLCaylHiCxiWll2QpupdSv6os5iAfcivHU=",
    type: "VIDEO",
    caption:
      "Gardena Pass with Sella Group and Mt Langkofel in the Dolomites mountains",
  },
  {
    id: 4,
    videoLink:
      "https://media.istockphoto.com/id/2184740079/video/car-driving-on-snowy-road-through-forested-wilderness-at-golden-sunset.mp4?s=mp4-640x640-is&k=20&c=aNrlypZoPhKrQLJgdBXsyPnFNiMh_dWcpkns7tAUmLY=",
    type: "VIDEO",
    caption:
      "Car driving on snowy road through forested wilderness at golden sunset",
  },
  {
    id: 5,
    videoLink:
      "https://media.istockphoto.com/id/1471314856/video/driving-on-snowy-mountain-roads.mp4?s=mp4-640x640-is&k=20&c=Vj731gn-HmfFV_jdMJICoOa2V1yQrFmrgifIspePGek=",
    type: "VIDEO",
    caption: "Driving on snowy mountain roads",
  },
  {
    id: 6,
    videoLink:
      "https://media.istockphoto.com/id/2159335201/video/vertical-of-view-from-the-car-driving-by-the-asphalt-road-in-puerto-plata-dominican-republic.mp4?s=mp4-640x640-is&k=20&c=ID8XHtxHnbhqF-xefdf-TWKCfy8-7kAnuaq7vgpGVrQ=",
    type: "VIDEO",
    caption:
      "Vertical of view from the car driving by the asphalt road in Puerto Plata, Dominican Republic",
  },
];

export { imagesData, solidData, tileData, videosData };
