"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createProduct",{

/***/ "./src/components/UI/slider/slider/Slider.tsx":
/*!****************************************************!*\
  !*** ./src/components/UI/slider/slider/Slider.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ \"./node_modules/@mui/icons-material/ChevronLeft.js\");\n/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ChevronRight */ \"./node_modules/@mui/icons-material/ChevronRight.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/slider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\slider\\\\Slider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Slider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-450),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState3[0],\n      setTransition = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0])]));\n      return;\n    }\n\n    setPages(children);\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (offset === -2700) {\n      setOffset(-450);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === 0) {\n      setOffset(-2250);\n      setTimeout(function () {\n        setTransition(true);\n      }, 100);\n    }\n  }, [transition]);\n\n  var hendleLeftArrowClick = function hendleLeftArrowClick() {\n    if (offset !== -450) {\n      setOffset(offset + 450);\n    } else {\n      setOffset(offset + 450);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleRightArrowClick = function hendleRightArrowClick() {\n    if (offset !== -2250) {\n      setOffset(offset - 450);\n    } else {\n      setOffset(offset - 450);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleLeftArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleRightArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Slider, \"UUmvKiNaMAdx/31QAaGnoXFYiSY=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvc2xpZGVyL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJZSxTQUFTVSxNQUFULE9BQXFDO0VBQUE7O0VBQUEsSUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjs7RUFDbkQsZ0JBQTRCTCwrQ0FBUSxDQUFDLENBQUMsR0FBRixDQUFwQztFQUFBLElBQU9NLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUVBLGlCQUEwQlAsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0VBQUEsSUFBT1EsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0EsaUJBQW9DVCwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7RUFBQSxJQUFPVSxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUNBWixnREFBUyxDQUFDLFlBQU07SUFDZixJQUFJTSxRQUFKLEVBQWM7TUFDYkksUUFBUSxlQUNQWCxtREFBWSxDQUFDTyxRQUFRLENBQUNSLDJDQUFRLENBQUNlLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUE1QixDQUFULENBREwsMExBRUpBLFFBRkksaUJBR1BQLG1EQUFZLENBQUNPLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FITCxHQUFSO01BS0E7SUFDQTs7SUFDREksUUFBUSxDQUFDSixRQUFELENBQVI7RUFDQSxDQVZRLEVBVU4sQ0FBQ0EsUUFBRCxDQVZNLENBQVQ7RUFZQU4sZ0RBQVMsQ0FBQyxZQUFNO0lBQ2YsSUFBSU8sTUFBTSxLQUFLLENBQUMsSUFBaEIsRUFBc0I7TUFDckJDLFNBQVMsQ0FBQyxDQUFDLEdBQUYsQ0FBVDtNQUNBTSxVQUFVLENBQUMsWUFBTTtRQUNoQkYsYUFBYSxDQUFDLElBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxFQUZPLENBQVY7SUFHQTs7SUFDQyxJQUFJTCxNQUFNLEtBQUssQ0FBZixFQUFrQjtNQUNuQkMsU0FBUyxDQUFDLENBQUMsSUFBRixDQUFUO01BQ0FNLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCRixhQUFhLENBQUMsSUFBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FiUSxFQWFOLENBQUNELFVBQUQsQ0FiTSxDQUFUOztFQWVBLElBQU1JLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtJQUNsQyxJQUFJUixNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUNwQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO0lBQ0EsQ0FGRCxNQUVPO01BQ05DLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtNQUNBTyxVQUFVLENBQUMsWUFBTTtRQUNoQkYsYUFBYSxDQUFDLEtBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQTtFQUNELENBVEQ7O0VBV0EsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0lBQ25DLElBQUlULE1BQU0sS0FBSyxDQUFDLElBQWhCLEVBQXNCO01BQ3JCQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7SUFDQSxDQUZELE1BRU87TUFDTkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO01BQ0FPLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCRixhQUFhLENBQUMsS0FBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FURDs7RUFXQSxvQkFDQyw4REFBQyxrREFBRDtJQUFBLHdCQUNDLDhEQUFDLHVFQUFEO01BQ0MsT0FBTyxFQUFFRyxvQkFEVjtNQUVDLEVBQUUsRUFBRTtRQUFFRSxNQUFNLEVBQUU7TUFBVjtJQUZMO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERCxlQUtDLDhEQUFDLDJDQUFEO01BQUEsdUJBQ0MsOERBQUMsMENBQUQ7UUFBTyxVQUFVLEVBQUVOLFVBQW5CO1FBQStCLEtBQUssRUFBRUosTUFBdEM7UUFBQSxVQUNFRTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEQsZUFVQyw4REFBQyx3RUFBRDtNQUNDLE9BQU8sRUFBRU8scUJBRFY7TUFFQyxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFO01BQVY7SUFGTDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVkQ7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREQ7QUFpQkE7O0dBdkV1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL3NsaWRlci9zbGlkZXIvU2xpZGVyLnRzeD85MTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCdcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uUmlnaHQnXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1haW5Db250YWluZXIsIFBhZ2VzLCBXaW5kb3cgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcclxuXHRjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoLTQ1MClcclxuXHJcblx0Y29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbdHJhbnNpdGlvbiwgc2V0VHJhbnNpdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoY2hpbGRyZW4pIHtcclxuXHRcdFx0c2V0UGFnZXMoW1xyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAxXSksXHJcblx0XHRcdFx0Li4uY2hpbGRyZW4sXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdKVxyXG5cdFx0XHRdKVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHNldFBhZ2VzKGNoaWxkcmVuKVxyXG5cdH0sIFtjaGlsZHJlbl0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ID09PSAtMjcwMCkge1xyXG5cdFx0XHRzZXRPZmZzZXQoLTQ1MClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbih0cnVlKVxyXG5cdFx0XHR9LCA1MClcclxuXHRcdH1cclxuICAgIGlmIChvZmZzZXQgPT09IDApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC0yMjUwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKHRydWUpXHJcblx0XHRcdH0sIDEwMClcclxuXHRcdH1cclxuXHR9LCBbdHJhbnNpdGlvbl0pXHJcblxyXG5cdGNvbnN0IGhlbmRsZUxlZnRBcnJvd0NsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKG9mZnNldCAhPT0gLTQ1MCkge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgNDUwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCArIDQ1MClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbihmYWxzZSlcclxuXHRcdFx0fSwgMzAwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGVuZGxlUmlnaHRBcnJvd0NsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKG9mZnNldCAhPT0gLTIyNTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDQ1MClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgLSA0NTApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24oZmFsc2UpXHJcblx0XHRcdH0sIDMwMClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TWFpbkNvbnRhaW5lcj5cclxuXHRcdFx0PENoZXZyb25MZWZ0SWNvblxyXG5cdFx0XHRcdG9uQ2xpY2s9e2hlbmRsZUxlZnRBcnJvd0NsaWNrfVxyXG5cdFx0XHRcdHN4PXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxXaW5kb3c+XHJcblx0XHRcdFx0PFBhZ2VzIHRyYW5zaXRpb249e3RyYW5zaXRpb259IGNvdW50PXtvZmZzZXR9PlxyXG5cdFx0XHRcdFx0e3BhZ2VzfVxyXG5cdFx0XHRcdDwvUGFnZXM+XHJcblx0XHRcdDwvV2luZG93PlxyXG5cdFx0XHQ8Q2hldnJvblJpZ2h0SWNvblxyXG5cdFx0XHRcdG9uQ2xpY2s9e2hlbmRsZVJpZ2h0QXJyb3dDbGlja31cclxuXHRcdFx0XHRzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9NYWluQ29udGFpbmVyPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haW5Db250YWluZXIiLCJQYWdlcyIsIldpbmRvdyIsIlNsaWRlciIsImNoaWxkcmVuIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwicGFnZXMiLCJzZXRQYWdlcyIsInRyYW5zaXRpb24iLCJzZXRUcmFuc2l0aW9uIiwiY291bnQiLCJzZXRUaW1lb3V0IiwiaGVuZGxlTGVmdEFycm93Q2xpY2siLCJoZW5kbGVSaWdodEFycm93Q2xpY2siLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/slider/slider/Slider.tsx\n"));

/***/ })

});