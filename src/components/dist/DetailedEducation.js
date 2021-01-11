"use strict";
exports.__esModule = true;
exports.DetailedEducation = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
exports.DetailedEducation = function (_a) {
    var educations = _a.educations;
    return (react_1["default"].createElement(core_1.Card, { variant: "outlined", raised: true },
        react_1["default"].createElement(core_1.CardContent, null,
            react_1["default"].createElement("p", null, "This is Detailed Education"))));
};
