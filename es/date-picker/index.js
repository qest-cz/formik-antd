import { __rest } from "tslib";
import * as React from 'react';
import { DatePicker as $DatePicker } from 'antd';
import moment from 'moment';
import Field from '../field';
const { MonthPicker: $MonthPicker, RangePicker: $RangePicker, WeekPicker: $WeekPicker, } = $DatePicker;
export const DatePicker = (_a) => {
    var { name, validate, onChange, fast, keepOffset } = _a, restProps = __rest(_a, ["name", "validate", "onChange", "fast", "keepOffset"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (
    //@ts-ignore
    React.createElement($DatePicker
    //@ts-ignore
    , Object.assign({ 
        //@ts-ignore
        value: value ? moment(value) : undefined, onChange: (date, dateString) => {
            setFieldValue(name, date ? date.toISOString(keepOffset) : null);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
export default DatePicker;
DatePicker.MonthPicker = (_a) => {
    var { name, validate, onChange, keepOffset } = _a, restProps = __rest(_a, ["name", "validate", "onChange", "keepOffset"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (
    //@ts-ignore
    React.createElement($MonthPicker
    //@ts-ignore
    , Object.assign({ 
        //@ts-ignore
        value: value ? moment(value) : undefined, onChange: (date, dateString) => {
            setFieldValue(name, date ? date.toISOString(keepOffset) : null);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
DatePicker.RangePicker = (_a) => {
    var { name, validate, onChange } = _a, restProps = __rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (
    //@ts-ignore
    React.createElement($RangePicker, Object.assign({ name: name, value: value, onChange: (dates, dateStrings) => {
            setFieldValue(name, dates);
            setFieldTouched(name, true, false);
            onChange && onChange(dates, dateStrings);
        } }, restProps)))));
};
DatePicker.WeekPicker = (_a) => {
    var { name, validate, onChange } = _a, restProps = __rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (
    //@ts-ignore
    React.createElement($WeekPicker, Object.assign({ name: name, value: value, onChange: (date, dateString) => {
            setFieldValue(name, date);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
//# sourceMappingURL=index.js.map