(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counsellor-setting-counsellor-setting-module"],{

/***/ "./src/app/counsellor-setting/counsellor-setting.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/counsellor-setting/counsellor-setting.module.ts ***!
  \*****************************************************************/
/*! exports provided: CounsellorSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorSettingPageModule", function() { return CounsellorSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _counsellor_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counsellor-setting.page */ "./src/app/counsellor-setting/counsellor-setting.page.ts");







var routes = [
    {
        path: '',
        component: _counsellor_setting_page__WEBPACK_IMPORTED_MODULE_6__["CounsellorSettingPage"]
    }
];
var CounsellorSettingPageModule = /** @class */ (function () {
    function CounsellorSettingPageModule() {
    }
    CounsellorSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_counsellor_setting_page__WEBPACK_IMPORTED_MODULE_6__["CounsellorSettingPage"]]
        })
    ], CounsellorSettingPageModule);
    return CounsellorSettingPageModule;
}());



/***/ }),

/***/ "./src/app/counsellor-setting/counsellor-setting.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/counsellor-setting/counsellor-setting.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"tabs/uploader\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <!-- <ion-item>\r\n      <ion-label>Allow Notifications</ion-label>\r\n      <ion-toggle [(ngModel)]=\"notification\" slot=\"end\" (ionChange)=\"notificationFlag()\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label>Do Not Disturb</ion-label>\r\n      <ion-toggle [(ngModel)]=\"DND\" slot=\"end\" (ionChange)=\"DNDFlag()\"></ion-toggle>\r\n  </ion-item> -->\r\n  <!-- <ion-item (click)=\"showPasswordField=(showPasswordField?false:true)\">\r\n        <ion-label>Password</ion-label>\r\n        <ion-button expand=\"block\" style=\"padding-left: 5px\" slot=\"end\" (click)=\"SavePassword()\">Save</ion-button>\r\n    </ion-item>\r\n    <ion-item class=\"ml-16\" *ngIf=\"showPasswordField\">\r\n        <ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n        <ion-input pattern=\"password\" padding placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ml-16\" *ngIf=\"showPasswordField\">\r\n        <ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n        <ion-input pattern=\"password\" padding placeholder=\"Confirm Password\" [(ngModel)]=\"confirmpassword\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item> -->\r\n    <ion-item (click)=\"showPinField=(showPinField?false:true)\">\r\n        <ion-label>Password/Pin</ion-label>\r\n        <ion-button expand=\"block\" class=\"pl-5\" slot=\"end\" *ngIf=\"pin.length==4 && confirmpin.length==4\" (click)=\"SavePin()\">Save</ion-button>\r\n    </ion-item>\r\n    <ion-item class=\"ml-16\" *ngIf=\"showPinField\">\r\n        <ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n        <ion-input pattern=\"password\" padding placeholder=\"Pin\" [(ngModel)]=\"pin\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\">\r\n        </ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ml-16\" *ngIf=\"showPinField\">\r\n        <ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n        <ion-input pattern=\"password\" padding placeholder=\"Confirm Pin\" [(ngModel)]=\"confirmpin\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item>\r\n    <ion-item (click)=\"showDDInfo=(showDDInfo?false:true)\">\r\n        <ion-label>Direct Deposit Information</ion-label>\r\n        <ion-button expand=\"block\" class=\"pl-5\" slot=\"end\" *ngIf=\"DirectDepositInfo.routingNo || DirectDepositInfo.accountNo\" (click)=\"SaveDDInfo()\">Save</ion-button>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showDDInfo\" class=\"ml-16\">\r\n        <ion-input pattern=\"text\" padding placeholder=\"Routing Number\" [(ngModel)]=\"DirectDepositInfo.routingNo\" type=\"text\" color=\"dark\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showDDInfo\" class=\"ml-16\">\r\n        <ion-input pattern=\"text\" padding placeholder=\"Account Number\" [(ngModel)]=\"DirectDepositInfo.accountNo\" type=\"text\" color=\"dark\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item>\r\n    <ion-item (click)=\"showZoomInfo=(showZoomInfo?false:true)\">\r\n        <ion-label>Zoom Details</ion-label>\r\n        <ion-button expand=\"block\" class=\"pl-5\" slot=\"end\" *ngIf=\"ZoomCred.link || ZoomCred.password\" (click)=\"SaveZoomInfo()\">Save</ion-button>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showZoomInfo\" class=\"ml-16\">\r\n        <ion-input pattern=\"text\" padding placeholder=\"Meeting Link\" [(ngModel)]=\"ZoomCred.link\" type=\"text\" color=\"dark\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showZoomInfo\" class=\"ml-16\">\r\n        <ion-input pattern=\"text\" padding placeholder=\"Meeting Password\" [(ngModel)]=\"ZoomCred.password\" type=\"password\" color=\"dark\" class=\"input\">\r\n            </ion-input>\r\n    </ion-item>\r\n  <!-- <ion-item>\r\n      <ion-label>Calendar Updates</ion-label>\r\n      <ion-toggle slot=\"end\"></ion-toggle>\r\n  </ion-item> -->\r\n  <!-- <ion-item>\r\n      <ion-label> Paypal Payments</ion-label>\r\n      <ion-button color=\"dark\" expand=\"block\" slot=\"end\" (click)=\"makePayment()\">Connect</ion-button>\r\n  </ion-item> -->\r\n  <ion-item>\r\n      <ion-label>Privacy Policy</ion-label>\r\n      <ion-button expand=\"block\" slot=\"end\" routerLink=\"/privacy-policy\">View</ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label>Terms of Agreement</ion-label>\r\n      <ion-button expand=\"block\" slot=\"end\" routerLink=\"/terms-of-conditions\">View</ion-button>\r\n  </ion-item>\r\n  <!-- <ion-item>\r\n  <ion-label>Allow Notifications</ion-label>\r\n  <ion-toggle slot=\"end\"></ion-toggle>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>Email Updates</ion-label>\r\n  <ion-toggle slot=\"end\"></ion-toggle>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>Calendar Updates</ion-label>\r\n  <ion-toggle slot=\"end\"></ion-toggle>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label> Paypal Payments</ion-label>\r\n  <ion-button color=\"dark\" expand=\"block\" slot=\"end\" (click)=\"makePayment()\">Connect</ion-button>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>Privacy Policy</ion-label>\r\n  <ion-button expand=\"block\" slot=\"end\">View</ion-button>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>Terms of Agreement</ion-label>\r\n  <ion-button expand=\"block\" slot=\"end\">View</ion-button>\r\n</ion-item> -->\r\n  <!-- new <ion-item>\r\n      <ion-label>Share</ion-label>\r\n      <ion-list> -->\r\n          <!-- <ion-chip  color=\"primary\"> -->\r\n          <!-- new <ion-icon name=\"share\" slot=\"end\" (click)=\"share()\" size=\"small\" color=\"warning\"></ion-icon> -->\r\n          <!-- </ion-chip> -->\r\n          <!-- <ion-chip (click)=\"gotoInsta()\" color=\"primary\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-chip>\r\n      <ion-chip (click)=\"gotofb()\" color=\"primary\"><ion-icon name=\"logo-facebook\"></ion-icon> </ion-chip>\r\n      <ion-chip color=\"primary\"><ion-icon name=\"logo-whatsapp\"></ion-icon> </ion-chip>\r\n      <ion-chip color=\"primary\"><ion-icon name=\"logo-twitter\"></ion-icon> </ion-chip> -->\r\n      <!-- new </ion-list>\r\n  </ion-item> -->\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-label> Share</ion-label>\r\n      <br />\r\n      <br />\r\n      <ion-fab-button (click)=\"share()\">\r\n          <ion-icon name=\"share\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n      <ion-label> Follow Us!</ion-label>\r\n      <br />\r\n      <br />\r\n      <ion-fab-button>\r\n          <ion-icon name=\"thumbs-up\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"end\">\r\n          <ion-fab-button (click)=\"gotofb()\">\r\n              <ion-icon name=\"logo-facebook\"></ion-icon>\r\n          </ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side=\"start\">\r\n          <ion-fab-button (click)=\"gotoInsta()\">\r\n              <ion-icon name=\"logo-instagram\"></ion-icon>\r\n          </ion-fab-button>\r\n      </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/counsellor-setting/counsellor-setting.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/counsellor-setting/counsellor-setting.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ml-16 {\n  margin-left: 16px; }\n\n.pl-5 {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbGxvci1zZXR0aW5nL0Q6XFxpb25pY1Byb2plY3RcXFNvY2gtMS4wL3NyY1xcYXBwXFxjb3Vuc2VsbG9yLXNldHRpbmdcXGNvdW5zZWxsb3Itc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291bnNlbGxvci1zZXR0aW5nL2NvdW5zZWxsb3Itc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWwtMTZ7XHJcbiAgICBtYXJnaW4tbGVmdDoxNnB4O1xyXG59XHJcbi5wbC01e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/counsellor-setting/counsellor-setting.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/counsellor-setting/counsellor-setting.page.ts ***!
  \***************************************************************/
