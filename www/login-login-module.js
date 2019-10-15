(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\r\n  <ion-item lines=\"none\">\r\n    <ion-img src=\"assets/login/LOGO3.png\" class=\"logo\"></ion-img>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-img src=\"assets/login/Illustrations.png\" class=\"art\"></ion-img>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon padding-top size=\"small\" name=\"mail\" color=\"dark\"></ion-icon>\r\n    <ion-input pattern=\"email\" placeholder=\"Email\" autocorrect=\"on\" [(ngModel)]=\"username\" type=\"text\" color=\"dark\"\r\n      padding class=\"input\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-icon padding-top size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n    <ion-input pattern=\"password\" padding placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" color=\"dark\"\r\n      inputmode=\"password\" class=\"input\">\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button shape=\"round\" size=\"medium\" class=\"button\" lines=\"none\" color=\"primary\" fill=\"solid\" (click)=\"login()\"\r\n    expand=\"full\">\r\n    <ion-icon padding name=\"mail\"></ion-icon>\r\n    Login with Email\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"register()\" fill=\"clear\" size=\"small\" color=\"dark\" expand=\"full\">\r\n    Sign Up with <ion-icon name=\"mail\"></ion-icon> Email\r\n  </ion-button>\r\n  <ion-button fill=\"clear\" size=\"small\" color=\"dark\" expand=\"full\" (click)=\"resetPassword(username)\">\r\n      Forgot Password?\r\n    </ion-button>\r\n</ion-content>\r\n\r\n  <!-- <p (click)=\"send()\">send</p> -->"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 16vh;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.button {\n  align-items: center;\n  margin-top: 20px; }\n\n.input {\n  align-items: center;\n  margin-top: 10px; }\n\n.art {\n  margin: 0px;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuYnV0dG9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuaW5wdXR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmFydCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);


// import { AngularFireAuth } from "@angular/fire/auth";




// import { FCM } from '@ionic-native/fcm/ngx';



var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, user, router, alertController, 
    // public fcm: FCM,
    db, firebaseProvider, toastController) {
        this.afAuth = afAuth;
        this.user = user;
        this.router = router;
        this.alertController = alertController;
        this.db = db;
        this.firebaseProvider = firebaseProvider;
        this.toastController = toastController;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, username, password;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                _a = this, username = _a.username, password = _a.password;
                this.afAuth.auth.signInWithEmailAndPassword(username, password).then(function (res) {
                    var account_type = ['User', 'counsellor'];
                    // firebase.database().ref('User').once('value',snap=>{
                    //   var data=snap.val()
                    //   for(var key in data){
                    //     if(key==res.user.uid){
                    //       this.loginType=data[key].account_type
                    //       this.LoggedInUserData=data[key]
                    //       localStorage.setItem('LoggedUserData',JSON.stringify(this.LoggedInUserData))
                    //       localStorage.setItem('userid', res.user.uid);
                    //       break;
                    //     }
                    //   }
                    // })
                    for (var key in account_type) {
                        firebase__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(account_type[key]).once('value', function (snap) {
                            var data = snap.val();
                            for (var key in data) {
                                if (key == res.user.uid) {
                                    _this.loginType = data[key].account_type;
                                    _this.LoggedInUserData = data[key];
                                    localStorage.setItem('LoggedInUserData', JSON.stringify(_this.LoggedInUserData));
                                    if (_this.loginType) {
                                        _this.firebaseProvider.getTokenNew().then(function (x) {
                                            firebase__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(_this.loginType).child(res.user.uid).update({ device_token: x, available: true });
                                        });
                                    }
                                    if (_this.LoggedInUserData) {
                                        if (_this.LoggedInUserData.verification == 'cleared' || _this.LoggedInUserData.account_type != 'counsellor') {
                                            localStorage.setItem('userid', res.user.uid);
                                            _this.user.setUser({
                                                username: username,
                                                uid: res.user.uid
                                            });
                                            if (_this.LoggedInUserData.account_type == 'counsellor') {
                                                _this.router.navigate(["/counsellor-tab"]);
                                            }
                                            else if (_this.LoggedInUserData.account_type == 'User') {
                                                _this.router.navigate(["/tabs"]);
                                            }
                                        }
                                        else if (_this.LoggedInUserData.verification == 'pending') {
                                            _this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.');
                                        }
                                    }
                                    break;
                                }
                            }
                        });
                    }
                    // if(this.loginType){
                    //   this.firebaseProvider.getTokenNew().then(x=>{
                    //     console.log(x)
                    //     firebase.database().ref(this.loginType).child(res.user.uid).update({device_token:x})
                    //   })
                    // }
                    // if(this.LoggedInUserData){
                    //   if(this.LoggedInUserData.verification=='cleared' || this.LoggedInUserData.account_type!='counsellor'){
                    //     localStorage.setItem('userid', res.user.uid);
                    //     console.log(this.LoggedInUserData.verification=='cleared')
                    //     console.log(this.LoggedInUserData.account_type)
                    //     console.log(this.LoggedInUserData.account_type=="counsellor")
                    //     this.user.setUser({
                    //       username,
                    //       uid: res.user.uid
                    //     });
                    //     this.router.navigate(["/tabs"]);
                    //   }
                    //   else if(this.LoggedInUserData.verification=='pending'){
                    //     this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.')
                    //   }
                    // }
                }, function (err) {
                    _this.presentToast(err.message);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(["/register"]);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.presentAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.send = function () {
        // fTwyYbLgX1s:APA91bFMkVT20UXotbeqDxdTEgID1S1b2_Cm1pP8HbXg0TN6TK6hGdMUXWDPIK8gS1CAtPXAmQ9HihEraF5Jw88bVzATmlZ1Sw_CGpuYfgoXdnoK_g1nKL7SxgVy8l_lVnlhXRYQSijI
        console.log("send");
        var data = {
            token: "fTwyYbLgX1s:APA91bFMkVT20UXotbeqDxdTEgID1S1b2_Cm1pP8HbXg0TN6TK6hGdMUXWDPIK8gS1CAtPXAmQ9HihEraF5Jw88bVzATmlZ1Sw_CGpuYfgoXdnoK_g1nKL7SxgVy8l_lVnlhXRYQSijI",
            msg: "test"
        };
        console.log(data);
        this.firebaseProvider.sendNotification(data);
    };
    LoginPage.prototype.resetPassword = function (email) {
        var _this = this;
        var auth = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]();
        return auth.sendPasswordResetEmail(email)
            .then(function () { return _this.presentToast('Email Sent'); })
            .catch(function (error) { return _this.presentToast('Please try again'); });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _service_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map