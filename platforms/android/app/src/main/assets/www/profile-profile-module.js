(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
            providers: [angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\" *ngIf=\"Journel\">\r\n          <ion-back-button defaultHref=\"counsellor-tab/clients\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\" *ngIf=\"!Journel\">\r\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\r\n    </ion-button>\r\n    \r\n      <ion-title>{{ username }}</ion-title>\r\n    \r\n   \r\n\r\n    <ion-icon *ngIf=\"!Journel\" padding name=\"create\" slot=\"end\" fill=\"outline\" shape=\"round\" color=\"dark\" (click)=\"newEntry =! newEntry\">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <!-- <app-loading *ngIf=\"!posts\"></app-loading> -->\r\n\r\n  <div id=\"profile-info\" *ngIf=\"username\">\r\n    <ion-grid *ngIf=\"!Journel\">\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"user-image\">\r\n          <img *ngIf=\"userDetail?.profilePic\" class=\"profile-pic\"\r\n            src=\"https://ucarecdn.com/{{ userDetail.profilePic }}/{{ scaleCrop }}/ \" />\r\n          <img *ngIf=\"!userDetail?.profilePic\" class=\"profile-pic\" src=\"../../assets/icon/user.png\">\r\n          <!-- <ion-img padding src=\"https://ucarecdn.com/{{\r\n              profilePic\r\n            }}/-/scale_crop/200x200/center/\" class=\"profile-pic\"></ion-img> -->\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"username\">\r\n          <p>{{ username }}</p>\r\n          <ion-button shape=\"round\" color=\"warning\" size=\"small\" routerLink=\"/tabs/edit-profile\">\r\n            <ion-icon name=\"cog\" class=\"space\" color=\"dark\"></ion-icon>\r\n            profile\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n  <!-- // \"angularfire2\": \"^4.0.0-rc.0\", -->\r\n  <div *ngIf=\"newEntry\">\r\n    <ion-card>\r\n      <ion-card-title slot=\"start\">\r\n        <ion-textarea padding placeholder=\"Journal No.\" [(ngModel)]=\"title\"></ion-textarea>\r\n      </ion-card-title>\r\n      <ion-textarea padding placeholder=\"What are you Soching?\" class=\"textbox\" [(ngModel)]=\"desc\"></ion-textarea>\r\n      <ion-input class=\"textbox\" style=\"    padding: 0 30px !important;\" placeholder=\"Enter Post url\"\r\n        [(ngModel)]=\"posturl\"></ion-input>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" (click)=\"uploadFile()\" class=\"icons\" name=\"camera\"></ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton />\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"!ispause\" (click)=\"startRecord()\" class=\"icons\" name=\"microphone\">\r\n            </ion-icon>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"ispause\" (click)=\"stopRecord()\" class=\"icons\" name=\"pause\">\r\n            </ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton />\r\n          </ion-col>\r\n          <!-- <ion-col>\r\n            <ion-icon padding color=\"primary\" (click)=\"uploadFile()\" class=\"icons\" name=\"videocam\"></ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton />\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" (click)=\"uploadFile()\" class=\"icons\" name=\"document\"></ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton />\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <div *ngIf=\"imageURL\">\r\n            <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/-/preview/{{\r\n                activeEffect\r\n              }}\"></ion-img>\r\n\r\n            <ion-row>\r\n              <ion-col [class.active]=\"activeEffect == effects.effect1\" (click)=\"setSelected('effect1')\">\r\n                <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/{{ scaleCrop }}/\"></ion-img>\r\n              </ion-col>\r\n              <ion-col [class.active]=\"activeEffect == effects.effect2\" (click)=\"setSelected('effect2')\">\r\n                <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/{{ scaleCrop }}/{{\r\n                    effects.effect2\r\n                  }}\"></ion-img>\r\n              </ion-col>\r\n              <ion-col [class.active]=\"activeEffect == effects.effect3\" (click)=\"setSelected('effect3')\">\r\n                <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/{{ scaleCrop }}/{{\r\n                    effects.effect3\r\n                  }}\"></ion-img>\r\n              </ion-col>\r\n              <ion-col [class.active]=\"activeEffect == effects.effect4\" (click)=\"setSelected('effect4')\">\r\n                <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/{{ scaleCrop }}/{{\r\n                    effects.effect4\r\n                  }}\"></ion-img>\r\n              </ion-col>\r\n              <ion-col [class.active]=\"activeEffect == effects.effect5\" (click)=\"setSelected('effect5')\">\r\n                <ion-img src=\"https://ucarecdn.com/{{ imageURL }}/{{ scaleCrop }}/{{\r\n                    effects.effect5\r\n                  }}\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n\r\n          <div *ngIf=\"audiourltest\">\r\n            <audio controls>\r\n              <source src=\"{{audiourltest}}\">\r\n              Your browser does not support the HTML5 Audio element.\r\n            </audio>\r\n          </div>\r\n\r\n          <ion-row *ngIf=\"noFace\">\r\n            <ion-col size=\"12\">\r\n              <p class=\"no-face\">Images with faces perform 150 times better!</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\">\r\n            <ion-button shape=\"round\" size=\"default\" color=\"primary\" slot=\"start\" (click)=\"createPost()\">POST\r\n              {{audiourl}}\r\n            </ion-button>\r\n            <ion-fab-button translucent=\"true\" color=\"danger\" slot=\"end\" class=\"icons\">\r\n              <ion-icon color=\"light\" name=\"close\" mode=\"ios\" (click)=\"newEntry = false\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Post Status</ion-label>\r\n            <!-- <ion-radio slot=\"start\" [(ngModel)]=\"poststatus\" (ngModelchange)=\"poststatuschange()\"></ion-radio> -->\r\n            <p>Public</p>\r\n            <ion-toggle [(ngModel)]=\"poststatus\"></ion-toggle>\r\n            <p>Private</p>\r\n          </ion-item>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"posts\" style=\"padding-top: 35px;\">\r\n    <!-- <div class=\"image\" *ngFor=\"let post of posts\"> -->\r\n    <ion-card *ngFor=\"let post of posts.slice().reverse()\">\r\n      <div *ngIf=\"post.image\">\r\n        <ion-img src=\"https://ucarecdn.com/{{ post.image }}/{{ scaleCrop }}/\"></ion-img>\r\n      </div>\r\n      <div *ngIf=\"post.audiourl\">\r\n        <audio controls>\r\n          <source [src]=\"post.audiourl\">\r\n          Your browser does not support the HTML5 Audio element.\r\n        </audio>\r\n      </div>\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar><img *ngIf=\"post.profilephoto\"\r\n              src=\"https://ucarecdn.com/{{ post.profilephoto }}/{{ scaleCrop }}/ \" />\r\n            <img *ngIf=\"!post.profilephoto\" src=\"../../assets/icon/user.png\">\r\n          </ion-avatar>\r\n          <ion-card-subtitle padding color=\"dark\"> Me </ion-card-subtitle>\r\n          <ion-icon name=\"share\" slot=\"end\" size=\"small\" (click)=\"share(post)\" color=\"warning\"></ion-icon>\r\n        </ion-item>\r\n        <ion-card-title padding>\r\n          {{ post.title }}\r\n        </ion-card-title>\r\n        <p padding>{{ post.desc }}</p>\r\n        <ion-button expand=\"block\" (click)=\"showComments = true\" *ngIf=\"Journel\">\r\n        <ion-label color=\"light\"> Notes </ion-label>\r\n          <ion-icon name=\"book\" slot=\"end\" color=\"light\" ></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-card-content *ngIf=\"showComments\" lines=\"none\">\r\n            <ion-label [hidden]=\"!post.notes && post.notes.length < 0\" *ngFor=\"let comment of post.notes\">{{comment.msg}}<br></ion-label>\r\n          <ion-item lines=\"none\">\r\n              <ion-textarea auto-grow=\"true\" auto-focus=\"true\" placeholder=\"Write notes here\" [(ngModel)]=\"newComment\"></ion-textarea>\r\n            <ion-button slot=\"end\" (click)=\"addcomment(post)\">\r\n              <ion-icon name=\"save\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <!-- <ion-card>\r\n        <ion-card-subtitle class=\"title\">\r\n          <p>Journal: {{ post.title }}</p>\r\n        </ion-card-subtitle>\r\n        <img (click)=\"goTo(post)\" class=\"main-image\"\r\n          src=\"https://ucarecdn.com/{{ post }}/-/scale_crop/200x200/center/\" />\r\n      </ion-card> -->\r\n    <!-- </div> -->\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#images {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px; }\n\n.icons {\n  height: 30px;\n  width: 30px; }\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px; }\n\n.username {\n  font-size: 12pt;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-weight: 300; }\n\n.user-image {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  border-radius: 30%; }\n\n.main-image {\n  width: 135px;\n  height: 135px; }\n\n.profile-pic {\n  display: inline;\n  margin: 0 auto;\n  width: auto;\n  border-radius: 50%; }\n\n.camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black;\n  display: none; }\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.center {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n.active {\n  border: 2px solid black; }\n\n.no-face {\n  font-weight: bold;\n  text-align: center;\n  font-style: italic; }\n\n.title {\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcaW9uaWNQcm9qZWN0XFxTb2NoLTEuMC9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUViO0VBQ0MsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHWjtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxlQUFlO0VBQ2YsNkVBQTZFO0VBQzdFLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFlBQVk7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNDLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBS2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUVmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdkO0VBQ0MsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsdUJBQXVCLEVBQUE7O0FBR3hCO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2VzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0d2lkdGg6IDYwNnB4O1xyXG59XHJcbi5pY29ucyB7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG5cdG1hcmdpbi1sZWZ0OiAxcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuLnVzZXJuYW1lIHtcclxuXHRmb250LXNpemU6IDEycHQ7XHJcblx0Zm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udXNlci1pbWFnZSB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlIHtcclxuXHR3aWR0aDogMTM1cHg7XHJcblx0aGVpZ2h0OiAxMzVweDtcclxuXHQvLyBtYXJnaW46IDEgYXV0bztcclxuXHQvLyBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1waWMge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvLyBoZWlnaHQ6IDE1MCU7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2FtZXJhIHtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZWJ0biB7XHJcblx0b3BhY2l0eTogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTAwZW07XHJcblx0bGVmdDogLTEwMGVtO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5vLWZhY2Uge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnRpdGxlIHtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");



// import {
//   AngularFirestore,
//   AngularFirestoreDocument
// } from "@angular/fire/firestore";

// import { firestore } from "firebase/app";




// import { AngularFireStorage } from 'angularfire2/storage';




var ProfilePage = /** @class */ (function () {
    function ProfilePage(http, 
    // private afs: AngularFirestore,
    user, route, router, alertController, db, socialSharing, media, file, nativeAudio) {
        // this.mainuser = afs.doc(`users/${user.getUID()}`);
        // this.sub = this.mainuser.valueChanges().subscribe(event => {
        //   this.posts = event.posts;
        //   this.username = event.username;
        //   this.profilePic = event.profilePic;
        // });
        this.http = http;
        this.user = user;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.db = db;
        this.socialSharing = socialSharing;
        this.media = media;
        this.file = file;
        this.nativeAudio = nativeAudio;
        this.newEntry = false;
        this.noFace = false;
        this.scaleCrop = "-/scale_crop/200x200";
        this.getPost = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post');
        // postReference: AngularFirestoreDocument;
        this.heartType = "heart-empty";
        this.poststatus = false;
        this.effects = {
            effect1: "",
            effect2: "-/exposure/50/-/saturation/50/-/warmth/-30/",
            effect3: "-/filter/vevera/150/",
            effect4: "-/filter/carris/150/",
            effect5: "-/filter/misiara/150/"
        };
        this.activeEffect = this.effects.effect1;
        this.busy = false;
        this.ispause = false;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                console.log(params.id);
                _this.currentUserId = params.id;
                _this.Journel = true;
            }
            else {
                _this.currentUserId = localStorage.getItem('userid');
                console.log(_this.currentUserId);
            }
            _this.getPost.on('value', function (resp) {
                _this.getPostList(resp);
            });
        });
        this.db.object('User/' + this.currentUserId).valueChanges()
            .subscribe(function (data) {
            if (data) {
                _this.userDetail = data;
                console.log(_this.userDetail);
                _this.username = _this.userDetail.username;
                if (_this.profilePic)
                    _this.profilePic = _this.userDetail.profilePic;
            }
        });
    };
    ProfilePage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProfilePage.prototype.startRecord = function () {
        this.ispause = true;
        // this.crecordingstatus = "Stop Recording"
        // this.intercon = setInterval(function () {
        //   this.timer += 1;
        //   if (this.timer > 59) {
        //     clearInterval(this.intercon);
        //     this.stopRecord();
        //     this.timer = 0;
        //     console.log("TEst...")
        //   }
        // }.bind(this), 1000)
        this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getSeconds() + '.mp3';
        this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
        // console.log("filePath", this.filePath);
        this.audio = this.media.create(this.filePath);
        // console.log("audio", this.filePath);
        this.audio.startRecord();
    };
    ProfilePage.prototype.stopRecord = function () {
        var _this = this;
        this.ispause = false;
        this.audio.stopRecord();
        // console.log("filepath", this.filePath);
        // console.log("filenameS", this.fileName);
        this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then(function (file) {
            // console.log("file", file);
            // console.log(firebase.storage.StringFormat.DATA_URL);
            var voiceRef = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref('audio').child(_this.fileName).putString(file, firebase__WEBPACK_IMPORTED_MODULE_6__["storage"].StringFormat.DATA_URL).then(function (res) {
                // console.log(res);
                firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref('audio').child(_this.fileName).getDownloadURL().then(function (url) {
                    // console.log("log1: " + url);
                    _this.audiourltest = url;
                    // console.log(this.audiourltest);
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProfilePage.prototype.goTo = function (postID) {
        this.router.navigate(["/tabs/post/" + postID.split("/")[0]]);
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.getPostList = function (snapshot) {
        var _this = this;
        this.posts = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            // console.log(item);
            if (item.uid == _this.currentUserId) {
                console.log(item.uid);
                _this.posts.push(item);
                var _loop_1 = function (index) {
                    if (_this.posts[index].comment) {
                        var getcomment = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(_this.posts[index].key).child('comment');
                        getcomment.on('value', function (resp) {
                            _this.getpostcomment(_this.posts[index], resp);
                        });
                    }
                    if (_this.posts[index].notes) {
                        var getnotes = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(_this.posts[index].key).child('notes');
                        getnotes.on('value', function (resp) {
                            _this.getpostnotes(_this.posts[index], resp);
                        });
                    }
                    var getlike = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(_this.posts[index].key).child('like');
                    var getunlike = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(_this.posts[index].key).child('unlike');
                    getlike.on('value', function (resp) {
                        _this.getpostlike(_this.posts[index], resp);
                    });
                    getunlike.on('value', function (resp) {
                        _this.getpostunlike(_this.posts[index], resp);
                    });
                    if (_this.posts[index].uid) {
                        _this.db.object('User/' + _this.posts[index].uid).valueChanges().subscribe(function (data) {
                            _this.posts[index].profilephoto = data.profilePic;
                        });
                    }
                };
                // console.log(this.posts);
                for (var index = 0; index < _this.posts.length; index++) {
                    _loop_1(index);
                }
            }
            // console.log("roomlist",this.roomList);
        });
    };
    ProfilePage.prototype.getpostcomment = function (post, snapshot) {
        var tempcomment = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            tempcomment.push(item);
            // console.log(tempcomment);
        });
        post.comment = tempcomment;
        // console.log(this.posts);
    };
    ProfilePage.prototype.getpostnotes = function (post, snapshot) {
        var tempnotes = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            tempnotes.push(item);
            // console.log(tempcomment);
        });
        post.notes = tempnotes;
        // console.log(this.posts);
    };
    ProfilePage.prototype.getpostlike = function (post, snapshot) {
        // console.log("post", post);
        var tempcomment = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            tempcomment.push(item);
            // console.log("like", tempcomment);
        });
        post.like = tempcomment;
        if (post.like && post.like.length > 0) {
            for (var index = 0; index < post.like.length; index++) {
                if (this.currentUserId == post.like[index].uid) {
                    post.islike = true;
                }
                else {
                    // console.log("else");
                    post.islike = false;
                }
            }
        }
        if (tempcomment.length < 0) {
            post.islike = false;
        }
        // console.log(this.posts);
    };
    ProfilePage.prototype.getpostunlike = function (post, snapshot) {
        var tempcomment = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            tempcomment.push(item);
            // console.log(tempcomment);
        });
        post.unlike = tempcomment;
        if (post.unlike && post.unlike.length > 0) {
            for (var index = 0; index < post.unlike.length; index++) {
                if (this.currentUserId == post.unlike[index].uid) {
                    post.isunlike = true;
                }
                else {
                    // console.log("else");
                    post.isunlike = false;
                }
            }
        }
        if (tempcomment.length < 0) {
            post.isunlike = false;
        }
        // console.log(this.posts);
    };
    ProfilePage.prototype.addcomment = function (post) {
        var payload = {
            msg: this.newComment,
            uid: localStorage.getItem('userid')
        };
        // console.log(payload);
        // console.log(post);
        var resdata = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(post.key).child('notes').push(payload);
        // console.log(resdata);
        this.newComment = '';
    };
    ProfilePage.prototype.like = function (post, status) {
        if (status == 'like') {
            var resdata = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(post.key).child('like').push({
                uid: this.currentUserId
            });
            // console.log(resdata);
        }
        else {
            for (var index = 0; index < post.like.length; index++) {
                if (this.currentUserId == post.like[index].uid) {
                    // console.log(post.like[index].key);
                    var resdata = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(post.key).child('like').child(post.like[index].key).remove();
                    // console.log(resdata);
                }
            }
        }
    };
    ProfilePage.prototype.unlike = function (post, status) {
        if (status == 'like') {
            var resdata = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(post.key).child('unlike').push({
                uid: this.currentUserId
            });
            // console.log(resdata);
        }
        else {
            for (var index = 0; index < post.unlike.length; index++) {
                if (this.currentUserId == post.unlike[index].uid) {
                    // console.log(post.unlike[index].key);
                    // console.log(post.key);
                    var resdata = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('post').child(post.key).child('unlike').child(post.unlike[index].key).remove();
                    // console.log(resdata);
                }
            }
        }
    };
    ProfilePage.prototype.createPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, res, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.busy = true;
                        payload = {
                            image: this.imageURL || '',
                            activeEffect: this.activeEffect || '',
                            desc: this.desc || '',
                            title: this.title || '',
                            profilePic: this.profilePic ? this.profilePic : '',
                            postTime: event.timeStamp || '',
                            like: [],
                            unlike: [],
                            comment: [],
                            notes: [],
                            uid: this.currentUserId,
                            poststatus: this.poststatus ? 2 : 1,
                            audiourl: this.audiourltest || '',
                            author: this.username,
                            posturl: this.posturl || ''
                        };
                        res = this.db.list('post').push(payload);
                        // this.afs.doc(`users/${this.user.getUID()}`).update({
                        //   posts: firestore.FieldValue.arrayUnion(`${image}/${activeEffect}`)
                        // });
                        // this.afs.doc(`posts/${image}`).set({
                        //   desc,
                        //   title,
                        //   author: this.user.getUsername(),
                        //   related: [],
                        //   unrelated: [],
                        //   profilePic,
                        //   postTime,
                        //   comments: [],
                        //   effect: activeEffect
                        // });
                        this.busy = false;
                        this.imageURL = "";
                        this.desc = "";
                        this.title = "";
                        this.newEntry = false;
                        return [4 /*yield*/, this.alertController.create({
                                header: "Done",
                                message: "Your post was created!",
                                buttons: ["Cool!"]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.router.navigate(["/tabs/profile"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.setSelected = function (effect) {
        this.activeEffect = this.effects[effect];
    };
    ProfilePage.prototype.uploadFile = function () {
        this.fileButton.nativeElement.click();
    };
    ProfilePage.prototype.fileChanged = function (event) {
        var _this = this;
        this.busy = true;
        var files = event.target.files;
        var data = new FormData();
        data.append("file", files[0]);
        data.append("UPLOADCARE_STORE", "1");
        data.append("UPLOADCARE_PUB_KEY", "04f56adce4b67ee5ab17");
        this.http
            .post("https://upload.uploadcare.com/base/", data)
            .subscribe(function (event) {
            console.log(event);
            _this.imageURL = event.json().file;
            _this.busy = false;
            _this.http
                .get("https://ucarecdn.com/" + _this.imageURL + "/detect_faces/")
                .subscribe(function (event) {
                _this.noFace = event.json().faces == 0;
            });
        });
    };
    ProfilePage.prototype.poststatuschange = function () {
        this.poststatus = !this.poststatus;
    };
    ProfilePage.prototype.share = function (post) {
        this.socialSharing.shareWithOptions({
            chooserTitle: 'Sochapp',
            message: post.desc,
            url: 'https://ucarecdn.com/' + post.image + '/',
            subject: post.title
        }).then(function (res) {
            // console.log("res", res);
        }, function (err) {
            console.log("err", err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileButton"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfilePage.prototype, "fileButton", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page",
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeAudio"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map