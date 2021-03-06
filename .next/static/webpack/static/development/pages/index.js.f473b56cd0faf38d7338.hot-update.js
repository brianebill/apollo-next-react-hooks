webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/portfolio/components/Sections.js":
/*!************************************************!*\
  !*** ./pages/portfolio/components/Sections.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sections; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionNav */ "./pages/portfolio/components/SectionNav.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js";



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
    className: "jsx-3310860017" + " " + 'sections',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "".concat(visible.bg)
    },
    className: "jsx-3310860017" + " " + 'section-bg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SectionNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3310860017",
    css: ".sections{height:600px;width:100%;margin-top:-18px;z-index:5;position:relative;}.section-bg{height:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL1NlY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDeUIsQUFHd0IsQUFPQSxhQU5GLEFBT2IsV0FObUIsaUJBQ1AsVUFDUSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdGlvbk5hdiBmcm9tIFwiLi9TZWN0aW9uTmF2XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmxldCBfc2VjdGlvbnMgPSBbXG4gIHtcbiAgICAnb3JkZXInOiAwLFxuICAgICdiZyc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDUzLDEzMywxNTYsMSksIHJnYmEoMTIzLDE4OSwyMTIsMSkpJ1xuICB9LFxuICB7XG4gICAgJ29yZGVyJzogMSxcbiAgICAnYmcnOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAwMDQyOCwgIzAwNGU5MiknXG4gIH0sXG4gIHtcbiAgICAnb3JkZXInOiAyLFxuICAgICdiZyc6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDg2LDE3MSw0NywxKSwgcmdiYSgxNjgsMjI0LDk5LDEpKSdcbiAgfSxcbiAge1xuICAgICdvcmRlcic6IDMsXG4gICAgJ2JnJzogJydcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbnMgKCkge1xuICBsZXQgWyBpbmRleCwgc2V0SW5kZXggXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgdmlzaWJsZSA9IF9zZWN0aW9uc1tpbmRleF07XG4gIGxldCBuZXh0ID0gX3NlY3Rpb25zW2luZGV4XSsxO1xuICBsZXQgcHJldiA9IF9zZWN0aW9uc1tpbmRleF0tMTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbnMnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tYmcnIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYCR7dmlzaWJsZS5iZ31gfX0+XG4gICAgICAgIDxTZWN0aW9uTmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5zZWN0aW9ucyB7XG4gICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMThweDtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi1iZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Sections.js */",
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio/components/Sections")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.f473b56cd0faf38d7338.hot-update.js.map