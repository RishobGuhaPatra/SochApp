(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-questions-register-questions-module"],{

/***/ "./src/app/register-questions/register-questions.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/register-questions/register-questions.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterQuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterQuestionsPageModule", function() { return RegisterQuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-questions.page */ "./src/app/register-questions/register-questions.page.ts");







var routes = [
    {
        path: '',
        component: _register_questions_page__WEBPACK_IMPORTED_MODULE_6__["RegisterQuestionsPage"]
    }
];
var RegisterQuestionsPageModule = /** @class */ (function () {
    function RegisterQuestionsPageModule() {
    }
    RegisterQuestionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_questions_page__WEBPACK_IMPORTED_MODULE_6__["RegisterQuestionsPage"]]
        })
    ], RegisterQuestionsPageModule);
    return RegisterQuestionsPageModule;
}());



/***/ }),

/***/ "./src/app/register-questions/register-questions.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/register-questions/register-questions.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <ion-header>\r\n  <ion-toolbar>\r\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-img src=\"/assets/icon/LoGo.png\"></ion-img>\r\n    <ion-icon padding name=\"person-add\" slot=\"end\"  fill=\"outline\" shape=\"round\" size=\"small\"\r\n      color=\"dark\"></ion-icon>\r\n    <ion-progress-bar  type=\"indeterminate\"></ion-progress-bar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-list>\r\n<ion-item-sliding id=\"item100\">\r\n  <ion-item href=\"#\">\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n          <img  src=\"../../assets/icon/user.png\">\r\n      </ion-avatar>\r\n    <ion-label>\r\n      <h2> Rishob Guha Patra</h2>\r\n      <p>A new message from Rishob</p>\r\n      <h3>High Gamma wave Alert | Feel Score: 8 Sad</h3>\r\n    </ion-label>\r\n    <ion-note slot=\"end\">\r\n      10:45 AM\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item-options side=\"start\">\r\n    <ion-item-option>\r\n        <ion-icon slot=\"icon-only\" name=\"journal\"></ion-icon> \r\n        <ion-label>Journal</ion-label>\r\n    </ion-item-option>\r\n  </ion-item-options>\r\n\r\n  <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"primary\">\r\n          <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n          <ion-label>Notes</ion-label>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"secondary\">\r\n          <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"success\">\r\n            <ion-icon slot=\"icon-only\" color=\"light\" name=\"call\"></ion-icon>\r\n          </ion-item-option>\r\n  </ion-item-options>\r\n</ion-item-sliding>\r\n\r\n<ion-item-sliding id=\"item100\">\r\n    <ion-item href=\"#\">\r\n        <ion-avatar class=\"chatImage\" slot=\"start\">\r\n            <img  src=\"../../assets/icon/user.png\">\r\n        </ion-avatar>\r\n      <ion-label>\r\n        <h2> Ankita Guha Patra</h2>\r\n        <p>A new message from Ankita</p>\r\n        <h3>FREE TRIAL</h3>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">\r\n        1:42 PM\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option>\r\n        <ion-icon slot=\"icon-only\" name=\"journal\"></ion-icon>\r\n        <ion-label>Journal</ion-label>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"primary\">\r\n        <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n        <ion-label>Notes</ion-label>\r\n      </ion-item-option>\r\n      <ion-item-option color=\"secondary\">\r\n        <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n      </ion-item-option>\r\n      <ion-item-option color=\"success\">\r\n          <ion-icon slot=\"icon-only\" color=\"light\" name=\"call\"></ion-icon>\r\n        </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding id=\"item100\">\r\n      <ion-item href=\"#\">\r\n          <ion-avatar class=\"chatImage\" slot=\"start\">\r\n              <img  src=\"../../assets/icon/user.png\">\r\n          </ion-avatar>\r\n        <ion-label>\r\n          <h2> Soha Patil</h2>\r\n          <p>A new message from Soha</p>\r\n          <h3>3/6 Sessions | Feel Score: 6 Mad</h3>\r\n        </ion-label>\r\n        <ion-note slot=\"end\">\r\n          8:29 AM\r\n        </ion-note>\r\n      </ion-item>\r\n  \r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option>\r\n            <ion-icon slot=\"icon-only\" name=\"journal\"></ion-icon>            \r\n            <ion-label>Journal</ion-label>\r\n          </ion-item-option>\r\n      </ion-item-options>\r\n  \r\n      <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"primary\">\r\n              <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n              <ion-label>Notes</ion-label>\r\n            </ion-item-option>\r\n            <ion-item-option color=\"secondary\">\r\n              <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n            </ion-item-option>\r\n            <ion-item-option color=\"success\">\r\n                <ion-icon slot=\"icon-only\" color=\"light\" name=\"call\"></ion-icon>\r\n              </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n</ion-list>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register-questions/register-questions.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/register-questions/register-questions.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".term-c {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .term-c .inside {\n    display: flex;\n    align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItcXVlc3Rpb25zL0Q6XFxpb25pY1Byb2plY3RcXFNvY2gtMS4wL3NyY1xcYXBwXFxyZWdpc3Rlci1xdWVzdGlvbnNcXHJlZ2lzdGVyLXF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0VBSHJCO0lBS0ksYUFBYTtJQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItcXVlc3Rpb25zL3JlZ2lzdGVyLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC50ZXJtLWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaW5zaWRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register-questions/register-questions.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/register-questions/register-questions.page.ts ***!
  \***************************************************************/
/*! exports provided: RegisterQuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterQuestionsPage", function() { return RegisterQuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterQuestionsPage = /** @class */ (function () {
    function RegisterQuestionsPage() {
    }
    RegisterQuestionsPage.prototype.ngOnInit = function () {
    };
    RegisterQuestionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-questions',
            template: __webpack_require__(/*! ./register-questions.page.html */ "./src/app/register-questions/register-questions.page.html"),
            styles: [__webpack_require__(/*! ./register-questions.page.scss */ "./src/app/register-questions/register-questions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterQuestionsPage);
    return RegisterQuestionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-questions-register-questions-module.js.map