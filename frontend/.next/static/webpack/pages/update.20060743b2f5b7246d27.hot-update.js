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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");


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

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(SINGLE_USER_QUERY, {
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
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVwZGF0ZVVzZXIiLCJpZCIsInVzZVF1ZXJ5IiwiU0lOR0xFX1VTRVJfUVVFUlkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsVUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxrQkFDUkMsK0RBQVEsQ0FBQ0MsaUJBQUQsRUFBb0I7QUFDM0RDLGFBQVMsRUFBRTtBQUFFSCxRQUFFLEVBQUZBO0FBQUY7QUFEZ0QsR0FBcEIsQ0FEQTtBQUFBLE1BQ2pDSSxJQURpQyxhQUNqQ0EsSUFEaUM7QUFBQSxNQUMzQkMsS0FEMkIsYUFDM0JBLEtBRDJCO0FBQUEsTUFDcEJDLE9BRG9CLGFBQ3BCQSxPQURvQixFQUl6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFDRTtBQUFBLDBCQUFXTixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDRjtBQTBDRDs7R0E1RHVCRCxVO1VBQ1dFLHVEOzs7S0FEWEYsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuMjAwNjA3NDNiMmY1YjcyNDZkMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuXHJcbi8vIGNvbnN0IFVQREFURV9VU0VSX01VVEFUSU9OID0gZ3FsYFxyXG4vLyAgIG11dGF0aW9uIFVQREFURV9VU0VSX01VVEFUSU9OKCRpZDogSUQhLCAkbmFtZTogU3RyaW5nLCAkcGhvbmVOdW1iZXI6IEludCkge1xyXG4vLyAgICAgdXBkYXRlVXNlcihpZDogJGlkLCBkYXRhOiB7IG5hbWU6ICRuYW1lLCBwaG9uZU51bWJlcjogJHBob25lTnVtYmVyIH0pIHtcclxuLy8gICAgICAgaWRcclxuLy8gICAgICAgbmFtZVxyXG4vLyAgICAgICBwaG9uZU51bWJlclxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVVzZXIoeyBpZCB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1VTRVJfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gIH0pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IFtcclxuICAvLyAgIHVwZGF0ZVVzZXIsXHJcbiAgLy8gICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxyXG4gIC8vIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfVVNFUl9NVVRBVElPTik7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oXHJcbiAgLy8gICBkYXRhPy5Vc2VyIHx8IHtcclxuICAvLyAgICAgbmFtZTogXCJcIixcclxuICAvLyAgICAgcGhvbmVOdW1iZXI6IFwiXCIsXHJcbiAgLy8gICB9XHJcbiAgLy8gKTtcclxuICAvLyBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gIC8vIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxwPnVwZGF0ZSB7aWR9IDwvcD5cclxuICAgIC8vIDxmb3JtXHJcbiAgICAvLyAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKHtcclxuICAgIC8vICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgLy8gICAgICAgICBpZCxcclxuICAgIC8vICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyOiBpbnB1dHMucGhvbmVOdW1iZXIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAvLyAgIH19XHJcbiAgICAvLyA+XHJcbiAgICAvLyAgIDxwIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cclxuICAgIC8vICAgPGZpZWxkc2V0PlxyXG4gICAgLy8gICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgLy8gICAgICAgTmFtZVxyXG4gICAgLy8gICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgIC8vICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgLy8gICAgICAgLz5cclxuICAgIC8vICAgICA8L2xhYmVsPlxyXG5cclxuICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+XHJcbiAgICAvLyAgICAgICBQaG9uZSBOdW1iZXJcclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmUgbnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgdmFsdWU9e2lucHV0cy5waG9uZU51bWJlcn1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgPC9sYWJlbD5cclxuICAgIC8vICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgVXNlcjwvYnV0dG9uPlxyXG4gICAgLy8gICA8L2ZpZWxkc2V0PlxyXG4gICAgLy8gPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==