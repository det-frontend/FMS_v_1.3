import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import color from '../../config/color';
import DispenserContainer from '../../components/DispenserContainer';
import TableFrame from '../../components/TableFrame';
import cardApi from '../../api/getcards';
import useAuth from '../../auth/useAuth';
import Button from '../../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoadingIndicator from '../../components/Loading';

const DispenserScreen = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [dispenserCards, setDispenserCards] = useState([]);
  const [error, setError] = useState(false);
  const [fetchNew, setFetchNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [priceChange, setPriceChange] = useState(false);
  const auth = useAuth();
  

  useEffect(() => {

    const fetchIt = async () => {
      const result = await cardApi.cards();
      if (!result.data?.con) {
        setError(true);
        auth.logOut();
    const ok = async () => {
    const kerj = await authStorage.removeToken();
    }
    ok();
      };
      if (result.data?.result) {
        setError(false);
         setDispenserCards(result.data.result);
     }
    };

    fetchIt();

  }, []);


  useEffect(() => {
    const fetchIt = async () => {
      setLoading(true);
      const result = await cardApi.cards();
      if (!result.data?.con) {
        setError(true);
      };
      if (result.data?.result) {
        setError(false);
        setDispenserCards(result.data.result);
      }
      setLoading(false);
      setPriceChange(false);
    };

    fetchIt();

  }, [priceChange]);
  



  return (
    
  <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height:'100%',
      alignItems:'center',
      backgroundColor: color.bottomNavigation,
      elevation: 30,
    }}>
      {
        loading && <LoadingIndicator/>
      }
     
      <DispenserContainer
        // selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        setVisible={setVisible}
        dispenserCards={dispenserCards}
        setFetchNew={setFetchNew}
        setPriceChange={setPriceChange}
      />       
      <TableFrame
        fetchNew={fetchNew}
      />
     
   </View>

    )
};

export default DispenserScreen;