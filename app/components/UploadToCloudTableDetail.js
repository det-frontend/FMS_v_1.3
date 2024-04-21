import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import defaultStyles from "../config/styles";
import color from "../config/color";
import { useEffect, useState } from "react";
import PurposeOfUseItem from "./RealTimeFormPickers/PurposeofUseItem";
import PurposeOfUsePicker from "./RealTimeFormPickers/PurposeofUsePicker";
import DetailSale from "../api/getDailySale";

function UploadToCloudTableDetail({ item, loading, setLoading, setOkData }) {
  const [purposeOfUse, setPurposeOfuse] = useState({
    label: "Cycle",
    value: 1,
  });
  const [carNo, setCarNo] = useState("");
  const [edit, setEdit] = useState(true);

  const handleUpload = async (id, carNo, purposeOfUse) => {
    const stationID = id;
    const body = {
      carNo: carNo,
      vehicleType: purposeOfUse,
    };
    setLoading(true);
    const response = await DetailSale.upload(id, body);
    if (response?.data?.con) {
      setPurposeOfuse({ label: "Cycle", value: 1 });
      setCarNo("");
      setEdit(true);
      const df = await DetailSale.noneCloue();
      if (df?.data?.result) {
        setOkData(df?.data?.result);
      }
      setLoading(false);
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={[defaultStyles.tableCell, { width: "10%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.vocono}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "10%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.createAt}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "15%", height: 60 }]}>
        {edit ? (
          <Text style={defaultStyles.tableCellText}>{item?.carNo}</Text>
        ) : (
          <TextInput
            value={carNo}
            onChangeText={setCarNo}
            style={{
              borderWidth: 1,
              backgroundColor: color.white,
              textAlign: "center",
            }}
            placeholder="Car No"
          />
        )}
      </View>
      <View style={[defaultStyles.tableCell, { width: "19%", height: 60 }]}>
        {edit ? (
          <Text style={defaultStyles.tableCellText}>{item?.vehicleType}</Text>
        ) : (
          <PurposeOfUsePicker
            selectedItem={purposeOfUse?.label}
            onSelectedItem={setPurposeOfuse}
          />
        )}
      </View>
      <View style={[defaultStyles.tableCell, { width: "5%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.nozzleNo}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "10%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.fuelType}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "7%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.saleLiter}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "7%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.salePrice}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: "7%", height: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item?.totalPrice}</Text>
      </View>
      <View
        style={[
          defaultStyles.tableCell,
          {
            width: "10%",
            backgroundColor: color.activeColor,
            padding: 0,
            flexDirection: "row",
            height: 60,
          },
        ]}
      >
        {edit ? (
          <TouchableOpacity
            onPress={() => setEdit((prev) => !prev)}
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require(`../../assets/edit-svgrepo-com.png`)}
            />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                handleUpload(item?._id, carNo, purposeOfUse?.label)
              }
              style={{
                borderWidth: 1,
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require(`../../assets/cloud.png`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEdit((prev) => !prev)}
              style={{
                borderWidth: 1,
                width: "50%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: color.danger,
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require(`../../assets/cancel2.png`)}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default UploadToCloudTableDetail;
