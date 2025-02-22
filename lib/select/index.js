"use strict";
exports.__esModule = true;
exports.Select = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
// declare class Select<ValueType extends SelectValue = SelectValue> extends React.Component<SelectProps<ValueType>> {
var Select = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, children = _a.children, onChange = _a.onChange, onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "children", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.Select, tslib_1.__assign({ onChange: function (value, option) {
                setFieldValue(name, value);
                onChange && onChange(value, option);
            }, onBlur: function (value) {
                setFieldTouched(name);
                onBlur && onBlur(value);
            }, 
            // setting undefined will show the placeholder
            value: value === '' || value === null ? undefined : value }, restProps), children));
    }));
};
exports.Select = Select;
exports["default"] = exports.Select;
exports.Select.Option = antd_1.Select.Option;
exports.Select.OptGroup = antd_1.Select.OptGroup;
//# sourceMappingURL=index.js.map