import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
type TileProps = {
  title: string;
  color: string;
};
const Tile = ({ title, color }: TileProps) => {
  const { push } = useRouter();
  return (
    <Pressable
      onPress={() =>
        push({
          pathname: "/explore",
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

const tileData = [
  { id: 1, title: "VIDEO", color: "#ffcebe" },
  { id: 2, title: "IMAGE", color: "#ffe3c0" },
  { id: 3, title: "SOLID", color: "#ffe9f0" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {tileData.map(({ id, title, color }) => (
        <Tile key={id} title={title} color={color} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  tile: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
