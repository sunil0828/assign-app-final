webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");






var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query SEARCH_USERS_QUERY($searchTerm: String!) {\n    searchTerms: allUsers(where: { OR: [{ name_contains_i: $searchTerm }] }) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SEARCH_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"])(SEARCH_USERS_QUERY, {
    fetchPolicy: "no-cache"
  }),
      _useLazyQuery2 = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLazyQuery, 2),
      findUsers = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  var users = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  var findUsersButChill = debounce(findUsers, 350);
  resetIdCounter();

  var _useCombobox = useCombobox({
    users: users,
    onInputValueChange: function onInputValueChange() {
      findUsersButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    onSelectedUserChange: function onSelectedUserChange(_ref) {
      var selectedUser = _ref.selectedUser;
      router.push({
        pathname: "/user/".concat(selectedUser.id)
      });
    },
    userToString: function userToString(user) {
      return (user === null || user === void 0 ? void 0 : user.name) || "";
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getUserProps = _useCombobox.getUserProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an user",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && users.map(function (user, index) {
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDownItem"], _objectSpread(_objectSpread({}, getUserProps({
          user: user
        })), {}, {
          key: user.id,
          highlighted: index === highlightedIndex,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          },
          __self: _this
        }), user.name);
      }), isOpen && !users.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__["DropDownItem"], {
        children: ["Sorry , No users found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(Search, "UYKzFnOeURnppa8KfEvRzH2Xecc=", true, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"]];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStyles", function() { return SearchStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown",
  componentId: "rusb8p-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGrey);"]);
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "rusb8p-1"
})(["border-bottom:1px solid var(--lightGrey);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "rusb8p-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGVzL0Ryb3BEb3duLmpzIl0sIm5hbWVzIjpbIlNFQVJDSF9VU0VSU19RVUVSWSIsImdxbCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmluZFVzZXJzIiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInVzZXJzIiwic2VhcmNoVGVybXMiLCJmaW5kVXNlcnNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZFVzZXJDaGFuZ2UiLCJzZWxlY3RlZFVzZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsInVzZXJUb1N0cmluZyIsInVzZXIiLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldFVzZXJQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJnZXRJbnB1dFByb3BzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJEcm9wRG93biIsInN0eWxlZCIsImRpdiIsIkRyb3BEb3duSXRlbSIsInByb3BzIiwiaGlnaGxpZ2h0ZWQiLCJ0aGVtZSIsImxpZ2h0Z3JleSIsImdsb3ciLCJrZXlmcmFtZXMiLCJTZWFyY2hTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFD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K0JDLDJEOzs7S0FIeEJILE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTXVDLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBZDtBQU9BLElBQU1DLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTEFFRixVQUFDRSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLFNBQXBCLEdBQWdDLE9BQTVDO0FBQUEsQ0FGRSxFQUtkLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IscUJBQXBCLEdBQTRDLElBQXhEO0FBQUEsQ0FMYyxFQVNaLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0JELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUFoQyxHQUE0QyxPQUF4RDtBQUFBLENBVFksQ0FBbEI7QUFlQSxJQUFNQyxJQUFJLEdBQUdDLG1FQUFILHlFQUFWO0FBVUEsSUFBTUMsWUFBWSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdKQVFDTSxJQVJELENBQWxCO0FBYUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI2MjUzMjExYTBlY2VkYmRkZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfVVNFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1VTRVJTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsVXNlcnMod2hlcmU6IHsgT1I6IFt7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfV0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbZmluZFVzZXJzLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1VTRVJTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXJzID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcblxyXG4gIGNvbnN0IGZpbmRVc2Vyc0J1dENoaWxsID0gZGVib3VuY2UoZmluZFVzZXJzLCAzNTApO1xyXG5cclxuICByZXNldElkQ291bnRlcigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0Q29tYm9ib3hQcm9wcyxcclxuICAgIGdldFVzZXJQcm9wcyxcclxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXHJcbiAgfSA9IHVzZUNvbWJvYm94KHtcclxuICAgIHVzZXJzLFxyXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG4gICAgICBmaW5kVXNlcnNCdXRDaGlsbCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0ZWRVc2VyQ2hhbmdlKHsgc2VsZWN0ZWRVc2VyIH0pIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3VzZXIvJHtzZWxlY3RlZFVzZXIuaWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXNlclRvU3RyaW5nOiAodXNlcikgPT4gdXNlcj8ubmFtZSB8fCBgYCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFN0eWxlcz5cclxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWFyY2hcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhbiB1c2VyXCIsXHJcbiAgICAgICAgICAgIGlkOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyBcImxvYWRpbmdcIiA6IFwiXCIsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcbiAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcERvd25JdGVtXHJcbiAgICAgICAgICAgICAgey4uLmdldFVzZXJQcm9wcyh7IHVzZXIgfSl9XHJcbiAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhdXNlcnMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnkgLCBObyB1c2VycyBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJyNmN2Y3ZjcnIDogJ3doaXRlJyl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/ICdwYWRkaW5nLWxlZnQ6IDJyZW07JyA6IG51bGwpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWRcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gcHJvcHMudGhlbWUubGlnaHRncmV5IDogJ3doaXRlJyl9O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgZ2xvdyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB5ZWxsb3c7XG4gIH1cblxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHllbGxvdztcbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgICYubG9hZGluZyB7XG4gICAgICBhbmltYXRpb246ICR7Z2xvd30gMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=