"use strict";
exports.__esModule = true;
exports.FormikDebug = exports.isDevelopmentMode = void 0;
var tslib_1 = require("tslib");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
var isDevelopmentMode = function () {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};
exports.isDevelopmentMode = isDevelopmentMode;
var FormikDebug = function (props) {
    return exports.isDevelopmentMode() ? (React.createElement("pre", { style: tslib_1.__assign({ padding: 15 }, props) },
        React.createElement(formik_1.Field, null, function (_a) {
            var form = _a.form;
            return JSON.stringify(form, null, 2);
        }))) : null;
};
exports.FormikDebug = FormikDebug;
exports["default"] = exports.FormikDebug;
//# sourceMappingURL=index.js.map