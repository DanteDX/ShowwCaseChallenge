"use strict";
exports.__esModule = true;
exports.SideEducation = exports._SideEducation = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_redux_1 = require("react-redux");
var EducationActions_1 = require("../actions/EducationActions");
exports._SideEducation = function (_a) {
    var educations = _a.educations, deleteEducationAction = _a.deleteEducationAction;
    var EducationList = educations.map(function (eachEducation) {
        return (react_1["default"].createElement("div", { style: { margin: "7px" } },
            react_1["default"].createElement("span", null, eachEducation.schoolName),
            react_1["default"].createElement(core_1.Button, { onClick: function (e) { return deleteEducationAction(eachEducation.id); }, variant: "contained", color: "secondary", size: "small" }, "Delete")));
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null, "All Schools"),
        react_1["default"].createElement(core_1.Card, { raised: true },
            react_1["default"].createElement(core_1.CardContent, null, EducationList.slice(1, EducationList.length)))));
};
exports.SideEducation = react_redux_1.connect(null, { deleteEducationAction: EducationActions_1.deleteEducationAction })(exports._SideEducation);
