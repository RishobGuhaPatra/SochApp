(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t\t<ion-toolbar>\r\n\t\t\t\t<ion-icon name=\"arrow-back\" (click)=\"back()\"></ion-icon>\r\n\t\t\t<ion-title>Email Sign Up</ion-title>\r\n\t\t</ion-toolbar>\r\n\t</ion-header>\r\n  \r\n  <ion-content padding>\r\n\t\t<ion-item lines=\"none\"> \r\n\t\t\t<ion-img src=\"assets/login/LOGO3.png\" class=\"logo\" ></ion-img>\r\n\t\t</ion-item>\r\n\r\n\t\t<!-- Email Input -->\r\n\t\t<ion-item>\r\n\t\t\t<ion-icon padding size=\"small\" name=\"mail\" color=\"dark\"></ion-icon>\r\n\t\t\t<ion-input pattern=\"email\" placeholder=\"Email\" autocorrect=\"on\" [(ngModel)]=\"username\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<!-- Password Input -->\r\n\t\t<ion-item>\r\n\t\t\t<ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n\t\t\t<ion-input pattern=\"password\" padding placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\">\r\n\t\t\t</ion-input>\r\n\t\t</ion-item>\r\n\r\n\t\t<ion-item>\r\n\t\t\t<ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\r\n\t\t\t<ion-input pattern=\"password\" padding placeholder=\"Confirm Password\" [(ngModel)]=\"cpassword\" type=\"password\" color=\"dark\" inputmode=\"password\" class=\"input\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t<ion-label>Account Type</ion-label>\r\n\t\t\t<ion-select [(ngModel)]=\"loginType\" >\r\n\t\t\t\t<ion-select-option value=\"User\">Client</ion-select-option>\r\n\t\t\t\t<ion-select-option value=\"counsellor\">Counsellor</ion-select-option>\r\n\t\t\t</ion-select>\r\n\t\t</ion-item>\r\n\t\t<div *ngIf=\"loginType=='User'\">\r\n\t\t\t<ion-item-divider>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\tPersonal Information\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.firstName\" required placeholder=\"First Name/Preferred Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.middleName\" placeholder=\"Middle Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.lastName\" required placeholder=\"Last Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>Gender</ion-label>\r\n\t\t\t\t<ion-select placeholder=\"Select One\" required [(ngModel)]=\"clientDetailForm.Gender\" >\r\n\t\t\t\t\t<ion-select-option value=\"f\"> Female</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Male</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Prefer not to answer</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Other</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>MM DD YY</ion-label>\r\n\t\t\t\t<ion-datetime displayFormat=\"MM-DD-YY\" [(ngModel)]=\"clientDetailForm.DOB\" required placeholder=\"Select Date\"></ion-datetime>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.occupation\" required placeholder=\"Occupation\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.phoneNo\" required placeholder=\"Phone Number\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"clientDetailForm.address\" required placeholder=\"Address\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item-divider>\r\n\t\t\t\t<ion-label> Additional Information </ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label padding>How did you hear about SOCH? </ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-select [(ngModel)]=\"clientDetailForm.Reference\" required placeholder=\"Select One\">\r\n\t\t\t\t\t<ion-select-option>Family/Friend</ion-select-option>\r\n\t\t\t\t\t<ion-select-option>Social Media</ion-select-option>\r\n\t\t\t\t\t<ion-select-option> App Store</ion-select-option>\r\n\t\t\t\t\t<ion-select-option> Website</ion-select-option>\r\n\t\t\t\t\t<ion-select-option> Other</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label padding>Reason for joining Soch?</ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item lines=\"none\" *ngFor=\"let key of Form\">\r\n\t\t\t\t<ion-checkbox color=\"primary\" [(ngModel)]=\"key.isChecked\"></ion-checkbox>\r\n\t\t\t\t<ion-label padding>{{key.value}}</ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item-divider>\r\n\t\t\t\t<ion-label> Security Questions </ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>What is your mother's maiden name?</ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input class=\"ion-text-wrap\" [(ngModel)]=\"clientDetailForm.motherMaidenName\" required pattern=\"name\" placeholder=\"Answer\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label class=\"ion-text-wrap\">How many hours of sleep do you usually get?</ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t<ion-select [(ngModel)]=\"clientDetailForm.sleepingHours\" required placeholder=\"Select one\">\r\n\t\t\t\t<ion-select-option>Less than 4 hours</ion-select-option>\r\n\t\t\t\t<ion-select-option> 5 hours</ion-select-option>\r\n\t\t\t\t<ion-select-option> 6 hours </ion-select-option>\r\n\t\t\t\t<ion-select-option> 7 hours</ion-select-option>\r\n\t\t\t\t<ion-select-option> 8 hours</ion-select-option>\r\n\t\t\t\t<ion-select-option> 9 hours</ion-select-option>\r\n\t\t\t\t<ion-select-option> More than 8 hours</ion-select-option>\r\n\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input [(ngModel)]=\"clientDetailForm.Pin4Digit\" required pattern=\"name\" min='0' max='9' placeholder=\" Create 4-digit PIN\" autocorrect=\"on\" type=\"number\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input [(ngModel)]=\"clientDetailForm.ConfirmPin4Digit\" required pattern=\"name\" min='0' max='9' placeholder=\"Confirm 4-digit PIN \" autocorrect=\"on\" type=\"number\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"loginType=='counsellor'\">\r\n\t\t\t<ion-item-divider>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\tPersonal Information\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.firstName\" required placeholder=\"First Name/Preferred Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.middleName\" placeholder=\"Middle Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.lastName\" required placeholder=\"Last Name\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>Gender</ion-label>\r\n\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"counsellorDetailForm.Gender\" required>\r\n\t\t\t\t\t<ion-select-option value=\"f\"> Female</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Male</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Prefer not to answer</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"m\"> Other</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label>MM DD YY</ion-label>\r\n\t\t\t\t<ion-datetime displayFormat=\"MM DD YY\" [(ngModel)]=\"counsellorDetailForm.DOB\" required placeholder=\"Select Date\"></ion-datetime>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.occupation\" required placeholder=\"Occupation\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.phoneNo\" required placeholder=\"Phone Number\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input pattern=\"name\" [(ngModel)]=\"counsellorDetailForm.address\" required placeholder=\"Address\" autocorrect=\"on\" type=\"text\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-label padding >Education</ion-label>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-textarea [(ngModel)]=\"counsellorDetailForm.educationInfo\" required placeholder=\"Please write any formal training or education you have.\"></ion-textarea>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-label padding >Short Biography</ion-label>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-textarea [(ngModel)]=\"counsellorDetailForm.bio\" required placeholder=\"Please write within 200 words.\"></ion-textarea>\r\n\t\t\t</ion-item>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item-divider>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\tPreferred Topics of Counseling\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\t\t\t\r\n\t\t\t<ion-item lines=\"none\" *ngFor=\"let key of Form\">\r\n\t\t\t\t<ion-checkbox color=\"primary\" [(ngModel)]=\"key.isChecked\"></ion-checkbox>\r\n\t\t\t\t<ion-label padding>{{key.value}}</ion-label>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input [(ngModel)]=\"counsellorDetailForm.Pin4Digit\" required pattern=\"name\" min='0' max='9' placeholder=\" Create 4-digit PIN\" autocorrect=\"on\" type=\"number\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-input [(ngModel)]=\"counsellorDetailForm.ConfirmPin4Digit\" required pattern=\"name\" min='0' max='9' placeholder=\"Confirm 4-digit PIN \" autocorrect=\"on\" type=\"number\" color=\"dark\" padding class=\"input\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t</div>\r\n\t\t<ion-item-divider>\r\n\t\t\t<ion-label>  Agreements </ion-label>\r\n\t\t</ion-item-divider>\r\n\t\t\t\r\n\t\t<ion-item *ngFor=\"let key of agreement\">\r\n\t\t\t<ion-label >{{key.value}}</ion-label>\r\n\t\t\t<ion-checkbox class=\"PrivacyCheckbox\" [(ngModel)]=\"key.isChecked\" slot=\"end\" style=\"position: relative\"></ion-checkbox>\r\n\t\t\t<ion-button expand=\"block\" style=\"padding-left: 5px\" slot=\"end\" [routerLink]=\"[key.route]\">View\r\n\t\t\t</ion-button>\r\n\t\t</ion-item>\r\n\t\t\t\r\n\t\t<!-- <ion-item>\r\n\t\t\t<p>Terms and Condtions</p>\r\n\t\t\t<ion-checkbox class=\"TermCheckbox\" slot=\"end\" style=\"position: relative\"></ion-checkbox>\r\n\t\t\t<ion-button expand=\"block\" style=\"padding-left: 5px\" slot=\"end\" [routerLink]=\"['/terms-of-conditions']\">View\r\n\t\t\t</ion-button>\r\n\t\t</ion-item> -->\r\n\t\t\r\n\r\n\t\t<ion-button  class=\"button\" fill=\"solid\" expand=\"full\" shape=\"round\" size=\"medium\" color=\"primary\" (click)=\"register(loginType=='User'?clientDetailForm:counsellorDetailForm)\">Signup</ion-button>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC8vIC5Qcml2YWN5Q2hlY2tib3h7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgICAgYnV0dG9ue1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");


