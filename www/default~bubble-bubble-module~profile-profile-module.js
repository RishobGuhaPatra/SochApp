(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bubble-bubble-module~profile-profile-module"],{

/***/ "./node_modules/@angular/fire/database/database.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/fire/database/database.js ***!
  \*********************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return AngularFireDatabase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/utils.js");
/* harmony import */ var _list_create_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/create-reference */ "./node_modules/@angular/fire/database/list/create-reference.js");
/* harmony import */ var _object_create_reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object/create-reference */ "./node_modules/@angular/fire/database/object/create-reference.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _angular_fire__WEBPACK_IMPORTED_MODULE_4__["RealtimeDatabaseURL"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AngularFireDatabase = (function () {
    function AngularFireDatabase(options, nameOrConfig, databaseURL, platformId, zone) {
        this.scheduler = new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["FirebaseZoneScheduler"](zone, platformId);
        this.database = zone.runOutsideAngular(function () {
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["_firebaseAppFactory"])(options, nameOrConfig);
            return app.database(databaseURL || undefined);
        });
    }
    AngularFireDatabase.prototype.list = function (pathOrRef, queryFn) {
        var ref = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRef"])(this.database, pathOrRef);
        var query = ref;
        if (queryFn) {
            query = queryFn(ref);
        }
        return Object(_list_create_reference__WEBPACK_IMPORTED_MODULE_2__["createListReference"])(query, this);
    };
    AngularFireDatabase.prototype.object = function (pathOrRef) {
        var ref = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRef"])(this.database, pathOrRef);
        return Object(_object_create_reference__WEBPACK_IMPORTED_MODULE_3__["createObjectReference"])(ref, this);
    };
    AngularFireDatabase.prototype.createPushId = function () {
        return this.database.ref().push().key;
    };
    AngularFireDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FirebaseOptionsToken"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FirebaseNameOrConfigToken"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["RealtimeDatabaseURL"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, Object, Object, Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AngularFireDatabase);
    return AngularFireDatabase;
}());


//# sourceMappingURL=database.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/database.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/fire/database/database.module.js ***!
  \****************************************************************/
/*! exports provided: AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return AngularFireDatabaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./node_modules/@angular/fire/database/database.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularFireDatabaseModule = (function () {
    function AngularFireDatabaseModule() {
    }
    AngularFireDatabaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]]
        })
    ], AngularFireDatabaseModule);
    return AngularFireDatabaseModule;
}());

//# sourceMappingURL=database.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/fire/database/index.js ***!
  \******************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL, listChanges, createListReference, snapshotChanges, stateChanges, auditTrail, fromRef, AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/database/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["createListReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["stateChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["auditTrail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabaseModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/audit-trail.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/audit-trail.js ***!
  \*****************************************************************/
/*! exports provided: auditTrail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return auditTrail; });
/* harmony import */ var _state_changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state-changes */ "./node_modules/@angular/fire/database/list/state-changes.js");
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



