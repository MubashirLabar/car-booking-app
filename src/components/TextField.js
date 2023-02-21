import { TextInput } from "react-native";
import colors from "styles/colors";

function TextField({ className, ...rest }) {
  return (
    <TextInput
      className={`py-3 px-[20px] rounded-[8px] h-[58px] font-Regular text-[15px] text-black-700 ${className}`}
      underlineColorAndroid="transparent"
      placeholderTextColor={colors.black[300]}
      includeFontPadding={false}
      autoCapitalize="none"
      {...rest}
    />
  );
}

export default TextField;
