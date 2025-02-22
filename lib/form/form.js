"use strict";
exports.__esModule = true;
exports.Form = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
var antd_1 = require("antd");
var form_item_1 = require("../form-item");
var _Form = antd_1.Form;
function Form(props) {
    return (React.createElement(formik_1.Field, null, function (_a) {
        var _b = _a.form, handleReset = _b.handleReset, handleSubmit = _b.handleSubmit;
        return (React.createElement(_Form, tslib_1.__assign({ onReset: handleReset, onFinish: handleSubmit }, props)));
    }));
}
exports.Form = Form;
Form.Item = form_item_1.FormItem;
exports["default"] = Form;
//# sourceMappingURL=form.js.map