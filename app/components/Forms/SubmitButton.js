import { } from 'react-native';
import Button from '../Button';
import color from '../../config/color';
import {useFormikContext } from 'formik'

function SubmitButton({ title }) {
    const {handleSubmit}=useFormikContext();
  return (
      <Button
      title={title}
      color={color.activeColor} 
      width={25}
      onPress={handleSubmit}
      />
  )
}

export default SubmitButton