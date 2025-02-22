"use strict";
exports.__esModule = true;
exports.Mentions = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var React = tslib_1.__importStar(require("react"));
var field_1 = tslib_1.__importDefault(require("../field"));
var Mentions = function (_a) {
    var name = _a.name, validate = _a.validate, fast = _a.fast, $onChange = _a.onChange, $onBlur = _a.onBlur, restProps = tslib_1.__rest(_a, ["name", "validate", "fast", "onChange", "onBlur"]);
    return (React.createElement(field_1["default"], { name: name, validate: validate, fast: fast }, function (_a) {
        var _b = _a.field, value = _b.value, onChange = _b.onChange, onBlur = _b.onBlur, form = _a.form;
        return (React.createElement(antd_1.Mentions, tslib_1.__assign({ name: name, value: value, onChange: function (event) {
                form.setFieldValue(name, event);
                $onChange && $onChange(event);
            }, onBlur: function (e) {
                onBlur(name);
                $onBlur && $onBlur(e);
            } }, restProps)));
    }));
};
exports.Mentions = Mentions;
exports.Mentions.Option = antd_1.Mentions.Option;
exports["default"] = exports.Mentions;
//# sourceMappingURL=index.js.map