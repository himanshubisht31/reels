import { imagesData, solidData } from "@/constants/DummyData";
import { CarouselItem, ImageItem, SolidItem } from "@/constants/Types";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Image } from "react-native";

const videoData = [];

const DEVICE_HEIGHT = Dimensions.get("window").height;

const renderItem = ({ item }: { item: CarouselItem }) => {
  if (item.type === "IMAGE") {
    return (
      <Image
        style={{ width: "100%", height: DEVICE_HEIGHT }}
        resizeMode="cover"
        source={{ uri: (item as ImageItem).link }}
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

const dataMap: { [key: string]: CarouselItem[] } = {
  IMAGE: imagesData,
  SOLID: solidData,
  VIDEO: videoData,
};
const VerticalCarousel: React.FC = () => {
  const { type } = useLocalSearchParams() as { type: string };

  const data = dataMap[type] || [];

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
