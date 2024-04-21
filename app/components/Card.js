import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
} from "react-native";
import color from "../config/color";
import { useEffect, useState } from "react";
import ModelPopUp from "./ModelPopUp";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PermitApi from "../api/permit";
import RealTimeForms from "./CardForm/Forms";
import RealTimeCounting from "./CardForm/RealTimeForms";
import ErrorForms from "./CardForm/ErrorForms";
import ToCloudApi from "../api/updateInfos";
import LoadingIndicator from "./Loading";
import ErrorApi from "../api/errorUpdate";
import UpdateInfosApi from "../api/updateInfos";
import ReadyState from "./ReadyState";
import presetApi from "../api/preset";

function Card({
  title = "1",
  obj,
  active,
  noMorePermit,
  setPayloadHistory,
  nozzle1FuelDetail,
  finalData,
  allDone,
  setLiveData,
  setFinalData,
  setAllDone,
  setFetchNew,
  checkLiveRef,
  approve,
  setApprove,
  liveDespenserHistory,
}) {
  const [isClosed, setIsClosed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isAlready, setIsAlready] = useState(false);
  const [myInfo, setMyInfo] = useState({
    objectId: null,
    saleLiter: 0,
    salePrice: 0,
    couObjId: null,
    vehicleType: null,
    cashType: null,
    vocono: null,
  });
  const [isPermit, setIsPermit] = useState(false);
  const [isErrorCon, setIsErrorCon] = useState(false);
  const [premitFormInfo, setPremitFormInfo] = useState();
  const [printFormInfo, setPrintFormInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [noPermit, setNopermit] = useState(false);
  const [saleLiter, setSaleLiter] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [final, setFinal] = useState(false);
  const [httpCode, setHttpCode] = useState(false);
  const [permitState, setPermitState] = useState(false);
  const [nozzleActive, setNozzleActive] = useState(false);
  const [realTimeEdit, setRealTimeEdit] = useState({
    objId: "",
    cashType: "",
    carNo: "",
    purpose_of_use: "",
    couObjId: "",
    couName: "",
    couId: "",
  });
  const [chooseOne, setChooseOne] = useState(false);
  const [realTimeEditChooseOne, setRealTimeEditChooseOn] = useState(false);
  const [fetchObj, setFetchObj] = useState();
  const [managerUserName, setManagerUserName] = useState(undefined);
  const [managerPassword, setManagerPassword] = useState(undefined);
  const [errorPermission, setErrorPermission] = useState("");
  const [errorUpdate, setErrorUpdate] = useState("");
  const [readyState, setReadyState] = useState("");
  const [readyStateObj, setReadyStateObj] = useState("");
  const [vocNumber, setVocNumber] = useState("");
  const [presetButtonDisable, setPresetButtonDisable] = useState(false);
  const [permitButtonDisable, setPermitButtonDisable] = useState(false);

  const handleCardClick = () => {
    setVisible(true);
  };

  const handleReadyState = async () => {
    if (!presetButtonDisable) {
      setPresetButtonDisable(true);
    }

    if (premitFormInfo.type === "liter") {
      setLoading(true);
      const permitObject = await presetApi.liter(
        obj.dep_no,
        obj.nozzle_no,
        obj.fuel_type,
        premitFormInfo.value,
        premitFormInfo.carNo,
        premitFormInfo.vehicleType,
        premitFormInfo.cashType,
        obj.daily_price,
        premitFormInfo.couObjId
      );
      setLoading(false);

      if (permitObject.data?.con) {
        setPayloadHistory((prevTopics) => [
          ...prevTopics,
          parseInt(obj.nozzle_no),
        ]);
      }

      if (!permitObject.data?.con) {
        setPermitState(true);
        let smg = permitObject.data.msg;
        smg = smg.split(":");
        smg = smg[2];

        setVocNumber(smg);
        return;
      }

      if (permitObject.data?.result) {
        setHttpCode(true);
        setFetchObj(permitObject.data.result);
        setPrintFormInfo({
          nozzle_no: obj.nozzle_no,
          objId: permitObject.data.result._id,
          vocono: permitObject.data.result.vocono,
          cashType: permitObject.data.result.cashType,
          carNo: permitObject.data.result.carNo,
          purposeOfUse: permitObject.data.result.vehicleType,
          customerName: premitFormInfo.couName,
          customerId: premitFormInfo.cou_id,
          customerObjId: premitFormInfo.couObjId,
        });
        setRealTimeEdit({
          object_Id: permitObject.data.result._id,
          cash_type: permitObject.data.result.cashType,
          car_no: permitObject.data.result.carNo,
          purpose_of_use: permitObject.data.result.vehicleType,
          customer_name: premitFormInfo.couName,
          customer_id: premitFormInfo.cou_id,
        });
        setIsPermit(true);
      }

      if (!permitObject.data?.con) {
        // auth.logOut();
      }
      setReadyState(false);
    }

    if (premitFormInfo.type === "kyat") {
      setLoading(true);
      const permitObject = await presetApi.price(
        obj.dep_no,
        obj.nozzle_no,
        obj.fuel_type,
        premitFormInfo.value,
        premitFormInfo.carNo,
        premitFormInfo.vehicleType,
        premitFormInfo.cashType,
        obj.daily_price,
        premitFormInfo.couObjId
      );

      if (permitObject.data?.con) {
        setPayloadHistory((prevTopics) => [
          ...prevTopics,
          parseInt(obj.nozzle_no),
        ]);
        if (!permitObject.data?.con) {
          setPermitState(true);
          let smg = permitObject.data.msg;
          smg = smg.split(":");
          smg = smg[2];

          setVocNumber(smg);
          return;
        }

        setLoading(false);

        if (permitObject.data?.result) {
          setHttpCode(true);
          setFetchObj(permitObject.data.result);
          setPrintFormInfo({
            nozzle_no: obj.nozzle_no,
            objId: permitObject.data.result._id,
            vocono: permitObject.data.result.vocono,
            cashType: permitObject.data.result.cashType,
            carNo: permitObject.data.result.carNo,
            purposeOfUse: permitObject.data.result.vehicleType,
            customerName: premitFormInfo.couName,
            customerId: premitFormInfo.cou_id,
            customerObjId: premitFormInfo.couObjId,
          });
          setRealTimeEdit({
            object_Id: permitObject.data.result._id,
            cash_type: permitObject.data.result.cashType,
            car_no: permitObject.data.result.carNo,
            purpose_of_use: permitObject.data.result.vehicleType,
            customer_name: premitFormInfo.couName,
            customer_id: premitFormInfo.cou_id,
          });
          setIsPermit(true);
        }

        if (!permitObject.data?.con) {
          // auth.logOut();
        }

        setReadyState(false);
      }
    }

    setTimeout(() => {
      setPresetButtonDisable(false);
    }, 3000);
  };



  const handlePermit = async () => {
    if (
      premitFormInfo.couObjId == undefined &&
      premitFormInfo.cashType == "Debt"
    ) {
      setChooseOne(true);
      return;
    } else {
      if (!permitButtonDisable) {
        setPermitButtonDisable(true);
      }
      setLoading(true);
      setChooseOne(false);

      const permitObject = await PermitApi.permit(
        obj.dep_no,
        obj.nozzle_no,
        premitFormInfo.vehicleType,
        premitFormInfo.carNo,
        premitFormInfo.cashType,
        obj.fuel_type,
        premitFormInfo.couObjId,
        obj.daily_price
      );

      setLoading(false);

      if (permitObject) {
        setPermitButtonDisable(false);
      }

      if (!permitObject.data?.result) {
        setPermitState(true);
        // let smg = permitObject.data.msg;
        // console.log("smg",smg)
        // smg = smg.split(":");
        // smg = smg[2];
        // setVocNumber(smg);
        setPayloadHistory((prevTopics) => {
          // Filter out elements that match the value of parseInt(obj.nozzle_no)
          const updatedTopicsArray = prevTopics.filter(
            (topic) => topic !== parseInt(obj.nozzle_no)
          );

          return updatedTopicsArray;
        });
        setVisible(false);
        return;
      }

      if (permitObject.data?.result) {
        setHttpCode(true);
        setFetchObj(permitObject.data.result);
        setPrintFormInfo({
          nozzle_no: obj.nozzle_no,
          objId: permitObject.data.result._id,
          vocono: permitObject.data.result.vocono,
          cashType: permitObject.data.result.cashType,
          carNo: permitObject.data.result.carNo,
          purposeOfUse: permitObject.data.result.vehicleType,
          customerName: premitFormInfo.couName,
          customerId: premitFormInfo.cou_id,
          customerObjId: premitFormInfo.couObjId,
        });

        setRealTimeEdit({
          object_Id: permitObject.data.result._id,
          cash_type: permitObject.data.result.cashType,
          car_no: permitObject.data.result.carNo,
          purpose_of_use: permitObject.data.result.vehicleType,
          customer_name: premitFormInfo.couName,
          customer_id: premitFormInfo.cou_id,
        });
        setIsPermit(true);
      }

      if (!permitObject.data?.con) {
        // auth.logOut();
      }

      //  setTimeout(() => {
      //     setPermitButtonDisable(false);
      //   }, 2000); // 2000 milliseconds (2 seconds)
    }
  };

  const handlePrint = () => {
    setLoading(true);

    const update = async () => {
      const response = await ToCloudApi.updateInfos(
        printFormInfo.objId,
        printFormInfo.cashType,
        printFormInfo.carNo,
        printFormInfo.purposeOfUse,
        premitFormInfo.customerObjId
      );
    };
    setLoading(false);
    setVisible(false);
    setIsClosed(false);
    setIsPermit(false);

    update();
  };

  const handleErrorCon = () => {
    setIsErrorCon(true);
  };

  const handleBack = () => {
    setIsErrorCon(false);
  };

  const handleRealTimeUpdate = () => {
    if (realTimeEdit.customer_id == "" && printFormInfo.cashType == "Debt") {
      setRealTimeEditChooseOn(true);
      return;
    } else {
      setRealTimeEditChooseOn(false);

      const fetchIt = async () => {
        setLoading(true);
        const response = await UpdateInfosApi.updateInfos(
          printFormInfo.objId,
          printFormInfo.cashType,
          printFormInfo.carNo,
          printFormInfo.purposeOfUse,
          printFormInfo.customerObjId
        );

        setLoading(false);
      };

      fetchIt();
    }
  };

  // useEffect(() => {
  //   console.log(liveDespenserHistory);
  // },[liveDespenserHistory])

  useEffect(() => {
    if (parseInt(noMorePermit) === parseInt(obj.nozzle_no)) {
      setNopermit(true);
      setVisible(false);
      setNozzleActive(false);

      setPayloadHistory((prev) =>
        prev.filter((number) => number !== parseInt(obj.nozzle_no))
      );
      setPayloadHistory((prev) => [...prev, obj.nozzle_no]);
    }

    if (parseInt(noMorePermit) !== parseInt(obj.nozzle_no)) {
      setNopermit(false);
    }
  }, [noMorePermit]);

  useEffect(() => {
    if (parseInt(finalData) === parseInt(obj.nozzle_no)) {
      setFinal(true);
      setPermitState(true);
      setNozzleActive(false);
    }
  }, [finalData]);

  useEffect(() => {
    if (parseInt(allDone) === parseInt(obj.nozzle_no)) {
      setLiveData("");
      setNozzleActive(false);
      setVisible(false);
      setIsClosed(false);
      setIsPermit(false);
      setFinal(false);
      setNopermit(false);
      setFinalData(false);
      setAllDone(false);
      setPermitState(false);
      setFetchNew((prev) => !prev);

      // Resetting values
      obj.current = {};

      checkLiveRef.current.nozzleNo == 0;

      setPayloadHistory((prev) =>
        prev.filter((number) => number !== parseInt(obj.nozzle_no))
      );

      setApprove((prev) =>
        prev.filter((number) => number !== parseInt(obj.nozzle_no))
      );
    }
  }, [allDone]);

  // useEffect(() => {
  //   if (active) {
  //     if (parseInt(liveData) === parseInt(obj.nozzle_no)) {
  //       setNozzleActive(true);
  //       setNopermit(false);
  //     }
  //   }
  // }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { nozzleNo } = checkLiveRef.current;

      if (parseInt(nozzleNo) === parseInt(obj.nozzle_no)) {
        setNozzleActive(true);
        setNopermit(false);

        if (active) {
          if (parseInt(nozzleNo) === parseInt(obj.nozzle_no)) {
            setNozzleActive(true);
            setNopermit(false);
          }
        }
        checkLiveRef.current.nozzleNo = 0;
      }
    }, 200); // Update the values every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   if (!nozzleActive) {
  //     if (parseInt(liveData) === parseInt(obj.nozzle_no)) {
  //       console.log('j');
  //     setNozzleActive(true);
  //     setNopermit(false)
  //  }
  //    }

  // }, [liveData]);

  // useEffect(() => {
  //   if (parseInt(liveData) === parseInt(obj.nozzle_no)) {
  //     setNozzleActive(true);
  //     setNopermit(false)
  //   }
  //   if (parseInt(liveData2) === parseInt(obj.nozzle_no)) {
  //     setNozzleActive(true);
  //     setNopermit(false)
  //   }
  // }, [liveData, liveData2]);

  const handleUpdate = () => {
    if (managerPassword == undefined && managerUserName == undefined) {
      setErrorPermission(true);
    } else {
      setErrorPermission(false);
      const errorUpdate = async () => {
        setLoading(true);

        const response = await ErrorApi.update(
          printFormInfo.objId,
          printFormInfo.nozzle_no,
          obj.daily_price,
          managerUserName,
          managerPassword
        );

        if (response.data.con === true) {
          setPrintFormInfo("");
          setErrorUpdate("");
          setPayloadHistory((prev) =>
            prev.filter(
              (number) => parseInt(number) !== parseInt(obj.nozzle_no)
            )
          );

          setIsPermit(false);
          setIsErrorCon(false);

          setLiveData("");

          setFinal(false);
          setNopermit(false);
          setNozzleActive(false);
          setFinalData(false);
          setAllDone(false);
          setPermitState(false);

          setVisible(false);
          setIsClosed(false);
          setPayloadHistory((prev) =>
            prev.filter(
              (number) => parseInt(number) !== parseInt(obj.nozzle_no)
            )
          );
        } else {
          setErrorUpdate(response.data.msg);
        }

        setLoading(false);
      };

      errorUpdate();
    }
  };

  const handleReadyClick = () => {
    setReadyState(true);
    setVisible(true);
  };

  const handleReadyPermit = () => {};

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const { nozzleNo } = nozzle1FuelDetail.current;

  //     if (parseInt(nozzleNo) === parseInt(obj.nozzle_no)) {
  //     setNozzleActive(true);
  //     setNopermit(false)

  //     }

  //   }, 1000); // Update the values every second

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // active?noPermit?color.bottomActiveNavigation:final?"#f1c40f":nozzleActive?color.activeColor:color.danger:color.bottomActiveNavigation
  console.log(obj, ".......................");
  return (
    <>
      <TouchableOpacity
        onPress={active ? handleCardClick : handleReadyClick}
        style={{
          width: "11%",
          height: 60,
          borderWidth: 0.5,
          backgroundColor: active
            ? noPermit
              ? color.bottomActiveNavigation //default
              : final //d1s1
              ? "#7A4DF1" //purple
              : nozzleActive //livedata
              ? color.activeColor //green
              : approve //appro
              ? color.yello // yellow Add this line for the approve condition
              : color.danger //permit
            : color.bottomActiveNavigation, //default
          alignItems: "center",
          justifyContent: "center",
          elevation: 10,
          borderRadius: 5,
          shadowColor: "black",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: active ? "black" : color.light,
              fontWeight: active ? "bold" : "100",
              letterSpacing: 1,
              fontSize: 11,
              marginTop: 4,
            }}
          >
            Nozzle {approve}
          </Text>
          {liveDespenserHistory ? (
            <Image
              style={{
                width: 100,
                height: 40,
              }}
              source={require("../../assets/pump.png")}
            />
          ) : (
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require("../../assets/warn.png")}
            />
          )}
        </View>
      </TouchableOpacity>
      <ModelPopUp visible={visible}>
        {loading && (
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "140%",
              zIndex: 9,
            }}
          >
            <LoadingIndicator />
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            setVisible(false);
            setIsClosed(true);
            setReadyState(false);
          }}
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <MaterialCommunityIcons
            color={"white"}
            name="close-circle"
            size={30}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            marginBottom: 10,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            color: color.light,
            fontWeight: 100,
            textAlign: "center",
          }}
        >
          Nozzle {obj.nozzle_no} Permit Information
        </Text>
        {/* {
            loading && <LoadingIndicator/>
          } */}
        {readyState ? (
          <ReadyState
            obj={obj}
            setPremitFormInfo={setPremitFormInfo}
            setReadyStateObj={setReadyStateObj}
            selectedItem={readyState}
            onSelectedItem={(item) => setReadyState(item.label)}
            handleReadyState={handleReadyState}
            chooseOne={chooseOne}
            handleReadyPermit={handleReadyPermit}
            presetButtonDisable={presetButtonDisable}
          />
        ) : isErrorCon ? (
          <ErrorForms
            errorUpdate={errorUpdate}
            realTimeEdit={realTimeEdit}
            handleBack={handleBack}
            printFormInfo={printFormInfo}
            saleLiter={saleLiter}
            setSaleLiter={setSaleLiter}
            salePrice={salePrice}
            setSalePrice={setSalePrice}
            handleUpdate={handleUpdate}
            setManagerPassword={setManagerPassword}
            setManagerUserName={setManagerUserName}
            managerPassword={managerPassword}
            managerUserName={managerUserName}
            errorPermission={errorPermission}
          />
        ) : isPermit ? (
          <RealTimeCounting
            obj={obj}
            fetchObj={fetchObj}
            setSaleLiter={setSaleLiter}
            setSalePrice={setSalePrice}
            printFormInfo={printFormInfo}
            setPrintFormInfo={setPrintFormInfo}
            handlePrint={handlePrint}
            handleErrorCon={handleErrorCon}
            nozzle1FuelDetail={nozzle1FuelDetail}
            final={final}
            setRealTimeEdit={setRealTimeEdit}
            handleRealTimeUpdate={handleRealTimeUpdate}
            realTimeEditChooseOne={realTimeEditChooseOne}
          />
        ) : (
          <RealTimeForms
            setPermitState={setPermitState}
            vocNumber={vocNumber}
            permitState={permitState}
            handlePermit={handlePermit}
            setPremitFormInfo={setPremitFormInfo}
            chooseOne={chooseOne}
            permitButtonDisable={permitButtonDisable}
          />
        )}
        
      </ModelPopUp>
    </>
  );
}

export default Card;
