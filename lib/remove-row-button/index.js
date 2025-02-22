"use strict";
exports.__esModule = true;
exports.RemoveRowButton = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var array_button_1 = require("../array-button");
function RemoveRowButton(_a) {
    var name = _a.name, index = _a.index, restProps = tslib_1.__rest(_a, ["name", "index"]);
    return (React.createElement(array_button_1.ArrayButton, tslib_1.__assign({ name: name }, restProps, { onClick: function (array) { return array.remove(index); } })));
}
exports.RemoveRowButton = RemoveRowButton;
exports["default"] = RemoveRowButton;
//# sourceMappingURL=index.js.map