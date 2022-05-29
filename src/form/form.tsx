import * as React from 'react'

import { Field, FieldProps } from 'formik'
import { Form as $Form } from 'antd'
import { FormItem } from '../form-item'
import { FormProps } from 'antd/lib/form/Form'

const _Form = $Form as any

export function Form(props: FormProps) {
  return (
    <Field>
      {({ form: { handleReset, handleSubmit } }: FieldProps) => (
        <_Form
          onReset={handleReset}
          onFinish={handleSubmit}
          {...props}
        />
      )}
    </Field>
  )
}

Form.Item = FormItem

export default Form
