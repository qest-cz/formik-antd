"use strict";
exports.__esModule = true;
exports.Table = void 0;
var tslib_1 = require("tslib");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
// import { TableProps, WithStore } from 'antd/lib/table';
// RecordType extends object = any>(props: TableProps<RecordType>
// declare function Table<RecordType extends object = any>(props: TableProps<RecordType>): JSX.Element;
function Table(_a) {
    var name = _a.name, restProps = tslib_1.__rest(_a, ["name"]);
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field;
        return React.createElement(antd_1.Table, tslib_1.__assign({ dataSource: field.value || [] }, restProps));
    }));
}
exports.Table = Table;
exports["default"] = Table;
//# sourceMappingURL=index.js.map