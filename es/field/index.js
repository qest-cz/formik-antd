import { __rest } from "tslib";
import { Field as FormikField, FastField } from 'formik';
import * as React from 'react';
const _FastField = FastField;
export const Field = (_a) => {
    var { fast, children } = _a, restProps = __rest(_a, ["fast", "children"]);
    if (fast) {
        return React.createElement(_FastField, Object.assign({}, restProps), children);
    }
    return React.createElement(FormikField, Object.assign({}, restProps), children);
};
export default Field;
//# sourceMappingURL=index.js.map