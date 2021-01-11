"use strict";
exports.__esModule = true;
exports.DetailedEducation = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
exports.DetailedEducation = function (_a) {
    var educations = _a.educations;
    var CardList = educations.map(function (eachEducation) {
        var startingDate = eachEducation.startYear.getFullYear().toString() + "/" + (eachEducation.startYear.getMonth() + 1).toString() + "/" + eachEducation.startYear.getDate().toString();
        var endingDate = eachEducation.endYear.getFullYear().toString() + "/" + (eachEducation.endYear.getMonth() + 1).toString() + "/" + eachEducation.endYear.getDate().toString();
        return (react_1["default"].createElement(core_1.Card, { raised: true },
            react_1["default"].createElement(core_1.CardContent, null,
                react_1["default"].createElement("p", null,
                    "School Name:",
                    react_1["default"].createElement("b", null, eachEducation.schoolName)),
                react_1["default"].createElement("p", null,
                    "Degree: ",
                    react_1["default"].createElement("b", null, eachEducation.degree)),
                react_1["default"].createElement("p", null,
                    "Country:",
                    react_1["default"].createElement("b", null, eachEducation.country)),
                react_1["default"].createElement("p", null,
                    "Field of Study:",
                    react_1["default"].createElement("b", null, eachEducation.fieldOfStudy)),
                react_1["default"].createElement("p", null,
                    "Start Date:",
                    react_1["default"].createElement("b", null, startingDate)),
                react_1["default"].createElement("p", null,
                    "Ending Data:",
                    react_1["default"].createElement("b", null, endingDate)))));
    });
    return (react_1["default"].createElement("div", null, CardList.slice(1, CardList.length)));
};
