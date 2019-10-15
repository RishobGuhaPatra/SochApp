(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"],{

/***/ "./src/app/paypal/paypal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.module.ts ***!
  \*****************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);









var PaypalPageModule = /** @class */ (function () {
    function PaypalPageModule() {
    }
    PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _paypal_page__WEBPACK_IMPORTED_MODULE_7__["PaypalPage"]
                    }
                ])
            ],
            providers: [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_6__["PayPal"], angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]],
            declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_7__["PaypalPage"]]
        })
    ], PaypalPageModule);
    return PaypalPageModule;
}());



/***/ }),

/***/ "./src/app/paypal/paypal.page.html":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n       Payment\r\n    </ion-title>\r\n    <div class=\"closeicon\">\r\n      <ion-icon name=\"close\"(click)=\"back()\"></ion-icon>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-button shape=\"round\" size=\"medium\" class=\"button\" lines=\"none\" color=\"primary\"\r\n    fill=\"solid\" (click)=\"checkpayment()\" expand=\"full\">\r\n    Paypal\r\n  </ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/paypal/paypal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closeicon {\n  text-align: right; }\n  .closeicon ion-icon {\n    font-size: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5cGFsL0Q6XFxpb25pY1Byb2plY3RcXFNvY2gtMS4wL3NyY1xcYXBwXFxwYXlwYWxcXHBheXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jbG9zZWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/paypal/paypal.page.ts":
/*!***************************************!*\
  !*** ./src/app/paypal/paypal.page.ts ***!
  \***************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var PaypalPage = /** @class */ (function () {
    function PaypalPage(payPal, navController, activRoute, db, router) {
        var _this = this;
        this.payPal = payPal;
        this.navController = navController;
        this.activRoute = activRoute;
        this.db = db;
        this.router = router;
        this.selectedPlan = [];
        this.activRoute.params.subscribe(function (params) {
            if (params && params.selectedPlan) {
                _this.counsellorId = params.counsellorId;
                _this.counsellorName = params.counsellorName;
                _this.selectedPlan = JSON.parse(params.selectedPlan);
                _this.totalAmount = params.totalAmount;
                _this.totalAmountInDollar = _this.totalAmount / 69.54;
                _this.totalAmountInDollar = _this.totalAmountInDollar.toString();
            }
        });
    }
    // PayPalEnvironmentSandbox: 'AaVdKOVqUONrDYqtPPMK3yVvBPGVGdBlHyLFz9QQPVz0iSnXCZZ6szCGomfqNMZvOFF1cznLTTsEAHyY'
    // PayPalEnvironmentProduction: 'AWrSVmrBBUsp2tF4EkpzdGw5-D0Hx71jkt4TMYNAkYMiAXbvv98A6-Iev1MzRbVDEs743DUcUXZf3Qkr',
    PaypalPage.prototype.makePayment = function () {
        var _this = this;
        // this.addSesionData();
        this.payPal.init({
            PayPalEnvironmentProduction: 'AQNy5Xwj4YAIE1bIf9TOpdJ3pGAdZ2wlNTZzi-88qHJQt2hv1k9WUrej18QmTpTil-TqjjN5pSsRua9c',
            PayPalEnvironmentSandbox: ''
        }).then(function () {
            _this.payPal.prepareToRender('PayPalEnvironmentProduction', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
                acceptCreditCards: false,
                languageOrLocale: 'en-US',
                merchantName: 'Rishob Guha Patra',
                merchantPrivacyPolicyURL: '',
                merchantUserAgreementURL: ''
            })).then(function () {
                var detail = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPaymentDetails"](_this.totalAmountInDollar, '0.00', '0.00');
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](_this.totalAmountInDollar, 'USD', 'Soch', 'Sale', detail);
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    console.log('Payments Success');
                    _this.addSesionData();
                    console.log(res);
                }, function () {
                    console.log('Error or render dialog closed without being successful');
                });
            }, function () {
                console.log('Error in configuration');
            });
        }, function (err) {
            console.log('Error in initialization, maybe PayPal isn\'t supported or something else' + JSON.stringify(err));
        });
    };
    PaypalPage.prototype.back = function () {
        this.navController.pop();
    };
    PaypalPage.prototype.addSesionData = function () {
        var res = this.db.list('sessions').push({
            cid: this.counsellorId,
            counsellorName: this.counsellorName,
            uid: localStorage.getItem('userid'),
            selectedPlan: this.selectedPlan
        });
        if (res) {
            this.router.navigate(['councelor-bubble', 0, res.key, this.counsellorId, this.counsellorName]);
        }
    };
    PaypalPage.prototype.checkpayment = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('features').once('value', function (snap) {
            var data = snap.val();
            if (data.payment) {
                _this.makePayment();
            }
            else {
                _this.addSesionData();
            }
            // console.log(data)
        });
    };
    PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal',
            template: __webpack_require__(/*! ./paypal.page.html */ "./src/app/paypal/paypal.page.html"),
            styles: [__webpack_require__(/*! ./paypal.page.scss */ "./src/app/paypal/paypal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PaypalPage);
    return PaypalPage;
}());



/***/ })

}]);
//# sourceMappingURL=paypal-paypal-module.js.map