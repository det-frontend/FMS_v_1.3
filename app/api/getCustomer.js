import client from './client';

const customer = () => client.get('/customer');

const addCustomer = (cou_name, cou_phone1, cou_phone2, cou_address,email,password) => client.post('/customer', {
    cou_name:cou_name,
    cou_phone: cou_phone1,
    cou_address:cou_address,
    contact_person_name: cou_name,
    contact_person_phone: cou_phone1,
    cou_sec_phone:cou_phone2,
    contact_person_sec_phone: cou_phone2,
    email:email,
    password:password
});

const addCompany = (com_person_name, com_person_number,  com_person_sec_phone,com_register_name, com_address,email,password) => client.post('/customer', {
    cou_name: com_person_name,
    cou_phone: com_person_number,
    cou_sec_phone: com_person_sec_phone,
    cou_address: com_address,
    contact_person_name: com_person_name,
    contact_person_phone: com_person_number,
    contact_person_sec_phone: com_person_sec_phone,
    com_register_no: com_register_name,
    email:email,
    password:password
});

export default {
    customer,
    addCustomer,
    addCompany
}