webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/portfolio/components/sections/Nav.js":
/*!****************************************************!*\
  !*** ./pages/portfolio/components/sections/Nav.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Nav.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 1),
      verticalScroll = _useState2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.getElementById('.portfolio').onscroll = function () {
      console.log("scrolling");
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-678142912" + " " + 'nav-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Here", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "678142912",
    css: ".nav-container{float:right;margin-right:50px;margin-top:150px;height:100px;width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnlCLEFBR3VCLFlBQ00sa0JBQ0QsaUJBQ0osYUFDRixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2ICgpIHtcbiAgbGV0IFsgdmVydGljYWxTY3JvbGwgXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICB3aW5kb3cuZ2V0RWxlbWVudEJ5SWQoJy5wb3J0Zm9saW8nKS5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9sbGluZ1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcic+XG4gICAgICBIZXJlXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Nav.js */",
    __self: this
  }));
}
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio/components/sections/Nav")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.f538d0388b18e6050043.hot-update.js.map