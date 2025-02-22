"use strict";
exports.__esModule = true;
exports.SubmitButton = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
var SubmitButton = function (_a) {
    var children = _a.children, restProps = tslib_1.__rest(_a, ["children"]);
    return (React.createElement(formik_1.Field, null, function (_a) {
        var _b = _a.form, isSubmitting = _b.isSubmitting, isValid = _b.isValid, dirty = _b.dirty, submitCount = _b.submitCount;
        return (React.createElement(antd_1.Button, tslib_1.__assign({ loading: isSubmitting, type: 'primary', htmlType: 'submit', disabled: !isValid && (dirty || submitCount > 0) }, restProps), children));
    }));
};
exports.SubmitButton = SubmitButton;
exports["default"] = exports.SubmitButton;
//# sourceMappingURL=index.js.map