(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bubble-bubble-module"],{

/***/ "./src/app/bubble/bubble.module.ts":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.module.ts ***!
  \*****************************************/
/*! exports provided: BubblePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblePageModule", function() { return BubblePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bubble_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bubble.page */ "./src/app/bubble/bubble.page.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_7__);
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/








var routes = [
    {
        path: '',
        component: _bubble_page__WEBPACK_IMPORTED_MODULE_6__["BubblePage"]
    }
];
var BubblePageModule = /** @class */ (function () {
    function BubblePageModule() {
    }
    BubblePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bubble_page__WEBPACK_IMPORTED_MODULE_6__["BubblePage"]],
            providers: [angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]]
        })
    ], BubblePageModule);
    return BubblePageModule;
}());



/***/ }),

/***/ "./src/app/bubble/bubble.page.html":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"dark\" text-center>\r\n      Soch Chat\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"dark\" *ngIf=\"isBlock\" (click)=\"blockunblock()\"><ion-icon name=\"notifications-off\"></ion-icon>Block</ion-button>\r\n      <ion-button color=\"dark\" *ngIf=\"!isBlock\" (click)=\"blockunblock()\"><ion-icon name=\"notifications\"></ion-icon>UnBlock</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #IonContent fullscreen=\"true\">\r\n  <ion-list *ngIf=\"userChat\">\r\n    <!-- <div *ngFor=\"let chat of msgList; let i = index; \"> -->\r\n    <div *ngFor=\"let chat of userChat; let i = index; \">\r\n      <ion-row *ngIf=\"chat.sender_id != userid\">\r\n        <ion-col class=\"right\" no-padding color=\"dark\"\r\n          [ngClass]=\"{'clubbed':((userChat[i+1] && userChat[i+1].sender_id != chat.sender_id)|| !userChat[i+1])}\">\r\n          <div class=\"imageAvatarRight\">\r\n            <div class=\"imageAvatarBottom\">\r\n              <ion-avatar class=\"avatar\"\r\n                [ngClass]=\"(userChat[i+1] && userChat[i+1].sender_id == chat.sender_id)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img *ngIf=\"todata && todata.profilePic\"\r\n                  src=\"https://ucarecdn.com/{{ todata.profilePic }}/{{ scaleCrop }}/ \"></ion-img>\r\n                <ion-img *ngIf=\"!todata || !todata.profilePic\" src=\"assets/icon/user.png\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" color=\"dark\"[ngClass]=\"{'sharper':((userChat[i+1] && userChat[i+1].sender_id == chat.sender_id) && \r\n              (userChat[i-1] && userChat[i-1].sender_id == chat.sender_id)),\r\n              'sharper-top':(userChat[i-1] && userChat[i-1].sender_id == chat.sender_id),\r\n              'sharper-bottom':(userChat[i+1] && userChat[i+1].sender_id == chat.sender_id)}\">\r\n                <p text-wrap padding color=\"dark\">{{chat.msg}}\r\n                </p>\r\n                <div class=\"corner-parent-right\">\r\n                  <div class=\"corner-child-right\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"chat.sender_id == userid\">\r\n        <ion-col class=\"left\" no-padding\r\n          [ngClass]=\"{'clubbed':((userChat[i+1] && userChat[i+1].sender_id != chat.sender_id)|| !userChat[i+1])}\">\r\n          <div class=\"imageAvatarLeft\">\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" color=\"dark\" [ngClass]=\"{'sharper':((userChat[i+1] && userChat[i+1].sender_id == chat.sender_id) && \r\n              (userChat[i-1] && userChat[i-1].sender_id == chat.sender_id)),\r\n              'sharper-top':(userChat[i-1] && userChat[i-1].sender_id == chat.sender_id),\r\n              'sharper-bottom':(userChat[i+1] && userChat[i+1].sender_id == chat.sender_id)}\">\r\n                <p text-wrap padding color=\"dark\">{{chat.msg}}</p>\r\n                <div class=\"corner-parent-left\">\r\n                  <div class=\"corner-child-left\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n            <div class=\"imageAvatarBottom\">\r\n              <ion-avatar class=\"avatar\"\r\n                [ngClass]=\"(userChat[i+1] && userChat[i+1].sender_id == chat.sender_id)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img *ngIf=\"userdata && userdata.profilePic\"\r\n                  src=\"https://ucarecdn.com/{{ userdata.profilePic }}/{{ scaleCrop }}/ \"></ion-img>\r\n                <ion-img *ngIf=\"!userdata || !userdata.profilePic\" src=\"assets/icon/user.png\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"((userChat[i+1] && userChat[i+1].sender_id != chat.sender_id)|| !userChat[i+1])\">\r\n        <ion-col>\r\n          <!-- <ion-text>{{chat.time}}</ion-text> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"isBlock\">\r\n    <ion-fab-button (click)=\" sendMsg()\" (mousedown)=\"something($event)\">\r\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-row *ngIf=\"loader\" padding-bottom>\r\n    <ion-col no-padding class=\"loading-col\">\r\n      <div class=\"imageAvatarRight\">\r\n        <div class=\"imageAvatarBottomLoader\">\r\n          <ion-avatar class=\"avatar\">\r\n            <div class=\"imageAvatarBottomIcon\">\r\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n            </div>\r\n            <ion-img src=\"../../assets/chat/chat5.jpg\"></ion-img>\r\n          </ion-avatar>\r\n        </div>\r\n        <ion-label>\r\n          <div class=\"chatDivLoader\">\r\n            <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\r\n\r\n            <div class=\"corner-parent-right\">\r\n              <div class=\"corner-child-right\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent>\r\n  <ion-toolbar>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" color=\"dark\" name=\"camera\" expand=\"icon-only\" class=\"footerIcon\"></ion-icon>\r\n      <ion-input class=\"input-box\" type=\"text\" placeholder=\"Write a message...\" [(ngModel)]=\"user_input\"\r\n        (keypress)=\"userTyping($event)\"></ion-input>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/bubble/bubble.page.scss":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)\r\n*\r\n* Copyright © 2019-present Enappd. All rights reserved.\r\n*\r\n* This source code is licensed as per the terms found in the\r\n* LICENSE.md file in the root directory of this source tree.\r\n*/\nion-content {\n  --background: url('bkg.png') 0 0/100% 100% no-repeat;\n  --opacity: 1%; }\nion-header {\n  --background: #ffffff; }\nion-toolbar,\nion-item {\n  --background: white;\n  --inner-border-width: 0; }\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0; }\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end; }\n.imageAvatarRight .imageAvatarBottom {\n    max-width: 214px;\n    align-items: flex-end;\n    display: flex;\n    border-radius: 50%;\n    position: relative;\n    top: 6px;\n    z-index: 11; }\n.imageAvatarRight .avatar {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.imageAvatarRight .imageAvatarBottomIcon {\n    width: 12px;\n    height: 12px;\n    border-radius: 50px;\n    background: var(--ion-color-tertiary-tint);\n    position: absolute;\n    top: 17%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 10.1%;\n    color: white; }\n.imageAvatarRight .chatDiv {\n    text-align: justify;\n    position: relative;\n    background: #000000;\n    border-radius: 25px;\n    border-bottom-left-radius: 0;\n    max-width: 72vw;\n    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2); }\n.imageAvatarRight .chatDiv p {\n      font-weight: 500; }\n.imageAvatarRight ion-img {\n    width: 35px;\n    height: 35px; }\n.imageAvatarRight .sharper.chatDiv {\n    border-radius: 0; }\n.imageAvatarRight .sharper-bottom.chatDiv {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n.imageAvatarRight .sharper-top.chatDiv {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end; }\n.imageAvatarLeft .imageAvatarBottom {\n    max-width: 214px;\n    align-items: flex-end;\n    display: flex;\n    border-radius: 50%;\n    position: relative;\n    top: 6px;\n    z-index: 11; }\n.imageAvatarLeft .avatar {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.imageAvatarLeft .imageAvatarBottomIcon {\n    width: 12px;\n    height: 12px;\n    border-radius: 50px;\n    background: var(--ion-color-tertiary-tint);\n    position: absolute;\n    top: 17%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 10.1%;\n    color: white; }\n.imageAvatarLeft .chatDiv {\n    text-align: left;\n    position: relative;\n    background: #f0cc6b;\n    border-radius: 25px;\n    border-bottom-right-radius: 0;\n    max-width: 72vw;\n    box-shadow: 1px 1px 5px #f0cc6b; }\n.imageAvatarLeft .chatDiv p {\n      font-weight: 500; }\n.imageAvatarLeft ion-img {\n    width: 35px;\n    height: 35px; }\n.imageAvatarLeft .sharper.chatDiv {\n    border-radius: 0; }\n.imageAvatarLeft .sharper-bottom.chatDiv {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n.imageAvatarLeft .sharper-top.chatDiv {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important; }\nion-fab {\n  bottom: -22px !important; }\n.footerIcon {\n  color: rgba(244, 245, 248, 0.7); }\nion-input {\n  --placeholder-color: rgb(56, 56, 56); }\n.chatDivLoader {\n  position: relative;\n  background: #e2ce16;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: #f0cc6b;\n  padding: 2px;\n  display: flex;\n  justify-content: center; }\n.chatDivLoader .corner-parent-right {\n    background: #f0cc6b;\n    height: 10px;\n    width: 10px;\n    position: absolute;\n    left: -4px;\n    bottom: -2px;\n    border-radius: 0;\n    border-radius: 5px; }\n.chatDivLoader .corner-parent-right .corner-child-right {\n      width: 6px;\n      height: 6px;\n      border-radius: 3px;\n      background: white;\n      position: absolute;\n      top: 7px;\n      left: -7px; }\n.title {\n  color: #222222c7; }\nion-text {\n  font-size: 12px;\n  color: #838383c7; }\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11; }\n.hidden {\n  visibility: hidden; }\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px; }\n.right {\n  justify-content: flex-start;\n  padding-left: 20px; }\n.left {\n  justify-content: flex-end;\n  padding-right: 20px; }\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 36px;\n  width: 36px;\n  background: transparent;\n  position: absolute;\n  left: -35px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0; }\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n    width: 36px;\n    height: 36px;\n    border-radius: 18px;\n    background: transparent;\n    box-shadow: 15px 15px 0 0px #4b4b4b; }\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 36px;\n  width: 36px;\n  background: transparent;\n  position: absolute;\n  right: -35px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0; }\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n    width: 36px;\n    height: 36px;\n    border-radius: 18px;\n    background: transparent;\n    box-shadow: -15px 15px 0 0px #f0cc6b; }\n.input-box {\n  color: rgba(82, 82, 82, 0.918); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnViYmxlL2J1YmJsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2J1YmJsZS9EOlxcaW9uaWNQcm9qZWN0XFxTb2NoLTEuMC9zcmNcXGFwcFxcYnViYmxlXFxidWJibGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztDRFFDO0FDQ0Q7RUFDRSxvREFBYTtFQUNiLGFBQVUsRUFBQTtBQUVaO0VBQ0UscUJBQWEsRUFBQTtBQUVmOztFQUVFLG1CQUFhO0VBQ2IsdUJBQXFCLEVBQUE7QUFFdkI7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTtBQUh2QjtJQUtJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVcsRUFBQTtBQVhmO0lBY0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0FBbEJ2QjtJQXFCSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWSxFQUFBO0FBL0JoQjtJQWtDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBRTVCLGVBQWU7SUFDZiwyQ0FBMkMsRUFBQTtBQXpDL0M7TUEyQ00sZ0JBQWdCLEVBQUE7QUEzQ3RCO0lBK0NJLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFoRGhCO0lBb0RNLGdCQUFnQixFQUFBO0FBcER0QjtJQXlETSw0QkFBNEI7SUFDNUIsNkJBQTZCLEVBQUE7QUExRG5DO0lBK0RN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c291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiogSW9uaWMgRnVsbCBBcHAgIChodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy1mdWxsLWFwcC1pb25pYy00LWZ1bGwtYXBwKVxyXG4qXHJcbiogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbipcclxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4qL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9ia2cucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgLS1vcGFjaXR5OiAxJTsgfVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XG5cbmlvbi10b29sYmFyLFxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDsgfVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uaW1hZ2VBdmF0YXJSaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgei1pbmRleDogMTE7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaW1hZ2VBdmF0YXJSaWdodCAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDogMTAuMSU7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBtYXgtd2lkdGg6IDcydnc7XG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICAgIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAuaW1hZ2VBdmF0YXJSaWdodCBpb24taW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXIuY2hhdERpdiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAuaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci1ib3R0b20uY2hhdERpdiB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxuICAuaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci10b3AuY2hhdERpdiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxuXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4gIC5pbWFnZUF2YXRhckxlZnQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgei1pbmRleDogMTE7IH1cbiAgLmltYWdlQXZhdGFyTGVmdCAuYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5pbWFnZUF2YXRhckxlZnQgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDEwLjElO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjBjYzZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNmMGNjNmI7IH1cbiAgICAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLmNoYXREaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgLmltYWdlQXZhdGFyTGVmdCAuc2hhcnBlci1ib3R0b20uY2hhdERpdiB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLXRvcC5jaGF0RGl2IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7IH1cblxuaW9uLWZhYiB7XG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDsgfVxuXG4uZm9vdGVySWNvbiB7XG4gIGNvbG9yOiByZ2JhKDI0NCwgMjQ1LCAyNDgsIDAuNyk7IH1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiKDU2LCA1NiwgNTYpOyB9XG5cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZTJjZTE2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmMGNjNmI7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmNoYXREaXZMb2FkZXIgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNmMGNjNmI7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIC5jaGF0RGl2TG9hZGVyIC5jb3JuZXItcGFyZW50LXJpZ2h0IC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDdweDtcbiAgICAgIGxlZnQ6IC03cHg7IH1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMyMjIyMjJjNzsgfVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MzgzODNjNzsgfVxuXG5pb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHotaW5kZXg6IDExOyB9XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLmxvYWRpbmctY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cblxuLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cblxuLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5jbHViYmVkIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMzZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTM1cHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAuY2x1YmJlZCAuaW1hZ2VBdmF0YXJSaWdodCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1yaWdodCAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMCAwcHggIzRiNGI0YjsgfVxuXG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTM1cHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAuY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQgLmNvcm5lci1jaGlsZC1sZWZ0IHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4IDAgMHB4ICNmMGNjNmI7IH1cblxuLmlucHV0LWJveCB7XG4gIGNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDAuOTE4KTsgfVxuIiwiLyoqXHJcbiogSW9uaWMgRnVsbCBBcHAgIChodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy1mdWxsLWFwcC1pb25pYy00LWZ1bGwtYXBwKVxyXG4qXHJcbiogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbipcclxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4qL1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWdzL2JrZy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIC0tb3BhY2l0eTogMSU7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbmlvbi10b29sYmFyLFxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICB9XHJcbiAgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDEwLjElO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2hhdERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cclxuICAgIG1heC13aWR0aDogNzJ2dztcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnNoYXJwZXIge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItYm90dG9tIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci10b3Age1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XHJcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAxMC4xJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNoYXREaXYge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDIwNCwgMTA3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDcydnc7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2IoMjQwLCAyMDQsIDEwNyk7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnNoYXJwZXIge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItYm90dG9tIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci10b3Age1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mYWIge1xyXG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVySWNvbiB7XHJcbiAgY29sb3I6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC43KTtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxufVxyXG4uY2hhdERpdkxvYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjYsIDIwNiwgMjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigyNDAsIDIwNCwgMTA3KTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAuY29ybmVyLXBhcmVudC1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyMDQsIDEwNyk7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmNvcm5lci1jaGlsZC1yaWdodCB7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgICAgbGVmdDogLTdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzIyMjIyMmM3O1xyXG59XHJcbmlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM4MzgzODNjNztcclxufVxyXG5pb24tY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nLWNvbCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5sZWZ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jbHViYmVkIHtcclxuICAuaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgICAuY2hhdERpdiB7XHJcbiAgICAgIC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1yaWdodCB7XHJcbiAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAwIDBweCAjNGI0YjRiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJMZWZ0IHtcclxuICAgIC5jaGF0RGl2IHtcclxuICAgICAgLmNvcm5lci1wYXJlbnQtbGVmdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTM1cHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAuY29ybmVyLWNoaWxkLWxlZnQge1xyXG4gICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4IDAgMHB4IHJnYigyNDAsIDIwNCwgMTA3KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlucHV0LWJveCB7XHJcbiAgY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMC45MTgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bubble/bubble.page.ts":
/*!***************************************!*\
  !*** ./src/app/bubble/bubble.page.ts ***!
  \***************************************/
/*! exports provided: BubblePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblePage", function() { return BubblePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/firebase.service */ "./src/app/service/firebase.service.ts");
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/







