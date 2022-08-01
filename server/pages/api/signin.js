"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsSUFBSUEsd0RBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/signin.ts":
/*!*****************************!*\
  !*** ./pages/api/signin.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n    where: {\n      email\n    }\n  });\n\n  if (user && bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compareSync(password, user.password)) {\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      id: user.id,\n      email: user.email,\n      time: Date.now()\n    }, 'hello', {\n      expiresIn: '8h'\n    });\n    res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize('TRAX_ACCESS_TOKEN', token, {\n      httpOnly: true,\n      maxAge: 8 * 60 * 60,\n      path: '/',\n      sameSite: 'lax',\n      secure: false\n    }));\n    res.json(user);\n  } else {\n    res.status(401);\n    res.json({\n      error: 'Email or Password is Wrong'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQSxpRUFBZSxPQUFPSSxHQUFQLEVBQTJCQyxHQUEzQixLQUFtRDtFQUM5RCxNQUFNO0lBQUVDLEtBQUY7SUFBUUM7RUFBUixJQUFxQkgsR0FBRyxDQUFDSSxJQUEvQjtFQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNTixtRUFBQSxDQUF1QjtJQUN0Q1EsS0FBSyxFQUFFO01BQ0hMO0lBREc7RUFEK0IsQ0FBdkIsQ0FBbkI7O0VBTUEsSUFBR0csSUFBSSxJQUFJVCx5REFBQSxDQUFtQk8sUUFBbkIsRUFBNkJFLElBQUksQ0FBQ0YsUUFBbEMsQ0FBWCxFQUF3RDtJQUNwRCxNQUFNTSxLQUFLLEdBQUdaLHdEQUFBLENBQVM7TUFDbkJjLEVBQUUsRUFBRU4sSUFBSSxDQUFDTSxFQURVO01BRW5CVCxLQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FGTztNQUduQlUsSUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7SUFIYSxDQUFULEVBS2QsT0FMYyxFQU1kO01BQ0lDLFNBQVMsRUFBRTtJQURmLENBTmMsQ0FBZDtJQVdGZCxHQUFHLENBQUNlLFNBQUosQ0FDRSxZQURGLEVBRUVsQix1REFBQSxDQUFpQixtQkFBakIsRUFBc0NXLEtBQXRDLEVBQTZDO01BQ3pDUyxRQUFRLEVBQUUsSUFEK0I7TUFFekNDLE1BQU0sRUFBRSxJQUFJLEVBQUosR0FBUyxFQUZ3QjtNQUd6Q0MsSUFBSSxFQUFFLEdBSG1DO01BSXpDQyxRQUFRLEVBQUUsS0FKK0I7TUFLekNDLE1BQU07SUFMbUMsQ0FBN0MsQ0FGRjtJQVdBckIsR0FBRyxDQUFDc0IsSUFBSixDQUFTbEIsSUFBVDtFQUNELENBeEJELE1BeUJLO0lBQ0RKLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBVyxHQUFYO0lBQ0F2QixHQUFHLENBQUNzQixJQUFKLENBQVM7TUFBRUUsS0FBSyxFQUFFO0lBQVQsQ0FBVDtFQUNIO0FBQ0osQ0F0Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3BhZ2VzL2FwaS9zaWduaW4udHM/MmE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwscGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xyXG4gICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaGVsbG8nLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXhwaXJlc0luOiAnOGgnLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG5cclxuICAgICAgcmVzLnNldEhlYWRlcihcclxuICAgICAgICAnU2V0LUNvb2tpZScsIFxyXG4gICAgICAgIGNvb2tpZS5zZXJpYWxpemUoJ1RSQVhfQUNDRVNTX1RPS0VOJywgdG9rZW4sIHtcclxuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIG1heEFnZTogOCAqIDYwICogNjAsIFxyXG4gICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuXHJcbiAgICAgIHJlcy5qc29uKHVzZXIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSlcclxuICAgICAgICByZXMuanNvbih7IGVycm9yOiAnRW1haWwgb3IgUGFzc3dvcmQgaXMgV3JvbmcnfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJiY3J5cHQiLCJqd3QiLCJjb29raWUiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjb21wYXJlU3luYyIsInRva2VuIiwic2lnbiIsImlkIiwidGltZSIsIkRhdGUiLCJub3ciLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsIm1heEFnZSIsInBhdGgiLCJzYW1lU2l0ZSIsInNlY3VyZSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.ts"));
module.exports = __webpack_exports__;

})();