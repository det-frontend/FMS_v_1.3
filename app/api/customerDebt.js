import client from './client';


const getDebtCustomers = () => client.get('/debt/1');

const paid = (obj) => client.post('/debt', obj);

const searchByObj = (obj) => client.get(`/debt/1?couObjId=${obj}`);

const searchByObjPagi = (pagi, obj) => client.get(`/debt/${pagi}}?couObjId=${obj}`);

const debtCustomersByPagi = (pagi,obj) => client.get(`debt/${pagi}?couObjId=${obj}`);



export default {
    getDebtCustomers,
    paid,
    searchByObj,
    debtCustomersByPagi,
    searchByObjPagi
}