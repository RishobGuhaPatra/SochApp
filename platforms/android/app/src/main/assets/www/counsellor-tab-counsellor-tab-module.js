(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counsellor-tab-counsellor-tab-module"],{

/***/ "./src/app/counsellor-tab/counsellor-tab.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/counsellor-tab/counsellor-tab.module.ts ***!
  \*********************************************************/
/*! exports provided: CounsellorTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorTabPageModule", function() { return CounsellorTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _counsellor_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counsellor-tab.page */ "./src/app/counsellor-tab/counsellor-tab.page.ts");
/* harmony import */ var _counsellor_tab_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counsellor-tab.router.module */ "./src/app/counsellor-tab/counsellor-tab.router.module.ts");








var routes = [
    {
        path: '',
        component: _counsellor_tab_page__WEBPACK_IMPORTED_MODULE_6__["CounsellorTabPage"]
    }
];
var CounsellorTabPageModule = /** @class */ (function () {
    function CounsellorTabPageModule() {
    }
    CounsellorTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _counsellor_tab_router_module__WEBPACK_IMPORTED_MODULE_7__["CounsellorTabRoutingModule"]
            ],
            declarations: [_counsellor_tab_page__WEBPACK_IMPORTED_MODULE_6__["CounsellorTabPage"]]
        })
    ], CounsellorTabPageModule);
    return CounsellorTabPageModule;
}());



/***/ }),

/***/ "./src/app/counsellor-tab/counsellor-tab.page.html":
/*!*********************************************************!*\
  !*** ./src/app/counsellor-tab/counsellor-tab.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs #tabs>\r\n\t<ion-tab-bar color=\"primary\" slot=\"bottom\">\r\n\t\t<ion-tab-button tab=\"clients\">\r\n\t\t\t<ion-icon name=\"contacts\"></ion-icon>\r\n\t\t\t<ion-label>Clients</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"feed\" >\r\n\t\t\t\t<ion-icon md name=\"globe\"></ion-icon>\r\n\t\t\t\t<ion-label>Net</ion-label>\r\n\t\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"finance\">\r\n\t\t\t<ion-icon name=\"cash\"></ion-icon>\r\n\t\t\t<ion-label>Finance</ion-label>\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/counsellor-tab/counsellor-tab.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/counsellor-tab/counsellor-tab.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW5zZWxsb3ItdGFiL2NvdW5zZWxsb3ItdGFiLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/counsellor-tab/counsellor-tab.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/counsellor-tab/counsellor-tab.page.ts ***!
  \*******************************************************/
/*! exports provided: CounsellorTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorTabPage", function() { return CounsellorTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var CounsellorTabPage = /** @class */ (function () {
    function CounsellorTabPage() {
    }
    CounsellorTabPage.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"])
    ], CounsellorTabPage.prototype, "tabs", void 0);
    CounsellorTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counsellor-tab',
            template: __webpack_require__(/*! ./counsellor-tab.page.html */ "./src/app/counsellor-tab/counsellor-tab.page.html"),
            styles: [__webpack_require__(/*! ./counsellor-tab.page.scss */ "./src/app/counsellor-tab/counsellor-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounsellorTabPage);
    return CounsellorTabPage;
}());



/***/ }),

/***/ "./src/app/counsellor-tab/counsellor-tab.router.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/counsellor-tab/counsellor-tab.router.module.ts ***!
  \****************************************************************/
/*! exports provided: CounsellorTabRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorTabRoutingModule", function() { return CounsellorTabRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counsellor_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counsellor-tab.page */ "./src/app/counsellor-tab/counsellor-tab.page.ts");




var routes = [
    {
        path: '',
        component: _counsellor_tab_page__WEBPACK_IMPORTED_MODULE_3__["CounsellorTabPage"],
        children: [
            { path: '', redirectTo: 'feed', pathMatch: 'full' },
            { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
            { path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
            { path: 'finance', loadChildren: '../finance/finance.module#FinancePageModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
            { path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
            { path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' },
            { path: 'counselor-chat', loadChildren: '../counselor-chat/counselor-chat.module#CounselorChatPageModule' },
            { path: 'clients', loadChildren: '../clients/clients.module#ClientsPageModule' },
        ]
    }
];
var CounsellorTabRoutingModule = /** @class */ (function () {
    function CounsellorTabRoutingModule() {
    }
    CounsellorTabRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CounsellorTabRoutingModule);
    return CounsellorTabRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=counsellor-tab-counsellor-tab-module.js.map