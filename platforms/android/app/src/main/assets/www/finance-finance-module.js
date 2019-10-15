(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module"],{

/***/ "./src/app/finance/finance.module.ts":
/*!*******************************************!*\
  !*** ./src/app/finance/finance.module.ts ***!
  \*******************************************/
/*! exports provided: FinancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancePageModule", function() { return FinancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _finance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finance.page */ "./src/app/finance/finance.page.ts");







var routes = [
    {
        path: '',
        component: _finance_page__WEBPACK_IMPORTED_MODULE_6__["FinancePage"]
    }
];
var FinancePageModule = /** @class */ (function () {
    function FinancePageModule() {
    }
    FinancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_finance_page__WEBPACK_IMPORTED_MODULE_6__["FinancePage"]]
        })
    ], FinancePageModule);
    return FinancePageModule;
}());



/***/ }),

/***/ "./src/app/finance/finance.page.html":
/*!*******************************************!*\
  !*** ./src/app/finance/finance.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\n    </ion-button>\n    <ion-img src=\"/assets/icon/LoGo.png\"></ion-img>\n    \n    <ion-progress-bar *ngIf=\"ActiveClient.length<1\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let key of ActiveClient\" (click)=\"getSessionDetails(key)\">\n      <ion-avatar class=\"chatImage\" slot=\"start\">\n          <img  src=\"../../assets/icon/user.png\" *ngIf=\"!key.profilePic\">\n          <img  src=\"https://ucarecdn.com/{{ key.profilePic }}/{{ scaleCrop }}/\" *ngIf=\"key.profilePic\">\n      </ion-avatar>\n    <ion-label>\n      {{key.name}}\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/finance/finance.page.scss":
/*!*******************************************!*\
  !*** ./src/app/finance/finance.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFuY2UvZmluYW5jZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/finance/finance.page.ts":
/*!*****************************************!*\
  !*** ./src/app/finance/finance.page.ts ***!
  \*****************************************/
/*! exports provided: FinancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancePage", function() { return FinancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FinancePage = /** @class */ (function () {
    function FinancePage(router) {
        this.router = router;
        this.ActiveClient = [];
        this.sessionList = [];
    }
    FinancePage.prototype.ngOnInit = function () {
        this.LoggedInUserData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        this.getActiveClient().then(function (x) {
            // if(x){
            //   this.getSession()
            // }
        });
        // firebase.database().ref('sessions')
    };
    FinancePage.prototype.getActiveClient = function () {
        var _this = this;
        return new Promise(function (resolve) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('User').once('value', function (snapshot) {
                var data = snapshot.val();
                console.log(data);
                for (var key in data) {
                    if (data[key].defaultcounseller == _this.LoggedInUserData.uid) {
                        _this.ActiveClient.push(data[key]);
                    }
                }
                console.log(_this.ActiveClient);
                resolve(_this.ActiveClient);
            });
        });
    };
    FinancePage.prototype.getSessionDetails = function (val) {
        var navigationExtras = {
            queryParams: {
                val: JSON.stringify({ id: val.uid, cid: val.defaultcounseller })
            }
        };
        this.router.navigate(['/session-details'], navigationExtras);
    };
    FinancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finance',
            template: __webpack_require__(/*! ./finance.page.html */ "./src/app/finance/finance.page.html"),
            styles: [__webpack_require__(/*! ./finance.page.scss */ "./src/app/finance/finance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FinancePage);
    return FinancePage;
}());



/***/ })

}]);
//# sourceMappingURL=finance-finance-module.js.map