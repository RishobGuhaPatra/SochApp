(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rate-counselor-rate-counselor-module"],{

/***/ "./src/app/rate-counselor/rate-counselor.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/rate-counselor/rate-counselor.module.ts ***!
  \*********************************************************/
/*! exports provided: RateCounselorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateCounselorPageModule", function() { return RateCounselorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rate_counselor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate-counselor.page */ "./src/app/rate-counselor/rate-counselor.page.ts");







var routes = [
    {
        path: '',
        component: _rate_counselor_page__WEBPACK_IMPORTED_MODULE_6__["RateCounselorPage"]
    }
];
var RateCounselorPageModule = /** @class */ (function () {
    function RateCounselorPageModule() {
    }
    RateCounselorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rate_counselor_page__WEBPACK_IMPORTED_MODULE_6__["RateCounselorPage"]]
        })
    ], RateCounselorPageModule);
    return RateCounselorPageModule;
}());



/***/ }),

/***/ "./src/app/rate-counselor/rate-counselor.page.html":
/*!*********************************************************!*\
  !*** ./src/app/rate-counselor/rate-counselor.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-icon name=\"close\" color=\"light\" slot=\"end\" size=\"large\" padding (click)=\"close()\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"dark\" class=\"ion-text-center\">\r\n  <ion-grid style=\"height: 100%\">\r\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\r\n      <ion-card color=\"light\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Tell us about</ion-card-subtitle>\r\n<br>\r\n          <div class=\"counsellor-list\">\r\n              <img src=\"../../assets/icon/user.png\">\r\n            </div>\r\n\r\n          <ion-card-title> Name :{{CounsellorName}}</ion-card-title>\r\n\r\n          \r\n        </ion-card-header>\r\n        <ion-toolbar >\r\n            <ion-icon *ngFor=\"let key of selected_star\" name=\"star\" color=\"primary\" size=\"large\" (click)=\"checkStar(key)\"></ion-icon>\r\n            <ion-icon *ngFor=\"let key of unselected_star\" name=\"star-outline\" color=\"primary\" size=\"large\" (click)=\"checkStar(key)\"></ion-icon>\r\n            \r\n        </ion-toolbar>\r\n\r\n        <ion-card-content>\r\n          <ion-label>Leave a Review</ion-label>\r\n            <ion-item id=\"rounded\" lines=\"none\">\r\n                <ion-textarea type=\"text\" placeholder=\"Write here...\" [(ngModel)]=\"review\" auto-grow=\"true\" text-wrap></ion-textarea>\r\n              </ion-item>\r\n              <br>\r\n              <ion-label>Share Counselor</ion-label>\r\n          <ion-toolbar translucent>\r\n            <ion-icon padding name=\"logo-instagram\" (click)=\"shareviaInsta()\"></ion-icon>\r\n            <ion-icon padding name=\"logo-facebook\" (click)=\"shareviafacebook()\"></ion-icon> \r\n            <ion-icon padding name=\"logo-whatsapp\" (click)=\"shareviaWhatsapp()\"></ion-icon> \r\n            <ion-icon padding name=\"logo-twitter\" (click)=\"shareviaTwitter()\"></ion-icon>\r\n          </ion-toolbar>\r\n          <br>\r\n              <ion-button expand=\"block\" (click)=\"submit()\">\r\n                Submit\r\n              </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/rate-counselor/rate-counselor.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/rate-counselor/rate-counselor.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counsellor-list {\n  text-align: center;\n  position: relative; }\n  .counsellor-list img {\n    width: 90px;\n    text-align: center;\n    height: 90px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n  .text {\n  --border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0ZS1jb3Vuc2Vsb3IvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHJhdGUtY291bnNlbG9yXFxyYXRlLWNvdW5zZWxvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFGdEI7SUFJTSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQUlwQjtFQUNFLG9CQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmF0ZS1jb3Vuc2Vsb3IvcmF0ZS1jb3Vuc2Vsb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW5zZWxsb3ItbGlzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/rate-counselor/rate-counselor.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/rate-counselor/rate-counselor.page.ts ***!
  \*******************************************************/
