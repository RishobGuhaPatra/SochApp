(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rates-rates-module"],{

/***/ "./src/app/rates/rates.module.ts":
/*!***************************************!*\
  !*** ./src/app/rates/rates.module.ts ***!
  \***************************************/
/*! exports provided: RatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesPageModule", function() { return RatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rates.page */ "./src/app/rates/rates.page.ts");







var routes = [
    {
        path: '',
        component: _rates_page__WEBPACK_IMPORTED_MODULE_6__["RatesPage"]
    }
];
var RatesPageModule = /** @class */ (function () {
    function RatesPageModule() {
    }
    RatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rates_page__WEBPACK_IMPORTED_MODULE_6__["RatesPage"]]
        })
    ], RatesPageModule);
    return RatesPageModule;
}());



/***/ }),

/***/ "./src/app/rates/rates.page.html":
/*!***************************************!*\
  !*** ./src/app/rates/rates.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Session Pricing</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-toolbar>\r\n  <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button mode=\"md\" value=\"Calls\">\r\n      <div class=\"contentCenter\">\r\n        <ion-text slot=end class=\"segment_Text\">Scheduled</ion-text>\r\n      </div>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button mode=\"md\" value=\"Chats\" checked>\r\n      <div class=\"contentCenter\">\r\n        <ion-text slot=end class=\"segment_Text\">Instant</ion-text>\r\n      </div>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content>\r\n    <ion-list *ngIf=\"segmentTab == 'Chats' \" no-padding>\r\n      <img style=\"height: 100%;\r\n      width: 100%;\" src=\"assets/imgs/Inst-Sessions.png\">\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"segmentTab == 'Calls' \" no-padding>\r\n    <img style=\"height: 100%;\r\n    width: 100%;\" src=\"assets/imgs/Sched-Sessions.png\">\r\n    </ion-list>\r\n    <ion-list *ngIf=\"segmentTab == 'group' \" no-padding>\r\n        <img style=\"height: 100%;\r\n        width: 100%;\" src=\"assets/imgs/Top-up.png\">\r\n        </ion-list>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/rates/rates.page.scss":
/*!***************************************!*\
  !*** ./src/app/rates/rates.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(255, 255, 255); }\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nion-segment-button {\n  --color: #000 !important;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 0px solid white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0ZXMvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHJhdGVzXFxyYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYSxFQUFBOztBQUVmO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx3QkFBUTtFQUNSLG1EQUFnQjtFQUNoQiw4QkFBMkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JhdGVzL3JhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAuY29udGVudENlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/rates/rates.page.ts":
/*!*************************************!*\
  !*** ./src/app/rates/rates.page.ts ***!
  \*************************************/
/*! exports provided: RatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesPage", function() { return RatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatesPage = /** @class */ (function () {
    function RatesPage() {
    }
    RatesPage.prototype.ngOnInit = function () {
    };
    RatesPage.prototype.segmentChanged = function (event) {
        this.segmentTab = event.detail.value;
        // console.log(this.segmentTab);
    };
    RatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rates',
            template: __webpack_require__(/*! ./rates.page.html */ "./src/app/rates/rates.page.html"),
            styles: [__webpack_require__(/*! ./rates.page.scss */ "./src/app/rates/rates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatesPage);
    return RatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=rates-rates-module.js.map