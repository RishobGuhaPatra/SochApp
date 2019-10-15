(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);









var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]],
            providers: [angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.html":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button defaultHref=\"tabs\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Edit Profile</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n\t<app-loading *ngIf=\"busy\"></app-loading>\r\n\t<div *ngIf=\"!busy\">\r\n\r\n\t\t<input type=\"file\" #fileBtn class=\"filebtn\" (change)=\"uploadPic($event)\" />\r\n\r\n\t\t<div>\r\n\t\t\t<ion-avatar>\r\n\t\t\t\t<img *ngIf=\"userDetail?.profilePic\" src=\"https://ucarecdn.com/{{ userDetail.profilePic }}/{{ scaleCrop }}/ \" />\r\n\t\t\t\t<img *ngIf=\"!userDetail?.profilePic\" src=\"../../assets/icon/user.png\">\r\n\t\t\t</ion-avatar>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"profile-info\">\r\n\t\t\t<ion-item-divider position=\"floating\">\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\tSecurity\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-item-divider>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.username\"></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">New Password?</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.newpassword\"></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Enter old password</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.password\"></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item-divider position=\"floating\">\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t\tProfile\r\n\t\t\t\t</ion-label>\r\n\t\t\t</ion-item-divider>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Name</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.name\"></ion-input>\r\n\t\t\t\t<ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Phone Number</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.phonenumber\"></ion-input>\r\n\t\t\t\t<ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Email</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.email\"></ion-input>\r\n\t\t\t\t<ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Interests</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.interest\"></ion-input>\r\n\t\t\t\t<ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-label position=\"floating\">Brief Background</ion-label>\r\n\t\t\t\t<ion-input [(ngModel)]=\"userDetail.background\"></ion-input>\r\n\t\t\t\t<ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-button class=\"button\" fill=\"solid\" expand=\"block\" color=\"primary\" (click)=\"updateDetails()\">Save</ion-button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  height: 70vh;\n  width: auto;\n  margin: auto;\n  display: block; }\n\n.button {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL0Q6XFxpb25pY1Byb2plY3RcXFNvY2gtMS4wL3NyY1xcYXBwXFxlZGl0LXByb2ZpbGVcXGVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWY7RUFDQyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVidG4ge1xyXG5cdC8vIG9wYWNpdHk6IDA7XHJcblx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xyXG5cdC8vIHRvcDogLTEwMGVtO1xyXG5cdC8vIGxlZnQ6IC0xMDBlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuXHRoZWlnaHQ6IDcwdmg7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5idXR0b24ge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);



// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';




var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(http, 
    // private afs: AngularFirestore,
    db, router, alertController, user) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.router = router;
        this.alertController = alertController;
        this.user = user;
        this.busy = false;
        this.userDetail = {};
        // this.mainuser = afs.doc(`users/${user.getUID()}`)
        // ++++++++++++++++++++++
        this.currentUserId = localStorage.getItem('userid');
        this.db.object('User/' + this.currentUserId).valueChanges()
            .subscribe(function (data) {
            if (data) {
                _this.userDetail = data;
                console.log('userData', _this.userDetail);
                if (_this.userDetail.profilePic)
                    _this.profilePic = _this.userDetail.profilePic;
                _this.user.setUser(_this.userDetail);
            }
        });
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe()
    };
    EditProfilePage.prototype.updateProfilePic = function () {
        this.fileBtn.nativeElement.click();
    };
    EditProfilePage.prototype.uploadPic = function (event) {
        var _this = this;
        this.busy = true;
        var files = event.target.files;
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            var uuid = event.json().file;
            _this.profilePic = uuid;
            _this.busy = false;
            _this.db.object('User/' + _this.currentUserId).update({
                profilePic: _this.profilePic
            });
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    };
    EditProfilePage.prototype.presentAlert = function (title, content) {
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
    EditProfilePage.prototype.updateDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.busy = true;
                        // if(!this.userDetail.password) {
                        // 	this.busy = false
                        // 	return this.presentAlert('Error!', 'You have to enter a password')
                        // }
                        // try {
                        // 	await this.user.reAuth(this.userDetail.username, this.userDetail.password)
                        // } catch(error) {
                        // 	this.busy = false
                        // 	console.log(error);
                        // 	return this.presentAlert('Error!', 'Wrong password!')
                        // }
                        // if(this.userDetail.newpassword) {
                        // 	await this.user.updatePassword(this.userDetail.newpassword)
                        // }
                        // if(this.userDetail.username !== this.user.getUsername()) {
                        // 	await this.user.updateEmail(this.userDetail.username)
                        // 	// this.mainuser.update({
                        // 	// 	username: this.username
                        // 	// })
                        // }
                        // name:this.userDetail.name,
                        // phonenumber:this.userDetail.phonenumber,
                        // email:this.userDetail.email,
                        // interest:this.userDetail.interest,
                        // background:this.userDetail.background
                        this.db.object('User/' + this.currentUserId).update(this.userDetail);
                        this.password = "";
                        this.newpassword = "";
                        this.busy = false;
                        return [4 /*yield*/, this.presentAlert('Done!', 'Your profile was updated!')];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/tabs']);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBtn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProfilePage.prototype, "fileBtn", void 0);
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.page.html */ "./src/app/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module.js.map