import { Text, View } from "react-native";
import AppButton from "components/AppButton";
import TextField from "components/TextField";
import routes from "navigation/routes";
import { styles } from "styles/styles";

function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 bg-primary-700">
      <View className="flex-1 pt-[45px] pb-[30px]">
        <Text className="font-SemiBold text-[26px] text-white tracking-[0.02px] mb-[12px]">
          Let's get started!
        </Text>
        <Text className="font-Regular text-[15px] mb-[32px] text-white">
          Please enter your mobile number
        </Text>
        <TextField
          className="bg-white font-SemiBold text-[18px] tracking-[0.2px]"
          placeholder="0300 0000000"
          keyboardType="number-pad"
        />
      </View>
      <View className="mb-8">
        <AppButton
          onPress={() => navigation.navigate(routes.AUTH_VERIFICATION_CODE)}
          className="bg-black-700"
          style={styles.buttonShadow}
        >
          <Text className="font-SemiBold text-white text-[16px]">Continue</Text>
        </AppButton>
      </View>
    </View>
  );
}

export default LoginScreen;
