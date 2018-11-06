webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/portfolio/components/sections/Sections.js":
/*!*********************************************************!*\
  !*** ./pages/portfolio/components/sections/Sections.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sections; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Sections.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _sections = [{
  'order': 0,
  'bg': 'linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1))'
}, {
  'order': 1,
  'bg': 'linear-gradient(to bottom right, #000428, #004e92)'
}, {
  'order': 2,
  'bg': 'linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1))'
}, {
  'order': 3,
  'bg': ''
}];
function Sections() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var visible = _sections[index];
  var next = _sections[index] + 1;
  var prev = _sections[index] - 1;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2989143624" + " " + 'sections',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "".concat(visible.bg)
    },
    className: "jsx-2989143624" + " " + 'section-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2989143624",
    css: ".sections{height:500px;width:100%;margin-top:-18px;z-index:5;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCeUIsQUFHd0IsYUFDRixXQUNNLGlCQUNQLFVBQ1Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3NlY3Rpb25zL1NlY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgX3NlY3Rpb25zID0gW1xuICB7XG4gICAgJ29yZGVyJzogMCxcbiAgICAnYmcnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSg1MywxMzMsMTU2LDEpLCByZ2JhKDEyMywxODksMjEyLDEpKSdcbiAgfSxcbiAge1xuICAgICdvcmRlcic6IDEsXG4gICAgJ2JnJzogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMDA0MjgsICMwMDRlOTIpJ1xuICB9LFxuICB7XG4gICAgJ29yZGVyJzogMixcbiAgICAnYmcnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSg4NiwxNzEsNDcsMSksIHJnYmEoMTY4LDIyNCw5OSwxKSknXG4gIH0sXG4gIHtcbiAgICAnb3JkZXInOiAzLFxuICAgICdiZyc6ICcnXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25zICgpIHtcbiAgbGV0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IHZpc2libGUgPSBfc2VjdGlvbnNbaW5kZXhdO1xuICBsZXQgbmV4dCA9IF9zZWN0aW9uc1tpbmRleF0rMTtcbiAgbGV0IHByZXYgPSBfc2VjdGlvbnNbaW5kZXhdLTE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb25zJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRhaW5lcicgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgJHt2aXNpYmxlLmJnfWB9fSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnNlY3Rpb25zIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xuICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/sections/Sections.js */",
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio/components/sections/Sections")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2109a48f6872c3af8290.hot-update.js.map