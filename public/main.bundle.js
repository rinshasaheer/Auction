webpackJsonp(["main"],{

/***/ "../../../../../config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    return Config;
}());



/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .table-striped > tbody > tr:nth-of-type(2n+1) {\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\r\n    border: none\r\n  }\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/ Top Navigation /\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/ Side Navigation /\r\n\r\n@media(min-width:\\768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/ Flot Chart Containers /\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/ Custom Colored Panels /\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!existStatus\"><h4>No Users Found!</h4></div>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n  \r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      \r\n  \r\n  \r\n  \r\n   \r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"phone\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.phone}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status=='false'\" mat-menu-item >\r\n               \r\n                <span><a  (click)=\"deleteUser(row._id)\">Delete</a></span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status=='true' \" mat-menu-item disabled>\r\n                  \r\n                  <span>deleted</span>\r\n                </button>\r\n              <button *ngIf=\"row.block_status=='false' && row.delete_status=='false'\" mat-menu-item>\r\n                \r\n                <span><a  (click)=\"blockUser(row._id)\">Block</a></span>\r\n              </button>\r\n              <button  *ngIf=\"row.block_status=='true' && row.delete_status=='false'\" mat-menu-item>\r\n                \r\n                <span><a  (click)=\"unblockUser(row._id)\">Unblock</a></span>\r\n              </button>\r\n            </mat-menu>\r\n         <!-- <div class=\"btn-group\">\r\n            \r\n             <button type=\"button\" class=\"test\" data-toggle=\"dropdown\">\r\n              \r\n               <span class=\"sr-only\">Toggle Dropdown</span>\r\n             </button>\r\n             <ul class=\"dropdown-menu\" role=\"menu\">\r\n  \r\n               <li *ngIf=\"row.delete_status=='false'\"><a  (click)=\"deleteUser(row.action)\">Delete</a></li>\r\n               <li *ngIf=\"row.delete_status=='true'\"><a >Deleted</a></li>\r\n               <li *ngIf=\"row.block_status=='false' && row.delete_status=='false'\"><a  (click)=\"blockUser(row._id)\">Block</a></li>\r\n               <li *ngIf=\"row.block_status=='true' && row.delete_status=='false'\"><a  (click)=\"unblockUser(row._id)\">Unblock</a></li>\r\n               \r\n             </ul>\r\n           </div> -->\r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/active-users/active-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveUsersComponent = (function () {
    function ActiveUsersComponent(userService, router) {
        // Create 100 users
        this.userService = userService;
        this.router = router;
        this.displayedColumns = ['name', 'phone', 'email', 'action'];
        this.existStatus = false;
    }
    ActiveUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.userService.getActiveUsers().subscribe(function (data) {
            // data.forEach((item, index) => {
            //   users.push({
            //   //slno:index+1,
            //   name: item.name,
            //   phone: item.phone.toString(),
            //   email: item.email,
            //   action:item._id
            // });
            // });
            if (data != '') {
                _this.existStatus = true;
            }
            console.log(data);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ActiveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.refresh();
    };
    ActiveUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ActiveUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //  this.router.navigate(['/deleted-users']);
            }
            else {
                // this.router.navigate(['/deleted-users']);
            }
        });
    };
    ActiveUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        this.userService.blockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //this.router.navigate(['/disabled-users']);
            }
            else {
                // this.router.navigate(['/all-users']);
            }
        });
    };
    ActiveUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.userService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //  this.router.navigate(['/all-users']);
            }
            else {
                // this.router.navigate(['/disabled-users']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], ActiveUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], ActiveUsersComponent.prototype, "sort", void 0);
    ActiveUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'active-users',
            template: __webpack_require__("../../../../../src/app/active-users/active-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/active-users/active-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], ActiveUsersComponent);
    return ActiveUsersComponent;
}());

// export interface UserData {
//  // slno:number;
//   name: string;
//   phone: string;
//   email: string;
//   action:number;
// } 


/***/ }),

/***/ "../../../../../src/app/adminviewed/adminviewed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminviewed/adminviewed.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/adminviewed/adminviewed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminviewedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminviewedComponent = (function () {
    function AdminviewedComponent(userService, productService, route, router) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    AdminviewedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.productService.adminViewed(params.id).subscribe(function (data) {
                if (data.success) {
                    alert("Success, Redirecting ...");
                    _this.router.navigate(['/dashboard']);
                    console.log("successfull");
                }
                else {
                    alert("Error...!");
                    _this.router.navigate(['/dashboard']);
                    console.log("error");
                }
            });
        });
    };
    AdminviewedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'adminviewed',
            template: __webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AdminviewedComponent);
    return AdminviewedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .table-striped > tbody > tr:nth-of-type(2n+1) {\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\r\n    border: none\r\n  }\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* / Top Navigation / */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* / Side Navigation / */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* / Flot Chart Containers / */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* / Custom Colored Panels / */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!existStatus\"><h4>No Users Found!</h4></div>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n  \r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n  \r\n  \r\n   \r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"phone\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.phone}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status=='false' && row.delete_status=='false'\"> Active User</div>\r\n          <div *ngIf=\"row.block_status=='true' && row.delete_status=='false'\"> Block User</div>\r\n          <div *ngIf=\" row.delete_status=='true' \"> Delete User</div>\r\n      \r\n          \r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status=='false'\" mat-menu-item >\r\n               \r\n                <span><a  (click)=\"deleteUser(row._id)\">Delete</a></span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status=='true' \" mat-menu-item disabled>\r\n                  \r\n                  <span>deleted</span>\r\n                </button>\r\n              <button *ngIf=\"row.block_status=='false' && row.delete_status=='false'\" mat-menu-item>\r\n                \r\n                <span><a  (click)=\"blockUser(row._id)\">Block</a></span>\r\n              </button>\r\n              <button  *ngIf=\"row.block_status=='true' && row.delete_status=='false'\" mat-menu-item>\r\n                \r\n                <span><a  (click)=\"unblockUser(row._id)\">Unblock</a></span>\r\n              </button>\r\n            </mat-menu>\r\n         <!-- <div class=\"btn-group\">\r\n            \r\n             <button type=\"button\" class=\"test\" data-toggle=\"dropdown\">\r\n              \r\n               <span class=\"sr-only\">Toggle Dropdown</span>\r\n             </button>\r\n             <ul class=\"dropdown-menu\" role=\"menu\">\r\n  \r\n               <li *ngIf=\"row.delete_status=='false'\"><a  (click)=\"deleteUser(row.action)\">Delete</a></li>\r\n               <li *ngIf=\"row.delete_status=='true'\"><a >Deleted</a></li>\r\n               <li *ngIf=\"row.block_status=='false' && row.delete_status=='false'\"><a  (click)=\"blockUser(row._id)\">Block</a></li>\r\n               <li *ngIf=\"row.block_status=='true' && row.delete_status=='false'\"><a  (click)=\"unblockUser(row._id)\">Unblock</a></li>\r\n               \r\n             </ul>\r\n           </div> -->\r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllUsersComponent = (function () {
    function AllUsersComponent(userService, router) {
        // Create 100 users
        this.userService = userService;
        this.router = router;
        this.displayedColumns = ['name', 'phone', 'email', 'status', 'action'];
        this.existStatus = false;
    }
    AllUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.userService.getAllUser().subscribe(function (data) {
            // data.forEach((item, index) => {
            //   users.push({
            //   //slno:index+1,
            //   name: item.name,
            //   phone: item.phone.toString(),
            //   email: item.email,
            //   action:item._id
            // });
            // });
            // console.log(data);
            if (data != '') {
                _this.existStatus = true;
            }
            console.log(_this.existStatus);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.refresh();
    };
    AllUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AllUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //  this.router.navigate(['/deleted-users']);
            }
            else {
                // this.router.navigate(['/deleted-users']);
            }
        });
    };
    AllUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        this.userService.blockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //this.router.navigate(['/disabled-users']);
            }
            else {
                // this.router.navigate(['/all-users']);
            }
        });
    };
    AllUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.userService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                // this.refresh();
                //  this.router.navigate(['/all-users']);
            }
            else {
                // this.router.navigate(['/disabled-users']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], AllUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], AllUsersComponent.prototype, "sort", void 0);
    AllUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'all-users',
            template: __webpack_require__("../../../../../src/app/all-users/all-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-users/all-users.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], AllUsersComponent);
    return AllUsersComponent;
}());

// export interface UserData {
//  // slno:number;
//   name: string;
//   phone: string;
//   email: string;
//   action:number;
// } 


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3001/upload' });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DemoMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__all_users_all_users_component__ = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_title_header_title_component__ = __webpack_require__("../../../../../src/app/header-title/header-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__disabled_users_disabled_users_component__ = __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__deleted_users_deleted_users_component__ = __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__finishedauction_finishedauction_component__ = __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__upcomingauctions_upcomingauctions_component__ = __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__equal_validator_directive__ = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__closed_auction_back_closed_auction_back_component__ = __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__upcoming_auction_back_upcoming_auction_back_component__ = __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__running_auction_back_running_auction_back_component__ = __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__socialmedia_socialmedia_component__ = __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__read_more_read_more_component__ = __webpack_require__("../../../../../src/app/read-more/read-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__count_down_timer_count_down_timer_component__ = __webpack_require__("../../../../../src/app/count-down-timer/count-down-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__myauctions_myauctions_component__ = __webpack_require__("../../../../../src/app/myauctions/myauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__runningauction_runningauction_component__ = __webpack_require__("../../../../../src/app/runningauction/runningauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__card_running_card_running_component__ = __webpack_require__("../../../../../src/app/card-running/card-running.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__winnerconfirm_winnerconfirm_component__ = __webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ng2_datetime_ng2_datetime__ = __webpack_require__("../../../../ng2-datetime/ng2-datetime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__manage_product_manage_product_component__ = __webpack_require__("../../../../../src/app/manage-product/manage-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__product_pipe__ = __webpack_require__("../../../../../src/app/product.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ng_datepicker_ng_datepicker_component__ = __webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__adminviewed_adminviewed_component__ = __webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__users_sub_users_sub_component__ = __webpack_require__("../../../../../src/app/users-sub/users-sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__active_users_active_users_component__ = __webpack_require__("../../../../../src/app/active-users/active-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_ngx_slimscroll__ = __webpack_require__("../../../../ngx-slimscroll/dist/ngx-slimscroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__date_search_pipe__ = __webpack_require__("../../../../../src/app/date-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__auction_back_auction_back_component__ = __webpack_require__("../../../../../src/app/auction-back/auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__config_config__ = __webpack_require__("../../../../../config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__material_material_component__ = __webpack_require__("../../../../../src/app/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__myauctiontable_myauctiontable_component__ = __webpack_require__("../../../../../src/app/myauctiontable/myauctiontable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__search_pipe__ = __webpack_require__("../../../../../src/app/search.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { DataTablesModule } from 'angular-datatables';














































//import { NgDatepickerModule } from 'ng2-datepicker';

 //file upload











//import { ProductDeleteComponent } from './product-delete/product-delete.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_47__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_52__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    //  {path:'product', component:ProductComponent},
    { path: 'product-list', component: __WEBPACK_IMPORTED_MODULE_49__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_33__login_login_component__["a" /* LoginComponent */] },
    { path: 'socialmedia/:id', component: __WEBPACK_IMPORTED_MODULE_38__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */] },
    { path: 'adminviewed/:id', component: __WEBPACK_IMPORTED_MODULE_55__adminviewed_adminviewed_component__["a" /* AdminviewedComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    //{path:'all-users', component: AllUsersComponent},
    // {path:'disabled-users', component: DisabledUsersComponent},
    // {path:'deleted-users', component: DeletedUsersComponent},
    { path: 'upcomingauction', component: __WEBPACK_IMPORTED_MODULE_29__upcomingauctions_upcomingauctions_component__["a" /* UpcomingauctionsComponent */] },
    { path: 'finishedauction', component: __WEBPACK_IMPORTED_MODULE_27__finishedauction_finishedauction_component__["a" /* FinishedauctionComponent */] },
    { path: 'runningauction', component: __WEBPACK_IMPORTED_MODULE_44__runningauction_runningauction_component__["a" /* RunningauctionComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_25__home_home_component__["a" /* HomeComponent */] },
    { path: 'myauctions', component: __WEBPACK_IMPORTED_MODULE_42__myauctions_myauctions_component__["a" /* MyauctionsComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_34__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'auctions', component: __WEBPACK_IMPORTED_MODULE_63__auction_back_auction_back_component__["a" /* AuctionBackComponent */] },
    { path: 'winnerconfirm/:id', component: __WEBPACK_IMPORTED_MODULE_46__winnerconfirm_winnerconfirm_component__["a" /* WinnerconfirmComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_56__upload_upload_component__["a" /* UploadComponent */] },
    { path: 'material', component: __WEBPACK_IMPORTED_MODULE_66__material_material_component__["a" /* MaterialComponent */] },
    { path: 'users-sub', component: __WEBPACK_IMPORTED_MODULE_59__users_sub_users_sub_component__["a" /* UsersSubComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_33__login_login_component__["a" /* LoginComponent */] },
];
var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["H" /* MatTooltipModule */],
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_21__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_47__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_49__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_50__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_51__manage_product_manage_product_component__["a" /* ManageProductComponent */],
                __WEBPACK_IMPORTED_MODULE_52__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_33__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_25__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__finishedauction_finishedauction_component__["a" /* FinishedauctionComponent */],
                __WEBPACK_IMPORTED_MODULE_29__upcomingauctions_upcomingauctions_component__["a" /* UpcomingauctionsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__myauctions_myauctions_component__["a" /* MyauctionsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__equal_validator_directive__["a" /* EqualValidator */],
                __WEBPACK_IMPORTED_MODULE_43__capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__top_bar_top_bar_component__["a" /* TopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__header_title_header_title_component__["a" /* HeaderTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__all_users_all_users_component__["a" /* AllUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_19__disabled_users_disabled_users_component__["a" /* DisabledUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_20__deleted_users_deleted_users_component__["a" /* DeletedUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_34__email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_35__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */],
                __WEBPACK_IMPORTED_MODULE_36__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */],
                __WEBPACK_IMPORTED_MODULE_37__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */],
                __WEBPACK_IMPORTED_MODULE_38__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */],
                __WEBPACK_IMPORTED_MODULE_58_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_39__read_more_read_more_component__["a" /* ReadMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_40__count_down_timer_count_down_timer_component__["a" /* CountDownTimerComponent */],
                __WEBPACK_IMPORTED_MODULE_44__runningauction_runningauction_component__["a" /* RunningauctionComponent */],
                __WEBPACK_IMPORTED_MODULE_45__card_running_card_running_component__["a" /* CardRunningComponent */],
                __WEBPACK_IMPORTED_MODULE_46__winnerconfirm_winnerconfirm_component__["a" /* WinnerconfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_53__product_pipe__["a" /* ProductPipe */],
                __WEBPACK_IMPORTED_MODULE_55__adminviewed_adminviewed_component__["a" /* AdminviewedComponent */],
                __WEBPACK_IMPORTED_MODULE_56__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_58_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_59__users_sub_users_sub_component__["a" /* UsersSubComponent */],
                __WEBPACK_IMPORTED_MODULE_60__active_users_active_users_component__["a" /* ActiveUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_54__ng_datepicker_ng_datepicker_component__["a" /* NgDatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_62__date_search_pipe__["a" /* DateSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_63__auction_back_auction_back_component__["a" /* AuctionBackComponent */],
                __WEBPACK_IMPORTED_MODULE_67__myauctiontable_myauctiontable_component__["a" /* MyauctiontableComponent */],
                __WEBPACK_IMPORTED_MODULE_68__search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_66__material_material_component__["a" /* MaterialComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_28_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_48_ng2_datetime_ng2_datetime__["a" /* NKDatetimeModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_28_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["f" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                DemoMaterialModule,
                // NgDatepickerModule
                __WEBPACK_IMPORTED_MODULE_61_ngx_slimscroll__["a" /* NgSlimScrollModule */],
                //  NgDatepickerModule
                __WEBPACK_IMPORTED_MODULE_57_angular2_image_upload__["a" /* ImageUploadModule */],
                __WEBPACK_IMPORTED_MODULE_64_ng2_daterangepicker__["Daterangepicker"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["h" /* ReactiveFormsModule */],
                DemoMaterialModule
                // FlashMessagesModule.forRoot(),
                // NKDatetimeModule,
                //  DataTablesModule
                // Ng2DatetimePickerModule
                //ImageUploadModule.forRoot(), //file upload
                // Daterangepicker,
                // BrowserAnimationsModule,
                // DemoMaterialModule,
                // MatNativeDateModule,
                // ReactiveFormsModule,
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_41__services_product_service_service__["a" /* ProductServiceService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_30__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_65__config_config__["a" /* Config */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/auction-back/auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n    padding: 5px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}   \r\n\r\n.brdr label{\r\n    float: left;\r\npadding-right: 10px;\r\npadding-top: 6px;\r\n} \r\n.btn2{border-radius:0px;    padding: 11px 20px; }\r\n.brdr{border:1px solid #ccc;padding:5px 20px; } \r\n.active1{\r\n    background-color: #eee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auction-back/auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n \r\n <body>\r\n    \r\n              <div id=\"wrapper\">\r\n          \r\n                  <!-- Navigation -->\r\n      <side-bar></side-bar>\r\n          \r\n                  <div id=\"page-wrapper\">\r\n                      <div class=\"container-fluid\">\r\n                              \r\n                                          <!-- Page Heading -->\r\n                                         <header-title [title]=\"'AUCTIONS'\"></header-title>\r\n                                    \r\n                                          <!-- /.row -->\r\n                          \r\n                                      </div>\r\n                      <div class=\"col-md-2\">\r\n                            <nav class=\"nav-sidebar\">\r\n                                <ul class=\"nav tabs\">\r\n                                      <li [ngClass]=\"{'active1': viewComp == 'Running'}\"><a (click)=\"updateView('Running')\" data-toggle=\"tab\">Running Auction</a></li>\r\n                                      <li [ngClass]=\"{'active1': viewComp == 'Upcoming'}\"><a (click)=\"updateView('Upcoming')\" data-toggle=\"tab\">Upcoming auction</a></li>\r\n                                      <li [ngClass]=\"{'active1': viewComp == 'Closed'}\"><a (click)=\"updateView('Closed')\" data-toggle=\"tab\">Closed auction</a></li>                               \r\n                                </ul>\r\n                              </nav>\r\n                      </div>\r\n                      <div class=\"col-md-10\">\r\n                          <ol class=\"breadcrumb\">\r\n                              <li>\r\n                                  <i class=\"fa fa-dashboard\"></i>  <a href=\"dashboard\">dashboard</a>\r\n                              </li>\r\n                              <li class=\"active\">\r\n                                  <i class=\"fa fa-file\"></i> {{title}}\r\n                              </li>\r\n                          </ol>\r\n\r\n                          <div *ngIf=\"viewComp == 'Running'\">\r\n                            <app-running-auction-back [startFrom]=\"startFrom\" [startUpto]=\"startUpto\"  [endFrom]=\"endFrom\"  [endUpto]=\"endUpto\"  ></app-running-auction-back>\r\n                          </div>\r\n                          <div *ngIf=\"viewComp == 'Upcoming'\">\r\n                            <app-upcoming-auction-back></app-upcoming-auction-back>\r\n                          </div>\r\n                          <div *ngIf=\"viewComp == 'Closed'\">\r\n                            <app-closed-auction-back></app-closed-auction-back>\r\n                          </div>\r\n                      </div>\r\n                      \r\n\r\n                    </div>\r\n                    <!-- /#page-wrapper -->\r\n                    \r\n                               \r\n                    </div>\r\n                    \r\n                    <footer></footer> \r\n                      \r\n                    </body>\r\n                                         "

/***/ }),

