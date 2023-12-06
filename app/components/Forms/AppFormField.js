import { 
    Text
} from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMsg from './ErrorMsg';
import { useFormikContext } from 'formik';

function AppFormField({name,width=100,...otherProps}) {
 
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext();

  return ( 
      <>
      <AppTextInput
        width={width}
        onBlur={()=> setFieldTouched(name)} 
        onChangeText={handleChange(name)}
        {...otherProps}
      />
         {touched[name] && <ErrorMsg visible={errors[name]} error={errors[name]}/>}
      </>
  )
}

export default AppFormField