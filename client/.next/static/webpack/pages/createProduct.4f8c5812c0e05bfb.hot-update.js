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

/***/ "./src/components/UI/slider/gallerySlider/GallerySlider.tsx":
/*!******************************************************************!*\
  !*** ./src/components/UI/slider/gallerySlider/GallerySlider.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState3[0],\n      setTransition = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n\n    setPages(children);\n  }, [children]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -450) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 100);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    if (offset !== -2250) {\n      setOffset(offset - 450);\n    } else {\n      setOffset(offset - 450);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s(GallerySlider, \"4Q5dQvaapxOhmvAchtHvUHUwL04=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUV6RCxnQkFBNEJQLCtDQUFRLENBQUMsQ0FBRCxDQUFwQztFQUFBLElBQU9RLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUEwQlQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0VBQUEsSUFBT1UsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBQ0QsaUJBQW9DWCwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7RUFBQSxJQUFPWSxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVDZCxnREFBUyxDQUFDLFlBQU07SUFDaEIsSUFBSVEsUUFBSixFQUFjO01BQ2JJLFFBQVEsZUFDUGIsbURBQVksQ0FBQ1MsUUFBUSxDQUFDViwyQ0FBUSxDQUFDaUIsS0FBVCxDQUFlUCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FETCxlQUVQVCxtREFBWSxDQUFDUyxRQUFRLENBQUNWLDJDQUFRLENBQUNpQixLQUFULENBQWVQLFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUZMLGVBR1BULG1EQUFZLENBQUNTLFFBQVEsQ0FBQ1YsMkNBQVEsQ0FBQ2lCLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUE1QixDQUFULENBSEwsMExBSUpBLFFBSkksaUJBS1BULG1EQUFZLENBQUNTLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FMTCxlQU1QVCxtREFBWSxDQUFDUyxRQUFRLENBQUMsQ0FBRCxDQUFULENBTkwsZUFPUFQsbURBQVksQ0FBQ1MsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQVBMLEdBQVI7TUFTQTtJQUNBOztJQUNESSxRQUFRLENBQUNKLFFBQUQsQ0FBUjtFQUNBLENBZFMsRUFjUCxDQUFDQSxRQUFELENBZE8sQ0FBVDs7RUFnQkEsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0lBQ2pDLElBQUlQLE1BQU0sS0FBSyxDQUFDLEdBQWhCLEVBQXFCO01BQ3BCQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7SUFDQSxDQUZELE1BRU87TUFDTkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO01BQ0FRLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCSCxhQUFhLENBQUMsS0FBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FUQTs7RUFXRCxJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07SUFDbEMsSUFBSVQsTUFBTSxLQUFLLENBQUMsSUFBaEIsRUFBc0I7TUFDckJDLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtJQUNBLENBRkQsTUFFTztNQUNOQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7TUFDQVEsVUFBVSxDQUFDLFlBQU07UUFDaEJILGFBQWEsQ0FBQyxLQUFELENBQWI7TUFDQSxDQUZTLEVBRVAsR0FGTyxDQUFWO0lBR0E7RUFDRCxDQVREOztFQVdDLG9CQUNFLDhEQUFDLGtEQUFEO0lBQUEsd0JBQ0EsOERBQUMsMkVBQUQ7TUFDRSxPQUFPLEVBQUVFLGtCQURYO01BRUUsRUFBRSxFQUFFO1FBQUVHLE1BQU0sRUFBRTtNQUFWO0lBRk47TUFBQTtNQUFBO01BQUE7SUFBQSxRQURBLGVBS0EsOERBQUMsMkNBQUQ7TUFBQSx1QkFDRSw4REFBQywwQ0FBRDtRQUFPLFVBQVUsRUFBRU4sVUFBbkI7UUFBK0IsS0FBSyxFQUFFSixNQUF0QztRQUFBLFVBQ0dFO01BREg7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFMQSxlQVVBLDhEQUFDLDZFQUFEO01BQ0UsT0FBTyxFQUFFTyxvQkFEWDtNQUVFLEVBQUUsRUFBRTtRQUFFQyxNQUFNLEVBQUU7TUFBVjtJQUZOO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFWQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWlCRDs7R0E3RHVCWjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvc2xpZGVyL2dhbGxlcnlTbGlkZXIvR2FsbGVyeVNsaWRlci50c3g/ODhlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXIsIFBhZ2VzLCBXaW5kb3cgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVNsaWRlcih7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW3RyYW5zaXRpb24sIHNldFRyYW5zaXRpb25dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChjaGlsZHJlbikge1xyXG5cdFx0XHRzZXRQYWdlcyhbXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDNdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMl0pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAxXSksXHJcblx0XHRcdFx0Li4uY2hpbGRyZW4sXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMV0pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblsyXSlcclxuXHRcdFx0XSlcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRzZXRQYWdlcyhjaGlsZHJlbilcclxuXHR9LCBbY2hpbGRyZW5dKVxyXG5cclxuICBjb25zdCBoZW5kbGVVcEFycm93Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ICE9PSAtNDUwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMTAwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoZW5kbGVEb3duQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdGlmIChvZmZzZXQgIT09IC0yMjUwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgLSA0NTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0IC0gNDUwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5Db250YWluZXI+XHJcbiAgICA8S2V5Ym9hcmRBcnJvd1VwSWNvblxyXG4gICAgICBvbkNsaWNrPXtoZW5kbGVVcEFycm93Q2xpY2t9XHJcbiAgICAgIHN4PXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAvPlxyXG4gICAgPFdpbmRvdz5cclxuICAgICAgPFBhZ2VzIHRyYW5zaXRpb249e3RyYW5zaXRpb259IGNvdW50PXtvZmZzZXR9PlxyXG4gICAgICAgIHtwYWdlc31cclxuICAgICAgPC9QYWdlcz5cclxuICAgIDwvV2luZG93PlxyXG4gICAgPEtleWJvYXJkQXJyb3dEb3duSWNvblxyXG4gICAgICBvbkNsaWNrPXtoZW5kbGVEb3duQXJyb3dDbGlja31cclxuICAgICAgc3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgIC8+XHJcbiAgPC9NYWluQ29udGFpbmVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJLZXlib2FyZEFycm93RG93bkljb24iLCJLZXlib2FyZEFycm93VXBJY29uIiwiTWFpbkNvbnRhaW5lciIsIlBhZ2VzIiwiV2luZG93IiwiR2FsbGVyeVNsaWRlciIsImNoaWxkcmVuIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwicGFnZXMiLCJzZXRQYWdlcyIsInRyYW5zaXRpb24iLCJzZXRUcmFuc2l0aW9uIiwiY291bnQiLCJoZW5kbGVVcEFycm93Q2xpY2siLCJzZXRUaW1lb3V0IiwiaGVuZGxlRG93bkFycm93Q2xpY2siLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});