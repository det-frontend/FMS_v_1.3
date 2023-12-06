import client from './client';


const totalSale = (sDate, eDate) => client.get(`detail-sale/pagi/by-date/1?sDate=${sDate}&eDate=${eDate}`);

const totalDebt = () => client.get(`/customer`);

const debtTable = (sDate, eDate) => client.get(`/debt/pagi/by-date/1?sDate=${sDate}&eDate=${eDate}`);

const debtTablePagi = (sDate,eDate,pagi) => client.get(`/debt/pagi/by-date/${pagi}?eDate=${eDate}&sDate=${sDate}`);



export default {
    totalSale,
    totalDebt,
    debtTable,
    debtTablePagi
}