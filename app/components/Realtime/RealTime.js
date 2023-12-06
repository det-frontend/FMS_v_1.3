import { View, Text } from 'react-native';
import ShowLiters from './ShowLiters';
import ShowPrice from './ShowPrice';
import defaultStyles from '../../config/realtimestyles';
import { useEffect, useState } from 'react';

function RealTime({ printFormInfo, obj, setSaleLiter,setSalePrice }) {
  const [price, setPrice] = useState(0);
  const [liter, setLiter] = useState(0);

  useEffect(() => {
    setSaleLiter(liter);
    setSalePrice(price);
  },[price,liter])
  


  useEffect(() => {
    const interval = setInterval(() => {
      const { liter, price, nozzleNo } = obj.current;

    if (parseInt(nozzleNo) === parseInt(printFormInfo.nozzle_no)) {
      setPrice(price);
      setLiter(liter);
      }



    },100); // Update the values every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
      <View style={defaultStyles.container}>
      <ShowLiters liter={liter} />
      <ShowPrice price={price} />
    </View>
  )
}

export default RealTime