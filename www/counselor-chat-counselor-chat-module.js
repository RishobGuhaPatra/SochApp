(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counselor-chat-counselor-chat-module"],{

/***/ "./src/app/counselor-chat/counselor-chat.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/counselor-chat/counselor-chat.module.ts ***!
  \*********************************************************/
/*! exports provided: CounselorChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselorChatPageModule", function() { return CounselorChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _counselor_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counselor-chat.page */ "./src/app/counselor-chat/counselor-chat.page.ts");







var routes = [
    {
        path: '',
        component: _counselor_chat_page__WEBPACK_IMPORTED_MODULE_6__["CounselorChatPage"]
    }
];
var CounselorChatPageModule = /** @class */ (function () {
    function CounselorChatPageModule() {
    }
    CounselorChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_counselor_chat_page__WEBPACK_IMPORTED_MODULE_6__["CounselorChatPage"]]
        })
    ], CounselorChatPageModule);
    return CounselorChatPageModule;
}());



/***/ }),

/***/ "./src/app/counselor-chat/counselor-chat.page.html":
/*!*********************************************************!*\
  !*** ./src/app/counselor-chat/counselor-chat.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title mode=\"md\" color=\"dark\" *ngIf=\"title\"> Soch Friends</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\">\r\n      <ion-segment-button mode=\"md\" value=\"Calls\">\r\n        <div class=\"contentCenter\">\r\n          <ion-text slot=end class=\"segment_Text\">Calls</ion-text>\r\n        </div>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button mode=\"md\" value=\"Chats\" checked>\r\n        <div class=\"contentCenter\">\r\n          <ion-text slot=end class=\"segment_Text\">Chats\r\n            <!-- <ion-avatar class=\"segmentCount\">{{ userList.length }}\r\n            </ion-avatar> -->\r\n          </ion-text>\r\n        </div>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button mode=\"md\" value=\"group\">\r\n        <div class=\"contentCenter\">\r\n          <ion-text slot=end class=\"segment_Text\">Contacts</ion-text>\r\n        </div>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-list *ngIf=\"segmentTab == 'Chats' \" no-padding>\r\n    <ion-searchbar style=\"margin-top: 20px;color: black\" (ionInput)=\"getHistory($event)\"></ion-searchbar>\r\n    <ion-item *ngFor=\"let user of FilterUserData\" [routerLink]=\"['/bubble',user.uid]\">\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n        <ion-img *ngIf=\"user.profilePic\" src=\"https://ucarecdn.com/{{ user.profilePic }}/{{ scaleCrop }}/\">\r\n        </ion-img>\r\n        <ion-img *ngIf=\"!user.profilePic\" src=\"assets/icon/user.png\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2 color=\"light\">{{user.username}}\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\"></p>\r\n      </ion-label>\r\n      <!-- <div slot=\"end\" class=\"timeSlot\">\r\n          <div class=\"timeEnd\">\r\n            <ion-text slot=\"end\" color=\"success\" *ngIf=\"chat.time\" text-uppercase>{{chat.time}}</ion-text>\r\n            <ion-text slot=\"end\" color=\"medium\" *ngIf=\"chat.past\">{{chat.past}}</ion-text>\r\n          </div>\r\n          <ion-avatar class=\"chatCount\" *ngIf=\"chat.count\">{{chat.count}}</ion-avatar>\r\n        </div> -->\r\n    </ion-item>\r\n    <!-- <ion-item *ngFor=\"let chat of chatData\" >\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n        <ion-img [src]=\"chat.image\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2 color=\"light\">{{chat.name}}\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\">{{chat.description}}</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"timeSlot\">\r\n        <div class=\"timeEnd\">\r\n          <ion-text slot=\"end\" color=\"success\" *ngIf=\"chat.time\" text-uppercase>{{chat.time}}</ion-text>\r\n          <ion-text slot=\"end\" color=\"medium\" *ngIf=\"chat.past\">{{chat.past}}</ion-text>\r\n        </div>\r\n        <ion-avatar class=\"chatCount\" *ngIf=\"chat.count\">{{chat.count}}</ion-avatar>\r\n      </div>\r\n    </ion-item> -->\r\n  </ion-list>\r\n  <!-- <ion-list *ngIf=\"segmentTab == 'group' \" no-padding>\r\n    <ion-searchbar style=\"margin-top: 20px;\" (ionInput)=\"getHistory($event)\"></ion-searchbar>\r\n    <ion-item *ngFor=\"let user of FilterUserData\" [routerLink]=\"['/bubble',user.uid]\">\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n        <ion-img *ngIf=\"user.profilePic\" src=\"https://ucarecdn.com/{{ user.profilePic }}/{{ scaleCrop }}/\">\r\n        </ion-img>\r\n        <ion-img *ngIf=\"!user.profilePic\" src=\"assets/icon/user.png\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2 color=\"light\">{{user.username}}\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\"></p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n  <!-- <ion-list *ngIf=\"segmentTab == 'Calls' \" no-padding>\r\n    <ion-item *ngFor=\"let chat of chatData\">\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n        <ion-img [src]=\"chat.image\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2 color=\"light\">{{chat.name}}\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\">{{chat.call}}</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"timeSlot\">\r\n        <div class=\"timeEnd\">\r\n\r\n          <ion-icon class=\"videocam\" name={{chat.video}} expand=\"icon-only\" *ngIf=\"chat.video\" mode=\"ios\">{{chat.count}}\r\n          </ion-icon>\r\n          <ion-icon class=\"videocam\" name={{chat.phone}} expand=\"icon-only\" *ngIf=\"chat.phone\" mode=\"ios\">{{chat.count}}\r\n          </ion-icon>\r\n\r\n        </div>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/counselor-chat/counselor-chat.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/counselor-chat/counselor-chat.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatImage {\n  width: 50px;\n  height: 50px; }\n\n.plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12); }\n\nion-header:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: 0px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\"; }\n\nion-header,\nion-toolbar {\n  --background: rgb(255, 255, 255); }\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nion-segment-button {\n  --color: #000 !important;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 0px solid white; }\n\n.padding_right {\n  padding-right: 8px; }\n\nion-icon {\n  width: 1.5em;\n  height: 1.5em; }\n\n.header_image {\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0px 18px 0px 18px; }\n\n.tab-icon {\n  font-size: 20px; }\n\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n.chatCount {\n  background: var(--ion-color-success);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px; }\n\n.videocam {\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px; }\n\n.segmentCount {\n  background: var(--ion-color-tertiary-contrast);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px;\n  padding: 3px;\n  box-sizing: content-box; }\n\nh2 {\n  font-size: 0.84em;\n  font-weight: bold;\n  color: #383a3ee3; }\n\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 8px; }\n\n.widthHalf {\n  color: #222428b0;\n  font-size: 12px;\n  font-weight: bold; }\n\n.nameAvatar {\n  display: flex;\n  align-items: center;\n  width: 50%; }\n\n.nameAvatar h2 {\n    font-size: 0.94em;\n    font-weight: bold; }\n\nion-text {\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nion-text.segment_Text {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.timeSlot {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column; }\n\nion-searchbar {\n  --placeholder-color: white;\n  --color: white;\n  height: 35px !important; }\n\n.list-ios {\n  margin-bottom: 0 !important; }\n\n.sc-ion-label-ios-s p:last-child {\n  margin-top: 5px; }\n\n.title-ios {\n  height: 40px !important;\n  padding-top: 12px;\n  padding-left: 50px;\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbG9yLWNoYXQvRDpcXGlvbmljUHJvamVjdFxcU29jaC0xLjAvc3JjXFxhcHBcXGNvdW5zZWxvci1jaGF0XFxjb3Vuc2Vsb3ItY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEdBQTBHO0VBQzFHLGdIQUFnSCxFQUFBOztBQUVsSDtFQUVJLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUlmOztFQUVFLGdDQUFhLEVBQUE7O0FBRWY7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHdCQUFRO0VBQ1IsbURBQWdCO0VBQ2hCLDhCQUEyQyxFQUFBOztBQUc3QztFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsOENBQThDO0VBQzlDLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFIWjtJQUtJLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLDBCQUFvQjtFQUNwQixjQUFRO0VBQ1IsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291bnNlbG9yLWNoYXQvY291bnNlbG9yLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2hhdEltYWdlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAucGx1c0NsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taGVhZGVyLFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAuY29udGVudENlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdfcmlnaHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxuICAuaGVhZGVyX2ltYWdlIHtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBtYXJnaW46IDBweCAxOHB4IDBweCAxOHB4O1xyXG4gIH1cclxuICAudGFiLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAud2l0aGNvdW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuY2hhdENvdW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC52aWRlb2NhbSB7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwNjI1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50Q291bnQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDA2MjU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDAuODRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzODNhM2VlMztcclxuICB9XHJcbiAgLnRpbWVFbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICAud2lkdGhIYWxmIHtcclxuICAgIGNvbG9yOiAjMjIyNDI4YjA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLm5hbWVBdmF0YXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDAuOTRlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi10ZXh0LnNlZ21lbnRfVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50aW1lU2xvdCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWlvcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zYy1pb24tbGFiZWwtaW9zLXMgcDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgLnRpdGxlLWlvcyB7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/counselor-chat/counselor-chat.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/counselor-chat/counselor-chat.page.ts ***!
  \*******************************************************/
