"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.EducationReducer = void 0;
var ActionsTypes_1 = require("../actions/ActionsTypes");
var initialState = [{
        id: 0,
        country: "",
        schoolName: "",
        degree: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
        grade: "",
        description: ""
    }];
exports.EducationReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionsTypes_1.ActionTypes.addEducation:
            return __spreadArrays(state, [
                action.payload
            ]);
        case ActionsTypes_1.ActionTypes.deleteEducation:
            //action.payload will contain id:number
            var deleteId_1 = action.payload.id;
            var filteredState = state.filter(function (eachEducation) { return eachEducation.id !== deleteId_1; });
            return filteredState;
        default:
            return state;
    }
};
