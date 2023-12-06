import client from './client';

const permit = (mode) => client.patch('/auto-permit',mode)

const getPermit = () => client.get('/auto-permit');

export default {
    permit,
    getPermit
}