/*! exports provided: CounselorChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselorChatPage", function() { return CounselorChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var CounselorChatPage = /** @class */ (function () {
    function CounselorChatPage(route) {
        var _this = this;
        this.route = route;
        this.getUser = firebase__WEBPACK_IMPORTED_MODULE_3__["database"]().ref('User');
        this.userList = [];
        this.temphistory = [];
        this.FilterUserData = [];
        this.title = true;
        this.chatData = [{
                'name': 'Jovenica Alba',
                'image': '../../../../assets/chat/chat/chat1.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'count': '2',
                'time': '12:17',
                'call': '(3) January 09/27/2019',
                'video': 'videocam'
            }, {
                'name': 'Oliver',
                'image': ' ../../../../assets/chat/chat/chat2.jpg',
                'description': 'Rahim: thanks!',
                'time': '12:17',
                'call': '(3) January 09/26/2019',
                'video': 'videocam'
            }, {
                'name': 'George',
                'image': ' ../../../../assets/chat/chat/chat3.jpg',
                'description': 'Kajor P: share your contact please!',
                'count': '2',
                'time': 'Yesterday',
                'call': '(1) January 09/26/2018',
                'video': 'videocam'
            }, {
                'name': 'Harry',
                'image': ' ../../../../assets/chat/chat/chat3.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'time': 'Sunday',
                'call': '(5) February 08/20/2018',
                'video': 'videocam'
            }, {
                'name': 'Jack',
                'image': ' ../../../../assets/chat/chat/chat5.jpg',
                'description': 'Yes! that\'s right call him right now.',
                'past': '09/27/2015',
                'call': '(4) February 28/20/2018',
                'phone': 'call'
            }, {
                'name': 'Jacob',
                'image': ' ../../../../assets/chat/chat/chat6.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'count': '1',
                'past': '09/27/2015',
                'call': '(4) February 28/20/2015',
                'phone': 'call'
            }, {
                'name': 'Noah',
                'image': ' ../../../../assets/chat/chat/chat7.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/27/2015',
                'call': '(3) February 28/20/2016',
                'phone': 'call'
            }, {
                'name': 'Charlie',
                'image': ' ../../../../assets/chat/chat/chat8.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'count': '6',
                'past': '09/27/2015',
                'call': '(3) December 28/20/2017',
                'phone': 'call'
            }, {
                'name': 'Logan',
                'image': ' ../../../../assets/chat/chat/chat1.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/27/2015',
                'call': '09/27/2015',
                'phone': 'call'
            }, {
                'name': 'Harrison',
                'image': ' ../../../../assets/chat/chat/chat2.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/27/2015',
                'call': '09/27/2015',
                'video': 'videocam'
            }, {
                'name': 'Sebastian',
                'image': ' ../../../../assets/chat/chat/chat3.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/17/2016',
                'call': '(3) December 28/20/2017',
                'video': 'videocam'
            }, {
                'name': 'Zachary',
                'image': ' ../../../../assets/chat/chat/chat3.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/07/2017',
                'call': '09/27/2015',
                'video': 'videocam'
            }, {
                'name': 'Elijah',
                'image': ' ../../../../assets/chat/chat/chat5.jpg',
                'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                'past': '09/09/2018',
                'call': '09/27/2015',
                'phone': 'call'
            }
        ];
        this.getUser.on('value', function (resp) {
            _this.getUserList(resp);
        });
    }
    CounselorChatPage.prototype.ngOnInit = function () {
    };
    CounselorChatPage.prototype.segmentChanged = function (event) {
        this.segmentTab = event.detail.value;
        // console.log(this.segmentTab);
    };
    CounselorChatPage.prototype.goforChat = function (chat) {
        this.title = true;
        this.route.navigate(['classic', chat]);
    };
    CounselorChatPage.prototype.toggleSearchTitl = function () {
        this.title = !this.title;
    };
    CounselorChatPage.prototype.getUserList = function (snapshot) {
        var _this = this;
        this.userList = [];
        console.log('snapshot', snapshot);
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            _this.userList.push(item);
            _this.temphistory.push(item);
            console.log(_this.userList);
        });
    };
    CounselorChatPage.prototype.getHistory = function (ev) {
        var _this = this;
        var temp = [];
        this.searchhistory = ev.target.value;
        if (this.searchhistory) {
            this.userList = this.userList.filter(function (item) {
                if (item.username) {
                    if (item.username.toLowerCase().indexOf(_this.searchhistory.toLowerCase()) > -1) {
                        temp.push(item);
                        _this.FilterUserData = temp;
                    }
                }
            });
            if (this.userList.length <= 0) {
                this.userList = this.temphistory;
            }
        }
        else {
            this.FilterUserData = [];
            this.userList = this.temphistory;
        }
    };
    CounselorChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counselor-chat',
            template: __webpack_require__(/*! ./counselor-chat.page.html */ "./src/app/counselor-chat/counselor-chat.page.html"),
            styles: [__webpack_require__(/*! ./counselor-chat.page.scss */ "./src/app/counselor-chat/counselor-chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CounselorChatPage);
    return CounselorChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=counselor-chat-counselor-chat-module.js.map