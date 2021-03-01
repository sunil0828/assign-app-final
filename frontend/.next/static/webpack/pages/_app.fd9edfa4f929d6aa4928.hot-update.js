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
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");






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







var SEARCH_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

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
  var findUsersButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default()(findUsers, 350);
  Object(downshift__WEBPACK_IMPORTED_MODULE_6__["resetIdCounter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"])({
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
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getUserProps = _useCombobox.getUserProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_10__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an user",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_10__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && users.map(function (user, index) {
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_10__["DropDownItem"], _objectSpread(_objectSpread({}, getUserProps({
          user: user
        })), {}, {
          key: user.id,
          highlighted: index === highlightedIndex,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          },
          __self: _this
        }), user.name);
      }), isOpen && !users.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_10__["DropDownItem"], {
        children: ["Sorry , No users found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(Search, "3ZDpRWWl7klVlbIcW1H6/yDjGf0=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"], downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1VTRVJTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kVXNlcnMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXNlcnMiLCJzZWFyY2hUZXJtcyIsImZpbmRVc2Vyc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImlucHV0VmFsdWUiLCJvblNlbGVjdGVkVXNlckNoYW5nZSIsInNlbGVjdGVkVXNlciIsInB1c2giLCJwYXRobmFtZSIsImlkIiwidXNlclRvU3RyaW5nIiwidXNlciIsIm5hbWUiLCJpc09wZW4iLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldFVzZXJQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4Qjs7QUFEK0Isc0JBR2VDLG1FQUFZLENBQ3hETCxrQkFEd0QsRUFFeEQ7QUFDRU0sZUFBVyxFQUFFO0FBRGYsR0FGd0QsQ0FIM0I7QUFBQTtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBO0FBQUEsTUFHWEMsT0FIVyxtQkFHWEEsT0FIVztBQUFBLE1BR0ZDLElBSEUsbUJBR0ZBLElBSEU7QUFBQSxNQUdJQyxLQUhKLG1CQUdJQSxLQUhKOztBQVUvQixNQUFNQyxLQUFLLEdBQUcsQ0FBQUYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFdBQU4sS0FBcUIsRUFBbkM7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0Msc0RBQVEsQ0FBQ1AsU0FBRCxFQUFZLEdBQVosQ0FBbEM7QUFFQVEsa0VBQWM7O0FBZGlCLHFCQXdCM0JDLDZEQUFXLENBQUM7QUFDZEwsU0FBSyxFQUFMQSxLQURjO0FBRWRNLHNCQUZjLGdDQUVPO0FBQ25CSix1QkFBaUIsQ0FBQztBQUNoQkssaUJBQVMsRUFBRTtBQUNUQyxvQkFBVSxFQUFFQztBQURIO0FBREssT0FBRCxDQUFqQjtBQUtELEtBUmE7QUFTZEMsd0JBVGMsc0NBU3lCO0FBQUEsVUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUNyQ25CLFlBQU0sQ0FBQ29CLElBQVAsQ0FBWTtBQUNWQyxnQkFBUSxrQkFBV0YsWUFBWSxDQUFDRyxFQUF4QjtBQURFLE9BQVo7QUFHRCxLQWJhO0FBY2RDLGdCQUFZLEVBQUUsc0JBQUNDLElBQUQ7QUFBQSxhQUFVLENBQUFBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFQyxJQUFOLE9BQVY7QUFBQTtBQWRBLEdBQUQsQ0F4QmdCO0FBQUEsTUFpQjdCQyxNQWpCNkIsZ0JBaUI3QkEsTUFqQjZCO0FBQUEsTUFrQjdCVCxVQWxCNkIsZ0JBa0I3QkEsVUFsQjZCO0FBQUEsTUFtQjdCVSxZQW5CNkIsZ0JBbUI3QkEsWUFuQjZCO0FBQUEsTUFvQjdCQyxhQXBCNkIsZ0JBb0I3QkEsYUFwQjZCO0FBQUEsTUFxQjdCQyxnQkFyQjZCLGdCQXFCN0JBLGdCQXJCNkI7QUFBQSxNQXNCN0JDLFlBdEI2QixnQkFzQjdCQSxZQXRCNkI7QUFBQSxNQXVCN0JDLGdCQXZCNkIsZ0JBdUI3QkEsZ0JBdkI2Qjs7QUF3Qy9CLHNCQUNFLHFFQUFDLDhEQUFEO0FBQUEsNEJBQ0UsNEdBQVNGLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNFLGdHQUNNRCxhQUFhLENBQUM7QUFDaEJJLFlBQUksRUFBRSxRQURVO0FBRWhCQyxtQkFBVyxFQUFFLG9CQUZHO0FBR2hCWCxVQUFFLEVBQUUsUUFIWTtBQUloQlksaUJBQVMsRUFBRTdCLE9BQU8sR0FBRyxTQUFILEdBQWU7QUFKakIsT0FBRCxDQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0UscUVBQUMsMERBQUQsa0NBQWNzQixZQUFZLEVBQTFCO0FBQUEsaUJBQ0dELE1BQU0sSUFDTGxCLEtBQUssQ0FBQzJCLEdBQU4sQ0FBVSxVQUFDWCxJQUFELEVBQU9ZLEtBQVA7QUFBQSw0QkFDUiw0REFBQyw4REFBRCxrQ0FDTU4sWUFBWSxDQUFDO0FBQUVOLGNBQUksRUFBSkE7QUFBRixTQUFELENBRGxCO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNGLEVBRlo7QUFHRSxxQkFBVyxFQUFFYyxLQUFLLEtBQUtMLGdCQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBS0dQLElBQUksQ0FBQ0MsSUFMUixDQURRO0FBQUEsT0FBVixDQUZKLEVBV0dDLE1BQU0sSUFBSSxDQUFDbEIsS0FBSyxDQUFDNkIsTUFBakIsSUFBMkIsQ0FBQ2hDLE9BQTVCLGlCQUNDLHFFQUFDLDhEQUFEO0FBQUEsa0RBQTBDWSxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0FyRXVCbEIsTTtVQUNQRSxpRSxFQUUrQkMsMkQsRUFxQjFDVyxxRDs7O0tBeEJrQmQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZkOWVkZmE0ZjkyOWQ2YWE0OTI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSBcImRvd25zaGlmdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfVVNFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1VTRVJTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsVXNlcnMod2hlcmU6IHsgT1I6IFt7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfV0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbZmluZFVzZXJzLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1VTRVJTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXJzID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcblxyXG4gIGNvbnN0IGZpbmRVc2Vyc0J1dENoaWxsID0gZGVib3VuY2UoZmluZFVzZXJzLCAzNTApO1xyXG5cclxuICByZXNldElkQ291bnRlcigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgIGdldENvbWJvYm94UHJvcHMsXHJcbiAgICBnZXRVc2VyUHJvcHMsXHJcbiAgICBoaWdobGlnaHRlZEluZGV4LFxyXG4gIH0gPSB1c2VDb21ib2JveCh7XHJcbiAgICB1c2VycyxcclxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgZmluZFVzZXJzQnV0Q2hpbGwoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgc2VhcmNoVGVybTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGVkVXNlckNoYW5nZSh7IHNlbGVjdGVkVXNlciB9KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogYC91c2VyLyR7c2VsZWN0ZWRVc2VyLmlkfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVzZXJUb1N0cmluZzogKHVzZXIpID0+IHVzZXI/Lm5hbWUgfHwgYGAsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hTdHlsZXM+XHJcbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gdXNlclwiLFxyXG4gICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcIlwiLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG4gICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgIHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRVc2VyUHJvcHMoeyB1c2VyIH0pfVxyXG4gICAgICAgICAgICAgIGtleT17dXNlci5pZH1cclxuICAgICAgICAgICAgICBoaWdobGlnaHRlZD17aW5kZXggPT09IGhpZ2hsaWdodGVkSW5kZXh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtpc09wZW4gJiYgIXVzZXJzLmxlbmd0aCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlNvcnJ5ICwgTm8gdXNlcnMgZm91bmQgZm9yIHtpbnB1dFZhbHVlfTwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRHJvcERvd24+XHJcbiAgICA8L1NlYXJjaFN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=