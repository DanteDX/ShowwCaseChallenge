"use strict";
exports.__esModule = true;
exports.SideEducation = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
exports.SideEducation = function (_a) {
    var educations = _a.educations;
    var EducationList = educations.map(function (eachEducation) {
        return (react_1["default"].createElement(core_1.CardContent, null,
            react_1["default"].createElement("p", null, eachEducation.schoolName)));
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null, "All Schools"),
        react_1["default"].createElement(core_1.Card, { raised: true }, EducationList.slice(1, EducationList.length))));
};
