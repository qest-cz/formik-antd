"use strict";
exports.__esModule = true;
exports.Switch = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var Switch = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.Switch, tslib_1.__assign({ checked: value, onChange: function (checked, event) {
                setFieldValue(name, checked);
                setFieldTouched(name, true, false);
                onChange && onChange(checked, event);
            } }, restProps)));
    }));
};
exports.Switch = Switch;
exports["default"] = exports.Switch;
//# sourceMappingURL=index.js.map