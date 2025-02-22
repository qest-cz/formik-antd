"use strict";
exports.__esModule = true;
exports.AddRowButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var array_button_1 = require("../array-button");
function AddRowButton(_a) {
    var name = _a.name, createNewRow = _a.createNewRow, restProps = tslib_1.__rest(_a, ["name", "createNewRow"]);
    return (React.createElement(array_button_1.ArrayButton, tslib_1.__assign({ name: name }, restProps, { onClick: function (array) { return array.push(createNewRow()); } })));
}
exports.AddRowButton = AddRowButton;
exports["default"] = AddRowButton;
//# sourceMappingURL=index.js.map