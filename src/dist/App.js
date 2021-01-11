"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Landing_1 = require("./components/Landing");
var AddEducation_1 = require("./components/AddEducation");
var styles_1 = require("@material-ui/core/styles");
var darkTheme = styles_1.createMuiTheme({
    palette: {
        type: "light"
    }
});
function App() {
    return (react_1["default"].createElement(styles_1.ThemeProvider, { theme: darkTheme },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement("div", { className: "App" },
                react_1["default"].createElement(react_router_dom_1.Switch, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Landing_1.Landing }),
                    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/addEducation", component: AddEducation_1.AddEducation }))))));
}
exports["default"] = App;
