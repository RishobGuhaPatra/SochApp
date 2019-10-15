(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-form-register-form-module"],{

/***/ "./src/app/register-form/register-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-form/register-form.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPageModule", function() { return RegisterFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-form.page */ "./src/app/register-form/register-form.page.ts");







var routes = [
    {
        path: '',
        component: _register_form_page__WEBPACK_IMPORTED_MODULE_6__["RegisterFormPage"]
    }
];
var RegisterFormPageModule = /** @class */ (function () {
    function RegisterFormPageModule() {
    }
    RegisterFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_form_page__WEBPACK_IMPORTED_MODULE_6__["RegisterFormPage"]]
        })
    ], RegisterFormPageModule);
    return RegisterFormPageModule;
}());



/***/ }),

/***/ "./src/app/register-form/register-form.page.html":
/*!*******************************************************!*\
  !*** ./src/app/register-form/register-form.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-back\" ></ion-icon>\n\t\t<ion-title>Counselor Registration</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item-divider>\n    <ion-label>\n      Login Information\n    </ion-label>\n  </ion-item-divider>\n\n\t<ion-item>\n\t\t<ion-icon padding size=\"small\" name=\"mail\" color=\"dark\"></ion-icon>\n\t\t<ion-input pattern=\"email\" placeholder=\"Email\" autocorrect=\"on\" type=\"text\" color=\"dark\"\n\t\t\tpadding class=\"input\"></ion-input>\n\t</ion-item>\n\n  <ion-item>\n\t\t<ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\n\t\t<ion-input pattern=\"password\" padding placeholder=\"Password\"  type=\"password\" color=\"dark\"\n\t\t\tinputmode=\"password\" class=\"input\">\n\t\t</ion-input>\n\t</ion-item>\n\n\t<ion-item>\n\t\t<ion-icon padding size=\"small\" name=\"lock\" color=\"dark\"></ion-icon>\n\t\t<ion-input pattern=\"password\" padding placeholder=\"Confirm Password\" type=\"password\"\n\t\t\tcolor=\"dark\" inputmode=\"password\" class=\"input\">\n\t\t</ion-input>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      Personal Information\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"First Name/Preferred Name\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"Middle Name\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"Last Name\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Gender</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\"> Female</ion-select-option>\n      <ion-select-option value=\"m\"> Male</ion-select-option>\n      <ion-select-option value=\"m\"> Prefer not to answer</ion-select-option>\n      <ion-select-option value=\"m\"> Other</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>MM DD YY</ion-label>\n    <ion-datetime\n      displayFormat=\"MM DD YY\"\n      placeholder=\"Select Date\"\n    ></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"Occupation\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"Phone Number\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input\n      pattern=\"name\"\n      placeholder=\"Address\"\n      autocorrect=\"on\"\n      type=\"text\"\n      color=\"dark\"\n      padding\n      class=\"input\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-label padding >Education</ion-label>\n  <ion-item>\n    <ion-textarea placeholder=\"Please write any formal training or education you have.\"></ion-textarea>\n  </ion-item>\n\n<ion-label padding >Short Biography</ion-label>\n  <ion-item>\n    <ion-textarea placeholder=\"Please write within 200 words.\"></ion-textarea>\n  </ion-item>\n\n  <ion-item-divider>\n    <ion-label>\n      Preferred Topics of Counseling\n    </ion-label>\n  </ion-item-divider>\n\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding>Depression</ion-label></ion-item\n  >\n  <ion-item lines=\"none\">\n    <ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding>Anxiety</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Relationship issues</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Social isolation</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding>Life transition challenges</ion-label></ion-item\n  >\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\" ></ion-checkbox\n    ><ion-label padding class=\"ion-text-wrap\">\n      Eating disorders / Body image issues\n    </ion-label></ion-item\n  >\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Addiction support </ion-label></ion-item\n  >\n  <ion-item lines=\"none\">\n    <ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Academic or work challenges </ion-label></ion-item\n  >\n  <ion-item lines=\"none\">\n    <ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Marital pressures </ion-label></ion-item\n  >\n  <ion-item lines=\"none\"\n    ><ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> LGBTQ+ </ion-label></ion-item\n  >\n  <ion-item lines=\"none\">\n    <ion-checkbox color=\"primary\"></ion-checkbox\n    ><ion-label padding> Other</ion-label></ion-item\n  >\n  <ion-item-divider>\n    <ion-label>  Agreements </ion-label>\n  </ion-item-divider>\n\n  <ion-item>\n      <ion-label>Privacy Policy</ion-label>\n        <ion-checkbox slot=\"end\"></ion-checkbox>\n        <ion-button expand=\"block\" style=\"padding-left: 5px\" slot=\"end\" routerLink=\"/privacy-policy\">View\n        </ion-button>\n  </ion-item>\n\n  <ion-item>\n      <p>Terms and Condtions</p>\n        <ion-checkbox slot=\"end\"></ion-checkbox>\n        <ion-button expand=\"block\" style=\"padding-left: 5px\" slot=\"end\" routerLink=\"/terms-of-conditions\">View\n        </ion-button>\n  </ion-item>\n  \n  <ion-button\n  class=\"button\"\n  fill=\"solid\"\n  expand=\"full\"\n  shape=\"round\"\n  ize=\"medium\"\n  color=\"primary\"\n  >Sign Up</ion-button\n>\n  </ion-content>"

/***/ }),

/***/ "./src/app/register-form/register-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/register-form/register-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/register-form/register-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/register-form/register-form.page.ts ***!
  \*****************************************************/
/*! exports provided: RegisterFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPage", function() { return RegisterFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterFormPage = /** @class */ (function () {
    function RegisterFormPage() {
    }
    RegisterFormPage.prototype.ngOnInit = function () {
    };
    RegisterFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! ./register-form.page.html */ "./src/app/register-form/register-form.page.html"),
            styles: [__webpack_require__(/*! ./register-form.page.scss */ "./src/app/register-form/register-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterFormPage);
    return RegisterFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-form-register-form-module.js.map