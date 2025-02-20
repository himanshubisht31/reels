import VideoPlayer from "@/components/VideoPlayer";
import { imagesData, solidData, videosData } from "@/constants/Data";
import { CarouselItem, ImageItem, SolidItem } from "@/constants/Types";
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Dimensions, Image } from "react-native";

const DEVICE_HEIGHT = Dimensions.get("window").height;

const dataMap: Record<"IMAGE" | "SOLID" | "VIDEO", CarouselItem[]> = {
  IMAGE: imagesData,
  SOLID: solidData,
  VIDEO: videosData,
};
const VerticalCarousel: React.FC = () => {
  const { type } = useLocalSearchParams() as {
    type: "IMAGE" | "SOLID" | "VIDEO";
  };
  const [activePostId, setActivePostId] = useState(videosData[0].id);

  const data = dataMap[type] || [];

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 50 },
      onViewableItemsChanged: ({
        changed,
        viewableItems,
      }: {
        changed: any;
        viewableItems: Array<{ isViewable: boolean; item: CarouselItem }>;
      }) => {
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const renderItem = ({ item }: { item: CarouselItem }) => {
    if (item.type === "IMAGE") {
      return (
        <Image
          style={{ width: "100%", height: DEVICE_HEIGHT }}
          resizeMode="cover"
          source={{ uri: (item as ImageItem).link }}
        />
      );
    } else if (item.type === "VIDEO") {
      return (
        <VideoPlayer
          activePostId={activePostId}
          id={item.id}
          videoLink={item.videoLink}
          caption={item.caption}
        />
      );
    } else {
      return (
        <View
          style={[
            styles.item,
            { backgroundColor: (item as SolidItem).backgroundColor },
          ]}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        scrollEventThrottle={16}
        snapToAlignment="start"
        snapToOffsets={data.map((_, index) => index * DEVICE_HEIGHT)}
        disableIntervalMomentum
        {...(type === "VIDEO"
          ? {
              viewabilityConfigCallbackPairs:
                viewabilityConfigCallbackPairs.current,
            }
          : {})}
      />
    </View>
  );
};

export default VerticalCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "100%",
    height: DEVICE_HEIGHT,
  },
});
