import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors from "styles/colors";
import Touchable from "components/Touchable";
import routes from "navigation/routes";

function ProductCard({ product }) {
  const navigation = useNavigation();

  const handlePressProductCard = () => {
    navigation.navigate(routes.PRODUCT_DETAIL_SCREEN);
  };

  return (
    <Touchable onPress={handlePressProductCard}>
      <View className="flex flex-row items-center py-2">
        <View className="flex-1 flex flex-row items-center">
          <Image
            source={product.image}
            className="h-[68px] w-[68px] mr-[15px]"
            style={{ resizeMode: "contain" }}
          />
          <View className="flex">
            <Text className="font-SemiBold text-[16px] mb-1">
              {product.name}
            </Text>
            <Text className="font-Regular text-[13px]">
              {product.destination}
            </Text>
          </View>
        </View>
        <View className="flex items-end">
          <Text className="font-SemiBold text-[16px] mb-1">{`PKR ${product.price}`}</Text>
          <Text className="font-Regular text-[13px]">{product.timeStamp}</Text>
        </View>
      </View>
    </Touchable>
  );
}

export default ProductCard;
