import client from './client';


const update = (objId, nozzleNo, salePrice,managerUserName,managerPassword) => client.patch(`/detail-sale/error?_id=${objId}&nozzleNo=${nozzleNo}`, {
    salePrice,
    email:managerUserName,
    password:managerPassword
});



export default {
    update
}