function auditTrail(query, events) {
    var auditTrail$ = Object(_state_changes__WEBPACK_IMPORTED_MODULE_0__["stateChanges"])(query, events)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (current, action) { return current.concat([action]); }, []));
    return waitForLoaded(query, auditTrail$);
}
function loadedData(query) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_1__["fromRef"])(query, 'value')
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
        var lastKeyToLoad;
        data.payload.forEach(function (child) {
            lastKeyToLoad = child.key;
            return false;
        });
        return { data: data, lastKeyToLoad: lastKeyToLoad };
    }));
}
function waitForLoaded(query, action$) {
    var loaded$ = loadedData(query);
    return loaded$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(action$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var loaded = _a[0], actions = _a[1];
        var lastKeyToLoad = loaded.lastKeyToLoad;
        var loadedKeys = actions.map(function (snap) { return snap.key; });
        return { actions: actions, lastKeyToLoad: lastKeyToLoad, loadedKeys: loadedKeys };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(function (meta) { return meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (meta) { return meta.actions; }));
}
//# sourceMappingURL=audit-trail.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/changes.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/changes.js ***!
  \*************************************************************/
/*! exports provided: listChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return listChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/observable/fromRef.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/utils.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




function listChanges(ref, events) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(ref, 'value', 'once').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (snapshotAction) {
        var childEvent$ = [Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(snapshotAction)];
        events.forEach(function (event) { return childEvent$.push(Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(ref, event)); });
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, childEvent$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(buildView, []));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
}
function positionFor(changes, key) {
    var len = changes.length;
    for (var i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
            return i;
        }
    }
    return -1;
}
function positionAfter(changes, prevKey) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isNil"])(prevKey)) {
        return 0;
    }
    else {
        var i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
function buildView(current, action) {
    var payload = action.payload, type = action.type, prevKey = action.prevKey, key = action.key;
    var currentKeyPosition = positionFor(current, key);
    var afterPreviousKeyPosition = positionAfter(current, prevKey);
    switch (action.type) {
        case 'value':
            if (action.payload && action.payload.exists()) {
                var prevKey_1 = null;
                action.payload.forEach(function (payload) {
                    var action = { payload: payload, type: 'value', prevKey: prevKey_1, key: payload.key };
                    prevKey_1 = payload.key;
                    current = current.concat([action]);
                    return false;
                });
            }
            return current;
        case 'child_added':
            if (currentKeyPosition > -1) {
                var previous = current[currentKeyPosition - 1];
                if ((previous && previous.key || null) != prevKey) {
                    current = current.filter(function (x) { return x.payload.key !== payload.key; });
                    current.splice(afterPreviousKeyPosition, 0, action);
                }
            }
            else if (prevKey == null) {
                return [action].concat(current);
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, action);
            }
            return current;
        case 'child_removed':
            return current.filter(function (x) { return x.payload.key !== payload.key; });
        case 'child_changed':
            return current.map(function (x) { return x.payload.key === key ? action : x; });
        case 'child_moved':
            if (currentKeyPosition > -1) {
                var data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        default:
            return current;
    }
}
//# sourceMappingURL=changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/create-reference.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/create-reference.js ***!
  \**********************************************************************/
/*! exports provided: createListReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return createListReference; });
/* harmony import */ var _snapshot_changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snapshot-changes */ "./node_modules/@angular/fire/database/list/snapshot-changes.js");
/* harmony import */ var _state_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-changes */ "./node_modules/@angular/fire/database/list/state-changes.js");
/* harmony import */ var _audit_trail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-trail */ "./node_modules/@angular/fire/database/list/audit-trail.js");
/* harmony import */ var _data_operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-operation */ "./node_modules/@angular/fire/database/list/data-operation.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove */ "./node_modules/@angular/fire/database/list/remove.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






function createListReference(query, afDatabase) {
    return {
        query: query,
        update: Object(_data_operation__WEBPACK_IMPORTED_MODULE_3__["createDataOperationMethod"])(query.ref, 'update'),
        set: Object(_data_operation__WEBPACK_IMPORTED_MODULE_3__["createDataOperationMethod"])(query.ref, 'set'),
        push: function (data) { return query.ref.push(data); },
        remove: Object(_remove__WEBPACK_IMPORTED_MODULE_4__["createRemoveMethod"])(query.ref),
        snapshotChanges: function (events) {
            var snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"])(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$));
        },
        stateChanges: function (events) {
            var stateChanges$ = Object(_state_changes__WEBPACK_IMPORTED_MODULE_1__["stateChanges"])(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(stateChanges$));
        },
        auditTrail: function (events) {
            var auditTrail$ = Object(_audit_trail__WEBPACK_IMPORTED_MODULE_2__["auditTrail"])(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(auditTrail$));
        },
        valueChanges: function (events) {
            var snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_0__["snapshotChanges"])(query, events);
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) { return a.payload.val(); }); }));
        }
    };
}
//# sourceMappingURL=create-reference.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/data-operation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/data-operation.js ***!
  \********************************************************************/
