import { __rest } from "tslib";
import { Transfer as $Transfer } from 'antd';
import * as React from 'react';
import Field from '../field';
export function Transfer(_a) {
    var { name, validate, fast, onChange } = _a, restProps = __rest(_a, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($Transfer, Object.assign({ targetKeys: value || [], onChange: (targetKeys, direction, moveKeys) => {
            setFieldValue(name, targetKeys);
            setFieldTouched(name, true, false);
            onChange && onChange(targetKeys, direction, moveKeys);
        } }, restProps)))));
}
export default Transfer;
//# sourceMappingURL=index.js.map