var BubblePage = /** @class */ (function () {
    function BubblePage(activRoute, db, firebaseProvider) {
        var _this = this;
        this.activRoute = activRoute;
        this.db = db;
        this.firebaseProvider = firebaseProvider;
        this.user_input = '';
        this.User = 'Me';
        this.toUser = 'HealthBot';
        this.getroom = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms');
        this.roomList = [];
        this.userid = localStorage.getItem('userid');
        this.userChat = [];
        this.blockuserDetail = [];
        this.isBlock = true;
        this.ReceiverUserDetails = {};
        this.activRoute.params.subscribe(function (params) {
            // console.log(params)
            _this.toId = params.id;
            _this.paramData = params;
            _this.userName = params.name;
        });
        this.PersonData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        console.log(this.PersonData);
        this.currentUserId = localStorage.getItem('userid');
        // this.msgList = [
        //   {
        //     userId: 'HealthBot',
        //     userName: 'HealthBot',
        //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        //     time: '12:00',
        //     message: 'Hello, have you seen this great chat UI',
        //     id: 0
        //   },
        //   {
        //     userId: 'Me',
        //     userName: 'Me',
        //     userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/chat/chat/chat5.jpg',
        //     time: '12:03',
        //     message: 'Yeah, I see this. This looks great. ',
        //     id: 1,
        //   },
        //   {
        //     userId: 'HealthBot',
        //     userName: 'HealthBot',
        //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        //     time: '12:05',
        //     message: '... and this is absolutely free, anyone can use',
        //     id: 3
        //   },
        //   {
        //     userId: 'Me',
        //     userName: 'Me',
        //     userAvatar: '../../../../assets/chat/chat/chat5.jpg',
        //     time: '12:06',
        //     message: 'wow ! that\'s great. Love to see more of such chat themes',
        //     id: 4
        //   },
        //   {
        //     userId: 'HealthBot',
        //     userName: 'HealthBot',
        //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
        //     time: '12:07',
        //     message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
        //     id: 5
        //   }
        // ];
    }
    BubblePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getroom.on('value', function (resp) {
            _this.getroomList(resp);
        });
        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('User/' + this.toId).on('value', function (resp) {
            _this.ReceiverUserDetails = resp.val();
            console.log('bl', _this.ReceiverUserDetails);
        });
        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('User/' + this.currentUserId + '/blockuser').on('value', function (resp) {
            // console.log('bK',resp)
            // console.log('bl',resp.val())
            _this.getBlockUserList(resp);
        });
        this.db.object('User/' + this.userid).valueChanges().subscribe(function (data) {
            _this.userdata = data;
        });
        this.db.object('User/' + this.toId).valueChanges().subscribe(function (data) {
            _this.todata = data;
        });
    };
    BubblePage.prototype.ngOnInit = function () {
        // this.getblockuser();
        // console.log(this.userid);
    };
    BubblePage.prototype.sendMsg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var Timestamp, payload, LastMessageKey, resdata;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                Timestamp = { time: firebase__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP };
                console.log(Timestamp);
                console.log(Timestamp.time);
                payload = {
                    time: firebase__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP,
                    msg: this.user_input,
                    sender_id: localStorage.getItem('userid'),
                    reciver_id: this.toId,
                };
                if (this.user_input) {
                    if (this.currentroom) {
                        resdata = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms').child(this.currentroom.key).child('chat').push(payload);
                        this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token, '', this.PersonData.name ? this.PersonData.name : this.PersonData.username, this.user_input);
                        this.user_input = '';
                        LastMessageKey = resdata.path.pieces_[resdata.path.pieces_.indexOf('chat') + 1];
                        console.log(resdata.path.pieces_[resdata.path.pieces_.indexOf('chat') + 1]);
                        firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms').child(this.currentroom.key).update({ last_messageKey: LastMessageKey });
                    }
                    else {
                        this.addRoom(payload);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    BubblePage.prototype.getroomList = function (snapshot) {
        // console.log("getroom");
        var _this = this;
        this.roomList = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            _this.roomList.push(item);
            // console.log("roomlist",this.roomList);
        });
        if (this.roomList.length > 0) {
            for (var index = 0; index < this.roomList.length; index++) {
                if (localStorage.getItem('userid') == this.roomList[index].sender_id && this.toId == this.roomList[index].reciver_id) {
                    // console.log("if",this.roomList[index]);
                    this.currentroom = this.roomList[index];
                    var getChat = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/rooms/' + this.roomList[index].key + '/chat');
                    getChat.on('value', function (resp) {
                        _this.getChatList(resp);
                    });
                    // this.db.list('/rooms/' + this.roomList[index].key + '/chat', {
                    //   query: {
                    //     orderByKey: true
                    //   }
                    // }).subscribe(res => {
                    //   // console.log("res",res);
                    //   this.userChat = res;
                    // }, err => {
                    // })
                }
                else if (this.toId == this.roomList[index].sender_id && localStorage.getItem('userid') == this.roomList[index].reciver_id) {
                    // console.log("else",this.roomList[index]);
                    this.currentroom = this.roomList[index];
                    var getChat = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('/rooms/' + this.roomList[index].key + '/chat');
                    getChat.on('value', function (resp) {
                        _this.getChatList(resp);
                    });
                    // this.db.list('/rooms/' + this.roomList[index].key + '/chat', {
                    //   query: {
                    //     orderByKey: true
                    //   }
                    // }).subscribe(res => {
                    //   // console.log(res);
                    //   this.userChat = res;
                    // }, err => {
                    // })
                }
            }
        }
    };
    BubblePage.prototype.getChatList = function (snapshot) {
        var _this = this;
        this.userChat = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            _this.userChat.push(item);
        });
        // console.log(this.userChat);
    };
    BubblePage.prototype.addRoom = function (data) {
        var _this = this;
        var res = this.db.list('rooms').push({
            sender_id: data.sender_id,
            sender_details: {
                name: this.PersonData.name ? this.PersonData.name : this.PersonData.username,
                profilePic: this.PersonData.profilePic ? this.PersonData.profilePic : '',
                phoneNo: this.PersonData.phoneNo ? this.PersonData.phoneNo : ''
            },
            reciver_id: data.reciver_id,
            reciver_details: {
                name: this.ReceiverUserDetails.name ? this.ReceiverUserDetails.name : this.ReceiverUserDetails.username,
                profilePic: this.ReceiverUserDetails.profilePic ? this.ReceiverUserDetails.profilePic : '',
                phoneNo: this.ReceiverUserDetails.phoneNo ? this.ReceiverUserDetails.phoneNo : ''
            },
            chat: [],
        });
        var resdata;
        if (res) {
            console.log('res', res);
            resdata = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms').child(res.key).child('chat').push(data)
                .then(function (x) {
                _this.firebaseProvider.sendNotificationNew(_this.ReceiverUserDetails.device_token, '', _this.PersonData.name ? _this.PersonData.name : _this.PersonData.username, _this.user_input);
                firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms').child(res.key).child('chat').once('value', function (snap) {
                    firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('rooms').child(res.key).update({ last_messageKey: Object.keys(snap.val())[0] });
                });
                //this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,'',this.PersonData.data.name?this.PersonData.data.name:this.PersonData.data.username,this.user_input)
            });
            this.currentroom = data;
        }
        this.user_input = '';
    };
    BubblePage.prototype.senderSends = function () {
        var _this = this;
        this.loader = true;
        this.scrollDown();
        setTimeout(function () {
            _this.msgList.push({
                userId: _this.User,
                userName: _this.User,
                userAvatar: '../../../../assets/chat/chat/chat5.jpg',
                time: '12:01',
                message: 'Sorry, didn\'t get what you said. Can you repeat that please'
            });
            _this.loader = false;
            _this.scrollDown();
        }, 2000);
    };
    BubblePage.prototype.scrollDown = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(50);
        }, 200);
    };
    BubblePage.prototype.something = function ($event) {
        $event.preventDefault();
        // console.log($event)
    };
    BubblePage.prototype.userTyping = function (event) {
        // console.log(event);
        this.start_typing = event.target.value;
        this.scrollDown();
    };
    BubblePage.prototype.getBlockUserList = function (snapshot) {
        var _this = this;
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            _this.blockuserDetail.push(item);
        });
        // console.log(this.blockuserDetail);
        if (this.blockuserDetail.length > 0) {
            for (var index = 0; index < this.blockuserDetail.length; index++) {
                if (this.toId == this.blockuserDetail[index].uid) {
                    this.isBlock = false;
                    this.selectedblockuser = this.blockuserDetail[index];
                    break;
                }
                else {
                    this.isBlock = true;
                }
            }
        }
        else {
            this.isBlock = true;
        }
        // this.db.list('User/' + this.currentUserId + '/blockuser').valueChanges()
        //   .subscribe((data: any) => {
        //     if (data) {
        //       console.log(data);
        //       this.blockuserDetail = data;
        //       for (let index = 0; index < this.blockuserDetail.length; index++) {
        //         if (this.toId == this.blockuserDetail[index].uid) {
        //           this.isBlock = false;
        //           this.selectedblockuser = this.blockuserDetail[index];
        //           break;
        //         }
        //         else {
        //           this.isBlock = true;
        //         }
        //       }
        //       console.log('blockuserDetail', this.blockuserDetail);
        //     }
        //   });
    };
    BubblePage.prototype.blockunblock = function () {
        // console.log(this.selectedblockuser);
        if (this.isBlock) {
            var payload = {
                uid: this.toId
            };
            // console.log(payload);
            this.db.list('User/' + this.currentUserId + '/blockuser').push(payload);
            this.isBlock = false;
        }
        else {
            // console.log("else");
            var resdata = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('User').child(this.currentUserId).child('blockuser').child(this.selectedblockuser.key).remove();
            this.isBlock = true;
            // this.db.object('User/' + this.currentUserId + '/blockuser' + this.selectedblockuser.key).remove();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('IonContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], BubblePage.prototype, "content", void 0);
    BubblePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bubble',
            template: __webpack_require__(/*! ./bubble.page.html */ "./src/app/bubble/bubble.page.html"),
            styles: [__webpack_require__(/*! ./bubble.page.scss */ "./src/app/bubble/bubble.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _service_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseProvider"]])
    ], BubblePage);
    return BubblePage;
}());

// this.currentUserId = localStorage.getItem('userid')
// this.db.object('User/'+this.currentUserId).valueChanges()
// .subscribe((data:any)=>{
//   if(data){
//     this.userDetail=data;
//     console.log('userData', this.userDetail);
//     if(this.userDetail.profilePic)
//     this.profilePic=this.userDetail.profilePic;
//     this.user.setUser(this.userDetail);
//   }
// });	


/***/ })

}]);
//# sourceMappingURL=bubble-bubble-module.js.map