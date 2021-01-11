"use strict";
exports.__esModule = true;
exports.EducationModal = void 0;
var react_modal_1 = require("react-modal");
var react_1 = require("react");
require("date-fns");
var core_1 = require("@material-ui/core");
var pickers_1 = require("@material-ui/pickers");
var date_fns_1 = require("@date-io/date-fns");
exports.EducationModal = function () {
    var _a = react_1["default"].useState(false), modalOpen = _a[0], setModalOpen = _a[1];
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
    var _b = react_1["default"].useState(""), countryName = _b[0], setCountryName = _b[1];
    var _c = react_1["default"].useState(""), schoolName = _c[0], setSchoolName = _c[1];
    var _d = react_1["default"].useState(""), fieldName = _d[0], setFieldName = _d[1];
    var _e = react_1["default"].useState(""), Grade = _e[0], setGrade = _e[1];
    var _f = react_1["default"].useState(""), Degree = _f[0], setDegree = _f[1];
    var _g = react_1["default"].useState(new Date()), selectedStartingDate = _g[0], setSelectedStartingDate = _g[1];
    var _h = react_1["default"].useState(new Date()), selectedEndingDate = _h[0], setSelectedEndingDate = _h[1];
    var handleStartingDateChange = function (date) {
        setSelectedStartingDate(date);
    };
    var handleEndingDateChange = function (date) {
        setSelectedEndingDate(date);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_modal_1["default"], { isOpen: modalOpen, style: customStyles },
            react_1["default"].createElement(core_1.TextField, { required: true, color: "primary", variant: "outlined", onChange: function (e) { return setCountryName(e.currentTarget.value); }, type: "text", label: "Country Name" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(core_1.TextField, { helperText: "Please select your school", color: "primary", variant: "outlined", select: true, required: true, label: "Select a school", onChange: function (e) { return setSchoolName(e.currentTarget.value); } },
                react_1["default"].createElement(core_1.MenuItem, { value: "Gregory" }, "St. Gregory's High School"),
                react_1["default"].createElement(core_1.MenuItem, { value: "Xaviers" }, "Xaviers"),
                react_1["default"].createElement(core_1.MenuItem, { value: "Joseph" }, "Joseph")),
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
            react_1["default"].createElement(core_1.Button, { variant: "contained", color: "primary", onClick: function (e) { return setModalOpen(false); } }, "Add Education")),
        react_1["default"].createElement("button", { onClick: function (e) { return setModalOpen(true); } }, "Open Modal")));
};
