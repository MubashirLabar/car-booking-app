import { View, FlatList } from "react-native";
import Banner from "./Banner";
import Hero from "./hero";
import Products from "./Products";

function HomeScreen() {
  return (
    <View className="flex-1 bg-grey-500">
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Hero />
            <Banner />
            <Products />
          </>
        }
      />
    </View>
  );
}

export default HomeScreen;
