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
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _SingleUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SingleUser */ "./components/SingleUser.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");






var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\UpdateUser.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {\n    updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {\n      id\n      name\n      phoneNumber\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var UPDATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
function UpdateUser(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_SingleUser__WEBPACK_IMPORTED_MODULE_8__["SINGLE_USER_QUERY"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(UPDATE_USER_MUTATION),
      _useMutation2 = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateUser = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])(data === null || data === void 0 ? void 0 : data.User),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  console.log(inputs);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return C_Users_SunilL_Downloads_assign_app_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateUser({
                  variables: {
                    id: id,
                    name: inputs.name,
                    phoneNumber: inputs.phoneNumber
                  }
                })["catch"](console.error);

              case 3:
                res = _context.sent;
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Add user account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: ["User added with ", data.createUser.email, "...!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 30
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "User Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "phoneNumber",
        children: ["phoneNumber", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "number",
          name: "phoneNumber",
          id: "phoneNumber",
          placeholder: "User phoneNumber",
          value: inputs.phoneNumber,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(UpdateUser, "mQzU4+CiW09cajVnoyE90vznDNg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVVc2VyLmpzIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiVXBkYXRlVXNlciIsImlkIiwidXNlUXVlcnkiLCJTSU5HTEVfVVNFUl9RVUVSWSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsIlVzZXIiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInBob25lTnVtYmVyIiwicmVzIiwiY3JlYXRlVXNlciIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msa0RBQUgsbUJBQTFCO0FBVWUsU0FBU0MsVUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxrQkFDUkMsK0RBQVEsQ0FBQ0MsNkRBQUQsRUFBb0I7QUFDM0RDLGFBQVMsRUFBRTtBQUNUSCxRQUFFLEVBQUZBO0FBRFM7QUFEZ0QsR0FBcEIsQ0FEQTtBQUFBLE1BQ2pDSSxJQURpQyxhQUNqQ0EsSUFEaUM7QUFBQSxNQUMzQkMsT0FEMkIsYUFDM0JBLE9BRDJCO0FBQUEsTUFDbEJDLEtBRGtCLGFBQ2xCQSxLQURrQjs7QUFBQSxxQkFTckNDLGtFQUFXLENBQUNWLG9CQUFELENBVDBCO0FBQUE7QUFBQSxNQU92Q1csVUFQdUM7QUFBQTtBQUFBLE1BUS9CQyxVQVIrQixrQkFRckNMLElBUnFDO0FBQUEsTUFRWk0sV0FSWSxrQkFRbkJKLEtBUm1CO0FBQUEsTUFRVUssYUFSVixrQkFRQ04sT0FSRDs7QUFBQSxpQkFVR08sNERBQU8sQ0FBQ1IsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVTLElBQVAsQ0FWVjtBQUFBLE1BVWpDQyxNQVZpQyxZQVVqQ0EsTUFWaUM7QUFBQSxNQVV6QkMsWUFWeUIsWUFVekJBLFlBVnlCO0FBQUEsTUFVWEMsU0FWVyxZQVVYQSxTQVZXOztBQVd6Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxNQUFJVCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUViLHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsWUFBUTtBQUFBLHlWQUFFLGlCQUFPYyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSxpQkFBQyxDQUFDQyxjQUFGO0FBRFE7QUFBQSx1QkFFVVosVUFBVSxDQUFDO0FBQzNCTCwyQkFBUyxFQUFFO0FBQ1RILHNCQUFFLEVBQUZBLEVBRFM7QUFFVHFCLHdCQUFJLEVBQUVQLE1BQU0sQ0FBQ08sSUFGSjtBQUdUQywrQkFBVyxFQUFFUixNQUFNLENBQUNRO0FBSFg7QUFEZ0IsaUJBQUQsQ0FBVixVQU1UTCxPQUFPLENBQUNYLEtBTkMsQ0FGVjs7QUFBQTtBQUVGaUIsbUJBRkU7QUFTUk4sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFaOztBQVRRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVjtBQUFBLDRCQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFjRTtBQUFHLFdBQUssRUFBRWpCLEtBQUssSUFBSUk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBZUU7QUFBQSxpQkFDRyxDQUFBTixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRW9CLFVBQU4sa0JBQW9CO0FBQUEsdUNBQW9CcEIsSUFBSSxDQUFDb0IsVUFBTCxDQUFnQkMsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHZCLGVBRUU7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUUsRUFBQyxNQUhMO0FBSUUscUJBQVcsRUFBQyxXQUpkO0FBS0Usc0JBQVksRUFBQyxNQUxmO0FBTUUsZUFBSyxFQUFFWCxNQUFNLENBQUNPLElBTmhCO0FBT0Usa0JBQVEsRUFBRU47QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBY0U7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLGtDQUNjLEdBRGQsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxZQUFFLEVBQUMsYUFITDtBQUlFLHFCQUFXLEVBQUMsa0JBSmQ7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ1EsV0FMaEI7QUFNRSxrQkFBUSxFQUFFUDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUEwQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0E1RHVCaEIsVTtVQUNXRSx1RCxFQVE3Qk0sMEQsRUFDd0NLLG9EOzs7S0FWdEJiLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLjA0MjZiMTI2ZTgwOGRmZDgxMDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCB7IFNJTkdMRV9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vU2luZ2xlVXNlclwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5cclxuY29uc3QgVVBEQVRFX1VTRVJfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1VTRVJfTVVUQVRJT04oJGlkOiBJRCEsICRuYW1lOiBTdHJpbmcsICRwaG9uZU51bWJlcjogSW50KSB7XHJcbiAgICB1cGRhdGVVc2VyKGlkOiAkaWQsIGRhdGE6IHsgbmFtZTogJG5hbWUsIHBob25lTnVtYmVyOiAkcGhvbmVOdW1iZXIgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob25lTnVtYmVyXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlVXNlcih7IGlkIH0pIHtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShTSU5HTEVfVVNFUl9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBbXHJcbiAgICB1cGRhdGVVc2VyLFxyXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcclxuICBdID0gdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pO1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShkYXRhPy5Vc2VyKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlVXNlcih7XHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogaW5wdXRzLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDI+QWRkIHVzZXIgYWNjb3VudDwvaDI+XHJcbiAgICAgIDxwIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIHtkYXRhPy5jcmVhdGVVc2VyICYmIDxwPlVzZXIgYWRkZWQgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfS4uLiE8L3A+fVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZU51bWJlclwiPlxyXG4gICAgICAgICAgcGhvbmVOdW1iZXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZU51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgcGhvbmVOdW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBob25lTnVtYmVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgVXNlcjwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==