"use strict";
exports.__esModule = true;
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var field_1 = tslib_1.__importDefault(require("../field"));
var Checkbox = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.Checkbox, tslib_1.__assign({ name: name, checked: value, onChange: function (event) {
                setFieldValue(name, event.target.checked);
                setFieldTouched(name, true, false);
                onChange && onChange(event);
            } }, restProps)));
    }));
};
exports.Checkbox = Checkbox;
exports["default"] = exports.Checkbox;
exports.Checkbox.Group = function (_a) {
    var name = _a.name, validate = _a.validate, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.Checkbox.Group, tslib_1.__assign({ value: value, onChange: function (value) {
                setFieldValue(name, value);
                setFieldTouched(name, true, false);
                onChange && onChange(value);
            } }, restProps)));
    }));
};
//# sourceMappingURL=index.js.map