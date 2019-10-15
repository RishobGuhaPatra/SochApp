(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploader-uploader-module"],{

/***/ "./src/app/uploader/uploader.module.ts":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.module.ts ***!
  \*********************************************/
/*! exports provided: UploaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderPageModule", function() { return UploaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uploader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploader.page */ "./src/app/uploader/uploader.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");








var routes = [
    {
        path: '',
        component: _uploader_page__WEBPACK_IMPORTED_MODULE_6__["UploaderPage"]
    }
];
var UploaderPageModule = /** @class */ (function () {
    function UploaderPageModule() {
    }
    UploaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_uploader_page__WEBPACK_IMPORTED_MODULE_6__["UploaderPage"]]
        })
    ], UploaderPageModule);
    return UploaderPageModule;
}());



/***/ }),

/***/ "./src/app/uploader/uploader.page.html":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-title>Soch Counsellors</ion-title>\r\n    <ion-icon padding name=\"calendar\" slot=\"end\" (click)=\"sessionList()\" fill=\"outline\" shape=\"round\" color=\"dark\">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <!-- <app-loading *ngIf=\"busy\"></app-loading>\r\n\r\n\t<div id=\"images\" *ngIf=\"posts\">\r\n\t\t\t<div class=\"image\" *ngFor=\"let post of posts\">\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-card-subtitle class=\"title\">\r\n\t\t\t\t\t\t\t\t<p>Journal: {{ post.title }}</p>\r\n\t\t\t\t\t\t\t</ion-card-subtitle>\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\t(click)=\"goTo(post)\"\r\n\t\t\t\t\t\tclass=\"main-image\"\r\n\t\t\t\t\t\tsrc=\"https://ucarecdn.com/{{ post }}/-/scale_crop/200x200/center/\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</ion-card>\r\n\t\t\t</div>\r\n    </div> -->\r\n  <!-- <p (click)=\"addcoun()\">add</p> -->\r\n\r\n  <ion-row style=\"    margin-bottom: 15px;\">\r\n    <ion-col size=\"6\" *ngFor=\"let counsellor of counsellorList\" [routerLink]=\"['/uploaderdetail',counsellor.key]\"\r\n      style=\"margin-bottom: 15px;outline: none\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\"\r\n          [ngStyle]=\"{'background-color':  userdata && userdata.defaultcounseller && userdata.defaultcounseller == counsellor.key ? '#ffce00' : 'lightgray' }\">\r\n          <p class=\"name\">{{counsellor.name}}  <ion-icon name=\"phone-portrait\" style=\"color: #0a3\" *ngIf=\"counsellor.available\"></ion-icon></p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"6\" [routerLink]=\"['/uploaderdetail']\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">Counsellors 1</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col> -->\r\n  </ion-row>\r\n\r\n  <!-- <ion-row style=\"    margin-bottom: 15px;\">\r\n    <ion-col size=\"6\" [routerLink]=\"['/uploaderdetail']\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">Counsellors 1</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\" [routerLink]=\"['/uploaderdetail']\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">Counsellors 1</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"    margin-bottom: 15px;\">\r\n    <ion-col size=\"6\" [routerLink]=\"['/uploaderdetail']\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">Counsellors 1</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\" [routerLink]=\"['/uploaderdetail']\">\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">Counsellors 1</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/uploader/uploader.page.scss":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black;\n  display: none; }\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.center {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n.active {\n  border: 2px solid black; }\n\n.no-face {\n  font-weight: bold;\n  text-align: center;\n  font-style: italic; }\n\n.counsellor-list {\n  text-align: center;\n  position: relative; }\n\n.counsellor-list img {\n    width: 90px;\n    height: 90px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%; }\n\n.counsellor-list .content {\n    padding: 1px 0;\n    border-radius: 5px;\n    margin-top: -18px; }\n\n.counsellor-list .content .name {\n      margin: 20px 0 0px 0;\n      font-size: 14px;\n      font-weight: 500; }\n\n.counsellor-list .content .total {\n      margin: 2px 0 5px 0;\n      font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkZXIvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHVwbG9hZGVyXFx1cGxvYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRnBCO0lBSUksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQVB0QjtJQVlJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBZHJCO01BZ0JNLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBbEJ0QjtNQXFCTSxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkZXIvdXBsb2FkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbWVyYSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGVidG4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwMGVtO1xyXG4gIGxlZnQ6IC0xMDBlbTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5uby1mYWNlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY291bnNlbGxvci1saXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRvdGFsIHtcclxuICAgICAgbWFyZ2luOiAycHggMCA1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/uploader/uploader.page.ts":
/*!*******************************************!*\
  !*** ./src/app/uploader/uploader.page.ts ***!
  \*******************************************/
/*! exports provided: UploaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderPage", function() { return UploaderPage; });
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



// import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

// import { firestore } from 'firebase/app';


// import { AngularFireFunctions } from '@angular/fire/functions';



var UploaderPage = /** @class */ (function () {
    function UploaderPage(http, 
    // public afstore: AngularFirestore,
    // public aff: AngularFireFunctions,
    user, alertController, router, db, modalController) {
        this.http = http;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.db = db;
        this.modalController = modalController;
        this.getCounseller = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('counsellor');
        this.counsellorList = [];
        this.heartType = "heart-empty";
    }
    UploaderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
            .subscribe(function (data) {
            _this.posts = JSON.parse(data["_body"]);
            if (_this.posts.likes && _this.posts.likes.length > 0) {
                _this.heartType = _this.posts.likes.includes(_this.user.getUID()) ? 'heart' : 'heart-empty';
            }
        });
        this.db.object('User/' + localStorage.getItem('userid')).valueChanges().subscribe(function (data) {
            _this.userdata = data;
        });
        this.getCounseller.on('value', function (resp) {
            _this.counsellorList = [];
            _this.getCounsellorList(resp);
        });
    };
    UploaderPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe;
    };
    UploaderPage.prototype.getCounsellorList = function (snapshot) {
        var _this = this;
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            _this.counsellorList.push(item);
        });
    };
    UploaderPage.prototype.sessionList = function () {
        this.router.navigate(['sessions']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploaderPage.prototype, "fileButton", void 0);
    UploaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploader',
            template: __webpack_require__(/*! ./uploader.page.html */ "./src/app/uploader/uploader.page.html"),
            styles: [__webpack_require__(/*! ./uploader.page.scss */ "./src/app/uploader/uploader.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], UploaderPage);
    return UploaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=uploader-uploader-module.js.map