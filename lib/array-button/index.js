"use strict";
exports.__esModule = true;
exports.ArrayButton = void 0;
var tslib_1 = require("tslib");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("antd/lib/button"));
function ArrayButton(_a) {
    var name = _a.name, onClick = _a.onClick, restProps = tslib_1.__rest(_a, ["name", "onClick"]);
    return (React.createElement(formik_1.FieldArray, { name: name }, function (array) { return React.createElement(button_1["default"], tslib_1.__assign({}, restProps, { onClick: function () { return onClick(array); } })); }));
}
exports.ArrayButton = ArrayButton;
exports["default"] = ArrayButton;
//# sourceMappingURL=index.js.map