// import { AngularFireAuth } from '@angular/fire/auth'


// import { AngularFirestore } from '@angular/fire/firestore'







var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, 
    // public afstore: AngularFirestore,
    user, alertController, router, geolocation, nativeGeocoder, toastController, firebaseProvider, modalCtrl) {
        this.afAuth = afAuth;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.toastController = toastController;
        this.firebaseProvider = firebaseProvider;
        this.modalCtrl = modalCtrl;
        this.username = "";
        this.password = "";
        this.cpassword = "";
        this.loginType = 'User';
        this.LoggedInUserData = {};
        this.clientDetailForm = {
            firstName: '',
            middleName: '',
            lastName: '',
            name: '',
            DOB: '',
            Gender: '',
            occupation: '',
            phoneNo: '',
            address: '',
            Topic: '',
            Reference: '',
            motherMaidenName: '',
            sleepingHours: '',
            Pin4Digit: '',
            ConfirmPin4Digit: ''
        };
        this.counsellorDetailForm = {
            firstName: '',
            middleName: '',
            lastName: '',
            name: '',
            DOB: '',
            Gender: '',
            occupation: '',
            phoneNo: '',
            address: '',
            educationInfo: '',
            bio: '',
            Topic: '',
            Pin4Digit: '',
            ConfirmPin4Digit: ''
        };
        this.Form = [
            { value: 'Depression', isChecked: false },
            { value: 'Anxiety', isChecked: false },
            { value: 'Relationship issues', isChecked: false },
            { value: 'Social isolation', isChecked: false },
            { value: 'Life transition challenges', isChecked: false },
            { value: 'Eating disorders / Body image issues', isChecked: false },
            { value: 'Addiction support', isChecked: false },
            { value: 'Academic or work challenges', isChecked: false },
            { value: 'Marital pressures', isChecked: false },
            { value: 'LGBTQ+', isChecked: false },
            { value: 'Other', isChecked: false },
        ];
        this.agreement = [
            { value: 'Privacy Policy', isChecked: false, route: '/privacy-policy' },
            { value: 'Terms and Condtions', isChecked: false, route: '/terms-of-conditions' },
        ];
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then(function (result) {
                _this.countryName = result[0].countryCode;
                console.log(JSON.stringify(result[0]));
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    RegisterPage.prototype.presentAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
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
    RegisterPage.prototype.check = function () {
        console.log(this.loginType);
    };
    RegisterPage.prototype.register = function (UserForm) {
        var _this = this;
        // if (this.countryName == 'IN') {
        var _a = this, username = _a.username, password = _a.password, cpassword = _a.cpassword;
        if (!username) {
            this.presentToast("Email can not be empty");
            return console.error("Email can not be empty");
        }
        else if (!password || !cpassword) {
            this.presentToast("Passwords can not be empty");
            return console.error("Passwords can not be empty");
        }
        else if (password !== cpassword) {
            this.presentToast("Passwords don't match");
            return console.error("Passwords don't match");
        }
        if ((UserForm.Pin4Digit).toString().length != 4 || (UserForm.ConfirmPin4Digit).toString().length != 4) {
            this.presentToast("Pin should be of 4 digit only");
            return console.error("Pin should be of 4 digit only");
        }
        else if (UserForm.Pin4Digit != UserForm.ConfirmPin4Digit) {
            this.presentToast("Pin and confirm pin should be same");
            return console.error("Pin and confirm pin should be same");
        }
        if (!this.agreement[0].isChecked || !this.agreement[1].isChecked) {
            this.presentToast("Policy and terms should be agree");
            return console.error("Policy and terms should be agree");
        }
        if (this.countryName != 'IN' && UserForm.account_type == 'counsellor') {
            this.presentToast("You try to register from outside India");
            return console.error("You try to register from outside India");
        }
        this.validateForm(UserForm).then(function (x) {
            if (x) {
                _this.afAuth.auth.createUserWithEmailAndPassword(username, password).then(function (res) {
                    _this.firebaseProvider.getTokenNew().then(function (x) {
                        console.log(x);
                        _this.setUserDetails(res, username, x, UserForm);
                    }, function (error) {
                        _this.setUserDetails(res, username, '', UserForm);
                    });
                    localStorage.setItem('userid', res.user.uid);
                    firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref(_this.loginType).once('value', function (snap) {
                        var data = snap.val();
                        for (var key in data) {
                            if (data[key].uid == res.user.uid && data[key].username == username) {
                                _this.LoggedInUserData = data[key];
                                localStorage.setItem('LoggedInUserData', JSON.stringify(_this.LoggedInUserData));
                            }
                        }
                    });
                    if (_this.loginType == 'User') {
                        _this.user.setUser({
                            username: username,
                            uid: res.user.uid
                        });
                        _this.presentAlert('Success', 'You are registered!');
                        _this.router.navigate(['/tabs']);
                    }
                    else {
                        _this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.');
                        _this.router.navigate(['/login']);
                    }
                }, function (err) {
                    _this.presentToast(err.message);
                });
            }
        });
        // try {
        // 	const res: any = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
        // 	console.log(res);
        // 	// console.log(res.uid);
        // 	console.log(username);
        // 	firebase.database().ref('User').child(res.user.uid).set({
        // 		username: username,
        // 		uid: res.user.uid
        // 	})
        // 	// this.afstore.doc(`users/${res.user.uid}`).set({
        // 	// 	username
        // 	// })
        // 	this.user.setUser({
        // 		username,
        // 		uid: res.user.uid
        // 	})
        // 	localStorage.setItem('userid', res.user.uid);
        // 	this.presentAlert('Success', 'You are registered!')
        // 	this.router.navigate(['/tabs'])
        // } catch (err) {
        // 	let toast: any = this.toastController.create({
        // 		message: err.message,
        // 		duration: 2000
        // 	});
        // 	toast.present();
        // 	// console.dir(error)
        // }
        // }
        // else {
        // 	this.presentToast("You try to register from outside India");
        // }
    };
    RegisterPage.prototype.validateForm = function (Form) {
        var _this = this;
        return new Promise(function (resolve) {
            var array = Object.keys(Form);
            var data = _this.loginType == 'User' ? _this.clientDetailForm : _this.counsellorDetailForm;
            data['Topic'] = _this.Form;
            data['name'] = data.firstName + ' ' + (data.middleName ? (data.middleName + ' ') : '') + data.lastName;
            var valid_flag = 0;
            for (var key in array) {
                if (array[key] != 'middleName' && !data[array[key]]) {
                    valid_flag++;
                }
            }
            if (valid_flag == 0) { //Valid
                resolve(true);
            }
            else { //Invalid
                _this.presentToast("Please fill all the details carefully");
                resolve(false);
            }
        });
    };
    RegisterPage.prototype.setUserDetails = function (res, username, x, details) {
        if (this.loginType == 'User') {
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref(this.loginType).child(res.user.uid).set({
                username: username,
                uid: res.user.uid,
                device_token: x ? x : '',
                account_type: this.loginType,
                verification: 'cleared'
            });
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref(this.loginType).child(res.user.uid).update(details);
        }
        else {
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref(this.loginType).child(res.user.uid).set({
                username: username,
                uid: res.user.uid,
                device_token: x ? x : '',
                account_type: this.loginType,
                verification: 'pending'
            });
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref(this.loginType).child(res.user.uid).update(details);
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('Counsellor_Verification').child(res.user.uid).set({
                username: username,
                uid: res.user.uid,
                device_token: x ? x : '',
                account_type: this.loginType,
                verification: 'pending'
            });
        }
    };
    RegisterPage.prototype.presentToast = function (message) {
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
    RegisterPage.prototype.back = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigate(["/login"])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _service_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map