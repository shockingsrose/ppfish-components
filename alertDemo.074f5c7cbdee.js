!function(e){function webpackJsonpCallback(t){for(var o=t[0],u=t[1],c=t[2],i,l,f=0,_=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&_.push(r[l][0]),r[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);for(a&&a(t);_.length;)_.shift()();return n.push.apply(n,c||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var o=n[t],u=!0,c=1;c<o.length;c++){var a=o[c];0!==r[a]&&(u=!1)}u&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var t={},r={2:0},n=[];function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var c=0;c<o.length;c++)webpackJsonpCallback(o[c]);var a=u;n.push([1818,1,0]),checkDeferredModules()}({1818:function(e,t,r){e.exports=r(1819)},1819:function(e,t,r){"use strict";function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=_interopRequireDefault(r(0)),o=_interopRequireDefault(r(13)),u=r(36);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var r=_getPrototypeOf(e),n;if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(e){_inherits(Demo,e);var t=_createSuper(Demo);function Demo(e){return _classCallCheck(this,Demo),t.call(this)}return _createClass(Demo,[{key:"render",value:function render(){return n.default.createElement("div",null,n.default.createElement(u.Alert,{message:"Warning text",banner:!0}),n.default.createElement("br",null),n.default.createElement(u.Alert,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),n.default.createElement("br",null),n.default.createElement(u.Alert,{showIcon:!1,message:"Warning text without icon",banner:!0}),n.default.createElement("br",null),n.default.createElement(u.Alert,{type:"error",message:"Error text",banner:!0}))}}]),Demo}(n.default.Component);o.default.render(n.default.createElement(c,null),document.getElementById("app"))}});