webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");






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






var SEARCH_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"])(SEARCH_USERS_QUERY, {
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
  Object(downshift__WEBPACK_IMPORTED_MODULE_6__["resetIdCounter"])();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"])({
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
    userToString: function userToString(user) {
      return (user === null || user === void 0 ? void 0 : user.name) || "";
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getUserProps = _useCombobox.getUserProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_9__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an user",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_9__["DropDown"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && users.map(function (user, index) {
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_9__["DropDownItem"], _objectSpread(_objectSpread({}, getUserProps({
          user: user
        })), {}, {
          key: user.id,
          highlighted: index === highlightedIndex,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          },
          __self: _this
        }), user.name);
      }), isOpen && !users.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_9__["DropDownItem"], {
        children: ["Sorry , No users found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(Search, "UYKzFnOeURnppa8KfEvRzH2Xecc=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"], downshift__WEBPACK_IMPORTED_MODULE_6__["useCombobox"]];
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/compute-scroll-into-view/dist/index.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.module.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["default"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentNode)===f){s.push(p);break}p===document.body&&n(p)&&!n(document.documentElement)||n(p,a)&&s.push(p)}for(var g=o.visualViewport?o.visualViewport.width:innerWidth,m=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,M=W.right,E=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?E:y+b/2,I="center"===u?V+H/2:"end"===u?M:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&E<=m&&M<=g&&y>=R&&E<=Y&&V>=L&&M<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),N=parseInt(S.borderTopWidth,10),q=parseInt(S.borderRightWidth,10),z=parseInt(S.borderBottomWidth,10),A=0,F=0,G="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-q:0,J="offsetHeight"in k?k.offsetHeight-k.clientHeight-N-z:0;if(f===k)A="start"===d?x:"end"===d?x-m:"nearest"===d?r(v,v+m,m,N,z,v+x,v+x+b,b):x-m/2,F="start"===u?I:"center"===u?I-g/2:"end"===u?I-g:r(w,w+g,g,j,q,w+I,w+I+H,H),A=Math.max(0,A+v),F=Math.max(0,F+w);else{A="start"===d?x-R-N:"end"===d?x-Y+z+J:"nearest"===d?r(R,Y,D,N,z+J,x,x+b,b):x-(R+D/2)+J/2,F="start"===u?I-L-j:"center"===u?I-(L+O/2)+G/2:"end"===u?I-X+q+G:r(L,X,O,j,q+G,I,I+H,H);var K=k.scrollLeft,P=k.scrollTop;x+=P-(A=Math.max(0,Math.min(P+A,k.scrollHeight-D+J))),I+=K-(F=Math.max(0,Math.min(K+F,k.scrollWidth-O+G)))}C.push({el:k,top:A,left:F})}return C});
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/downshift/dist/downshift.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/downshift/dist/downshift.esm.js ***!
  \******************************************************/
/*! exports provided: default, resetIdCounter, useCombobox, useMultipleSelection, useSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return resetIdCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCombobox", function() { return useCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultipleSelection", function() { return useMultipleSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelect", function() { return useSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/dist/index.module.js");









var idCounter = 0;
/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */

function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */


function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }

  var actions = Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__["default"])(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child) {
  return parent === child || parent.contains && parent.contains(child);
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}

function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Resets idCounter to 0. Used for SSR.
 */


function resetIdCounter() {
  idCounter = 0;
}
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}
/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */


function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ?
  /* istanbul ignore next (preact) */
  arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */


function isDOMElement(element) {
  // then we assume this is react
  return typeof element.type === 'string';
}
/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */


function getElementProps(element) {
  return element.props;
}
/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */


function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */

function pickState(state) {
  if (state === void 0) {
    state = {};
  }

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */


function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */


function isControlledProp(props, key) {
  return props[key] !== undefined;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */


function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }

  if (itemCount === 0) {
    return -1;
  }

  var itemsLastIndex = itemCount - 1;

  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }

  var newIndex = baseIndex + moveAmount;

  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }

  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);

  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }

  return nonDisabledNewIndex;
}
/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */


function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);

  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }

  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
        return _index;
      }
    }
  }

  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }

  return -1;
}
/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Document} document The document.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */


function targetWithinDownshift(target, downshiftElements, document, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }

  return downshiftElements.some(function (contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
  });
}

function validateControlledUnchanged(state, prevProps, nextProps) {
  if (false) {}

  var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  Object.keys(state).forEach(function (propKey) {
    if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
    } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
    }
  });
}

var cleanupStatus = debounce(function () {
  getStatusDiv().textContent = '';
}, 500);
/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */

function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus();
}
/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */


function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }

  var statusDiv = documentProp.getElementById('a11y-status-message');

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

var unknown =  true ? '__autocomplete_unknown__' : undefined;
var mouseUp =  true ? '__autocomplete_mouseup__' : undefined;
var itemMouseEnter =  true ? '__autocomplete_item_mouseenter__' : undefined;
var keyDownArrowUp =  true ? '__autocomplete_keydown_arrow_up__' : undefined;
var keyDownArrowDown =  true ? '__autocomplete_keydown_arrow_down__' : undefined;
var keyDownEscape =  true ? '__autocomplete_keydown_escape__' : undefined;
var keyDownEnter =  true ? '__autocomplete_keydown_enter__' : undefined;
var keyDownHome =  true ? '__autocomplete_keydown_home__' : undefined;
var keyDownEnd =  true ? '__autocomplete_keydown_end__' : undefined;
var clickItem =  true ? '__autocomplete_click_item__' : undefined;
var blurInput =  true ? '__autocomplete_blur_input__' : undefined;
var changeInput =  true ? '__autocomplete_change_input__' : undefined;
var keyDownSpaceButton =  true ? '__autocomplete_keydown_space_button__' : undefined;
var clickButton =  true ? '__autocomplete_click_button__' : undefined;
var blurButton =  true ? '__autocomplete_blur_button__' : undefined;
var controlledPropUpdatedSelectedItem =  true ? '__autocomplete_controlled_prop_updated_selected_item__' : undefined;
var touchEnd =  true ? '__autocomplete_touchend__' : undefined;

var stateChangeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  keyDownHome: keyDownHome,
  keyDownEnd: keyDownEnd,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchEnd: touchEnd
});

var Downshift =
/*#__PURE__*/
function () {
  var Downshift =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Downshift, _Component);

    function Downshift(_props) {
      var _this = _Component.call(this, _props) || this;

      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";

      _this.getItemId = _this.props.getItemId || function (index) {
        return _this.id + "-item-" + index;
      };

      _this.input = null;
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];

      _this.internalSetTimeout = function (fn, time) {
        var id = setTimeout(function () {
          _this.timeoutIds = _this.timeoutIds.filter(function (i) {
            return i !== id;
          });
          fn();
        }, time);

        _this.timeoutIds.push(id);
      };

      _this.setItemCount = function (count) {
        _this.itemCount = count;
      };

      _this.unsetItemCount = function () {
        _this.itemCount = null;
      };

      _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }

        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          highlightedIndex: highlightedIndex
        }, otherStateToSet));
      };

      _this.clearSelection = function (cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: '',
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };

      _this.selectItem = function (item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };

      _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];

        if (item == null) {
          return;
        }

        _this.selectItem(item, otherStateToSet, cb);
      };

      _this.selectHighlightedItem = function (otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };

      _this.internalSetState = function (stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === 'function'; // we want to call `onInputValueChange` before the `setState` call
        // so someone controlling the `inputValue` state gets notified of
        // the input change as soon as possible. This avoids issues with
        // preserving the cursor position.
        // See https://github.com/downshift-js/downshift/issues/217 for more info.

        if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
          _this.props.onInputValueChange(stateToSet.inputValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.getStateAndHelpers(), stateToSet));
        }

        return _this.setState(function (state) {
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet; // Your own function that could modify the state that will be set.

          newStateToSet = _this.props.stateReducer(state, newStateToSet); // checks if an item is selected, regardless of if it's different from
          // what was selected before
          // used to determine if onSelect and onChange callbacks should be called

          isItemSelected = newStateToSet.hasOwnProperty('selectedItem'); // this keeps track of the object we want to call with setState

          var nextState = {}; // this is just used to tell whether the state changed

          var nextFullState = {}; // we need to call on change if the outside world is controlling any of our state
          // and we're trying to update that state. OR if the selection has changed and we're
          // trying to update the selection

          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }

          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(function (key) {
            // onStateChangeArg should only have the state that is
            // actually changing
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            } // the type is useful for the onStateChangeArg
            // but we don't actually want to set it in internal state.
            // this is an undocumented feature for now... Not all internalSetState
            // calls support it and I'm not certain we want them to yet.
            // But it enables users controlling the isOpen state to know when
            // the isOpen state changes due to mouseup events which is quite handy.


            if (key === 'type') {
              return;
            }

            nextFullState[key] = newStateToSet[key]; // if it's coming from props, then we don't care to set it internally

            if (!isControlledProp(_this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          }); // if stateToSet is a function, then we weren't able to call onInputValueChange
          // earlier, so we'll call it now that we know what the inputValue state will be.

          if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
            _this.props.onInputValueChange(newStateToSet.inputValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.getStateAndHelpers(), newStateToSet));
          }

          return nextState;
        }, function () {
          // call the provided callback if it's a function
          cbToCb(cb)(); // only call the onStateChange and onChange callbacks if
          // we have relevant information to pass them.

          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;

          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }

          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }

          if (onChangeArg !== undefined) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          } // this is currently undocumented and therefore subject to change
          // We'll try to not break it, but just be warned.


          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };

      _this.rootRef = function (node) {
        return _this._rootNode = node;
      };

      _this.getRootProps = function (_temp, _temp2) {
        var _extends2;

        var _ref = _temp === void 0 ? {} : _temp,
            _ref$refKey = _ref.refKey,
            refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
            ref = _ref.ref,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["refKey", "ref"]);

        var _ref2 = _temp2 === void 0 ? {} : _temp2,
            _ref2$suppressRefErro = _ref2.suppressRefError,
            suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

        // this is used in the render to know whether the user has called getRootProps.
        // It uses that to know whether to apply the props automatically
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;

        var _this$getState = _this.getState(),
            isOpen = _this$getState.isOpen;

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
      };

      _this.keyDownHandlers = {
        ArrowDown: function ArrowDown(event) {
          var _this2 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function () {
              var itemCount = _this2.getItemCount();

              if (itemCount > 0) {
                var _this2$getState = _this2.getState(),
                    highlightedIndex = _this2$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, function (index) {
                  return _this2.getItemNodeFromIndex(index);
                });

                _this2.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp: function ArrowUp(event) {
          var _this3 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function () {
              var itemCount = _this3.getItemCount();

              if (itemCount > 0) {
                var _this3$getState = _this3.getState(),
                    highlightedIndex = _this3$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, function (index) {
                  return _this3.getItemNodeFromIndex(index);
                });

                _this3.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter: function Enter(event) {
          if (event.which === 229) {
            return;
          }

          var _this$getState2 = this.getState(),
              isOpen = _this$getState2.isOpen,
              highlightedIndex = _this$getState2.highlightedIndex;

          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);

            if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
              return;
            }

            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape: function Escape(event) {
          event.preventDefault();
          this.reset(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            type: keyDownEscape
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ''
          }));
        }
      };
      _this.buttonKeyDownHandlers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.keyDownHandlers, {
        ' ': function _(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      });
      _this.inputKeyDownHandlers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.keyDownHandlers, {
        Home: function Home(event) {
          var _this4 = this;

          event.preventDefault();
          var itemCount = this.getItemCount();

          var _this$getState3 = this.getState(),
              isOpen = _this$getState3.isOpen;

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting downwards from 0 if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, function (index) {
            return _this4.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End: function End(event) {
          var _this5 = this;

          event.preventDefault();
          var itemCount = this.getItemCount();

          var _this$getState4 = this.getState(),
              isOpen = _this$getState4.isOpen;

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting upwards from last index if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, function (index) {
            return _this5.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      });

      _this.getToggleButtonProps = function (_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3,
            onClick = _ref3.onClick,
            onPress = _ref3.onPress,
            onKeyDown = _ref3.onKeyDown,
            onKeyUp = _ref3.onKeyUp,
            onBlur = _ref3.onBlur,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]);

        var _this$getState5 = _this.getState(),
            isOpen = _this$getState5.isOpen;

        var enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: 'button',
          role: 'button',
          'aria-label': isOpen ? 'close menu' : 'open menu',
          'aria-haspopup': true,
          'data-toggle': true
        }, eventHandlers, rest);
      };

      _this.buttonHandleKeyUp = function (event) {
        // Prevent click event from emitting in Firefox
        event.preventDefault();
      };

      _this.buttonHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), event);
        }
      };

      _this.buttonHandleClick = function (event) {
        event.preventDefault(); // handle odd case for Safari and Firefox which
        // don't give the button the focus properly.

        /* istanbul ignore if (can't reasonably test this) */

        if ( _this.props.environment.document.activeElement === _this.props.environment.document.body) {
          event.target.focus();
        } // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
        // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
        // when building for production and should therefore have no impact on production code.


        if (false) {} else {
          // Ensure that toggle of menu occurs after the potential blur event in iOS
          _this.internalSetTimeout(function () {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };

      _this.buttonHandleBlur = function (event) {
        var blurTarget = event.target; // Save blur target for comparison with activeElement later
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element

        _this.internalSetTimeout(function () {
          if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
          ) {
              _this.reset({
                type: blurButton
              });
            }
        });
      };

      _this.getLabelProps = function (props) {
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };

      _this.getInputProps = function (_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4,
            onKeyDown = _ref4.onKeyDown,
            onBlur = _ref4.onBlur,
            onChange = _ref4.onChange,
            onInput = _ref4.onInput,
            onChangeText = _ref4.onChangeText,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"]);

        var onChangeKey;
        var eventHandlers = {};
        /* istanbul ignore next (preact) */

        onChangeKey = 'onChange';

        var _this$getState6 = _this.getState(),
            inputValue = _this$getState6.inputValue,
            isOpen = _this$getState6.isOpen,
            highlightedIndex = _this$getState6.highlightedIndex;

        if (!rest.disabled) {
          var _eventHandlers;

          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }
        /* istanbul ignore if (react-native) */


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          'aria-autocomplete': 'list',
          'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          'aria-controls': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: 'off',
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, rest);
      };

      _this.inputHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), event);
        }
      };

      _this.inputHandleChange = function (event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };

      _this.inputHandleBlur = function () {
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
        _this.internalSetTimeout(function () {
          var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);

          if (!_this.isMouseDown && !downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };

      _this.menuRef = function (node) {
        _this._menuNode = node;
      };

      _this.getMenuProps = function (_temp5, _temp6) {
        var _extends3;

        var _ref5 = _temp5 === void 0 ? {} : _temp5,
            _ref5$refKey = _ref5.refKey,
            refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
            ref = _ref5.ref,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["refKey", "ref"]);

        var _ref6 = _temp6 === void 0 ? {} : _temp6,
            _ref6$suppressRefErro = _ref6.suppressRefError,
            suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;

        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };

      _this.getItemProps = function (_temp7) {
        var _enabledEventHandlers;

        var _ref7 = _temp7 === void 0 ? {} : _temp7,
            onMouseMove = _ref7.onMouseMove,
            onMouseDown = _ref7.onMouseDown,
            onClick = _ref7.onClick,
            onPress = _ref7.onPress,
            index = _ref7.index,
            _ref7$item = _ref7.item,
            item = _ref7$item === void 0 ?  false ?
        /* istanbul ignore next */
        undefined : requiredProp('getItemProps', 'item') : _ref7$item,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);

        if (index === undefined) {
          _this.items.push(item);

          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }

        var onSelectKey = 'onClick';
        var customClickHandler = onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, function () {
            if (index === _this.getState().highlightedIndex) {
              return;
            }

            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            }); // We never want to manually scroll when changing state based
            // on `onMouseMove` because we will be moving the element out
            // from under the user which is currently scrolling/moving the
            // cursor


            _this.avoidScrolling = true;

            _this.internalSetTimeout(function () {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
            // This prevents the activeElement from being changed
            // to the item so it can remain with the current activeElement
            // which is a more common use case.
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers); // Passing down the onMouseDown handler to prevent redirect
        // of the activeElement if clicking on disabled items

        var eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          id: _this.getItemId(index),
          role: 'option',
          'aria-selected': _this.getState().highlightedIndex === index
        }, eventHandlers, rest);
      };

      _this.clearItems = function () {
        _this.items = [];
      };

      _this.reset = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref8) {
          var selectedItem = _ref8.selectedItem;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };

      _this.toggleMenu = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref9) {
          var isOpen = _ref9.isOpen;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, otherStateToSet);
        }, function () {
          var _this$getState7 = _this.getState(),
              isOpen = _this$getState7.isOpen,
              highlightedIndex = _this$getState7.highlightedIndex;

          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }

          cbToCb(cb)();
        });
      };

      _this.openMenu = function (cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };

      _this.closeMenu = function (cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };

      _this.updateStatus = debounce(function () {
        var state = _this.getState();

        var item = _this.items[state.highlightedIndex];

        var resultCount = _this.getItemCount();

        var status = _this.props.getA11yStatusMessage(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount: resultCount,
          highlightedItem: item
        }, state));

        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200);

      // fancy destructuring + defaults + aliases
      // this basically says each value of state should either be set to
      // the initial value or the default value if the initial value is not provided
      var _this$props = _this.props,
          defaultHighlightedIndex = _this$props.defaultHighlightedIndex,
          _this$props$initialHi = _this$props.initialHighlightedIndex,
          _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi,
          defaultIsOpen = _this$props.defaultIsOpen,
          _this$props$initialIs = _this$props.initialIsOpen,
          _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs,
          _this$props$initialIn = _this$props.initialInputValue,
          _inputValue = _this$props$initialIn === void 0 ? '' : _this$props$initialIn,
          _this$props$initialSe = _this$props.initialSelectedItem,
          _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;

      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });

      if (_state.selectedItem != null && _this.props.initialInputValue === undefined) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }

      _this.state = _state;
      return _this;
    }

    var _proto = Downshift.prototype;

    /**
     * Clear all running timeouts
     */
    _proto.internalClearTimeouts = function internalClearTimeouts() {
      this.timeoutIds.forEach(function (id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    ;

    _proto.getState = function getState$1(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }

      return getState(stateToMerge, this.props);
    };

    _proto.getItemCount = function getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      var itemCount = this.items.length;

      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        itemCount = this.props.itemCount;
      }

      return itemCount;
    };

    _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };

    _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    };

    _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      var _this6 = this;

      var itemCount = this.getItemCount();

      var _this$getState8 = this.getState(),
          highlightedIndex = _this$getState8.highlightedIndex;

      if (itemCount > 0) {
        var nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, function (index) {
          return _this6.getItemNodeFromIndex(index);
        });
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    };

    _proto.getStateAndHelpers = function getStateAndHelpers() {
      var _this$getState9 = this.getState(),
          highlightedIndex = _this$getState9.highlightedIndex,
          inputValue = _this$getState9.inputValue,
          selectedItem = _this$getState9.selectedItem,
          isOpen = _this$getState9.isOpen;

      var itemToString = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getMenuProps = this.getMenuProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;
      return {
        // prop getters
        getRootProps: getRootProps,
        getToggleButtonProps: getToggleButtonProps,
        getLabelProps: getLabelProps,
        getMenuProps: getMenuProps,
        getInputProps: getInputProps,
        getItemProps: getItemProps,
        // actions
        reset: reset,
        openMenu: openMenu,
        closeMenu: closeMenu,
        toggleMenu: toggleMenu,
        selectItem: selectItem,
        selectItemAtIndex: selectItemAtIndex,
        selectHighlightedItem: selectHighlightedItem,
        setHighlightedIndex: setHighlightedIndex,
        clearSelection: clearSelection,
        clearItems: clearItems,
        setItemCount: setItemCount,
        unsetItemCount: unsetItemCount,
        setState: setState,
        // props
        itemToString: itemToString,
        // derived
        id: id,
        // state
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isOpen: isOpen,
        selectedItem: selectedItem
      };
    } //////////////////////////// ROOT
    ;

    _proto.componentDidMount = function componentDidMount() {
      var _this7 = this;

      /* istanbul ignore if (react-native) */
      if ( true && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      /* istanbul ignore if (react-native) */


      {
        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        var onMouseDown = function () {
          _this7.isMouseDown = true;
        };

        var onMouseUp = function (event) {
          _this7.isMouseDown = false; // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift

          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document);

          if (!contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: mouseUp
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        }; // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping


        var onTouchStart = function () {
          _this7.isTouchMove = false;
        };

        var onTouchMove = function () {
          _this7.isTouchMove = true;
        };

        var onTouchEnd = function (event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document, false);

          if (!_this7.isTouchMove && !contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: touchEnd
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };

        var environment = this.props.environment;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);

        this.cleanup = function () {
          _this7.internalClearTimeouts();

          _this7.updateStatus.cancel();

          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      }
    };

    _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
      var _ref10 = this.props.highlightedIndex === undefined ? this.getState() : this.props,
          currentHighlightedIndex = _ref10.highlightedIndex;

      var _ref11 = prevProps.highlightedIndex === undefined ? prevState : prevProps,
          prevHighlightedIndex = _ref11.highlightedIndex;

      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      return scrollWhenOpen || currentHighlightedIndex !== prevHighlightedIndex;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        /* istanbul ignore if (react-native) */

        if ( this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }

      if (isControlledProp(this.props, 'selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }

      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      /* istanbul ignore else (react-native) */


      this.updateStatus();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    };

    _proto.render = function render() {
      var children = unwrapArray(this.props.children, noop); // because the items are rerendered every time we call the children
      // we clear this out each render and it will be populated again as
      // getItemProps is called.

      this.clearItems(); // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.

      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined; // we do something similar for getMenuProps

      this.getMenuProps.called = false;
      this.getMenuProps.refKey = undefined;
      this.getMenuProps.suppressRefError = undefined; // we do something similar for getLabelProps

      this.getLabelProps.called = false; // and something similar for getInputProps

      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));

      if (!element) {
        return null;
      }

      if (this.getRootProps.called || this.props.suppressRefError) {
        if ( true && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }

        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(element, this.getRootProps(getElementProps(element)));
      }
      /* istanbul ignore else */


      if (true) {
        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete
        throw new Error('downshift: If you return a non-DOM element, you must apply the getRootProps function');
      }
      /* istanbul ignore next */


      return undefined;
    };

    return Downshift;
  }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage,
    itemToString: function itemToString(i) {
      if (i == null) {
        return '';
      }

      if ( true && isPlainObject(i) && !i.hasOwnProperty('toString')) {
        // eslint-disable-next-line no-console
        console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
      }

      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === 'undefined'
    /* istanbul ignore next (ssr) */
    ? {} : window,
    stateReducer: function stateReducer(state, stateToSet) {
      return stateToSet;
    },
    suppressRefError: false,
    scrollIntoView: scrollIntoView
  };
  Downshift.stateChangeTypes = stateChangeTypes;
  return Downshift;
}();

 true ? Downshift.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onInputValueChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onUserAction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  selectedItemChanged: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  itemCount: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  }),
  suppressRefError: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  scrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components

  /* eslint-disable react/no-unused-prop-types */
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  inputId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  /* eslint-enable react/no-unused-prop-types */

} : undefined;

function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;

  if (!node) {
    // eslint-disable-next-line no-console
    console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
  }
}

function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey;
  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);

  if (isComposite && !refKeySpecified && !Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isForwardRef"])(element)) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isForwardRef"])(element) && !getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
  }
}

var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};

function callOnChangeProps(action, state, newState) {
  var props = action.props,
      type = action.type;
  var changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, action, state, newState);

    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });

  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, changes));
  }
}

function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props,
      type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";

  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, newState));
  }
}
/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */


function stateReducer(s, a) {
  return a.changes;
}
/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
}
/**
 * Debounced call for updating the a11y message.
 */


var updateA11yStatus = debounce(function (getA11yMessage, document) {
  setStatus(getA11yMessage(), document);
}, 200);
function getElementIds(_ref) {
  var id = _ref.id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId;
  var uniqueId = id === undefined ? "downshift-" + generateId() : id;
  return {
    labelId: labelId || uniqueId + "-label",
    menuId: menuId || uniqueId + "-menu",
    getItemId: getItemId || function (index) {
      return uniqueId + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || uniqueId + "-toggle-button"
  };
}
function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }

  if (items.length === 0) {
    return -1;
  }

  return items.indexOf(item);
}

function itemToString(item) {
  return item ? String(item) : '';
}

function getPropTypesValidator(caller, propTypes) {
  // istanbul ignore next
  return function (options) {
    if (options === void 0) {
      options = {};
    }

    Object.keys(propTypes).forEach(function (key) {
      prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.checkPropTypes(propTypes, options, key, caller.name);
    });
  };
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
function useLatestRef(val) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(val); // technically this is not "concurrent mode safe" because we're manipulating
  // the value during render (so it's not idempotent). However, the places this
  // hook is used is to support memoizing callbacks which will be called
  // *during* render, so we need the latest values *during* render.
  // If not for this, then we'd probably want to use useLayoutEffect instead.

  ref.current = val;
  return ref;
}
/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useEnhancedReducer(reducer, initialState, props) {
  var prevStateRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var actionRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var enhancedReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (state, action) {
    actionRef.current = action;
    state = getState(state, action.props);
    var changes = reducer(state, action);
    var newState = action.props.stateReducer(state, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action, {
      changes: changes
    }));
    return newState;
  }, [reducer]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(enhancedReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var propsRef = useLatestRef(props);
  var dispatchWithProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (action) {
    return dispatch(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      props: propsRef.current
    }, action));
  }, [propsRef]);
  var action = actionRef.current;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }

    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
/**
 * Wraps the useEnhancedReducer and applies the controlled prop values before
 * returning the new state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useControlledReducer(reducer, initialState, props) {
  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1];

  return [getState(state, props), dispatch];
}
var defaultProps = {
  itemToString: itemToString,
  stateReducer: stateReducer,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  circularNavigation: false,
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window
};
function getDefaultValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  var defaultPropKey = "default" + capitalizeString(propKey);

  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }

  return defaultStateValues[propKey];
}
function getInitialValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  if (propKey in props) {
    return props[propKey];
  }

  var initialPropKey = "initial" + capitalizeString(propKey);

  if (initialPropKey in props) {
    return props[initialPropKey];
  }

  return getDefaultValue(props, propKey, defaultStateValues);
}
function getInitialState(props) {
  var selectedItem = getInitialValue(props, 'selectedItem');
  var isOpen = getInitialValue(props, 'isOpen');
  var highlightedIndex = getInitialValue(props, 'highlightedIndex');
  var inputValue = getInitialValue(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex;

  if (items.length === 0) {
    return -1;
  } // initialHighlightedIndex will give value to highlightedIndex on initial state only.


  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }

  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }

  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }

    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }

  if (offset === 0) {
    return -1;
  }

  return offset < 0 ? items.length - 1 : 0;
}
/**
 * Reuse the movement tracking of mouse and touch events.
 *
 * @param {boolean} isOpen Whether the dropdown is open or not.
 * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
 * @param {Object} environment Environment where component/hook exists.
 * @param {Function} handleBlur Handler on blur from mouse or touch.
 * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
 */

function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  var mouseAndTouchTrackersRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])({
    isMouseDown: false,
    isTouchMove: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    var onMouseDown = function () {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };

    var onMouseUp = function (event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;

      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment.document)) {
        handleBlur();
      }
    };

    var onTouchStart = function () {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };

    var onTouchMove = function () {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };

    var onTouchEnd = function (event) {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment.document, false)) {
        handleBlur();
      }
    };

    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function () {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
/**
 * Custom hook that checks if getter props are called correctly.
 *
 * @param  {...any} propKeys Getter prop names to be handled.
 * @returns {Function} Setter function called inside getter props to set call information.
 */

function useGetterPropsCalledChecker() {
  var isNotProduction = "development" !== 'production';
  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);

  for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
    propKeys[_key] = arguments[_key];
  }

  var getterPropsCalledRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(propKeys.reduce(function (acc, propKey) {
    acc[propKey] = {};
    return acc;
  }, {}));
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!isNotProduction) {
      return;
    }

    Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
      var propCallInfo = getterPropsCalledRef.current[propKey];

      if (isInitialMountRef.current) {
        if (!Object.keys(propCallInfo).length) {
          // eslint-disable-next-line no-console
          console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
          return;
        }
      }

      var suppressRefError = propCallInfo.suppressRefError,
          refKey = propCallInfo.refKey,
          elementRef = propCallInfo.elementRef;

      if ((!elementRef || !elementRef.current) && !suppressRefError) {
        // eslint-disable-next-line no-console
        console.error("downshift: The ref prop \"" + refKey + "\" from " + propKey + " was not applied correctly on your element.");
      }
    });
    isInitialMountRef.current = false;
  });
  var setGetterPropCallInfo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (propKey, suppressRefError, refKey, elementRef) {
    if (true) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError: suppressRefError,
        refKey: refKey,
        elementRef: elementRef
      };
    }
  }, []);
  return setGetterPropCallInfo;
}
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  var isInitialMount = _ref2.isInitialMount,
      previousResultCount = _ref2.previousResultCount,
      highlightedIndex = _ref2.highlightedIndex,
      items = _ref2.items,
      environment = _ref2.environment,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["isInitialMount", "previousResultCount", "highlightedIndex", "items", "environment"]);

  // Sets a11y status message on changes in state.
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMount) {
      return;
    }

    updateA11yStatus(function () {
      return getA11yMessage(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        highlightedIndex: highlightedIndex,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length,
        previousResultCount: previousResultCount
      }, rest));
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex,
      isOpen = _ref3.isOpen,
      itemRefs = _ref3.itemRefs,
      getItemNodeFromIndex = _ref3.getItemNodeFromIndex,
      menuElement = _ref3.menuElement,
      scrollIntoViewProp = _ref3.scrollIntoView;
  // used not to scroll on highlight by mouse.
  var shouldScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // Scroll on highlighted item if change comes from keyboard.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }

    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  return shouldScrollRef;
}
function useControlPropsValidator(_ref4) {
  var isInitialMount = _ref4.isInitialMount,
      props = _ref4.props,
      state = _ref4.state;
  // used for checking when props are moving from controlled to uncontrolled.
  var prevPropsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(props);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMount) {
      return;
    }

    validateControlledUnchanged(state, prevPropsRef.current, props);
    prevPropsRef.current = props;
  }, [state, props, isInitialMount]);
}

function getItemIndexByCharacterKey(keysSoFar, highlightedIndex, items, itemToStringParam, getItemNodeFromIndex) {
  var lowerCasedItemStrings = items.map(function (item) {
    return itemToStringParam(item).toLowerCase();
  });
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();

  var isValid = function (itemString, index) {
    var element = getItemNodeFromIndex(index);
    return itemString.startsWith(lowerCasedKeysSoFar) && !(element && element.hasAttribute('disabled'));
  };

  for (var index = highlightedIndex + 1; index < lowerCasedItemStrings.length; index++) {
    var itemString = lowerCasedItemStrings[index];

    if (isValid(itemString, index)) {
      return index;
    }
  }

  for (var _index = 0; _index < highlightedIndex; _index++) {
    var _itemString = lowerCasedItemStrings[_index];

    if (isValid(_itemString, _index)) {
      return _index;
    }
  }

  return highlightedIndex;
}

var propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11ySelectionMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  circularNavigation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  defaultSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  toggleButtonId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onHighlightedIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onIsOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */

function getA11yStatusMessage$1(_ref) {
  var isOpen = _ref.isOpen,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
  }

  return '';
}

var defaultProps$1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage$1
});

var MenuKeyDownArrowDown =  true ? '__menu_keydown_arrow_down__' : undefined;
var MenuKeyDownArrowUp =  true ? '__menu_keydown_arrow_up__' : undefined;
var MenuKeyDownEscape =  true ? '__menu_keydown_escape__' : undefined;
var MenuKeyDownHome =  true ? '__menu_keydown_home__' : undefined;
var MenuKeyDownEnd =  true ? '__menu_keydown_end__' : undefined;
var MenuKeyDownEnter =  true ? '__menu_keydown_enter__' : undefined;
var MenuKeyDownSpaceButton =  true ? '__menu_keydown_space_button__' : undefined;
var MenuKeyDownCharacter =  true ? '__menu_keydown_character__' : undefined;
var MenuBlur =  true ? '__menu_blur__' : undefined;
var MenuMouseLeave =  true ? '__menu_mouse_leave__' : undefined;
var ItemMouseMove =  true ? '__item_mouse_move__' : undefined;
var ItemClick =  true ? '__item_click__' : undefined;
var ToggleButtonClick =  true ? '__togglebutton_click__' : undefined;
var ToggleButtonKeyDownArrowDown =  true ? '__togglebutton_keydown_arrow_down__' : undefined;
var ToggleButtonKeyDownArrowUp =  true ? '__togglebutton_keydown_arrow_up__' : undefined;
var ToggleButtonKeyDownCharacter =  true ? '__togglebutton_keydown_character__' : undefined;
var FunctionToggleMenu =  true ? '__function_toggle_menu__' : undefined;
var FunctionOpenMenu =  true ? '__function_open_menu__' : undefined;
var FunctionCloseMenu =  true ? '__function_close_menu__' : undefined;
var FunctionSetHighlightedIndex =  true ? '__function_set_highlighted_index__' : undefined;
var FunctionSelectItem =  true ? '__function_select_item__' : undefined;
var FunctionSetInputValue =  true ? '__function_set_input_value__' : undefined;
var FunctionReset =  true ? '__function_reset__' : undefined;

var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown: MenuKeyDownArrowDown,
  MenuKeyDownArrowUp: MenuKeyDownArrowUp,
  MenuKeyDownEscape: MenuKeyDownEscape,
  MenuKeyDownHome: MenuKeyDownHome,
  MenuKeyDownEnd: MenuKeyDownEnd,
  MenuKeyDownEnter: MenuKeyDownEnter,
  MenuKeyDownSpaceButton: MenuKeyDownSpaceButton,
  MenuKeyDownCharacter: MenuKeyDownCharacter,
  MenuBlur: MenuBlur,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset
});

/* eslint-disable complexity */

function downshiftSelectReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case ItemClick:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index]
      };
      break;

    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var inputValue = "" + state.inputValue + lowercasedKey;
        var itemIndex = getItemIndexByCharacterKey(inputValue, state.selectedItem ? props.items.indexOf(state.selectedItem) : -1, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          inputValue: inputValue
        }, itemIndex >= 0 && {
          selectedItem: props.items[itemIndex]
        });
      }
      break;

    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex')
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;

    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuKeyDownCharacter:
      {
        var _lowercasedKey = action.key;

        var _inputValue = "" + state.inputValue + _lowercasedKey;

        var highlightedIndex = getItemIndexByCharacterKey(_inputValue, state.highlightedIndex, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          inputValue: _inputValue
        }, highlightedIndex >= 0 && {
          highlightedIndex: highlightedIndex
        });
      }
      break;

    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;

    case ToggleButtonClick:
    case FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;

    case FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem
      };
      break;

    case FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}
/* eslint-enable complexity */

var validatePropTypes =  false ?
/* istanbul ignore next */
undefined : getPropTypesValidator(useSelect, propTypes);
useSelect.stateChangeTypes = stateChangeTypes$1;

