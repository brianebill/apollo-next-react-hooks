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
var _jsxFileName = "/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js";



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// html, body {
//   height: 100%;
// }
//
// body {
//   display: grid;
//   grid: 100px / 100px;
//   align-content: center;
//   margin: 0;
// }
//
// span {
//   border-radius: 50%;
//   background: turquoise;
//   will-change: transform;
// }
// const getProgress = ({elapsed, total}) =>
//   Math.min(elapsed / total, 1);
//
// const easeOut = progress =>
//   Math.pow(--progress, 5) + 1;
//
// const element = document.querySelector("span");
// const finalPosition = 600;
//
// const time = {
//   start: performance.now(),
//   total: 2000
// };
//
// const tick = now => {
//   time.elapsed = now - time.start;
//   const progress = getProgress(time);
//   const easing = easeOut(progress);
//   const position = easing * finalPosition;
//   element.style.transform = `translate(${position}px)`;
//   if (progress < 1) requestAnimationFrame(tick);
// };
// requestAnimationFrame(tick);


var useProgress = function useProgress(start, end, duration) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(start),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getProgress = function getProgress(_ref) {
      var elapsed = _ref.elapsed,
          total = _ref.total;
      return Math.min(elapsed / total, 1);
    };

    var easeOut = function easeOut(progress) {
      return Math.pow(--progress, 5) + 1;
    };

    var time = {
      start: performance.now(),
      total: duration
    };
    var finalPosition = 47.5;
    var rafId = null;

    var step = function step(now) {
      time.elapsed = now - time.start;
      var progress = getProgress(time);
      var easing = easeOut(progress);
      var position = easing * finalPosition; //element.style.transform = `translate(${position}px)`;
      // let step = timestamp => {
      //   if (!start) start = timestamp;
      //   let progress = timestamp - start;

      setProgress(position * 1000);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return function () {
      return cancelAnimationFrame(rafId);
    };
  }, [start, end, duration]);
  return Math.min(progress / duration, duration);
};

