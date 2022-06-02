import { Field as FormikField, FastField } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import * as React from 'react'

const _FastField = FastField as any

export const Field: React.FC<FormikFieldProps> = ({
  fast,
  children,
  ...restProps
}) => {
  if (fast) {
    return <_FastField {...restProps}>{children}</_FastField>
  }

  return <FormikField {...restProps}>{children}</FormikField>
}

export default Field