function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  /* istanbul ignore else */
  if (true) {
    validatePropTypes(userProps);
  } // Props defaults and destructuring.


  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$1, userProps);

  var items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      itemToString = props.itemToString,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      getA11yStatusMessage = props.getA11yStatusMessage; // Initial state depending on controlled props.

  var initialState = getInitialState(props);

  var _useControlledReducer = useControlledReducer(downshiftSelectReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue; // Element efs.

  var toggleButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var itemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  itemRefs.current = {}; // used not to trigger menu blur action in some scenarios.

  var shouldBlurRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // used to keep the inputValue clearTimeout object between renders.

  var clearTimeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null); // prevent id re-generation between renders.

  var elementIdsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(getElementIds(props)); // used to keep track of how many items we had on previous cycle.

  var previousResultCountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // utility callback to get item element.

  var latest = useLatestRef({
    state: state,
    props: props
  }); // Some utils.

  var getItemNodeFromIndex = function (index) {
    return itemRefs.current[elementIdsRef.current.getItemId(index)];
  }; // Effects.
  // Sets a11y status message on changes in state.


  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Sets a11y status message on changes in selectedItem.

  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Scroll on highlighted item if change comes from keyboard.

  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  }); // Sets cleanup for the keysSoFar after 500ms.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // init the clean function here as we need access to dispatch.
    if (isInitialMountRef.current) {
      clearTimeoutRef.current = debounce(function (outerDispatch) {
        outerDispatch({
          type: FunctionSetInputValue,
          inputValue: ''
        });
      }, 500);
    }

    if (!inputValue) {
      return;
    }

    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  });
  /* Controls the focus on the menu or the toggle button. */

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // Don't focus menu on first render.
    if (isInitialMountRef.current) {
      // Unless it was initialised as open.
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }

      return;
    } // Focus menu on open.


    if (isOpen) {
      // istanbul ignore else
      if (menuRef.current) {
        menuRef.current.focus();
      }

      return;
    } // Focus toggleButton on close, but not if it was closed with (Shift+)Tab.


    if (environment.document.activeElement === menuRef.current) {
      // istanbul ignore else
      if (toggleButtonRef.current) {
        shouldBlurRef.current = false;
        toggleButtonRef.current.focus();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  }); // Add mouse/touch events to document.

  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: MenuBlur
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getMenuProps', 'getToggleButtonProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []); // Event handler functions.

  var toggleButtonKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowDown,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowUp,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      }
    };
  }, [dispatch]);
  var menuKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowDown,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowUp,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      Home: function Home(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        dispatch({
          type: MenuKeyDownEscape
        });
      },
      Enter: function Enter(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnter
        });
      },
      ' ': function _(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownSpaceButton
        });
      }
    };
  }, [dispatch]); // Action functions.

  var toggleMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  var setInputValue = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]); // Getter functions.

  var getLabelProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (labelProps) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      id: elementIdsRef.current.labelId,
      htmlFor: elementIdsRef.current.toggleButtonId
    }, labelProps);
  }, []);
  var getMenuProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp, _temp2) {
    var _extends2;

    var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        onKeyDown = _ref.onKeyDown,
        onBlur = _ref.onBlur,
        ref = _ref.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"]);

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

    var latestState = latest.current.state;
    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIdsRef.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIdsRef.current.labelId, _extends2.tabIndex = -1, _extends2), latestState.isOpen && latestState.highlightedIndex > -1 && {
      'aria-activedescendant': elementIdsRef.current.getItemId(latestState.highlightedIndex)
    }, {
      onMouseLeave: callAllEventHandlers(onMouseLeave, function menuHandleMouseLeave() {
        dispatch({
          type: MenuMouseLeave
        });
      }),
      onKeyDown: callAllEventHandlers(onKeyDown, function menuHandleKeyDown(event) {
        var key = normalizeArrowKey(event);

        if (key && menuKeyDownHandlers[key]) {
          menuKeyDownHandlers[key](event);
        } else if (isAcceptedCharacterKey(key)) {
          dispatch({
            type: MenuKeyDownCharacter,
            key: key,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        }
      }),
      onBlur: callAllEventHandlers(onBlur, function menuHandleBlur() {
        // if the blur was a result of selection, we don't trigger this action.
        if (shouldBlurRef.current === false) {
          shouldBlurRef.current = true;
          return;
        }

        var shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
        /* istanbul ignore else */

        if (shouldBlur) {
          dispatch({
            type: MenuBlur
          });
        }
      })
    }, rest);
  }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo]);
  var getToggleButtonProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp3, _temp4) {
    var _extends3;

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["onClick", "onKeyDown", "refKey", "ref"]);

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$suppressRefErro = _ref4.suppressRefError,
        suppressRefError = _ref4$suppressRefErro === void 0 ? false : _ref4$suppressRefErro;

    var toggleButtonHandleClick = function () {
      dispatch({
        type: ToggleButtonClick
      });
    };

    var toggleButtonHandleKeyDown = function (event) {
      var key = normalizeArrowKey(event);

      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key: key,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };

    var toggleProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends3.id = elementIdsRef.current.toggleButtonId, _extends3['aria-haspopup'] = 'listbox', _extends3['aria-expanded'] = latest.current.state.isOpen, _extends3['aria-labelledby'] = elementIdsRef.current.labelId + " " + elementIdsRef.current.toggleButtonId, _extends3), rest);

    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }

    setGetterPropCallInfo('getToggleButtonProps', suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo]);
  var getItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp5) {
    var _extends4;

    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        item = _ref5.item,
        index = _ref5.index,
        onMouseMove = _ref5.onMouseMove,
        onClick = _ref5.onClick,
        _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["item", "index", "onMouseMove", "onClick", "refKey", "ref"]);

    var _latest$current = latest.current,
        latestState = _latest$current.state,
        latestProps = _latest$current.props;

    var itemHandleMouseMove = function () {
      if (index === latestState.highlightedIndex) {
        return;
      }

      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index: index
      });
    };

    var itemHandleClick = function () {
      dispatch({
        type: ItemClick,
        index: index
      });
    };

    var itemIndex = getItemIndex(index, item, latestProps.items);

    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }

    var itemProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends4 = {
      role: 'option',
      'aria-selected': "" + (itemIndex === latestState.highlightedIndex),
      id: elementIdsRef.current.getItemId(itemIndex)
    }, _extends4[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIdsRef.current.getItemId(itemIndex)] = itemNode;
      }
    }), _extends4), rest);

    if (!rest.disabled) {
      itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }

    return itemProps;
  }, [dispatch, latest, shouldScrollRef]);
  return {
    // prop getters.
    getToggleButtonProps: getToggleButtonProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getItemProps: getItemProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    selectItem: selectItem,
    reset: reset,
    setInputValue: setInputValue,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var InputKeyDownArrowDown =  true ? '__input_keydown_arrow_down__' : undefined;
var InputKeyDownArrowUp =  true ? '__input_keydown_arrow_up__' : undefined;
var InputKeyDownEscape =  true ? '__input_keydown_escape__' : undefined;
var InputKeyDownHome =  true ? '__input_keydown_home__' : undefined;
var InputKeyDownEnd =  true ? '__input_keydown_end__' : undefined;
var InputKeyDownEnter =  true ? '__input_keydown_enter__' : undefined;
var InputChange =  true ? '__input_change__' : undefined;
var InputBlur =  true ? '__input_blur__' : undefined;
var MenuMouseLeave$1 =  true ? '__menu_mouse_leave__' : undefined;
var ItemMouseMove$1 =  true ? '__item_mouse_move__' : undefined;
var ItemClick$1 =  true ? '__item_click__' : undefined;
var ToggleButtonClick$1 =  true ? '__togglebutton_click__' : undefined;
var FunctionToggleMenu$1 =  true ? '__function_toggle_menu__' : undefined;
var FunctionOpenMenu$1 =  true ? '__function_open_menu__' : undefined;
var FunctionCloseMenu$1 =  true ? '__function_close_menu__' : undefined;
var FunctionSetHighlightedIndex$1 =  true ? '__function_set_highlighted_index__' : undefined;
var FunctionSelectItem$1 =  true ? '__function_select_item__' : undefined;
var FunctionSetInputValue$1 =  true ? '__function_set_input_value__' : undefined;
var FunctionReset$1 =  true ? '__function_reset__' : undefined;
var ControlledPropUpdatedSelectedItem =  true ? '__controlled_prop_updated_selected_item__' : undefined;

var stateChangeTypes$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});

function getElementIds$1(_ref) {
  var id = _ref.id,
      inputId = _ref.inputId,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["id", "inputId"]);

  var uniqueId = id === undefined ? "downshift-" + generateId() : id;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    inputId: inputId || uniqueId + "-input"
  }, getElementIds(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    id: id
  }, rest)));
}
function getInitialState$1(props) {
  var initialState = getInitialState(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;

  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, initialState, {
    inputValue: inputValue
  });
}
var propTypes$1 = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11ySelectionMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  circularNavigation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  defaultSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  defaultInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  initialInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  inputId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  toggleButtonId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onHighlightedIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onIsOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onInputValueChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
/**
 * The useCombobox version of useControlledReducer, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useEnhancedReducer to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useControlledReducer$1(reducer, initialState, props) {
  var previousSelectedItemRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1]; // ToDo: if needed, make same approach as selectedItemChanged from Downshift.


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isControlledProp(props, 'selectedItem')) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }

      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
}
var defaultProps$2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage,
  circularNavigation: true
});

/* eslint-disable complexity */

function downshiftUseComboboxReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemMouseMove$1:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;

    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: true
        };
      }

      break;

    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: true
        };
      }

      break;

    case InputKeyDownEnter:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.isOpen && state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputKeyDownEscape:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ''
      });
      break;

    case InputKeyDownHome:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.isOpen && {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      });
      break;

    case InputKeyDownEnd:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.isOpen && {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      });
      break;

    case InputBlur:
      if (state.isOpen) {
        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          isOpen: false,
          highlightedIndex: -1
        }, state.highlightedIndex >= 0 && action.selectItem && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        });
      }

      break;

    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;

    case MenuMouseLeave$1:
      changes = {
        highlightedIndex: -1
      };
      break;

    case ToggleButtonClick$1:
    case FunctionToggleMenu$1:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionOpenMenu$1:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionCloseMenu$1:
      changes = {
        isOpen: false
      };
      break;

    case FunctionSetHighlightedIndex$1:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;

    case ControlledPropUpdatedSelectedItem:
    case FunctionSetInputValue$1:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case FunctionReset$1:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}
/* eslint-enable complexity */

var validatePropTypes$1 =  false ?
/* istanbul ignore next */
undefined : getPropTypesValidator(useCombobox, propTypes$1);
useCombobox.stateChangeTypes = stateChangeTypes$2;

function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  /* istanbul ignore else */
  if (true) {
    validatePropTypes$1(userProps);
  } // Props defaults and destructuring.


  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$2, userProps);

  var initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      itemToString = props.itemToString; // Initial state depending on controlled props.

  var initialState = getInitialState$1(props);

  var _useControlledReducer = useControlledReducer$1(downshiftUseComboboxReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue; // Element refs.

  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var itemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var toggleButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var comboboxRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  itemRefs.current = {};
  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // prevent id re-generation between renders.

  var elementIdsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(getElementIds$1(props)); // used to keep track of how many items we had on previous cycle.

  var previousResultCountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(); // utility callback to get item element.

  var latest = useLatestRef({
    state: state,
    props: props
  });

  var getItemNodeFromIndex = function (index) {
    return itemRefs.current[elementIdsRef.current.getItemId(index)];
  }; // Effects.
  // Sets a11y status message on changes in state.


  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Sets a11y status message on changes in selectedItem.

  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Scroll on highlighted item if change comes from keyboard.

  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  }); // Controls the focus on the input on open.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // Don't focus menu on first render.
    if (isInitialMountRef.current) {
      // Unless it was initialised as open.
      if (initialIsOpen || defaultIsOpen || isOpen) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  }); // Add mouse/touch events to document.

  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getInputProps', 'getComboboxProps', 'getMenuProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []);
  /* Event handler functions */

  var inputKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Home: function Home(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        dispatch({
          type: InputKeyDownEscape
        });
      },
      Enter: function Enter(event) {
        // if IME composing, wait for next Enter keydown event.
        if (event.which === 229) {
          return;
        }

        var latestState = latest.current.state;

        if (latestState.isOpen) {
          event.preventDefault();
        }

        dispatch({
          type: InputKeyDownEnter,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };
  }, [dispatch, latest]); // Getter props.

  var getLabelProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (labelProps) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      id: elementIdsRef.current.labelId,
      htmlFor: elementIdsRef.current.inputId
    }, labelProps);
  }, []);
  var getMenuProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp, _temp2) {
    var _extends2;

    var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        ref = _ref.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onMouseLeave", "refKey", "ref"]);

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIdsRef.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIdsRef.current.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function () {
      dispatch({
        type: MenuMouseLeave$1
      });
    }), _extends2), rest);
  }, [dispatch, setGetterPropCallInfo]);
  var getItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp3) {
    var _extends3, _ref4;

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        item = _ref3.item,
        index = _ref3.index,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onMouseMove = _ref3.onMouseMove,
        onClick = _ref3.onClick,
        onPress = _ref3.onPress,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"]);

    var _latest$current = latest.current,
        latestProps = _latest$current.props,
        latestState = _latest$current.state;
    var itemIndex = getItemIndex(index, item, latestProps.items);

    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }

    var onSelectKey = 'onClick';
    var customClickHandler = onClick;
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIdsRef.current.getItemId(itemIndex)] = itemNode;
      }
    }), _extends3.role = 'option', _extends3['aria-selected'] = "" + (itemIndex === latestState.highlightedIndex), _extends3.id = elementIdsRef.current.getItemId(itemIndex), _extends3), !rest.disabled && (_ref4 = {
      onMouseMove: callAllEventHandlers(onMouseMove, function itemHandleMouseMove() {
        if (index === latestState.highlightedIndex) {
          return;
        }

        shouldScrollRef.current = false;
        dispatch({
          type: ItemMouseMove$1,
          index: index
        });
      })
    }, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, function itemHandleClick() {
      dispatch({
        type: ItemClick$1,
        index: index
      });

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }), _ref4), rest);
  }, [dispatch, latest, shouldScrollRef]);
  var getToggleButtonProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp4) {
    var _extends4;

    var _ref5 = _temp4 === void 0 ? {} : _temp4,
        onClick = _ref5.onClick,
        onPress = _ref5.onPress,
        _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["onClick", "onPress", "refKey", "ref"]);

    var toggleButtonHandleClick = function () {
      dispatch({
        type: ToggleButtonClick$1
      });

      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4.id = elementIdsRef.current.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest);
  }, [dispatch, latest]);
  var getInputProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp5, _temp6) {
    var _extends5;

    var _ref6 = _temp5 === void 0 ? {} : _temp5,
        onKeyDown = _ref6.onKeyDown,
        onChange = _ref6.onChange,
        onInput = _ref6.onInput,
        onBlur = _ref6.onBlur,
        onChangeText = _ref6.onChangeText,
        _ref6$refKey = _ref6.refKey,
        refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
        ref = _ref6.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"]);

    var _ref7 = _temp6 === void 0 ? {} : _temp6,
        _ref7$suppressRefErro = _ref7.suppressRefError,
        suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;

    setGetterPropCallInfo('getInputProps', suppressRefError, refKey, inputRef);
    var latestState = latest.current.state;

    var inputHandleKeyDown = function (event) {
      var key = normalizeArrowKey(event);

      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };

    var inputHandleChange = function (event) {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };

    var inputHandleBlur = function () {
      /* istanbul ignore else */
      if (!mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    /* istanbul ignore next (preact) */


    var onChangeKey = 'onChange';
    var eventHandlers = {};

    if (!rest.disabled) {
      var _eventHandlers;

      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
    }
    /* istanbul ignore if (react-native) */


    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
      inputRef.current = inputNode;
    }), _extends5.id = elementIdsRef.current.inputId, _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIdsRef.current.menuId, _extends5), latestState.isOpen && latestState.highlightedIndex > -1 && {
      'aria-activedescendant': elementIdsRef.current.getItemId(latestState.highlightedIndex)
    }, {
      'aria-labelledby': elementIdsRef.current.labelId,
      // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
      // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
      autoComplete: 'off',
      value: latestState.inputValue
    }, eventHandlers, rest);
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo]);
  var getComboboxProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp7, _temp8) {
    var _extends6;

    var _ref8 = _temp7 === void 0 ? {} : _temp7,
        _ref8$refKey = _ref8.refKey,
        refKey = _ref8$refKey === void 0 ? 'ref' : _ref8$refKey,
        ref = _ref8.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, ["refKey", "ref"]);

    var _ref9 = _temp8 === void 0 ? {} : _temp8,
        _ref9$suppressRefErro = _ref9.suppressRefError,
        suppressRefError = _ref9$suppressRefErro === void 0 ? false : _ref9$suppressRefErro;

    setGetterPropCallInfo('getComboboxProps', suppressRefError, refKey, comboboxRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function (comboboxNode) {
      comboboxRef.current = comboboxNode;
    }), _extends6.role = 'combobox', _extends6['aria-haspopup'] = 'listbox', _extends6['aria-owns'] = elementIdsRef.current.menuId, _extends6['aria-expanded'] = latest.current.state.isOpen, _extends6), rest);
  }, [latest, setGetterPropCallInfo]); // returns

  var toggleMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  var closeMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  var openMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  var setHighlightedIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps: getItemProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getInputProps: getInputProps,
    getComboboxProps: getComboboxProps,
    getToggleButtonProps: getToggleButtonProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    setInputValue: setInputValue,
    selectItem: selectItem,
    reset: reset,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
/**
 * Returns the initial value for a state key in the following order:
 * 1. controlled prop, 2. initial prop, 3. default prop, 4. default
 * value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */

function getInitialValue$1(props, propKey) {
  return getInitialValue(props, propKey, defaultStateValues);
}
/**
 * Returns the default value for a state key in the following order:
 * 1. controlled prop, 2. default prop, 3. default value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */


function getDefaultValue$1(props, propKey) {
  return getDefaultValue(props, propKey, defaultStateValues);
}
/**
 * Gets the initial state based on the provided props. It uses initial, default
 * and controlled props related to state in order to compute the initial value.
 *
 * @param {Object} props Props passed to the hook.
 * @returns {Object} The initial state.
 */

function getInitialState$2(props) {
  var activeIndex = getInitialValue$1(props, 'activeIndex');
  var selectedItems = getInitialValue$1(props, 'selectedItems');
  return {
    activeIndex: activeIndex,
    selectedItems: selectedItems
  };
}
/**
 * Returns true if dropdown keydown operation is permitted. Should not be
 * allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
 * input element with text content that is either highlighted or selection
 * cursor is not at the starting position.
 *
 * @param {KeyboardEvent} event The event from keydown.
 * @returns {boolean} Whether the operation is allowed.
 */

function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }

  var element = event.target;

  if (element instanceof HTMLInputElement && // if element is a text input
  element.value !== '' && ( // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }

  return true;
}
/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */

function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}

var propTypes$2 = {
  selectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  initialSelectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  defaultSelectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yRemovalMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialActiveIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultActiveIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  onActiveIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemsChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  keyNavigationNext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  keyNavigationPrevious: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
var defaultProps$3 = {
  itemToString: defaultProps.itemToString,
  stateReducer: defaultProps.stateReducer,
  environment: defaultProps.environment,
  getA11yRemovalMessage: getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
};

var SelectedItemClick =  true ? '__selected_item_click__' : undefined;
var SelectedItemKeyDownDelete =  true ? '__selected_item_keydown_delete__' : undefined;
var SelectedItemKeyDownBackspace =  true ? '__selected_item_keydown_backspace__' : undefined;
var SelectedItemKeyDownNavigationNext =  true ? '__selected_item_keydown_navigation_next__' : undefined;
var SelectedItemKeyDownNavigationPrevious =  true ? '__selected_item_keydown_navigation_previous__' : undefined;
var DropdownKeyDownNavigationPrevious =  true ? '__dropdown_keydown_navigation_previous__' : undefined;
var DropdownKeyDownBackspace =  true ? '__dropdown_keydown_backspace__' : undefined;
var DropdownClick =  true ? '__dropdown_click__' : undefined;
var FunctionAddSelectedItem =  true ? '__function_add_selected_item__' : undefined;
var FunctionRemoveSelectedItem =  true ? '__function_remove_selected_item__' : undefined;
var FunctionSetSelectedItems =  true ? '__function_set_selected_items__' : undefined;
var FunctionSetActiveIndex =  true ? '__function_set_active_index__' : undefined;
var FunctionReset$2 =  true ? '__function_reset__' : undefined;

var stateChangeTypes$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectedItemClick: SelectedItemClick,
  SelectedItemKeyDownDelete: SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace: SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext: SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious: SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious: DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace: DropdownKeyDownBackspace,
  DropdownClick: DropdownClick,
  FunctionAddSelectedItem: FunctionAddSelectedItem,
  FunctionRemoveSelectedItem: FunctionRemoveSelectedItem,
  FunctionSetSelectedItems: FunctionSetSelectedItems,
  FunctionSetActiveIndex: FunctionSetActiveIndex,
  FunctionReset: FunctionReset$2
});

/* eslint-disable complexity */

function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type,
      index = action.index,
      props = action.props,
      selectedItem = action.selectedItem;
  var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems;
  var changes;

  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;

    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;

    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;

    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete:
      {
        var newActiveIndex = activeIndex;

        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (activeIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }

        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
        }, {
          activeIndex: newActiveIndex
        });
        break;
      }

    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;

    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;

    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [].concat(selectedItems, [selectedItem])
      };
      break;

    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;

    case FunctionRemoveSelectedItem:
      {
        var _newActiveIndex = activeIndex;
        var selectedItemIndex = selectedItems.indexOf(selectedItem);

        if (selectedItems.length === 1) {
          _newActiveIndex = -1;
        } else if (selectedItemIndex === selectedItems.length - 1) {
          _newActiveIndex = selectedItems.length - 2;
        }

        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1))
        }, {
          activeIndex: _newActiveIndex
        });
        break;
      }

    case FunctionSetSelectedItems:
      {
        var newSelectedItems = action.selectedItems;
        changes = {
          selectedItems: newSelectedItems
        };
        break;
      }

    case FunctionSetActiveIndex:
      {
        var _newActiveIndex2 = action.activeIndex;
        changes = {
          activeIndex: _newActiveIndex2
        };
        break;
      }

    case FunctionReset$2:
      changes = {
        activeIndex: getDefaultValue$1(props, 'activeIndex'),
        selectedItems: getDefaultValue$1(props, 'selectedItems')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}

useMultipleSelection.stateChangeTypes = stateChangeTypes$3;

