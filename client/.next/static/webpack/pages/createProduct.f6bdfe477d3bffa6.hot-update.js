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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-340),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState3[0],\n      setTransition = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (offset === -890) {\n    if (offset === -((pages.length - 3) * 110) + 10) {\n      setOffset(-340);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === -10) {\n      setOffset(-560);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n  }, [transition]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -120) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    if (offset !== -780) {\n      setOffset(offset - 110);\n    } else {\n      setOffset(offset - 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 3\n  }, this);\n}\n\n_s(GallerySlider, \"p1OtW8IqK67rV2x0DImAG6bB7PU=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUMxRCxnQkFBNEJMLCtDQUFRLENBQUMsQ0FBQyxHQUFGLENBQXBDO0VBQUEsSUFBT00sTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsaUJBQTBCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPUSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBb0NULCtDQUFRLENBQUMsSUFBRCxDQUE1QztFQUFBLElBQU9VLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBRUFaLGdEQUFTLENBQUMsWUFBTTtJQUNmLElBQUlNLFFBQUosRUFBYztNQUNiSSxRQUFRLGVBQ1BYLG1EQUFZLENBQUNPLFFBQVEsQ0FBQ1IsMkNBQVEsQ0FBQ2UsS0FBVCxDQUFlUCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FETCxlQUVQUCxtREFBWSxDQUFDTyxRQUFRLENBQUNSLDJDQUFRLENBQUNlLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUE1QixDQUFULENBRkwsZUFHUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDUiwyQ0FBUSxDQUFDZSxLQUFULENBQWVQLFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUhMLDBMQUlKQSxRQUpJLGlCQUtQUCxtREFBWSxDQUFDTyxRQUFRLENBQUMsQ0FBRCxDQUFULENBTEwsZUFNUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDLENBQUQsQ0FBVCxDQU5MLGVBT1BQLG1EQUFZLENBQUNPLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FQTCxHQUFSO01BU0E7SUFDQTtFQUNELENBYlEsRUFhTixDQUFDQSxRQUFELENBYk0sQ0FBVDtFQWdCQU4sZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Y7SUFDQSxJQUFJTyxNQUFNLEtBQUssRUFBRSxDQUFDRSxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFoQixJQUFxQixHQUF2QixJQUE4QixFQUE3QyxFQUFpRDtNQUNoRE4sU0FBUyxDQUFDLENBQUMsR0FBRixDQUFUO01BQ0FPLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCSCxhQUFhLENBQUMsSUFBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEVBRk8sQ0FBVjtJQUdBOztJQUNELElBQUlMLE1BQU0sS0FBSyxDQUFDLEVBQWhCLEVBQW9CO01BQ25CQyxTQUFTLENBQUMsQ0FBQyxHQUFGLENBQVQ7TUFDQU8sVUFBVSxDQUFDLFlBQU07UUFDaEJILGFBQWEsQ0FBQyxJQUFELENBQWI7TUFDQSxDQUZTLEVBRVAsRUFGTyxDQUFWO0lBR0E7RUFDRCxDQWRRLEVBY04sQ0FBQ0QsVUFBRCxDQWRNLENBQVQ7O0VBZ0JBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtJQUNoQyxJQUFJVCxNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUNwQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO0lBQ0EsQ0FGRCxNQUVPO01BQ05DLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtNQUNBUSxVQUFVLENBQUMsWUFBTTtRQUNoQkgsYUFBYSxDQUFDLEtBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQTtFQUNELENBVEQ7O0VBV0EsSUFBTUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0lBQ2xDLElBQUlWLE1BQU0sS0FBSyxDQUFDLEdBQWhCLEVBQXFCO01BQ3BCQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7SUFDQSxDQUZELE1BRU87TUFDTkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO01BQ0FRLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCSCxhQUFhLENBQUMsS0FBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FURDs7RUFXQSxvQkFDQyw4REFBQyxrREFBRDtJQUFBLHdCQUNDLDhEQUFDLDJFQUFEO01BQ0MsT0FBTyxFQUFFSSxrQkFEVjtNQUVDLEVBQUUsRUFBRTtRQUFFRSxNQUFNLEVBQUU7TUFBVjtJQUZMO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERCxlQUtDLDhEQUFDLDJDQUFEO01BQUEsdUJBQ0MsOERBQUMsMENBQUQ7UUFBTyxVQUFVLEVBQUVQLFVBQW5CO1FBQStCLEtBQUssRUFBRUosTUFBdEM7UUFBQSxVQUNFRTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEQsZUFVQyw4REFBQyw2RUFBRDtNQUNDLE9BQU8sRUFBRVEsb0JBRFY7TUFFQyxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFO01BQVY7SUFGTDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVkQ7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREQ7QUFpQkE7O0dBNUV1QmI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL3NsaWRlci9nYWxsZXJ5U2xpZGVyL0dhbGxlcnlTbGlkZXIudHN4Pzg4ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJ1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCdcclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lciwgUGFnZXMsIFdpbmRvdyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxudHlwZSBQcm9wcyA9IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5U2xpZGVyKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcclxuXHRjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoLTM0MClcclxuXHRjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFt0cmFuc2l0aW9uLCBzZXRUcmFuc2l0aW9uXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoY2hpbGRyZW4pIHtcclxuXHRcdFx0c2V0UGFnZXMoW1xyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAzXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDJdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMV0pLFxyXG5cdFx0XHRcdC4uLmNoaWxkcmVuLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblswXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzFdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMl0pXHJcblx0XHRcdF0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdH0sIFtjaGlsZHJlbl0pXHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gaWYgKG9mZnNldCA9PT0gLTg5MCkge1xyXG5cdFx0aWYgKG9mZnNldCA9PT0gLSgocGFnZXMubGVuZ3RoIC0gMykgKiAxMTApICsgMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC0zNDApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0XHRpZiAob2Zmc2V0ID09PSAtMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC01NjApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0fSwgW3RyYW5zaXRpb25dKVxyXG5cclxuXHRjb25zdCBoZW5kbGVVcEFycm93Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ICE9PSAtMTIwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMTEwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoZW5kbGVEb3duQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdGlmIChvZmZzZXQgIT09IC03ODApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDExMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgLSAxMTApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24oZmFsc2UpXHJcblx0XHRcdH0sIDMwMClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TWFpbkNvbnRhaW5lcj5cclxuXHRcdFx0PEtleWJvYXJkQXJyb3dVcEljb25cclxuXHRcdFx0XHRvbkNsaWNrPXtoZW5kbGVVcEFycm93Q2xpY2t9XHJcblx0XHRcdFx0c3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFdpbmRvdz5cclxuXHRcdFx0XHQ8UGFnZXMgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gY291bnQ9e29mZnNldH0+XHJcblx0XHRcdFx0XHR7cGFnZXN9XHJcblx0XHRcdFx0PC9QYWdlcz5cclxuXHRcdFx0PC9XaW5kb3c+XHJcblx0XHRcdDxLZXlib2FyZEFycm93RG93bkljb25cclxuXHRcdFx0XHRvbkNsaWNrPXtoZW5kbGVEb3duQXJyb3dDbGlja31cclxuXHRcdFx0XHRzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9NYWluQ29udGFpbmVyPlxyXG5cdClcclxufVxyXG4iXSwibmFtZXMiOlsiS2V5Ym9hcmRBcnJvd0Rvd25JY29uIiwiS2V5Ym9hcmRBcnJvd1VwSWNvbiIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haW5Db250YWluZXIiLCJQYWdlcyIsIldpbmRvdyIsIkdhbGxlcnlTbGlkZXIiLCJjaGlsZHJlbiIsIm9mZnNldCIsInNldE9mZnNldCIsInBhZ2VzIiwic2V0UGFnZXMiLCJ0cmFuc2l0aW9uIiwic2V0VHJhbnNpdGlvbiIsImNvdW50IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImhlbmRsZVVwQXJyb3dDbGljayIsImhlbmRsZURvd25BcnJvd0NsaWNrIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});