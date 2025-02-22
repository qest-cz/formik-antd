import { FormikFieldProps } from '../FieldProps';
import { TimePickerProps as $TimePickerProps } from 'antd/lib/time-picker';
export declare type TimePickerProps = FormikFieldProps & $TimePickerProps & {
    keepOffset?: boolean;
};
export declare const TimePicker: ({ name, validate, fast, onChange, keepOffset, ...restProps }: TimePickerProps) => JSX.Element;
export default TimePicker;
//# sourceMappingURL=index.d.ts.map