import client from './client';


const updateInfos = (objId, cashType, carNo, vehicleType,couObjId) => client.patch(`/detail-sale?_id=${objId}`, {
    vehicleType,
    cashType,
    carNo,
    couObjId
});



   



export default {
    updateInfos
}