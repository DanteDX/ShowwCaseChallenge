"use strict";
exports.__esModule = true;
exports.EducationModal = void 0;
var react_modal_1 = require("react-modal");
var react_1 = require("react");
require("date-fns");
var core_1 = require("@material-ui/core");
var pickers_1 = require("@material-ui/pickers");
var date_fns_1 = require("@date-io/date-fns");
var react_redux_1 = require("react-redux");
var EducationActions_1 = require("../actions/EducationActions");
var _EducationModal = function (_a) {
    var addEducationAction = _a.addEducationAction, educations = _a.educations;
    var _b = react_1["default"].useState(false), modalOpen = _b[0], setModalOpen = _b[1];
    var customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    var _c = react_1["default"].useState(""), countryName = _c[0], setCountryName = _c[1];
    var _d = react_1["default"].useState(""), schoolName = _d[0], setSchoolName = _d[1];
    var _e = react_1["default"].useState(""), fieldName = _e[0], setFieldName = _e[1];
    var _f = react_1["default"].useState(""), Grade = _f[0], setGrade = _f[1];
    var _g = react_1["default"].useState(""), Degree = _g[0], setDegree = _g[1];
    var _h = react_1["default"].useState(new Date()), selectedStartingDate = _h[0], setSelectedStartingDate = _h[1];
    var _j = react_1["default"].useState(new Date()), selectedEndingDate = _j[0], setSelectedEndingDate = _j[1];
    var handleStartingDateChange = function (date) {
        setSelectedStartingDate(date);
    };
    var handleEndingDateChange = function (date) {
        setSelectedEndingDate(date);
    };
    var submitHandler = function (e) {
        var details = {
            id: educations.length + 1,
            country: countryName,
            schoolName: schoolName,
            degree: Degree,
            fieldOfStudy: fieldName,
            startYear: selectedStartingDate,
            endYear: selectedEndingDate,
            grade: Grade,
            description: ""
        };
        addEducationAction(details);
        // alert('Submitted');
        setModalOpen(false);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_modal_1["default"], { isOpen: modalOpen, style: customStyles },
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", onChange: function (e) { return setCountryName(e.currentTarget.value); }, type: "text", label: "Country Name" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", onChange: function (e) { return setSchoolName(e.currentTarget.value); }, type: "text", label: "School Name" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1["default"] },
                react_1["default"].createElement(pickers_1.KeyboardDatePicker, { required: true, disableToolbar: true, variant: "inline", format: "MM/dd/yyyy", margin: "normal", id: "date-picker-inline", label: "Starting Date", value: selectedStartingDate, onChange: handleStartingDateChange, KeyboardButtonProps: {
                        'aria-label': 'change date'
                    } })),
            react_1["default"].createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1["default"] },
                react_1["default"].createElement(pickers_1.KeyboardDatePicker, { required: true, disableToolbar: true, variant: "inline", format: "MM/dd/yyyy", margin: "normal", id: "date-picker-inline", label: "Ending Date", value: selectedEndingDate, onChange: handleEndingDateChange, KeyboardButtonProps: {
                        'aria-label': 'change date'
                    } })),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", onChange: function (e) { return setFieldName(e.currentTarget.value); }, type: "text", label: "Field Of Study" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", onChange: function (e) { return setDegree(e.currentTarget.value); }, type: "text", label: "Degree" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", type: "text", label: "Grade", onChange: function (e) { return setGrade(e.currentTarget.value); } }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.Button, { variant: "contained", color: "secondary", onClick: function (e) { return setModalOpen(false); } }, "Cancel"),
            react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function (e) { return submitHandler(e); } }, "Add Education")),
        react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function (e) { return setModalOpen(true); } }, "ADD EDUCATION")));
};
var mapStateToProps = function (state) {
    return {
        educations: state.EducationReducer
    };
};
exports.EducationModal = react_redux_1.connect(mapStateToProps, { addEducationAction: EducationActions_1.addEducationAction })(_EducationModal);
