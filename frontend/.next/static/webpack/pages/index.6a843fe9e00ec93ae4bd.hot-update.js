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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);






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




var SEARCH_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
function Search() {
  _s();

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useLazyQuery"])(SEARCH_USERS_QUERY, {
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
    itemToString: function itemToString(item) {
      return (item === null || item === void 0 ? void 0 : item.name) || "";
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getUserProps = _useCombobox.getUserProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an user",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", _objectSpread({}, getMenuProps()), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Search, "UYKzFnOeURnppa8KfEvRzH2Xecc=", true, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useLazyQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1VTRVJTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kVXNlcnMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXNlcnMiLCJzZWFyY2hUZXJtcyIsImZpbmRVc2Vyc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImlucHV0VmFsdWUiLCJvblNlbGVjdGVkVXNlckNoYW5nZSIsInNlbGVjdGVkVXNlciIsInB1c2giLCJwYXRobmFtZSIsImlkIiwiaXRlbVRvU3RyaW5nIiwiaXRlbSIsIm5hbWUiLCJpc09wZW4iLCJnZXRNZW51UHJvcHMiLCJnZXRDb21ib2JveFByb3BzIiwiZ2V0VXNlclByb3BzIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImdldElucHV0UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7QUFTZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7O0FBRCtCLHNCQUdlQyxtRUFBWSxDQUN4REwsa0JBRHdELEVBRXhEO0FBQ0VNLGVBQVcsRUFBRTtBQURmLEdBRndELENBSDNCO0FBQUE7QUFBQSxNQUd4QkMsU0FId0I7QUFBQTtBQUFBLE1BR1hDLE9BSFcsbUJBR1hBLE9BSFc7QUFBQSxNQUdGQyxJQUhFLG1CQUdGQSxJQUhFO0FBQUEsTUFHSUMsS0FISixtQkFHSUEsS0FISjs7QUFVL0IsTUFBTUMsS0FBSyxHQUFHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxXQUFOLEtBQXFCLEVBQW5DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ1AsU0FBRCxFQUFZLEdBQVosQ0FBbEM7QUFFQVEsZ0JBQWM7O0FBZGlCLHFCQXVCM0JDLFdBQVcsQ0FBQztBQUNkTCxTQUFLLEVBQUxBLEtBRGM7QUFFZE0sc0JBRmMsZ0NBRU87QUFDbkJKLHVCQUFpQixDQUFDO0FBQ2hCSyxpQkFBUyxFQUFFO0FBQ1RDLG9CQUFVLEVBQUVDO0FBREg7QUFESyxPQUFELENBQWpCO0FBS0QsS0FSYTtBQVNkQyx3QkFUYyxzQ0FTeUI7QUFBQSxVQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3JDbkIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZO0FBQ1ZDLGdCQUFRLGtCQUFXRixZQUFZLENBQUNHLEVBQXhCO0FBREUsT0FBWjtBQUdELEtBYmE7QUFjZEMsZ0JBQVksRUFBRSxzQkFBQ0MsSUFBRDtBQUFBLGFBQVUsQ0FBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVDLElBQU4sT0FBVjtBQUFBO0FBZEEsR0FBRCxDQXZCZ0I7QUFBQSxNQWlCN0JDLE1BakI2QixnQkFpQjdCQSxNQWpCNkI7QUFBQSxNQWtCN0JULFVBbEI2QixnQkFrQjdCQSxVQWxCNkI7QUFBQSxNQW1CN0JVLFlBbkI2QixnQkFtQjdCQSxZQW5CNkI7QUFBQSxNQW9CN0JDLGdCQXBCNkIsZ0JBb0I3QkEsZ0JBcEI2QjtBQUFBLE1BcUI3QkMsWUFyQjZCLGdCQXFCN0JBLFlBckI2QjtBQUFBLE1Bc0I3QkMsZ0JBdEI2QixnQkFzQjdCQSxnQkF0QjZCOztBQXVDL0Isc0JBQ0U7QUFBQSw0QkFDRSw0R0FBU0YsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0UsZ0dBQ01HLGFBQWEsQ0FBQztBQUNoQkMsWUFBSSxFQUFFLFFBRFU7QUFFaEJDLG1CQUFXLEVBQUUsb0JBRkc7QUFHaEJYLFVBQUUsRUFBRSxRQUhZO0FBSWhCWSxpQkFBUyxFQUFFN0IsT0FBTyxHQUFHLFNBQUgsR0FBZTtBQUpqQixPQUFELENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSw4RkFBU3NCLFlBQVksRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUEsa0JBREY7QUFlRDs7R0F0RHVCNUIsTTtVQUNQRSxpRSxFQUUrQkMsMkQ7OztLQUh4QkgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTg0M2ZlOWUwMGVjOTNhZTRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5cclxuY29uc3QgU0VBUkNIX1VTRVJTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNFQVJDSF9VU0VSU19RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xyXG4gICAgc2VhcmNoVGVybXM6IGFsbFVzZXJzKHdoZXJlOiB7IE9SOiBbeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1dIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2ZpbmRVc2VycywgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuICAgIFNFQVJDSF9VU0VSU19RVUVSWSxcclxuICAgIHtcclxuICAgICAgZmV0Y2hQb2xpY3k6IFwibm8tY2FjaGVcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB1c2VycyA9IGRhdGE/LnNlYXJjaFRlcm1zIHx8IFtdO1xyXG5cclxuICBjb25zdCBmaW5kVXNlcnNCdXRDaGlsbCA9IGRlYm91bmNlKGZpbmRVc2VycywgMzUwKTtcclxuXHJcbiAgcmVzZXRJZENvdW50ZXIoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaXNPcGVuLFxyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGdldE1lbnVQcm9wcyxcclxuICAgIGdldENvbWJvYm94UHJvcHMsXHJcbiAgICBnZXRVc2VyUHJvcHMsXHJcbiAgICBoaWdobGlnaHRlZEluZGV4LFxyXG4gIH0gPSB1c2VDb21ib2JveCh7XHJcbiAgICB1c2VycyxcclxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgZmluZFVzZXJzQnV0Q2hpbGwoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgc2VhcmNoVGVybTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGVkVXNlckNoYW5nZSh7IHNlbGVjdGVkVXNlciB9KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogYC91c2VyLyR7c2VsZWN0ZWRVc2VyLmlkfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGl0ZW1Ub1N0cmluZzogKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgfHwgYGAsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gdXNlclwiLFxyXG4gICAgICAgICAgICBpZDogXCJzZWFyY2hcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcIlwiLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgey4uLmdldE1lbnVQcm9wcygpfT48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==