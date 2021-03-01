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


var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js";

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query SINGLE_USER_QUERY($id: ID!) {\n    User(where: { id: $id }) {\n      id\n      name\n      email\n      phoneNumber\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var SINGLE_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()); // const UPDATE_USER_MUTATION = gql`
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: ["update ", id, " "]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9VU0VSX1FVRVJZIiwiZ3FsIiwiVXBkYXRlVXNlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msa0RBQUgsbUJBQXZCLEMsQ0FXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0MsVUFBVCxPQUE0QjtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0U7QUFBQSwwQkFBV0EsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0Y7QUEwQ0Q7S0E1RHVCRCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS5jZmRhYWY2OTY1OGI2MTQ2ZWEzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5cclxuY29uc3QgU0lOR0xFX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0lOR0xFX1VTRVJfUVVFUlkoJGlkOiBJRCEpIHtcclxuICAgIFVzZXIod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgcGhvbmVOdW1iZXJcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyBjb25zdCBVUERBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcclxuLy8gICBtdXRhdGlvbiBVUERBVEVfVVNFUl9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJHBob25lTnVtYmVyOiBJbnQpIHtcclxuLy8gICAgIHVwZGF0ZVVzZXIoaWQ6ICRpZCwgZGF0YTogeyBuYW1lOiAkbmFtZSwgcGhvbmVOdW1iZXI6ICRwaG9uZU51bWJlciB9KSB7XHJcbi8vICAgICAgIGlkXHJcbi8vICAgICAgIG5hbWVcclxuLy8gICAgICAgcGhvbmVOdW1iZXJcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVVc2VyKHsgaWQgfSkge1xyXG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9VU0VSX1FVRVJZLCB7XHJcbiAgLy8gICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAvLyB9KTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyBjb25zdCBbXHJcbiAgLy8gICB1cGRhdGVVc2VyLFxyXG4gIC8vICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICAvLyBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKFxyXG4gIC8vICAgZGF0YT8uVXNlciB8fCB7XHJcbiAgLy8gICAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gIC8vICAgfVxyXG4gIC8vICk7XHJcbiAgLy8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8cD51cGRhdGUge2lkfSA8L3A+XHJcbiAgICAvLyA8Zm9ybVxyXG4gICAgLy8gICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlVXNlcih7XHJcbiAgICAvLyAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgIC8vICAgICAgICAgaWQsXHJcbiAgICAvLyAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjogaW5wdXRzLnBob25lTnVtYmVyLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICB9fVxyXG4gICAgLy8gPlxyXG4gICAgLy8gICA8cCBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XHJcbiAgICAvLyAgIDxmaWVsZHNldD5cclxuICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgIC8vICAgICAgIE5hbWVcclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAvLyAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgLy8gICAgICAgUGhvbmUgTnVtYmVyXHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lIG51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMucGhvbmVOdW1iZXJ9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgIDwvbGFiZWw+XHJcbiAgICAvLyAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFVzZXI8L2J1dHRvbj5cclxuICAgIC8vICAgPC9maWVsZHNldD5cclxuICAgIC8vIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=