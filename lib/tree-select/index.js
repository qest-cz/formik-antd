"use strict";
exports.__esModule = true;
exports.TreeSelect = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var TreeSelect = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, onChange = _a.onChange, onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var value = _a.field.value, form = _a.form;
        return (React.createElement(antd_1.TreeSelect, tslib_1.__assign({ value: value, onBlur: function (event) {
                form.setFieldTouched(name);
                onBlur && onBlur(event);
            }, onChange: function (value, node, extra) {
                form.setFieldValue(name, value);
                onChange && onChange(value, node, extra);
            } }, restProps)));
    }));
};
exports.TreeSelect = TreeSelect;
exports["default"] = exports.TreeSelect;
exports.TreeSelect.TreeNode = antd_1.TreeSelect.TreeNode;
//# sourceMappingURL=index.js.map