/***/ "../../../../../src/app/auction-back/auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuctionBackComponent = (function () {
    function AuctionBackComponent() {
        this.startFrom = '';
        this.startUpto = '';
        this.endFrom = '';
        this.endUpto = '';
        this.daterange = {};
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
    }
    AuctionBackComponent.prototype.ngOnInit = function () {
        this.viewComp = 'Running';
        this.title = 'Running Auction';
    };
    AuctionBackComponent.prototype.updateView = function (page) {
        this.viewComp = page;
        this.title = page + ' Auction';
    };
    AuctionBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auction-back',
            template: __webpack_require__("../../../../../src/app/auction-back/auction-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auction-back/auction-back.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuctionBackComponent);
    return AuctionBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tg-ad {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 15px;\r\n    margin: 15px 0;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n::after, ::before, p a, a, .tg-socialicons li a, .tg-roundicontext, .tg-roundicontext .tg-usericonholder, .sub-menu, .mega-menu, .tg-themedropdownmenu li a, .tg-themedropdownmenu, .tg-themedropdownmenu li.menu-item-has-children ul, .sub-menu li, .tg-categories .item, .tg-categories .item h3, .tg-prev, .tg-next, .tg-ad, .tg-btnphone, .tg-like, .tg-post figure img, .tg-post figure a img, .tg-categoryholder, .tg-category h4, .tg-feature, .tg-team figure figcaption, .tg-applyedfilters ul li.alert-dismissable a.close, .tg-collapsetitle a span::before, .tg-btn, .tg-user, .tg-socialandappicons, .tg-logo, .tg-btnmenutoggle, .cls-1, .tg-wrapper, .tg-sidebarwrapper, .tg-dropdownmenu, .tg-dropdownmenu li, .tg-dashboardbox, .ct-bar, .tg-offerer, .tg-navtabledata ul li a, .tg-dashboardtable tr, .tg-package, .tg-profilephotogallery ul li figure i, .tg-btndelete {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.tg-ad figure {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.tg-themetag {\r\n    top: 12px;\r\n    left: -5px;\r\n    z-index: 2;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    line-height: 10px;\r\n    position: absolute;\r\n    background: #2882f7;\r\n    padding: 5px 3px 3px 10px;\r\n    text-transform: uppercase;\r\n}\r\n.tg-featuretag::before {\r\n    top: 0;\r\n    left: 100%;\r\n    border-top: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-left: 10px solid #2882f7;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-featuretag::after {\r\n    top: 100%;\r\n    left: 0;\r\n    border-top: 5px solid #0052b6;\r\n    border-left: 5px solid transparent;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n.tg-ad figure img, .tg-ad figure a img {\r\n    width: 100%;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\nimg {\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\nimg {\r\n    border: 0;\r\n}\r\n.tg-adcontent {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.tg-ad {\r\n    box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);\r\n}\r\n.tg-ad:hover {\r\n    -webkit-transform: scale(1.05);\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n}\r\n/* .tg-ad {\r\n    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.20);\r\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.20);\r\n} */\r\n.tg-productcagegories {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    list-style: none;\r\n    margin: 0 0 12px;\r\n    padding: 20px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n}\r\nul {\r\n    margin: 0;\r\n}\r\nol, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n.tg-productcagegories li {\r\n    float: left;\r\n    line-height: inherit;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    line-height: 28px;\r\n    list-style: disc inside none;\r\n        list-style-type: disc;\r\n}\r\n.tg-productcagegories li a {\r\n    color: #363b4d;\r\n}\r\n.tg-adtitle {\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    padding: 20px 32px 6px 5px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.card-pro-desc{\r\n\r\n}\r\n.tg-ad.tg-verifiedad .tg-adtitle::before {\r\n    display: block;\r\n}\r\n/* .tg-adtitle::before {\r\n    top: 0;\r\n    right: 0;\r\n    content: '';\r\n    width: 26px;\r\n    height: 26px;\r\n    display: none;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: url(http://exprostudio.com/html/classified/images/ads/img-01.jpg) no-repeat 50% 50%;\r\n} */\r\n.tg-adtitle h3 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    text-transform: none;\r\n}\r\nbody h1, body h2, body h3, body h4, body h5, body h6 {\r\n    color: #363b4d;\r\n    margin: 0 0 8px;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    font-style: normal;\r\n    text-transform: capitalize;\r\n    font-family: 'Quicksand', Arial, Helvetica, sans-serif;\r\n}\r\n.tg-adcontent time {\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n}\r\n.tg-adprice {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 14px 0 14px;\r\n    /* background-color: #2882f7; */\r\n    color: #fff;\r\n    border: none;\r\n}\r\n.tg-adprice h4 {\r\n    margin: 0;\r\n    color: #363b4d;\r\n    font-size: 18px;\r\n    line-height: 17px;\r\n}\r\n.tg-adcontent address {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    font-style: normal;\r\n    position: relative;\r\n    padding: 0 0 0 24px;\r\n}\r\n.tg-adcontent address::before {\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E9A3';\r\n    line-height: 14px;\r\n    position: absolute;\r\n    font-family: 'icomoon';\r\n}\r\n.tg-phonelike {\r\n    width: 100%;\r\n    float: left;\r\n    height: 33px;\r\n    margin: 20px 0 0;\r\n    position: relative;\r\n    padding: 0 38px 0 0;\r\n}\r\n.tg-btnphone {\r\n    margin: 0 0 10px;\r\n}\r\n.tg-btnphone {\r\n    width: 100%;\r\n    float: left;\r\n    color: #363b4d;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    background: #f7f7f7;\r\n}\r\n.tg-btnphone i {\r\n    font-size: 16px;\r\n    padding: 0 5px 0 0;\r\n}\r\n.tg-btnphone i, .tg-btnphone span, .tg-btnphone span em {\r\n    font-size: 14px;\r\n    line-height: 33px;\r\n    font-style: normal;\r\n}\r\n.tg-btnphone i, .tg-btnphone span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.icon-phone-handset::before {\r\n    content: \"\\E93C\";\r\n}\r\n.tg-like:hover, .tg-like.tg-liked {\r\n    color: #fff;\r\n    background: #2882f7;\r\n}\r\n.tg-like {\r\n    top: 0;\r\n    right: 0;\r\n    width: 33px;\r\n    color: #363b4d;\r\n    display: block;\r\n    cursor: pointer;\r\n    padding: 2px 0 1px;\r\n    text-align: center;\r\n    position: absolute;\r\n    border-radius: 3px;\r\n    background: #f7f7f7;\r\n}\r\n.tg-like:hover i, .tg-like.tg-liked i {\r\n    color: #fff;\r\n}\r\n.tg-like i {\r\n    color: #363b4d;\r\n    display: block;\r\n    font-size: 12px;\r\n    line-height: 30px;\r\n}\r\n.fa-heart::before {\r\n    content: \"\\F004\";\r\n}\r\n\r\n.tg-desc{\r\n    margin: 25px auto;\r\n}\r\n.margn{\r\n    margin: 20px 0;\r\n}\r\n.lead{\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n\r\n.show{\r\n    opacity: 1 !important;\r\n}\r\n.step{\r\nopacity: 0;\r\ntransition: .25s ease-in-out all;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isTimeOver\" class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4\" >\r\n    <div class=\"tg-ad tg-verifiedad\">\r\n        <figure>\r\n            <a href=\"javascript:void(0);\"><img src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\"></a>\r\n        </figure>\r\n        <div class=\"tg-adcontent\">\r\n            \r\n            <div class=\"tg-adtitle\">\r\n                <h3><a href=\"javascript:void(0);\">{{product.name}}</a></h3>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"tg-desc\">\r\n                <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                    <read-more [text]=\"product.desc\" [maxLength]=\"80\"></read-more>\r\n                  </p>\r\n            </div>\r\n            \r\n            <div class=\"row text-center \">\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                Last Bid Price\r\n                <p class=\"lead\"> {{product.lastBidprice | number:'1.2-2'}}</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n               Ends In\r\n                <p class=\"lead\">\r\n                    <app-count-down-timer (onTimeOver)=\"timeOver()\"  [inputDate]=\"product.end_date\"></app-count-down-timer>\r\n                </p>\r\n            </div>\r\n        </div>\r\n            <div class=\"row text-center \">\r\n\r\n            <div class=\"col-xs-12 col-md-12 margn form-group \" [ngClass]=\"{'has-error': isError}\">\r\n                    <div *ngIf=\"isError\" class=\"text-danger text-left\">\r\n                           {{msg}}\r\n                      </div>\r\n                <input [disabled]=\"btnDisbled\" value=\"{{formatedAmount}}\" [(ngModel)]=\"amount\" (keydown)=onKeydownEvent($event) (keyup)=\"validateAmount($event)\"   class=\"form-control \" type=\"text\" placeholder=\"Minimum bid amount {{(product.lastBidprice  * 1 ) + product.min_bid_rate | number:'1.2-2'}}\">\r\n                \r\n            </div>\r\n           \r\n        </div>\r\n            \r\n  \r\n        </div>\r\n        <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\r\n            {{msg}}\r\n       </div>\r\n        <button [disabled]=\"btnDisbled\" (click)=\"bidbtnClicked()\" class=\"btn {{btnClass}} tg-adprice\"> {{btnLabel}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRunningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardRunningComponent = (function () {
    function CardRunningComponent(productService, userService, router, config) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.btnLabel = 'Bid Now';
        this.btnClass = 'btn-primary';
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.btnDisbled = false;
        this.isTimeOver = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.socketURL);
    }
    CardRunningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
            else {
                _this.user = info;
                _this.getlastbidder();
            }
        });
        this.socket.on('newbid', function (data) {
            // console.log(data);
            if (_this.product._id == data.prod_id) {
                _this.productService.getProduct(data.prod_id).subscribe(function (data) {
                    _this.product = data;
                    _this.getlastbidder();
                });
            }
        });
        //  console.log(this.product);
    };
    CardRunningComponent.prototype.getlastbidder = function () {
        var _this = this;
        var lastBidprice = this.product.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';
        var lastBiduserId = '';
        this.product.bidders.forEach(function (bidder, i) {
            // console.log(bidder);
            if (bidder.amount >= lastBidprice) {
                lastBidprice = bidder.amount;
                lastBiduser = _this.users[bidder.user_id].name;
                lastBiduserId = _this.users[bidder.user_id]._id;
                lastBidTime = bidder.date_time;
            }
        });
        this.product.lastBidprice = lastBidprice;
        this.product.lastBiduser = lastBiduser;
        this.product.lastBidTime = lastBidTime;
        this.product.lastBiduserId = lastBiduserId;
        this.product.mybid = (lastBiduserId == this.user._id) ? true : false;
        if (this.product.mybid) {
            this.btnDisbled = true;
            this.formatedAmount = this.product.lastBidprice;
            this.btnLabel = 'Your Bid On Progress';
            this.btnClass = 'btn-success';
            // console.log(this.formatedAmount);
        }
        else {
            this.btnDisbled = false;
            this.formatedAmount = '';
            this.btnLabel = 'Bid Now';
            this.btnClass = 'btn-primary';
        }
    };
    CardRunningComponent.prototype.bidbtnClicked = function () {
        var _this = this;
        this.btnDisbled = true;
        this.validateAmount();
        //   console.log(this.product);
        //  console.log(this.amount);
        if (!this.isError) {
            this.formatedAmount = this.amount;
            var data = {
                pid: this.product._id,
                amount: Number(this.amount),
            };
            this.productService.bidProduct(data).subscribe(function (data) {
                //     console.log(data);
                _this.msg = data.msg;
                if (data.success) {
                    _this.isSuccess = true;
                    _this.formatedAmount = '';
                    _this.product.lastBidprice = _this.amount;
                    _this.product.lastBidprice = _this.amount;
                    _this.btnLabel = 'Your Bid On Progress';
                    _this.btnClass = 'btn-success';
                }
                else {
                    _this.isError = true;
                }
            });
        }
        else {
            this.btnDisbled = false;
        }
        setTimeout(function () {
            _this.isError = false;
            _this.isSuccess = false;
            _this.msg = '';
        }, 3000);
    };
    CardRunningComponent.prototype.onKeydownEvent = function (event) {
        if (event.keyCode === 13) {
            this.bidbtnClicked();
        }
    };
    CardRunningComponent.prototype.validateAmount = function () {
        var _this = this;
        this.isError = false;
        if (Number(this.amount)) {
            // console.log( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 );
            if (Number(this.amount) < (this.product.min_bid_rate * 1 + this.product.lastBidprice * 1)) {
                this.isError = true;
                this.msg = "You Can Bid Only From " + (this.product.min_bid_rate * 1 + this.product.lastBidprice * 1).toFixed(2);
            }
        }
        else {
            this.isError = true;
            this.msg = "Please Enter Valid Amount";
            setTimeout(function () {
                _this.isError = false;
                _this.msg = '';
            }, 3000);
        }
    };
    CardRunningComponent.prototype.timeOver = function () {
        //alert('time over');
        this.isTimeOver = true;
    };
    CardRunningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-running',
            template: __webpack_require__("../../../../../src/app/card-running/card-running.component.html"),
            styles: [__webpack_require__("../../../../../src/app/card-running/card-running.component.css")],
            inputs: ['product', 'users', 'user'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], CardRunningComponent);
    return CardRunningComponent;
}());



