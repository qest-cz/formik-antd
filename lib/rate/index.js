"use strict";
exports.__esModule = true;
exports.Rate = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var Rate = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.Rate, tslib_1.__assign({ value: value, onChange: function (value) {
                setFieldValue(name, value != null ? value.valueOf() : value);
                setFieldTouched(name, true);
                onChange && onChange(value);
            } }, restProps)));
    }));
};
exports.Rate = Rate;
exports["default"] = exports.Rate;
//# sourceMappingURL=index.js.map