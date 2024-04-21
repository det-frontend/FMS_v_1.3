//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import AppText from "../AppText";
import CustomerPicker from "../CustomerPicker";
import PaymentMethod from "../PaymentMethod";
import AppTextInput from "../AppTextInput";
import Button from "../Button";
import AppPicker from "../AppPicker";
import color from "../../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const customers = [
  {
    cou_name: "Individual Customer",
    cou_id: "",
  },
];

const categories = [
  { label: "Cycle", value: 1 },
  { label: "Cycle ( 3 Wheels )", value: 2 },
  { label: "Car", value: 3 },
  { label: "Bus ( City )", value: 4 },
  { label: "Bus ( High Way )", value: 5 },
  { label: "Light Truck ( City )", value: 6 },
  { label: "Light Truck ( High way )", value: 7 },
  { label: "Heavy Truck ( City )", value: 8 },
  { label: "Heavy Truck ( High way )", value: 9 },
  { label: "Trailer ( City )", value: 10 },
  { label: "Trailer ( High way )", value: 11 },
  { label: "Htawlargyi", value: 12 },
  { label: "Tractor", value: 13 },
  { label: "Small Tractor", value: 14 },
  { label: "Heavy Machinery", value: 15 },
  { label: "Commercial Vehicle", value: 16 },
  { label: "Phone Tower", value: 17 },
  { label: "Industrial Zone", value: 18 },
  { label: "Generator Industry", value: 19 },
  { label: "Agriculture Machine", value: 20 },
  { label: "Generator ( Home Use )", value: 21 },
  { label: "Hospital", value: 22 },
  { label: "School", value: 23 },
  { label: "Super Market", value: 24 },
  { label: "Hotel", value: 25 },
  { label: "Housing", value: 26 },
  { label: "Boat", value: 27 },
  { label: "Pump Test", value: 28 },
  { label: "Office Use ( Bowser Car )", value: 29 },
  { label: "Station Use", value: 30 },
];
// create a component
const RealTimeForms = ({
  handlePermit,
  setPremitFormInfo,
  permitState,
  chooseOne,
  permitButtonDisable,
}) => {
  const [customer, setCustomer] = useState(customers[0]);
  const [category, setCategory] = useState(categories[0]);
  const [carNo, setCarNo] = useState("-");
  const [paymentNo, setPyamentNo] = useState("Cash");
  const [carNoForm, setCarNoForm] = useState(false);

  useEffect(() => {
    if (category.label === "Cycle") {
      setCarNoForm(false);
    } else if (category.label !== "Cycle") {
      setCarNoForm(true);
    }
    setPremitFormInfo({
      couObjId: customer._id,
      couName: customer.cou_name,
      cou_id: customer.cou_id,
      vehicleType: category.label,
      carNo: carNo,
      cashType: paymentNo,
    });
  }, [customer, category, carNo, paymentNo]);

  const handleCarNo = (text) => {
    setCarNo(text);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "column", width: "47%" }}>
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Customer Name
          </AppText>
          {/* <AppTextInput icon={'human-male'} placeholder="Customer Name"  /> */}
          <CustomerPicker
            selectedItem={customer}
            onSelectedItem={(customer) => setCustomer(customer)}
            items={customers}
            customer
            icon={"human-male"}
            placeholder={"Customer Name"}
          />
        </View>
        <View style={{ flexDirection: "column", width: "47%" }}>
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Customer Id
          </AppText>
          <CustomerPicker
            selectedItem={customer}
            onSelectedItem={(customer) => setCustomer(customer)}
            items={customers}
            customerId
            icon={"id-card"}
            placeholder={"Customer Id"}
          />
        </View>
      </View>
      <AppTextInput onSearch={handleCarNo} icon={"car"} placeholder="Car No" />
      <AppPicker
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        items={categories}
        categories
        icon="apps"
        placeholder={"Categories"}
      />

      {chooseOne && (
        <View
          style={{
            marginTop: 5,
            borderRadius: 5,
            padding: 3,
            backgroundColor: color.activeColor,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons
            name="information"
            size={30}
            color={color.yello}
          />
          <Text
            style={{
              fontSize: 16,
              color: color.screenbg,
              fontWeight: "300",
            }}
          >
            Individual customer can't take debt!
          </Text>
        </View>
      )}
      <PaymentMethod getValue={setPyamentNo} />

      <Button
        disabled={permitButtonDisable}
        title={"Permit"}
        width={20}
        color={color.activeColor}
        onPress={handlePermit}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default RealTimeForms;
