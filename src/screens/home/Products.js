import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "components/ProductCard";
import ListItemSeparator from "components/ListItemSeparator";

function Products({ onPress }) {
  const products = [
    {
      id: 1,
      name: "Economy",
      destination: "Multan to Lahore",
      image: require("../../assets/images/car-1.png"),
      price: 3500,
      timeStamp: "40 min ago",
    },
    {
      id: 2,
      name: "Comfort",
      destination: "Multan to Faisalabad",
      image: require("../../assets/images/car-1.png"),
      price: 2000,
      timeStamp: "1 hour ago",
    },
    {
      id: 3,
      name: "Taxi",
      destination: "D.G Khan to Multan",
      image: require("../../assets/images/car-1.png"),
      price: 1000,
      timeStamp: "4 hour ago",
    },
    {
      id: 4,
      name: "Economy",
      destination: "Multan to Faisalabad",
      image: require("../../assets/images/car-2.png"),
      price: 3500,
      timeStamp: "40 min ago",
    },
    {
      id: 5,
      name: "Comfort",
      destination: "Multan to Lahore",
      image: require("../../assets/images/car-2.png"),
      price: 2000,
      timeStamp: "1 hour ago",
    },
    {
      id: 6,
      name: "Taxi",
      destination: "D.G Khan to Multan",
      image: require("../../assets/images/car-2.png"),
      price: 1000,
      timeStamp: "4 hour ago",
    },
  ];

  return (
    <View className="bg-white px-[20px]">
      <Text className="font-SemiBold text-black-700 text-[20px] mt-5 mb-2">
        Available vehicles for rent
      </Text>
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return <ProductCard key={index} product={item} />;
          }}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    overflow: "hidden",
  },
});

export default Products;
