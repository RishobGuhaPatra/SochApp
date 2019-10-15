(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratelist-ratelist-module"],{

/***/ "./src/app/ratelist/ratelist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ratelist/ratelist.module.ts ***!
  \*********************************************/
/*! exports provided: RateListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateListPageModule", function() { return RateListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ratelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ratelist.page */ "./src/app/ratelist/ratelist.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");








var routes = [
    {
        path: '',
        component: _ratelist_page__WEBPACK_IMPORTED_MODULE_6__["RateListPage"]
    }
];
var RateListPageModule = /** @class */ (function () {
    function RateListPageModule() {
    }
    RateListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_ratelist_page__WEBPACK_IMPORTED_MODULE_6__["RateListPage"]]
        })
    ], RateListPageModule);
    return RateListPageModule;
}());



/***/ }),

/***/ "./src/app/ratelist/ratelist.page.html":
/*!*********************************************!*\
  !*** ./src/app/ratelist/ratelist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding style=\"--background: #fcfcfc;\">\r\n  <ion-card color=\"light\">\r\n    <ion-card-content color=\"light\">\r\n      <ion-card-subtitle>\r\n        <ion-icon name=\"clock\"></ion-icon>\r\n        Scheduled Plans\r\n      </ion-card-subtitle>\r\n      <ion-item\r\n        *ngFor=\"let s of scheculePlan\"\r\n        class=\"check\"\r\n        color=\"light\"\r\n        lines=\"none\"\r\n      >\r\n        <ion-checkbox [(ngModel)]=\"s.value\"></ion-checkbox>\r\n        <p>{{ s.diplayPrice }} fo</p>\r\n        <p>r {{ s.seesion }} Sessions</p>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card color=\"light\">\r\n    <ion-card-content color=\"light\">\r\n      <ion-card-subtitle>\r\n        <ion-icon name=\"help-buoy\"></ion-icon>\r\n        Instant Plans\r\n      </ion-card-subtitle>\r\n      <ion-item\r\n        *ngFor=\"let i of instantPlan\"\r\n        class=\"check\"\r\n        color=\"light\"\r\n        lines=\"none\"\r\n      >\r\n        <ion-checkbox [(ngModel)]=\"i.value\"></ion-checkbox>\r\n        <p>{{ i.diplayPrice }} fo</p>\r\n        <p>r {{ i.seesion }} Sessions</p>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-button\r\n    (click)=\"gotoPaypal()\"\r\n    color=\"primary\"x\r\n    fill=\"solid\"\r\n    expand=\"block\"\r\n  >\r\n    Next\r\n  </ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/ratelist/ratelist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ratelist/ratelist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black;\n  display: none; }\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.DadicatedPlan {\n  position: absolute;\n  left: 33%;\n  top: -41%;\n  background-color: #fdd73f;\n  width: 99px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px; }\n\n.RandomPlan {\n  position: absolute;\n  left: 68%;\n  top: -41%;\n  background-color: #fdd73f;\n  width: 99px;\n  text-align: center;\n  padding: 10px;\n  border-radius: 10px; }\n\n.center {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n.active {\n  border: 2px solid black; }\n\n.no-face {\n  font-weight: bold;\n  text-align: center;\n  font-style: italic; }\n\n.counsellor-list {\n  text-align: center;\n  position: relative;\n  margin: 0 70px; }\n\n.counsellor-list img {\n    width: 90px;\n    height: 90px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%; }\n\n.counsellor-list .content {\n    background-color: #ffea97;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin-top: -18px; }\n\n.counsellor-list .content .name {\n      margin: 20px 0 0px 0;\n      font-size: 14px;\n      font-weight: 500; }\n\n.counsellor-list .content .total {\n      margin: 2px 0 5px 0;\n      font-size: 12px; }\n\n.detail {\n  padding-top: 100px; }\n\n.detail .session {\n    position: relative; }\n\n.detail .session .session-list {\n      background-color: #fdd73f;\n      padding: 10px 14px;\n      border-radius: 6px;\n      margin-bottom: 35px; }\n\n.detail .session .plan {\n      position: absolute;\n      left: 35%;\n      top: -21%;\n      background-color: white;\n      width: 85px;\n      text-align: center;\n      border-radius: 10px; }\n\n.detail .session .plan .plan-list {\n        padding: 25px 0; }\n\n.detail .session .plan .plan-list p {\n          margin: 12px 0; }\n\n.detail .session .plan2 {\n      position: absolute;\n      left: 70%;\n      top: -21%;\n      background-color: white;\n      width: 85px;\n      text-align: center;\n      border-radius: 10px; }\n\n.detail .session .plan2 .plan-list {\n        padding: 25px 0; }\n\n.detail .session .plan2 .plan-list p {\n          margin: 12px 0; }\n\n.closeicon {\n  text-align: right; }\n\n.closeicon ion-icon {\n    font-size: 35px; }\n\n.button {\n  position: fixed;\n  bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0ZWxpc3QvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXHJhdGVsaXN0XFxyYXRlbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUhoQjtJQUtJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFSdEI7SUFXSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTs7QUFkckI7TUFnQk0sb0JBQW9CO01BQ3BCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUFsQnRCO01BcUJNLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBR0ksa0JBQWtCLEVBQUE7O0FBSHRCO01BS00seUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7O0FBUnpCO01BV00sa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxTQUFTO01BQ1QsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7O0FBakJ6QjtRQW1CUSxlQUFlLEVBQUE7O0FBbkJ2QjtVQXFCVSxjQUFjLEVBQUE7O0FBckJ4QjtNQTBCTSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTs7QUFoQ3pCO1FBa0NRLGVBQWUsRUFBQTs7QUFsQ3ZCO1VBb0NVLGNBQWMsRUFBQTs7QUFNeEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFEbkI7SUFHSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JhdGVsaXN0L3JhdGVsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maWxlYnRuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMDBlbTtcclxuICBsZWZ0OiAtMTAwZW07XHJcbn1cclxuLkRhZGljYXRlZFBsYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMzJTtcclxuICB0b3A6IC00MSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDczZjtcclxuICB3aWR0aDogOTlweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5SYW5kb21QbGFue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA2OCU7XHJcbiAgdG9wOiAtNDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQ3M2Y7XHJcbiAgd2lkdGg6IDk5cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5vLWZhY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb3Vuc2VsbG9yLWxpc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDcwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhOTc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRvdGFsIHtcclxuICAgICAgbWFyZ2luOiAycHggMCA1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZGV0YWlsIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgLnNlc3Npb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnNlc3Npb24tbGlzdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGQ3M2Y7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnBsYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgdG9wOiAtMjElO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLnBsYW4tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGxhbjIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgdG9wOiAtMjElO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLnBsYW4tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jbG9zZWljb24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ratelist/ratelist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ratelist/ratelist.page.ts ***!
  \*******************************************/
