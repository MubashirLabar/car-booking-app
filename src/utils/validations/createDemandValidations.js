import * as Yup from "yup";

export const createDemandValidation = Yup.object().shape({
  destination: Yup.object().shape({
    label: Yup.string().required("Your destination is required"),
  }),
  fromCity: Yup.object().shape({
    label: Yup.string().required("From city is required"),
  }),
  toCity: Yup.object().shape({
    label: Yup.string().required("To city is required"),
  }),
  selectedVehicle: Yup.string().required("Choose at least one vehicle"),
  budget: Yup.string().required("Enter your budget"),
  days: Yup.string().required("Days field is required"),
  extraKm: Yup.string().required("extraKm field is required"),
});
