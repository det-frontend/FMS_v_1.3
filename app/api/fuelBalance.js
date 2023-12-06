import client from './client';


const response = (sDate) => client.get(`fuel-balance/all/?createAt=${sDate}`);


export default {
    response
}