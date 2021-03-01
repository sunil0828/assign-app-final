webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGVzL0Ryb3BEb3duLmpzIl0sIm5hbWVzIjpbIlNFQVJDSF9VU0VSU19RVUVSWSIsImdxbCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmluZFVzZXJzIiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInVzZXJzIiwic2VhcmNoVGVybXMiLCJmaW5kVXNlcnNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZFVzZXJDaGFuZ2UiLCJzZWxlY3RlZFVzZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsInVzZXJUb1N0cmluZyIsInVzZXIiLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldFVzZXJQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJnZXRJbnB1dFByb3BzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJEcm9wRG93biIsInN0eWxlZCIsImRpdiIsIkRyb3BEb3duSXRlbSIsInByb3BzIiwiaGlnaGxpZ2h0ZWQiLCJ0aGVtZSIsImxpZ2h0Z3JleSIsImdsb3ciLCJrZXlmcmFtZXMiLCJTZWFyY2hTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFD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K0JDLDJEOzs7S0FIeEJILE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTXVDLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBZDtBQU9BLElBQU1DLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTEFFRixVQUFDRSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLFNBQXBCLEdBQWdDLE9BQTVDO0FBQUEsQ0FGRSxFQUtkLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IscUJBQXBCLEdBQTRDLElBQXhEO0FBQUEsQ0FMYyxFQVNaLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0JELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUFoQyxHQUE0QyxPQUF4RDtBQUFBLENBVFksQ0FBbEI7QUFlQSxJQUFNQyxJQUFJLEdBQUdDLG1FQUFILHlFQUFWO0FBVUEsSUFBTUMsWUFBWSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdKQVFDTSxJQVJELENBQWxCO0FBYUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YjYyNTMyMTFhMGVjZWRiZGRmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcclxuXHJcbmNvbnN0IFNFQVJDSF9VU0VSU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTRUFSQ0hfVVNFUlNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuICAgIHNlYXJjaFRlcm1zOiBhbGxVc2Vycyh3aGVyZTogeyBPUjogW3sgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtmaW5kVXNlcnMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcbiAgICBTRUFSQ0hfVVNFUlNfUVVFUlksXHJcbiAgICB7XHJcbiAgICAgIGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXNlcnMgPSBkYXRhPy5zZWFyY2hUZXJtcyB8fCBbXTtcclxuXHJcbiAgY29uc3QgZmluZFVzZXJzQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kVXNlcnMsIDM1MCk7XHJcblxyXG4gIHJlc2V0SWRDb3VudGVyKCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlzT3BlbixcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBnZXRNZW51UHJvcHMsXHJcbiAgICBnZXRDb21ib2JveFByb3BzLFxyXG4gICAgZ2V0VXNlclByb3BzLFxyXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcclxuICB9ID0gdXNlQ29tYm9ib3goe1xyXG4gICAgdXNlcnMsXHJcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgIGZpbmRVc2Vyc0J1dENoaWxsKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RlZFVzZXJDaGFuZ2UoeyBzZWxlY3RlZFVzZXIgfSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IGAvdXNlci8ke3NlbGVjdGVkVXNlci5pZH1gLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1c2VyVG9TdHJpbmc6ICh1c2VyKSA9PiB1c2VyPy5uYW1lIHx8IGBgLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIHVzZXJcIixcclxuICAgICAgICAgICAgaWQ6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJcIixcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICB7Li4uZ2V0VXNlclByb3BzKHsgdXNlciB9KX1cclxuICAgICAgICAgICAgICBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgPC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7aXNPcGVuICYmICF1c2Vycy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPERyb3BEb3duSXRlbT5Tb3JyeSAsIE5vIHVzZXJzIGZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRHJvcERvd24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xuYDtcblxuY29uc3QgRHJvcERvd25JdGVtID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyAnI2Y3ZjdmNycgOiAnd2hpdGUnKX07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJ3BhZGRpbmctbGVmdDogMnJlbTsnIDogbnVsbCl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZFxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyBwcm9wcy50aGVtZS5saWdodGdyZXkgOiAnd2hpdGUnKX07XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBnbG93ID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IHllbGxvdztcbiAgfVxuXG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggeWVsbG93O1xuICB9XG5gO1xuXG5jb25zdCBTZWFyY2hTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgIGFuaW1hdGlvbjogJHtnbG93fSAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==