/*! exports provided: RateCounselorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateCounselorPage", function() { return RateCounselorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);






var RateCounselorPage = /** @class */ (function () {
    function RateCounselorPage(socialSharing, modalCtrl, route, db, navCtrl) {
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.db = db;
        this.navCtrl = navCtrl;
        this.star = [0, 1, 2, 3, 4];
        this.unselected_star = [];
        this.selected_star = [];
        this.shareCounsellorDetails = 'Testing';
        this.unselected_star = this.star;
    }
    RateCounselorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params) {
                //console.log('params',params)
                _this.allPlan = JSON.parse(params.Plan);
                _this.index = params.index;
                _this.sessionId = params.sessionId;
                _this.CounsellorName = params.CounsellorName;
                // console.log('this.allPlan',this.allPlan)
            }
        });
    };
    RateCounselorPage.prototype.checkStar = function (key) {
        // console.log(key)
        this.unselected_star = [];
        this.selected_star = [];
        for (var i = 0; i < this.star.length; i++) {
            if (i <= key) {
                this.selected_star.push(this.star[i]);
            }
            else {
                this.unselected_star.push(this.star[i]);
            }
        }
    };
    RateCounselorPage.prototype.uncheckStar = function (key) {
        this.unselected_star = [];
        for (var i = 0; i <= key; i++) {
            this.unselected_star.push(this.star[i]);
        }
    };
    RateCounselorPage.prototype.shareviaWhatsapp = function () {
        this.socialSharing.shareViaWhatsApp(this.shareCounsellorDetails, '', 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en')
            // this.socialSharing.shareWithOptions({
            //   chooserTitle: 'Soch',
            //   message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
            //   url: 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en',
            // })
            .then(function (res) {
            alert("res" + res);
        }, function (err) {
            alert("err" + err);
        });
    };
    RateCounselorPage.prototype.shareviaInsta = function () {
        var _this = this;
        var link = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en';
        this.socialSharing.shareViaInstagram(this.shareCounsellorDetails, '')
            .then(function (res) {
        }, function (err) {
            _this.socialSharing.shareWithOptions({
                chooserTitle: 'Soch',
                message: _this.shareCounsellorDetails,
                url: link,
            })
                .then(function (res1) {
            }, function (err2) {
                alert("err" + err2);
            });
        });
    };
    RateCounselorPage.prototype.shareviafacebook = function () {
        var link = 'https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en';
        // this.socialSharing.
        this.socialSharing.shareViaFacebook(this.shareCounsellorDetails, '', link)
            .then(function (res) {
            // alert("res"+res);
        }, function (err) {
            alert("err" + err);
        });
    };
    RateCounselorPage.prototype.shareviaTwitter = function () {
        var link = 'https://play.google.com/store/apps/details?id=com.twitter.android&hl=en';
        this.socialSharing.shareViaTwitter(this.shareCounsellorDetails, '', link)
            // this.socialSharing.shareWithOptions({
            //   chooserTitle: 'Soch',
            //   message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
            //   url: 'https://play.google.com/store/apps/details?id=com.twitter.android&hl=en',
            // })
            .then(function (res) {
            // alert("res"+res);
        }, function (err) {
            alert("err" + err);
        });
    };
    RateCounselorPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    RateCounselorPage.prototype.submit = function () {
        // console.log('sessionId',this.sessionId)
        // console.log('index',this.index)
        // console.log('allPlan',this.allPlan)
        // console.log('rateList',this.allPlan.rating)
        // console.log('List',this.allPlan.rating[this.index])
        this.allPlan.rating[this.index] = { review: this.review, rating: this.selected_star.length };
        // console.log('List2',this.allPlan.rating[this.index])
        this.db.object('sessions/' + this.sessionId).update({
            selectedPlan: this.allPlan
        });
        this.close();
    };
    RateCounselorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rate-counselor',
            template: __webpack_require__(/*! ./rate-counselor.page.html */ "./src/app/rate-counselor/rate-counselor.page.html"),
            styles: [__webpack_require__(/*! ./rate-counselor.page.scss */ "./src/app/rate-counselor/rate-counselor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], RateCounselorPage);
    return RateCounselorPage;
}());



/***/ })

}]);
//# sourceMappingURL=rate-counselor-rate-counselor-module.js.map