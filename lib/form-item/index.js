"use strict";
exports.__esModule = true;
exports.FormItem = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
var antd_1 = require("antd");
var FormItem = function (_a) {
    var name = _a.name, showValidateSuccess = _a.showValidateSuccess, _b = _a.showInitialErrorAfterTouched, showInitialErrorAfterTouched = _b === void 0 ? false : _b, children = _a.children, validate = _a.validate, restProps = tslib_1.__rest(_a, ["name", "showValidateSuccess", "showInitialErrorAfterTouched", "children", "validate"]);
    return (React.createElement(formik_1.Field, { name: name, validate: validate }, function (_a) {
        var _b = _a.form, _c = _b.errors, errors = _c === void 0 ? {} : _c, _d = _b.touched, touched = _d === void 0 ? {} : _d, _e = _b.initialErrors, initialErrors = _e === void 0 ? {} : _e;
        var error = formik_1.getIn(errors, name, undefined);
        var initialError = formik_1.getIn(initialErrors, name, undefined);
        var isTouched = formik_1.getIn(touched, name, false);
        if (Array.isArray(isTouched)) {
            isTouched =
                isTouched.length === 0
                    ? true
                    : isTouched.reduce(function (acc, value) { return acc || value; }, false);
        }
        var hasError = error !== undefined && isTouched;
        var hasInitialError = initialError !== undefined;
        var isValid = !error && isTouched;
        var showHelp = hasError ||
            (hasInitialError && (!isTouched || showInitialErrorAfterTouched));
        return (React.createElement(antd_1.Form.Item, tslib_1.__assign({ validateStatus: hasError || (hasInitialError && !isTouched)
                ? 'error'
                : isValid && showValidateSuccess
                    ? 'success'
                    : undefined, hasFeedback: isValid, help: showHelp ? (React.createElement(React.Fragment, null,
                hasError && React.createElement("li", null, error),
                hasInitialError &&
                    (!isTouched || showInitialErrorAfterTouched) && (React.createElement("li", null, initialError)))) : null, name: name }, restProps), children));
    }));
};
exports.FormItem = FormItem;
exports["default"] = exports.FormItem;
//# sourceMappingURL=index.js.map