import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./VideoPlayer.styles";

type VideoPlayerProps = {
  id: number;
  videoLink: string;
  caption: string;
  activePostId: number;
};

const delay = 1000;

const VideoPlayer = ({
  id,
  videoLink,
  activePostId,
  caption,
}: VideoPlayerProps) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [isMuted, setIsMuted] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (activePostId === id) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }).start();
    }
  }, [opacity, activePostId]);

  const isPlaying = status?.isLoaded && status.isPlaying;

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (activePostId !== id) {
      videoRef.current.pauseAsync();
    }
    if (activePostId === id) {
      videoRef.current.playAsync();
    }
  }, [activePostId, videoRef.current]);

  const onPress = () => {
    if (!videoRef.current) {
      return;
    }
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const handleAudio = () => {
    if (!videoRef.current) {
      return;
    }
    setIsMuted((pre) => !pre);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: videoLink }}
        resizeMode={ResizeMode.COVER}
        onPlaybackStatusUpdate={setStatus}
        isLooping
        isMuted={isMuted}
      />

      <Pressable onPress={onPress} style={styles.content}>
        <View style={styles.overlay} />
        {!isPlaying && (
          <Ionicons
            style={styles.playIcon}
            name="play"
            size={70}
            color="rgba(255, 255, 255, 0.6)"
          />
        )}

        <Animated.Text
          style={[
            styles.likeText,
            styles.animatedCaption,
            {
              opacity,
            },
          ]}
        >
          {caption}
        </Animated.Text>
        <Pressable style={styles.muteButton} onPress={handleAudio}>
          {isMuted ? (
            <Octicons name="mute" color="white" size={50} />
          ) : (
            <Octicons name="unmute" color="white" size={50} />
          )}
        </Pressable>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.footer}>
            <View style={styles.bottomRow}>
              <View style={styles.likeContainer}>
                <Ionicons name="heart" size={35} color="white" />
                <Text style={styles.likeText}>Like</Text>
              </View>
              <View style={styles.likeContainer}>
                <Entypo name="share-alternative" size={35} color="white" />
                <Text style={styles.likeText}>Share</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
