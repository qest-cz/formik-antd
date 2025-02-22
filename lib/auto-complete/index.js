"use strict";
exports.__esModule = true;
exports.AutoComplete = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var AutoComplete = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, form = _a.form;
        return (React.createElement(antd_1.AutoComplete, tslib_1.__assign({ value: value, onChange: function (value, option) {
                form.setFieldValue(name, value != null ? value.valueOf() : value);
                onChange && onChange(value, option);
            }, onBlur: function (value) {
                form.setFieldTouched(name);
                onBlur && onBlur(value);
            } }, restProps)));
    }));
};
exports.AutoComplete = AutoComplete;
exports["default"] = exports.AutoComplete;
//# sourceMappingURL=index.js.map