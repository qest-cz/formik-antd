"use strict";
exports.__esModule = true;
exports.InputNumber = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var InputNumber = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, $onChange = _a.onChange, $onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var _b = _a.field, value = _b.value, onBlur = _b.onBlur, setFieldValue = _a.form.setFieldValue;
        return (React.createElement(antd_1.InputNumber, tslib_1.__assign({ name: name, value: value, onChange: function (value) {
                setFieldValue(name, value);
                $onChange && $onChange(value);
            }, onBlur: function (event) {
                onBlur(event);
                $onBlur && $onBlur(event);
            } }, restProps)));
    }));
};
exports.InputNumber = InputNumber;
exports["default"] = exports.InputNumber;
//# sourceMappingURL=index.js.map