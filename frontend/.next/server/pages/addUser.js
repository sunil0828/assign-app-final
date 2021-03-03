module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/addUser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateUser.js":
/*!**********************************!*\
  !*** ./components/CreateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateUser; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUp */ "./components/SignUp.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");

var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\CreateUser.js";





function CreateUser() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])({
    email: "",
    name: "",
    password: ""
  });
  const [signup, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_SignUp__WEBPACK_IMPORTED_MODULE_4__["SIGNUP_MUTATION"], {
    variables: inputs
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Add user account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["User added with ", data.createUser.email, "...!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 30
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "User Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "User Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Add User"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-19hjfba-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const ErrorMessage = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), error.message.replace("GraphQL error: ", "")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), error.message.replace("GraphQL error: ", "")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

ErrorMessage.defaultProps = {
  error: {}
};
ErrorMessage.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: SIGNUP_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\components\\SignUp.js";





const SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;
function SignUp() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    email: "",
    name: "",
    password: ""
  });
  const [signup, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGNUP_MUTATION, {
    variables: inputs
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Sign Up For an Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Signed up with ", data.createUser.email, " - Please Go Head and Sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1ypidp4-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:12px 20px;margin:8px 0;font-size:1rem;border:1px solid #ccc;box-sizing:border-box;&:focus{outline:0;border-color:var(--red);}}button,input[type=\"submit\"]{width:auto;background:#4caf50;color:white;border:none;margin:8px 0;font-size:2rem;padding:14px 20px;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:\"\";display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);
  const initialValues = Object.values(initial).join("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/addUser.js":
/*!**************************!*\
  !*** ./pages/addUser.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddUserPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateUser */ "./components/CreateUser.js");

var _jsxFileName = "C:\\Users\\SunilL\\Downloads\\assign-app\\frontend\\pages\\addUser.js";

function AddUserPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CreateUser__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVVc2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRkVXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlRm9ybSIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwic2lnbnVwIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZU11dGF0aW9uIiwiU0lHTlVQX01VVEFUSU9OIiwidmFyaWFibGVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsImNhdGNoIiwiY3JlYXRlVXNlciIsIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZ3FsIiwiU2lnblVwIiwia2V5ZnJhbWVzIiwiRm9ybSIsImZvcm0iLCJpbml0aWFsIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsInVzZUVmZmVjdCIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImtleSIsIkFkZFVzZXJQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQ25DLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3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LFNBQVQsR0FBcUI7QUFDbkIsVUFBTUMsVUFBVSxHQUFHVCxNQUFNLENBQUNVLFdBQVAsQ0FDakJWLE1BQU0sQ0FBQ1csT0FBUCxDQUFlMUQsTUFBZixFQUF1QitCLEdBQXZCLENBQTJCLENBQUMsQ0FBQzRCLEdBQUQsRUFBTVIsS0FBTixDQUFELEtBQWtCLENBQUNRLEdBQUQsRUFBTSxFQUFOLENBQTdDLENBRGlCLENBQW5CO0FBR0FmLGFBQVMsQ0FBQ1ksVUFBRCxDQUFUO0FBQ0Q7O0FBRUQsU0FBTztBQUFFeEQsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkMsYUFBeEI7QUFBbUNxRDtBQUFuQyxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUVlLFNBQVNLLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNSRCwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9hZGRVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hZGRVc2VyLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCB7IFNJR05VUF9NVVRBVElPTiB9IGZyb20gXCIuL1NpZ25VcFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVXNlcigpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NpZ251cCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFNJR05VUF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgfSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWdudXAoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aDI+QWRkIHVzZXIgYWNjb3VudDwvaDI+XHJcbiAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAge2RhdGE/LmNyZWF0ZVVzZXIgJiYgPHA+VXNlciBhZGRlZCB3aXRoIHtkYXRhLmNyZWF0ZVVzZXIuZW1haWx9Li4uITwvcD59XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFVzZXI8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gKHsgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKFxuICAgIGVycm9yLm5ldHdvcmtFcnJvciAmJlxuICAgIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGhcbiAgKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKFwiR3JhcGhRTCBlcnJvcjogXCIsIFwiXCIpfVxuICAgICAgICA8L3A+XG4gICAgICA8L0Vycm9yU3R5bGVzPlxuICAgICkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yU3R5bGVzPlxuICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKFwiR3JhcGhRTCBlcnJvcjogXCIsIFwiXCIpfVxuICAgICAgPC9wPlxuICAgIDwvRXJyb3JTdHlsZXM+XG4gICk7XG59O1xuXG5FcnJvck1lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjoge30sXG59O1xuXG5FcnJvck1lc3NhZ2UucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9zdHlsZXMvRm9ybVwiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBTSUdOVVBfTVVUQVRJT04oXHJcbiAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVVzZXIoZGF0YTogeyBlbWFpbDogJGVtYWlsLCBuYW1lOiAkbmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihTSUdOVVBfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gIH0pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aDI+U2lnbiBVcCBGb3IgYW4gQWNjb3VudDwvaDI+XHJcbiAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAge2RhdGE/LmNyZWF0ZVVzZXIgJiYgKFxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFNpZ25lZCB1cCB3aXRoIHtkYXRhLmNyZWF0ZVVzZXIuZW1haWx9IC0gUGxlYXNlIEdvIEhlYWQgYW5kIFNpZ24gaW4hXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgLyogcm90YXRlOiAwOyAqL1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cbiAgfVxuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGlucHV0LFxuICB0ZXh0YXJlYSxcbiAgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkKTtcbiAgICB9XG4gIH1cbiAgYnV0dG9uLFxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgI2ZmMzAxOSAwJSxcbiAgICAgICAgI2UyYjA0YSA1MCUsXG4gICAgICAgICNmZjMwMTkgMTAwJVxuICAgICAgKTtcbiAgICB9XG4gICAgJlthcmlhLWJ1c3k9XCJ0cnVlXCJdOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH0sIFtpbml0aWFsVmFsdWVzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgXCJcIl0pXHJcbiAgICApO1xyXG4gICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH07XHJcbn1cclxuIiwiaW1wb3J0IENyZWF0ZVVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlVXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVXNlclBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDcmVhdGVVc2VyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=