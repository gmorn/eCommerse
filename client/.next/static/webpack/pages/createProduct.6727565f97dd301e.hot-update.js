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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-340),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState3[0],\n      setTransition = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (offset === -890) {\n    if (offset === -((pages.length - 3) * 110) + 10) {\n      console.log(-((pages.length - 3) * 110) + 10);\n      setOffset(-340);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === -10) {\n      setOffset(-560);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n  }, [transition]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -120) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    if (offset !== -780) {\n      setOffset(offset - 110);\n    } else {\n      setOffset(offset - 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 3\n  }, this);\n}\n\n_s(GallerySlider, \"p1OtW8IqK67rV2x0DImAG6bB7PU=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUMxRCxnQkFBNEJMLCtDQUFRLENBQUMsQ0FBQyxHQUFGLENBQXBDO0VBQUEsSUFBT00sTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsaUJBQTBCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPUSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBb0NULCtDQUFRLENBQUMsSUFBRCxDQUE1QztFQUFBLElBQU9VLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBRUFaLGdEQUFTLENBQUMsWUFBTTtJQUNmLElBQUlNLFFBQUosRUFBYztNQUNiSSxRQUFRLGVBQ1BYLG1EQUFZLENBQUNPLFFBQVEsQ0FBQ1IsMkNBQVEsQ0FBQ2UsS0FBVCxDQUFlUCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FETCxlQUVQUCxtREFBWSxDQUFDTyxRQUFRLENBQUNSLDJDQUFRLENBQUNlLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUE1QixDQUFULENBRkwsZUFHUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDUiwyQ0FBUSxDQUFDZSxLQUFULENBQWVQLFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUhMLDBMQUlKQSxRQUpJLGlCQUtQUCxtREFBWSxDQUFDTyxRQUFRLENBQUMsQ0FBRCxDQUFULENBTEwsZUFNUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDLENBQUQsQ0FBVCxDQU5MLGVBT1BQLG1EQUFZLENBQUNPLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FQTCxHQUFSO01BU0E7SUFDQTtFQUNELENBYlEsRUFhTixDQUFDQSxRQUFELENBYk0sQ0FBVDtFQWVBTixnREFBUyxDQUFDLFlBQU07SUFDZjtJQUNBLElBQUlPLE1BQU0sS0FBSyxFQUFFLENBQUNFLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWhCLElBQXFCLEdBQXZCLElBQThCLEVBQTdDLEVBQWlEO01BQzdDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFFLENBQUNQLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWhCLElBQXFCLEdBQXZCLElBQThCLEVBQTFDO01BRUhOLFNBQVMsQ0FBQyxDQUFDLEdBQUYsQ0FBVDtNQUNBUyxVQUFVLENBQUMsWUFBTTtRQUNoQkwsYUFBYSxDQUFDLElBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxFQUZPLENBQVY7SUFHQTs7SUFDRCxJQUFJTCxNQUFNLEtBQUssQ0FBQyxFQUFoQixFQUFvQjtNQUNuQkMsU0FBUyxDQUFDLENBQUMsR0FBRixDQUFUO01BQ0FTLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCTCxhQUFhLENBQUMsSUFBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEVBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FoQlEsRUFnQk4sQ0FBQ0QsVUFBRCxDQWhCTSxDQUFUOztFQWtCQSxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07SUFDaEMsSUFBSVgsTUFBTSxLQUFLLENBQUMsR0FBaEIsRUFBcUI7TUFDcEJDLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtJQUNBLENBRkQsTUFFTztNQUNOQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7TUFDQVUsVUFBVSxDQUFDLFlBQU07UUFDaEJMLGFBQWEsQ0FBQyxLQUFELENBQWI7TUFDQSxDQUZTLEVBRVAsR0FGTyxDQUFWO0lBR0E7RUFDRCxDQVREOztFQVdBLElBQU1PLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtJQUNsQyxJQUFJWixNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUNwQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO0lBQ0EsQ0FGRCxNQUVPO01BQ05DLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtNQUNBVSxVQUFVLENBQUMsWUFBTTtRQUNoQkwsYUFBYSxDQUFDLEtBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQTtFQUNELENBVEQ7O0VBV0Esb0JBQ0MsOERBQUMsa0RBQUQ7SUFBQSx3QkFDQyw4REFBQywyRUFBRDtNQUNDLE9BQU8sRUFBRU0sa0JBRFY7TUFFQyxFQUFFLEVBQUU7UUFBRUUsTUFBTSxFQUFFO01BQVY7SUFGTDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREQsZUFLQyw4REFBQywyQ0FBRDtNQUFBLHVCQUNDLDhEQUFDLDBDQUFEO1FBQU8sVUFBVSxFQUFFVCxVQUFuQjtRQUErQixLQUFLLEVBQUVKLE1BQXRDO1FBQUEsVUFDRUU7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxELGVBVUMsOERBQUMsNkVBQUQ7TUFDQyxPQUFPLEVBQUVVLG9CQURWO01BRUMsRUFBRSxFQUFFO1FBQUVDLE1BQU0sRUFBRTtNQUFWO0lBRkw7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVZEO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUREO0FBaUJBOztHQTdFdUJmOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeD84OGUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bidcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXAnXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1haW5Db250YWluZXIsIFBhZ2VzLCBXaW5kb3cgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVNsaWRlcih7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcblx0Y29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKC0zNDApXHJcblx0Y29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbdHJhbnNpdGlvbiwgc2V0VHJhbnNpdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGNoaWxkcmVuKSB7XHJcblx0XHRcdHNldFBhZ2VzKFtcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gM10pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAyXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDFdKSxcclxuXHRcdFx0XHQuLi5jaGlsZHJlbixcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMF0pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblsxXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzJdKVxyXG5cdFx0XHRdKVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHR9LCBbY2hpbGRyZW5dKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gaWYgKG9mZnNldCA9PT0gLTg5MCkge1xyXG5cdFx0aWYgKG9mZnNldCA9PT0gLSgocGFnZXMubGVuZ3RoIC0gMykgKiAxMTApICsgMTApIHtcclxuICAgICAgY29uc29sZS5sb2coLSgocGFnZXMubGVuZ3RoIC0gMykgKiAxMTApICsgMTApXHJcbiAgICAgIFxyXG5cdFx0XHRzZXRPZmZzZXQoLTM0MClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbih0cnVlKVxyXG5cdFx0XHR9LCA1MClcclxuXHRcdH1cclxuXHRcdGlmIChvZmZzZXQgPT09IC0xMCkge1xyXG5cdFx0XHRzZXRPZmZzZXQoLTU2MClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbih0cnVlKVxyXG5cdFx0XHR9LCA1MClcclxuXHRcdH1cclxuXHR9LCBbdHJhbnNpdGlvbl0pXHJcblxyXG5cdGNvbnN0IGhlbmRsZVVwQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdGlmIChvZmZzZXQgIT09IC0xMjApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCArIDExMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24oZmFsc2UpXHJcblx0XHRcdH0sIDMwMClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhlbmRsZURvd25BcnJvd0NsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKG9mZnNldCAhPT0gLTc4MCkge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0IC0gMTEwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDExMClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbihmYWxzZSlcclxuXHRcdFx0fSwgMzAwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNYWluQ29udGFpbmVyPlxyXG5cdFx0XHQ8S2V5Ym9hcmRBcnJvd1VwSWNvblxyXG5cdFx0XHRcdG9uQ2xpY2s9e2hlbmRsZVVwQXJyb3dDbGlja31cclxuXHRcdFx0XHRzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8V2luZG93PlxyXG5cdFx0XHRcdDxQYWdlcyB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufSBjb3VudD17b2Zmc2V0fT5cclxuXHRcdFx0XHRcdHtwYWdlc31cclxuXHRcdFx0XHQ8L1BhZ2VzPlxyXG5cdFx0XHQ8L1dpbmRvdz5cclxuXHRcdFx0PEtleWJvYXJkQXJyb3dEb3duSWNvblxyXG5cdFx0XHRcdG9uQ2xpY2s9e2hlbmRsZURvd25BcnJvd0NsaWNrfVxyXG5cdFx0XHRcdHN4PXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdC8+XHJcblx0XHQ8L01haW5Db250YWluZXI+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJLZXlib2FyZEFycm93RG93bkljb24iLCJLZXlib2FyZEFycm93VXBJY29uIiwiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFpbkNvbnRhaW5lciIsIlBhZ2VzIiwiV2luZG93IiwiR2FsbGVyeVNsaWRlciIsImNoaWxkcmVuIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwicGFnZXMiLCJzZXRQYWdlcyIsInRyYW5zaXRpb24iLCJzZXRUcmFuc2l0aW9uIiwiY291bnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImhlbmRsZVVwQXJyb3dDbGljayIsImhlbmRsZURvd25BcnJvd0NsaWNrIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});