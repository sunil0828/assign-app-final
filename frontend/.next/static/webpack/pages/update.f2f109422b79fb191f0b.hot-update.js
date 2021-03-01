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
      loading = _useQuery.loading,
      error = _useQuery.error;

  console.log(data); // const [
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
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVwZGF0ZVVzZXIiLCJpZCIsInVzZVF1ZXJ5IiwiU0lOR0xFX1VTRVJfUVVFUlkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFVBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUNDLDZEQUFELEVBQW9CO0FBQzNEQyxhQUFTLEVBQUU7QUFDVEgsUUFBRSxFQUFFQTtBQURLO0FBRGdELEdBQXBCLENBREE7QUFBQSxNQUNqQ0ksSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCLGFBQzNCQSxPQUQyQjtBQUFBLE1BQ2xCQyxLQURrQixhQUNsQkEsS0FEa0I7O0FBTXpDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQU55QyxDQU96QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFDRTtBQUFBLDBCQUFXSixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDRjtBQTBDRDs7R0E5RHVCRCxVO1VBQ1dFLHVEOzs7S0FEWEYsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuZjJmMTA5NDIyYjc5ZmIxOTFmMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IHsgU0lOR0xFX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9TaW5nbGVVc2VyXCI7XHJcblxyXG4vLyBjb25zdCBVUERBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcclxuLy8gICBtdXRhdGlvbiBVUERBVEVfVVNFUl9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJHBob25lTnVtYmVyOiBJbnQpIHtcclxuLy8gICAgIHVwZGF0ZVVzZXIoaWQ6ICRpZCwgZGF0YTogeyBuYW1lOiAkbmFtZSwgcGhvbmVOdW1iZXI6ICRwaG9uZU51bWJlciB9KSB7XHJcbi8vICAgICAgIGlkXHJcbi8vICAgICAgIG5hbWVcclxuLy8gICAgICAgcGhvbmVOdW1iZXJcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVVc2VyKHsgaWQgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9VU0VSX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyBjb25zdCBbXHJcbiAgLy8gICB1cGRhdGVVc2VyLFxyXG4gIC8vICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICAvLyBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKFxyXG4gIC8vICAgZGF0YT8uVXNlciB8fCB7XHJcbiAgLy8gICAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gIC8vICAgfVxyXG4gIC8vICk7XHJcbiAgLy8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8cD51cGRhdGUge2lkfSA8L3A+XHJcbiAgICAvLyA8Zm9ybVxyXG4gICAgLy8gICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlVXNlcih7XHJcbiAgICAvLyAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgIC8vICAgICAgICAgaWQsXHJcbiAgICAvLyAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjogaW5wdXRzLnBob25lTnVtYmVyLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICB9fVxyXG4gICAgLy8gPlxyXG4gICAgLy8gICA8cCBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XHJcbiAgICAvLyAgIDxmaWVsZHNldD5cclxuICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgIC8vICAgICAgIE5hbWVcclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAvLyAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgLy8gICAgICAgUGhvbmUgTnVtYmVyXHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lIG51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMucGhvbmVOdW1iZXJ9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgIDwvbGFiZWw+XHJcbiAgICAvLyAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFVzZXI8L2J1dHRvbj5cclxuICAgIC8vICAgPC9maWVsZHNldD5cclxuICAgIC8vIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=