/*! exports provided: createDataOperationMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataOperationMethod", function() { return createDataOperationMethod; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/utils.js");

function createDataOperationMethod(ref, operation) {
    return function dataOperation(item, value) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkOperationCases"])(item, {
            stringCase: function () { return ref.child(item)[operation](value); },
            firebaseCase: function () { return item[operation](value); },
            snapshotCase: function () { return item.ref[operation](value); }
        });
    };
}
//# sourceMappingURL=data-operation.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/remove.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/remove.js ***!
  \************************************************************/
/*! exports provided: createRemoveMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRemoveMethod", function() { return createRemoveMethod; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/utils.js");

function createRemoveMethod(ref) {
    return function remove(item) {
        if (!item) {
            return ref.remove();
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkOperationCases"])(item, {
            stringCase: function () { return ref.child(item).remove(); },
            firebaseCase: function () { return item.remove(); },
            snapshotCase: function () { return item.ref.remove(); }
        });
    };
}
//# sourceMappingURL=remove.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/snapshot-changes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/snapshot-changes.js ***!
  \**********************************************************************/
/*! exports provided: snapshotChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return snapshotChanges; });
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changes */ "./node_modules/@angular/fire/database/list/changes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/list/utils.js");


function snapshotChanges(query, events) {
    events = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["validateEventsArray"])(events);
    return Object(_changes__WEBPACK_IMPORTED_MODULE_0__["listChanges"])(query, events);
}
//# sourceMappingURL=snapshot-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/state-changes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/state-changes.js ***!
  \*******************************************************************/
/*! exports provided: stateChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return stateChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/observable/fromRef.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@angular/fire/database/list/utils.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



function stateChanges(query, events) {
    events = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["validateEventsArray"])(events);
    var childEvent$ = events.map(function (event) { return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(query, event); });
    return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, childEvent$);
}
//# sourceMappingURL=state-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/list/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/fire/database/list/utils.js ***!
  \***********************************************************/
/*! exports provided: validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@angular/fire/database/utils.js");

function validateEventsArray(events) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNil"])(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
    }
    return events;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/object/create-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/object/create-reference.js ***!
  \************************************************************************/
/*! exports provided: createObjectReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectReference", function() { return createObjectReference; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _snapshot_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snapshot-changes */ "./node_modules/@angular/fire/database/object/snapshot-changes.js");


function createObjectReference(query, afDatabase) {
    return {
        query: query,
        snapshotChanges: function () {
            var snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_1__["createObjectSnapshotChanges"])(query)();
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$));
        },
        update: function (data) { return query.ref.update(data); },
        set: function (data) { return query.ref.set(data); },
        remove: function () { return query.ref.remove(); },
        valueChanges: function () {
            var snapshotChanges$ = Object(_snapshot_changes__WEBPACK_IMPORTED_MODULE_1__["createObjectSnapshotChanges"])(query)();
            return afDatabase.scheduler.keepUnstableUntilFirst(afDatabase.scheduler.runOutsideAngular(snapshotChanges$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) { return action.payload.exists() ? action.payload.val() : null; }));
        },
    };
}
//# sourceMappingURL=create-reference.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/object/snapshot-changes.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/fire/database/object/snapshot-changes.js ***!
  \************************************************************************/
/*! exports provided: createObjectSnapshotChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectSnapshotChanges", function() { return createObjectSnapshotChanges; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/database/observable/fromRef.js");

function createObjectSnapshotChanges(query) {
    return function snapshotChanges() {
        return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromRef"])(query, 'value');
    };
}
//# sourceMappingURL=snapshot-changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/observable/fromRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/fire/database/observable/fromRef.js ***!
  \*******************************************************************/
