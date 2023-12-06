import { Formik } from "formik"

function AppForm({initialValues,onSubmit,validationSchema,children,formRef}) {
  return (
    <Formik
      innerRef={formRef}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        
      >
     {() => (<>{children}</>)}
      </Formik>
  )
}

export default AppForm