function Button() {
  var position = useProgress(0, 50, 1000);
  console.log(position);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: "".concat(position * .03)
    },
    className: "jsx-3671427441" + " " + 'button-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      right: "".concat(position, "%")
    },
    className: "jsx-3671427441" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3671427441" + " " + 'circle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3671427441" + " " + 'down-arrow',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u02C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3671427441",
    css: ".button-container{z-index:10;position:relative;margin-top:-55px;cursor:pointer;}.remove-underline{-webkit-text-decoration:none;text-decoration:none;}.button{position:absolute;top:-40px;right:-100px;}.circle{background:rgba(255,255,255,1);width:50px;height:50px;border-radius:50%;text-align:center;}.arrow{padding-top:12px;color:rgba(20,20,20,1);font-size:48px;-webkit-transform:scale(1.25,1);-ms-transform:scale(1.25,1);transform:scale(1.25,1);font-family:helveitica;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmlhbm1jZG9ub3VnaC9zaXRlcy9uZXh0LXdpdGgtYXBvbGxvL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RnlCLEFBR3NCLEFBTVUsQUFHSCxBQUthLEFBT2QsV0FwQkMsTUFxQkssQ0FaZCxVQUNHLENBVEssRUFhTixTQVFJLENBWGpCLENBSWMsSUFiRyxJQUlqQixJQVVvQixDQU9LLE1BcEJ6QixXQWNvQixrQkFDcEIsaURBTXlCLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvYnJpYW5tY2Rvbm91Z2gvc2l0ZXMvbmV4dC13aXRoLWFwb2xsby9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodG1sLCBib2R5IHtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy9cbi8vIGJvZHkge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkOiAxMDBweCAvIDEwMHB4O1xuLy8gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cbi8vXG4vLyBzcGFuIHtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyB9XG5cbi8vIGNvbnN0IGdldFByb2dyZXNzID0gKHtlbGFwc2VkLCB0b3RhbH0pID0+XG4vLyAgIE1hdGgubWluKGVsYXBzZWQgLyB0b3RhbCwgMSk7XG4vL1xuLy8gY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+XG4vLyAgIE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbi8vXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4vLyBjb25zdCBmaW5hbFBvc2l0aW9uID0gNjAwO1xuLy9cbi8vIGNvbnN0IHRpbWUgPSB7XG4vLyAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbi8vICAgdG90YWw6IDIwMDBcbi8vIH07XG4vL1xuLy8gY29uc3QgdGljayA9IG5vdyA9PiB7XG4vLyAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4vLyAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3ModGltZSk7XG4vLyAgIGNvbnN0IGVhc2luZyA9IGVhc2VPdXQocHJvZ3Jlc3MpO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4vLyAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4vLyAgIGlmIChwcm9ncmVzcyA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbi8vIH07XG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmxldCB1c2VQcm9ncmVzcyA9IChzdGFydCxlbmQsZHVyYXRpb24pID0+IHtcbiAgbGV0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoc3RhcnQpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRQcm9ncmVzcyA9ICh7ZWxhcHNlZCwgdG90YWx9KSA9PiBNYXRoLm1pbihlbGFwc2VkIC8gdG90YWwsIDEpO1xuICAgICAgY29uc3QgZWFzZU91dCA9IHByb2dyZXNzID0+IE1hdGgucG93KC0tcHJvZ3Jlc3MsIDUpICsgMTtcbiAgICAgIGNvbnN0IHRpbWUgPSB7XG4gICAgICAgIHN0YXJ0OiBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdG90YWw6IGR1cmF0aW9uXG4gICAgICB9O1xuICAgICAgY29uc3QgZmluYWxQb3NpdGlvbiA9IDQ3LjU7XG4gICAgICBsZXQgcmFmSWQgPSBudWxsO1xuXG4gICAgICBjb25zdCBzdGVwID0gbm93ID0+IHtcbiAgICAgICAgIHRpbWUuZWxhcHNlZCA9IG5vdyAtIHRpbWUuc3RhcnQ7XG4gICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzKHRpbWUpO1xuICAgICAgICAgY29uc3QgZWFzaW5nID0gZWFzZU91dChwcm9ncmVzcyk7XG4gICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGVhc2luZyAqIGZpbmFsUG9zaXRpb247XG4gICAgICAgICAvL2VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9ufXB4KWA7XG4gICAgICAvLyBsZXQgc3RlcCA9IHRpbWVzdGFtcCA9PiB7XG4gICAgICAvLyAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xuICAgICAgLy8gICBsZXQgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydDtcbiAgICAgICAgc2V0UHJvZ3Jlc3MocG9zaXRpb24qMTAwMCk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkKTtcbiAgICB9LFxuICAgIFtzdGFydCxlbmQsZHVyYXRpb25dXG4gICk7XG5cbiAgcmV0dXJuIE1hdGgubWluKHByb2dyZXNzIC8gZHVyYXRpb24sIGR1cmF0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uICgpIHtcbiAgbGV0IHBvc2l0aW9uID0gdXNlUHJvZ3Jlc3MoMCw1MCwxMDAwKTtcbiAgY29uc29sZS5sb2cocG9zaXRpb24pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWNvbnRhaW5lcicgc3R5bGU9e3sgb3BhY2l0eTogYCR7cG9zaXRpb24qLjAzfWAgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBzdHlsZT17eyByaWdodDogYCR7cG9zaXRpb259JWAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Rvd24tYXJyb3cnPiYjNzA5OzwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucmVtb3ZlLXVuZGVybGluZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6LTQwcHg7XG4gICAgICAgICAgcmlnaHQ6LTEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMCwyMCwyMCwxKTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMjUsMSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZlaXRpY2E7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/brianmcdonough/sites/next-with-apollo/pages/portfolio/components/Button.js */",
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
//# sourceMappingURL=index.js.197b9b1c6dcda95516c3.hot-update.js.map