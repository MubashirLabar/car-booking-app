import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ConfirmationCodeField from "components/ConfirmationCodeField";
import AppButton from "components/AppButton";
import colors from "styles/colors";
import { styles } from "styles/styles";
import routes from "navigation/routes";
import { AngleLeftIcon } from "icons";

function VerificationCodeScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleContinueVerification = () => {
    navigation.navigate(routes.CREATE_PROFILE);
  };

  return (
    <View className="flex-1 bg-primary-700">
      <View className="flex-1 pt-[35px] pb-[30px]">
        <TouchableOpacity
          className="w-8 h-8 flex items-center justify-center mb-8 ml-[-6px]"
          onPress={() => navigation.goBack()}
        >
          <AngleLeftIcon color={colors.white} size={24} />
        </TouchableOpacity>
        <Text className="font-SemiBold text-[26px] text-white tracking-[0.02px] mb-[13px]">
          Enter verification code
        </Text>
        <Text className="font-Regular text-[15px] mb-[36px] text-white">
          We've sent it to +92-308-0059035
        </Text>
        <ConfirmationCodeField
          cellCount={4}
          value={value}
          setValue={setValue}
        />
        <View className="flex flex-row mt-14">
          {timeLeft === 0 ? (
            <AppButton
              className="h-[38px] w-[112px] rounded-[50px] bg-black-700"
              style={styles.buttonShadow}
            >
              <Text className="font-Regular text-white text-[14px] leading-[16px]">
                Send Again
              </Text>
            </AppButton>
          ) : (
            <Text className="font-Regular text-white text-[14px]">
              {`Resend available in 00:${
                timeLeft < 10 ? `0${timeLeft}` : timeLeft
              }`}
            </Text>
          )}
        </View>
      </View>
      <View className="mb-8">
        <AppButton
          className="bg-black-700"
          style={styles.buttonShadow}
          onPress={handleContinueVerification}
        >
          <Text className="font-SemiBold text-white text-[16px]">Continue</Text>
        </AppButton>
      </View>
    </View>
  );
}

export default VerificationCodeScreen;