/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tg-ad {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 15px;\r\n    margin: 15px 0;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding-bottom: 0;\r\n    box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);\r\n    transition: 1s ease;\r\n}\r\n\r\n*::after, *::before, p a, a, .tg-socialicons li a, .tg-roundicontext, .tg-roundicontext .tg-usericonholder, .sub-menu, .mega-menu, .tg-themedropdownmenu li a, .tg-themedropdownmenu, .tg-themedropdownmenu li.menu-item-has-children ul, .sub-menu li, .tg-categories .item, .tg-categories .item h3, .tg-prev, .tg-next, .tg-ad, .tg-btnphone, .tg-like, .tg-post figure img, .tg-post figure a img, .tg-categoryholder, .tg-category h4, .tg-feature, .tg-team figure figcaption, .tg-applyedfilters ul li.alert-dismissable a.close, .tg-collapsetitle a span::before, .tg-btn, .tg-user, .tg-socialandappicons, .tg-logo, .tg-btnmenutoggle, .cls-1, .tg-wrapper, .tg-sidebarwrapper, .tg-dropdownmenu, .tg-dropdownmenu li, .tg-dashboardbox, .ct-bar, .tg-offerer, .tg-navtabledata ul li a, .tg-dashboardtable tr, .tg-package, .tg-profilephotogallery ul li figure i, .tg-btndelete {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.tg-ad figure {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.tg-themetag {\r\n    top: 12px;\r\n    left: -5px;\r\n    z-index: 2;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    line-height: 10px;\r\n    position: absolute;\r\n    background: #2882f7;\r\n    padding: 5px 3px 3px 10px;\r\n    text-transform: uppercase;\r\n}\r\n.tg-featuretag::before {\r\n    top: 0;\r\n    left: 100%;\r\n    border-top: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-left: 10px solid #2882f7;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-featuretag::after {\r\n    top: 100%;\r\n    left: 0;\r\n    border-top: 5px solid #0052b6;\r\n    border-left: 5px solid transparent;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n.tg-ad figure img, .tg-ad figure a img {\r\n    width: 100%;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\nimg {\r\n    height: auto;\r\n    max-width: 100%;\r\n    min-height: 200px;\r\n}\r\nimg {\r\n    border: 0;\r\n}\r\n.tg-adcontent {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.tg-ad:hover {\r\n    -webkit-transform: scale(1.05);\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n}\r\n.tg-productcagegories {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    list-style: none;\r\n    margin: 0 0 12px;\r\n    padding: 20px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n}\r\nul {\r\n    margin: 0;\r\n}\r\nol, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n.tg-productcagegories li {\r\n    float: left;\r\n    line-height: inherit;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    line-height: 28px;\r\n    list-style: disc inside none;\r\n        list-style-type: disc;\r\n}\r\n.tg-productcagegories li a {\r\n    color: #363b4d;\r\n}\r\n.tg-adtitle {\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    padding: 20px 32px 6px 5px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.card-pro-desc{\r\n\r\n}\r\n.tg-ad.tg-verifiedad .tg-adtitle::before {\r\n    display: block;\r\n}\r\n/* .tg-adtitle::before {\r\n    top: 0;\r\n    right: 0;\r\n    content: '';\r\n    width: 26px;\r\n    height: 26px;\r\n    display: none;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: url(http://exprostudio.com/html/classified/images/ads/img-01.jpg) no-repeat 50% 50%;\r\n} */\r\n.tg-adtitle h3 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    text-transform: none;\r\n}\r\nbody h1, body h2, body h3, body h4, body h5, body h6 {\r\n    color: #363b4d;\r\n    margin: 0 0 8px;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    font-style: normal;\r\n    text-transform: capitalize;\r\n    font-family: 'Quicksand', Arial, Helvetica, sans-serif;\r\n}\r\n.tg-adcontent time {\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n}\r\n.tg-adprice {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 14px 0 14px;\r\n    background-color: #2882f7;\r\n    color: #fff;\r\n    border: none;\r\n    text-align: center;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.tg-adprice h4 {\r\n    margin: 0;\r\n    color: #363b4d;\r\n    font-size: 18px;\r\n    line-height: 17px;\r\n}\r\n.tg-adcontent address {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    font-style: normal;\r\n    position: relative;\r\n    padding: 0 0 0 24px;\r\n}\r\n.tg-adcontent address::before {\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E9A3';\r\n    line-height: 14px;\r\n    position: absolute;\r\n    font-family: 'icomoon';\r\n}\r\n.tg-phonelike {\r\n    width: 100%;\r\n    float: left;\r\n    height: 33px;\r\n    margin: 20px 0 0;\r\n    position: relative;\r\n    padding: 0 38px 0 0;\r\n}\r\n.tg-btnphone {\r\n    margin: 0 0 10px;\r\n}\r\n.tg-btnphone {\r\n    width: 100%;\r\n    float: left;\r\n    color: #363b4d;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    background: #f7f7f7;\r\n}\r\n.tg-btnphone i {\r\n    font-size: 16px;\r\n    padding: 0 5px 0 0;\r\n}\r\n.tg-btnphone i, .tg-btnphone span, .tg-btnphone span em {\r\n    font-size: 14px;\r\n    line-height: 33px;\r\n    font-style: normal;\r\n}\r\n.tg-btnphone i, .tg-btnphone span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.icon-phone-handset::before {\r\n    content: \"\\E93C\";\r\n}\r\n.tg-like:hover, .tg-like.tg-liked {\r\n    color: #fff;\r\n    background: #2882f7;\r\n}\r\n.tg-like {\r\n    top: 0;\r\n    right: 0;\r\n    width: 33px;\r\n    color: #363b4d;\r\n    display: block;\r\n    cursor: pointer;\r\n    padding: 2px 0 1px;\r\n    text-align: center;\r\n    position: absolute;\r\n    border-radius: 3px;\r\n    background: #f7f7f7;\r\n}\r\n.tg-like:hover i, .tg-like.tg-liked i {\r\n    color: #fff;\r\n}\r\n.tg-like i {\r\n    color: #363b4d;\r\n    display: block;\r\n    font-size: 12px;\r\n    line-height: 30px;\r\n}\r\n.fa-heart::before {\r\n    content: \"\\F004\";\r\n}\r\n\r\n.tg-desc{\r\n    margin: 25px auto;\r\n    min-height: 123px;\r\n}\r\n\r\n.crd-btn-container{\r\n    text-align: center\r\n}\r\n.crd-btn{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.no-btn{\r\nborder-radius: 0;\r\nbackground-color: #f0ad4e;\r\nborder-color: #eea236;\r\nwidth: 100%;\r\nmargin-bottom: 10px;\r\npadding: 10px;\r\ncolor: #ffffff;\r\n}\r\n.dte{\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\n.lead{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!itemStatus\" class=\"col-md-8 col-xs-12 col-sm-6 col-lg-8\"><h4>Sorry! No Items to display.</h4></div> -->\r\n<div [hidden]=\"isTimeOver\" class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\">\r\n  <div class=\"tg-ad tg-verifiedad\">\r\n      <figure>\r\n          <span *ngIf=\"myCloseStatus\" class=\"tg-themetag tg-featuretag\">Closed</span>\r\n          <a href=\"javascript:void(0);\"><img src=\"assets/uploads/{{item.image||'default.png'}}\" alt=\"image description\"></a>\r\n          <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n      </figure>\r\n      \r\n      <div class=\"tg-adcontent\">\r\n          <!-- <ul class=\"tg-productcagegories\">\r\n              <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n          </ul> -->\r\n          \r\n          <div class=\"tg-adtitle\">\r\n              <h3><a href=\"javascript:void(0);\">{{item?.name | capitalize}}</a></h3>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"tg-desc\" >\r\n                  <h4>Description: </h4><p class=\"card-pro-desc\">\r\n                      <!-- {{item?.desc | capitalize}} -->\r\n                      <read-more [text]=\"item?.desc | capitalize\" [maxLength]=\"100\"></read-more>\r\n                    </p>\r\n          </div>\r\n          \r\n          <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n          \r\n          <!-- <address>44-46 abc Road, Manchester</address> -->\r\n          <!-- <div class=\"tg-phonelike\">\r\n              <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                  <i class=\"icon-phone-handset\"></i>\r\n                  <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n              </a>\r\n              <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n          </div> -->\r\n      </div>\r\n      <div *ngIf=\"startDate\" class=\"col-md-6 dte\">\r\n          <h4>Start Date<br/> {{startDate | date: 'dd/MM/yyyy'}}</h4>\r\n      </div>\r\n      <div *ngIf=\"startDate\" class=\"col-md-6 dte\">\r\n            <h4>End Date<br/> {{eTime | date: 'dd/MM/yyyy'}}</h4>\r\n        </div>\r\n        <p class=\"lead\" *ngIf=\"startDate\">\r\n            <app-count-down-timer (onTimeOver)=\"timeOver()\"  [inputDate]=\"startDate\"></app-count-down-timer>\r\n        </p>\r\n        <div class=\"col-md-8 col-md-offset-2 crd-btn-container\" *ngIf=\"(startDate && !interestMatch) else divinterested\"><button  class=\"btn btn-success crd-btn\" (click)=\"updateInterested(item._id)\">Interested</button></div>\r\n        \r\n        <ng-template #divinterested>\r\n                <div class=\"col-md-8 col-md-offset-2 crd-btn-container\" *ngIf=\"startDate\"><div  class=\"no-btn\" >Added to Interest</div></div>\r\n                \r\n        </ng-template>\r\n      <div class=\"row\">\r\n        <div class=\"btn-primary tg-adprice\" *ngIf=\"startDate else divclosed\">Basic Price: ${{item?.bid_amount}}</div>\r\n        <ng-template #divclosed>\r\n                <div class=\"btn-primary tg-adprice\" *ngIf=\"myauction else divmy\">Last Bid Price: ${{highest}}</div>                \r\n        </ng-template>\r\n        <ng-template #divmy>\r\n                <div class=\"btn-primary tg-adprice\">Final Price: ${{highest}}</div>                \r\n        </ng-template>\r\n      </div>\r\n      \r\n  </div>\r\n</div>\r\n<!--   \r\n<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n      <div class=\"tg-ad tg-verifiedad\">\r\n          <figure>\r\n              <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n              <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n              <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n          <!-- </figure>\r\n          <div class=\"tg-adcontent\"> -->\r\n              <!-- <ul class=\"tg-productcagegories\">\r\n                  <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n              </ul> -->\r\n              \r\n              <!-- <div class=\"tg-adtitle\">\r\n                  <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"tg-desc\">\r\n                  <h4>Description</h4>\r\n                      <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"tg-days\">\r\n                      <h4>Days Left: 4Days</h4>\r\n              </div> -->\r\n              <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n              \r\n              <!-- <address>44-46 abc Road, Manchester</address> -->\r\n              <!-- <div class=\"tg-phonelike\">\r\n                  <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                      <i class=\"icon-phone-handset\"></i>\r\n                      <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                  </a>\r\n                  <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n              </div> -->\r\n          <!-- </div>\r\n          <button class=\"btn btn-primary tg-adprice\"> Basic Price: $200</button>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n          <div class=\"tg-ad tg-verifiedad\">\r\n              <figure>\r\n                  <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n                  <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n                  <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n              <!-- </figure>\r\n              <div class=\"tg-adcontent\"> -->\r\n                  <!-- <ul class=\"tg-productcagegories\">\r\n                      <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n                  </ul> -->\r\n                  \r\n                  <!-- <div class=\"tg-adtitle\">\r\n                      <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"tg-desc\">\r\n                          <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n                  </div>\r\n                   -->\r\n                  <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n                  \r\n                  <!-- <address>44-46 abc Road, Manchester</address> -->\r\n                  <!-- <div class=\"tg-phonelike\">\r\n                      <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                          <i class=\"icon-phone-handset\"></i>\r\n                          <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                      </a>\r\n                      <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n                  </div> -->\r\n              <!-- </div>\r\n              <button class=\"btn btn-primary tg-adprice\"> Final Price: $200</button>\r\n          </div>\r\n      </div> -->"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardComponent = (function () {
    function CardComponent(_productService, userService, router) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.myCloseStatus = false;
        this.upcoming = false;
        this.interestMatch = false;
        this.isTimeOver = false;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        this.cardAction();
    };
    CardComponent.prototype.timeOver = function () {
        //alert('time over');
        this.isTimeOver = true;
    };
    CardComponent.prototype.cardAction = function () {
        if (this.item) {
            var tmp = void 0;
            if (this.myauction) {
                this.highest = 0;
                for (var i = this.item.bidders.length - 1; i >= 0; i--) {
                    tmp = this.item.bidders[i].amount;
                    if (tmp > this.highest)
                        this.highest = tmp;
                }
                if ((Date.parse(this.item.end_date) - Date.parse(Date())) <= 0) {
                    this.myCloseStatus = true;
                }
            }
            if (this.startDate) {
                this.eTime = this.item.end_date;
                var userid = JSON.parse(localStorage.getItem('user'));
                console.log(userid);
                for (var i = this.item.intrested_ids.length - 1; i >= 0; i--) {
                    if (userid.id == this.item.intrested_ids[i].user_id) {
                        this.interestMatch = true;
                    }
                }
            }
            if (this.closed) {
                this.highest = 0;
                for (var i = this.item.bidders.length - 1; i >= 0; i--) {
                    tmp = this.item.bidders[i].amount;
                    if (tmp > this.highest && this.item.bidders[i].bid_status != "rejected")
                        this.highest = tmp;
                }
            }
        }
    };
    CardComponent.prototype.updateInterested = function (id) {
        var _this = this;
        this._productService.addInterestedCandidate(id).subscribe(function (data) {
            console.log(data);
            if (data.success == true) {
                _this.interestMatch = true;
            }
        });
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/card/card.component.css")],
            inputs: ['item', 'startDate', 'myauction', 'closed'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n    padding: 5px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}   \r\n\r\n.brdr label{\r\n    float: left;\r\npadding-right: 10px;\r\npadding-top: 6px;\r\n} \r\n.btn2{border-radius:0px;    padding: 11px 20px; }\r\n.brdr{border:1px solid #ccc;padding:5px 20px; } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    \r\n\r\n\r\n\r\n        <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n                <div class=\"container\" >\r\n                        <div class=\"col-md-9 col-xs-9 brdr\">\r\n                                <div class=\"row\">\r\n                                        <div class=\"col-md-6 col-xs-6\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-4 col-xs-4\">\r\n                                                    <label>Start Date</label>\r\n                                                  </div>\r\n                                                    <div class=\"col-md-8 col-xs-8\">\r\n            \r\n                                                    <input type=\"text\" class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedStartDate($event, daterange)\" />\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-xs-6\">\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-md-4 col-xs-4\">\r\n                                                            <label>End Date</label>\r\n                                                          </div>\r\n                                                          <div class=\"col-md-8 col-xs-8\">\r\n                                                            <input type=\"text\"  class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"optionsEnd\" (selected)=\"selectedEndDate($event, daterange)\" />\r\n                                                        </div>\r\n                                                    </div>\r\n                                            \r\n                                        </div>\r\n                                        \r\n                                </div>   \r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <br>\r\n                            <div class=\"clearfix\"></div> \r\n\r\n            <div  *ngFor=\"let product of  (products | dateSearch:startFrom:startUpto:endFrom:endUpto)\" class=\"item  col-xs-4 col-lg-4\">\r\n                <div class=\"thumbnail\">\r\n                    \r\n                    <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                    <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n               \r\n                    <div class=\"caption\">\r\n                        <h4 class=\"group inner list-group-item-heading text-center\">\r\n                            {{product.name}}</h4>\r\n                            <hr>\r\n                            <p class=\"group inner list-group-item-text\" style=\"min-height: 60px;\">\r\n                            <read-more [text]=\"product.desc\" [maxLength]=\"80\"></read-more>\r\n                          </p>\r\n                        <hr>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Start Price\r\n                                <p class=\"lead\">{{product.bid_amount | number:'1.2-2'}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Last Bid Price\r\n                                \r\n                                <p *ngIf=\"product.bidders.length > 0\" class=\"lead\">{{product.lastBidprice | number:'1.2-2'}}</p>\r\n                                <p *ngIf=\"product.bidders.length == 0 \" class=\"alert-danger lead\">No bid</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Started On<br>\r\n                                <b>\r\n                                  {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                                  <br>\r\n                                  {{product.start_date | date : 'mediumTime'}}\r\n                                </b>\r\n                            </div>\r\n                             <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Ended On<br>\r\n                                <b>\r\n                                    {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                    <br>\r\n                                    {{product.end_date | date : 'mediumTime'}}\r\n                                </b>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row margn\" >\r\n                          \r\n                          <div class=\"col-xs-12 col-md-12 text-center\">\r\n                             <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.user_details.length}}</a>\r\n                             \r\n                          </div>\r\n                          <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                              <div class=\"modal-dialog\">\r\n                            \r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                  <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                    <h4 class=\"modal-title\">User Involved - {{involvedUsers.user_details.length}}</h4>\r\n                                  </div>\r\n                                  <div class=\"modal-body\">\r\n                                      <table class=\"table\">\r\n                                          <thead class=\"thead-inverse\">\r\n                                      <tr>\r\n                                        <th>Slno</th>\r\n                                        <th>Name</th>\r\n                                        <th>Bid Amount</th>\r\n                                        <th>Time</th>\r\n                                        <th>Status</th>\r\n                                      \r\n                                      </tr>\r\n                                    </thead>\r\n                                    <tbody *ngIf=\"involvedUsers.bidders.length ==0\">\r\n                                        <tr >\r\n                                              <td colspan=\"5\" class=\"text-center\">No User Involved</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    <tbody *ngIf=\"involvedUsers.bidders.length > 0\" >\r\n                                  \r\n                                        <tr  *ngFor=\"let usr of involvedUsers.bidders;let i = index\" >\r\n                                              <td >{{i+1}}</td>\r\n                                              <td >{{users[usr.user_id].name}}</td>\r\n                                              <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                              <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                              <td >{{usr.bid_status}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    </table>\r\n                                  \r\n                                  </div>\r\n                                  <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                  </div>\r\n                                </div>\r\n                            \r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                      \r\n                        <div class=\"row\">\r\n                            \r\n                            <div class=\"col-xs-12 col-md-12\">\r\n                                <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center \">\r\n                                  <div *ngIf=\"product.is_bid_completed\">\r\n                                      <div class=\"alert alert-success text-center \">\r\n                                          Winner! \r\n                                          <br> <strong> {{product.lastBiduser}}</strong>\r\n                                          <br>\r\n                                          {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                                       </div> \r\n                                  </div>\r\n                                  <div *ngIf=\"!product.is_bid_completed\">\r\n                                  <div class=\"alert alert-success text-center \">\r\n                                    Last Bidder\r\n                                    <br> <strong> {{product.lastBiduser}}</strong>\r\n                                    <br>\r\n                                    {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                                 </div> \r\n                                  </div>\r\n                              </div>\r\n                                <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                                    <div>\r\n                                    <div class=\"alert alert-dangertext-center \">\r\n                                    No bidder Found\r\n                                    <br> <strong><a [routerLink]=\"['/product-detail/'+product._id]\" class=\"alert-danger\" >Re-submit</a></strong>\r\n                                    <br>\r\n                                    Bid closed : {{product.end_date | date: 'dd-MM-yyyy h:mm a'}}\r\n                                </div>\r\n                                </div>\r\n                              </div>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n           \r\n      \r\n        </div>\r\n        </div>\r\n      \r\n        <div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n            <h3 class=\"text-center\"> No Product Found</h3>\r\n        </div>\r\n        </div>\r\n        \r\n   \r\n    \r\n       "

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';


var ClosedAuctionBackComponent = (function () {
    function ClosedAuctionBackComponent(productService, userService, router, config) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.involvedUsers = [];
        this.startFrom = '';
        this.startUpto = '';
        this.endFrom = '';
        this.endUpto = '';
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.optionsEnd = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.socketURL);
    }
    ClosedAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // });
        this.startDate = new Date();
        this.endDate = new Date();
        this.userService.getAllUsersById().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
        this.socket.on('startbid', function (data) {
            _this.getAllproduct();
        });
        this.socket.on('userbidreject', function (data) {
            _this.getAllproduct();
        });
        this.getAllproduct();
    };
    ClosedAuctionBackComponent.prototype.getAllproduct = function () {
        var _this = this;
        this.productService.getAllClosedProduct().subscribe(function (data) {
            _this.involvedUsers.bidders = [];
            _this.involvedUsers.user_details = [];
            data.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                item.bidders.forEach(function (bidder, i) {
                    if (bidder.amount >= lastBidprice && bidder.bid_status != "rejected") {
                        lastBidprice = bidder.amount;
                        lastBiduser = _this.users[bidder.user_id].name;
                        lastBidTime = bidder.date_time;
                    }
                });
                data[index].lastBidprice = lastBidprice;
                data[index].lastBiduser = lastBiduser;
                data[index].lastBidTime = lastBidTime;
            });
            console.log(data);
            _this.products = data;
        });
    };
    ClosedAuctionBackComponent.prototype.updateInvolved = function (product) {
        this.involvedUsers = product;
        console.log(this.involvedUsers);
    };
    ClosedAuctionBackComponent.prototype.selectedStartDate = function (value, datepicker) {
        this.startFrom = value.start;
        this.startUpto = value.end;
    };
    ClosedAuctionBackComponent.prototype.selectedEndDate = function (value, datepicker) {
        this.endFrom = value.start;
        this.endUpto = value.end;
    };
    ClosedAuctionBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-closed-auction-back',
            template: __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], ClosedAuctionBackComponent);
    return ClosedAuctionBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/count-down-timer/count-down-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDownTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountDownTimerComponent = (function () {
    function CountDownTimerComponent(elm) {
        this.onTimeOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.futureString = elm.nativeElement.getAttribute('inputDate');
    }
    CountDownTimerComponent.prototype.dhms = function (t) {
        var days, hours, minutes, seconds;
        // days = Math.floor(t / 86400);
        // t -= days * 86400;
        hours = Math.floor(t / 3600);
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        if (hours < 0) {
            this.subscription.unsubscribe();
            this.onTimeOver.emit();
            return "0:00:00";
        }
        else {
            return [
                // days + 'd',
                hours + ':',
                this.lpad(minutes) + ':',
                this.lpad(seconds)
            ].join('');
        }
    };
    CountDownTimerComponent.prototype.lpad = function (num) {
        var s = num + "";
        if (s.length < 2)
            s = "0" + s;
        return s;
    };
    CountDownTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date(this.inputDate);
        this.$counter = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });
        this.subscription = this.$counter.subscribe(function (x) { return _this.message = _this.dhms(_this.diff); });
    };
    CountDownTimerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CountDownTimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-count-down-timer',
            template: "\n  <div>\n    {{message}}\n  </div>\n",
            inputs: ["inputDate"],
            outputs: ['onTimeOver']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CountDownTimerComponent);
    return CountDownTimerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n    \r\n        <div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Dashboard'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n              \r\n            </div>\r\n            <!-- /#page-wrapper -->\r\n           \r\n                       \r\n        </div>\r\n\r\n       <footer></footer> \r\n              \r\n    </body>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/date-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateSearchPipe = (function () {
    function DateSearchPipe() {
    }
    DateSearchPipe.prototype.transform = function (value, startFrom, startUpto, endFrom, endUpto) {
        // console.log(startDate);
        // console.log(startFrom);
        // console.log(startUpto);
        // console.log(endFrom);
        // console.log(endUpto);
        // console.log(new Date(startFrom));
        // return value;
        return value.filter(function (el) {
            // console.log(startDate);
            // console.log(new Date(el.start_date));
            if (startFrom != '') {
                var startFrom1 = new Date(startFrom);
                var startUpto1 = new Date(startUpto);
                startUpto1.setHours(23, 59, 59, 999);
            }
            if (endFrom != '') {
                var endFrom1 = new Date(endFrom);
                var endUpto1 = new Date(endUpto);
                endUpto1.setHours(23, 59, 59, 999);
            }
            if ((startFrom == '' || ((new Date(el.start_date) >= startFrom1) && (new Date(el.start_date) <= startUpto1))) &&
                (endFrom == '' || ((new Date(el.end_date) >= endFrom1) && (new Date(el.end_date) <= endUpto1)))) {
                return true;
            }
            // if(
            //   (new Date(el.start_date) >= new Date(startFrom)) && 
            //   (new Date(el.start_date) >= new Date(startFrom)) && 
            //   (new Date(el.start_date) >= new Date(startFrom)) && 
            //   (new Date(el.start_date) >= new Date(startFrom)) 
            // ){
            //   return true;
            // }
            //    return el.pollqtn.toLowerCase().indexOf(args) > -1;
        });
        //return value;
    };
    DateSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateSearch'
        })
    ], DateSearchPipe);
    return DateSearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .table-striped > tbody > tr:nth-of-type(2n+1) {\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\r\n    border: none\r\n  }\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/ Top Navigation /\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/ Side Navigation /\r\n\r\n@media(min-width:\\768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/ Flot Chart Containers /\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/ Custom Colored Panels /\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!existStatus\"><h4>No Users Found!</h4></div>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"phone\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.phone}}</mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n<!-- Name Column -->\r\n<ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletedUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeletedUsersComponent = (function () {
    function DeletedUsersComponent(userService, router) {
        // Create 100 users
        this.userService = userService;
        this.router = router;
        this.displayedColumns = ['name', 'phone', 'email'];
        this.existStatus = false;
    }
    DeletedUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        var users = [];
        this.userService.getDeletedUsers().subscribe(function (data) {
            // data.forEach((item, index) => {
            //   users.push({
            //   name: item.name,
            //   phone: item.phone.toString(),
            //   email:item.email
            // });
            // });
            if (data != '') {
                _this.existStatus = true;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    DeletedUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], DeletedUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], DeletedUsersComponent.prototype, "sort", void 0);
    DeletedUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'deleted-users',
            template: __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], DeletedUsersComponent);
    return DeletedUsersComponent;
}());

// export interface UserData {
//   name: string;
//   phone: string;
//   email:string;
// } 


