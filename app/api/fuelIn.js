import client from './client';

const fuelIn = (obj) => client.post('/fuelIn',obj);

export default {
    fuelIn
}
