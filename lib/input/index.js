"use strict";
exports.__esModule = true;
exports.Input = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var Input = React.forwardRef(function (_a, ref) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, $onChange = _a.onChange, $onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var _b = _a.field, value = _b.value, onChange = _b.onChange, onBlur = _b.onBlur;
        return (React.createElement(antd_1.Input, tslib_1.__assign({ ref: ref, name: name, value: value, onChange: function (event) {
                onChange(event);
                $onChange && $onChange(event);
            }, onBlur: function (event) {
                onBlur(event);
                $onBlur && $onBlur(event);
            } }, restProps)));
    }));
});
var TypedInput = Input;
exports.Input = TypedInput;
TypedInput.Password = React.forwardRef(function (_a, ref) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, $onChange = _a.onChange, $onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var _b = _a.field, value = _b.value, onChange = _b.onChange, onBlur = _b.onBlur;
        return (React.createElement(antd_1.Input.Password, tslib_1.__assign({ ref: ref, name: name, value: value, onChange: function (event) {
                onChange(event);
                $onChange && $onChange(event);
            }, onBlur: function (event) {
                onBlur(event);
                $onBlur && $onBlur(event);
            } }, restProps)));
    }));
});
TypedInput.TextArea = React.forwardRef(function (_a, ref) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, $onChange = _a.onChange, $onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var _b = _a.field, value = _b.value, onChange = _b.onChange, onBlur = _b.onBlur;
        return (React.createElement(antd_1.Input.TextArea, tslib_1.__assign({ ref: ref, name: name, value: value, onChange: function (event) {
                onChange(event);
                $onChange && $onChange(event);
            }, onBlur: function (event) {
                onBlur(event);
                $onBlur && $onBlur(event);
            } }, restProps)));
    }));
});
exports["default"] = TypedInput;
//# sourceMappingURL=index.js.map