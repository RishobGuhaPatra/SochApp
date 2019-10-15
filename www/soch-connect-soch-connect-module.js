(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["soch-connect-soch-connect-module"],{

/***/ "./src/app/soch-connect/soch-connect.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/soch-connect/soch-connect.module.ts ***!
  \*****************************************************/
/*! exports provided: SochConnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SochConnectPageModule", function() { return SochConnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _soch_connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soch-connect.page */ "./src/app/soch-connect/soch-connect.page.ts");







var routes = [
    {
        path: '',
        component: _soch_connect_page__WEBPACK_IMPORTED_MODULE_6__["SochConnectPage"]
    }
];
var SochConnectPageModule = /** @class */ (function () {
    function SochConnectPageModule() {
    }
    SochConnectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_soch_connect_page__WEBPACK_IMPORTED_MODULE_6__["SochConnectPage"]]
        })
    ], SochConnectPageModule);
    return SochConnectPageModule;
}());



/***/ }),

/***/ "./src/app/soch-connect/soch-connect.page.html":
/*!*****************************************************!*\
  !*** ./src/app/soch-connect/soch-connect.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"tabs\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title>Soch Connect</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/soch-connect/soch-connect.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/soch-connect/soch-connect.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2gtY29ubmVjdC9zb2NoLWNvbm5lY3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/soch-connect/soch-connect.page.ts":
/*!***************************************************!*\
  !*** ./src/app/soch-connect/soch-connect.page.ts ***!
  \***************************************************/
/*! exports provided: SochConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SochConnectPage", function() { return SochConnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SochConnectPage = /** @class */ (function () {
    function SochConnectPage() {
    }
    SochConnectPage.prototype.ngOnInit = function () {
    };
    SochConnectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soch-connect',
            template: __webpack_require__(/*! ./soch-connect.page.html */ "./src/app/soch-connect/soch-connect.page.html"),
            styles: [__webpack_require__(/*! ./soch-connect.page.scss */ "./src/app/soch-connect/soch-connect.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SochConnectPage);
    return SochConnectPage;
}());



/***/ })

}]);
//# sourceMappingURL=soch-connect-soch-connect-module.js.map