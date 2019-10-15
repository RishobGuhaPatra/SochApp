(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploaderdetail-uploaderdetail-module"],{

/***/ "./src/app/uploaderdetail/uploaderdetail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/uploaderdetail/uploaderdetail.module.ts ***!
  \*********************************************************/
/*! exports provided: UploaderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderDetailPageModule", function() { return UploaderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uploaderdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploaderdetail.page */ "./src/app/uploaderdetail/uploaderdetail.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");








var routes = [
    {
        path: '',
        component: _uploaderdetail_page__WEBPACK_IMPORTED_MODULE_6__["UploaderDetailPage"]
    }
];
var UploaderDetailPageModule = /** @class */ (function () {
    function UploaderDetailPageModule() {
    }
    UploaderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_uploaderdetail_page__WEBPACK_IMPORTED_MODULE_6__["UploaderDetailPage"]]
        })
    ], UploaderDetailPageModule);
    return UploaderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/uploaderdetail/uploaderdetail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/uploaderdetail/uploaderdetail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding style=\"--background: #ffffff;\" *ngIf=\"counsellorDetail\">\r\n  <!-- <div class=\"closeicon\">\r\n    <ion-icon name=\"close\" (click)=\"back()\"></ion-icon>\r\n  </div> -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <div class=\"counsellor-list\">\r\n        <img src=\"../../assets/icon/user.png\">\r\n        <div class=\"content\">\r\n          <p class=\"name\">{{counsellorDetail.name}}</p>\r\n          <p class=\"total\">45 Clients</p>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"detail\">\r\n    <ul>\r\n      <li>Name : {{counsellorDetail.name}}</li>\r\n      <!-- <li>Phone : {{counsellorDetail.phone}}</li> -->\r\n      <li>Email : {{counsellorDetail.email}}</li>\r\n      <li>Skills : {{counsellorDetail.skills}}</li>\r\n      <li>Education :{{counsellorDetail.educztion}}</li>\r\n      <li>Bio : {{counsellorDetail.bio}}</li>\r\n      <li>Rate : </li>\r\n      <li>Reviews : {{counsellorDetail.reviews}}</li>\r\n      <li style=\"    display: flex;\r\n      align-items: center;\">Set Default : <ion-toggle style=\"padding-left: 20px\" [(ngModel)]=\"setDefault\"\r\n          (ngModelChange)=\"changeStatus()\"></ion-toggle>\r\n      </li>\r\n    </ul>\r\n    <ion-button shape=\"round\" [routerLink]=\"['/ratelist',counsellorId,counsellorDetail.name]\" size=\"medium\"\r\n      class=\"button\" lines=\"none\" color=\"primary\" fill=\"solid\" expand=\"full\">\r\n      Next\r\n    </ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/uploaderdetail/uploaderdetail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/uploaderdetail/uploaderdetail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black;\n  display: none; }\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.center {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n.active {\n  border: 2px solid black; }\n\n.no-face {\n  font-weight: bold;\n  text-align: center;\n  font-style: italic; }\n\n.counsellor-list {\n  text-align: center;\n  position: relative;\n  margin: 0 70px; }\n\n.counsellor-list img {\n    width: 90px;\n    height: 90px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%; }\n\n.counsellor-list .content {\n    background-color: #ffea97;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin-top: -18px; }\n\n.counsellor-list .content .name {\n      margin: 20px 0 0px 0;\n      font-size: 14px;\n      font-weight: 500; }\n\n.counsellor-list .content .total {\n      margin: 2px 0 5px 0;\n      font-size: 12px; }\n\n.detail ul {\n  list-style: none;\n  padding: 0px 15px; }\n\n.detail ul li {\n    color: #ddbd04;\n    margin: 15px 0px;\n    font-size: 12px; }\n\n.closeicon {\n  text-align: right; }\n\n.closeicon ion-icon {\n    font-size: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkZXJkZXRhaWwvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHVwbG9hZGVyZGV0YWlsXFx1cGxvYWRlcmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFIaEI7SUFLSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBUnRCO0lBV0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBZHJCO01BZ0JNLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBbEJ0QjtNQXFCTSxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBOztBQUlyQjtFQUVJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFIckI7SUFLTSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFLckI7RUFDRSxpQkFBaUIsRUFBQTs7QUFEbkI7SUFHSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGxvYWRlcmRldGFpbC91cGxvYWRlcmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtZXJhIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZWJ0biB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTAwZW07XHJcbiAgbGVmdDogLTEwMGVtO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5vLWZhY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb3Vuc2VsbG9yLWxpc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDcwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhOTc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRvdGFsIHtcclxuICAgICAgbWFyZ2luOiAycHggMCA1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGV0YWlsIHtcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBsaSB7XHJcbiAgICAgIGNvbG9yOiAjZGRiZDA0O1xyXG4gICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2VpY29uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/uploaderdetail/uploaderdetail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/uploaderdetail/uploaderdetail.page.ts ***!
  \*******************************************************/
/*! exports provided: UploaderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderDetailPage", function() { return UploaderDetailPage; });
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
var UploaderDetailPage = /** @class */ (function () {
    function UploaderDetailPage(http, 
    // public afstore: AngularFirestore,
    // public aff: AngularFireFunctions,
    user, alertController, router, nav, activRoute, db) {
        this.http = http;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.nav = nav;
        this.activRoute = activRoute;
        this.db = db;
        // postReference: AngularFirestoreDocument;
        this.heartType = "heart-empty";
        this.setDefault = false;
    }
    UploaderDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activRoute.params.subscribe(function (params) {
            console.log(params);
            _this.counsellorId = params.id;
            console.log(_this.counsellorId);
            var getCounseller = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('counsellor');
            getCounseller.on('value', function (resp) {
                _this.getCounsellordetail(resp);
            });
        });
        this.http
            .get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
            .subscribe(function (data) {
            _this.posts = JSON.parse(data["_body"]);
            if (_this.posts.likes && _this.posts.likes.length > 0) {
                _this.heartType = _this.posts.likes.includes(_this.user.getUID()) ? 'heart' : 'heart-empty';
            }
        });
    };
    UploaderDetailPage.prototype.getCounsellordetail = function (snapshot) {
        var templist = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            templist.push(item);
        });
        for (var index = 0; index < templist.length; index++) {
            if (this.counsellorId == templist[index].key) {
                this.counsellorDetail = templist[index];
                if (this.counsellorDetail.defaultcounseller) {
                    this.setDefault = true;
                }
                console.log(this.counsellorDetail);
            }
        }
    };
    UploaderDetailPage.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe;
    };
    UploaderDetailPage.prototype.back = function () {
        this.nav.pop();
    };
    UploaderDetailPage.prototype.changeStatus = function () {
        if (this.setDefault) {
            this.db.object('User/' + localStorage.getItem('userid')).update({
                defaultcounseller: this.counsellorId
            });
        }
        else {
            this.db.object('User/' + localStorage.getItem('userid')).update({
                defaultcounseller: ''
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploaderDetailPage.prototype, "fileButton", void 0);
    UploaderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploaderdetail',
            template: __webpack_require__(/*! ./uploaderdetail.page.html */ "./src/app/uploaderdetail/uploaderdetail.page.html"),
            styles: [__webpack_require__(/*! ./uploaderdetail.page.scss */ "./src/app/uploaderdetail/uploaderdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]])
    ], UploaderDetailPage);
    return UploaderDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=uploaderdetail-uploaderdetail-module.js.map