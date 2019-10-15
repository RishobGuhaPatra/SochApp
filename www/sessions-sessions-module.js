(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sessions-sessions-module"],{

/***/ "./src/app/sessions/sessions.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.module.ts ***!
  \*********************************************/
/*! exports provided: SessionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPageModule", function() { return SessionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sessions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sessions.page */ "./src/app/sessions/sessions.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);








var routes = [
    {
        path: '',
        component: _sessions_page__WEBPACK_IMPORTED_MODULE_6__["SessionsPage"]
    }
];
var SessionsPageModule = /** @class */ (function () {
    function SessionsPageModule() {
    }
    SessionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sessions_page__WEBPACK_IMPORTED_MODULE_6__["SessionsPage"]],
            providers: [angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]]
        })
    ], SessionsPageModule);
    return SessionsPageModule;
}());



/***/ }),

/***/ "./src/app/sessions/sessions.page.html":
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"uploader\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Purchased Sessions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-row *ngFor=\"let a of allSessions\">\r\n    <ion-card *ngFor=\"let s of a.val.selectedPlan.seesionList;let i = index\" (click)=\"gotoChat(a,i)\">\r\n      <ion-list lines=\"none\">\r\n        <h4 *ngIf=\"a.val.counsellorName\" style=\"padding-left: 20px;\">{{a.val.counsellorName}}</h4>\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n          </ion-avatar>\r\n          <h4 *ngIf=\"a.val.selectedPlan.isScheduled\">Scheduled Session:</h4>\r\n          <h4 *ngIf=\"!a.val.selectedPlan.isScheduled\">Random Session:</h4>\r\n          <ion-button (click)=\"$event.stopPropagation()\" slot=\"end\" fill=\"clear\">\r\n            <ion-icon name=\"call\"> </ion-icon>\r\n          </ion-button>\r\n          <ion-button slot=\"end\" fill=\"clear\">\r\n            <ion-icon name=\"text\"> </ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n          <ion-text slot=\"start\" *ngIf=\"a.val.selectedPlan.isScheduled\">Tuesday 9:30PM</ion-text>\r\n          <ion-text slot=\"start\" *ngIf=\"!a.val.selectedPlan.isScheduled\">Available Now</ion-text>\r\n          <ion-text slot=\"end\">Pending</ion-text>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card>\r\n  </ion-row>\r\n  <!-- \r\n  <ion-card>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n        </ion-avatar>\r\n        <h4>Random Session:</h4>\r\n        <ion-button slot=\"end\" fill=\"clear\">\r\n          <ion-icon name=\"call\"> </ion-icon>\r\n        </ion-button>\r\n        <ion-button slot=\"end\" fill=\"clear\">\r\n          <ion-icon name=\"text\"> </ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"ion-text-wrap\">\r\n        <ion-text slot=\"start\">Available Now</ion-text>\r\n        <ion-text slot=\"end\">Pending</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card> -->\r\n  <!-- \r\n  <ion-card>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n        </ion-avatar>\r\n        <h4>Random Session:</h4>\r\n        <ion-button slot=\"end\" fill=\"clear\">\r\n          <ion-icon name=\"call\"> </ion-icon>\r\n        </ion-button>\r\n        <ion-button slot=\"end\" fill=\"clear\">\r\n          <ion-icon name=\"text\"> </ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"ion-text-wrap\">\r\n        <ion-text slot=\"start\">Available 9AM - 5PM</ion-text>\r\n        <ion-text slot=\"end\">Pending</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n        </ion-avatar>\r\n        <h4>Scheduled Session:</h4>\r\n        <ion-button slot=\"end\">\r\n          View\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"ion-text-wrap\">\r\n        <ion-text slot=\"start\">Saturday 9:30PM</ion-text>\r\n        <ion-text slot=\"end\">Complete</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n        </ion-avatar>\r\n        <h4>Random Session:</h4>\r\n        <ion-button slot=\"end\">\r\n          View\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item class=\"ion-text-wrap\">\r\n        <ion-text slot=\"start\">Thursday 6:49PM</ion-text>\r\n        <ion-text slot=\"end\">Complete</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/sessions/sessions.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-text {\n  font-size: 8px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbnMvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHNlc3Npb25zXFxzZXNzaW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsNkVBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb25zL3Nlc3Npb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sessions/sessions.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sessions/sessions.page.ts ***!
  \*******************************************/
/*! exports provided: SessionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPage", function() { return SessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SessionsPage = /** @class */ (function () {
    function SessionsPage(db, router) {
        this.db = db;
        this.router = router;
        this.allSessions = [];
    }
    SessionsPage.prototype.ngOnInit = function () {
        this.currentUserId = localStorage.getItem('userid');
        this.getSesionData();
    };
    SessionsPage.prototype.getSesionData = function () {
        var _this = this;
        this.db.list('sessions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (data) { return ({ key: data.payload.key, val: data.payload.val() }); }); })).subscribe(function (data) {
            console.log(data);
            if (data) {
                for (var index = 0; index < data.length; index++) {
                    if (_this.currentUserId == data[index].val.uid) {
                        _this.allSessions.push(data[index]);
                        console.log(data[index]);
                    }
                }
            }
        });
    };
    SessionsPage.prototype.gotoChat = function (sessionDetail, index) {
        this.router.navigate(['councelor-bubble', index, sessionDetail.key, sessionDetail.val.cid, sessionDetail.val.counsellorName]);
    };
    SessionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessions',
            template: __webpack_require__(/*! ./sessions.page.html */ "./src/app/sessions/sessions.page.html"),
            styles: [__webpack_require__(/*! ./sessions.page.scss */ "./src/app/sessions/sessions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SessionsPage);
    return SessionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sessions-sessions-module.js.map