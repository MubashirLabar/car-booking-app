import { Image, View, Text, ScrollView } from "react-native";
import { ArrowLeftIcon } from "icons";
import AppButton from "components/AppButton";
import Touchable from "components/Touchable";

function ProductDetails({ navigation }) {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 22,
        }}
      >
        <View className="bg-grey-300 p-2 flex items-center justify-center mb-1">
          <Image
            source={require("../../assets/images/car-1.png")}
            style={{ resizeMode: "contain" }}
            className="h-[150px] w-[150px]"
          />
          <Touchable
            className="absolute top-3 left-3 h-10 w-10 rounded-[50px] bg-white flex items-center justify-center z-10"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={22} />
          </Touchable>
        </View>
        <View className="flex-1 px-[20px]">
          <View className="flex flex-row items-start mt-3 mb-[42px]">
            <View className="flex flex-1">
              <Text className="font-SemiBold text-[24px] text-black-700 mb-3 leading-[30px]">
                Economy
              </Text>
              <Text className="font-Regular text-[16px] leading-[18px]">
                From: Multan - To: Lahore
              </Text>
            </View>
            <Text className="font-Regular text-[14px] leading-[24px]">
              40 min ago
            </Text>
          </View>

          <Text className="font-SemiBold text-[32px] text-black-700 leading-[33px] mb-7">
            PKR 3000
          </Text>

          <Text className="font-SemiBold text-[24px] text-black-700 mt-[18px] mb-3">
            Description
          </Text>

          <Text className="font-Regular text-[16px] leading-[23px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
      </ScrollView>

      <View className="px-[20px] py-4 bg-white border-t-[1px] border-grey-700">
        <AppButton
          // onPress={() => navigation.navigate(routes.AUTH_VERIFICATION_CODE)}
          className="bg-primary-700 rounded-[0px] h-[54px]"
        >
          <Text className="font-SemiBold text-white text-[16px]">
            Send Request
          </Text>
        </AppButton>
      </View>
    </View>
  );
}

export default ProductDetails;
