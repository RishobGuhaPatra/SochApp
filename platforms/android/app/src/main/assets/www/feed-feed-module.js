(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/feed/feed.page.ts");







var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.page.html":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n      <ion-menu-button size=\"small\" color=\"dark\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-img src=\"assets/icon/LoGo.png\"></ion-img>\r\n    <ion-icon padding name=\"person-add\" slot=\"end\" (click)=\"counselorChat()\" fill=\"outline\" shape=\"round\" size=\"small\"\r\n      color=\"dark\"></ion-icon>\r\n    <ion-progress-bar *ngIf=\"!posts\" type=\"indeterminate\"></ion-progress-bar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding *ngIf=\"posts\">\r\n  <ion-card *ngFor=\"let post of posts;let i = index\">\r\n    <div *ngIf=\"post.image\">\r\n      <ion-img src=\"https://ucarecdn.com/{{ post.image }}/{{ scaleCrop }}/\"></ion-img>\r\n    </div>\r\n    <div *ngIf=\"post.audiourl\">\r\n      <audio controls>\r\n        <source [src]=\"post.audiourl\">\r\n        Your browser does not support the HTML5 Audio element.\r\n      </audio>\r\n    </div>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <div style=\"    display: flex;\r\n        align-items: center;\">\r\n          <ion-avatar><img *ngIf=\"post.profilephoto\"\r\n              src=\"https://ucarecdn.com/{{ post.profilephoto }}/{{ scaleCrop }}/ \" />\r\n            <img *ngIf=\"!post.profilephoto\" src=\"../../assets/icon/user.png\">\r\n          </ion-avatar>\r\n          <p style=\"    padding-left: 8px;\">{{post.username}}</p>\r\n        </div>\r\n        <ion-card-subtitle padding color=\"dark\">{{\r\n          post.author\r\n        }}</ion-card-subtitle>\r\n        <ion-icon name=\"share\" slot=\"end\" size=\"small\" (click)=\"share(post)\" color=\"warning\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-title padding>\r\n        {{ post.title }}\r\n      </ion-card-title>\r\n      <p padding>{{ post.desc }}</p>\r\n      <p padding *ngIf=\"post.posturl\" (click)=\"openurl(post.posturl)\">{{ post.posturl }}</p>\r\n      <ion-item lines=\"none\">\r\n        <ion-chip (click)=\"toggleHeart()\" color=\"warning\">\r\n          <ion-icon name=\"heart\" *ngIf=\"!post.islike\" size=\"small\" color=\"warning\" (click)=\"like(post,'like',i)\">\r\n          </ion-icon>\r\n          <ion-icon name=\"heart\" *ngIf=\"post.islike\" size=\"small\" color=\"warning\" (click)=\"like(post,'unlike',i)\">\r\n          </ion-icon>\r\n          <ion-label *ngIf=\"post.like && post.like.length > 0\">\r\n            {{ post.like.length }}\r\n          </ion-label>\r\n        </ion-chip>\r\n        <ion-chip (click)=\"toggleHeart()\" color=\"warning\">\r\n          <ion-icon name=\"heart-dislike\" *ngIf=\"post.isunlike\" size=\"small\" color=\"warning\"\r\n            (click)=\"unlike(post,'unlike',i)\">\r\n          </ion-icon>\r\n          <ion-icon name=\"heart-dislike\" *ngIf=\"!post.isunlike\" size=\"small\" color=\"warning\"\r\n            (click)=\"unlike(post,'like',i)\">\r\n          </ion-icon>\r\n          <ion-label *ngIf=\"post.unlike && post.unlike.length > 0\">\r\n            {{ post.unlike.length }}\r\n          </ion-label>\r\n        </ion-chip>\r\n        <ion-icon name=\"text\" slot=\"end\" color=\"warning\" (click)=\"commentopen(post,i)\"></ion-icon>\r\n      </ion-item>\r\n      <ion-card-content *ngIf=\"post.iscomment\">\r\n        <ion-chip [hidden]=\"!post.comment && post.comment.length < 0\" *ngFor=\"let comment of post.comment\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n          <label>{{comment.msg}}</label>\r\n        </ion-chip>\r\n        <ion-item line=\"none\">\r\n          <ion-chip outline=\"true\" color=\"tertiary\">\r\n            <ion-textarea placeholder=\"comment here\" [(ngModel)]=\"newComment\"></ion-textarea>\r\n          </ion-chip>\r\n          <ion-button slot=\"end\" (click)=\"addcomment(post)\">\r\n            <ion-icon name=\"send\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/feed/feed.page.scss":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/feed/feed.page.ts":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);


// import { AngularFireFunctions, AngularFireFunctionsModule } from "@angular/fire/functions";

// import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
// import { firestore } from "firebase/app";






var FeedPage = /** @class */ (function () {
    function FeedPage(
    // private aff: AngularFireFunctions,
    http, 
    // private afs: AngularFirestore,
    user, router, socialSharing, iab, db, changedetect) {
        this.http = http;
        this.user = user;
        this.router = router;
        this.socialSharing = socialSharing;
        this.iab = iab;
        this.db = db;
        this.changedetect = changedetect;
        this.getPost = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post');
        // postReference: AngularFirestoreDocument;
        this.heartType = "heart-empty";
    }
    FeedPage.prototype.ngOnInit = function () {
        this.user.presentLoading();
        // this.http
        //   .get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveFeed2")
        //   .subscribe(data => {
        //     console.log(JSON.parse(data["_body"]));
        //     this.posts = JSON.parse(data["_body"]);
        //     console.log(this.posts);
        //     if (this.posts.likes && this.posts.likes.length > 0){
        //       this.heartType = this.posts.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty';
        //     }
        //   });
    };
    FeedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.getPost.once('value', function (resp) {
                _this.getPostList(resp);
            });
        }, 2000);
    };
    FeedPage.prototype.getPostList = function (snapshot) {
        var _this = this;
        this.posts = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            if (item.poststatus == 1) {
                //   this.posts[index].iscomment = false;
                //   if (this.posts[index].comment) {
                var getcomment = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(item.key).child('comment');
                getcomment.once('value', function (resp) {
                    _this.getpostcomment(item, resp);
                });
            }
            if (item.like) {
                var getlike = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(item.key).child('like');
                getlike.once('value', function (resp) {
                    _this.getpostlike(item, resp);
                });
            }
            else {
                item.like = [];
            }
            if (item.unlike) {
                var getunlike = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(item.key).child('unlike');
                getunlike.once('value', function (resp) {
                    _this.getpostunlike(item, resp);
                });
            }
            else {
                item.unlike = [];
            }
            if (item.uid) {
                _this.db.object('User/' + item.uid).valueChanges().subscribe(function (data) {
                    item.profilephoto = data.profilePic;
                    item.username = data.username ? data.username : "";
                });
            }
            _this.posts.push(item);
            _this.posts = _this.posts.reverse();
            // for (let index = 0; index < this.posts.length; index++) {
            //   this.posts[index].iscomment = false;
            //   if (this.posts[index].comment) {
            //     let getcomment = firebase.database().ref('post').child(this.posts[index].key).child('comment');
            //     getcomment.once('value', resp => {
            //       this.getpostcomment(this.posts[index], resp);
            //     });
            //   }
            //   if (this.posts[index].like) {
            //     let getlike = firebase.database().ref('post').child(this.posts[index].key).child('like');
            //     getlike.once('value', resp => {
            //       this.getpostlike(this.posts[index], resp);
            //     });
            //   }
            //   else {
            //     this.posts[index].like = [];
            //   }
            //   if (this.posts[index].unlike) {
            //     let getunlike = firebase.database().ref('post').child(this.posts[index].key).child('unlike');
            //     getunlike.once('value', resp => {
            //       this.getpostunlike(this.posts[index], resp);
            //     });
            //   }
            //   else {
            //     this.posts[index].unlike = []
            //   }
            //   if (this.posts[index].uid) {
            //     this.db.object('User/' + this.posts[index].uid).valueChanges().subscribe((data: any) => {
            //       this.posts[index].profilephoto = data.profilePic;
            //       this.posts[index].username = data.username ? data.username : "";
            //     })
            //   }
            //   this.posts = this.posts.reverse();
            // }
            // }
        });
        this.user.dismissLoading();
    };
    FeedPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe;
    };
    FeedPage.prototype.getuserdetail = function (post, snapshot) {
        console.log(snapshot);
        var tempcomment = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            // item.key = childSnapshot.key;
            console.log(item);
            // tempcomment.push(item);
            // console.log(tempcomment);
        });
        post.profilephoto = tempcomment;
        console.log(this.posts);
    };
    FeedPage.prototype.getpostcomment = function (post, snapshot) {
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
    FeedPage.prototype.getpostlike = function (post, snapshot) {
        var tempcomment = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            tempcomment.push(item);
        });
        post.like = tempcomment;
        if (post.like && post.like.length > 0) {
            for (var index = 0; index < post.like.length; index++) {
                if (localStorage.getItem('userid') == post.like[index].uid) {
                    post.islike = true;
                }
                else {
                    // console.log("else");
                    post.islike = false;
                }
            }
        }
        else {
            // post.like = [];
        }
        if (tempcomment.length < 0) {
            post.islike = false;
            // post.like = [];
        }
        // console.log(this.posts);
    };
    FeedPage.prototype.getpostunlike = function (post, snapshot) {
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
                if (localStorage.getItem('userid') == post.unlike[index].uid) {
                    post.isunlike = true;
                }
                else {
                    // console.log("else");
                    post.isunlike = false;
                }
            }
        }
        else {
            // post.unlike = [];
        }
        if (tempcomment.length < 0) {
            post.isunlike = false;
        }
        // console.log(this.posts);
    };
    FeedPage.prototype.counselorChat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigate(["/counselor-chat"]);
                return [2 /*return*/];
            });
        });
    };
    FeedPage.prototype.commentopen = function (post, i) {
        console.log(post, i);
        if (this.posts[i].iscomment) {
            this.posts[i].iscomment = false;
        }
        else {
            this.posts[i].iscomment = true;
        }
        console.log(post);
    };
    FeedPage.prototype.toggleHeart = function () {
        // if (this.heartType == "heart-empty") {
        //   this.postReference.update({
        //     likes: firestore.FieldValue.arrayUnion(this.user.getUID())
        //   });
        // } else {
        //   this.postReference.update({
        //     likes: firestore.FieldValue.arrayRemove(this.user.getUID())
        //   });
        // }
    };
    FeedPage.prototype.addcomment = function (post) {
        var _this = this;
        var payload = {
            msg: this.newComment,
            uid: localStorage.getItem('userid')
        };
        // console.log(payload);
        // console.log(post);
        var resdata = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(post.key).child('comment').push(payload).then(function (res) {
            post.comment.push({
                uid: localStorage.getItem('userid'),
                key: res.key,
                msg: _this.newComment
            });
            console.log(post);
            _this.newComment = '';
        });
        // console.log(resdata);
    };
    FeedPage.prototype.like = function (post, status, id) {
        var _this = this;
        console.log("li", id);
        console.log(post);
        if (status == 'like') {
            var resdata = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(post.key).child('like').push({
                uid: localStorage.getItem('userid')
            }).then(function (res) {
                console.log("like", res);
                console.log(_this.posts[id]);
                _this.posts[id].like.push({
                    uid: localStorage.getItem('userid'),
                    key: res.key
                });
                console.log(_this.posts[id]);
                console.log(_this.posts);
                post.islike = true;
            });
            // console.log(resdata);
        }
        else {
            var _loop_1 = function (index) {
                if (localStorage.getItem('userid') == post.like[index].uid) {
                    console.log(post.like[index].key);
                    console.log(index);
                    var resdata = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(post.key).child('like').child(post.like[index].key).remove().then(function (res) {
                        console.log(_this.posts[id].like);
                        _this.posts[id].like.splice(index, 1);
                        // this.changedetect.detach();
                        post.islike = false;
                        console.log(_this.posts[id].like);
                        console.log(post);
                        // for (let i = 0; i < this.posts[id].like.length; i++) {
                        //   console.log(this.posts[id].like[i]);
                        //   if (localStorage.getItem('userid') == this.posts[id].like[i].uid) {
                        //     console.log("inside if");
                        //     console.log(i);
                        //     console.log(this.posts[id].like);
                        //     this.posts[id].like.splice(i, 0)
                        //     console.log(this.posts[id]);
                        //   }
                        //   post.islike = false;
                        // }
                    });
                    // console.log(resdata);
                }
            };
            // this.posts[id].like.splice(1, 0)
            for (var index = 0; index < post.like.length; index++) {
                _loop_1(index);
            }
        }
    };
    FeedPage.prototype.unlike = function (post, status, id) {
        var _this = this;
        console.log(post, status, id);
        if (status == 'like') {
            var resdata = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(post.key).child('unlike').push({
                uid: localStorage.getItem('userid')
            }).then(function (res) {
                _this.posts[id].unlike.push({
                    uid: localStorage.getItem('userid'),
                    key: res.key
                });
            });
            post.isunlike = true;
        }
        else {
            for (var index = 0; index < post.unlike.length; index++) {
                if (localStorage.getItem('userid') == post.unlike[index].uid) {
                    // console.log(post.unlike[index].key);
                    // console.log(post.key);
                    var resdata = firebase__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('post').child(post.key).child('unlike').child(post.unlike[index].key).remove();
                    this.posts[id].unlike.splice(index, 1);
                    post.isunlike = false;
                    // console.log(resdata);
                }
            }
        }
    };
    FeedPage.prototype.share = function (post) {
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
    FeedPage.prototype.openurl = function (url) {
        var browser = this.iab.create(url);
    };
    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-feed",
            template: __webpack_require__(/*! ./feed.page.html */ "./src/app/feed/feed.page.html"),
            styles: [__webpack_require__(/*! ./feed.page.scss */ "./src/app/feed/feed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ })

}]);
//# sourceMappingURL=feed-feed-module.js.map