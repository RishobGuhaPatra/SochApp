(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pin-pin-module"],{

/***/ "./src/app/pin/pin.module.ts":
/*!***********************************!*\
  !*** ./src/app/pin/pin.module.ts ***!
  \***********************************/
/*! exports provided: PINPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINPageModule", function() { return PINPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "./src/app/pin/pin.page.ts");







var routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_6__["PINPage"]
    }
];
var PINPageModule = /** @class */ (function () {
    function PINPageModule() {
    }
    PINPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PINPage"]]
        })
    ], PINPageModule);
    return PINPageModule;
}());



/***/ }),

/***/ "./src/app/pin/pin.page.html":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerCard\" lines=\"none\">\n  <ion-item lines=\"none\">\n    <br>\n  </ion-item>\n    <ion-item lines=\"none\">\n        <ion-img src=\"assets/login/LOGO3.png\" class=\"logo\"></ion-img>\n      </ion-item>\n\n<ion-grid text-center>\n  <ion-row>\n      <ion-col>  \n      <br>\n      <br>\n    <ion-item lines=\"block\">\n          <ion-label class=\"pin-heading\" text-center position=\"floating\">Enter PIN</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pin\" text-center readonly></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\"></ion-item>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('1')\">1</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('2')\">2</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('3')\">3</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('4')\">4</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('5')\">5</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('6')\">6</ion-button>\n    </ion-col>\n  </ion-row>\n   <ion-row>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('7')\">7</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('8')\">8</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('9')\">9</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n        <ion-button shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('0')\">0</ion-button>\n      </ion-col>\n    <ion-col>\n      <ion-button shape=\"round\" size=\"large\" fill=\"clear\" (click)=\"handleInput('clear')\"><ion-icon name=\"backspace\"></ion-icon></ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <br>\n    </ion-col>\n  </ion-row>\n  \n</ion-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pin/pin.page.scss":
/*!***********************************!*\
  !*** ./src/app/pin/pin.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 16vh;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.outerCard {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.pin-heading.label-floating.sc-ion-label-md-h {\n  transform: translate3d(15%, 50%, 0) scale(0.75) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGluL0Q6XFxpb25pY1Byb2plY3RcXFNvY2gtMS4wL3NyY1xcYXBwXFxwaW5cXHBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxXQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLDBEQUF1RCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGluL3Bpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgaGVpZ2h0OiAxNnZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5vdXRlckNhcmR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5waW4taGVhZGluZy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE1JSw1MCUsMCkgc2NhbGUoLjc1KSAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pin/pin.page.ts":
/*!*********************************!*\
  !*** ./src/app/pin/pin.page.ts ***!
  \*********************************/
/*! exports provided: PINPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINPage", function() { return PINPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PINPage = /** @class */ (function () {
    function PINPage(vibration, router) {
        this.vibration = vibration;
        this.router = router;
        this.pin = "";
    }
    PINPage.prototype.ngOnInit = function () {
        this.loggedInUserData = JSON.parse(localStorage.getItem('LoggedInUserData'));
    };
    PINPage.prototype.handleInput = function (pin) {
        if (pin === 'clear') {
            this.pin = '';
            console.log(this.pin);
            return;
        }
        if (this.pin.length === 4) {
            console.log(this.pin.length);
            this.vibration.vibrate(500);
            return;
        }
        else {
            this.pin += pin;
            console.log('pin', this.pin);
            if (this.pin.length == 4) {
                if (this.loggedInUserData && this.loggedInUserData.account_type == 'counsellor' && this.loggedInUserData.Pin4Digit == this.pin) {
                    this.router.navigate(["/counsellor-tab"]);
                }
                else if (this.loggedInUserData && this.loggedInUserData.account_type == 'User' && this.loggedInUserData.Pin4Digit == this.pin) {
                    this.router.navigate(["/tabs"]);
                }
            }
        }
        // if(this.pin.length <=4){
        // }
    };
    PINPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pin',
            template: __webpack_require__(/*! ./pin.page.html */ "./src/app/pin/pin.page.html"),
            styles: [__webpack_require__(/*! ./pin.page.scss */ "./src/app/pin/pin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__["Vibration"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PINPage);
    return PINPage;
}());



/***/ })

}]);
//# sourceMappingURL=pin-pin-module.js.map