/*! exports provided: RateListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateListPage", function() { return RateListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");



// import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

// import { firestore } from 'firebase/app';


// import { AngularFireFunctions } from '@angular/fire/functions';

var RateListPage = /** @class */ (function () {
    function RateListPage(http, 
    // public afstore: AngularFirestore,
    // public aff: AngularFireFunctions,
    user, alertController, router, activRoute, datePicker, nav) {
        var _this = this;
        this.http = http;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.activRoute = activRoute;
        this.datePicker = datePicker;
        this.nav = nav;
        this.instantPlan = [
            {
                value: false,
                price: 1200,
                diplayPrice: "₹ 1,200",
                seesion: 1
            },
            {
                value: false,
                price: 6000,
                diplayPrice: "₹ 6,000",
                seesion: 6
            },
            {
                value: false,
                price: 12000,
                diplayPrice: "₹ 12,000",
                seesion: 12
            }
        ];
        this.scheculePlan = [
            {
                value: false,
                price: 1200,
                diplayPrice: "₹ 1,200",
                seesion: 1
            },
            {
                value: false,
                price: 7000,
                diplayPrice: "₹ 7,000",
                seesion: 6
            },
            {
                value: false,
                price: 11000,
                diplayPrice: "₹ 11,000",
                seesion: 12
            }
        ];
        this.totalPrice = 0;
        this.selectedPlanDetail = [];
        this.ratingDetails = [];
        this.anyScheduledPlan = false;
        // postReference: AngularFirestoreDocument;
        this.heartType = "heart-empty";
        this.activRoute.params.subscribe(function (params) {
            if (params) {
                _this.counsellorId = params.counsellorId;
                _this.counsellorName = params.counsellorName;
            }
        });
    }
    RateListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
            .subscribe(function (data) {
            _this.posts = JSON.parse(data["_body"]);
            if (_this.posts.likes && _this.posts.likes.length > 0) {
                _this.heartType = _this.posts.likes.includes(_this.user.getUID()) ? 'heart' : 'heart-empty';
            }
        });
    };
    RateListPage.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe;
    };
    RateListPage.prototype.back = function () {
        this.nav.pop();
    };
    RateListPage.prototype.gotoPaypal = function () {
        var _this = this;
        this.totalPrice = 0;
        this.selectedPlanDetail = [];
        this.ratingDetails = [];
        this.anyScheduledPlan = false;
        for (var i = 0; i < this.instantPlan.length; i++) {
            if (this.instantPlan[i].value) {
                this.totalPrice = this.totalPrice + this.instantPlan[i].price;
                for (var index = 0; index < this.instantPlan[i].seesion; index++) {
                    this.selectedPlanDetail.push(false);
                    this.ratingDetails.push(false);
                }
            }
        }
        for (var i = 0; i < this.scheculePlan.length; i++) {
            if (this.scheculePlan[i].value) {
                this.anyScheduledPlan = true;
                this.totalPrice = this.totalPrice + this.scheculePlan[i].price;
                for (var index = 0; index < this.scheculePlan[i].seesion; index++) {
                    this.selectedPlanDetail.push(false);
                    this.ratingDetails.push(false);
                }
            }
        }
        if (this.anyScheduledPlan && !this.dateforSchedulePlan) {
            this.datePicker.show({
                date: new Date(),
                mode: 'date',
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
            }).then(function (date) { return _this.dateforSchedulePlan = date; }, function (err) { return console.log('Error occurred while getting date: ', err); });
        }
        else {
            var tempdata = void 0;
            if (this.dateforSchedulePlan) {
                tempdata = {
                    dateforSchedulePlan: this.dateforSchedulePlan,
                    seesionList: this.selectedPlanDetail,
                    rating: this.ratingDetails,
                    isScheduled: true
                };
            }
            else {
                tempdata = {
                    seesionList: this.selectedPlanDetail,
                    rating: this.ratingDetails,
                    isScheduled: false
                };
            }
            console.log(this.totalPrice);
            if (this.totalPrice > 0) {
                this.router.navigate(["/paypal", this.counsellorId, this.counsellorName, this.totalPrice, JSON.stringify(tempdata)]);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RateListPage.prototype, "fileButton", void 0);
    RateListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ratelist',
            template: __webpack_require__(/*! ./ratelist.page.html */ "./src/app/ratelist/ratelist.page.html"),
            styles: [__webpack_require__(/*! ./ratelist.page.scss */ "./src/app/ratelist/ratelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], RateListPage);
    return RateListPage;
}());



/***/ })

}]);
//# sourceMappingURL=ratelist-ratelist-module.js.map