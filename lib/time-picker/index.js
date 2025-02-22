"use strict";
exports.__esModule = true;
exports.TimePicker = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var field_1 = tslib_1.__importDefault(require("../field"));
var TimePicker = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, keepOffset = _a.keepOffset, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "keepOffset"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, _b = _a.form, setFieldValue = _b.setFieldValue, setFieldTouched = _b.setFieldTouched;
        return (React.createElement(antd_1.TimePicker, tslib_1.__assign({ value: value ? moment_1["default"](value) : undefined, onChange: function (time, timeString) {
                setFieldValue(name, time ? time.toISOString(keepOffset) : null);
                setFieldTouched(name, true, false);
                onChange && onChange(time, timeString);
            } }, restProps)));
    }));
};
exports.TimePicker = TimePicker;
exports["default"] = exports.TimePicker;
//# sourceMappingURL=index.js.map