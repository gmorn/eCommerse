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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-340),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      pageCount = _useState3[0],\n      setPageCount = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState4[0],\n      setTransition = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (children) {\n      setPageCount(react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children));\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (offset === -890) {\n    if (offset === -890) {\n      setOffset(-340);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === -10) {\n      setOffset(-560);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n  }, [transition]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -120) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    if (offset !== -780) {\n      setOffset(offset - 110);\n    } else {\n      setOffset(offset - 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, this);\n}\n\n_s(GallerySlider, \"l5oCafUFl9QAz7uQYJrZYRkDfBk=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUV6RCxnQkFBNEJQLCtDQUFRLENBQUMsQ0FBQyxHQUFGLENBQXBDO0VBQUEsSUFBT1EsTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsaUJBQTBCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPVSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBa0NYLCtDQUFRLENBQUMsQ0FBRCxDQUExQztFQUFBLElBQU9ZLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0QsaUJBQW9DYiwrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7RUFBQSxJQUFPYyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVDaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2hCLElBQUlRLFFBQUosRUFBYztNQUNWTSxZQUFZLENBQUNoQiwyQ0FBUSxDQUFDbUIsS0FBVCxDQUFlVCxRQUFmLENBQUQsQ0FBWjtNQUNISSxRQUFRLGVBQ1BiLG1EQUFZLENBQUNTLFFBQVEsQ0FBQ1YsMkNBQVEsQ0FBQ21CLEtBQVQsQ0FBZVQsUUFBZixJQUEyQixDQUE1QixDQUFULENBREwsZUFFUFQsbURBQVksQ0FBQ1MsUUFBUSxDQUFDViwyQ0FBUSxDQUFDbUIsS0FBVCxDQUFlVCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FGTCxlQUdQVCxtREFBWSxDQUFDUyxRQUFRLENBQUNWLDJDQUFRLENBQUNtQixLQUFULENBQWVULFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUhMLDBMQUlKQSxRQUpJLGlCQUtQVCxtREFBWSxDQUFDUyxRQUFRLENBQUMsQ0FBRCxDQUFULENBTEwsZUFNUFQsbURBQVksQ0FBQ1MsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQU5MLGVBT1BULG1EQUFZLENBQUNTLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FQTCxHQUFSO01BU0E7SUFDQTtFQUNELENBZFMsRUFjUCxDQUFDQSxRQUFELENBZE8sQ0FBVDtFQWlCRFIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Y7SUFDSSxJQUFJUyxNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUN4QkMsU0FBUyxDQUFDLENBQUMsR0FBRixDQUFUO01BQ0FRLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCRixhQUFhLENBQUMsSUFBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEVBRk8sQ0FBVjtJQUdBOztJQUNDLElBQUlQLE1BQU0sS0FBSyxDQUFDLEVBQWhCLEVBQW9CO01BQ3JCQyxTQUFTLENBQUMsQ0FBQyxHQUFGLENBQVQ7TUFDQVEsVUFBVSxDQUFDLFlBQU07UUFDaEJGLGFBQWEsQ0FBQyxJQUFELENBQWI7TUFDQSxDQUZTLEVBRVAsRUFGTyxDQUFWO0lBR0E7RUFDRCxDQWRRLEVBY04sQ0FBQ0QsVUFBRCxDQWRNLENBQVQ7O0VBZ0JDLElBQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtJQUNqQyxJQUFJVixNQUFNLEtBQUssQ0FBQyxHQUFoQixFQUFxQjtNQUNwQkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO0lBQ0EsQ0FGRCxNQUVPO01BQ05DLFNBQVMsQ0FBQ0QsTUFBTSxHQUFHLEdBQVYsQ0FBVDtNQUNBUyxVQUFVLENBQUMsWUFBTTtRQUNoQkYsYUFBYSxDQUFDLEtBQUQsQ0FBYjtNQUNBLENBRlMsRUFFUCxHQUZPLENBQVY7SUFHQTtFQUNELENBVEE7O0VBV0QsSUFBTUksb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0lBQ2xDLElBQUlYLE1BQU0sS0FBSyxDQUFDLEdBQWhCLEVBQXFCO01BQ3BCQyxTQUFTLENBQUNELE1BQU0sR0FBRyxHQUFWLENBQVQ7SUFDQSxDQUZELE1BRU87TUFDTkMsU0FBUyxDQUFDRCxNQUFNLEdBQUcsR0FBVixDQUFUO01BQ0FTLFVBQVUsQ0FBQyxZQUFNO1FBQ2hCRixhQUFhLENBQUMsS0FBRCxDQUFiO01BQ0EsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtJQUdBO0VBQ0QsQ0FURDs7RUFXQyxvQkFDRSw4REFBQyxrREFBRDtJQUFBLHdCQUNBLDhEQUFDLDJFQUFEO01BQ0UsT0FBTyxFQUFFRyxrQkFEWDtNQUVFLEVBQUUsRUFBRTtRQUFFRSxNQUFNLEVBQUU7TUFBVjtJQUZOO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFEQSxlQUtBLDhEQUFDLDJDQUFEO01BQUEsdUJBQ0UsOERBQUMsMENBQUQ7UUFBTyxVQUFVLEVBQUVOLFVBQW5CO1FBQStCLEtBQUssRUFBRU4sTUFBdEM7UUFBQSxVQUNHRTtNQURIO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEEsZUFVQSw4REFBQyw2RUFBRDtNQUNFLE9BQU8sRUFBRVMsb0JBRFg7TUFFRSxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFO01BQVY7SUFGTjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVkE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFpQkQ7O0dBL0V1QmQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL3NsaWRlci9nYWxsZXJ5U2xpZGVyL0dhbGxlcnlTbGlkZXIudHN4Pzg4ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dVcEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93VXAnO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyLCBQYWdlcywgV2luZG93IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG50eXBlIFByb3BzID0geyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlTbGlkZXIoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xyXG5cclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoLTM0MClcclxuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtwYWdlQ291bnQsIHNldFBhZ2VDb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG5cdGNvbnN0IFt0cmFuc2l0aW9uLCBzZXRUcmFuc2l0aW9uXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgc2V0UGFnZUNvdW50KENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSlcclxuXHRcdFx0c2V0UGFnZXMoW1xyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAzXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDJdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMV0pLFxyXG5cdFx0XHRcdC4uLmNoaWxkcmVuLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblswXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzFdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMl0pXHJcblx0XHRcdF0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdH0sIFtjaGlsZHJlbl0pXHJcblxyXG4gIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBpZiAob2Zmc2V0ID09PSAtODkwKSB7XHJcbiAgICAgIGlmIChvZmZzZXQgPT09IC04OTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC0zNDApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcbiAgICBpZiAob2Zmc2V0ID09PSAtMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC01NjApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0fSwgW3RyYW5zaXRpb25dKVxyXG5cclxuICBjb25zdCBoZW5kbGVVcEFycm93Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ICE9PSAtMTIwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMTEwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoZW5kbGVEb3duQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdGlmIChvZmZzZXQgIT09IC03ODApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDExMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgLSAxMTApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24oZmFsc2UpXHJcblx0XHRcdH0sIDMwMClcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgIDxLZXlib2FyZEFycm93VXBJY29uXHJcbiAgICAgIG9uQ2xpY2s9e2hlbmRsZVVwQXJyb3dDbGlja31cclxuICAgICAgc3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgIC8+XHJcbiAgICA8V2luZG93PlxyXG4gICAgICA8UGFnZXMgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gY291bnQ9e29mZnNldH0+XHJcbiAgICAgICAge3BhZ2VzfVxyXG4gICAgICA8L1BhZ2VzPlxyXG4gICAgPC9XaW5kb3c+XHJcbiAgICA8S2V5Ym9hcmRBcnJvd0Rvd25JY29uXHJcbiAgICAgIG9uQ2xpY2s9e2hlbmRsZURvd25BcnJvd0NsaWNrfVxyXG4gICAgICBzeD17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgLz5cclxuICA8L01haW5Db250YWluZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIktleWJvYXJkQXJyb3dVcEljb24iLCJNYWluQ29udGFpbmVyIiwiUGFnZXMiLCJXaW5kb3ciLCJHYWxsZXJ5U2xpZGVyIiwiY2hpbGRyZW4iLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJwYWdlcyIsInNldFBhZ2VzIiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwidHJhbnNpdGlvbiIsInNldFRyYW5zaXRpb24iLCJjb3VudCIsInNldFRpbWVvdXQiLCJoZW5kbGVVcEFycm93Q2xpY2siLCJoZW5kbGVEb3duQXJyb3dDbGljayIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});