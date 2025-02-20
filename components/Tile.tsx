import { TileProps } from "@/constants/Types";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
const Tile = ({ title, color }: TileProps) => {
  const { push } = useRouter();
  return (
    <Pressable
      onPress={() =>
        push({
          pathname: "/verticalCarousel",
          params: {
            type: title,
          },
        })
      }
      style={[styles.tile, { backgroundColor: color }]}
    >
      <Text
        style={{
          fontFamily: "SpaceMono",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export { Tile };

const styles = StyleSheet.create({
  tile: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
