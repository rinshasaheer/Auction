webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
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
    return AdminviewedComponent;
}());
AdminviewedComponent = __decorate([
    core_1.Component({
        selector: 'adminviewed',
        template: __webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], AdminviewedComponent);
exports.AdminviewedComponent = AdminviewedComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=adminviewed.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n      <div id=\"wrapper\">\r\n  \r\n          <!-- Navigation -->\r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n                  <!-- Page Heading -->\r\n                  <header-title [title]=\"'Users'\"></header-title>\r\n                 \r\n                  <!-- /.row -->\r\n  \r\n              </div>\r\n              \r\n              <!-- /.container-fluid -->\r\n              \r\n<table class=\"table table-striped table-hover table-bordered\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th>Slno</th>\r\n        <th>Name</th>\r\n        <th>Email</th>\r\n        <th>Phone</th>\r\n        <th>Status</th>\r\n        <!--<th>Action</th>-->\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"users\">\r\n      <tr  *ngFor=\"let user1 of users;let i = index;\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{user1.name}}</td>\r\n         <td>{{user1.email}}</td>\r\n         <td>{{user1.phone}}</td>\r\n        <td *ngIf=\"user1.delete_status=='true'\">deleted user</td>\r\n        <td *ngIf=\"user1.delete_status=='false' && user1.block_status=='false'\">active user</td>\r\n        <td *ngIf=\"user1.block_status=='true' && user1.delete_status=='false'\">blocked user</td>\r\n        <!--<td><a (click)=\"deleteUser(user1._id)\" class=\"btn btn-danger\">Delete</a>\r\n          <a (click)=\"deletedisUser(user1._id)\" class=\"btn btn-danger\">Disable</a></td>-->\r\n          <td>\r\n            <div class=\"btn-group\">\r\n             \r\n              <button type=\"button\" class=\"test\" data-toggle=\"dropdown\">\r\n               \r\n                <span class=\"sr-only\">Toggle Dropdown</span>\r\n              </button>\r\n              <ul class=\"dropdown-menu\" role=\"menu\">\r\n  \r\n                <li *ngIf=\"user1.delete_status=='false'\"><a (click)=\"deleteUser(user1._id)\">Delete</a></li>\r\n                <li *ngIf=\"user1.delete_status=='true'\"><a >Deleted</a></li>\r\n                <li *ngIf=\"user1.block_status=='false' && user1.delete_status=='false'\"><a  (click)=\"blockUser(user1._id)\">Block</a></li>\r\n                <li *ngIf=\"user1.block_status=='true' && user1.delete_status=='false'\"><a  (click)=\"unblockUser(user1._id)\">Unblock</a></li>\r\n                \r\n              </ul>\r\n            </div>\r\n          </td>\r\n      </tr>\r\n    </tbody>\r\n  <tbody *ngIf=\"users?.length == 0\">\r\n      <tr >\r\n          <td colspan=\"4\">No User Found</td>\r\n        </tr>\r\n     </tbody>\r\n  </table>  \r\n          </div>\r\n          <!-- /#page-wrapper -->\r\n  \r\n      </div>\r\n\r\n      <footer></footer> \r\n  </body>\r\n"

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AllUsersComponent = (function () {
    function AllUsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.userService.getAllUser().subscribe(function (data) {
            _this.users = data;
            //  console.log(data);
        });
    };
    AllUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.router.navigate(['/deleted-users']);
            }
            else {
                _this.router.navigate(['/deleted-users']);
            }
        });
    };
    AllUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        this.userService.blockUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.router.navigate(['/disabled-users']);
            }
            else {
                _this.router.navigate(['/all-users']);
            }
        });
    };
    AllUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.userService.unblockUser(id).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this.router.navigate(['/all-users']);
            }
            else {
                _this.router.navigate(['/disabled-users']);
            }
        });
    };
    return AllUsersComponent;
}());
AllUsersComponent = __decorate([
    core_1.Component({
        selector: 'all-users',
        template: __webpack_require__("../../../../../src/app/all-users/all-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-users/all-users.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AllUsersComponent);
exports.AllUsersComponent = AllUsersComponent;
var _a, _b;
//# sourceMappingURL=all-users.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3001/upload' });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD

=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__all_users_all_users_component__ = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_title_header_title_component__ = __webpack_require__("../../../../../src/app/header-title/header-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__ = __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__ = __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__finishedauction_finishedauction_component__ = __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__upcomingauctions_upcomingauctions_component__ = __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__equal_validator_directive__ = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__closed_auction_back_closed_auction_back_component__ = __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__upcoming_auction_back_upcoming_auction_back_component__ = __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__running_auction_back_running_auction_back_component__ = __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__socialmedia_socialmedia_component__ = __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__read_more_read_more_component__ = __webpack_require__("../../../../../src/app/read-more/read-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__count_down_timer_count_down_timer_component__ = __webpack_require__("../../../../../src/app/count-down-timer/count-down-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_product_service_service__ = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__myauctions_myauctions_component__ = __webpack_require__("../../../../../src/app/myauctions/myauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__runningauction_runningauction_component__ = __webpack_require__("../../../../../src/app/runningauction/runningauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__card_running_card_running_component__ = __webpack_require__("../../../../../src/app/card-running/card-running.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__winnerconfirm_winnerconfirm_component__ = __webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_datetime_ng2_datetime__ = __webpack_require__("../../../../ng2-datetime/ng2-datetime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__manage_product_manage_product_component__ = __webpack_require__("../../../../../src/app/manage-product/manage-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__product_pipe__ = __webpack_require__("../../../../../src/app/product.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ng_datepicker_ng_datepicker_component__ = __webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__adminviewed_adminviewed_component__ = __webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ngx_slimscroll__ = __webpack_require__("../../../../ngx-slimscroll/dist/ngx-slimscroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__date_search_pipe__ = __webpack_require__("../../../../../src/app/date-search.pipe.ts");
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../core-js/es7/reflect.js");
__webpack_require__("../../../../zone.js/dist/zone.js");
__webpack_require__("../../../../reflect-metadata/Reflect.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
// import { DataTablesModule } from 'angular-datatables';
<<<<<<< HEAD
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var top_bar_component_1 = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var side_bar_component_1 = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
var all_users_component_1 = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
var header_title_component_1 = __webpack_require__("../../../../../src/app/header-title/header-title.component.ts");
var disabled_users_component_1 = __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.ts");
var deleted_users_component_1 = __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/product/product.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
=======









// import { ProductDetailComponent } from './product-detail/product-detail.component';
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
// import { DataTablesModule } from 'angular-datatables';
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var card_component_1 = __webpack_require__("../../../../../src/app/card/card.component.ts");
var finishedauction_component_1 = __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.ts");
var ng2_page_scroll_1 = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var upcomingauctions_component_1 = __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.ts");
// import { ImageUploadModule } from "angular2-image-upload";
// import { ImageUploadModule } from "angular2-image-upload";
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var equal_validator_directive_1 = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var email_verification_component_1 = __webpack_require__("../../../../../src/app/email-verification/email-verification.component.ts");
var closed_auction_back_component_1 = __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.ts");
var upcoming_auction_back_component_1 = __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts");
var running_auction_back_component_1 = __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.ts");
var socialmedia_component_1 = __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.ts");
var read_more_component_1 = __webpack_require__("../../../../../src/app/read-more/read-more.component.ts");
var count_down_timer_component_1 = __webpack_require__("../../../../../src/app/count-down-timer/count-down-timer.component.ts");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var myauctions_component_1 = __webpack_require__("../../../../../src/app/myauctions/myauctions.component.ts");
var capitalize_pipe_1 = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
var runningauction_component_1 = __webpack_require__("../../../../../src/app/runningauction/runningauction.component.ts");
var card_running_component_1 = __webpack_require__("../../../../../src/app/card-running/card-running.component.ts");
var winnerconfirm_component_1 = __webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
// import { ImageUploadModule } from "angular2-image-upload";
<<<<<<< HEAD
var ng2_datetime_1 = __webpack_require__("../../../../ng2-datetime/ng2-datetime.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
var filter_pipe_1 = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var manage_product_component_1 = __webpack_require__("../../../../../src/app/manage-product/manage-product.component.ts");
=======





>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
// import { ProductDetailComponent } from './product-detail/product-detail.component';
var product_pipe_1 = __webpack_require__("../../../../../src/app/product.pipe.ts");
//import { NgDatepickerModule } from 'ng2-datepicker';
var ng_datepicker_component_1 = __webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.ts");
var adminviewed_component_1 = __webpack_require__("../../../../../src/app/adminviewed/adminviewed.component.ts");
var upload_component_1 = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
// import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
var angular2_image_upload_1 = __webpack_require__("../../../../angular2-image-upload/index.js"); //file upload
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var ngx_slimscroll_1 = __webpack_require__("../../../../ngx-slimscroll/dist/ngx-slimscroll.es5.js");
var date_search_pipe_1 = __webpack_require__("../../../../../src/app/date-search.pipe.ts");
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
<<<<<<< HEAD
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'product-list', component: product_list_component_1.ProductListComponent },
    { path: 'product-detail/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'email-verification/:id', component: email_verification_component_1.EmailVerificationComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'socialmedia/:id', component: socialmedia_component_1.SocialmediaComponent },
    { path: 'adminviewed/:id', component: adminviewed_component_1.AdminviewedComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'all-users', component: all_users_component_1.AllUsersComponent },
    { path: 'disabled-users', component: disabled_users_component_1.DisabledUsersComponent },
    { path: 'deleted-users', component: deleted_users_component_1.DeletedUsersComponent },
    { path: 'upcomingauction', component: upcomingauctions_component_1.UpcomingauctionsComponent },
    { path: 'finishedauction', component: finishedauction_component_1.FinishedauctionComponent },
    { path: 'runningauction', component: runningauction_component_1.RunningauctionComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'myauctions', component: myauctions_component_1.MyauctionsComponent },
    { path: 'email-verification/:id', component: email_verification_component_1.EmailVerificationComponent },
    { path: 'closed-auction', component: closed_auction_back_component_1.ClosedAuctionBackComponent },
    { path: 'upcoming-auction', component: upcoming_auction_back_component_1.UpcomingAuctionBackComponent },
    { path: 'running-auction', component: running_auction_back_component_1.RunningAuctionBackComponent },
    { path: 'winnerconfirm/:id', component: winnerconfirm_component_1.WinnerconfirmComponent },
    { path: '**', component: login_component_1.LoginComponent },
    { path: 'upload', component: upload_component_1.UploadComponent } //file upload
=======
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */] },
    { path: 'product-list', component: __WEBPACK_IMPORTED_MODULE_44__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_47__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_29__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */] },
    { path: 'socialmedia/:id', component: __WEBPACK_IMPORTED_MODULE_33__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */] },
    { path: 'adminviewed/:id', component: __WEBPACK_IMPORTED_MODULE_50__adminviewed_adminviewed_component__["a" /* AdminviewedComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'all-users', component: __WEBPACK_IMPORTED_MODULE_12__all_users_all_users_component__["a" /* AllUsersComponent */] },
    { path: 'disabled-users', component: __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__["a" /* DisabledUsersComponent */] },
    { path: 'deleted-users', component: __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__["a" /* DeletedUsersComponent */] },
    { path: 'upcomingauction', component: __WEBPACK_IMPORTED_MODULE_24__upcomingauctions_upcomingauctions_component__["a" /* UpcomingauctionsComponent */] },
    { path: 'finishedauction', component: __WEBPACK_IMPORTED_MODULE_22__finishedauction_finishedauction_component__["a" /* FinishedauctionComponent */] },
    { path: 'runningauction', component: __WEBPACK_IMPORTED_MODULE_39__runningauction_runningauction_component__["a" /* RunningauctionComponent */] },
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */] },
    { path: 'myauctions', component: __WEBPACK_IMPORTED_MODULE_37__myauctions_myauctions_component__["a" /* MyauctionsComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_29__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'closed-auction', component: __WEBPACK_IMPORTED_MODULE_30__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */] },
    { path: 'upcoming-auction', component: __WEBPACK_IMPORTED_MODULE_31__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */] },
    { path: 'running-auction', component: __WEBPACK_IMPORTED_MODULE_32__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */] },
    { path: 'winnerconfirm/:id', component: __WEBPACK_IMPORTED_MODULE_41__winnerconfirm_winnerconfirm_component__["a" /* WinnerconfirmComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_51__upload_upload_component__["a" /* UploadComponent */] } //file upload
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
<<<<<<< HEAD
            app_component_1.AppComponent,
            product_component_1.ProductComponent,
            registration_component_1.RegistrationComponent,
            product_list_component_1.ProductListComponent,
            filter_pipe_1.FilterPipe,
            manage_product_component_1.ManageProductComponent,
            product_detail_component_1.ProductDetailComponent,
            login_component_1.LoginComponent,
            navigation_component_1.NavigationComponent,
            home_component_1.HomeComponent,
            card_component_1.CardComponent,
            finishedauction_component_1.FinishedauctionComponent,
            upcomingauctions_component_1.UpcomingauctionsComponent,
            myauctions_component_1.MyauctionsComponent,
            equal_validator_directive_1.EqualValidator,
            capitalize_pipe_1.CapitalizePipe,
            dashboard_component_1.DashboardComponent,
            side_bar_component_1.SideBarComponent,
            top_bar_component_1.TopBarComponent,
            header_title_component_1.HeaderTitleComponent,
            footer_component_1.FooterComponent,
            all_users_component_1.AllUsersComponent,
            disabled_users_component_1.DisabledUsersComponent,
            deleted_users_component_1.DeletedUsersComponent,
            email_verification_component_1.EmailVerificationComponent,
            closed_auction_back_component_1.ClosedAuctionBackComponent,
            upcoming_auction_back_component_1.UpcomingAuctionBackComponent,
            running_auction_back_component_1.RunningAuctionBackComponent,
            socialmedia_component_1.SocialmediaComponent,
            ng2_file_upload_1.FileSelectDirective,
            read_more_component_1.ReadMoreComponent,
            count_down_timer_component_1.CountDownTimerComponent,
            runningauction_component_1.RunningauctionComponent,
            card_running_component_1.CardRunningComponent,
            winnerconfirm_component_1.WinnerconfirmComponent,
            product_pipe_1.ProductPipe,
            adminviewed_component_1.AdminviewedComponent,
            upload_component_1.UploadComponent,
            ng2_file_upload_1.FileSelectDirective,
            ng_datepicker_component_1.NgDatepickerComponent,
            date_search_pipe_1.DateSearchPipe
=======
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_42__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_44__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_45__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_46__manage_product_manage_product_component__["a" /* ManageProductComponent */],
            __WEBPACK_IMPORTED_MODULE_47__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__finishedauction_finishedauction_component__["a" /* FinishedauctionComponent */],
            __WEBPACK_IMPORTED_MODULE_24__upcomingauctions_upcomingauctions_component__["a" /* UpcomingauctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_37__myauctions_myauctions_component__["a" /* MyauctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_38__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_title_header_title_component__["a" /* HeaderTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__all_users_all_users_component__["a" /* AllUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__["a" /* DisabledUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__["a" /* DeletedUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_29__email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
            __WEBPACK_IMPORTED_MODULE_30__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_31__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_32__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_33__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */],
            __WEBPACK_IMPORTED_MODULE_53_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_34__read_more_read_more_component__["a" /* ReadMoreComponent */],
            __WEBPACK_IMPORTED_MODULE_35__count_down_timer_count_down_timer_component__["a" /* CountDownTimerComponent */],
            __WEBPACK_IMPORTED_MODULE_39__runningauction_runningauction_component__["a" /* RunningauctionComponent */],
            __WEBPACK_IMPORTED_MODULE_40__card_running_card_running_component__["a" /* CardRunningComponent */],
            __WEBPACK_IMPORTED_MODULE_41__winnerconfirm_winnerconfirm_component__["a" /* WinnerconfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_48__product_pipe__["a" /* ProductPipe */],
            __WEBPACK_IMPORTED_MODULE_50__adminviewed_adminviewed_component__["a" /* AdminviewedComponent */],
            __WEBPACK_IMPORTED_MODULE_51__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_53_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_49__ng_datepicker_ng_datepicker_component__["a" /* NgDatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_55__date_search_pipe__["a" /* DateSearchPipe */]
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
        ],
        imports: [
            platform_browser_1.BrowserModule,
            // DataTablesModule,
<<<<<<< HEAD
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_page_scroll_1.Ng2PageScrollModule,
            http_1.HttpModule,
            // ImageUploadModule,
            // DataTablesModule,
            // NKDatetimeModule,
            ng2_datetime_1.NKDatetimeModule,
=======
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_23_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            // ImageUploadModule,
            // DataTablesModule,
            // NKDatetimeModule,
            __WEBPACK_IMPORTED_MODULE_43_ng2_datetime_ng2_datetime__["a" /* NKDatetimeModule */],
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
            //  DataTablesModule
            // Ng2DatetimePickerModule
            //BrowserModule,
            // DataTablesModule,
<<<<<<< HEAD
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_page_scroll_1.Ng2PageScrollModule,
            http_1.HttpModule,
=======
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_23_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
            // ImageUploadModule,
            router_1.RouterModule.forRoot(appRoutes),
            ngx_slimscroll_1.NgSlimScrollModule,
            //  NgDatepickerModule
            // DataTablesModule,
            angular2_image_upload_1.ImageUploadModule,
        ],
<<<<<<< HEAD
        providers: [product_service_service_1.ProductServiceService,
            user_service_1.UserService,
            auth_guard_1.AuthGuard,
            product_service_1.ProductService
        ],
        bootstrap: [app_component_1.AppComponent],
=======
        providers: [__WEBPACK_IMPORTED_MODULE_36__services_product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_25__services_product_service__["a" /* ProductService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]],
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({
        name: 'capitalize'
    })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=capitalize.pipe.js.map

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

module.exports = "<div [hidden]=\"isTimeOver\" class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4\" >\r\n    <div class=\"tg-ad tg-verifiedad\">\r\n        <figure>\r\n            <a href=\"javascript:void(0);\"><img src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\"></a>\r\n        </figure>\r\n        <div class=\"tg-adcontent\">\r\n            \r\n            <div class=\"tg-adtitle\">\r\n                <h3><a href=\"javascript:void(0);\">{{product.name}}</a></h3>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"tg-desc\">\r\n                <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                    <read-more [text]=\"product.desc\" [maxLength]=\"80\"></read-more>\r\n                  </p>\r\n            </div>\r\n            \r\n            <div class=\"row text-center \">\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                Last Bid Price\r\n                <p class=\"lead\"> {{product.lastBidprice | number:'1.2-2'}}</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n               Ends In\r\n                <p class=\"lead\">\r\n                    <app-count-down-timer (onTimeOver)=\"timeOver()\"  [inputDate]=\"product.end_date\"></app-count-down-timer>\r\n                </p>\r\n            </div>\r\n        </div>\r\n            <div class=\"row text-center \">\r\n\r\n            <div class=\"col-xs-12 col-md-12 margn form-group \" [ngClass]=\"{'has-error': isError}\">\r\n                    <div *ngIf=\"isError\" class=\"text-danger text-left\">\r\n                           {{msg}}\r\n                      </div>\r\n                <input [disabled]=\"btnDisbled\" value=\"{{formatedAmount}}\" [(ngModel)]=\"amount\" (keyup)=\"validateAmount()\"  class=\"form-control \" type=\"text\" placeholder=\"Minimum bid amount {{(product.lastBidprice  * 1 ) + product.min_bid_rate | number:'1.2-2'}}\">\r\n                \r\n            </div>\r\n           \r\n        </div>\r\n            \r\n  \r\n        </div>\r\n        <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\r\n            {{msg}}\r\n       </div>\r\n        <button [disabled]=\"btnDisbled\" (click)=\"bidbtnClicked()\" class=\"btn {{btnClass}} tg-adprice\"> {{btnLabel}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var CardRunningComponent = (function () {
    function CardRunningComponent(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.btnLabel = 'Bid Now';
        this.btnClass = 'btn-primary';
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.btnDisbled = false;
        this.isTimeOver = false;
        this.socket = socketIo('http://localhost:3000');
    }
    CardRunningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
        });
        this.socket.on('newbid', function (data) {
            console.log(data);
            if (_this.product._id == data.prod_id) {
                _this.productService.getProduct(data.prod_id).subscribe(function (data) {
                    _this.product = data;
                    _this.getlastbidder();
                });
            }
        });
        console.log(this.product);
        this.getlastbidder();
    };
    CardRunningComponent.prototype.getlastbidder = function () {
        var _this = this;
        var lastBidprice = this.product.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';
        var lastBiduserId = '';
        this.product.bidders.forEach(function (bidder, i) {
            console.log(bidder);
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
            console.log(this.formatedAmount);
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
        console.log(this.product);
        console.log(this.amount);
        if (!this.isError) {
            this.formatedAmount = this.amount;
            var data = {
                pid: this.product._id,
                amount: Number(this.amount),
            };
            this.productService.bidProduct(data).subscribe(function (data) {
                console.log(data);
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
    CardRunningComponent.prototype.validateAmount = function () {
        var _this = this;
        this.isError = false;
        if (Number(this.amount)) {
            console.log(this.product.min_bid_rate * 1 + this.product.lastBidprice * 1);
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
    return CardRunningComponent;
}());
CardRunningComponent = __decorate([
    core_1.Component({
        selector: 'app-card-running',
        template: __webpack_require__("../../../../../src/app/card-running/card-running.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card-running/card-running.component.css")],
        inputs: ['product', 'users', 'user'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], CardRunningComponent);
exports.CardRunningComponent = CardRunningComponent;
var _a, _b, _c;
//# sourceMappingURL=card-running.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return CardComponent;
}());
CardComponent = __decorate([
    core_1.Component({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.css")],
        inputs: ['item', 'startDate', 'myauction', 'closed'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_service_1.ProductServiceService !== "undefined" && product_service_service_1.ProductServiceService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], CardComponent);
exports.CardComponent = CardComponent;
var _a, _b, _c;
//# sourceMappingURL=card.component.js.map

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

module.exports = "\r\n \r\n <body>\r\n  \r\n            <div id=\"wrapper\">\r\n        \r\n                <!-- Navigation -->\r\n    <side-bar></side-bar>\r\n        \r\n                <div id=\"page-wrapper\">\r\n        \r\n                    <div class=\"container-fluid\">\r\n        \r\n                        <!-- Page Heading -->\r\n                       <header-title [title]=\"'Closed Auction'\"></header-title>\r\n                        <!-- /.row -->\r\n        \r\n                    </div>\r\n    \r\n                \r\n    \r\n\r\n\r\n\r\n        <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n                <div class=\"container\" style=\"padding-top:20px;\">\r\n                        <div class=\"col-md-9 col-xs-9 brdr\">\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-md-6 col-xs-6\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4 col-xs-4\">\r\n                                                <select [(ngModel)]=\"start\" class=\"form-control\">\r\n                                                    <option  value=\"start_date\">Start</option>\r\n                                                    <option value=\"end_date\">End</option>\r\n                                                </select>\r\n                                            </div>\r\n                                            <div class=\"col-md-8 col-xs-8\">\r\n                                                <label>From</label>\r\n                                                <ng-datepicker [(ngModel)]=\"startDate\" [options]=\"options\" ></ng-datepicker>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-xs-6\">\r\n                                            <div class=\"row\">\r\n                                                    <div class=\"col-md-4 col-xs-4\">\r\n                                                        <select [(ngModel)]=\"end\" class=\"form-control\">\r\n                                                            <option  value=\"start_date\">Start</option>\r\n                                                            <option  value=\"end_date\">End</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-8 col-xs-8\">\r\n                                                        <label>Upto</label>\r\n                                                        <ng-datepicker [(ngModel)]=\"endDate\" [options]=\"options\" ></ng-datepicker>\r\n                                                    </div>\r\n                                                </div>\r\n                                        \r\n                                    </div>\r\n                                    \r\n                            </div>   \r\n                        </div>\r\n                        <!-- <div class=\"col-md-1 col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <input type=\"button\" value=\"search\" class=\"btn btn-primary btn2\">\r\n                            </div>\r\n                        </div> -->\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <div class=\"clearfix\"></div>\r\n\r\n            <div  *ngFor=\"let product of  (products | dateSearch:startDate:endDate:start:end)\" class=\"item  col-xs-4 col-lg-4\">\r\n                <div class=\"thumbnail\">\r\n                    \r\n                    <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                    <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n               \r\n                    <div class=\"caption\">\r\n                        <h4 class=\"group inner list-group-item-heading text-center\">\r\n                            {{product.name}}</h4>\r\n                            <hr>\r\n                            <p class=\"group inner list-group-item-text\" style=\"min-height: 60px;\">\r\n                            <read-more [text]=\"product.desc\" [maxLength]=\"80\"></read-more>\r\n                          </p>\r\n                        <hr>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Start Price\r\n                                <p class=\"lead\">{{product.bid_amount | number:'1.2-2'}}</p>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Last Bid Price\r\n                                \r\n                                <p *ngIf=\"product.bidders.length > 0\" class=\"lead\">{{product.lastBidprice | number:'1.2-2'}}</p>\r\n                                <p *ngIf=\"product.bidders.length == 0 \" class=\"alert-danger lead\">No bid</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Started On<br>\r\n                                <b>\r\n                                  {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                                  <br>\r\n                                  {{product.start_date | date : 'mediumTime'}}\r\n                                </b>\r\n                            </div>\r\n                             <div class=\"col-xs-12 col-md-6\">\r\n                                Bid Ended On<br>\r\n                                <b>\r\n                                    {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                    <br>\r\n                                    {{product.end_date | date : 'mediumTime'}}\r\n                                </b>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row margn\" >\r\n                          \r\n                          <div class=\"col-xs-12 col-md-12 text-center\">\r\n                             <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.user_details.length}}</a>\r\n                             \r\n                          </div>\r\n                          <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                              <div class=\"modal-dialog\">\r\n                            \r\n                                <!-- Modal content-->\r\n                                <div class=\"modal-content\">\r\n                                  <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                    <h4 class=\"modal-title\">User Involved - {{involvedUsers.user_details.length}}</h4>\r\n                                  </div>\r\n                                  <div class=\"modal-body\">\r\n                                      <table class=\"table\">\r\n                                          <thead class=\"thead-inverse\">\r\n                                      <tr>\r\n                                        <th>Slno</th>\r\n                                        <th>Name</th>\r\n                                        <th>Bid Amount</th>\r\n                                        <th>Time</th>\r\n                                        <th>Status</th>\r\n                                      \r\n                                      </tr>\r\n                                    </thead>\r\n                                    <tbody *ngIf=\"involvedUsers.bidders.length ==0\">\r\n                                        <tr >\r\n                                              <td colspan=\"5\" class=\"text-center\">No User Involved</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    <tbody *ngIf=\"involvedUsers.bidders.length > 0\" >\r\n                                  \r\n                                        <tr  *ngFor=\"let usr of involvedUsers.bidders;let i = index\" >\r\n                                              <td >{{i+1}}</td>\r\n                                              <td >{{users[usr.user_id].name}}</td>\r\n                                              <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                              <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                              <td >{{usr.bid_status}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    </table>\r\n                                  \r\n                                  </div>\r\n                                  <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                  </div>\r\n                                </div>\r\n                            \r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                      \r\n                        <div class=\"row\">\r\n                            \r\n                            <div class=\"col-xs-12 col-md-12\">\r\n                                <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center \">\r\n                                  <div *ngIf=\"product.is_bid_completed\">\r\n                                      <div class=\"alert alert-success text-center \">\r\n                                          Winner! \r\n                                          <br> <strong> {{product.lastBiduser}}</strong>\r\n                                          <br>\r\n                                          {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                                       </div> \r\n                                  </div>\r\n                                  <div *ngIf=\"!product.is_bid_completed\">\r\n                                  <div class=\"alert alert-success text-center \">\r\n                                    Last Bidder\r\n                                    <br> <strong> {{product.lastBiduser}}</strong>\r\n                                    <br>\r\n                                    {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                                 </div> \r\n                                  </div>\r\n                              </div>\r\n                                <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                                    <div>\r\n                                    <div class=\"alert alert-dangertext-center \">\r\n                                    No bidder Found\r\n                                    <br> <strong><a [routerLink]=\"['/product-detail/'+product._id]\" class=\"alert-danger\" >Re-submit</a></strong>\r\n                                    <br>\r\n                                    Bid closed : {{product.end_date | date: 'dd-MM-yyyy h:mm a'}}\r\n                                </div>\r\n                                </div>\r\n                              </div>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n           \r\n      \r\n        </div>\r\n        </div>\r\n      \r\n        <div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n            <h3 class=\"text-center\"> No Product Found</h3>\r\n        </div>\r\n        </div>\r\n        \r\n    \r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n    \r\n               \r\n    </div>\r\n    \r\n    <footer></footer> \r\n      \r\n    </body>\r\n     \r\n    \r\n       "

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var ClosedAuctionBackComponent = (function () {
    function ClosedAuctionBackComponent(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.involvedUsers = [];
        //options:DatepickerOptions;
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD-MM-YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: enLocale
        };
        this.socket = socketIo('http://localhost:3000');
    }
    ClosedAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
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
    return ClosedAuctionBackComponent;
}());
ClosedAuctionBackComponent = __decorate([
    core_1.Component({
        selector: 'app-closed-auction-back',
        template: __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ClosedAuctionBackComponent);
exports.ClosedAuctionBackComponent = ClosedAuctionBackComponent;
var _a, _b, _c;
//# sourceMappingURL=closed-auction-back.component.js.map

/***/ }),

/***/ "../../../../../src/app/count-down-timer/count-down-timer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var CountDownTimerComponent = (function () {
    function CountDownTimerComponent(elm) {
        this.onTimeOver = new core_1.EventEmitter();
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
        this.$counter = Rx_1.Observable.interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });
        this.subscription = this.$counter.subscribe(function (x) { return _this.message = _this.dhms(_this.diff); });
    };
    CountDownTimerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CountDownTimerComponent;
}());
CountDownTimerComponent = __decorate([
    core_1.Component({
        selector: 'app-count-down-timer',
        template: "\n  <div>\n    {{message}}\n  </div>\n",
        inputs: ["inputDate"],
        outputs: ['onTimeOver']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], CountDownTimerComponent);
exports.CountDownTimerComponent = CountDownTimerComponent;
var _a;
//# sourceMappingURL=count-down-timer.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var DashboardComponent = (function () {
    function DashboardComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/date-search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var DateSearchPipe = (function () {
    function DateSearchPipe() {
    }
    DateSearchPipe.prototype.transform = function (value, startDate, endDate, start, end) {
        // console.log(startDate);
        console.log(start);
        console.log(end);
        // return value;
        return value.filter(function (el) {
            // console.log(startDate);
            // console.log(new Date(el.start_date));
            var end1 = new Date(endDate);
            end1.setHours(23, 59, 59, 999);
            if ((!start || new Date(el[start]) >= new Date(startDate)) && (!end || new Date(el[end]) <= end1)) {
                return true;
            }
            //    return el.pollqtn.toLowerCase().indexOf(args) > -1;
        });
    };
    return DateSearchPipe;
}());
DateSearchPipe = __decorate([
    core_1.Pipe({
        name: 'dateSearch'
    })
], DateSearchPipe);
exports.DateSearchPipe = DateSearchPipe;
//# sourceMappingURL=date-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n      <div id=\"wrapper\">\r\n  \r\n          <!-- Navigation -->\r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n                  <!-- Page Heading -->\r\n                  <header-title [title]=\"'Deleted Users'\"></header-title>\r\n                 \r\n                  <!-- /.row -->\r\n  \r\n              </div>\r\n              \r\n              <!-- /.container-fluid -->\r\n              <table class=\"table table-striped table-hover table-bordered\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Slno</th>\r\n                    <th>Name</th>\r\n                    <th>Email</th>\r\n                    <th>phone</th>\r\n                   \r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"users\">\r\n                  <tr  *ngFor=\"let user1 of users;let i = index;\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{user1.name}}</td>\r\n                    <td>{{user1.email}}</td>\r\n                    <td>{{user1.phone}}</td>\r\n                    \r\n                   \r\n                  </tr>\r\n                </tbody>\r\n              <tbody *ngIf=\"users?.length == 0\">\r\n                  <tr >\r\n                      <td colspan=\"4\">No Delete User Found</td>\r\n                    </tr>\r\n                 </tbody>\r\n              </table>  \r\n          </div>\r\n          <!-- /#page-wrapper -->\r\n  \r\n      </div>\r\n\r\n      <footer></footer> \r\n  </body>\r\n"

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var DeletedUsersComponent = (function () {
    function DeletedUsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DeletedUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.userService.getDeletedUsers().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        });
    };
    return DeletedUsersComponent;
}());
DeletedUsersComponent = __decorate([
    core_1.Component({
        selector: 'deleted-users',
        template: __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], DeletedUsersComponent);
exports.DeletedUsersComponent = DeletedUsersComponent;
var _a, _b;
//# sourceMappingURL=deleted-users.component.js.map

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

module.exports = "<body>\r\n  \r\n      <div id=\"wrapper\">\r\n  \r\n          <!-- Navigation -->\r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n                  <!-- Page Heading -->\r\n                  <header-title [title]=\"'Disabled Users'\"></header-title>\r\n                 \r\n                  <!-- /.row -->\r\n  \r\n              </div>\r\n              \r\n              <!-- /.container-fluid -->\r\n              <table class=\"table table-striped table-hover table-bordered\">\r\n                <thead class=\"thead-dark\">\r\n                  <tr>\r\n                    <th>Slno</th>\r\n                    <th>Name</th>\r\n                    <th>Email</th>\r\n                    <th>Phone</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"users\">\r\n                  <tr  *ngFor=\"let user1 of users;let i = index;\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{user1.name}}</td>\r\n                    <td>{{user1.email}}</td>\r\n                    <td>{{user1.phone}}</td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                         \r\n                          <button type=\"button\" class=\"test\" data-toggle=\"dropdown\">\r\n                           \r\n                            <span class=\"sr-only\">Toggle Dropdown</span>\r\n                          </button>\r\n                          <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li *ngIf=\"user1.block_status=='true' && user1.delete_status=='false'\"><a   (click)=\"unblockUser(user1._id)\">Unblock</a></li>\r\n                            \r\n                          </ul>\r\n                        </div>\r\n                      </td>\r\n                  </tr>\r\n                </tbody>\r\n              <tbody *ngIf=\"users?.length == 0\">\r\n                  <tr >\r\n                      <td colspan=\"5\">No Blocked User Found</td>\r\n                    </tr>\r\n                 </tbody>\r\n              </table>  \r\n          </div>\r\n          <!-- /#page-wrapper -->\r\n  \r\n      </div>\r\n\r\n      <footer></footer> \r\n  </body>\r\n"

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var DisabledUsersComponent = (function () {
    function DisabledUsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    DisabledUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.userService.getDisabledUsers().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        });
    };
    DisabledUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.userService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.router.navigate(['/all-users']);
            }
            else {
                _this.router.navigate(['/disabled-users']);
            }
        });
    };
    return DisabledUsersComponent;
}());
DisabledUsersComponent = __decorate([
    core_1.Component({
        selector: 'disabled-users',
        template: __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], DisabledUsersComponent);
exports.DisabledUsersComponent = DisabledUsersComponent;
var _a, _b;
//# sourceMappingURL=disabled-users.component.js.map

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

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/email-verification/email-verification.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var EmailVerificationComponent = (function () {
    function EmailVerificationComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userService.verifyUser(params.id).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    alert("Success, Redirecting ...");
                    _this.router.navigate(['/home']);
                    console.log("successfull verified user");
                }
                else {
                    alert("Error on verification");
                    _this.router.navigate(['/login']);
                    console.log("error verified user");
                }
            });
        });
    };
    return EmailVerificationComponent;
}());
EmailVerificationComponent = __decorate([
    core_1.Component({
        selector: 'email-verification',
        template: __webpack_require__("../../../../../src/app/email-verification/email-verification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-verification/email-verification.component.css")],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], EmailVerificationComponent);
exports.EmailVerificationComponent = EmailVerificationComponent;
var _a, _b, _c;
//# sourceMappingURL=email-verification.component.js.map

/***/ }),