/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!existStatus\"><h4>No Users Found!</h4></div>\r\n<div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n  \r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n  \r\n  \r\n   \r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"phone\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Phone </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.phone}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.block_status=='true' && row.delete_status=='false'\" mat-menu-item >\r\n               \r\n                <span><a  (click)=\"unblockUser(row._id)\">Unblock</a></span>\r\n              </button>\r\n              \r\n              \r\n             \r\n            </mat-menu>\r\n        \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  \r\n                    <!-- <td>\r\n                        <div class=\"btn-group\">\r\n                         \r\n                          <button type=\"button\" class=\"test\" data-toggle=\"dropdown\">\r\n                           \r\n                            <span class=\"sr-only\">Toggle Dropdown</span>\r\n                          </button>\r\n                          <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li *ngIf=\"user1.block_status=='true' && user1.delete_status=='false'\"><a   (click)=\"unblockUser(user1._id)\">Unblock</a></li>\r\n                            \r\n                          </ul>\r\n                        </div>\r\n                      </td> -->\r\n                \r\n     "

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabledUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisabledUsersComponent = (function () {
    function DisabledUsersComponent(userService, router) {
        // Create 100 users
        this.userService = userService;
        this.router = router;
        this.displayedColumns = ['name', 'phone', 'email', 'action'];
        this.existStatus = false;
    }
    DisabledUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.userService.getDisabledUsers().subscribe(function (data) {
            // data.forEach((item, index) => {
            //   users.push({
            //   //slno:index+1,
            //   name: item.name,
            //   phone: item.phone.toString(),
            //   email: item.email,
            //   action:item._id
            // });
            // });
            if (data != '') {
                _this.existStatus = true;
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    DisabledUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.refresh();
    };
    DisabledUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DisabledUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.userService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
                //  this.router.navigate(['/all-users']);
            }
            else {
                // this.router.navigate(['/disabled-users']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], DisabledUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], DisabledUsersComponent.prototype, "sort", void 0);
    DisabledUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'disabled-users',
            template: __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], DisabledUsersComponent);
    return DisabledUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/email-verification/email-verification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-verification/email-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSuccess\" class=\"alert alert-success\">\r\n    <strong>Success, Redirecting ...</strong>\r\n  </div>\r\n<div *ngIf=\"showDanger\" class=\"alert alert-danger\">\r\n    <strong>Error on verification</strong>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/email-verification/email-verification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailVerificationComponent = (function () {
    function EmailVerificationComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.showDanger = false;
        this.showSuccess = false;
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userService.verifyUser(params.id).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    //  alert("Success, Redirecting ...");
                    _this.showSuccess = true;
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                        console.log("successfull verified user");
                    }, 3000);
                }
                else {
                    // alert("Error on verification");
                    _this.showDanger = true;
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                        console.log("error verified user");
                    }, 3000);
                }
            });
        });
    };
    EmailVerificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'email-verification',
            template: __webpack_require__("../../../../../src/app/email-verification/email-verification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-verification/email-verification.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (pros, term) {
        //check if serach term in undefined
        if (term == undefined)
            return pros;
        return pros.filter(function (pro) {
            return pro.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/finishedauction/finishedauction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finishedauction/finishedauction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n  <div id=\"f-auction\" class=\"auction-section\">\r\n      <h4 class=\"page-head\">Closed Auctions</h4>\r\n      <div *ngIf=\"existStatus; else noProduct\">\r\n        <div  *ngFor=\"let item of products\">\r\n          <!-- {{item}} -->\r\n          <app-card [item]=\"item\" [closed]=true></app-card>\r\n        </div>\r\n      </div>\r\n      <ng-template #noProduct>\r\n        <div class=\"no-item\">\r\n            <h4>Sorrry! No items to display!</h4>\r\n        </div>\r\n      </ng-template>\r\n      \r\n      \r\n  </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finishedauction/finishedauction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishedauctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinishedauctionComponent = (function () {
    function FinishedauctionComponent(_productService, userService, router, config) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.existStatus = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.socketURL);
    }
    FinishedauctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        // console.log(this.products);
        this.loadAuction();
        // console.log(Date())
        this.socket.on('closebid', function (data) {
            console.log(data);
            _this.loadAuction();
        });
    };
    FinishedauctionComponent.prototype.loadAuction = function () {
        var _this = this;
        this._productService.loadClosedProduct()
            .subscribe(function (resProducts) {
            _this.products = resProducts;
            // console.log(resProducts);
            if (resProducts.length > 0) {
                _this.existStatus = true;
            }
            console.log(_this.existStatus);
        });
    };
    FinishedauctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finishedauction',
            template: __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.css")],
            inputs: ['products']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], FinishedauctionComponent);
    return FinishedauctionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" style=\"background:#000;padding:.1em 0;position:fixed;bottom:0;width:100%;\">\r\n    <div class=\"container\">\r\n      <p style=\"color:#fff;text-align:center;\">www.symptots.com</p>\r\n    </div>\r\n    <!-- /.container -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header-title/header-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-title/header-title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n      <h1 class=\"page-header\">\r\n          {{title}}\r\n      </h1>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-title/header-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderTitleComponent = (function () {
    function HeaderTitleComponent() {
    }
    HeaderTitleComponent.prototype.ngOnInit = function () {
    };
    HeaderTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-title',
            template: __webpack_require__("../../../../../src/app/header-title/header-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-title/header-title.component.css")],
            inputs: ['title']
        }),
        __metadata("design:paramtypes", [])
    ], HeaderTitleComponent);
    return HeaderTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auction-img{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"cil-md-12\">\r\n    <img class=\"auction-img\" src=\"../../assets/images/banner.jpg\" alt=\"banner\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 15px;\r\n    font-size: 12px;\r\n    background-color: #f3f3f3 !important;\r\n  }\r\n  .main {\r\n    max-width: 420px;\r\n    margin: 0 auto;\r\n    padding: 27px 43px;\r\n    border: 1px solid #f1f1f1;\r\n    border-radius: 20px;\r\n    margin-top: 8%;\r\n    background: #fff;\r\n    box-shadow: 10px 28px 29px #e8e8e8;\r\n  }\r\n\r\n  .login-or {\r\n    position: relative;\r\n    font-size: 18px;\r\n    color: #aaa;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .span-or {\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -2px;\r\n    margin-left: -25px;\r\n    background-color: #fff;\r\n    width: 50px;\r\n    text-align: center;\r\n  }\r\n  .hr-or {\r\n    background-color: #cdcdcd;\r\n    height: 1px;\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n  }\r\n  h3 {\r\n    text-align: center;\r\n    line-height: 300%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color : #f3f3f3;padding:  5% 0 17% 0; \r\n\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"main\">\r\n\r\n      <h3>Please Log In, or <a [routerLink]=\"['/registration']\">Sign Up</a></h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n          <a href=\"/auth/facebook\" target=\"_blank\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n          <a href=\"/auth/google\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"login-or\">\r\n        <hr class=\"hr-or\">\r\n        <span class=\"span-or\">or</span>\r\n      </div>\r\n\r\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n          <label for=\"inputUsernameEmail\">Username or email</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\" required [(ngModel)]=\"newLogin.email\" name=\"email\" #email=\"ngModel\">\r\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n          <label for=\"inputPassword\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\">\r\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn btn-primary\">\r\n          Log In\r\n        </button>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && status }\">\r\n            <div *ngIf=\"status\" class=\"help-block\">!{{msg}}</div>\r\n       </div> \r\n      </form>\r\n      \r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, routes) {
        this.userService = userService;
        this.routes = routes;
        this.newLogin = {
            email: '',
            password: '',
        };
        this.status = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            console.log(info.role);
            if (info.role == "user") {
                _this.routes.navigate(['/home']);
            }
            if (info.role == "admin") {
                _this.routes.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.authenticateUser(this.newLogin).subscribe(function (data) {
            // console.log('after auth');
            console.log(data);
            if (data.success == false) {
                _this.status = true;
            }
            if (data.success) {
                _this.userService.storeUserData(data.token, data.user);
                // if(data.user.role=="user"){
                //   this.routes.navigate(['/home']);
                // }
                // if(data.user.role=="admin"){
                //   this.routes.navigate(['/dashboard']);
                // }
                _this.userService.getLoggedUSerDetails().subscribe(function (info) {
                    console.log(info.role);
                    if (info.role == "user") {
                        _this.routes.navigate(['/home']);
                    }
                    if (info.role == "admin") {
                        _this.routes.navigate(['/dashboard']);
                    }
                });
            }
            else {
                // console.log(data.msg);
                _this.msg = data.msg;
                // this.routes.navigate(['/registration']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-product/manage-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-product/manage-product.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n    \r\n        <div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Manage Product'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n<product-detail (updateProEvent)=\"onUpdateProEvent($event)\"   (deleteProEvent)=\"onDeleteProEvent($event)\"     *ngIf=\"selectedPro\" [pro]=\"selectedPro\"></product-detail>\r\n\r\n\r\n<br>\r\n<br>\r\n\r\n<product-list  (SelectPro)=\"onSelectPro($event)\" [pros]=\"pros\" ></product-list>\r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  \r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/manage-product/manage-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageProductComponent = (function () {
    function ManageProductComponent(_productService, router, userService) {
        this._productService = _productService;
        this.router = router;
        this.userService = userService;
    }
    ManageProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this._productService.getProducts()
            .subscribe(function (resProData) { return _this.pros = resProData; });
    };
    ManageProductComponent.prototype.onSelectPro = function (pro) {
        this.selectedPro = pro;
        console.log(this.selectedPro);
    };
    ManageProductComponent.prototype.onUpdateProEvent = function (pro) {
        this._productService.updateProduct(pro)
            .subscribe(function (resUpdatedPro) { return pro = resUpdatedPro; });
        this.selectedPro = null;
        alert('Successfully Updated');
        this.router.navigate(['/manage-product']);
        window.location.reload();
    };
    ;
    ManageProductComponent.prototype.onDeleteProEvent = function (pro) {
        //  console.log("manahe delete");
        this._productService.deleteProduct(pro)
            .subscribe(function (resDeletedPro) { return pro = resDeletedPro; });
        this.selectedPro = null;
        this.router.navigate(['/manage-product']);
        window.location.reload();
    };
    ;
    ManageProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-product',
            template: __webpack_require__("../../../../../src/app/manage-product/manage-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-product/manage-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], ManageProductComponent);
    return ManageProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(2n+1) {\r\n  background-color: #fff;\r\n}\r\n\r\n.table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th {\r\n  border: none\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\" *ngIf=\"stat\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n  \r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Product </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name | capitalize}} </mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- Progress Column -->\r\n      <ng-container matColumnDef=\"mybid\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Your Bids </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> \r\n          \r\n          <!-- {{row.status}} -->\r\n          <p *ngFor=\"let bid of row.mybid\">{{bid.amount | number:'1.2-2'}} : {{bid.date_time | date: 'dd-MM-yyyy h:mm a'}}</p>\r\n        </mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"topbid\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Top Bid </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\"> {{row.topbid | number:'1.2-2'}} </mat-cell>\r\n        </ng-container>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\"> <p [ngStyle]=\"{ 'color': row.bgClr }\">{{row.bidstatus}}</p> </mat-cell>\r\n        </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  <!-- Copyright 2017 Google Inc. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialComponent = (function () {
    function MaterialComponent(_productService, userService, router, config) {
        // Create 100 users
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.existStatus = false;
        this.stat = false;
        this.displayedColumns = ['name', 'mybid', 'topbid', 'status'];
        // for (let i = 1; i <= 100; i++) { users.push(this.createNewUser(i)); }
        // Assign the data to the data source for the table to render
        // this.dataSource = new MatTableDataSource(users);
        // console.log("f");
    }
    MaterialComponent.prototype.ngOnInit = function () {
        this.loadAuctions();
        var users = [];
        // this.product.forEach((item, index) => {
        //   this.product.push({
        //   name: item.name,
        //   status: item.image
        // });
        // });
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    MaterialComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    };
    MaterialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MaterialComponent.prototype.loadAuctions = function () {
        var _this = this;
        this.loadUserId();
        this._productService.loadMyAuctionProduct()
            .subscribe(function (resProducts) {
            _this.product = resProducts;
            //   console.log('fetch all my product');
            // console.log(resProducts);
            if (resProducts.length > 0) {
                _this.existStatus = true;
            }
            _this.product = resProducts;
            console.log(_this.existStatus);
            var uId = _this._productService.loadUserId();
            _this.product.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                var lastBiduserId = '';
                var bidstatus = '';
                var bgClr = '';
                var mybid = [];
                item.bidders.forEach(function (bidder, i) {
                    // console.log(bidder);
                    if (bidder.amount >= lastBidprice && bidder.bid_status != 'rejected') {
                        lastBidprice = bidder.amount;
                        //  lastBiduser = this.users[bidder.user_id].name;
                        lastBiduserId = bidder.user_id;
                        lastBidTime = bidder.date_time;
                    }
                    if (bidder.user_id == uId) {
                        mybid.push(bidder);
                    }
                    // if(bidder.bid_status == "rejected")
                });
                if (lastBiduserId == uId && item.is_bid_completed) {
                    var bidstatus = 'Winner';
                    var bgClr = '#00ab5d';
                }
                if (lastBiduserId != uId && item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#da1515';
                }
                if (lastBiduserId == uId && !item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#00ab5d';
                }
                if (lastBiduserId != uId && !item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#da1515';
                }
                _this.product[index].bidstatus = bidstatus;
                _this.product[index].mybid = mybid;
                _this.product[index].bgClr = bgClr;
                _this.product[index].mybid = mybid;
                _this.product[index].topbid = lastBidprice;
                _this.product[index].lastBiduser = lastBiduser;
                _this.product[index].lastBidTime = lastBidTime;
                _this.product[index].lastBiduserId = lastBiduserId;
            });
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableDataSource */](_this.product);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // console.log(this.product);
            _this.stat = true;
        });
    };
    MaterialComponent.prototype.loadUserId = function () {
        this.authUser = JSON.parse(localStorage.getItem('user'));
        return this.authUser.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], MaterialComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], MaterialComponent.prototype, "sort", void 0);
    MaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material',
            template: __webpack_require__("../../../../../src/app/material/material.component.html"),
            styles: [__webpack_require__("../../../../../src/app/material/material.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], MaterialComponent);
    return MaterialComponent;
}());

/** Builds and returns a new User. */
/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
// export interface UserData {
//   name: string;
//   status: string;
// }
/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#m-auction{\r\n    margin-top: 180px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n        <div  id=\"m-auction\" class=\"auction-section\">\r\n            <h4 class=\"page-head\">My Auctions</h4>\r\n             <!-- <div *ngIf=\"existStatus; else noProduct\"> -->\r\n                <!-- <div *ngFor=\"let item of products\"> -->\r\n                    <div >\r\n                    <!-- {{item}} -->\r\n                    <!-- <app-card [item]=\"item\" [myauction]=true></app-card> -->\r\n                    <!-- <app-myauctiontable [products]=\"product\"></app-myauctiontable> -->\r\n                    <app-material ></app-material>\r\n                </div>\r\n            <!--</div> -->\r\n            <div *ngIf=\"!existStatus\">\r\n                <div class=\"no-item\">\r\n                    <h4>Sorrry! No items to display!</h4>\r\n                </div>\r\n            </div>  \r\n          \r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyauctionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyauctionsComponent = (function () {
    function MyauctionsComponent(_productService, userService, router, config) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.product = [];
        this.existStatus = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(config.socketURL);
    }
    MyauctionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        this.loadAuctions();
        this.socket.on('newbid', function (data) {
            // console.log(data);
            // console.log('mycll');
            _this.product.forEach(function (item, index, object) {
                if (item._id == data) {
                    object.splice(index, 1);
                }
            });
            _this.loadAuctions();
        });
        this.socket.on('closebid', function (data) {
            // console.log(data);
            _this.loadAuctions();
        });
        // this.socket.on('userbidreject', (data) => {
        //   console.log(data);
        //   if(data.u_id == this.loadUserId())
        //   this.loadAuctions();
        // })
    };
    MyauctionsComponent.prototype.loadAuctions = function () {
        var _this = this;
        this.loadUserId();
        this._productService.loadMyAuctionProduct()
            .subscribe(function (resProducts) {
            _this.product = resProducts;
            //   console.log('fetch all my product');
            //   console.log(resProducts);
            if (resProducts.length > 0) {
                _this.existStatus = true;
            }
            _this.product = resProducts;
            console.log(_this.existStatus);
            var uId = _this._productService.loadUserId();
            _this.product.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                var lastBiduserId = '';
                var bidstatus = '';
                var bgClr = '';
                var mybid = [];
                item.bidders.forEach(function (bidder, i) {
                    // console.log(bidder);
                    if (bidder.amount >= lastBidprice && bidder.bid_status != 'rejected') {
                        lastBidprice = bidder.amount;
                        //  lastBiduser = this.users[bidder.user_id].name;
                        lastBiduserId = bidder.user_id;
                        lastBidTime = bidder.date_time;
                    }
                    if (bidder.user_id == uId) {
                        mybid.push(bidder);
                    }
                    // if(bidder.bid_status == "rejected")
                });
                if (lastBiduserId == uId && item.is_bid_completed) {
                    var bidstatus = 'Winner';
                    var bgClr = '#00ab5d';
                }
                if (lastBiduserId != uId && item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#da1515';
                }
                if (lastBiduserId == uId && !item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#00ab5d';
                }
                if (lastBiduserId != uId && !item.is_bid_completed) {
                    var bidstatus = 'Participated';
                    var bgClr = '#da1515';
                }
                _this.product[index].bidstatus = bidstatus;
                _this.product[index].mybid = mybid;
                _this.product[index].bgClr = bgClr;
                _this.product[index].mybid = mybid;
                _this.product[index].topbid = lastBidprice;
                _this.product[index].lastBiduser = lastBiduser;
                _this.product[index].lastBidTime = lastBidTime;
                _this.product[index].lastBiduserId = lastBiduserId;
            });
            console.log(_this.product);
        });
    };
    MyauctionsComponent.prototype.loadUserId = function () {
        this.authUser = JSON.parse(localStorage.getItem('user'));
        return this.authUser.id;
    };
    MyauctionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myauctions',
            template: __webpack_require__("../../../../../src/app/myauctions/myauctions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/myauctions/myauctions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], MyauctionsComponent);
    return MyauctionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/myauctiontable/myauctiontable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-bordered {\r\n    border: 1px solid #dddddd;\r\n    border-collapse: separate;\r\n    border-left: 0;\r\n    border-radius: 4px;\r\n    }\r\n    \r\n    .table {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    background-color: transparent;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    display: table;\r\n    }\r\n    \r\n    .widget.widget-table .table {\r\n    margin-bottom: 0;\r\n    border: none;\r\n    }\r\n    \r\n    .widget.widget-table .widget-content {\r\n    padding: 0;\r\n    }\r\n    \r\n    .widget .widget-header + .widget-content {\r\n    border-top: none;\r\n    -webkit-border-top-left-radius: 0;\r\n    -webkit-border-top-right-radius: 0;\r\n    -moz-border-radius-topleft: 0;\r\n    -moz-border-radius-topright: 0;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    }\r\n    \r\n    .widget .widget-content {\r\n    padding: 20px 15px 15px;\r\n    background: #FFF;\r\n    /* border: 1px solid #D5D5D5; */\r\n    /* -moz-border-radius: 5px;\r\n    -webkit-border-radius: 5px; */\r\n    /* border-radius: 5px; */\r\n    /* box-shadow: 0px 4px 10px 0px #969696; */\r\n    }\r\n    \r\n    .widget .widget-header {\r\n    position: relative;\r\n    height: 80px;\r\n    line-height: 40px;\r\n    /* background: #E9E9E9; */\r\n    /* background: -moz-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fafafa), color-stop(100%, #e9e9e9));\r\n    background: -webkit-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);\r\n    background: -o-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);\r\n    background: -ms-linear-gradient(top, #fafafa 0%, #e9e9e9 100%);\r\n    background: linear-gradient(top, #fafafa 0%, #e9e9e9 100%); */\r\n    /* text-shadow: 0 1px 0 #fff;\r\n    border-radius: 5px 5px 0 0; */\r\n    /* box-shadow: 0 2px 5px rgba(0,0,0,0.1),inset 0 1px 0 white,inset 0 -1px 0 rgba(255,255,255,0.7);\r\n    border-bottom: 1px solid #bababa; */\r\n    /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9');\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9')\"; */\r\n    /* border: 1px solid #D5D5D5; */\r\n    /* -webkit-border-top-left-radius: 4px;\r\n    -webkit-border-top-right-radius: 4px;\r\n    -moz-border-radius-topleft: 4px;\r\n    -moz-border-radius-topright: 4px;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px; */\r\n    -webkit-background-clip: padding-box;\r\n    }\r\n    \r\n    thead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n    }\r\n    \r\n    .widget .widget-header h3 {\r\n    top: 2px;\r\n    position: relative;\r\n    left: 10px;\r\n    display: inline-block;\r\n    margin-right: 3em;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: #555;\r\n    line-height: 18px;\r\n    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);\r\n    }\r\n    \r\n    .widget .widget-header [class^=\"icon-\"], .widget .widget-header [class*=\" icon-\"] {\r\n    display: inline-block;\r\n    margin-left: 13px;\r\n    margin-right: -2px;\r\n    font-size: 16px;\r\n    color: #555;\r\n    vertical-align: middle;\r\n    }\r\n\r\n    .pro-img{\r\n        width: 100px;\r\n    }\r\n    .table-head{\r\n        margin: 0;\r\n    }\r\n    .search{\r\n        padding: 5px;\r\n        /* border-radius: 30px;S */\r\n        margin-bottom: 20px;\r\n        /* min-width: 258px; */\r\n        padding-left: 15px;\r\n        border: none;\r\n        border-bottom: 1px solid #ccc;\r\n        outline: none;\r\n        width: 98%;\r\n    }\r\n    td, td p{\r\n        font-weight: 700;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myauctiontable/myauctiontable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"span7\">   \r\n  <div class=\"widget stacked widget-table action-table\">\r\n            \r\n          <div class=\"widget-header\">\r\n            <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchTerm\" class=\"search\">  \r\n          </div> <!-- /widget-header -->\r\n          \r\n          <div class=\"widget-content\">\r\n            \r\n            <table class=\"table table-striped table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Sl.No</th>\r\n                  <th>Product</th>\r\n                  <th>Your Bids</th>\r\n                  <th>Top Bid</th>\r\n                  <th>Status</th>\r\n                  <!-- <th class=\"td-actions\"></th> -->\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of products  | filter:searchTerm; let i = index;\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{item.name | capitalize}}\r\n                    <br/>\r\n                    <img src=\"assets/uploads/{{item.image||'default.png'}}\" alt=\"product image\" class=\"pro-img\">\r\n                  </td>\r\n                  <td>\r\n                    <p *ngFor=\"let bid of item.mybid\">{{bid.amount | number:'1.2-2'}} : {{bid.date_time | date: 'dd-MM-yyyy h:mm a'}}</p>\r\n                    </td>\r\n                  <td>{{item.topbid | number:'1.2-2'}}</td>\r\n                  <td class=\"td-actions\">\r\n                    <p [ngStyle]=\"{ 'color': item.bgClr }\">{{item.bidstatus}}</p>\r\n                  </td>\r\n                </tr>\r\n                \r\n                 \r\n                \r\n                \r\n                </tbody>\r\n              </table>\r\n            \r\n          </div> <!-- /widget-content -->\r\n        \r\n        </div> <!-- /widget -->\r\n              </div>"

/***/ }),

