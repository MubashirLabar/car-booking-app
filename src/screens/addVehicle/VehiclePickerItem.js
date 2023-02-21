import { View, Image, TouchableWithoutFeedback } from "react-native";
import { AppText } from "components";

function VehiclePickerItem({ item, onPress }) {
  if (!item) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="py-[20px] px-3 w-[33%] items-center">
        <Image
          source={item.image}
          className="h-[65px] w-[65px] mb-2"
          style={{ resizeMode: "contain" }}
        />
        <AppText className="text-[16px] text-center">{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default VehiclePickerItem;