/***/ "../../../../../src/app/equal-validator.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
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
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    core_1.Directive({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, core_1.Attribute('validateEqual')),
    __param(1, core_1.Attribute('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);
exports.EqualValidator = EqualValidator;
var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var FinishedauctionComponent = (function () {
    function FinishedauctionComponent(_productService, userService, router) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.existStatus = false;
        this.socket = socketIo('http://localhost:3000');
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
    return FinishedauctionComponent;
}());
FinishedauctionComponent = __decorate([
    core_1.Component({
        selector: 'app-finishedauction',
        template: __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.css")],
        inputs: ['products']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_service_1.ProductServiceService !== "undefined" && product_service_service_1.ProductServiceService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], FinishedauctionComponent);
exports.FinishedauctionComponent = FinishedauctionComponent;
var _a, _b, _c;
//# sourceMappingURL=finishedauction.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth.guard.js.map

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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n      <h1 class=\"page-header\">\r\n          AUCTION \r\n          \r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n          <li>\r\n              <i class=\"fa fa-dashboard\"></i>  <a href=\"index.html\">dashboard</a>\r\n          </li>\r\n          <li class=\"active\">\r\n              <i class=\"fa fa-file\"></i> {{title}}\r\n          </li>\r\n      </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-title/header-title.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HeaderTitleComponent = (function () {
    function HeaderTitleComponent() {
    }
    HeaderTitleComponent.prototype.ngOnInit = function () {
    };
    return HeaderTitleComponent;
}());
HeaderTitleComponent = __decorate([
    core_1.Component({
        selector: 'header-title',
        template: __webpack_require__("../../../../../src/app/header-title/header-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-title/header-title.component.css")],
        inputs: ['title']
    }),
    __metadata("design:paramtypes", [])
], HeaderTitleComponent);
exports.HeaderTitleComponent = HeaderTitleComponent;
//# sourceMappingURL=header-title.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=home.component.js.map

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

module.exports = "<body style=\"background-color : #f3f3f3;padding:  5% 0 17% 0;\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"main\">\r\n\r\n      <h3>Please Log In, or <a [routerLink]=\"['/registration']\">Sign Up</a></h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n          <a href=\"/auth/facebook\" target=\"_blank\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n          <a href=\"/auth/google\" class=\"btn btn-lg btn-info btn-block\">Google</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"login-or\">\r\n        <hr class=\"hr-or\">\r\n        <span class=\"span-or\">or</span>\r\n      </div>\r\n\r\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n          <label for=\"inputUsernameEmail\">Username or email</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\" required [(ngModel)]=\"newLogin.email\" name=\"email\" #email=\"ngModel\">\r\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n          <label for=\"inputPassword\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\">\r\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn btn-primary\">\r\n          Log In\r\n        </button>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && status }\">\r\n            <div *ngIf=\"status\" class=\"help-block\">!{{msg}}</div>\r\n       </div> \r\n      </form>\r\n      \r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    return ManageProductComponent;
}());
ManageProductComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-product',
        template: __webpack_require__("../../../../../src/app/manage-product/manage-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-product/manage-product.component.css")],
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _c || Object])
], ManageProductComponent);
exports.ManageProductComponent = ManageProductComponent;
var _a, _b, _c;
//# sourceMappingURL=manage-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#m-auction{\r\n    margin-top: 180px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n        <div *ngIf=\"existStatus else noProduct\" id=\"m-auction\" class=\"auction-section\">\r\n            <h4 class=\"page-head\">My Auctions</h4>\r\n             <!-- <div *ngIf=\"existStatus; else noProduct\"> -->\r\n                <div *ngFor=\"let item of products\">\r\n                    <!-- {{item}} -->\r\n                    <app-card [item]=\"item\" [myauction]=true></app-card>\r\n                </div>\r\n            <!--</div> -->\r\n           \r\n            <ng-template #noProduct>\r\n                <div class=\"no-item\">\r\n                    <h4>Sorrry! No items to display!</h4>\r\n                </div>\r\n            </ng-template>  \r\n          \r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var MyauctionsComponent = (function () {
    function MyauctionsComponent(_productService, userService, router) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.products = [];
        this.existStatus = false;
        this.socket = socketIo('http://192.168.1.99:3000');
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
            _this.products.forEach(function (item, index, object) {
                if (item._id == data) {
                    object.splice(index, 1);
                }
            });
            _this.loadAuctions();
        });
        this.socket.on('closebid', function (data) {
            console.log(data);
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
            // this.products = resProducts;
            console.log('fetch all my product');
            console.log(resProducts);
            var temp = [];
            resProducts.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                //var lastBiduser = '';
                var lastBidTime = '';
                var lastBiduserId = '';
                item.bidders.forEach(function (bidder, i) {
                    //console.log(bidder);
                    if (bidder.amount >= lastBidprice && bidder.bid_status != "rejected") {
                        lastBidprice = bidder.amount;
                        // lastBiduser = this.users[bidder.user_id].name;
                        lastBiduserId = bidder.user_id;
                        lastBidTime = bidder.date_time;
                    }
                });
                resProducts[index].lastBidprice = lastBidprice;
                //  resProducts[index].lastBiduser = lastBiduser;
                resProducts[index].lastBidTime = lastBidTime;
                resProducts[index].lastBiduserId = lastBiduserId;
                if (_this.authUser.id == lastBiduserId) {
                    temp.push(resProducts[index]);
                }
            });
            //  console.log(temp);
            _this.products = temp;
            if (_this.products.length > 0) {
                _this.existStatus = true;
            }
        });
    };
    MyauctionsComponent.prototype.loadUserId = function () {
        this.authUser = JSON.parse(localStorage.getItem('user'));
        return this.authUser.id;
    };
    return MyauctionsComponent;
}());
MyauctionsComponent = __decorate([
    core_1.Component({
        selector: 'app-myauctions',
        template: __webpack_require__("../../../../../src/app/myauctions/myauctions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/myauctions/myauctions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_service_1.ProductServiceService !== "undefined" && product_service_service_1.ProductServiceService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], MyauctionsComponent);
exports.MyauctionsComponent = MyauctionsComponent;
var _a, _b, _c;
//# sourceMappingURL=myauctions.component.js.map

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

module.exports = "<header>\r\n  \r\n  <div class=\"fluid-container\">\r\n    <nav class=\"navbar navbar-default  navbar-fixed-top\">\r\n        <div class=\"box\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                     <!-- <div class=\"col-lg-8 col-md-8\">\r\n                        <p class=\"title1\">Free phone: <strong>800-2345-6789</strong></p>\r\n                        <p class=\"title2\">Hours:  8am-8pm PST M-Th;   6am-3pm PST Fri</p>\r\n                    </div> -->\r\n                    \r\n\r\n                    <div class=\"pull-right\">\r\n                        <li class=\"dropdown\" *ngIf=\"userService.loggedIn()\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">My Account <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          \r\n                          <li *ngIf=\"userService.loggedIn()\"><a [routerLink]=\"['/myauctions']\">My Bids</a></li>\r\n                          <li *ngIf=\"userService.loggedIn()\"><a (click)=\"logout()\" href=\"#\">Log Out</a></li>\r\n                          \r\n                        </ul>\r\n                      </li>\r\n                        <!-- <a href=\"#\" class=\"btn-default btn1\">Sign In</a> -->\r\n                    </div>\r\n\r\n                    <div class=\"pull-right notify-cont\">\r\n\r\n                        <li *ngIf=\"count\" class=\"dropdown notify\" >\r\n                          <div class=\"notify-count\">{{countNumber}}</div>\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></a>\r\n                        <ul class=\"dropdown-menu\" id=\"notify-menu\">\r\n                          \r\n                          <li *ngFor=\"let item of info\">\r\n                            <a [routerLink]=\"['/winnerconfirm/'+item?._id]\" class=\"ovrflow-h\" id=\"notify-head-a\">\r\n                             <div class=\"col-md-12\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h4 id=\"won-head\">You Won a Bid!</h4>\r\n                                  </div>\r\n                                 \r\n                                    <div class=\"col-md-3\">\r\n                                      <div class=\"row\">\r\n                                          <img  class=\"noftify-pro-img\" src=\"../../assets/uploads/{{item?.image||'default.png'}}\" alt=\"pro\">\r\n                                        </div>\r\n                                      </div>\r\n                                      \r\n                                    <div class=\"col-md-9\">\r\n                                          <h4 class=\"noftify-pro-h4\">{{item?.name}}</h4>\r\n                                          <!-- <p>Amount: $1000</p> -->\r\n                                      \r\n                                 \r\n                                  </div>\r\n                                </div>\r\n                                  \r\n                              </div>\r\n                              \r\n                              \r\n                            </a>\r\n                          </li>\r\n                    \r\n                          <!-- <li><a (click)=\"logout()\" href=\"#\">Log Out</a></li> -->\r\n                          \r\n                        </ul>\r\n                      </li>\r\n                        <!-- <a href=\"#\" class=\"btn-default btn1\">Sign In</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n      <div class=\"container\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"../../assets/images/brand.png\" alt=\"brand\"></a>\r\n          </div>\r\n      \r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            \r\n           \r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a  [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a></li>\r\n                <!-- <li class=\"dropdown\" >\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Manage <span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    \r\n                    <li><a href=\"#\">Users</a></li>\r\n                    <li><a href=\"#\">Polls</a></li>\r\n                    <li><a href=\"#\">Asign Poll</a></li>\r\n                    \r\n                  </ul>\r\n                </li> -->\r\n                \r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/runningauction']\" >Running Auctions</a></li>\r\n                    <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/registration']\">Registration</a></li> -->\r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/finishedauction']\" >Closed Auctions</a></li>\r\n                    <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li> -->\r\n                    <li *ngIf=\"userService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/upcomingauction']\" >Upcoming Auctions</a></li>\r\n                \r\n                \r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n      </div>\r\n    </nav>\r\n  \r\n    \r\n</div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var NavigationComponent = (function () {
    function NavigationComponent(userService, router, _productService, productService) {
        this.userService = userService;
        this.router = router;
        this._productService = _productService;
        this.productService = productService;
        this.brand_logo = "brand.png";
        this.count = true;
        this.socket = socketIo('http://localhost:3000');
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "user") {
                _this.router.navigate(['/login']);
            }
            else {
                _this.userInfo = info;
            }
        });
        this.getNotification();
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
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof product_service_service_1.ProductServiceService !== "undefined" && product_service_service_1.ProductServiceService) === "function" && _c || Object, typeof (_d = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _d || Object])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=navigation.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var date_fns_1 = __webpack_require__("../../../../date-fns/index.js");
var NgDatepickerComponent = NgDatepickerComponent_1 = (function () {
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
        this.minYear = this.options && this.options.minYear || date_fns_1.getYear(today) - 30;
        this.maxYear = this.options && this.options.maxYear || date_fns_1.getYear(today) + 30;
        this.displayFormat = this.options && this.options.displayFormat || 'MMM D[,] YYYY';
        this.barTitleFormat = this.options && this.options.barTitleFormat || 'MMMM YYYY';
        this.firstCalendarDay = this.options && this.options.firstCalendarDay || 0;
        this.locale = this.options && { locale: this.options.locale } || {};
    };
    NgDatepickerComponent.prototype.nextMonth = function () {
        this.date = date_fns_1.addMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.prevMonth = function () {
        this.date = date_fns_1.subMonths(this.date, 1);
        this.init();
    };
    NgDatepickerComponent.prototype.setDate = function (i) {
        this.date = this.days[i].date;
        this.value = this.date;
        this.init();
        this.close();
    };
    NgDatepickerComponent.prototype.setYear = function (i) {
        this.date = date_fns_1.setYear(this.date, this.years[i].year);
        this.init();
        this.initYears();
        this.view = 'days';
    };
    NgDatepickerComponent.prototype.init = function () {
        var _this = this;
        var start = date_fns_1.startOfMonth(this.date);
        var end = date_fns_1.endOfMonth(this.date);
        this.days = date_fns_1.eachDay(start, end).map(function (date) {
            return {
                date: date,
                day: date_fns_1.getDate(date),
                month: date_fns_1.getMonth(date),
                year: date_fns_1.getYear(date),
                inThisMonth: true,
                isToday: date_fns_1.isToday(date),
                isSelected: date_fns_1.isSameDay(date, _this.innerValue) && date_fns_1.isSameMonth(date, _this.innerValue) && date_fns_1.isSameYear(date, _this.innerValue)
            };
        });
        for (var i = 1; i <= date_fns_1.getDay(start) - this.firstCalendarDay; i++) {
            var date = date_fns_1.subDays(start, i);
            this.days.unshift({
                date: date,
                day: date_fns_1.getDate(date),
                month: date_fns_1.getMonth(date),
                year: date_fns_1.getYear(date),
                inThisMonth: false,
                isToday: date_fns_1.isToday(date),
                isSelected: date_fns_1.isSameDay(date, this.innerValue) && date_fns_1.isSameMonth(date, this.innerValue) && date_fns_1.isSameYear(date, this.innerValue)
            });
        }
        this.displayValue = date_fns_1.format(this.innerValue, this.displayFormat, this.locale);
        this.barTitle = date_fns_1.format(start, this.barTitleFormat, this.locale);
    };
    NgDatepickerComponent.prototype.initYears = function () {
        var _this = this;
        var range = this.maxYear - this.minYear;
        this.years = Array.from(new Array(range), function (x, i) { return i + _this.minYear; }).map(function (year) {
            return { year: year, isThisYear: year === date_fns_1.getYear(_this.date) };
        });
    };
    NgDatepickerComponent.prototype.initDayNames = function () {
        this.dayNames = [];
        var start = this.firstCalendarDay;
        for (var i = start; i <= 6 + start; i++) {
            var date = date_fns_1.setDay(new Date(), i);
            this.dayNames.push(date_fns_1.format(date, 'ddd', this.locale));
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
            this.displayValue = date_fns_1.format(this.innerValue, this.displayFormat, this.locale);
            this.barTitle = date_fns_1.format(date_fns_1.startOfMonth(val), this.barTitleFormat, this.locale);
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
    return NgDatepickerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgDatepickerComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgDatepickerComponent.prototype, "headless", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgDatepickerComponent.prototype, "isOpened", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgDatepickerComponent.prototype, "position", void 0);
__decorate([
    core_1.HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NgDatepickerComponent.prototype, "onBlur", null);
NgDatepickerComponent = NgDatepickerComponent_1 = __decorate([
    core_1.Component({
        selector: 'ng-datepicker',
        template: __webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ng-datepicker/ng-datepicker.component.sass")],
        providers: [
            { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return NgDatepickerComponent_1; }), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], NgDatepickerComponent);
exports.NgDatepickerComponent = NgDatepickerComponent;
var NgDatepickerComponent_1, _a;
//# sourceMappingURL=ng-datepicker.component.js.map

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

<<<<<<< HEAD
module.exports = "<div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Manage Products'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n              \r\n          \r\n<div class=\"wrapper\">\r\n        <div class=\"col-md-9 shadow\">\r\n                <!-- <h3 class=\"headng\" >Edit a Product</h3>\r\n                <br> -->\r\n  \r\n  <!-- <form class=\"well\" role=\"form\"   #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct()\" novalidate> -->\r\n        <form class=\"well\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updateProduct(arr1);\" novalidate>\r\n      <!-- <form #form='ngForm' (ngSubmit)=\"addProduct()\" class=\"well\" > -->\r\n            <div class=\"form-group\" >\r\n                <label > Name *</label>\r\n                <input id=\"name\" name=\"name\" class=\"form-control\"\r\n                required  autofocus\r\n                [(ngModel)]=\"arr1.name\" #name=\"ngModel\" (keypress)=_keyPress1($event)>\r\n                <div *ngIf=\"f.submitted && !name.valid \"  class=\"alert alert-danger\"> ! Name is required</div>\r\n             \r\n            </div>\r\n        \r\n            <td><img src=\"assets/uploads/{{arr1.image || 'default.png'}}\" alt=\"\" class=\"image\"></td>\r\n            <div class=\"form-group\">\r\n                <label for=\"single\">Select Image</label>\r\n                <input type=\"file\" class=\"\" name=\"single\" ng2FileSelect [uploader]=\"uploader\"  />                                  \r\n             </div>\r\n            <div class=\"form-group\" >\r\n                    <label >  Bid Amount *</label>\r\n                    <input id=\"bid_amount\" name=\"bid_amount\" class=\"form-control\"\r\n                    required  \r\n                    [(ngModel)]=\"arr1.bid_amount\" #bid_amount=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                    <div *ngIf=\"f.submitted && !bid_amount.valid\"  class=\"alert alert-danger\"> ! Amount is required</div>\r\n           \r\n                </div>\r\n\r\n                <div class=\"form-group\" >\r\n                        <label >  Minimum Bid Rate *</label>\r\n                        <input id=\"min_bid_rate\" name=\"min_bid_rate\" class=\"form-control\"\r\n                        required  \r\n                        [(ngModel)]=\"arr1.min_bid_rate\" #min_bid_rate=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                        <div *ngIf=\"f.submitted && !min_bid_rate.valid\"  class=\"alert alert-danger\"> ! Minimum Bid rate is required</div>\r\n               \r\n                    </div>\r\n        \r\n             <div class=\"form-group\" >\r\n                    <label > Bid Start time *</label>\r\n                    <datetime id=\"start_date\" name=\"start_date\"  [(ngModel)]=\"start_date\" [(ngModel)]=\"arr1.start_date\" [hasClearButton]=\"true\"  [datepicker]= \"datepickerOpts\"></datetime>\r\n                </div>\r\n                    <div *ngIf=\"start\">\r\n                    <div class=\"alert alert-danger\"> ! Start time is required</div>\r\n                </div>\r\n                <div class=\"form-group\" >\r\n                        <label > Bid End time *</label>\r\n                        <datetime name = \"end_date\"  [(ngModel)]=\"end_date\" [(ngModel)]=\"arr1.end_date\" [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\"></datetime>\r\n                        <div *ngIf=\"end\">\r\n                        <div  class=\"alert alert-danger\"> ! End time is required</div>\r\n                    </div>\r\n                    </div>\r\n\r\n            \r\n                    <!-- <image-upload></image-upload> -->\r\n            <!-- <div>\r\n                <label > Image</label>\r\n                <input type=\"file\"  name=\"pollqtn\"   required />\r\n            </div> -->\r\n           \r\n\r\n           \r\n            <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\r\n            <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\r\n            \r\n            <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\r\n            \r\n            <input type=\"file\" name =\"myfile\" ng-disabled=\"uploading\" style=\"display: none\">\r\n\r\n            <div class=\"form-group\" >\r\n                <label > Description</label>\r\n                <br>\r\n                <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"arr1.desc\" ></textarea>\r\n            </div>\r\n           \r\n            <!-- <input type=\"submit\" class=\"btn btn-info blakbtn\" value=\"Submit\"  > -->\r\n            <button type= \"submit\" class=\"btn btn-primary\">Update</button>\r\n            <!-- <input type=\"submit\" class=\"btn btn-primary\"  value=\"Update\"  > -->\r\n            <!-- <input type=\"button\" class=\"btn btn-primary\" (click)=\"clickMethod(arr1)\"  value=\"Delete\"  > -->\r\n           \r\n        </form>\r\n  \r\n      </div>\r\n     \r\n    </div>\r\n\r\n   \r\n     \r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  "
=======
module.exports = "<div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Manage Products'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n              \r\n          \r\n<div class=\"wrapper\">\r\n        <div class=\"col-md-9 shadow\">\r\n                <!-- <h3 class=\"headng\" >Edit a Product</h3>\r\n                <br> -->\r\n  \r\n  <!-- <form class=\"well\" role=\"form\"   #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct()\" novalidate> -->\r\n        <form class=\"well\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updateProduct(arr1);\" novalidate>\r\n      <!-- <form #form='ngForm' (ngSubmit)=\"addProduct()\" class=\"well\" > -->\r\n            <div class=\"form-group\" >\r\n                <label > Name *</label>\r\n                <input id=\"name\" name=\"name\" class=\"form-control\"\r\n                required  autofocus\r\n                [(ngModel)]=\"arr1.name\" #name=\"ngModel\" (keypress)=_keyPress1($event)>\r\n                <div *ngIf=\"f.submitted && !name.valid \"  class=\"alert alert-danger\"> ! Name is required</div>\r\n             \r\n            </div>\r\n        \r\n            <td><img src=\"assets/uploads/{{arr1.image || 'default.png'}}\" alt=\"\" class=\"image\"></td>\r\n            <div class=\"form-group\">\r\n                <label for=\"single\">Select Image</label>\r\n                <input type=\"file\" class=\"\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imageOr();\"  />                                  \r\n             </div>\r\n            <div class=\"form-group\" >\r\n                    <label >  Bid Amount *</label>\r\n                    <input id=\"bid_amount\" name=\"bid_amount\" class=\"form-control\"\r\n                    required  \r\n                    [(ngModel)]=\"arr1.bid_amount\" #bid_amount=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                    <div *ngIf=\"f.submitted && !bid_amount.valid\"  class=\"alert alert-danger\"> ! Amount is required</div>\r\n           \r\n                </div>\r\n\r\n                <div class=\"form-group\" >\r\n                        <label >  Minimum Bid Rate *</label>\r\n                        <input id=\"min_bid_rate\" name=\"min_bid_rate\" class=\"form-control\"\r\n                        required  \r\n                        [(ngModel)]=\"arr1.min_bid_rate\" #min_bid_rate=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                        <div *ngIf=\"f.submitted && !min_bid_rate.valid\"  class=\"alert alert-danger\"> ! Minimum Bid rate is required</div>\r\n               \r\n                    </div>\r\n        \r\n             <div class=\"form-group\" >\r\n                    <label > Bid Start time *</label>\r\n                    <datetime id=\"start_date\" name=\"start_date\"  [(ngModel)]=\"start_date\" [(ngModel)]=\"arr1.start_date\" [hasClearButton]=\"true\"  [datepicker]= \"datepickerOpts\"></datetime>\r\n                </div>\r\n                    <div *ngIf=\"start\">\r\n                    <div class=\"alert alert-danger\"> ! Start time is required</div>\r\n                </div>\r\n                <div class=\"form-group\" >\r\n                        <label > Bid End time *</label>\r\n                        <datetime name = \"end_date\"  [(ngModel)]=\"end_date\" [(ngModel)]=\"arr1.end_date\" [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\"></datetime>\r\n                        <div *ngIf=\"end\">\r\n                        <div  class=\"alert alert-danger\"> ! End time is required</div>\r\n                    </div>\r\n                    </div>\r\n\r\n            \r\n                    <!-- <image-upload></image-upload> -->\r\n            <!-- <div>\r\n                <label > Image</label>\r\n                <input type=\"file\"  name=\"pollqtn\"   required />\r\n            </div> -->\r\n           \r\n\r\n           \r\n            <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\r\n            <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\r\n            \r\n            <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\r\n            \r\n            <input type=\"file\" name =\"myfile\" ng-disabled=\"uploading\" style=\"display: none\">\r\n\r\n            <div class=\"form-group\" >\r\n                <label > Description</label>\r\n                <br>\r\n                <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"arr1.desc\" ></textarea>\r\n            </div>\r\n           \r\n            <!-- <input type=\"submit\" class=\"btn btn-info blakbtn\" value=\"Submit\"  > -->\r\n            <button type= \"submit\" class=\"btn btn-primary\">Update</button>\r\n            <!-- <input type=\"submit\" class=\"btn btn-primary\"  value=\"Update\"  > -->\r\n            <input type=\"button\" class=\"btn btn-primary\" (click)=\"clickMethod(arr1)\"  value=\"Delete\"  >\r\n           \r\n        </form>\r\n  \r\n      </div>\r\n     \r\n    </div>\r\n\r\n   \r\n     \r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  "
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD

=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js"); // File Upload
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
=======


 // File Upload

>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_prductService, route, router) {
        this._prductService = _prductService;
        this.route = route;
        this.router = router;
<<<<<<< HEAD
        this.userService = userService;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3000/products/upload' });
=======
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/products/upload' });
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
        this.arr1 = {
            name: String,
            start_date: Date,
            end_date: Date,
            image: String
        };
        this.start = false;
        this.end = false;
        // tableview: boolean = false;
        this.updateProEvent = new core_1.EventEmitter();
        this.deleteProEvent = new core_1.EventEmitter();
        this.datepickerOpts = {
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
    ProductDetailComponent.prototype.updateProduct = function (arr1) {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
            response = JSON.parse(response);
            _this.arr1.image = response.filename;
            console.log(_this.arr1.image);
        };
        // console.log(arr1);
        this._prductService.updateProduct(arr1).subscribe(function (data1) {
            if (arr1.start_date == undefined) {
                _this.start = true;
                //  alert("Bid Start time is required");
            }
            if (arr1.end_date == undefined) {
                _this.end = true;
                // alert("Bid End time is required");
            }
            else if (arr1.start_date != undefined) {
                alert("Update Product Successfully");
                _this.router.navigate(['/product-list']);
            }
        });
    };
    //  deleteProduct(arr1){
    //  }
    //  clickMethod(arr1) {
    //   if(confirm("Are you sure to delete the product?")) {
    //     this._prductService.deleteProduct(arr1).subscribe(data1 => {
    //       if(data1){
    //         // console.log(data1);
    //        alert("Delete Product Successfully");
    //        this.router.navigate(['/product-list'])
    //       }
    //     });
    //     // this.deleteProEvent.emit(this.pro);
    //   }
    // }
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
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")],
        providers: [product_service_1.ProductService],
        inputs: ['pro'],
        outputs: ['updateProEvent', 'deleteProEvent']
    }),
<<<<<<< HEAD
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _d || Object])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
var _a, _b, _c, _d;
=======
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    \r\n         margin-left: 140px;\r\n       \r\n    }\r\n    \r\n    .bg-dark\r\n    {   \r\n        background: #343a40;\r\n        padding:2em 0;  \r\n    }\r\n    body {\r\n        margin-top: 100px;\r\n        background-color: #222;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        body {\r\n            margin-top: 50px;\r\n        }\r\n    }\r\n    \r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n    \r\n    #page-wrapper {\r\n        width: 100%;\r\n        padding: 0;\r\n        background-color: #fff;\r\n    }\r\n    \r\n    .huge {\r\n        font-size: 50px;\r\n        line-height: normal;\r\n    }\r\n    \r\n    @media(min-width:768px) {\r\n        #wrapper {\r\n            padding-left: 225px;\r\n        }\r\n    \r\n        #page-wrapper {\r\n            padding: 10px;\r\n        }\r\n    }\r\n    \r\n    /* Top Navigation */\r\n    \r\n    .top-nav {\r\n        padding: 0 15px;\r\n    }\r\n    \r\n    .top-nav>li {\r\n        display: inline-block;\r\n        float: left;\r\n    }\r\n    \r\n    .top-nav>li>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        line-height: 20px;\r\n        color: #999;\r\n    }\r\n    \r\n    .top-nav>li>a:hover,\r\n    .top-nav>li>a:focus,\r\n    .top-nav>.open>a,\r\n    .top-nav>.open>a:hover,\r\n    .top-nav>.open>a:focus {\r\n        color: #fff;\r\n        background-color: #000;\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu {\r\n        float: left;\r\n        position: absolute;\r\n        margin-top: 0;\r\n        border: 1px solid rgba(0,0,0,.15);\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    }\r\n    \r\n    .top-nav>.open>.dropdown-menu>li>a {\r\n        white-space: normal;\r\n    }\r\n    \r\n    ul.message-dropdown {\r\n        padding: 0;\r\n        max-height: 250px;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n    }\r\n    \r\n    li.message-preview {\r\n        width: 275px;\r\n        border-bottom: 1px solid rgba(0,0,0,.15);\r\n    }\r\n    \r\n    li.message-preview>a {\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n    }\r\n    \r\n    li.message-footer {\r\n        margin: 5px 0;\r\n    }\r\n    \r\n    ul.alert-dropdown {\r\n        width: 200px;\r\n    }\r\n    \r\n    /* Side Navigation */\r\n    \r\n    @media(min-width:768px) {\r\n        .side-nav {\r\n            position: fixed;\r\n            top: 51px;\r\n            left: 225px;\r\n            width: 225px;\r\n            margin-left: -225px;\r\n            border: none;\r\n            border-radius: 0;\r\n            overflow-y: auto;\r\n            background-color: #222;\r\n            bottom: 0;\r\n            overflow-x: hidden;\r\n            padding-bottom: 40px;\r\n        }\r\n    \r\n        .side-nav>li>a {\r\n            width: 225px;\r\n        }\r\n    \r\n        .side-nav li a:hover,\r\n        .side-nav li a:focus {\r\n            outline: none;\r\n            background-color: #000 !important;\r\n        }\r\n    }\r\n    \r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n    }\r\n    \r\n    .side-nav>li>ul>li>a:hover {\r\n        color: #fff;\r\n    }\r\n    \r\n    /* Flot Chart Containers */\r\n    \r\n    .flot-chart {\r\n        display: block;\r\n        height: 400px;\r\n    }\r\n    \r\n    .flot-chart-content {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    /* Custom Colored Panels */\r\n    \r\n    .huge {\r\n        font-size: 40px;\r\n    }\r\n    \r\n    .panel-green {\r\n        border-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > .panel-heading {\r\n        border-color: #5cb85c;\r\n        color: #fff;\r\n        background-color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a {\r\n        color: #5cb85c;\r\n    }\r\n    \r\n    .panel-green > a:hover {\r\n        color: #3d8b3d;\r\n    }\r\n    \r\n    .panel-red {\r\n        border-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > .panel-heading {\r\n        border-color: #d9534f;\r\n        color: #fff;\r\n        background-color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a {\r\n        color: #d9534f;\r\n    }\r\n    \r\n    .panel-red > a:hover {\r\n        color: #b52b27;\r\n    }\r\n    \r\n    .panel-yellow {\r\n        border-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > .panel-heading {\r\n        border-color: #f0ad4e;\r\n        color: #fff;\r\n        background-color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a {\r\n        color: #f0ad4e;\r\n    }\r\n    \r\n    .panel-yellow > a:hover {\r\n        color: #df8a13;\r\n    }\r\n     .image{\r\n         width:150px;\r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\r\n\r\n<div id=\"wrapper\">\r\n  \r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n            \r\n                 <header-title [title]=\"'List Products'\"></header-title>\r\n             \r\n  \r\n              </div>\r\n<div class=\"col-md-9 tab\" >\r\n<br>\r\n\r\n  <label class=\"search\" >Search Product: </label>\r\n  <input type=\"text\" [(ngModel)]=\"term\" />\r\n\r\n<br>\r\n<br>\r\n\r\n<table class=\"table table-striped\">\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Image</th>\r\n      <th>Bid Amount</th>\r\n      <th>Minimum Bid Rate</th>\r\n      <th>Start date</th>\r\n      <th>End Date</th>\r\n      <th>Description</th>\r\n  \r\n      <th>Action</th>\r\n    </tr>\r\n    \r\n    <tr  *ngFor=\"let pro of arr1 | filter:term \">\r\n  \r\n    <td>{{pro.name}}</td>\r\n    <td><img src=\"assets/uploads/{{pro.image}}\" alt=\"\" class=\"image\"></td>\r\n    <td>{{pro.bid_amount}}</td>\r\n    <td>{{pro.min_bid_rate}}</td>\r\n    <td>{{pro.start_date}}</td>\r\n    <td>{{pro.end_date}}</td>\r\n    <td>{{pro.desc}}</td>\r\n  \r\n  \r\n    <td> \r\n      <a [routerLink]=\"['/product-detail/'+pro._id]\" class=\"btn btn-primary btn-xs\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></a>\r\n      <!-- <a (click)=\"deleteProduct(pro._id)\" class=\"btn btn-primary btn-xs\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"Delete\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n      <a href=\"#\" class=\"btn btn-primary btn-xs\" data-target=\"#myModal\" data-toggle=\"modal\" ><i class=\"fa fa-trash-o\"></i></a>\r\n    </td>\r\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n      \r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <!-- <div class=\"modal-header\"> -->\r\n              <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n            <!-- </div> -->\r\n            <div class=\"modal-body\">\r\n                <h4 class=\"modal-title\">Are you sure to delete?</h4>\r\n            \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" (click)=\"deleteProduct(pro._id)\" class=\"btn btn-default\" data-dismiss=\"modal\">Save</button>\r\n            </div>\r\n          </div>\r\n      \r\n        </div>\r\n      </div>\r\n\r\n    </tr>\r\n  </table>\r\n</div>\r\n   \r\n</div>\r\n\r\n           \r\n</div>\r\n\r\n\r\n<footer></footer> "
=======
module.exports = "<!-- <ul>\r\n    <li (click) =\"onSelect(pro)\" *ngFor=\"let pro of pros\"><a>{{pro.name}}</a></li>\r\n</ul> -->\r\n\r\n<div id=\"wrapper\">\r\n  \r\n          <!-- Navigation -->\r\n<side-bar></side-bar>\r\n  \r\n          <div id=\"page-wrapper\">\r\n  \r\n              <div class=\"container-fluid\">\r\n  \r\n                  <!-- Page Heading -->\r\n                 <header-title [title]=\"'List Products'\"></header-title>\r\n                  <!-- /.row -->\r\n  \r\n              </div>\r\n<div class=\"col-md-9 tab\" >\r\n<br>\r\n\r\n  <label class=\"search\" >Search Product: </label>\r\n  <input type=\"text\" [(ngModel)]=\"term\" />\r\n\r\n<br>\r\n<br>\r\n\r\n<table class=\"table table-striped\">\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Image</th>\r\n      <th>Bid Amount</th>\r\n      <th>Minimum Bid Rate</th>\r\n      <th>Start date</th>\r\n      <th>End Date</th>\r\n      <th>Description</th>\r\n  \r\n      <th>Action</th>\r\n    </tr>\r\n    \r\n    <tr  *ngFor=\"let pro of arr1 | filter:term \">\r\n  \r\n    <td>{{pro.name}}</td>\r\n    <!-- <td><img src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"\" class=\"image\"></td> -->\r\n    <td><img src=\"assets/uploads/{{pro.image || 'defualt1.jpg'}}\" alt=\"\" class=\"image\"></td>\r\n    <td>{{pro.bid_amount}}</td>\r\n    <td>{{pro.min_bid_rate}}</td>\r\n    <td>{{pro.start_date}}</td>\r\n    <td>{{pro.end_date}}</td>\r\n    <td>{{pro.desc}}</td>\r\n  \r\n  \r\n    <td> <a href=\"/product-detail/{{pro._id}}\"  ><input type=\"submit\" value=\"Action\" class=\"btn btn-primary\" > </a></td>\r\n    <!-- <td> <a [routerLink]=\"['/product-detail/'+pro._id]\"  ><input type=\"submit\" value=\"Action\" class=\"btn btn-primary\" > </a></td> -->\r\n    <!-- <td> <a [routerLink]=\"['/product-list/'+pro._id]\"  ><input type=\"submit\" value=\"delete\" class=\"btn btn-primary\" > </a></td> -->\r\n\r\n    </tr>\r\n  </table>\r\n</div>\r\n   \r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> "
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var ProductListComponent = (function () {
    function ProductListComponent(_prductService, router, userService) {
        this._prductService = _prductService;
        this.router = router;
        this.userService = userService;
        this.tableview = true;
        // private deleteProEvent = new EventEmitter();
        this.SelectPro = new core_1.EventEmitter();
        this.datepickerOpts1 = {
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
        // this.userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.status!=true){
        //     this.router.navigate(['/login']);
        //   }
        //   else if(info.role == "user"){
        //     this.router.navigate(['/login']);
        //   }
        // });
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
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")],
        providers: [product_service_1.ProductService],
        // pipes :[]
        inputs: ['pros'],
        outputs: ['SelectPro'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _c || Object])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
var _a, _b, _c;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/product.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return ProductPipe;
}());
ProductPipe = __decorate([
    core_1.Pipe({
        name: 'product'
    })
], ProductPipe);
exports.ProductPipe = ProductPipe;
//# sourceMappingURL=product.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addpro{\r\n\r\n     margin-left: 140px;\r\n   \r\n}\r\n\r\n.bg-dark\r\n{   \r\n    background: #343a40;\r\n    padding:2em 0;  \r\n}\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Add Product'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n\r\n<div class=\"wrapper\">\r\n        <div class=\"col-md-9 addpro\">\r\n                <!--<h3 class=\"headng\" >Add a Product</h3>-->\r\n               \r\n  <!-- <form class=\"well\" role=\"form\"   #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct()\" novalidate> -->\r\n        <form class=\"well\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addProduct();\" novalidate>\r\n      <!-- <form #form='ngForm' (ngSubmit)=\"addProduct()\" class=\"well\" > -->\r\n            <div class=\"form-group\" >\r\n                <label > Name *</label>\r\n                <input id=\"name\" name=\"name\" class=\"form-control\"\r\n                required  autofocus\r\n                [(ngModel)]=\"newproduct.name\" #name=\"ngModel\" >\r\n                <div *ngIf=\"f.submitted && !name.valid \"  class=\"alert alert-danger\"> ! Name is required</div>\r\n             \r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"single\">Select Image</label>\r\n                <input type=\"file\" class=\"\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" (change)=\"imageOr();\"/>                                  \r\n             </div>\r\n              \r\n\r\n            <div class=\"form-group\" >\r\n                    <label >  Bid Amount *</label>\r\n                    <input id=\"bid_amount\" name=\"bid_amount\" class=\"form-control\"\r\n                    required  \r\n                    [(ngModel)]=\"newproduct.bid_amount\" #bid_amount=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                    <div *ngIf=\"f.submitted && !bid_amount.valid\"  class=\"alert alert-danger\"> ! Amount is required</div>\r\n           \r\n                </div>\r\n\r\n                <div class=\"form-group\" >\r\n                        <label >  Minimum Bid Rate *</label>\r\n                        <input id=\"min_bid_rate\" name=\"min_bid_rate\" class=\"form-control\"\r\n                        required  \r\n                        [(ngModel)]=\"newproduct.min_bid_rate\" #min_bid_rate=\"ngModel\" (keypress)=\"_keyPress($event)\">\r\n                        <div *ngIf=\"f.submitted && !min_bid_rate.valid\"  class=\"alert alert-danger\"> ! Minimum Bid rate is required</div>\r\n               \r\n                    </div>\r\n        \r\n             <div class=\"form-group\" >\r\n                    <label > Bid Start time *</label>\r\n                    <datetime name=\"start_date\" required  [(ngModel)]=\"newproduct.start_date\"  [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\" ></datetime>\r\n                    <div *ngIf=\"f.submitted && !newproduct.start_date\"  class=\"alert alert-danger\"> !Start time is required</div>\r\n                </div>\r\n                <div class=\"form-group\" >\r\n                        <label > Bid End time *</label>\r\n                        <datetime name = \"end_date\"  required [(ngModel)]=\"newproduct.end_date\" [datepicker]= \"datepickerOpts\" [hasClearButton]=\"true\"></datetime>\r\n                        <div *ngIf=\"f.submitted && !newproduct.end_date\"  class=\"alert alert-danger\"> !End time is required</div>\r\n                    </div>\r\n\r\n            \r\n                    <!-- <image-upload></image-upload> -->\r\n            <!-- <div>\r\n                <label > Image</label>\r\n                <input type=\"file\"  name=\"pollqtn\"   required />\r\n            </div> -->\r\n           \r\n           \r\n            <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\r\n            <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\r\n            \r\n            <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\r\n            \r\n            <!-- <input type=\"file\" name =\"myfile\" ng-disabled=\"uploading\" style=\"display: none\"> -->\r\n\r\n            <div class=\"form-group\" >\r\n                <label > Description</label>\r\n                <br>\r\n                <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"newproduct.desc\" ></textarea>\r\n            </div>\r\n           \r\n                \r\n            <!-- <input type=\"submit\" class=\"btn btn-info blakbtn\" value=\"Submit\"  > -->\r\n            <button type= \"submit\" class=\"btn btn-primary\">Submit</button>\r\n           \r\n        </form>\r\n  \r\n      \r\n   \r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n   \r\n               \r\n</div>\r\n\r\n<footer></footer> \r\n      "

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// import { FileUploader } from 'ng2-file-upload';
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
// import { FileUploader } from 'ng2-file-upload';
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
// import { FormGroup } from '@angular/forms';
// import { ProductService } from '../services/product.service';
// import { Poll } from '../poll';
// import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
// import { answer } from './../answer';
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js"); // File Upload
var ProductComponent = (function () {
    function ProductComponent(_prductService, _userService, router) {
        this._prductService = _prductService;
        this._userService = _userService;
        this.router = router;
<<<<<<< HEAD
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3000/products/upload' });
=======
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3000/products/upload' });
        this.imageselect = false;
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb
        this.newproduct = {
            name: '',
            desc: '',
            bid_amount: '',
            min_bid_rate: '',
            start_date: '',
            end_date: '',
            image: ''
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
    ProductComponent.prototype.ngOnInit = function () {
        // this._userService.getLoggedUSerDetails().subscribe(info =>{
        //   if(info.status!=true){
        //     this.router.navigate(['/login']);
        //   }
        //   else if(info.role == "user"){
        //     this.router.navigate(['/login']);
        //   }
        // });
    };
    ProductComponent.prototype.imageOr = function () {
        this.imageselect = true;
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        console.log("image selected or not");
        console.log(this.imageselect);
        if (this.imageselect == true) {
            this.uploader.uploadAll();
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                response = JSON.parse(response);
                _this.newproduct.image = response.filename;
                console.log("before saving");
                console.log(_this.newproduct);
                _this._prductService.addProduct(_this.newproduct).subscribe(function (data) {
                    if (data) {
                        // console.log(this.newproduct);
                        console.log(_this.newproduct.image);
                        _this._userService.sendmail().subscribe(function (data1) {
                        });
                        alert("Add Product Successfully");
                        _this.router.navigate(['/product-list']);
                        //  window.location.reload();
                        //  
                    }
                    else {
                        alert("Error");
                        console.log("error");
                    }
                });
                // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
            };
        }
        else if (this.imageselect == false) {
            console.log("before saving");
            this._prductService.addProduct(this.newproduct).subscribe(function (data) {
                if (data) {
                    // console.log(this.newproduct);
                    console.log(_this.newproduct.image);
                    _this._userService.sendmail().subscribe(function (data1) {
                    });
                    alert("Add Product Successfully");
                    _this.router.navigate(['/product-list']);
                    //  window.location.reload();
                    //  
                }
                else {
                    alert("Error");
                    console.log("error");
                }
            });
        }
    };
    ProductComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")],
        providers: [product_service_1.ProductService, user_service_1.UserService]
        // providers: [ProductService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ProductComponent);
exports.ProductComponent = ProductComponent;
var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/read-more/read-more.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return ReadMoreComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ReadMoreComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ReadMoreComponent.prototype, "maxLength", void 0);
ReadMoreComponent = __decorate([
    core_1.Component({
        selector: 'read-more',
        template: "\n        <div [innerHTML]=\"currentText\">\n        </div>\n            <a [class.hidden]=\"hideToggle\" (click)=\"toggleView()\">Read {{isCollapsed? 'more':'less'}}</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], ReadMoreComponent);
exports.ReadMoreComponent = ReadMoreComponent;
var _a;
//# sourceMappingURL=read-more.component.js.map

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

<<<<<<< HEAD
module.exports = "\n<body style=\"background-color:#f3f3f3;padding: 8% 0 12% 0;\">\n<br>\n<div class=\"wrapper center\">\n  <br>\n  <form class=\"form-horizontal\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onRegisterSubmit();\" novalidate>\n    <div *ngIf=\"showSuccess\" class=\"alert alert-success\">\n      <strong>Account created successfully, Please verify your Email address</strong>\n    </div>\n    <div *ngIf=\"showDanger\" class=\"alert alert-danger\">\n      <strong>The email address you specified is already in use. Please login to continue</strong>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\n        <div class=\"col-md-12 col-xs-12\">\n        <!-- <label for=\"exampleInputEmail1\">Name</label> -->\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"newUser.name\" name=\"name\" #name=\"ngModel\">\n          <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n      <div class=\"col-md-12 col-xs-12\">\n      <!-- <label >User Name</label> -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"newUser.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" #email=\"ngModel\">\n        <div *ngIf=\"f.submitted && email.invalid\">\n            <!-- <div *ngIf=\"!email.valid && newUser.email=='' \" class=\"help-block\">Email is required</div> -->\n          <div *ngIf=\"email.errors.pattern\" class=\"help-block\">! Email id is not valid</div>\n          <div *ngIf=\"email.errors.required\" class=\"help-block\">! Email id is required</div>\n        </div> \n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\n      <div class=\"col-md-12 col-xs-12\">\n      <!-- <label >Phone Number</label> --> \n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newUser.phone\" name=\"phone\" #phone=\"ngModel\">\n        <div *ngIf=\"f.submitted && phone.invalid\">\n          <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 10 digits</div>\n          <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Phone Number is required</div>\n          <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\n        </div> \n      </div>\n     </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"> \n      \n      <div class=\"col-md-12 col-xs-12\">\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" required validateEqual=\"confirmPassword\" reverse=\"true\" [(ngModel)]=\"newUser.password\" name=\"password\" #password=\"ngModel\"> \n        <div *ngIf=\"f.submitted && password.invalid\">\n            <div *ngIf=\"password.errors.required\" class=\"help-block\">! Password is required</div>\n            <div *ngIf=\"password.errors.pattern\" class=\"help-block\">! Password contain atleast 6 characters and should contain one number,one character and one special character</div>\n        </div> \n        </div>\n    </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\n     \n      <div class=\"col-md-12 col-xs-12\">\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" required validateEqual=\"password\" placeholder=\"Confirm Password\" required validateEqual=\"password\" reverse=\"false\" [(ngModel)]=\"User.confirmPassword\" name=\"confirmPassword\" #confirmPassword=\"ngModel\"> \n        <div *ngIf=\"!confirmPassword.valid && (f.submitted)\" class=\"help-block\">! Password not Match</div>   \n        \n        </div>\n    </div> \n\n\n    <div class=\"form-group\">\n      <div class=\"col-md-12 col-xs-12\">\n        <button type=\"submit\" class=\"btn btn-default\">Sign up</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-md-12 col-xs-12\">\n          <div class=\"checkbox\">\n            <label>\n              By creating an account, you agree to Auction's<a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">\n            Terms and Conditions\n            </a>\n          </label>\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"form-group\">\n        <div class=\"col-md-12 col-xs-12\">\n          \n            <label>Already have an account?  <a [routerLink]=\"['/login']\">\n            Sign In\n            </a>\n          </label>\n          \n        </div>\n    </div>\n\n</form>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\"> \n            Terms and Conditions</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h4>Conditions of Use</h4>\n          \n          <p>Welcome to Auction. Auction Services LLC and/or its affiliates (\"Auction\") provide website features and other products and services to you when you visit or bid at Auction.com, use Auction products or services, use Auction applications for mobile, or use software provided by Auction in connection with any of the foregoing (collectively, \"Auction Services\"). Auction provides the Auction Services subject to the following conditions.\n              <br>\n              <b>By using Auction Services, you agree to these conditions. Please read them carefully.</b>\n              <br>\n             When you using Auction, you also will be subject to the guidelines, terms and agreements applicable to that Auction Service (\"Service Terms\"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.\n              <br>\n             <b> ELECTRONIC COMMUNICATIONS</b>\n              <br>\n              When you use Auction Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Auction Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.\n              <br>\n              <b>COPYRIGHT</b>\n              <br>\n              All content included in or made available through any Auction Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Auction or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Auction Service is the exclusive property of Auction and protected by U.S. and international copyright laws.\n              <br>\n              <b>LICENSE AND ACCESS</b>\n              <br>\n              Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Auction or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Auction Services. This license does not include any resale or commercial use of any Auction Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Auction Service or its contents; any downloading, copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction tools. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Auction or its licensors, suppliers, publishers, rightsholders, or other content providers. No Auction Service, nor any part of any Auction Service, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Auction. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Auction without express written consent. You may not use any meta tags or any other \"hidden text\" utilizing Auction's name or trademarks without the express written consent of Auction. You may not misuse the Auction Services. You may use the Auction Services only as permitted by law. The licenses granted by Auction terminate if you do not comply with these Conditions of Use or any Service Terms.\n              </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"
=======
module.exports = "\r\n<body style=\"background-color:#f3f3f3;padding: 8% 0 12% 0;\">\r\n<br>\r\n<div class=\"wrapper center\">\r\n  <br>\r\n  <form class=\"form-horizontal\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onRegisterSubmit();\" novalidate>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n        <!-- <label for=\"exampleInputEmail1\">Name</label> -->\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"newUser.name\" name=\"name\" #name=\"ngModel\">\r\n          <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Name is required</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n      <!-- <label >User Name</label> -->\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"newUser.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" #email=\"ngModel\">\r\n        <div *ngIf=\"f.submitted && email.invalid\">\r\n            <!-- <div *ngIf=\"!email.valid && newUser.email=='' \" class=\"help-block\">Email is required</div> -->\r\n          <div *ngIf=\"email.errors.pattern\" class=\"help-block\">! Email id is not valid</div>\r\n          <div *ngIf=\"email.errors.required\" class=\"help-block\">! Email id is required</div>\r\n        </div> \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n      <!-- <label >Phone Number</label> --> \r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newUser.phone\" name=\"phone\" #phone=\"ngModel\">\r\n        <div *ngIf=\"f.submitted && phone.invalid\">\r\n          <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 10 digits</div>\r\n          <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Phone Number is required</div>\r\n          <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\r\n        </div> \r\n      </div>\r\n     </div> \r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"> \r\n      \r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" required validateEqual=\"confirmPassword\" reverse=\"true\" [(ngModel)]=\"newUser.password\" name=\"password\" #password=\"ngModel\"> \r\n        <div *ngIf=\"f.submitted && password.invalid\">\r\n            <div *ngIf=\"password.errors.required\" class=\"help-block\">! Password is required</div>\r\n            <div *ngIf=\"password.errors.pattern\" class=\"help-block\">! Password contain atleast 6 characters and should contain one number,one character and one special character</div>\r\n        </div> \r\n        </div>\r\n    </div> \r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\r\n     \r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" required validateEqual=\"password\" placeholder=\"Confirm Password\" required validateEqual=\"password\" reverse=\"false\" [(ngModel)]=\"User.confirmPassword\" name=\"confirmPassword\" #confirmPassword=\"ngModel\"> \r\n        <div *ngIf=\"!confirmPassword.valid && (f.submitted)\" class=\"help-block\">! Password not Match</div>   \r\n        \r\n        </div>\r\n    </div> \r\n\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Sign up</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n          <div class=\"checkbox\">\r\n            <label>\r\n              By creating an account, you agree to Auction's<a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n            Terms and Conditions\r\n            </a>\r\n          </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-12 col-xs-12\">\r\n          \r\n            <label>Already have an account?  <a [routerLink]=\"['/login']\">\r\n            Sign In\r\n            </a>\r\n          </label>\r\n          \r\n        </div>\r\n    </div>\r\n\r\n</form>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\"> \r\n            Terms and Conditions</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <h4>Conditions of Use</h4>\r\n          \r\n          <p>Welcome to Auction. Auction Services LLC and/or its affiliates (\"Auction\") provide website features and other products and services to you when you visit or bid at Auction.com, use Auction products or services, use Auction applications for mobile, or use software provided by Auction in connection with any of the foregoing (collectively, \"Auction Services\"). Auction provides the Auction Services subject to the following conditions.\r\n              <br>\r\n              <b>By using Auction Services, you agree to these conditions. Please read them carefully.</b>\r\n              <br>\r\n             When you using Auction, you also will be subject to the guidelines, terms and agreements applicable to that Auction Service (\"Service Terms\"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.\r\n              <br>\r\n             <b> ELECTRONIC COMMUNICATIONS</b>\r\n              <br>\r\n              When you use Auction Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Auction Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.\r\n              <br>\r\n              <b>COPYRIGHT</b>\r\n              <br>\r\n              All content included in or made available through any Auction Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Auction or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Auction Service is the exclusive property of Auction and protected by U.S. and international copyright laws.\r\n              <br>\r\n              <b>LICENSE AND ACCESS</b>\r\n              <br>\r\n              Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Auction or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Auction Services. This license does not include any resale or commercial use of any Auction Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Auction Service or its contents; any downloading, copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction tools. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Auction or its licensors, suppliers, publishers, rightsholders, or other content providers. No Auction Service, nor any part of any Auction Service, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Auction. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Auction without express written consent. You may not use any meta tags or any other \"hidden text\" utilizing Auction's name or trademarks without the express written consent of Auction. You may not misuse the Auction Services. You may use the Auction Services only as permitted by law. The licenses granted by Auction terminate if you do not comply with these Conditions of Use or any Service Terms.\r\n              </p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>"
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// import { EqualTextValidator } from "angular2-text-equality-validator"; 
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
var _a, _b;
//# sourceMappingURL=registration.component.js.map

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

module.exports = "<body>\r\n    \r\n        <div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Running Auction'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n\r\n\r\n\r\n                \r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n            <div class=\"container\" style=\"padding-top:20px;\">\r\n                    \r\n                            <div class=\"col-md-9 col-xs-9 brdr\">\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-6 col-xs-6\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-4 col-xs-4\">\r\n                                                        <select [(ngModel)]=\"start\" class=\"form-control\">\r\n                                                            <option  value=\"start_date\">Start</option>\r\n                                                            <option value=\"end_date\">End</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-8 col-xs-8\">\r\n                                                        <label>From</label>\r\n                                                        <ng-datepicker [(ngModel)]=\"startDate\" [options]=\"options\" ></ng-datepicker>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-xs-6\">\r\n                                                    <div class=\"row\">\r\n                                                            <div class=\"col-md-4 col-xs-4\">\r\n                                                                <select [(ngModel)]=\"end\" class=\"form-control\">\r\n                                                                    <option  value=\"start_date\">Start</option>\r\n                                                                    <option  value=\"end_date\">End</option>\r\n                                                                </select>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-8 col-xs-8\">\r\n                                                                <label>Upto</label>\r\n                                                                <ng-datepicker [(ngModel)]=\"endDate\" [options]=\"options\" ></ng-datepicker>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                \r\n                                            </div>\r\n                                            \r\n                                    </div>   \r\n                                </div>\r\n                                <!-- <div class=\"col-md-1 col-xs-2\">\r\n                                    <div class=\"row\">\r\n                                        <input type=\"button\" value=\"search\" class=\"btn btn-primary btn2\">\r\n                                    </div>\r\n                                </div> -->\r\n                                <br>\r\n                                <br>\r\n                                <br>\r\n                                <div class=\"clearfix\"></div>\r\n        \r\n        <div *ngFor=\"let product of (products | dateSearch:startDate:endDate:start:end)\"  class=\"item  col-xs-4 col-lg-4\">\r\n            <div class=\"thumbnail\">\r\n                \r\n                <img class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n                <div class=\"caption\">\r\n                    <h4 class=\"group inner list-group-item-heading text-center\">\r\n                        {{product.name}}</h4>\r\n                        <hr>\r\n                        <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                        <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                      </p>\r\n                    <hr>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Start Price\r\n                            <p class=\"lead\"> {{product.bid_amount | number:'1.2-2'}}</p>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                          Ends In\r\n                            <p class=\"lead\">\r\n                              <!-- {{product.end_date | date: 'dd-mm-yyyy h:mm:ss'}} -->\r\n                              <app-count-down-timer (onTimeOver)=\"timeOver()\" [inputDate]=\"product.end_date\"></app-count-down-timer>\r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date | date: 'MMMM dd, yyyy h:mm:ss'\"></app-count-down-timer> -->\r\n\r\n                             \r\n                              \r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date\"></app-count-down-timer> -->\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row margn\" >\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12 text-center\">\r\n                           <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.user_details.length}}</a>\r\n                           \r\n                        </div>\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                          \r\n                              <!-- Modal content-->\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                  <h4 class=\"modal-title\">User Involved - {{involvedUsers.user_details.length}}</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <table class=\"table\">\r\n                                        <thead class=\"thead-inverse\">\r\n                                    <tr>\r\n                                      <th>Slno</th>\r\n                                      <th>Name</th>\r\n                                      <th>Bid Amount</th>\r\n                                      <th>Time</th>\r\n                                      <th>Status</th>\r\n                                    \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody *ngIf=\"involvedUsers.bidders.length ==0\">\r\n                                      <tr >\r\n                                            <td colspan=\"4\" class=\"text-center\">No User Involved</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  <tbody *ngIf=\"involvedUsers.bidders.length > 0\" >\r\n                                \r\n                                      <tr  *ngFor=\"let usr of involvedUsers.bidders;let i = index\" >\r\n                                            <td >{{i+1}}</td>\r\n                                            <td >{{users[usr.user_id].name}}</td>\r\n                                            <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                            <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                            <td >{{usr.bid_status}}</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  </table>\r\n                                \r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                </div>\r\n                              </div>\r\n                          \r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center margn\">\r\n                                <strong>Last Bid Amount - {{product.lastBidprice | number:'1.2-2'}}</strong>\r\n                                 <br>\r\n                                 {{product.lastBiduser}} \r\n                                 <br> {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                      \r\n                        </div>\r\n                        <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                           No bidder Found\r\n                          </div>\r\n               \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n</div>\r\n\r\n</div>\r\n<div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n        <h3 class=\"text-center\"> No Product Found</h3>\r\n    </div>\r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  \r\n</body>"

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js");
var RunningAuctionBackComponent = (function () {
    function RunningAuctionBackComponent(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.involvedUsers = [];
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD-MM-YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: enLocale
        };
        this.socket = socketIo('http://localhost:3000');
    }
    RunningAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        this.startDate = new Date();
        this.endDate = new Date();
        this.userService.getAllUsersById().subscribe(function (data) {
            _this.users = data;
            // console.log(this.users);
        });
        this.socket.on('userbidreject', function (data) {
            _this.getAllproduct();
        });
        this.socket.on('newbid', function (data) {
            _this.getAllproduct();
        });
        this.socket.on('startbid', function (data) {
            // console.log(data);
            //  this.productService.getProduct(data.prod_id).subscribe(data=>{
            //   var lastBidprice = data.bid_amount;
            //   var lastBiduser = '';
            //   var lastBidTime = '';
            //   var lastBiduserId = '';
            //   data.bidders.forEach((bidder, i) => {
            //     //console.log(bidder);
            //     if(bidder.amount >= lastBidprice){
            //        lastBidprice = bidder.amount;
            //        lastBiduser = this.users[bidder.user_id].name;
            //        lastBiduserId = this.users[bidder.user_id]._id;
            //        lastBidTime = bidder.date_time;
            //     }
            //   });
            //   data.lastBidprice = lastBidprice;
            //   data.lastBiduser = lastBiduser;
            //   data.lastBidTime = lastBidTime;
            //   data.lastBiduserId = lastBiduserId;
            //    this.products.push(data);
            //    //this.getlastbidder();
            //  });
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
    return RunningAuctionBackComponent;
}());
RunningAuctionBackComponent = __decorate([
    core_1.Component({
        selector: 'app-running-auction-back',
        template: __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], RunningAuctionBackComponent);
exports.RunningAuctionBackComponent = RunningAuctionBackComponent;
var _a, _b, _c;
//# sourceMappingURL=running-auction-back.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var RunningauctionComponent = (function () {
    function RunningauctionComponent(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.product_ids = [];
        this.involvedUsers = [];
        this.socket = socketIo('http://localhost:3000');
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
            //console.log(this.user._id);
        });
        this.userService.getAllUsersById().subscribe(function (data) {
            _this.users = data;
            //  console.log(this.users);
        });
        this.productService.getAllrunningProduct().subscribe(function (data) {
            console.log(data);
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
    return RunningauctionComponent;
}());
RunningauctionComponent = __decorate([
    core_1.Component({
        selector: 'app-runningauction',
        template: __webpack_require__("../../../../../src/app/runningauction/runningauction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/runningauction/runningauction.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], RunningauctionComponent);
exports.RunningauctionComponent = RunningauctionComponent;
var _a, _b, _c;
//# sourceMappingURL=runningauction.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ProductServiceService = (function () {
    function ProductServiceService(_http) {
        this._http = _http;
        this.authToken = '';
    }
    ProductServiceService.prototype.loadClosedProduct = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/completedproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadHighestBidder = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/highBid/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadUpcomingProduct = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/upcomingproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadMyAuctionProduct = function () {
        var id = this.loadUserId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/myauctionproduct/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.addInterestedCandidate = function (id) {
        this.loadToken();
        //  headers.append('Authorization', this.authToken);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': this.authToken });
        var options = new http_1.RequestOptions({ headers: headers });
        //headers.append('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/products/updateInterested/' + id, {}, options)
            .map(function (res) { return res.json(); });
    };
    ProductServiceService.prototype.loadNotifications = function () {
        var Uid = this.loadUserId();
        var headers = new http_1.Headers();
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/products/product/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProductServiceService;
}());
ProductServiceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ProductServiceService);
exports.ProductServiceService = ProductServiceService;
var _a;
//# sourceMappingURL=product-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/closed_products', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAProduct = function (proId) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._getWithIdUrl + proId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (prod) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._updateProductUrl + pro._id, (pro), Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (pid) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._deleteUrl + pid, Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllrunningProduct = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/runnig_products', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllUpcomingProduct = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/upcomingproduct', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.bidProduct = function (data) {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'products/bid_a_product', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // console.log(this._getOneUrl+id);
        return this.http.get(this._getOneUrl + id, options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ProductService.prototype.updateStatusConfirm = function (pid) {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._conStatusUrl + pid, {}, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateStatusReject = function (pid) {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._rejStatusUrl + pid, {}, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getNotif = function (user_id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this._getNotifUrl + user_id, options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateNotif = function (user_id, pid) {
        var product = { "_id": pid, "user_id": user_id };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._updateNotifUrl + pid, JSON.stringify(product), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.adminViewed = function (pid) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // console.log(this._adminViewedUrl+pid);
        return this.http.put(this._adminViewedUrl + pid, options)
            .map(function (response) { return response.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ProductService);
exports.ProductService = ProductService;
var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
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
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._regUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.verifyUser = function (verif_id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(this._verifyUrl + verif_id);
        return this.http.put(this._verifyUrl + verif_id, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.sendmail = function () {
        // console.log("hi");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // console.log("ff");
        return this.http.get(this.url + 'user/getemail')
            .map(function (res) { return res.json(); });
    };
    //all users
    UserService.prototype.getAllUser = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //deleteded users
    UserService.prototype.getDeletedUsers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/deletedusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //disabled users
    UserService.prototype.getDisabledUsers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/disabledusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete user
    UserService.prototype.deleteUser = function (id) {
        var headers = new http_1.Headers();
        //this.loadToken();
        // headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //disable user
    UserService.prototype.blockUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/disable/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //unblock
    UserService.prototype.unblockUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url + 'user/unblock/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.generateToken = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(this._genTokenUrl + id);
        return this.http.put(this._genTokenUrl + id, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.loggedIn = function () {
        // console.log(tokenNotExpired('id_token'));
        return angular2_jwt_1.tokenNotExpired('id_token');
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new http_1.Headers();
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
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this._saveAddUrl, JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getAllUsersById = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/users_id_as_index', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    UserService.prototype.getLoggedUSerDetails = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/get_loggedin_user', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.sendMailtoWinner = function (user_id, pid) {
        var user = { "_id": user_id, "pid": pid };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + 'user/sendmailtowinner/' + user_id, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], UserService);
exports.UserService = UserService;
var _a;
//# sourceMappingURL=user.service.js.map

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

module.exports = "\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    \r\n    <top-bar></top-bar>\r\n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <ul class=\"nav navbar-nav side-nav\">\r\n            <li *ngIf=\"userService.loggedIn()\">\r\n                <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a>\r\n            </li>\r\n           \r\n            <li *ngIf=\"userService.loggedIn()\">\r\n                <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#demo\"><i class=\"fa fa-fw fa-arrows-v\"></i> Users <i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n                <ul id=\"demo\" class=\"collapse\">\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/all-users\">All Users</a>\r\n                    </li>\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/disabled-users\">Disabled Users</a>\r\n                    </li>\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/deleted-users\">Deleted Users</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li *ngIf=\"userService.loggedIn()\">\r\n                <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#demo1\"><i class=\"fa fa-fw fa-arrows-v\"></i> Product <i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n                <ul id=\"demo1\" class=\"collapse\">\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/product\">Add Product</a>\r\n                    </li>\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/product-list\">Manage Product</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li *ngIf=\"userService.loggedIn()\">\r\n                <a href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#demo3\"><i class=\"fa fa-fw fa-arrows-v\"></i> Auction <i class=\"fa fa-fw fa-caret-down\"></i></a>\r\n                <ul id=\"demo3\" class=\"collapse\">\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/running-auction\">Running Auction</a>\r\n                    </li>\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/upcoming-auction\"> Upcoming Auction</a>\r\n                    </li>\r\n                    <li *ngIf=\"userService.loggedIn()\">\r\n                        <a routerLink=\"/closed-auction\">closed Product</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var SideBarComponent = (function () {
    function SideBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    core_1.Component({
        selector: 'side-bar',
        template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], SideBarComponent);
exports.SideBarComponent = SideBarComponent;
var _a, _b;
//# sourceMappingURL=side-bar.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    return SocialmediaComponent;
}());
SocialmediaComponent = __decorate([
    core_1.Component({
        selector: 'socialmedia',
        template: __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], SocialmediaComponent);
exports.SocialmediaComponent = SocialmediaComponent;
var _a, _b, _c;
//# sourceMappingURL=socialmedia.component.js.map

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

module.exports = "\r\n<div class=\"navbar-header\">\r\n       \r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <img src=\"./assets/logo/logo.png\" style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> AUCTION</a>\r\n</div>\r\n<!-- Top Menu Items -->\r\n<ul class=\"nav navbar-right top-nav\">\r\n    <li class=\"dropdown\" *ngFor= \"let item of info\">\r\n            \r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">{{count}}</div></i> <b class=\"caret\"></b></a>\r\n        <ul class=\"dropdown-menu message-dropdown\">\r\n            <li class=\"message-preview\"  >\r\n                <a  [routerLink]=\"['/adminviewed/'+item?._id]\">\r\n                    <div class=\"media\">\r\n                        <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                        <span class=\"pull-left\">\r\n                            <img class=\"media-object\" src=\"../../assets/uploads/{{item?.image||'default.png'}}\" alt=\"\">\r\n                        </span>\r\n                       </div>\r\n                       <div class=\"col-md-8\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"media-heading\">\r\n                                <strong>{{item.name}}</strong>\r\n                            </h5>\r\n                            \r\n                            <p>Item confirmed by bidder</p>\r\n                        </div>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <!-- <li class=\"message-footer\">\r\n                <a href=\"#\">Read All New Messages</a>\r\n            </li> -->\r\n        </ul>\r\n    </li>\r\n    \r\n    <li class=\"dropdown\" *ngIf=\"userService.loggedIn()\">\r\n        <a href=\"#\" (click)=\"logout()\" ><i class=\"fa fa-sign-out\"></i> LogOut </a>\r\n        \r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var TopBarComponent = (function () {
    function TopBarComponent(userService, productService, router) {
        this.userService = userService;
        this.productService = productService;
        this.router = router;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
        var details = [];
        this.info = [];
        this.count = 0;
        this.productService.getProducts().subscribe(function (data3) {
            data3.forEach(function (element) {
                // console.log(element);
                if (element.admin_notification.user_id && element.admin_notification.is_viewed == false) {
                    _this.info.push(element);
                    _this.count++;
                    console.log(_this.info);
                }
            });
        });
    };
    TopBarComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    core_1.Component({
        selector: 'top-bar',
        template: __webpack_require__("../../../../../src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-bar/top-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], TopBarComponent);
exports.TopBarComponent = TopBarComponent;
var _a, _b, _c;
//# sourceMappingURL=top-bar.component.js.map

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

module.exports = "<body>\r\n    \r\n        <div id=\"wrapper\">\r\n    \r\n            <!-- Navigation -->\r\n<side-bar></side-bar>\r\n    \r\n            <div id=\"page-wrapper\">\r\n    \r\n                <div class=\"container-fluid\">\r\n    \r\n                    <!-- Page Heading -->\r\n                   <header-title [title]=\"'Upcoming Auction'\"></header-title>\r\n                    <!-- /.row -->\r\n    \r\n                </div>\r\n                <!-- /.container-fluid -->\r\n<div class=\"container\" style=\"padding-top:20px;\">\r\n\r\n\r\n       \r\n    \r\n      <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n\r\n            <div class=\"col-md-9 col-xs-9 brdr\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 col-xs-4\">\r\n                                        <select [(ngModel)]=\"start\" class=\"form-control\">\r\n                                            <option  value=\"start_date\">Start</option>\r\n                                            <option value=\"end_date\">End</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-8 col-xs-8\">\r\n                                        <label>From</label>\r\n                                        <ng-datepicker [(ngModel)]=\"startDate\" [options]=\"options\" ></ng-datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-4 col-xs-4\">\r\n                                                <select [(ngModel)]=\"end\" class=\"form-control\">\r\n                                                    <option  value=\"start_date\">Start</option>\r\n                                                    <option  value=\"end_date\">End</option>\r\n                                                </select>\r\n                                            </div>\r\n                                            <div class=\"col-md-8 col-xs-8\">\r\n                                                <label>Upto</label>\r\n                                                <ng-datepicker [(ngModel)]=\"endDate\" [options]=\"options\" ></ng-datepicker>\r\n                                            </div>\r\n                                        </div>\r\n                                \r\n                            </div>\r\n                            \r\n                    </div>   \r\n                </div>\r\n                <!-- <div class=\"col-md-1 col-xs-2\">\r\n                    <div class=\"row\">\r\n                        <input type=\"button\" value=\"search\" class=\"btn btn-primary btn2\">\r\n                    </div>\r\n                </div> -->\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <div class=\"clearfix\"></div>\r\n\r\n          <div  *ngFor=\"let product of (products | dateSearch:startDate:endDate:start:end);let i = index;\" class=\"item  col-xs-4 col-lg-4\">\r\n              <div class=\"thumbnail\">\r\n                  \r\n                  <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                  <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n             \r\n                  <div class=\"caption\">\r\n                      <h4 class=\"group inner list-group-item-heading text-center\">\r\n                          {{product.name}}</h4>\r\n                          <hr>\r\n                          <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                          <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                        </p>\r\n                      <hr>\r\n            \r\n                      <div class=\"row text-center\">\r\n                          <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid Start On<br>\r\n                              <b>\r\n                                {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                                <br>\r\n                                {{product.start_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                           <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid End On<br>\r\n                              <b>\r\n                                  {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                  <br>\r\n                                  {{product.end_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"row text-center\">\r\n                            <div class=\"col-xs-12 col-md-12\">\r\n                              Starts In\r\n                                <p class=\"lead\">\r\n                                  <app-count-down-timer (onTimeOver)=\"timeOver()\" [inputDate]=\"product.start_date\"></app-count-down-timer>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                      <hr>\r\n                      <div class=\"row \">\r\n                          \r\n                          <div class=\"col-xs-12 col-md-12\">\r\n                              <div  class=\"alert alert-success text-center \">\r\n                                <div >\r\n                                <strong>Bid Start Price - {{product.bid_amount | number:'1.2-2'}}</strong>\r\n                                </div>\r\n                            </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    \r\n      </div>\r\n    </div>\r\n      <div *ngIf=\"products?.length == 0\" id=\"products\" class=\"row list-group\">\r\n       <h3 class=\"text-center\"> No Product Found</h3>\r\n      </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n   \r\n               \r\n</div>\r\n\r\n<footer></footer> \r\n      \r\n</body>\r\n          \r\n         "

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var UpcomingAuctionBackComponent = (function () {
    function UpcomingAuctionBackComponent(productService, userService, router) {
        this.productService = productService;
        this.userService = userService;
        this.router = router;
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'DD-MM-YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: enLocale
        };
        this.socket = socketIo('http://localhost:3000');
    }
    UpcomingAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role != "admin") {
                _this.router.navigate(['/login']);
            }
        });
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
    return UpcomingAuctionBackComponent;
}());
UpcomingAuctionBackComponent = __decorate([
    core_1.Component({
        selector: 'app-upcoming-auction-back',
        template: __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], UpcomingAuctionBackComponent);
exports.UpcomingAuctionBackComponent = UpcomingAuctionBackComponent;
var _a, _b, _c;
//# sourceMappingURL=upcoming-auction-back.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var product_service_service_1 = __webpack_require__("../../../../../src/app/services/product-service.service.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var UpcomingauctionsComponent = (function () {
    function UpcomingauctionsComponent(_productService, userService, router) {
        this._productService = _productService;
        this.userService = userService;
        this.router = router;
        this.existStatus = false;
        this.socket = socketIo('http://localhost:3000');
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
    return UpcomingauctionsComponent;
}());
UpcomingauctionsComponent = __decorate([
    core_1.Component({
        selector: 'app-upcomingauctions',
        template: __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_service_1.ProductServiceService !== "undefined" && product_service_service_1.ProductServiceService) === "function" && _a || Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], UpcomingauctionsComponent);
exports.UpcomingauctionsComponent = UpcomingauctionsComponent;
var _a, _b, _c;
//# sourceMappingURL=upcomingauctions.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3000/products/upload' });
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.up = function () {
        this.uploader.uploadAll();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")],
    }),
    __metadata("design:paramtypes", [])
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map

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

<<<<<<< HEAD
module.exports = "<app-navigation></app-navigation>\n<div class=\"container cont\">\n     <div *ngIf=\"errorAlertAuth\" class=\"alert alert-danger\">\n        <strong>Unauthorized access ...!</strong>\n     </div>\n     <div *ngIf=\"successAlert\" class=\"alert alert-success\">\n        <strong>Success</strong>\n     </div>\n     <div *ngIf=\"confirmAlert\" class=\"alert alert-success\">\n        <strong>Confirmed...</strong>\n     </div>\n     <div *ngIf=\"wrongAlert\" class=\"alert alert-danger\">\n        <strong>Something went wrong...!</strong>\n     </div>\n    <div *ngIf=\"!isConfirm\">\n    <h3>Do you wish to continue ..?</h3>\n    <button type=\"button\" (click)=\"confirmed()\" class=\"btn btn-default\">Confirm</button> \n    <button data-toggle=\"modal\" data-target=\"#myModal\" type=\"button\" class=\"btn btn-default\">Reject</button> \n</div>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n              \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <!-- <div class=\"modal-header\"> -->\n                      <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                    <!-- </div> -->\n                    <div class=\"modal-body\">\n                        <h4 class=\"modal-title\">Are you sure?</h4>\n                    \n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" (click)=\"rejected()\"  class=\"btn btn-default\" data-dismiss=\"modal\">Yes</button>\n                    </div>\n                  </div>\n              \n                </div>\n              </div>\n<br>\n <div class=\"col-md-9 shadow\" *ngIf=\"isConfirm\">\n        <h3>Add a delivery address</h3>\n    <br>\n    <form #f='ngForm' class=\"well\"  role=\"form\" (ngSubmit)=\"f.form.valid && onWinnerConfirm();\" novalidate >\n        \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\" >\n            <label > Name :</label>\n            <input type=\"text\"  name=\"name\" #name=\"ngModel\" [(ngModel)]=\"newproduct.name\" class=\"form-control\" required  />\n            <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Required</div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\"> \n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\n                <label >Phone Number :</label> \n                  <input type=\"text\" class=\"form-control\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newproduct.phone\" name=\"phone\" #phone=\"ngModel\">\n                  <div *ngIf=\"f.submitted && phone.invalid\">\n                    <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 6 digits</div>\n                    <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Required</div>\n                    <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\n                  </div> \n                <!-- </div> -->\n        </div> \n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pin.valid }\"> \n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\n                <label >Pincode :</label> \n                  <input type=\"text\" class=\"form-control\" minlength=\"6\" maxlength=\"6\" pattern=\"^[1-9][0-9]{5}$\" required [(ngModel)]=\"newproduct.pin\" name=\"pin\" #pin=\"ngModel\">\n                  <div *ngIf=\"f.submitted && pin.invalid\">\n                    <div *ngIf=\"pin.errors.minlength || pin.errors.maxlength\" class=\"help-block\">! Pincode should be 10 digits</div>\n                    <div *ngIf=\"pin.errors.required\" class=\"help-block\">! Required</div>\n                    <div *ngIf=\"pin.errors.pattern\" class=\"help-block\">! Valid Pincode is required</div>\n                  </div> \n                <!-- </div> -->\n        </div> \n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr1.valid }\" >\n                <label > Flat / House No. / Floor / Building: </label>\n                <input type=\"text\"  name=\"addr1\" #addr1=\"ngModel\" [(ngModel)]=\"newproduct.addr1\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr1.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr2.valid }\" >\n                <label > Colony / Street / Locality:  </label>\n                <input type=\"text\"  name=\"addr2\" #addr2=\"ngModel\" [(ngModel)]=\"newproduct.addr2\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr2.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr3.valid }\" >\n                <label > Town/City:  </label>\n                <input type=\"text\"  name=\"addr3\" #addr3=\"ngModel\" [(ngModel)]=\"newproduct.addr3\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr3.valid\" class=\"help-block\">! Required</div>\n        </div>\n     \n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr4.valid }\" >\n                <label > State :  </label>\n                <input type=\"text\"  name=\"addr4\" #addr4=\"ngModel\" [(ngModel)]=\"newproduct.addr4\" class=\"form-control\" required  />\n                <div *ngIf=\"f.submitted && !addr4.valid\" class=\"help-block\">! Required</div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Deliver to this address</button> \n \n       \n    </form>\n\n  </div>\n  </div>"
=======
module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container cont\">\r\n    <div *ngIf=\"!isConfirm\">\r\n    <h3>Do you wish to continue ..?</h3>\r\n    <button type=\"button\" (click)=\"confirmed()\" class=\"btn btn-default\">Confirm</button> \r\n    <button type=\"button\" (click)=\"rejected()\" class=\"btn btn-default\">Reject</button> \r\n</div>\r\n<br>\r\n <div class=\"col-md-9 shadow\" *ngIf=\"isConfirm\">\r\n        <h3>Add a delivery address</h3>\r\n    <br>\r\n    <form #f='ngForm' class=\"well\"  role=\"form\" (ngSubmit)=\"f.form.valid && onWinnerConfirm();\" novalidate >\r\n        \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\" >\r\n            <label > Name :</label>\r\n            <input type=\"text\"  name=\"name\" #name=\"ngModel\" [(ngModel)]=\"newproduct.name\" class=\"form-control\" required  />\r\n            <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Required</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\"> \r\n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\r\n                <label >Phone Number :</label> \r\n                  <input type=\"text\" class=\"form-control\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newproduct.phone\" name=\"phone\" #phone=\"ngModel\">\r\n                  <div *ngIf=\"f.submitted && phone.invalid\">\r\n                    <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 6 digits</div>\r\n                    <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Required</div>\r\n                    <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\r\n                  </div> \r\n                <!-- </div> -->\r\n        </div> \r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pin.valid }\"> \r\n                <!-- <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\"> -->\r\n                <label >Pincode :</label> \r\n                  <input type=\"text\" class=\"form-control\" minlength=\"6\" maxlength=\"6\" pattern=\"^[1-9][0-9]{5}$\" required [(ngModel)]=\"newproduct.pin\" name=\"pin\" #pin=\"ngModel\">\r\n                  <div *ngIf=\"f.submitted && pin.invalid\">\r\n                    <div *ngIf=\"pin.errors.minlength || pin.errors.maxlength\" class=\"help-block\">! Pincode should be 10 digits</div>\r\n                    <div *ngIf=\"pin.errors.required\" class=\"help-block\">! Required</div>\r\n                    <div *ngIf=\"pin.errors.pattern\" class=\"help-block\">! Valid Pincode is required</div>\r\n                  </div> \r\n                <!-- </div> -->\r\n        </div> \r\n\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr1.valid }\" >\r\n                <label > Flat / House No. / Floor / Building: </label>\r\n                <input type=\"text\"  name=\"addr1\" #addr1=\"ngModel\" [(ngModel)]=\"newproduct.addr1\" class=\"form-control\" required  />\r\n                <div *ngIf=\"f.submitted && !addr1.valid\" class=\"help-block\">! Required</div>\r\n        </div>\r\n     \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr2.valid }\" >\r\n                <label > Colony / Street / Locality:  </label>\r\n                <input type=\"text\"  name=\"addr2\" #addr2=\"ngModel\" [(ngModel)]=\"newproduct.addr2\" class=\"form-control\" required  />\r\n                <div *ngIf=\"f.submitted && !addr2.valid\" class=\"help-block\">! Required</div>\r\n        </div>\r\n     \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr3.valid }\" >\r\n                <label > Town/City:  </label>\r\n                <input type=\"text\"  name=\"addr3\" #addr3=\"ngModel\" [(ngModel)]=\"newproduct.addr3\" class=\"form-control\" required  />\r\n                <div *ngIf=\"f.submitted && !addr3.valid\" class=\"help-block\">! Required</div>\r\n        </div>\r\n     \r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !addr4.valid }\" >\r\n                <label > State :  </label>\r\n                <input type=\"text\"  name=\"addr4\" #addr4=\"ngModel\" [(ngModel)]=\"newproduct.addr4\" class=\"form-control\" required  />\r\n                <div *ngIf=\"f.submitted && !addr4.valid\" class=\"help-block\">! Required</div>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Deliver to this address</button> \r\n \r\n       \r\n    </form>\r\n\r\n  </div>\r\n  </div>"
>>>>>>> 21d21e671bd0d76a9a569fa505bccb048a37faeb

/***/ }),

/***/ "../../../../../src/app/winnerconfirm/winnerconfirm.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
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
    return WinnerconfirmComponent;
}());
WinnerconfirmComponent = __decorate([
    core_1.Component({
        selector: 'winnerconfirm',
        template: __webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/winnerconfirm/winnerconfirm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" && _a || Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], WinnerconfirmComponent);
exports.WinnerconfirmComponent = WinnerconfirmComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=winnerconfirm.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

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