/***/ "../../../../../src/app/myauctiontable/myauctiontable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyauctiontableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyauctiontableComponent = (function () {
    function MyauctiontableComponent(_productService) {
        this._productService = _productService;
        this.product = [];
    }
    MyauctiontableComponent.prototype.ngOnInit = function () {
        // if(this.product)
        // {
        //   console.log("h");
        //   let uId = this._productService.loadUserId();
        //   this.product.forEach((item, index) => {
        //     var lastBidprice = item.bid_amount;
        //     var lastBiduser = '';
        //     var lastBidTime = '';
        //     var lastBiduserId = '';
        //     var bidstatus = '';
        //     var bgClr = '';
        //     let mybid = [];
        //     item.bidders.forEach((bidder, i) => {
        //       console.log(bidder);
        //       if(bidder.amount >= lastBidprice && bidder.bid_status != 'rejected'){
        //          lastBidprice = bidder.amount;
        //         //  lastBiduser = this.users[bidder.user_id].name;
        //           lastBiduserId = bidder.user_id;
        //          lastBidTime = bidder.date_time;
        //       }
        //       if(bidder.user_id == uId){
        //         mybid.push(bidder);
        //       }
        //      // if(bidder.bid_status == "rejected")
        //     });
        //     if(lastBiduserId  == uId && item.is_bid_completed){
        //       var bidstatus = 'Winner';
        //       var bgClr = 'green';
        //     }
        //     if(lastBiduserId  != uId && item.is_bid_completed){
        //       var bidstatus = 'Participated';
        //       var bgClr = 'red';
        //     }
        //     if(lastBiduserId  == uId && !item.is_bid_completed){
        //       var bidstatus = 'Participated';
        //       var bgClr = 'green';
        //     }
        //     if(lastBiduserId  != uId && !item.is_bid_completed){
        //       var bidstatus = 'Participated';
        //       var bgClr = 'red';
        //     }
        //     this.product[index].bidstatus = bidstatus;
        //     this.product[index].mybid = mybid;
        //     this.product[index].bgClr = bgClr;
        //     this.product[index].mybid = mybid;
        //     this.product[index].topbid = lastBidprice;
        //     this.product[index].lastBiduser = lastBiduser;
        //     this.product[index].lastBidTime = lastBidTime;
        //     this.product[index].lastBiduserId = lastBiduserId;
        //     console.log(this.product);
        //   });
        // }
    };
    MyauctiontableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myauctiontable',
            template: __webpack_require__("../../../../../src/app/myauctiontable/myauctiontable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/myauctiontable/myauctiontable.component.css")],
            inputs: ['products']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */]])
    ], MyauctiontableComponent);
    return MyauctiontableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    font: sans-serif;\r\n    background: #E8E8E8;\r\n}\r\nheader {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0 0 ;\r\n    z-index: 11;\r\n    /* background: #E8E8E8; */\r\n    border-bottom: none;\r\n}\r\nheader .box {\r\n    background: #084da7;\r\n    padding: 6px 0;\r\n    text-align: left;\r\n}\r\nheader .box .title1 {\r\n    font-size: 25px ;\r\n    color: #ffffff;\r\n    margin: 0 9px 0 0;\r\n    float: left;\r\n}\r\nheader .box .title2 {\r\n    font-size: 14px ;\r\n    color: #888;\r\n    margin: 10px 0 0 0;\r\n    float: left;\r\n}\r\n\r\nheader .btn-default.btn1 {\r\n    margin: 0 0 0 6px;\r\n    float: right;\r\n}\r\n.box .dropdown {\r\n    float: right;\r\n    clear: right;\r\n    list-style: none;\r\n}\r\n.box .dropdown ul{\r\n    padding: 0;\r\n    background: #084DA7;\r\n}\r\n.box .dropdown ul li a{\r\n    padding: 10px 20px;\r\n    \r\n}\r\n.box .dropdown ul li:hover{\r\n    background: #fff;\r\n    \r\n}\r\n.box .dropdown ul li:hover a{\r\n    color: #084DA7;\r\n}\r\n.navbar-toggle{\r\n    margin-top: 25px;\r\n}\r\na {\r\n    color: #ffffff;\r\n}\r\na:hover, a:focus {\r\n    color: #FFD213;\r\n}\r\n.box .dropdown-menu{\r\n    margin-top: 5px;\r\n    border-radius: 0;\r\n}\r\n.box .dropdown li a{\r\n    color: #ffd613;\r\n}\r\n.btn-default.btn1 {\r\n    box-shadow: none;\r\n    position: relative;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 10px 15px;\r\n    font-size: 17px ;\r\n    font-weight: 600;\r\n    background: #373737;\r\n    border-radius: 7px;\r\n    color: #ffffff;\r\n    float: none;\r\n    transition: all 0.35s;\r\n}\r\n\r\nheader .btn-default.btn1 {\r\n    margin: 0 0 0 6px;\r\n    float: right;\r\n}\r\n.btn-default.btn1 {\r\n    box-shadow: none;\r\n    position: relative;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 4px 15px;\r\n    font-size: 17px ;\r\n    font-weight: 600;\r\n    background: #ffd613;\r\n    border-radius: 4px;\r\n    color: #ffffff;\r\n    float: none;\r\n    transition: all 0.35s;\r\n}\r\n.btn-default.btn1:hover {\r\n    color: #191919;\r\n    background: #ffd613;\r\n    text-decoration: none;\r\n}\r\nh1.navbar-brand_ {\r\n    margin: 31px 0 0 0;\r\n    padding: 0;\r\n    float: left;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nh1.navbar-brand_ a {\r\n    display: inline-block;\r\n}\r\na {\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\nh1.navbar-brand_ a img {\r\n    width: 100%;\r\n}\r\n\r\nnav.tm_navbar {\r\n    border: none;\r\n    padding: 0;\r\n    margin: 62px 0 0 0;\r\n    float: right;\r\n    min-height: 0;\r\n    background: none;\r\n}\r\n\r\nnav.tm_navbar li:first-child {\r\n    margin: 0;\r\n}\r\nnav.tm_navbar li {\r\n    position: relative;\r\n    font-size: 15px;\r\n    line-height: 25px;\r\n    padding: 0;\r\n    margin: 0 0 0 30px;\r\n    float: left;\r\n}\r\n\r\nav.tm_navbar li.active > a {\r\n    color: #191919;\r\n    background: none !important;\r\n}\r\nnav.tm_navbar li a {\r\n    padding: 0;\r\n    font: 600 21px 'Raleway';\r\n    color: #777;\r\n    background: none;\r\n    position: relative;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav.tm_navbar li.active > a::after {\r\n    width: 100%;\r\n}\r\nnav.tm_navbar li a::after {\r\n    position: absolute;\r\n    bottom: -15px;\r\n    left: 0;\r\n    height: 11px;\r\n    width: 0;\r\n    background: #ffd613;\r\n    content: '';\r\n    display: block;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav.tm_navbar li:hover > a {\r\n    color: #191919;\r\n    background: none !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    height: auto;\r\n    padding: 15px 14px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    overflow: hidden;\r\n    color: #ffffff;\r\n}\r\n.navbar-brand img{\r\n    width:48%;\r\n}\r\n.navbar-nav > li > a {\r\n    padding-top: 8px !important;\r\n    padding-bottom: 4px !important;\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n    margin: 28px 0;\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n}\r\n.navbar-nav > li {\r\n    margin-left: 6px;\r\n}\r\n.navbar-default {\r\n    /* background-color: #f8f8f8; */\r\n    border: none;\r\n    background: #2882F7;\r\n}\r\n.navbar-right .active a{\r\n    border-bottom: 3px solid #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {\r\n    color: #ffffff;\r\n    background-color: transparent !important;\r\n}\r\n.navbar {\r\n    border-radius: 0 !important;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: #ffffff;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n}\r\ndefault .navbar-toggle:hover {\r\n    background-color: #AD1457;\r\n}\r\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n    background-color: #fff;\r\n}\r\n.navbar-default .navbar-toggle:hover .icon-bar, .navbar-default .navbar-toggle:focus .icon-bar{\r\n    background-color: #084da7;\r\n}\r\n.notify{\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n.notify-count{\r\n    position: absolute;\r\n    top: -5px;\r\n    right: -7px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n}\r\n.notify-cont{\r\n    padding: 0 20px;\r\n}\r\n.noftify-pro-img{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-top: 8px;\r\n    border-radius: 50%;\r\n}\r\n.ovrflow-h{\r\n    overflow: hidden;\r\n}\r\n.noftify-pro-h4{\r\n    font-size: 14px;\r\n}\r\n#notify-menu{\r\n    min-width: 250px;\r\n    background: #E7E9EC;\r\n    border: none;\r\n}\r\n#notify-menu li{\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#notify-head-a{\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n#notify-menu h4, #notify-menu p{\r\n    color: #2882f7;\r\n}\r\n#won-head{\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n}\r\n#nitify-li{\r\n    list-style: none;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .navbar-brand {\r\n        width:78%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!loading\">\r\n  \r\n  <div class=\"fluid-container\">\r\n    <nav class=\"navbar navbar-default  navbar-fixed-top\">\r\n        <div class=\"box\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                     <!-- <div class=\"col-lg-8 col-md-8\">\r\n                        <p class=\"title1\">Free phone: <strong>800-2345-6789</strong></p>\r\n                        <p class=\"title2\">Hours:  8am-8pm PST M-Th;   6am-3pm PST Fri</p>\r\n                    </div> -->\r\n                    \r\n\r\n                    <div class=\"pull-right\">\r\n                        <li class=\"dropdown\" *ngIf=\"userService.loggedIn()\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{userInfo.name | capitalize}} <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          \r\n                          <li *ngIf=\"userService.loggedIn()\"><a [routerLink]=\"['/myauctions']\">My Bids</a></li>\r\n                          <li *ngIf=\"userService.loggedIn()\"><a (click)=\"logout()\" href=\"#\">Log Out</a></li>\r\n                          \r\n                        </ul>\r\n                      </li>\r\n                        <!-- <a href=\"#\" class=\"btn-default btn1\">Sign In</a> -->\r\n                    </div>\r\n\r\n                    <div class=\"pull-right notify-cont\">\r\n\r\n                        <li *ngIf=\"count\" class=\"dropdown notify\" >\r\n                          <div class=\"notify-count\">{{countNumber}}</div>\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></a>\r\n                        <ul class=\"dropdown-menu\" id=\"notify-menu\">\r\n                          \r\n                          <li *ngFor=\"let item of info\">\r\n                            <a [routerLink]=\"['/winnerconfirm/'+item?._id]\" class=\"ovrflow-h\" id=\"notify-head-a\">\r\n                             <div class=\"col-md-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h4 id=\"won-head\">You Won a Bid!</h4>\r\n                                  </div>\r\n                                 \r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"row\">\r\n                                          <img  class=\"noftify-pro-img\" src=\"../../assets/uploads/{{item?.image||'default.png'}}\" alt=\"pro\">\r\n                                        </div>\r\n                                      </div>\r\n                                      \r\n                                    <div class=\"col-md-9\">\r\n                                          <h4 class=\"noftify-pro-h4\">{{item?.name}}</h4>\r\n                                          <!-- <p>Amount: $1000</p> -->\r\n                                      \r\n                                 \r\n                                  </div>\r\n                                </div>\r\n                                  \r\n                              </div>\r\n                              \r\n                              \r\n                            </a>\r\n                          </li>\r\n                    \r\n                          <!-- <li><a (click)=\"logout()\" href=\"#\">Log Out</a></li> -->\r\n                          \r\n                        </ul>\r\n                      </li>\r\n                        <!-- <a href=\"#\" class=\"btn-default btn1\">Sign In</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n      <div class=\"container\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"../../assets/images/brand.png\" alt=\"brand\"></a>\r\n          </div>\r\n      \r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            \r\n           \r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a></li>\r\n                <!-- <li class=\"dropdown\" >\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Manage <span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    \r\n                    <li><a href=\"#\">Users</a></li>\r\n                    <li><a href=\"#\">Polls</a></li>\r\n                    <li><a href=\"#\">Asign Poll</a></li>\r\n                    \r\n                  </ul>\r\n                </li> -->\r\n                \r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/runningauction']\" >Running Auctions</a></li>\r\n                    <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/registration']\">Registration</a></li> -->\r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/finishedauction']\" >Closed Auctions</a></li>\r\n                    <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li> -->\r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/upcomingauction']\" >Upcoming Auctions</a></li>\r\n                \r\n                \r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n      </div>\r\n    </nav>\r\n  \r\n    \r\n</div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavigationComponent = (function () {
    function NavigationComponent(userService, router, _productService, productService, config) {
        this.userService = userService;
        this.router = router;
        this._productService = _productService;
        this.productService = productService;
        this.config = config;
        this.brand_logo = "brand.png";
        this.count = true;
        this.loading = true;
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__(config.socketURL);
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
            else {
                // console.log(info);
                _this.userInfo = info;
                _this.loading = false;
                _this.getNotification();
            }
        });
        this.socket.on('notification', function (data) {
            if (_this.userInfo._id == data.user_id) {
                _this.getNotification();
            }
        });
    };
    NavigationComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.getNotification = function () {
        var _this = this;
        this.info = [];
        this.countNumber = 0;
        this.userService.getLoggedUSerDetails().subscribe(function (data3) {
            _this.productService.getNotif(data3._id).subscribe(function (data4) {
                // console.log(data4);
                data4.forEach(function (element) {
                    _this.countNumber++;
                    _this.info.push(element);
                    console.log(_this.info);
                    if (_this.info == null) {
                        _this.count = false;
                    }
                });
            });
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* Config */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ng-datepicker/ng-datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-datepicker-container\">\r\n  <input type=\"text\" *ngIf=\"!headless\" class=\"ngx-datepicker-input\" [(ngModel)]=\"displayValue\" readonly (click)=\"toggle()\">\r\n  <ng-content></ng-content>\r\n  <div class=\"ngx-datepicker-calendar-container ngx-datepicker-position-{{position}}\" *ngIf=\"isOpened\">\r\n    <div class=\"topbar-container\">\r\n      <svg width=\"7px\" height=\"10px\" viewBox=\"0 0 7 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" (click)=\"prevMonth()\">\r\n        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n          <g transform=\"translate(-923.000000, -1882.000000)\" fill=\"#CED0DA\">\r\n            <g transform=\"translate(80.000000, 1361.000000)\">\r\n              <g transform=\"translate(0.000000, 430.000000)\">\r\n                <g transform=\"translate(825.000000, 0.000000)\">\r\n                  <g transform=\"translate(0.000000, 72.000000)\">\r\n                    <g transform=\"translate(18.000000, 15.000000)\">\r\n                      <polygon id=\"Back\" points=\"6.015 4 0 9.013 6.015 14.025\"></polygon>\r\n                    </g>\r\n                  </g>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </g>\r\n      </svg>\r\n      <span class=\"topbar-title\" (click)=\"toggleView()\">{{ barTitle }}</span>\r\n      <svg width=\"7px\" height=\"10px\" viewBox=\"0 0 6 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" (click)=\"nextMonth()\">\r\n        <g id=\"Source-Sans---UI-Elements-Kit\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n          <g id=\"White-Layout\" transform=\"translate(-1182.000000, -1882.000000)\" fill=\"#CED0DA\">\r\n            <g id=\"Dropdowns-&amp;-Selector\" transform=\"translate(80.000000, 1361.000000)\">\r\n              <g id=\"Dropdowns\" transform=\"translate(0.000000, 430.000000)\">\r\n                <g id=\"Calendar\" transform=\"translate(825.000000, 0.000000)\">\r\n                  <g transform=\"translate(0.000000, 72.000000)\" id=\"Top-Bar-Nav\">\r\n                    <g transform=\"translate(18.000000, 15.000000)\">\r\n                      <polygon id=\"Forward\" transform=\"translate(262.007500, 9.012500) scale(-1, 1) translate(-262.007500, -9.012500) \" points=\"265.015 4 259 9.013 265.015 14.025\"></polygon>\r\n                    </g>\r\n                  </g>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </g>\r\n      </svg>\r\n    </div>\r\n    <div class=\"main-calendar-container\" *ngIf=\"view === 'days'\">\r\n      <div class=\"main-calendar-day-names\">\r\n        <span class=\"day-name-unit\" *ngFor=\"let name of dayNames\">{{ name }}</span>\r\n      </div>\r\n      <div class=\"main-calendar-days\">\r\n        <span class=\"day-unit\" *ngFor=\"let day of days; let i = index;\" [ngClass]=\"{ 'is-prev-month': !day.inThisMonth, 'is-today': day.isToday, 'is-selected': day.isSelected }\" (click)=\"setDate(i)\">{{ day.day }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-calendar-container\" *ngIf=\"view === 'years'\">\r\n      <div class=\"main-calendar-years\" slimScroll [options]=\"scrollOptions\">\r\n        <span class=\"year-unit\" *ngFor=\"let year of years; let i = index;\" [ngClass]=\"{ 'is-selected': year.isThisYear }\" (click)=\"setYear(i)\">{{ year.year }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ng-datepicker/ng-datepicker.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datepicker-position-bottom-left {\n  top: 40px;\n  right: 0; }\n\n.ngx-datepicker-position-bottom-right {\n  top: 40px;\n  left: 0; }\n\n.ngx-datepicker-position-top-left {\n  bottom: 40px;\n  right: 0; }\n\n.ngx-datepicker-position-top-right {\n  bottom: 40px;\n  left: 0; }\n\n.ngx-datepicker-container {\n  position: relative; }\n  .ngx-datepicker-container .ngx-datepicker-input {\n    padding: 5px 10px;\n    font-size: 14px;\n    width: 200px;\n    outline: none;\n    border: 1px solid #DFE3E9; }\n  .ngx-datepicker-container .ngx-datepicker-calendar-container {\n    position: absolute;\n    width: 300px;\n    background: #ffffff;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);\n    border: 1px solid #DFE3E9;\n    border-radius: 4px; }\n    .ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container {\n      width: 100%;\n      height: 50px;\n      padding: 15px;\n      border-bottom: 1px solid #DFE3E9;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n      .ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg {\n        cursor: pointer; }\n        .ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container svg g {\n          fill: #CED0DA; }\n      .ngx-datepicker-container .ngx-datepicker-calendar-container .topbar-container .topbar-title {\n        color: #3D495C;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer; }\n    .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container {\n      width: 100%;\n      height: 100%;\n      padding: 15px 10px 0;\n      font-size: 12px;\n      font-weight: 500; }\n      .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names {\n        color: #A4A9B1;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-day-names .day-name-unit {\n          width: calc(100% / 7);\n          text-transform: uppercase;\n          text-align: center; }\n      .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years {\n        padding: 15px 0;\n        width: 100%;\n        display: inline-block;\n        max-height: 275px;\n        overflow: hidden; }\n        .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit {\n          width: calc(100% / 7);\n          height: 40px;\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          float: left;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          cursor: pointer;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          border-radius: 50%;\n          color: #3D495C; }\n          .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-prev-month, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-prev-month, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-prev-month, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-prev-month {\n            color: #A4A9B1; }\n          .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit:hover, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-today, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit:hover, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-today, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit:hover, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-today, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit:hover, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-today {\n            background: #A4A9B1;\n            color: #ffffff; }\n          .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .day-unit.is-selected, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-days .year-unit.is-selected, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .day-unit.is-selected, .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit.is-selected {\n            background: #1A91EB;\n            color: #ffffff; }\n      .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years {\n        height: 210px;\n        display: block;\n        padding: 0; }\n        .ngx-datepicker-container .ngx-datepicker-calendar-container .main-calendar-container .main-calendar-years .year-unit {\n          width: calc(100% / 3);\n          border-radius: 10px; }\n\n.ngx-datepicker-container .ngx-datepicker-calendar-container {\n  z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ng-datepicker/ng-datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgDatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgDatepickerComponent = (function () {
    function NgDatepickerComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * Disable datepicker's input
         */
        this.headless = false;
        /**
         * Set datepicker's visibility state
         */
        this.isOpened = false;
        /**
         * Datepicker dropdown position
         */
        this.position = 'bottom-right';
        this.positions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.scrollOptions = {
            barBackground: '#DFE3E9',
            gridBackground: '#FFFFFF',
            barBorderRadius: '3',
            gridBorderRadius: '3',
            barWidth: '6',
            gridWidth: '6',
            barMargin: '0',
            gridMargin: '0'
        };
    }
    NgDatepickerComponent_1 = NgDatepickerComponent;
    Object.defineProperty(NgDatepickerComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            this.innerValue = val;
            this.onChangeCallback(this.innerValue);
        },
        enumerable: true,
        configurable: true
    });
    NgDatepickerComponent.prototype.ngOnInit = function () {
        this.view = 'days';
        this.date = new Date();
        this.setOptions();
        this.initDayNames();
        this.initYears();
        // Check if 'position' property is correct
        if (this.positions.indexOf(this.position) === -1) {
            throw new TypeError("ng-datepicker: invalid position property value '" + this.position + "' (expected: " + this.positions.join(', ') + ")");
        }
    };
    NgDatepickerComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes) {
            this.setOptions();
            this.initDayNames();
            this.init();
            this.initYears();
        }
    };
    NgDatepickerComponent.prototype.setOptions = function () {
        var today = new Date(); // this const was added because during my tests, I noticed that at this level this.date is undefined
        this.minYear = this.options && this.options.minYear || Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(today) - 30;
        this.maxYear = this.options && this.options.maxYear || Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(today) + 30;
        this.displayFormat = this.options && this.options.displayFormat || 'MMM D[,] YYYY';
        this.barTitleFormat = this.options && this.options.barTitleFormat || 'MMMM YYYY';
        this.firstCalendarDay = this.options && this.options.firstCalendarDay || 0;
        this.locale = this.options && { locale: this.options.locale } || {};
    };
    NgDatepickerComponent.prototype.nextMonth = function () {
        this.date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"])(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.prevMonth = function () {
        this.date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["subMonths"])(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.setDate = function (i) {
        this.date = this.days[i].date;
        this.value = this.date;
        this.init();
        this.close();
    };
    NgDatepickerComponent.prototype.setYear = function (i) {
        this.date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setYear"])(this.date, this.years[i].year);
        this.init();
        this.initYears();
        this.view = 'days';
    };
    NgDatepickerComponent.prototype.init = function () {
        var _this = this;
        var start = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"])(this.date);
        var end = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfMonth"])(this.date);
        this.days = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["eachDay"])(start, end).map(function (date) {
            return {
                date: date,
                day: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getDate"])(date),
                month: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(date),
                year: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(date),
                inThisMonth: true,
                isToday: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isToday"])(date),
                isSelected: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(date, _this.innerValue) && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(date, _this.innerValue) && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameYear"])(date, _this.innerValue)
            };
        });
        for (var i = 1; i <= Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"])(start) - this.firstCalendarDay; i++) {
            var date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["subDays"])(start, i);
            this.days.unshift({
                date: date,
                day: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getDate"])(date),
                month: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"])(date),
                year: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(date),
                inThisMonth: false,
                isToday: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isToday"])(date),
                isSelected: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(date, this.innerValue) && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(date, this.innerValue) && Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameYear"])(date, this.innerValue)
            });
        }
        this.displayValue = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(this.innerValue, this.displayFormat, this.locale);
        this.barTitle = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(start, this.barTitleFormat, this.locale);
    };
    NgDatepickerComponent.prototype.initYears = function () {
        var _this = this;
        var range = this.maxYear - this.minYear;
        this.years = Array.from(new Array(range), function (x, i) { return i + _this.minYear; }).map(function (year) {
            return { year: year, isThisYear: year === Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"])(_this.date) };
        });
    };
    NgDatepickerComponent.prototype.initDayNames = function () {
        this.dayNames = [];
        var start = this.firstCalendarDay;
        for (var i = start; i <= 6 + start; i++) {
            var date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["setDay"])(new Date(), i);
            this.dayNames.push(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(date, 'ddd', this.locale));
        }
    };
    NgDatepickerComponent.prototype.toggleView = function () {
        this.view = this.view === 'days' ? 'years' : 'days';
    };
    NgDatepickerComponent.prototype.toggle = function () {
        this.isOpened = !this.isOpened;
    };
    NgDatepickerComponent.prototype.close = function () {
        this.isOpened = false;
    };
    NgDatepickerComponent.prototype.writeValue = function (val) {
        if (val) {
            this.date = val;
            this.innerValue = val;
            this.init();
            this.displayValue = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"])(val), this.barTitleFormat, this.locale);
        }
    };
    NgDatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgDatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgDatepickerComponent.prototype.onBlur = function (e) {
        if (!this.isOpened) {
            return;
        }
        var input = this.elementRef.nativeElement.querySelector('.ngx-datepicker-input');
        if (input == null) {
            return;
        }
        if (e.target === input || input.contains(e.target)) {
            return;
        }
        var container = this.elementRef.nativeElement.querySelector('.ngx-datepicker-calendar-container');
        if (container && container !== e.target && !container.contains(e.target) && !e.target.classList.contains('year-unit')) {
            this.close();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgDatepickerComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgDatepickerComponent.prototype, "headless", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgDatepickerComponent.prototype, "isOpened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgDatepickerComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], NgDatepickerComponent.prototype, "onBlur", null);
    NgDatepickerComponent = NgDatepickerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng-datepicker',
            template: __webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.sass")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgDatepickerComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NgDatepickerComponent);
    return NgDatepickerComponent;
    var NgDatepickerComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shadow{\r\n    \r\n         margin-left: 140px;\r\n       \r\n    }\r\n    .image{\r\n        width:150px;\r\n    }\r\n    .bg-dark\r\n    {   \r\n        background: #343a40;\r\n        padding:2em 0;  \r\n    }\r\n    body {\r\n        margin-top: 100px;\r\n        background-color: #222;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        body {\r\n            margin-top: 50px;\r\n        }\r\n    }\r\n    \r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n    \r\n    #page-wrapper {\r\n        width: 100%;\r\n        padding: 0;\r\n        background-color: #fff;\r\n    }\r\n    \r\n    .huge {\r\n        font-size: 50px;\r\n        line-height: normal;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        #wrapper {\r\n            padding-left: 225px;\r\n        }\r\n    \r\n        #page-wrapper {\r\n            padding: 10px;\r\n        }\r\n    }\r\n    \r\n    /* Top Navigation */\r\n    \r\n    .top-nav {\r\n        padding: 0 15px;\r\n    }\r\n    \r\n    .top-nav>li {\r\n        display: inline-block;\r\n        float: left;\r\n    }\r\n    \r\n    .top-nav>li>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        line-height: 20px;\r\n        color: #999;\r\n    }\r\n    \r\n    .top-nav>li>a:hover,\r\n    .top-nav>li>a:focus,\r\n    .top-nav>.open>a,\r\n    .top-nav>.open>a:hover,\r\n    .top-nav>.open>a:focus {\r\n        color: #fff;\r\n        background-color: #000;\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu {\r\n        float: left;\r\n        position: absolute;\r\n        margin-top: 0;\r\n        border: 1px solid rgba(0,0,0,.15);\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu>li>a {\r\n        white-space: normal;\r\n    }\r\n    \r\n    ul.message-dropdown {\r\n        padding: 0;\r\n        max-height: 250px;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n    }\r\n    \r\n    li.message-preview {\r\n        width: 275px;\r\n        border-bottom: 1px solid rgba(0,0,0,.15);\r\n    }\r\n    \r\n    li.message-preview>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n    }\r\n    \r\n    li.message-footer {\r\n        margin: 5px 0;\r\n    }\r\n    \r\n    ul.alert-dropdown {\r\n        width: 200px;\r\n    }\r\n    \r\n    /* Side Navigation */\r\n    \r\n    @media(min-width:768px) {\r\n        .side-nav {\r\n            position: fixed;\r\n            top: 51px;\r\n            left: 225px;\r\n            width: 225px;\r\n            margin-left: -225px;\r\n            border: none;\r\n            border-radius: 0;\r\n            overflow-y: auto;\r\n            background-color: #222;\r\n            bottom: 0;\r\n            overflow-x: hidden;\r\n            padding-bottom: 40px;\r\n        }\r\n    \r\n        .side-nav>li>a {\r\n            width: 225px;\r\n        }\r\n    \r\n        .side-nav li a:hover,\r\n        .side-nav li a:focus {\r\n            outline: none;\r\n            background-color: #000 !important;\r\n        }\r\n    }\r\n    \r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a:hover {\r\n        color: #fff;\r\n    }\r\n    \r\n    /* Flot Chart Containers */\r\n    \r\n    .flot-chart {\r\n        display: block;\r\n        height: 400px;\r\n    }\r\n    \r\n    .flot-chart-content {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    /* Custom Colored Panels */\r\n    \r\n    .huge {\r\n        font-size: 40px;\r\n    }\r\n    \r\n    .panel-green {\r\n        border-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > .panel-heading {\r\n        border-color: #5cb85c;\r\n        color: #fff;\r\n        background-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a {\r\n        color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a:hover {\r\n        color: #3d8b3d;\r\n    }\r\n    \r\n    .panel-red {\r\n        border-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > .panel-heading {\r\n        border-color: #d9534f;\r\n        color: #fff;\r\n        background-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a {\r\n        color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a:hover {\r\n        color: #b52b27;\r\n    }\r\n    \r\n    .panel-yellow {\r\n        border-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > .panel-heading {\r\n        border-color: #f0ad4e;\r\n        color: #fff;\r\n        background-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a {\r\n        color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a:hover {\r\n        color: #df8a13;\r\n    }\r\n     ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Manage Products'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n              \r\n          \r\n<div class=\"wrapper\">\r\n        <div class=\"col-md-9 shadow\">\r\n                <!-- <h3 class=\"headng\" >Edit a Product</h3>\r\n                <br> -->\r\n  \r\n  <!-- <form class=\"well\" role=\"form\"   #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct()\" novalidate> -->\r\n        <form class=\"well\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updateProduct(arr1);\" novalidate>\r\n                <div *ngIf=\"showUpdate\" class=\"alert alert-success\">\r\n                        <strong>Update Product Successfully</strong>\r\n                      </div>\r\n      <!-- <form #form='ngForm' (ngSubmit)=\"addProduct()\" class=\"well\" > -->\r\n            <div class=\"form-group\" >\r\n                <label > Name *</label>\r\n                <input id=\"name\" name=\"name\" class=\"form-control\"\r\n                required  autofocus\r\n                [(ngModel)]=\"arr1.name\" #name=\"ngModel\" (keypress)=_keyPress1($event)>\r\n                <div *ngIf=\"f.submitted && !name.valid \"  class=\"alert alert-danger\"> ! Name is required</div>\r\n             \r\n            </div>\r\n        \r\n            <td><img src=\"assets/uploads/{{arr1.image || 'defualt.png'}}\" alt=\"\" class=\"image\"></td>\r\n            <div class=\"form-group\">\r\n                <label for=\"single\">Select Image</label>\r\n                <input type=\"file\" class=\"\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imageOr();\"  />                                  \r\n             </div>\r\n            <div class=\"form-group\" >\r\n                    <label >  Bid Amount *</label>\r\n                    <input id=\"bid_amount\" name=\"bid_amount\" class=\"form-control\"\r\n                    required  \r\n                    [(ngModel)]=\"arr1.bid_amount\" #bid_amount=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                    <div *ngIf=\"f.submitted && !bid_amount.valid\"  class=\"alert alert-danger\"> ! Amount is required</div>\r\n           \r\n                </div>\r\n\r\n                <div class=\"form-group\" >\r\n                        <label >  Minimum Bid Rate *</label>\r\n                        <input id=\"min_bid_rate\" name=\"min_bid_rate\" class=\"form-control\"\r\n                        required  \r\n                        [(ngModel)]=\"arr1.min_bid_rate\" #min_bid_rate=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                        <div *ngIf=\"f.submitted && !min_bid_rate.valid\"  class=\"alert alert-danger\"> ! Minimum Bid rate is required</div>\r\n               \r\n                    </div>\r\n        \r\n             <div class=\"form-group\" >\r\n                    <label > Bid Start time *</label>\r\n                    <datetime id=\"start_date\" name=\"start_date\"  [(ngModel)]=\"start_date\" [(ngModel)]=\"arr1.start_date\" [hasClearButton]=\"true\"  [datepicker]= \"datepickerOpts\"></datetime>\r\n                </div>\r\n                    <div *ngIf=\"start\">\r\n                    <div class=\"alert alert-danger\"> ! Start time is required</div>\r\n                </div>\r\n                <div class=\"form-group\" >\r\n                        <label > Bid End time *</label>\r\n                        <datetime name = \"end_date\"  [(ngModel)]=\"end_date\" [(ngModel)]=\"arr1.end_date\" [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\"></datetime>\r\n                        <div *ngIf=\"end\">\r\n                        <div  class=\"alert alert-danger\"> ! End time is required</div>\r\n                    </div>\r\n                    <div *ngIf=\"greater\">\r\n                        <div class=\"alert alert-danger\"> !End time must be after the Start time</div>\r\n                    </div>\r\n                    </div>\r\n\r\n            \r\n                    <!-- <image-upload></image-upload> -->\r\n            <!-- <div>\r\n                <label > Image</label>\r\n                <input type=\"file\"  name=\"pollqtn\"   required />\r\n            </div> -->\r\n           \r\n\r\n           \r\n            <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\r\n            <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\r\n            \r\n            <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\r\n            \r\n            <input type=\"file\" name =\"myfile\" ng-disabled=\"uploading\" style=\"display: none\">\r\n\r\n            <div class=\"form-group\" >\r\n                <label > Description</label>\r\n                <br>\r\n                <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"arr1.desc\" ></textarea>\r\n            </div>\r\n           \r\n            <!-- <input type=\"submit\" class=\"btn btn-info blakbtn\" value=\"Submit\"  > -->\r\n            <button type= \"submit\" class=\"btn btn-primary\">Update</button>\r\n            <!-- <input type=\"submit\" class=\"btn btn-primary\"  value=\"Update\"  > -->\r\n            <!-- <input type=\"button\" class=\"btn btn-primary\" (click)=\"clickMethod(arr1)\"  value=\"Delete\"  > -->\r\n           \r\n        </form>\r\n  \r\n      </div>\r\n     \r\n    </div>\r\n\r\n   \r\n     \r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  "

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // File Upload


var ProductDetailComponent = (function () {
    function ProductDetailComponent(_prductService, route, router, userService) {
        this._prductService = _prductService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/products/upload' });
        this.arr1 = {
            name: String,
            start_date: Date,
            end_date: Date,
            image: String
        };
        this.start = false;
        this.end = false;
        this.imageSelected = false;
        this.greater = false;
        this.showUpdate = false;
        // tableview: boolean = false;
        this.updateProEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteProEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.datepickerOpts = {
            startDate: new Date(Date.now()),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
        };
        this.datepickerOpts1 = {
            startDate: new Date(Date.now()),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            // console.log('abcd' + params.id);
            _this._prductService.getAProduct(params.id).subscribe(function (data) {
                _this.arr1 = data;
                // console.log(this.arr1.start_date);
                // console.log(this.arr1.start_date);
                // startdate: Date = new Date(this.arr1.start_date.toString())
                _this.start_date = new Date(_this.arr1.start_date.toString());
                _this.end_date = new Date(_this.arr1.end_date.toString());
                // this.dateinfo= data;
            });
        });
    };
    ProductDetailComponent.prototype.imageOr = function () {
        this.imageSelected = true;
    };
    ProductDetailComponent.prototype.updateProduct = function (arr1) {
        var _this = this;
        if (this.imageSelected == true) {
            this.uploader.uploadAll();
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
                response = JSON.parse(response);
                _this.arr1.image = response.filename;
                console.log(_this.arr1.image);
                if (arr1.start_date == undefined) {
                    _this.start = true;
                    //  alert("Bid Start time is required");
                }
                if (arr1.end_date == undefined) {
                    _this.end = true;
                    // alert("Bid End time is required");
                }
                if (arr1.start_date > arr1.end_date) {
                    _this.greater = true;
                }
                _this._prductService.updateProduct(arr1).subscribe(function (data1) {
                    _this.showUpdate = true;
                    setTimeout(function () {
                        _this.router.navigate(['/product-list']);
                    }, 2000);
                    // this.router.navigate(['/product-list'])
                });
            };
        }
        else if (this.imageSelected == false) {
            this.uploader.uploadAll();
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
                response = JSON.parse(response);
                _this.arr1.image = response.filename;
                console.log(_this.arr1.image);
            };
            // console.log(arr1);
            if (arr1.start_date == undefined) {
                this.start = true;
                //  alert("Bid Start time is required");
            }
            if (arr1.end_date == undefined) {
                this.end = true;
                // alert("Bid End time is required");
            }
            if (arr1.start_date > arr1.end_date) {
                this.greater = true;
            }
            this._prductService.updateProduct(arr1).subscribe(function (data1) {
                _this.showUpdate = true;
                setTimeout(function () {
                    _this.router.navigate(['/product-list']);
                }, 2000);
            });
        }
    };
    //  deleteProduct(arr1){
    //  }
    ProductDetailComponent.prototype.clickMethod = function (arr1) {
        var _this = this;
        if (confirm("Are you sure to delete the product?")) {
            this._prductService.deleteProduct(arr1).subscribe(function (data1) {
                if (data1) {
                    // console.log(data1);
                    alert("Delete Product Successfully");
                    _this.router.navigate(['/product-list']);
                }
            });
            // this.deleteProEvent.emit(this.pro);
        }
    };
    ProductDetailComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    ProductDetailComponent.prototype._keyPress1 = function (event) {
        var pattern = /[a-z,A-Z, ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-detail',
            template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]],
            inputs: ['pro'],
            outputs: ['updateProEvent', 'deleteProEvent']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    \r\n         margin-left: 140px;\r\n       \r\n    }\r\n    \r\n    .bg-dark\r\n    {   \r\n        background: #343a40;\r\n        padding:2em 0;  \r\n    }\r\n    body {\r\n        margin-top: 100px;\r\n        background-color: #222;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        body {\r\n            margin-top: 50px;\r\n        }\r\n    }\r\n    \r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n    \r\n    #page-wrapper {\r\n        width: 100%;\r\n        padding: 0;\r\n        background-color: #fff;\r\n    }\r\n    \r\n    .huge {\r\n        font-size: 50px;\r\n        line-height: normal;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        #wrapper {\r\n            padding-left: 225px;\r\n        }\r\n    \r\n        #page-wrapper {\r\n            padding: 10px;\r\n        }\r\n    }\r\n    \r\n    /* Top Navigation */\r\n    \r\n    .top-nav {\r\n        padding: 0 15px;\r\n    }\r\n    \r\n    .top-nav>li {\r\n        display: inline-block;\r\n        float: left;\r\n    }\r\n    \r\n    .top-nav>li>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        line-height: 20px;\r\n        color: #999;\r\n    }\r\n    \r\n    .top-nav>li>a:hover,\r\n    .top-nav>li>a:focus,\r\n    .top-nav>.open>a,\r\n    .top-nav>.open>a:hover,\r\n    .top-nav>.open>a:focus {\r\n        color: #fff;\r\n        background-color: #000;\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu {\r\n        float: left;\r\n        position: absolute;\r\n        margin-top: 0;\r\n        border: 1px solid rgba(0,0,0,.15);\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu>li>a {\r\n        white-space: normal;\r\n    }\r\n    \r\n    ul.message-dropdown {\r\n        padding: 0;\r\n        max-height: 250px;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n    }\r\n    \r\n    li.message-preview {\r\n        width: 275px;\r\n        border-bottom: 1px solid rgba(0,0,0,.15);\r\n    }\r\n    \r\n    li.message-preview>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n    }\r\n    \r\n    li.message-footer {\r\n        margin: 5px 0;\r\n    }\r\n    \r\n    ul.alert-dropdown {\r\n        width: 200px;\r\n    }\r\n    \r\n    /* Side Navigation */\r\n    \r\n    @media(min-width:768px) {\r\n        .side-nav {\r\n            position: fixed;\r\n            top: 51px;\r\n            left: 225px;\r\n            width: 225px;\r\n            margin-left: -225px;\r\n            border: none;\r\n            border-radius: 0;\r\n            overflow-y: auto;\r\n            background-color: #222;\r\n            bottom: 0;\r\n            overflow-x: hidden;\r\n            padding-bottom: 40px;\r\n        }\r\n    \r\n        .side-nav>li>a {\r\n            width: 225px;\r\n        }\r\n    \r\n        .side-nav li a:hover,\r\n        .side-nav li a:focus {\r\n            outline: none;\r\n            background-color: #000 !important;\r\n        }\r\n    }\r\n    \r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a:hover {\r\n        color: #fff;\r\n    }\r\n    \r\n    /* Flot Chart Containers */\r\n    \r\n    .flot-chart {\r\n        display: block;\r\n        height: 400px;\r\n    }\r\n    \r\n    .flot-chart-content {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    /* Custom Colored Panels */\r\n    \r\n    .huge {\r\n        font-size: 40px;\r\n    }\r\n    \r\n    .panel-green {\r\n        border-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > .panel-heading {\r\n        border-color: #5cb85c;\r\n        color: #fff;\r\n        background-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a {\r\n        color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a:hover {\r\n        color: #3d8b3d;\r\n    }\r\n    \r\n    .panel-red {\r\n        border-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > .panel-heading {\r\n        border-color: #d9534f;\r\n        color: #fff;\r\n        background-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a {\r\n        color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a:hover {\r\n        color: #b52b27;\r\n    }\r\n    \r\n    .panel-yellow {\r\n        border-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > .panel-heading {\r\n        border-color: #f0ad4e;\r\n        color: #fff;\r\n        background-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a {\r\n        color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a:hover {\r\n        color: #df8a13;\r\n    }\r\n     .image{\r\n         width:150px;\r\n     }\r\n     .example-button-row {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n      }\r\n      .addnew{\r\n          width:150px;\r\n      }\r\n      .search1{\r\n          float:right;\r\n      }\r\n      .search{\r\n        float:right;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"wrapper\">\r\n  \r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n            \r\n                 <header-title [title]=\"'Manage Products'\"></header-title>\r\n             \r\n  \r\n              </div>\r\n<div class=\"col-md-9 tab\" >\r\n<br>\r\n\r\n<button type=\"button\" class=\"btn btn-primary addnew\" data-toggle=\"modal\" data-target=\"#myModal\">+Add New</button>\r\n\r\n<div id=\"myModal\"  class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Add New Product</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          \r\n      <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct();\" novalidate>\r\n              <!-- <flash-messages></flash-messages> -->\r\n              <div *ngIf=\"showSuccess\" class=\"alert alert-success\">\r\n                  <strong>Product Added Successfully</strong>\r\n                </div>\r\n          <div class=\"form-group\" >\r\n              <label > Name *</label>\r\n              <input id=\"name\" name=\"name\" class=\"form-control\"\r\n              required  autofocus\r\n              [(ngModel)]=\"newproduct.name\" #name=\"ngModel\" >\r\n              <div *ngIf=\"f.submitted && !name.valid \"  class=\"alert alert-danger\"> ! Name is required</div>\r\n           \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"single\">Select Image</label>\r\n              <input type=\"file\" class=\"\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imageOr();\"/>                                  \r\n           </div>\r\n            \r\n\r\n          <div class=\"form-group\" >\r\n                  <label >  Bid Amount *</label>\r\n                  <input id=\"bid_amount\" name=\"bid_amount\" class=\"form-control\"\r\n                  required  \r\n                  [(ngModel)]=\"newproduct.bid_amount\" #bid_amount=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                  <div *ngIf=\"f.submitted && !bid_amount.valid\"  class=\"alert alert-danger\"> ! Amount is required</div>\r\n         \r\n              </div>\r\n\r\n              <div class=\"form-group\" >\r\n                      <label >  Minimum Bid Rate *</label>\r\n                      <input id=\"min_bid_rate\" name=\"min_bid_rate\" class=\"form-control\"\r\n                      required  \r\n                      [(ngModel)]=\"newproduct.min_bid_rate\" #min_bid_rate=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                      <div *ngIf=\"f.submitted && !min_bid_rate.valid\"  class=\"alert alert-danger\"> ! Minimum Bid rate is required</div>\r\n             \r\n                  </div>\r\n      \r\n           <div class=\"form-group\" >\r\n                  <label > Bid Start time *</label>\r\n                  <datetime name=\"start_date\" required  [(ngModel)]=\"newproduct.start_date\"  [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\" ></datetime>\r\n                  <div *ngIf=\"f.submitted && !newproduct.start_date\"  class=\"alert alert-danger\"> !Start time is required</div>\r\n              \r\n              </div>\r\n              <div class=\"form-group\" >\r\n                      <label > Bid End time *</label>\r\n                      <datetime name = \"end_date\"  required [(ngModel)]=\"newproduct.end_date\" [hasClearButton]=\"true\"  [datepicker]= \"datepickerOpts\" ></datetime>\r\n                      <div *ngIf=\"f.submitted && !newproduct.end_date\"  class=\"alert alert-danger\"> !End time is required</div>\r\n                      <div *ngIf=\"greater\">\r\n                          <div class=\"alert alert-danger\"> !End time must be after the Start time</div>\r\n                      </div>\r\n                  </div>\r\n\r\n          <div class=\"form-group\" >\r\n              <label > Description</label>\r\n              <br>\r\n              <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"newproduct.desc\" ></textarea>\r\n          </div>\r\n\r\n          <button type= \"submit\" class=\"btn btn-primary\" >Submit</button>\r\n         \r\n      </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n    <!-- Trigger the modal with a button -->\r\n \r\n  \r\n    <!-- Modal -->\r\n   \r\n \r\n\r\n<br>\r\n<br>\r\n\r\n<app-product></app-product>\r\n  \r\n \r\n    \r\n</div>\r\n   \r\n</div>\r\n\r\n           \r\n</div>\r\n\r\n\r\n<footer></footer> "

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FlashMessagesService } from 'angular2-flash-messages';





 // File Upload
var ProductListComponent = (function () {
    // constructor( private _flashMessagesService: FlashMessagesService, private _prductService : ProductService, private router: Router, private _userService : UserService ) { }
    function ProductListComponent(_prductService, router, _userService) {
        this._prductService = _prductService;
        this.router = router;
        this._userService = _userService;
        this.showSuccess = false;
        this.tableview = true;
        // private deleteProEvent = new EventEmitter();
        this.SelectPro = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/products/upload' });
        this.imageselect = false;
        this.greater = false;
        this.hideModal = false;
        this.newproduct = {
            name: '',
            desc: '',
            bid_amount: '',
            min_bid_rate: '',
            start_date: '',
            end_date: '',
            image: ''
        };
        this.datepickerOpts1 = {
            startDate: new Date(Date.now()),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
        };
        // _keyPress1(event: any) {
        //   const pattern = /[a-z,A-Z,1-9  ]/;
        //   let inputChar = String.fromCharCode(event.charCode);
        //   if (!pattern.test(inputChar)) {
        //     // invalid character, prevent input
        //     event.preventDefault();
        //   }
        // }
        this.datepickerOpts = {
            startDate: new Date(Date.now()),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
        };
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        // this.arr1=[];
        this._prductService.getProducts().subscribe(function (data1) {
            _this.arr1 = data1;
            console.log(data1);
            //  data1.forEach(function(item) {
            //   this.arr1.push(item);
            //   console.log(this.arr1);
            //  });
            // this.prodata = data1;
        });
        this._userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this._prductService.getProducts().subscribe(function (data1) {
            _this.arr1 = data1;
            console.log(data1);
            //  data1.forEach(function(item) {
            //   this.arr1.push(item);
            //   console.log(this.arr1);
            //  });
            // this.prodata = data1;
        });
    };
    ProductListComponent.prototype.onSelect = function () {
        // this.router.navigate(['/product-detail'+prodata.id])
        // this.tableview = false;
    };
    ProductListComponent.prototype.imageOr = function () {
        this.imageselect = true;
    };
    ProductListComponent.prototype.addProduct = function () {
        var _this = this;
        // console.log("here");
        if (this.newproduct.start_date > this.newproduct.end_date) {
            this.greater = true;
        }
        else {
            this.greater = false;
            if (this.imageselect == true) {
                this.uploader.uploadAll();
                this.uploader.onCompleteItem = function (item, response, status, headers) {
                    response = JSON.parse(response);
                    _this.newproduct.image = response.filename;
                    _this._prductService.addProduct(_this.newproduct).subscribe(function (data1) {
                        if (data1) {
                            _this.showSuccess = true;
                            setTimeout(function () {
                                _this.showSuccess = false;
                                // console.log("Error created user");
                            }, 1000);
                            window.location.reload();
                        }
                        else {
                            alert("Error");
                            console.log("error");
                        }
                    });
                    console.log(_this.greater);
                };
            }
            else if (this.imageselect == false) {
                if (this.newproduct.start_date > this.newproduct.end_date) {
                    this.greater = true;
                    // this._userService.sendmail().subscribe(data => { });
                }
                else if (this.newproduct.start_date <= this.newproduct.end_date) {
                    this.greater = false;
                    this._prductService.addProduct(this.newproduct).subscribe(function (data) {
                        if (data) {
                            _this.showSuccess = true;
                            setTimeout(function () {
                                _this.showSuccess = false;
                                // console.log("Error created user");
                            }, 1000);
                            window.location.reload();
                        }
                        else {
                            alert("Error");
                            console.log("error");
                        }
                    });
                    //  alert("Add Product Successfully");
                    //  this.router.navigate(['/product-list']);
                    //  window.location.reload();
                    //  this.router.navigate(['/product-list']);
                    //  this.hideModal =true;
                    //  jQuery("#myModal").modal("hide");
                    //  
                }
            }
        }
    };
    ProductListComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    ProductListComponent.prototype.deleteProduct = function (pid) {
        var _this = this;
        console.log(pid);
        this._prductService.deleteProduct(pid).subscribe(function (data1) {
            if (data1) {
                // console.log(data1);
                alert("Delete Product Successfully");
                location.reload();
                _this.router.navigate(['/product-list']);
            }
        });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]],
            // pipes :[]
            inputs: ['pros'],
            outputs: ['SelectPro'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductPipe = (function () {
    function ProductPipe() {
    }
    ProductPipe.prototype.transform = function (pros, term) {
        //check if serach term in undefined
        if (term == undefined)
            return pros;
        return pros.filter(function (pro) {
            return pros.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    ProductPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'product'
        })
    ], ProductPipe);
    return ProductPipe;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .proimg{\r\n    width: 100px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div *ngIf=\"DeleteSuccess\" class=\"alert alert-success\">\r\n    <strong>Deleted Successfully</strong>\r\n  </div>\r\n<div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"example-container mat-elevation-z8\">\r\n  \r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n  \r\n  \r\n      <!-- Progress Column -->\r\n      <ng-container matColumnDef=\"action\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> \r\n          <a href =\"/product-detail/{{row.id}}\" class=\"btn btn-primary btn-xs\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></a>\r\n          <a href=\"#\" class=\"btn btn-primary btn-xs\" data-target=\"#myModal1\" (click)=\"product_det(row.id)\"  data-toggle=\"modal\" ><i class=\"fa fa-trash-o\"></i></a>\r\n          <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n          \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <!-- <div class=\"modal-header\"> -->\r\n                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n                <!-- </div> -->\r\n                <div class=\"modal-body\">\r\n                    <h4 class=\"modal-title\">Are you sure to delete?</h4>\r\n                \r\n                </div>\r\n              \r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                  <button type=\"button\" (click)=\"deleteProduct(pid)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n                </div>\r\n              </div>\r\n          \r\n            </div>\r\n          </div>\r\n          \r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"description\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.desc}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"enddate\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> End Date </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.end_date | date: 'dd-MM-yyyy h:mm a'}}</mat-cell>\r\n        \r\n      </ng-container>\r\n      <ng-container matColumnDef=\"startdate\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.start_date | date: 'dd-MM-yyyy h:mm a'}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"rate\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Minimum Bid rate </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.min_bid_rate}}</mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"amount\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Bid Amount </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.bid_amount}}</mat-cell>\r\n      </ng-container>\r\n      \r\n      <ng-container matColumnDef=\"image\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Image </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"><img class=\"proimg\" src=\"assets/uploads/{{row.image}}\" alt=\"\" ></mat-cell>\r\n      </ng-container>\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n  \r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
// import { FileUploader } from 'ng2-file-upload';


// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// import { FileUploader } from 'ng2-file-upload';

var ProductComponent = (function () {
    function ProductComponent(productservice, router, _userService) {
        // Create 100 users
        this.productservice = productservice;
        this.router = router;
        this._userService = _userService;
        this.DeleteSuccess = false;
        this.displayedColumns = ['name', 'image', 'amount', 'rate', 'startdate', 'enddate', 'description', 'action'];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        var users = [];
        this.productservice.getProducts().subscribe(function (data) {
            data.forEach(function (item, index) {
                users.push({
                    id: item._id,
                    name: item.name,
                    image: item.image,
                    bid_amount: item.bid_amount,
                    min_bid_rate: item.min_bid_rate,
                    start_date: item.start_date,
                    end_date: item.end_date,
                    desc: item.desc
                });
            });
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableDataSource */](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ProductComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ProductComponent.prototype.deleteProduct = function (pid) {
        var _this = this;
        console.log(pid);
        this.productservice.deleteProduct(pid).subscribe(function (data1) {
            if (data1) {
                // console.log(data1);
                setTimeout(function () {
                    _this.DeleteSuccess = true;
                    window.location.reload();
                    // console.log("Error created user");
                }, 1000);
                //  alert("Delete Product Successfully");
                // window.location.reload();
                //  this.router.navigate(['/product-list'])
            }
        });
    };
    ProductComponent.prototype.product_det = function (id) {
        this.pid = id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatPaginator */])
    ], ProductComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSort */])
    ], ProductComponent.prototype, "sort", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
            // providers: [ProductService]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/read-more/read-more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadMoreComponent = (function () {
    function ReadMoreComponent(elementRef) {
        this.elementRef = elementRef;
        this.maxLength = 100;
        this.hideToggle = true;
        this.isCollapsed = true;
    }
    ReadMoreComponent.prototype.toggleView = function () {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    };
    ReadMoreComponent.prototype.determineView = function () {
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        }
        else if (this.isCollapsed == false) {
            this.currentText = this.text;
        }
    };
    ReadMoreComponent.prototype.ngOnChanges = function () {
        this.determineView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ReadMoreComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ReadMoreComponent.prototype, "maxLength", void 0);
    ReadMoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'read-more',
            template: "\n        <div [innerHTML]=\"currentText\">\n        </div>\n            <a [class.hidden]=\"hideToggle\" (click)=\"toggleView()\">Read {{isCollapsed? 'more':'less'}}</a>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: table;\r\n  overflow: hidden;\r\n  background: #1a1a1a;\r\n}\r\n\r\na {\r\n  color: #6897bb !important;\r\n  outline: none !important;\r\n  text-decoration: underline !important;\r\n}\r\n\r\n.checkbox {\r\n  color:black;\r\n}\r\n.center {\r\n  max-width: 478px;\r\n  width: 100%;\r\n  padding: 30px;\r\n  margin: 0 auto;\r\n  float: none;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 26px 27px 59px #eaeaea;\r\n}\r\n\r\ntextarea,\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"datetime\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"date\"],\r\ninput[type=\"month\"],\r\ninput[type=\"time\"],\r\ninput[type=\"week\"],\r\ninput[type=\"number\"],\r\ninput[type=\"email\"],\r\ninput[type=\"url\"],\r\ninput[type=\"search\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"color\"],\r\n.uneditable-input {\r\n  /* border: 3px solid; */\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n  height: 50px;\r\n}\r\n\r\ntextarea:focus,\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ninput[type=\"datetime\"]:focus,\r\ninput[type=\"datetime-local\"]:focus,\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"month\"]:focus,\r\ninput[type=\"time\"]:focus,\r\ninput[type=\"week\"]:focus,\r\ninput[type=\"number\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"url\"]:focus,\r\ninput[type=\"search\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"color\"]:focus,\r\n.uneditable-input:focus {\r\n  border: 3px solid #6897bb;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n\r\n.modal-footer .btn-default {\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.modal-footer .btn-default:hover {\r\n  border: 1px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n/* .btn-default {\r\n  border: 3px solid transparent;\r\n} */\r\n\r\n.btn-default:hover {\r\n  border: 3px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n/* /* .wrapper {\r\n  /* display: table-cell; */\r\n  /* vertical-align: middle; */\r\n/* } */  */\r\n\r\n\r\n.wrapper\r\n{\r\n    border: 3px solid bl;\r\n}\r\n.modal-body {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body style=\"background-color:#f3f3f3;padding: 8% 0 12% 0;\">\n<br>\n<div class=\"wrapper center\">\n  <br>\n  <form class=\"form-horizontal\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onRegisterSubmit();\" novalidate>\n    <div *ngIf=\"showSuccess\" class=\"alert alert-success\">\n      <strong>Account created successfully, Please verify your Email address</strong>\n    </div>\n    <div *ngIf=\"showDanger\" class=\"alert alert-danger\">\n      <strong>The email address you specified is already in use. Please login to continue</strong>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\n        <div class=\"col-md-12 col-xs-12\">\n        <!-- <label for=\"exampleInputEmail1\">Name</label> -->\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"newUser.name\" name=\"name\" #name=\"ngModel\">\n          <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n      <div class=\"col-md-12 col-xs-12\">\n      <!-- <label >User Name</label> -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"newUser.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" #email=\"ngModel\">\n        <div *ngIf=\"f.submitted && email.invalid\">\n            <!-- <div *ngIf=\"!email.valid && newUser.email=='' \" class=\"help-block\">Email is required</div> -->\n          <div *ngIf=\"email.errors.pattern\" class=\"help-block\">! Email id is not valid</div>\n          <div *ngIf=\"email.errors.required\" class=\"help-block\">! Email id is required</div>\n        </div> \n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\n      <div class=\"col-md-12 col-xs-12\">\n      <!-- <label >Phone Number</label> --> \n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newUser.phone\" name=\"phone\" #phone=\"ngModel\">\n        <div *ngIf=\"f.submitted && phone.invalid\">\n          <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 10 digits</div>\n          <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Phone Number is required</div>\n          <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\n        </div> \n      </div>\n     </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"> \n      \n      <div class=\"col-md-12 col-xs-12\">\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" required validateEqual=\"confirmPassword\" reverse=\"true\" [(ngModel)]=\"newUser.password\" name=\"password\" #password=\"ngModel\"> \n        <div *ngIf=\"f.submitted && password.invalid\">\n            <div *ngIf=\"password.errors.required\" class=\"help-block\">! Password is required</div>\n            <div *ngIf=\"password.errors.pattern\" class=\"help-block\">! Password contain atleast 6 characters and should contain one number,one character and one special character</div>\n        </div> \n        </div>\n    </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\n     \n      <div class=\"col-md-12 col-xs-12\">\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" required validateEqual=\"password\" placeholder=\"Confirm Password\" required validateEqual=\"password\" reverse=\"false\" [(ngModel)]=\"User.confirmPassword\" name=\"confirmPassword\" #confirmPassword=\"ngModel\"> \n        <div *ngIf=\"!confirmPassword.valid && (f.submitted)\" class=\"help-block\">! Password not Match</div>   \n        \n        </div>\n    </div> \n\n\n    <div class=\"form-group\">\n      <div class=\"col-md-12 col-xs-12\">\n        <button type=\"submit\" class=\"btn btn-default\">Sign up</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-md-12 col-xs-12\">\n          <div class=\"checkbox\">\n            <label>\n              By creating an account, you agree to Auction's<a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">\n            Terms and Conditions\n            </a>\n          </label>\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"form-group\">\n        <div class=\"col-md-12 col-xs-12\">\n          \n            <label>Already have an account?  <a [routerLink]=\"['/login']\">\n            Sign In\n            </a>\n          </label>\n          \n        </div>\n    </div>\n\n</form>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\"> \n            Terms and Conditions</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h4>Conditions of Use</h4>\n          \n          <p>Welcome to Auction. Auction Services LLC and/or its affiliates (\"Auction\") provide website features and other products and services to you when you visit or bid at Auction.com, use Auction products or services, use Auction applications for mobile, or use software provided by Auction in connection with any of the foregoing (collectively, \"Auction Services\"). Auction provides the Auction Services subject to the following conditions.\n              <br>\n              <b>By using Auction Services, you agree to these conditions. Please read them carefully.</b>\n              <br>\n             When you using Auction, you also will be subject to the guidelines, terms and agreements applicable to that Auction Service (\"Service Terms\"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.\n              <br>\n             <b> ELECTRONIC COMMUNICATIONS</b>\n              <br>\n              When you use Auction Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Auction Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.\n              <br>\n              <b>COPYRIGHT</b>\n              <br>\n              All content included in or made available through any Auction Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Auction or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Auction Service is the exclusive property of Auction and protected by U.S. and international copyright laws.\n              <br>\n              <b>LICENSE AND ACCESS</b>\n              <br>\n              Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Auction or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Auction Services. This license does not include any resale or commercial use of any Auction Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Auction Service or its contents; any downloading, copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction tools. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Auction or its licensors, suppliers, publishers, rightsholders, or other content providers. No Auction Service, nor any part of any Auction Service, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Auction. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Auction without express written consent. You may not use any meta tags or any other \"hidden text\" utilizing Auction's name or trademarks without the express written consent of Auction. You may not misuse the Auction Services. You may use the Auction Services only as permitted by law. The licenses granted by Auction terminate if you do not comply with these Conditions of Use or any Service Terms.\n              </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { EqualTextValidator } from "angular2-text-equality-validator"; 


// import { FlashMessagesService } from 'angular2-flash-messages';
var RegistrationComponent = (function () {
    function RegistrationComponent(userService, routes) {
        this.userService = userService;
        this.routes = routes;
        this.showSuccess = false;
        this.showDanger = false;
        this.timestamp = new Date().getTime().toString();
        this.newUser = {
            name: '',
            email: '',
            phone: '',
            password: '',
            // confirmPassword : ''
            verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),
        };
        this.User = {
            confirmPassword: ''
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.newUser);
        this.userService.registerUser(this.newUser).subscribe(function (data) {
            if (data.success == true) {
                // this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
                _this.showSuccess = true;
                setTimeout(function () {
                    _this.routes.navigate(['/login']);
                    console.log("successfull created user");
                }, 3000);
            }
            else {
                // this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
                _this.showDanger = true;
                setTimeout(function () {
                    _this.showDanger = false;
                    console.log("Error created user");
                }, 4000);
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n\r\n\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    \r\n\r\n.brdr label{\r\n    float: left;\r\npadding-right: 10px;\r\npadding-top: 6px;\r\n} \r\n.btn2{border-radius:0px;    padding: 11px 20px; }\r\n.brdr{border:1px solid #ccc;padding:5px 20px; } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n                 \r\n<div class=\"container\" >\r\n\r\n\r\n\r\n    <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n            <div class=\"col-md-9 col-xs-9 brdr\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 col-xs-4\">\r\n                                        <label>Start Date</label>\r\n                                      </div>\r\n                                        <div class=\"col-md-8 col-xs-8\">\r\n\r\n                                        <input type=\"text\" class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedStartDate($event, daterange)\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-4 col-xs-4\">\r\n                                                <label>End Date</label>\r\n                                              </div>\r\n                                              <div class=\"col-md-8 col-xs-8\">\r\n                                                <input type=\"text\"  class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"optionsEnd\" (selected)=\"selectedEndDate($event, daterange)\" />\r\n                                            </div>\r\n                                        </div>\r\n                                \r\n                            </div>\r\n                            \r\n                    </div>   \r\n                </div>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <div class=\"clearfix\"></div> \r\n\r\n        <div *ngFor=\"let product of (products | dateSearch:startFrom:startUpto:endFrom:endUpto)\"  class=\"item  col-xs-4 col-lg-4\">\r\n            <div class=\"thumbnail\">\r\n                \r\n                <img class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n                <div class=\"caption\">\r\n                    <h4 class=\"group inner list-group-item-heading text-center\">\r\n                        {{product.name}}</h4>\r\n                        <hr>\r\n                        <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                        <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                      </p>\r\n                    <hr>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Start Price\r\n                            <p class=\"lead\"> {{product.bid_amount | number:'1.2-2'}}</p>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                          Ends In\r\n                            <p class=\"lead\">\r\n                              <!-- {{product.end_date | date: 'dd-mm-yyyy h:mm:ss'}} -->\r\n                              <app-count-down-timer (onTimeOver)=\"timeOver()\" [inputDate]=\"product.end_date\"></app-count-down-timer>\r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date | date: 'MMMM dd, yyyy h:mm:ss'\"></app-count-down-timer> -->\r\n\r\n                             \r\n                              \r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date\"></app-count-down-timer> -->\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row margn\" >\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12 text-center\">\r\n                           <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.user_details.length}}</a>\r\n                           \r\n                        </div>\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                          \r\n                              <!-- Modal content-->\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                  <h4 class=\"modal-title\">User Involved - {{involvedUsers.user_details.length}}</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <table class=\"table\">\r\n                                        <thead class=\"thead-inverse\">\r\n                                    <tr>\r\n                                      <th>Slno</th>\r\n                                      <th>Name</th>\r\n                                      <th>Bid Amount</th>\r\n                                      <th>Time</th>\r\n                                      <th>Status</th>\r\n                                    \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody *ngIf=\"involvedUsers.bidders.length ==0\">\r\n                                      <tr >\r\n                                            <td colspan=\"4\" class=\"text-center\">No User Involved</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  <tbody *ngIf=\"involvedUsers.bidders.length > 0\" >\r\n                                \r\n                                      <tr  *ngFor=\"let usr of involvedUsers.bidders;let i = index\" >\r\n                                            <td >{{i+1}}</td>\r\n                                            <td >{{users[usr.user_id].name}}</td>\r\n                                            <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                            <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                            <td >{{usr.bid_status}}</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  </table>\r\n                                \r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                </div>\r\n                              </div>\r\n                          \r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center margn\">\r\n                                <strong>Last Bid Amount - {{product.lastBidprice | number:'1.2-2'}}</strong>\r\n                                 <br>\r\n                                 {{product.lastBiduser}} \r\n                                 <br> {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                      \r\n                        </div>\r\n                        <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                           No bidder Found\r\n                          </div>\r\n               \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n\r\n</div>\r\n<div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n        <h3 class=\"text-center\"> No Product Found</h3>\r\n    </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunningAuctionBackComponent = (function () {
    function RunningAuctionBackComponent(productService, userService, router, config) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.involvedUsers = [];
        this.startFrom = '';
        this.startUpto = '';
        this.endFrom = '';
        this.endUpto = '';
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.optionsEnd = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.socketURL);
    }
    RunningAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  this.picker.datePicker.setStartDate('2017-03-27');
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // });
        // this.startDate = new Date();
        // this.endDate = new Date();
        this.userService.getAllUsersById().subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
        this.socket.on('userbidreject', function (data) {
            _this.getAllproduct();
        });
        this.socket.on('newbid', function (data) {
            _this.getAllproduct();
        });
        this.socket.on('startbid', function (data) {
            _this.getAllproduct();
        });
        this.getAllproduct();
    };
    RunningAuctionBackComponent.prototype.getAllproduct = function () {
        var _this = this;
        this.productService.getAllrunningProduct().subscribe(function (data) {
            _this.involvedUsers.bidders = [];
            _this.involvedUsers.user_details = [];
            data.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                var lastBiduserId = '';
                item.bidders.forEach(function (bidder, i) {
                    //console.log(bidder);
                    if (bidder.amount >= lastBidprice) {
                        lastBidprice = bidder.amount;
                        lastBiduser = _this.users[bidder.user_id].name;
                        lastBiduserId = _this.users[bidder.user_id]._id;
                        lastBidTime = bidder.date_time;
                    }
                });
                data[index].lastBidprice = lastBidprice;
                data[index].lastBiduser = lastBiduser;
                data[index].lastBidTime = lastBidTime;
                data[index].lastBiduserId = lastBiduserId;
            });
            _this.products = data;
            console.log(_this.products);
        });
    };
    RunningAuctionBackComponent.prototype.updateInvolved = function (product) {
        this.involvedUsers = product;
        // console.log(this.involvedUsers);
    };
    RunningAuctionBackComponent.prototype.timeOver = function () {
        this.getAllproduct();
    };
    RunningAuctionBackComponent.prototype.selectedStartDate = function (value, datepicker) {
        this.startFrom = value.start;
        this.startUpto = value.end;
    };
    RunningAuctionBackComponent.prototype.selectedEndDate = function (value, datepicker) {
        this.endFrom = value.start;
        this.endUpto = value.end;
    };
    RunningAuctionBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-running-auction-back',
            template: __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.css")],
            inputs: ["startFrom", "startUpto", "endFrom", "endUpto"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], RunningAuctionBackComponent);
    return RunningAuctionBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/runningauction/runningauction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/runningauction/runningauction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\" id=\"c-auction\">\r\n    <h4 class=\"page-head mrgn-nav-top\">Running Auctions</h4>\r\n    <div *ngIf=\"products?.length > 0; else noProduct\">\r\n        <div  *ngFor=\"let product of products\">\r\n          <app-card-running [product]=\"product\" [users]=\"users\" [user]=\"user\"></app-card-running>\r\n      </div>\r\n    </div>\r\n    <ng-template #noProduct>\r\n        <div class=\"no-item\">\r\n            <h4>Sorrry! No items to display!</h4>\r\n        </div>\r\n      </ng-template>\r\n  </div>\r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/runningauction/runningauction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningauctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunningauctionComponent = (function () {
    function RunningauctionComponent(productService, userService, router, config) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.product_ids = [];
        this.involvedUsers = [];
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(config.socketURL);
    }
    RunningauctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        this.socket.on('startbid', function (data) {
            // console.log(data);
            if (!_this.product_ids.includes(data.prod_id)) {
                _this.productService.getProduct(data.prod_id).subscribe(function (data) {
                    _this.products.push(data);
                    _this.product_ids.push(data._id);
                });
            }
        });
        this.userService.getLoggedUSerDetails().subscribe(function (data) {
            _this.user = data;
            // console.log(this.user);
        });
        this.userService.getAllUsersById().subscribe(function (data) {
            _this.users = data;
            // console.log(this.users);
        });
        this.productService.getAllrunningProduct().subscribe(function (data) {
            // console.log(data);
            data.forEach(function (item, index) {
                _this.product_ids.push(item._id);
            });
            //    var lastBidprice = item.bid_amount;
            //    var lastBiduser = '';
            //    var lastBidTime = '';
            //    var lastBiduserId = '';
            //    item.bidders.forEach((bidder, i) => {
            //      console.log(bidder);
            //      if(bidder.amount >= lastBidprice){
            //         lastBidprice = bidder.amount;
            //         lastBiduser = this.users[bidder.user_id].name;
            //         lastBiduserId = this.users[bidder.user_id]._id;
            //         lastBidTime = bidder.date_time;
            //      }
            //    });
            //    data[index].lastBidprice = lastBidprice;
            //    data[index].lastBiduser = lastBiduser;
            //    data[index].lastBidTime = lastBidTime;
            //    data[index].lastBiduserId = lastBiduserId;
            //    data[index].mybid = (lastBiduserId == this.user._id) ? true:false ;
            //  });
            _this.products = data;
        });
    };
    RunningauctionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-runningauction',
            template: __webpack_require__("../../../../../src/app/runningauction/runningauction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/runningauction/runningauction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], RunningauctionComponent);
    return RunningauctionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (polls, searchTerm) {
        if (searchTerm === undefined) {
            return polls;
        }
        return polls.filter(function (poll) {
            // console.log(poll.question);
            return poll.question.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/product-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductServiceService = (function () {
    function ProductServiceService(_http) {
        this._http = _http;
        this.authToken = '';
    }
    ProductServiceService.prototype.loadClosedProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/completedproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadHighestBidder = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/highBid/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadUpcomingProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/upcomingproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadMyAuctionProduct = function () {
        var id = this.loadUserId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/myauctionproduct/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.addInterestedCandidate = function (id) {
        this.loadToken();
        //  headers.append('Authorization', this.authToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        //headers.append('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/products/updateInterested/' + id, {}, options)
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadNotifications = function () {
        var Uid = this.loadUserId();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/mynotifications/' + Uid, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ProductServiceService.prototype.loadUserId = function () {
        this.authUser = JSON.parse(localStorage.getItem('user'));
        return this.authUser.id;
    };
    ProductServiceService.prototype.ProductById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/product/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductServiceService);
    return ProductServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        // private _getUrl = '/api/polls';
        this._postUrl = '/products/addnew';
        this._updateProductUrl = '/products/updateProduct/';
        this._getUrl = '/products/products';
        this._deleteUrl = '/products/updatedel/';
        this._getWithIdUrl = '/products/product/';
        this._getOneUrl = '/products/product/';
        this._conStatusUrl = '/products/statusconfirm/';
        this._rejStatusUrl = '/products/statusreject/';
        this._getNotifUrl = '/products/getnotification/';
        this._updateNotifUrl = '/products/updatenotification/';
        this._adminViewedUrl = '/products/adminViewed/';
        this.authToken = '';
        this.url = "http://localhost:3000/";
    }
    ProductService.prototype.getAllClosedProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/closed_products', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAProduct = function (proId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._getWithIdUrl + proId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (prod) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this._postUrl, JSON.stringify(prod), Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this._getUrl)
            .map(function (response) { return response.json(); });
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this.http.get(this.url + 'products/products',{headers:headers})
        // .map(res =>res.json());
    };
    ProductService.prototype.updateProduct = function (pro) {
        //  console.log(pro);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._updateProductUrl + pro._id, (pro), Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (pid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._deleteUrl + pid, {}, Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllrunningProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/runnig_products', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllUpcomingProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/upcomingproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.bidProduct = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'products/bid_a_product', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // console.log(this._getOneUrl+id);
        return this.http.get(this._getOneUrl + id, options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ProductService.prototype.updateStatusConfirm = function (pid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._conStatusUrl + pid, {}, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateStatusReject = function (pid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._rejStatusUrl + pid, {}, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getNotif = function (user_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(this._getNotifUrl + user_id, options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateNotif = function (user_id, pid) {
        var product = { "_id": pid, "user_id": user_id };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._updateNotifUrl + pid, JSON.stringify(product), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.adminViewed = function (pid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // console.log(this._adminViewedUrl+pid);
        return this.http.put(this._adminViewedUrl + pid, options)
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._regUrl = "/user/register";
        this._verifyUrl = "/user/verify/";
        this._genTokenUrl = "/user/genToken/";
        this._authUrl = "/user/authenticate";
        this._saveAddUrl = "/user/saveAddress";
        // private _getUrl = "/user/getemail";
        this.url = "http://localhost:3000/";
    }
    UserService.prototype.registerUser = function (user) {
        // console.log(JSON.stringify(user));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this._regUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.verifyUser = function (verif_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this._verifyUrl + verif_id);
        return this.http.put(this._verifyUrl + verif_id, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.sendmail = function () {
        // console.log("hi");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // console.log("ff");
        return this.http.get(this.url + 'user/getemail')
            .map(function (res) { return res.json(); });
    };
    //all users
    UserService.prototype.getAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //all active users
    UserService.prototype.getActiveUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/activeusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //deleteded users
    UserService.prototype.getDeletedUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/deletedusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //disabled users
    UserService.prototype.getDisabledUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/disabledusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete user
    UserService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //disable user
    UserService.prototype.blockUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/disable/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //unblock
    UserService.prototype.unblockUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/unblock/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.generateToken = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this._genTokenUrl + id);
        return this.http.put(this._genTokenUrl + id, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.loggedIn = function () {
        // console.log(tokenNotExpired('id_token'));
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._authUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    UserService.prototype.saveAddress = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._saveAddUrl, JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getAllUsersById = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/users_id_as_index', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    UserService.prototype.getLoggedUSerDetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/get_loggedin_user', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.sendMailtoWinner = function (user_id, pid) {
        var user = { "_id": user_id, "pid": pid };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'user/sendmailtowinner/' + user_id, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    \r\n    <top-bar></top-bar>\r\n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <ul class=\"nav navbar-nav side-nav\">\r\n            <li>\r\n                <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a>\r\n            </li>\r\n           \r\n            <li>\r\n                    <a routerLink=\"/users-sub\"><i class=\"fa fa-users\"></i> Users</a>\r\n               \r\n            </li>\r\n            <li>\r\n                <a  routerLink=\"/product-list\" ><i class=\"fa fa-product-hunt\"></i> Manage Product</a> \r\n                \r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/auctions\" ><i class=\"fa fa-fw fa-arrows-v\"></i> Auctions </a>\r\n               \r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    function SideBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // })
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'side-bar',
            template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/socialmedia/socialmedia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/socialmedia/socialmedia.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/socialmedia/socialmedia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialmediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialmediaComponent = (function () {
    function SocialmediaComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    SocialmediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.verif_id = +params['id']; // (+) converts string 'id' to a number
            _this.userService.generateToken(params.id).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.userService.storeUserData(data.token, data.user);
                    if (data.user.role == "user") {
                        _this.router.navigate(['/home']);
                    }
                    if (data.user.role == "admin") {
                        _this.router.navigate(['/dashboard']);
                    }
                }
            });
        });
    };
    SocialmediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'socialmedia',
            template: __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.html"),
            styles: [__webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], SocialmediaComponent);
    return SocialmediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.notify {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.notify-count{\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -8px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 14px;\r\n}\r\n.fa-bell{position:relative;}\r\n.media-object{width:100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"navbar-header\">\r\n       \r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <img src=\"./assets/logo/logo.png\" style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> AUCTION</a>\r\n</div>\r\n<!-- Top Menu Items -->\r\n<ul class=\"nav navbar-right top-nav\">\r\n    <li class=\"dropdown\" *ngFor= \"let item of info\">\r\n            \r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">{{count}}</div></i> <b class=\"caret\"></b></a>\r\n        <ul class=\"dropdown-menu message-dropdown\">\r\n            <li class=\"message-preview\"  >\r\n                <a  [routerLink]=\"['/adminviewed/'+item?._id]\">\r\n                    <div class=\"media\">\r\n                        <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                        <span class=\"pull-left\">\r\n                            <img class=\"media-object\" src=\"../../assets/uploads/{{item?.image||'default.png'}}\" alt=\"\">\r\n                        </span>\r\n                       </div>\r\n                       <div class=\"col-md-8\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"media-heading\">\r\n                                <strong>{{item.name}}</strong>\r\n                            </h5>\r\n                            \r\n                            <p>Item confirmed by bidder</p>\r\n                        </div>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <!-- <li class=\"message-footer\">\r\n                <a href=\"#\">Read All New Messages</a>\r\n            </li> -->\r\n        </ul>\r\n    </li>\r\n    \r\n    <li class=\"dropdown\">\r\n        <a  (click)=\"logout()\" ><i class=\"fa fa-sign-out\"></i> LogOut </a>\r\n        \r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopBarComponent = (function () {
    function TopBarComponent(userService, productService, router) {
        this.userService = userService;
        this.productService = productService;
        this.router = router;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // });
        var details = [];
        this.info = [];
        this.count = 0;
        //   this.productService.getProducts().subscribe(data3 => {   
        //     data3.forEach(element => {
        //       // console.log(element);
        //       if(element.admin_notification.user_id && element.admin_notification.is_viewed == false){
        //         this.info.push(element);
        //         this.count++;
        //         console.log(this.info);
        //       }
        //     });
        // });
    };
    TopBarComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'top-bar',
            template: __webpack_require__("../../../../../src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    \r\n\r\n.brdr label{\r\n    float: left;\r\npadding-right: 10px;\r\npadding-top: 6px;\r\n} \r\n.btn2{border-radius:0px;    padding: 11px 20px; }\r\n.brdr{border:1px solid #ccc;padding:5px 20px; } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n    \r\n      <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n            <div class=\"col-md-9 col-xs-9 brdr\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 col-xs-4\">\r\n                                        <label>Start Date</label>\r\n                                      </div>\r\n                                        <div class=\"col-md-8 col-xs-8\">\r\n\r\n                                        <input type=\"text\" class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"selectedStartDate($event, daterange)\" />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-4 col-xs-4\">\r\n                                                <label>End Date</label>\r\n                                              </div>\r\n                                              <div class=\"col-md-8 col-xs-8\">\r\n                                                <input type=\"text\"  class=\"form-control\" name=\"daterangeInput\" daterangepicker [options]=\"optionsEnd\" (selected)=\"selectedEndDate($event, daterange)\" />\r\n                                            </div>\r\n                                        </div>\r\n                                \r\n                            </div>\r\n                            \r\n                    </div>   \r\n                </div>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <div class=\"clearfix\"></div> \r\n\r\n          <div  *ngFor=\"let product of (products | dateSearch:startFrom:startUpto:endFrom:endUpto);let i = index;\" class=\"item  col-xs-4 col-lg-4\">\r\n              <div class=\"thumbnail\">\r\n                  \r\n                  <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                  <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n             \r\n                  <div class=\"caption\">\r\n                      <h4 class=\"group inner list-group-item-heading text-center\">\r\n                          {{product.name}}</h4>\r\n                          <hr>\r\n                          <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                          <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                        </p>\r\n                      <hr>\r\n            \r\n                      <div class=\"row text-center\">\r\n                          <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid Start On<br>\r\n                              <b>\r\n                                {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                                <br>\r\n                                {{product.start_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                           <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid End On<br>\r\n                              <b>\r\n                                  {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                  <br>\r\n                                  {{product.end_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-12\">\r\n                              Starts In\r\n                                <p class=\"lead\">\r\n                                  <app-count-down-timer (onTimeOver)=\"timeOver()\" [inputDate]=\"product.start_date\"></app-count-down-timer>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                      <hr>\r\n                      <div class=\"row \">\r\n                          \r\n                          <div class=\"col-xs-12 col-md-12\">\r\n                              <div  class=\"alert alert-success text-center \">\r\n                                <div >\r\n                                <strong>Bid Start Price - {{product.bid_amount | number:'1.2-2'}}</strong>\r\n                                </div>\r\n                            </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    \r\n      </div>\r\n    </div>\r\n      <div *ngIf=\"products?.length == 0\" id=\"products\" class=\"row list-group\">\r\n       <h3 class=\"text-center\"> No Product Found</h3>\r\n      </div>\r\n      </div>\r\n\r\n  \r\n          \r\n         "

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';



var UpcomingAuctionBackComponent = (function () {
    function UpcomingAuctionBackComponent(productService, userService, router, config) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.startFrom = '';
        this.startUpto = '';
        this.endFrom = '';
        this.endUpto = '';
        this.options = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.optionsEnd = {
            locale: { format: 'DD-MM-YYYY' },
            alwaysShowCalendars: false,
        };
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(config.socketURL);
    }
    UpcomingAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.role !="admin"){
        //     this.router.navigate(['/login']);
        //   }
        // });
        this.startDate = new Date();
        this.endDate = new Date();
        this.getAllproduct();
        this.socket.on('upcomingnewbid', function (data) {
            _this.getAllproduct();
        });
    };
    UpcomingAuctionBackComponent.prototype.getAllproduct = function () {
        var _this = this;
        this.productService.getAllUpcomingProduct().subscribe(function (data) {
            console.log(data);
            _this.products = data;
        });
    };
    UpcomingAuctionBackComponent.prototype.timeOver = function () {
        this.getAllproduct();
    };
    UpcomingAuctionBackComponent.prototype.selectedStartDate = function (value, datepicker) {
        this.startFrom = value.start;
        this.startUpto = value.end;
    };
    UpcomingAuctionBackComponent.prototype.selectedEndDate = function (value, datepicker) {
        this.endFrom = value.start;
        this.endUpto = value.end;
    };
    UpcomingAuctionBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upcoming-auction-back',
            template: __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], UpcomingAuctionBackComponent);
    return UpcomingAuctionBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upcomingauctions/upcomingauctions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upcomingauctions/upcomingauctions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n    <div id=\"u-auction\" class=\"auction-section\">\r\n        <h4 class=\"page-head\">Upcoming Auctions</h4>\r\n        <div *ngIf=\"existStatus; else noProduct\">\r\n            <div *ngFor=\"let item of products\">\r\n                <!-- {{item}} -->\r\n                <app-card [item]=\"item\" [startDate]=\"item.start_date\"></app-card>\r\n            </div>\r\n        </div>\r\n       \r\n        <ng-template #noProduct>\r\n            <div class=\"no-item\">\r\n                <h4>Sorrry! No items to display!</h4>\r\n            </div>\r\n        </ng-template>\r\n      \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/upcomingauctions/upcomingauctions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingauctionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../config/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpcomingauctionsComponent = (function () {
    function UpcomingauctionsComponent(_productService, userService, router, config) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.config = config;
        this.existStatus = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(config.socketURL);
    }
    UpcomingauctionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        this.loadAuction();
        this.socket.on('upcomingnewbid', function (data) {
            console.log(data);
            _this.loadAuction();
        });
        //  this.socket.on('upcomingnewbid', (data) => {
        //   console.log(data);
        //   this.loadAuction();
        //  })  
    };
    UpcomingauctionsComponent.prototype.loadAuction = function () {
        var _this = this;
        this._productService.loadUpcomingProduct()
            .subscribe(function (resProducts) {
            _this.products = resProducts;
            console.log(resProducts);
            if (resProducts.length > 0) {
                _this.existStatus = true;
            }
        });
    };
    UpcomingauctionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upcomingauctions',
            template: __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */]])
    ], UpcomingauctionsComponent);
    return UpcomingauctionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"single\">single</label>\r\n    <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />                                  \r\n </div>\r\n  \r\n    <!-- <input type=\"submit\" value=\"submit\" (click)=\"onUpload()\"> -->\r\n    <button type=\"button\" class=\"btn btn-success btn-s\"\r\n    (click)=\"up()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n      Upload all\r\n </button><br />\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/products/upload' });
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.up = function () {
        this.uploader.uploadAll();
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users-sub/users-sub.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users-sub/users-sub.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n            <div id=\"wrapper\">\r\n        \r\n                <!-- Navigation -->\r\n    <side-bar></side-bar>\r\n        \r\n                <div id=\"page-wrapper\">\r\n                    <div class=\"container-fluid\">\r\n                            \r\n                                        <!-- Page Heading -->\r\n                                       <header-title [title]=\"'Users'\"></header-title>\r\n                                  \r\n                                        <!-- /.row -->\r\n                        \r\n                                    </div>\r\n                    <div class=\"col-md-2\">\r\n                          <nav class=\"nav-sidebar\">\r\n                              <ul class=\"nav tabs\">\r\n                                    <li [ngClass]=\"{'active1': viewComp == 'All'}\"><a (click)=\"updateView('All')\" href=\"#tab1\" data-toggle=\"tab\">All Users</a></li>\r\n                                    <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \r\n                                    <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\r\n                                    <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>  \r\n                                                                 \r\n                              </ul>\r\n                            </nav>\r\n                    </div>\r\n                    <div class=\"col-md-10\">\r\n                        <ol class=\"breadcrumb\">\r\n                            <li>\r\n                                <i class=\"fa fa-dashboard\"></i>  <a href=\"dashboard\">dashboard</a>\r\n                            </li>\r\n                            <li class=\"active\">\r\n                                <i class=\"fa fa-file\"></i> {{title}}\r\n                            </li>\r\n                        </ol>\r\n                      \r\n\r\n                        <div *ngIf=\"viewComp == 'All'\">\r\n                          <all-users></all-users>\r\n                        </div>\r\n                        <div *ngIf=\"viewComp == 'Active'\">\r\n                            <active-users></active-users>\r\n                          </div>\r\n                        <div *ngIf=\"viewComp == 'Blocked'\">\r\n                          <disabled-users></disabled-users>\r\n                        </div>\r\n                        <div *ngIf=\"viewComp == 'Delete'\">\r\n                          <deleted-users></deleted-users>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                  <!-- /#page-wrapper -->\r\n                  \r\n                             \r\n                  </div>\r\n                  \r\n                  <footer></footer> \r\n                    \r\n                  </body>"

/***/ }),

/***/ "../../../../../src/app/users-sub/users-sub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersSubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersSubComponent = (function () {
    function UsersSubComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UsersSubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.viewComp = 'All';
        this.title = 'Allusers List';
    };
    UsersSubComponent.prototype.updateView = function (page) {
        this.viewComp = page;
        this.title = page + ' Users List';
    };
    UsersSubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'users-sub',
            template: __webpack_require__("../../../../../src/app/users-sub/users-sub.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users-sub/users-sub.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], UsersSubComponent);
    return UsersSubComponent;
}());



/***/ }),