/*! exports provided: fromRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function fromRef(ref, event, listenType) {
    if (listenType === void 0) { listenType = 'on'; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var fn = ref[listenType](event, function (snapshot, prevKey) {
            subscriber.next({ snapshot: snapshot, prevKey: prevKey });
            if (listenType == 'once') {
                subscriber.complete();
            }
        }, subscriber.error.bind(subscriber));
        if (listenType == 'on') {
            return { unsubscribe: function () { ref.off(event, fn); } };
        }
        else {
            return { unsubscribe: function () { } };
        }
    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (payload) {
        var snapshot = payload.snapshot, prevKey = payload.prevKey;
        var key = null;
        if (snapshot.exists()) {
            key = snapshot.key;
        }
        return { type: event, payload: snapshot, prevKey: prevKey, key: key };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
}
//# sourceMappingURL=fromRef.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/public_api.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/fire/database/public_api.js ***!
  \***********************************************************/
/*! exports provided: AngularFireDatabase, RealtimeDatabaseURL, listChanges, createListReference, snapshotChanges, stateChanges, auditTrail, fromRef, AngularFireDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./node_modules/@angular/fire/database/database.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _database__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony import */ var _list_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/changes */ "./node_modules/@angular/fire/database/list/changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listChanges", function() { return _list_changes__WEBPACK_IMPORTED_MODULE_1__["listChanges"]; });

/* harmony import */ var _list_create_reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/create-reference */ "./node_modules/@angular/fire/database/list/create-reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createListReference", function() { return _list_create_reference__WEBPACK_IMPORTED_MODULE_2__["createListReference"]; });

/* harmony import */ var _list_snapshot_changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/snapshot-changes */ "./node_modules/@angular/fire/database/list/snapshot-changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotChanges", function() { return _list_snapshot_changes__WEBPACK_IMPORTED_MODULE_3__["snapshotChanges"]; });

/* harmony import */ var _list_state_changes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/state-changes */ "./node_modules/@angular/fire/database/list/state-changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stateChanges", function() { return _list_state_changes__WEBPACK_IMPORTED_MODULE_4__["stateChanges"]; });

/* harmony import */ var _list_audit_trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/audit-trail */ "./node_modules/@angular/fire/database/list/audit-trail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTrail", function() { return _list_audit_trail__WEBPACK_IMPORTED_MODULE_5__["auditTrail"]; });

/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observable/fromRef */ "./node_modules/@angular/fire/database/observable/fromRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__["fromRef"]; });

/* harmony import */ var _database_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database.module */ "./node_modules/@angular/fire/database/database.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function() { return _database_module__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"]; });









//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/database/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/fire/database/utils.js ***!
  \******************************************************/
/*! exports provided: isString, isFirebaseDataSnapshot, isNil, isFirebaseRef, getRef, checkOperationCases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirebaseDataSnapshot", function() { return isFirebaseDataSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirebaseRef", function() { return isFirebaseRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOperationCases", function() { return checkOperationCases; });
function isString(value) {
    return typeof value === 'string';
}
function isFirebaseDataSnapshot(value) {
    return typeof value.exportVal === 'function';
}
function isNil(obj) {
    return obj === undefined || obj === null;
}
function isFirebaseRef(value) {
    return typeof value.set === 'function';
}
function getRef(database, pathRef) {
    return isFirebaseRef(pathRef) ? pathRef
        : database.ref(pathRef);
}
function checkOperationCases(item, cases) {
    if (isString(item)) {
        return cases.stringCase();
    }
    else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
    }
    else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
    }
    throw new Error("Expects a string, snapshot, or reference. Got: " + typeof item);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/angularfire2/database/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/angularfire2/database/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi93cmFwcGVyL3NyYy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUF1QyJ9

/***/ }),

/***/ "./node_modules/firebase/database/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/firebase/database/dist/index.esm.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/database */ "./node_modules/@firebase/database/dist/index.cjs.js");
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=default~bubble-bubble-module~profile-profile-module.js.map