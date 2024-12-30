import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

export type SplashProps = {
  onLoaded(value: boolean): void;
};

export function Splash({ onLoaded }: SplashProps) {
  function onPlaybackStatusUpdate(status: any) {
    onLoaded(!status.isPlaying);
  }

  return (
    <Video
      shouldPlay
      isLooping={false}
      resizeMode={ResizeMode.COVER}
      style={StyleSheet.absoluteFill}
      source={require("../../../assets/splash.mp4")}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
}
