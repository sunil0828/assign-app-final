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
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _SingleUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SingleUser */ "./components/SingleUser.js");




var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {\n    updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {\n      id\n      name\n      phoneNumber\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var UPDATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
function UpdateUser(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_SingleUser__WEBPACK_IMPORTED_MODULE_6__["SINGLE_USER_QUERY"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(UPDATE_USER_MUTATION, {
    variables: {
      id: id
    }
  }),
      _useMutation2 = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      updateUser = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // console.log(data);
  // const { inputs, handleChange, clearForm, resetForm } = useForm(
  //   data?.User || {
  //     name: "",
  //     phoneNumber: "",
  //   }
  // );
  // console.log(inputs);
  // if (loading) return <p>Loading...</p>;


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    children: ["update ", id, " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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

_s(UpdateUser, "aHM7aJowpE6p5rjZ1+NhgRGiR8E=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiVXBkYXRlVXNlciIsImlkIiwidXNlUXVlcnkiLCJTSU5HTEVfVVNFUl9RVUVSWSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjtBQVVlLFNBQVNDLFVBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUNDLDZEQUFELEVBQW9CO0FBQzNEQyxhQUFTLEVBQUU7QUFDVEgsUUFBRSxFQUFGQTtBQURTO0FBRGdELEdBQXBCLENBREE7QUFBQSxNQUNqQ0ksSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCLGFBQzNCQSxPQUQyQjtBQUFBLE1BQ2xCQyxLQURrQixhQUNsQkEsS0FEa0I7O0FBQUEscUJBU3JDQyxrRUFBVyxDQUFDVixvQkFBRCxFQUF1QjtBQUNwQ00sYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRkE7QUFEUztBQUR5QixHQUF2QixDQVQwQjtBQUFBO0FBQUEsTUFPdkNRLFVBUHVDO0FBQUE7QUFBQSxNQVEvQkMsVUFSK0Isa0JBUXJDTCxJQVJxQztBQUFBLE1BUVpNLFdBUlksa0JBUW5CSixLQVJtQjtBQUFBLE1BUVVLLGFBUlYsa0JBUUNOLE9BUkQsRUFjekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFDRTtBQUFBLDBCQUFXTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDRjtBQTBDRDs7R0FqRXVCRCxVO1VBQ1dFLHVELEVBUTdCTSwwRDs7O0tBVGtCUixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS42NzNiNGQzOTA2MGQyNTUzNjZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgeyBTSU5HTEVfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1NpbmdsZVVzZXJcIjtcclxuXHJcbmNvbnN0IFVQREFURV9VU0VSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9VU0VSX01VVEFUSU9OKCRpZDogSUQhLCAkbmFtZTogU3RyaW5nLCAkcGhvbmVOdW1iZXI6IEludCkge1xyXG4gICAgdXBkYXRlVXNlcihpZDogJGlkLCBkYXRhOiB7IG5hbWU6ICRuYW1lLCBwaG9uZU51bWJlcjogJHBob25lTnVtYmVyIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwaG9uZU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVVzZXIoeyBpZCB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX1VTRVJfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgW1xyXG4gICAgdXBkYXRlVXNlcixcclxuICAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXHJcbiAgXSA9IHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKFxyXG4gIC8vICAgZGF0YT8uVXNlciB8fCB7XHJcbiAgLy8gICAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gIC8vICAgfVxyXG4gIC8vICk7XHJcbiAgLy8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8cD51cGRhdGUge2lkfSA8L3A+XHJcbiAgICAvLyA8Zm9ybVxyXG4gICAgLy8gICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlVXNlcih7XHJcbiAgICAvLyAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgIC8vICAgICAgICAgaWQsXHJcbiAgICAvLyAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxyXG4gICAgLy8gICAgICAgICBwaG9uZU51bWJlcjogaW5wdXRzLnBob25lTnVtYmVyLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgLy8gICB9fVxyXG4gICAgLy8gPlxyXG4gICAgLy8gICA8cCBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XHJcbiAgICAvLyAgIDxmaWVsZHNldD5cclxuICAgIC8vICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgIC8vICAgICAgIE5hbWVcclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAvLyAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgLy8gICAgICAgUGhvbmUgTnVtYmVyXHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIGlkPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lIG51bWJlclwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXtpbnB1dHMucGhvbmVOdW1iZXJ9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgIDwvbGFiZWw+XHJcbiAgICAvLyAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFVzZXI8L2J1dHRvbj5cclxuICAgIC8vICAgPC9maWVsZHNldD5cclxuICAgIC8vIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=