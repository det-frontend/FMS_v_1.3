//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import RealTime from "../Realtime/RealTime";
import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import Button from "../Button";
import color from "../../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CashTypePicker from "../RealTimeFormPickers/CashTypePicker";
import AppPicker from "../AppPicker";
import PurposeOfUsePicker from "../RealTimeFormPickers/PurposeofUsePicker";
import CustomerPicker from "../CustomerPicker";
import UpdateInfosApi from "../../api/updateInfos";

const categories = [
  { label: "Cycle", value: 1 },
  { label: "Cycle ( 3 Wheels )", value: 2 },
  { label: "Car", value: 3 },
  { label: "Bus ( City )", value: 4 },
  { label: "Bus ( High Way )", value: 5 },
  { label: "Light Truck ( City )", value: 6 },
  { label: "Light Truck ( High way )", value: 7 },
  { label: "Trailer ( City )", value: 8 },
  { label: "Trailer ( High way )", value: 9 },
  { label: "Htawlargyi", value: 10 },
  { label: "Tractor", value: 11 },
  { label: "Small Tractor", value: 12 },
  { label: "Heavy Machinery", value: 13 },
  { label: "Phone Tower", value: 14 },
  { label: "Industrial Zone", value: 15 },
  { label: "Generator Industry", value: 16 },
  { label: "Agriculture Machine", value: 17 },
  { label: "Generator ( Home Use )", value: 18 },
  { label: "Hospital", value: 19 },
  { label: "School", value: 20 },
  { label: "Super Market", value: 21 },
  { label: "Hotel", value: 22 },
  { label: "Housing", value: 23 },
  { label: "Boat", value: 24 },
];

// create a component
const RealTimeCounting = ({
  handleErrorCon,
  printFormInfo,
  setSaleLiter,
  setSalePrice,
  nozzle1FuelDetail,
  setRealTimeEdit,
  handleRealTimeUpdate,
  realTimeEditChooseOne,
  setPrintFormInfo,
  obj,
  fetchObj,
}) => {
  const [cashType, setCashType] = useState(printFormInfo.cashType);
  const [carNo, setCarNo] = useState(printFormInfo.carNo);
  const [customer, setCustomer] = useState({
    cou_name: printFormInfo.customerName,
    cou_id: printFormInfo.customerId,
    couObjId: "",
  });
  const [category, setCategory] = useState(printFormInfo.purposeOfUse);

  useEffect(() => {
    setPrintFormInfo({
      nozzle_no: obj.nozzle_no,
      objId: printFormInfo.objId,
      vocono: fetchObj.vocono,
      cashType: cashType,
      carNo: carNo,
      purposeOfUse: category,
      customerName: customer.cou_name,
      customerObjId: customer._id,
      customerId: customer.cou_id,
    });
  }, [cashType, carNo, customer, category]);

  return (
    <View style={{ marginTop: 15 }}>
      <RealTime
        printFormInfo={printFormInfo}
        setSaleLiter={setSaleLiter}
        setSalePrice={setSalePrice}
        obj={nozzle1FuelDetail}
      />
      <View
        style={{
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Vocono
          </AppText>
          <AppTextInput
            editable={false}
            value={printFormInfo.vocono}
            placeholder="Vocono Number"
            icon={"paperclip"}
          />
        </View>
        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Car No
          </AppText>
          <AppTextInput
            onChangeText={(newText) => setCarNo(newText)}
            width={100}
            editable={true}
            value={carNo}
            placeholder="Car No"
            icon={"car"}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Cash Type
          </AppText>
          <CashTypePicker
            icon={"cash"}
            placeholder={"Cash Type"}
            selectedItem={cashType}
            onSelectedItem={(item) => setCashType(item.method)}
          />
        </View>

        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Purpose of Use
          </AppText>
          <PurposeOfUsePicker
            selectedItem={category}
            onSelectedItem={(item) => setCategory(item.label)}
            icon="apps"
            placeholder={"Purpose of use"}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Customer Name
          </AppText>
          <CustomerPicker
            selectedItem={customer}
            // setCustomer(customer)
            onSelectedItem={(customer) => setCustomer(customer)}
            items={customer}
            customer
            icon={"human-male"}
            placeholder={"Customer Name"}
          />
        </View>
        <View
          style={{
            width: "45%",
          }}
        >
          <AppText color="white" fontWeight={"200"} fontSize={12}>
            Customer Id
          </AppText>
          <AppTextInput
            width={100}
            editable={false}
            value={customer.cou_id === null ? "00000" : customer.cou_id}
            placeholder="Customer Id"
            icon={"id-card"}
          />
        </View>
      </View>
      {realTimeEditChooseOne && (
        <View
          style={{
            marginTop: 5,
            marginBottom: 5,
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          {/* {
            final ? <Button title={"Print"} width={50} color={color.activeColor} onPress={handlePrint} /> :  <Button title={"Please Wait"} width={50} color={'#f1c40f'}/> 
          } */}
          <Button
            title={"Update"}
            width={50}
            color={color.activeColor}
            onPress={handleRealTimeUpdate}
          ></Button>
        </View>
        <TouchableWithoutFeedback onPress={handleErrorCon}>
          <MaterialCommunityIcons
            name="shield-alert"
            size={40}
            color={"#f39c12"}
          />
        </TouchableWithoutFeedback>
      </View>
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
export default RealTimeCounting;
