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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-340),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      pageCount = _useState3[0],\n      setPageCount = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState4[0],\n      setTransition = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setPageCount(pages.length = 1);\n    console.log(pages.length);\n  }, [pages]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (offset === -890) {\n    if (offset === -(pageCount * 110) + 10) {\n      setOffset(-340);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === -10) {\n      setOffset(-560);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n  }, [transition]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -120) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    if (offset !== -780) {\n      setOffset(offset - 110);\n    } else {\n      setOffset(offset - 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(GallerySlider, \"ypgMbkS/rmMc1pIGCsx+Yvu8uEI=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUV6RCxnQkFBNEJQLCtDQUFRLENBQUMsQ0FBQyxHQUFGLENBQXBDO0VBQUEsSUFBT1EsTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsaUJBQTBCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPVSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBa0NYLCtDQUFRLENBQUMsQ0FBRCxDQUExQztFQUFBLElBQU9ZLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0QsaUJBQW9DYiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7RUFBQSxJQUFPYyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVDaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2hCLElBQUlRLFFBQUosRUFBYztNQUNWSSxRQUFRLGVBQ05iLG1EQUFZLENBQUNTLFFBQVEsQ0FBQ1YsMkNBQVEsQ0FBQ21CLEtBQVQsQ0FBZVQsUUFBZixJQUEyQixDQUE1QixDQUFULENBRE4sZUFFVlQsbURBQVksQ0FBQ1MsUUFBUSxDQUFDViwyQ0FBUSxDQUFDbUIsS0FBVCxDQUFlVCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FGRixlQUdWVCxtREFBWSxDQUFDUyxRQUFRLENBQUNWLDJDQUFRLENBQUNtQixLQUFULENBQWVULFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUhGLDBMQUlQQSxRQUpPLGlCQUtWVCxtREFBWSxDQUFDUyxRQUFRLENBQUMsQ0FBRCxDQUFULENBTEYsZUFNVlQsbURBQVksQ0FBQ1MsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQU5GLGVBT1ZULG1EQUFZLENBQUNTLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FQRixHQUFSO01BU0g7SUFDQTtFQUNELENBYlMsRUFhUCxDQUFDQSxRQUFELENBYk8sQ0FBVDtFQWVBUixnREFBUyxDQUFDLFlBQU07SUFDZGMsWUFBWSxDQUFDSCxLQUFLLENBQUNPLE1BQU4sR0FBYyxDQUFmLENBQVo7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQUssQ0FBQ08sTUFBbEI7RUFFRCxDQUpRLEVBSU4sQ0FBQ1AsS0FBRCxDQUpNLENBQVQ7RUFNRFgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Y7SUFDRSxJQUFJUyxNQUFNLEtBQUssRUFBRUksU0FBUyxHQUFHLEdBQWQsSUFBcUIsRUFBcEMsRUFBd0M7TUFDekNILFNBQVMsQ0FBQyxDQUFDLEdBQUYsQ0FBVDtNQUNBVyxVQUFVLENBQUMsWUFBTTtRQUNoQkwsYUFBYSxDQUFDLElBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxFQUZPLENBQVY7SUFHQTs7SUFDQyxJQUFJUCxNQUFNLEtBQUssQ0FBQyxFQUFoQixFQUFvQjtNQUNyQkMsU0FBUyxDQUFDLENBQUMsR0FBRixDQUFUO01BQ0FXLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCTCxhQUFhLENBQUMsSUFBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEVBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FkUSxFQWNOLENBQUNELFVBQUQsQ0FkTSxDQUFUOztFQWdCQyxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07SUFDakMsSUFBSWIsTUFBTSxLQUFLLENBQUMsR0FBaEIsRUFBcUI7TUFDcEJDLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtJQUNBLENBRkQsTUFFTztNQUNOQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7TUFDQVksVUFBVSxDQUFDLFlBQU07UUFDaEJMLGFBQWEsQ0FBQyxLQUFELENBQWI7TUFDQSxDQUZTLEVBRVAsR0FGTyxDQUFWO0lBR0E7RUFDRCxDQVRBOztFQVdELElBQU1PLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtJQUNsQyxJQUFJZCxNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUNwQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO0lBQ0EsQ0FGRCxNQUVPO01BQ05DLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtNQUNBWSxVQUFVLENBQUMsWUFBTTtRQUNoQkwsYUFBYSxDQUFDLEtBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQTtFQUNELENBVEQ7O0VBV0Msb0JBQ0UsOERBQUMsa0RBQUQ7SUFBQSx3QkFDQSw4REFBQywyRUFBRDtNQUNFLE9BQU8sRUFBRU0sa0JBRFg7TUFFRSxFQUFFLEVBQUU7UUFBRUUsTUFBTSxFQUFFO01BQVY7SUFGTjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREEsZUFLQSw4REFBQywyQ0FBRDtNQUFBLHVCQUNFLDhEQUFDLDBDQUFEO1FBQU8sVUFBVSxFQUFFVCxVQUFuQjtRQUErQixLQUFLLEVBQUVOLE1BQXRDO1FBQUEsVUFDR0U7TUFESDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxBLGVBVUEsOERBQUMsNkVBQUQ7TUFDRSxPQUFPLEVBQUVZLG9CQURYO01BRUUsRUFBRSxFQUFFO1FBQUVDLE1BQU0sRUFBRTtNQUFWO0lBRk47TUFBQTtNQUFBO01BQUE7SUFBQSxRQVZBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBaUJEOztHQW5GdUJqQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvc2xpZGVyL2dhbGxlcnlTbGlkZXIvR2FsbGVyeVNsaWRlci50c3g/ODhlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1VwSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dVcCc7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXIsIFBhZ2VzLCBXaW5kb3cgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbnR5cGUgUHJvcHMgPSB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVNsaWRlcih7IGNoaWxkcmVuIH06IFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgtMzQwKVxyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgW3RyYW5zaXRpb24sIHNldFRyYW5zaXRpb25dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChjaGlsZHJlbikge1xyXG4gICAgICBzZXRQYWdlcyhbXHJcbiAgICAgICAgY2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDNdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMl0pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAxXSksXHJcblx0XHRcdFx0Li4uY2hpbGRyZW4sXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzBdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMV0pLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblsyXSlcclxuXHRcdFx0XSlcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0fSwgW2NoaWxkcmVuXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VDb3VudChwYWdlcy5sZW5ndGggPTEpXHJcbiAgICBjb25zb2xlLmxvZyhwYWdlcy5sZW5ndGgpO1xyXG4gICAgXHJcbiAgfSwgW3BhZ2VzXSlcclxuICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly8gaWYgKG9mZnNldCA9PT0gLTg5MCkge1xyXG4gICAgaWYgKG9mZnNldCA9PT0gLShwYWdlQ291bnQgKiAxMTApICsgMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC0zNDApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcbiAgICBpZiAob2Zmc2V0ID09PSAtMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC01NjApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0fSwgW3RyYW5zaXRpb25dKVxyXG5cclxuICBjb25zdCBoZW5kbGVVcEFycm93Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ICE9PSAtMTIwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMTEwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoZW5kbGVEb3duQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdGlmIChvZmZzZXQgIT09IC03ODApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDExMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgLSAxMTApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24oZmFsc2UpXHJcblx0XHRcdH0sIDMwMClcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgIDxLZXlib2FyZEFycm93VXBJY29uXHJcbiAgICAgIG9uQ2xpY2s9e2hlbmRsZVVwQXJyb3dDbGlja31cclxuICAgICAgc3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgIC8+XHJcbiAgICA8V2luZG93PlxyXG4gICAgICA8UGFnZXMgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gY291bnQ9e29mZnNldH0+XHJcbiAgICAgICAge3BhZ2VzfVxyXG4gICAgICA8L1BhZ2VzPlxyXG4gICAgPC9XaW5kb3c+XHJcbiAgICA8S2V5Ym9hcmRBcnJvd0Rvd25JY29uXHJcbiAgICAgIG9uQ2xpY2s9e2hlbmRsZURvd25BcnJvd0NsaWNrfVxyXG4gICAgICBzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgLz5cclxuICA8L01haW5Db250YWluZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIktleWJvYXJkQXJyb3dVcEljb24iLCJNYWluQ29udGFpbmVyIiwiUGFnZXMiLCJXaW5kb3ciLCJHYWxsZXJ5U2xpZGVyIiwiY2hpbGRyZW4iLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJwYWdlcyIsInNldFBhZ2VzIiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwidHJhbnNpdGlvbiIsInNldFRyYW5zaXRpb24iLCJjb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGVuZGxlVXBBcnJvd0NsaWNrIiwiaGVuZGxlRG93bkFycm93Q2xpY2siLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});