import { Dimensions, StyleSheet } from "react-native";

const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    top: "92%",
  },
  playIcon: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
  safeArea: {
    flex: 1,
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
  },
  likeText: {
    color: "white",
    fontFamily: "SpaceMono",
    fontSize: 18,
  },
  muteButton: {
    alignSelf: "flex-end",
    margin: 10,
  },
  animatedCaption: {
    top: "30%",
    width: "75%",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default styles;
