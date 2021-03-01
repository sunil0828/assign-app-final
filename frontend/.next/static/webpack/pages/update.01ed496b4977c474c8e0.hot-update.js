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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");




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
      updateLoading = _useMutation2$.loading;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])(data.User),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  console.log(inputs);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: function onSubmit() {},
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: "Add user account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: ["User added with ", data.createUser.email, "...!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 30
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "User Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "phoneNumber",
        children: ["phoneNumber", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "phoneNumber",
          name: "phoneNumber",
          id: "phoneNumber",
          placeholder: "User phoneNumber",
          value: inputs.phoneNumber,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        type: "submit",
        children: "Update User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(UpdateUser, "mQzU4+CiW09cajVnoyE90vznDNg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiVXBkYXRlVXNlciIsImlkIiwidXNlUXVlcnkiLCJTSU5HTEVfVVNFUl9RVUVSWSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsIlVzZXIiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXNlciIsImVtYWlsIiwibmFtZSIsInBob25lTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGtEQUFILG1CQUExQjtBQVVlLFNBQVNDLFVBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUNDLDZEQUFELEVBQW9CO0FBQzNEQyxhQUFTLEVBQUU7QUFDVEgsUUFBRSxFQUFGQTtBQURTO0FBRGdELEdBQXBCLENBREE7QUFBQSxNQUNqQ0ksSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCLGFBQzNCQSxPQUQyQjtBQUFBLE1BQ2xCQyxLQURrQixhQUNsQkEsS0FEa0I7O0FBQUEscUJBU3JDQyxrRUFBVyxDQUFDVixvQkFBRCxFQUF1QjtBQUNwQ00sYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRkE7QUFEUztBQUR5QixHQUF2QixDQVQwQjtBQUFBO0FBQUEsTUFPdkNRLFVBUHVDO0FBQUE7QUFBQSxNQVEvQkMsVUFSK0Isa0JBUXJDTCxJQVJxQztBQUFBLE1BUVpNLFdBUlksa0JBUW5CSixLQVJtQjtBQUFBLE1BUVVLLGFBUlYsa0JBUUNOLE9BUkQ7O0FBQUEsaUJBY0dPLDREQUFPLENBQUNSLElBQUksQ0FBQ1MsSUFBTixDQWRWO0FBQUEsTUFjakNDLE1BZGlDLFlBY2pDQSxNQWRpQztBQUFBLE1BY3pCQyxZQWR5QixZQWN6QkEsWUFkeUI7QUFBQSxNQWNYQyxTQWRXLFlBY1hBLFNBZFc7O0FBZXpDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBLE1BQUlULE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWIsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUF4QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLFdBQUssRUFBRUMsS0FBSyxJQUFJSTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGlCQUNHLENBQUFOLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFZSxVQUFOLGtCQUFvQjtBQUFBLHVDQUFvQmYsSUFBSSxDQUFDZSxVQUFMLENBQWdCQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEdkIsZUFFRTtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsd0NBRUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsWUFBRSxFQUFDLE1BSEw7QUFJRSxxQkFBVyxFQUFDLFdBSmQ7QUFLRSxzQkFBWSxFQUFDLE1BTGY7QUFNRSxlQUFLLEVBQUVOLE1BQU0sQ0FBQ08sSUFOaEI7QUFPRSxrQkFBUSxFQUFFTjtBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFjRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUEsa0NBQ2MsR0FEZCxlQUVFO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxjQUFJLEVBQUMsYUFGUDtBQUdFLFlBQUUsRUFBQyxhQUhMO0FBSUUscUJBQVcsRUFBQyxrQkFKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDUSxXQUxoQjtBQU1FLGtCQUFRLEVBQUVQO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQTBCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQXBEdUJoQixVO1VBQ1dFLHVELEVBUTdCTSwwRCxFQUt3Q0ssb0Q7OztLQWR0QmIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuMDFlZDQ5NmI0OTc3YzQ3NGM4ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IHsgU0lOR0xFX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9TaW5nbGVVc2VyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcblxyXG5jb25zdCBVUERBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfVVNFUl9NVVRBVElPTigkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJHBob25lTnVtYmVyOiBJbnQpIHtcclxuICAgIHVwZGF0ZVVzZXIoaWQ6ICRpZCwgZGF0YTogeyBuYW1lOiAkbmFtZSwgcGhvbmVOdW1iZXI6ICRwaG9uZU51bWJlciB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGhvbmVOdW1iZXJcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVVc2VyKHsgaWQgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9VU0VSX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtcclxuICAgIHVwZGF0ZVVzZXIsXHJcbiAgICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxyXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfVVNFUl9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oZGF0YS5Vc2VyKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17KCkgPT4ge319PlxyXG4gICAgICA8aDI+QWRkIHVzZXIgYWNjb3VudDwvaDI+XHJcbiAgICAgIDxwIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5jcmVhdGVVc2VyICYmIDxwPlVzZXIgYWRkZWQgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfS4uLiE8L3A+fVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgICAgICAgcGhvbmVOdW1iZXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBwaG9uZU51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBVc2VyPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9