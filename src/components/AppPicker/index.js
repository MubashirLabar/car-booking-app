import { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  SafeAreaView,
  FlatList,
} from "react-native";
import { AngleDownIcon, ArrowLeftIcon } from "icons";
import { AppText, Touchable, TextField } from "components";
import colors from "styles/colors";
import AppPickerItem from "./AppPickerItem";

function AppPicker({
  items,
  placeholder,
  style,
  selectedItem,
  onSelectItem,
  headerTitle = "Choose Item",
  PickerItemComponent = AppPickerItem,
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
            <AppText className="font-SemiBold text-[18px] flex-1">
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText
              className="text-[18px] flex-1"
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
          <View className="flex-row items-center justify-center h-[56px] px-3 mb-1 border-b-[1px] border-grey-700">
            <Touchable
              className="rounded-[50px] bg-white flex items-center justify-center h-10 w-10 absolute left-[10px] z-10"
              onPress={closeModal}
            >
              <ArrowLeftIcon size={24} />
            </Touchable>
            <AppText className="flex-1 text-center font-SemiBold text-[22px]">
              {headerTitle}
            </AppText>
          </View>
          <FlatList
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

export default AppPicker;
