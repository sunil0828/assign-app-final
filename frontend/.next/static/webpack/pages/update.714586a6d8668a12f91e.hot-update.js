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

var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js";


 // const SINGLE_USER_QUERY = gql`
//   query SINGLE_USER_QUERY($id: ID!) {
//     User(where: { id: $id }) {
//       id
//       name
//       email
//       phoneNumber
//     }
//   }
// `;
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
  var id = _ref.id;
  // const { data, error, loading } = useQuery(SINGLE_USER_QUERY, {
  //   variables: { id },
  // });
  // console.log(data);
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
    children: ["update", id, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVwZGF0ZVVzZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsVUFBVCxPQUE0QjtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0U7QUFBQSx5QkFBVUEsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0Y7QUEwQ0Q7S0E1RHVCRCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS43MTQ1ODZhNmQ4NjY4YTEyZjkxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5cclxuLy8gY29uc3QgU0lOR0xFX1VTRVJfUVVFUlkgPSBncWxgXHJcbi8vICAgcXVlcnkgU0lOR0xFX1VTRVJfUVVFUlkoJGlkOiBJRCEpIHtcclxuLy8gICAgIFVzZXIod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbi8vICAgICAgIGlkXHJcbi8vICAgICAgIG5hbWVcclxuLy8gICAgICAgZW1haWxcclxuLy8gICAgICAgcGhvbmVOdW1iZXJcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBVUERBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcclxuLy8gICBtdXRhdGlvbiBVUERBVEVfVVNFUl9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJHBob25lTnVtYmVyOiBJbnQpIHtcclxuLy8gICAgIHVwZGF0ZVVzZXIoaWQ6ICRpZCwgZGF0YTogeyBuYW1lOiAkbmFtZSwgcGhvbmVOdW1iZXI6ICRwaG9uZU51bWJlciB9KSB7XHJcbi8vICAgICAgIGlkXHJcbi8vICAgICAgIG5hbWVcclxuLy8gICAgICAgcGhvbmVOdW1iZXJcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVVc2VyKHsgaWQgfSkge1xyXG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9VU0VSX1FVRVJZLCB7XHJcbiAgLy8gICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAvLyB9KTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyBjb25zdCBbXHJcbiAgLy8gICB1cGRhdGVVc2VyLFxyXG4gIC8vICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICAvLyBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKFxyXG4gIC8vICAgZGF0YT8uVXNlciB8fCB7XHJcbiAgLy8gICAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gIC8vICAgfVxyXG4gIC8vICk7XHJcbiAgLy8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8cD51cGRhdGV7aWR9IDwvcD5cclxuICAgIC8vIDxmb3JtXHJcbiAgICAvLyAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKHtcclxuICAgIC8vICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgLy8gICAgICAgICBpZCxcclxuICAgIC8vICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXHJcbiAgICAvLyAgICAgICAgIHBob25lTnVtYmVyOiBpbnB1dHMucGhvbmVOdW1iZXIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAvLyAgIH19XHJcbiAgICAvLyA+XHJcbiAgICAvLyAgIDxwIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cclxuICAgIC8vICAgPGZpZWxkc2V0PlxyXG4gICAgLy8gICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgLy8gICAgICAgTmFtZVxyXG4gICAgLy8gICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgIC8vICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgLy8gICAgICAgLz5cclxuICAgIC8vICAgICA8L2xhYmVsPlxyXG5cclxuICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lTnVtYmVyXCI+XHJcbiAgICAvLyAgICAgICBQaG9uZSBOdW1iZXJcclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmUgbnVtYmVyXCJcclxuICAgIC8vICAgICAgICAgdmFsdWU9e2lucHV0cy5waG9uZU51bWJlcn1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgPC9sYWJlbD5cclxuICAgIC8vICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgVXNlcjwvYnV0dG9uPlxyXG4gICAgLy8gICA8L2ZpZWxkc2V0PlxyXG4gICAgLy8gPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==