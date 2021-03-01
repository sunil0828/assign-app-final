webpackHotUpdate_N_E("pages/update",{

/***/ "./components/SingleUser.js":
/*!**********************************!*\
  !*** ./components/SingleUser.js ***!
  \**********************************/
/*! exports provided: default, SINGLE_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_USER_QUERY", function() { return SINGLE_USER_QUERY; });
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\SingleUser.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query SINGLE_USER_QUERY($id: ID!) {\n    User(where: { id: $id }) {\n      id\n      name\n      email\n      phoneNumber\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SINGLE_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function SingleUser(_ref) {
  _s();

  var id = _ref.id;
  console.log(id);

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(SINGLE_USER_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }, this);
  console.log(data);
  var User = data.User;
  console.log(User);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: User.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: User.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(SingleUser, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = SingleUser;


var _c;

$RefreshReg$(_c, "SingleUser");

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

/***/ "./components/UpdateUser.js":
/*!**********************************!*\
  !*** ./components/UpdateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateUser; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _SingleUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleUser */ "./components/SingleUser.js");


var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js",
    _s = $RefreshSig$();




 // const UPDATE_USER_MUTATION = gql`
//   mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {
//     updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {
//       id
//       name
//       phoneNumber
//     }
//   }
// `;

function UpdateUser(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_SingleUser__WEBPACK_IMPORTED_MODULE_4__["SINGLE_USER_QUERY"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading; // console.log(data);
  // const [
  //   updateUser,
  //   { data: updateData, error: updateError, loading: updateLoading },
  // ] = useMutation(UPDATE_USER_MUTATION);
  // console.log(data);
  // const { inputs, handleChange, clearForm, resetForm } = useForm(
  //   data?.User || {
  //     name: "",
  //     phoneNumber: "",
  //   }
  // );
  // console.log(inputs);
  // if (loading) return <p>Loading...</p>;


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: ["update ", id, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this) // <form
  //   onSubmit={async (e) => {
  //     e.preventDefault();
  //     const res = await updateUser({
  //       variables: {
  //         id,
  //         name: inputs.name,
  //         phoneNumber: inputs.phoneNumber,
  //       },
  //     }).catch(console.error);
  //     console.log(res);
  //   }}
  // >
  //   <p error={error || updateError} />
  //   <fieldset>
  //     <label htmlFor="name">
  //       Name
  //       <input
  //         type="text"
  //         id="name"
  //         placeholder="Name"
  //         value={inputs.name}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label htmlFor="phoneNumber">
  //       Phone Number
  //       <input
  //         type="number"
  //         id="phoneNumber"
  //         placeholder="phone number"
  //         value={inputs.phoneNumber}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <button type="submit">Update User</button>
  //   </fieldset>
  // </form>
  ;
}

_s(UpdateUser, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

_c = UpdateUser;

var _c;

$RefreshReg$(_c, "UpdateUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVVc2VyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VwZGF0ZVVzZXIuanMiXSwibmFtZXMiOlsiU0lOR0xFX1VTRVJfUVVFUlkiLCJncWwiLCJTaW5nbGVVc2VyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiVXNlciIsIm5hbWUiLCJlbWFpbCIsIlVwZGF0ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxrREFBSCxtQkFBdkI7QUFXZSxTQUFTQyxVQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjs7QUFEeUMsa0JBRVJHLCtEQUFRLENBQUNOLGlCQUFELEVBQW9CO0FBQzNETyxhQUFTLEVBQUU7QUFDVEosUUFBRSxFQUFGQTtBQURTO0FBRGdELEdBQXBCLENBRkE7QUFBQSxNQUVqQ0ssSUFGaUMsYUFFakNBLElBRmlDO0FBQUEsTUFFM0JDLEtBRjJCLGFBRTNCQSxLQUYyQjtBQUFBLE1BRXBCQyxPQUZvQixhQUVwQkEsT0FGb0I7O0FBT3pDLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUcsU0FBSyxFQUFFQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWjtBQVR5QyxNQVVqQ0csSUFWaUMsR0FVeEJILElBVndCLENBVWpDRyxJQVZpQztBQVd6Q1AsU0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBbEJ1QlgsVTtVQUVXSSx1RDs7O0tBRlhKLFU7QUFvQnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNZLFVBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFOWCxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1JHLCtEQUFRLENBQUNOLDZEQUFELEVBQW9CO0FBQzNETyxhQUFTLEVBQUU7QUFBRUosUUFBRSxFQUFGQTtBQUFGO0FBRGdELEdBQXBCLENBREE7QUFBQSxNQUNqQ0ssSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLEtBRDJCLGFBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxPQURvQixhQUNwQkEsT0FEb0IsRUFJekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQ0U7QUFBQSwwQkFBV1AsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0Y7QUEwQ0Q7O0dBNUR1QlcsVTtVQUNXUix1RDs7O0tBRFhRLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLmVlYTM5ZWFiMTk3ZDAxYTRiZWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuY29uc3QgU0lOR0xFX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0lOR0xFX1VTRVJfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIFVzZXIod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgcGhvbmVOdW1iZXJcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVVc2VyKHsgaWQgfSkge1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfVVNFUl9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgeyBVc2VyIH0gPSBkYXRhO1xyXG4gIGNvbnNvbGUubG9nKFVzZXIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+e1VzZXIubmFtZX08L2gyPlxyXG4gICAgICA8cD57VXNlci5lbWFpbH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBTSU5HTEVfVVNFUl9RVUVSWSB9O1xyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCB7IFNJTkdMRV9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vU2luZ2xlVXNlclwiO1xyXG5cclxuLy8gY29uc3QgVVBEQVRFX1VTRVJfTVVUQVRJT04gPSBncWxgXHJcbi8vICAgbXV0YXRpb24gVVBEQVRFX1VTRVJfTVVUQVRJT04oJGlkOiBJRCEsICRuYW1lOiBTdHJpbmcsICRwaG9uZU51bWJlcjogSW50KSB7XHJcbi8vICAgICB1cGRhdGVVc2VyKGlkOiAkaWQsIGRhdGE6IHsgbmFtZTogJG5hbWUsIHBob25lTnVtYmVyOiAkcGhvbmVOdW1iZXIgfSkge1xyXG4vLyAgICAgICBpZFxyXG4vLyAgICAgICBuYW1lXHJcbi8vICAgICAgIHBob25lTnVtYmVyXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlVXNlcih7IGlkIH0pIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfVVNFUl9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgfSk7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gY29uc3QgW1xyXG4gIC8vICAgdXBkYXRlVXNlcixcclxuICAvLyAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXHJcbiAgLy8gXSA9IHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShcclxuICAvLyAgIGRhdGE/LlVzZXIgfHwge1xyXG4gIC8vICAgICBuYW1lOiBcIlwiLFxyXG4gIC8vICAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAvLyAgIH1cclxuICAvLyApO1xyXG4gIC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPHA+dXBkYXRlIHtpZH0gPC9wPlxyXG4gICAgLy8gPGZvcm1cclxuICAgIC8vICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVVzZXIoe1xyXG4gICAgLy8gICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAvLyAgICAgICAgIGlkLFxyXG4gICAgLy8gICAgICAgICBuYW1lOiBpbnB1dHMubmFtZSxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXI6IGlucHV0cy5waG9uZU51bWJlcixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgfX1cclxuICAgIC8vID5cclxuICAgIC8vICAgPHAgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxyXG4gICAgLy8gICA8ZmllbGRzZXQ+XHJcbiAgICAvLyAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAvLyAgICAgICBOYW1lXHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgLy8gICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgIDwvbGFiZWw+XHJcblxyXG4gICAgLy8gICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVOdW1iZXJcIj5cclxuICAgIC8vICAgICAgIFBob25lIE51bWJlclxyXG4gICAgLy8gICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgLy8gICAgICAgICBpZD1cInBob25lTnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaG9uZSBudW1iZXJcIlxyXG4gICAgLy8gICAgICAgICB2YWx1ZT17aW5wdXRzLnBob25lTnVtYmVyfVxyXG4gICAgLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgLy8gICAgICAgLz5cclxuICAgIC8vICAgICA8L2xhYmVsPlxyXG4gICAgLy8gICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBVc2VyPC9idXR0b24+XHJcbiAgICAvLyAgIDwvZmllbGRzZXQ+XHJcbiAgICAvLyA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9