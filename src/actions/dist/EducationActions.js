"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.deleteEducationAction = exports.addEducationAction = void 0;
var ActionsTypes_1 = require("./ActionsTypes");
var dummyState = {
    id: 0,
    country: "",
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    startYear: new Date(),
    endYear: new Date(),
    grade: "",
    description: ""
};
exports.addEducationAction = function (educationInfo) { return function (dispatch) {
    dispatch({
        type: ActionsTypes_1.ActionTypes.addEducation,
        payload: educationInfo
    });
}; };
exports.deleteEducationAction = function (deleteId) { return function (dispatch) {
    var newDummyState = __assign(__assign({}, dummyState), { id: deleteId });
    dispatch({
        type: ActionsTypes_1.ActionTypes.deleteEducation,
        payload: newDummyState
    });
}; };
