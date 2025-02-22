"use strict";
exports.__esModule = true;
exports.DatePicker = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var moment_1 = tslib_1.__importDefault(require("moment"));
var field_1 = tslib_1.__importDefault(require("../field"));
var $MonthPicker = antd_1.DatePicker.MonthPicker, $RangePicker = antd_1.DatePicker.RangePicker, $WeekPicker = antd_1.DatePicker.WeekPicker;
var DatePicker = function (_a) {
    var name = _a.name, validate = _a.validate, onChange = _a.onChange, fast = _a.fast, keepOffset = _a.keepOffset, restProps = tslib_1.__rest(_a, ["name", "validate", "onChange", "fast", "keepOffset"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.DatePicker, tslib_1.__assign({ value: value ? moment_1["default"](value) : undefined, onChange: function (date, dateString) {
                setFieldValue(name, date ? date.toISOString(keepOffset) : null);
                setFieldTouched(name, true, false);
                onChange && onChange(date, dateString);
            } }, restProps)));
    }));
};
exports.DatePicker = DatePicker;
exports["default"] = exports.DatePicker;
exports.DatePicker.MonthPicker = function (_a) {
    var name = _a.name, validate = _a.validate, onChange = _a.onChange, keepOffset = _a.keepOffset, restProps = tslib_1.__rest(_a, ["name", "validate", "onChange", "keepOffset"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement($MonthPicker, tslib_1.__assign({ value: value ? moment_1["default"](value) : undefined, onChange: function (date, dateString) {
                setFieldValue(name, date ? date.toISOString(keepOffset) : null);
                setFieldTouched(name, true, false);
                onChange && onChange(date, dateString);
            } }, restProps)));
    }));
};
exports.DatePicker.RangePicker = function (_a) {
    var name = _a.name, validate = _a.validate, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement($RangePicker, tslib_1.__assign({ name: name, value: value, onChange: function (dates, dateStrings) {
                setFieldValue(name, dates);
                setFieldTouched(name, true, false);
                onChange && onChange(dates, dateStrings);
            } }, restProps)));
    }));
};
exports.DatePicker.WeekPicker = function (_a) {
    var name = _a.name, validate = _a.validate, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement($WeekPicker, tslib_1.__assign({ name: name, value: value, onChange: function (date, dateString) {
                setFieldValue(name, date);
                setFieldTouched(name, true, false);
                onChange && onChange(date, dateString);
            } }, restProps)));
    }));
};
//# sourceMappingURL=index.js.map