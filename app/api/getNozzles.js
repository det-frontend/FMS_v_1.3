import client from './client';

const endpoints = "/listings";

const getListings = () => client.get(endpoints);

export default {
    getListings,
}