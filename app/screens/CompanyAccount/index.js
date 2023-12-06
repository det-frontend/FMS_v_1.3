//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,KeyboardAvoidingView } from 'react-native';
import InputTextComponent from '../../components/Accounts/InputTextComponent';
import Button from '../../components/Button';
import color from '../../config/color';
import LoadingIndicator from '../../components/Loading';
import AddCompanyApi from '../../api/getCustomer';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// create a component
const CompanyAccount = () => {
    const [company_person_name, setCompany_person_name] = useState('');
    const [company_person_name_error, setCompany_person_name_error] = useState(false);
    const [contact_person_num, setContact_person_num] = useState('');
    const [contact_person_num_error, setContact_person_num_error] = useState(false);
    const [contact_secPerson_num, setContact_secPerson_num] = useState('');
    const [contact_secPerson_num_error, setContact_secPerson_num_error] = useState(false);
    const [company_address, setCompany_address] = useState('');
    const [company_address_error, setCompany_address_error] = useState(false);
    const [company_register_num, setCompany_register_num] = useState('');
    const [company_register_num_error, setCompany_register_num_error] = useState(false);
    const [company_limit, setCompany_limit] = useState('');
    const [company_limit_error, setCompany_limit_error] = useState(false);
    const [managerUsername, setmanagerUserName] = useState('');
    const [managerUsernameError, setmanagerUserNameError] = useState(false);
    const [managerPassword, setManagerPassword] = useState('');
    const [managerPasswordError, setManagerPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
  const [condition, setCondition] = useState(false);
    const [error, setError] = useState(false);
  const navigation = useNavigation();



    const handleCreate = async() => {
       
        if (company_person_name.length == 0) {
            setCompany_person_name_error(true);
        } else {
            setCompany_person_name_error(false);
        }
        if (contact_person_num.length == 0) {
            setContact_person_num_error(true);
        } else {
            setContact_person_num_error(false);
        }
        if (contact_secPerson_num.length == 0) {
            setContact_secPerson_num_error(true);

        } else {
            setContact_secPerson_num_error(false);
        }
        if (company_address.length == 0) {
            setCompany_address_error(true);

        } else {
            setCompany_address_error(false);
        }
        if (company_register_num.length == 0) {
            setCompany_register_num_error(true);

        } else {
            setCompany_register_num_error(false);
        }
        if (company_limit.length == 0) {
            setCompany_limit_error(true);

        } else {
            setCompany_limit_error(false);
        }
          if (managerUsername.length == 0) {
            setmanagerUserNameError(true);
        } else {
            setmanagerUserNameError(false);
        }

        if (managerPassword.length == 0) {
            setManagerPasswordError(true);
        } else {
            setManagerPasswordError(false);
        }

        if (!company_person_name_error && !contact_person_num_error && !contact_secPerson_num_error && !company_address_error && !company_address_error && !company_register_num_error && !company_limit_error && !managerPasswordError && !managerUsernameError) {

            const response = await AddCompanyApi.addCompany(company_person_name, contact_person_num, contact_secPerson_num, company_register_num, company_address, managerUsername, managerPassword);
            


              if (response.data.con) {
                setCompany_person_name('');
                setContact_person_num('');
                setContact_secPerson_num('');
                setCompany_register_num('');
                setCompany_address('');
                setCondition(true);
                navigation.navigate('Customer Info');
                setError(false);
            }
            if (response.data.con == false) {
                setError(true);
            }
        }
    }

    return (
        <>
            {
                loading && <LoadingIndicator/>
            }
             <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '300',
                color:color.white
            }}>Company Account</Text>
            <KeyboardAvoidingView style={{
                flex:1
            }}>
                    <ScrollView
                contentContainerStyle={{
                    height:500
                    
            }}
            >
                   <KeyboardAvoidingView style={{
                width: '55%',
                marginLeft: 'auto',
                marginRight:'auto',
                height:500,
                        }}>
                              {
                                condition && <View style={{
                                marginTop: 5,
                                borderRadius: 5,
                                padding:3,
                            backgroundColor: color.activeColor,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 16,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                               Customer Account Creation Is Success!</Text>
                            </View>
                            }
                            {
                                error && <View style={{
                                marginTop: 5,
                                borderRadius: 5,
                                padding:3,
                            backgroundColor: color.activeColor,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 16,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                               Customer Account Creation Is Fail!</Text>
                            </View>
                            }
                                 <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                  <InputTextComponent
                title={"Manager User Name"}
                placeholder={"Manager User Name"}
                value={managerUsername}
                error={managerUsernameError}
                onChangeText={(value)=>setmanagerUserName(value)}
            />
          <InputTextComponent
                title={"Manager Password"}
                placeholder={"Manager Password"}
                password
                value={managerPassword}
                error={managerPasswordError}
                onChangeText={(value)=>setManagerPassword(value)}
            />
           </View>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                  <InputTextComponent
                title={"Contact Person Name"}
                placeholder={"Customer Person Name"}
                value={company_person_name}
                error={company_person_name_error}
                onChangeText={(value)=>setCompany_person_name(value)}
                                />
                <InputTextComponent
                title={"Contact Person Phone Number"}
                placeholder={"Contact Person Phone Number"}
                value={contact_person_num}
                error={contact_person_num_error}
                onChangeText={(value)=>setContact_person_num(value)}
            />
           </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
            }}
            >
              
            <InputTextComponent
                title={"Company Secondary Phone"}
                placeholder={"Company Secondary Phone"}
                value={contact_secPerson_num}
                error={contact_secPerson_num_error}
                onChangeText={(value)=>setContact_secPerson_num(value)}
                                />
                <InputTextComponent
                title={"Company Address"}
                placeholder={"Company Address"}
                value={company_address}
                error={company_address_error}
                onChangeText={(value)=>setCompany_address(value)}
            />
           </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
            }}
            >
              
            <InputTextComponent
                title={"Company Register Number"}
                placeholder={"Company Register Number"}
                value={company_register_num}
                error={company_register_num_error}
                onChangeText={(value)=>setCompany_register_num(value)}
                                />
                <InputTextComponent
                title={"Company Limit"}
                placeholder={"Company Limit"}
                value={company_limit}
                keyboardType={'numeric'}
                error={company_limit_error}
                onChangeText={(value)=>setCompany_limit(value)}
            />
           </View>
            <View
               style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent:'space-between',
                marginBottom:5,
            }}
            >
                                <View style={{
             marginTop:-10,
              width:'100%'
          }}>
        <Button onPress={handleCreate}  title={"Create"} color={color.activeColor} width={100} />
          </View>
          </View>
          </KeyboardAvoidingView>
         </ScrollView>
        </KeyboardAvoidingView>
        </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CompanyAccount;
