"use strict";
exports.__esModule = true;
exports.AddEducation = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var NameActions_1 = require("../actions/NameActions");
var core_1 = require("@material-ui/core");
var EducationModal_1 = require("./EducationModal");
var SideEducation_1 = require("./SideEducation");
var DetailedEducation_1 = require("./DetailedEducation");
var _AddEducation = function (_a) {
    var history = _a.history, clearNameAction = _a.clearNameAction, nameState = _a.nameState, educations = _a.educations;
    var handleClick = function (e) {
        clearNameAction();
        history.push("/");
    };
    return (react_1["default"].createElement("div", null,
        "Add Education page",
        react_1["default"].createElement("h4", null,
            "Welcome ",
            nameState.name,
            " to Add Education page"),
        react_1["default"].createElement(core_1.Button, { variant: "contained", onClick: function (e) { return handleClick(e); } }, "Clear Name"),
        react_1["default"].createElement(EducationModal_1.EducationModal, null),
        react_1["default"].createElement(core_1.Grid, { container: true, spacing: 3, direction: column },
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 4 },
                react_1["default"].createElement(SideEducation_1.SideEducation, { educations: educations })),
            react_1["default"].createElement(core_1.Grid, { item: true, container: true, xs: 6, direction: row },
                react_1["default"].createElement(DetailedEducation_1.DetailedEducation, { educations: education })))));
};
var mapStateToProps = function (state) {
    return {
        nameState: state.NameReducer,
        educations: state.EducationReducer
    };
};
exports.AddEducation = react_redux_1.connect(mapStateToProps, { clearNameAction: NameActions_1.clearNameAction })(react_router_dom_1.withRouter(_AddEducation));
