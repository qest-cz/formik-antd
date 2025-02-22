"use strict";
exports.__esModule = true;
exports.ResetButton = void 0;
var tslib_1 = require("tslib");
var antd_1 = require("antd");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
var ResetButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, restProps = tslib_1.__rest(_a, ["children", "onClick"]);
    return (React.createElement(formik_1.Field, null, function (_a) {
        var _b = _a.form, resetForm = _b.resetForm, dirty = _b.dirty;
        return (React.createElement(antd_1.Button, tslib_1.__assign({ onClick: function (event) {
                resetForm();
                onClick && onClick(event);
            }, disabled: !dirty, type: 'dashed' }, restProps), children));
    }));
};
exports.ResetButton = ResetButton;
exports["default"] = exports.ResetButton;
//# sourceMappingURL=index.js.map