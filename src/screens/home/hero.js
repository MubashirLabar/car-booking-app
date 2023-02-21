import { View, Text } from "react-native";
import TextField from "components/TextField";
import { SearchIcon, FilterIcon } from "icons";

function Hero() {
  return (
    <View className="bg-white px-[20px] pt-[28px] pb-[32px] mb-[10px]">
      <Text className="font-SemiBold text-[24px] mb-[2px]">
        Hello, Mubashir
      </Text>
      <Text className="font-SemiBold text-[24px] mb-6">
        Find your dream ride
      </Text>
      {/* Search Field */}
      <View className="bg-grey-500  rounded-[50px] fled flex-row items-center px-5">
        <SearchIcon size={21} />
        <TextField
          className="flex-1 h-[52px] text-[16px] font-Medium px-4"
          placeholder="Find your ride"
          editable={false}
        />
        <View className="pr-[2px]">
          <FilterIcon size={22} />
        </View>
      </View>
    </View>
  );
}

export default Hero;
