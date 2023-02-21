import { View, Text, Dimensions } from "react-native";

function Banner() {
  return (
    <View className="bg-white p-[20px] mb-[10px]">
      <View className="w-full h-[140px] bg-primary-700 rounded-[12px] p-[18px] flex items-center justify-center">
        <Text className="font-Medium text-white text-[18px]">Banner</Text>
      </View>
    </View>
  );
}

export default Banner;