/***/ "../../../../../src/app/winnerconfirm/winnerconfirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cont{\r\n margin-top: 170px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/winnerconfirm/winnerconfirm.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container cont\">\n     <div *ngIf=\"errorAlertAuth\" class=\"alert alert-danger\">\n        <strong>Unauthorized access ...!</strong>\n     </div>\n     <div *ngIf=\"successAlert\" class=\"alert alert-success\">\n        <strong>Success</strong>\n     </div>\n     <div *ngIf=\"confirmAlert\" class=\"alert alert-success\">\n        <strong>Confirmed...</strong>\n     </div>\n     <div *ngIf=\"wrongAlert\" class=\"alert alert-danger\">\n        <strong>Something went wrong...!</strong>\n     </div>\n    <div *ngIf=\"!isConfirm\">\n    <h3>Do you wish to continue ..?</h3>\n    <button type=\"button\" (click)=\"confirmed()\" class=\"btn btn-default\">Confirm</button> \n    <button data-toggle=\"modal\" data-target=\"#myModal\" type=\"button\" class=\"btn btn-default\">Reject</button> \n</div>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n              \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <!-- <div class=\"modal-header\"> -->\n                      <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                    <!-- </div> -->\n                    <div class=\"modal-body\">\n                        <h4 class=\"modal-title\">Are you sure?</h4>\n                    \n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" (click)=\"rejected()\"  class=\"btn btn-default\" data-dismiss=\"modal\">Yes</button>\n                    </div>\n                  </div>\n              \n                </div>\n              </div>\n<br>\n <div class=\"col-md-9 shadow\" *ngIf=\"isConfirm\">\n        <h3>Add a delivery address</h3>\n    <br>\n    <form #f='ngForm' class=\"well\"  role=\"form\" (ngSubmit)=\"f.form.valid && onWinnerConfirm();\" novalidate >\n        \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\" >\n            <label > Name :</label>\n            <input type=\"text\"  name=\"name\" #name=\"ngModel\" [(ngModel)]=\"newproduct.name\" class=\"form-control\" required  />\n            <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Required</div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\"> \n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\n                <label >Phone Number :</label> \n                  <input type=\"text\" class=\"form-control\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newproduct.phone\" name=\"phone\" #phone=\"ngModel\">\n                  <div *ngIf=\"f.submitted && phone.invalid\">\n                    <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 6 digits</div>\n                    <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Required</div>\n                    <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\n                  </div> \n                <!-- </div> -->\n        </div> \n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pin.valid }\"> \n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\n                <label >Pincode :</label> \n                  <input type=\"text\" class=\"form-control\" minlength=\"6\" maxlength=\"6\" pattern=\"^[1-9][0-9]{5}$\" required [(ngModel)]=\"newproduct.pin\" name=\"pin\" #pin=\"ngModel\">\n                  <div *ngIf=\"f.submitted && pin.invalid\">\n                    <div *ngIf=\"pin.errors.minlength || pin.errors.maxlength\" class=\"help-block\">! Pincode should be 10 digits</div>\n                    <div *ngIf=\"pin.errors.required\" class=\"help-block\">! Required</div>\n                    <div *ngIf=\"pin.errors.pattern\" class=\"help-block\">! Valid Pincode is required</div>\n                  </div> \n                <!-- </div> -->\n        </div> \n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr1.valid }\" >\n                <label > Flat / House No. / Floor / Building: </label>\n                <input type=\"text\"  name=\"addr1\" #addr1=\"ngModel\" [(ngModel)]=\"newproduct.addr1\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr1.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr2.valid }\" >\n                <label > Colony / Street / Locality:  </label>\n                <input type=\"text\"  name=\"addr2\" #addr2=\"ngModel\" [(ngModel)]=\"newproduct.addr2\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr2.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr3.valid }\" >\n                <label > Town/City:  </label>\n                <input type=\"text\"  name=\"addr3\" #addr3=\"ngModel\" [(ngModel)]=\"newproduct.addr3\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr3.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr4.valid }\" >\n                <label > State :  </label>\n                <input type=\"text\"  name=\"addr4\" #addr4=\"ngModel\" [(ngModel)]=\"newproduct.addr4\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr4.valid\" class=\"help-block\">! Required</div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Deliver to this address</button> \n \n       \n    </form>\n\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/winnerconfirm/winnerconfirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinnerconfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WinnerconfirmComponent = (function () {
    function WinnerconfirmComponent(userService, productService, route, router) {
        this.userService = userService;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.isConfirm = false;
        this.errorAlertAuth = false;
        this.successAlert = false;
        this.confirmAlert = false;
        this.wrongAlert = false;
        this.newproduct = {
            name: '',
            pin: '',
            phone: '',
            addr1: '',
            addr2: '',
            addr3: '',
            addr4: '',
            pid: '',
        };
        this.high_amount = 0;
        this.high_amount1 = 0;
    }
    WinnerconfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        var temp = 0;
        this.sub = this.route.params.subscribe(function (params) {
            _this.newproduct.pid = params.id;
            _this.productService.getProduct(params.id).subscribe(function (data) {
                for (var i = 0; i <= data.bidders.length - 1; i++) {
                    if (data.bidders[i].bid_status == "confirmed") {
                        _this.errorAlertAuth = true;
                        setTimeout(function () {
                            _this.router.navigate(['/home']);
                        }, 1000);
                    }
                }
                // To get the highest bid amt and bidder
                for (var i = 0; i <= data.bidders.length - 1; i++) {
                    if (data.bidders[i].bid_status != "confirmed" && data.bidders[i].bid_status != "rejected") {
                        temp = data.bidders[i].amount;
                        if (_this.high_amount <= temp) {
                            _this.high_amount = temp;
                            _this.user_id = data.bidders[i].user_id;
                        }
                    }
                }
            });
            _this.userService.getLoggedUSerDetails().subscribe(function (data3) {
                if (data3._id != _this.user_id) {
                    _this.errorAlertAuth = true;
                    setTimeout(function () {
                        _this.router.navigate(['/home']);
                    }, 1000);
                }
            });
        });
    };
    WinnerconfirmComponent.prototype.confirmed = function () {
        this.isConfirm = true;
    };
    WinnerconfirmComponent.prototype.rejected = function () {
        var _this = this;
        //update status n send mail to second person
        var temp = 0;
        this.productService.updateStatusReject(this.newproduct.pid).subscribe(function (data1) {
            // console.log(data1);
            for (var i = 0; i <= data1.bidders.length - 1; i++) {
                if (data1.bidders[i].bid_status != "confirmed" && data1.bidders[i].bid_status != "rejected") {
                    temp = data1.bidders[i].amount;
                    if (_this.high_amount1 <= temp) {
                        _this.high_amount1 = temp;
                        _this.user_id1 = data1.bidders[i].user_id;
                    }
                }
            }
            //  console.log(this.user_id1);
            if (_this.user_id1 != null || _this.user_id1 != '') {
                _this.userService.sendMailtoWinner(_this.user_id1, _this.newproduct.pid).subscribe(function (data2) {
                });
                _this.productService.updateNotif(_this.user_id1, _this.newproduct.pid).subscribe(function (data5) {
                });
            }
            _this.successAlert = true;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        });
    };
    WinnerconfirmComponent.prototype.onWinnerConfirm = function () {
        var _this = this;
        this.userService.saveAddress(this.newproduct).subscribe(function (data) {
            if (data.success == true) {
                _this.productService.updateStatusConfirm(_this.newproduct.pid).subscribe(function (data1) {
                    if (data1.success == true) {
                        _this.confirmAlert = true;
                        setTimeout(function () {
                            _this.router.navigate(['/home']);
                        }, 2000);
                    }
                    else {
                        _this.wrongAlert = true;
                        setTimeout(function () {
                            _this.router.navigate(['/home']);
                        }, 1000);
                    }
                });
            }
        });
    };
    WinnerconfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'winnerconfirm',
            template: __webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], WinnerconfirmComponent);
    return WinnerconfirmComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map