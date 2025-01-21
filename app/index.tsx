import { Pressable , View } from "react-native";
import TextFont from "./components/UI/TextFont";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
    className="flex-1 bg-slate-500 justify-center items-center px-4"
    >
      <TextFont className="text-4xl text-red-300">Edit app/index.tsx to edit this screen.</TextFont>

      <Pressable onPress={() => {router.push('/(tabs)')}}>
          <TextFont>
            hello
          </TextFont>
      </Pressable>
    </View>
  );
}