/*! exports provided: CounsellorSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorSettingPage", function() { return CounsellorSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/global.service */ "./src/app/global/global.service.ts");




var CounsellorSettingPage = /** @class */ (function () {
    function CounsellorSettingPage(global) {
        this.global = global;
        this.password = '';
        this.confirmpassword = '';
        this.showPasswordField = false;
        this.pin = '';
        this.confirmpin = '';
        this.showPinField = false;
        this.showDDInfo = false;
        this.showZoomInfo = false;
        this.DirectDepositInfo = { accountNo: '', routingNo: '' };
        this.ZoomCred = { link: '', password: '' };
        this.PersonData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        if (this.PersonData.ZoomCred) {
            this.ZoomCred = this.PersonData.ZoomCred;
        }
        if (this.PersonData.DirectDepositInfo) {
            this.DirectDepositInfo = this.PersonData.DirectDepositInfo;
        }
        // console.log(this.PersonData.setting.notification)
        this.notification = this.PersonData.setting ? this.PersonData.setting.notification : false;
        this.DND = this.PersonData.setting ? this.PersonData.setting.DND : false;
        console.log(this.notification);
    }
    CounsellorSettingPage.prototype.ngOnInit = function () {
    };
    CounsellorSettingPage.prototype.gotoInsta = function () {
        window.open('https://www.instagram.com/sochmobileapp/');
    };
    CounsellorSettingPage.prototype.notificationFlag = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({ notification: this.notification });
        console.log(this.notification);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            console.log(LoggedInUserData);
        });
    };
    CounsellorSettingPage.prototype.DNDFlag = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({ DND: this.DND });
        console.log(this.notification);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            console.log(LoggedInUserData);
        });
    };
    CounsellorSettingPage.prototype.gotofb = function () {
        window.open('https://www.facebook.com/sochmobileapp/');
    };
    CounsellorSettingPage.prototype.makePayment = function () {
    };
    CounsellorSettingPage.prototype.share = function () {
        this.socialSharing.shareWithOptions({
            chooserTitle: 'Soch',
            message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
            url: 'https://play.google.com/store/apps/details?id=com.sochapp&hl=en',
        }).then(function (res) {
            // console.log("res", res);
        }, function (err) {
            console.log("err", err);
        });
    };
    // SavePassword(){
    //   if(this.password != this.confirmpassword){
    //       this.global.presentToast("Passwords don't match")
    //     return console.error("Passwords don't match")
    //   }
    //   else{
    //     firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
    //       Pin4Digit:this.pin,
    //       ConfirmPin4Digit:this.confirmpin
    //     })
    //   }
    // }
    CounsellorSettingPage.prototype.SavePin = function () {
        var _this = this;
        if (this.pin.length != 4 || this.confirmpin.length != 4) {
            this.pin = '';
            this.confirmpin = '';
            this.global.presentToast("Pin should be of 4 digit");
            return console.error("Pin should be of 4 digit");
        }
        else if (this.pin != this.confirmpin) {
            this.pin.length = '';
            this.confirmpin.length = '';
            this.global.presentToast("Pin don't match");
            return console.error("Pin don't match");
        }
        else {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
                Pin4Digit: this.pin,
                ConfirmPin4Digit: this.confirmpin
            });
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
                var LoggedInUserData = JSON.stringify(snap.val());
                localStorage.setItem('LoggedInUserData', LoggedInUserData);
                console.log(LoggedInUserData);
                _this.pin = '';
                _this.confirmpin = '';
            });
        }
    };
    CounsellorSettingPage.prototype.SaveDDInfo = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
            DirectDepositInfo: this.DirectDepositInfo
        });
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            console.log(LoggedInUserData);
            _this.DirectDepositInfo = '';
        });
    };
    CounsellorSettingPage.prototype.SaveZoomInfo = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
            ZoomCred: this.ZoomCred
        });
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            _this.PersonData['ZoomCred'] = _this.ZoomCred;
            console.log(_this.PersonData);
        });
    };
    CounsellorSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counsellor-setting',
            template: __webpack_require__(/*! ./counsellor-setting.page.html */ "./src/app/counsellor-setting/counsellor-setting.page.html"),
            styles: [__webpack_require__(/*! ./counsellor-setting.page.scss */ "./src/app/counsellor-setting/counsellor-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], CounsellorSettingPage);
    return CounsellorSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=counsellor-setting-counsellor-setting-module.js.map