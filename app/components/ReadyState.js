import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import color from "../config/color";
import ReadyStatePicker from "./ReadyStatePicker";
import Button from "./Button";
import AppText from "./AppText";
import CustomerPicker from "./CustomerPicker";
import AppTextInput from "./AppTextInput";
import AppPicker from "./AppPicker";
import PaymentMethod from "./PaymentMethod";

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

function ReadyState({
  handleReadyPermit,
  icon,
  placeholder,
  handleReadyState,
  selectedItem,
  onSelectedItem,
  chooseOne,
  setReadyStateObj,
  obj,
  setPremitFormInfo,
  presetButtonDisable,
  ...otherProps
}) {
  const [readyStateItem, setReadyStateItem] = useState("kyat");
  const [customer, setCustomer] = useState(customers[0]);
  const [category, setCategory] = useState({ label: "Cycle", value: 1 });
  const [carNo, setCarNo] = useState(" ");
  const [paymentNo, setPyamentNo] = useState("Cash");
  const [numberValue, setNumberValue] = useState("");
  const [lNeed, setLNeed] = useState(false);

  const handleCarNo = (text) => {
    setCarNo(text);
  };

  useEffect(() => {
    if (readyStateItem == "liter") {
      setLNeed(true);
      //     setReadyStateObj({
      //         depNo:obj.dep_no,
      //         nozzleNo: obj.nozzle_no,
      //         fuelType: obj.fuel_type,
      //         type: readyStateItem,
      //         carNo: carNo,
      //         vehicleType: category.label,
      //         cashType: paymentNo,
      //         salePrice: obj.daily_price,
      //         value: numberValue,
      //         couObjId: customer._id,
      //         couName: customer.cou_name,
      //         cou_id: customer.cou_id,
      //     });

      //      setPremitFormInfo({
      //     couObjId: customer._id,
      //     couName: customer.cou_name,
      //     cou_id: customer.cou_id,
      //     vehicleType: category.label,
      //     carNo: carNo,
      //     cashType: paymentNo
      // });

      // if (parseFloat(numberValue) % 1 !== 0) {
      // setLNeed(false);

      setPremitFormInfo({
        couObjId: customer._id,
        couName: customer.cou_name,
        cou_id: customer.cou_id,
        vehicleType: category.label,
        carNo: carNo,
        cashType: paymentNo,
        type: readyStateItem,
        value: numberValue,
      });
      // } else {
      //     setLNeed(true);
      // }
    }

    if (readyStateItem == "kyat") {
      setLNeed(false);
      // setReadyStateObj({
      //     depNo:obj.dep_no,
      //     nozzleNo: obj.nozzle_no,
      //     fuelType: obj.fuel_type,
      //     type: readyStateItem,
      //     carNo: carNo,
      //     vehicleType: category.label,
      //     cashType: paymentNo,
      //     salePrice: obj.daily_price,
      //     value: numberValue,
      //     couObjId: customer._id,
      //     couName: customer.cou_name,
      //     cou_id: customer.cou_id,
      // });

      setPremitFormInfo({
        couObjId: customer._id,
        couName: customer.cou_name,
        cou_id: customer.cou_id,
        vehicleType: category.label,
        carNo: carNo,
        cashType: paymentNo,
        type: readyStateItem,
        value: numberValue,
      });
    }
  }, [readyStateItem, customer, category, carNo, paymentNo, numberValue]);

  return (
    <>
      <View style={{}}>
        {lNeed && (
          <Text
            style={{
              fontSize: 14,
              color: color.bottomNavigation,
              textTransform: "uppercase",
              backgroundColor: color.yello,
              textAlign: "center",
            }}
          >
            Liter must be include decimal!{" "}
          </Text>
        )}
        <Text
          style={{
            fontSize: 16,
            color: "white",
            marginBottom: 5,
          }}
        >
          Choose Kyats or Liter
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            onChangeText={(value) => setNumberValue(value)}
            style={{
              paddingHorizontal: 5,
              backgroundColor: color.light,
              height: 35,
              width: "80%",
            }}
          />
          <ReadyStatePicker
            selectedItem={readyStateItem}
            onSelectedItem={(value) => setReadyStateItem(value.label)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Car No
          </AppText>
          <AppTextInput
            onSearch={handleCarNo}
            icon={"car"}
            placeholder="Car No"
          />
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

          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Purpose of Use
          </AppText>
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
          {/* <PaymentMethod getValue={setPyamentNo}/> */}
        </View>
        <Button
          disabled={presetButtonDisable}
          title={"Preset"}
          onPress={handleReadyState}
          color={color.activeColor}
          width={50}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 5,
    marginVertical: 5,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: color.light,
    flex: 1,
  },
});

export default ReadyState;
