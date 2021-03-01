webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateUser.js":
/*!**********************************!*\
  !*** ./components/UpdateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateUser; });
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _SingleUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleUser */ "./components/SingleUser.js");



var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {\n    updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {\n      id\n      name\n      phoneNumber\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var UPDATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function UpdateUser(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_SingleUser__WEBPACK_IMPORTED_MODULE_5__["SINGLE_USER_QUERY"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error; // const [
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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: ["update ", id, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

_s(UpdateUser, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiVXBkYXRlVXNlciIsImlkIiwidXNlUXVlcnkiLCJTSU5HTEVfVVNFUl9RVUVSWSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjtBQVVlLFNBQVNDLFVBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUNDLDZEQUFELEVBQW9CO0FBQzNEQyxhQUFTLEVBQUU7QUFDVEgsUUFBRSxFQUFGQTtBQURTO0FBRGdELEdBQXBCLENBREE7QUFBQSxNQUNqQ0ksSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCLGFBQzNCQSxPQUQyQjtBQUFBLE1BQ2xCQyxLQURrQixhQUNsQkEsS0FEa0IsRUFNekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHNCQUNFO0FBQUEsMEJBQVdOLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENGO0FBMENEOztHQTdEdUJELFU7VUFDV0UsdUQ7OztLQURYRixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS4xYTAxN2FiYTdjNzc0MzY1ZmNiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgeyBTSU5HTEVfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1NpbmdsZVVzZXJcIjtcclxuXHJcbmNvbnN0IFVQREFURV9VU0VSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9VU0VSX01VVEFUSU9OKCRpZDogSUQhLCAkbmFtZTogU3RyaW5nLCAkcGhvbmVOdW1iZXI6IEludCkge1xyXG4gICAgdXBkYXRlVXNlcihpZDogJGlkLCBkYXRhOiB7IG5hbWU6ICRuYW1lLCBwaG9uZU51bWJlcjogJHBob25lTnVtYmVyIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwaG9uZU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVVzZXIoeyBpZCB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX1VTRVJfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8gY29uc3QgW1xyXG4gIC8vICAgdXBkYXRlVXNlcixcclxuICAvLyAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXHJcbiAgLy8gXSA9IHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShcclxuICAvLyAgIGRhdGE/LlVzZXIgfHwge1xyXG4gIC8vICAgICBuYW1lOiBcIlwiLFxyXG4gIC8vICAgICBwaG9uZU51bWJlcjogXCJcIixcclxuICAvLyAgIH1cclxuICAvLyApO1xyXG4gIC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPHA+dXBkYXRlIHtpZH0gPC9wPlxyXG4gICAgLy8gPGZvcm1cclxuICAgIC8vICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVVzZXIoe1xyXG4gICAgLy8gICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAvLyAgICAgICAgIGlkLFxyXG4gICAgLy8gICAgICAgICBuYW1lOiBpbnB1dHMubmFtZSxcclxuICAgIC8vICAgICAgICAgcGhvbmVOdW1iZXI6IGlucHV0cy5waG9uZU51bWJlcixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgfX1cclxuICAgIC8vID5cclxuICAgIC8vICAgPHAgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxyXG4gICAgLy8gICA8ZmllbGRzZXQ+XHJcbiAgICAvLyAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAvLyAgICAgICBOYW1lXHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgLy8gICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgIDwvbGFiZWw+XHJcblxyXG4gICAgLy8gICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVOdW1iZXJcIj5cclxuICAgIC8vICAgICAgIFBob25lIE51bWJlclxyXG4gICAgLy8gICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgLy8gICAgICAgICBpZD1cInBob25lTnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaG9uZSBudW1iZXJcIlxyXG4gICAgLy8gICAgICAgICB2YWx1ZT17aW5wdXRzLnBob25lTnVtYmVyfVxyXG4gICAgLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgLy8gICAgICAgLz5cclxuICAgIC8vICAgICA8L2xhYmVsPlxyXG4gICAgLy8gICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBVc2VyPC9idXR0b24+XHJcbiAgICAvLyAgIDwvZmllbGRzZXQ+XHJcbiAgICAvLyA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9