function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  // Props defaults and destructuring.
  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$3, userProps);

  var getA11yRemovalMessage = props.getA11yRemovalMessage,
      itemToString = props.itemToString,
      environment = props.environment,
      keyNavigationNext = props.keyNavigationNext,
      keyNavigationPrevious = props.keyNavigationPrevious; // Reducer init.

  var _useControlledReducer = useControlledReducer(downshiftMultipleSelectionReducer, getInitialState$2(props), props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems; // Refs.

  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var previousSelectedItemsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(selectedItems);
  var selectedItemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  selectedItemRefs.current = [];
  var latest = useLatestRef({
    state: state,
    props: props
  }); // Effects.

  /* Sets a11y status message on changes in selectedItem. */

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      var removedSelectedItem = previousSelectedItemsRef.current.find(function (item) {
        return selectedItems.indexOf(item) < 0;
      });
      setStatus(getA11yRemovalMessage({
        itemToString: itemToString,
        resultCount: selectedItems.length,
        removedSelectedItem: removedSelectedItem,
        activeIndex: activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }

    previousSelectedItemsRef.current = selectedItems; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems.length]); // Sets focus on active item.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getDropdownProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []); // Event handler functions.

  var selectedItemKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var _ref;

    return _ref = {}, _ref[keyNavigationPrevious] = function () {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    }, _ref[keyNavigationNext] = function () {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    }, _ref.Delete = function Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    }, _ref.Backspace = function Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }, _ref;
  }, [dispatch, keyNavigationNext, keyNavigationPrevious]);
  var dropdownKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var _ref2;

    return _ref2 = {}, _ref2[keyNavigationPrevious] = function (event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    }, _ref2.Backspace = function Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }, _ref2;
  }, [dispatch, keyNavigationPrevious]); // Getter props.

  var getSelectedItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp) {
    var _extends2;

    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        selectedItem = _ref3.selectedItem,
        index = _ref3.index,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"]);

    var latestState = latest.current.state;
    var itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);

    if (itemIndex < 0) {
      throw new Error('Pass either selectedItem or index in getSelectedItemProps!');
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (selectedItemNode) {
      if (selectedItemNode) {
        selectedItemRefs.current.push(selectedItemNode);
      }
    }), _extends2.tabIndex = index === latestState.activeIndex ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, function selectedItemHandleClick() {
      dispatch({
        type: SelectedItemClick,
        index: index
      });
    }), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, function selectedItemHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    }), _extends2), rest);
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  var getDropdownProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp2, _temp3) {
    var _extends3;

    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$refKey = _ref4.refKey,
        refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
        ref = _ref4.ref,
        onKeyDown = _ref4.onKeyDown,
        onClick = _ref4.onClick,
        _ref4$preventKeyActio = _ref4.preventKeyAction,
        preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"]);

    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$suppressRefErro = _ref5.suppressRefError,
        suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;

    setGetterPropCallInfo('getDropdownProps', suppressRefError, refKey, dropdownRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (dropdownNode) {
      if (dropdownNode) {
        dropdownRef.current = dropdownNode;
      }
    }), _extends3), !preventKeyAction && {
      onKeyDown: callAllEventHandlers(onKeyDown, function dropdownHandleKeyDown(event) {
        var key = normalizeArrowKey(event);

        if (key && dropdownKeyDownHandlers[key]) {
          dropdownKeyDownHandlers[key](event);
        }
      }),
      onClick: callAllEventHandlers(onClick, function dropdownHandleClick() {
        dispatch({
          type: DropdownClick
        });
      })
    }, rest);
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]); // returns

  var addSelectedItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (selectedItem) {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem: selectedItem
    });
  }, [dispatch]);
  var removeSelectedItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (selectedItem) {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem: selectedItem
    });
  }, [dispatch]);
  var setSelectedItems = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItems) {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  var setActiveIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newActiveIndex) {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  return {
    getSelectedItemProps: getSelectedItemProps,
    getDropdownProps: getDropdownProps,
    addSelectedItem: addSelectedItem,
    removeSelectedItem: removeSelectedItem,
    setSelectedItems: setSelectedItems,
    setActiveIndex: setActiveIndex,
    reset: reset,
    selectedItems: selectedItems,
    activeIndex: activeIndex
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Downshift);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvZGlzdC9kb3duc2hpZnQuZXNtLmpzIl0sIm5hbWVzIjpbIlNFQVJDSF9VU0VSU19RVUVSWSIsImdxbCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmluZFVzZXJzIiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInVzZXJzIiwic2VhcmNoVGVybXMiLCJmaW5kVXNlcnNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZFVzZXJDaGFuZ2UiLCJzZWxlY3RlZFVzZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsInVzZXJUb1N0cmluZyIsInVzZXIiLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldFVzZXJQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJnZXRJbnB1dFByb3BzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4Qjs7QUFEK0Isc0JBR2VDLG1FQUFZLENBQ3hETCxrQkFEd0QsRUFFeEQ7QUFDRU0sZUFBVyxFQUFFO0FBRGYsR0FGd0QsQ0FIM0I7QUFBQTtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBO0FBQUEsTUFHWEMsT0FIVyxtQkFHWEEsT0FIVztBQUFBLE1BR0ZDLElBSEUsbUJBR0ZBLElBSEU7QUFBQSxNQUdJQyxLQUhKLG1CQUdJQSxLQUhKOztBQVUvQixNQUFNQyxLQUFLLEdBQUcsQ0FBQUYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFdBQU4sS0FBcUIsRUFBbkM7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDUCxTQUFELEVBQVksR0FBWixDQUFsQztBQUVBUSxrRUFBYzs7QUFkaUIscUJBdUIzQkMsNkRBQVcsQ0FBQztBQUNkTCxTQUFLLEVBQUxBLEtBRGM7QUFFZE0sc0JBRmMsZ0NBRU87QUFDbkJKLHVCQUFpQixDQUFDO0FBQ2hCSyxpQkFBUyxFQUFFO0FBQ1RDLG9CQUFVLEVBQUVDO0FBREg7QUFESyxPQUFELENBQWpCO0FBS0QsS0FSYTtBQVNkQyx3QkFUYyxzQ0FTeUI7QUFBQSxVQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3JDbkIsWUFBTSxDQUFDb0Is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QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxLQUErQztBQUN6RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHlCQUF5Qix5REFBVztBQUNwQzs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyw4REFBOEQ7O0FBRWpFLHdCQUF3Qix5REFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILDJCQUEyQix5REFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHlCQUF5Qix5REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHVCQUF1Qix5REFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGNBQWMseURBQVc7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEVBQUM7QUFDK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41Mzc3MWEyMzdiMDNkOGEwOTJiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuXHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcclxuXHJcbmNvbnN0IFNFQVJDSF9VU0VSU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTRUFSQ0hfVVNFUlNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuICAgIHNlYXJjaFRlcm1zOiBhbGxVc2Vycyh3aGVyZTogeyBPUjogW3sgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtmaW5kVXNlcnMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcbiAgICBTRUFSQ0hfVVNFUlNfUVVFUlksXHJcbiAgICB7XHJcbiAgICAgIGZldGNoUG9saWN5OiBcIm5vLWNhY2hlXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXNlcnMgPSBkYXRhPy5zZWFyY2hUZXJtcyB8fCBbXTtcclxuXHJcbiAgY29uc3QgZmluZFVzZXJzQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kVXNlcnMsIDM1MCk7XHJcblxyXG4gIHJlc2V0SWRDb3VudGVyKCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlzT3BlbixcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBnZXRNZW51UHJvcHMsXHJcbiAgICBnZXRDb21ib2JveFByb3BzLFxyXG4gICAgZ2V0VXNlclByb3BzLFxyXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcclxuICB9ID0gdXNlQ29tYm9ib3goe1xyXG4gICAgdXNlcnMsXHJcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgIGZpbmRVc2Vyc0J1dENoaWxsKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RlZFVzZXJDaGFuZ2UoeyBzZWxlY3RlZFVzZXIgfSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IGAvdXNlci8ke3NlbGVjdGVkVXNlci5pZH1gLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB1c2VyVG9TdHJpbmc6ICh1c2VyKSA9PiB1c2VyPy5uYW1lIHx8IGBgLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIHVzZXJcIixcclxuICAgICAgICAgICAgaWQ6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJcIixcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICB7Li4uZ2V0VXNlclByb3BzKHsgdXNlciB9KX1cclxuICAgICAgICAgICAgICBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgPC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICB7aXNPcGVuICYmICF1c2Vycy5sZW5ndGggJiYgIWxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPERyb3BEb3duSXRlbT5Tb3JyeSAsIE5vIHVzZXJzIGZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImZ1bmN0aW9uIHQodCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYxPT09dC5ub2RlVHlwZX1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuKCFlfHxcImhpZGRlblwiIT09dCkmJlwidmlzaWJsZVwiIT09dCYmXCJjbGlwXCIhPT10fWZ1bmN0aW9uIG4odCxuKXtpZih0LmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8dC5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKXt2YXIgcj1nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk7cmV0dXJuIGUoci5vdmVyZmxvd1ksbil8fGUoci5vdmVyZmxvd1gsbil8fGZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe2lmKCF0Lm93bmVyRG9jdW1lbnR8fCF0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpcmV0dXJuIG51bGw7dHJ5e3JldHVybiB0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50fWNhdGNoKHQpe3JldHVybiBudWxsfX0odCk7cmV0dXJuISFlJiYoZS5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fGUuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl9KHQpfXJldHVybiExfWZ1bmN0aW9uIHIodCxlLG4scixpLG8sbCxkKXtyZXR1cm4gbzx0JiZsPmV8fG8+dCYmbDxlPzA6bzw9dCYmZDw9bnx8bD49ZSYmZD49bj9vLXQtcjpsPmUmJmQ8bnx8bzx0JiZkPm4/bC1lK2k6MH1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLGkpe3ZhciBvPXdpbmRvdyxsPWkuc2Nyb2xsTW9kZSxkPWkuYmxvY2ssdT1pLmlubGluZSxoPWkuYm91bmRhcnksYT1pLnNraXBPdmVyZmxvd0hpZGRlbkVsZW1lbnRzLGM9XCJmdW5jdGlvblwiPT10eXBlb2YgaD9oOmZ1bmN0aW9uKHQpe3JldHVybiB0IT09aH07aWYoIXQoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdGFyZ2V0XCIpO2Zvcih2YXIgZj1kb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQscz1bXSxwPWU7dChwKSYmYyhwKTspe2lmKChwPXAucGFyZW50Tm9kZSk9PT1mKXtzLnB1c2gocCk7YnJlYWt9cD09PWRvY3VtZW50LmJvZHkmJm4ocCkmJiFuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl8fG4ocCxhKSYmcy5wdXNoKHApfWZvcih2YXIgZz1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQud2lkdGg6aW5uZXJXaWR0aCxtPW8udmlzdWFsVmlld3BvcnQ/by52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6aW5uZXJIZWlnaHQsdz13aW5kb3cuc2Nyb2xsWHx8cGFnZVhPZmZzZXQsdj13aW5kb3cuc2Nyb2xsWXx8cGFnZVlPZmZzZXQsVz1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Vy5oZWlnaHQsSD1XLndpZHRoLHk9Vy50b3AsTT1XLnJpZ2h0LEU9Vy5ib3R0b20sVj1XLmxlZnQseD1cInN0YXJ0XCI9PT1kfHxcIm5lYXJlc3RcIj09PWQ/eTpcImVuZFwiPT09ZD9FOnkrYi8yLEk9XCJjZW50ZXJcIj09PXU/VitILzI6XCJlbmRcIj09PXU/TTpWLEM9W10sVD0wO1Q8cy5sZW5ndGg7VCsrKXt2YXIgaz1zW1RdLEI9ay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxEPUIuaGVpZ2h0LE89Qi53aWR0aCxSPUIudG9wLFg9Qi5yaWdodCxZPUIuYm90dG9tLEw9Qi5sZWZ0O2lmKFwiaWYtbmVlZGVkXCI9PT1sJiZ5Pj0wJiZWPj0wJiZFPD1tJiZNPD1nJiZ5Pj1SJiZFPD1ZJiZWPj1MJiZNPD1YKXJldHVybiBDO3ZhciBTPWdldENvbXB1dGVkU3R5bGUoayksaj1wYXJzZUludChTLmJvcmRlckxlZnRXaWR0aCwxMCksTj1wYXJzZUludChTLmJvcmRlclRvcFdpZHRoLDEwKSxxPXBhcnNlSW50KFMuYm9yZGVyUmlnaHRXaWR0aCwxMCksej1wYXJzZUludChTLmJvcmRlckJvdHRvbVdpZHRoLDEwKSxBPTAsRj0wLEc9XCJvZmZzZXRXaWR0aFwiaW4gaz9rLm9mZnNldFdpZHRoLWsuY2xpZW50V2lkdGgtai1xOjAsSj1cIm9mZnNldEhlaWdodFwiaW4gaz9rLm9mZnNldEhlaWdodC1rLmNsaWVudEhlaWdodC1OLXo6MDtpZihmPT09aylBPVwic3RhcnRcIj09PWQ/eDpcImVuZFwiPT09ZD94LW06XCJuZWFyZXN0XCI9PT1kP3Iodix2K20sbSxOLHosdit4LHYreCtiLGIpOngtbS8yLEY9XCJzdGFydFwiPT09dT9JOlwiY2VudGVyXCI9PT11P0ktZy8yOlwiZW5kXCI9PT11P0ktZzpyKHcsdytnLGcsaixxLHcrSSx3K0krSCxIKSxBPU1hdGgubWF4KDAsQSt2KSxGPU1hdGgubWF4KDAsRit3KTtlbHNle0E9XCJzdGFydFwiPT09ZD94LVItTjpcImVuZFwiPT09ZD94LVkreitKOlwibmVhcmVzdFwiPT09ZD9yKFIsWSxELE4seitKLHgseCtiLGIpOngtKFIrRC8yKStKLzIsRj1cInN0YXJ0XCI9PT11P0ktTC1qOlwiY2VudGVyXCI9PT11P0ktKEwrTy8yKStHLzI6XCJlbmRcIj09PXU/SS1YK3ErRzpyKEwsWCxPLGoscStHLEksSStILEgpO3ZhciBLPWsuc2Nyb2xsTGVmdCxQPWsuc2Nyb2xsVG9wO3grPVAtKEE9TWF0aC5tYXgoMCxNYXRoLm1pbihQK0Esay5zY3JvbGxIZWlnaHQtRCtKKSkpLEkrPUstKEY9TWF0aC5tYXgoMCxNYXRoLm1pbihLK0Ysay5zY3JvbGxXaWR0aC1PK0cpKSl9Qy5wdXNoKHtlbDprLHRvcDpBLGxlZnQ6Rn0pfXJldHVybiBDfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIENvbXBvbmVudCwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IGNvbXB1dGVTY3JvbGxJbnRvVmlldyBmcm9tICdjb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcnO1xuXG52YXIgaWRDb3VudGVyID0gMDtcbi8qKlxuICogQWNjZXB0cyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBpdCBpZiBpdCdzIGEgZnVuY3Rpb25cbiAqIG9yIGEgbm9vcCBmdW5jdGlvbiBpZiBpdCdzIG5vdC4gVGhpcyBhbGxvd3MgdXMgdG9cbiAqIGFjY2VwdCBhIGNhbGxiYWNrLCBidXQgbm90IHdvcnJ5IGFib3V0IGl0IGlmIGl0J3Mgbm90XG4gKiBwYXNzZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiB0aGUgY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY2JUb0NiKGNiKSB7XG4gIHJldHVybiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgPyBjYiA6IG5vb3A7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBTY3JvbGwgbm9kZSBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIHNjcm9sbCBpbnRvIHZpZXdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG1lbnVOb2RlIHRoZSBtZW51IGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZSwgbWVudU5vZGUpIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGFjdGlvbnMgPSBjb21wdXRlU2Nyb2xsSW50b1ZpZXcobm9kZSwge1xuICAgIGJvdW5kYXJ5OiBtZW51Tm9kZSxcbiAgICBibG9jazogJ25lYXJlc3QnLFxuICAgIHNjcm9sbE1vZGU6ICdpZi1uZWVkZWQnXG4gIH0pO1xuICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZWwgPSBfcmVmLmVsLFxuICAgICAgICB0b3AgPSBfcmVmLnRvcCxcbiAgICAgICAgbGVmdCA9IF9yZWYubGVmdDtcbiAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBub2RlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjaGlsZCB0aGUgY2hpbGQgbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciB0aGUgcGFyZW50IGlzIHRoZSBjaGlsZCBvciB0aGUgY2hpbGQgaXMgaW4gdGhlIHBhcmVudFxuICovXG5cblxuZnVuY3Rpb24gaXNPckNvbnRhaW5zTm9kZShwYXJlbnQsIGNoaWxkKSB7XG4gIHJldHVybiBwYXJlbnQgPT09IGNoaWxkIHx8IHBhcmVudC5jb250YWlucyAmJiBwYXJlbnQuY29udGFpbnMoY2hpbGQpO1xufVxuLyoqXG4gKiBTaW1wbGUgZGVib3VuY2UgaW1wbGVtZW50YXRpb24uIFdpbGwgY2FsbCB0aGUgZ2l2ZW5cbiAqIGZ1bmN0aW9uIG9uY2UgYWZ0ZXIgdGhlIHRpbWUgZ2l2ZW4gaGFzIHBhc3NlZCBzaW5jZVxuICogaXQgd2FzIGxhc3QgY2FsbGVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIHRpbWVcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIHRoZSB0aW1lIHRvIHdhaXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKi9cblxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKTtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0sIHRpbWUpO1xuICB9XG5cbiAgd3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuLyoqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgdG8gY29tcG9zZSBldmVudCBoYW5kbGVycy5cbiAqIFRoZXkgYXJlIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIG9uZSBvZiB0aGVtIHNldHNcbiAqIGBldmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdCA9IHRydWVgLlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZm5zIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBldmVudCBoYW5kbGVyIHRvIGFkZCB0byBhbiBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBjYWxsQWxsRXZlbnRIYW5kbGVycygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBmbnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm5zLnNvbWUoZnVuY3Rpb24gKGZuKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdCB8fCBldmVudC5oYXNPd25Qcm9wZXJ0eSgnbmF0aXZlRXZlbnQnKSAmJiBldmVudC5uYXRpdmVFdmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdDtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVmcygpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCByZWZzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgcmVmc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZihub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogVGhpcyBnZW5lcmF0ZXMgYSB1bmlxdWUgSUQgZm9yIGFuIGluc3RhbmNlIG9mIERvd25zaGlmdFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdW5pcXVlIElEXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICByZXR1cm4gU3RyaW5nKGlkQ291bnRlcisrKTtcbn1cbi8qKlxuICogUmVzZXRzIGlkQ291bnRlciB0byAwLiBVc2VkIGZvciBTU1IuXG4gKi9cblxuXG5mdW5jdGlvbiByZXNldElkQ291bnRlcigpIHtcbiAgaWRDb3VudGVyID0gMDtcbn1cbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igc3RhdHVzIG1lc3NhZ2UuIE9ubHkgYWRkZWQgd2hlbiBtZW51IGlzIG9wZW4uXG4gKiBXaWxsIHNwZWNpZnQgaWYgdGhlcmUgYXJlIHJlc3VsdHMgaW4gdGhlIGxpc3QsIGFuZCBpZiBzbywgaG93IG1hbnksXG4gKiBhbmQgd2hhdCBrZXlzIGFyZSByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gdGhlIGRvd25zaGlmdCBzdGF0ZSBhbmQgb3RoZXIgcmVsZXZhbnQgcHJvcGVydGllc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgYTExeSBzdGF0dXMgbWVzc2FnZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QTExeVN0YXR1c01lc3NhZ2UoX3JlZjIpIHtcbiAgdmFyIGlzT3BlbiA9IF9yZWYyLmlzT3BlbixcbiAgICAgIHJlc3VsdENvdW50ID0gX3JlZjIucmVzdWx0Q291bnQsXG4gICAgICBwcmV2aW91c1Jlc3VsdENvdW50ID0gX3JlZjIucHJldmlvdXNSZXN1bHRDb3VudDtcblxuICBpZiAoIWlzT3Blbikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghcmVzdWx0Q291bnQpIHtcbiAgICByZXR1cm4gJ05vIHJlc3VsdHMgYXJlIGF2YWlsYWJsZS4nO1xuICB9XG5cbiAgaWYgKHJlc3VsdENvdW50ICE9PSBwcmV2aW91c1Jlc3VsdENvdW50KSB7XG4gICAgcmV0dXJuIHJlc3VsdENvdW50ICsgXCIgcmVzdWx0XCIgKyAocmVzdWx0Q291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZScpICsgXCIgYXZhaWxhYmxlLCB1c2UgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZS4gUHJlc3MgRW50ZXIga2V5IHRvIHNlbGVjdC5cIjtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogVGFrZXMgYW4gYXJndW1lbnQgYW5kIGlmIGl0J3MgYW4gYXJyYXksIHJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5XG4gKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgYXJndW1lbnRcbiAqIEBwYXJhbSB7Kn0gYXJnIHRoZSBtYXliZS1hcnJheVxuICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWUgdGhlIHZhbHVlIGlmIGFyZyBpcyBmYWxzZXkgbm90IGRlZmluZWRcbiAqIEByZXR1cm4geyp9IHRoZSBhcmcgb3IgaXQncyBmaXJzdCBpdGVtXG4gKi9cblxuXG5mdW5jdGlvbiB1bndyYXBBcnJheShhcmcsIGRlZmF1bHRWYWx1ZSkge1xuICBhcmcgPSBBcnJheS5pc0FycmF5KGFyZykgP1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAocHJlYWN0KSAqL1xuICBhcmdbMF0gOiBhcmc7XG5cbiAgaWYgKCFhcmcgJiYgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJnO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IChQKXJlYWN0IGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQncyBhIERPTSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQoZWxlbWVudCkge1xuICAvLyB0aGVuIHdlIGFzc3VtZSB0aGlzIGlzIHJlYWN0XG4gIHJldHVybiB0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJztcbn1cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgKFApcmVhY3QgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcHJvcHNcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQcm9wcyhlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnByb3BzO1xufVxuLyoqXG4gKiBUaHJvd3MgYSBoZWxwZnVsIGVycm9yIG1lc3NhZ2UgZm9yIHJlcXVpcmVkIHByb3BlcnRpZXMuIFVzZWZ1bFxuICogdG8gYmUgdXNlZCBhcyBhIGRlZmF1bHQgaW4gZGVzdHJ1Y3R1cmluZyBvciBvYmplY3QgcGFyYW1zLlxuICogQHBhcmFtIHtTdHJpbmd9IGZuTmFtZSB0aGUgZnVuY3Rpb24gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIHRoZSBwcm9wIG5hbWVcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlcXVpcmVkUHJvcChmbk5hbWUsIHByb3BOYW1lKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHJvcGVydHkgXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgaXMgcmVxdWlyZWQgaW4gXFxcIlwiICsgZm5OYW1lICsgXCJcXFwiXCIpO1xufVxuXG52YXIgc3RhdGVLZXlzID0gWydoaWdobGlnaHRlZEluZGV4JywgJ2lucHV0VmFsdWUnLCAnaXNPcGVuJywgJ3NlbGVjdGVkSXRlbScsICd0eXBlJ107XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHN0YXRlIHRoYXQgaXMgcmVsZXZhbnQgdG8gZG93bnNoaWZ0XG4gKi9cblxuZnVuY3Rpb24gcGlja1N0YXRlKHN0YXRlKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB7fTtcbiAgc3RhdGVLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJlc3VsdFtrXSA9IHN0YXRlW2tdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFRoaXMgd2lsbCBwZXJmb3JtIGEgc2hhbGxvdyBtZXJnZSBvZiB0aGUgZ2l2ZW4gc3RhdGUgb2JqZWN0XG4gKiB3aXRoIHRoZSBzdGF0ZSBjb21pbmcgZnJvbSBwcm9wc1xuICogKGZvciB0aGUgY29udHJvbGxlZCBjb21wb25lbnQgc2NlbmFyaW8pXG4gKiBUaGlzIGlzIHVzZWQgaW4gc3RhdGUgdXBkYXRlciBmdW5jdGlvbnMgc28gdGhleSdyZSByZWZlcmVuY2luZ1xuICogdGhlIHJpZ2h0IHN0YXRlIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgaXQgY29tZXMgZnJvbS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgVGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQvaG9vay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgcHJvcHMgdGhhdCBtYXkgY29udGFpbiBjb250cm9sbGVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtZXJnZWQgY29udHJvbGxlZCBzdGF0ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlLCBwcm9wcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShmdW5jdGlvbiAocHJldlN0YXRlLCBrZXkpIHtcbiAgICBwcmV2U3RhdGVba2V5XSA9IGlzQ29udHJvbGxlZFByb3AocHJvcHMsIGtleSkgPyBwcm9wc1trZXldIDogc3RhdGVba2V5XTtcbiAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9LCB7fSk7XG59XG4vKipcbiAqIFRoaXMgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgcHJvcCBpcyBhIFwiY29udHJvbGxlZCBwcm9wXCIgbWVhbmluZyBpdCBpc1xuICogc3RhdGUgd2hpY2ggaXMgY29udHJvbGxlZCBieSB0aGUgb3V0c2lkZSBvZiB0aGlzIGNvbXBvbmVudCByYXRoZXJcbiAqIHRoYW4gd2l0aGluIHRoaXMgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgcHJvcHMgdGhhdCBtYXkgY29udGFpbiBjb250cm9sbGVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIGtleSB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciBpdCBpcyBhIGNvbnRyb2xsZWQgY29udHJvbGxlZCBwcm9wXG4gKi9cblxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWRQcm9wKHByb3BzLCBrZXkpIHtcbiAgcmV0dXJuIHByb3BzW2tleV0gIT09IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgJ2tleScgcHJvcGVydHkgb2YgYSBLZXlib2FyZEV2ZW50IGluIElFL0VkZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBhIGtleWJvYXJkRXZlbnQgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IGtleWJvYXJkIGtleVxuICovXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpIHtcbiAgdmFyIGtleSA9IGV2ZW50LmtleSxcbiAgICAgIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoaWUpICovXG5cbiAgaWYgKGtleUNvZGUgPj0gMzcgJiYga2V5Q29kZSA8PSA0MCAmJiBrZXkuaW5kZXhPZignQXJyb3cnKSAhPT0gMCkge1xuICAgIHJldHVybiBcIkFycm93XCIgKyBrZXk7XG4gIH1cblxuICByZXR1cm4ga2V5O1xufVxuLyoqXG4gKiBTaW1wbGUgY2hlY2sgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvYmplY3QgbGl0ZXJhbFxuICogQHBhcmFtIHsqfSBvYmogYW55IHRoaW5nc1xuICogQHJldHVybiB7Qm9vbGVhbn0gd2hldGhlciBpdCdzIG9iamVjdCBsaXRlcmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXcgaW5kZXggaW4gdGhlIGxpc3QsIGluIGEgY2lyY3VsYXIgd2F5LiBJZiBuZXh0IHZhbHVlIGlzIG91dCBvZiBib25kcyBmcm9tIHRoZSB0b3RhbCxcbiAqIGl0IHdpbGwgd3JhcCB0byBlaXRoZXIgMCBvciBpdGVtQ291bnQgLSAxLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBtb3ZlQW1vdW50IE51bWJlciBvZiBwb3NpdGlvbnMgdG8gbW92ZS4gTmVnYXRpdmUgdG8gbW92ZSBiYWNrd2FyZHMsIHBvc2l0aXZlIGZvcndhcmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJhc2VJbmRleCBUaGUgaW5pdGlhbCBwb3NpdGlvbiB0byBtb3ZlIGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRJdGVtTm9kZUZyb21JbmRleCBVc2VkIHRvIGNoZWNrIGlmIGl0ZW0gaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNpcmN1bGFyIFNwZWNpZnkgaWYgbmF2aWdhdGlvbiBpcyBjaXJjdWxhci4gRGVmYXVsdCBpcyB0cnVlLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIG5ldyBpbmRleCBhZnRlciB0aGUgbW92ZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE5leHRXcmFwcGluZ0luZGV4KG1vdmVBbW91bnQsIGJhc2VJbmRleCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgY2lyY3VsYXIpIHtcbiAgaWYgKGNpcmN1bGFyID09PSB2b2lkIDApIHtcbiAgICBjaXJjdWxhciA9IHRydWU7XG4gIH1cblxuICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgdmFyIGl0ZW1zTGFzdEluZGV4ID0gaXRlbUNvdW50IC0gMTtcblxuICBpZiAodHlwZW9mIGJhc2VJbmRleCAhPT0gJ251bWJlcicgfHwgYmFzZUluZGV4IDwgMCB8fCBiYXNlSW5kZXggPj0gaXRlbUNvdW50KSB7XG4gICAgYmFzZUluZGV4ID0gbW92ZUFtb3VudCA+IDAgPyAtMSA6IGl0ZW1zTGFzdEluZGV4ICsgMTtcbiAgfVxuXG4gIHZhciBuZXdJbmRleCA9IGJhc2VJbmRleCArIG1vdmVBbW91bnQ7XG5cbiAgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgIG5ld0luZGV4ID0gY2lyY3VsYXIgPyBpdGVtc0xhc3RJbmRleCA6IDA7XG4gIH0gZWxzZSBpZiAobmV3SW5kZXggPiBpdGVtc0xhc3RJbmRleCkge1xuICAgIG5ld0luZGV4ID0gY2lyY3VsYXIgPyAwIDogaXRlbXNMYXN0SW5kZXg7XG4gIH1cblxuICB2YXIgbm9uRGlzYWJsZWROZXdJbmRleCA9IGdldE5leHROb25EaXNhYmxlZEluZGV4KG1vdmVBbW91bnQsIG5ld0luZGV4LCBpdGVtQ291bnQsIGdldEl0ZW1Ob2RlRnJvbUluZGV4LCBjaXJjdWxhcik7XG5cbiAgaWYgKG5vbkRpc2FibGVkTmV3SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIGJhc2VJbmRleCA+PSBpdGVtQ291bnQgPyAtMSA6IGJhc2VJbmRleDtcbiAgfVxuXG4gIHJldHVybiBub25EaXNhYmxlZE5ld0luZGV4O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGluZGV4IGluIHRoZSBsaXN0IG9mIGFuIGl0ZW0gdGhhdCBpcyBub3QgZGlzYWJsZWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1vdmVBbW91bnQgTnVtYmVyIG9mIHBvc2l0aW9ucyB0byBtb3ZlLiBOZWdhdGl2ZSB0byBtb3ZlIGJhY2t3YXJkcywgcG9zaXRpdmUgZm9yd2FyZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gYmFzZUluZGV4IFRoZSBpbml0aWFsIHBvc2l0aW9uIHRvIG1vdmUgZnJvbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgVGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldEl0ZW1Ob2RlRnJvbUluZGV4IFVzZWQgdG8gY2hlY2sgaWYgaXRlbSBpcyBkaXNhYmxlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2lyY3VsYXIgU3BlY2lmeSBpZiBuYXZpZ2F0aW9uIGlzIGNpcmN1bGFyLiBEZWZhdWx0IGlzIHRydWUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgbmV3IGluZGV4LiBSZXR1cm5zIGJhc2VJbmRleCBpZiBpdGVtIGlzIG5vdCBkaXNhYmxlZC4gUmV0dXJucyBuZXh0IG5vbi1kaXNhYmxlZCBpdGVtIG90aGVyd2lzZS4gSWYgbm8gbm9uLWRpc2FibGVkIGZvdW5kIGl0IHdpbGwgcmV0dXJuIC0xLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgobW92ZUFtb3VudCwgYmFzZUluZGV4LCBpdGVtQ291bnQsIGdldEl0ZW1Ob2RlRnJvbUluZGV4LCBjaXJjdWxhcikge1xuICB2YXIgY3VycmVudEVsZW1lbnROb2RlID0gZ2V0SXRlbU5vZGVGcm9tSW5kZXgoYmFzZUluZGV4KTtcblxuICBpZiAoIWN1cnJlbnRFbGVtZW50Tm9kZSB8fCAhY3VycmVudEVsZW1lbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiBiYXNlSW5kZXg7XG4gIH1cblxuICBpZiAobW92ZUFtb3VudCA+IDApIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IGJhc2VJbmRleCArIDE7IGluZGV4IDwgaXRlbUNvdW50OyBpbmRleCsrKSB7XG4gICAgICBpZiAoIWdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfaW5kZXggPSBiYXNlSW5kZXggLSAxOyBfaW5kZXggPj0gMDsgX2luZGV4LS0pIHtcbiAgICAgIGlmICghZ2V0SXRlbU5vZGVGcm9tSW5kZXgoX2luZGV4KS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgcmV0dXJuIF9pbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoY2lyY3VsYXIpIHtcbiAgICByZXR1cm4gbW92ZUFtb3VudCA+IDAgPyBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgxLCAwLCBpdGVtQ291bnQsIGdldEl0ZW1Ob2RlRnJvbUluZGV4LCBmYWxzZSkgOiBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgtMSwgaXRlbUNvdW50IC0gMSwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiB0aGUgZG93bnNoaWZ0IGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IHRhcmdldCBUYXJnZXQgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGRvd25zaGlmdEVsZW1lbnRzIFRoZSBlbGVtZW50cyB0aGF0IGZvcm0gZG93bnNoaWZ0IChsaXN0LCB0b2dnbGUgYnV0dG9uIGV0YykuXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrQWN0aXZlRWxlbWVudCBXaGV0aGVyIHRvIGFsc28gY2hlY2sgYWN0aXZlRWxlbWVudC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHRhcmdldCBpcyB3aXRoaW4gZG93bnNoaWZ0IGVsZW1lbnRzLlxuICovXG5cblxuZnVuY3Rpb24gdGFyZ2V0V2l0aGluRG93bnNoaWZ0KHRhcmdldCwgZG93bnNoaWZ0RWxlbWVudHMsIGRvY3VtZW50LCBjaGVja0FjdGl2ZUVsZW1lbnQpIHtcbiAgaWYgKGNoZWNrQWN0aXZlRWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgY2hlY2tBY3RpdmVFbGVtZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkb3duc2hpZnRFbGVtZW50cy5zb21lKGZ1bmN0aW9uIChjb250ZXh0Tm9kZSkge1xuICAgIHJldHVybiBjb250ZXh0Tm9kZSAmJiAoaXNPckNvbnRhaW5zTm9kZShjb250ZXh0Tm9kZSwgdGFyZ2V0KSB8fCBjaGVja0FjdGl2ZUVsZW1lbnQgJiYgaXNPckNvbnRhaW5zTm9kZShjb250ZXh0Tm9kZSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb250cm9sbGVkVW5jaGFuZ2VkKHN0YXRlLCBwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB3YXJuaW5nRGVzY3JpcHRpb24gPSBcIlRoaXMgcHJvcCBzaG91bGQgbm90IHN3aXRjaCBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBEb3duc2hpZnQgZWxlbWVudCBmb3IgdGhlIGxpZmV0aW1lIG9mIHRoZSBjb21wb25lbnQuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXRodWIuY29tL2Rvd25zaGlmdC1qcy9kb3duc2hpZnQjY29udHJvbC1wcm9wc1wiO1xuICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcEtleSkge1xuICAgIGlmIChwcmV2UHJvcHNbcHJvcEtleV0gIT09IHVuZGVmaW5lZCAmJiBuZXh0UHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IEEgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBjb250cm9sbGVkIHByb3AgXFxcIlwiICsgcHJvcEtleSArIFwiXFxcIiB0byBiZSB1bmNvbnRyb2xsZWQuIFwiICsgd2FybmluZ0Rlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHByZXZQcm9wc1twcm9wS2V5XSA9PT0gdW5kZWZpbmVkICYmIG5leHRQcm9wc1twcm9wS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogQSBjb21wb25lbnQgaGFzIGNoYW5nZWQgdGhlIHVuY29udHJvbGxlZCBwcm9wIFxcXCJcIiArIHByb3BLZXkgKyBcIlxcXCIgdG8gYmUgY29udHJvbGxlZC4gXCIgKyB3YXJuaW5nRGVzY3JpcHRpb24pO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBjbGVhbnVwU3RhdHVzID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICBnZXRTdGF0dXNEaXYoKS50ZXh0Q29udGVudCA9ICcnO1xufSwgNTAwKTtcbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXR1cyB0aGUgc3RhdHVzIG1lc3NhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudFByb3AgZG9jdW1lbnQgcGFzc2VkIGJ5IHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhzdGF0dXMsIGRvY3VtZW50UHJvcCkge1xuICB2YXIgZGl2ID0gZ2V0U3RhdHVzRGl2KGRvY3VtZW50UHJvcCk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkaXYudGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gIGNsZWFudXBTdGF0dXMoKTtcbn1cbi8qKlxuICogR2V0IHRoZSBzdGF0dXMgbm9kZSBvciBjcmVhdGUgaXQgaWYgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudFByb3AgZG9jdW1lbnQgcGFzc2VkIGJ5IHRoZSB1c2VyLlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IHRoZSBzdGF0dXMgbm9kZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFN0YXR1c0Rpdihkb2N1bWVudFByb3ApIHtcbiAgaWYgKGRvY3VtZW50UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZG9jdW1lbnRQcm9wID0gZG9jdW1lbnQ7XG4gIH1cblxuICB2YXIgc3RhdHVzRGl2ID0gZG9jdW1lbnRQcm9wLmdldEVsZW1lbnRCeUlkKCdhMTF5LXN0YXR1cy1tZXNzYWdlJyk7XG5cbiAgaWYgKHN0YXR1c0Rpdikge1xuICAgIHJldHVybiBzdGF0dXNEaXY7XG4gIH1cblxuICBzdGF0dXNEaXYgPSBkb2N1bWVudFByb3AuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ExMXktc3RhdHVzLW1lc3NhZ2UnKTtcbiAgc3RhdHVzRGl2LnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcbiAgc3RhdHVzRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICBzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCdhcmlhLXJlbGV2YW50JywgJ2FkZGl0aW9ucyB0ZXh0Jyk7XG4gIE9iamVjdC5hc3NpZ24oc3RhdHVzRGl2LnN0eWxlLCB7XG4gICAgYm9yZGVyOiAnMCcsXG4gICAgY2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCdcbiAgfSk7XG4gIGRvY3VtZW50UHJvcC5ib2R5LmFwcGVuZENoaWxkKHN0YXR1c0Rpdik7XG4gIHJldHVybiBzdGF0dXNEaXY7XG59XG5cbnZhciB1bmtub3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX3Vua25vd25fXycgOiAwO1xudmFyIG1vdXNlVXAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfbW91c2V1cF9fJyA6IDE7XG52YXIgaXRlbU1vdXNlRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfaXRlbV9tb3VzZWVudGVyX18nIDogMjtcbnZhciBrZXlEb3duQXJyb3dVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2Fycm93X3VwX18nIDogMztcbnZhciBrZXlEb3duQXJyb3dEb3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDQ7XG52YXIga2V5RG93bkVzY2FwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2VzY2FwZV9fJyA6IDU7XG52YXIga2V5RG93bkVudGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fZW50ZXJfXycgOiA2O1xudmFyIGtleURvd25Ib21lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25faG9tZV9fJyA6IDc7XG52YXIga2V5RG93bkVuZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2VuZF9fJyA6IDg7XG52YXIgY2xpY2tJdGVtID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2NsaWNrX2l0ZW1fXycgOiA5O1xudmFyIGJsdXJJbnB1dCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9ibHVyX2lucHV0X18nIDogMTA7XG52YXIgY2hhbmdlSW5wdXQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfY2hhbmdlX2lucHV0X18nIDogMTE7XG52YXIga2V5RG93blNwYWNlQnV0dG9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fc3BhY2VfYnV0dG9uX18nIDogMTI7XG52YXIgY2xpY2tCdXR0b24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfY2xpY2tfYnV0dG9uX18nIDogMTM7XG52YXIgYmx1ckJ1dHRvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9ibHVyX2J1dHRvbl9fJyA6IDE0O1xudmFyIGNvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9jb250cm9sbGVkX3Byb3BfdXBkYXRlZF9zZWxlY3RlZF9pdGVtX18nIDogMTU7XG52YXIgdG91Y2hFbmQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfdG91Y2hlbmRfXycgOiAxNjtcblxudmFyIHN0YXRlQ2hhbmdlVHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgdW5rbm93bjogdW5rbm93bixcbiAgbW91c2VVcDogbW91c2VVcCxcbiAgaXRlbU1vdXNlRW50ZXI6IGl0ZW1Nb3VzZUVudGVyLFxuICBrZXlEb3duQXJyb3dVcDoga2V5RG93bkFycm93VXAsXG4gIGtleURvd25BcnJvd0Rvd246IGtleURvd25BcnJvd0Rvd24sXG4gIGtleURvd25Fc2NhcGU6IGtleURvd25Fc2NhcGUsXG4gIGtleURvd25FbnRlcjoga2V5RG93bkVudGVyLFxuICBrZXlEb3duSG9tZToga2V5RG93bkhvbWUsXG4gIGtleURvd25FbmQ6IGtleURvd25FbmQsXG4gIGNsaWNrSXRlbTogY2xpY2tJdGVtLFxuICBibHVySW5wdXQ6IGJsdXJJbnB1dCxcbiAgY2hhbmdlSW5wdXQ6IGNoYW5nZUlucHV0LFxuICBrZXlEb3duU3BhY2VCdXR0b246IGtleURvd25TcGFjZUJ1dHRvbixcbiAgY2xpY2tCdXR0b246IGNsaWNrQnV0dG9uLFxuICBibHVyQnV0dG9uOiBibHVyQnV0dG9uLFxuICBjb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW06IGNvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbSxcbiAgdG91Y2hFbmQ6IHRvdWNoRW5kXG59KTtcblxudmFyIERvd25zaGlmdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIHZhciBEb3duc2hpZnQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoRG93bnNoaWZ0LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIERvd25zaGlmdChfcHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBfcHJvcHMpIHx8IHRoaXM7XG5cbiAgICAgIF90aGlzLmlkID0gX3RoaXMucHJvcHMuaWQgfHwgXCJkb3duc2hpZnQtXCIgKyBnZW5lcmF0ZUlkKCk7XG4gICAgICBfdGhpcy5tZW51SWQgPSBfdGhpcy5wcm9wcy5tZW51SWQgfHwgX3RoaXMuaWQgKyBcIi1tZW51XCI7XG4gICAgICBfdGhpcy5sYWJlbElkID0gX3RoaXMucHJvcHMubGFiZWxJZCB8fCBfdGhpcy5pZCArIFwiLWxhYmVsXCI7XG4gICAgICBfdGhpcy5pbnB1dElkID0gX3RoaXMucHJvcHMuaW5wdXRJZCB8fCBfdGhpcy5pZCArIFwiLWlucHV0XCI7XG5cbiAgICAgIF90aGlzLmdldEl0ZW1JZCA9IF90aGlzLnByb3BzLmdldEl0ZW1JZCB8fCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmlkICsgXCItaXRlbS1cIiArIGluZGV4O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW5wdXQgPSBudWxsO1xuICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgIF90aGlzLml0ZW1Db3VudCA9IG51bGw7XG4gICAgICBfdGhpcy5wcmV2aW91c1Jlc3VsdENvdW50ID0gMDtcbiAgICAgIF90aGlzLnRpbWVvdXRJZHMgPSBbXTtcblxuICAgICAgX3RoaXMuaW50ZXJuYWxTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGZuLCB0aW1lKSB7XG4gICAgICAgIHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnRpbWVvdXRJZHMgPSBfdGhpcy50aW1lb3V0SWRzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT09IGlkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0sIHRpbWUpO1xuXG4gICAgICAgIF90aGlzLnRpbWVvdXRJZHMucHVzaChpZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRJdGVtQ291bnQgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgX3RoaXMuaXRlbUNvdW50ID0gY291bnQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy51bnNldEl0ZW1Db3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaXRlbUNvdW50ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldEhpZ2hsaWdodGVkSW5kZXggPSBmdW5jdGlvbiAoaGlnaGxpZ2h0ZWRJbmRleCwgb3RoZXJTdGF0ZVRvU2V0KSB7XG4gICAgICAgIGlmIChoaWdobGlnaHRlZEluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMucHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3RoZXJTdGF0ZVRvU2V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHBpY2tTdGF0ZShvdGhlclN0YXRlVG9TZXQpO1xuXG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXhcbiAgICAgICAgfSwgb3RoZXJTdGF0ZVRvU2V0KSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX3RoaXMucHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgaXNPcGVuOiBfdGhpcy5wcm9wcy5kZWZhdWx0SXNPcGVuXG4gICAgICAgIH0sIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNlbGVjdEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgb3RoZXJTdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSBwaWNrU3RhdGUob3RoZXJTdGF0ZVRvU2V0KTtcblxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBpc09wZW46IF90aGlzLnByb3BzLmRlZmF1bHRJc09wZW4sXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX3RoaXMucHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpdGVtLFxuICAgICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLml0ZW1Ub1N0cmluZyhpdGVtKVxuICAgICAgICB9LCBvdGhlclN0YXRlVG9TZXQpLCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZWxlY3RJdGVtQXRJbmRleCA9IGZ1bmN0aW9uIChpdGVtSW5kZXgsIG90aGVyU3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5pdGVtc1tpdGVtSW5kZXhdO1xuXG4gICAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZWxlY3RJdGVtKGl0ZW0sIG90aGVyU3RhdGVUb1NldCwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2VsZWN0SGlnaGxpZ2h0ZWRJdGVtID0gZnVuY3Rpb24gKG90aGVyU3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdEl0ZW1BdEluZGV4KF90aGlzLmdldFN0YXRlKCkuaGlnaGxpZ2h0ZWRJbmRleCwgb3RoZXJTdGF0ZVRvU2V0LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIHZhciBpc0l0ZW1TZWxlY3RlZCwgb25DaGFuZ2VBcmc7XG4gICAgICAgIHZhciBvblN0YXRlQ2hhbmdlQXJnID0ge307XG4gICAgICAgIHZhciBpc1N0YXRlVG9TZXRGdW5jdGlvbiA9IHR5cGVvZiBzdGF0ZVRvU2V0ID09PSAnZnVuY3Rpb24nOyAvLyB3ZSB3YW50IHRvIGNhbGwgYG9uSW5wdXRWYWx1ZUNoYW5nZWAgYmVmb3JlIHRoZSBgc2V0U3RhdGVgIGNhbGxcbiAgICAgICAgLy8gc28gc29tZW9uZSBjb250cm9sbGluZyB0aGUgYGlucHV0VmFsdWVgIHN0YXRlIGdldHMgbm90aWZpZWQgb2ZcbiAgICAgICAgLy8gdGhlIGlucHV0IGNoYW5nZSBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGlzIGF2b2lkcyBpc3N1ZXMgd2l0aFxuICAgICAgICAvLyBwcmVzZXJ2aW5nIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZG93bnNoaWZ0LWpzL2Rvd25zaGlmdC9pc3N1ZXMvMjE3IGZvciBtb3JlIGluZm8uXG5cbiAgICAgICAgaWYgKCFpc1N0YXRlVG9TZXRGdW5jdGlvbiAmJiBzdGF0ZVRvU2V0Lmhhc093blByb3BlcnR5KCdpbnB1dFZhbHVlJykpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbklucHV0VmFsdWVDaGFuZ2Uoc3RhdGVUb1NldC5pbnB1dFZhbHVlLCBfZXh0ZW5kcyh7fSwgX3RoaXMuZ2V0U3RhdGVBbmRIZWxwZXJzKCksIHN0YXRlVG9TZXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZSA9IF90aGlzLmdldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICB2YXIgbmV3U3RhdGVUb1NldCA9IGlzU3RhdGVUb1NldEZ1bmN0aW9uID8gc3RhdGVUb1NldChzdGF0ZSkgOiBzdGF0ZVRvU2V0OyAvLyBZb3VyIG93biBmdW5jdGlvbiB0aGF0IGNvdWxkIG1vZGlmeSB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHNldC5cblxuICAgICAgICAgIG5ld1N0YXRlVG9TZXQgPSBfdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoc3RhdGUsIG5ld1N0YXRlVG9TZXQpOyAvLyBjaGVja3MgaWYgYW4gaXRlbSBpcyBzZWxlY3RlZCwgcmVnYXJkbGVzcyBvZiBpZiBpdCdzIGRpZmZlcmVudCBmcm9tXG4gICAgICAgICAgLy8gd2hhdCB3YXMgc2VsZWN0ZWQgYmVmb3JlXG4gICAgICAgICAgLy8gdXNlZCB0byBkZXRlcm1pbmUgaWYgb25TZWxlY3QgYW5kIG9uQ2hhbmdlIGNhbGxiYWNrcyBzaG91bGQgYmUgY2FsbGVkXG5cbiAgICAgICAgICBpc0l0ZW1TZWxlY3RlZCA9IG5ld1N0YXRlVG9TZXQuaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkSXRlbScpOyAvLyB0aGlzIGtlZXBzIHRyYWNrIG9mIHRoZSBvYmplY3Qgd2Ugd2FudCB0byBjYWxsIHdpdGggc2V0U3RhdGVcblxuICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSB7fTsgLy8gdGhpcyBpcyBqdXN0IHVzZWQgdG8gdGVsbCB3aGV0aGVyIHRoZSBzdGF0ZSBjaGFuZ2VkXG5cbiAgICAgICAgICB2YXIgbmV4dEZ1bGxTdGF0ZSA9IHt9OyAvLyB3ZSBuZWVkIHRvIGNhbGwgb24gY2hhbmdlIGlmIHRoZSBvdXRzaWRlIHdvcmxkIGlzIGNvbnRyb2xsaW5nIGFueSBvZiBvdXIgc3RhdGVcbiAgICAgICAgICAvLyBhbmQgd2UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGF0IHN0YXRlLiBPUiBpZiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIGFuZCB3ZSdyZVxuICAgICAgICAgIC8vIHRyeWluZyB0byB1cGRhdGUgdGhlIHNlbGVjdGlvblxuXG4gICAgICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkICYmIG5ld1N0YXRlVG9TZXQuc2VsZWN0ZWRJdGVtICE9PSBzdGF0ZS5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlQXJnID0gbmV3U3RhdGVUb1NldC5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3U3RhdGVUb1NldC50eXBlID0gbmV3U3RhdGVUb1NldC50eXBlIHx8IHVua25vd247XG4gICAgICAgICAgT2JqZWN0LmtleXMobmV3U3RhdGVUb1NldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAvLyBvblN0YXRlQ2hhbmdlQXJnIHNob3VsZCBvbmx5IGhhdmUgdGhlIHN0YXRlIHRoYXQgaXNcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGNoYW5naW5nXG4gICAgICAgICAgICBpZiAoc3RhdGVba2V5XSAhPT0gbmV3U3RhdGVUb1NldFtrZXldKSB7XG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2VBcmdba2V5XSA9IG5ld1N0YXRlVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH0gLy8gdGhlIHR5cGUgaXMgdXNlZnVsIGZvciB0aGUgb25TdGF0ZUNoYW5nZUFyZ1xuICAgICAgICAgICAgLy8gYnV0IHdlIGRvbid0IGFjdHVhbGx5IHdhbnQgdG8gc2V0IGl0IGluIGludGVybmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiB1bmRvY3VtZW50ZWQgZmVhdHVyZSBmb3Igbm93Li4uIE5vdCBhbGwgaW50ZXJuYWxTZXRTdGF0ZVxuICAgICAgICAgICAgLy8gY2FsbHMgc3VwcG9ydCBpdCBhbmQgSSdtIG5vdCBjZXJ0YWluIHdlIHdhbnQgdGhlbSB0byB5ZXQuXG4gICAgICAgICAgICAvLyBCdXQgaXQgZW5hYmxlcyB1c2VycyBjb250cm9sbGluZyB0aGUgaXNPcGVuIHN0YXRlIHRvIGtub3cgd2hlblxuICAgICAgICAgICAgLy8gdGhlIGlzT3BlbiBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byBtb3VzZXVwIGV2ZW50cyB3aGljaCBpcyBxdWl0ZSBoYW5keS5cblxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAndHlwZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0RnVsbFN0YXRlW2tleV0gPSBuZXdTdGF0ZVRvU2V0W2tleV07IC8vIGlmIGl0J3MgY29taW5nIGZyb20gcHJvcHMsIHRoZW4gd2UgZG9uJ3QgY2FyZSB0byBzZXQgaXQgaW50ZXJuYWxseVxuXG4gICAgICAgICAgICBpZiAoIWlzQ29udHJvbGxlZFByb3AoX3RoaXMucHJvcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXdTdGF0ZVRvU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7IC8vIGlmIHN0YXRlVG9TZXQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSB3ZXJlbid0IGFibGUgdG8gY2FsbCBvbklucHV0VmFsdWVDaGFuZ2VcbiAgICAgICAgICAvLyBlYXJsaWVyLCBzbyB3ZSdsbCBjYWxsIGl0IG5vdyB0aGF0IHdlIGtub3cgd2hhdCB0aGUgaW5wdXRWYWx1ZSBzdGF0ZSB3aWxsIGJlLlxuXG4gICAgICAgICAgaWYgKGlzU3RhdGVUb1NldEZ1bmN0aW9uICYmIG5ld1N0YXRlVG9TZXQuaGFzT3duUHJvcGVydHkoJ2lucHV0VmFsdWUnKSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25JbnB1dFZhbHVlQ2hhbmdlKG5ld1N0YXRlVG9TZXQuaW5wdXRWYWx1ZSwgX2V4dGVuZHMoe30sIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpLCBuZXdTdGF0ZVRvU2V0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGNhbGwgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIGlmIGl0J3MgYSBmdW5jdGlvblxuICAgICAgICAgIGNiVG9DYihjYikoKTsgLy8gb25seSBjYWxsIHRoZSBvblN0YXRlQ2hhbmdlIGFuZCBvbkNoYW5nZSBjYWxsYmFja3MgaWZcbiAgICAgICAgICAvLyB3ZSBoYXZlIHJlbGV2YW50IGluZm9ybWF0aW9uIHRvIHBhc3MgdGhlbS5cblxuICAgICAgICAgIHZhciBoYXNNb3JlU3RhdGVUaGFuVHlwZSA9IE9iamVjdC5rZXlzKG9uU3RhdGVDaGFuZ2VBcmcpLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgICBpZiAoaGFzTW9yZVN0YXRlVGhhblR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2Uob25TdGF0ZUNoYW5nZUFyZywgX3RoaXMuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3Qoc3RhdGVUb1NldC5zZWxlY3RlZEl0ZW0sIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25DaGFuZ2VBcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2Uob25DaGFuZ2VBcmcsIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgICB9IC8vIHRoaXMgaXMgY3VycmVudGx5IHVuZG9jdW1lbnRlZCBhbmQgdGhlcmVmb3JlIHN1YmplY3QgdG8gY2hhbmdlXG4gICAgICAgICAgLy8gV2UnbGwgdHJ5IHRvIG5vdCBicmVhayBpdCwgYnV0IGp1c3QgYmUgd2FybmVkLlxuXG5cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblVzZXJBY3Rpb24ob25TdGF0ZUNoYW5nZUFyZywgX3RoaXMuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJvb3RSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Jvb3ROb2RlID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFJvb3RQcm9wcyA9IGZ1bmN0aW9uIChfdGVtcCwgX3RlbXAyKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgICAgIF9yZWYkcmVmS2V5ID0gX3JlZi5yZWZLZXksXG4gICAgICAgICAgICByZWZLZXkgPSBfcmVmJHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmJHJlZktleSxcbiAgICAgICAgICAgIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICAgICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgICAgIF9yZWYyJHN1cHByZXNzUmVmRXJybyA9IF9yZWYyLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjIkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN1cHByZXNzUmVmRXJybztcblxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgaW4gdGhlIHJlbmRlciB0byBrbm93IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGNhbGxlZCBnZXRSb290UHJvcHMuXG4gICAgICAgIC8vIEl0IHVzZXMgdGhhdCB0byBrbm93IHdoZXRoZXIgdG8gYXBwbHkgdGhlIHByb3BzIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgX3RoaXMuZ2V0Um9vdFByb3BzLmNhbGxlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLmdldFJvb3RQcm9wcy5yZWZLZXkgPSByZWZLZXk7XG4gICAgICAgIF90aGlzLmdldFJvb3RQcm9wcy5zdXBwcmVzc1JlZkVycm9yID0gc3VwcHJlc3NSZWZFcnJvcjtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGUgPSBfdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGUuaXNPcGVuO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIF90aGlzLnJvb3RSZWYpLCBfZXh0ZW5kczIucm9sZSA9ICdjb21ib2JveCcsIF9leHRlbmRzMlsnYXJpYS1leHBhbmRlZCddID0gaXNPcGVuLCBfZXh0ZW5kczJbJ2FyaWEtaGFzcG9wdXAnXSA9ICdsaXN0Ym94JywgX2V4dGVuZHMyWydhcmlhLW93bnMnXSA9IGlzT3BlbiA/IF90aGlzLm1lbnVJZCA6IG51bGwsIF9leHRlbmRzMlsnYXJpYS1sYWJlbGxlZGJ5J10gPSBfdGhpcy5sYWJlbElkLCBfZXh0ZW5kczIpLCByZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmtleURvd25IYW5kbGVycyA9IHtcbiAgICAgICAgQXJyb3dEb3duOiBmdW5jdGlvbiBBcnJvd0Rvd24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpLmlzT3Blbikge1xuICAgICAgICAgICAgdmFyIGFtb3VudCA9IGV2ZW50LnNoaWZ0S2V5ID8gNSA6IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEluZGV4KGFtb3VudCwge1xuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtQ291bnQgPSBfdGhpczIuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyJGdldFN0YXRlID0gX3RoaXMyLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpczIkZ2V0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KDEsIGhpZ2hsaWdodGVkSW5kZXgsIGl0ZW1Db3VudCwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRIaWdobGlnaHRlZEluZGV4KG5leHRIaWdobGlnaHRlZEluZGV4LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcChldmVudCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLmdldFN0YXRlKCkuaXNPcGVuKSB7XG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gZXZlbnQuc2hpZnRLZXkgPyAtNSA6IC0xO1xuICAgICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbmRleChhbW91bnQsIHtcbiAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93VXBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6IGtleURvd25BcnJvd1VwXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtQ291bnQgPSBfdGhpczMuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzJGdldFN0YXRlID0gX3RoaXMzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpczMkZ2V0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KC0xLCBoaWdobGlnaHRlZEluZGV4LCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5nZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXh0SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93VXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBFbnRlcjogZnVuY3Rpb24gRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDIyOSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTIgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlMi5pc09wZW4sXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRnZXRTdGF0ZTIuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgIGlmIChpc09wZW4gJiYgaGlnaGxpZ2h0ZWRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2hpZ2hsaWdodGVkSW5kZXhdO1xuICAgICAgICAgICAgdmFyIGl0ZW1Ob2RlID0gdGhpcy5nZXRJdGVtTm9kZUZyb21JbmRleChoaWdobGlnaHRlZEluZGV4KTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtTm9kZSAmJiBpdGVtTm9kZS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkSXRlbSh7XG4gICAgICAgICAgICAgIHR5cGU6IGtleURvd25FbnRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBFc2NhcGU6IGZ1bmN0aW9uIEVzY2FwZShldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5yZXNldChfZXh0ZW5kcyh7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duRXNjYXBlXG4gICAgICAgICAgfSwgIXRoaXMuc3RhdGUuaXNPcGVuICYmIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgX3RoaXMuYnV0dG9uS2V5RG93bkhhbmRsZXJzID0gX2V4dGVuZHMoe30sIF90aGlzLmtleURvd25IYW5kbGVycywge1xuICAgICAgICAnICc6IGZ1bmN0aW9uIF8oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSh7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duU3BhY2VCdXR0b25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5pbnB1dEtleURvd25IYW5kbGVycyA9IF9leHRlbmRzKHt9LCBfdGhpcy5rZXlEb3duSGFuZGxlcnMsIHtcbiAgICAgICAgSG9tZTogZnVuY3Rpb24gSG9tZShldmVudCkge1xuICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTMgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlMy5pc09wZW47XG5cbiAgICAgICAgICBpZiAoaXRlbUNvdW50IDw9IDAgfHwgIWlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gZ2V0IG5leHQgbm9uLWRpc2FibGVkIHN0YXJ0aW5nIGRvd253YXJkcyBmcm9tIDAgaWYgdGhhdCdzIGRpc2FibGVkLlxuXG5cbiAgICAgICAgICB2YXIgbmV3SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHROb25EaXNhYmxlZEluZGV4KDEsIDAsIGl0ZW1Db3VudCwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0LmdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4KG5ld0hpZ2hsaWdodGVkSW5kZXgsIHtcbiAgICAgICAgICAgIHR5cGU6IGtleURvd25Ib21lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIEVuZDogZnVuY3Rpb24gRW5kKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciBpdGVtQ291bnQgPSB0aGlzLmdldEl0ZW1Db3VudCgpO1xuXG4gICAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlNCA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGU0LmlzT3BlbjtcblxuICAgICAgICAgIGlmIChpdGVtQ291bnQgPD0gMCB8fCAhaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBnZXQgbmV4dCBub24tZGlzYWJsZWQgc3RhcnRpbmcgdXB3YXJkcyBmcm9tIGxhc3QgaW5kZXggaWYgdGhhdCdzIGRpc2FibGVkLlxuXG5cbiAgICAgICAgICB2YXIgbmV3SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHROb25EaXNhYmxlZEluZGV4KC0xLCBpdGVtQ291bnQgLSAxLCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5nZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXdIaWdobGlnaHRlZEluZGV4LCB7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duRW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5nZXRUb2dnbGVCdXR0b25Qcm9wcyA9IGZ1bmN0aW9uIChfdGVtcDMpIHtcbiAgICAgICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBfcmVmMy5vbkNsaWNrLFxuICAgICAgICAgICAgb25QcmVzcyA9IF9yZWYzLm9uUHJlc3MsXG4gICAgICAgICAgICBvbktleURvd24gPSBfcmVmMy5vbktleURvd24sXG4gICAgICAgICAgICBvbktleVVwID0gX3JlZjMub25LZXlVcCxcbiAgICAgICAgICAgIG9uQmx1ciA9IF9yZWYzLm9uQmx1cixcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wib25DbGlja1wiLCBcIm9uUHJlc3NcIiwgXCJvbktleURvd25cIiwgXCJvbktleVVwXCIsIFwib25CbHVyXCJdKTtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGU1ID0gX3RoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlNS5pc09wZW47XG5cbiAgICAgICAgdmFyIGVuYWJsZWRFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIF90aGlzLmJ1dHRvbkhhbmRsZUNsaWNrKSxcbiAgICAgICAgICBvbktleURvd246IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgX3RoaXMuYnV0dG9uSGFuZGxlS2V5RG93biksXG4gICAgICAgICAgb25LZXlVcDogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25LZXlVcCwgX3RoaXMuYnV0dG9uSGFuZGxlS2V5VXApLFxuICAgICAgICAgIG9uQmx1cjogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25CbHVyLCBfdGhpcy5idXR0b25IYW5kbGVCbHVyKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHJlc3QuZGlzYWJsZWQgPyB7fSA6IGVuYWJsZWRFdmVudEhhbmRsZXJzO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogaXNPcGVuID8gJ2Nsb3NlIG1lbnUnIDogJ29wZW4gbWVudScsXG4gICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAgICdkYXRhLXRvZ2dsZSc6IHRydWVcbiAgICAgICAgfSwgZXZlbnRIYW5kbGVycywgcmVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5idXR0b25IYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBQcmV2ZW50IGNsaWNrIGV2ZW50IGZyb20gZW1pdHRpbmcgaW4gRmlyZWZveFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuYnV0dG9uSGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICAgIGlmIChfdGhpcy5idXR0b25LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgIF90aGlzLmJ1dHRvbktleURvd25IYW5kbGVyc1trZXldLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuYnV0dG9uSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gaGFuZGxlIG9kZCBjYXNlIGZvciBTYWZhcmkgYW5kIEZpcmVmb3ggd2hpY2hcbiAgICAgICAgLy8gZG9uJ3QgZ2l2ZSB0aGUgYnV0dG9uIHRoZSBmb2N1cyBwcm9wZXJseS5cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKGNhbid0IHJlYXNvbmFibHkgdGVzdCB0aGlzKSAqL1xuXG4gICAgICAgIGlmICggX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgICAgICB9IC8vIHRvIHNpbXBsaWZ5IHRlc3RpbmcgY29tcG9uZW50cyB0aGF0IHVzZSBkb3duc2hpZnQsIHdlJ2xsIG5vdCB3cmFwIHRoaXMgaW4gYSBzZXRUaW1lb3V0XG4gICAgICAgIC8vIGlmIHRoZSBOT0RFX0VOViBpcyB0ZXN0LiBXaXRoIHRoZSBwcm9wZXIgYnVpbGQgc3lzdGVtLCB0aGlzIHNob3VsZCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZFxuICAgICAgICAvLyB3aGVuIGJ1aWxkaW5nIGZvciBwcm9kdWN0aW9uIGFuZCBzaG91bGQgdGhlcmVmb3JlIGhhdmUgbm8gaW1wYWN0IG9uIHByb2R1Y3Rpb24gY29kZS5cblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgX3RoaXMudG9nZ2xlTWVudSh7XG4gICAgICAgICAgICB0eXBlOiBjbGlja0J1dHRvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IHRvZ2dsZSBvZiBtZW51IG9jY3VycyBhZnRlciB0aGUgcG90ZW50aWFsIGJsdXIgZXZlbnQgaW4gaU9TXG4gICAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy50b2dnbGVNZW51KHtcbiAgICAgICAgICAgICAgdHlwZTogY2xpY2tCdXR0b25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5idXR0b25IYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBibHVyVGFyZ2V0ID0gZXZlbnQudGFyZ2V0OyAvLyBTYXZlIGJsdXIgdGFyZ2V0IGZvciBjb21wYXJpc29uIHdpdGggYWN0aXZlRWxlbWVudCBsYXRlclxuICAgICAgICAvLyBOZWVkIHNldFRpbWVvdXQsIHNvIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIFRhYiwgdGhlIGFjdGl2ZUVsZW1lbnQgaXMgdGhlIG5leHQgZm9jdXNlZCBlbGVtZW50LCBub3QgYm9keSBlbGVtZW50XG5cbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLmlzTW91c2VEb3duICYmIChfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IG51bGwgfHwgX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCAhPT0gX3RoaXMuaW5wdXRJZCkgJiYgX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gYmx1clRhcmdldCAvLyBEbyBub3RoaW5nIGlmIHdlIHJlZm9jdXMgdGhlIHNhbWUgZWxlbWVudCBhZ2FpbiAodG8gc29sdmUgaXNzdWUgaW4gU2FmYXJpIG9uIGlPUylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgX3RoaXMucmVzZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGJsdXJCdXR0b25cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0TGFiZWxQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgIGh0bWxGb3I6IF90aGlzLmlucHV0SWQsXG4gICAgICAgICAgaWQ6IF90aGlzLmxhYmVsSWRcbiAgICAgICAgfSwgcHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0SW5wdXRQcm9wcyA9IGZ1bmN0aW9uIChfdGVtcDQpIHtcbiAgICAgICAgdmFyIF9yZWY0ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCxcbiAgICAgICAgICAgIG9uS2V5RG93biA9IF9yZWY0Lm9uS2V5RG93bixcbiAgICAgICAgICAgIG9uQmx1ciA9IF9yZWY0Lm9uQmx1cixcbiAgICAgICAgICAgIG9uQ2hhbmdlID0gX3JlZjQub25DaGFuZ2UsXG4gICAgICAgICAgICBvbklucHV0ID0gX3JlZjQub25JbnB1dCxcbiAgICAgICAgICAgIG9uQ2hhbmdlVGV4dCA9IF9yZWY0Lm9uQ2hhbmdlVGV4dCxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgW1wib25LZXlEb3duXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbklucHV0XCIsIFwib25DaGFuZ2VUZXh0XCJdKTtcblxuICAgICAgICB2YXIgb25DaGFuZ2VLZXk7XG4gICAgICAgIHZhciBldmVudEhhbmRsZXJzID0ge307XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChwcmVhY3QpICovXG5cbiAgICAgICAgb25DaGFuZ2VLZXkgPSAnb25DaGFuZ2UnO1xuXG4gICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTYgPSBfdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJGdldFN0YXRlNi5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGU2LmlzT3BlbixcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRnZXRTdGF0ZTYuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICBpZiAoIXJlc3QuZGlzYWJsZWQpIHtcbiAgICAgICAgICB2YXIgX2V2ZW50SGFuZGxlcnM7XG5cbiAgICAgICAgICBldmVudEhhbmRsZXJzID0gKF9ldmVudEhhbmRsZXJzID0ge30sIF9ldmVudEhhbmRsZXJzW29uQ2hhbmdlS2V5XSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2hhbmdlLCBvbklucHV0LCBfdGhpcy5pbnB1dEhhbmRsZUNoYW5nZSksIF9ldmVudEhhbmRsZXJzLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgX3RoaXMuaW5wdXRIYW5kbGVLZXlEb3duKSwgX2V2ZW50SGFuZGxlcnMub25CbHVyID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25CbHVyLCBfdGhpcy5pbnB1dEhhbmRsZUJsdXIpLCBfZXZlbnRIYW5kbGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIChyZWFjdC1uYXRpdmUpICovXG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAgICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaXNPcGVuICYmIHR5cGVvZiBoaWdobGlnaHRlZEluZGV4ID09PSAnbnVtYmVyJyAmJiBoaWdobGlnaHRlZEluZGV4ID49IDAgPyBfdGhpcy5nZXRJdGVtSWQoaGlnaGxpZ2h0ZWRJbmRleCkgOiBudWxsLFxuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogaXNPcGVuID8gX3RoaXMubWVudUlkIDogbnVsbCxcbiAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogX3RoaXMubGFiZWxJZCxcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TZWN1cmluZ195b3VyX3NpdGUvVHVybmluZ19vZmZfZm9ybV9hdXRvY29tcGxldGlvblxuICAgICAgICAgIC8vIHJldmVydCBiYWNrIHNpbmNlIGF1dG9jb21wbGV0ZT1cIm5vcGVcIiBpcyBpZ25vcmVkIG9uIGxhdGVzdCBDaHJvbWUgYW5kIE9wZXJhXG4gICAgICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpZDogX3RoaXMuaW5wdXRJZFxuICAgICAgICB9LCBldmVudEhhbmRsZXJzLCByZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlucHV0SGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgX3RoaXMuaW5wdXRLZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgIF90aGlzLmlucHV0S2V5RG93bkhhbmRsZXJzW2tleV0uY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pbnB1dEhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICB0eXBlOiBjaGFuZ2VJbnB1dCxcbiAgICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW5wdXRIYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZWVkIHNldFRpbWVvdXQsIHNvIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIFRhYiwgdGhlIGFjdGl2ZUVsZW1lbnQgaXMgdGhlIG5leHQgZm9jdXNlZCBlbGVtZW50LCBub3QgdGhlIGJvZHkgZWxlbWVudFxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkb3duc2hpZnRCdXR0b25Jc0FjdGl2ZSA9IF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50ICYmICEhX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhIV90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuZGF0YXNldCAmJiBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmRhdGFzZXQudG9nZ2xlICYmIF90aGlzLl9yb290Tm9kZSAmJiBfdGhpcy5fcm9vdE5vZGUuY29udGFpbnMoX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzLmlzTW91c2VEb3duICYmICFkb3duc2hpZnRCdXR0b25Jc0FjdGl2ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVzZXQoe1xuICAgICAgICAgICAgICB0eXBlOiBibHVySW5wdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5tZW51UmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgX3RoaXMuX21lbnVOb2RlID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE1lbnVQcm9wcyA9IGZ1bmN0aW9uIChfdGVtcDUsIF90ZW1wNikge1xuICAgICAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgICAgIHZhciBfcmVmNSA9IF90ZW1wNSA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDUsXG4gICAgICAgICAgICBfcmVmNSRyZWZLZXkgPSBfcmVmNS5yZWZLZXksXG4gICAgICAgICAgICByZWZLZXkgPSBfcmVmNSRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjUkcmVmS2V5LFxuICAgICAgICAgICAgcmVmID0gX3JlZjUucmVmLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgW1wicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgICAgICB2YXIgX3JlZjYgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICAgICAgX3JlZjYkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjYuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmNiRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgICAgIF90aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5nZXRNZW51UHJvcHMucmVmS2V5ID0gcmVmS2V5O1xuICAgICAgICBfdGhpcy5nZXRNZW51UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHN1cHByZXNzUmVmRXJyb3I7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIF90aGlzLm1lbnVSZWYpLCBfZXh0ZW5kczMucm9sZSA9ICdsaXN0Ym94JywgX2V4dGVuZHMzWydhcmlhLWxhYmVsbGVkYnknXSA9IHByb3BzICYmIHByb3BzWydhcmlhLWxhYmVsJ10gPyBudWxsIDogX3RoaXMubGFiZWxJZCwgX2V4dGVuZHMzLmlkID0gX3RoaXMubWVudUlkLCBfZXh0ZW5kczMpLCBwcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRJdGVtUHJvcHMgPSBmdW5jdGlvbiAoX3RlbXA3KSB7XG4gICAgICAgIHZhciBfZW5hYmxlZEV2ZW50SGFuZGxlcnM7XG5cbiAgICAgICAgdmFyIF9yZWY3ID0gX3RlbXA3ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNyxcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlID0gX3JlZjcub25Nb3VzZU1vdmUsXG4gICAgICAgICAgICBvbk1vdXNlRG93biA9IF9yZWY3Lm9uTW91c2VEb3duLFxuICAgICAgICAgICAgb25DbGljayA9IF9yZWY3Lm9uQ2xpY2ssXG4gICAgICAgICAgICBvblByZXNzID0gX3JlZjcub25QcmVzcyxcbiAgICAgICAgICAgIGluZGV4ID0gX3JlZjcuaW5kZXgsXG4gICAgICAgICAgICBfcmVmNyRpdGVtID0gX3JlZjcuaXRlbSxcbiAgICAgICAgICAgIGl0ZW0gPSBfcmVmNyRpdGVtID09PSB2b2lkIDAgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID9cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgdW5kZWZpbmVkIDogcmVxdWlyZWRQcm9wKCdnZXRJdGVtUHJvcHMnLCAnaXRlbScpIDogX3JlZjckaXRlbSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNywgW1wib25Nb3VzZU1vdmVcIiwgXCJvbk1vdXNlRG93blwiLCBcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwiaW5kZXhcIiwgXCJpdGVtXCJdKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICBpbmRleCA9IF90aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvblNlbGVjdEtleSA9ICdvbkNsaWNrJztcbiAgICAgICAgdmFyIGN1c3RvbUNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7XG4gICAgICAgIHZhciBlbmFibGVkRXZlbnRIYW5kbGVycyA9IChfZW5hYmxlZEV2ZW50SGFuZGxlcnMgPSB7XG4gICAgICAgICAgLy8gb25Nb3VzZU1vdmUgaXMgdXNlZCBvdmVyIG9uTW91c2VFbnRlciBoZXJlLiBvbk1vdXNlTW92ZVxuICAgICAgICAgIC8vIGlzIG9ubHkgdHJpZ2dlcmVkIG9uIGFjdHVhbCBtb3VzZSBtb3ZlbWVudCB3aGlsZSBvbk1vdXNlRW50ZXJcbiAgICAgICAgICAvLyBjYW4gZmlyZSBvbiBET00gY2hhbmdlcywgaW50ZXJydXB0aW5nIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgICBvbk1vdXNlTW92ZTogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25Nb3VzZU1vdmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gX3RoaXMuZ2V0U3RhdGUoKS5oaWdobGlnaHRlZEluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChpbmRleCwge1xuICAgICAgICAgICAgICB0eXBlOiBpdGVtTW91c2VFbnRlclxuICAgICAgICAgICAgfSk7IC8vIFdlIG5ldmVyIHdhbnQgdG8gbWFudWFsbHkgc2Nyb2xsIHdoZW4gY2hhbmdpbmcgc3RhdGUgYmFzZWRcbiAgICAgICAgICAgIC8vIG9uIGBvbk1vdXNlTW92ZWAgYmVjYXVzZSB3ZSB3aWxsIGJlIG1vdmluZyB0aGUgZWxlbWVudCBvdXRcbiAgICAgICAgICAgIC8vIGZyb20gdW5kZXIgdGhlIHVzZXIgd2hpY2ggaXMgY3VycmVudGx5IHNjcm9sbGluZy9tb3ZpbmcgdGhlXG4gICAgICAgICAgICAvLyBjdXJzb3JcblxuXG4gICAgICAgICAgICBfdGhpcy5hdm9pZFNjcm9sbGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIF90aGlzLmludGVybmFsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5hdm9pZFNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbk1vdXNlRG93bjogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25Nb3VzZURvd24sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyB0aGUgYWN0aXZlRWxlbWVudCBmcm9tIGJlaW5nIGNoYW5nZWRcbiAgICAgICAgICAgIC8vIHRvIHRoZSBpdGVtIHNvIGl0IGNhbiByZW1haW4gd2l0aCB0aGUgY3VycmVudCBhY3RpdmVFbGVtZW50XG4gICAgICAgICAgICAvLyB3aGljaCBpcyBhIG1vcmUgY29tbW9uIHVzZSBjYXNlLlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9LCBfZW5hYmxlZEV2ZW50SGFuZGxlcnNbb25TZWxlY3RLZXldID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMoY3VzdG9tQ2xpY2tIYW5kbGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc2VsZWN0SXRlbUF0SW5kZXgoaW5kZXgsIHtcbiAgICAgICAgICAgIHR5cGU6IGNsaWNrSXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSwgX2VuYWJsZWRFdmVudEhhbmRsZXJzKTsgLy8gUGFzc2luZyBkb3duIHRoZSBvbk1vdXNlRG93biBoYW5kbGVyIHRvIHByZXZlbnQgcmVkaXJlY3RcbiAgICAgICAgLy8gb2YgdGhlIGFjdGl2ZUVsZW1lbnQgaWYgY2xpY2tpbmcgb24gZGlzYWJsZWQgaXRlbXNcblxuICAgICAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHJlc3QuZGlzYWJsZWQgPyB7XG4gICAgICAgICAgb25Nb3VzZURvd246IGVuYWJsZWRFdmVudEhhbmRsZXJzLm9uTW91c2VEb3duXG4gICAgICAgIH0gOiBlbmFibGVkRXZlbnRIYW5kbGVycztcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICBpZDogX3RoaXMuZ2V0SXRlbUlkKGluZGV4KSxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IF90aGlzLmdldFN0YXRlKCkuaGlnaGxpZ2h0ZWRJbmRleCA9PT0gaW5kZXhcbiAgICAgICAgfSwgZXZlbnRIYW5kbGVycywgcmVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jbGVhckl0ZW1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMucmVzZXQgPSBmdW5jdGlvbiAob3RoZXJTdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICBpZiAob3RoZXJTdGF0ZVRvU2V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHBpY2tTdGF0ZShvdGhlclN0YXRlVG9TZXQpO1xuXG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoZnVuY3Rpb24gKF9yZWY4KSB7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkSXRlbSA9IF9yZWY4LnNlbGVjdGVkSXRlbTtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgICAgaXNPcGVuOiBfdGhpcy5wcm9wcy5kZWZhdWx0SXNPcGVuLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX3RoaXMucHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBfdGhpcy5wcm9wcy5pdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtKVxuICAgICAgICAgIH0sIG90aGVyU3RhdGVUb1NldCk7XG4gICAgICAgIH0sIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnRvZ2dsZU1lbnUgPSBmdW5jdGlvbiAob3RoZXJTdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICBpZiAob3RoZXJTdGF0ZVRvU2V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHBpY2tTdGF0ZShvdGhlclN0YXRlVG9TZXQpO1xuXG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoZnVuY3Rpb24gKF9yZWY5KSB7XG4gICAgICAgICAgdmFyIGlzT3BlbiA9IF9yZWY5LmlzT3BlbjtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgICAgaXNPcGVuOiAhaXNPcGVuXG4gICAgICAgICAgfSwgaXNPcGVuICYmIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4XG4gICAgICAgICAgfSwgb3RoZXJTdGF0ZVRvU2V0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTcgPSBfdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTcuaXNPcGVuLFxuICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGU3LmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZ2V0SXRlbUNvdW50KCkgPiAwICYmIHR5cGVvZiBoaWdobGlnaHRlZEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBfdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4KGhpZ2hsaWdodGVkSW5kZXgsIG90aGVyU3RhdGVUb1NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2JUb0NiKGNiKSgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9wZW5NZW51ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICB9LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jbG9zZU1lbnUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgICB9LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy51cGRhdGVTdGF0dXMgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XTtcblxuICAgICAgICB2YXIgcmVzdWx0Q291bnQgPSBfdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgICB2YXIgc3RhdHVzID0gX3RoaXMucHJvcHMuZ2V0QTExeVN0YXR1c01lc3NhZ2UoX2V4dGVuZHMoe1xuICAgICAgICAgIGl0ZW1Ub1N0cmluZzogX3RoaXMucHJvcHMuaXRlbVRvU3RyaW5nLFxuICAgICAgICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IF90aGlzLnByZXZpb3VzUmVzdWx0Q291bnQsXG4gICAgICAgICAgcmVzdWx0Q291bnQ6IHJlc3VsdENvdW50LFxuICAgICAgICAgIGhpZ2hsaWdodGVkSXRlbTogaXRlbVxuICAgICAgICB9LCBzdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLnByZXZpb3VzUmVzdWx0Q291bnQgPSByZXN1bHRDb3VudDtcbiAgICAgICAgc2V0U3RhdHVzKHN0YXR1cywgX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQpO1xuICAgICAgfSwgMjAwKTtcblxuICAgICAgLy8gZmFuY3kgZGVzdHJ1Y3R1cmluZyArIGRlZmF1bHRzICsgYWxpYXNlc1xuICAgICAgLy8gdGhpcyBiYXNpY2FsbHkgc2F5cyBlYWNoIHZhbHVlIG9mIHN0YXRlIHNob3VsZCBlaXRoZXIgYmUgc2V0IHRvXG4gICAgICAvLyB0aGUgaW5pdGlhbCB2YWx1ZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgaW5pdGlhbCB2YWx1ZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkcHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgX3RoaXMkcHJvcHMkaW5pdGlhbEhpID0gX3RoaXMkcHJvcHMuaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgX2hpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRwcm9wcyRpbml0aWFsSGkgPT09IHZvaWQgMCA/IGRlZmF1bHRIaWdobGlnaHRlZEluZGV4IDogX3RoaXMkcHJvcHMkaW5pdGlhbEhpLFxuICAgICAgICAgIGRlZmF1bHRJc09wZW4gPSBfdGhpcyRwcm9wcy5kZWZhdWx0SXNPcGVuLFxuICAgICAgICAgIF90aGlzJHByb3BzJGluaXRpYWxJcyA9IF90aGlzJHByb3BzLmluaXRpYWxJc09wZW4sXG4gICAgICAgICAgX2lzT3BlbiA9IF90aGlzJHByb3BzJGluaXRpYWxJcyA9PT0gdm9pZCAwID8gZGVmYXVsdElzT3BlbiA6IF90aGlzJHByb3BzJGluaXRpYWxJcyxcbiAgICAgICAgICBfdGhpcyRwcm9wcyRpbml0aWFsSW4gPSBfdGhpcyRwcm9wcy5pbml0aWFsSW5wdXRWYWx1ZSxcbiAgICAgICAgICBfaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzJGluaXRpYWxJbiA9PT0gdm9pZCAwID8gJycgOiBfdGhpcyRwcm9wcyRpbml0aWFsSW4sXG4gICAgICAgICAgX3RoaXMkcHJvcHMkaW5pdGlhbFNlID0gX3RoaXMkcHJvcHMuaW5pdGlhbFNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBfc2VsZWN0ZWRJdGVtID0gX3RoaXMkcHJvcHMkaW5pdGlhbFNlID09PSB2b2lkIDAgPyBudWxsIDogX3RoaXMkcHJvcHMkaW5pdGlhbFNlO1xuXG4gICAgICB2YXIgX3N0YXRlID0gX3RoaXMuZ2V0U3RhdGUoe1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgaXNPcGVuOiBfaXNPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlOiBfaW5wdXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBfc2VsZWN0ZWRJdGVtXG4gICAgICB9KTtcblxuICAgICAgaWYgKF9zdGF0ZS5zZWxlY3RlZEl0ZW0gIT0gbnVsbCAmJiBfdGhpcy5wcm9wcy5pbml0aWFsSW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF9zdGF0ZS5pbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaXRlbVRvU3RyaW5nKF9zdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZSA9IF9zdGF0ZTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gRG93bnNoaWZ0LnByb3RvdHlwZTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBydW5uaW5nIHRpbWVvdXRzXG4gICAgICovXG4gICAgX3Byb3RvLmludGVybmFsQ2xlYXJUaW1lb3V0cyA9IGZ1bmN0aW9uIGludGVybmFsQ2xlYXJUaW1lb3V0cygpIHtcbiAgICAgIHRoaXMudGltZW91dElkcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRpbWVvdXRJZHMgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc3RhdGUgYmFzZWQgb24gaW50ZXJuYWwgc3RhdGUgb3IgcHJvcHNcbiAgICAgKiBJZiBhIHN0YXRlIHZhbHVlIGlzIHBhc3NlZCB2aWEgcHJvcHMsIHRoZW4gdGhhdFxuICAgICAqIGlzIHRoZSB2YWx1ZSBnaXZlbiwgb3RoZXJ3aXNlIGl0J3MgcmV0cmlldmVkIGZyb21cbiAgICAgKiBzdGF0ZVRvTWVyZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVRvTWVyZ2UgZGVmYXVsdHMgdG8gdGhpcy5zdGF0ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIHN0YXRlXG4gICAgICovXG4gICAgO1xuXG4gICAgX3Byb3RvLmdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUkMShzdGF0ZVRvTWVyZ2UpIHtcbiAgICAgIGlmIChzdGF0ZVRvTWVyZ2UgPT09IHZvaWQgMCkge1xuICAgICAgICBzdGF0ZVRvTWVyZ2UgPSB0aGlzLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0U3RhdGUoc3RhdGVUb01lcmdlLCB0aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldEl0ZW1Db3VudCA9IGZ1bmN0aW9uIGdldEl0ZW1Db3VudCgpIHtcbiAgICAgIC8vIHRoaW5ncyByZWFkIGJldHRlciB0aGlzIHdheS4gVGhleSdyZSBpbiBwcmlvcml0eSBvcmRlcjpcbiAgICAgIC8vIDEuIGB0aGlzLml0ZW1Db3VudGBcbiAgICAgIC8vIDIuIGB0aGlzLnByb3BzLml0ZW1Db3VudGBcbiAgICAgIC8vIDMuIGB0aGlzLml0ZW1zLmxlbmd0aGBcbiAgICAgIHZhciBpdGVtQ291bnQgPSB0aGlzLml0ZW1zLmxlbmd0aDtcblxuICAgICAgaWYgKHRoaXMuaXRlbUNvdW50ICE9IG51bGwpIHtcbiAgICAgICAgaXRlbUNvdW50ID0gdGhpcy5pdGVtQ291bnQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXRlbUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtQ291bnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRJdGVtTm9kZUZyb21JbmRleCA9IGZ1bmN0aW9uIGdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdldEl0ZW1JZChpbmRleCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2Nyb2xsSGlnaGxpZ2h0ZWRJdGVtSW50b1ZpZXcgPSBmdW5jdGlvbiBzY3JvbGxIaWdobGlnaHRlZEl0ZW1JbnRvVmlldygpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChyZWFjdC1uYXRpdmUpICovXG4gICAgICB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5nZXRJdGVtTm9kZUZyb21JbmRleCh0aGlzLmdldFN0YXRlKCkuaGlnaGxpZ2h0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMucHJvcHMuc2Nyb2xsSW50b1ZpZXcobm9kZSwgdGhpcy5fbWVudU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ubW92ZUhpZ2hsaWdodGVkSW5kZXggPSBmdW5jdGlvbiBtb3ZlSGlnaGxpZ2h0ZWRJbmRleChhbW91bnQsIG90aGVyU3RhdGVUb1NldCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHZhciBpdGVtQ291bnQgPSB0aGlzLmdldEl0ZW1Db3VudCgpO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0U3RhdGU4ID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRnZXRTdGF0ZTguaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgdmFyIG5leHRIaWdobGlnaHRlZEluZGV4ID0gZ2V0TmV4dFdyYXBwaW5nSW5kZXgoYW1vdW50LCBoaWdobGlnaHRlZEluZGV4LCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczYuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4KG5leHRIaWdobGlnaHRlZEluZGV4LCBvdGhlclN0YXRlVG9TZXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0U3RhdGVBbmRIZWxwZXJzID0gZnVuY3Rpb24gZ2V0U3RhdGVBbmRIZWxwZXJzKCkge1xuICAgICAgdmFyIF90aGlzJGdldFN0YXRlOSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGU5LmhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJGdldFN0YXRlOS5pbnB1dFZhbHVlLFxuICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IF90aGlzJGdldFN0YXRlOS5zZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGU5LmlzT3BlbjtcblxuICAgICAgdmFyIGl0ZW1Ub1N0cmluZyA9IHRoaXMucHJvcHMuaXRlbVRvU3RyaW5nO1xuICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgIHZhciBnZXRSb290UHJvcHMgPSB0aGlzLmdldFJvb3RQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyA9IHRoaXMuZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAgICAgZ2V0TGFiZWxQcm9wcyA9IHRoaXMuZ2V0TGFiZWxQcm9wcyxcbiAgICAgICAgICBnZXRNZW51UHJvcHMgPSB0aGlzLmdldE1lbnVQcm9wcyxcbiAgICAgICAgICBnZXRJbnB1dFByb3BzID0gdGhpcy5nZXRJbnB1dFByb3BzLFxuICAgICAgICAgIGdldEl0ZW1Qcm9wcyA9IHRoaXMuZ2V0SXRlbVByb3BzLFxuICAgICAgICAgIG9wZW5NZW51ID0gdGhpcy5vcGVuTWVudSxcbiAgICAgICAgICBjbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudSxcbiAgICAgICAgICB0b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LFxuICAgICAgICAgIHNlbGVjdEl0ZW0gPSB0aGlzLnNlbGVjdEl0ZW0sXG4gICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXggPSB0aGlzLnNlbGVjdEl0ZW1BdEluZGV4LFxuICAgICAgICAgIHNlbGVjdEhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuc2VsZWN0SGlnaGxpZ2h0ZWRJdGVtLFxuICAgICAgICAgIHNldEhpZ2hsaWdodGVkSW5kZXggPSB0aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb24gPSB0aGlzLmNsZWFyU2VsZWN0aW9uLFxuICAgICAgICAgIGNsZWFySXRlbXMgPSB0aGlzLmNsZWFySXRlbXMsXG4gICAgICAgICAgcmVzZXQgPSB0aGlzLnJlc2V0LFxuICAgICAgICAgIHNldEl0ZW1Db3VudCA9IHRoaXMuc2V0SXRlbUNvdW50LFxuICAgICAgICAgIHVuc2V0SXRlbUNvdW50ID0gdGhpcy51bnNldEl0ZW1Db3VudCxcbiAgICAgICAgICBzZXRTdGF0ZSA9IHRoaXMuaW50ZXJuYWxTZXRTdGF0ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIHByb3AgZ2V0dGVyc1xuICAgICAgICBnZXRSb290UHJvcHM6IGdldFJvb3RQcm9wcyxcbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHM6IGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICBnZXRMYWJlbFByb3BzOiBnZXRMYWJlbFByb3BzLFxuICAgICAgICBnZXRNZW51UHJvcHM6IGdldE1lbnVQcm9wcyxcbiAgICAgICAgZ2V0SW5wdXRQcm9wczogZ2V0SW5wdXRQcm9wcyxcbiAgICAgICAgZ2V0SXRlbVByb3BzOiBnZXRJdGVtUHJvcHMsXG4gICAgICAgIC8vIGFjdGlvbnNcbiAgICAgICAgcmVzZXQ6IHJlc2V0LFxuICAgICAgICBvcGVuTWVudTogb3Blbk1lbnUsXG4gICAgICAgIGNsb3NlTWVudTogY2xvc2VNZW51LFxuICAgICAgICB0b2dnbGVNZW51OiB0b2dnbGVNZW51LFxuICAgICAgICBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtLFxuICAgICAgICBzZWxlY3RJdGVtQXRJbmRleDogc2VsZWN0SXRlbUF0SW5kZXgsXG4gICAgICAgIHNlbGVjdEhpZ2hsaWdodGVkSXRlbTogc2VsZWN0SGlnaGxpZ2h0ZWRJdGVtLFxuICAgICAgICBzZXRIaWdobGlnaHRlZEluZGV4OiBzZXRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICBjbGVhclNlbGVjdGlvbjogY2xlYXJTZWxlY3Rpb24sXG4gICAgICAgIGNsZWFySXRlbXM6IGNsZWFySXRlbXMsXG4gICAgICAgIHNldEl0ZW1Db3VudDogc2V0SXRlbUNvdW50LFxuICAgICAgICB1bnNldEl0ZW1Db3VudDogdW5zZXRJdGVtQ291bnQsXG4gICAgICAgIHNldFN0YXRlOiBzZXRTdGF0ZSxcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmcsXG4gICAgICAgIC8vIGRlcml2ZWRcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICBpc09wZW46IGlzT3BlbixcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW1cbiAgICAgIH07XG4gICAgfSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFJPT1RcbiAgICA7XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKHJlYWN0LW5hdGl2ZSkgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFmYWxzZSAmJiB0aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgJiYgIXRoaXMuZ2V0TWVudVByb3BzLnN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgdmFsaWRhdGVHZXRNZW51UHJvcHNDYWxsZWRDb3JyZWN0bHkodGhpcy5fbWVudU5vZGUsIHRoaXMuZ2V0TWVudVByb3BzKTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAocmVhY3QtbmF0aXZlKSAqL1xuXG5cbiAgICAgIHtcbiAgICAgICAgLy8gdGhpcy5pc01vdXNlRG93biBoZWxwcyB1cyB0cmFjayB3aGV0aGVyIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgaGVsZCBkb3duLlxuICAgICAgICAvLyBUaGlzIGlzIHVzZWZ1bCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhbiBpdGVtIGluIHRoZSBsaXN0LCBidXQgaG9sZHMgdGhlIG1vdXNlXG4gICAgICAgIC8vIGRvd24gbG9uZyBlbm91Z2ggZm9yIHRoZSBsaXN0IHRvIGRpc2FwcGVhciAoYmVjYXVzZSB0aGUgYmx1ciBldmVudCBmaXJlcyBvbiB0aGUgaW5wdXQpXG4gICAgICAgIC8vIHRoaXMuaXNNb3VzZURvd24gaXMgdXNlZCBpbiB0aGUgYmx1ciBoYW5kbGVyIG9uIHRoZSBpbnB1dCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgYmx1ciBldmVudCBzaG91bGRcbiAgICAgICAgLy8gdHJpZ2dlciBoaWRpbmcgdGhlIG1lbnUuXG4gICAgICAgIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczcuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbk1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpczcuaXNNb3VzZURvd24gPSBmYWxzZTsgLy8gaWYgdGhlIHRhcmdldCBlbGVtZW50IG9yIHRoZSBhY3RpdmVFbGVtZW50IGlzIHdpdGhpbiBhIGRvd25zaGlmdCBub2RlXG4gICAgICAgICAgLy8gdGhlbiB3ZSBkb24ndCB3YW50IHRvIHJlc2V0IGRvd25zaGlmdFxuXG4gICAgICAgICAgdmFyIGNvbnRleHRXaXRoaW5Eb3duc2hpZnQgPSB0YXJnZXRXaXRoaW5Eb3duc2hpZnQoZXZlbnQudGFyZ2V0LCBbX3RoaXM3Ll9yb290Tm9kZSwgX3RoaXM3Ll9tZW51Tm9kZV0sIF90aGlzNy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudCk7XG5cbiAgICAgICAgICBpZiAoIWNvbnRleHRXaXRoaW5Eb3duc2hpZnQgJiYgX3RoaXM3LmdldFN0YXRlKCkuaXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpczcucmVzZXQoe1xuICAgICAgICAgICAgICB0eXBlOiBtb3VzZVVwXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczcucHJvcHMub25PdXRlckNsaWNrKF90aGlzNy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07IC8vIFRvdWNoaW5nIGFuIGVsZW1lbnQgaW4gaU9TIGdpdmVzIGZvY3VzIGFuZCBob3ZlciBzdGF0ZXMsIGJ1dCB0b3VjaGluZyBvdXQgb2ZcbiAgICAgICAgLy8gdGhlIGVsZW1lbnQgd2lsbCByZW1vdmUgaG92ZXIsIGFuZCBwZXJzaXN0IHRoZSBmb2N1cyBzdGF0ZSwgcmVzdWx0aW5nIGluIHRoZVxuICAgICAgICAvLyBibHVyIGV2ZW50IG5vdCBiZWluZyB0cmlnZ2VyZWQuXG4gICAgICAgIC8vIHRoaXMuaXNUb3VjaE1vdmUgaGVscHMgdXMgdHJhY2sgd2hldGhlciB0aGUgdXNlciBpcyB0YXBwaW5nIG9yIHN3aXBpbmcgb24gYSB0b3VjaCBzY3JlZW4uXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHRhcHMgb3V0c2lkZSBvZiBEb3duc2hpZnQsIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHJlc2V0LFxuICAgICAgICAvLyBidXQgbm90IGlmIHRoZSB1c2VyIGlzIHN3aXBpbmdcblxuXG4gICAgICAgIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM3LmlzVG91Y2hNb3ZlID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNy5pc1RvdWNoTW92ZSA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgY29udGV4dFdpdGhpbkRvd25zaGlmdCA9IHRhcmdldFdpdGhpbkRvd25zaGlmdChldmVudC50YXJnZXQsIFtfdGhpczcuX3Jvb3ROb2RlLCBfdGhpczcuX21lbnVOb2RlXSwgX3RoaXM3LnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LCBmYWxzZSk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzNy5pc1RvdWNoTW92ZSAmJiAhY29udGV4dFdpdGhpbkRvd25zaGlmdCAmJiBfdGhpczcuZ2V0U3RhdGUoKS5pc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzNy5yZXNldCh7XG4gICAgICAgICAgICAgIHR5cGU6IHRvdWNoRW5kXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczcucHJvcHMub25PdXRlckNsaWNrKF90aGlzNy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGVudmlyb25tZW50ID0gdGhpcy5wcm9wcy5lbnZpcm9ubWVudDtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblxuICAgICAgICB0aGlzLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM3LmludGVybmFsQ2xlYXJUaW1lb3V0cygpO1xuXG4gICAgICAgICAgX3RoaXM3LnVwZGF0ZVN0YXR1cy5jYW5jZWwoKTtcblxuICAgICAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3VsZFNjcm9sbCA9IGZ1bmN0aW9uIHNob3VsZFNjcm9sbChwcmV2U3RhdGUsIHByZXZQcm9wcykge1xuICAgICAgdmFyIF9yZWYxMCA9IHRoaXMucHJvcHMuaGlnaGxpZ2h0ZWRJbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXRTdGF0ZSgpIDogdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXJyZW50SGlnaGxpZ2h0ZWRJbmRleCA9IF9yZWYxMC5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICB2YXIgX3JlZjExID0gcHJldlByb3BzLmhpZ2hsaWdodGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHByZXZTdGF0ZSA6IHByZXZQcm9wcyxcbiAgICAgICAgICBwcmV2SGlnaGxpZ2h0ZWRJbmRleCA9IF9yZWYxMS5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICB2YXIgc2Nyb2xsV2hlbk9wZW4gPSBjdXJyZW50SGlnaGxpZ2h0ZWRJbmRleCAmJiB0aGlzLmdldFN0YXRlKCkuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuO1xuICAgICAgcmV0dXJuIHNjcm9sbFdoZW5PcGVuIHx8IGN1cnJlbnRIaWdobGlnaHRlZEluZGV4ICE9PSBwcmV2SGlnaGxpZ2h0ZWRJbmRleDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVDb250cm9sbGVkVW5jaGFuZ2VkKHRoaXMuc3RhdGUsIHByZXZQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAocmVhY3QtbmF0aXZlKSAqL1xuXG4gICAgICAgIGlmICggdGhpcy5nZXRNZW51UHJvcHMuY2FsbGVkICYmICF0aGlzLmdldE1lbnVQcm9wcy5zdXBwcmVzc1JlZkVycm9yKSB7XG4gICAgICAgICAgdmFsaWRhdGVHZXRNZW51UHJvcHNDYWxsZWRDb3JyZWN0bHkodGhpcy5fbWVudU5vZGUsIHRoaXMuZ2V0TWVudVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDb250cm9sbGVkUHJvcCh0aGlzLnByb3BzLCAnc2VsZWN0ZWRJdGVtJykgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1DaGFuZ2VkKHByZXZQcm9wcy5zZWxlY3RlZEl0ZW0sIHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgIHR5cGU6IGNvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnByb3BzLml0ZW1Ub1N0cmluZyh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5hdm9pZFNjcm9sbGluZyAmJiB0aGlzLnNob3VsZFNjcm9sbChwcmV2U3RhdGUsIHByZXZQcm9wcykpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIaWdobGlnaHRlZEl0ZW1JbnRvVmlldygpO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKHJlYWN0LW5hdGl2ZSkgKi9cblxuXG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1cygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2xlYW51cCgpOyAvLyBhdm9pZHMgbWVtb3J5IGxlYWtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4sIG5vb3ApOyAvLyBiZWNhdXNlIHRoZSBpdGVtcyBhcmUgcmVyZW5kZXJlZCBldmVyeSB0aW1lIHdlIGNhbGwgdGhlIGNoaWxkcmVuXG4gICAgICAvLyB3ZSBjbGVhciB0aGlzIG91dCBlYWNoIHJlbmRlciBhbmQgaXQgd2lsbCBiZSBwb3B1bGF0ZWQgYWdhaW4gYXNcbiAgICAgIC8vIGdldEl0ZW1Qcm9wcyBpcyBjYWxsZWQuXG5cbiAgICAgIHRoaXMuY2xlYXJJdGVtcygpOyAvLyB3ZSByZXNldCB0aGlzIHNvIHdlIGtub3cgd2hldGhlciB0aGUgdXNlciBjYWxscyBnZXRSb290UHJvcHMgZHVyaW5nXG4gICAgICAvLyB0aGlzIHJlbmRlci4gSWYgdGhleSBkbyB0aGVuIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsXG4gICAgICAvLyBpZiB0aGV5IGRvbid0IHRoZW4gd2UgbmVlZCB0byBjbG9uZSB0aGUgZWxlbWVudCB0aGV5IHJldHVybiBhbmRcbiAgICAgIC8vIGFwcGx5IHRoZSBwcm9wcyBmb3IgdGhlbS5cblxuICAgICAgdGhpcy5nZXRSb290UHJvcHMuY2FsbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmdldFJvb3RQcm9wcy5yZWZLZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmdldFJvb3RQcm9wcy5zdXBwcmVzc1JlZkVycm9yID0gdW5kZWZpbmVkOyAvLyB3ZSBkbyBzb21ldGhpbmcgc2ltaWxhciBmb3IgZ2V0TWVudVByb3BzXG5cbiAgICAgIHRoaXMuZ2V0TWVudVByb3BzLmNhbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRNZW51UHJvcHMucmVmS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nZXRNZW51UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHVuZGVmaW5lZDsgLy8gd2UgZG8gc29tZXRoaW5nIHNpbWlsYXIgZm9yIGdldExhYmVsUHJvcHNcblxuICAgICAgdGhpcy5nZXRMYWJlbFByb3BzLmNhbGxlZCA9IGZhbHNlOyAvLyBhbmQgc29tZXRoaW5nIHNpbWlsYXIgZm9yIGdldElucHV0UHJvcHNcblxuICAgICAgdGhpcy5nZXRJbnB1dFByb3BzLmNhbGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIGVsZW1lbnQgPSB1bndyYXBBcnJheShjaGlsZHJlbih0aGlzLmdldFN0YXRlQW5kSGVscGVycygpKSk7XG5cbiAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ2V0Um9vdFByb3BzLmNhbGxlZCB8fCB0aGlzLnByb3BzLnN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuZ2V0Um9vdFByb3BzLnN1cHByZXNzUmVmRXJyb3IgJiYgIXRoaXMucHJvcHMuc3VwcHJlc3NSZWZFcnJvcikge1xuICAgICAgICAgIHZhbGlkYXRlR2V0Um9vdFByb3BzQ2FsbGVkQ29ycmVjdGx5KGVsZW1lbnQsIHRoaXMuZ2V0Um9vdFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChpc0RPTUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgLy8gdGhleSBkaWRuJ3QgYXBwbHkgdGhlIHJvb3QgcHJvcHMsIGJ1dCB3ZSBjYW4gY2xvbmVcbiAgICAgICAgLy8gdGhpcyBhbmQgYXBwbHkgdGhlIHByb3BzIG91cnNlbHZlc1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHRoaXMuZ2V0Um9vdFByb3BzKGdldEVsZW1lbnRQcm9wcyhlbGVtZW50KSkpO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyB0aGV5IGRpZG4ndCBhcHBseSB0aGUgcm9vdCBwcm9wcywgYnV0IHRoZXkgbmVlZCB0b1xuICAgICAgICAvLyBvdGhlcndpc2Ugd2UgY2FuJ3QgcXVlcnkgYXJvdW5kIHRoZSBhdXRvY29tcGxldGVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb3duc2hpZnQ6IElmIHlvdSByZXR1cm4gYSBub24tRE9NIGVsZW1lbnQsIHlvdSBtdXN0IGFwcGx5IHRoZSBnZXRSb290UHJvcHMgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERvd25zaGlmdDtcbiAgfShDb21wb25lbnQpO1xuXG4gIERvd25zaGlmdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IG51bGwsXG4gICAgZGVmYXVsdElzT3BlbjogZmFsc2UsXG4gICAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IGdldEExMXlTdGF0dXNNZXNzYWdlLFxuICAgIGl0ZW1Ub1N0cmluZzogZnVuY3Rpb24gaXRlbVRvU3RyaW5nKGkpIHtcbiAgICAgIGlmIChpID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc1BsYWluT2JqZWN0KGkpICYmICFpLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybignZG93bnNoaWZ0OiBBbiBvYmplY3Qgd2FzIHBhc3NlZCB0byB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgaXRlbVRvU3RyaW5nYC4gWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBpdGVtVG9TdHJpbmdgIGltcGxlbWVudGF0aW9uLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGBpdGVtVG9TdHJpbmdgIEFQSSBkb2N1bWVudGF0aW9uLicsICdUaGUgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZDonLCBpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFN0cmluZyhpKTtcbiAgICB9LFxuICAgIG9uU3RhdGVDaGFuZ2U6IG5vb3AsXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlOiBub29wLFxuICAgIG9uVXNlckFjdGlvbjogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvblNlbGVjdDogbm9vcCxcbiAgICBvbk91dGVyQ2xpY2s6IG5vb3AsXG4gICAgc2VsZWN0ZWRJdGVtQ2hhbmdlZDogZnVuY3Rpb24gc2VsZWN0ZWRJdGVtQ2hhbmdlZChwcmV2SXRlbSwgaXRlbSkge1xuICAgICAgcmV0dXJuIHByZXZJdGVtICE9PSBpdGVtO1xuICAgIH0sXG4gICAgZW52aXJvbm1lbnQ6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKHNzcikgKi9cbiAgICA/IHt9IDogd2luZG93LFxuICAgIHN0YXRlUmVkdWNlcjogZnVuY3Rpb24gc3RhdGVSZWR1Y2VyKHN0YXRlLCBzdGF0ZVRvU2V0KSB7XG4gICAgICByZXR1cm4gc3RhdGVUb1NldDtcbiAgICB9LFxuICAgIHN1cHByZXNzUmVmRXJyb3I6IGZhbHNlLFxuICAgIHNjcm9sbEludG9WaWV3OiBzY3JvbGxJbnRvVmlld1xuICB9O1xuICBEb3duc2hpZnQuc3RhdGVDaGFuZ2VUeXBlcyA9IHN0YXRlQ2hhbmdlVHlwZXM7XG4gIHJldHVybiBEb3duc2hpZnQ7XG59KCk7XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERvd25zaGlmdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcbiAgaW5pdGlhbElucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluaXRpYWxJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBnZXRBMTF5U3RhdHVzTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvblN0YXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25JbnB1dFZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Vc2VyQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25PdXRlckNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWRJdGVtQ2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlUmVkdWNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KSxcbiAgc3VwcHJlc3NSZWZFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNjcm9sbEludG9WaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gdGhpbmdzIHdlIGtlZXAgaW4gc3RhdGUgZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzXG4gIC8vIGJ1dCBjYW4gYWNjZXB0IGFzIHByb3BzIGZvciBjb250cm9sbGVkIGNvbXBvbmVudHNcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2V0SXRlbUlkOiBQcm9wVHlwZXMuZnVuY1xuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbn0gOiB2b2lkIDA7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlR2V0TWVudVByb3BzQ2FsbGVkQ29ycmVjdGx5KG5vZGUsIF9yZWYxMikge1xuICB2YXIgcmVmS2V5ID0gX3JlZjEyLnJlZktleTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IFRoZSByZWYgcHJvcCBcXFwiXCIgKyByZWZLZXkgKyBcIlxcXCIgZnJvbSBnZXRNZW51UHJvcHMgd2FzIG5vdCBhcHBsaWVkIGNvcnJlY3RseSBvbiB5b3VyIG1lbnUgZWxlbWVudC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVHZXRSb290UHJvcHNDYWxsZWRDb3JyZWN0bHkoZWxlbWVudCwgX3JlZjEzKSB7XG4gIHZhciByZWZLZXkgPSBfcmVmMTMucmVmS2V5O1xuICB2YXIgcmVmS2V5U3BlY2lmaWVkID0gcmVmS2V5ICE9PSAncmVmJztcbiAgdmFyIGlzQ29tcG9zaXRlID0gIWlzRE9NRWxlbWVudChlbGVtZW50KTtcblxuICBpZiAoaXNDb21wb3NpdGUgJiYgIXJlZktleVNwZWNpZmllZCAmJiAhaXNGb3J3YXJkUmVmKGVsZW1lbnQpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdkb3duc2hpZnQ6IFlvdSByZXR1cm5lZCBhIG5vbi1ET00gZWxlbWVudC4gWW91IG11c3Qgc3BlY2lmeSBhIHJlZktleSBpbiBnZXRSb290UHJvcHMnKTtcbiAgfSBlbHNlIGlmICghaXNDb21wb3NpdGUgJiYgcmVmS2V5U3BlY2lmaWVkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBZb3UgcmV0dXJuZWQgYSBET00gZWxlbWVudC4gWW91IHNob3VsZCBub3Qgc3BlY2lmeSBhIHJlZktleSBpbiBnZXRSb290UHJvcHMuIFlvdSBzcGVjaWZpZWQgXFxcIlwiICsgcmVmS2V5ICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgaWYgKCFpc0ZvcndhcmRSZWYoZWxlbWVudCkgJiYgIWdldEVsZW1lbnRQcm9wcyhlbGVtZW50KVtyZWZLZXldKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBZb3UgbXVzdCBhcHBseSB0aGUgcmVmIHByb3AgXFxcIlwiICsgcmVmS2V5ICsgXCJcXFwiIGZyb20gZ2V0Um9vdFByb3BzIG9udG8geW91ciByb290IGVsZW1lbnQuXCIpO1xuICB9XG59XG5cbnZhciBkcm9wZG93bkRlZmF1bHRTdGF0ZVZhbHVlcyA9IHtcbiAgaGlnaGxpZ2h0ZWRJbmRleDogLTEsXG4gIGlzT3BlbjogZmFsc2UsXG4gIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgaW5wdXRWYWx1ZTogJydcbn07XG5cbmZ1bmN0aW9uIGNhbGxPbkNoYW5nZVByb3BzKGFjdGlvbiwgc3RhdGUsIG5ld1N0YXRlKSB7XG4gIHZhciBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHR5cGUgPSBhY3Rpb24udHlwZTtcbiAgdmFyIGNoYW5nZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGludm9rZU9uQ2hhbmdlSGFuZGxlcihrZXksIGFjdGlvbiwgc3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIGlmIChuZXdTdGF0ZVtrZXldICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgICBjaGFuZ2VzW2tleV0gPSBuZXdTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHByb3BzLm9uU3RhdGVDaGFuZ2UgJiYgT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoKSB7XG4gICAgcHJvcHMub25TdGF0ZUNoYW5nZShfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgY2hhbmdlcykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZU9uQ2hhbmdlSGFuZGxlcihrZXksIGFjdGlvbiwgc3RhdGUsIG5ld1N0YXRlKSB7XG4gIHZhciBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHR5cGUgPSBhY3Rpb24udHlwZTtcbiAgdmFyIGhhbmRsZXIgPSBcIm9uXCIgKyBjYXBpdGFsaXplU3RyaW5nKGtleSkgKyBcIkNoYW5nZVwiO1xuXG4gIGlmIChwcm9wc1toYW5kbGVyXSAmJiBuZXdTdGF0ZVtrZXldICE9PSB1bmRlZmluZWQgJiYgbmV3U3RhdGVba2V5XSAhPT0gc3RhdGVba2V5XSkge1xuICAgIHByb3BzW2hhbmRsZXJdKF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBuZXdTdGF0ZSkpO1xuICB9XG59XG4vKipcbiAqIERlZmF1bHQgc3RhdGUgcmVkdWNlciB0aGF0IHJldHVybnMgdGhlIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHMgc3RhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gYSBhY3Rpb24gd2l0aCBjaGFuZ2VzLlxuICogQHJldHVybnMge09iamVjdH0gY2hhbmdlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHN0YXRlUmVkdWNlcihzLCBhKSB7XG4gIHJldHVybiBhLmNoYW5nZXM7XG59XG4vKipcbiAqIFJldHVybnMgYSBtZXNzYWdlIHRvIGJlIGFkZGVkIHRvIGFyaWEtbGl2ZSByZWdpb24gd2hlbiBpdGVtIGlzIHNlbGVjdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3Rpb25QYXJhbWV0ZXJzIFBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gYnVpbGQgdGhlIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgYTExeSBtZXNzYWdlLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2Uoc2VsZWN0aW9uUGFyYW1ldGVycykge1xuICB2YXIgc2VsZWN0ZWRJdGVtID0gc2VsZWN0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEl0ZW0sXG4gICAgICBpdGVtVG9TdHJpbmdMb2NhbCA9IHNlbGVjdGlvblBhcmFtZXRlcnMuaXRlbVRvU3RyaW5nO1xuICByZXR1cm4gc2VsZWN0ZWRJdGVtID8gaXRlbVRvU3RyaW5nTG9jYWwoc2VsZWN0ZWRJdGVtKSArIFwiIGhhcyBiZWVuIHNlbGVjdGVkLlwiIDogJyc7XG59XG4vKipcbiAqIERlYm91bmNlZCBjYWxsIGZvciB1cGRhdGluZyB0aGUgYTExeSBtZXNzYWdlLlxuICovXG5cblxudmFyIHVwZGF0ZUExMXlTdGF0dXMgPSBkZWJvdW5jZShmdW5jdGlvbiAoZ2V0QTExeU1lc3NhZ2UsIGRvY3VtZW50KSB7XG4gIHNldFN0YXR1cyhnZXRBMTF5TWVzc2FnZSgpLCBkb2N1bWVudCk7XG59LCAyMDApO1xuZnVuY3Rpb24gZ2V0RWxlbWVudElkcyhfcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBsYWJlbElkID0gX3JlZi5sYWJlbElkLFxuICAgICAgbWVudUlkID0gX3JlZi5tZW51SWQsXG4gICAgICBnZXRJdGVtSWQgPSBfcmVmLmdldEl0ZW1JZCxcbiAgICAgIHRvZ2dsZUJ1dHRvbklkID0gX3JlZi50b2dnbGVCdXR0b25JZDtcbiAgdmFyIHVuaXF1ZUlkID0gaWQgPT09IHVuZGVmaW5lZCA/IFwiZG93bnNoaWZ0LVwiICsgZ2VuZXJhdGVJZCgpIDogaWQ7XG4gIHJldHVybiB7XG4gICAgbGFiZWxJZDogbGFiZWxJZCB8fCB1bmlxdWVJZCArIFwiLWxhYmVsXCIsXG4gICAgbWVudUlkOiBtZW51SWQgfHwgdW5pcXVlSWQgKyBcIi1tZW51XCIsXG4gICAgZ2V0SXRlbUlkOiBnZXRJdGVtSWQgfHwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gdW5pcXVlSWQgKyBcIi1pdGVtLVwiICsgaW5kZXg7XG4gICAgfSxcbiAgICB0b2dnbGVCdXR0b25JZDogdG9nZ2xlQnV0dG9uSWQgfHwgdW5pcXVlSWQgKyBcIi10b2dnbGUtYnV0dG9uXCJcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1JbmRleChpbmRleCwgaXRlbSwgaXRlbXMpIHtcbiAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zLmluZGV4T2YoaXRlbSk7XG59XG5cbmZ1bmN0aW9uIGl0ZW1Ub1N0cmluZyhpdGVtKSB7XG4gIHJldHVybiBpdGVtID8gU3RyaW5nKGl0ZW0pIDogJyc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BUeXBlc1ZhbGlkYXRvcihjYWxsZXIsIHByb3BUeXBlcykge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMocHJvcFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIG9wdGlvbnMsIGtleSwgY2FsbGVyLm5hbWUpO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gaXNBY2NlcHRlZENoYXJhY3RlcktleShrZXkpIHtcbiAgcmV0dXJuIC9eXFxTezF9JC8udGVzdChrZXkpO1xufVxuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHJpbmcpIHtcbiAgcmV0dXJuIFwiXCIgKyBzdHJpbmcuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbmZ1bmN0aW9uIHVzZUxhdGVzdFJlZih2YWwpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWwpOyAvLyB0ZWNobmljYWxseSB0aGlzIGlzIG5vdCBcImNvbmN1cnJlbnQgbW9kZSBzYWZlXCIgYmVjYXVzZSB3ZSdyZSBtYW5pcHVsYXRpbmdcbiAgLy8gdGhlIHZhbHVlIGR1cmluZyByZW5kZXIgKHNvIGl0J3Mgbm90IGlkZW1wb3RlbnQpLiBIb3dldmVyLCB0aGUgcGxhY2VzIHRoaXNcbiAgLy8gaG9vayBpcyB1c2VkIGlzIHRvIHN1cHBvcnQgbWVtb2l6aW5nIGNhbGxiYWNrcyB3aGljaCB3aWxsIGJlIGNhbGxlZFxuICAvLyAqZHVyaW5nKiByZW5kZXIsIHNvIHdlIG5lZWQgdGhlIGxhdGVzdCB2YWx1ZXMgKmR1cmluZyogcmVuZGVyLlxuICAvLyBJZiBub3QgZm9yIHRoaXMsIHRoZW4gd2UnZCBwcm9iYWJseSB3YW50IHRvIHVzZSB1c2VMYXlvdXRFZmZlY3QgaW5zdGVhZC5cblxuICByZWYuY3VycmVudCA9IHZhbDtcbiAgcmV0dXJuIHJlZjtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNvbnRyb2xsZWQgc3RhdGUgdXNpbmcgYSB0aGUgcHJldmlvdXMgc3RhdGUsIHByb3BzLFxuICogdHdvIHJlZHVjZXJzLCBvbmUgZnJvbSBkb3duc2hpZnQgYW5kIGFuIG9wdGlvbmFsIG9uZSBmcm9tIHRoZSB1c2VyLlxuICogQWxzbyBjYWxscyB0aGUgb25DaGFuZ2UgaGFuZGxlcnMgZm9yIHN0YXRlIHZhbHVlcyB0aGF0IGhhdmUgY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIFJlZHVjZXIgZnVuY3Rpb24gZnJvbSBkb3duc2hpZnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5pdGlhbFN0YXRlIEluaXRpYWwgc3RhdGUgb2YgdGhlIGhvb2suXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIGhvb2sgcHJvcHMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IHdpdGggdGhlIHN0YXRlIGFuZCBhbiBhY3Rpb24gZGlzcGF0Y2hlci5cbiAqL1xuXG5mdW5jdGlvbiB1c2VFbmhhbmNlZFJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcykge1xuICB2YXIgcHJldlN0YXRlUmVmID0gdXNlUmVmKCk7XG4gIHZhciBhY3Rpb25SZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGVuaGFuY2VkUmVkdWNlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgYWN0aW9uUmVmLmN1cnJlbnQgPSBhY3Rpb247XG4gICAgc3RhdGUgPSBnZXRTdGF0ZShzdGF0ZSwgYWN0aW9uLnByb3BzKTtcbiAgICB2YXIgY2hhbmdlcyA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgdmFyIG5ld1N0YXRlID0gYWN0aW9uLnByb3BzLnN0YXRlUmVkdWNlcihzdGF0ZSwgX2V4dGVuZHMoe30sIGFjdGlvbiwge1xuICAgICAgY2hhbmdlczogY2hhbmdlc1xuICAgIH0pKTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH0sIFtyZWR1Y2VyXSk7XG5cbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihlbmhhbmNlZFJlZHVjZXIsIGluaXRpYWxTdGF0ZSksXG4gICAgICBzdGF0ZSA9IF91c2VSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgcHJvcHNSZWYgPSB1c2VMYXRlc3RSZWYocHJvcHMpO1xuICB2YXIgZGlzcGF0Y2hXaXRoUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKF9leHRlbmRzKHtcbiAgICAgIHByb3BzOiBwcm9wc1JlZi5jdXJyZW50XG4gICAgfSwgYWN0aW9uKSk7XG4gIH0sIFtwcm9wc1JlZl0pO1xuICB2YXIgYWN0aW9uID0gYWN0aW9uUmVmLmN1cnJlbnQ7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFjdGlvbiAmJiBwcmV2U3RhdGVSZWYuY3VycmVudCAmJiBwcmV2U3RhdGVSZWYuY3VycmVudCAhPT0gc3RhdGUpIHtcbiAgICAgIGNhbGxPbkNoYW5nZVByb3BzKGFjdGlvbiwgZ2V0U3RhdGUocHJldlN0YXRlUmVmLmN1cnJlbnQsIGFjdGlvbi5wcm9wcyksIHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcmV2U3RhdGVSZWYuY3VycmVudCA9IHN0YXRlO1xuICB9LCBbc3RhdGUsIHByb3BzLCBhY3Rpb25dKTtcbiAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hXaXRoUHJvcHNdO1xufVxuLyoqXG4gKiBXcmFwcyB0aGUgdXNlRW5oYW5jZWRSZWR1Y2VyIGFuZCBhcHBsaWVzIHRoZSBjb250cm9sbGVkIHByb3AgdmFsdWVzIGJlZm9yZVxuICogcmV0dXJuaW5nIHRoZSBuZXcgc3RhdGUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBSZWR1Y2VyIGZ1bmN0aW9uIGZyb20gZG93bnNoaWZ0LlxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxTdGF0ZSBJbml0aWFsIHN0YXRlIG9mIHRoZSBob29rLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFRoZSBob29rIHByb3BzLlxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSB3aXRoIHRoZSBzdGF0ZSBhbmQgYW4gYWN0aW9uIGRpc3BhdGNoZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29udHJvbGxlZFJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcykge1xuICB2YXIgX3VzZUVuaGFuY2VkUmVkdWNlciA9IHVzZUVuaGFuY2VkUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUVuaGFuY2VkUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZUVuaGFuY2VkUmVkdWNlclsxXTtcblxuICByZXR1cm4gW2dldFN0YXRlKHN0YXRlLCBwcm9wcyksIGRpc3BhdGNoXTtcbn1cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IHN0YXRlUmVkdWNlcixcbiAgZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2U6IGdldEExMXlTZWxlY3Rpb25NZXNzYWdlLFxuICBzY3JvbGxJbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG4gIGNpcmN1bGFyTmF2aWdhdGlvbjogZmFsc2UsXG4gIGVudmlyb25tZW50OiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoc3NyKSAqL1xuICA/IHt9IDogd2luZG93XG59O1xuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpIHtcbiAgaWYgKGRlZmF1bHRTdGF0ZVZhbHVlcyA9PT0gdm9pZCAwKSB7XG4gICAgZGVmYXVsdFN0YXRlVmFsdWVzID0gZHJvcGRvd25EZWZhdWx0U3RhdGVWYWx1ZXM7XG4gIH1cblxuICB2YXIgZGVmYXVsdFByb3BLZXkgPSBcImRlZmF1bHRcIiArIGNhcGl0YWxpemVTdHJpbmcocHJvcEtleSk7XG5cbiAgaWYgKGRlZmF1bHRQcm9wS2V5IGluIHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzW2RlZmF1bHRQcm9wS2V5XTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0U3RhdGVWYWx1ZXNbcHJvcEtleV07XG59XG5mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUocHJvcHMsIHByb3BLZXksIGRlZmF1bHRTdGF0ZVZhbHVlcykge1xuICBpZiAoZGVmYXVsdFN0YXRlVmFsdWVzID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0U3RhdGVWYWx1ZXMgPSBkcm9wZG93bkRlZmF1bHRTdGF0ZVZhbHVlcztcbiAgfVxuXG4gIGlmIChwcm9wS2V5IGluIHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzW3Byb3BLZXldO1xuICB9XG5cbiAgdmFyIGluaXRpYWxQcm9wS2V5ID0gXCJpbml0aWFsXCIgKyBjYXBpdGFsaXplU3RyaW5nKHByb3BLZXkpO1xuXG4gIGlmIChpbml0aWFsUHJvcEtleSBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wc1tpbml0aWFsUHJvcEtleV07XG4gIH1cblxuICByZXR1cm4gZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpO1xufVxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gIHZhciBzZWxlY3RlZEl0ZW0gPSBnZXRJbml0aWFsVmFsdWUocHJvcHMsICdzZWxlY3RlZEl0ZW0nKTtcbiAgdmFyIGlzT3BlbiA9IGdldEluaXRpYWxWYWx1ZShwcm9wcywgJ2lzT3BlbicpO1xuICB2YXIgaGlnaGxpZ2h0ZWRJbmRleCA9IGdldEluaXRpYWxWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKTtcbiAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbml0aWFsVmFsdWUocHJvcHMsICdpbnB1dFZhbHVlJyk7XG4gIHJldHVybiB7XG4gICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleCA8IDAgJiYgc2VsZWN0ZWRJdGVtICYmIGlzT3BlbiA/IHByb3BzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSA6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW0sXG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIG9mZnNldCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgpIHtcbiAgdmFyIGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleCA9IHByb3BzLmluaXRpYWxIaWdobGlnaHRlZEluZGV4LFxuICAgICAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXggPSBwcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDtcbiAgdmFyIHNlbGVjdGVkSXRlbSA9IHN0YXRlLnNlbGVjdGVkSXRlbSxcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBzdGF0ZS5oaWdobGlnaHRlZEluZGV4O1xuXG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gLy8gaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXggd2lsbCBnaXZlIHZhbHVlIHRvIGhpZ2hsaWdodGVkSW5kZXggb24gaW5pdGlhbCBzdGF0ZSBvbmx5LlxuXG5cbiAgaWYgKGluaXRpYWxIaWdobGlnaHRlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgaGlnaGxpZ2h0ZWRJbmRleCA9PT0gaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICByZXR1cm4gaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXg7XG4gIH1cblxuICBpZiAoZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDtcbiAgfVxuXG4gIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBnZXROZXh0V3JhcHBpbmdJbmRleChvZmZzZXQsIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSwgaXRlbXMubGVuZ3RoLCBnZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpO1xuICB9XG5cbiAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgPCAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IDA7XG59XG4vKipcbiAqIFJldXNlIHRoZSBtb3ZlbWVudCB0cmFja2luZyBvZiBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPcGVuIFdoZXRoZXIgdGhlIGRyb3Bkb3duIGlzIG9wZW4gb3Igbm90LlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkb3duc2hpZnRFbGVtZW50UmVmcyBEb3duc2hpZnQgZWxlbWVudCByZWZzIHRvIHRyYWNrIG1vdmVtZW50ICh0b2dnbGVCdXR0b24sIG1lbnUgZXRjLilcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnZpcm9ubWVudCBFbnZpcm9ubWVudCB3aGVyZSBjb21wb25lbnQvaG9vayBleGlzdHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVCbHVyIEhhbmRsZXIgb24gYmx1ciBmcm9tIG1vdXNlIG9yIHRvdWNoLlxuICogQHJldHVybnMge09iamVjdH0gUmVmIGNvbnRhaW5pbmcgd2hldGhlciBtb3VzZURvd24gb3IgdG91Y2hNb3ZlIGV2ZW50IGlzIGhhcHBlbmluZ1xuICovXG5cbmZ1bmN0aW9uIHVzZU1vdXNlQW5kVG91Y2hUcmFja2VyKGlzT3BlbiwgZG93bnNoaWZ0RWxlbWVudFJlZnMsIGVudmlyb25tZW50LCBoYW5kbGVCbHVyKSB7XG4gIHZhciBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYgPSB1c2VSZWYoe1xuICAgIGlzTW91c2VEb3duOiBmYWxzZSxcbiAgICBpc1RvdWNoTW92ZTogZmFsc2VcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhlIHNhbWUgc3RyYXRlZ3kgZm9yIGNoZWNraW5nIGlmIGEgY2xpY2sgb2NjdXJyZWQgaW5zaWRlIG9yIG91dHNpZGUgZG93bnNpZnRcbiAgICAvLyBhcyBpbiBkb3duc2hpZnQuanMuXG4gICAgdmFyIG9uTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgIH07XG5cbiAgICB2YXIgb25Nb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgICBpZiAoaXNPcGVuICYmICF0YXJnZXRXaXRoaW5Eb3duc2hpZnQoZXZlbnQudGFyZ2V0LCBkb3duc2hpZnRFbGVtZW50UmVmcy5tYXAoZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgICB9KSwgZW52aXJvbm1lbnQuZG9jdW1lbnQpKSB7XG4gICAgICAgIGhhbmRsZUJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzVG91Y2hNb3ZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzVG91Y2hNb3ZlID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChpc09wZW4gJiYgIW1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzVG91Y2hNb3ZlICYmICF0YXJnZXRXaXRoaW5Eb3duc2hpZnQoZXZlbnQudGFyZ2V0LCBkb3duc2hpZnRFbGVtZW50UmVmcy5tYXAoZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgICB9KSwgZW52aXJvbm1lbnQuZG9jdW1lbnQsIGZhbHNlKSkge1xuICAgICAgICBoYW5kbGVCbHVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaXNPcGVuLCBlbnZpcm9ubWVudF0pO1xuICByZXR1cm4gbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmO1xufVxuLyoqXG4gKiBDdXN0b20gaG9vayB0aGF0IGNoZWNrcyBpZiBnZXR0ZXIgcHJvcHMgYXJlIGNhbGxlZCBjb3JyZWN0bHkuXG4gKlxuICogQHBhcmFtICB7Li4uYW55fSBwcm9wS2V5cyBHZXR0ZXIgcHJvcCBuYW1lcyB0byBiZSBoYW5kbGVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBTZXR0ZXIgZnVuY3Rpb24gY2FsbGVkIGluc2lkZSBnZXR0ZXIgcHJvcHMgdG8gc2V0IGNhbGwgaW5mb3JtYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gdXNlR2V0dGVyUHJvcHNDYWxsZWRDaGVja2VyKCkge1xuICB2YXIgaXNOb3RQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcbiAgdmFyIGlzSW5pdGlhbE1vdW50UmVmID0gdXNlUmVmKHRydWUpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wS2V5cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wS2V5c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBnZXR0ZXJQcm9wc0NhbGxlZFJlZiA9IHVzZVJlZihwcm9wS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcHJvcEtleSkge1xuICAgIGFjY1twcm9wS2V5XSA9IHt9O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc05vdFByb2R1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhnZXR0ZXJQcm9wc0NhbGxlZFJlZi5jdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wS2V5KSB7XG4gICAgICB2YXIgcHJvcENhbGxJbmZvID0gZ2V0dGVyUHJvcHNDYWxsZWRSZWYuY3VycmVudFtwcm9wS2V5XTtcblxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhwcm9wQ2FsbEluZm8pLmxlbmd0aCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogWW91IGZvcmdvdCB0byBjYWxsIHRoZSBcIiArIHByb3BLZXkgKyBcIiBnZXR0ZXIgZnVuY3Rpb24gb24geW91ciBjb21wb25lbnQgLyBlbGVtZW50LlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN1cHByZXNzUmVmRXJyb3IgPSBwcm9wQ2FsbEluZm8uc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgICByZWZLZXkgPSBwcm9wQ2FsbEluZm8ucmVmS2V5LFxuICAgICAgICAgIGVsZW1lbnRSZWYgPSBwcm9wQ2FsbEluZm8uZWxlbWVudFJlZjtcblxuICAgICAgaWYgKCghZWxlbWVudFJlZiB8fCAhZWxlbWVudFJlZi5jdXJyZW50KSAmJiAhc3VwcHJlc3NSZWZFcnJvcikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBUaGUgcmVmIHByb3AgXFxcIlwiICsgcmVmS2V5ICsgXCJcXFwiIGZyb20gXCIgKyBwcm9wS2V5ICsgXCIgd2FzIG5vdCBhcHBsaWVkIGNvcnJlY3RseSBvbiB5b3VyIGVsZW1lbnQuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSk7XG4gIHZhciBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocHJvcEtleSwgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBlbGVtZW50UmVmKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGdldHRlclByb3BzQ2FsbGVkUmVmLmN1cnJlbnRbcHJvcEtleV0gPSB7XG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3I6IHN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHJlZktleTogcmVmS2V5LFxuICAgICAgICBlbGVtZW50UmVmOiBlbGVtZW50UmVmXG4gICAgICB9O1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gc2V0R2V0dGVyUHJvcENhbGxJbmZvO1xufVxuZnVuY3Rpb24gdXNlQTExeU1lc3NhZ2VTZXR0ZXIoZ2V0QTExeU1lc3NhZ2UsIGRlcGVuZGVuY3lBcnJheSwgX3JlZjIpIHtcbiAgdmFyIGlzSW5pdGlhbE1vdW50ID0gX3JlZjIuaXNJbml0aWFsTW91bnQsXG4gICAgICBwcmV2aW91c1Jlc3VsdENvdW50ID0gX3JlZjIucHJldmlvdXNSZXN1bHRDb3VudCxcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfcmVmMi5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgaXRlbXMgPSBfcmVmMi5pdGVtcyxcbiAgICAgIGVudmlyb25tZW50ID0gX3JlZjIuZW52aXJvbm1lbnQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImlzSW5pdGlhbE1vdW50XCIsIFwicHJldmlvdXNSZXN1bHRDb3VudFwiLCBcImhpZ2hsaWdodGVkSW5kZXhcIiwgXCJpdGVtc1wiLCBcImVudmlyb25tZW50XCJdKTtcblxuICAvLyBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzdGF0ZS5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVBMTF5U3RhdHVzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRBMTF5TWVzc2FnZShfZXh0ZW5kcyh7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbTogaXRlbXNbaGlnaGxpZ2h0ZWRJbmRleF0sXG4gICAgICAgIHJlc3VsdENvdW50OiBpdGVtcy5sZW5ndGgsXG4gICAgICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9LCBlbnZpcm9ubWVudC5kb2N1bWVudCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgZGVwZW5kZW5jeUFycmF5KTtcbn1cbmZ1bmN0aW9uIHVzZVNjcm9sbEludG9WaWV3KF9yZWYzKSB7XG4gIHZhciBoaWdobGlnaHRlZEluZGV4ID0gX3JlZjMuaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGlzT3BlbiA9IF9yZWYzLmlzT3BlbixcbiAgICAgIGl0ZW1SZWZzID0gX3JlZjMuaXRlbVJlZnMsXG4gICAgICBnZXRJdGVtTm9kZUZyb21JbmRleCA9IF9yZWYzLmdldEl0ZW1Ob2RlRnJvbUluZGV4LFxuICAgICAgbWVudUVsZW1lbnQgPSBfcmVmMy5tZW51RWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3UHJvcCA9IF9yZWYzLnNjcm9sbEludG9WaWV3O1xuICAvLyB1c2VkIG5vdCB0byBzY3JvbGwgb24gaGlnaGxpZ2h0IGJ5IG1vdXNlLlxuICB2YXIgc2hvdWxkU2Nyb2xsUmVmID0gdXNlUmVmKHRydWUpOyAvLyBTY3JvbGwgb24gaGlnaGxpZ2h0ZWQgaXRlbSBpZiBjaGFuZ2UgY29tZXMgZnJvbSBrZXlib2FyZC5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChoaWdobGlnaHRlZEluZGV4IDwgMCB8fCAhaXNPcGVuIHx8ICFPYmplY3Qua2V5cyhpdGVtUmVmcy5jdXJyZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2Nyb2xsUmVmLmN1cnJlbnQgPT09IGZhbHNlKSB7XG4gICAgICBzaG91bGRTY3JvbGxSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbEludG9WaWV3UHJvcChnZXRJdGVtTm9kZUZyb21JbmRleChoaWdobGlnaHRlZEluZGV4KSwgbWVudUVsZW1lbnQpO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtoaWdobGlnaHRlZEluZGV4XSk7XG4gIHJldHVybiBzaG91bGRTY3JvbGxSZWY7XG59XG5mdW5jdGlvbiB1c2VDb250cm9sUHJvcHNWYWxpZGF0b3IoX3JlZjQpIHtcbiAgdmFyIGlzSW5pdGlhbE1vdW50ID0gX3JlZjQuaXNJbml0aWFsTW91bnQsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgc3RhdGUgPSBfcmVmNC5zdGF0ZTtcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgd2hlbiBwcm9wcyBhcmUgbW92aW5nIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQuXG4gIHZhciBwcmV2UHJvcHNSZWYgPSB1c2VSZWYocHJvcHMpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbGlkYXRlQ29udHJvbGxlZFVuY2hhbmdlZChzdGF0ZSwgcHJldlByb3BzUmVmLmN1cnJlbnQsIHByb3BzKTtcbiAgICBwcmV2UHJvcHNSZWYuY3VycmVudCA9IHByb3BzO1xuICB9LCBbc3RhdGUsIHByb3BzLCBpc0luaXRpYWxNb3VudF0pO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtSW5kZXhCeUNoYXJhY3RlcktleShrZXlzU29GYXIsIGhpZ2hsaWdodGVkSW5kZXgsIGl0ZW1zLCBpdGVtVG9TdHJpbmdQYXJhbSwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgpIHtcbiAgdmFyIGxvd2VyQ2FzZWRJdGVtU3RyaW5ncyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtVG9TdHJpbmdQYXJhbShpdGVtKS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbiAgdmFyIGxvd2VyQ2FzZWRLZXlzU29GYXIgPSBrZXlzU29GYXIudG9Mb3dlckNhc2UoKTtcblxuICB2YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIChpdGVtU3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBlbGVtZW50ID0gZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgIHJldHVybiBpdGVtU3RyaW5nLnN0YXJ0c1dpdGgobG93ZXJDYXNlZEtleXNTb0ZhcikgJiYgIShlbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbiAgfTtcblxuICBmb3IgKHZhciBpbmRleCA9IGhpZ2hsaWdodGVkSW5kZXggKyAxOyBpbmRleCA8IGxvd2VyQ2FzZWRJdGVtU3RyaW5ncy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YXIgaXRlbVN0cmluZyA9IGxvd2VyQ2FzZWRJdGVtU3RyaW5nc1tpbmRleF07XG5cbiAgICBpZiAoaXNWYWxpZChpdGVtU3RyaW5nLCBpbmRleCkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaW5kZXggPSAwOyBfaW5kZXggPCBoaWdobGlnaHRlZEluZGV4OyBfaW5kZXgrKykge1xuICAgIHZhciBfaXRlbVN0cmluZyA9IGxvd2VyQ2FzZWRJdGVtU3RyaW5nc1tfaW5kZXhdO1xuXG4gICAgaWYgKGlzVmFsaWQoX2l0ZW1TdHJpbmcsIF9pbmRleCkpIHtcbiAgICAgIHJldHVybiBfaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhpZ2hsaWdodGVkSW5kZXg7XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNpcmN1bGFyTmF2aWdhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGluaXRpYWxJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEl0ZW1JZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvZ2dsZUJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdGVkSXRlbUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGlnaGxpZ2h0ZWRJbmRleENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbklzT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KVxufTtcbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igc3RhdHVzIG1lc3NhZ2UuIE9ubHkgYWRkZWQgd2hlbiBtZW51IGlzIG9wZW4uXG4gKiBXaWxsIHNwZWNpZnQgaWYgdGhlcmUgYXJlIHJlc3VsdHMgaW4gdGhlIGxpc3QsIGFuZCBpZiBzbywgaG93IG1hbnksXG4gKiBhbmQgd2hhdCBrZXlzIGFyZSByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gdGhlIGRvd25zaGlmdCBzdGF0ZSBhbmQgb3RoZXIgcmVsZXZhbnQgcHJvcGVydGllc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgYTExeSBzdGF0dXMgbWVzc2FnZVxuICovXG5cbmZ1bmN0aW9uIGdldEExMXlTdGF0dXNNZXNzYWdlJDEoX3JlZikge1xuICB2YXIgaXNPcGVuID0gX3JlZi5pc09wZW4sXG4gICAgICByZXN1bHRDb3VudCA9IF9yZWYucmVzdWx0Q291bnQsXG4gICAgICBwcmV2aW91c1Jlc3VsdENvdW50ID0gX3JlZi5wcmV2aW91c1Jlc3VsdENvdW50O1xuXG4gIGlmICghaXNPcGVuKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKCFyZXN1bHRDb3VudCkge1xuICAgIHJldHVybiAnTm8gcmVzdWx0cyBhcmUgYXZhaWxhYmxlLic7XG4gIH1cblxuICBpZiAocmVzdWx0Q291bnQgIT09IHByZXZpb3VzUmVzdWx0Q291bnQpIHtcbiAgICByZXR1cm4gcmVzdWx0Q291bnQgKyBcIiByZXN1bHRcIiArIChyZXN1bHRDb3VudCA9PT0gMSA/ICcgaXMnIDogJ3MgYXJlJykgKyBcIiBhdmFpbGFibGUsIHVzZSB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlLiBQcmVzcyBFbnRlciBvciBTcGFjZSBCYXIga2V5cyB0byBzZWxlY3QuXCI7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBkZWZhdWx0UHJvcHMkMSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IGdldEExMXlTdGF0dXNNZXNzYWdlJDFcbn0pO1xuXG52YXIgTWVudUtleURvd25BcnJvd0Rvd24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDA7XG52YXIgTWVudUtleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9rZXlkb3duX2Fycm93X3VwX18nIDogMTtcbnZhciBNZW51S2V5RG93bkVzY2FwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9lc2NhcGVfXycgOiAyO1xudmFyIE1lbnVLZXlEb3duSG9tZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9ob21lX18nIDogMztcbnZhciBNZW51S2V5RG93bkVuZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9lbmRfXycgOiA0O1xudmFyIE1lbnVLZXlEb3duRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fZW50ZXJfXycgOiA1O1xudmFyIE1lbnVLZXlEb3duU3BhY2VCdXR0b24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fc3BhY2VfYnV0dG9uX18nIDogNjtcbnZhciBNZW51S2V5RG93bkNoYXJhY3RlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9jaGFyYWN0ZXJfXycgOiA3O1xudmFyIE1lbnVCbHVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9ibHVyX18nIDogODtcbnZhciBNZW51TW91c2VMZWF2ZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfbW91c2VfbGVhdmVfXycgOiA5O1xudmFyIEl0ZW1Nb3VzZU1vdmUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX21vdXNlX21vdmVfXycgOiAxMDtcbnZhciBJdGVtQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX2NsaWNrX18nIDogMTE7XG52YXIgVG9nZ2xlQnV0dG9uQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX190b2dnbGVidXR0b25fY2xpY2tfXycgOiAxMjtcbnZhciBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDEzO1xudmFyIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fYXJyb3dfdXBfXycgOiAxNDtcbnZhciBUb2dnbGVCdXR0b25LZXlEb3duQ2hhcmFjdGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fY2hhcmFjdGVyX18nIDogMTU7XG52YXIgRnVuY3Rpb25Ub2dnbGVNZW51ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fdG9nZ2xlX21lbnVfXycgOiAxNjtcbnZhciBGdW5jdGlvbk9wZW5NZW51ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fb3Blbl9tZW51X18nIDogMTc7XG52YXIgRnVuY3Rpb25DbG9zZU1lbnUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9jbG9zZV9tZW51X18nIDogMTg7XG52YXIgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2hpZ2hsaWdodGVkX2luZGV4X18nIDogMTk7XG52YXIgRnVuY3Rpb25TZWxlY3RJdGVtID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2VsZWN0X2l0ZW1fXycgOiAyMDtcbnZhciBGdW5jdGlvblNldElucHV0VmFsdWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZXRfaW5wdXRfdmFsdWVfXycgOiAyMTtcbnZhciBGdW5jdGlvblJlc2V0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fcmVzZXRfXycgOiAyMjtcblxudmFyIHN0YXRlQ2hhbmdlVHlwZXMkMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBNZW51S2V5RG93bkFycm93RG93bjogTWVudUtleURvd25BcnJvd0Rvd24sXG4gIE1lbnVLZXlEb3duQXJyb3dVcDogTWVudUtleURvd25BcnJvd1VwLFxuICBNZW51S2V5RG93bkVzY2FwZTogTWVudUtleURvd25Fc2NhcGUsXG4gIE1lbnVLZXlEb3duSG9tZTogTWVudUtleURvd25Ib21lLFxuICBNZW51S2V5RG93bkVuZDogTWVudUtleURvd25FbmQsXG4gIE1lbnVLZXlEb3duRW50ZXI6IE1lbnVLZXlEb3duRW50ZXIsXG4gIE1lbnVLZXlEb3duU3BhY2VCdXR0b246IE1lbnVLZXlEb3duU3BhY2VCdXR0b24sXG4gIE1lbnVLZXlEb3duQ2hhcmFjdGVyOiBNZW51S2V5RG93bkNoYXJhY3RlcixcbiAgTWVudUJsdXI6IE1lbnVCbHVyLFxuICBNZW51TW91c2VMZWF2ZTogTWVudU1vdXNlTGVhdmUsXG4gIEl0ZW1Nb3VzZU1vdmU6IEl0ZW1Nb3VzZU1vdmUsXG4gIEl0ZW1DbGljazogSXRlbUNsaWNrLFxuICBUb2dnbGVCdXR0b25DbGljazogVG9nZ2xlQnV0dG9uQ2xpY2ssXG4gIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd0Rvd246IFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd0Rvd24sXG4gIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd1VwOiBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dVcCxcbiAgVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcjogVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcixcbiAgRnVuY3Rpb25Ub2dnbGVNZW51OiBGdW5jdGlvblRvZ2dsZU1lbnUsXG4gIEZ1bmN0aW9uT3Blbk1lbnU6IEZ1bmN0aW9uT3Blbk1lbnUsXG4gIEZ1bmN0aW9uQ2xvc2VNZW51OiBGdW5jdGlvbkNsb3NlTWVudSxcbiAgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgsXG4gIEZ1bmN0aW9uU2VsZWN0SXRlbTogRnVuY3Rpb25TZWxlY3RJdGVtLFxuICBGdW5jdGlvblNldElucHV0VmFsdWU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSxcbiAgRnVuY3Rpb25SZXNldDogRnVuY3Rpb25SZXNldFxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cblxuZnVuY3Rpb24gZG93bnNoaWZ0U2VsZWN0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHNoaWZ0S2V5ID0gYWN0aW9uLnNoaWZ0S2V5O1xuICB2YXIgY2hhbmdlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEl0ZW1Nb3VzZU1vdmU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBhY3Rpb24uaW5kZXhcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSXRlbUNsaWNrOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpc09wZW4nKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW2FjdGlvbi5pbmRleF1cbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcjpcbiAgICAgIHtcbiAgICAgICAgdmFyIGxvd2VyY2FzZWRLZXkgPSBhY3Rpb24ua2V5O1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IFwiXCIgKyBzdGF0ZS5pbnB1dFZhbHVlICsgbG93ZXJjYXNlZEtleTtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IGdldEl0ZW1JbmRleEJ5Q2hhcmFjdGVyS2V5KGlucHV0VmFsdWUsIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHByb3BzLml0ZW1zLmluZGV4T2Yoc3RhdGUuc2VsZWN0ZWRJdGVtKSA6IC0xLCBwcm9wcy5pdGVtcywgcHJvcHMuaXRlbVRvU3RyaW5nLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgpO1xuICAgICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSwgaXRlbUluZGV4ID49IDAgJiYge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogcHJvcHMuaXRlbXNbaXRlbUluZGV4XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDEsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCksXG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dVcDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAtMSwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KSxcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duRW50ZXI6XG4gICAgY2FzZSBNZW51S2V5RG93blNwYWNlQnV0dG9uOlxuICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgaXNPcGVuOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpc09wZW4nKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpXG4gICAgICB9LCBzdGF0ZS5oaWdobGlnaHRlZEluZGV4ID49IDAgJiYge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkhvbWU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgxLCAwLCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duRW5kOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoLTEsIHByb3BzLml0ZW1zLmxlbmd0aCAtIDEsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBmYWxzZSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25Fc2NhcGU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51Qmx1cjpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IC0xXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duQ2hhcmFjdGVyOlxuICAgICAge1xuICAgICAgICB2YXIgX2xvd2VyY2FzZWRLZXkgPSBhY3Rpb24ua2V5O1xuXG4gICAgICAgIHZhciBfaW5wdXRWYWx1ZSA9IFwiXCIgKyBzdGF0ZS5pbnB1dFZhbHVlICsgX2xvd2VyY2FzZWRLZXk7XG5cbiAgICAgICAgdmFyIGhpZ2hsaWdodGVkSW5kZXggPSBnZXRJdGVtSW5kZXhCeUNoYXJhY3RlcktleShfaW5wdXRWYWx1ZSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMsIHByb3BzLml0ZW1Ub1N0cmluZywgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KTtcbiAgICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBfaW5wdXRWYWx1ZVxuICAgICAgICB9LCBoaWdobGlnaHRlZEluZGV4ID49IDAgJiYge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25BcnJvd0Rvd246XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0V3JhcHBpbmdJbmRleChzaGlmdEtleSA/IDUgOiAxLCBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgcHJvcHMuY2lyY3VsYXJOYXZpZ2F0aW9uKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkFycm93VXA6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0V3JhcHBpbmdJbmRleChzaGlmdEtleSA/IC01IDogLTEsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBwcm9wcy5jaXJjdWxhck5hdmlnYXRpb24pXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVNb3VzZUxlYXZlOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uQ2xpY2s6XG4gICAgY2FzZSBGdW5jdGlvblRvZ2dsZU1lbnU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IHN0YXRlLmlzT3BlbiA/IC0xIDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDApXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uT3Blbk1lbnU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAwKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvbkNsb3NlTWVudTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogYWN0aW9uLmhpZ2hsaWdodGVkSW5kZXhcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25TZWxlY3RJdGVtOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uc2VsZWN0ZWRJdGVtXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IGFjdGlvbi5pbnB1dFZhbHVlXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uUmVzZXQ6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdoaWdobGlnaHRlZEluZGV4JyksXG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIHNlbGVjdGVkSXRlbTogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnc2VsZWN0ZWRJdGVtJyksXG4gICAgICAgIGlucHV0VmFsdWU6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lucHV0VmFsdWUnKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBjYWxsZWQgd2l0aG91dCBwcm9wZXIgYWN0aW9uIHR5cGUuJyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG52YXIgdmFsaWRhdGVQcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5udWxsIDogZ2V0UHJvcFR5cGVzVmFsaWRhdG9yKHVzZVNlbGVjdCwgcHJvcFR5cGVzKTtcbnVzZVNlbGVjdC5zdGF0ZUNoYW5nZVR5cGVzID0gc3RhdGVDaGFuZ2VUeXBlcyQxO1xuXG5mdW5jdGlvbiB1c2VTZWxlY3QodXNlclByb3BzKSB7XG4gIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHVzZXJQcm9wcyA9IHt9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyh1c2VyUHJvcHMpO1xuICB9IC8vIFByb3BzIGRlZmF1bHRzIGFuZCBkZXN0cnVjdHVyaW5nLlxuXG5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcyQxLCB1c2VyUHJvcHMpO1xuXG4gIHZhciBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsSW50b1ZpZXcgPSBwcm9wcy5zY3JvbGxJbnRvVmlldyxcbiAgICAgIGVudmlyb25tZW50ID0gcHJvcHMuZW52aXJvbm1lbnQsXG4gICAgICBpbml0aWFsSXNPcGVuID0gcHJvcHMuaW5pdGlhbElzT3BlbixcbiAgICAgIGRlZmF1bHRJc09wZW4gPSBwcm9wcy5kZWZhdWx0SXNPcGVuLFxuICAgICAgaXRlbVRvU3RyaW5nID0gcHJvcHMuaXRlbVRvU3RyaW5nLFxuICAgICAgZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UgPSBwcm9wcy5nZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSxcbiAgICAgIGdldEExMXlTdGF0dXNNZXNzYWdlID0gcHJvcHMuZ2V0QTExeVN0YXR1c01lc3NhZ2U7IC8vIEluaXRpYWwgc3RhdGUgZGVwZW5kaW5nIG9uIGNvbnRyb2xsZWQgcHJvcHMuXG5cbiAgdmFyIGluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZShwcm9wcyk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkUmVkdWNlciA9IHVzZUNvbnRyb2xsZWRSZWR1Y2VyKGRvd25zaGlmdFNlbGVjdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpLFxuICAgICAgc3RhdGUgPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VDb250cm9sbGVkUmVkdWNlclsxXTtcblxuICB2YXIgaXNPcGVuID0gc3RhdGUuaXNPcGVuLFxuICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICBzZWxlY3RlZEl0ZW0gPSBzdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICBpbnB1dFZhbHVlID0gc3RhdGUuaW5wdXRWYWx1ZTsgLy8gRWxlbWVudCBlZnMuXG5cbiAgdmFyIHRvZ2dsZUJ1dHRvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpdGVtUmVmcyA9IHVzZVJlZigpO1xuICBpdGVtUmVmcy5jdXJyZW50ID0ge307IC8vIHVzZWQgbm90IHRvIHRyaWdnZXIgbWVudSBibHVyIGFjdGlvbiBpbiBzb21lIHNjZW5hcmlvcy5cblxuICB2YXIgc2hvdWxkQmx1clJlZiA9IHVzZVJlZih0cnVlKTsgLy8gdXNlZCB0byBrZWVwIHRoZSBpbnB1dFZhbHVlIGNsZWFyVGltZW91dCBvYmplY3QgYmV0d2VlbiByZW5kZXJzLlxuXG4gIHZhciBjbGVhclRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7IC8vIHByZXZlbnQgaWQgcmUtZ2VuZXJhdGlvbiBiZXR3ZWVuIHJlbmRlcnMuXG5cbiAgdmFyIGVsZW1lbnRJZHNSZWYgPSB1c2VSZWYoZ2V0RWxlbWVudElkcyhwcm9wcykpOyAvLyB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2UgaGFkIG9uIHByZXZpb3VzIGN5Y2xlLlxuXG4gIHZhciBwcmV2aW91c1Jlc3VsdENvdW50UmVmID0gdXNlUmVmKCk7XG4gIHZhciBpc0luaXRpYWxNb3VudFJlZiA9IHVzZVJlZih0cnVlKTsgLy8gdXRpbGl0eSBjYWxsYmFjayB0byBnZXQgaXRlbSBlbGVtZW50LlxuXG4gIHZhciBsYXRlc3QgPSB1c2VMYXRlc3RSZWYoe1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBwcm9wczogcHJvcHNcbiAgfSk7IC8vIFNvbWUgdXRpbHMuXG5cbiAgdmFyIGdldEl0ZW1Ob2RlRnJvbUluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1SZWZzLmN1cnJlbnRbZWxlbWVudElkc1JlZi5jdXJyZW50LmdldEl0ZW1JZChpbmRleCldO1xuICB9OyAvLyBFZmZlY3RzLlxuICAvLyBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzdGF0ZS5cblxuXG4gIHVzZUExMXlNZXNzYWdlU2V0dGVyKGdldEExMXlTdGF0dXNNZXNzYWdlLCBbaXNPcGVuLCBoaWdobGlnaHRlZEluZGV4LCBpbnB1dFZhbHVlLCBpdGVtc10sIF9leHRlbmRzKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcmV2aW91c1Jlc3VsdENvdW50OiBwcmV2aW91c1Jlc3VsdENvdW50UmVmLmN1cnJlbnQsXG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudCxcbiAgICBpdGVtVG9TdHJpbmc6IGl0ZW1Ub1N0cmluZ1xuICB9LCBzdGF0ZSkpOyAvLyBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzZWxlY3RlZEl0ZW0uXG5cbiAgdXNlQTExeU1lc3NhZ2VTZXR0ZXIoZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UsIFtzZWxlY3RlZEl0ZW1dLCBfZXh0ZW5kcyh7XG4gICAgaXNJbml0aWFsTW91bnQ6IGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQsXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudDogcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50LFxuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQsXG4gICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmdcbiAgfSwgc3RhdGUpKTsgLy8gU2Nyb2xsIG9uIGhpZ2hsaWdodGVkIGl0ZW0gaWYgY2hhbmdlIGNvbWVzIGZyb20ga2V5Ym9hcmQuXG5cbiAgdmFyIHNob3VsZFNjcm9sbFJlZiA9IHVzZVNjcm9sbEludG9WaWV3KHtcbiAgICBtZW51RWxlbWVudDogbWVudVJlZi5jdXJyZW50LFxuICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgaXRlbVJlZnM6IGl0ZW1SZWZzLFxuICAgIHNjcm9sbEludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcbiAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgfSk7IC8vIFNldHMgY2xlYW51cCBmb3IgdGhlIGtleXNTb0ZhciBhZnRlciA1MDBtcy5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIGluaXQgdGhlIGNsZWFuIGZ1bmN0aW9uIGhlcmUgYXMgd2UgbmVlZCBhY2Nlc3MgdG8gZGlzcGF0Y2guXG4gICAgaWYgKGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dFJlZi5jdXJyZW50ID0gZGVib3VuY2UoZnVuY3Rpb24gKG91dGVyRGlzcGF0Y2gpIHtcbiAgICAgICAgb3V0ZXJEaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogRnVuY3Rpb25TZXRJbnB1dFZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXRSZWYuY3VycmVudChkaXNwYXRjaCk7XG4gIH0sIFtkaXNwYXRjaCwgaW5wdXRWYWx1ZV0pO1xuICB1c2VDb250cm9sUHJvcHNWYWxpZGF0b3Ioe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSk7XG4gIC8qIENvbnRyb2xzIHRoZSBmb2N1cyBvbiB0aGUgbWVudSBvciB0aGUgdG9nZ2xlIGJ1dHRvbi4gKi9cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIERvbid0IGZvY3VzIG1lbnUgb24gZmlyc3QgcmVuZGVyLlxuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAvLyBVbmxlc3MgaXQgd2FzIGluaXRpYWxpc2VkIGFzIG9wZW4uXG4gICAgICBpZiAoKGluaXRpYWxJc09wZW4gfHwgZGVmYXVsdElzT3BlbiB8fCBpc09wZW4pICYmIG1lbnVSZWYuY3VycmVudCkge1xuICAgICAgICBtZW51UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRm9jdXMgbWVudSBvbiBvcGVuLlxuXG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKG1lbnVSZWYuY3VycmVudCkge1xuICAgICAgICBtZW51UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRm9jdXMgdG9nZ2xlQnV0dG9uIG9uIGNsb3NlLCBidXQgbm90IGlmIGl0IHdhcyBjbG9zZWQgd2l0aCAoU2hpZnQrKVRhYi5cblxuXG4gICAgaWYgKGVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IG1lbnVSZWYuY3VycmVudCkge1xuICAgICAgLy8gaXN0YW5idWwgaWdub3JlIGVsc2VcbiAgICAgIGlmICh0b2dnbGVCdXR0b25SZWYuY3VycmVudCkge1xuICAgICAgICBzaG91bGRCbHVyUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlQnV0dG9uUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB9LCBbaXNPcGVuXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c1Jlc3VsdENvdW50UmVmLmN1cnJlbnQgPSBpdGVtcy5sZW5ndGg7XG4gIH0pOyAvLyBBZGQgbW91c2UvdG91Y2ggZXZlbnRzIHRvIGRvY3VtZW50LlxuXG4gIHZhciBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYgPSB1c2VNb3VzZUFuZFRvdWNoVHJhY2tlcihpc09wZW4sIFttZW51UmVmLCB0b2dnbGVCdXR0b25SZWZdLCBlbnZpcm9ubWVudCwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IE1lbnVCbHVyXG4gICAgfSk7XG4gIH0pO1xuICB2YXIgc2V0R2V0dGVyUHJvcENhbGxJbmZvID0gdXNlR2V0dGVyUHJvcHNDYWxsZWRDaGVja2VyKCdnZXRNZW51UHJvcHMnLCAnZ2V0VG9nZ2xlQnV0dG9uUHJvcHMnKTsgLy8gTWFrZSBpbml0aWFsIHJlZiBmYWxzZS5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW10pOyAvLyBFdmVudCBoYW5kbGVyIGZ1bmN0aW9ucy5cblxuICB2YXIgdG9nZ2xlQnV0dG9uS2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93VXAsXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4LFxuICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIG1lbnVLZXlEb3duSGFuZGxlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgQXJyb3dEb3duOiBmdW5jdGlvbiBBcnJvd0Rvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duQXJyb3dEb3duLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25BcnJvd1VwLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgSG9tZTogZnVuY3Rpb24gSG9tZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25Ib21lLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFbmQ6IGZ1bmN0aW9uIEVuZChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25FbmQsXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEVzY2FwZTogZnVuY3Rpb24gRXNjYXBlKCkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25Fc2NhcGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRW50ZXI6IGZ1bmN0aW9uIEVudGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNZW51S2V5RG93bkVudGVyXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgICcgJzogZnVuY3Rpb24gXyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25TcGFjZUJ1dHRvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTsgLy8gQWN0aW9uIGZ1bmN0aW9ucy5cblxuICB2YXIgdG9nZ2xlTWVudSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblRvZ2dsZU1lbnVcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBjbG9zZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25DbG9zZU1lbnVcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBvcGVuTWVudSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvbk9wZW5NZW51XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgc2V0SGlnaGxpZ2h0ZWRJbmRleCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdIaWdobGlnaHRlZEluZGV4KSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogbmV3SGlnaGxpZ2h0ZWRJbmRleFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNlbGVjdEl0ZW0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZWxlY3RJdGVtLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBuZXdTZWxlY3RlZEl0ZW1cbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciByZXNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblJlc2V0XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgc2V0SW5wdXRWYWx1ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdJbnB1dFZhbHVlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZXRJbnB1dFZhbHVlLFxuICAgICAgaW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTsgLy8gR2V0dGVyIGZ1bmN0aW9ucy5cblxuICB2YXIgZ2V0TGFiZWxQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChsYWJlbFByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGlkOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQubGFiZWxJZCxcbiAgICAgIGh0bWxGb3I6IGVsZW1lbnRJZHNSZWYuY3VycmVudC50b2dnbGVCdXR0b25JZFxuICAgIH0sIGxhYmVsUHJvcHMpO1xuICB9LCBbXSk7XG4gIHZhciBnZXRNZW51UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAsIF90ZW1wMikge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcmVmLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgX3JlZiRyZWZLZXkgPSBfcmVmLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZiRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZiRyZWZLZXksXG4gICAgICAgIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgICBvbkJsdXIgPSBfcmVmLm9uQmx1cixcbiAgICAgICAgcmVmID0gX3JlZi5yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJvbk1vdXNlTGVhdmVcIiwgXCJyZWZLZXlcIiwgXCJvbktleURvd25cIiwgXCJvbkJsdXJcIiwgXCJyZWZcIl0pO1xuXG4gICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgX3JlZjIkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjIuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgc3VwcHJlc3NSZWZFcnJvciA9IF9yZWYyJHN1cHByZXNzUmVmRXJybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdXBwcmVzc1JlZkVycm87XG5cbiAgICB2YXIgbGF0ZXN0U3RhdGUgPSBsYXRlc3QuY3VycmVudC5zdGF0ZTtcbiAgICBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8oJ2dldE1lbnVQcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgbWVudVJlZik7XG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKG1lbnVOb2RlKSB7XG4gICAgICBtZW51UmVmLmN1cnJlbnQgPSBtZW51Tm9kZTtcbiAgICB9KSwgX2V4dGVuZHMyLmlkID0gZWxlbWVudElkc1JlZi5jdXJyZW50Lm1lbnVJZCwgX2V4dGVuZHMyLnJvbGUgPSAnbGlzdGJveCcsIF9leHRlbmRzMlsnYXJpYS1sYWJlbGxlZGJ5J10gPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQubGFiZWxJZCwgX2V4dGVuZHMyLnRhYkluZGV4ID0gLTEsIF9leHRlbmRzMiksIGxhdGVzdFN0YXRlLmlzT3BlbiAmJiBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4ID4gLTEgJiYge1xuICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGVsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQobGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleClcbiAgICB9LCB7XG4gICAgICBvbk1vdXNlTGVhdmU6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VMZWF2ZSwgZnVuY3Rpb24gbWVudUhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNZW51TW91c2VMZWF2ZVxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgb25LZXlEb3duOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIGZ1bmN0aW9uIG1lbnVIYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgICAgaWYgKGtleSAmJiBtZW51S2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICBtZW51S2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSkge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duQ2hhcmFjdGVyLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBvbkJsdXI6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQmx1ciwgZnVuY3Rpb24gbWVudUhhbmRsZUJsdXIoKSB7XG4gICAgICAgIC8vIGlmIHRoZSBibHVyIHdhcyBhIHJlc3VsdCBvZiBzZWxlY3Rpb24sIHdlIGRvbid0IHRyaWdnZXIgdGhpcyBhY3Rpb24uXG4gICAgICAgIGlmIChzaG91bGRCbHVyUmVmLmN1cnJlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2hvdWxkQmx1clJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2hvdWxkQmx1ciA9ICFtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc01vdXNlRG93bjtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgICAgICBpZiAoc2hvdWxkQmx1cikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IE1lbnVCbHVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCBtZW51S2V5RG93bkhhbmRsZXJzLCBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYsIHNldEdldHRlclByb3BDYWxsSW5mb10pO1xuICB2YXIgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAzLCBfdGVtcDQpIHtcbiAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgb25DbGljayA9IF9yZWYzLm9uQ2xpY2ssXG4gICAgICAgIG9uS2V5RG93biA9IF9yZWYzLm9uS2V5RG93bixcbiAgICAgICAgX3JlZjMkcmVmS2V5ID0gX3JlZjMucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmMyRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjMkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmMy5yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wib25DbGlja1wiLCBcIm9uS2V5RG93blwiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjQgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICBfcmVmNCRzdXBwcmVzc1JlZkVycm8gPSBfcmVmNC5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjQkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY0JHN1cHByZXNzUmVmRXJybztcblxuICAgIHZhciB0b2dnbGVCdXR0b25IYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uQ2xpY2tcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdG9nZ2xlQnV0dG9uSGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgaWYgKGtleSAmJiB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcixcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB0b2dnbGVQcm9wcyA9IF9leHRlbmRzKChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKHRvZ2dsZUJ1dHRvbk5vZGUpIHtcbiAgICAgIHRvZ2dsZUJ1dHRvblJlZi5jdXJyZW50ID0gdG9nZ2xlQnV0dG9uTm9kZTtcbiAgICB9KSwgX2V4dGVuZHMzLmlkID0gZWxlbWVudElkc1JlZi5jdXJyZW50LnRvZ2dsZUJ1dHRvbklkLCBfZXh0ZW5kczNbJ2FyaWEtaGFzcG9wdXAnXSA9ICdsaXN0Ym94JywgX2V4dGVuZHMzWydhcmlhLWV4cGFuZGVkJ10gPSBsYXRlc3QuY3VycmVudC5zdGF0ZS5pc09wZW4sIF9leHRlbmRzM1snYXJpYS1sYWJlbGxlZGJ5J10gPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQubGFiZWxJZCArIFwiIFwiICsgZWxlbWVudElkc1JlZi5jdXJyZW50LnRvZ2dsZUJ1dHRvbklkLCBfZXh0ZW5kczMpLCByZXN0KTtcblxuICAgIGlmICghcmVzdC5kaXNhYmxlZCkge1xuICAgICAgdG9nZ2xlUHJvcHMub25DbGljayA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKTtcbiAgICAgIHRvZ2dsZVByb3BzLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgdG9nZ2xlQnV0dG9uSGFuZGxlS2V5RG93bik7XG4gICAgfVxuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRUb2dnbGVCdXR0b25Qcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgdG9nZ2xlQnV0dG9uUmVmKTtcbiAgICByZXR1cm4gdG9nZ2xlUHJvcHM7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnMsIHNldEdldHRlclByb3BDYWxsSW5mb10pO1xuICB2YXIgZ2V0SXRlbVByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wNSkge1xuICAgIHZhciBfZXh0ZW5kczQ7XG5cbiAgICB2YXIgX3JlZjUgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgICBpdGVtID0gX3JlZjUuaXRlbSxcbiAgICAgICAgaW5kZXggPSBfcmVmNS5pbmRleCxcbiAgICAgICAgb25Nb3VzZU1vdmUgPSBfcmVmNS5vbk1vdXNlTW92ZSxcbiAgICAgICAgb25DbGljayA9IF9yZWY1Lm9uQ2xpY2ssXG4gICAgICAgIF9yZWY1JHJlZktleSA9IF9yZWY1LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjUkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY1JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjUucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcIml0ZW1cIiwgXCJpbmRleFwiLCBcIm9uTW91c2VNb3ZlXCIsIFwib25DbGlja1wiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX2xhdGVzdCRjdXJyZW50ID0gbGF0ZXN0LmN1cnJlbnQsXG4gICAgICAgIGxhdGVzdFN0YXRlID0gX2xhdGVzdCRjdXJyZW50LnN0YXRlLFxuICAgICAgICBsYXRlc3RQcm9wcyA9IF9sYXRlc3QkY3VycmVudC5wcm9wcztcblxuICAgIHZhciBpdGVtSGFuZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGluZGV4ID09PSBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2hvdWxkU2Nyb2xsUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSXRlbU1vdXNlTW92ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGl0ZW1IYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSXRlbUNsaWNrLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4KGluZGV4LCBpdGVtLCBsYXRlc3RQcm9wcy5pdGVtcyk7XG5cbiAgICBpZiAoaXRlbUluZGV4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzIGVpdGhlciBpdGVtIG9yIGl0ZW0gaW5kZXggaW4gZ2V0SXRlbVByb3BzIScpO1xuICAgIH1cblxuICAgIHZhciBpdGVtUHJvcHMgPSBfZXh0ZW5kcygoX2V4dGVuZHM0ID0ge1xuICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6IFwiXCIgKyAoaXRlbUluZGV4ID09PSBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4KSxcbiAgICAgIGlkOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGl0ZW1JbmRleClcbiAgICB9LCBfZXh0ZW5kczRbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoaXRlbU5vZGUpIHtcbiAgICAgIGlmIChpdGVtTm9kZSkge1xuICAgICAgICBpdGVtUmVmcy5jdXJyZW50W2VsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQoaXRlbUluZGV4KV0gPSBpdGVtTm9kZTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHM0KSwgcmVzdCk7XG5cbiAgICBpZiAoIXJlc3QuZGlzYWJsZWQpIHtcbiAgICAgIGl0ZW1Qcm9wcy5vbk1vdXNlTW92ZSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VNb3ZlLCBpdGVtSGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIGl0ZW1Qcm9wcy5vbkNsaWNrID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DbGljaywgaXRlbUhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVByb3BzO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdCwgc2hvdWxkU2Nyb2xsUmVmXSk7XG4gIHJldHVybiB7XG4gICAgLy8gcHJvcCBnZXR0ZXJzLlxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzOiBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICBnZXRMYWJlbFByb3BzOiBnZXRMYWJlbFByb3BzLFxuICAgIGdldE1lbnVQcm9wczogZ2V0TWVudVByb3BzLFxuICAgIGdldEl0ZW1Qcm9wczogZ2V0SXRlbVByb3BzLFxuICAgIC8vIGFjdGlvbnMuXG4gICAgdG9nZ2xlTWVudTogdG9nZ2xlTWVudSxcbiAgICBvcGVuTWVudTogb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51OiBjbG9zZU1lbnUsXG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleDogc2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtLFxuICAgIHJlc2V0OiByZXNldCxcbiAgICBzZXRJbnB1dFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIC8vIHN0YXRlLlxuICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW0sXG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICB9O1xufVxuXG52YXIgSW5wdXRLZXlEb3duQXJyb3dEb3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfa2V5ZG93bl9hcnJvd19kb3duX18nIDogMDtcbnZhciBJbnB1dEtleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfa2V5ZG93bl9hcnJvd191cF9fJyA6IDE7XG52YXIgSW5wdXRLZXlEb3duRXNjYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfa2V5ZG93bl9lc2NhcGVfXycgOiAyO1xudmFyIElucHV0S2V5RG93bkhvbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9rZXlkb3duX2hvbWVfXycgOiAzO1xudmFyIElucHV0S2V5RG93bkVuZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fZW5kX18nIDogNDtcbnZhciBJbnB1dEtleURvd25FbnRlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fZW50ZXJfXycgOiA1O1xudmFyIElucHV0Q2hhbmdlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfY2hhbmdlX18nIDogNjtcbnZhciBJbnB1dEJsdXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9ibHVyX18nIDogNztcbnZhciBNZW51TW91c2VMZWF2ZSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9tb3VzZV9sZWF2ZV9fJyA6IDg7XG52YXIgSXRlbU1vdXNlTW92ZSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faXRlbV9tb3VzZV9tb3ZlX18nIDogOTtcbnZhciBJdGVtQ2xpY2skMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2l0ZW1fY2xpY2tfXycgOiAxMDtcbnZhciBUb2dnbGVCdXR0b25DbGljayQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2NsaWNrX18nIDogMTE7XG52YXIgRnVuY3Rpb25Ub2dnbGVNZW51JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl90b2dnbGVfbWVudV9fJyA6IDEyO1xudmFyIEZ1bmN0aW9uT3Blbk1lbnUkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX29wZW5fbWVudV9fJyA6IDEzO1xudmFyIEZ1bmN0aW9uQ2xvc2VNZW51JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9jbG9zZV9tZW51X18nIDogMTQ7XG52YXIgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZXRfaGlnaGxpZ2h0ZWRfaW5kZXhfXycgOiAxNTtcbnZhciBGdW5jdGlvblNlbGVjdEl0ZW0kMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3NlbGVjdF9pdGVtX18nIDogMTY7XG52YXIgRnVuY3Rpb25TZXRJbnB1dFZhbHVlJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZXRfaW5wdXRfdmFsdWVfXycgOiAxNztcbnZhciBGdW5jdGlvblJlc2V0JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9yZXNldF9fJyA6IDE4O1xudmFyIENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2NvbnRyb2xsZWRfcHJvcF91cGRhdGVkX3NlbGVjdGVkX2l0ZW1fXycgOiAxOTtcblxudmFyIHN0YXRlQ2hhbmdlVHlwZXMkMiA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBJbnB1dEtleURvd25BcnJvd0Rvd246IElucHV0S2V5RG93bkFycm93RG93bixcbiAgSW5wdXRLZXlEb3duQXJyb3dVcDogSW5wdXRLZXlEb3duQXJyb3dVcCxcbiAgSW5wdXRLZXlEb3duRXNjYXBlOiBJbnB1dEtleURvd25Fc2NhcGUsXG4gIElucHV0S2V5RG93bkhvbWU6IElucHV0S2V5RG93bkhvbWUsXG4gIElucHV0S2V5RG93bkVuZDogSW5wdXRLZXlEb3duRW5kLFxuICBJbnB1dEtleURvd25FbnRlcjogSW5wdXRLZXlEb3duRW50ZXIsXG4gIElucHV0Q2hhbmdlOiBJbnB1dENoYW5nZSxcbiAgSW5wdXRCbHVyOiBJbnB1dEJsdXIsXG4gIE1lbnVNb3VzZUxlYXZlOiBNZW51TW91c2VMZWF2ZSQxLFxuICBJdGVtTW91c2VNb3ZlOiBJdGVtTW91c2VNb3ZlJDEsXG4gIEl0ZW1DbGljazogSXRlbUNsaWNrJDEsXG4gIFRvZ2dsZUJ1dHRvbkNsaWNrOiBUb2dnbGVCdXR0b25DbGljayQxLFxuICBGdW5jdGlvblRvZ2dsZU1lbnU6IEZ1bmN0aW9uVG9nZ2xlTWVudSQxLFxuICBGdW5jdGlvbk9wZW5NZW51OiBGdW5jdGlvbk9wZW5NZW51JDEsXG4gIEZ1bmN0aW9uQ2xvc2VNZW51OiBGdW5jdGlvbkNsb3NlTWVudSQxLFxuICBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXg6IEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCQxLFxuICBGdW5jdGlvblNlbGVjdEl0ZW06IEZ1bmN0aW9uU2VsZWN0SXRlbSQxLFxuICBGdW5jdGlvblNldElucHV0VmFsdWU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxLFxuICBGdW5jdGlvblJlc2V0OiBGdW5jdGlvblJlc2V0JDEsXG4gIENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbTogQ29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtXG59KTtcblxuZnVuY3Rpb24gZ2V0RWxlbWVudElkcyQxKF9yZWYpIHtcbiAgdmFyIGlkID0gX3JlZi5pZCxcbiAgICAgIGlucHV0SWQgPSBfcmVmLmlucHV0SWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiaWRcIiwgXCJpbnB1dElkXCJdKTtcblxuICB2YXIgdW5pcXVlSWQgPSBpZCA9PT0gdW5kZWZpbmVkID8gXCJkb3duc2hpZnQtXCIgKyBnZW5lcmF0ZUlkKCkgOiBpZDtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBpbnB1dElkOiBpbnB1dElkIHx8IHVuaXF1ZUlkICsgXCItaW5wdXRcIlxuICB9LCBnZXRFbGVtZW50SWRzKF9leHRlbmRzKHtcbiAgICBpZDogaWRcbiAgfSwgcmVzdCkpKTtcbn1cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSQxKHByb3BzKSB7XG4gIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuICB2YXIgc2VsZWN0ZWRJdGVtID0gaW5pdGlhbFN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgdmFyIGlucHV0VmFsdWUgPSBpbml0aWFsU3RhdGUuaW5wdXRWYWx1ZTtcblxuICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycgJiYgc2VsZWN0ZWRJdGVtICYmIHByb3BzLmRlZmF1bHRJbnB1dFZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcHMuaW5pdGlhbElucHV0VmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwcm9wcy5pbnB1dFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnB1dFZhbHVlID0gcHJvcHMuaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGluaXRpYWxTdGF0ZSwge1xuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfSk7XG59XG52YXIgcHJvcFR5cGVzJDEgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNpcmN1bGFyTmF2aWdhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGluaXRpYWxJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRJbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbml0aWFsSW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2V0SXRlbUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5wdXRJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlQnV0dG9uSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0YXRlUmVkdWNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25IaWdobGlnaHRlZEluZGV4Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdGF0ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSXNPcGVuQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25JbnB1dFZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZW52aXJvbm1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZG9jdW1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBnZXRFbGVtZW50QnlJZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBhY3RpdmVFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAgICAgYm9keTogUHJvcFR5cGVzLmFueVxuICAgIH0pXG4gIH0pXG59O1xuLyoqXG4gKiBUaGUgdXNlQ29tYm9ib3ggdmVyc2lvbiBvZiB1c2VDb250cm9sbGVkUmVkdWNlciwgd2hpY2ggYWxzb1xuICogY2hlY2tzIGlmIHRoZSBjb250cm9sbGVkIHByb3Agc2VsZWN0ZWRJdGVtIGNoYW5nZWQgYmV0d2VlblxuICogcmVuZGVycy4gSWYgc28sIGl0IHdpbGwgYWxzbyB1cGRhdGUgaW5wdXRWYWx1ZSB3aXRoIGl0c1xuICogc3RyaW5nIGVxdWl2YWxlbnQuIEl0IHVzZXMgdGhlIGNvbW1vbiB1c2VFbmhhbmNlZFJlZHVjZXIgdG9cbiAqIGNvbXB1dGUgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgUmVkdWNlciBmdW5jdGlvbiBmcm9tIGRvd25zaGlmdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbml0aWFsU3RhdGUgSW5pdGlhbCBzdGF0ZSBvZiB0aGUgaG9vay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgaG9vayBwcm9wcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgd2l0aCB0aGUgc3RhdGUgYW5kIGFuIGFjdGlvbiBkaXNwYXRjaGVyLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZWRSZWR1Y2VyJDEocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcykge1xuICB2YXIgcHJldmlvdXNTZWxlY3RlZEl0ZW1SZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZUVuaGFuY2VkUmVkdWNlciA9IHVzZUVuaGFuY2VkUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUVuaGFuY2VkUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZUVuaGFuY2VkUmVkdWNlclsxXTsgLy8gVG9EbzogaWYgbmVlZGVkLCBtYWtlIHNhbWUgYXBwcm9hY2ggYXMgc2VsZWN0ZWRJdGVtQ2hhbmdlZCBmcm9tIERvd25zaGlmdC5cblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzQ29udHJvbGxlZFByb3AocHJvcHMsICdzZWxlY3RlZEl0ZW0nKSkge1xuICAgICAgaWYgKHByZXZpb3VzU2VsZWN0ZWRJdGVtUmVmLmN1cnJlbnQgIT09IHByb3BzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQ29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhwcm9wcy5zZWxlY3RlZEl0ZW0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91c1NlbGVjdGVkSXRlbVJlZi5jdXJyZW50ID0gc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBwcmV2aW91c1NlbGVjdGVkSXRlbVJlZi5jdXJyZW50ID8gcHJvcHMuc2VsZWN0ZWRJdGVtIDogc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbZ2V0U3RhdGUoc3RhdGUsIHByb3BzKSwgZGlzcGF0Y2hdO1xufVxudmFyIGRlZmF1bHRQcm9wcyQyID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywge1xuICBnZXRBMTF5U3RhdHVzTWVzc2FnZTogZ2V0QTExeVN0YXR1c01lc3NhZ2UsXG4gIGNpcmN1bGFyTmF2aWdhdGlvbjogdHJ1ZVxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cblxuZnVuY3Rpb24gZG93bnNoaWZ0VXNlQ29tYm9ib3hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHR5cGUgPSBhY3Rpb24udHlwZSxcbiAgICAgIHByb3BzID0gYWN0aW9uLnByb3BzLFxuICAgICAgc2hpZnRLZXkgPSBhY3Rpb24uc2hpZnRLZXk7XG4gIHZhciBjaGFuZ2VzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgSXRlbU1vdXNlTW92ZSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEl0ZW1DbGljayQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpc09wZW4nKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW2FjdGlvbi5pbmRleF0sXG4gICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhwcm9wcy5pdGVtc1thY3Rpb24uaW5kZXhdKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25BcnJvd0Rvd246XG4gICAgICBpZiAoc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyA1IDogMSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIHByb3BzLmNpcmN1bGFyTmF2aWdhdGlvbilcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDEsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCksXG4gICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25BcnJvd1VwOlxuICAgICAgaWYgKHN0YXRlLmlzT3Blbikge1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldE5leHRXcmFwcGluZ0luZGV4KHNoaWZ0S2V5ID8gLTUgOiAtMSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIHByb3BzLmNpcmN1bGFyTmF2aWdhdGlvbilcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIC0xLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgpLFxuICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duRW50ZXI6XG4gICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe30sIHN0YXRlLmlzT3BlbiAmJiBzdGF0ZS5oaWdobGlnaHRlZEluZGV4ID49IDAgJiYge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdLFxuICAgICAgICBpc09wZW46IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lzT3BlbicpLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdoaWdobGlnaHRlZEluZGV4JyksXG4gICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElucHV0S2V5RG93bkVzY2FwZTpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IC0xXG4gICAgICB9LCAhc3RhdGUuaXNPcGVuICYmIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duSG9tZTpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuaXNPcGVuICYmIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duRW5kOlxuICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5pc09wZW4gJiYge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgtMSwgcHJvcHMuaXRlbXMubGVuZ3RoIC0gMSwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRCbHVyOlxuICAgICAgaWYgKHN0YXRlLmlzT3Blbikge1xuICAgICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgICAgfSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIGFjdGlvbi5zZWxlY3RJdGVtICYmIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdLFxuICAgICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dENoYW5nZTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51TW91c2VMZWF2ZSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uQ2xpY2skMTpcbiAgICBjYXNlIEZ1bmN0aW9uVG9nZ2xlTWVudSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBzdGF0ZS5pc09wZW4gPyAtMSA6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAwKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvbk9wZW5NZW51JDE6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAwKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvbkNsb3NlTWVudSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgkMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGFjdGlvbi5oaWdobGlnaHRlZEluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2VsZWN0SXRlbSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uc2VsZWN0ZWRJdGVtLFxuICAgICAgICBpbnB1dFZhbHVlOiBwcm9wcy5pdGVtVG9TdHJpbmcoYWN0aW9uLnNlbGVjdGVkSXRlbSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQ29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtOlxuICAgIGNhc2UgRnVuY3Rpb25TZXRJbnB1dFZhbHVlJDE6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblJlc2V0JDE6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdoaWdobGlnaHRlZEluZGV4JyksXG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIHNlbGVjdGVkSXRlbTogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnc2VsZWN0ZWRJdGVtJyksXG4gICAgICAgIGlucHV0VmFsdWU6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lucHV0VmFsdWUnKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBjYWxsZWQgd2l0aG91dCBwcm9wZXIgYWN0aW9uIHR5cGUuJyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG52YXIgdmFsaWRhdGVQcm9wVHlwZXMkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgP1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbm51bGwgOiBnZXRQcm9wVHlwZXNWYWxpZGF0b3IodXNlQ29tYm9ib3gsIHByb3BUeXBlcyQxKTtcbnVzZUNvbWJvYm94LnN0YXRlQ2hhbmdlVHlwZXMgPSBzdGF0ZUNoYW5nZVR5cGVzJDI7XG5cbmZ1bmN0aW9uIHVzZUNvbWJvYm94KHVzZXJQcm9wcykge1xuICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICB1c2VyUHJvcHMgPSB7fTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMkMSh1c2VyUHJvcHMpO1xuICB9IC8vIFByb3BzIGRlZmF1bHRzIGFuZCBkZXN0cnVjdHVyaW5nLlxuXG5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcyQyLCB1c2VyUHJvcHMpO1xuXG4gIHZhciBpbml0aWFsSXNPcGVuID0gcHJvcHMuaW5pdGlhbElzT3BlbixcbiAgICAgIGRlZmF1bHRJc09wZW4gPSBwcm9wcy5kZWZhdWx0SXNPcGVuLFxuICAgICAgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIHNjcm9sbEludG9WaWV3ID0gcHJvcHMuc2Nyb2xsSW50b1ZpZXcsXG4gICAgICBlbnZpcm9ubWVudCA9IHByb3BzLmVudmlyb25tZW50LFxuICAgICAgZ2V0QTExeVN0YXR1c01lc3NhZ2UgPSBwcm9wcy5nZXRBMTF5U3RhdHVzTWVzc2FnZSxcbiAgICAgIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlID0gcHJvcHMuZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UsXG4gICAgICBpdGVtVG9TdHJpbmcgPSBwcm9wcy5pdGVtVG9TdHJpbmc7IC8vIEluaXRpYWwgc3RhdGUgZGVwZW5kaW5nIG9uIGNvbnRyb2xsZWQgcHJvcHMuXG5cbiAgdmFyIGluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSQxKHByb3BzKTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWRSZWR1Y2VyID0gdXNlQ29udHJvbGxlZFJlZHVjZXIkMShkb3duc2hpZnRVc2VDb21ib2JveFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpLFxuICAgICAgc3RhdGUgPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VDb250cm9sbGVkUmVkdWNlclsxXTtcblxuICB2YXIgaXNPcGVuID0gc3RhdGUuaXNPcGVuLFxuICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICBzZWxlY3RlZEl0ZW0gPSBzdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICBpbnB1dFZhbHVlID0gc3RhdGUuaW5wdXRWYWx1ZTsgLy8gRWxlbWVudCByZWZzLlxuXG4gIHZhciBtZW51UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXRlbVJlZnMgPSB1c2VSZWYoKTtcbiAgdmFyIGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgdG9nZ2xlQnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgY29tYm9ib3hSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGl0ZW1SZWZzLmN1cnJlbnQgPSB7fTtcbiAgdmFyIGlzSW5pdGlhbE1vdW50UmVmID0gdXNlUmVmKHRydWUpOyAvLyBwcmV2ZW50IGlkIHJlLWdlbmVyYXRpb24gYmV0d2VlbiByZW5kZXJzLlxuXG4gIHZhciBlbGVtZW50SWRzUmVmID0gdXNlUmVmKGdldEVsZW1lbnRJZHMkMShwcm9wcykpOyAvLyB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2UgaGFkIG9uIHByZXZpb3VzIGN5Y2xlLlxuXG4gIHZhciBwcmV2aW91c1Jlc3VsdENvdW50UmVmID0gdXNlUmVmKCk7IC8vIHV0aWxpdHkgY2FsbGJhY2sgdG8gZ2V0IGl0ZW0gZWxlbWVudC5cblxuICB2YXIgbGF0ZXN0ID0gdXNlTGF0ZXN0UmVmKHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgcHJvcHM6IHByb3BzXG4gIH0pO1xuXG4gIHZhciBnZXRJdGVtTm9kZUZyb21JbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBpdGVtUmVmcy5jdXJyZW50W2VsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQoaW5kZXgpXTtcbiAgfTsgLy8gRWZmZWN0cy5cbiAgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc3RhdGUuXG5cblxuICB1c2VBMTF5TWVzc2FnZVNldHRlcihnZXRBMTF5U3RhdHVzTWVzc2FnZSwgW2lzT3BlbiwgaGlnaGxpZ2h0ZWRJbmRleCwgaW5wdXRWYWx1ZSwgaXRlbXNdLCBfZXh0ZW5kcyh7XG4gICAgaXNJbml0aWFsTW91bnQ6IGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQsXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudDogcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50LFxuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQsXG4gICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmdcbiAgfSwgc3RhdGUpKTsgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc2VsZWN0ZWRJdGVtLlxuXG4gIHVzZUExMXlNZXNzYWdlU2V0dGVyKGdldEExMXlTZWxlY3Rpb25NZXNzYWdlLCBbc2VsZWN0ZWRJdGVtXSwgX2V4dGVuZHMoe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCxcbiAgICBpdGVtczogaXRlbXMsXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LFxuICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nXG4gIH0sIHN0YXRlKSk7IC8vIFNjcm9sbCBvbiBoaWdobGlnaHRlZCBpdGVtIGlmIGNoYW5nZSBjb21lcyBmcm9tIGtleWJvYXJkLlxuXG4gIHZhciBzaG91bGRTY3JvbGxSZWYgPSB1c2VTY3JvbGxJbnRvVmlldyh7XG4gICAgbWVudUVsZW1lbnQ6IG1lbnVSZWYuY3VycmVudCxcbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIGl0ZW1SZWZzOiBpdGVtUmVmcyxcbiAgICBzY3JvbGxJbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG4gICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gIH0pO1xuICB1c2VDb250cm9sUHJvcHNWYWxpZGF0b3Ioe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSk7IC8vIENvbnRyb2xzIHRoZSBmb2N1cyBvbiB0aGUgaW5wdXQgb24gb3Blbi5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIERvbid0IGZvY3VzIG1lbnUgb24gZmlyc3QgcmVuZGVyLlxuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAvLyBVbmxlc3MgaXQgd2FzIGluaXRpYWxpc2VkIGFzIG9wZW4uXG4gICAgICBpZiAoaW5pdGlhbElzT3BlbiB8fCBkZWZhdWx0SXNPcGVuIHx8IGlzT3Blbikge1xuICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtpc09wZW5dKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCA9IGl0ZW1zLmxlbmd0aDtcbiAgfSk7IC8vIEFkZCBtb3VzZS90b3VjaCBldmVudHMgdG8gZG9jdW1lbnQuXG5cbiAgdmFyIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZiA9IHVzZU1vdXNlQW5kVG91Y2hUcmFja2VyKGlzT3BlbiwgW2NvbWJvYm94UmVmLCBtZW51UmVmLCB0b2dnbGVCdXR0b25SZWZdLCBlbnZpcm9ubWVudCwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IElucHV0Qmx1cixcbiAgICAgIHNlbGVjdEl0ZW06IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICB2YXIgc2V0R2V0dGVyUHJvcENhbGxJbmZvID0gdXNlR2V0dGVyUHJvcHNDYWxsZWRDaGVja2VyKCdnZXRJbnB1dFByb3BzJywgJ2dldENvbWJvYm94UHJvcHMnLCAnZ2V0TWVudVByb3BzJyk7IC8vIE1ha2UgaW5pdGlhbCByZWYgZmFsc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTtcbiAgLyogRXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgKi9cblxuICB2YXIgaW5wdXRLZXlEb3duSGFuZGxlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgQXJyb3dEb3duOiBmdW5jdGlvbiBBcnJvd0Rvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkFycm93RG93bixcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkFycm93VXAsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBIb21lOiBmdW5jdGlvbiBIb21lKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25Ib21lLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFbmQ6IGZ1bmN0aW9uIEVuZChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSW5wdXRLZXlEb3duRW5kLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFc2NhcGU6IGZ1bmN0aW9uIEVzY2FwZSgpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkVzY2FwZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFbnRlcjogZnVuY3Rpb24gRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gaWYgSU1FIGNvbXBvc2luZywgd2FpdCBmb3IgbmV4dCBFbnRlciBrZXlkb3duIGV2ZW50LlxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDIyOSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuXG4gICAgICAgIGlmIChsYXRlc3RTdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkVudGVyLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdF0pOyAvLyBHZXR0ZXIgcHJvcHMuXG5cbiAgdmFyIGdldExhYmVsUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobGFiZWxQcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBpZDogZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQsXG4gICAgICBodG1sRm9yOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQuaW5wdXRJZFxuICAgIH0sIGxhYmVsUHJvcHMpO1xuICB9LCBbXSk7XG4gIHZhciBnZXRNZW51UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAsIF90ZW1wMikge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcmVmLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgX3JlZiRyZWZLZXkgPSBfcmVmLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZiRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZiRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wib25Nb3VzZUxlYXZlXCIsIFwicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYyJHN1cHByZXNzUmVmRXJybyA9IF9yZWYyLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRNZW51UHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIG1lbnVSZWYpO1xuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChtZW51Tm9kZSkge1xuICAgICAgbWVudVJlZi5jdXJyZW50ID0gbWVudU5vZGU7XG4gICAgfSksIF9leHRlbmRzMi5pZCA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC5tZW51SWQsIF9leHRlbmRzMi5yb2xlID0gJ2xpc3Rib3gnLCBfZXh0ZW5kczJbJ2FyaWEtbGFiZWxsZWRieSddID0gZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQsIF9leHRlbmRzMi5vbk1vdXNlTGVhdmUgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTGVhdmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogTWVudU1vdXNlTGVhdmUkMVxuICAgICAgfSk7XG4gICAgfSksIF9leHRlbmRzMiksIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIHNldEdldHRlclByb3BDYWxsSW5mb10pO1xuICB2YXIgZ2V0SXRlbVByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wMykge1xuICAgIHZhciBfZXh0ZW5kczMsIF9yZWY0O1xuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgaXRlbSA9IF9yZWYzLml0ZW0sXG4gICAgICAgIGluZGV4ID0gX3JlZjMuaW5kZXgsXG4gICAgICAgIF9yZWYzJHJlZktleSA9IF9yZWYzLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjMkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYzJHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjMucmVmLFxuICAgICAgICBvbk1vdXNlTW92ZSA9IF9yZWYzLm9uTW91c2VNb3ZlLFxuICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgb25QcmVzcyA9IF9yZWYzLm9uUHJlc3MsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wiaXRlbVwiLCBcImluZGV4XCIsIFwicmVmS2V5XCIsIFwicmVmXCIsIFwib25Nb3VzZU1vdmVcIiwgXCJvbkNsaWNrXCIsIFwib25QcmVzc1wiXSk7XG5cbiAgICB2YXIgX2xhdGVzdCRjdXJyZW50ID0gbGF0ZXN0LmN1cnJlbnQsXG4gICAgICAgIGxhdGVzdFByb3BzID0gX2xhdGVzdCRjdXJyZW50LnByb3BzLFxuICAgICAgICBsYXRlc3RTdGF0ZSA9IF9sYXRlc3QkY3VycmVudC5zdGF0ZTtcbiAgICB2YXIgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4KGluZGV4LCBpdGVtLCBsYXRlc3RQcm9wcy5pdGVtcyk7XG5cbiAgICBpZiAoaXRlbUluZGV4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzIGVpdGhlciBpdGVtIG9yIGl0ZW0gaW5kZXggaW4gZ2V0SXRlbVByb3BzIScpO1xuICAgIH1cblxuICAgIHZhciBvblNlbGVjdEtleSA9ICdvbkNsaWNrJztcbiAgICB2YXIgY3VzdG9tQ2xpY2tIYW5kbGVyID0gb25DbGljaztcbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoaXRlbU5vZGUpIHtcbiAgICAgIGlmIChpdGVtTm9kZSkge1xuICAgICAgICBpdGVtUmVmcy5jdXJyZW50W2VsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQoaXRlbUluZGV4KV0gPSBpdGVtTm9kZTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHMzLnJvbGUgPSAnb3B0aW9uJywgX2V4dGVuZHMzWydhcmlhLXNlbGVjdGVkJ10gPSBcIlwiICsgKGl0ZW1JbmRleCA9PT0gbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCksIF9leHRlbmRzMy5pZCA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQoaXRlbUluZGV4KSwgX2V4dGVuZHMzKSwgIXJlc3QuZGlzYWJsZWQgJiYgKF9yZWY0ID0ge1xuICAgICAgb25Nb3VzZU1vdmU6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VNb3ZlLCBmdW5jdGlvbiBpdGVtSGFuZGxlTW91c2VNb3ZlKCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaG91bGRTY3JvbGxSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSXRlbU1vdXNlTW92ZSQxLFxuICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfSwgX3JlZjRbb25TZWxlY3RLZXldID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMoY3VzdG9tQ2xpY2tIYW5kbGVyLCBmdW5jdGlvbiBpdGVtSGFuZGxlQ2xpY2soKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEl0ZW1DbGljayQxLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSksIF9yZWY0KSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCBzaG91bGRTY3JvbGxSZWZdKTtcbiAgdmFyIGdldFRvZ2dsZUJ1dHRvblByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wNCkge1xuICAgIHZhciBfZXh0ZW5kczQ7XG5cbiAgICB2YXIgX3JlZjUgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICBvbkNsaWNrID0gX3JlZjUub25DbGljayxcbiAgICAgICAgb25QcmVzcyA9IF9yZWY1Lm9uUHJlc3MsXG4gICAgICAgIF9yZWY1JHJlZktleSA9IF9yZWY1LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjUkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY1JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjUucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciB0b2dnbGVCdXR0b25IYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uQ2xpY2skMVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbGF0ZXN0LmN1cnJlbnQuc3RhdGUuaXNPcGVuICYmIGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAodG9nZ2xlQnV0dG9uTm9kZSkge1xuICAgICAgdG9nZ2xlQnV0dG9uUmVmLmN1cnJlbnQgPSB0b2dnbGVCdXR0b25Ob2RlO1xuICAgIH0pLCBfZXh0ZW5kczQuaWQgPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQudG9nZ2xlQnV0dG9uSWQsIF9leHRlbmRzNC50YWJJbmRleCA9IC0xLCBfZXh0ZW5kczQpLCAhcmVzdC5kaXNhYmxlZCAmJiBfZXh0ZW5kcyh7fSwge1xuICAgICAgb25DbGljazogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DbGljaywgdG9nZ2xlQnV0dG9uSGFuZGxlQ2xpY2spXG4gICAgfSksIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdF0pO1xuICB2YXIgZ2V0SW5wdXRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDUsIF90ZW1wNikge1xuICAgIHZhciBfZXh0ZW5kczU7XG5cbiAgICB2YXIgX3JlZjYgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgICBvbktleURvd24gPSBfcmVmNi5vbktleURvd24sXG4gICAgICAgIG9uQ2hhbmdlID0gX3JlZjYub25DaGFuZ2UsXG4gICAgICAgIG9uSW5wdXQgPSBfcmVmNi5vbklucHV0LFxuICAgICAgICBvbkJsdXIgPSBfcmVmNi5vbkJsdXIsXG4gICAgICAgIG9uQ2hhbmdlVGV4dCA9IF9yZWY2Lm9uQ2hhbmdlVGV4dCxcbiAgICAgICAgX3JlZjYkcmVmS2V5ID0gX3JlZjYucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmNiRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjYkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmNi5yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNiwgW1wib25LZXlEb3duXCIsIFwib25DaGFuZ2VcIiwgXCJvbklucHV0XCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VUZXh0XCIsIFwicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciBfcmVmNyA9IF90ZW1wNiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDYsXG4gICAgICAgIF9yZWY3JHN1cHByZXNzUmVmRXJybyA9IF9yZWY3LnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmNyRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjckc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRJbnB1dFByb3BzJywgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBpbnB1dFJlZik7XG4gICAgdmFyIGxhdGVzdFN0YXRlID0gbGF0ZXN0LmN1cnJlbnQuc3RhdGU7XG5cbiAgICB2YXIgaW5wdXRIYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICBpZiAoa2V5ICYmIGlucHV0S2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgaW5wdXRLZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBpbnB1dEhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJbnB1dENoYW5nZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGlucHV0SGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoIW1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzTW91c2VEb3duKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEJsdXIsXG4gICAgICAgICAgc2VsZWN0SXRlbTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChwcmVhY3QpICovXG5cblxuICAgIHZhciBvbkNoYW5nZUtleSA9ICdvbkNoYW5nZSc7XG4gICAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7fTtcblxuICAgIGlmICghcmVzdC5kaXNhYmxlZCkge1xuICAgICAgdmFyIF9ldmVudEhhbmRsZXJzO1xuXG4gICAgICBldmVudEhhbmRsZXJzID0gKF9ldmVudEhhbmRsZXJzID0ge30sIF9ldmVudEhhbmRsZXJzW29uQ2hhbmdlS2V5XSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2hhbmdlLCBvbklucHV0LCBpbnB1dEhhbmRsZUNoYW5nZSksIF9ldmVudEhhbmRsZXJzLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgaW5wdXRIYW5kbGVLZXlEb3duKSwgX2V2ZW50SGFuZGxlcnMub25CbHVyID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25CbHVyLCBpbnB1dEhhbmRsZUJsdXIpLCBfZXZlbnRIYW5kbGVycyk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAocmVhY3QtbmF0aXZlKSAqL1xuXG5cbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzNSA9IHt9LCBfZXh0ZW5kczVbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoaW5wdXROb2RlKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50ID0gaW5wdXROb2RlO1xuICAgIH0pLCBfZXh0ZW5kczUuaWQgPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQuaW5wdXRJZCwgX2V4dGVuZHM1WydhcmlhLWF1dG9jb21wbGV0ZSddID0gJ2xpc3QnLCBfZXh0ZW5kczVbJ2FyaWEtY29udHJvbHMnXSA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC5tZW51SWQsIF9leHRlbmRzNSksIGxhdGVzdFN0YXRlLmlzT3BlbiAmJiBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4ID4gLTEgJiYge1xuICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGVsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQobGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleClcbiAgICB9LCB7XG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQsXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TZWN1cmluZ195b3VyX3NpdGUvVHVybmluZ19vZmZfZm9ybV9hdXRvY29tcGxldGlvblxuICAgICAgLy8gcmV2ZXJ0IGJhY2sgc2luY2UgYXV0b2NvbXBsZXRlPVwibm9wZVwiIGlzIGlnbm9yZWQgb24gbGF0ZXN0IENocm9tZSBhbmQgT3BlcmFcbiAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICB2YWx1ZTogbGF0ZXN0U3RhdGUuaW5wdXRWYWx1ZVxuICAgIH0sIGV2ZW50SGFuZGxlcnMsIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGlucHV0S2V5RG93bkhhbmRsZXJzLCBsYXRlc3QsIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZiwgc2V0R2V0dGVyUHJvcENhbGxJbmZvXSk7XG4gIHZhciBnZXRDb21ib2JveFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wNywgX3RlbXA4KSB7XG4gICAgdmFyIF9leHRlbmRzNjtcblxuICAgIHZhciBfcmVmOCA9IF90ZW1wNyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDcsXG4gICAgICAgIF9yZWY4JHJlZktleSA9IF9yZWY4LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjgkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY4JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjgucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjgsIFtcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjkgPSBfdGVtcDggPT09IHZvaWQgMCA/IHt9IDogX3RlbXA4LFxuICAgICAgICBfcmVmOSRzdXBwcmVzc1JlZkVycm8gPSBfcmVmOS5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjkkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY5JHN1cHByZXNzUmVmRXJybztcblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0Q29tYm9ib3hQcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgY29tYm9ib3hSZWYpO1xuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHM2ID0ge30sIF9leHRlbmRzNltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChjb21ib2JveE5vZGUpIHtcbiAgICAgIGNvbWJvYm94UmVmLmN1cnJlbnQgPSBjb21ib2JveE5vZGU7XG4gICAgfSksIF9leHRlbmRzNi5yb2xlID0gJ2NvbWJvYm94JywgX2V4dGVuZHM2WydhcmlhLWhhc3BvcHVwJ10gPSAnbGlzdGJveCcsIF9leHRlbmRzNlsnYXJpYS1vd25zJ10gPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQubWVudUlkLCBfZXh0ZW5kczZbJ2FyaWEtZXhwYW5kZWQnXSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlLmlzT3BlbiwgX2V4dGVuZHM2KSwgcmVzdCk7XG4gIH0sIFtsYXRlc3QsIHNldEdldHRlclByb3BDYWxsSW5mb10pOyAvLyByZXR1cm5zXG5cbiAgdmFyIHRvZ2dsZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25Ub2dnbGVNZW51JDFcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBjbG9zZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25DbG9zZU1lbnUkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIG9wZW5NZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uT3Blbk1lbnUkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldEhpZ2hsaWdodGVkSW5kZXggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SGlnaGxpZ2h0ZWRJbmRleCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCQxLFxuICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogbmV3SGlnaGxpZ2h0ZWRJbmRleFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNlbGVjdEl0ZW0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZWxlY3RJdGVtJDEsXG4gICAgICBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldElucHV0VmFsdWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SW5wdXRWYWx1ZSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxLFxuICAgICAgaW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uUmVzZXQkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIHtcbiAgICAvLyBwcm9wIGdldHRlcnMuXG4gICAgZ2V0SXRlbVByb3BzOiBnZXRJdGVtUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHM6IGdldE1lbnVQcm9wcyxcbiAgICBnZXRJbnB1dFByb3BzOiBnZXRJbnB1dFByb3BzLFxuICAgIGdldENvbWJvYm94UHJvcHM6IGdldENvbWJvYm94UHJvcHMsXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHM6IGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIC8vIGFjdGlvbnMuXG4gICAgdG9nZ2xlTWVudTogdG9nZ2xlTWVudSxcbiAgICBvcGVuTWVudTogb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51OiBjbG9zZU1lbnUsXG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleDogc2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBzZXRJbnB1dFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIHNlbGVjdEl0ZW06IHNlbGVjdEl0ZW0sXG4gICAgcmVzZXQ6IHJlc2V0LFxuICAgIC8vIHN0YXRlLlxuICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW0sXG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICB9O1xufVxuXG52YXIgZGVmYXVsdFN0YXRlVmFsdWVzID0ge1xuICBhY3RpdmVJbmRleDogLTEsXG4gIHNlbGVjdGVkSXRlbXM6IFtdXG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbml0aWFsIHZhbHVlIGZvciBhIHN0YXRlIGtleSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICogMS4gY29udHJvbGxlZCBwcm9wLCAyLiBpbml0aWFsIHByb3AsIDMuIGRlZmF1bHQgcHJvcCwgNC4gZGVmYXVsdFxuICogdmFsdWUgZnJvbSBEb3duc2hpZnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byB0aGUgaG9vay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wS2V5IFByb3BzIGtleSB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgZm9yLlxuICogQHJldHVybnMge2FueX0gVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoYXQgcHJvcC5cbiAqL1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUkMShwcm9wcywgcHJvcEtleSkge1xuICByZXR1cm4gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIHN0YXRlIGtleSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICogMS4gY29udHJvbGxlZCBwcm9wLCAyLiBkZWZhdWx0IHByb3AsIDMuIGRlZmF1bHQgdmFsdWUgZnJvbSBEb3duc2hpZnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byB0aGUgaG9vay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wS2V5IFByb3BzIGtleSB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgZm9yLlxuICogQHJldHVybnMge2FueX0gVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoYXQgcHJvcC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSQxKHByb3BzLCBwcm9wS2V5KSB7XG4gIHJldHVybiBnZXREZWZhdWx0VmFsdWUocHJvcHMsIHByb3BLZXksIGRlZmF1bHRTdGF0ZVZhbHVlcyk7XG59XG4vKipcbiAqIEdldHMgdGhlIGluaXRpYWwgc3RhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHByb3BzLiBJdCB1c2VzIGluaXRpYWwsIGRlZmF1bHRcbiAqIGFuZCBjb250cm9sbGVkIHByb3BzIHJlbGF0ZWQgdG8gc3RhdGUgaW4gb3JkZXIgdG8gY29tcHV0ZSB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMgcGFzc2VkIHRvIHRoZSBob29rLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGluaXRpYWwgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlJDIocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gZ2V0SW5pdGlhbFZhbHVlJDEocHJvcHMsICdhY3RpdmVJbmRleCcpO1xuICB2YXIgc2VsZWN0ZWRJdGVtcyA9IGdldEluaXRpYWxWYWx1ZSQxKHByb3BzLCAnc2VsZWN0ZWRJdGVtcycpO1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zXG4gIH07XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBkcm9wZG93biBrZXlkb3duIG9wZXJhdGlvbiBpcyBwZXJtaXR0ZWQuIFNob3VsZCBub3QgYmVcbiAqIGFsbG93ZWQgb24ga2V5ZG93biB3aXRoIG1vZGlmaWVyIGtleXMgKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEpLCBvblxuICogaW5wdXQgZWxlbWVudCB3aXRoIHRleHQgY29udGVudCB0aGF0IGlzIGVpdGhlciBoaWdobGlnaHRlZCBvciBzZWxlY3Rpb25cbiAqIGN1cnNvciBpcyBub3QgYXQgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgVGhlIGV2ZW50IGZyb20ga2V5ZG93bi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBvcGVyYXRpb24gaXMgYWxsb3dlZC5cbiAqL1xuXG5mdW5jdGlvbiBpc0tleURvd25PcGVyYXRpb25QZXJtaXR0ZWQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgLy8gaWYgZWxlbWVudCBpcyBhIHRleHQgaW5wdXRcbiAgZWxlbWVudC52YWx1ZSAhPT0gJycgJiYgKCAvLyBhbmQgd2UgaGF2ZSB0ZXh0IGluIGl0XG4gIC8vIGFuZCBjdXJzb3IgaXMgZWl0aGVyIG5vdCBhdCB0aGUgc3RhcnQgb3IgaXMgY3VycmVudGx5IGhpZ2hsaWdodGluZyB0ZXh0LlxuICBlbGVtZW50LnNlbGVjdGlvblN0YXJ0ICE9PSAwIHx8IGVsZW1lbnQuc2VsZWN0aW9uRW5kICE9PSAwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgbWVzc2FnZSB0byBiZSBhZGRlZCB0byBhcmlhLWxpdmUgcmVnaW9uIHdoZW4gaXRlbSBpcyByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3Rpb25QYXJhbWV0ZXJzIFBhcmFtZXRlcnMgcmVxdWlyZWQgdG8gYnVpbGQgdGhlIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgYTExeSBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIGdldEExMXlSZW1vdmFsTWVzc2FnZShzZWxlY3Rpb25QYXJhbWV0ZXJzKSB7XG4gIHZhciByZW1vdmVkU2VsZWN0ZWRJdGVtID0gc2VsZWN0aW9uUGFyYW1ldGVycy5yZW1vdmVkU2VsZWN0ZWRJdGVtLFxuICAgICAgaXRlbVRvU3RyaW5nTG9jYWwgPSBzZWxlY3Rpb25QYXJhbWV0ZXJzLml0ZW1Ub1N0cmluZztcbiAgcmV0dXJuIGl0ZW1Ub1N0cmluZ0xvY2FsKHJlbW92ZWRTZWxlY3RlZEl0ZW0pICsgXCIgaGFzIGJlZW4gcmVtb3ZlZC5cIjtcbn1cblxudmFyIHByb3BUeXBlcyQyID0ge1xuICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRTZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEExMXlSZW1vdmFsTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlUmVkdWNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsQWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRBY3RpdmVJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25BY3RpdmVJbmRleENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGtleU5hdmlnYXRpb25OZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBrZXlOYXZpZ2F0aW9uUHJldmlvdXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMyA9IHtcbiAgaXRlbVRvU3RyaW5nOiBkZWZhdWx0UHJvcHMuaXRlbVRvU3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IGRlZmF1bHRQcm9wcy5zdGF0ZVJlZHVjZXIsXG4gIGVudmlyb25tZW50OiBkZWZhdWx0UHJvcHMuZW52aXJvbm1lbnQsXG4gIGdldEExMXlSZW1vdmFsTWVzc2FnZTogZ2V0QTExeVJlbW92YWxNZXNzYWdlLFxuICBrZXlOYXZpZ2F0aW9uTmV4dDogJ0Fycm93UmlnaHQnLFxuICBrZXlOYXZpZ2F0aW9uUHJldmlvdXM6ICdBcnJvd0xlZnQnXG59O1xuXG52YXIgU2VsZWN0ZWRJdGVtQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2NsaWNrX18nIDogMDtcbnZhciBTZWxlY3RlZEl0ZW1LZXlEb3duRGVsZXRlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fc2VsZWN0ZWRfaXRlbV9rZXlkb3duX2RlbGV0ZV9fJyA6IDE7XG52YXIgU2VsZWN0ZWRJdGVtS2V5RG93bkJhY2tzcGFjZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3NlbGVjdGVkX2l0ZW1fa2V5ZG93bl9iYWNrc3BhY2VfXycgOiAyO1xudmFyIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uTmV4dCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3NlbGVjdGVkX2l0ZW1fa2V5ZG93bl9uYXZpZ2F0aW9uX25leHRfXycgOiAzO1xudmFyIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2tleWRvd25fbmF2aWdhdGlvbl9wcmV2aW91c19fJyA6IDQ7XG52YXIgRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZHJvcGRvd25fa2V5ZG93bl9uYXZpZ2F0aW9uX3ByZXZpb3VzX18nIDogNTtcbnZhciBEcm9wZG93bktleURvd25CYWNrc3BhY2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19kcm9wZG93bl9rZXlkb3duX2JhY2tzcGFjZV9fJyA6IDY7XG52YXIgRHJvcGRvd25DbGljayA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Ryb3Bkb3duX2NsaWNrX18nIDogNztcbnZhciBGdW5jdGlvbkFkZFNlbGVjdGVkSXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX2FkZF9zZWxlY3RlZF9pdGVtX18nIDogODtcbnZhciBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3JlbW92ZV9zZWxlY3RlZF9pdGVtX18nIDogOTtcbnZhciBGdW5jdGlvblNldFNlbGVjdGVkSXRlbXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZXRfc2VsZWN0ZWRfaXRlbXNfXycgOiAxMDtcbnZhciBGdW5jdGlvblNldEFjdGl2ZUluZGV4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2FjdGl2ZV9pbmRleF9fJyA6IDExO1xudmFyIEZ1bmN0aW9uUmVzZXQkMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3Jlc2V0X18nIDogMTI7XG5cbnZhciBzdGF0ZUNoYW5nZVR5cGVzJDMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgU2VsZWN0ZWRJdGVtQ2xpY2s6IFNlbGVjdGVkSXRlbUNsaWNrLFxuICBTZWxlY3RlZEl0ZW1LZXlEb3duRGVsZXRlOiBTZWxlY3RlZEl0ZW1LZXlEb3duRGVsZXRlLFxuICBTZWxlY3RlZEl0ZW1LZXlEb3duQmFja3NwYWNlOiBTZWxlY3RlZEl0ZW1LZXlEb3duQmFja3NwYWNlLFxuICBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvbk5leHQ6IFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uTmV4dCxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25QcmV2aW91czogU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25QcmV2aW91cyxcbiAgRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzOiBEcm9wZG93bktleURvd25OYXZpZ2F0aW9uUHJldmlvdXMsXG4gIERyb3Bkb3duS2V5RG93bkJhY2tzcGFjZTogRHJvcGRvd25LZXlEb3duQmFja3NwYWNlLFxuICBEcm9wZG93bkNsaWNrOiBEcm9wZG93bkNsaWNrLFxuICBGdW5jdGlvbkFkZFNlbGVjdGVkSXRlbTogRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW0sXG4gIEZ1bmN0aW9uUmVtb3ZlU2VsZWN0ZWRJdGVtOiBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zOiBGdW5jdGlvblNldFNlbGVjdGVkSXRlbXMsXG4gIEZ1bmN0aW9uU2V0QWN0aXZlSW5kZXg6IEZ1bmN0aW9uU2V0QWN0aXZlSW5kZXgsXG4gIEZ1bmN0aW9uUmVzZXQ6IEZ1bmN0aW9uUmVzZXQkMlxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cblxuZnVuY3Rpb24gZG93bnNoaWZ0TXVsdGlwbGVTZWxlY3Rpb25SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHR5cGUgPSBhY3Rpb24udHlwZSxcbiAgICAgIGluZGV4ID0gYWN0aW9uLmluZGV4LFxuICAgICAgcHJvcHMgPSBhY3Rpb24ucHJvcHMsXG4gICAgICBzZWxlY3RlZEl0ZW0gPSBhY3Rpb24uc2VsZWN0ZWRJdGVtO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgIHNlbGVjdGVkSXRlbXMgPSBzdGF0ZS5zZWxlY3RlZEl0ZW1zO1xuICB2YXIgY2hhbmdlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNlbGVjdGVkSXRlbUNsaWNrOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXM6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXggLSAxIDwgMCA/IDAgOiBhY3RpdmVJbmRleCAtIDFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25OZXh0OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4ICsgMSA+PSBzZWxlY3RlZEl0ZW1zLmxlbmd0aCA/IC0xIDogYWN0aXZlSW5kZXggKyAxXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNlbGVjdGVkSXRlbUtleURvd25CYWNrc3BhY2U6XG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1LZXlEb3duRGVsZXRlOlxuICAgICAge1xuICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogW10uY29uY2F0KHNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgYWN0aXZlSW5kZXgpLCBzZWxlY3RlZEl0ZW1zLnNsaWNlKGFjdGl2ZUluZGV4ICsgMSkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogbmV3QWN0aXZlSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBEcm9wZG93bktleURvd25OYXZpZ2F0aW9uUHJldmlvdXM6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERyb3Bkb3duS2V5RG93bkJhY2tzcGFjZTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvbkFkZFNlbGVjdGVkSXRlbTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLmNvbmNhdChzZWxlY3RlZEl0ZW1zLCBbc2VsZWN0ZWRJdGVtXSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRHJvcGRvd25DbGljazpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbTpcbiAgICAgIHtcbiAgICAgICAgdmFyIF9uZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtSW5kZXggPSBzZWxlY3RlZEl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBfbmV3QWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEl0ZW1JbmRleCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgX25ld0FjdGl2ZUluZGV4ID0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXS5jb25jYXQoc2VsZWN0ZWRJdGVtcy5zbGljZSgwLCBzZWxlY3RlZEl0ZW1JbmRleCksIHNlbGVjdGVkSXRlbXMuc2xpY2Uoc2VsZWN0ZWRJdGVtSW5kZXggKyAxKSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiBfbmV3QWN0aXZlSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBGdW5jdGlvblNldFNlbGVjdGVkSXRlbXM6XG4gICAgICB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RlZEl0ZW1zID0gYWN0aW9uLnNlbGVjdGVkSXRlbXM7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogbmV3U2VsZWN0ZWRJdGVtc1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgRnVuY3Rpb25TZXRBY3RpdmVJbmRleDpcbiAgICAgIHtcbiAgICAgICAgdmFyIF9uZXdBY3RpdmVJbmRleDIgPSBhY3Rpb24uYWN0aXZlSW5kZXg7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IF9uZXdBY3RpdmVJbmRleDJcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlIEZ1bmN0aW9uUmVzZXQkMjpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBnZXREZWZhdWx0VmFsdWUkMShwcm9wcywgJ2FjdGl2ZUluZGV4JyksXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IGdldERlZmF1bHRWYWx1ZSQxKHByb3BzLCAnc2VsZWN0ZWRJdGVtcycpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIGNhbGxlZCB3aXRob3V0IHByb3BlciBhY3Rpb24gdHlwZS4nKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGNoYW5nZXMpO1xufVxuXG51c2VNdWx0aXBsZVNlbGVjdGlvbi5zdGF0ZUNoYW5nZVR5cGVzID0gc3RhdGVDaGFuZ2VUeXBlcyQzO1xuXG5mdW5jdGlvbiB1c2VNdWx0aXBsZVNlbGVjdGlvbih1c2VyUHJvcHMpIHtcbiAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgdXNlclByb3BzID0ge307XG4gIH1cblxuICAvLyBQcm9wcyBkZWZhdWx0cyBhbmQgZGVzdHJ1Y3R1cmluZy5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcyQzLCB1c2VyUHJvcHMpO1xuXG4gIHZhciBnZXRBMTF5UmVtb3ZhbE1lc3NhZ2UgPSBwcm9wcy5nZXRBMTF5UmVtb3ZhbE1lc3NhZ2UsXG4gICAgICBpdGVtVG9TdHJpbmcgPSBwcm9wcy5pdGVtVG9TdHJpbmcsXG4gICAgICBlbnZpcm9ubWVudCA9IHByb3BzLmVudmlyb25tZW50LFxuICAgICAga2V5TmF2aWdhdGlvbk5leHQgPSBwcm9wcy5rZXlOYXZpZ2F0aW9uTmV4dCxcbiAgICAgIGtleU5hdmlnYXRpb25QcmV2aW91cyA9IHByb3BzLmtleU5hdmlnYXRpb25QcmV2aW91czsgLy8gUmVkdWNlciBpbml0LlxuXG4gIHZhciBfdXNlQ29udHJvbGxlZFJlZHVjZXIgPSB1c2VDb250cm9sbGVkUmVkdWNlcihkb3duc2hpZnRNdWx0aXBsZVNlbGVjdGlvblJlZHVjZXIsIGdldEluaXRpYWxTdGF0ZSQyKHByb3BzKSwgcHJvcHMpLFxuICAgICAgc3RhdGUgPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VDb250cm9sbGVkUmVkdWNlclsxXTtcblxuICB2YXIgYWN0aXZlSW5kZXggPSBzdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgIHNlbGVjdGVkSXRlbXMgPSBzdGF0ZS5zZWxlY3RlZEl0ZW1zOyAvLyBSZWZzLlxuXG4gIHZhciBpc0luaXRpYWxNb3VudFJlZiA9IHVzZVJlZih0cnVlKTtcbiAgdmFyIGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgcHJldmlvdXNTZWxlY3RlZEl0ZW1zUmVmID0gdXNlUmVmKHNlbGVjdGVkSXRlbXMpO1xuICB2YXIgc2VsZWN0ZWRJdGVtUmVmcyA9IHVzZVJlZigpO1xuICBzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnQgPSBbXTtcbiAgdmFyIGxhdGVzdCA9IHVzZUxhdGVzdFJlZih7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KTsgLy8gRWZmZWN0cy5cblxuICAvKiBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzZWxlY3RlZEl0ZW0uICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA8IHByZXZpb3VzU2VsZWN0ZWRJdGVtc1JlZi5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgdmFyIHJlbW92ZWRTZWxlY3RlZEl0ZW0gPSBwcmV2aW91c1NlbGVjdGVkSXRlbXNSZWYuY3VycmVudC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSkgPCAwO1xuICAgICAgfSk7XG4gICAgICBzZXRTdGF0dXMoZ2V0QTExeVJlbW92YWxNZXNzYWdlKHtcbiAgICAgICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmcsXG4gICAgICAgIHJlc3VsdENvdW50OiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCxcbiAgICAgICAgcmVtb3ZlZFNlbGVjdGVkSXRlbTogcmVtb3ZlZFNlbGVjdGVkSXRlbSxcbiAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICBhY3RpdmVTZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbXNbYWN0aXZlSW5kZXhdXG4gICAgICB9KSwgZW52aXJvbm1lbnQuZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2VsZWN0ZWRJdGVtc1JlZi5jdXJyZW50ID0gc2VsZWN0ZWRJdGVtczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc2VsZWN0ZWRJdGVtcy5sZW5ndGhdKTsgLy8gU2V0cyBmb2N1cyBvbiBhY3RpdmUgaXRlbS5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSAmJiBkcm9wZG93blJlZi5jdXJyZW50KSB7XG4gICAgICBkcm9wZG93blJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnRbYWN0aXZlSW5kZXhdKSB7XG4gICAgICBzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnRbYWN0aXZlSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYWN0aXZlSW5kZXhdKTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuICB2YXIgc2V0R2V0dGVyUHJvcENhbGxJbmZvID0gdXNlR2V0dGVyUHJvcHNDYWxsZWRDaGVja2VyKCdnZXREcm9wZG93blByb3BzJyk7IC8vIE1ha2UgaW5pdGlhbCByZWYgZmFsc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTsgLy8gRXZlbnQgaGFuZGxlciBmdW5jdGlvbnMuXG5cbiAgdmFyIHNlbGVjdGVkSXRlbUtleURvd25IYW5kbGVycyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltrZXlOYXZpZ2F0aW9uUHJldmlvdXNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzXG4gICAgICB9KTtcbiAgICB9LCBfcmVmW2tleU5hdmlnYXRpb25OZXh0XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25OZXh0XG4gICAgICB9KTtcbiAgICB9LCBfcmVmLkRlbGV0ZSA9IGZ1bmN0aW9uIERlbGV0ZSgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZVxuICAgICAgfSk7XG4gICAgfSwgX3JlZi5CYWNrc3BhY2UgPSBmdW5jdGlvbiBCYWNrc3BhY2UoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUtleURvd25CYWNrc3BhY2VcbiAgICAgIH0pO1xuICAgIH0sIF9yZWY7XG4gIH0sIFtkaXNwYXRjaCwga2V5TmF2aWdhdGlvbk5leHQsIGtleU5hdmlnYXRpb25QcmV2aW91c10pO1xuICB2YXIgZHJvcGRvd25LZXlEb3duSGFuZGxlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICByZXR1cm4gX3JlZjIgPSB7fSwgX3JlZjJba2V5TmF2aWdhdGlvblByZXZpb3VzXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGlzS2V5RG93bk9wZXJhdGlvblBlcm1pdHRlZChldmVudCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfcmVmMi5CYWNrc3BhY2UgPSBmdW5jdGlvbiBCYWNrc3BhY2UoZXZlbnQpIHtcbiAgICAgIGlmIChpc0tleURvd25PcGVyYXRpb25QZXJtaXR0ZWQoZXZlbnQpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBEcm9wZG93bktleURvd25CYWNrc3BhY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3JlZjI7XG4gIH0sIFtkaXNwYXRjaCwga2V5TmF2aWdhdGlvblByZXZpb3VzXSk7IC8vIEdldHRlciBwcm9wcy5cblxuICB2YXIgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXApIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYzJHJlZktleSA9IF9yZWYzLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjMkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYzJHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjMucmVmLFxuICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgb25LZXlEb3duID0gX3JlZjMub25LZXlEb3duLFxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBfcmVmMy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIGluZGV4ID0gX3JlZjMuaW5kZXgsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicmVmS2V5XCIsIFwicmVmXCIsIFwib25DbGlja1wiLCBcIm9uS2V5RG93blwiLCBcInNlbGVjdGVkSXRlbVwiLCBcImluZGV4XCJdKTtcblxuICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXgoaW5kZXgsIHNlbGVjdGVkSXRlbSwgbGF0ZXN0U3RhdGUuc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICBpZiAoaXRlbUluZGV4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzIGVpdGhlciBzZWxlY3RlZEl0ZW0gb3IgaW5kZXggaW4gZ2V0U2VsZWN0ZWRJdGVtUHJvcHMhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKHNlbGVjdGVkSXRlbU5vZGUpIHtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW1Ob2RlKSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbVJlZnMuY3VycmVudC5wdXNoKHNlbGVjdGVkSXRlbU5vZGUpO1xuICAgICAgfVxuICAgIH0pLCBfZXh0ZW5kczIudGFiSW5kZXggPSBpbmRleCA9PT0gbGF0ZXN0U3RhdGUuYWN0aXZlSW5kZXggPyAwIDogLTEsIF9leHRlbmRzMi5vbkNsaWNrID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DbGljaywgZnVuY3Rpb24gc2VsZWN0ZWRJdGVtSGFuZGxlQ2xpY2soKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUNsaWNrLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH0pLCBfZXh0ZW5kczIub25LZXlEb3duID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBmdW5jdGlvbiBzZWxlY3RlZEl0ZW1IYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICBpZiAoa2V5ICYmIHNlbGVjdGVkSXRlbUtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbUtleURvd25IYW5kbGVyc1trZXldKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHMyKSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCBzZWxlY3RlZEl0ZW1LZXlEb3duSGFuZGxlcnNdKTtcbiAgdmFyIGdldERyb3Bkb3duUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAyLCBfdGVtcDMpIHtcbiAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgdmFyIF9yZWY0ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgX3JlZjQkcmVmS2V5ID0gX3JlZjQucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmNCRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjQkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmNC5yZWYsXG4gICAgICAgIG9uS2V5RG93biA9IF9yZWY0Lm9uS2V5RG93bixcbiAgICAgICAgb25DbGljayA9IF9yZWY0Lm9uQ2xpY2ssXG4gICAgICAgIF9yZWY0JHByZXZlbnRLZXlBY3RpbyA9IF9yZWY0LnByZXZlbnRLZXlBY3Rpb24sXG4gICAgICAgIHByZXZlbnRLZXlBY3Rpb24gPSBfcmVmNCRwcmV2ZW50S2V5QWN0aW8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjQkcHJldmVudEtleUFjdGlvLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIFtcInJlZktleVwiLCBcInJlZlwiLCBcIm9uS2V5RG93blwiLCBcIm9uQ2xpY2tcIiwgXCJwcmV2ZW50S2V5QWN0aW9uXCJdKTtcblxuICAgIHZhciBfcmVmNSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgIF9yZWY1JHN1cHByZXNzUmVmRXJybyA9IF9yZWY1LnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmNSRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjUkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXREcm9wZG93blByb3BzJywgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBkcm9wZG93blJlZik7XG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGRyb3Bkb3duTm9kZSkge1xuICAgICAgaWYgKGRyb3Bkb3duTm9kZSkge1xuICAgICAgICBkcm9wZG93blJlZi5jdXJyZW50ID0gZHJvcGRvd25Ob2RlO1xuICAgICAgfVxuICAgIH0pLCBfZXh0ZW5kczMpLCAhcHJldmVudEtleUFjdGlvbiAmJiB7XG4gICAgICBvbktleURvd246IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgZnVuY3Rpb24gZHJvcGRvd25IYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgICAgaWYgKGtleSAmJiBkcm9wZG93bktleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgZHJvcGRvd25LZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgb25DbGljazogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DbGljaywgZnVuY3Rpb24gZHJvcGRvd25IYW5kbGVDbGljaygpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IERyb3Bkb3duQ2xpY2tcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0sIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGRyb3Bkb3duS2V5RG93bkhhbmRsZXJzLCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm9dKTsgLy8gcmV0dXJuc1xuXG4gIHZhciBhZGRTZWxlY3RlZEl0ZW0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW0sXG4gICAgICBzZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHJlbW92ZVNlbGVjdGVkSXRlbSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW0pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgc2V0U2VsZWN0ZWRJdGVtcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdTZWxlY3RlZEl0ZW1zKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtczogbmV3U2VsZWN0ZWRJdGVtc1xuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldEFjdGl2ZUluZGV4ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0FjdGl2ZUluZGV4KSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZXRBY3RpdmVJbmRleCxcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXdBY3RpdmVJbmRleFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uUmVzZXQkMlxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIHtcbiAgICBnZXRTZWxlY3RlZEl0ZW1Qcm9wczogZ2V0U2VsZWN0ZWRJdGVtUHJvcHMsXG4gICAgZ2V0RHJvcGRvd25Qcm9wczogZ2V0RHJvcGRvd25Qcm9wcyxcbiAgICBhZGRTZWxlY3RlZEl0ZW06IGFkZFNlbGVjdGVkSXRlbSxcbiAgICByZW1vdmVTZWxlY3RlZEl0ZW06IHJlbW92ZVNlbGVjdGVkSXRlbSxcbiAgICBzZXRTZWxlY3RlZEl0ZW1zOiBzZXRTZWxlY3RlZEl0ZW1zLFxuICAgIHNldEFjdGl2ZUluZGV4OiBzZXRBY3RpdmVJbmRleCxcbiAgICByZXNldDogcmVzZXQsXG4gICAgc2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtcyxcbiAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXhcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bnNoaWZ0O1xuZXhwb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94LCB1c2VNdWx0aXBsZVNlbGVjdGlvbiwgdXNlU2VsZWN0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9