(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-notes-session-notes-module"],{

/***/ "./src/app/session-notes/session-notes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/session-notes/session-notes.module.ts ***!
  \*******************************************************/
/*! exports provided: SessionNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNotesPageModule", function() { return SessionNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _session_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-notes.page */ "./src/app/session-notes/session-notes.page.ts");







var routes = [
    {
        path: '',
        component: _session_notes_page__WEBPACK_IMPORTED_MODULE_6__["SessionNotesPage"]
    }
];
var SessionNotesPageModule = /** @class */ (function () {
    function SessionNotesPageModule() {
    }
    SessionNotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_session_notes_page__WEBPACK_IMPORTED_MODULE_6__["SessionNotesPage"]]
        })
    ], SessionNotesPageModule);
    return SessionNotesPageModule;
}());



/***/ }),

/***/ "./src/app/session-notes/session-notes.page.html":
/*!*******************************************************!*\
  !*** ./src/app/session-notes/session-notes.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\" >\r\n          <ion-back-button defaultHref=\"counsellor-tab/clients\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>{{ClientDetail.name?ClientDetail.name:ClientDetail.username}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item  lines=\"none\">\r\n        <ion-datetime slot=\"end\" class=\"small\" displayFormat=\"MMM DD, h:mm A\" [(ngModel)]=\"sessionNote.myDate\" ></ion-datetime>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-card-title>\r\n          <ion-input padding placeholder=\"Session Title\" class=\"textbox\" [(ngModel)]=\"sessionNote.title\" >\r\n          </ion-input>\r\n        </ion-card-title>\r\n      </ion-item>\r\n\r\n      <ion-text color=\"primary\"> <h2>Data</h2></ion-text>\r\n      <ion-textarea text-wrap padding auto-grow=\"true\" placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"sessionNote.data\"\r\n      ></ion-textarea>\r\n\r\n      <ion-text color=\"primary\"> <h2>Assesment</h2></ion-text>\r\n      <ion-textarea auto-grow=\"true\" text-wrap padding placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"sessionNote.assesment\"></ion-textarea>\r\n      <ion-text color=\"primary\"> <h2>Plan</h2></ion-text>\r\n      <ion-textarea auto-grow=\"true\" text-wrap padding placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"sessionNote.plan\"></ion-textarea>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" (click)=\"uploadFile()\" class=\"icons\" name=\"camera\"></ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"!ispause\" (click)=\"startRecord()\" class=\"icons\" name=\"microphone\">\r\n            </ion-icon>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"ispause\" (click)=\"stopRecord()\" class=\"icons\" name=\"pause\">\r\n            </ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n          <ion-col (click)=\"addFile()\">\r\n            <ion-icon padding color=\"primary\" class=\"icons\" name=\"document\"></ion-icon>\r\n            <input type=\"file\"  class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-range min=\"0\" max=\"100\" step=\"2\" [(ngModel)]=\"sessionNote.rating\">\r\n        <ion-icon size=\"small\" slot=\"start\" name=\"sad\"></ion-icon>\r\n        <ion-icon slot=\"end\" name=\"happy\"></ion-icon>\r\n      </ion-range>\r\n      <ion-button expand=\"block\" color=\"primary\" (click)=\"save()\">\r\n        <ion-icon name=\"save\"></ion-icon> Save\r\n      </ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngFor=\"let key of NotesList\">\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-datetime slot=\"end\" class=\"small\" displayFormat=\"MMM DD, h:mm A\" [(ngModel)]=\"key.myDate\" readonly></ion-datetime>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-card-title>\r\n          <ion-input padding placeholder=\"Session Title\" class=\"textbox\" [(ngModel)]=\"key.title\" readonly>\r\n          </ion-input>\r\n        </ion-card-title>\r\n      </ion-item>\r\n      \r\n      <ion-text color=\"primary\"> <h2>Data</h2></ion-text>\r\n      <ion-textarea text-wrap padding auto-grow=\"true\" placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"key.data\" readonly\r\n      ></ion-textarea>\r\n\r\n      <ion-text color=\"primary\"> <h2>Assesment</h2></ion-text>\r\n      <ion-textarea auto-grow=\"true\" text-wrap padding placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"key.assesment\" readonly></ion-textarea>\r\n      <ion-text color=\"primary\"> <h2>Plan</h2></ion-text>\r\n      <ion-textarea auto-grow=\"true\" text-wrap padding placeholder=\"Write notes here..\" class=\"textbox\" [(ngModel)]=\"key.plan\" readonly></ion-textarea>\r\n      <div *ngIf=\"key.audiourl\">\r\n        <audio controls>\r\n          <source [src]=\"key.audiourl\">\r\n          Your browser does not support the HTML5 Audio element.\r\n        </audio>\r\n      </div>\r\n      <div class=\"sessionImage\" *ngIf=\"key.image\">\r\n        <ion-img  src=\"https://ucarecdn.com/{{ key.image }}/{{ scaleCrop }}/\"></ion-img>\r\n      </div>\r\n      <ion-label *ngIf=\"key.doc\" (click)=\"openfile(key.doc)\">Open Document</ion-label>\r\n      <!-- <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" (click)=\"uploadFile()\" class=\"icons\" name=\"camera\"></ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"!ispause\" (click)=\"startRecord()\" class=\"icons\" name=\"microphone\">\r\n            </ion-icon>\r\n            <ion-icon padding color=\"primary\" *ngIf=\"ispause\" (click)=\"stopRecord()\" class=\"icons\" name=\"pause\">\r\n            </ion-icon>\r\n            <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\" class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n          <ion-col (click)=\"addFile()\">\r\n            <ion-icon padding color=\"primary\" class=\"icons\" name=\"document\"></ion-icon>\r\n            <input type=\"file\"  class=\"filebtn\" #fileButton/>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid> -->\r\n      <ion-text color=\"primary\"> <h2>Rating : {{(key.rating)/10}}</h2></ion-text>\r\n     \r\n     \r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/session-notes/session-notes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/session-notes/session-notes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em; }\n\n.small {\n  font-size: 6pt; }\n\n.date {\n  max-height: 1rem; }\n\nion-datetime {\n  position: relative; }\n\n.sessionImage ion-img {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi1ub3Rlcy9EOlxcaW9uaWNQcm9qZWN0XFxTb2NoLTEuMC9zcmNcXGFwcFxcc2Vzc2lvbi1ub3Rlc1xcc2Vzc2lvbi1ub3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2I7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBRUUsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Vzc2lvbi1ub3Rlcy9zZXNzaW9uLW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlYnRuIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0xMDBlbTtcclxuXHRsZWZ0OiAtMTAwZW07XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDZwdDtcclxufVxyXG4uZGF0ZXtcclxuICAgIG1heC1oZWlnaHQ6IDFyZW07XHJcbn1cclxuaW9uLWRhdGV0aW1le1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2Vzc2lvbkltYWdle1xyXG5cdGlvbi1pbWd7XHJcblx0XHR3aWR0aDo1MHB4O1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/session-notes/session-notes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/session-notes/session-notes.page.ts ***!
  \*****************************************************/
