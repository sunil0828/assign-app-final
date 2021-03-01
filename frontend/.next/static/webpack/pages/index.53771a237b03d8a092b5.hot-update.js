webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvZGlzdC9kb3duc2hpZnQuZXNtLmpzIl0sIm5hbWVzIjpbIlNFQVJDSF9VU0VSU19RVUVSWSIsImdxbCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiZmluZFVzZXJzIiwibG9hZGluZyIsImRhdGEiLCJlcnJvciIsInVzZXJzIiwic2VhcmNoVGVybXMiLCJmaW5kVXNlcnNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZFVzZXJDaGFuZ2UiLCJzZWxlY3RlZFVzZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsInVzZXJUb1N0cmluZyIsInVzZXIiLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldFVzZXJQcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJnZXRJbnB1dFByb3BzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4Qjs7QUFEK0Isc0JBR2VDLG1FQUFZLENBQ3hETCxrQkFEd0QsRUFFeEQ7QUFDRU0sZUFBVyxFQUFFO0FBRGYsR0FGd0QsQ0FIM0I7QUFBQTtBQUFBLE1BR3hCQyxTQUh3QjtBQUFBO0FBQUEsTUFHWEMsT0FIVyxtQkFHWEEsT0FIVztBQUFBLE1BR0ZDLElBSEUsbUJBR0ZBLElBSEU7QUFBQSxNQUdJQyxLQUhKLG1CQUdJQSxLQUhKOztBQVUvQixNQUFNQyxLQUFLLEdBQUcsQ0FBQUYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFdBQU4sS0FBcUIsRUFBbkM7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDUCxTQUFELEVBQVksR0FBWixDQUFsQztBQUVBUSxrRUFBYzs7QUFkaUIscUJBdUIzQkMsNkRBQVcsQ0FBQztBQUNkTCxTQUFLLEVBQUxBLEtBRGM7QUFFZE0sc0JBRmMsZ0NBRU87QUFDbkJKLHVCQUFpQixDQUFDO0FBQ2hCSyxpQkFBUyxFQUFFO0FBQ1RDLG9CQUFVLEVBQUVDO0FBREg7QUFESyxPQUFELENBQWpCO0FBS0QsS0FSYTtBQVNkQyx3QkFUYyxzQ0FTeUI7QUFBQSxVQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3JDbkIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZO0FBQ1ZDLGdCQUFRLGtCQUFXRixZQUFZLENBQUNHLEVBQXhCO0FBREUsT0FBWjtBQUdELEtBYmE7QUFjZEMsZ0JBQVksRUFBRSxzQkFBQ0MsSUFBRDtBQUFBLGFBQVUsQ0FBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVDLElBQU4sT0FBVjtBQUFBO0FBZEEsR0FBRCxDQXZCZ0I7QUFBQSxNQWlCN0JDLE1BakI2QixnQkFpQjdCQSxNQWpCNkI7QUFBQSxNQWtCN0JULFVBbEI2QixnQkFrQjdCQSxVQWxCNkI7QUFBQSxNQW1CN0JVLFlBbkI2QixnQkFtQjdCQSxZQW5CNkI7QUFBQSxNQW9CN0JDLGdCQXBCNkIsZ0JBb0I3QkEsZ0JBcEI2QjtBQUFBLE1BcUI3QkMsWUFyQjZCLGdCQXFCN0JBLFlBckI2QjtBQUFBLE1Bc0I3QkMsZ0JBdEI2QixnQkFzQjdCQSxnQkF0QjZCOztBQXVDL0Isc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSw0QkFDRSw0R0FBU0YsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0UsZ0dBQ01HLGFBQWEsQ0FBQztBQUNoQkMsWUFBSSxFQUFFLFFBRFU7QUFFaEJDLG1CQUFXLEVBQUUsb0JBRkc7QUFHaEJYLFVBQUUsRUFBRSxRQUhZO0FBSWhCWSxpQkFBUyxFQUFFN0IsT0FBTyxHQUFHLFNBQUgsR0FBZTtBQUpqQixPQUFELENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyx5REFBRCxrQ0FBY3NCLFlBQVksRUFBMUI7QUFBQSxpQkFDR0QsTUFBTSxJQUNMbEIsS0FBSyxDQUFDMkIsR0FBTixDQUFVLFVBQUNYLElBQUQsRUFBT1ksS0FBUDtBQUFBLDRCQUNSLDREQUFDLDZEQUFELGtDQUNNUCxZQUFZLENBQUM7QUFBRUwsY0FBSSxFQUFKQTtBQUFGLFNBQUQsQ0FEbEI7QUFFRSxhQUFHLEVBQUVBLElBQUksQ0FBQ0YsRUFGWjtBQUdFLHFCQUFXLEVBQUVjLEtBQUssS0FBS04sZ0JBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLR04sSUFBSSxDQUFDQyxJQUxSLENBRFE7QUFBQSxPQUFWLENBRkosRUFXR0MsTUFBTSxJQUFJLENBQUNsQixLQUFLLENBQUM2QixNQUFqQixJQUEyQixDQUFDaEMsT0FBNUIsaUJBQ0MscUVBQUMsNkRBQUQ7QUFBQSxrREFBMENZLFVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXBFdUJsQixNO1VBQ1BFLGlFLEVBRStCQywyRCxFQW9CMUNXLHFEOzs7S0F2QmtCZCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ4QjtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBLGNBQWMsbURBQW1ELGdCQUFnQixvREFBb0QsZ0JBQWdCLCtEQUErRCwrQkFBK0IsdURBQXVELGtCQUFrQiw4REFBOEQsSUFBSSxnREFBZ0QsU0FBUyxhQUFhLElBQUksd0VBQXdFLElBQUksU0FBUyw0QkFBNEIsb0ZBQW1HLDZFQUFjLGtJQUFrSSxjQUFjLCtDQUErQyx1RUFBdUUsV0FBVyxFQUFFLHlCQUF5QixVQUFVLE1BQU0seUVBQXlFLG9XQUFvVyxXQUFXLEtBQUssa0dBQWtHLDRFQUE0RSx1UkFBdVIsc01BQXNNLEtBQUssaUxBQWlMLGlDQUFpQywyR0FBMkcsUUFBUSxrQkFBa0IsRUFBRSxTQUFTO0FBQ3I1RTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQzFDO0FBQzRCO0FBQ2hCO0FBQ25DO0FBQ2tFO0FBQzdEO0FBQ3FCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSxTQUFTO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxZQUFZO0FBQ3ZCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isd0VBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLFlBQVk7QUFDdkIsWUFBWSxRQUFRO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsWUFBWSxTQUFTO0FBQ3JCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFlBQVksU0FBUztBQUNyQjs7O0FBR0E7QUFDQSx1RUFBdUUsZUFBZTtBQUN0RjtBQUNBOztBQUVBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWSxFQUFFO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxRQUFRO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksUUFBUTtBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFlBQVksUUFBUTtBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFFBQVE7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFlBQVk7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLEtBQXFDLGdDQUFnQyxTQUFDO0FBQ3BGLGNBQWMsS0FBcUMsZ0NBQWdDLFNBQUM7QUFDcEYscUJBQXFCLEtBQXFDLHdDQUF3QyxTQUFDO0FBQ25HLHFCQUFxQixLQUFxQyx5Q0FBeUMsU0FBQztBQUNwRyx1QkFBdUIsS0FBcUMsMkNBQTJDLFNBQUM7QUFDeEcsb0JBQW9CLEtBQXFDLHVDQUF1QyxTQUFDO0FBQ2pHLG1CQUFtQixLQUFxQyxzQ0FBc0MsU0FBQztBQUMvRixrQkFBa0IsS0FBcUMscUNBQXFDLFNBQUM7QUFDN0YsaUJBQWlCLEtBQXFDLG9DQUFvQyxTQUFDO0FBQzNGLGdCQUFnQixLQUFxQyxtQ0FBbUMsU0FBQztBQUN6RixnQkFBZ0IsS0FBcUMsbUNBQW1DLFNBQUU7QUFDMUYsa0JBQWtCLEtBQXFDLHFDQUFxQyxTQUFFO0FBQzlGLHlCQUF5QixLQUFxQyw2Q0FBNkMsU0FBRTtBQUM3RyxrQkFBa0IsS0FBcUMscUNBQXFDLFNBQUU7QUFDOUYsaUJBQWlCLEtBQXFDLG9DQUFvQyxTQUFFO0FBQzVGLHdDQUF3QyxLQUFxQyw4REFBOEQsU0FBRTtBQUM3SSxlQUFlLEtBQXFDLGlDQUFpQyxTQUFFOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RkFBYzs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0Isa0ZBQVE7QUFDdkM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLGtGQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxrRkFBUSxHQUFHO0FBQzNFOztBQUVBO0FBQ0E7QUFDQSxvRkFBb0Y7O0FBRXBGLHlFQUF5RTtBQUN6RTtBQUNBOztBQUVBLHdFQUF3RTs7QUFFeEUsNkJBQTZCOztBQUU3QixpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0EscUVBQXFFLGtGQUFRLEdBQUc7QUFDaEY7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVHQUE2Qjs7QUFFaEQsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsa0ZBQVEsZ0JBQWdCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixrRkFBUTtBQUM3QjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQ0FBb0Msa0ZBQVEsR0FBRztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxtQ0FBbUMsa0ZBQVEsR0FBRztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVHQUE2Qjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsZUFBZSxrRkFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsZ0dBQXNCO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQSxZQUFZLEtBQStCLEVBQUUsRUFJcEM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsZUFBZSxrRkFBUTtBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUdBQTZCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7O0FBR0EsZUFBZSxrRkFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxnR0FBc0I7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUdBQTZCOztBQUVqRCwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtGQUFRLGdCQUFnQjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBcUM7QUFDaEY7QUFDQSxRQUFRLFNBQVM7QUFDakIsbUJBQW1CLHVHQUE2Qjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUywwQkFBMEI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxlQUFlLGtGQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrRkFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsa0ZBQVE7QUFDekI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzREFBc0Qsa0ZBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxLQUErQztBQUN6RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0EscURBQXFEOztBQUVyRCx3Q0FBd0M7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLDBEQUFZO0FBQzNCO0FBQ0E7OztBQUdBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsQ0FBQywrQ0FBUzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELEtBQXFDO0FBQ3JDLFlBQVksaURBQVM7QUFDckIsMkJBQTJCLGlEQUFTO0FBQ3BDLGlCQUFpQixpREFBUztBQUMxQiwyQkFBMkIsaURBQVM7QUFDcEMsdUJBQXVCLGlEQUFTO0FBQ2hDLHFCQUFxQixpREFBUztBQUM5QixpQkFBaUIsaURBQVM7QUFDMUIsd0JBQXdCLGlEQUFTO0FBQ2pDLGdCQUFnQixpREFBUztBQUN6QixZQUFZLGlEQUFTO0FBQ3JCLFlBQVksaURBQVM7QUFDckIsaUJBQWlCLGlEQUFTO0FBQzFCLHNCQUFzQixpREFBUztBQUMvQixnQkFBZ0IsaURBQVM7QUFDekIsZ0JBQWdCLGlEQUFTO0FBQ3pCLHVCQUF1QixpREFBUztBQUNoQyxnQkFBZ0IsaURBQVM7QUFDekIsYUFBYSxpREFBUztBQUN0QixNQUFNLGlEQUFTO0FBQ2YsZUFBZSxpREFBUztBQUN4QixzQkFBc0IsaURBQVM7QUFDL0IseUJBQXlCLGlEQUFTO0FBQ2xDLGNBQWMsaURBQVM7QUFDdkIsc0JBQXNCLGlEQUFTO0FBQy9CLHFCQUFxQixpREFBUztBQUM5QixZQUFZLGlEQUFTO0FBQ3JCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsb0JBQW9CLGlEQUFTO0FBQzdCLGtCQUFrQixpREFBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCLFVBQVUsaURBQVM7QUFDbkIsY0FBYyxpREFBUztBQUN2QixvQkFBb0IsaURBQVM7QUFDN0IsV0FBVyxpREFBUztBQUNwQixXQUFXLGlEQUFTO0FBQ3BCLFVBQVUsaURBQVM7QUFDbkIsYUFBYSxpREFBUztBQUN0Qjs7QUFFQSxDQUFDLEdBQUcsU0FBTTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLDZEQUFZO0FBQ3REO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLE9BQU8sNkRBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esd0JBQXdCLGtGQUFRO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0ZBQVE7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxpREFBUztBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU0sTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25COztBQUVBO0FBQ0EscUJBQXFCLG9EQUFNO0FBQzNCLGtCQUFrQixvREFBTTtBQUN4Qix3QkFBd0IseURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtGQUFRLEdBQUc7QUFDL0Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVILG9CQUFvQix3REFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDLG9CQUFvQixrRkFBUTtBQUM1QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0EsaUNBQWlDLG9EQUFNO0FBQ3ZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQSx3QkFBd0IsYUFBb0I7QUFDNUMsMEJBQTBCLG9EQUFNOztBQUVoQyx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBOztBQUVBLDZCQUE2QixvREFBTTtBQUNuQztBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1AsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCw4QkFBOEIseURBQVc7QUFDekMsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUdBQTZCOztBQUUxQztBQUNBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0ZBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyx3QkFBd0I7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTSxPQUFPOztBQUVyQyxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBTTtBQUMzQixFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxzQ0FBc0M7QUFDOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDJCQUEyQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpREFBUztBQUNsQixnQkFBZ0IsaURBQVM7QUFDekIsd0JBQXdCLGlEQUFTO0FBQ2pDLDJCQUEyQixpREFBUztBQUNwQyxzQkFBc0IsaURBQVM7QUFDL0Isb0JBQW9CLGlEQUFTO0FBQzdCLDJCQUEyQixpREFBUztBQUNwQywyQkFBMkIsaURBQVM7QUFDcEMsVUFBVSxpREFBUztBQUNuQixpQkFBaUIsaURBQVM7QUFDMUIsaUJBQWlCLGlEQUFTO0FBQzFCLGdCQUFnQixpREFBUztBQUN6Qix1QkFBdUIsaURBQVM7QUFDaEMsdUJBQXVCLGlEQUFTO0FBQ2hDLE1BQU0saURBQVM7QUFDZixXQUFXLGlEQUFTO0FBQ3BCLFVBQVUsaURBQVM7QUFDbkIsYUFBYSxpREFBUztBQUN0QixrQkFBa0IsaURBQVM7QUFDM0IsZ0JBQWdCLGlEQUFTO0FBQ3pCLHdCQUF3QixpREFBUztBQUNqQyw0QkFBNEIsaURBQVM7QUFDckMsaUJBQWlCLGlEQUFTO0FBQzFCLGtCQUFrQixpREFBUztBQUMzQixlQUFlLGlEQUFTO0FBQ3hCLHNCQUFzQixpREFBUztBQUMvQix5QkFBeUIsaURBQVM7QUFDbEMsY0FBYyxpREFBUztBQUN2QixzQkFBc0IsaURBQVM7QUFDL0IscUJBQXFCLGlEQUFTO0FBQzlCLFlBQVksaURBQVM7QUFDckIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLGtGQUFRLEdBQUc7QUFDaEM7QUFDQSxDQUFDOztBQUVELDJCQUEyQixLQUFxQyxtQ0FBbUMsU0FBQztBQUNwRyx5QkFBeUIsS0FBcUMsaUNBQWlDLFNBQUM7QUFDaEcsd0JBQXdCLEtBQXFDLCtCQUErQixTQUFDO0FBQzdGLHNCQUFzQixLQUFxQyw2QkFBNkIsU0FBQztBQUN6RixxQkFBcUIsS0FBcUMsNEJBQTRCLFNBQUM7QUFDdkYsdUJBQXVCLEtBQXFDLDhCQUE4QixTQUFDO0FBQzNGLDZCQUE2QixLQUFxQyxxQ0FBcUMsU0FBQztBQUN4RywyQkFBMkIsS0FBcUMsa0NBQWtDLFNBQUM7QUFDbkcsZUFBZSxLQUFxQyxxQkFBcUIsU0FBQztBQUMxRSxxQkFBcUIsS0FBcUMsNEJBQTRCLFNBQUM7QUFDdkYsb0JBQW9CLEtBQXFDLDJCQUEyQixTQUFFO0FBQ3RGLGdCQUFnQixLQUFxQyxzQkFBc0IsU0FBRTtBQUM3RSx3QkFBd0IsS0FBcUMsOEJBQThCLFNBQUU7QUFDN0YsbUNBQW1DLEtBQXFDLDJDQUEyQyxTQUFFO0FBQ3JILGlDQUFpQyxLQUFxQyx5Q0FBeUMsU0FBRTtBQUNqSCxtQ0FBbUMsS0FBcUMsMENBQTBDLFNBQUU7QUFDcEgseUJBQXlCLEtBQXFDLGdDQUFnQyxTQUFFO0FBQ2hHLHVCQUF1QixLQUFxQyw4QkFBOEIsU0FBRTtBQUM1Rix3QkFBd0IsS0FBcUMsK0JBQStCLFNBQUU7QUFDOUYsa0NBQWtDLEtBQXFDLDBDQUEwQyxTQUFFO0FBQ25ILHlCQUF5QixLQUFxQyxnQ0FBZ0MsU0FBRTtBQUNoRyw0QkFBNEIsS0FBcUMsb0NBQW9DLFNBQUU7QUFDdkcsb0JBQW9CLEtBQXFDLDBCQUEwQixTQUFFOztBQUVyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrRkFBUTtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0ZBQVEsR0FBRztBQUNwQjtBQUNBOztBQUVBLHdCQUF3QixNQUFxQztBQUM3RDtBQUNBLFNBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQSxHQUFHOzs7QUFHSCxjQUFjLGtGQUFRLEdBQUc7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQyx3QkFBd0Isb0RBQU07QUFDOUIsZ0JBQWdCLG9EQUFNO0FBQ3RCLGlCQUFpQixvREFBTTtBQUN2Qix3QkFBd0I7O0FBRXhCLHNCQUFzQixvREFBTSxPQUFPOztBQUVuQyx3QkFBd0Isb0RBQU0sT0FBTzs7QUFFckMsc0JBQXNCLG9EQUFNLHVCQUF1Qjs7QUFFbkQsK0JBQStCLG9EQUFNO0FBQ3JDLDBCQUEwQixvREFBTSxPQUFPOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0EsNEZBQTRGLGtGQUFRO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7O0FBRWIsZ0VBQWdFLGtGQUFRO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUwsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtHQUFrRzs7QUFFbEcsRUFBRSx1REFBUztBQUNYO0FBQ0EsR0FBRyxNQUFNOztBQUVULG9DQUFvQyxxREFBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNEJBQTRCLHFEQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHLGNBQWM7O0FBRWpCLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IseURBQVc7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsaUJBQWlCLHlEQUFXO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILDRCQUE0Qix5REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGNBQWMseURBQVc7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsc0JBQXNCLHlEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLGNBQWM7O0FBRWpCLHNCQUFzQix5REFBVztBQUNqQyxXQUFXLGtGQUFRO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHFCQUFxQix5REFBVztBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1R0FBNkI7O0FBRTVDLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCw2QkFBNkIseURBQVc7QUFDeEM7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHNCQUFzQixrRkFBUSxnQkFBZ0I7QUFDOUM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLHlEQUFXO0FBQ2hDOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUdBQTZCOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixrRkFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLEtBQXFDLG9DQUFvQyxTQUFDO0FBQ3RHLDBCQUEwQixLQUFxQyxrQ0FBa0MsU0FBQztBQUNsRyx5QkFBeUIsS0FBcUMsZ0NBQWdDLFNBQUM7QUFDL0YsdUJBQXVCLEtBQXFDLDhCQUE4QixTQUFDO0FBQzNGLHNCQUFzQixLQUFxQyw2QkFBNkIsU0FBQztBQUN6Rix3QkFBd0IsS0FBcUMsK0JBQStCLFNBQUM7QUFDN0Ysa0JBQWtCLEtBQXFDLHdCQUF3QixTQUFDO0FBQ2hGLGdCQUFnQixLQUFxQyxzQkFBc0IsU0FBQztBQUM1RSx1QkFBdUIsS0FBcUMsNEJBQTRCLFNBQUM7QUFDekYsc0JBQXNCLEtBQXFDLDJCQUEyQixTQUFDO0FBQ3ZGLGtCQUFrQixLQUFxQyxzQkFBc0IsU0FBRTtBQUMvRSwwQkFBMEIsS0FBcUMsOEJBQThCLFNBQUU7QUFDL0YsMkJBQTJCLEtBQXFDLGdDQUFnQyxTQUFFO0FBQ2xHLHlCQUF5QixLQUFxQyw4QkFBOEIsU0FBRTtBQUM5RiwwQkFBMEIsS0FBcUMsK0JBQStCLFNBQUU7QUFDaEcsb0NBQW9DLEtBQXFDLDBDQUEwQyxTQUFFO0FBQ3JILDJCQUEyQixLQUFxQyxnQ0FBZ0MsU0FBRTtBQUNsRyw4QkFBOEIsS0FBcUMsb0NBQW9DLFNBQUU7QUFDekcsc0JBQXNCLEtBQXFDLDBCQUEwQixTQUFFO0FBQ3ZGLHdDQUF3QyxLQUFxQyxpREFBaUQsU0FBRTs7QUFFaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUdBQTZCOztBQUUxQztBQUNBLFNBQVMsa0ZBQVE7QUFDakI7QUFDQSxHQUFHLGdCQUFnQixrRkFBUTtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtGQUFRLEdBQUc7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsaURBQVM7QUFDbEIsZ0JBQWdCLGlEQUFTO0FBQ3pCLHdCQUF3QixpREFBUztBQUNqQywyQkFBMkIsaURBQVM7QUFDcEMsc0JBQXNCLGlEQUFTO0FBQy9CLG9CQUFvQixpREFBUztBQUM3QiwyQkFBMkIsaURBQVM7QUFDcEMsMkJBQTJCLGlEQUFTO0FBQ3BDLFVBQVUsaURBQVM7QUFDbkIsaUJBQWlCLGlEQUFTO0FBQzFCLGlCQUFpQixpREFBUztBQUMxQixnQkFBZ0IsaURBQVM7QUFDekIsdUJBQXVCLGlEQUFTO0FBQ2hDLHVCQUF1QixpREFBUztBQUNoQyxjQUFjLGlEQUFTO0FBQ3ZCLHFCQUFxQixpREFBUztBQUM5QixxQkFBcUIsaURBQVM7QUFDOUIsTUFBTSxpREFBUztBQUNmLFdBQVcsaURBQVM7QUFDcEIsVUFBVSxpREFBUztBQUNuQixhQUFhLGlEQUFTO0FBQ3RCLFdBQVcsaURBQVM7QUFDcEIsa0JBQWtCLGlEQUFTO0FBQzNCLGdCQUFnQixpREFBUztBQUN6Qix3QkFBd0IsaURBQVM7QUFDakMsNEJBQTRCLGlEQUFTO0FBQ3JDLGlCQUFpQixpREFBUztBQUMxQixrQkFBa0IsaURBQVM7QUFDM0Isc0JBQXNCLGlEQUFTO0FBQy9CLGVBQWUsaURBQVM7QUFDeEIsc0JBQXNCLGlEQUFTO0FBQy9CLHlCQUF5QixpREFBUztBQUNsQyxjQUFjLGlEQUFTO0FBQ3ZCLHNCQUFzQixpREFBUztBQUMvQixxQkFBcUIsaURBQVM7QUFDOUIsWUFBWSxpREFBUztBQUNyQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7O0FBRUE7QUFDQSxnQ0FBZ0Msb0RBQU07O0FBRXRDO0FBQ0E7QUFDQSx3Q0FBd0M7OztBQUd4QyxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsa0ZBQVEsR0FBRztBQUNoQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0Isa0ZBQVEsR0FBRztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGdCQUFnQixrRkFBUTtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxnQkFBZ0Isa0ZBQVEsR0FBRztBQUMzQjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGdCQUFnQixrRkFBUSxHQUFHO0FBQzNCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0ZBQVE7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0ZBQVEsR0FBRztBQUNwQjtBQUNBOztBQUVBLDBCQUEwQixNQUFxQztBQUMvRDtBQUNBLFNBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQSxHQUFHOzs7QUFHSCxjQUFjLGtGQUFRLEdBQUc7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQyxnQkFBZ0Isb0RBQU07QUFDdEIsaUJBQWlCLG9EQUFNO0FBQ3ZCLGlCQUFpQixvREFBTTtBQUN2Qix3QkFBd0Isb0RBQU07QUFDOUIsb0JBQW9CLG9EQUFNO0FBQzFCO0FBQ0EsMEJBQTBCLG9EQUFNLE9BQU87O0FBRXZDLHNCQUFzQixvREFBTSx5QkFBeUI7O0FBRXJELCtCQUErQixvREFBTSxHQUFHOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBLDRGQUE0RixrRkFBUTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVOztBQUViLGdFQUFnRSxrRkFBUTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsK0dBQStHOztBQUUvRyxFQUFFLHVEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNkJBQTZCLHFEQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHLHNCQUFzQjs7QUFFekIsc0JBQXNCLHlEQUFXO0FBQ2pDLFdBQVcsa0ZBQVE7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gscUJBQXFCLHlEQUFXO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUdBQTZCOztBQUU1QyxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0ZBQVEsZ0JBQWdCO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxxQkFBcUIseURBQVc7QUFDaEM7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsNkJBQTZCLHlEQUFXO0FBQ3hDOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1R0FBNkI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrRkFBUSxnQkFBZ0I7QUFDbkM7QUFDQSxLQUFLLCtHQUErRyxrRkFBUSxHQUFHO0FBQy9IO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxzQkFBc0IseURBQVc7QUFDakM7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTs7O0FBR0EsV0FBVyxrRkFBUSxnQkFBZ0I7QUFDbkM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gseUJBQXlCLHlEQUFXO0FBQ3BDOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBLEtBQUs7QUFDTCxHQUFHLG1DQUFtQzs7QUFFdEMsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQix5REFBVztBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxpQkFBaUIseURBQVc7QUFDNUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsNEJBQTRCLHlEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsc0JBQXNCLHlEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsY0FBYyx5REFBVztBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxJQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLElBQUk7QUFDakI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpREFBUztBQUMxQix3QkFBd0IsaURBQVM7QUFDakMsd0JBQXdCLGlEQUFTO0FBQ2pDLGdCQUFnQixpREFBUztBQUN6Qix5QkFBeUIsaURBQVM7QUFDbEMsZ0JBQWdCLGlEQUFTO0FBQ3pCLGVBQWUsaURBQVM7QUFDeEIsc0JBQXNCLGlEQUFTO0FBQy9CLHNCQUFzQixpREFBUztBQUMvQix1QkFBdUIsaURBQVM7QUFDaEMseUJBQXlCLGlEQUFTO0FBQ2xDLHFCQUFxQixpREFBUztBQUM5Qix5QkFBeUIsaURBQVM7QUFDbEMsZUFBZSxpREFBUztBQUN4QixzQkFBc0IsaURBQVM7QUFDL0IseUJBQXlCLGlEQUFTO0FBQ2xDLGNBQWMsaURBQVM7QUFDdkIsc0JBQXNCLGlEQUFTO0FBQy9CLHFCQUFxQixpREFBUztBQUM5QixZQUFZLGlEQUFTO0FBQ3JCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixLQUFxQywrQkFBK0IsU0FBQztBQUM3RixnQ0FBZ0MsS0FBcUMsd0NBQXdDLFNBQUM7QUFDOUcsbUNBQW1DLEtBQXFDLDJDQUEyQyxTQUFDO0FBQ3BILHdDQUF3QyxLQUFxQyxpREFBaUQsU0FBQztBQUMvSCw0Q0FBNEMsS0FBcUMscURBQXFELFNBQUM7QUFDdkksd0NBQXdDLEtBQXFDLGdEQUFnRCxTQUFDO0FBQzlILCtCQUErQixLQUFxQyxzQ0FBc0MsU0FBQztBQUMzRyxvQkFBb0IsS0FBcUMsMEJBQTBCLFNBQUM7QUFDcEYsOEJBQThCLEtBQXFDLHNDQUFzQyxTQUFDO0FBQzFHLGlDQUFpQyxLQUFxQyx5Q0FBeUMsU0FBQztBQUNoSCwrQkFBK0IsS0FBcUMsdUNBQXVDLFNBQUU7QUFDN0csNkJBQTZCLEtBQXFDLHFDQUFxQyxTQUFFO0FBQ3pHLHNCQUFzQixLQUFxQywwQkFBMEIsU0FBRTs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLGtCQUFrQixrRkFBUTtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0ZBQVEsR0FBRztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsa0ZBQVEsR0FBRzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUMsMEJBQTBCLG9EQUFNO0FBQ2hDLG9CQUFvQixvREFBTTtBQUMxQixpQ0FBaUMsb0RBQU07QUFDdkMseUJBQXlCLG9EQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMOztBQUVBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxxREFBcUQ7QUFDckQsR0FBRywwQkFBMEI7O0FBRTdCLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTs7QUFFOUUsRUFBRSx1REFBUztBQUNYO0FBQ0EsR0FBRyxNQUFNOztBQUVULG9DQUFvQyxxREFBTztBQUMzQzs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILGdDQUFnQyxxREFBTztBQUN2Qzs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHLHFDQUFxQzs7QUFFeEMsNkJBQTZCLHlEQUFXO0FBQ3hDOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUdBQTZCOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHlCQUF5Qix5REFBVztBQUNwQzs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVHQUE2Qjs7QUFFNUMsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtGQUFRLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyw4REFBOEQ7O0FBRWpFLHdCQUF3Qix5REFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILDJCQUEyQix5REFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHlCQUF5Qix5REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHVCQUF1Qix5REFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGNBQWMseURBQVc7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEVBQUM7QUFDK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM3NzFhMjM3YjAzZDhhMDkyYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tIFwiZG93bnNoaWZ0XCI7XHJcblxyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfVVNFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1VTRVJTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsVXNlcnMod2hlcmU6IHsgT1I6IFt7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfV0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbZmluZFVzZXJzLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1VTRVJTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXJzID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcblxyXG4gIGNvbnN0IGZpbmRVc2Vyc0J1dENoaWxsID0gZGVib3VuY2UoZmluZFVzZXJzLCAzNTApO1xyXG5cclxuICByZXNldElkQ291bnRlcigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0Q29tYm9ib3hQcm9wcyxcclxuICAgIGdldFVzZXJQcm9wcyxcclxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXHJcbiAgfSA9IHVzZUNvbWJvYm94KHtcclxuICAgIHVzZXJzLFxyXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG4gICAgICBmaW5kVXNlcnNCdXRDaGlsbCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0ZWRVc2VyQ2hhbmdlKHsgc2VsZWN0ZWRVc2VyIH0pIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3VzZXIvJHtzZWxlY3RlZFVzZXIuaWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXNlclRvU3RyaW5nOiAodXNlcikgPT4gdXNlcj8ubmFtZSB8fCBgYCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFN0eWxlcz5cclxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZWFyY2hcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZvciBhbiB1c2VyXCIsXHJcbiAgICAgICAgICAgIGlkOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyBcImxvYWRpbmdcIiA6IFwiXCIsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcbiAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcERvd25JdGVtXHJcbiAgICAgICAgICAgICAgey4uLmdldFVzZXJQcm9wcyh7IHVzZXIgfSl9XHJcbiAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhdXNlcnMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnkgLCBObyB1c2VycyBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJmdW5jdGlvbiB0KHQpe3JldHVybiBudWxsIT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmMT09PXQubm9kZVR5cGV9ZnVuY3Rpb24gZSh0LGUpe3JldHVybighZXx8XCJoaWRkZW5cIiE9PXQpJiZcInZpc2libGVcIiE9PXQmJlwiY2xpcFwiIT09dH1mdW5jdGlvbiBuKHQsbil7aWYodC5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fHQuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl7dmFyIHI9Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpO3JldHVybiBlKHIub3ZlcmZsb3dZLG4pfHxlKHIub3ZlcmZsb3dYLG4pfHxmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0KXtpZighdC5vd25lckRvY3VtZW50fHwhdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KXJldHVybiBudWxsO3RyeXtyZXR1cm4gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19KHQpO3JldHVybiEhZSYmKGUuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHxlLmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpfSh0KX1yZXR1cm4hMX1mdW5jdGlvbiByKHQsZSxuLHIsaSxvLGwsZCl7cmV0dXJuIG88dCYmbD5lfHxvPnQmJmw8ZT8wOm88PXQmJmQ8PW58fGw+PWUmJmQ+PW4/by10LXI6bD5lJiZkPG58fG88dCYmZD5uP2wtZStpOjB9ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSxpKXt2YXIgbz13aW5kb3csbD1pLnNjcm9sbE1vZGUsZD1pLmJsb2NrLHU9aS5pbmxpbmUsaD1pLmJvdW5kYXJ5LGE9aS5za2lwT3ZlcmZsb3dIaWRkZW5FbGVtZW50cyxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWh9O2lmKCF0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhcmdldFwiKTtmb3IodmFyIGY9ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHM9W10scD1lO3QocCkmJmMocCk7KXtpZigocD1wLnBhcmVudE5vZGUpPT09Zil7cy5wdXNoKHApO2JyZWFrfXA9PT1kb2N1bWVudC5ib2R5JiZuKHApJiYhbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfHxuKHAsYSkmJnMucHVzaChwKX1mb3IodmFyIGc9by52aXN1YWxWaWV3cG9ydD9vLnZpc3VhbFZpZXdwb3J0LndpZHRoOmlubmVyV2lkdGgsbT1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQuaGVpZ2h0OmlubmVySGVpZ2h0LHc9d2luZG93LnNjcm9sbFh8fHBhZ2VYT2Zmc2V0LHY9d2luZG93LnNjcm9sbFl8fHBhZ2VZT2Zmc2V0LFc9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPVcuaGVpZ2h0LEg9Vy53aWR0aCx5PVcudG9wLE09Vy5yaWdodCxFPVcuYm90dG9tLFY9Vy5sZWZ0LHg9XCJzdGFydFwiPT09ZHx8XCJuZWFyZXN0XCI9PT1kP3k6XCJlbmRcIj09PWQ/RTp5K2IvMixJPVwiY2VudGVyXCI9PT11P1YrSC8yOlwiZW5kXCI9PT11P006VixDPVtdLFQ9MDtUPHMubGVuZ3RoO1QrKyl7dmFyIGs9c1tUXSxCPWsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksRD1CLmhlaWdodCxPPUIud2lkdGgsUj1CLnRvcCxYPUIucmlnaHQsWT1CLmJvdHRvbSxMPUIubGVmdDtpZihcImlmLW5lZWRlZFwiPT09bCYmeT49MCYmVj49MCYmRTw9bSYmTTw9ZyYmeT49UiYmRTw9WSYmVj49TCYmTTw9WClyZXR1cm4gQzt2YXIgUz1nZXRDb21wdXRlZFN0eWxlKGspLGo9cGFyc2VJbnQoUy5ib3JkZXJMZWZ0V2lkdGgsMTApLE49cGFyc2VJbnQoUy5ib3JkZXJUb3BXaWR0aCwxMCkscT1wYXJzZUludChTLmJvcmRlclJpZ2h0V2lkdGgsMTApLHo9cGFyc2VJbnQoUy5ib3JkZXJCb3R0b21XaWR0aCwxMCksQT0wLEY9MCxHPVwib2Zmc2V0V2lkdGhcImluIGs/ay5vZmZzZXRXaWR0aC1rLmNsaWVudFdpZHRoLWotcTowLEo9XCJvZmZzZXRIZWlnaHRcImluIGs/ay5vZmZzZXRIZWlnaHQtay5jbGllbnRIZWlnaHQtTi16OjA7aWYoZj09PWspQT1cInN0YXJ0XCI9PT1kP3g6XCJlbmRcIj09PWQ/eC1tOlwibmVhcmVzdFwiPT09ZD9yKHYsdittLG0sTix6LHYreCx2K3grYixiKTp4LW0vMixGPVwic3RhcnRcIj09PXU/STpcImNlbnRlclwiPT09dT9JLWcvMjpcImVuZFwiPT09dT9JLWc6cih3LHcrZyxnLGoscSx3K0ksdytJK0gsSCksQT1NYXRoLm1heCgwLEErdiksRj1NYXRoLm1heCgwLEYrdyk7ZWxzZXtBPVwic3RhcnRcIj09PWQ/eC1SLU46XCJlbmRcIj09PWQ/eC1ZK3orSjpcIm5lYXJlc3RcIj09PWQ/cihSLFksRCxOLHorSix4LHgrYixiKTp4LShSK0QvMikrSi8yLEY9XCJzdGFydFwiPT09dT9JLUwtajpcImNlbnRlclwiPT09dT9JLShMK08vMikrRy8yOlwiZW5kXCI9PT11P0ktWCtxK0c6cihMLFgsTyxqLHErRyxJLEkrSCxIKTt2YXIgSz1rLnNjcm9sbExlZnQsUD1rLnNjcm9sbFRvcDt4Kz1QLShBPU1hdGgubWF4KDAsTWF0aC5taW4oUCtBLGsuc2Nyb2xsSGVpZ2h0LUQrSikpKSxJKz1LLShGPU1hdGgubWF4KDAsTWF0aC5taW4oSytGLGsuc2Nyb2xsV2lkdGgtTytHKSkpfUMucHVzaCh7ZWw6ayx0b3A6QSxsZWZ0OkZ9KX1yZXR1cm4gQ31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBjb21wdXRlU2Nyb2xsSW50b1ZpZXcgZnJvbSAnY29tcHV0ZS1zY3JvbGwtaW50by12aWV3JztcblxudmFyIGlkQ291bnRlciA9IDA7XG4vKipcbiAqIEFjY2VwdHMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgaXQgaWYgaXQncyBhIGZ1bmN0aW9uXG4gKiBvciBhIG5vb3AgZnVuY3Rpb24gaWYgaXQncyBub3QuIFRoaXMgYWxsb3dzIHVzIHRvXG4gKiBhY2NlcHQgYSBjYWxsYmFjaywgYnV0IG5vdCB3b3JyeSBhYm91dCBpdCBpZiBpdCdzIG5vdFxuICogcGFzc2VkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgdGhlIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGNiVG9DYihjYikge1xuICByZXR1cm4gdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nID8gY2IgOiBub29wO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbi8qKlxuICogU2Nyb2xsIG5vZGUgaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBzY3JvbGwgaW50byB2aWV3XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtZW51Tm9kZSB0aGUgbWVudSBlbGVtZW50IG9mIHRoZSBjb21wb25lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KG5vZGUsIG1lbnVOb2RlKSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhY3Rpb25zID0gY29tcHV0ZVNjcm9sbEludG9WaWV3KG5vZGUsIHtcbiAgICBib3VuZGFyeTogbWVudU5vZGUsXG4gICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICBzY3JvbGxNb2RlOiAnaWYtbmVlZGVkJ1xuICB9KTtcbiAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsID0gX3JlZi5lbCxcbiAgICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICAgIGxlZnQgPSBfcmVmLmxlZnQ7XG4gICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2hpbGQgdGhlIGNoaWxkIG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhlIHBhcmVudCBpcyB0aGUgY2hpbGQgb3IgdGhlIGNoaWxkIGlzIGluIHRoZSBwYXJlbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzT3JDb250YWluc05vZGUocGFyZW50LCBjaGlsZCkge1xuICByZXR1cm4gcGFyZW50ID09PSBjaGlsZCB8fCBwYXJlbnQuY29udGFpbnMgJiYgcGFyZW50LmNvbnRhaW5zKGNoaWxkKTtcbn1cbi8qKlxuICogU2ltcGxlIGRlYm91bmNlIGltcGxlbWVudGF0aW9uLiBXaWxsIGNhbGwgdGhlIGdpdmVuXG4gKiBmdW5jdGlvbiBvbmNlIGFmdGVyIHRoZSB0aW1lIGdpdmVuIGhhcyBwYXNzZWQgc2luY2VcbiAqIGl0IHdhcyBsYXN0IGNhbGxlZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIHRoZSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSB0aW1lXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZSB0aGUgdGltZSB0byB3YWl0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgY2FuY2VsKCk7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgICAgZm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9LCB0aW1lKTtcbiAgfVxuXG4gIHdyYXBwZXIuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbi8qKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHRvIGNvbXBvc2UgZXZlbnQgaGFuZGxlcnMuXG4gKiBUaGV5IGFyZSBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBvbmUgb2YgdGhlbSBzZXRzXG4gKiBgZXZlbnQucHJldmVudERvd25zaGlmdERlZmF1bHQgPSB0cnVlYC5cbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZucyB0aGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZXZlbnQgaGFuZGxlciB0byBhZGQgdG8gYW4gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gY2FsbEFsbEV2ZW50SGFuZGxlcnMoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgZm5zW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZucy5zb21lKGZ1bmN0aW9uIChmbikge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnQucHJldmVudERvd25zaGlmdERlZmF1bHQgfHwgZXZlbnQuaGFzT3duUHJvcGVydHkoJ25hdGl2ZUV2ZW50JykgJiYgZXZlbnQubmF0aXZlRXZlbnQucHJldmVudERvd25zaGlmdERlZmF1bHQ7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlZnMoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgcmVmcyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIHJlZnNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZWYobm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlZikge1xuICAgICAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIFRoaXMgZ2VuZXJhdGVzIGEgdW5pcXVlIElEIGZvciBhbiBpbnN0YW5jZSBvZiBEb3duc2hpZnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHVuaXF1ZSBJRFxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgcmV0dXJuIFN0cmluZyhpZENvdW50ZXIrKyk7XG59XG4vKipcbiAqIFJlc2V0cyBpZENvdW50ZXIgdG8gMC4gVXNlZCBmb3IgU1NSLlxuICovXG5cblxuZnVuY3Rpb24gcmVzZXRJZENvdW50ZXIoKSB7XG4gIGlkQ291bnRlciA9IDA7XG59XG4vKipcbiAqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gZm9yIHN0YXR1cyBtZXNzYWdlLiBPbmx5IGFkZGVkIHdoZW4gbWVudSBpcyBvcGVuLlxuICogV2lsbCBzcGVjaWZ0IGlmIHRoZXJlIGFyZSByZXN1bHRzIGluIHRoZSBsaXN0LCBhbmQgaWYgc28sIGhvdyBtYW55LFxuICogYW5kIHdoYXQga2V5cyBhcmUgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIHRoZSBkb3duc2hpZnQgc3RhdGUgYW5kIG90aGVyIHJlbGV2YW50IHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGExMXkgc3RhdHVzIG1lc3NhZ2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEExMXlTdGF0dXNNZXNzYWdlKF9yZWYyKSB7XG4gIHZhciBpc09wZW4gPSBfcmVmMi5pc09wZW4sXG4gICAgICByZXN1bHRDb3VudCA9IF9yZWYyLnJlc3VsdENvdW50LFxuICAgICAgcHJldmlvdXNSZXN1bHRDb3VudCA9IF9yZWYyLnByZXZpb3VzUmVzdWx0Q291bnQ7XG5cbiAgaWYgKCFpc09wZW4pIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoIXJlc3VsdENvdW50KSB7XG4gICAgcmV0dXJuICdObyByZXN1bHRzIGFyZSBhdmFpbGFibGUuJztcbiAgfVxuXG4gIGlmIChyZXN1bHRDb3VudCAhPT0gcHJldmlvdXNSZXN1bHRDb3VudCkge1xuICAgIHJldHVybiByZXN1bHRDb3VudCArIFwiIHJlc3VsdFwiICsgKHJlc3VsdENvdW50ID09PSAxID8gJyBpcycgOiAncyBhcmUnKSArIFwiIGF2YWlsYWJsZSwgdXNlIHVwIGFuZCBkb3duIGFycm93IGtleXMgdG8gbmF2aWdhdGUuIFByZXNzIEVudGVyIGtleSB0byBzZWxlY3QuXCI7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFRha2VzIGFuIGFyZ3VtZW50IGFuZCBpZiBpdCdzIGFuIGFycmF5LCByZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheVxuICogb3RoZXJ3aXNlIHJldHVybnMgdGhlIGFyZ3VtZW50XG4gKiBAcGFyYW0geyp9IGFyZyB0aGUgbWF5YmUtYXJyYXlcbiAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlIHRoZSB2YWx1ZSBpZiBhcmcgaXMgZmFsc2V5IG5vdCBkZWZpbmVkXG4gKiBAcmV0dXJuIHsqfSB0aGUgYXJnIG9yIGl0J3MgZmlyc3QgaXRlbVxuICovXG5cblxuZnVuY3Rpb24gdW53cmFwQXJyYXkoYXJnLCBkZWZhdWx0VmFsdWUpIHtcbiAgYXJnID0gQXJyYXkuaXNBcnJheShhcmcpID9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKHByZWFjdCkgKi9cbiAgYXJnWzBdIDogYXJnO1xuXG4gIGlmICghYXJnICYmIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAoUClyZWFjdCBlbGVtZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIGl0J3MgYSBET00gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gaXNET01FbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gdGhlbiB3ZSBhc3N1bWUgdGhpcyBpcyByZWFjdFxuICByZXR1cm4gdHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IChQKXJlYWN0IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHByb3BzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UHJvcHMoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5wcm9wcztcbn1cbi8qKlxuICogVGhyb3dzIGEgaGVscGZ1bCBlcnJvciBtZXNzYWdlIGZvciByZXF1aXJlZCBwcm9wZXJ0aWVzLiBVc2VmdWxcbiAqIHRvIGJlIHVzZWQgYXMgYSBkZWZhdWx0IGluIGRlc3RydWN0dXJpbmcgb3Igb2JqZWN0IHBhcmFtcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBmbk5hbWUgdGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSB0aGUgcHJvcCBuYW1lXG4gKi9cblxuXG5mdW5jdGlvbiByZXF1aXJlZFByb3AoZm5OYW1lLCBwcm9wTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKFwiVGhlIHByb3BlcnR5IFxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIGlzIHJlcXVpcmVkIGluIFxcXCJcIiArIGZuTmFtZSArIFwiXFxcIlwiKTtcbn1cblxudmFyIHN0YXRlS2V5cyA9IFsnaGlnaGxpZ2h0ZWRJbmRleCcsICdpbnB1dFZhbHVlJywgJ2lzT3BlbicsICdzZWxlY3RlZEl0ZW0nLCAndHlwZSddO1xuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fSBzdGF0ZSB0aGF0IGlzIHJlbGV2YW50IHRvIGRvd25zaGlmdFxuICovXG5cbmZ1bmN0aW9uIHBpY2tTdGF0ZShzdGF0ZSkge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge307XG4gIHN0YXRlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXN1bHRba10gPSBzdGF0ZVtrXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBUaGlzIHdpbGwgcGVyZm9ybSBhIHNoYWxsb3cgbWVyZ2Ugb2YgdGhlIGdpdmVuIHN0YXRlIG9iamVjdFxuICogd2l0aCB0aGUgc3RhdGUgY29taW5nIGZyb20gcHJvcHNcbiAqIChmb3IgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IHNjZW5hcmlvKVxuICogVGhpcyBpcyB1c2VkIGluIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb25zIHNvIHRoZXkncmUgcmVmZXJlbmNpbmdcbiAqIHRoZSByaWdodCBzdGF0ZSByZWdhcmRsZXNzIG9mIHdoZXJlIGl0IGNvbWVzIGZyb20uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50L2hvb2suXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIHByb3BzIHRoYXQgbWF5IGNvbnRhaW4gY29udHJvbGxlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbWVyZ2VkIGNvbnRyb2xsZWQgc3RhdGUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZTdGF0ZSwga2V5KSB7XG4gICAgcHJldlN0YXRlW2tleV0gPSBpc0NvbnRyb2xsZWRQcm9wKHByb3BzLCBrZXkpID8gcHJvcHNba2V5XSA6IHN0YXRlW2tleV07XG4gICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfSwge30pO1xufVxuLyoqXG4gKiBUaGlzIGRldGVybWluZXMgd2hldGhlciBhIHByb3AgaXMgYSBcImNvbnRyb2xsZWQgcHJvcFwiIG1lYW5pbmcgaXQgaXNcbiAqIHN0YXRlIHdoaWNoIGlzIGNvbnRyb2xsZWQgYnkgdGhlIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQgcmF0aGVyXG4gKiB0aGFuIHdpdGhpbiB0aGlzIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIHByb3BzIHRoYXQgbWF5IGNvbnRhaW4gY29udHJvbGxlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBrZXkgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQgaXMgYSBjb250cm9sbGVkIGNvbnRyb2xsZWQgcHJvcFxuICovXG5cblxuZnVuY3Rpb24gaXNDb250cm9sbGVkUHJvcChwcm9wcywga2V5KSB7XG4gIHJldHVybiBwcm9wc1trZXldICE9PSB1bmRlZmluZWQ7XG59XG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlICdrZXknIHByb3BlcnR5IG9mIGEgS2V5Ym9hcmRFdmVudCBpbiBJRS9FZGdlXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgYSBrZXlib2FyZEV2ZW50IG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBrZXlib2FyZCBrZXlcbiAqL1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KSB7XG4gIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKGllKSAqL1xuXG4gIGlmIChrZXlDb2RlID49IDM3ICYmIGtleUNvZGUgPD0gNDAgJiYga2V5LmluZGV4T2YoJ0Fycm93JykgIT09IDApIHtcbiAgICByZXR1cm4gXCJBcnJvd1wiICsga2V5O1xuICB9XG5cbiAgcmV0dXJuIGtleTtcbn1cbi8qKlxuICogU2ltcGxlIGNoZWNrIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb2JqZWN0IGxpdGVyYWxcbiAqIEBwYXJhbSB7Kn0gb2JqIGFueSB0aGluZ3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQncyBvYmplY3QgbGl0ZXJhbFxuICovXG5cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV3IGluZGV4IGluIHRoZSBsaXN0LCBpbiBhIGNpcmN1bGFyIHdheS4gSWYgbmV4dCB2YWx1ZSBpcyBvdXQgb2YgYm9uZHMgZnJvbSB0aGUgdG90YWwsXG4gKiBpdCB3aWxsIHdyYXAgdG8gZWl0aGVyIDAgb3IgaXRlbUNvdW50IC0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbW92ZUFtb3VudCBOdW1iZXIgb2YgcG9zaXRpb25zIHRvIG1vdmUuIE5lZ2F0aXZlIHRvIG1vdmUgYmFja3dhcmRzLCBwb3NpdGl2ZSBmb3J3YXJkcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiYXNlSW5kZXggVGhlIGluaXRpYWwgcG9zaXRpb24gdG8gbW92ZSBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2V0SXRlbU5vZGVGcm9tSW5kZXggVXNlZCB0byBjaGVjayBpZiBpdGVtIGlzIGRpc2FibGVkLlxuICogQHBhcmFtIHtib29sZWFufSBjaXJjdWxhciBTcGVjaWZ5IGlmIG5hdmlnYXRpb24gaXMgY2lyY3VsYXIuIERlZmF1bHQgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBuZXcgaW5kZXggYWZ0ZXIgdGhlIG1vdmUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXROZXh0V3JhcHBpbmdJbmRleChtb3ZlQW1vdW50LCBiYXNlSW5kZXgsIGl0ZW1Db3VudCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGNpcmN1bGFyKSB7XG4gIGlmIChjaXJjdWxhciA9PT0gdm9pZCAwKSB7XG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHZhciBpdGVtc0xhc3RJbmRleCA9IGl0ZW1Db3VudCAtIDE7XG5cbiAgaWYgKHR5cGVvZiBiYXNlSW5kZXggIT09ICdudW1iZXInIHx8IGJhc2VJbmRleCA8IDAgfHwgYmFzZUluZGV4ID49IGl0ZW1Db3VudCkge1xuICAgIGJhc2VJbmRleCA9IG1vdmVBbW91bnQgPiAwID8gLTEgOiBpdGVtc0xhc3RJbmRleCArIDE7XG4gIH1cblxuICB2YXIgbmV3SW5kZXggPSBiYXNlSW5kZXggKyBtb3ZlQW1vdW50O1xuXG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IGNpcmN1bGFyID8gaXRlbXNMYXN0SW5kZXggOiAwO1xuICB9IGVsc2UgaWYgKG5ld0luZGV4ID4gaXRlbXNMYXN0SW5kZXgpIHtcbiAgICBuZXdJbmRleCA9IGNpcmN1bGFyID8gMCA6IGl0ZW1zTGFzdEluZGV4O1xuICB9XG5cbiAgdmFyIG5vbkRpc2FibGVkTmV3SW5kZXggPSBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleChtb3ZlQW1vdW50LCBuZXdJbmRleCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgY2lyY3VsYXIpO1xuXG4gIGlmIChub25EaXNhYmxlZE5ld0luZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBiYXNlSW5kZXggPj0gaXRlbUNvdW50ID8gLTEgOiBiYXNlSW5kZXg7XG4gIH1cblxuICByZXR1cm4gbm9uRGlzYWJsZWROZXdJbmRleDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpbmRleCBpbiB0aGUgbGlzdCBvZiBhbiBpdGVtIHRoYXQgaXMgbm90IGRpc2FibGVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBtb3ZlQW1vdW50IE51bWJlciBvZiBwb3NpdGlvbnMgdG8gbW92ZS4gTmVnYXRpdmUgdG8gbW92ZSBiYWNrd2FyZHMsIHBvc2l0aXZlIGZvcndhcmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJhc2VJbmRleCBUaGUgaW5pdGlhbCBwb3NpdGlvbiB0byBtb3ZlIGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRJdGVtTm9kZUZyb21JbmRleCBVc2VkIHRvIGNoZWNrIGlmIGl0ZW0gaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNpcmN1bGFyIFNwZWNpZnkgaWYgbmF2aWdhdGlvbiBpcyBjaXJjdWxhci4gRGVmYXVsdCBpcyB0cnVlLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIG5ldyBpbmRleC4gUmV0dXJucyBiYXNlSW5kZXggaWYgaXRlbSBpcyBub3QgZGlzYWJsZWQuIFJldHVybnMgbmV4dCBub24tZGlzYWJsZWQgaXRlbSBvdGhlcndpc2UuIElmIG5vIG5vbi1kaXNhYmxlZCBmb3VuZCBpdCB3aWxsIHJldHVybiAtMS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE5leHROb25EaXNhYmxlZEluZGV4KG1vdmVBbW91bnQsIGJhc2VJbmRleCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgY2lyY3VsYXIpIHtcbiAgdmFyIGN1cnJlbnRFbGVtZW50Tm9kZSA9IGdldEl0ZW1Ob2RlRnJvbUluZGV4KGJhc2VJbmRleCk7XG5cbiAgaWYgKCFjdXJyZW50RWxlbWVudE5vZGUgfHwgIWN1cnJlbnRFbGVtZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gYmFzZUluZGV4O1xuICB9XG5cbiAgaWYgKG1vdmVBbW91bnQgPiAwKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSBiYXNlSW5kZXggKyAxOyBpbmRleCA8IGl0ZW1Db3VudDsgaW5kZXgrKykge1xuICAgICAgaWYgKCFnZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2luZGV4ID0gYmFzZUluZGV4IC0gMTsgX2luZGV4ID49IDA7IF9pbmRleC0tKSB7XG4gICAgICBpZiAoIWdldEl0ZW1Ob2RlRnJvbUluZGV4KF9pbmRleCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybiBfaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNpcmN1bGFyKSB7XG4gICAgcmV0dXJuIG1vdmVBbW91bnQgPiAwID8gZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpIDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoLTEsIGl0ZW1Db3VudCAtIDEsIGl0ZW1Db3VudCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGV2ZW50IHRhcmdldCBpcyB3aXRoaW4gdGhlIGRvd25zaGlmdCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXQgVGFyZ2V0IHRvIGNoZWNrLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBkb3duc2hpZnRFbGVtZW50cyBUaGUgZWxlbWVudHMgdGhhdCBmb3JtIGRvd25zaGlmdCAobGlzdCwgdG9nZ2xlIGJ1dHRvbiBldGMpLlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICogQHBhcmFtIHtib29sZWFufSBjaGVja0FjdGl2ZUVsZW1lbnQgV2hldGhlciB0byBhbHNvIGNoZWNrIGFjdGl2ZUVsZW1lbnQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgaXMgd2l0aGluIGRvd25zaGlmdCBlbGVtZW50cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRhcmdldFdpdGhpbkRvd25zaGlmdCh0YXJnZXQsIGRvd25zaGlmdEVsZW1lbnRzLCBkb2N1bWVudCwgY2hlY2tBY3RpdmVFbGVtZW50KSB7XG4gIGlmIChjaGVja0FjdGl2ZUVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgIGNoZWNrQWN0aXZlRWxlbWVudCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZG93bnNoaWZ0RWxlbWVudHMuc29tZShmdW5jdGlvbiAoY29udGV4dE5vZGUpIHtcbiAgICByZXR1cm4gY29udGV4dE5vZGUgJiYgKGlzT3JDb250YWluc05vZGUoY29udGV4dE5vZGUsIHRhcmdldCkgfHwgY2hlY2tBY3RpdmVFbGVtZW50ICYmIGlzT3JDb250YWluc05vZGUoY29udGV4dE5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29udHJvbGxlZFVuY2hhbmdlZChzdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgd2FybmluZ0Rlc2NyaXB0aW9uID0gXCJUaGlzIHByb3Agc2hvdWxkIG5vdCBzd2l0Y2ggZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgRG93bnNoaWZ0IGVsZW1lbnQgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgY29tcG9uZW50LiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3duc2hpZnQtanMvZG93bnNoaWZ0I2NvbnRyb2wtcHJvcHNcIjtcbiAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3BLZXkpIHtcbiAgICBpZiAocHJldlByb3BzW3Byb3BLZXldICE9PSB1bmRlZmluZWQgJiYgbmV4dFByb3BzW3Byb3BLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBBIGNvbXBvbmVudCBoYXMgY2hhbmdlZCB0aGUgY29udHJvbGxlZCBwcm9wIFxcXCJcIiArIHByb3BLZXkgKyBcIlxcXCIgdG8gYmUgdW5jb250cm9sbGVkLiBcIiArIHdhcm5pbmdEZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIGlmIChwcmV2UHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCAmJiBuZXh0UHJvcHNbcHJvcEtleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IEEgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSB1bmNvbnRyb2xsZWQgcHJvcCBcXFwiXCIgKyBwcm9wS2V5ICsgXCJcXFwiIHRvIGJlIGNvbnRyb2xsZWQuIFwiICsgd2FybmluZ0Rlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgY2xlYW51cFN0YXR1cyA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgZ2V0U3RhdHVzRGl2KCkudGV4dENvbnRlbnQgPSAnJztcbn0sIDUwMCk7XG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0dXMgdGhlIHN0YXR1cyBtZXNzYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnRQcm9wIGRvY3VtZW50IHBhc3NlZCBieSB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBzZXRTdGF0dXMoc3RhdHVzLCBkb2N1bWVudFByb3ApIHtcbiAgdmFyIGRpdiA9IGdldFN0YXR1c0Rpdihkb2N1bWVudFByb3ApO1xuXG4gIGlmICghc3RhdHVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGl2LnRleHRDb250ZW50ID0gc3RhdHVzO1xuICBjbGVhbnVwU3RhdHVzKCk7XG59XG4vKipcbiAqIEdldCB0aGUgc3RhdHVzIG5vZGUgb3IgY3JlYXRlIGl0IGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnRQcm9wIGRvY3VtZW50IHBhc3NlZCBieSB0aGUgdXNlci5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSB0aGUgc3RhdHVzIG5vZGUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRTdGF0dXNEaXYoZG9jdW1lbnRQcm9wKSB7XG4gIGlmIChkb2N1bWVudFByb3AgPT09IHZvaWQgMCkge1xuICAgIGRvY3VtZW50UHJvcCA9IGRvY3VtZW50O1xuICB9XG5cbiAgdmFyIHN0YXR1c0RpdiA9IGRvY3VtZW50UHJvcC5nZXRFbGVtZW50QnlJZCgnYTExeS1zdGF0dXMtbWVzc2FnZScpO1xuXG4gIGlmIChzdGF0dXNEaXYpIHtcbiAgICByZXR1cm4gc3RhdHVzRGl2O1xuICB9XG5cbiAgc3RhdHVzRGl2ID0gZG9jdW1lbnRQcm9wLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhMTF5LXN0YXR1cy1tZXNzYWdlJyk7XG4gIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc3RhdHVzJyk7XG4gIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgc3RhdHVzRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1yZWxldmFudCcsICdhZGRpdGlvbnMgdGV4dCcpO1xuICBPYmplY3QuYXNzaWduKHN0YXR1c0Rpdi5zdHlsZSwge1xuICAgIGJvcmRlcjogJzAnLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxcHgnXG4gIH0pO1xuICBkb2N1bWVudFByb3AuYm9keS5hcHBlbmRDaGlsZChzdGF0dXNEaXYpO1xuICByZXR1cm4gc3RhdHVzRGl2O1xufVxuXG52YXIgdW5rbm93biA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV91bmtub3duX18nIDogMDtcbnZhciBtb3VzZVVwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX21vdXNldXBfXycgOiAxO1xudmFyIGl0ZW1Nb3VzZUVudGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2l0ZW1fbW91c2VlbnRlcl9fJyA6IDI7XG52YXIga2V5RG93bkFycm93VXAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9hcnJvd191cF9fJyA6IDM7XG52YXIga2V5RG93bkFycm93RG93biA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2Fycm93X2Rvd25fXycgOiA0O1xudmFyIGtleURvd25Fc2NhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9lc2NhcGVfXycgOiA1O1xudmFyIGtleURvd25FbnRlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2VudGVyX18nIDogNjtcbnZhciBrZXlEb3duSG9tZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX2hvbWVfXycgOiA3O1xudmFyIGtleURvd25FbmQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9lbmRfXycgOiA4O1xudmFyIGNsaWNrSXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9jbGlja19pdGVtX18nIDogOTtcbnZhciBibHVySW5wdXQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfYmx1cl9pbnB1dF9fJyA6IDEwO1xudmFyIGNoYW5nZUlucHV0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2NoYW5nZV9pbnB1dF9fJyA6IDExO1xudmFyIGtleURvd25TcGFjZUJ1dHRvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9rZXlkb3duX3NwYWNlX2J1dHRvbl9fJyA6IDEyO1xudmFyIGNsaWNrQnV0dG9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2NsaWNrX2J1dHRvbl9fJyA6IDEzO1xudmFyIGJsdXJCdXR0b24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfYmx1cl9idXR0b25fXycgOiAxNDtcbnZhciBjb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfY29udHJvbGxlZF9wcm9wX3VwZGF0ZWRfc2VsZWN0ZWRfaXRlbV9fJyA6IDE1O1xudmFyIHRvdWNoRW5kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX3RvdWNoZW5kX18nIDogMTY7XG5cbnZhciBzdGF0ZUNoYW5nZVR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIHVua25vd246IHVua25vd24sXG4gIG1vdXNlVXA6IG1vdXNlVXAsXG4gIGl0ZW1Nb3VzZUVudGVyOiBpdGVtTW91c2VFbnRlcixcbiAga2V5RG93bkFycm93VXA6IGtleURvd25BcnJvd1VwLFxuICBrZXlEb3duQXJyb3dEb3duOiBrZXlEb3duQXJyb3dEb3duLFxuICBrZXlEb3duRXNjYXBlOiBrZXlEb3duRXNjYXBlLFxuICBrZXlEb3duRW50ZXI6IGtleURvd25FbnRlcixcbiAga2V5RG93bkhvbWU6IGtleURvd25Ib21lLFxuICBrZXlEb3duRW5kOiBrZXlEb3duRW5kLFxuICBjbGlja0l0ZW06IGNsaWNrSXRlbSxcbiAgYmx1cklucHV0OiBibHVySW5wdXQsXG4gIGNoYW5nZUlucHV0OiBjaGFuZ2VJbnB1dCxcbiAga2V5RG93blNwYWNlQnV0dG9uOiBrZXlEb3duU3BhY2VCdXR0b24sXG4gIGNsaWNrQnV0dG9uOiBjbGlja0J1dHRvbixcbiAgYmx1ckJ1dHRvbjogYmx1ckJ1dHRvbixcbiAgY29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtOiBjb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0sXG4gIHRvdWNoRW5kOiB0b3VjaEVuZFxufSk7XG5cbnZhciBEb3duc2hpZnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICB2YXIgRG93bnNoaWZ0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKERvd25zaGlmdCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEb3duc2hpZnQoX3Byb3BzKSB7XG4gICAgICB2YXIgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgX3Byb3BzKSB8fCB0aGlzO1xuXG4gICAgICBfdGhpcy5pZCA9IF90aGlzLnByb3BzLmlkIHx8IFwiZG93bnNoaWZ0LVwiICsgZ2VuZXJhdGVJZCgpO1xuICAgICAgX3RoaXMubWVudUlkID0gX3RoaXMucHJvcHMubWVudUlkIHx8IF90aGlzLmlkICsgXCItbWVudVwiO1xuICAgICAgX3RoaXMubGFiZWxJZCA9IF90aGlzLnByb3BzLmxhYmVsSWQgfHwgX3RoaXMuaWQgKyBcIi1sYWJlbFwiO1xuICAgICAgX3RoaXMuaW5wdXRJZCA9IF90aGlzLnByb3BzLmlucHV0SWQgfHwgX3RoaXMuaWQgKyBcIi1pbnB1dFwiO1xuXG4gICAgICBfdGhpcy5nZXRJdGVtSWQgPSBfdGhpcy5wcm9wcy5nZXRJdGVtSWQgfHwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5pZCArIFwiLWl0ZW0tXCIgKyBpbmRleDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlucHV0ID0gbnVsbDtcbiAgICAgIF90aGlzLml0ZW1zID0gW107XG4gICAgICBfdGhpcy5pdGVtQ291bnQgPSBudWxsO1xuICAgICAgX3RoaXMucHJldmlvdXNSZXN1bHRDb3VudCA9IDA7XG4gICAgICBfdGhpcy50aW1lb3V0SWRzID0gW107XG5cbiAgICAgIF90aGlzLmludGVybmFsU2V0VGltZW91dCA9IGZ1bmN0aW9uIChmbiwgdGltZSkge1xuICAgICAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy50aW1lb3V0SWRzID0gX3RoaXMudGltZW91dElkcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICE9PSBpZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9LCB0aW1lKTtcblxuICAgICAgICBfdGhpcy50aW1lb3V0SWRzLnB1c2goaWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0SXRlbUNvdW50ID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgIF90aGlzLml0ZW1Db3VudCA9IGNvdW50O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMudW5zZXRJdGVtQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLml0ZW1Db3VudCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4ID0gZnVuY3Rpb24gKGhpZ2hsaWdodGVkSW5kZXgsIG90aGVyU3RhdGVUb1NldCkge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0ZWRJbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG90aGVyU3RhdGVUb1NldCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSBwaWNrU3RhdGUob3RoZXJTdGF0ZVRvU2V0KTtcblxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4XG4gICAgICAgIH0sIG90aGVyU3RhdGVUb1NldCkpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGlzT3BlbjogX3RoaXMucHJvcHMuZGVmYXVsdElzT3BlblxuICAgICAgICB9LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZWxlY3RJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIG90aGVyU3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0gcGlja1N0YXRlKG90aGVyU3RhdGVUb1NldCk7XG5cbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgICAgaXNPcGVuOiBfdGhpcy5wcm9wcy5kZWZhdWx0SXNPcGVuLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogaXRlbSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBfdGhpcy5wcm9wcy5pdGVtVG9TdHJpbmcoaXRlbSlcbiAgICAgICAgfSwgb3RoZXJTdGF0ZVRvU2V0KSwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2VsZWN0SXRlbUF0SW5kZXggPSBmdW5jdGlvbiAoaXRlbUluZGV4LCBvdGhlclN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIHZhciBpdGVtID0gX3RoaXMuaXRlbXNbaXRlbUluZGV4XTtcblxuICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2VsZWN0SXRlbShpdGVtLCBvdGhlclN0YXRlVG9TZXQsIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNlbGVjdEhpZ2hsaWdodGVkSXRlbSA9IGZ1bmN0aW9uIChvdGhlclN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zZWxlY3RJdGVtQXRJbmRleChfdGhpcy5nZXRTdGF0ZSgpLmhpZ2hsaWdodGVkSW5kZXgsIG90aGVyU3RhdGVUb1NldCwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICB2YXIgaXNJdGVtU2VsZWN0ZWQsIG9uQ2hhbmdlQXJnO1xuICAgICAgICB2YXIgb25TdGF0ZUNoYW5nZUFyZyA9IHt9O1xuICAgICAgICB2YXIgaXNTdGF0ZVRvU2V0RnVuY3Rpb24gPSB0eXBlb2Ygc3RhdGVUb1NldCA9PT0gJ2Z1bmN0aW9uJzsgLy8gd2Ugd2FudCB0byBjYWxsIGBvbklucHV0VmFsdWVDaGFuZ2VgIGJlZm9yZSB0aGUgYHNldFN0YXRlYCBjYWxsXG4gICAgICAgIC8vIHNvIHNvbWVvbmUgY29udHJvbGxpbmcgdGhlIGBpbnB1dFZhbHVlYCBzdGF0ZSBnZXRzIG5vdGlmaWVkIG9mXG4gICAgICAgIC8vIHRoZSBpbnB1dCBjaGFuZ2UgYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyBhdm9pZHMgaXNzdWVzIHdpdGhcbiAgICAgICAgLy8gcHJlc2VydmluZyB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rvd25zaGlmdC1qcy9kb3duc2hpZnQvaXNzdWVzLzIxNyBmb3IgbW9yZSBpbmZvLlxuXG4gICAgICAgIGlmICghaXNTdGF0ZVRvU2V0RnVuY3Rpb24gJiYgc3RhdGVUb1NldC5oYXNPd25Qcm9wZXJ0eSgnaW5wdXRWYWx1ZScpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25JbnB1dFZhbHVlQ2hhbmdlKHN0YXRlVG9TZXQuaW5wdXRWYWx1ZSwgX2V4dGVuZHMoe30sIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpLCBzdGF0ZVRvU2V0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgc3RhdGUgPSBfdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgdmFyIG5ld1N0YXRlVG9TZXQgPSBpc1N0YXRlVG9TZXRGdW5jdGlvbiA/IHN0YXRlVG9TZXQoc3RhdGUpIDogc3RhdGVUb1NldDsgLy8gWW91ciBvd24gZnVuY3Rpb24gdGhhdCBjb3VsZCBtb2RpZnkgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBzZXQuXG5cbiAgICAgICAgICBuZXdTdGF0ZVRvU2V0ID0gX3RoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKHN0YXRlLCBuZXdTdGF0ZVRvU2V0KTsgLy8gY2hlY2tzIGlmIGFuIGl0ZW0gaXMgc2VsZWN0ZWQsIHJlZ2FyZGxlc3Mgb2YgaWYgaXQncyBkaWZmZXJlbnQgZnJvbVxuICAgICAgICAgIC8vIHdoYXQgd2FzIHNlbGVjdGVkIGJlZm9yZVxuICAgICAgICAgIC8vIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIG9uU2VsZWN0IGFuZCBvbkNoYW5nZSBjYWxsYmFja3Mgc2hvdWxkIGJlIGNhbGxlZFxuXG4gICAgICAgICAgaXNJdGVtU2VsZWN0ZWQgPSBuZXdTdGF0ZVRvU2V0Lmhhc093blByb3BlcnR5KCdzZWxlY3RlZEl0ZW0nKTsgLy8gdGhpcyBrZWVwcyB0cmFjayBvZiB0aGUgb2JqZWN0IHdlIHdhbnQgdG8gY2FsbCB3aXRoIHNldFN0YXRlXG5cbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0ge307IC8vIHRoaXMgaXMganVzdCB1c2VkIHRvIHRlbGwgd2hldGhlciB0aGUgc3RhdGUgY2hhbmdlZFxuXG4gICAgICAgICAgdmFyIG5leHRGdWxsU3RhdGUgPSB7fTsgLy8gd2UgbmVlZCB0byBjYWxsIG9uIGNoYW5nZSBpZiB0aGUgb3V0c2lkZSB3b3JsZCBpcyBjb250cm9sbGluZyBhbnkgb2Ygb3VyIHN0YXRlXG4gICAgICAgICAgLy8gYW5kIHdlJ3JlIHRyeWluZyB0byB1cGRhdGUgdGhhdCBzdGF0ZS4gT1IgaWYgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCBhbmQgd2UncmVcbiAgICAgICAgICAvLyB0cnlpbmcgdG8gdXBkYXRlIHRoZSBzZWxlY3Rpb25cblxuICAgICAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCAmJiBuZXdTdGF0ZVRvU2V0LnNlbGVjdGVkSXRlbSAhPT0gc3RhdGUuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBvbkNoYW5nZUFyZyA9IG5ld1N0YXRlVG9TZXQuc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld1N0YXRlVG9TZXQudHlwZSA9IG5ld1N0YXRlVG9TZXQudHlwZSB8fCB1bmtub3duO1xuICAgICAgICAgIE9iamVjdC5rZXlzKG5ld1N0YXRlVG9TZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgLy8gb25TdGF0ZUNoYW5nZUFyZyBzaG91bGQgb25seSBoYXZlIHRoZSBzdGF0ZSB0aGF0IGlzXG4gICAgICAgICAgICAvLyBhY3R1YWxseSBjaGFuZ2luZ1xuICAgICAgICAgICAgaWYgKHN0YXRlW2tleV0gIT09IG5ld1N0YXRlVG9TZXRba2V5XSkge1xuICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlQXJnW2tleV0gPSBuZXdTdGF0ZVRvU2V0W2tleV07XG4gICAgICAgICAgICB9IC8vIHRoZSB0eXBlIGlzIHVzZWZ1bCBmb3IgdGhlIG9uU3RhdGVDaGFuZ2VBcmdcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkb24ndCBhY3R1YWxseSB3YW50IHRvIHNldCBpdCBpbiBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gdW5kb2N1bWVudGVkIGZlYXR1cmUgZm9yIG5vdy4uLiBOb3QgYWxsIGludGVybmFsU2V0U3RhdGVcbiAgICAgICAgICAgIC8vIGNhbGxzIHN1cHBvcnQgaXQgYW5kIEknbSBub3QgY2VydGFpbiB3ZSB3YW50IHRoZW0gdG8geWV0LlxuICAgICAgICAgICAgLy8gQnV0IGl0IGVuYWJsZXMgdXNlcnMgY29udHJvbGxpbmcgdGhlIGlzT3BlbiBzdGF0ZSB0byBrbm93IHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBpc09wZW4gc3RhdGUgY2hhbmdlcyBkdWUgdG8gbW91c2V1cCBldmVudHMgd2hpY2ggaXMgcXVpdGUgaGFuZHkuXG5cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3R5cGUnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dEZ1bGxTdGF0ZVtrZXldID0gbmV3U3RhdGVUb1NldFtrZXldOyAvLyBpZiBpdCdzIGNvbWluZyBmcm9tIHByb3BzLCB0aGVuIHdlIGRvbid0IGNhcmUgdG8gc2V0IGl0IGludGVybmFsbHlcblxuICAgICAgICAgICAgaWYgKCFpc0NvbnRyb2xsZWRQcm9wKF90aGlzLnByb3BzLCBrZXkpKSB7XG4gICAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV3U3RhdGVUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pOyAvLyBpZiBzdGF0ZVRvU2V0IGlzIGEgZnVuY3Rpb24sIHRoZW4gd2Ugd2VyZW4ndCBhYmxlIHRvIGNhbGwgb25JbnB1dFZhbHVlQ2hhbmdlXG4gICAgICAgICAgLy8gZWFybGllciwgc28gd2UnbGwgY2FsbCBpdCBub3cgdGhhdCB3ZSBrbm93IHdoYXQgdGhlIGlucHV0VmFsdWUgc3RhdGUgd2lsbCBiZS5cblxuICAgICAgICAgIGlmIChpc1N0YXRlVG9TZXRGdW5jdGlvbiAmJiBuZXdTdGF0ZVRvU2V0Lmhhc093blByb3BlcnR5KCdpbnB1dFZhbHVlJykpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uSW5wdXRWYWx1ZUNoYW5nZShuZXdTdGF0ZVRvU2V0LmlucHV0VmFsdWUsIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSwgbmV3U3RhdGVUb1NldCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBjYWxsIHRoZSBwcm92aWRlZCBjYWxsYmFjayBpZiBpdCdzIGEgZnVuY3Rpb25cbiAgICAgICAgICBjYlRvQ2IoY2IpKCk7IC8vIG9ubHkgY2FsbCB0aGUgb25TdGF0ZUNoYW5nZSBhbmQgb25DaGFuZ2UgY2FsbGJhY2tzIGlmXG4gICAgICAgICAgLy8gd2UgaGF2ZSByZWxldmFudCBpbmZvcm1hdGlvbiB0byBwYXNzIHRoZW0uXG5cbiAgICAgICAgICB2YXIgaGFzTW9yZVN0YXRlVGhhblR5cGUgPSBPYmplY3Qua2V5cyhvblN0YXRlQ2hhbmdlQXJnKS5sZW5ndGggPiAxO1xuXG4gICAgICAgICAgaWYgKGhhc01vcmVTdGF0ZVRoYW5UeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKG9uU3RhdGVDaGFuZ2VBcmcsIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uU2VsZWN0KHN0YXRlVG9TZXQuc2VsZWN0ZWRJdGVtLCBfdGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9uQ2hhbmdlQXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKG9uQ2hhbmdlQXJnLCBfdGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgfSAvLyB0aGlzIGlzIGN1cnJlbnRseSB1bmRvY3VtZW50ZWQgYW5kIHRoZXJlZm9yZSBzdWJqZWN0IHRvIGNoYW5nZVxuICAgICAgICAgIC8vIFdlJ2xsIHRyeSB0byBub3QgYnJlYWsgaXQsIGJ1dCBqdXN0IGJlIHdhcm5lZC5cblxuXG4gICAgICAgICAgX3RoaXMucHJvcHMub25Vc2VyQWN0aW9uKG9uU3RhdGVDaGFuZ2VBcmcsIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yb290UmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9yb290Tm9kZSA9IG5vZGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRSb290UHJvcHMgPSBmdW5jdGlvbiAoX3RlbXAsIF90ZW1wMikge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgICAgICBfcmVmJHJlZktleSA9IF9yZWYucmVmS2V5LFxuICAgICAgICAgICAgcmVmS2V5ID0gX3JlZiRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZiRyZWZLZXksXG4gICAgICAgICAgICByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJyZWZLZXlcIiwgXCJyZWZcIl0pO1xuXG4gICAgICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgICAgICBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPSBfcmVmMi5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICAgICAgc3VwcHJlc3NSZWZFcnJvciA9IF9yZWYyJHN1cHByZXNzUmVmRXJybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdXBwcmVzc1JlZkVycm87XG5cbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIGluIHRoZSByZW5kZXIgdG8ga25vdyB3aGV0aGVyIHRoZSB1c2VyIGhhcyBjYWxsZWQgZ2V0Um9vdFByb3BzLlxuICAgICAgICAvLyBJdCB1c2VzIHRoYXQgdG8ga25vdyB3aGV0aGVyIHRvIGFwcGx5IHRoZSBwcm9wcyBhdXRvbWF0aWNhbGx5XG4gICAgICAgIF90aGlzLmdldFJvb3RQcm9wcy5jYWxsZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5nZXRSb290UHJvcHMucmVmS2V5ID0gcmVmS2V5O1xuICAgICAgICBfdGhpcy5nZXRSb290UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHN1cHByZXNzUmVmRXJyb3I7XG5cbiAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlID0gX3RoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlLmlzT3BlbjtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBfdGhpcy5yb290UmVmKSwgX2V4dGVuZHMyLnJvbGUgPSAnY29tYm9ib3gnLCBfZXh0ZW5kczJbJ2FyaWEtZXhwYW5kZWQnXSA9IGlzT3BlbiwgX2V4dGVuZHMyWydhcmlhLWhhc3BvcHVwJ10gPSAnbGlzdGJveCcsIF9leHRlbmRzMlsnYXJpYS1vd25zJ10gPSBpc09wZW4gPyBfdGhpcy5tZW51SWQgOiBudWxsLCBfZXh0ZW5kczJbJ2FyaWEtbGFiZWxsZWRieSddID0gX3RoaXMubGFiZWxJZCwgX2V4dGVuZHMyKSwgcmVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5rZXlEb3duSGFuZGxlcnMgPSB7XG4gICAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ2V0U3RhdGUoKS5pc09wZW4pIHtcbiAgICAgICAgICAgIHZhciBhbW91bnQgPSBldmVudC5zaGlmdEtleSA/IDUgOiAxO1xuICAgICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbmRleChhbW91bnQsIHtcbiAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93RG93blxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93RG93blxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gX3RoaXMyLmdldEl0ZW1Db3VudCgpO1xuXG4gICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiRnZXRTdGF0ZSA9IF90aGlzMi5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMyJGdldFN0YXRlLmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV4dEhpZ2hsaWdodGVkSW5kZXggPSBnZXROZXh0V3JhcHBpbmdJbmRleCgxLCBoaWdobGlnaHRlZEluZGV4LCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczIuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXh0SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93RG93blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpLmlzT3Blbikge1xuICAgICAgICAgICAgdmFyIGFtb3VudCA9IGV2ZW50LnNoaWZ0S2V5ID8gLTUgOiAtMTtcbiAgICAgICAgICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW5kZXgoYW1vdW50LCB7XG4gICAgICAgICAgICAgIHR5cGU6IGtleURvd25BcnJvd1VwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dVcFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gX3RoaXMzLmdldEl0ZW1Db3VudCgpO1xuXG4gICAgICAgICAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMyRnZXRTdGF0ZSA9IF90aGlzMy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMzJGdldFN0YXRlLmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV4dEhpZ2hsaWdodGVkSW5kZXggPSBnZXROZXh0V3JhcHBpbmdJbmRleCgtMSwgaGlnaGxpZ2h0ZWRJbmRleCwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMzLnNldEhpZ2hsaWdodGVkSW5kZXgobmV4dEhpZ2hsaWdodGVkSW5kZXgsIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGtleURvd25BcnJvd1VwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgRW50ZXI6IGZ1bmN0aW9uIEVudGVyKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyMjkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGUyID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTIuaXNPcGVuLFxuICAgICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGUyLmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgICAgICBpZiAoaXNPcGVuICYmIGhpZ2hsaWdodGVkSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1toaWdobGlnaHRlZEluZGV4XTtcbiAgICAgICAgICAgIHZhciBpdGVtTm9kZSA9IHRoaXMuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaGlnaGxpZ2h0ZWRJbmRleCk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbU5vZGUgJiYgaXRlbU5vZGUuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RIaWdobGlnaHRlZEl0ZW0oe1xuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duRW50ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgRXNjYXBlOiBmdW5jdGlvbiBFc2NhcGUoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVzZXQoX2V4dGVuZHMoe1xuICAgICAgICAgICAgdHlwZToga2V5RG93bkVzY2FwZVxuICAgICAgICAgIH0sICF0aGlzLnN0YXRlLmlzT3BlbiAmJiB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIF90aGlzLmJ1dHRvbktleURvd25IYW5kbGVycyA9IF9leHRlbmRzKHt9LCBfdGhpcy5rZXlEb3duSGFuZGxlcnMsIHtcbiAgICAgICAgJyAnOiBmdW5jdGlvbiBfKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoe1xuICAgICAgICAgICAgdHlwZToga2V5RG93blNwYWNlQnV0dG9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgX3RoaXMuaW5wdXRLZXlEb3duSGFuZGxlcnMgPSBfZXh0ZW5kcyh7fSwgX3RoaXMua2V5RG93bkhhbmRsZXJzLCB7XG4gICAgICAgIEhvbWU6IGZ1bmN0aW9uIEhvbWUoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGUzID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTMuaXNPcGVuO1xuXG4gICAgICAgICAgaWYgKGl0ZW1Db3VudCA8PSAwIHx8ICFpc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIGdldCBuZXh0IG5vbi1kaXNhYmxlZCBzdGFydGluZyBkb3dud2FyZHMgZnJvbSAwIGlmIHRoYXQncyBkaXNhYmxlZC5cblxuXG4gICAgICAgICAgdmFyIG5ld0hpZ2hsaWdodGVkSW5kZXggPSBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgxLCAwLCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5nZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXdIaWdobGlnaHRlZEluZGV4LCB7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duSG9tZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBFbmQ6IGZ1bmN0aW9uIEVuZChldmVudCkge1xuICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTQgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlNC5pc09wZW47XG5cbiAgICAgICAgICBpZiAoaXRlbUNvdW50IDw9IDAgfHwgIWlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gZ2V0IG5leHQgbm9uLWRpc2FibGVkIHN0YXJ0aW5nIHVwd2FyZHMgZnJvbSBsYXN0IGluZGV4IGlmIHRoYXQncyBkaXNhYmxlZC5cblxuXG4gICAgICAgICAgdmFyIG5ld0hpZ2hsaWdodGVkSW5kZXggPSBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgtMSwgaXRlbUNvdW50IC0gMSwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgobmV3SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgdHlwZToga2V5RG93bkVuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSBmdW5jdGlvbiAoX3RlbXAzKSB7XG4gICAgICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgICAgIG9uUHJlc3MgPSBfcmVmMy5vblByZXNzLFxuICAgICAgICAgICAgb25LZXlEb3duID0gX3JlZjMub25LZXlEb3duLFxuICAgICAgICAgICAgb25LZXlVcCA9IF9yZWYzLm9uS2V5VXAsXG4gICAgICAgICAgICBvbkJsdXIgPSBfcmVmMy5vbkJsdXIsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcIm9uQmx1clwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlNSA9IF90aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTUuaXNPcGVuO1xuXG4gICAgICAgIHZhciBlbmFibGVkRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICBvbkNsaWNrOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkNsaWNrLCBfdGhpcy5idXR0b25IYW5kbGVDbGljayksXG4gICAgICAgICAgb25LZXlEb3duOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIF90aGlzLmJ1dHRvbkhhbmRsZUtleURvd24pLFxuICAgICAgICAgIG9uS2V5VXA6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5VXAsIF90aGlzLmJ1dHRvbkhhbmRsZUtleVVwKSxcbiAgICAgICAgICBvbkJsdXI6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQmx1ciwgX3RoaXMuYnV0dG9uSGFuZGxlQmx1cilcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSByZXN0LmRpc2FibGVkID8ge30gOiBlbmFibGVkRXZlbnRIYW5kbGVycztcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IGlzT3BlbiA/ICdjbG9zZSBtZW51JyA6ICdvcGVuIG1lbnUnLFxuICAgICAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICAgICAnZGF0YS10b2dnbGUnOiB0cnVlXG4gICAgICAgIH0sIGV2ZW50SGFuZGxlcnMsIHJlc3QpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuYnV0dG9uSGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gUHJldmVudCBjbGljayBldmVudCBmcm9tIGVtaXR0aW5nIGluIEZpcmVmb3hcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJ1dHRvbkhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgICBpZiAoX3RoaXMuYnV0dG9uS2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICBfdGhpcy5idXR0b25LZXlEb3duSGFuZGxlcnNba2V5XS5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJ1dHRvbkhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGhhbmRsZSBvZGQgY2FzZSBmb3IgU2FmYXJpIGFuZCBGaXJlZm94IHdoaWNoXG4gICAgICAgIC8vIGRvbid0IGdpdmUgdGhlIGJ1dHRvbiB0aGUgZm9jdXMgcHJvcGVybHkuXG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIChjYW4ndCByZWFzb25hYmx5IHRlc3QgdGhpcykgKi9cblxuICAgICAgICBpZiAoIF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICBldmVudC50YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfSAvLyB0byBzaW1wbGlmeSB0ZXN0aW5nIGNvbXBvbmVudHMgdGhhdCB1c2UgZG93bnNoaWZ0LCB3ZSdsbCBub3Qgd3JhcCB0aGlzIGluIGEgc2V0VGltZW91dFxuICAgICAgICAvLyBpZiB0aGUgTk9ERV9FTlYgaXMgdGVzdC4gV2l0aCB0aGUgcHJvcGVyIGJ1aWxkIHN5c3RlbSwgdGhpcyBzaG91bGQgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWRcbiAgICAgICAgLy8gd2hlbiBidWlsZGluZyBmb3IgcHJvZHVjdGlvbiBhbmQgc2hvdWxkIHRoZXJlZm9yZSBoYXZlIG5vIGltcGFjdCBvbiBwcm9kdWN0aW9uIGNvZGUuXG5cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgICAgICAgIF90aGlzLnRvZ2dsZU1lbnUoe1xuICAgICAgICAgICAgdHlwZTogY2xpY2tCdXR0b25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBFbnN1cmUgdGhhdCB0b2dnbGUgb2YgbWVudSBvY2N1cnMgYWZ0ZXIgdGhlIHBvdGVudGlhbCBibHVyIGV2ZW50IGluIGlPU1xuICAgICAgICAgIF90aGlzLmludGVybmFsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudG9nZ2xlTWVudSh7XG4gICAgICAgICAgICAgIHR5cGU6IGNsaWNrQnV0dG9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuYnV0dG9uSGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgYmx1clRhcmdldCA9IGV2ZW50LnRhcmdldDsgLy8gU2F2ZSBibHVyIHRhcmdldCBmb3IgY29tcGFyaXNvbiB3aXRoIGFjdGl2ZUVsZW1lbnQgbGF0ZXJcbiAgICAgICAgLy8gTmVlZCBzZXRUaW1lb3V0LCBzbyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBUYWIsIHRoZSBhY3RpdmVFbGVtZW50IGlzIHRoZSBuZXh0IGZvY3VzZWQgZWxlbWVudCwgbm90IGJvZHkgZWxlbWVudFxuXG4gICAgICAgIF90aGlzLmludGVybmFsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5pc01vdXNlRG93biAmJiAoX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgIT09IF90aGlzLmlucHV0SWQpICYmIF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGJsdXJUYXJnZXQgLy8gRG8gbm90aGluZyBpZiB3ZSByZWZvY3VzIHRoZSBzYW1lIGVsZW1lbnQgYWdhaW4gKHRvIHNvbHZlIGlzc3VlIGluIFNhZmFyaSBvbiBpT1MpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIF90aGlzLnJlc2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBibHVyQnV0dG9uXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldExhYmVsUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICBodG1sRm9yOiBfdGhpcy5pbnB1dElkLFxuICAgICAgICAgIGlkOiBfdGhpcy5sYWJlbElkXG4gICAgICAgIH0sIHByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldElucHV0UHJvcHMgPSBmdW5jdGlvbiAoX3RlbXA0KSB7XG4gICAgICAgIHZhciBfcmVmNCA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICAgICAgICBvbktleURvd24gPSBfcmVmNC5vbktleURvd24sXG4gICAgICAgICAgICBvbkJsdXIgPSBfcmVmNC5vbkJsdXIsXG4gICAgICAgICAgICBvbkNoYW5nZSA9IF9yZWY0Lm9uQ2hhbmdlLFxuICAgICAgICAgICAgb25JbnB1dCA9IF9yZWY0Lm9uSW5wdXQsXG4gICAgICAgICAgICBvbkNoYW5nZVRleHQgPSBfcmVmNC5vbkNoYW5nZVRleHQsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIFtcIm9uS2V5RG93blwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnB1dFwiLCBcIm9uQ2hhbmdlVGV4dFwiXSk7XG5cbiAgICAgICAgdmFyIG9uQ2hhbmdlS2V5O1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVycyA9IHt9O1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAocHJlYWN0KSAqL1xuXG4gICAgICAgIG9uQ2hhbmdlS2V5ID0gJ29uQ2hhbmdlJztcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGU2ID0gX3RoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRnZXRTdGF0ZTYuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlNi5pc09wZW4sXG4gICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGU2LmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgICAgaWYgKCFyZXN0LmRpc2FibGVkKSB7XG4gICAgICAgICAgdmFyIF9ldmVudEhhbmRsZXJzO1xuXG4gICAgICAgICAgZXZlbnRIYW5kbGVycyA9IChfZXZlbnRIYW5kbGVycyA9IHt9LCBfZXZlbnRIYW5kbGVyc1tvbkNoYW5nZUtleV0gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkNoYW5nZSwgb25JbnB1dCwgX3RoaXMuaW5wdXRIYW5kbGVDaGFuZ2UpLCBfZXZlbnRIYW5kbGVycy5vbktleURvd24gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIF90aGlzLmlucHV0SGFuZGxlS2V5RG93biksIF9ldmVudEhhbmRsZXJzLm9uQmx1ciA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQmx1ciwgX3RoaXMuaW5wdXRIYW5kbGVCbHVyKSwgX2V2ZW50SGFuZGxlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAocmVhY3QtbmF0aXZlKSAqL1xuXG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGlzT3BlbiAmJiB0eXBlb2YgaGlnaGxpZ2h0ZWRJbmRleCA9PT0gJ251bWJlcicgJiYgaGlnaGxpZ2h0ZWRJbmRleCA+PSAwID8gX3RoaXMuZ2V0SXRlbUlkKGhpZ2hsaWdodGVkSW5kZXgpIDogbnVsbCxcbiAgICAgICAgICAnYXJpYS1jb250cm9scyc6IGlzT3BlbiA/IF90aGlzLm1lbnVJZCA6IG51bGwsXG4gICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IF90aGlzLmxhYmVsSWQsXG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU2VjdXJpdHkvU2VjdXJpbmdfeW91cl9zaXRlL1R1cm5pbmdfb2ZmX2Zvcm1fYXV0b2NvbXBsZXRpb25cbiAgICAgICAgICAvLyByZXZlcnQgYmFjayBzaW5jZSBhdXRvY29tcGxldGU9XCJub3BlXCIgaXMgaWdub3JlZCBvbiBsYXRlc3QgQ2hyb21lIGFuZCBPcGVyYVxuICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgaWQ6IF90aGlzLmlucHV0SWRcbiAgICAgICAgfSwgZXZlbnRIYW5kbGVycywgcmVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pbnB1dEhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgICBpZiAoa2V5ICYmIF90aGlzLmlucHV0S2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICBfdGhpcy5pbnB1dEtleURvd25IYW5kbGVyc1trZXldLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW5wdXRIYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgdHlwZTogY2hhbmdlSW5wdXQsXG4gICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlucHV0SGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTmVlZCBzZXRUaW1lb3V0LCBzbyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBUYWIsIHRoZSBhY3RpdmVFbGVtZW50IGlzIHRoZSBuZXh0IGZvY3VzZWQgZWxlbWVudCwgbm90IHRoZSBib2R5IGVsZW1lbnRcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZG93bnNoaWZ0QnV0dG9uSXNBY3RpdmUgPSBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudCAmJiAhIV90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgISFfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmRhdGFzZXQgJiYgX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5kYXRhc2V0LnRvZ2dsZSAmJiBfdGhpcy5fcm9vdE5vZGUgJiYgX3RoaXMuX3Jvb3ROb2RlLmNvbnRhaW5zKF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKCFfdGhpcy5pc01vdXNlRG93biAmJiAhZG93bnNoaWZ0QnV0dG9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF90aGlzLnJlc2V0KHtcbiAgICAgICAgICAgICAgdHlwZTogYmx1cklucHV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMubWVudVJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIF90aGlzLl9tZW51Tm9kZSA9IG5vZGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRNZW51UHJvcHMgPSBmdW5jdGlvbiAoX3RlbXA1LCBfdGVtcDYpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMztcblxuICAgICAgICB2YXIgX3JlZjUgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgICAgICAgX3JlZjUkcmVmS2V5ID0gX3JlZjUucmVmS2V5LFxuICAgICAgICAgICAgcmVmS2V5ID0gX3JlZjUkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY1JHJlZktleSxcbiAgICAgICAgICAgIHJlZiA9IF9yZWY1LnJlZixcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICAgICAgdmFyIF9yZWY2ID0gX3RlbXA2ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNixcbiAgICAgICAgICAgIF9yZWY2JHN1cHByZXNzUmVmRXJybyA9IF9yZWY2LnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjYkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JHN1cHByZXNzUmVmRXJybztcblxuICAgICAgICBfdGhpcy5nZXRNZW51UHJvcHMuY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuZ2V0TWVudVByb3BzLnJlZktleSA9IHJlZktleTtcbiAgICAgICAgX3RoaXMuZ2V0TWVudVByb3BzLnN1cHByZXNzUmVmRXJyb3IgPSBzdXBwcmVzc1JlZkVycm9yO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBfdGhpcy5tZW51UmVmKSwgX2V4dGVuZHMzLnJvbGUgPSAnbGlzdGJveCcsIF9leHRlbmRzM1snYXJpYS1sYWJlbGxlZGJ5J10gPSBwcm9wcyAmJiBwcm9wc1snYXJpYS1sYWJlbCddID8gbnVsbCA6IF90aGlzLmxhYmVsSWQsIF9leHRlbmRzMy5pZCA9IF90aGlzLm1lbnVJZCwgX2V4dGVuZHMzKSwgcHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0SXRlbVByb3BzID0gZnVuY3Rpb24gKF90ZW1wNykge1xuICAgICAgICB2YXIgX2VuYWJsZWRFdmVudEhhbmRsZXJzO1xuXG4gICAgICAgIHZhciBfcmVmNyA9IF90ZW1wNyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDcsXG4gICAgICAgICAgICBvbk1vdXNlTW92ZSA9IF9yZWY3Lm9uTW91c2VNb3ZlLFxuICAgICAgICAgICAgb25Nb3VzZURvd24gPSBfcmVmNy5vbk1vdXNlRG93bixcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBfcmVmNy5vbkNsaWNrLFxuICAgICAgICAgICAgb25QcmVzcyA9IF9yZWY3Lm9uUHJlc3MsXG4gICAgICAgICAgICBpbmRleCA9IF9yZWY3LmluZGV4LFxuICAgICAgICAgICAgX3JlZjckaXRlbSA9IF9yZWY3Lml0ZW0sXG4gICAgICAgICAgICBpdGVtID0gX3JlZjckaXRlbSA9PT0gdm9pZCAwID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHVuZGVmaW5lZCA6IHJlcXVpcmVkUHJvcCgnZ2V0SXRlbVByb3BzJywgJ2l0ZW0nKSA6IF9yZWY3JGl0ZW0sXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjcsIFtcIm9uTW91c2VNb3ZlXCIsIFwib25Nb3VzZURvd25cIiwgXCJvbkNsaWNrXCIsIFwib25QcmVzc1wiLCBcImluZGV4XCIsIFwiaXRlbVwiXSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBfdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgICAgaW5kZXggPSBfdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb25TZWxlY3RLZXkgPSAnb25DbGljayc7XG4gICAgICAgIHZhciBjdXN0b21DbGlja0hhbmRsZXIgPSBvbkNsaWNrO1xuICAgICAgICB2YXIgZW5hYmxlZEV2ZW50SGFuZGxlcnMgPSAoX2VuYWJsZWRFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgIC8vIG9uTW91c2VNb3ZlIGlzIHVzZWQgb3ZlciBvbk1vdXNlRW50ZXIgaGVyZS4gb25Nb3VzZU1vdmVcbiAgICAgICAgICAvLyBpcyBvbmx5IHRyaWdnZXJlZCBvbiBhY3R1YWwgbW91c2UgbW92ZW1lbnQgd2hpbGUgb25Nb3VzZUVudGVyXG4gICAgICAgICAgLy8gY2FuIGZpcmUgb24gRE9NIGNoYW5nZXMsIGludGVycnVwdGluZyBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VNb3ZlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IF90aGlzLmdldFN0YXRlKCkuaGlnaGxpZ2h0ZWRJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgoaW5kZXgsIHtcbiAgICAgICAgICAgICAgdHlwZTogaXRlbU1vdXNlRW50ZXJcbiAgICAgICAgICAgIH0pOyAvLyBXZSBuZXZlciB3YW50IHRvIG1hbnVhbGx5IHNjcm9sbCB3aGVuIGNoYW5naW5nIHN0YXRlIGJhc2VkXG4gICAgICAgICAgICAvLyBvbiBgb25Nb3VzZU1vdmVgIGJlY2F1c2Ugd2Ugd2lsbCBiZSBtb3ZpbmcgdGhlIGVsZW1lbnQgb3V0XG4gICAgICAgICAgICAvLyBmcm9tIHVuZGVyIHRoZSB1c2VyIHdoaWNoIGlzIGN1cnJlbnRseSBzY3JvbGxpbmcvbW92aW5nIHRoZVxuICAgICAgICAgICAgLy8gY3Vyc29yXG5cblxuICAgICAgICAgICAgX3RoaXMuYXZvaWRTY3JvbGxpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYXZvaWRTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb25Nb3VzZURvd246IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VEb3duLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcHJldmVudHMgdGhlIGFjdGl2ZUVsZW1lbnQgZnJvbSBiZWluZyBjaGFuZ2VkXG4gICAgICAgICAgICAvLyB0byB0aGUgaXRlbSBzbyBpdCBjYW4gcmVtYWluIHdpdGggdGhlIGN1cnJlbnQgYWN0aXZlRWxlbWVudFxuICAgICAgICAgICAgLy8gd2hpY2ggaXMgYSBtb3JlIGNvbW1vbiB1c2UgY2FzZS5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgX2VuYWJsZWRFdmVudEhhbmRsZXJzW29uU2VsZWN0S2V5XSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKGN1c3RvbUNsaWNrSGFuZGxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnNlbGVjdEl0ZW1BdEluZGV4KGluZGV4LCB7XG4gICAgICAgICAgICB0eXBlOiBjbGlja0l0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksIF9lbmFibGVkRXZlbnRIYW5kbGVycyk7IC8vIFBhc3NpbmcgZG93biB0aGUgb25Nb3VzZURvd24gaGFuZGxlciB0byBwcmV2ZW50IHJlZGlyZWN0XG4gICAgICAgIC8vIG9mIHRoZSBhY3RpdmVFbGVtZW50IGlmIGNsaWNraW5nIG9uIGRpc2FibGVkIGl0ZW1zXG5cbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSByZXN0LmRpc2FibGVkID8ge1xuICAgICAgICAgIG9uTW91c2VEb3duOiBlbmFibGVkRXZlbnRIYW5kbGVycy5vbk1vdXNlRG93blxuICAgICAgICB9IDogZW5hYmxlZEV2ZW50SGFuZGxlcnM7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgaWQ6IF90aGlzLmdldEl0ZW1JZChpbmRleCksXG4gICAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBfdGhpcy5nZXRTdGF0ZSgpLmhpZ2hsaWdodGVkSW5kZXggPT09IGluZGV4XG4gICAgICAgIH0sIGV2ZW50SGFuZGxlcnMsIHJlc3QpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuY2xlYXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlc2V0ID0gZnVuY3Rpb24gKG90aGVyU3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgaWYgKG90aGVyU3RhdGVUb1NldCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSBwaWNrU3RhdGUob3RoZXJTdGF0ZVRvU2V0KTtcblxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKGZ1bmN0aW9uIChfcmVmOCkge1xuICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW0gPSBfcmVmOC5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGlzT3BlbjogX3RoaXMucHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogX3RoaXMucHJvcHMuaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSlcbiAgICAgICAgICB9LCBvdGhlclN0YXRlVG9TZXQpO1xuICAgICAgICB9LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy50b2dnbGVNZW51ID0gZnVuY3Rpb24gKG90aGVyU3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgaWYgKG90aGVyU3RhdGVUb1NldCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlclN0YXRlVG9TZXQgPSBwaWNrU3RhdGUob3RoZXJTdGF0ZVRvU2V0KTtcblxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKGZ1bmN0aW9uIChfcmVmOSkge1xuICAgICAgICAgIHZhciBpc09wZW4gPSBfcmVmOS5pc09wZW47XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGlzT3BlbjogIWlzT3BlblxuICAgICAgICAgIH0sIGlzT3BlbiAmJiB7XG4gICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleFxuICAgICAgICAgIH0sIG90aGVyU3RhdGVUb1NldCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGU3ID0gX3RoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGU3LmlzT3BlbixcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJGdldFN0YXRlNy5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgaWYgKF90aGlzLmdldEl0ZW1Db3VudCgpID4gMCAmJiB0eXBlb2YgaGlnaGxpZ2h0ZWRJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgX3RoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChoaWdobGlnaHRlZEluZGV4LCBvdGhlclN0YXRlVG9TZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNiVG9DYihjYikoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vcGVuTWVudSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICBpc09wZW46IHRydWVcbiAgICAgICAgfSwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuY2xvc2VNZW51ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfSwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMudXBkYXRlU3RhdHVzID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBfdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHZhciBpdGVtID0gX3RoaXMuaXRlbXNbc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleF07XG5cbiAgICAgICAgdmFyIHJlc3VsdENvdW50ID0gX3RoaXMuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgdmFyIHN0YXR1cyA9IF90aGlzLnByb3BzLmdldEExMXlTdGF0dXNNZXNzYWdlKF9leHRlbmRzKHtcbiAgICAgICAgICBpdGVtVG9TdHJpbmc6IF90aGlzLnByb3BzLml0ZW1Ub1N0cmluZyxcbiAgICAgICAgICBwcmV2aW91c1Jlc3VsdENvdW50OiBfdGhpcy5wcmV2aW91c1Jlc3VsdENvdW50LFxuICAgICAgICAgIHJlc3VsdENvdW50OiByZXN1bHRDb3VudCxcbiAgICAgICAgICBoaWdobGlnaHRlZEl0ZW06IGl0ZW1cbiAgICAgICAgfSwgc3RhdGUpKTtcblxuICAgICAgICBfdGhpcy5wcmV2aW91c1Jlc3VsdENvdW50ID0gcmVzdWx0Q291bnQ7XG4gICAgICAgIHNldFN0YXR1cyhzdGF0dXMsIF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50KTtcbiAgICAgIH0sIDIwMCk7XG5cbiAgICAgIC8vIGZhbmN5IGRlc3RydWN0dXJpbmcgKyBkZWZhdWx0cyArIGFsaWFzZXNcbiAgICAgIC8vIHRoaXMgYmFzaWNhbGx5IHNheXMgZWFjaCB2YWx1ZSBvZiBzdGF0ZSBzaG91bGQgZWl0aGVyIGJlIHNldCB0b1xuICAgICAgLy8gdGhlIGluaXRpYWwgdmFsdWUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIGluaXRpYWwgdmFsdWUgaXMgbm90IHByb3ZpZGVkXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJHByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIF90aGlzJHByb3BzJGluaXRpYWxIaSA9IF90aGlzJHByb3BzLmluaXRpYWxIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIF9oaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkcHJvcHMkaW5pdGlhbEhpID09PSB2b2lkIDAgPyBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCA6IF90aGlzJHByb3BzJGluaXRpYWxIaSxcbiAgICAgICAgICBkZWZhdWx0SXNPcGVuID0gX3RoaXMkcHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgICAgICBfdGhpcyRwcm9wcyRpbml0aWFsSXMgPSBfdGhpcyRwcm9wcy5pbml0aWFsSXNPcGVuLFxuICAgICAgICAgIF9pc09wZW4gPSBfdGhpcyRwcm9wcyRpbml0aWFsSXMgPT09IHZvaWQgMCA/IGRlZmF1bHRJc09wZW4gOiBfdGhpcyRwcm9wcyRpbml0aWFsSXMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMkaW5pdGlhbEluID0gX3RoaXMkcHJvcHMuaW5pdGlhbElucHV0VmFsdWUsXG4gICAgICAgICAgX2lucHV0VmFsdWUgPSBfdGhpcyRwcm9wcyRpbml0aWFsSW4gPT09IHZvaWQgMCA/ICcnIDogX3RoaXMkcHJvcHMkaW5pdGlhbEluLFxuICAgICAgICAgIF90aGlzJHByb3BzJGluaXRpYWxTZSA9IF90aGlzJHByb3BzLmluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgX3NlbGVjdGVkSXRlbSA9IF90aGlzJHByb3BzJGluaXRpYWxTZSA9PT0gdm9pZCAwID8gbnVsbCA6IF90aGlzJHByb3BzJGluaXRpYWxTZTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IF90aGlzLmdldFN0YXRlKHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX2hpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgIGlzT3BlbjogX2lzT3BlbixcbiAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWUsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogX3NlbGVjdGVkSXRlbVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfc3RhdGUuc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgX3RoaXMucHJvcHMuaW5pdGlhbElucHV0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBfc3RhdGUuaW5wdXRWYWx1ZSA9IF90aGlzLnByb3BzLml0ZW1Ub1N0cmluZyhfc3RhdGUuc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhdGUgPSBfc3RhdGU7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IERvd25zaGlmdC5wcm90b3R5cGU7XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgcnVubmluZyB0aW1lb3V0c1xuICAgICAqL1xuICAgIF9wcm90by5pbnRlcm5hbENsZWFyVGltZW91dHMgPSBmdW5jdGlvbiBpbnRlcm5hbENsZWFyVGltZW91dHMoKSB7XG4gICAgICB0aGlzLnRpbWVvdXRJZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lb3V0SWRzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHN0YXRlIGJhc2VkIG9uIGludGVybmFsIHN0YXRlIG9yIHByb3BzXG4gICAgICogSWYgYSBzdGF0ZSB2YWx1ZSBpcyBwYXNzZWQgdmlhIHByb3BzLCB0aGVuIHRoYXRcbiAgICAgKiBpcyB0aGUgdmFsdWUgZ2l2ZW4sIG90aGVyd2lzZSBpdCdzIHJldHJpZXZlZCBmcm9tXG4gICAgICogc3RhdGVUb01lcmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVUb01lcmdlIGRlZmF1bHRzIHRvIHRoaXMuc3RhdGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBzdGF0ZVxuICAgICAqL1xuICAgIDtcblxuICAgIF9wcm90by5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlJDEoc3RhdGVUb01lcmdlKSB7XG4gICAgICBpZiAoc3RhdGVUb01lcmdlID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RhdGVUb01lcmdlID0gdGhpcy5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFN0YXRlKHN0YXRlVG9NZXJnZSwgdGhpcy5wcm9wcyk7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRJdGVtQ291bnQgPSBmdW5jdGlvbiBnZXRJdGVtQ291bnQoKSB7XG4gICAgICAvLyB0aGluZ3MgcmVhZCBiZXR0ZXIgdGhpcyB3YXkuIFRoZXkncmUgaW4gcHJpb3JpdHkgb3JkZXI6XG4gICAgICAvLyAxLiBgdGhpcy5pdGVtQ291bnRgXG4gICAgICAvLyAyLiBgdGhpcy5wcm9wcy5pdGVtQ291bnRgXG4gICAgICAvLyAzLiBgdGhpcy5pdGVtcy5sZW5ndGhgXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0aGlzLml0ZW1Db3VudCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW1Db3VudCA9IHRoaXMuaXRlbUNvdW50O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLml0ZW1Db3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbUNvdW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0SXRlbU5vZGVGcm9tSW5kZXggPSBmdW5jdGlvbiBnZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRJdGVtSWQoaW5kZXgpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbEhpZ2hsaWdodGVkSXRlbUludG9WaWV3ID0gZnVuY3Rpb24gc2Nyb2xsSGlnaGxpZ2h0ZWRJdGVtSW50b1ZpZXcoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAocmVhY3QtbmF0aXZlKSAqL1xuICAgICAge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0SXRlbU5vZGVGcm9tSW5kZXgodGhpcy5nZXRTdGF0ZSgpLmhpZ2hsaWdodGVkSW5kZXgpO1xuICAgICAgICB0aGlzLnByb3BzLnNjcm9sbEludG9WaWV3KG5vZGUsIHRoaXMuX21lbnVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLm1vdmVIaWdobGlnaHRlZEluZGV4ID0gZnVuY3Rpb24gbW92ZUhpZ2hsaWdodGVkSW5kZXgoYW1vdW50LCBvdGhlclN0YXRlVG9TZXQpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgdmFyIF90aGlzJGdldFN0YXRlOCA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGU4LmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KGFtb3VudCwgaGlnaGxpZ2h0ZWRJbmRleCwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM2LmdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXh0SGlnaGxpZ2h0ZWRJbmRleCwgb3RoZXJTdGF0ZVRvU2V0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFN0YXRlQW5kSGVscGVycyA9IGZ1bmN0aW9uIGdldFN0YXRlQW5kSGVscGVycygpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTkgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJGdldFN0YXRlOS5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRnZXRTdGF0ZTkuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBfdGhpcyRnZXRTdGF0ZTkuc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlOS5pc09wZW47XG5cbiAgICAgIHZhciBpdGVtVG9TdHJpbmcgPSB0aGlzLnByb3BzLml0ZW1Ub1N0cmluZztcbiAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICB2YXIgZ2V0Um9vdFByb3BzID0gdGhpcy5nZXRSb290UHJvcHMsXG4gICAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSB0aGlzLmdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICAgIGdldExhYmVsUHJvcHMgPSB0aGlzLmdldExhYmVsUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzID0gdGhpcy5nZXRNZW51UHJvcHMsXG4gICAgICAgICAgZ2V0SW5wdXRQcm9wcyA9IHRoaXMuZ2V0SW5wdXRQcm9wcyxcbiAgICAgICAgICBnZXRJdGVtUHJvcHMgPSB0aGlzLmdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUsXG4gICAgICAgICAgY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUsXG4gICAgICAgICAgdG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudSxcbiAgICAgICAgICBzZWxlY3RJdGVtID0gdGhpcy5zZWxlY3RJdGVtLFxuICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4ID0gdGhpcy5zZWxlY3RJdGVtQXRJbmRleCxcbiAgICAgICAgICBzZWxlY3RIaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkSXRlbSxcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZEluZGV4ID0gdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uID0gdGhpcy5jbGVhclNlbGVjdGlvbixcbiAgICAgICAgICBjbGVhckl0ZW1zID0gdGhpcy5jbGVhckl0ZW1zLFxuICAgICAgICAgIHJlc2V0ID0gdGhpcy5yZXNldCxcbiAgICAgICAgICBzZXRJdGVtQ291bnQgPSB0aGlzLnNldEl0ZW1Db3VudCxcbiAgICAgICAgICB1bnNldEl0ZW1Db3VudCA9IHRoaXMudW5zZXRJdGVtQ291bnQsXG4gICAgICAgICAgc2V0U3RhdGUgPSB0aGlzLmludGVybmFsU2V0U3RhdGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBwcm9wIGdldHRlcnNcbiAgICAgICAgZ2V0Um9vdFByb3BzOiBnZXRSb290UHJvcHMsXG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzOiBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICAgICAgZ2V0TWVudVByb3BzOiBnZXRNZW51UHJvcHMsXG4gICAgICAgIGdldElucHV0UHJvcHM6IGdldElucHV0UHJvcHMsXG4gICAgICAgIGdldEl0ZW1Qcm9wczogZ2V0SXRlbVByb3BzLFxuICAgICAgICAvLyBhY3Rpb25zXG4gICAgICAgIHJlc2V0OiByZXNldCxcbiAgICAgICAgb3Blbk1lbnU6IG9wZW5NZW51LFxuICAgICAgICBjbG9zZU1lbnU6IGNsb3NlTWVudSxcbiAgICAgICAgdG9nZ2xlTWVudTogdG9nZ2xlTWVudSxcbiAgICAgICAgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSxcbiAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXg6IHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgICAgICBzZWxlY3RIaWdobGlnaHRlZEl0ZW06IHNlbGVjdEhpZ2hsaWdodGVkSXRlbSxcbiAgICAgICAgc2V0SGlnaGxpZ2h0ZWRJbmRleDogc2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgY2xlYXJTZWxlY3Rpb246IGNsZWFyU2VsZWN0aW9uLFxuICAgICAgICBjbGVhckl0ZW1zOiBjbGVhckl0ZW1zLFxuICAgICAgICBzZXRJdGVtQ291bnQ6IHNldEl0ZW1Db3VudCxcbiAgICAgICAgdW5zZXRJdGVtQ291bnQ6IHVuc2V0SXRlbUNvdW50LFxuICAgICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nLFxuICAgICAgICAvLyBkZXJpdmVkXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXG4gICAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtXG4gICAgICB9O1xuICAgIH0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBST09UXG4gICAgO1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIChyZWFjdC1uYXRpdmUpICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZmFsc2UgJiYgdGhpcy5nZXRNZW51UHJvcHMuY2FsbGVkICYmICF0aGlzLmdldE1lbnVQcm9wcy5zdXBwcmVzc1JlZkVycm9yKSB7XG4gICAgICAgIHZhbGlkYXRlR2V0TWVudVByb3BzQ2FsbGVkQ29ycmVjdGx5KHRoaXMuX21lbnVOb2RlLCB0aGlzLmdldE1lbnVQcm9wcyk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKHJlYWN0LW5hdGl2ZSkgKi9cblxuXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMuaXNNb3VzZURvd24gaGVscHMgdXMgdHJhY2sgd2hldGhlciB0aGUgbW91c2UgaXMgY3VycmVudGx5IGhlbGQgZG93bi5cbiAgICAgICAgLy8gVGhpcyBpcyB1c2VmdWwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gaXRlbSBpbiB0aGUgbGlzdCwgYnV0IGhvbGRzIHRoZSBtb3VzZVxuICAgICAgICAvLyBkb3duIGxvbmcgZW5vdWdoIGZvciB0aGUgbGlzdCB0byBkaXNhcHBlYXIgKGJlY2F1c2UgdGhlIGJsdXIgZXZlbnQgZmlyZXMgb24gdGhlIGlucHV0KVxuICAgICAgICAvLyB0aGlzLmlzTW91c2VEb3duIGlzIHVzZWQgaW4gdGhlIGJsdXIgaGFuZGxlciBvbiB0aGUgaW5wdXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGJsdXIgZXZlbnQgc2hvdWxkXG4gICAgICAgIC8vIHRyaWdnZXIgaGlkaW5nIHRoZSBtZW51LlxuICAgICAgICB2YXIgb25Nb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM3LmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25Nb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXM3LmlzTW91c2VEb3duID0gZmFsc2U7IC8vIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBvciB0aGUgYWN0aXZlRWxlbWVudCBpcyB3aXRoaW4gYSBkb3duc2hpZnQgbm9kZVxuICAgICAgICAgIC8vIHRoZW4gd2UgZG9uJ3Qgd2FudCB0byByZXNldCBkb3duc2hpZnRcblxuICAgICAgICAgIHZhciBjb250ZXh0V2l0aGluRG93bnNoaWZ0ID0gdGFyZ2V0V2l0aGluRG93bnNoaWZ0KGV2ZW50LnRhcmdldCwgW190aGlzNy5fcm9vdE5vZGUsIF90aGlzNy5fbWVudU5vZGVdLCBfdGhpczcucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQpO1xuXG4gICAgICAgICAgaWYgKCFjb250ZXh0V2l0aGluRG93bnNoaWZ0ICYmIF90aGlzNy5nZXRTdGF0ZSgpLmlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXM3LnJlc2V0KHtcbiAgICAgICAgICAgICAgdHlwZTogbW91c2VVcFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXM3LnByb3BzLm9uT3V0ZXJDbGljayhfdGhpczcuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9OyAvLyBUb3VjaGluZyBhbiBlbGVtZW50IGluIGlPUyBnaXZlcyBmb2N1cyBhbmQgaG92ZXIgc3RhdGVzLCBidXQgdG91Y2hpbmcgb3V0IG9mXG4gICAgICAgIC8vIHRoZSBlbGVtZW50IHdpbGwgcmVtb3ZlIGhvdmVyLCBhbmQgcGVyc2lzdCB0aGUgZm9jdXMgc3RhdGUsIHJlc3VsdGluZyBpbiB0aGVcbiAgICAgICAgLy8gYmx1ciBldmVudCBub3QgYmVpbmcgdHJpZ2dlcmVkLlxuICAgICAgICAvLyB0aGlzLmlzVG91Y2hNb3ZlIGhlbHBzIHVzIHRyYWNrIHdoZXRoZXIgdGhlIHVzZXIgaXMgdGFwcGluZyBvciBzd2lwaW5nIG9uIGEgdG91Y2ggc2NyZWVuLlxuICAgICAgICAvLyBJZiB0aGUgdXNlciB0YXBzIG91dHNpZGUgb2YgRG93bnNoaWZ0LCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZXNldCxcbiAgICAgICAgLy8gYnV0IG5vdCBpZiB0aGUgdXNlciBpcyBzd2lwaW5nXG5cblxuICAgICAgICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNy5pc1RvdWNoTW92ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczcuaXNUb3VjaE1vdmUgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIGNvbnRleHRXaXRoaW5Eb3duc2hpZnQgPSB0YXJnZXRXaXRoaW5Eb3duc2hpZnQoZXZlbnQudGFyZ2V0LCBbX3RoaXM3Ll9yb290Tm9kZSwgX3RoaXM3Ll9tZW51Tm9kZV0sIF90aGlzNy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudCwgZmFsc2UpO1xuXG4gICAgICAgICAgaWYgKCFfdGhpczcuaXNUb3VjaE1vdmUgJiYgIWNvbnRleHRXaXRoaW5Eb3duc2hpZnQgJiYgX3RoaXM3LmdldFN0YXRlKCkuaXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpczcucmVzZXQoe1xuICAgICAgICAgICAgICB0eXBlOiB0b3VjaEVuZFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXM3LnByb3BzLm9uT3V0ZXJDbGljayhfdGhpczcuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlbnZpcm9ubWVudCA9IHRoaXMucHJvcHMuZW52aXJvbm1lbnQ7XG4gICAgICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICAgICAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG5cbiAgICAgICAgdGhpcy5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNy5pbnRlcm5hbENsZWFyVGltZW91dHMoKTtcblxuICAgICAgICAgIF90aGlzNy51cGRhdGVTdGF0dXMuY2FuY2VsKCk7XG5cbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5zaG91bGRTY3JvbGwgPSBmdW5jdGlvbiBzaG91bGRTY3JvbGwocHJldlN0YXRlLCBwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfcmVmMTAgPSB0aGlzLnByb3BzLmhpZ2hsaWdodGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0U3RhdGUoKSA6IHRoaXMucHJvcHMsXG4gICAgICAgICAgY3VycmVudEhpZ2hsaWdodGVkSW5kZXggPSBfcmVmMTAuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgdmFyIF9yZWYxMSA9IHByZXZQcm9wcy5oaWdobGlnaHRlZEluZGV4ID09PSB1bmRlZmluZWQgPyBwcmV2U3RhdGUgOiBwcmV2UHJvcHMsXG4gICAgICAgICAgcHJldkhpZ2hsaWdodGVkSW5kZXggPSBfcmVmMTEuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgdmFyIHNjcm9sbFdoZW5PcGVuID0gY3VycmVudEhpZ2hsaWdodGVkSW5kZXggJiYgdGhpcy5nZXRTdGF0ZSgpLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3BlbjtcbiAgICAgIHJldHVybiBzY3JvbGxXaGVuT3BlbiB8fCBjdXJyZW50SGlnaGxpZ2h0ZWRJbmRleCAhPT0gcHJldkhpZ2hsaWdodGVkSW5kZXg7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlQ29udHJvbGxlZFVuY2hhbmdlZCh0aGlzLnN0YXRlLCBwcmV2UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKHJlYWN0LW5hdGl2ZSkgKi9cblxuICAgICAgICBpZiAoIHRoaXMuZ2V0TWVudVByb3BzLmNhbGxlZCAmJiAhdGhpcy5nZXRNZW51UHJvcHMuc3VwcHJlc3NSZWZFcnJvcikge1xuICAgICAgICAgIHZhbGlkYXRlR2V0TWVudVByb3BzQ2FsbGVkQ29ycmVjdGx5KHRoaXMuX21lbnVOb2RlLCB0aGlzLmdldE1lbnVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ29udHJvbGxlZFByb3AodGhpcy5wcm9wcywgJ3NlbGVjdGVkSXRlbScpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtQ2hhbmdlZChwcmV2UHJvcHMuc2VsZWN0ZWRJdGVtLCB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbSkpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICB0eXBlOiBjb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdGhpcy5wcm9wcy5pdGVtVG9TdHJpbmcodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuYXZvaWRTY3JvbGxpbmcgJiYgdGhpcy5zaG91bGRTY3JvbGwocHJldlN0YXRlLCBwcmV2UHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGlnaGxpZ2h0ZWRJdGVtSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChyZWFjdC1uYXRpdmUpICovXG5cblxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTsgLy8gYXZvaWRzIG1lbW9yeSBsZWFrXG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB1bndyYXBBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuLCBub29wKTsgLy8gYmVjYXVzZSB0aGUgaXRlbXMgYXJlIHJlcmVuZGVyZWQgZXZlcnkgdGltZSB3ZSBjYWxsIHRoZSBjaGlsZHJlblxuICAgICAgLy8gd2UgY2xlYXIgdGhpcyBvdXQgZWFjaCByZW5kZXIgYW5kIGl0IHdpbGwgYmUgcG9wdWxhdGVkIGFnYWluIGFzXG4gICAgICAvLyBnZXRJdGVtUHJvcHMgaXMgY2FsbGVkLlxuXG4gICAgICB0aGlzLmNsZWFySXRlbXMoKTsgLy8gd2UgcmVzZXQgdGhpcyBzbyB3ZSBrbm93IHdoZXRoZXIgdGhlIHVzZXIgY2FsbHMgZ2V0Um9vdFByb3BzIGR1cmluZ1xuICAgICAgLy8gdGhpcyByZW5kZXIuIElmIHRoZXkgZG8gdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLFxuICAgICAgLy8gaWYgdGhleSBkb24ndCB0aGVuIHdlIG5lZWQgdG8gY2xvbmUgdGhlIGVsZW1lbnQgdGhleSByZXR1cm4gYW5kXG4gICAgICAvLyBhcHBseSB0aGUgcHJvcHMgZm9yIHRoZW0uXG5cbiAgICAgIHRoaXMuZ2V0Um9vdFByb3BzLmNhbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRSb290UHJvcHMucmVmS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nZXRSb290UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHVuZGVmaW5lZDsgLy8gd2UgZG8gc29tZXRoaW5nIHNpbWlsYXIgZm9yIGdldE1lbnVQcm9wc1xuXG4gICAgICB0aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0TWVudVByb3BzLnJlZktleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZ2V0TWVudVByb3BzLnN1cHByZXNzUmVmRXJyb3IgPSB1bmRlZmluZWQ7IC8vIHdlIGRvIHNvbWV0aGluZyBzaW1pbGFyIGZvciBnZXRMYWJlbFByb3BzXG5cbiAgICAgIHRoaXMuZ2V0TGFiZWxQcm9wcy5jYWxsZWQgPSBmYWxzZTsgLy8gYW5kIHNvbWV0aGluZyBzaW1pbGFyIGZvciBnZXRJbnB1dFByb3BzXG5cbiAgICAgIHRoaXMuZ2V0SW5wdXRQcm9wcy5jYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBlbGVtZW50ID0gdW53cmFwQXJyYXkoY2hpbGRyZW4odGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSkpO1xuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdldFJvb3RQcm9wcy5jYWxsZWQgfHwgdGhpcy5wcm9wcy5zdXBwcmVzc1JlZkVycm9yKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmdldFJvb3RQcm9wcy5zdXBwcmVzc1JlZkVycm9yICYmICF0aGlzLnByb3BzLnN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgICB2YWxpZGF0ZUdldFJvb3RQcm9wc0NhbGxlZENvcnJlY3RseShlbGVtZW50LCB0aGlzLmdldFJvb3RQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAoaXNET01FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIC8vIHRoZXkgZGlkbid0IGFwcGx5IHRoZSByb290IHByb3BzLCBidXQgd2UgY2FuIGNsb25lXG4gICAgICAgIC8vIHRoaXMgYW5kIGFwcGx5IHRoZSBwcm9wcyBvdXJzZWx2ZXNcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCB0aGlzLmdldFJvb3RQcm9wcyhnZXRFbGVtZW50UHJvcHMoZWxlbWVudCkpKTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gdGhleSBkaWRuJ3QgYXBwbHkgdGhlIHJvb3QgcHJvcHMsIGJ1dCB0aGV5IG5lZWQgdG9cbiAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIGNhbid0IHF1ZXJ5IGFyb3VuZCB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG93bnNoaWZ0OiBJZiB5b3UgcmV0dXJuIGEgbm9uLURPTSBlbGVtZW50LCB5b3UgbXVzdCBhcHBseSB0aGUgZ2V0Um9vdFByb3BzIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIHJldHVybiBEb3duc2hpZnQ7XG4gIH0oQ29tcG9uZW50KTtcblxuICBEb3duc2hpZnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiBudWxsLFxuICAgIGRlZmF1bHRJc09wZW46IGZhbHNlLFxuICAgIGdldEExMXlTdGF0dXNNZXNzYWdlOiBnZXRBMTF5U3RhdHVzTWVzc2FnZSxcbiAgICBpdGVtVG9TdHJpbmc6IGZ1bmN0aW9uIGl0ZW1Ub1N0cmluZyhpKSB7XG4gICAgICBpZiAoaSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNQbGFpbk9iamVjdChpKSAmJiAhaS5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oJ2Rvd25zaGlmdDogQW4gb2JqZWN0IHdhcyBwYXNzZWQgdG8gdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYGl0ZW1Ub1N0cmluZ2AuIFlvdSBzaG91bGQgcHJvYmFibHkgcHJvdmlkZSB5b3VyIG93biBgaXRlbVRvU3RyaW5nYCBpbXBsZW1lbnRhdGlvbi4gUGxlYXNlIHJlZmVyIHRvIHRoZSBgaXRlbVRvU3RyaW5nYCBBUEkgZG9jdW1lbnRhdGlvbi4nLCAnVGhlIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQ6JywgaSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgfSxcbiAgICBvblN0YXRlQ2hhbmdlOiBub29wLFxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZTogbm9vcCxcbiAgICBvblVzZXJBY3Rpb246IG5vb3AsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb25PdXRlckNsaWNrOiBub29wLFxuICAgIHNlbGVjdGVkSXRlbUNoYW5nZWQ6IGZ1bmN0aW9uIHNlbGVjdGVkSXRlbUNoYW5nZWQocHJldkl0ZW0sIGl0ZW0pIHtcbiAgICAgIHJldHVybiBwcmV2SXRlbSAhPT0gaXRlbTtcbiAgICB9LFxuICAgIGVudmlyb25tZW50OiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChzc3IpICovXG4gICAgPyB7fSA6IHdpbmRvdyxcbiAgICBzdGF0ZVJlZHVjZXI6IGZ1bmN0aW9uIHN0YXRlUmVkdWNlcihzdGF0ZSwgc3RhdGVUb1NldCkge1xuICAgICAgcmV0dXJuIHN0YXRlVG9TZXQ7XG4gICAgfSxcbiAgICBzdXBwcmVzc1JlZkVycm9yOiBmYWxzZSxcbiAgICBzY3JvbGxJbnRvVmlldzogc2Nyb2xsSW50b1ZpZXdcbiAgfTtcbiAgRG93bnNoaWZ0LnN0YXRlQ2hhbmdlVHlwZXMgPSBzdGF0ZUNoYW5nZVR5cGVzO1xuICByZXR1cm4gRG93bnNoaWZ0O1xufSgpO1xuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEb3duc2hpZnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWZhdWx0SXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGluaXRpYWxJbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbml0aWFsSXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdGF0ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVXNlckFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3V0ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkSXRlbUNoYW5nZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdGF0ZVJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnZpcm9ubWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb2N1bWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGdldEVsZW1lbnRCeUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgICBib2R5OiBQcm9wVHlwZXMuYW55XG4gICAgfSlcbiAgfSksXG4gIHN1cHByZXNzUmVmRXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBzY3JvbGxJbnRvVmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIHRoaW5ncyB3ZSBrZWVwIGluIHN0YXRlIGZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50c1xuICAvLyBidXQgY2FuIGFjY2VwdCBhcyBwcm9wcyBmb3IgY29udHJvbGxlZCBjb21wb25lbnRzXG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEl0ZW1JZDogUHJvcFR5cGVzLmZ1bmNcbiAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG59IDogdm9pZCAwO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUdldE1lbnVQcm9wc0NhbGxlZENvcnJlY3RseShub2RlLCBfcmVmMTIpIHtcbiAgdmFyIHJlZktleSA9IF9yZWYxMi5yZWZLZXk7XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBUaGUgcmVmIHByb3AgXFxcIlwiICsgcmVmS2V5ICsgXCJcXFwiIGZyb20gZ2V0TWVudVByb3BzIHdhcyBub3QgYXBwbGllZCBjb3JyZWN0bHkgb24geW91ciBtZW51IGVsZW1lbnQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlR2V0Um9vdFByb3BzQ2FsbGVkQ29ycmVjdGx5KGVsZW1lbnQsIF9yZWYxMykge1xuICB2YXIgcmVmS2V5ID0gX3JlZjEzLnJlZktleTtcbiAgdmFyIHJlZktleVNwZWNpZmllZCA9IHJlZktleSAhPT0gJ3JlZic7XG4gIHZhciBpc0NvbXBvc2l0ZSA9ICFpc0RPTUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgaWYgKGlzQ29tcG9zaXRlICYmICFyZWZLZXlTcGVjaWZpZWQgJiYgIWlzRm9yd2FyZFJlZihlbGVtZW50KSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZG93bnNoaWZ0OiBZb3UgcmV0dXJuZWQgYSBub24tRE9NIGVsZW1lbnQuIFlvdSBtdXN0IHNwZWNpZnkgYSByZWZLZXkgaW4gZ2V0Um9vdFByb3BzJyk7XG4gIH0gZWxzZSBpZiAoIWlzQ29tcG9zaXRlICYmIHJlZktleVNwZWNpZmllZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogWW91IHJldHVybmVkIGEgRE9NIGVsZW1lbnQuIFlvdSBzaG91bGQgbm90IHNwZWNpZnkgYSByZWZLZXkgaW4gZ2V0Um9vdFByb3BzLiBZb3Ugc3BlY2lmaWVkIFxcXCJcIiArIHJlZktleSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIGlmICghaXNGb3J3YXJkUmVmKGVsZW1lbnQpICYmICFnZXRFbGVtZW50UHJvcHMoZWxlbWVudClbcmVmS2V5XSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogWW91IG11c3QgYXBwbHkgdGhlIHJlZiBwcm9wIFxcXCJcIiArIHJlZktleSArIFwiXFxcIiBmcm9tIGdldFJvb3RQcm9wcyBvbnRvIHlvdXIgcm9vdCBlbGVtZW50LlwiKTtcbiAgfVxufVxuXG52YXIgZHJvcGRvd25EZWZhdWx0U3RhdGVWYWx1ZXMgPSB7XG4gIGhpZ2hsaWdodGVkSW5kZXg6IC0xLFxuICBpc09wZW46IGZhbHNlLFxuICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gIGlucHV0VmFsdWU6ICcnXG59O1xuXG5mdW5jdGlvbiBjYWxsT25DaGFuZ2VQcm9wcyhhY3Rpb24sIHN0YXRlLCBuZXdTdGF0ZSkge1xuICB2YXIgcHJvcHMgPSBhY3Rpb24ucHJvcHMsXG4gICAgICB0eXBlID0gYWN0aW9uLnR5cGU7XG4gIHZhciBjaGFuZ2VzID0ge307XG4gIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpbnZva2VPbkNoYW5nZUhhbmRsZXIoa2V5LCBhY3Rpb24sIHN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICBpZiAobmV3U3RhdGVba2V5XSAhPT0gc3RhdGVba2V5XSkge1xuICAgICAgY2hhbmdlc1trZXldID0gbmV3U3RhdGVba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9wcy5vblN0YXRlQ2hhbmdlICYmIE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCkge1xuICAgIHByb3BzLm9uU3RhdGVDaGFuZ2UoX2V4dGVuZHMoe1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0sIGNoYW5nZXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VPbkNoYW5nZUhhbmRsZXIoa2V5LCBhY3Rpb24sIHN0YXRlLCBuZXdTdGF0ZSkge1xuICB2YXIgcHJvcHMgPSBhY3Rpb24ucHJvcHMsXG4gICAgICB0eXBlID0gYWN0aW9uLnR5cGU7XG4gIHZhciBoYW5kbGVyID0gXCJvblwiICsgY2FwaXRhbGl6ZVN0cmluZyhrZXkpICsgXCJDaGFuZ2VcIjtcblxuICBpZiAocHJvcHNbaGFuZGxlcl0gJiYgbmV3U3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkICYmIG5ld1N0YXRlW2tleV0gIT09IHN0YXRlW2tleV0pIHtcbiAgICBwcm9wc1toYW5kbGVyXShfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgbmV3U3RhdGUpKTtcbiAgfVxufVxuLyoqXG4gKiBEZWZhdWx0IHN0YXRlIHJlZHVjZXIgdGhhdCByZXR1cm5zIHRoZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzIHN0YXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGEgYWN0aW9uIHdpdGggY2hhbmdlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGNoYW5nZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBzdGF0ZVJlZHVjZXIocywgYSkge1xuICByZXR1cm4gYS5jaGFuZ2VzO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgbWVzc2FnZSB0byBiZSBhZGRlZCB0byBhcmlhLWxpdmUgcmVnaW9uIHdoZW4gaXRlbSBpcyBzZWxlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0aW9uUGFyYW1ldGVycyBQYXJhbWV0ZXJzIHJlcXVpcmVkIHRvIGJ1aWxkIHRoZSBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGExMXkgbWVzc2FnZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlKHNlbGVjdGlvblBhcmFtZXRlcnMpIHtcbiAgdmFyIHNlbGVjdGVkSXRlbSA9IHNlbGVjdGlvblBhcmFtZXRlcnMuc2VsZWN0ZWRJdGVtLFxuICAgICAgaXRlbVRvU3RyaW5nTG9jYWwgPSBzZWxlY3Rpb25QYXJhbWV0ZXJzLml0ZW1Ub1N0cmluZztcbiAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/IGl0ZW1Ub1N0cmluZ0xvY2FsKHNlbGVjdGVkSXRlbSkgKyBcIiBoYXMgYmVlbiBzZWxlY3RlZC5cIiA6ICcnO1xufVxuLyoqXG4gKiBEZWJvdW5jZWQgY2FsbCBmb3IgdXBkYXRpbmcgdGhlIGExMXkgbWVzc2FnZS5cbiAqL1xuXG5cbnZhciB1cGRhdGVBMTF5U3RhdHVzID0gZGVib3VuY2UoZnVuY3Rpb24gKGdldEExMXlNZXNzYWdlLCBkb2N1bWVudCkge1xuICBzZXRTdGF0dXMoZ2V0QTExeU1lc3NhZ2UoKSwgZG9jdW1lbnQpO1xufSwgMjAwKTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRJZHMoX3JlZikge1xuICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgbGFiZWxJZCA9IF9yZWYubGFiZWxJZCxcbiAgICAgIG1lbnVJZCA9IF9yZWYubWVudUlkLFxuICAgICAgZ2V0SXRlbUlkID0gX3JlZi5nZXRJdGVtSWQsXG4gICAgICB0b2dnbGVCdXR0b25JZCA9IF9yZWYudG9nZ2xlQnV0dG9uSWQ7XG4gIHZhciB1bmlxdWVJZCA9IGlkID09PSB1bmRlZmluZWQgPyBcImRvd25zaGlmdC1cIiArIGdlbmVyYXRlSWQoKSA6IGlkO1xuICByZXR1cm4ge1xuICAgIGxhYmVsSWQ6IGxhYmVsSWQgfHwgdW5pcXVlSWQgKyBcIi1sYWJlbFwiLFxuICAgIG1lbnVJZDogbWVudUlkIHx8IHVuaXF1ZUlkICsgXCItbWVudVwiLFxuICAgIGdldEl0ZW1JZDogZ2V0SXRlbUlkIHx8IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIHVuaXF1ZUlkICsgXCItaXRlbS1cIiArIGluZGV4O1xuICAgIH0sXG4gICAgdG9nZ2xlQnV0dG9uSWQ6IHRvZ2dsZUJ1dHRvbklkIHx8IHVuaXF1ZUlkICsgXCItdG9nZ2xlLWJ1dHRvblwiXG4gIH07XG59XG5mdW5jdGlvbiBnZXRJdGVtSW5kZXgoaW5kZXgsIGl0ZW0sIGl0ZW1zKSB7XG4gIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcy5pbmRleE9mKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBpdGVtVG9TdHJpbmcoaXRlbSkge1xuICByZXR1cm4gaXRlbSA/IFN0cmluZyhpdGVtKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wVHlwZXNWYWxpZGF0b3IoY2FsbGVyLCBwcm9wVHlwZXMpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHByb3BUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBvcHRpb25zLCBrZXksIGNhbGxlci5uYW1lKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSB7XG4gIHJldHVybiAvXlxcU3sxfSQvLnRlc3Qoa2V5KTtcbn1cbmZ1bmN0aW9uIGNhcGl0YWxpemVTdHJpbmcoc3RyaW5nKSB7XG4gIHJldHVybiBcIlwiICsgc3RyaW5nLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5mdW5jdGlvbiB1c2VMYXRlc3RSZWYodmFsKSB7XG4gIHZhciByZWYgPSB1c2VSZWYodmFsKTsgLy8gdGVjaG5pY2FsbHkgdGhpcyBpcyBub3QgXCJjb25jdXJyZW50IG1vZGUgc2FmZVwiIGJlY2F1c2Ugd2UncmUgbWFuaXB1bGF0aW5nXG4gIC8vIHRoZSB2YWx1ZSBkdXJpbmcgcmVuZGVyIChzbyBpdCdzIG5vdCBpZGVtcG90ZW50KS4gSG93ZXZlciwgdGhlIHBsYWNlcyB0aGlzXG4gIC8vIGhvb2sgaXMgdXNlZCBpcyB0byBzdXBwb3J0IG1lbW9pemluZyBjYWxsYmFja3Mgd2hpY2ggd2lsbCBiZSBjYWxsZWRcbiAgLy8gKmR1cmluZyogcmVuZGVyLCBzbyB3ZSBuZWVkIHRoZSBsYXRlc3QgdmFsdWVzICpkdXJpbmcqIHJlbmRlci5cbiAgLy8gSWYgbm90IGZvciB0aGlzLCB0aGVuIHdlJ2QgcHJvYmFibHkgd2FudCB0byB1c2UgdXNlTGF5b3V0RWZmZWN0IGluc3RlYWQuXG5cbiAgcmVmLmN1cnJlbnQgPSB2YWw7XG4gIHJldHVybiByZWY7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBjb250cm9sbGVkIHN0YXRlIHVzaW5nIGEgdGhlIHByZXZpb3VzIHN0YXRlLCBwcm9wcyxcbiAqIHR3byByZWR1Y2Vycywgb25lIGZyb20gZG93bnNoaWZ0IGFuZCBhbiBvcHRpb25hbCBvbmUgZnJvbSB0aGUgdXNlci5cbiAqIEFsc28gY2FsbHMgdGhlIG9uQ2hhbmdlIGhhbmRsZXJzIGZvciBzdGF0ZSB2YWx1ZXMgdGhhdCBoYXZlIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBSZWR1Y2VyIGZ1bmN0aW9uIGZyb20gZG93bnNoaWZ0LlxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxTdGF0ZSBJbml0aWFsIHN0YXRlIG9mIHRoZSBob29rLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFRoZSBob29rIHByb3BzLlxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSB3aXRoIHRoZSBzdGF0ZSBhbmQgYW4gYWN0aW9uIGRpc3BhdGNoZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlRW5oYW5jZWRSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpIHtcbiAgdmFyIHByZXZTdGF0ZVJlZiA9IHVzZVJlZigpO1xuICB2YXIgYWN0aW9uUmVmID0gdXNlUmVmKCk7XG4gIHZhciBlbmhhbmNlZFJlZHVjZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIGFjdGlvblJlZi5jdXJyZW50ID0gYWN0aW9uO1xuICAgIHN0YXRlID0gZ2V0U3RhdGUoc3RhdGUsIGFjdGlvbi5wcm9wcyk7XG4gICAgdmFyIGNoYW5nZXMgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIHZhciBuZXdTdGF0ZSA9IGFjdGlvbi5wcm9wcy5zdGF0ZVJlZHVjZXIoc3RhdGUsIF9leHRlbmRzKHt9LCBhY3Rpb24sIHtcbiAgICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgICB9KSk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9LCBbcmVkdWNlcl0pO1xuXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZW5oYW5jZWRSZWR1Y2VyLCBpbml0aWFsU3RhdGUpLFxuICAgICAgc3RhdGUgPSBfdXNlUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIHByb3BzUmVmID0gdXNlTGF0ZXN0UmVmKHByb3BzKTtcbiAgdmFyIGRpc3BhdGNoV2l0aFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBkaXNwYXRjaChfZXh0ZW5kcyh7XG4gICAgICBwcm9wczogcHJvcHNSZWYuY3VycmVudFxuICAgIH0sIGFjdGlvbikpO1xuICB9LCBbcHJvcHNSZWZdKTtcbiAgdmFyIGFjdGlvbiA9IGFjdGlvblJlZi5jdXJyZW50O1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhY3Rpb24gJiYgcHJldlN0YXRlUmVmLmN1cnJlbnQgJiYgcHJldlN0YXRlUmVmLmN1cnJlbnQgIT09IHN0YXRlKSB7XG4gICAgICBjYWxsT25DaGFuZ2VQcm9wcyhhY3Rpb24sIGdldFN0YXRlKHByZXZTdGF0ZVJlZi5jdXJyZW50LCBhY3Rpb24ucHJvcHMpLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJldlN0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgfSwgW3N0YXRlLCBwcm9wcywgYWN0aW9uXSk7XG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoV2l0aFByb3BzXTtcbn1cbi8qKlxuICogV3JhcHMgdGhlIHVzZUVuaGFuY2VkUmVkdWNlciBhbmQgYXBwbGllcyB0aGUgY29udHJvbGxlZCBwcm9wIHZhbHVlcyBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgbmV3IHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgUmVkdWNlciBmdW5jdGlvbiBmcm9tIGRvd25zaGlmdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbml0aWFsU3RhdGUgSW5pdGlhbCBzdGF0ZSBvZiB0aGUgaG9vay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgaG9vayBwcm9wcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgd2l0aCB0aGUgc3RhdGUgYW5kIGFuIGFjdGlvbiBkaXNwYXRjaGVyLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZWRSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpIHtcbiAgdmFyIF91c2VFbmhhbmNlZFJlZHVjZXIgPSB1c2VFbmhhbmNlZFJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcyksXG4gICAgICBzdGF0ZSA9IF91c2VFbmhhbmNlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VFbmhhbmNlZFJlZHVjZXJbMV07XG5cbiAgcmV0dXJuIFtnZXRTdGF0ZShzdGF0ZSwgcHJvcHMpLCBkaXNwYXRjaF07XG59XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBpdGVtVG9TdHJpbmc6IGl0ZW1Ub1N0cmluZyxcbiAgc3RhdGVSZWR1Y2VyOiBzdGF0ZVJlZHVjZXIsXG4gIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlOiBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSxcbiAgc2Nyb2xsSW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuICBjaXJjdWxhck5hdmlnYXRpb246IGZhbHNlLFxuICBlbnZpcm9ubWVudDogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKHNzcikgKi9cbiAgPyB7fSA6IHdpbmRvd1xufTtcbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZShwcm9wcywgcHJvcEtleSwgZGVmYXVsdFN0YXRlVmFsdWVzKSB7XG4gIGlmIChkZWZhdWx0U3RhdGVWYWx1ZXMgPT09IHZvaWQgMCkge1xuICAgIGRlZmF1bHRTdGF0ZVZhbHVlcyA9IGRyb3Bkb3duRGVmYXVsdFN0YXRlVmFsdWVzO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRQcm9wS2V5ID0gXCJkZWZhdWx0XCIgKyBjYXBpdGFsaXplU3RyaW5nKHByb3BLZXkpO1xuXG4gIGlmIChkZWZhdWx0UHJvcEtleSBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wc1tkZWZhdWx0UHJvcEtleV07XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlVmFsdWVzW3Byb3BLZXldO1xufVxuZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpIHtcbiAgaWYgKGRlZmF1bHRTdGF0ZVZhbHVlcyA9PT0gdm9pZCAwKSB7XG4gICAgZGVmYXVsdFN0YXRlVmFsdWVzID0gZHJvcGRvd25EZWZhdWx0U3RhdGVWYWx1ZXM7XG4gIH1cblxuICBpZiAocHJvcEtleSBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wc1twcm9wS2V5XTtcbiAgfVxuXG4gIHZhciBpbml0aWFsUHJvcEtleSA9IFwiaW5pdGlhbFwiICsgY2FwaXRhbGl6ZVN0cmluZyhwcm9wS2V5KTtcblxuICBpZiAoaW5pdGlhbFByb3BLZXkgaW4gcHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHNbaW5pdGlhbFByb3BLZXldO1xuICB9XG5cbiAgcmV0dXJuIGdldERlZmF1bHRWYWx1ZShwcm9wcywgcHJvcEtleSwgZGVmYXVsdFN0YXRlVmFsdWVzKTtcbn1cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShwcm9wcykge1xuICB2YXIgc2VsZWN0ZWRJdGVtID0gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCAnc2VsZWN0ZWRJdGVtJyk7XG4gIHZhciBpc09wZW4gPSBnZXRJbml0aWFsVmFsdWUocHJvcHMsICdpc09wZW4nKTtcbiAgdmFyIGhpZ2hsaWdodGVkSW5kZXggPSBnZXRJbml0aWFsVmFsdWUocHJvcHMsICdoaWdobGlnaHRlZEluZGV4Jyk7XG4gIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCAnaW5wdXRWYWx1ZScpO1xuICByZXR1cm4ge1xuICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXggPCAwICYmIHNlbGVjdGVkSXRlbSAmJiBpc09wZW4gPyBwcm9wcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSkgOiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtLFxuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCBvZmZzZXQsIGdldEl0ZW1Ob2RlRnJvbUluZGV4KSB7XG4gIHZhciBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXggPSBwcm9wcy5pbml0aWFsSGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4ID0gcHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg7XG4gIHZhciBzZWxlY3RlZEl0ZW0gPSBzdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICBoaWdobGlnaHRlZEluZGV4ID0gc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IC8vIGluaXRpYWxIaWdobGlnaHRlZEluZGV4IHdpbGwgZ2l2ZSB2YWx1ZSB0byBoaWdobGlnaHRlZEluZGV4IG9uIGluaXRpYWwgc3RhdGUgb25seS5cblxuXG4gIGlmIChpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIGhpZ2hsaWdodGVkSW5kZXggPT09IGluaXRpYWxIaWdobGlnaHRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGluaXRpYWxIaWdobGlnaHRlZEluZGV4O1xuICB9XG5cbiAgaWYgKGRlZmF1bHRIaWdobGlnaHRlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TmV4dFdyYXBwaW5nSW5kZXgob2Zmc2V0LCBpdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSksIGl0ZW1zLmxlbmd0aCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKTtcbiAgfVxuXG4gIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiAwO1xufVxuLyoqXG4gKiBSZXVzZSB0aGUgbW92ZW1lbnQgdHJhY2tpbmcgb2YgbW91c2UgYW5kIHRvdWNoIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzT3BlbiBXaGV0aGVyIHRoZSBkcm9wZG93biBpcyBvcGVuIG9yIG5vdC5cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZG93bnNoaWZ0RWxlbWVudFJlZnMgRG93bnNoaWZ0IGVsZW1lbnQgcmVmcyB0byB0cmFjayBtb3ZlbWVudCAodG9nZ2xlQnV0dG9uLCBtZW51IGV0Yy4pXG4gKiBAcGFyYW0ge09iamVjdH0gZW52aXJvbm1lbnQgRW52aXJvbm1lbnQgd2hlcmUgY29tcG9uZW50L2hvb2sgZXhpc3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlQmx1ciBIYW5kbGVyIG9uIGJsdXIgZnJvbSBtb3VzZSBvciB0b3VjaC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlZiBjb250YWluaW5nIHdoZXRoZXIgbW91c2VEb3duIG9yIHRvdWNoTW92ZSBldmVudCBpcyBoYXBwZW5pbmdcbiAqL1xuXG5mdW5jdGlvbiB1c2VNb3VzZUFuZFRvdWNoVHJhY2tlcihpc09wZW4sIGRvd25zaGlmdEVsZW1lbnRSZWZzLCBlbnZpcm9ubWVudCwgaGFuZGxlQmx1cikge1xuICB2YXIgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmID0gdXNlUmVmKHtcbiAgICBpc01vdXNlRG93bjogZmFsc2UsXG4gICAgaXNUb3VjaE1vdmU6IGZhbHNlXG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoZSBzYW1lIHN0cmF0ZWd5IGZvciBjaGVja2luZyBpZiBhIGNsaWNrIG9jY3VycmVkIGluc2lkZSBvciBvdXRzaWRlIGRvd25zaWZ0XG4gICAgLy8gYXMgaW4gZG93bnNoaWZ0LmpzLlxuICAgIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIG9uTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNNb3VzZURvd24gPSBmYWxzZTtcblxuICAgICAgaWYgKGlzT3BlbiAmJiAhdGFyZ2V0V2l0aGluRG93bnNoaWZ0KGV2ZW50LnRhcmdldCwgZG93bnNoaWZ0RWxlbWVudFJlZnMubWFwKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgICAgfSksIGVudmlyb25tZW50LmRvY3VtZW50KSkge1xuICAgICAgICBoYW5kbGVCbHVyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc1RvdWNoTW92ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc1RvdWNoTW92ZSA9IHRydWU7XG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoaXNPcGVuICYmICFtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc1RvdWNoTW92ZSAmJiAhdGFyZ2V0V2l0aGluRG93bnNoaWZ0KGV2ZW50LnRhcmdldCwgZG93bnNoaWZ0RWxlbWVudFJlZnMubWFwKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgICAgfSksIGVudmlyb25tZW50LmRvY3VtZW50LCBmYWxzZSkpIHtcbiAgICAgICAgaGFuZGxlQmx1cigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgIH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2lzT3BlbiwgZW52aXJvbm1lbnRdKTtcbiAgcmV0dXJuIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZjtcbn1cbi8qKlxuICogQ3VzdG9tIGhvb2sgdGhhdCBjaGVja3MgaWYgZ2V0dGVyIHByb3BzIGFyZSBjYWxsZWQgY29ycmVjdGx5LlxuICpcbiAqIEBwYXJhbSAgey4uLmFueX0gcHJvcEtleXMgR2V0dGVyIHByb3AgbmFtZXMgdG8gYmUgaGFuZGxlZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gU2V0dGVyIGZ1bmN0aW9uIGNhbGxlZCBpbnNpZGUgZ2V0dGVyIHByb3BzIHRvIHNldCBjYWxsIGluZm9ybWF0aW9uLlxuICovXG5cbmZ1bmN0aW9uIHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcigpIHtcbiAgdmFyIGlzTm90UHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG4gIHZhciBpc0luaXRpYWxNb3VudFJlZiA9IHVzZVJlZih0cnVlKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcEtleXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcEtleXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgZ2V0dGVyUHJvcHNDYWxsZWRSZWYgPSB1c2VSZWYocHJvcEtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3BLZXkpIHtcbiAgICBhY2NbcHJvcEtleV0gPSB7fTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSkpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNOb3RQcm9kdWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoZ2V0dGVyUHJvcHNDYWxsZWRSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcEtleSkge1xuICAgICAgdmFyIHByb3BDYWxsSW5mbyA9IGdldHRlclByb3BzQ2FsbGVkUmVmLmN1cnJlbnRbcHJvcEtleV07XG5cbiAgICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGlmICghT2JqZWN0LmtleXMocHJvcENhbGxJbmZvKS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IFlvdSBmb3Jnb3QgdG8gY2FsbCB0aGUgXCIgKyBwcm9wS2V5ICsgXCIgZ2V0dGVyIGZ1bmN0aW9uIG9uIHlvdXIgY29tcG9uZW50IC8gZWxlbWVudC5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzdXBwcmVzc1JlZkVycm9yID0gcHJvcENhbGxJbmZvLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgICAgcmVmS2V5ID0gcHJvcENhbGxJbmZvLnJlZktleSxcbiAgICAgICAgICBlbGVtZW50UmVmID0gcHJvcENhbGxJbmZvLmVsZW1lbnRSZWY7XG5cbiAgICAgIGlmICgoIWVsZW1lbnRSZWYgfHwgIWVsZW1lbnRSZWYuY3VycmVudCkgJiYgIXN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogVGhlIHJlZiBwcm9wIFxcXCJcIiArIHJlZktleSArIFwiXFxcIiBmcm9tIFwiICsgcHJvcEtleSArIFwiIHdhcyBub3QgYXBwbGllZCBjb3JyZWN0bHkgb24geW91ciBlbGVtZW50LlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0pO1xuICB2YXIgc2V0R2V0dGVyUHJvcENhbGxJbmZvID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHByb3BLZXksIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgZWxlbWVudFJlZikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBnZXR0ZXJQcm9wc0NhbGxlZFJlZi5jdXJyZW50W3Byb3BLZXldID0ge1xuICAgICAgICBzdXBwcmVzc1JlZkVycm9yOiBzdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICByZWZLZXk6IHJlZktleSxcbiAgICAgICAgZWxlbWVudFJlZjogZWxlbWVudFJlZlxuICAgICAgfTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHNldEdldHRlclByb3BDYWxsSW5mbztcbn1cbmZ1bmN0aW9uIHVzZUExMXlNZXNzYWdlU2V0dGVyKGdldEExMXlNZXNzYWdlLCBkZXBlbmRlbmN5QXJyYXksIF9yZWYyKSB7XG4gIHZhciBpc0luaXRpYWxNb3VudCA9IF9yZWYyLmlzSW5pdGlhbE1vdW50LFxuICAgICAgcHJldmlvdXNSZXN1bHRDb3VudCA9IF9yZWYyLnByZXZpb3VzUmVzdWx0Q291bnQsXG4gICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3JlZjIuaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGl0ZW1zID0gX3JlZjIuaXRlbXMsXG4gICAgICBlbnZpcm9ubWVudCA9IF9yZWYyLmVudmlyb25tZW50LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJpc0luaXRpYWxNb3VudFwiLCBcInByZXZpb3VzUmVzdWx0Q291bnRcIiwgXCJoaWdobGlnaHRlZEluZGV4XCIsIFwiaXRlbXNcIiwgXCJlbnZpcm9ubWVudFwiXSk7XG5cbiAgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc3RhdGUuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzSW5pdGlhbE1vdW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQTExeVN0YXR1cyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0QTExeU1lc3NhZ2UoX2V4dGVuZHMoe1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgICAgICBoaWdobGlnaHRlZEl0ZW06IGl0ZW1zW2hpZ2hsaWdodGVkSW5kZXhdLFxuICAgICAgICByZXN1bHRDb3VudDogaXRlbXMubGVuZ3RoLFxuICAgICAgICBwcmV2aW91c1Jlc3VsdENvdW50OiBwcmV2aW91c1Jlc3VsdENvdW50XG4gICAgICB9LCByZXN0KSk7XG4gICAgfSwgZW52aXJvbm1lbnQuZG9jdW1lbnQpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIGRlcGVuZGVuY3lBcnJheSk7XG59XG5mdW5jdGlvbiB1c2VTY3JvbGxJbnRvVmlldyhfcmVmMykge1xuICB2YXIgaGlnaGxpZ2h0ZWRJbmRleCA9IF9yZWYzLmhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICBpc09wZW4gPSBfcmVmMy5pc09wZW4sXG4gICAgICBpdGVtUmVmcyA9IF9yZWYzLml0ZW1SZWZzLFxuICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXggPSBfcmVmMy5nZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgIG1lbnVFbGVtZW50ID0gX3JlZjMubWVudUVsZW1lbnQsXG4gICAgICBzY3JvbGxJbnRvVmlld1Byb3AgPSBfcmVmMy5zY3JvbGxJbnRvVmlldztcbiAgLy8gdXNlZCBub3QgdG8gc2Nyb2xsIG9uIGhpZ2hsaWdodCBieSBtb3VzZS5cbiAgdmFyIHNob3VsZFNjcm9sbFJlZiA9IHVzZVJlZih0cnVlKTsgLy8gU2Nyb2xsIG9uIGhpZ2hsaWdodGVkIGl0ZW0gaWYgY2hhbmdlIGNvbWVzIGZyb20ga2V5Ym9hcmQuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGlnaGxpZ2h0ZWRJbmRleCA8IDAgfHwgIWlzT3BlbiB8fCAhT2JqZWN0LmtleXMoaXRlbVJlZnMuY3VycmVudCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNjcm9sbFJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xuICAgICAgc2hvdWxkU2Nyb2xsUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxJbnRvVmlld1Byb3AoZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaGlnaGxpZ2h0ZWRJbmRleCksIG1lbnVFbGVtZW50KTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB9LCBbaGlnaGxpZ2h0ZWRJbmRleF0pO1xuICByZXR1cm4gc2hvdWxkU2Nyb2xsUmVmO1xufVxuZnVuY3Rpb24gdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKF9yZWY0KSB7XG4gIHZhciBpc0luaXRpYWxNb3VudCA9IF9yZWY0LmlzSW5pdGlhbE1vdW50LFxuICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIHN0YXRlID0gX3JlZjQuc3RhdGU7XG4gIC8vIHVzZWQgZm9yIGNoZWNraW5nIHdoZW4gcHJvcHMgYXJlIG1vdmluZyBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkLlxuICB2YXIgcHJldlByb3BzUmVmID0gdXNlUmVmKHByb3BzKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUNvbnRyb2xsZWRVbmNoYW5nZWQoc3RhdGUsIHByZXZQcm9wc1JlZi5jdXJyZW50LCBwcm9wcyk7XG4gICAgcHJldlByb3BzUmVmLmN1cnJlbnQgPSBwcm9wcztcbiAgfSwgW3N0YXRlLCBwcm9wcywgaXNJbml0aWFsTW91bnRdKTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbUluZGV4QnlDaGFyYWN0ZXJLZXkoa2V5c1NvRmFyLCBoaWdobGlnaHRlZEluZGV4LCBpdGVtcywgaXRlbVRvU3RyaW5nUGFyYW0sIGdldEl0ZW1Ob2RlRnJvbUluZGV4KSB7XG4gIHZhciBsb3dlckNhc2VkSXRlbVN0cmluZ3MgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbVRvU3RyaW5nUGFyYW0oaXRlbSkudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG4gIHZhciBsb3dlckNhc2VkS2V5c1NvRmFyID0ga2V5c1NvRmFyLnRvTG93ZXJDYXNlKCk7XG5cbiAgdmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoaXRlbVN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICByZXR1cm4gaXRlbVN0cmluZy5zdGFydHNXaXRoKGxvd2VyQ2FzZWRLZXlzU29GYXIpICYmICEoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaW5kZXggPSBoaWdobGlnaHRlZEluZGV4ICsgMTsgaW5kZXggPCBsb3dlckNhc2VkSXRlbVN0cmluZ3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFyIGl0ZW1TdHJpbmcgPSBsb3dlckNhc2VkSXRlbVN0cmluZ3NbaW5kZXhdO1xuXG4gICAgaWYgKGlzVmFsaWQoaXRlbVN0cmluZywgaW5kZXgpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX2luZGV4ID0gMDsgX2luZGV4IDwgaGlnaGxpZ2h0ZWRJbmRleDsgX2luZGV4KyspIHtcbiAgICB2YXIgX2l0ZW1TdHJpbmcgPSBsb3dlckNhc2VkSXRlbVN0cmluZ3NbX2luZGV4XTtcblxuICAgIGlmIChpc1ZhbGlkKF9pdGVtU3RyaW5nLCBfaW5kZXgpKSB7XG4gICAgICByZXR1cm4gX2luZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoaWdobGlnaHRlZEluZGV4O1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEExMXlTdGF0dXNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaXJjdWxhck5hdmlnYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBoaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBpbml0aWFsSXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBkZWZhdWx0U2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZXRJdGVtSWQ6IFByb3BUeXBlcy5mdW5jLFxuICB0b2dnbGVCdXR0b25JZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhdGVSZWR1Y2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RlZEl0ZW1DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkhpZ2hsaWdodGVkSW5kZXhDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblN0YXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Jc09wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBlbnZpcm9ubWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb2N1bWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGdldEVsZW1lbnRCeUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgICBib2R5OiBQcm9wVHlwZXMuYW55XG4gICAgfSlcbiAgfSlcbn07XG4vKipcbiAqIERlZmF1bHQgaW1wbGVtZW50YXRpb24gZm9yIHN0YXR1cyBtZXNzYWdlLiBPbmx5IGFkZGVkIHdoZW4gbWVudSBpcyBvcGVuLlxuICogV2lsbCBzcGVjaWZ0IGlmIHRoZXJlIGFyZSByZXN1bHRzIGluIHRoZSBsaXN0LCBhbmQgaWYgc28sIGhvdyBtYW55LFxuICogYW5kIHdoYXQga2V5cyBhcmUgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIHRoZSBkb3duc2hpZnQgc3RhdGUgYW5kIG90aGVyIHJlbGV2YW50IHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGExMXkgc3RhdHVzIG1lc3NhZ2VcbiAqL1xuXG5mdW5jdGlvbiBnZXRBMTF5U3RhdHVzTWVzc2FnZSQxKF9yZWYpIHtcbiAgdmFyIGlzT3BlbiA9IF9yZWYuaXNPcGVuLFxuICAgICAgcmVzdWx0Q291bnQgPSBfcmVmLnJlc3VsdENvdW50LFxuICAgICAgcHJldmlvdXNSZXN1bHRDb3VudCA9IF9yZWYucHJldmlvdXNSZXN1bHRDb3VudDtcblxuICBpZiAoIWlzT3Blbikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghcmVzdWx0Q291bnQpIHtcbiAgICByZXR1cm4gJ05vIHJlc3VsdHMgYXJlIGF2YWlsYWJsZS4nO1xuICB9XG5cbiAgaWYgKHJlc3VsdENvdW50ICE9PSBwcmV2aW91c1Jlc3VsdENvdW50KSB7XG4gICAgcmV0dXJuIHJlc3VsdENvdW50ICsgXCIgcmVzdWx0XCIgKyAocmVzdWx0Q291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZScpICsgXCIgYXZhaWxhYmxlLCB1c2UgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZS4gUHJlc3MgRW50ZXIgb3IgU3BhY2UgQmFyIGtleXMgdG8gc2VsZWN0LlwiO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgZGVmYXVsdFByb3BzJDEgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFByb3BzLCB7XG4gIGdldEExMXlTdGF0dXNNZXNzYWdlOiBnZXRBMTF5U3RhdHVzTWVzc2FnZSQxXG59KTtcblxudmFyIE1lbnVLZXlEb3duQXJyb3dEb3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9rZXlkb3duX2Fycm93X2Rvd25fXycgOiAwO1xudmFyIE1lbnVLZXlEb3duQXJyb3dVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9hcnJvd191cF9fJyA6IDE7XG52YXIgTWVudUtleURvd25Fc2NhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fZXNjYXBlX18nIDogMjtcbnZhciBNZW51S2V5RG93bkhvbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25faG9tZV9fJyA6IDM7XG52YXIgTWVudUtleURvd25FbmQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fZW5kX18nIDogNDtcbnZhciBNZW51S2V5RG93bkVudGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9rZXlkb3duX2VudGVyX18nIDogNTtcbnZhciBNZW51S2V5RG93blNwYWNlQnV0dG9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9rZXlkb3duX3NwYWNlX2J1dHRvbl9fJyA6IDY7XG52YXIgTWVudUtleURvd25DaGFyYWN0ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fY2hhcmFjdGVyX18nIDogNztcbnZhciBNZW51Qmx1ciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfYmx1cl9fJyA6IDg7XG52YXIgTWVudU1vdXNlTGVhdmUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X21vdXNlX2xlYXZlX18nIDogOTtcbnZhciBJdGVtTW91c2VNb3ZlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faXRlbV9tb3VzZV9tb3ZlX18nIDogMTA7XG52YXIgSXRlbUNsaWNrID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faXRlbV9jbGlja19fJyA6IDExO1xudmFyIFRvZ2dsZUJ1dHRvbkNsaWNrID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2NsaWNrX18nIDogMTI7XG52YXIgVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93RG93biA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3RvZ2dsZWJ1dHRvbl9rZXlkb3duX2Fycm93X2Rvd25fXycgOiAxMztcbnZhciBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3RvZ2dsZWJ1dHRvbl9rZXlkb3duX2Fycm93X3VwX18nIDogMTQ7XG52YXIgVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3RvZ2dsZWJ1dHRvbl9rZXlkb3duX2NoYXJhY3Rlcl9fJyA6IDE1O1xudmFyIEZ1bmN0aW9uVG9nZ2xlTWVudSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3RvZ2dsZV9tZW51X18nIDogMTY7XG52YXIgRnVuY3Rpb25PcGVuTWVudSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX29wZW5fbWVudV9fJyA6IDE3O1xudmFyIEZ1bmN0aW9uQ2xvc2VNZW51ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fY2xvc2VfbWVudV9fJyA6IDE4O1xudmFyIEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3NldF9oaWdobGlnaHRlZF9pbmRleF9fJyA6IDE5O1xudmFyIEZ1bmN0aW9uU2VsZWN0SXRlbSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3NlbGVjdF9pdGVtX18nIDogMjA7XG52YXIgRnVuY3Rpb25TZXRJbnB1dFZhbHVlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2lucHV0X3ZhbHVlX18nIDogMjE7XG52YXIgRnVuY3Rpb25SZXNldCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3Jlc2V0X18nIDogMjI7XG5cbnZhciBzdGF0ZUNoYW5nZVR5cGVzJDEgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTWVudUtleURvd25BcnJvd0Rvd246IE1lbnVLZXlEb3duQXJyb3dEb3duLFxuICBNZW51S2V5RG93bkFycm93VXA6IE1lbnVLZXlEb3duQXJyb3dVcCxcbiAgTWVudUtleURvd25Fc2NhcGU6IE1lbnVLZXlEb3duRXNjYXBlLFxuICBNZW51S2V5RG93bkhvbWU6IE1lbnVLZXlEb3duSG9tZSxcbiAgTWVudUtleURvd25FbmQ6IE1lbnVLZXlEb3duRW5kLFxuICBNZW51S2V5RG93bkVudGVyOiBNZW51S2V5RG93bkVudGVyLFxuICBNZW51S2V5RG93blNwYWNlQnV0dG9uOiBNZW51S2V5RG93blNwYWNlQnV0dG9uLFxuICBNZW51S2V5RG93bkNoYXJhY3RlcjogTWVudUtleURvd25DaGFyYWN0ZXIsXG4gIE1lbnVCbHVyOiBNZW51Qmx1cixcbiAgTWVudU1vdXNlTGVhdmU6IE1lbnVNb3VzZUxlYXZlLFxuICBJdGVtTW91c2VNb3ZlOiBJdGVtTW91c2VNb3ZlLFxuICBJdGVtQ2xpY2s6IEl0ZW1DbGljayxcbiAgVG9nZ2xlQnV0dG9uQ2xpY2s6IFRvZ2dsZUJ1dHRvbkNsaWNrLFxuICBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duOiBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duLFxuICBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dVcDogVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93VXAsXG4gIFRvZ2dsZUJ1dHRvbktleURvd25DaGFyYWN0ZXI6IFRvZ2dsZUJ1dHRvbktleURvd25DaGFyYWN0ZXIsXG4gIEZ1bmN0aW9uVG9nZ2xlTWVudTogRnVuY3Rpb25Ub2dnbGVNZW51LFxuICBGdW5jdGlvbk9wZW5NZW51OiBGdW5jdGlvbk9wZW5NZW51LFxuICBGdW5jdGlvbkNsb3NlTWVudTogRnVuY3Rpb25DbG9zZU1lbnUsXG4gIEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleDogRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4LFxuICBGdW5jdGlvblNlbGVjdEl0ZW06IEZ1bmN0aW9uU2VsZWN0SXRlbSxcbiAgRnVuY3Rpb25TZXRJbnB1dFZhbHVlOiBGdW5jdGlvblNldElucHV0VmFsdWUsXG4gIEZ1bmN0aW9uUmVzZXQ6IEZ1bmN0aW9uUmVzZXRcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdFNlbGVjdFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICB2YXIgdHlwZSA9IGFjdGlvbi50eXBlLFxuICAgICAgcHJvcHMgPSBhY3Rpb24ucHJvcHMsXG4gICAgICBzaGlmdEtleSA9IGFjdGlvbi5zaGlmdEtleTtcbiAgdmFyIGNoYW5nZXM7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBJdGVtTW91c2VNb3ZlOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEl0ZW1DbGljazpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1thY3Rpb24uaW5kZXhdXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRvZ2dsZUJ1dHRvbktleURvd25DaGFyYWN0ZXI6XG4gICAgICB7XG4gICAgICAgIHZhciBsb3dlcmNhc2VkS2V5ID0gYWN0aW9uLmtleTtcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBcIlwiICsgc3RhdGUuaW5wdXRWYWx1ZSArIGxvd2VyY2FzZWRLZXk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXhCeUNoYXJhY3RlcktleShpbnB1dFZhbHVlLCBzdGF0ZS5zZWxlY3RlZEl0ZW0gPyBwcm9wcy5pdGVtcy5pbmRleE9mKHN0YXRlLnNlbGVjdGVkSXRlbSkgOiAtMSwgcHJvcHMuaXRlbXMsIHByb3BzLml0ZW1Ub1N0cmluZywgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KTtcbiAgICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0sIGl0ZW1JbmRleCA+PSAwICYmIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW2l0ZW1JbmRleF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93RG93bjpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAxLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgpLFxuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93VXA6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXRIaWdobGlnaHRlZEluZGV4T25PcGVuKHByb3BzLCBzdGF0ZSwgLTEsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCksXG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkVudGVyOlxuICAgIGNhc2UgTWVudUtleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKVxuICAgICAgfSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25Ib21lOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkVuZDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldE5leHROb25EaXNhYmxlZEluZGV4KC0xLCBwcm9wcy5pdGVtcy5sZW5ndGggLSAxLCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duRXNjYXBlOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUJsdXI6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkNoYXJhY3RlcjpcbiAgICAgIHtcbiAgICAgICAgdmFyIF9sb3dlcmNhc2VkS2V5ID0gYWN0aW9uLmtleTtcblxuICAgICAgICB2YXIgX2lucHV0VmFsdWUgPSBcIlwiICsgc3RhdGUuaW5wdXRWYWx1ZSArIF9sb3dlcmNhc2VkS2V5O1xuXG4gICAgICAgIHZhciBoaWdobGlnaHRlZEluZGV4ID0gZ2V0SXRlbUluZGV4QnlDaGFyYWN0ZXJLZXkoX2lucHV0VmFsdWUsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLCBwcm9wcy5pdGVtVG9TdHJpbmcsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCk7XG4gICAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWVcbiAgICAgICAgfSwgaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duQXJyb3dEb3duOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyA1IDogMSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIHByb3BzLmNpcmN1bGFyTmF2aWdhdGlvbilcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25BcnJvd1VwOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyAtNSA6IC0xLCBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgcHJvcHMuY2lyY3VsYXJOYXZpZ2F0aW9uKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51TW91c2VMZWF2ZTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IC0xXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRvZ2dsZUJ1dHRvbkNsaWNrOlxuICAgIGNhc2UgRnVuY3Rpb25Ub2dnbGVNZW51OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBzdGF0ZS5pc09wZW4gPyAtMSA6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAwKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvbk9wZW5NZW51OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXRIaWdobGlnaHRlZEluZGV4T25PcGVuKHByb3BzLCBzdGF0ZSwgMClcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25DbG9zZU1lbnU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGFjdGlvbi5oaWdobGlnaHRlZEluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2VsZWN0SXRlbTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLnNlbGVjdGVkSXRlbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblNldElucHV0VmFsdWU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblJlc2V0OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBpc09wZW46IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lzT3BlbicpLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ3NlbGVjdGVkSXRlbScpLFxuICAgICAgICBpbnB1dFZhbHVlOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpbnB1dFZhbHVlJylcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgY2FsbGVkIHdpdGhvdXQgcHJvcGVyIGFjdGlvbiB0eXBlLicpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgY2hhbmdlcyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxudmFyIHZhbGlkYXRlUHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xubnVsbCA6IGdldFByb3BUeXBlc1ZhbGlkYXRvcih1c2VTZWxlY3QsIHByb3BUeXBlcyk7XG51c2VTZWxlY3Quc3RhdGVDaGFuZ2VUeXBlcyA9IHN0YXRlQ2hhbmdlVHlwZXMkMTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0KHVzZXJQcm9wcykge1xuICBpZiAodXNlclByb3BzID09PSB2b2lkIDApIHtcbiAgICB1c2VyUHJvcHMgPSB7fTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXModXNlclByb3BzKTtcbiAgfSAvLyBQcm9wcyBkZWZhdWx0cyBhbmQgZGVzdHJ1Y3R1cmluZy5cblxuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMkMSwgdXNlclByb3BzKTtcblxuICB2YXIgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIHNjcm9sbEludG9WaWV3ID0gcHJvcHMuc2Nyb2xsSW50b1ZpZXcsXG4gICAgICBlbnZpcm9ubWVudCA9IHByb3BzLmVudmlyb25tZW50LFxuICAgICAgaW5pdGlhbElzT3BlbiA9IHByb3BzLmluaXRpYWxJc09wZW4sXG4gICAgICBkZWZhdWx0SXNPcGVuID0gcHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgIGl0ZW1Ub1N0cmluZyA9IHByb3BzLml0ZW1Ub1N0cmluZyxcbiAgICAgIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlID0gcHJvcHMuZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UsXG4gICAgICBnZXRBMTF5U3RhdHVzTWVzc2FnZSA9IHByb3BzLmdldEExMXlTdGF0dXNNZXNzYWdlOyAvLyBJbml0aWFsIHN0YXRlIGRlcGVuZGluZyBvbiBjb250cm9sbGVkIHByb3BzLlxuXG4gIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZFJlZHVjZXIgPSB1c2VDb250cm9sbGVkUmVkdWNlcihkb3duc2hpZnRTZWxlY3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUNvbnRyb2xsZWRSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMV07XG5cbiAgdmFyIGlzT3BlbiA9IHN0YXRlLmlzT3BlbixcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgc2VsZWN0ZWRJdGVtID0gc3RhdGUuc2VsZWN0ZWRJdGVtLFxuICAgICAgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWU7IC8vIEVsZW1lbnQgZWZzLlxuXG4gIHZhciB0b2dnbGVCdXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBtZW51UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXRlbVJlZnMgPSB1c2VSZWYoKTtcbiAgaXRlbVJlZnMuY3VycmVudCA9IHt9OyAvLyB1c2VkIG5vdCB0byB0cmlnZ2VyIG1lbnUgYmx1ciBhY3Rpb24gaW4gc29tZSBzY2VuYXJpb3MuXG5cbiAgdmFyIHNob3VsZEJsdXJSZWYgPSB1c2VSZWYodHJ1ZSk7IC8vIHVzZWQgdG8ga2VlcCB0aGUgaW5wdXRWYWx1ZSBjbGVhclRpbWVvdXQgb2JqZWN0IGJldHdlZW4gcmVuZGVycy5cblxuICB2YXIgY2xlYXJUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpOyAvLyBwcmV2ZW50IGlkIHJlLWdlbmVyYXRpb24gYmV0d2VlbiByZW5kZXJzLlxuXG4gIHZhciBlbGVtZW50SWRzUmVmID0gdXNlUmVmKGdldEVsZW1lbnRJZHMocHJvcHMpKTsgLy8gdXNlZCB0byBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIGhhZCBvbiBwcmV2aW91cyBjeWNsZS5cblxuICB2YXIgcHJldmlvdXNSZXN1bHRDb3VudFJlZiA9IHVzZVJlZigpO1xuICB2YXIgaXNJbml0aWFsTW91bnRSZWYgPSB1c2VSZWYodHJ1ZSk7IC8vIHV0aWxpdHkgY2FsbGJhY2sgdG8gZ2V0IGl0ZW0gZWxlbWVudC5cblxuICB2YXIgbGF0ZXN0ID0gdXNlTGF0ZXN0UmVmKHtcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgcHJvcHM6IHByb3BzXG4gIH0pOyAvLyBTb21lIHV0aWxzLlxuXG4gIHZhciBnZXRJdGVtTm9kZUZyb21JbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBpdGVtUmVmcy5jdXJyZW50W2VsZW1lbnRJZHNSZWYuY3VycmVudC5nZXRJdGVtSWQoaW5kZXgpXTtcbiAgfTsgLy8gRWZmZWN0cy5cbiAgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc3RhdGUuXG5cblxuICB1c2VBMTF5TWVzc2FnZVNldHRlcihnZXRBMTF5U3RhdHVzTWVzc2FnZSwgW2lzT3BlbiwgaGlnaGxpZ2h0ZWRJbmRleCwgaW5wdXRWYWx1ZSwgaXRlbXNdLCBfZXh0ZW5kcyh7XG4gICAgaXNJbml0aWFsTW91bnQ6IGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQsXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudDogcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50LFxuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQsXG4gICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmdcbiAgfSwgc3RhdGUpKTsgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc2VsZWN0ZWRJdGVtLlxuXG4gIHVzZUExMXlNZXNzYWdlU2V0dGVyKGdldEExMXlTZWxlY3Rpb25NZXNzYWdlLCBbc2VsZWN0ZWRJdGVtXSwgX2V4dGVuZHMoe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCxcbiAgICBpdGVtczogaXRlbXMsXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LFxuICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nXG4gIH0sIHN0YXRlKSk7IC8vIFNjcm9sbCBvbiBoaWdobGlnaHRlZCBpdGVtIGlmIGNoYW5nZSBjb21lcyBmcm9tIGtleWJvYXJkLlxuXG4gIHZhciBzaG91bGRTY3JvbGxSZWYgPSB1c2VTY3JvbGxJbnRvVmlldyh7XG4gICAgbWVudUVsZW1lbnQ6IG1lbnVSZWYuY3VycmVudCxcbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIGl0ZW1SZWZzOiBpdGVtUmVmcyxcbiAgICBzY3JvbGxJbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG4gICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gIH0pOyAvLyBTZXRzIGNsZWFudXAgZm9yIHRoZSBrZXlzU29GYXIgYWZ0ZXIgNTAwbXMuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbml0IHRoZSBjbGVhbiBmdW5jdGlvbiBoZXJlIGFzIHdlIG5lZWQgYWNjZXNzIHRvIGRpc3BhdGNoLlxuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXRSZWYuY3VycmVudCA9IGRlYm91bmNlKGZ1bmN0aW9uIChvdXRlckRpc3BhdGNoKSB7XG4gICAgICAgIG91dGVyRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0UmVmLmN1cnJlbnQoZGlzcGF0Y2gpO1xuICB9LCBbZGlzcGF0Y2gsIGlucHV0VmFsdWVdKTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuICAvKiBDb250cm9scyB0aGUgZm9jdXMgb24gdGhlIG1lbnUgb3IgdGhlIHRvZ2dsZSBidXR0b24uICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEb24ndCBmb2N1cyBtZW51IG9uIGZpcnN0IHJlbmRlci5cbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgLy8gVW5sZXNzIGl0IHdhcyBpbml0aWFsaXNlZCBhcyBvcGVuLlxuICAgICAgaWYgKChpbml0aWFsSXNPcGVuIHx8IGRlZmF1bHRJc09wZW4gfHwgaXNPcGVuKSAmJiBtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVudVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZvY3VzIG1lbnUgb24gb3Blbi5cblxuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLy8gaXN0YW5idWwgaWdub3JlIGVsc2VcbiAgICAgIGlmIChtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVudVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZvY3VzIHRvZ2dsZUJ1dHRvbiBvbiBjbG9zZSwgYnV0IG5vdCBpZiBpdCB3YXMgY2xvc2VkIHdpdGggKFNoaWZ0KylUYWIuXG5cblxuICAgIGlmIChlbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAodG9nZ2xlQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2hvdWxkQmx1clJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUJ1dHRvblJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2lzT3Blbl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50ID0gaXRlbXMubGVuZ3RoO1xuICB9KTsgLy8gQWRkIG1vdXNlL3RvdWNoIGV2ZW50cyB0byBkb2N1bWVudC5cblxuICB2YXIgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmID0gdXNlTW91c2VBbmRUb3VjaFRyYWNrZXIoaXNPcGVuLCBbbWVudVJlZiwgdG9nZ2xlQnV0dG9uUmVmXSwgZW52aXJvbm1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBNZW51Qmx1clxuICAgIH0pO1xuICB9KTtcbiAgdmFyIHNldEdldHRlclByb3BDYWxsSW5mbyA9IHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcignZ2V0TWVudVByb3BzJywgJ2dldFRvZ2dsZUJ1dHRvblByb3BzJyk7IC8vIE1ha2UgaW5pdGlhbCByZWYgZmFsc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTsgLy8gRXZlbnQgaGFuZGxlciBmdW5jdGlvbnMuXG5cbiAgdmFyIHRvZ2dsZUJ1dHRvbktleURvd25IYW5kbGVycyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBBcnJvd0Rvd246IGZ1bmN0aW9uIEFycm93RG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93RG93bixcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd1VwLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBtZW51S2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNZW51S2V5RG93bkFycm93RG93bixcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duQXJyb3dVcCxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEhvbWU6IGZ1bmN0aW9uIEhvbWUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duSG9tZSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRW5kOiBmdW5jdGlvbiBFbmQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duRW5kLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFc2NhcGU6IGZ1bmN0aW9uIEVzY2FwZSgpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duRXNjYXBlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEVudGVyOiBmdW5jdGlvbiBFbnRlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25FbnRlclxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAnICc6IGZ1bmN0aW9uIF8oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duU3BhY2VCdXR0b25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7IC8vIEFjdGlvbiBmdW5jdGlvbnMuXG5cbiAgdmFyIHRvZ2dsZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25Ub2dnbGVNZW51XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgY2xvc2VNZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uQ2xvc2VNZW51XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgb3Blbk1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25PcGVuTWVudVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldEhpZ2hsaWdodGVkSW5kZXggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SGlnaGxpZ2h0ZWRJbmRleCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IG5ld0hpZ2hsaWdodGVkSW5kZXhcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZWxlY3RJdGVtID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2VsZWN0SXRlbSxcbiAgICAgIHNlbGVjdGVkSXRlbTogbmV3U2VsZWN0ZWRJdGVtXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgcmVzZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25SZXNldFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldElucHV0VmFsdWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SW5wdXRWYWx1ZSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSxcbiAgICAgIGlucHV0VmFsdWU6IG5ld0lucHV0VmFsdWVcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7IC8vIEdldHRlciBmdW5jdGlvbnMuXG5cbiAgdmFyIGdldExhYmVsUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobGFiZWxQcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBpZDogZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQsXG4gICAgICBodG1sRm9yOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQudG9nZ2xlQnV0dG9uSWRcbiAgICB9LCBsYWJlbFByb3BzKTtcbiAgfSwgW10pO1xuICB2YXIgZ2V0TWVudVByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wLCBfdGVtcDIpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlID0gX3JlZi5vbk1vdXNlTGVhdmUsXG4gICAgICAgIF9yZWYkcmVmS2V5ID0gX3JlZi5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWYkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYkcmVmS2V5LFxuICAgICAgICBvbktleURvd24gPSBfcmVmLm9uS2V5RG93bixcbiAgICAgICAgb25CbHVyID0gX3JlZi5vbkJsdXIsXG4gICAgICAgIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wib25Nb3VzZUxlYXZlXCIsIFwicmVmS2V5XCIsIFwib25LZXlEb3duXCIsIFwib25CbHVyXCIsIFwicmVmXCJdKTtcblxuICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYyJHN1cHByZXNzUmVmRXJybyA9IF9yZWYyLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgdmFyIGxhdGVzdFN0YXRlID0gbGF0ZXN0LmN1cnJlbnQuc3RhdGU7XG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRNZW51UHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIG1lbnVSZWYpO1xuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChtZW51Tm9kZSkge1xuICAgICAgbWVudVJlZi5jdXJyZW50ID0gbWVudU5vZGU7XG4gICAgfSksIF9leHRlbmRzMi5pZCA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC5tZW51SWQsIF9leHRlbmRzMi5yb2xlID0gJ2xpc3Rib3gnLCBfZXh0ZW5kczJbJ2FyaWEtbGFiZWxsZWRieSddID0gZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQsIF9leHRlbmRzMi50YWJJbmRleCA9IC0xLCBfZXh0ZW5kczIpLCBsYXRlc3RTdGF0ZS5pc09wZW4gJiYgbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+IC0xICYmIHtcbiAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpXG4gICAgfSwge1xuICAgICAgb25Nb3VzZUxlYXZlOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTGVhdmUsIGZ1bmN0aW9uIG1lbnVIYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudU1vdXNlTGVhdmVcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIG9uS2V5RG93bjogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBmdW5jdGlvbiBtZW51SGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgbWVudUtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgbWVudUtleURvd25IYW5kbGVyc1trZXldKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FjY2VwdGVkQ2hhcmFjdGVyS2V5KGtleSkpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBNZW51S2V5RG93bkNoYXJhY3RlcixcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgb25CbHVyOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkJsdXIsIGZ1bmN0aW9uIG1lbnVIYW5kbGVCbHVyKCkge1xuICAgICAgICAvLyBpZiB0aGUgYmx1ciB3YXMgYSByZXN1bHQgb2Ygc2VsZWN0aW9uLCB3ZSBkb24ndCB0cmlnZ2VyIHRoaXMgYWN0aW9uLlxuICAgICAgICBpZiAoc2hvdWxkQmx1clJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3VsZEJsdXJSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNob3VsZEJsdXIgPSAhbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNNb3VzZURvd247XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbiAgICAgICAgaWYgKHNob3VsZEJsdXIpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBNZW51Qmx1clxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdCwgbWVudUtleURvd25IYW5kbGVycywgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm9dKTtcbiAgdmFyIGdldFRvZ2dsZUJ1dHRvblByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wMywgX3RlbXA0KSB7XG4gICAgdmFyIF9leHRlbmRzMztcblxuICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgIG9uQ2xpY2sgPSBfcmVmMy5vbkNsaWNrLFxuICAgICAgICBvbktleURvd24gPSBfcmVmMy5vbktleURvd24sXG4gICAgICAgIF9yZWYzJHJlZktleSA9IF9yZWYzLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjMkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYzJHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjMucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcIm9uQ2xpY2tcIiwgXCJvbktleURvd25cIiwgXCJyZWZLZXlcIiwgXCJyZWZcIl0pO1xuXG4gICAgdmFyIF9yZWY0ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCxcbiAgICAgICAgX3JlZjQkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjQuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgc3VwcHJlc3NSZWZFcnJvciA9IF9yZWY0JHN1cHByZXNzUmVmRXJybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRzdXBwcmVzc1JlZkVycm87XG5cbiAgICB2YXIgdG9nZ2xlQnV0dG9uSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFRvZ2dsZUJ1dHRvbkNsaWNrXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHRvZ2dsZUJ1dHRvbkhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgIGlmIChrZXkgJiYgdG9nZ2xlQnV0dG9uS2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgdG9nZ2xlQnV0dG9uS2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChpc0FjY2VwdGVkQ2hhcmFjdGVyS2V5KGtleSkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFRvZ2dsZUJ1dHRvbktleURvd25DaGFyYWN0ZXIsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgdG9nZ2xlUHJvcHMgPSBfZXh0ZW5kcygoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uICh0b2dnbGVCdXR0b25Ob2RlKSB7XG4gICAgICB0b2dnbGVCdXR0b25SZWYuY3VycmVudCA9IHRvZ2dsZUJ1dHRvbk5vZGU7XG4gICAgfSksIF9leHRlbmRzMy5pZCA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC50b2dnbGVCdXR0b25JZCwgX2V4dGVuZHMzWydhcmlhLWhhc3BvcHVwJ10gPSAnbGlzdGJveCcsIF9leHRlbmRzM1snYXJpYS1leHBhbmRlZCddID0gbGF0ZXN0LmN1cnJlbnQuc3RhdGUuaXNPcGVuLCBfZXh0ZW5kczNbJ2FyaWEtbGFiZWxsZWRieSddID0gZWxlbWVudElkc1JlZi5jdXJyZW50LmxhYmVsSWQgKyBcIiBcIiArIGVsZW1lbnRJZHNSZWYuY3VycmVudC50b2dnbGVCdXR0b25JZCwgX2V4dGVuZHMzKSwgcmVzdCk7XG5cbiAgICBpZiAoIXJlc3QuZGlzYWJsZWQpIHtcbiAgICAgIHRvZ2dsZVByb3BzLm9uQ2xpY2sgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkNsaWNrLCB0b2dnbGVCdXR0b25IYW5kbGVDbGljayk7XG4gICAgICB0b2dnbGVQcm9wcy5vbktleURvd24gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIHRvZ2dsZUJ1dHRvbkhhbmRsZUtleURvd24pO1xuICAgIH1cblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0VG9nZ2xlQnV0dG9uUHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIHRvZ2dsZUJ1dHRvblJlZik7XG4gICAgcmV0dXJuIHRvZ2dsZVByb3BzO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdCwgdG9nZ2xlQnV0dG9uS2V5RG93bkhhbmRsZXJzLCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm9dKTtcbiAgdmFyIGdldEl0ZW1Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDUpIHtcbiAgICB2YXIgX2V4dGVuZHM0O1xuXG4gICAgdmFyIF9yZWY1ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgaXRlbSA9IF9yZWY1Lml0ZW0sXG4gICAgICAgIGluZGV4ID0gX3JlZjUuaW5kZXgsXG4gICAgICAgIG9uTW91c2VNb3ZlID0gX3JlZjUub25Nb3VzZU1vdmUsXG4gICAgICAgIG9uQ2xpY2sgPSBfcmVmNS5vbkNsaWNrLFxuICAgICAgICBfcmVmNSRyZWZLZXkgPSBfcmVmNS5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWY1JHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmNSRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWY1LnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY1LCBbXCJpdGVtXCIsIFwiaW5kZXhcIiwgXCJvbk1vdXNlTW92ZVwiLCBcIm9uQ2xpY2tcIiwgXCJyZWZLZXlcIiwgXCJyZWZcIl0pO1xuXG4gICAgdmFyIF9sYXRlc3QkY3VycmVudCA9IGxhdGVzdC5jdXJyZW50LFxuICAgICAgICBsYXRlc3RTdGF0ZSA9IF9sYXRlc3QkY3VycmVudC5zdGF0ZSxcbiAgICAgICAgbGF0ZXN0UHJvcHMgPSBfbGF0ZXN0JGN1cnJlbnQucHJvcHM7XG5cbiAgICB2YXIgaXRlbUhhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFNjcm9sbFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEl0ZW1Nb3VzZU1vdmUsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpdGVtSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEl0ZW1DbGljayxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGl0ZW1JbmRleCA9IGdldEl0ZW1JbmRleChpbmRleCwgaXRlbSwgbGF0ZXN0UHJvcHMuaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzcyBlaXRoZXIgaXRlbSBvciBpdGVtIGluZGV4IGluIGdldEl0ZW1Qcm9wcyEnKTtcbiAgICB9XG5cbiAgICB2YXIgaXRlbVByb3BzID0gX2V4dGVuZHMoKF9leHRlbmRzNCA9IHtcbiAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBcIlwiICsgKGl0ZW1JbmRleCA9PT0gbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCksXG4gICAgICBpZDogZWxlbWVudElkc1JlZi5jdXJyZW50LmdldEl0ZW1JZChpdGVtSW5kZXgpXG4gICAgfSwgX2V4dGVuZHM0W3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGl0ZW1Ob2RlKSB7XG4gICAgICBpZiAoaXRlbU5vZGUpIHtcbiAgICAgICAgaXRlbVJlZnMuY3VycmVudFtlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGl0ZW1JbmRleCldID0gaXRlbU5vZGU7XG4gICAgICB9XG4gICAgfSksIF9leHRlbmRzNCksIHJlc3QpO1xuXG4gICAgaWYgKCFyZXN0LmRpc2FibGVkKSB7XG4gICAgICBpdGVtUHJvcHMub25Nb3VzZU1vdmUgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTW92ZSwgaXRlbUhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBpdGVtUHJvcHMub25DbGljayA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGl0ZW1IYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1Qcm9wcztcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3QsIHNob3VsZFNjcm9sbFJlZl0pO1xuICByZXR1cm4ge1xuICAgIC8vIHByb3AgZ2V0dGVycy5cbiAgICBnZXRUb2dnbGVCdXR0b25Qcm9wczogZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHM6IGdldE1lbnVQcm9wcyxcbiAgICBnZXRJdGVtUHJvcHM6IGdldEl0ZW1Qcm9wcyxcbiAgICAvLyBhY3Rpb25zLlxuICAgIHRvZ2dsZU1lbnU6IHRvZ2dsZU1lbnUsXG4gICAgb3Blbk1lbnU6IG9wZW5NZW51LFxuICAgIGNsb3NlTWVudTogY2xvc2VNZW51LFxuICAgIHNldEhpZ2hsaWdodGVkSW5kZXg6IHNldEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSxcbiAgICByZXNldDogcmVzZXQsXG4gICAgc2V0SW5wdXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICAvLyBzdGF0ZS5cbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtLFxuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfTtcbn1cblxudmFyIElucHV0S2V5RG93bkFycm93RG93biA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDA7XG52YXIgSW5wdXRLZXlEb3duQXJyb3dVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fYXJyb3dfdXBfXycgOiAxO1xudmFyIElucHV0S2V5RG93bkVzY2FwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fZXNjYXBlX18nIDogMjtcbnZhciBJbnB1dEtleURvd25Ib21lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfa2V5ZG93bl9ob21lX18nIDogMztcbnZhciBJbnB1dEtleURvd25FbmQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9rZXlkb3duX2VuZF9fJyA6IDQ7XG52YXIgSW5wdXRLZXlEb3duRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9rZXlkb3duX2VudGVyX18nIDogNTtcbnZhciBJbnB1dENoYW5nZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2NoYW5nZV9fJyA6IDY7XG52YXIgSW5wdXRCbHVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfYmx1cl9fJyA6IDc7XG52YXIgTWVudU1vdXNlTGVhdmUkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfbW91c2VfbGVhdmVfXycgOiA4O1xudmFyIEl0ZW1Nb3VzZU1vdmUkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2l0ZW1fbW91c2VfbW92ZV9fJyA6IDk7XG52YXIgSXRlbUNsaWNrJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX2NsaWNrX18nIDogMTA7XG52YXIgVG9nZ2xlQnV0dG9uQ2xpY2skMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3RvZ2dsZWJ1dHRvbl9jbGlja19fJyA6IDExO1xudmFyIEZ1bmN0aW9uVG9nZ2xlTWVudSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fdG9nZ2xlX21lbnVfXycgOiAxMjtcbnZhciBGdW5jdGlvbk9wZW5NZW51JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9vcGVuX21lbnVfXycgOiAxMztcbnZhciBGdW5jdGlvbkNsb3NlTWVudSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fY2xvc2VfbWVudV9fJyA6IDE0O1xudmFyIEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2hpZ2hsaWdodGVkX2luZGV4X18nIDogMTU7XG52YXIgRnVuY3Rpb25TZWxlY3RJdGVtJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZWxlY3RfaXRlbV9fJyA6IDE2O1xudmFyIEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2lucHV0X3ZhbHVlX18nIDogMTc7XG52YXIgRnVuY3Rpb25SZXNldCQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fcmVzZXRfXycgOiAxODtcbnZhciBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19jb250cm9sbGVkX3Byb3BfdXBkYXRlZF9zZWxlY3RlZF9pdGVtX18nIDogMTk7XG5cbnZhciBzdGF0ZUNoYW5nZVR5cGVzJDIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgSW5wdXRLZXlEb3duQXJyb3dEb3duOiBJbnB1dEtleURvd25BcnJvd0Rvd24sXG4gIElucHV0S2V5RG93bkFycm93VXA6IElucHV0S2V5RG93bkFycm93VXAsXG4gIElucHV0S2V5RG93bkVzY2FwZTogSW5wdXRLZXlEb3duRXNjYXBlLFxuICBJbnB1dEtleURvd25Ib21lOiBJbnB1dEtleURvd25Ib21lLFxuICBJbnB1dEtleURvd25FbmQ6IElucHV0S2V5RG93bkVuZCxcbiAgSW5wdXRLZXlEb3duRW50ZXI6IElucHV0S2V5RG93bkVudGVyLFxuICBJbnB1dENoYW5nZTogSW5wdXRDaGFuZ2UsXG4gIElucHV0Qmx1cjogSW5wdXRCbHVyLFxuICBNZW51TW91c2VMZWF2ZTogTWVudU1vdXNlTGVhdmUkMSxcbiAgSXRlbU1vdXNlTW92ZTogSXRlbU1vdXNlTW92ZSQxLFxuICBJdGVtQ2xpY2s6IEl0ZW1DbGljayQxLFxuICBUb2dnbGVCdXR0b25DbGljazogVG9nZ2xlQnV0dG9uQ2xpY2skMSxcbiAgRnVuY3Rpb25Ub2dnbGVNZW51OiBGdW5jdGlvblRvZ2dsZU1lbnUkMSxcbiAgRnVuY3Rpb25PcGVuTWVudTogRnVuY3Rpb25PcGVuTWVudSQxLFxuICBGdW5jdGlvbkNsb3NlTWVudTogRnVuY3Rpb25DbG9zZU1lbnUkMSxcbiAgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgkMSxcbiAgRnVuY3Rpb25TZWxlY3RJdGVtOiBGdW5jdGlvblNlbGVjdEl0ZW0kMSxcbiAgRnVuY3Rpb25TZXRJbnB1dFZhbHVlOiBGdW5jdGlvblNldElucHV0VmFsdWUkMSxcbiAgRnVuY3Rpb25SZXNldDogRnVuY3Rpb25SZXNldCQxLFxuICBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW06IENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbVxufSk7XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRJZHMkMShfcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBpbnB1dElkID0gX3JlZi5pbnB1dElkLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImlkXCIsIFwiaW5wdXRJZFwiXSk7XG5cbiAgdmFyIHVuaXF1ZUlkID0gaWQgPT09IHVuZGVmaW5lZCA/IFwiZG93bnNoaWZ0LVwiICsgZ2VuZXJhdGVJZCgpIDogaWQ7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgaW5wdXRJZDogaW5wdXRJZCB8fCB1bmlxdWVJZCArIFwiLWlucHV0XCJcbiAgfSwgZ2V0RWxlbWVudElkcyhfZXh0ZW5kcyh7XG4gICAgaWQ6IGlkXG4gIH0sIHJlc3QpKSk7XG59XG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUkMShwcm9wcykge1xuICB2YXIgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgdmFyIHNlbGVjdGVkSXRlbSA9IGluaXRpYWxTdGF0ZS5zZWxlY3RlZEl0ZW07XG4gIHZhciBpbnB1dFZhbHVlID0gaW5pdGlhbFN0YXRlLmlucHV0VmFsdWU7XG5cbiAgaWYgKGlucHV0VmFsdWUgPT09ICcnICYmIHNlbGVjdGVkSXRlbSAmJiBwcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHByb3BzLmluaXRpYWxJbnB1dFZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcHMuaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW5wdXRWYWx1ZSA9IHByb3BzLml0ZW1Ub1N0cmluZyhzZWxlY3RlZEl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUsIHtcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gIH0pO1xufVxudmFyIHByb3BUeXBlcyQxID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEExMXlTdGF0dXNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaXJjdWxhck5hdmlnYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBoaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBpbml0aWFsSXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBkZWZhdWx0U2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0SW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5pdGlhbElucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEl0ZW1JZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdGVkSXRlbUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGlnaGxpZ2h0ZWRJbmRleENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbklzT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KVxufTtcbi8qKlxuICogVGhlIHVzZUNvbWJvYm94IHZlcnNpb24gb2YgdXNlQ29udHJvbGxlZFJlZHVjZXIsIHdoaWNoIGFsc29cbiAqIGNoZWNrcyBpZiB0aGUgY29udHJvbGxlZCBwcm9wIHNlbGVjdGVkSXRlbSBjaGFuZ2VkIGJldHdlZW5cbiAqIHJlbmRlcnMuIElmIHNvLCBpdCB3aWxsIGFsc28gdXBkYXRlIGlucHV0VmFsdWUgd2l0aCBpdHNcbiAqIHN0cmluZyBlcXVpdmFsZW50LiBJdCB1c2VzIHRoZSBjb21tb24gdXNlRW5oYW5jZWRSZWR1Y2VyIHRvXG4gKiBjb21wdXRlIHRoZSByZXN0IG9mIHRoZSBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIFJlZHVjZXIgZnVuY3Rpb24gZnJvbSBkb3duc2hpZnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5pdGlhbFN0YXRlIEluaXRpYWwgc3RhdGUgb2YgdGhlIGhvb2suXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIGhvb2sgcHJvcHMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IHdpdGggdGhlIHN0YXRlIGFuZCBhbiBhY3Rpb24gZGlzcGF0Y2hlci5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb250cm9sbGVkUmVkdWNlciQxKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpIHtcbiAgdmFyIHByZXZpb3VzU2VsZWN0ZWRJdGVtUmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIF91c2VFbmhhbmNlZFJlZHVjZXIgPSB1c2VFbmhhbmNlZFJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcyksXG4gICAgICBzdGF0ZSA9IF91c2VFbmhhbmNlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VFbmhhbmNlZFJlZHVjZXJbMV07IC8vIFRvRG86IGlmIG5lZWRlZCwgbWFrZSBzYW1lIGFwcHJvYWNoIGFzIHNlbGVjdGVkSXRlbUNoYW5nZWQgZnJvbSBEb3duc2hpZnQuXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0NvbnRyb2xsZWRQcm9wKHByb3BzLCAnc2VsZWN0ZWRJdGVtJykpIHtcbiAgICAgIGlmIChwcmV2aW91c1NlbGVjdGVkSXRlbVJlZi5jdXJyZW50ICE9PSBwcm9wcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBwcm9wcy5pdGVtVG9TdHJpbmcocHJvcHMuc2VsZWN0ZWRJdGVtKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcHJldmlvdXNTZWxlY3RlZEl0ZW1SZWYuY3VycmVudCA9IHN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gcHJldmlvdXNTZWxlY3RlZEl0ZW1SZWYuY3VycmVudCA/IHByb3BzLnNlbGVjdGVkSXRlbSA6IHN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW2dldFN0YXRlKHN0YXRlLCBwcm9wcyksIGRpc3BhdGNoXTtcbn1cbnZhciBkZWZhdWx0UHJvcHMkMiA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IGdldEExMXlTdGF0dXNNZXNzYWdlLFxuICBjaXJjdWxhck5hdmlnYXRpb246IHRydWVcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdFVzZUNvbWJvYm94UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHNoaWZ0S2V5ID0gYWN0aW9uLnNoaWZ0S2V5O1xuICB2YXIgY2hhbmdlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEl0ZW1Nb3VzZU1vdmUkMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGFjdGlvbi5pbmRleFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJdGVtQ2xpY2skMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1thY3Rpb24uaW5kZXhdLFxuICAgICAgICBpbnB1dFZhbHVlOiBwcm9wcy5pdGVtVG9TdHJpbmcocHJvcHMuaXRlbXNbYWN0aW9uLmluZGV4XSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duQXJyb3dEb3duOlxuICAgICAgaWYgKHN0YXRlLmlzT3Blbikge1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldE5leHRXcmFwcGluZ0luZGV4KHNoaWZ0S2V5ID8gNSA6IDEsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBwcm9wcy5jaXJjdWxhck5hdmlnYXRpb24pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAxLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgpLFxuICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duQXJyb3dVcDpcbiAgICAgIGlmIChzdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0V3JhcHBpbmdJbmRleChzaGlmdEtleSA/IC01IDogLTEsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBwcm9wcy5jaXJjdWxhck5hdmlnYXRpb24pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAtMSwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KSxcbiAgICAgICAgICBpc09wZW46IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElucHV0S2V5RG93bkVudGVyOlxuICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5pc09wZW4gJiYgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XSxcbiAgICAgICAgaXNPcGVuOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpc09wZW4nKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBpbnB1dFZhbHVlOiBwcm9wcy5pdGVtVG9TdHJpbmcocHJvcHMuaXRlbXNbc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleF0pXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25Fc2NhcGU6XG4gICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfSwgIXN0YXRlLmlzT3BlbiAmJiB7XG4gICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElucHV0S2V5RG93bkhvbWU6XG4gICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe30sIHN0YXRlLmlzT3BlbiAmJiB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldE5leHROb25EaXNhYmxlZEluZGV4KDEsIDAsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBmYWxzZSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElucHV0S2V5RG93bkVuZDpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuaXNPcGVuICYmIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoLTEsIHByb3BzLml0ZW1zLmxlbmd0aCAtIDEsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBmYWxzZSlcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIElucHV0Qmx1cjpcbiAgICAgIGlmIChzdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IC0xXG4gICAgICAgIH0sIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXggPj0gMCAmJiBhY3Rpb24uc2VsZWN0SXRlbSAmJiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBwcm9wcy5pdGVtVG9TdHJpbmcocHJvcHMuaXRlbXNbc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRDaGFuZ2U6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgaW5wdXRWYWx1ZTogYWN0aW9uLmlucHV0VmFsdWVcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudU1vdXNlTGVhdmUkMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IC0xXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRvZ2dsZUJ1dHRvbkNsaWNrJDE6XG4gICAgY2FzZSBGdW5jdGlvblRvZ2dsZU1lbnUkMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogc3RhdGUuaXNPcGVuID8gLTEgOiBnZXRIaWdobGlnaHRlZEluZGV4T25PcGVuKHByb3BzLCBzdGF0ZSwgMClcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25PcGVuTWVudSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXRIaWdobGlnaHRlZEluZGV4T25PcGVuKHByb3BzLCBzdGF0ZSwgMClcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25DbG9zZU1lbnUkMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4JDE6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBhY3Rpb24uaGlnaGxpZ2h0ZWRJbmRleFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblNlbGVjdEl0ZW0kMTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLnNlbGVjdGVkSXRlbSxcbiAgICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuaXRlbVRvU3RyaW5nKGFjdGlvbi5zZWxlY3RlZEl0ZW0pXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbTpcbiAgICBjYXNlIEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaW5wdXRWYWx1ZTogYWN0aW9uLmlucHV0VmFsdWVcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25SZXNldCQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBpc09wZW46IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lzT3BlbicpLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ3NlbGVjdGVkSXRlbScpLFxuICAgICAgICBpbnB1dFZhbHVlOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpbnB1dFZhbHVlJylcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgY2FsbGVkIHdpdGhvdXQgcHJvcGVyIGFjdGlvbiB0eXBlLicpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgY2hhbmdlcyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxudmFyIHZhbGlkYXRlUHJvcFR5cGVzJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5udWxsIDogZ2V0UHJvcFR5cGVzVmFsaWRhdG9yKHVzZUNvbWJvYm94LCBwcm9wVHlwZXMkMSk7XG51c2VDb21ib2JveC5zdGF0ZUNoYW5nZVR5cGVzID0gc3RhdGVDaGFuZ2VUeXBlcyQyO1xuXG5mdW5jdGlvbiB1c2VDb21ib2JveCh1c2VyUHJvcHMpIHtcbiAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgdXNlclByb3BzID0ge307XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzJDEodXNlclByb3BzKTtcbiAgfSAvLyBQcm9wcyBkZWZhdWx0cyBhbmQgZGVzdHJ1Y3R1cmluZy5cblxuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMkMiwgdXNlclByb3BzKTtcblxuICB2YXIgaW5pdGlhbElzT3BlbiA9IHByb3BzLmluaXRpYWxJc09wZW4sXG4gICAgICBkZWZhdWx0SXNPcGVuID0gcHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgIGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBzY3JvbGxJbnRvVmlldyA9IHByb3BzLnNjcm9sbEludG9WaWV3LFxuICAgICAgZW52aXJvbm1lbnQgPSBwcm9wcy5lbnZpcm9ubWVudCxcbiAgICAgIGdldEExMXlTdGF0dXNNZXNzYWdlID0gcHJvcHMuZ2V0QTExeVN0YXR1c01lc3NhZ2UsXG4gICAgICBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSA9IHByb3BzLmdldEExMXlTZWxlY3Rpb25NZXNzYWdlLFxuICAgICAgaXRlbVRvU3RyaW5nID0gcHJvcHMuaXRlbVRvU3RyaW5nOyAvLyBJbml0aWFsIHN0YXRlIGRlcGVuZGluZyBvbiBjb250cm9sbGVkIHByb3BzLlxuXG4gIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUkMShwcm9wcyk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkUmVkdWNlciA9IHVzZUNvbnRyb2xsZWRSZWR1Y2VyJDEoZG93bnNoaWZ0VXNlQ29tYm9ib3hSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUNvbnRyb2xsZWRSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMV07XG5cbiAgdmFyIGlzT3BlbiA9IHN0YXRlLmlzT3BlbixcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgc2VsZWN0ZWRJdGVtID0gc3RhdGUuc2VsZWN0ZWRJdGVtLFxuICAgICAgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWU7IC8vIEVsZW1lbnQgcmVmcy5cblxuICB2YXIgbWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGl0ZW1SZWZzID0gdXNlUmVmKCk7XG4gIHZhciBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHRvZ2dsZUJ1dHRvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGNvbWJvYm94UmVmID0gdXNlUmVmKG51bGwpO1xuICBpdGVtUmVmcy5jdXJyZW50ID0ge307XG4gIHZhciBpc0luaXRpYWxNb3VudFJlZiA9IHVzZVJlZih0cnVlKTsgLy8gcHJldmVudCBpZCByZS1nZW5lcmF0aW9uIGJldHdlZW4gcmVuZGVycy5cblxuICB2YXIgZWxlbWVudElkc1JlZiA9IHVzZVJlZihnZXRFbGVtZW50SWRzJDEocHJvcHMpKTsgLy8gdXNlZCB0byBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIGhhZCBvbiBwcmV2aW91cyBjeWNsZS5cblxuICB2YXIgcHJldmlvdXNSZXN1bHRDb3VudFJlZiA9IHVzZVJlZigpOyAvLyB1dGlsaXR5IGNhbGxiYWNrIHRvIGdldCBpdGVtIGVsZW1lbnQuXG5cbiAgdmFyIGxhdGVzdCA9IHVzZUxhdGVzdFJlZih7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KTtcblxuICB2YXIgZ2V0SXRlbU5vZGVGcm9tSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbVJlZnMuY3VycmVudFtlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGluZGV4KV07XG4gIH07IC8vIEVmZmVjdHMuXG4gIC8vIFNldHMgYTExeSBzdGF0dXMgbWVzc2FnZSBvbiBjaGFuZ2VzIGluIHN0YXRlLlxuXG5cbiAgdXNlQTExeU1lc3NhZ2VTZXR0ZXIoZ2V0QTExeVN0YXR1c01lc3NhZ2UsIFtpc09wZW4sIGhpZ2hsaWdodGVkSW5kZXgsIGlucHV0VmFsdWUsIGl0ZW1zXSwgX2V4dGVuZHMoe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCxcbiAgICBpdGVtczogaXRlbXMsXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LFxuICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nXG4gIH0sIHN0YXRlKSk7IC8vIFNldHMgYTExeSBzdGF0dXMgbWVzc2FnZSBvbiBjaGFuZ2VzIGluIHNlbGVjdGVkSXRlbS5cblxuICB1c2VBMTF5TWVzc2FnZVNldHRlcihnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSwgW3NlbGVjdGVkSXRlbV0sIF9leHRlbmRzKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcmV2aW91c1Jlc3VsdENvdW50OiBwcmV2aW91c1Jlc3VsdENvdW50UmVmLmN1cnJlbnQsXG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudCxcbiAgICBpdGVtVG9TdHJpbmc6IGl0ZW1Ub1N0cmluZ1xuICB9LCBzdGF0ZSkpOyAvLyBTY3JvbGwgb24gaGlnaGxpZ2h0ZWQgaXRlbSBpZiBjaGFuZ2UgY29tZXMgZnJvbSBrZXlib2FyZC5cblxuICB2YXIgc2hvdWxkU2Nyb2xsUmVmID0gdXNlU2Nyb2xsSW50b1ZpZXcoe1xuICAgIG1lbnVFbGVtZW50OiBtZW51UmVmLmN1cnJlbnQsXG4gICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBpc09wZW46IGlzT3BlbixcbiAgICBpdGVtUmVmczogaXRlbVJlZnMsXG4gICAgc2Nyb2xsSW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICB9KTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pOyAvLyBDb250cm9scyB0aGUgZm9jdXMgb24gdGhlIGlucHV0IG9uIG9wZW4uXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEb24ndCBmb2N1cyBtZW51IG9uIGZpcnN0IHJlbmRlci5cbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgLy8gVW5sZXNzIGl0IHdhcyBpbml0aWFsaXNlZCBhcyBvcGVuLlxuICAgICAgaWYgKGluaXRpYWxJc09wZW4gfHwgZGVmYXVsdElzT3BlbiB8fCBpc09wZW4pIHtcbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB9LCBbaXNPcGVuXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2aW91c1Jlc3VsdENvdW50UmVmLmN1cnJlbnQgPSBpdGVtcy5sZW5ndGg7XG4gIH0pOyAvLyBBZGQgbW91c2UvdG91Y2ggZXZlbnRzIHRvIGRvY3VtZW50LlxuXG4gIHZhciBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYgPSB1c2VNb3VzZUFuZFRvdWNoVHJhY2tlcihpc09wZW4sIFtjb21ib2JveFJlZiwgbWVudVJlZiwgdG9nZ2xlQnV0dG9uUmVmXSwgZW52aXJvbm1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBJbnB1dEJsdXIsXG4gICAgICBzZWxlY3RJdGVtOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcbiAgdmFyIHNldEdldHRlclByb3BDYWxsSW5mbyA9IHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcignZ2V0SW5wdXRQcm9wcycsICdnZXRDb21ib2JveFByb3BzJywgJ2dldE1lbnVQcm9wcycpOyAvLyBNYWtlIGluaXRpYWwgcmVmIGZhbHNlLlxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbXSk7XG4gIC8qIEV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zICovXG5cbiAgdmFyIGlucHV0S2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25BcnJvd0Rvd24sXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBBcnJvd1VwOiBmdW5jdGlvbiBBcnJvd1VwKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25BcnJvd1VwLFxuICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgSG9tZTogZnVuY3Rpb24gSG9tZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSW5wdXRLZXlEb3duSG9tZSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRW5kOiBmdW5jdGlvbiBFbmQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkVuZCxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRXNjYXBlOiBmdW5jdGlvbiBFc2NhcGUoKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25Fc2NhcGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRW50ZXI6IGZ1bmN0aW9uIEVudGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIGlmIElNRSBjb21wb3NpbmcsIHdhaXQgZm9yIG5leHQgRW50ZXIga2V5ZG93biBldmVudC5cbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyMjkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGF0ZXN0U3RhdGUgPSBsYXRlc3QuY3VycmVudC5zdGF0ZTtcblxuICAgICAgICBpZiAobGF0ZXN0U3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25FbnRlcixcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3RdKTsgLy8gR2V0dGVyIHByb3BzLlxuXG4gIHZhciBnZXRMYWJlbFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGxhYmVsUHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgaWQ6IGVsZW1lbnRJZHNSZWYuY3VycmVudC5sYWJlbElkLFxuICAgICAgaHRtbEZvcjogZWxlbWVudElkc1JlZi5jdXJyZW50LmlucHV0SWRcbiAgICB9LCBsYWJlbFByb3BzKTtcbiAgfSwgW10pO1xuICB2YXIgZ2V0TWVudVByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wLCBfdGVtcDIpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlID0gX3JlZi5vbk1vdXNlTGVhdmUsXG4gICAgICAgIF9yZWYkcmVmS2V5ID0gX3JlZi5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWYkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcIm9uTW91c2VMZWF2ZVwiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjIgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgICBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPSBfcmVmMi5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjIkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN1cHByZXNzUmVmRXJybztcblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0TWVudVByb3BzJywgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBtZW51UmVmKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAobWVudU5vZGUpIHtcbiAgICAgIG1lbnVSZWYuY3VycmVudCA9IG1lbnVOb2RlO1xuICAgIH0pLCBfZXh0ZW5kczIuaWQgPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQubWVudUlkLCBfZXh0ZW5kczIucm9sZSA9ICdsaXN0Ym94JywgX2V4dGVuZHMyWydhcmlhLWxhYmVsbGVkYnknXSA9IGVsZW1lbnRJZHNSZWYuY3VycmVudC5sYWJlbElkLCBfZXh0ZW5kczIub25Nb3VzZUxlYXZlID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25Nb3VzZUxlYXZlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IE1lbnVNb3VzZUxlYXZlJDFcbiAgICAgIH0pO1xuICAgIH0pLCBfZXh0ZW5kczIpLCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm9dKTtcbiAgdmFyIGdldEl0ZW1Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDMpIHtcbiAgICB2YXIgX2V4dGVuZHMzLCBfcmVmNDtcblxuICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgIGl0ZW0gPSBfcmVmMy5pdGVtLFxuICAgICAgICBpbmRleCA9IF9yZWYzLmluZGV4LFxuICAgICAgICBfcmVmMyRyZWZLZXkgPSBfcmVmMy5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWYzJHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmMyRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWYzLnJlZixcbiAgICAgICAgb25Nb3VzZU1vdmUgPSBfcmVmMy5vbk1vdXNlTW92ZSxcbiAgICAgICAgb25DbGljayA9IF9yZWYzLm9uQ2xpY2ssXG4gICAgICAgIG9uUHJlc3MgPSBfcmVmMy5vblByZXNzLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcIml0ZW1cIiwgXCJpbmRleFwiLCBcInJlZktleVwiLCBcInJlZlwiLCBcIm9uTW91c2VNb3ZlXCIsIFwib25DbGlja1wiLCBcIm9uUHJlc3NcIl0pO1xuXG4gICAgdmFyIF9sYXRlc3QkY3VycmVudCA9IGxhdGVzdC5jdXJyZW50LFxuICAgICAgICBsYXRlc3RQcm9wcyA9IF9sYXRlc3QkY3VycmVudC5wcm9wcyxcbiAgICAgICAgbGF0ZXN0U3RhdGUgPSBfbGF0ZXN0JGN1cnJlbnQuc3RhdGU7XG4gICAgdmFyIGl0ZW1JbmRleCA9IGdldEl0ZW1JbmRleChpbmRleCwgaXRlbSwgbGF0ZXN0UHJvcHMuaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzcyBlaXRoZXIgaXRlbSBvciBpdGVtIGluZGV4IGluIGdldEl0ZW1Qcm9wcyEnKTtcbiAgICB9XG5cbiAgICB2YXIgb25TZWxlY3RLZXkgPSAnb25DbGljayc7XG4gICAgdmFyIGN1c3RvbUNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7XG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGl0ZW1Ob2RlKSB7XG4gICAgICBpZiAoaXRlbU5vZGUpIHtcbiAgICAgICAgaXRlbVJlZnMuY3VycmVudFtlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGl0ZW1JbmRleCldID0gaXRlbU5vZGU7XG4gICAgICB9XG4gICAgfSksIF9leHRlbmRzMy5yb2xlID0gJ29wdGlvbicsIF9leHRlbmRzM1snYXJpYS1zZWxlY3RlZCddID0gXCJcIiArIChpdGVtSW5kZXggPT09IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpLCBfZXh0ZW5kczMuaWQgPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGl0ZW1JbmRleCksIF9leHRlbmRzMyksICFyZXN0LmRpc2FibGVkICYmIChfcmVmNCA9IHtcbiAgICAgIG9uTW91c2VNb3ZlOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTW92ZSwgZnVuY3Rpb24gaXRlbUhhbmRsZU1vdXNlTW92ZSgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvdWxkU2Nyb2xsUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEl0ZW1Nb3VzZU1vdmUkMSxcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0sIF9yZWY0W29uU2VsZWN0S2V5XSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKGN1c3RvbUNsaWNrSGFuZGxlciwgZnVuY3Rpb24gaXRlbUhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJdGVtQ2xpY2skMSxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pLCBfcmVmNCksIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdCwgc2hvdWxkU2Nyb2xsUmVmXSk7XG4gIHZhciBnZXRUb2dnbGVCdXR0b25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDQpIHtcbiAgICB2YXIgX2V4dGVuZHM0O1xuXG4gICAgdmFyIF9yZWY1ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCxcbiAgICAgICAgb25DbGljayA9IF9yZWY1Lm9uQ2xpY2ssXG4gICAgICAgIG9uUHJlc3MgPSBfcmVmNS5vblByZXNzLFxuICAgICAgICBfcmVmNSRyZWZLZXkgPSBfcmVmNS5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWY1JHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmNSRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWY1LnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY1LCBbXCJvbkNsaWNrXCIsIFwib25QcmVzc1wiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgdG9nZ2xlQnV0dG9uSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFRvZ2dsZUJ1dHRvbkNsaWNrJDFcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWxhdGVzdC5jdXJyZW50LnN0YXRlLmlzT3BlbiAmJiBpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKHRvZ2dsZUJ1dHRvbk5vZGUpIHtcbiAgICAgIHRvZ2dsZUJ1dHRvblJlZi5jdXJyZW50ID0gdG9nZ2xlQnV0dG9uTm9kZTtcbiAgICB9KSwgX2V4dGVuZHM0LmlkID0gZWxlbWVudElkc1JlZi5jdXJyZW50LnRvZ2dsZUJ1dHRvbklkLCBfZXh0ZW5kczQudGFiSW5kZXggPSAtMSwgX2V4dGVuZHM0KSwgIXJlc3QuZGlzYWJsZWQgJiYgX2V4dGVuZHMoe30sIHtcbiAgICAgIG9uQ2xpY2s6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKVxuICAgIH0pLCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3RdKTtcbiAgdmFyIGdldElucHV0UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXA1LCBfdGVtcDYpIHtcbiAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgdmFyIF9yZWY2ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgb25LZXlEb3duID0gX3JlZjYub25LZXlEb3duLFxuICAgICAgICBvbkNoYW5nZSA9IF9yZWY2Lm9uQ2hhbmdlLFxuICAgICAgICBvbklucHV0ID0gX3JlZjYub25JbnB1dCxcbiAgICAgICAgb25CbHVyID0gX3JlZjYub25CbHVyLFxuICAgICAgICBvbkNoYW5nZVRleHQgPSBfcmVmNi5vbkNoYW5nZVRleHQsXG4gICAgICAgIF9yZWY2JHJlZktleSA9IF9yZWY2LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjYkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY2JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjYucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIFtcIm9uS2V5RG93blwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnB1dFwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlVGV4dFwiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjcgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICBfcmVmNyRzdXBwcmVzc1JlZkVycm8gPSBfcmVmNy5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjckc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY3JHN1cHByZXNzUmVmRXJybztcblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0SW5wdXRQcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgaW5wdXRSZWYpO1xuICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuXG4gICAgdmFyIGlucHV0SGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgaWYgKGtleSAmJiBpbnB1dEtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgIGlucHV0S2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaW5wdXRIYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogSW5wdXRDaGFuZ2UsXG4gICAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpbnB1dEhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCFtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc01vdXNlRG93bikge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSW5wdXRCbHVyLFxuICAgICAgICAgIHNlbGVjdEl0ZW06IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAocHJlYWN0KSAqL1xuXG5cbiAgICB2YXIgb25DaGFuZ2VLZXkgPSAnb25DaGFuZ2UnO1xuICAgIHZhciBldmVudEhhbmRsZXJzID0ge307XG5cbiAgICBpZiAoIXJlc3QuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBfZXZlbnRIYW5kbGVycztcblxuICAgICAgZXZlbnRIYW5kbGVycyA9IChfZXZlbnRIYW5kbGVycyA9IHt9LCBfZXZlbnRIYW5kbGVyc1tvbkNoYW5nZUtleV0gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkNoYW5nZSwgb25JbnB1dCwgaW5wdXRIYW5kbGVDaGFuZ2UpLCBfZXZlbnRIYW5kbGVycy5vbktleURvd24gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIGlucHV0SGFuZGxlS2V5RG93biksIF9ldmVudEhhbmRsZXJzLm9uQmx1ciA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQmx1ciwgaW5wdXRIYW5kbGVCbHVyKSwgX2V2ZW50SGFuZGxlcnMpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKHJlYWN0LW5hdGl2ZSkgKi9cblxuXG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGlucHV0Tm9kZSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudCA9IGlucHV0Tm9kZTtcbiAgICB9KSwgX2V4dGVuZHM1LmlkID0gZWxlbWVudElkc1JlZi5jdXJyZW50LmlucHV0SWQsIF9leHRlbmRzNVsnYXJpYS1hdXRvY29tcGxldGUnXSA9ICdsaXN0JywgX2V4dGVuZHM1WydhcmlhLWNvbnRyb2xzJ10gPSBlbGVtZW50SWRzUmVmLmN1cnJlbnQubWVudUlkLCBfZXh0ZW5kczUpLCBsYXRlc3RTdGF0ZS5pc09wZW4gJiYgbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+IC0xICYmIHtcbiAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBlbGVtZW50SWRzUmVmLmN1cnJlbnQuZ2V0SXRlbUlkKGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGVsZW1lbnRJZHNSZWYuY3VycmVudC5sYWJlbElkLFxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU2VjdXJpdHkvU2VjdXJpbmdfeW91cl9zaXRlL1R1cm5pbmdfb2ZmX2Zvcm1fYXV0b2NvbXBsZXRpb25cbiAgICAgIC8vIHJldmVydCBiYWNrIHNpbmNlIGF1dG9jb21wbGV0ZT1cIm5vcGVcIiBpcyBpZ25vcmVkIG9uIGxhdGVzdCBDaHJvbWUgYW5kIE9wZXJhXG4gICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgdmFsdWU6IGxhdGVzdFN0YXRlLmlucHV0VmFsdWVcbiAgICB9LCBldmVudEhhbmRsZXJzLCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBpbnB1dEtleURvd25IYW5kbGVycywgbGF0ZXN0LCBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYsIHNldEdldHRlclByb3BDYWxsSW5mb10pO1xuICB2YXIgZ2V0Q29tYm9ib3hQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDcsIF90ZW1wOCkge1xuICAgIHZhciBfZXh0ZW5kczY7XG5cbiAgICB2YXIgX3JlZjggPSBfdGVtcDcgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA3LFxuICAgICAgICBfcmVmOCRyZWZLZXkgPSBfcmVmOC5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWY4JHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmOCRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWY4LnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY4LCBbXCJyZWZLZXlcIiwgXCJyZWZcIl0pO1xuXG4gICAgdmFyIF9yZWY5ID0gX3RlbXA4ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wOCxcbiAgICAgICAgX3JlZjkkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjkuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgc3VwcHJlc3NSZWZFcnJvciA9IF9yZWY5JHN1cHByZXNzUmVmRXJybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmOSRzdXBwcmVzc1JlZkVycm87XG5cbiAgICBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8oJ2dldENvbWJvYm94UHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIGNvbWJvYm94UmVmKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzNiA9IHt9LCBfZXh0ZW5kczZbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoY29tYm9ib3hOb2RlKSB7XG4gICAgICBjb21ib2JveFJlZi5jdXJyZW50ID0gY29tYm9ib3hOb2RlO1xuICAgIH0pLCBfZXh0ZW5kczYucm9sZSA9ICdjb21ib2JveCcsIF9leHRlbmRzNlsnYXJpYS1oYXNwb3B1cCddID0gJ2xpc3Rib3gnLCBfZXh0ZW5kczZbJ2FyaWEtb3ducyddID0gZWxlbWVudElkc1JlZi5jdXJyZW50Lm1lbnVJZCwgX2V4dGVuZHM2WydhcmlhLWV4cGFuZGVkJ10gPSBsYXRlc3QuY3VycmVudC5zdGF0ZS5pc09wZW4sIF9leHRlbmRzNiksIHJlc3QpO1xuICB9LCBbbGF0ZXN0LCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm9dKTsgLy8gcmV0dXJuc1xuXG4gIHZhciB0b2dnbGVNZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uVG9nZ2xlTWVudSQxXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgY2xvc2VNZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uQ2xvc2VNZW51JDFcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBvcGVuTWVudSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvbk9wZW5NZW51JDFcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRIaWdobGlnaHRlZEluZGV4ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0hpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgkMSxcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IG5ld0hpZ2hsaWdodGVkSW5kZXhcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZWxlY3RJdGVtID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1NlbGVjdGVkSXRlbSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2VsZWN0SXRlbSQxLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBuZXdTZWxlY3RlZEl0ZW1cbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRJbnB1dFZhbHVlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0lucHV0VmFsdWUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldElucHV0VmFsdWUkMSxcbiAgICAgIGlucHV0VmFsdWU6IG5ld0lucHV0VmFsdWVcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciByZXNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblJlc2V0JDFcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHJldHVybiB7XG4gICAgLy8gcHJvcCBnZXR0ZXJzLlxuICAgIGdldEl0ZW1Qcm9wczogZ2V0SXRlbVByb3BzLFxuICAgIGdldExhYmVsUHJvcHM6IGdldExhYmVsUHJvcHMsXG4gICAgZ2V0TWVudVByb3BzOiBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wczogZ2V0SW5wdXRQcm9wcyxcbiAgICBnZXRDb21ib2JveFByb3BzOiBnZXRDb21ib2JveFByb3BzLFxuICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzOiBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAvLyBhY3Rpb25zLlxuICAgIHRvZ2dsZU1lbnU6IHRvZ2dsZU1lbnUsXG4gICAgb3Blbk1lbnU6IG9wZW5NZW51LFxuICAgIGNsb3NlTWVudTogY2xvc2VNZW51LFxuICAgIHNldEhpZ2hsaWdodGVkSW5kZXg6IHNldEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgc2V0SW5wdXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICBzZWxlY3RJdGVtOiBzZWxlY3RJdGVtLFxuICAgIHJlc2V0OiByZXNldCxcbiAgICAvLyBzdGF0ZS5cbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtLFxuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfTtcbn1cblxudmFyIGRlZmF1bHRTdGF0ZVZhbHVlcyA9IHtcbiAgYWN0aXZlSW5kZXg6IC0xLFxuICBzZWxlY3RlZEl0ZW1zOiBbXVxufTtcbi8qKlxuICogUmV0dXJucyB0aGUgaW5pdGlhbCB2YWx1ZSBmb3IgYSBzdGF0ZSBrZXkgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbiAqIDEuIGNvbnRyb2xsZWQgcHJvcCwgMi4gaW5pdGlhbCBwcm9wLCAzLiBkZWZhdWx0IHByb3AsIDQuIGRlZmF1bHRcbiAqIHZhbHVlIGZyb20gRG93bnNoaWZ0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcyBwYXNzZWQgdG8gdGhlIGhvb2suXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcEtleSBQcm9wcyBrZXkgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIGZvci5cbiAqIEByZXR1cm5zIHthbnl9IFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGF0IHByb3AuXG4gKi9cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlJDEocHJvcHMsIHByb3BLZXkpIHtcbiAgcmV0dXJuIGdldEluaXRpYWxWYWx1ZShwcm9wcywgcHJvcEtleSwgZGVmYXVsdFN0YXRlVmFsdWVzKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBzdGF0ZSBrZXkgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbiAqIDEuIGNvbnRyb2xsZWQgcHJvcCwgMi4gZGVmYXVsdCBwcm9wLCAzLiBkZWZhdWx0IHZhbHVlIGZyb20gRG93bnNoaWZ0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcyBwYXNzZWQgdG8gdGhlIGhvb2suXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcEtleSBQcm9wcyBrZXkgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIGZvci5cbiAqIEByZXR1cm5zIHthbnl9IFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGF0IHByb3AuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUkMShwcm9wcywgcHJvcEtleSkge1xuICByZXR1cm4gZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBpbml0aWFsIHN0YXRlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBwcm9wcy4gSXQgdXNlcyBpbml0aWFsLCBkZWZhdWx0XG4gKiBhbmQgY29udHJvbGxlZCBwcm9wcyByZWxhdGVkIHRvIHN0YXRlIGluIG9yZGVyIHRvIGNvbXB1dGUgdGhlIGluaXRpYWwgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byB0aGUgaG9vay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBpbml0aWFsIHN0YXRlLlxuICovXG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSQyKHByb3BzKSB7XG4gIHZhciBhY3RpdmVJbmRleCA9IGdldEluaXRpYWxWYWx1ZSQxKHByb3BzLCAnYWN0aXZlSW5kZXgnKTtcbiAgdmFyIHNlbGVjdGVkSXRlbXMgPSBnZXRJbml0aWFsVmFsdWUkMShwcm9wcywgJ3NlbGVjdGVkSXRlbXMnKTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgc2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtc1xuICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgZHJvcGRvd24ga2V5ZG93biBvcGVyYXRpb24gaXMgcGVybWl0dGVkLiBTaG91bGQgbm90IGJlXG4gKiBhbGxvd2VkIG9uIGtleWRvd24gd2l0aCBtb2RpZmllciBrZXlzIChjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhKSwgb25cbiAqIGlucHV0IGVsZW1lbnQgd2l0aCB0ZXh0IGNvbnRlbnQgdGhhdCBpcyBlaXRoZXIgaGlnaGxpZ2h0ZWQgb3Igc2VsZWN0aW9uXG4gKiBjdXJzb3IgaXMgbm90IGF0IHRoZSBzdGFydGluZyBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFRoZSBldmVudCBmcm9tIGtleWRvd24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgb3BlcmF0aW9uIGlzIGFsbG93ZWQuXG4gKi9cblxuZnVuY3Rpb24gaXNLZXlEb3duT3BlcmF0aW9uUGVybWl0dGVkKGV2ZW50KSB7XG4gIGlmIChldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIC8vIGlmIGVsZW1lbnQgaXMgYSB0ZXh0IGlucHV0XG4gIGVsZW1lbnQudmFsdWUgIT09ICcnICYmICggLy8gYW5kIHdlIGhhdmUgdGV4dCBpbiBpdFxuICAvLyBhbmQgY3Vyc29yIGlzIGVpdGhlciBub3QgYXQgdGhlIHN0YXJ0IG9yIGlzIGN1cnJlbnRseSBoaWdobGlnaHRpbmcgdGV4dC5cbiAgZWxlbWVudC5zZWxlY3Rpb25TdGFydCAhPT0gMCB8fCBlbGVtZW50LnNlbGVjdGlvbkVuZCAhPT0gMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIG1lc3NhZ2UgdG8gYmUgYWRkZWQgdG8gYXJpYS1saXZlIHJlZ2lvbiB3aGVuIGl0ZW0gaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0aW9uUGFyYW1ldGVycyBQYXJhbWV0ZXJzIHJlcXVpcmVkIHRvIGJ1aWxkIHRoZSBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGExMXkgbWVzc2FnZS5cbiAqL1xuXG5mdW5jdGlvbiBnZXRBMTF5UmVtb3ZhbE1lc3NhZ2Uoc2VsZWN0aW9uUGFyYW1ldGVycykge1xuICB2YXIgcmVtb3ZlZFNlbGVjdGVkSXRlbSA9IHNlbGVjdGlvblBhcmFtZXRlcnMucmVtb3ZlZFNlbGVjdGVkSXRlbSxcbiAgICAgIGl0ZW1Ub1N0cmluZ0xvY2FsID0gc2VsZWN0aW9uUGFyYW1ldGVycy5pdGVtVG9TdHJpbmc7XG4gIHJldHVybiBpdGVtVG9TdHJpbmdMb2NhbChyZW1vdmVkU2VsZWN0ZWRJdGVtKSArIFwiIGhhcyBiZWVuIHJlbW92ZWQuXCI7XG59XG5cbnZhciBwcm9wVHlwZXMkMiA9IHtcbiAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBpbml0aWFsU2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBkZWZhdWx0U2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRBMTF5UmVtb3ZhbE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBzdGF0ZVJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbEFjdGl2ZUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWZhdWx0QWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQWN0aXZlSW5kZXhDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdGVkSXRlbXNDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBrZXlOYXZpZ2F0aW9uTmV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5TmF2aWdhdGlvblByZXZpb3VzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnZpcm9ubWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb2N1bWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGdldEVsZW1lbnRCeUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgICBib2R5OiBQcm9wVHlwZXMuYW55XG4gICAgfSlcbiAgfSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDMgPSB7XG4gIGl0ZW1Ub1N0cmluZzogZGVmYXVsdFByb3BzLml0ZW1Ub1N0cmluZyxcbiAgc3RhdGVSZWR1Y2VyOiBkZWZhdWx0UHJvcHMuc3RhdGVSZWR1Y2VyLFxuICBlbnZpcm9ubWVudDogZGVmYXVsdFByb3BzLmVudmlyb25tZW50LFxuICBnZXRBMTF5UmVtb3ZhbE1lc3NhZ2U6IGdldEExMXlSZW1vdmFsTWVzc2FnZSxcbiAga2V5TmF2aWdhdGlvbk5leHQ6ICdBcnJvd1JpZ2h0JyxcbiAga2V5TmF2aWdhdGlvblByZXZpb3VzOiAnQXJyb3dMZWZ0J1xufTtcblxudmFyIFNlbGVjdGVkSXRlbUNsaWNrID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fc2VsZWN0ZWRfaXRlbV9jbGlja19fJyA6IDA7XG52YXIgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3NlbGVjdGVkX2l0ZW1fa2V5ZG93bl9kZWxldGVfXycgOiAxO1xudmFyIFNlbGVjdGVkSXRlbUtleURvd25CYWNrc3BhY2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2tleWRvd25fYmFja3NwYWNlX18nIDogMjtcbnZhciBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvbk5leHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2tleWRvd25fbmF2aWdhdGlvbl9uZXh0X18nIDogMztcbnZhciBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fc2VsZWN0ZWRfaXRlbV9rZXlkb3duX25hdmlnYXRpb25fcHJldmlvdXNfXycgOiA0O1xudmFyIERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Ryb3Bkb3duX2tleWRvd25fbmF2aWdhdGlvbl9wcmV2aW91c19fJyA6IDU7XG52YXIgRHJvcGRvd25LZXlEb3duQmFja3NwYWNlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZHJvcGRvd25fa2V5ZG93bl9iYWNrc3BhY2VfXycgOiA2O1xudmFyIERyb3Bkb3duQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19kcm9wZG93bl9jbGlja19fJyA6IDc7XG52YXIgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9hZGRfc2VsZWN0ZWRfaXRlbV9fJyA6IDg7XG52YXIgRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9yZW1vdmVfc2VsZWN0ZWRfaXRlbV9fJyA6IDk7XG52YXIgRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X3NlbGVjdGVkX2l0ZW1zX18nIDogMTA7XG52YXIgRnVuY3Rpb25TZXRBY3RpdmVJbmRleCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3NldF9hY3RpdmVfaW5kZXhfXycgOiAxMTtcbnZhciBGdW5jdGlvblJlc2V0JDIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9yZXNldF9fJyA6IDEyO1xuXG52YXIgc3RhdGVDaGFuZ2VUeXBlcyQzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIFNlbGVjdGVkSXRlbUNsaWNrOiBTZWxlY3RlZEl0ZW1DbGljayxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZTogU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZSxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bkJhY2tzcGFjZTogU2VsZWN0ZWRJdGVtS2V5RG93bkJhY2tzcGFjZSxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25OZXh0OiBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvbk5leHQsXG4gIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXM6IFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXMsXG4gIERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91czogRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzLFxuICBEcm9wZG93bktleURvd25CYWNrc3BhY2U6IERyb3Bkb3duS2V5RG93bkJhY2tzcGFjZSxcbiAgRHJvcGRvd25DbGljazogRHJvcGRvd25DbGljayxcbiAgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW06IEZ1bmN0aW9uQWRkU2VsZWN0ZWRJdGVtLFxuICBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbTogRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW0sXG4gIEZ1bmN0aW9uU2V0U2VsZWN0ZWRJdGVtczogRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zLFxuICBGdW5jdGlvblNldEFjdGl2ZUluZGV4OiBGdW5jdGlvblNldEFjdGl2ZUluZGV4LFxuICBGdW5jdGlvblJlc2V0OiBGdW5jdGlvblJlc2V0JDJcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdE11bHRpcGxlU2VsZWN0aW9uUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBpbmRleCA9IGFjdGlvbi5pbmRleCxcbiAgICAgIHByb3BzID0gYWN0aW9uLnByb3BzLFxuICAgICAgc2VsZWN0ZWRJdGVtID0gYWN0aW9uLnNlbGVjdGVkSXRlbTtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICBzZWxlY3RlZEl0ZW1zID0gc3RhdGUuc2VsZWN0ZWRJdGVtcztcbiAgdmFyIGNoYW5nZXM7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1DbGljazpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyAwIDogYWN0aXZlSW5kZXggLSAxXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uTmV4dDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCArIDEgPj0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggPyAtMSA6IGFjdGl2ZUluZGV4ICsgMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1LZXlEb3duQmFja3NwYWNlOlxuICAgIGNhc2UgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZTpcbiAgICAgIHtcbiAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLmNvbmNhdChzZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIGFjdGl2ZUluZGV4KSwgc2VsZWN0ZWRJdGVtcy5zbGljZShhY3RpdmVJbmRleCArIDEpKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IG5ld0FjdGl2ZUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEcm9wZG93bktleURvd25CYWNrc3BhY2U6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW06XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXS5jb25jYXQoc2VsZWN0ZWRJdGVtcywgW3NlbGVjdGVkSXRlbV0pXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERyb3Bkb3duQ2xpY2s6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW06XG4gICAgICB7XG4gICAgICAgIHZhciBfbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUluZGV4ID0gc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgX25ld0FjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIF9uZXdBY3RpdmVJbmRleCA9IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogW10uY29uY2F0KHNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJdGVtSW5kZXgpLCBzZWxlY3RlZEl0ZW1zLnNsaWNlKHNlbGVjdGVkSXRlbUluZGV4ICsgMSkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogX25ld0FjdGl2ZUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zOlxuICAgICAge1xuICAgICAgICB2YXIgbmV3U2VsZWN0ZWRJdGVtcyA9IGFjdGlvbi5zZWxlY3RlZEl0ZW1zO1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IG5ld1NlbGVjdGVkSXRlbXNcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2V0QWN0aXZlSW5kZXg6XG4gICAgICB7XG4gICAgICAgIHZhciBfbmV3QWN0aXZlSW5kZXgyID0gYWN0aW9uLmFjdGl2ZUluZGV4O1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiBfbmV3QWN0aXZlSW5kZXgyXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBGdW5jdGlvblJlc2V0JDI6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogZ2V0RGVmYXVsdFZhbHVlJDEocHJvcHMsICdhY3RpdmVJbmRleCcpLFxuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBnZXREZWZhdWx0VmFsdWUkMShwcm9wcywgJ3NlbGVjdGVkSXRlbXMnKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBjYWxsZWQgd2l0aG91dCBwcm9wZXIgYWN0aW9uIHR5cGUuJyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cblxudXNlTXVsdGlwbGVTZWxlY3Rpb24uc3RhdGVDaGFuZ2VUeXBlcyA9IHN0YXRlQ2hhbmdlVHlwZXMkMztcblxuZnVuY3Rpb24gdXNlTXVsdGlwbGVTZWxlY3Rpb24odXNlclByb3BzKSB7XG4gIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHVzZXJQcm9wcyA9IHt9O1xuICB9XG5cbiAgLy8gUHJvcHMgZGVmYXVsdHMgYW5kIGRlc3RydWN0dXJpbmcuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMkMywgdXNlclByb3BzKTtcblxuICB2YXIgZ2V0QTExeVJlbW92YWxNZXNzYWdlID0gcHJvcHMuZ2V0QTExeVJlbW92YWxNZXNzYWdlLFxuICAgICAgaXRlbVRvU3RyaW5nID0gcHJvcHMuaXRlbVRvU3RyaW5nLFxuICAgICAgZW52aXJvbm1lbnQgPSBwcm9wcy5lbnZpcm9ubWVudCxcbiAgICAgIGtleU5hdmlnYXRpb25OZXh0ID0gcHJvcHMua2V5TmF2aWdhdGlvbk5leHQsXG4gICAgICBrZXlOYXZpZ2F0aW9uUHJldmlvdXMgPSBwcm9wcy5rZXlOYXZpZ2F0aW9uUHJldmlvdXM7IC8vIFJlZHVjZXIgaW5pdC5cblxuICB2YXIgX3VzZUNvbnRyb2xsZWRSZWR1Y2VyID0gdXNlQ29udHJvbGxlZFJlZHVjZXIoZG93bnNoaWZ0TXVsdGlwbGVTZWxlY3Rpb25SZWR1Y2VyLCBnZXRJbml0aWFsU3RhdGUkMihwcm9wcyksIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUNvbnRyb2xsZWRSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMV07XG5cbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICBzZWxlY3RlZEl0ZW1zID0gc3RhdGUuc2VsZWN0ZWRJdGVtczsgLy8gUmVmcy5cblxuICB2YXIgaXNJbml0aWFsTW91bnRSZWYgPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHByZXZpb3VzU2VsZWN0ZWRJdGVtc1JlZiA9IHVzZVJlZihzZWxlY3RlZEl0ZW1zKTtcbiAgdmFyIHNlbGVjdGVkSXRlbVJlZnMgPSB1c2VSZWYoKTtcbiAgc2VsZWN0ZWRJdGVtUmVmcy5jdXJyZW50ID0gW107XG4gIHZhciBsYXRlc3QgPSB1c2VMYXRlc3RSZWYoe1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBwcm9wczogcHJvcHNcbiAgfSk7IC8vIEVmZmVjdHMuXG5cbiAgLyogU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc2VsZWN0ZWRJdGVtLiAqL1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPCBwcmV2aW91c1NlbGVjdGVkSXRlbXNSZWYuY3VycmVudC5sZW5ndGgpIHtcbiAgICAgIHZhciByZW1vdmVkU2VsZWN0ZWRJdGVtID0gcHJldmlvdXNTZWxlY3RlZEl0ZW1zUmVmLmN1cnJlbnQuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pIDwgMDtcbiAgICAgIH0pO1xuICAgICAgc2V0U3RhdHVzKGdldEExMXlSZW1vdmFsTWVzc2FnZSh7XG4gICAgICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nLFxuICAgICAgICByZXN1bHRDb3VudDogc2VsZWN0ZWRJdGVtcy5sZW5ndGgsXG4gICAgICAgIHJlbW92ZWRTZWxlY3RlZEl0ZW06IHJlbW92ZWRTZWxlY3RlZEl0ZW0sXG4gICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICAgICAgYWN0aXZlU2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW1zW2FjdGl2ZUluZGV4XVxuICAgICAgfSksIGVudmlyb25tZW50LmRvY3VtZW50KTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1NlbGVjdGVkSXRlbXNSZWYuY3VycmVudCA9IHNlbGVjdGVkSXRlbXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3NlbGVjdGVkSXRlbXMubGVuZ3RoXSk7IC8vIFNldHMgZm9jdXMgb24gYWN0aXZlIGl0ZW0uXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gLTEgJiYgZHJvcGRvd25SZWYuY3VycmVudCkge1xuICAgICAgZHJvcGRvd25SZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtUmVmcy5jdXJyZW50W2FjdGl2ZUluZGV4XSkge1xuICAgICAgc2VsZWN0ZWRJdGVtUmVmcy5jdXJyZW50W2FjdGl2ZUluZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2FjdGl2ZUluZGV4XSk7XG4gIHVzZUNvbnRyb2xQcm9wc1ZhbGlkYXRvcih7XG4gICAgaXNJbml0aWFsTW91bnQ6IGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9KTtcbiAgdmFyIHNldEdldHRlclByb3BDYWxsSW5mbyA9IHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcignZ2V0RHJvcGRvd25Qcm9wcycpOyAvLyBNYWtlIGluaXRpYWwgcmVmIGZhbHNlLlxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbXSk7IC8vIEV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zLlxuXG4gIHZhciBzZWxlY3RlZEl0ZW1LZXlEb3duSGFuZGxlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZba2V5TmF2aWdhdGlvblByZXZpb3VzXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25QcmV2aW91c1xuICAgICAgfSk7XG4gICAgfSwgX3JlZltrZXlOYXZpZ2F0aW9uTmV4dF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uTmV4dFxuICAgICAgfSk7XG4gICAgfSwgX3JlZi5EZWxldGUgPSBmdW5jdGlvbiBEZWxldGUoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUtleURvd25EZWxldGVcbiAgICAgIH0pO1xuICAgIH0sIF9yZWYuQmFja3NwYWNlID0gZnVuY3Rpb24gQmFja3NwYWNlKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTZWxlY3RlZEl0ZW1LZXlEb3duQmFja3NwYWNlXG4gICAgICB9KTtcbiAgICB9LCBfcmVmO1xuICB9LCBbZGlzcGF0Y2gsIGtleU5hdmlnYXRpb25OZXh0LCBrZXlOYXZpZ2F0aW9uUHJldmlvdXNdKTtcbiAgdmFyIGRyb3Bkb3duS2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW2tleU5hdmlnYXRpb25QcmV2aW91c10gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChpc0tleURvd25PcGVyYXRpb25QZXJtaXR0ZWQoZXZlbnQpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBEcm9wZG93bktleURvd25OYXZpZ2F0aW9uUHJldmlvdXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3JlZjIuQmFja3NwYWNlID0gZnVuY3Rpb24gQmFja3NwYWNlKGV2ZW50KSB7XG4gICAgICBpZiAoaXNLZXlEb3duT3BlcmF0aW9uUGVybWl0dGVkKGV2ZW50KSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogRHJvcGRvd25LZXlEb3duQmFja3NwYWNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF9yZWYyO1xuICB9LCBbZGlzcGF0Y2gsIGtleU5hdmlnYXRpb25QcmV2aW91c10pOyAvLyBHZXR0ZXIgcHJvcHMuXG5cbiAgdmFyIGdldFNlbGVjdGVkSXRlbVByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHZhciBfcmVmMyA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmMyRyZWZLZXkgPSBfcmVmMy5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWYzJHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmMyRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWYzLnJlZixcbiAgICAgICAgb25DbGljayA9IF9yZWYzLm9uQ2xpY2ssXG4gICAgICAgIG9uS2V5RG93biA9IF9yZWYzLm9uS2V5RG93bixcbiAgICAgICAgc2VsZWN0ZWRJdGVtID0gX3JlZjMuc2VsZWN0ZWRJdGVtLFxuICAgICAgICBpbmRleCA9IF9yZWYzLmluZGV4LFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcInJlZktleVwiLCBcInJlZlwiLCBcIm9uQ2xpY2tcIiwgXCJvbktleURvd25cIiwgXCJzZWxlY3RlZEl0ZW1cIiwgXCJpbmRleFwiXSk7XG5cbiAgICB2YXIgbGF0ZXN0U3RhdGUgPSBsYXRlc3QuY3VycmVudC5zdGF0ZTtcbiAgICB2YXIgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4KGluZGV4LCBzZWxlY3RlZEl0ZW0sIGxhdGVzdFN0YXRlLnNlbGVjdGVkSXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzcyBlaXRoZXIgc2VsZWN0ZWRJdGVtIG9yIGluZGV4IGluIGdldFNlbGVjdGVkSXRlbVByb3BzIScpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW1Ob2RlKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtTm9kZSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnQucHVzaChzZWxlY3RlZEl0ZW1Ob2RlKTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHMyLnRhYkluZGV4ID0gaW5kZXggPT09IGxhdGVzdFN0YXRlLmFjdGl2ZUluZGV4ID8gMCA6IC0xLCBfZXh0ZW5kczIub25DbGljayA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGZ1bmN0aW9uIHNlbGVjdGVkSXRlbUhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTZWxlY3RlZEl0ZW1DbGljayxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcbiAgICB9KSwgX2V4dGVuZHMyLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgZnVuY3Rpb24gc2VsZWN0ZWRJdGVtSGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgaWYgKGtleSAmJiBzZWxlY3RlZEl0ZW1LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICBzZWxlY3RlZEl0ZW1LZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICB9XG4gICAgfSksIF9leHRlbmRzMiksIHJlc3QpO1xuICB9LCBbZGlzcGF0Y2gsIGxhdGVzdCwgc2VsZWN0ZWRJdGVtS2V5RG93bkhhbmRsZXJzXSk7XG4gIHZhciBnZXREcm9wZG93blByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wMiwgX3RlbXAzKSB7XG4gICAgdmFyIF9leHRlbmRzMztcblxuICAgIHZhciBfcmVmNCA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWY0JHJlZktleSA9IF9yZWY0LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjQkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY0JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjQucmVmLFxuICAgICAgICBvbktleURvd24gPSBfcmVmNC5vbktleURvd24sXG4gICAgICAgIG9uQ2xpY2sgPSBfcmVmNC5vbkNsaWNrLFxuICAgICAgICBfcmVmNCRwcmV2ZW50S2V5QWN0aW8gPSBfcmVmNC5wcmV2ZW50S2V5QWN0aW9uLFxuICAgICAgICBwcmV2ZW50S2V5QWN0aW9uID0gX3JlZjQkcHJldmVudEtleUFjdGlvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY0JHByZXZlbnRLZXlBY3RpbyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBbXCJyZWZLZXlcIiwgXCJyZWZcIiwgXCJvbktleURvd25cIiwgXCJvbkNsaWNrXCIsIFwicHJldmVudEtleUFjdGlvblwiXSk7XG5cbiAgICB2YXIgX3JlZjUgPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzLFxuICAgICAgICBfcmVmNSRzdXBwcmVzc1JlZkVycm8gPSBfcmVmNS5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjUkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY1JHN1cHByZXNzUmVmRXJybztcblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0RHJvcGRvd25Qcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgZHJvcGRvd25SZWYpO1xuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChkcm9wZG93bk5vZGUpIHtcbiAgICAgIGlmIChkcm9wZG93bk5vZGUpIHtcbiAgICAgICAgZHJvcGRvd25SZWYuY3VycmVudCA9IGRyb3Bkb3duTm9kZTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHMzKSwgIXByZXZlbnRLZXlBY3Rpb24gJiYge1xuICAgICAgb25LZXlEb3duOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIGZ1bmN0aW9uIGRyb3Bkb3duSGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gbm9ybWFsaXplQXJyb3dLZXkoZXZlbnQpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgZHJvcGRvd25LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgIGRyb3Bkb3duS2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG9uQ2xpY2s6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGZ1bmN0aW9uIGRyb3Bkb3duSGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBEcm9wZG93bkNsaWNrXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9LCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBkcm9wZG93bktleURvd25IYW5kbGVycywgc2V0R2V0dGVyUHJvcENhbGxJbmZvXSk7IC8vIHJldHVybnNcblxuICB2YXIgYWRkU2VsZWN0ZWRJdGVtID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNlbGVjdGVkSXRlbSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uQWRkU2VsZWN0ZWRJdGVtLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW1cbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciByZW1vdmVTZWxlY3RlZEl0ZW0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW0sXG4gICAgICBzZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldFNlbGVjdGVkSXRlbXMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3U2VsZWN0ZWRJdGVtcykge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0U2VsZWN0ZWRJdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXM6IG5ld1NlbGVjdGVkSXRlbXNcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRBY3RpdmVJbmRleCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdBY3RpdmVJbmRleCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0QWN0aXZlSW5kZXgsXG4gICAgICBhY3RpdmVJbmRleDogbmV3QWN0aXZlSW5kZXhcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciByZXNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblJlc2V0JDJcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHJldHVybiB7XG4gICAgZ2V0U2VsZWN0ZWRJdGVtUHJvcHM6IGdldFNlbGVjdGVkSXRlbVByb3BzLFxuICAgIGdldERyb3Bkb3duUHJvcHM6IGdldERyb3Bkb3duUHJvcHMsXG4gICAgYWRkU2VsZWN0ZWRJdGVtOiBhZGRTZWxlY3RlZEl0ZW0sXG4gICAgcmVtb3ZlU2VsZWN0ZWRJdGVtOiByZW1vdmVTZWxlY3RlZEl0ZW0sXG4gICAgc2V0U2VsZWN0ZWRJdGVtczogc2V0U2VsZWN0ZWRJdGVtcyxcbiAgICBzZXRBY3RpdmVJbmRleDogc2V0QWN0aXZlSW5kZXgsXG4gICAgcmVzZXQ6IHJlc2V0LFxuICAgIHNlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXMsXG4gICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25zaGlmdDtcbmV4cG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCwgdXNlTXVsdGlwbGVTZWxlY3Rpb24sIHVzZVNlbGVjdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==