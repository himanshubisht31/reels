import { Tile } from "@/components/Tile";
import { tileData } from "@/constants/Data";
import { StyleSheet, View } from "react-native";

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
});
