import { TouchableHighlight } from "react-native";
import { AppText } from "components";
import colors from "styles/colors";

function AppPickerItem({ item, onPress }) {
  if (!item) {
    return null;
  }
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.grey[500]}
      onPress={onPress}
      className="px-5 py-3 mb-2"
    >
      <AppText className="text-[18px]">{item.label}</AppText>
    </TouchableHighlight>
  );
}

export default AppPickerItem;
