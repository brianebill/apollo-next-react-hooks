webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/portfolio/components/Button.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/components/Button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useProgress */ "./pages/portfolio/hooks/useProgress.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ButtonContainer = react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.1
  }
});

var Circle = function Circle(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovering = _useState2[0],
      setHovering = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainer, {
    className: "circle",
    style: {
      opacity: "".concat(opacity)
    },
    pose: hovering ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovering(false);
    },
    onClick: function onClick() {
      window.scrollTo({
        top: 385,
        left: 0,
        behavior: 'smooth'
      });
      setOpacity(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3661733204" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3661733204",
    css: ".circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}.circle:hover{box-shadow:0 5px 15px rgba(33,33,33,1);}.down-arrow{padding:10px;color:rgba(20,20,20,1);font-size:36px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helvetica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnlCLEFBRzBDLEFBU1EsQUFHMUIsYUFDVSxrQkFaWixLQWFJLEdBSmpCLEdBUmMsU0FhVyxHQVpMLGtCQUNBLGtCQUNRLDZDQVdKLGVBVkUsT0FXMUIsaURBVkEiLCJmaWxlIjoiL1VzZXJzL2JyaWFubWNkb25vdWdoL3NpdGVzL25leHQtd2l0aC1hcG9sbG8vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVByb2dyZXNzIGZyb20gJy4uL2hvb2tzL3VzZVByb2dyZXNzJ1xuaW1wb3J0IHt1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHBvc2VkIGZyb20gXCJyZWFjdC1wb3NlXCI7XG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHBvc2VkLmRpdih7XG4gIGlkbGU6IHsgc2NhbGU6IDEgfSxcbiAgaG92ZXJlZDogeyBzY2FsZTogMS4xIH1cbn0pO1xuXG5jb25zdCBDaXJjbGUgPSBmdW5jdGlvbihwcm9wcykge1xuICBjb25zdCBbaG92ZXJpbmcsIHNldEhvdmVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wYWNpdHksIHNldE9wYWNpdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Db250YWluZXJcbiAgICAgIGNsYXNzTmFtZT0nY2lyY2xlJ1xuICAgICAgc3R5bGU9e3sgb3BhY2l0eTogYCR7b3BhY2l0eX1gIH19XG4gICAgICBwb3NlPXtob3ZlcmluZyA/IFwiaG92ZXJlZFwiIDogXCJpZGxlXCJ9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiAzODUsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSlcbiAgICAgICAgc2V0T3BhY2l0eSgwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvd24tYXJyb3cnPjwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmNpcmNsZTpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDMzLDMzLDMzLDEpO1xuICAgICAgICB9XG4gICAgICAgIC5kb3duLWFycm93IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIwLDIwLDIwLDEpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yNSwxKTtcbiAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgbGV0IHBvc2l0aW9uID0gdXNlUHJvZ3Jlc3Moe3N0YXJ0fSx7ZW5kfSx7dGltZX0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nPlxuICAgICAgICAgICAgPENpcmNsZSB7Li4ucHJvcHN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogJHtwb3NpdGlvbiouMDN9O1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICByaWdodDogJHtwb3NpdGlvbn0lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOi0yNXB4O1xuICAgICAgICAgICAgcmlnaHQ6LTEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
    __self: this
  }));
};

function Button(props) {
  var position = Object(_hooks_useProgress__WEBPACK_IMPORTED_MODULE_2__["default"])({
    start: start
  }, {
    end: end
  }, {
    time: time
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3608454703", [position * .03, position]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3608454703", [position * .03, position]]]) + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3608454703", [position * .03, position]]]) + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Circle, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3608454703",
    css: ".button-container{opacity:".concat(position * .03, ";z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.button{right:").concat(position, "%;position:absolute;top:-25px;right:-100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRTJCLEFBR2tELEFBT0Qsb0NBQ2xCLENBUFAsV0FDTyxNQU9ULFVBQ0csRUFQSyxXQVFuQixNQVBpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlUHJvZ3Jlc3MgZnJvbSAnLi4vaG9va3MvdXNlUHJvZ3Jlc3MnXG5pbXBvcnQge3VzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcG9zZWQgZnJvbSBcInJlYWN0LXBvc2VcIjtcblxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gcG9zZWQuZGl2KHtcbiAgaWRsZTogeyBzY2FsZTogMSB9LFxuICBob3ZlcmVkOiB7IHNjYWxlOiAxLjEgfVxufSk7XG5cbmNvbnN0IENpcmNsZSA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BhY2l0eSwgc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc29sZS5sb2cocHJvcHMpXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lclxuICAgICAgY2xhc3NOYW1lPSdjaXJjbGUnXG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBgJHtvcGFjaXR5fWAgfX1cbiAgICAgIHBvc2U9e2hvdmVyaW5nID8gXCJob3ZlcmVkXCIgOiBcImlkbGVcIn1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmcodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyaW5nKGZhbHNlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDM4NSxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KVxuICAgICAgICBzZXRPcGFjaXR5KDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG93bi1hcnJvdyc+PC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMzMsMzMsMzMsMSk7XG4gICAgICAgIH1cbiAgICAgICAgLmRvd24tYXJyb3cge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjAsMjAsMjAsMSk7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjI1LDEpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0J1dHRvbkNvbnRhaW5lcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICBsZXQgcG9zaXRpb24gPSB1c2VQcm9ncmVzcyh7c3RhcnR9LHtlbmR9LHt0aW1lfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbic+XG4gICAgICAgICAgICA8Q2lyY2xlIHsuLi5wcm9wc30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAke3Bvc2l0aW9uKi4wM307XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIHJpZ2h0OiAke3Bvc2l0aW9ufSU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6LTI1cHg7XG4gICAgICAgICAgICByaWdodDotMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */"),
    dynamic: [position * .03, position],
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/portfolio/components/Button")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.98675c7311b7678f904d.hot-update.js.map