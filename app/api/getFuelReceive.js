import client from './client';

const fuelReceive = (pagi) => client.get(`fuelIn/pagi/${pagi}`);



export default {
    fuelReceive
}