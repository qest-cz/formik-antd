import * as React from 'react'
import { Cascader as $Cascader } from 'antd'
import { FieldProps } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { CascaderProps as $CascaderProps } from 'antd/lib/cascader'
//@ts-ignore
export type CascaderProps = FormikFieldProps & $CascaderProps<any>

export const Cascader = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: CascaderProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Cascader
        value={value}
        onChange={(value: any) => {
          setFieldValue(name, value)
          setFieldTouched(name, true, false)
          onChange && onChange(value, null as any)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Cascader