/*! exports provided: SessionNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNotesPage", function() { return SessionNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);















var SessionNotesPage = /** @class */ (function () {
    function SessionNotesPage(route, alertCtrl, toastCtrl, router, db, afStorage, file, fileChooser, plt, filePicker, media, http, ft, fileOpener, document) {
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.db = db;
        this.afStorage = afStorage;
        this.file = file;
        this.fileChooser = fileChooser;
        this.plt = plt;
        this.filePicker = filePicker;
        this.media = media;
        this.http = http;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.sessionNote = {
            myDate: new Date().toISOString(),
            title: '',
            clientId: '0',
            data: '',
            assesment: '',
            plan: '',
            audiourl: '',
            doc: '',
            image: '',
            rating: 0,
            submitTime: new Date().toLocaleString(),
            cid: ''
        };
        this.ispause = false;
        this.busy = false;
        this.NotesList = [];
        this.effects = {
            effect1: "",
            effect2: "-/exposure/50/-/saturation/50/-/warmth/-30/",
            effect3: "-/filter/vevera/150/",
            effect4: "-/filter/carris/150/",
            effect5: "-/filter/misiara/150/"
        };
        this.scaleCrop = "-/scale_crop/200x200";
        this.PersonData = JSON.parse(localStorage.getItem('LoggedInUserData'));
        this.sessionNote.cid = this.PersonData.uid;
        // this.getClientList().then((data:any)=>{
        //   if(data){
        //     for(var key in data){
        //       if(this.PersonData.uid==data[key].defaultcounseller){
        //         this.ClientList.push(data[key])
        //       }
        //     }
        //     console.log(this.ClientList)
        //   }
        // })
    }
    SessionNotesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                console.log(params.id);
                _this.sessionNote.clientId = params.id;
                firebase__WEBPACK_IMPORTED_MODULE_14__["database"]().ref('User').child(params.id).once('value', function (snap) {
                    _this.ClientDetail = snap.val();
                });
                firebase__WEBPACK_IMPORTED_MODULE_14__["database"]().ref('sessionNotes').child(_this.PersonData.uid).child(_this.sessionNote.clientId).on('value', function (snapshot) {
                    var data = snapshot.val();
                    for (var key in data) {
                        _this.NotesList.push(data[key]);
                    }
                    console.log(_this.NotesList);
                });
            }
        });
    };
    SessionNotesPage.prototype.getClientList = function () {
        return new Promise(function (resolve) {
            firebase__WEBPACK_IMPORTED_MODULE_14__["database"]().ref('User').on('value', function (snap) {
                var data = snap.val();
                resolve(data);
            });
        });
    };
    SessionNotesPage.prototype.addFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.plt.is('android')) {
                    this.fileChooser.open()
                        .then(function (uri) {
                        // alert(uri)
                        _this.file.resolveLocalFilesystemUrl(uri).then(function (newUri) {
                            // alert(JSON.stringify(newUri))
                            var dirPath = newUri.nativeURL;
                            var dirPathSegments = dirPath.split('/');
                            dirPathSegments.pop();
                            dirPath = dirPathSegments.join('/');
                            _this.file.readAsArrayBuffer(dirPath, newUri.name).then(function (buffer) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.upload(buffer, newUri.name)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                    })
                        .catch(function (e) { return _this.presentToast('Please try again'); });
                }
                else if (this.plt.is('ios')) {
                    this.filePicker.pickFile()
                        .then(function (uri) {
                        // alert(uri)
                        _this.file.resolveLocalFilesystemUrl(uri).then(function (newUri) {
                            // alert(JSON.stringify(newUri))
                            var dirPath = newUri.nativeURL;
                            var dirPathSegments = dirPath.split('/');
                            dirPathSegments.pop();
                            dirPath = dirPathSegments.join('/');
                            _this.file.readAsArrayBuffer(dirPath, newUri.name).then(function (buffer) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.upload(buffer, newUri.name)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                    })
                        .catch(function (err) { return _this.presentToast('Please try again'); });
                }
                else {
                    this.presentToast('Platform is not Suppported for this feature.');
                }
                return [2 /*return*/];
            });
        });
    };
    SessionNotesPage.prototype.upload = function (buffer, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var blob, fileName;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                blob = new Blob([buffer], { type: "application/pdf" });
                fileName = new Date().toISOString() + '__' + name;
                firebase__WEBPACK_IMPORTED_MODULE_14__["storage"]().ref('sessionDocument/' + fileName).put(blob).then(function (d) {
                    firebase__WEBPACK_IMPORTED_MODULE_14__["storage"]().ref('sessionDocument').child(fileName).getDownloadURL().then(function (url) {
                        alert("log1: " + url);
                        _this.sessionNote.doc = url;
                    });
                    alert('Done');
                }).catch(function (error) {
                    alert(JSON.stringify(error));
                });
                return [2 /*return*/];
            });
        });
    };
    SessionNotesPage.prototype.openfile = function (PdfFile) {
        //   this.fileOpener.open('https://firebasestorage.googleapis.com/v0/b/soch-fac74.appspot.com/o/sessionDocument%2F2019-08-27T18%3A59%3A32.608ZSOCH%20NDA.pdf?alt=media&token=b57bb6fd-c905-49d6-8f67-0c9c04ac8634', 'application/pdf')
        // .then(() => alert('File is opened'))
        // .catch(e => alert('Error opening file'+ e));
        var _this = this;
        var downloadUrl = PdfFile;
        var path = this.file.dataDirectory;
        var transfer = this.ft.create();
        transfer.download(downloadUrl, path + 'myfile.pdf').then(function (entry) {
            var url = entry.toURL();
            if (_this.plt.is('ios')) {
                _this.document.viewDocument(url, 'application/pdf', {});
            }
            else {
                _this.fileOpener.open(url, 'application/pdf')
                    .then(function () { return alert('File is opened'); })
                    .catch(function (e) { return alert('Error opening file' + e); });
            }
        });
    };
    SessionNotesPage.prototype.startRecord = function () {
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
    SessionNotesPage.prototype.stopRecord = function () {
        var _this = this;
        this.ispause = false;
        this.audio.stopRecord();
        this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then(function (file) {
            var voiceRef = firebase__WEBPACK_IMPORTED_MODULE_14__["storage"]().ref('audio').child(_this.fileName).putString(file, firebase__WEBPACK_IMPORTED_MODULE_14__["storage"].StringFormat.DATA_URL).then(function (res) {
                // console.log(res);
                firebase__WEBPACK_IMPORTED_MODULE_14__["storage"]().ref('audio').child(_this.fileName).getDownloadURL().then(function (url) {
                    // console.log("log1: " + url);
                    _this.audiourltest = url;
                    _this.sessionNote.audiourl = url;
                    // console.log(this.audiourltest);
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    // saveaudio(){
    //   return new Promise((resolve)=>{
    //     this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then((file) => {
    //       let voiceRef = firebase.storage().ref('audio').child(this.fileName).putString(file, firebase.storage.StringFormat.DATA_URL).then(res => {
    //         firebase.storage().ref('audio').child(this.fileName).getDownloadURL().then(url => {
    //           this.audiourltest = url;
    //           this.sessionNote.audiourl=url;
    //           resolve(true)
    //         })
    //       }, err => {
    //         console.log(err);
    //       });
    //     })
    //   })
    // }
    SessionNotesPage.prototype.uploadFile = function () {
        this.fileButton.nativeElement.click();
    };
    SessionNotesPage.prototype.fileChanged = function (event) {
        var _this = this;
        this.busy = true;
        var files = event.target.files;
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            var uuid = event.json().file;
            _this.sessionNote.image = uuid;
            _this.busy = false;
            // this.mainuser.update({
            // 	profilePic: uuid
            // })
        });
    };
    SessionNotesPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionNotesPage.prototype.save = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_14__["database"]().ref('sessionNotes').child(this.PersonData.uid).child(this.sessionNote.clientId).push(this.sessionNote).then(function (x) {
            _this.presentToast('Session Note Saved');
            _this.router.navigate(["/counsellor-tab/clients"]);
        });
        console.log(this.sessionNote);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileButton"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionNotesPage.prototype, "fileButton", void 0);
    SessionNotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-notes',
            template: __webpack_require__(/*! ./session-notes.page.html */ "./src/app/session-notes/session-notes.page.html"),
            styles: [__webpack_require__(/*! ./session-notes.page.scss */ "./src/app/session-notes/session-notes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["IOSFilePicker"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_13__["Media"],
            _angular_http__WEBPACK_IMPORTED_MODULE_10__["Http"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["DocumentViewer"]])
    ], SessionNotesPage);
    return SessionNotesPage;
}());



/***/ })

}]);
//# sourceMappingURL=session-notes-session-notes-module.js.map