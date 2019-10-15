(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients.page */ "./src/app/clients/clients.page.ts");







var routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]
    }
];
var ClientsPageModule = /** @class */ (function () {
    function ClientsPageModule() {
    }
    ClientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]]
        })
    ], ClientsPageModule);
    return ClientsPageModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.page.html":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <ion-header>\r\n  <ion-toolbar>\r\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-img src=\"/assets/icon/LoGo.png\"></ion-img>\r\n    <ion-icon padding name=\"person-add\" slot=\"end\" [routerLink]=\"['/counselor-chat']\" fill=\"outline\" shape=\"round\" size=\"small\"\r\n      color=\"dark\"></ion-icon>\r\n    <ion-progress-bar *ngIf=\"ClientList.length<1\" type=\"indeterminate\"></ion-progress-bar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content\r\n          pullingIcon=\"arrow-dropdown\"\r\n          pullingText=\"Pull to refresh\"\r\n          refreshingSpinner=\"circles\"\r\n          refreshingText=\"Refreshing...\">\r\n        </ion-refresher-content>\r\n      </ion-refresher>\r\n<ion-list >\r\n<ion-item-sliding id=\"item100\" *ngFor=\"let key of ClientList\">\r\n  <ion-item >\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n          <img  src=\"../../assets/icon/user.png\" *ngIf=\"!key.profilePic\">\r\n          <img  src=\"https://ucarecdn.com/{{ key.profilePic }}/{{ scaleCrop }}/\" *ngIf=\"key.profilePic\">\r\n      </ion-avatar>\r\n    <ion-label>\r\n      <h2> {{key.name?key.name:key.username}}</h2>\r\n      <p>{{key.last_messageKey?key.chat[key.last_messageKey].msg:''}}</p>\r\n      <!-- <h3>High Gamma wave Alert | Feel Score: 8 Sad</h3> -->\r\n    </ion-label>\r\n    <ion-note slot=\"end\">\r\n      {{key.chat[key.last_messageKey]?key.chat[key.last_messageKey].time:''}}\r\n    </ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item-options side=\"start\">\r\n    <ion-item-option (click)=\"gotoJournel(key.sender_id==LoggedInUserData.uid?key.reciver_id:key.sender_id)\">\r\n        <ion-icon slot=\"icon-only\" name=\"journal\"></ion-icon> \r\n        <ion-label>Journal</ion-label>\r\n    </ion-item-option>\r\n  </ion-item-options>\r\n\r\n  <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"primary\" (click)=\"gotoSessionNotes(key.uid)\">\r\n          <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n          <ion-label>Notes</ion-label>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"secondary\" (click)=\"session(key.sender_id==LoggedInUserData.uid?key.reciver_id:key.sender_id,key.name)\">\r\n          <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n        </ion-item-option>\r\n        <!-- <ion-item-option color=\"success\" (click)=\"gotoCaller('key.reciver_details.phoneNo')\">\r\n           <ion-icon slot=\"icon-only\" color=\"light\" name=\"call\"></ion-icon>\r\n        </ion-item-option> -->\r\n  </ion-item-options>\r\n</ion-item-sliding>\r\n</ion-list>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/clients/clients.page.scss":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black;\n  display: none; }\n\n.filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.center {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n\n.active {\n  border: 2px solid black; }\n\n.no-face {\n  font-weight: bold;\n  text-align: center;\n  font-style: italic; }\n\n.counsellor-list {\n  text-align: center;\n  position: relative; }\n\n.counsellor-list img {\n    width: 90px;\n    height: 90px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%; }\n\n.counsellor-list .content {\n    padding: 1px 0;\n    border-radius: 5px;\n    margin-top: -18px; }\n\n.counsellor-list .content .name {\n      margin: 20px 0 0px 0;\n      font-size: 14px;\n      font-weight: 500; }\n\n.counsellor-list .content .total {\n      margin: 2px 0 5px 0;\n      font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9EOlxcaW9uaWNQcm9qZWN0XFxTb2NoLTEuMC9zcmNcXGFwcFxcY2xpZW50c1xcY2xpZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRnBCO0lBSUksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQVB0QjtJQVlJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBZHJCO01BZ0JNLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBbEJ0QjtNQXFCTSxtQkFBbUI7TUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmlsZWJ0biB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTAwZW07XHJcbiAgICBsZWZ0OiAtMTAwZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLm5vLWZhY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Vuc2VsbG9yLWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRvdGFsIHtcclxuICAgICAgICBtYXJnaW46IDJweCAwIDVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/clients/clients.page.ts":
/*!*****************************************!*\
  !*** ./src/app/clients/clients.page.ts ***!
  \*****************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/ngx/index.js");





// import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
// import { resolve } from 'dns';


var ClientsPage = /** @class */ (function () {
    function ClientsPage(callNumber, router, iab, browserTab) {
        this.callNumber = callNumber;
        this.router = router;
        this.iab = iab;
        this.browserTab = browserTab;
        this.ClientList = [];
        this.ShowList = false;
        this.testKey = 0;
        this.ListCount = 0;
        this.sessions = [];
    }
    ClientsPage.prototype.doRefresh = function (event) {
        this.ClientList = [];
        this.ngOnInit();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    ClientsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.LoggedInUserData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        console.log(this.LoggedInUserData);
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('sessions').once('value', function (snap) {
            var data = snap.val();
            for (var key in data) {
                _this.sessions.unshift({ key: key, data: data[key] });
            }
            console.log(_this.sessions);
        });
        this.sub = this.getListData().then(function (x) {
            if (x) {
                for (var key in _this.roomData) {
                    if (_this.roomData[key].reciver_id == _this.LoggedInUserData.uid || _this.roomData[key].sender_id == _this.LoggedInUserData.uid) {
                        console.log('check0');
                        if (_this.roomData[key].reciver_id == _this.LoggedInUserData.uid) {
                            console.log('check1');
                            _this.getSenderData(_this.roomData, key).then(function (x) {
                                if (x) {
                                    console.log(x);
                                    _this.getTime(x);
                                }
                                // this.getTime(this.roomData[key])
                            });
                        }
                        else {
                            _this.getReceiverData(_this.roomData, key).then(function (x) {
                                if (x) {
                                    console.log(x);
                                    _this.getTime(x);
                                }
                                // this.getTime(this.roomData[key])
                            });
                        }
                    }
                }
            }
        });
    };
    ClientsPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClientsPage.prototype.gotoCaller = function (phoneNo) {
        var _this = this;
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl('https://zoom.us/j/6133939173');
            }
            else {
            }
        });
        // const browser = this.iab.create('https://zoom.us/j/6133939173');
        // browser.close();
        // browser.on('loadstop').subscribe(event => {
        //   browser.insertCSS({ code: "body{color: red;" });
        // });
        // this.callNumber.callNumber(phoneNo, true)
        //   .then(res => console.log('Launched dialer!', res))
        //   .catch(err => console.log('Error launching dialer', err));
    };
    ClientsPage.prototype.getListData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var key;
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('counselorChat').once('value', function (snapshot) {
                _this.roomData = snapshot.val();
                console.log(_this.roomData);
                resolve(_this.roomData);
            });
        });
    };
    ClientsPage.prototype.getTime = function (time) {
        var chatLength = Object.keys(time.chat).length - 1;
        var key = Object.keys(time.chat)[chatLength];
        var date_time = new Date((time.chat[key].time) * 1000).toString();
        var time_24 = date_time.split(' ')[4];
        // var time_24:any='09:00:01'
        var convert_12 = time_24.split(':');
        if (parseInt(convert_12[0]) < 13) {
            time.chat[key].time = ((parseInt(convert_12[0]) < 10 ? '0' + parseInt(convert_12[0]) : parseInt(convert_12[0])) + ':' + (parseInt(convert_12[1]) < 10 ? '0' + parseInt(convert_12[1]) : parseInt(convert_12[1])) + (parseInt(convert_12[0]) != 12 ? ' AM' : ' PM'));
        }
        else {
            var hours = parseInt(convert_12[0]) - 12;
            hours = (hours < 10) ? '0' + hours : hours;
            time.chat[key].time = (hours + ':' + parseInt(convert_12[1]) + ' PM');
        }
        this.ClientList.unshift(time);
        console.log(this.ClientList);
    };
    ClientsPage.prototype.getReceiverData = function (roomData, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var receiverDetails;
            var getDetails = {};
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(_this.LoggedInUserData.account_type == 'User' ? 'User/' : 'counsellor/' + roomData[key].reciver_id).once('value', function (snap1) {
                console.log(key);
                receiverDetails = snap1.val();
                if (receiverDetails) {
                    getDetails = _this.MergeJson(getDetails, roomData[key]);
                    getDetails = _this.MergeJson(getDetails, receiverDetails);
                    // this.ClientList.push(getDetails)
                    // this.ListCount++
                    resolve(getDetails);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    ClientsPage.prototype.getSenderData = function (roomData, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var senderDetails;
            var getDetails2 = {};
            console.log(_this.LoggedInUserData.account_type == 'User' ? 'counsellor/' : 'User/');
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(_this.LoggedInUserData.account_type == 'User' ? 'counsellor/' : 'User/' + roomData[key].sender_id).once('value', function (snap2) {
                console.log(key);
                senderDetails = snap2.val();
                console.log(senderDetails);
                if (senderDetails) {
                    getDetails2 = _this.MergeJson(getDetails2, roomData[key]);
                    getDetails2 = _this.MergeJson(getDetails2, senderDetails);
                    // this.ClientList.push(getDetails2)
                    // this.ListCount++
                    resolve(getDetails2);
                    // if(key==lastKey){
                    //   this.ShowList=true
                    // }
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    ClientsPage.prototype.MergeJson = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    ClientsPage.prototype.gotoJournel = function (uid) {
        var navigationExtras = {
            queryParams: {
                id: uid
            }
        };
        this.router.navigate(['/profile'], navigationExtras);
    };
    ClientsPage.prototype.gotoSessionNotes = function (uid) {
        var navigationExtras = {
            queryParams: {
                id: uid
            }
        };
        this.router.navigate(['session-notes'], navigationExtras);
    };
    ClientsPage.prototype.session = function (val, val2) {
        for (var key in this.sessions) {
            if (this.sessions[key].data.cid == this.LoggedInUserData.uid && this.sessions[key].data.uid == val) {
                console.log(val);
                console.log(this.sessions[key].key);
                for (var key1 in this.sessions[key].data.selectedPlan.seesionList) {
                    if (!this.sessions[key].data.selectedPlan.seesionList[key1]) {
                        this.router.navigate(['/councelor-bubble', key1, this.sessions[key].key, val, val2]);
                        console.log(key1);
                        console.log(this.sessions[key].data.selectedPlan.seesionList[key1]);
                        break;
                    }
                }
                break;
            }
        }
    };
    ClientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.page.html */ "./src/app/clients/clients.page.html"),
            styles: [__webpack_require__(/*! ./clients.page.scss */ "./src/app/clients/clients.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"], _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_6__["BrowserTab"]])
    ], ClientsPage);
    return ClientsPage;
}());



/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map