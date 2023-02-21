import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "styles/styles";
import colors from "styles/colors";
import Touchable from "components/Touchable";
import TextField from "components/TextField";
import AppButton from "components/AppButton";
import { UserIcon } from "icons";

function CreateProfile() {
  const [filePath, setFilePath] = useState("");

  const handleContinueProfile = () => {};

  const dpStyle =
    "h-[130px] w-[130px] bg-white rounded-[100px] flex items-center justify-center";

  return (
    <View className="flex-1 bg-primary-700">
      <Text className="font-SemiBold text-[26px] text-white tracking-[0.02px] py-[35px]">
        Fill Your Profile
      </Text>
      <View className="w-full flex flex-row items-center justify-center mb-10">
        {filePath ? (
          <Image
            source={require("../../assets/images/man.png")}
            style={{ resizeMode: "cover" }}
            className={dpStyle}
          />
        ) : (
          <View className={dpStyle}>
            <View className="mb-1">
              <UserIcon color={colors.black[700]} size={80} />
            </View>
          </View>
        )}
      </View>
      <View className="w-full mb-6">
        <TextField
          className="bg-white font-SemiBold text-[18px] tracking-[0.2px]"
          placeholder="Full Name"
        />
      </View>
      <View className="w-full mb-10">
        <TextField
          className="bg-white font-SemiBold text-[18px] tracking-[0.2px]"
          placeholder="Business Address"
        />
      </View>
      <AppButton
        className="bg-black-700"
        style={styles.buttonShadow}
        onPress={handleContinueProfile}
      >
        <Text className="font-SemiBold text-white text-[16px]">Continue</Text>
      </AppButton>
    </View>
  );
}

export default CreateProfile;
