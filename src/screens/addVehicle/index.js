import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Formik, useFormik } from "formik";
import { styles } from "styles/styles";
import {
  Touchable,
  AppText,
  TextField,
  AppButton,
  AppPickerWithSearch,
  AppPicker,
} from "components";
import { createDemandValidation } from "utils/validations/createDemandValidations";
import ErrorMessage from "components/ErrorMessage";
import VehiclePickerItem from "./VehiclePickerItem";
import {
  cities,
  vehicleList,
  daysList,
  destinationsList,
  fuelOptions,
  driverOptions,
  rideTypes,
  vehicleModals,
} from "data";

const fieldControlStyle = "flex relative h-[130px]";
const fieldStyle =
  "flex-1 flex flex-row items-center max-h-[58px] py-[16px] px-[20px] bg-grey-500 rounded-[40px]";
const urduLabelStyle = "leading-[34px] mb-[6px] px-1";

function AddVehicle() {
  const initialValues = {
    destination: "",
    fromCity: {
      label: "",
    },
    toCity: {
      label: "",
    },
    vehicle: "",
    vehicleModal: "",
    fuel: "",
    driverType: "",
    rideType: "",
    days: "",
    budget: "",
    extraKm: "",
  };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: createDemandValidation,
  //   onSubmit,
  // });

  // const {
  //   setFieldValue,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  //   values,
  //   errors,
  //   setFieldTouched,
  //   touched,
  // } = formik;

  const handleFromCityChange = (item, values, setFieldValue) => {
    if (values.destination?.value === "city-to-city") {
      setFieldValue("fromCity", item);
    } else {
      setFieldValue("fromCity", item);
      setFieldValue("toCity", item);
    }
  };

  return (
    <ScrollView
      className="w-full h-full bg-white px-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 42,
      }}
    >
      <View className="flex flex-row items-center mt-[26px] mb-7">
        <Text className="flex-1 font-SemiBold text-[26px] leading-[28px]">
          Make Your Request
        </Text>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={createDemandValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          errors,
          touched,
          values,
        }) => (
          <View className="flex-1">
            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                آپ کہا جانا چاہیے گے ؟
              </AppText>
              <AppPicker
                items={destinationsList}
                placeholder="Your Destination"
                headerTitle="Choose Destination"
                style={fieldStyle}
                selectedItem={values.destination}
                onSelectItem={(item) => {
                  setFieldValue("destination", item);
                }}
              />
              <ErrorMessage error={errors.destination} />
            </View>

            {values.destination ? (
              <>
                <View className={fieldControlStyle}>
                  <AppText
                    className={urduLabelStyle}
                    style={{ fontFamily: "Urdu_400Regular" }}
                  >
                    آپ کس شہر سے جانا چاہے گے؟
                  </AppText>
                  <AppPickerWithSearch
                    items={cities}
                    placeholder={` ${
                      values.destination?.value === "city-to-city"
                        ? "From City"
                        : "City Name"
                    }`}
                    searchPlaceHolder={
                      values.destination?.value === "city-to-city"
                        ? "Search from city..."
                        : "Search city name..."
                    }
                    style={fieldStyle}
                    selectedItem={values.fromCity}
                    onSelectItem={(item) =>
                      handleFromCityChange(item, values, setFieldValue)
                    }
                  />
                  <ErrorMessage error={errors.fromCity} />
                </View>

                {values.destination?.value === "city-to-city" && (
                  <View className={fieldControlStyle}>
                    <AppText
                      className={urduLabelStyle}
                      style={{ fontFamily: "Urdu_400Regular" }}
                    >
                      آپ کس شہر تک جانا چاہے گے؟
                    </AppText>
                    <AppPickerWithSearch
                      items={cities}
                      placeholder="To City"
                      searchPlaceHolder="Search to city..."
                      style={fieldStyle}
                      selectedItem={values.toCity}
                      onSelectItem={(item) => setFieldValue("toCity", item)}
                    />
                    <ErrorMessage error={errors.toCity} />
                  </View>
                )}
              </>
            ) : null}

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                آپ کو کونسی گاڑی چاہیے ؟
              </AppText>
              <AppPickerWithSearch
                items={vehicleList}
                PickerItemComponent={VehiclePickerItem}
                placeholder="Vehicle Type"
                searchPlaceHolder="Search vehicle..."
                numColumns={3}
                style={fieldStyle}
                selectedItem={values.vehicle}
                onSelectItem={(item) => setFieldValue("vehicle", item)}
              />
              <ErrorMessage error={errors.vehicle} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                گاڑی کا ماڈل انتخابِ کرے
              </AppText>
              <AppPicker
                items={vehicleModals}
                placeholder="Vehicle Modal"
                headerTitle="Choose one option"
                style={fieldStyle}
                selectedItem={values.vehicleModal}
                onSelectItem={(item) => setFieldValue("vehicleModal", item)}
              />
              <ErrorMessage error={errors.vehicleModal} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                ایندھن کے ساتھ چاہے
              </AppText>
              <AppPicker
                items={fuelOptions}
                placeholder="Want With Fuel"
                headerTitle="Choose one option"
                style={fieldStyle}
                selectedItem={values.fuel}
                onSelectItem={(item) => setFieldValue("fuel", item)}
              />
              <ErrorMessage error={errors.fuel} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                ڈرائیور کے ساتھ چاہتے ہیں۔
              </AppText>
              <AppPicker
                items={driverOptions}
                placeholder="Want With Driver"
                headerTitle="Choose one option"
                style={fieldStyle}
                selectedItem={values.driverType}
                onSelectItem={(item) => setFieldValue("driverType", item)}
              />
              <ErrorMessage error={errors.driverType} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                سواری کی قسم
              </AppText>
              <AppPicker
                items={rideTypes}
                placeholder="Ride Type"
                headerTitle="Choose one option"
                style={fieldStyle}
                selectedItem={values.rideType}
                onSelectItem={(item) => setFieldValue("rideType", item)}
              />
              <ErrorMessage error={errors.rideType} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                گاڑی کتنے دِن کے لیئے چاہیے
              </AppText>
              <AppPicker
                items={daysList}
                placeholder="Number of Days"
                headerTitle="Choose Days"
                style={fieldStyle}
                selectedItem={values.days}
                onSelectItem={(item) => setFieldValue("days", item)}
              />
              <ErrorMessage error={errors.days} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                اپنا کرایا درج کرے
              </AppText>
              <TextField
                placeholder="My Budget (PKR 5000)"
                className={`${fieldStyle} text-[18px] ${
                  values.budget ? "font-SemiBold" : "font-Regular"
                }`}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={7}
                value={values.budget}
                onBlur={() => setFieldTouched("budget")}
                onChangeText={handleChange("budget")}
              />
              <ErrorMessage error={errors.budget} visible={touched.budget} />
            </View>

            <View className={fieldControlStyle}>
              <AppText
                className={urduLabelStyle}
                style={{ fontFamily: "Urdu_400Regular" }}
              >
                منزل کے بعد اضافی سفر
              </AppText>
              <TextField
                placeholder="Extra KM (Optional)"
                className={`${fieldStyle} text-[18px] ${
                  values.extraKm ? "font-SemiBold" : "font-Regular"
                }`}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={4}
                value={values.extraKm}
                onBlur={() => setFieldTouched("extraKm")}
                onChangeText={handleChange("extraKm")}
              />
              <ErrorMessage error={errors.extraKm} visible={touched.extraKm} />
            </View>

            <AppButton
              className="bg-black-700 rounded-[48px] mt-4"
              style={styles.buttonShadow}
              onPress={handleSubmit}
            >
              <Text className="font-SemiBold text-white text-[16px]">
                Create Request
              </Text>
            </AppButton>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

export default AddVehicle;
