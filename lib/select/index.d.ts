import * as React from 'react';
import { SelectProps as $SelectProps } from 'antd/lib/select';
import { FormikFieldProps } from '../FieldProps';
export declare type SelectProps<T = any> = FormikFieldProps & $SelectProps<T> & {
    children?: React.ReactNode;
};
export declare const Select: {
    ({ name, validate, fast, children, onChange, onBlur, ...restProps }: SelectProps): JSX.Element;
    Option: import("rc-select/lib/Option").OptionFC;
    OptGroup: import("rc-select/lib/OptGroup").OptionGroupFC;
};
export default Select;
//# sourceMappingURL=index.d.ts.map