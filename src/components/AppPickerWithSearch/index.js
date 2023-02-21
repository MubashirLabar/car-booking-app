import { useState, useMemo } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  SafeAreaView,
  FlatList,
} from "react-native";
import { AngleDownIcon, ArrowLeftIcon } from "icons";
import { AppText, Touchable, TextField } from "components";
import colors from "styles/colors";
import PickerWithSearchItem from "./PickerWithSearchItem";

function AppPickerWithSearch({
  items,
  placeholder,
  searchPlaceHolder,
  style,
  selectedItem,
  onSelectItem,
  numColumns = 1,
  PickerItemComponent = PickerWithSearchItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredItems = useMemo(() => {
    return items?.filter((b) => {
      return b.label.toLowerCase().includes(filterText.toLowerCase());
    });
  }, [filterText, items]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Picker Field */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View className={style}>
          {selectedItem?.label ? (
            <AppText className="font-SemiBold text-[18px] leading-5 flex-1">
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText
              className="flex-1 text-[18px]"
              style={{ color: colors.black[300] }}
            >
              {placeholder}
            </AppText>
          )}
          <View>
            <AngleDownIcon size={18} color={colors.black[300]} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <SafeAreaView className="flex-1">
          <View className="flex-row items-center justify-center h-[54px] py-2 px-3 border-b-[1px] border-grey-700">
            <Touchable
              className="rounded-[50px] bg-white flex items-center justify-center z-10 h-10 w-10 mr-1"
              onPress={closeModal}
            >
              <ArrowLeftIcon size={24} />
            </Touchable>
            <TextField
              placeholder={searchPlaceHolder}
              className="flex-1 h-[46px] px-3 text-[18px]"
              value={filterText}
              onChangeText={(value) => setFilterText(value)}
            />
          </View>
          <FlatList
            numColumns={numColumns}
            data={filteredItems}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

export default AppPickerWithSearch;
