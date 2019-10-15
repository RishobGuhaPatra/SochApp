(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"tabs/uploader\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Settings</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-item>\r\n        <ion-label>Allow Notifications</ion-label>\r\n        <ion-toggle [(ngModel)]=\"notification\" slot=\"end\" (ionChange)=\"notificationFlag()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>Email Updates</ion-label>\r\n        <ion-toggle [(ngModel)]=\"emailUpdate\" slot=\"end\" (ionChange)=\"EmailUpdate()\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>Calendar Updates</ion-label>\r\n        <ion-toggle slot=\"end\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label> Paypal Payments</ion-label>\r\n        <ion-button color=\"dark\" expand=\"block\" slot=\"end\" (click)=\"makePayment()\">Connect</ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>Privacy Policy</ion-label>\r\n        <ion-button expand=\"block\" slot=\"end\" routerLink=\"/privacy-policy\">View</ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>Terms of Agreement</ion-label>\r\n        <ion-button expand=\"block\" slot=\"end\" routerLink=\"/terms-of-conditions\">View</ion-button>\r\n    </ion-item>\r\n    <!-- <ion-item>\r\n    <ion-label>Allow Notifications</ion-label>\r\n    <ion-toggle slot=\"end\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Email Updates</ion-label>\r\n    <ion-toggle slot=\"end\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Calendar Updates</ion-label>\r\n    <ion-toggle slot=\"end\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label> Paypal Payments</ion-label>\r\n    <ion-button color=\"dark\" expand=\"block\" slot=\"end\" (click)=\"makePayment()\">Connect</ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Privacy Policy</ion-label>\r\n    <ion-button expand=\"block\" slot=\"end\">View</ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Terms of Agreement</ion-label>\r\n    <ion-button expand=\"block\" slot=\"end\">View</ion-button>\r\n  </ion-item> -->\r\n    <!-- new <ion-item>\r\n        <ion-label>Share</ion-label>\r\n        <ion-list> -->\r\n            <!-- <ion-chip  color=\"primary\"> -->\r\n            <!-- new <ion-icon name=\"share\" slot=\"end\" (click)=\"share()\" size=\"small\" color=\"warning\"></ion-icon> -->\r\n            <!-- </ion-chip> -->\r\n            <!-- <ion-chip (click)=\"gotoInsta()\" color=\"primary\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-chip>\r\n        <ion-chip (click)=\"gotofb()\" color=\"primary\"><ion-icon name=\"logo-facebook\"></ion-icon> </ion-chip>\r\n        <ion-chip color=\"primary\"><ion-icon name=\"logo-whatsapp\"></ion-icon> </ion-chip>\r\n        <ion-chip color=\"primary\"><ion-icon name=\"logo-twitter\"></ion-icon> </ion-chip> -->\r\n        <!-- new </ion-list>\r\n    </ion-item> -->\r\n\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-label> Share</ion-label>\r\n        <br />\r\n        <br />\r\n        <ion-fab-button (click)=\"share()\">\r\n            <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n        <ion-label> Follow Us!</ion-label>\r\n        <br />\r\n        <br />\r\n        <ion-fab-button>\r\n            <ion-icon name=\"thumbs-up\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"end\">\r\n            <ion-fab-button (click)=\"gotofb()\">\r\n                <ion-icon name=\"logo-facebook\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n        <ion-fab-list side=\"start\">\r\n            <ion-fab-button (click)=\"gotoInsta()\">\r\n                <ion-icon name=\"logo-instagram\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 50%;\n  border: 3px solid green;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var SettingsPage = /** @class */ (function () {
    function SettingsPage() {
        this.PersonData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        // console.log(this.PersonData.setting.notification)
        this.notification = this.PersonData.setting ? this.PersonData.setting.notification : false;
        this.emailUpdate = this.PersonData.setting ? this.PersonData.setting.emailUpdate : false;
        console.log(this.notification);
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.notificationFlag = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({ notification: this.notification });
        console.log(this.notification);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            console.log(LoggedInUserData);
        });
    };
    SettingsPage.prototype.EmailUpdate = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({ emailUpdate: this.emailUpdate });
        console.log(this.notification);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value', function (snap) {
            var LoggedInUserData = JSON.stringify(snap.val());
            localStorage.setItem('LoggedInUserData', LoggedInUserData);
            console.log(LoggedInUserData);
        });
    };
    SettingsPage.prototype.gotoInsta = function () {
        window.open('https://www.instagram.com/sochmobileapp/');
    };
    SettingsPage.prototype.gotofb = function () {
        window.open('https://www.facebook.com/sochmobileapp/');
    };
    SettingsPage.prototype.makePayment = function () {
    };
    SettingsPage.prototype.share = function () {
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
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map