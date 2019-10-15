(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");
/* harmony import */ var _share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share.module */ "./src/app/share.module.ts");








var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"]
            ],
            declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/app/post/post.page.html":
/*!*************************************!*\
  !*** ./src/app/post/post.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar *ngIf=\"post as postData\">\r\n\t\t<ion-title>{{ postData.author }}'s Post</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n\t<app-loading *ngIf=\"!post\"></app-loading>\r\n\r\n\t<ion-card *ngIf=\"post as postData\">\r\n\t\t<ion-img src=\"https://ucarecdn.com/{{ postID }}/-/preview/{{ effect }}\"></ion-img>\r\n\t\t<ion-card-title padding>\r\n\t\t\t<p>{{ postData.title }}</p>\r\n\t\t</ion-card-title>\r\n\t\t<ion-card-content>\r\n\t\t\t<p>{{ postData.desc }}</p>\r\n\t\t</ion-card-content>\r\n\t\t<ion-item (click)=\"toggleHeart()\">\r\n\t\t\t<ion-icon [name]=\"heartType\"></ion-icon>\r\n\t\t</ion-item>\r\n\t</ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

// import { firestore } from 'firebase/app'
var PostPage = /** @class */ (function () {
    function PostPage(route, 
    // private afs: AngularFirestore,
    user) {
        this.route = route;
        this.user = user;
        this.effect = '';
        this.heartType = "heart-empty";
    }
    PostPage.prototype.ngOnInit = function () {
        this.postID = this.route.snapshot.paramMap.get('id');
        // this.postReference = this.afs.doc(`posts/${this.postID}`)
        // this.sub = this.postReference.valueChanges().subscribe(val => {
        // 	this.post = val
        // 	this.effect = val.effect
        // 	this.heartType = val.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty'
        // })
    };
    PostPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostPage.prototype.toggleHeart = function () {
        // if(this.heartType == 'heart-empty') {
        // 	this.postReference.update({
        // 		likes: firestore.FieldValue.arrayUnion(this.user.getUID())
        // 	})
        // } else {
        // 	this.postReference.update({
        // 		likes: firestore.FieldValue.arrayRemove(this.user.getUID())
        // 	})
        // }
    };
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.page.html */ "./src/app/post/post.page.html"),
            styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PostPage);
    return PostPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-post-module.js.map