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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/all-users/all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n  <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n          <h1 class=\"page-header\">All Users</h1>\r\n      </div>\r\n      <!-- /.col-lg-12 -->\r\n  </div>\r\n<table datatable class=\"row-border hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Email</th>\r\n      <th>Phone</th>\r\n      <th>Block</th>\r\n      <th>Delete</th>\r\n      \r\n     \r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>1</td>\r\n      <td>Foo</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n     \r\n    </tr>\r\n    <tr>\r\n      <td>2</td>\r\n      <td>Someone</td>\r\n      <td>Youknow</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>3</td>\r\n      <td>Iamout</td>\r\n      <td>Ofinspiration</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>4</td>\r\n      <td>Yoda</td>\r\n      <td>Skywalker</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>5</td>\r\n      <td>Patrick</td>\r\n      <td>Dupont</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>6</td>\r\n      <td>Barack</td>\r\n      <td>Obama</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>7</td>\r\n      <td>François</td>\r\n      <td>Holland</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>8</td>\r\n      <td>Michel</td>\r\n      <td>Popo</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>9</td>\r\n      <td>Chuck</td>\r\n      <td>Norris</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>10</td>\r\n      <td>Simon</td>\r\n      <td>Robin</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>11</td>\r\n      <td>Louis</td>\r\n      <td>Lin</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n    <tr>\r\n      <td>12</td>\r\n      <td>Zelda</td>\r\n      <td>Link</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n      <td>Bar</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AllUsersComponent() {
    }
    AllUsersComponent.prototype.ngOnInit = function () {
    };
    return AllUsersComponent;
}());
AllUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'all-users',
        template: __webpack_require__("../../../../../src/app/all-users/all-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-users/all-users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AllUsersComponent);

//# sourceMappingURL=all-users.component.js.map

/***/ }),

<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = "<router-outlet></router-outlet>\r\n\r\n"
=======
module.exports = "\r\n  <!-- Navigation-->\r\n  <!-- <app-top-bar></app-top-bar> -->\r\n  <!-- <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\"> -->\r\n      <!-- Breadcrumbs-->\r\n     \r\n      \r\n         <router-outlet></router-outlet>\r\n       \r\n    <!-- </div> -->\r\n\r\n\r\n"
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
module.exports = "\r\n  <!-- Navigation-->\r\n  <!-- <app-top-bar></app-top-bar> -->\r\n  <!-- <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\"> -->\r\n      <!-- Breadcrumbs-->\r\n     \r\n      \r\n         <router-outlet></router-outlet>\r\n       \r\n    <!-- </div> -->\r\n\r\n\r\n"
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
<<<<<<< HEAD
<<<<<<< HEAD
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
=======
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_datetime_ng2_datetime__ = __webpack_require__("../../../../ng2-datetime/ng2-datetime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manage_product_manage_product_component__ = __webpack_require__("../../../../../src/app/manage-product/manage-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__all_users_all_users_component__ = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__ = __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__ = __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__finishedauction_finishedauction_component__ = __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__upcomingauctions_upcomingauctions_component__ = __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__equal_validator_directive__ = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__closed_auction_back_closed_auction_back_component__ = __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__upcoming_auction_back_upcoming_auction_back_component__ = __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__running_auction_back_running_auction_back_component__ = __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__socialmedia_socialmedia_component__ = __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__read_more_read_more_component__ = __webpack_require__("../../../../../src/app/read-more/read-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__count_down_timer_count_down_timer_component__ = __webpack_require__("../../../../../src/app/count-down-timer/count-down-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__product_service_service__ = __webpack_require__("../../../../../src/app/product-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__myauctions_myauctions_component__ = __webpack_require__("../../../../../src/app/myauctions/myauctions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__runningauction_runningauction_component__ = __webpack_require__("../../../../../src/app/runningauction/runningauction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__card_running_card_running_component__ = __webpack_require__("../../../../../src/app/card-running/card-running.component.ts");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
// import { DataTablesModule } from 'angular-datatables';



























<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24






<<<<<<< HEAD
<<<<<<< HEAD
// import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
var appRoutes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a" /* ProductComponent */] },
    { path: 'manage-product', component: __WEBPACK_IMPORTED_MODULE_11__manage_product_manage_product_component__["a" /* ManageProductComponent */] },
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_28__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */] },
    { path: 'socialmedia/:id', component: __WEBPACK_IMPORTED_MODULE_32__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'all-users', component: __WEBPACK_IMPORTED_MODULE_13__all_users_all_users_component__["a" /* AllUsersComponent */] },
    { path: 'deleted-users', component: __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__["a" /* DeletedUsersComponent */] },
    { path: 'disabled-users', component: __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__["a" /* DisabledUsersComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
    { path: 'myauctions', component: __WEBPACK_IMPORTED_MODULE_36__myauctions_myauctions_component__["a" /* MyauctionsComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_28__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'closed-auction', component: __WEBPACK_IMPORTED_MODULE_29__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */] },
    { path: 'upcoming-auction', component: __WEBPACK_IMPORTED_MODULE_30__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */] },
    { path: 'running-auction', component: __WEBPACK_IMPORTED_MODULE_31__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */] }
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
<<<<<<< HEAD
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_6__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_11__manage_product_manage_product_component__["a" /* ManageProductComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
            // NKDatetimeModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_8_ng2_datetime_ng2_datetime__["a" /* NKDatetimeModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__finishedauction_finishedauction_component__["a" /* FinishedauctionComponent */],
            __WEBPACK_IMPORTED_MODULE_21__upcomingauctions_upcomingauctions_component__["a" /* UpcomingauctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__myauctions_myauctions_component__["a" /* MyauctionsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_37__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__all_users_all_users_component__["a" /* AllUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__disabled_users_disabled_users_component__["a" /* DisabledUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__deleted_users_deleted_users_component__["a" /* DeletedUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_28__email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
            __WEBPACK_IMPORTED_MODULE_29__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_30__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_31__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_32__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */],
            __WEBPACK_IMPORTED_MODULE_33__read_more_read_more_component__["a" /* ReadMoreComponent */],
            __WEBPACK_IMPORTED_MODULE_34__count_down_timer_count_down_timer_component__["a" /* CountDownTimerComponent */],
            __WEBPACK_IMPORTED_MODULE_38__runningauction_runningauction_component__["a" /* RunningauctionComponent */],
            __WEBPACK_IMPORTED_MODULE_39__card_running_card_running_component__["a" /* CardRunningComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_35__product_service_service__["a" /* ProductServiceService */],
            __WEBPACK_IMPORTED_MODULE_24__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_22__services_product_service__["a" /* ProductService */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            // DataTablesModule,
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* RouterModule */].forRoot(appRoutes)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

<<<<<<< HEAD
<<<<<<< HEAD
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        return null;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/manage-product/manage-product.component.css":
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.css":
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/manage-product/manage-product.component.html":
/***/ (function(module, exports) {

module.exports = "<product-detail (updateProEvent)=\"onUpdateProEvent($event)\"   (deleteProEvent)=\"onDeleteProEvent($event)\"     *ngIf=\"selectedPro\" [pro]=\"selectedPro\"></product-detail>\n\n\n<br>\n<br>\n\n<product-list  (SelectPro)=\"onSelectPro($event)\" [pros]=\"pros\" ></product-list>"

/***/ }),

/***/ "../../../../../src/app/manage-product/manage-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/card-running/card-running.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!itemStatus\" class=\"col-md-8 col-xs-12 col-sm-6 col-lg-8\"><h4>Sorry! No Items to display.</h4></div> -->\r\n<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n    <div class=\"tg-ad tg-verifiedad\">\r\n        <figure>\r\n            <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n            <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a>\r\n            <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n        </figure>\r\n        <div class=\"tg-adcontent\">\r\n            <!-- <ul class=\"tg-productcagegories\">\r\n                <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n            </ul> -->\r\n            \r\n            <div class=\"tg-adtitle\">\r\n                <h3><a href=\"javascript:void(0);\">{{item?.name | capitalize}}</a></h3>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"tg-desc\" >\r\n                    <h4>Description: </h4><p class=\"card-pro-desc\">{{item?.desc | capitalize}}</p>\r\n            </div>\r\n            \r\n            <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n            \r\n            <!-- <address>44-46 abc Road, Manchester</address> -->\r\n            <!-- <div class=\"tg-phonelike\">\r\n                <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                    <i class=\"icon-phone-handset\"></i>\r\n                    <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                </a>\r\n                <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"btn-primary tg-adprice\">${{highest}}</div>\r\n        </div>\r\n        \r\n    </div>\r\n  </div>\r\n  <!--   \r\n  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n        <div class=\"tg-ad tg-verifiedad\">\r\n            <figure>\r\n                <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n                <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n                <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n            <!-- </figure>\r\n            <div class=\"tg-adcontent\"> -->\r\n                <!-- <ul class=\"tg-productcagegories\">\r\n                    <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n                </ul> -->\r\n                \r\n                <!-- <div class=\"tg-adtitle\">\r\n                    <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <div class=\"tg-desc\">\r\n                    <h4>Description</h4>\r\n                        <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <div class=\"tg-days\">\r\n                        <h4>Days Left: 4Days</h4>\r\n                </div> -->\r\n                <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n                \r\n                <!-- <address>44-46 abc Road, Manchester</address> -->\r\n                <!-- <div class=\"tg-phonelike\">\r\n                    <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                        <i class=\"icon-phone-handset\"></i>\r\n                        <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                    </a>\r\n                    <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n                </div> -->\r\n            <!-- </div>\r\n            <button class=\"btn btn-primary tg-adprice\"> Basic Price: $200</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n            <div class=\"tg-ad tg-verifiedad\">\r\n                <figure>\r\n                    <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n                    <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n                    <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n                <!-- </figure>\r\n                <div class=\"tg-adcontent\"> -->\r\n                    <!-- <ul class=\"tg-productcagegories\">\r\n                        <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n                    </ul> -->\r\n                    \r\n                    <!-- <div class=\"tg-adtitle\">\r\n                        <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"tg-desc\">\r\n                            <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n                    </div>\r\n                     -->\r\n                    <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n                    \r\n                    <!-- <address>44-46 abc Road, Manchester</address> -->\r\n                    <!-- <div class=\"tg-phonelike\">\r\n                        <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                            <i class=\"icon-phone-handset\"></i>\r\n                            <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                        </a>\r\n                        <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n                    </div> -->\r\n                <!-- </div>\r\n                <button class=\"btn btn-primary tg-adprice\"> Final Price: $200</button>\r\n            </div>\r\n        </div> -->"

/***/ }),

/***/ "../../../../../src/app/card-running/card-running.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRunningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD

var ManageProductComponent = (function () {
    function ManageProductComponent(_productService) {
        this._productService = _productService;
    }
    ManageProductComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    };
    ;
    ManageProductComponent.prototype.onDeleteProEvent = function (pro) {
        //  console.log("manahe delete");
        this._productService.updateProduct(pro)
            .subscribe(function (resUpdatedPro) { return pro = resUpdatedPro; });
        this.selectedPro = null;
    };
    ;
    return ManageProductComponent;
}());
ManageProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-product',
        template: __webpack_require__("../../../../../src/app/manage-product/manage-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-product/manage-product.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ManageProductComponent);

var _a;
//# sourceMappingURL=manage-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var CardRunningComponent = (function () {
    function CardRunningComponent() {
    }
    CardRunningComponent.prototype.ngOnInit = function () {
    };
    return CardRunningComponent;
}());
CardRunningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-running',
        template: __webpack_require__("../../../../../src/app/card-running/card-running.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card-running/card-running.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardRunningComponent);

//# sourceMappingURL=card-running.component.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, "", ""]);
=======
exports.push([module.i, ".tg-ad {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 15px;\r\n    margin: 15px 0;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding-bottom: 0;\r\n    box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);\r\n    transition: 1s ease;\r\n}\r\n\r\n*::after, *::before, p a, a, .tg-socialicons li a, .tg-roundicontext, .tg-roundicontext .tg-usericonholder, .sub-menu, .mega-menu, .tg-themedropdownmenu li a, .tg-themedropdownmenu, .tg-themedropdownmenu li.menu-item-has-children ul, .sub-menu li, .tg-categories .item, .tg-categories .item h3, .tg-prev, .tg-next, .tg-ad, .tg-btnphone, .tg-like, .tg-post figure img, .tg-post figure a img, .tg-categoryholder, .tg-category h4, .tg-feature, .tg-team figure figcaption, .tg-applyedfilters ul li.alert-dismissable a.close, .tg-collapsetitle a span::before, .tg-btn, .tg-user, .tg-socialandappicons, .tg-logo, .tg-btnmenutoggle, .cls-1, .tg-wrapper, .tg-sidebarwrapper, .tg-dropdownmenu, .tg-dropdownmenu li, .tg-dashboardbox, .ct-bar, .tg-offerer, .tg-navtabledata ul li a, .tg-dashboardtable tr, .tg-package, .tg-profilephotogallery ul li figure i, .tg-btndelete {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.tg-ad figure {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.tg-themetag {\r\n    top: 12px;\r\n    left: -5px;\r\n    z-index: 2;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    line-height: 10px;\r\n    position: absolute;\r\n    background: #2882f7;\r\n    padding: 5px 3px 3px 10px;\r\n    text-transform: uppercase;\r\n}\r\n.tg-featuretag::before {\r\n    top: 0;\r\n    left: 100%;\r\n    border-top: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-left: 10px solid #2882f7;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-featuretag::after {\r\n    top: 100%;\r\n    left: 0;\r\n    border-top: 5px solid #0052b6;\r\n    border-left: 5px solid transparent;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n.tg-ad figure img, .tg-ad figure a img {\r\n    width: 100%;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\nimg {\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\nimg {\r\n    border: 0;\r\n}\r\n.tg-adcontent {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.tg-ad:hover {\r\n    -webkit-transform: scale(1.05);\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n}\r\n.tg-productcagegories {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    list-style: none;\r\n    margin: 0 0 12px;\r\n    padding: 20px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n}\r\nul {\r\n    margin: 0;\r\n}\r\nol, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n.tg-productcagegories li {\r\n    float: left;\r\n    line-height: inherit;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    line-height: 28px;\r\n    list-style: disc inside none;\r\n        list-style-type: disc;\r\n}\r\n.tg-productcagegories li a {\r\n    color: #363b4d;\r\n}\r\n.tg-adtitle {\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    padding: 20px 32px 6px 5px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.card-pro-desc{\r\n\r\n}\r\n.tg-ad.tg-verifiedad .tg-adtitle::before {\r\n    display: block;\r\n}\r\n/* .tg-adtitle::before {\r\n    top: 0;\r\n    right: 0;\r\n    content: '';\r\n    width: 26px;\r\n    height: 26px;\r\n    display: none;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: url(http://exprostudio.com/html/classified/images/ads/img-01.jpg) no-repeat 50% 50%;\r\n} */\r\n.tg-adtitle h3 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    text-transform: none;\r\n}\r\nbody h1, body h2, body h3, body h4, body h5, body h6 {\r\n    color: #363b4d;\r\n    margin: 0 0 8px;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    font-style: normal;\r\n    text-transform: capitalize;\r\n    font-family: 'Quicksand', Arial, Helvetica, sans-serif;\r\n}\r\n.tg-adcontent time {\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n}\r\n.tg-adprice {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 14px 0 14px;\r\n    background-color: #2882f7;\r\n    color: #fff;\r\n    border: none;\r\n    text-align: center;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.tg-adprice h4 {\r\n    margin: 0;\r\n    color: #363b4d;\r\n    font-size: 18px;\r\n    line-height: 17px;\r\n}\r\n.tg-adcontent address {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    font-style: normal;\r\n    position: relative;\r\n    padding: 0 0 0 24px;\r\n}\r\n.tg-adcontent address::before {\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E9A3';\r\n    line-height: 14px;\r\n    position: absolute;\r\n    font-family: 'icomoon';\r\n}\r\n.tg-phonelike {\r\n    width: 100%;\r\n    float: left;\r\n    height: 33px;\r\n    margin: 20px 0 0;\r\n    position: relative;\r\n    padding: 0 38px 0 0;\r\n}\r\n.tg-btnphone {\r\n    margin: 0 0 10px;\r\n}\r\n.tg-btnphone {\r\n    width: 100%;\r\n    float: left;\r\n    color: #363b4d;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    background: #f7f7f7;\r\n}\r\n.tg-btnphone i {\r\n    font-size: 16px;\r\n    padding: 0 5px 0 0;\r\n}\r\n.tg-btnphone i, .tg-btnphone span, .tg-btnphone span em {\r\n    font-size: 14px;\r\n    line-height: 33px;\r\n    font-style: normal;\r\n}\r\n.tg-btnphone i, .tg-btnphone span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.icon-phone-handset::before {\r\n    content: \"\\E93C\";\r\n}\r\n.tg-like:hover, .tg-like.tg-liked {\r\n    color: #fff;\r\n    background: #2882f7;\r\n}\r\n.tg-like {\r\n    top: 0;\r\n    right: 0;\r\n    width: 33px;\r\n    color: #363b4d;\r\n    display: block;\r\n    cursor: pointer;\r\n    padding: 2px 0 1px;\r\n    text-align: center;\r\n    position: absolute;\r\n    border-radius: 3px;\r\n    background: #f7f7f7;\r\n}\r\n.tg-like:hover i, .tg-like.tg-liked i {\r\n    color: #fff;\r\n}\r\n.tg-like i {\r\n    color: #363b4d;\r\n    display: block;\r\n    font-size: 12px;\r\n    line-height: 30px;\r\n}\r\n.fa-heart::before {\r\n    content: \"\\F004\";\r\n}\r\n\r\n.tg-desc{\r\n    margin: 25px auto;\r\n    min-height: 123px;\r\n}", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
exports.push([module.i, ".tg-ad {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 15px;\r\n    margin: 15px 0;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    padding-bottom: 0;\r\n    box-shadow: 0 0 15px 0 rgba(0,0,0,0.20);\r\n    transition: 1s ease;\r\n}\r\n\r\n*::after, *::before, p a, a, .tg-socialicons li a, .tg-roundicontext, .tg-roundicontext .tg-usericonholder, .sub-menu, .mega-menu, .tg-themedropdownmenu li a, .tg-themedropdownmenu, .tg-themedropdownmenu li.menu-item-has-children ul, .sub-menu li, .tg-categories .item, .tg-categories .item h3, .tg-prev, .tg-next, .tg-ad, .tg-btnphone, .tg-like, .tg-post figure img, .tg-post figure a img, .tg-categoryholder, .tg-category h4, .tg-feature, .tg-team figure figcaption, .tg-applyedfilters ul li.alert-dismissable a.close, .tg-collapsetitle a span::before, .tg-btn, .tg-user, .tg-socialandappicons, .tg-logo, .tg-btnmenutoggle, .cls-1, .tg-wrapper, .tg-sidebarwrapper, .tg-dropdownmenu, .tg-dropdownmenu li, .tg-dashboardbox, .ct-bar, .tg-offerer, .tg-navtabledata ul li a, .tg-dashboardtable tr, .tg-package, .tg-profilephotogallery ul li figure i, .tg-btndelete {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.tg-ad figure {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.tg-themetag {\r\n    top: 12px;\r\n    left: -5px;\r\n    z-index: 2;\r\n    color: #fff;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    line-height: 10px;\r\n    position: absolute;\r\n    background: #2882f7;\r\n    padding: 5px 3px 3px 10px;\r\n    text-transform: uppercase;\r\n}\r\n.tg-featuretag::before {\r\n    top: 0;\r\n    left: 100%;\r\n    border-top: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-left: 10px solid #2882f7;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-featuretag::after {\r\n    top: 100%;\r\n    left: 0;\r\n    border-top: 5px solid #0052b6;\r\n    border-left: 5px solid transparent;\r\n}\r\n.tg-featuretag::before, .tg-featuretag::after {\r\n    width: 0;\r\n    height: 0;\r\n    content: '';\r\n    position: absolute;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n.tg-ad figure img, .tg-ad figure a img {\r\n    width: 100%;\r\n}\r\n.tg-ad figure a, .tg-ad figure img, .tg-ad figure a img {\r\n    z-index: 1;\r\n    display: block;\r\n    position: relative;\r\n}\r\n.tg-ad figure a, .tg-ad figure img {\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\nimg {\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\nimg {\r\n    border: 0;\r\n}\r\n.tg-adcontent {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.tg-ad:hover {\r\n    -webkit-transform: scale(1.05);\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n}\r\n.tg-productcagegories {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    list-style: none;\r\n    margin: 0 0 12px;\r\n    padding: 20px 0 10px;\r\n    border-bottom: 1px solid #dbdbdb;\r\n}\r\nul {\r\n    margin: 0;\r\n}\r\nol, ul {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n.tg-productcagegories li {\r\n    float: left;\r\n    line-height: inherit;\r\n    list-style-type: none;\r\n}\r\nli {\r\n    line-height: 28px;\r\n    list-style: disc inside none;\r\n        list-style-type: disc;\r\n}\r\n.tg-productcagegories li a {\r\n    color: #363b4d;\r\n}\r\n.tg-adtitle {\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    padding: 20px 32px 6px 5px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n.card-pro-desc{\r\n\r\n}\r\n.tg-ad.tg-verifiedad .tg-adtitle::before {\r\n    display: block;\r\n}\r\n/* .tg-adtitle::before {\r\n    top: 0;\r\n    right: 0;\r\n    content: '';\r\n    width: 26px;\r\n    height: 26px;\r\n    display: none;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: url(http://exprostudio.com/html/classified/images/ads/img-01.jpg) no-repeat 50% 50%;\r\n} */\r\n.tg-adtitle h3 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    text-transform: none;\r\n}\r\nbody h1, body h2, body h3, body h4, body h5, body h6 {\r\n    color: #363b4d;\r\n    margin: 0 0 8px;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    font-style: normal;\r\n    text-transform: capitalize;\r\n    font-family: 'Quicksand', Arial, Helvetica, sans-serif;\r\n}\r\n.tg-adcontent time {\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n}\r\n.tg-adprice {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 14px 0 14px;\r\n    background-color: #2882f7;\r\n    color: #fff;\r\n    border: none;\r\n    text-align: center;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n}\r\n.tg-adprice h4 {\r\n    margin: 0;\r\n    color: #363b4d;\r\n    font-size: 18px;\r\n    line-height: 17px;\r\n}\r\n.tg-adcontent address {\r\n    margin: 0;\r\n    width: 100%;\r\n    float: left;\r\n    color: #484848;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    font-style: normal;\r\n    position: relative;\r\n    padding: 0 0 0 24px;\r\n}\r\n.tg-adcontent address::before {\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E9A3';\r\n    line-height: 14px;\r\n    position: absolute;\r\n    font-family: 'icomoon';\r\n}\r\n.tg-phonelike {\r\n    width: 100%;\r\n    float: left;\r\n    height: 33px;\r\n    margin: 20px 0 0;\r\n    position: relative;\r\n    padding: 0 38px 0 0;\r\n}\r\n.tg-btnphone {\r\n    margin: 0 0 10px;\r\n}\r\n.tg-btnphone {\r\n    width: 100%;\r\n    float: left;\r\n    color: #363b4d;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n    background: #f7f7f7;\r\n}\r\n.tg-btnphone i {\r\n    font-size: 16px;\r\n    padding: 0 5px 0 0;\r\n}\r\n.tg-btnphone i, .tg-btnphone span, .tg-btnphone span em {\r\n    font-size: 14px;\r\n    line-height: 33px;\r\n    font-style: normal;\r\n}\r\n.tg-btnphone i, .tg-btnphone span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.icon-phone-handset::before {\r\n    content: \"\\E93C\";\r\n}\r\n.tg-like:hover, .tg-like.tg-liked {\r\n    color: #fff;\r\n    background: #2882f7;\r\n}\r\n.tg-like {\r\n    top: 0;\r\n    right: 0;\r\n    width: 33px;\r\n    color: #363b4d;\r\n    display: block;\r\n    cursor: pointer;\r\n    padding: 2px 0 1px;\r\n    text-align: center;\r\n    position: absolute;\r\n    border-radius: 3px;\r\n    background: #f7f7f7;\r\n}\r\n.tg-like:hover i, .tg-like.tg-liked i {\r\n    color: #fff;\r\n}\r\n.tg-like i {\r\n    color: #363b4d;\r\n    display: block;\r\n    font-size: 12px;\r\n    line-height: 30px;\r\n}\r\n.fa-heart::before {\r\n    content: \"\\F004\";\r\n}\r\n\r\n.tg-desc{\r\n    margin: 25px auto;\r\n    min-height: 123px;\r\n}", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-9 shadow\">\n      <h3>Edit  a Product</h3>\n      <br>\n      <form class=\"well\" >\n          <div class=\"form-group\" >\n              <label > Name *</label>\n              <input type=\"text\"  name=\"name\"  [(ngModel)]=\"pro.name\" class=\"form-control\" required  />\n          </div>\n          <div class=\"form-group\" >\n              <label > Bid Amount *</label>\n              <input type=\"text\"  name=\"bid_amount\" [(ngModel)]=\"pro.bid_amount\"  class=\"form-control\" required  />\n          </div>\n       \n\n          <div class=\"form-group\" >\n              <label > Minimum Bid Rate</label>\n              <input type=\"text\"  name=\"min_bid_rate\" [(ngModel)]=\"pro.min_bid_rate\" class=\"form-control\" />\n          </div>\n\n           <div class=\"form-group\" >\n                  <label > Bid Start time *</label>\n                  <datetime name=\"start_date\" [(ngModel)]=\"pro.start_date\"></datetime>\n              </div>\n              <div class=\"form-group\" >\n                      <label > Bid End time *</label>\n                      <datetime name = \"end_date\"  [(ngModel)]=\"pro.end_date\"></datetime>\n                  </div>\n\n          \n\n           <!-- <image-upload name=\"image\"  [(ngModel)]=\"newproduct.image\"\n          [style]=\"'customStyle'\" \n          [class]=\"'prev-img'\" \n          [max]=\"100\"\n          \n          [headers]=\"{Authorization: 'MyToken'}\"\n          [buttonCaption]=\"'Select Images!'\"\n          [dropBoxMessage]=\"'Drop Product images here!'\"\n          [extensions]=\"['jpg','png','gif']\"\n       \n          (removed)=\"onRemoved($event)\"\n          (uploadFinished)=\"onUploadFinished($event)\"\n          (uploadStateChanged)=\"onUploadStateChanged($event)\"></image-upload>  -->\n          <!-- <div>\n              <label > Image</label>\n              <input type=\"file\"  name=\"pollqtn\"   required />\n          </div> -->\n         \n         \n          <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\n          <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\n          \n          <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\n          \n        \n\n          <div class=\"form-group\" >\n              <label > Description</label>\n              <br>\n              <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"pro.desc\" ></textarea>\n          </div>\n         \n          <input type=\"submit\" (click)=\"updateProduct()\" class=\"btn btn-info blakbtn\" value=\"Udate\"  >\n          <input type=\"submit\" (click)=\"deleteProduct()\" class=\"btn btn-info blakbtn\" value=\"Delete\"  >\n         \n      </form>\n\n    </div>\n   "

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!itemStatus\" class=\"col-md-8 col-xs-12 col-sm-6 col-lg-8\"><h4>Sorry! No Items to display.</h4></div> -->\r\n<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n  <div class=\"tg-ad tg-verifiedad\">\r\n      <figure>\r\n          <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n          <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a>\r\n          <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n      </figure>\r\n      <div class=\"tg-adcontent\">\r\n          <!-- <ul class=\"tg-productcagegories\">\r\n              <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n          </ul> -->\r\n          \r\n          <div class=\"tg-adtitle\">\r\n              <h3><a href=\"javascript:void(0);\">{{item?.name | capitalize}}</a></h3>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"tg-desc\" >\r\n                  <h4>Description: </h4><p class=\"card-pro-desc\">{{item?.desc | capitalize}}</p>\r\n          </div>\r\n          \r\n          <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n          \r\n          <!-- <address>44-46 abc Road, Manchester</address> -->\r\n          <!-- <div class=\"tg-phonelike\">\r\n              <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                  <i class=\"icon-phone-handset\"></i>\r\n                  <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n              </a>\r\n              <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n          </div> -->\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"btn-primary tg-adprice\">${{highest}}</div>\r\n      </div>\r\n      \r\n  </div>\r\n</div>\r\n<!--   \r\n<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n      <div class=\"tg-ad tg-verifiedad\">\r\n          <figure>\r\n              <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n              <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n              <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n          <!-- </figure>\r\n          <div class=\"tg-adcontent\"> -->\r\n              <!-- <ul class=\"tg-productcagegories\">\r\n                  <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n              </ul> -->\r\n              \r\n              <!-- <div class=\"tg-adtitle\">\r\n                  <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"tg-desc\">\r\n                  <h4>Description</h4>\r\n                      <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"tg-days\">\r\n                      <h4>Days Left: 4Days</h4>\r\n              </div> -->\r\n              <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n              \r\n              <!-- <address>44-46 abc Road, Manchester</address> -->\r\n              <!-- <div class=\"tg-phonelike\">\r\n                  <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                      <i class=\"icon-phone-handset\"></i>\r\n                      <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                  </a>\r\n                  <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n              </div> -->\r\n          <!-- </div>\r\n          <button class=\"btn btn-primary tg-adprice\"> Basic Price: $200</button>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n          <div class=\"tg-ad tg-verifiedad\">\r\n              <figure>\r\n                  <span class=\"tg-themetag tg-featuretag\">featured</span>\r\n                  <a href=\"javascript:void(0);\"><img src=\"http://exprostudio.com/html/classified/images/ads/img-01.jpg\" alt=\"image description\"></a> -->\r\n                  <!-- <span class=\"tg-photocount\">See 18 Photos</span> -->\r\n              <!-- </figure>\r\n              <div class=\"tg-adcontent\"> -->\r\n                  <!-- <ul class=\"tg-productcagegories\">\r\n                      <li><a href=\"javascript:void(0);\">Mobiles</a></li>\r\n                  </ul> -->\r\n                  \r\n                  <!-- <div class=\"tg-adtitle\">\r\n                      <h3><a href=\"javascript:void(0);\">iPhone X for sale</a></h3>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"tg-desc\">\r\n                          <p class=\"card-pro-desc\">Consectetur adipicing elit sed eiusmod temporie incidint ut labore et dolore magna enim ad minim veniam, quis nostrud.</p>\r\n                  </div>\r\n                   -->\r\n                  <!-- <time datetime=\"2017-06-06\">Last Updated: 4 hours ago</time> -->\r\n                  \r\n                  <!-- <address>44-46 abc Road, Manchester</address> -->\r\n                  <!-- <div class=\"tg-phonelike\">\r\n                      <a class=\"tg-btnphone\" href=\"javascript:void(0);\">\r\n                          <i class=\"icon-phone-handset\"></i>\r\n                          <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Show Phone No.\" data-last=\"0800 - 1234 - 562 - 6\"><em>Show Phone No.</em></span>\r\n                      </a>\r\n                      <span class=\"tg-like tg-liked\"><i class=\"fa fa-heart\"></i></span>\r\n                  </div> -->\r\n              <!-- </div>\r\n              <button class=\"btn btn-primary tg-adprice\"> Final Price: $200</button>\r\n          </div>\r\n      </div> -->"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service_service__ = __webpack_require__("../../../../../src/app/product-service.service.ts");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD
var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
        // tableview: boolean = false;
        this.updateProEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteProEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.updateProduct = function () {
        this.updateProEvent.emit(this.pro);
        //  window.location.reload();
        //  this.tableview = true;
    };
    ProductDetailComponent.prototype.deleteProduct = function () {
        // console.log("sdd");
        this.deleteProEvent.emit(this.pro);
        //  window.location.reload();
        //  this.tableview = true;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-detail',
        template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")],
        inputs: ['pro'],
        outputs: ['updateProEvent', 'deleteProEvent']
    }),
    __metadata("design:paramtypes", [])
], ProductDetailComponent);

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

var CardComponent = (function () {
    // itemStatus: boolean = true;
    function CardComponent(_productService) {
        this._productService = _productService;
        // this.x = this.item; 
        // console.log(this.x);
    }
    CardComponent.prototype.ngOnInit = function () {
        // let item : any;
        // this.item = item;
        // console.log(this.item);
        // this.highestBid = this.getHighestBid(this.item);
        if (this.item) {
            // console.log(this.item.bidders[0].amount);
            var tmp = void 0;
            // this.lowest = Number.POSITIVE_INFINITY;
            this.highest = 0;
            for (var i = this.item.bidders.length - 1; i >= 0; i--) {
                tmp = this.item.bidders[i].amount;
                // if (tmp < this.lowest) this.lowest = tmp;
                if (tmp > this.highest && this.item.bidders[i].bid_status != "rejected")
                    this.highest = tmp;
            }
            // if(this.item.length == 0){
            //   this.itemStatus = false;
            // }
            // console.log(this.highest);
            // this.item.bidders.forEach(element => {
            //   tmp = element.amount;
            //   if(this.highest > tmp){
            //     tmp
            //   }
            // });
            // this.highestBid = this.getHighestBid(this.item);
            // // Math.max(this.highestBid.amount);
            // console.log(this.highestBid);
        }
    };
    CardComponent.prototype.getHighestBid = function (o) {
        // Math.max.apply(Math,o.map(function(o){return o.y;}))
        // console.log(o);
        // var maxValue = Math.max.apply(Math, tmp);
        // var tmp = o.map(function(o) {
        //   return o.amount;
        // });
        // console.log(maxValue);
        // o.sort(function(a, b){return a.value-b.value});
    };
    return CardComponent;
}());
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.css")],
        inputs: ['item'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */]) === "function" && _a || Object])
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.css":
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 50%;\r\n    margin-left:50px;\r\n}\r\n\r\ntd, th {\r\n    border: 1px solid black;\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}\r\n.btn{\r\n    background-color:grey;\r\n    border: 1px solid;\r\n    color:white;\r\n}\r\n", ""]);
=======
exports.push([module.i, "\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n    padding: 5px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    ", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
exports.push([module.i, "\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n    padding: 5px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    ", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\r\n    <li (click) =\"onSelect(pro)\" *ngFor=\"let pro of pros\"><a>{{pro.name}}</a></li>\r\n</ul> -->\r\n<div *ngIf=\"tableview\">\r\n<table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Bid Amount</th>\r\n      <th>Minimum Bid Rate</th>\r\n      <th>Start date</th>\r\n      <th>End Date</th>\r\n      <th>Description</th>\r\n      <th>status</th>\r\n      <th>Action</th>\r\n    </tr>\r\n    <tr *ngFor=\"let pro of pros\">\r\n\r\n    <td>{{pro.name}}</td>\r\n    <td>{{pro.bid_amount}}</td>\r\n    <td>{{pro.min_bid_rate}}</td>\r\n    <td>{{pro.start_date}}</td>\r\n    <td>{{pro.start_date}}</td>\r\n    <td>{{pro.desc}}</td>\r\n    <td>{{pro.status}}</td>\r\n    <!-- <td>{{pro.status}}</td> -->\r\n    <td (click) =\"onSelect(pro)\" ><input type=\"submit\" value=\"Action\" class=\"btn\" ><br>\r\n\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:20px;\">\r\n  \r\n    <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n        <div  *ngFor=\"let product of products\" class=\"item  col-xs-4 col-lg-4\">\r\n            <div class=\"thumbnail\">\r\n                \r\n                <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n           \r\n                <div class=\"caption\">\r\n                    <h4 class=\"group inner list-group-item-heading text-center\">\r\n                        {{product.name}}</h4>\r\n                        <hr>\r\n                        <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                        <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                      </p>\r\n                    <hr>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Start Price\r\n                            <p class=\"lead\">{{product.bid_amount | number:'1.2-2'}}</p>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Last Bid Price\r\n                            \r\n                            <p *ngIf=\"product.bidders.length > 0\" class=\"lead\">{{product.lastBidprice | number:'1.2-2'}}</p>\r\n                            <p *ngIf=\"product.bidders.length == 0 \" class=\"alert-danger lead\">No bid</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Started On<br>\r\n                            <b>\r\n                              {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                              <br>\r\n                              {{product.start_date | date : 'mediumTime'}}\r\n                            </b>\r\n                        </div>\r\n                         <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Ended On<br>\r\n                            <b>\r\n                                {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                <br>\r\n                                {{product.end_date | date : 'mediumTime'}}\r\n                            </b>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row margn\" >\r\n                      \r\n                      <div class=\"col-xs-12 col-md-12 text-center\">\r\n                         <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.bidders.length}}</a>\r\n                         \r\n                      </div>\r\n                      <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                          <div class=\"modal-dialog\">\r\n                        \r\n                            <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                <h4 class=\"modal-title\">User Involved - {{involvedUsers.length}}</h4>\r\n                              </div>\r\n                              <div class=\"modal-body\">\r\n                                  <table class=\"table\">\r\n                                      <thead class=\"thead-inverse\">\r\n                                  <tr>\r\n                                    <th>Slno</th>\r\n                                    <th>Name</th>\r\n                                    <th>Bid Amount</th>\r\n                                    <th>Time</th>\r\n                                    <th>Status</th>\r\n                                  \r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"involvedUsers.length ==0\">\r\n                                    <tr >\r\n                                          <td colspan=\"5\" class=\"text-center\">No User Involved</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tbody *ngIf=\"involvedUsers.length > 0\" >\r\n                              \r\n                                    <tr  *ngFor=\"let usr of involvedUsers;let i = index\" >\r\n                                          <td >{{i+1}}</td>\r\n                                          <td >{{product.user_details[i].name}}</td>\r\n                                          <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                          <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                          <td >{{usr.bid_status}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                </table>\r\n                              \r\n                              </div>\r\n                              <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                              </div>\r\n                            </div>\r\n                        \r\n                          </div>\r\n                        </div>\r\n                  </div>\r\n                  \r\n                    <div class=\"row\">\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center \">\r\n                              <div *ngIf=\"product.is_bid_completed\">\r\n                                  <div class=\"alert alert-success text-center \">\r\n                                      Winner! \r\n                                      <br> <strong> {{product.lastBiduser}}</strong>\r\n                                      <br>\r\n                                      {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                            \r\n                              </div>\r\n                              <div *ngIf=\"!product.is_bid_completed\">\r\n                              <a class=\"alert-success\" href=\"#\">Assign - Winner</a>\r\n                              </div>\r\n                          </div>\r\n                            <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                            <a class=\"alert-danger\" href=\"#\">Re-submit</a>\r\n                          </div>\r\n                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  \r\n    </div>\r\n    </div>\r\n  \r\n    <div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n        <h3 class=\"text-center\"> No Product Found</h3>\r\n    </div>\r\n    </div>\r\n     \r\n    \r\n       "

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClosedAuctionBackComponent = (function () {
    function ClosedAuctionBackComponent(productService) {
        this.productService = productService;
        this.involvedUsers = [];
    }
    ClosedAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllClosedProduct().subscribe(function (data) {
            data.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                item.bidders.forEach(function (user, i) {
                    if (user.amount >= lastBidprice && user.bid_status != "rejected") {
                        lastBidprice = user.amount;
                        lastBiduser = item.user_details[i].name;
                        lastBidTime = user.date_time;
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
        this.involvedUsers = product.bidders;
        console.log(this.involvedUsers);
    };
    return ClosedAuctionBackComponent;
}());
ClosedAuctionBackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-closed-auction-back',
        template: __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ClosedAuctionBackComponent);

var _a;
//# sourceMappingURL=closed-auction-back.component.js.map

/***/ }),

/***/ "../../../../../src/app/count-down-timer/count-down-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountDownTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.tableview = true;
        // private deleteProEvent = new EventEmitter();
        this.SelectPro = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.onSelect = function (prod) {
        this.SelectPro.emit(prod);
        this.tableview = false;
    };
    ProductListComponent.prototype.deletePro = function (prod) {
        this.SelectPro.emit(prod);
        this.tableview = false;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-list',
        template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")],
        inputs: ['pros'],
        outputs: ['SelectPro']
    }),
    __metadata("design:paramtypes", [])
], ProductListComponent);

//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

var CountDownTimerComponent = (function () {
    function CountDownTimerComponent(elm) {
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
        return [
            // days + 'd',
            hours + ':',
            this.lpad(minutes) + ':',
            this.lpad(seconds)
        ].join('');
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
    return CountDownTimerComponent;
}());
CountDownTimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-count-down-timer',
        template: "\n  <div>\n    {{message}}\n  </div>\n",
        inputs: ["inputDate"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CountDownTimerComponent);

var _a;
//# sourceMappingURL=count-down-timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, ".shadow{\r\n\r\n     margin-left: 100px;\r\n   \r\n}\r\n.blakbtn{\r\n    background-color: black;\r\n    width:90px;\r\n}\r\n.blakbtn:hover{\r\n    background-color: white;\r\n    color:black;\r\n}\r\n.colorbtn{\r\n    background-color: black;\r\n    width:200px;\r\n}\r\n.colorbtn:hover{\r\n    background-color: white;\r\n    color:black;\r\n    \r\n}\r\n\r\n\r\n\r\n ", ""]);
=======
exports.push([module.i, "", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
exports.push([module.i, "", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-md-9 shadow\">\n            <h3>Add a Product</h3>\n            <br>\n            <form #form='ngForm' (ngSubmit)=\"addProduct()\" class=\"well\" >\n                <div class=\"form-group\" >\n                    <label > Name *</label>\n                    <input type=\"text\"  name=\"name\"  [(ngModel)]=\"newproduct.name\" class=\"form-control\" required  />\n                </div>\n                <div class=\"form-group\" >\n                    <label > Bid Amount *</label>\n                    <input type=\"text\"  name=\"bid_amount\" [(ngModel)]=\"newproduct.bid_amount\"  class=\"form-control\" required  />\n                </div>\n             \n\n                <div class=\"form-group\" >\n                    <label > Minimum Bid Rate</label>\n                    <input type=\"text\"  name=\"min_bid_rate\" [(ngModel)]=\"newproduct.min_bid_rate\" class=\"form-control\" />\n                </div>\n\n                 <div class=\"form-group\" >\n                        <label > Bid Start time *</label>\n                        <datetime name=\"start_date\" [(ngModel)]=\"newproduct.start_date\"></datetime>\n                    </div>\n                    <div class=\"form-group\" >\n                            <label > Bid End time *</label>\n                            <datetime name = \"end_date\"  [(ngModel)]=\"newproduct.end_date\"></datetime>\n                        </div>\n\n                \n\n                 <!-- <image-upload name=\"image\"  [(ngModel)]=\"newproduct.image\"\n                [style]=\"'customStyle'\" \n                [class]=\"'prev-img'\" \n                [max]=\"100\"\n                \n                [headers]=\"{Authorization: 'MyToken'}\"\n                [buttonCaption]=\"'Select Images!'\"\n                [dropBoxMessage]=\"'Drop Product images here!'\"\n                [extensions]=\"['jpg','png','gif']\"\n             \n                (removed)=\"onRemoved($event)\"\n                (uploadFinished)=\"onUploadFinished($event)\"\n                (uploadStateChanged)=\"onUploadStateChanged($event)\"></image-upload>  -->\n                <!-- <div>\n                    <label > Image</label>\n                    <input type=\"file\"  name=\"pollqtn\"   required />\n                </div> -->\n               \n               \n                <!-- <img class=\"mythumbnail\" ng-src=\"{{ thumbnail.dataUrl || default }}\"> -->\n                <!-- <img ng-src= \"{{ thumbnail.dataUrl || 'https://www.camboexpo.com/ctg/images/default.jpg' }}\"> -->\n                \n                <!-- <label class=\"btn btn-success colorbtn\"> Browse</label> -->\n                \n                <input type=\"file\" name =\"myfile\" ng-disabled=\"uploading\" style=\"display: none\">\n\n                <div class=\"form-group\" >\n                    <label > Description</label>\n                    <br>\n                    <textarea rows=\"4\" cols=\"70\" name=\"desc\" [(ngModel)]=\"newproduct.desc\" ></textarea>\n                </div>\n               \n                <input type=\"submit\" class=\"btn btn-info blakbtn\" value=\"Submit\"  >\n            \n               \n            </form>\n      \n          </div>\n         "

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD



// import { ProductService } from '../services/product.service';
// import { Poll } from '../poll';
// import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
// import { answer } from './../answer';
var ProductComponent = (function () {
    function ProductComponent(_prductService, _userService, router) {
        this._prductService = _prductService;
        this._userService = _userService;
        this.router = router;
        this.newproduct = {
            name: '',
            desc: '',
            bid_amount: '',
            min_bid_rate: '',
            start_date: '',
            end_date: '',
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        this._prductService.addProduct(this.newproduct).subscribe(function (data) {
            if (data) {
                _this._userService.sendmail().subscribe(function (data1) {
                });
                alert("Add Product Successfully");
                window.location.reload();
                //  this.router.navigate(['/registration'])
            }
            else {
                alert("Error");
                console.log("error");
            }
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        // providers: [ProductService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.css":
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, "body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: table;\r\n  overflow: hidden;\r\n  background: #1a1a1a;\r\n}\r\n\r\na {\r\n  color: #6897bb !important;\r\n  outline: none !important;\r\n  text-decoration: underline !important;\r\n}\r\n\r\n.checkbox {\r\n  color: #fff;\r\n}\r\n\r\ntextarea,\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"datetime\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"date\"],\r\ninput[type=\"month\"],\r\ninput[type=\"time\"],\r\ninput[type=\"week\"],\r\ninput[type=\"number\"],\r\ninput[type=\"email\"],\r\ninput[type=\"url\"],\r\ninput[type=\"search\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"color\"],\r\n.uneditable-input {\r\n  border: 3px solid transparent;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n  height: 50px;\r\n}\r\n\r\ntextarea:focus,\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ninput[type=\"datetime\"]:focus,\r\ninput[type=\"datetime-local\"]:focus,\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"month\"]:focus,\r\ninput[type=\"time\"]:focus,\r\ninput[type=\"week\"]:focus,\r\ninput[type=\"number\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"url\"]:focus,\r\ninput[type=\"search\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"color\"]:focus,\r\n.uneditable-input:focus {\r\n  border: 3px solid #6897bb;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n\r\n.modal-footer .btn-default {\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.modal-footer .btn-default:hover {\r\n  border: 1px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n.btn-default {\r\n  border: 3px solid transparent;\r\n}\r\n\r\n.btn-default:hover {\r\n  border: 3px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n.wrapper {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.modal-body {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n}", ""]);
=======
exports.push([module.i, "", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
exports.push([module.i, "", ""]);
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <form class=\"form-horizontal \" role=\"form\">\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"First Name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Last Name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <div class=\"checkbox\">\r\n          <label><input type = \"checkbox\" required>\r\n          I agree to <a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n          Terms and Conditions\r\n          </a>\r\n        </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Sign up</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<!-- \r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"> \r\n          Terms and Conditions</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Lorem ipsum dolor sit amet, eum eu ceteros deseruisse, mea ex odio facete vocibus. Usu et inimicus pertinacia disputationi, mea nihil zril blandit no. Mollis offendit mel ne, facete putant melius vis ea, vel prima conclusionemque ne. Ea vim sumo\r\n          veniam, ea elitr verear iudicabit est. Quo cu meliore deleniti tractatos. Impedit insolens sed te. Eum ludus platonem reprehendunt ea. Mei verterem singulis id, munere delectus constituam id usu. Per ei omnes pertinax, mel ea quas luptatum.\r\n          <br/>\r\n          <br/>\r\n          Eu probo suscipit eum, omittam deleniti ea pri. Ea ignota prompta vim, id est ornatus veritus contentiones. Eu duo quot omnesque atomorum, in tation efficiantur liberavisse his. Admodum conceptam contentiones quo eu. An nam brute mundi. Essent sententiae\r\n          eloquentiam nec ne. Mel quaeque consequat eu, cum ex clita nusquam. Graece gloriatur vim ut. Semper alterum ea eum. Vis et sint wisi omittantur, saepe petentium eos id. Te vis utroque scaevola, per ex legere vituperata. Mei ei possim albucius,\r\n          ne sint consulatu disputationi duo, cu eos novum fabulas labores. Ex vim nonumy impedit, eos in timeam suscipiantur, ad vim laoreet noluisse assueverit. Cu possim salutatus sed. Sale ubique contentiones pri an, in est dolores molestiae intellegat.\r\n          Omnes vidisse duo no, doctus iriure cu eos, iudico voluptatum scripserit vix in. Qui ex reprimique liberavisse, at nam alia petentium. At mea esse expetendis, at justo doming eam. Ad pri labores voluptua. Intellegam neglegentur mediocritatem\r\n          id vix. No vim essent voluptatum honestatis, ea doming bonorum fabellas quo. Ut sed aeterno percipitur. Alii dissentias ei nam, ad mei causae fuisset. Id solet feugiat fabulas vel, mei rebum dictas debitis cu, ea sumo choro soleat mea. Cu laudem\r\n          persequeris eos, minim possit ius an, meis praesent torquatos pri id. Cu vis tation tacimates, iriure fabulas cum id. Habeo brute minimum cum ea, probo fuisset quo ad. Vix eu fabulas volutpat, sit putent prodesset philosophia eu, agam mediocritatem\r\n          cu mei. Eum at postea appareat. Qui no nobis forensibus. Mea nostro discere ad, at primis ornatus est, facilisis prodesset voluptatum sea id. Nec probatus intellegat ut. Vis rebum aeterno ad, sed te assum possit. Mei te dico possim fuisset,\r\n          an vim causae aliquando mnesarchum. Quo vidit dicant in, modo dicam dissentiet mel at, reprehendunt concludaturque eam no. Nobis semper eloquentiam no has. Quod invenire signiferumque eam an, elit mediocritatem has ad. Quo in nostrud gloriatur\r\n          complectitur. Sint rebum tincidunt ius te, mei ne disputationi consequuntur. Vix no intellegam intellegebat consequuntur, eu sit oblique perpetua. Eu est error mnesarchum. At inani copiosae nec, ut his nulla elitr. Illud mentitum omittantur\r\n          ea vix.\r\n          <br/>\r\n          <br/>\r\n          An quo habemus convenire, id duo eruditi debitis. Vis ex invidunt menandri, nam ad ignota definiebas scriptorem. Sed te atqui graecis democritum. Diam eruditi insolens ex pri, regione voluptua oportere cum et, nam accusamus abhorreant te. Usu ne nihil\r\n          pertinacia posidonium, ignota omittam salutandi ex usu. Sit et adolescens sententiae omittantur, an vim mundi placerat detraxit. In eripuit graecis sed, mucius torquatos definiebas cum cu. Eos torquatos voluptaria adipiscing no, in duo dolore\r\n          tibique, sed assum decore in. Te mei doctus principes, et pro dolore iuvaret delectus, ex latine virtute definiebas sed. Ne harum feugait eos. Virtute meliore scaevola vel et, in etiam ornatus aliquando cum. Nisl tota splendide et cum, unum\r\n          prima ornatus eu has. Usu an porro graecis, eu mei saperet detracto necessitatibus. Munere imperdiet vix an, mei numquam legendos omittantur ne. Ea sed putent perpetua posidonium. Id electram expetenda qui, ei pri quodsi verterem. Brute persius\r\n          sea in. Pro id natum putent, cum sumo erroribus corrumpit eu. Pro detracto moderatius te, mei cu saperet scaevola, fierent constituto has te. Nec ad sumo singulis cotidieque. At mei dissentiet consequuntur, verterem lucilius qui te. Qui cu dolorem\r\n          contentiones, ut facilisis philosophia eum, per id vidit nusquam. Clita reprimique et ius, vim aeterno imperdiet ut. Doming latine platonem ut mea. Appetere temporibus necessitatibus sea ea, ut libris dolorum perpetua sea, ius cu tollit dissentiunt.\r\n          Est ei mazim maiestatis reformidans, in posse delenit eum. Id per causae impetus repudiare, vim sumo nobis no, soluta accumsan et nam. Has ea quis ancillae legendos. Enim ocurreret eloquentiam cum in, oratio viderer blandit cu ius, eum simul\r\n          laoreet ex. Te ius dictas eruditi ponderum, vix quod nostrum ad.\r\n          <br/>\r\n          <br/>\r\n          Movet graeci indoctum qui ei, ad vim aeque animal. Sit ad nonumes pericula, vim essent postulant expetendis id, quem regione vel et. Ea mea vivendo theophrastus, no falli vulputate vim. Ius oblique interesset ad, omnes detraxit est et, at abhorreant sadipscing\r\n          vituperatoribus vis. Ut duo discere periculis, eu sit esse simul, sed cu erant vivendo. Id illud senserit vim, nibh hendrerit suscipiantur pro no. Esse liber ocurreret ea vel, ea harum copiosae lobortis vix, nam ex timeam feugiat pertinax. Augue\r\n          aliquip an mea, exerci aeterno adipisci eos cu. Persius percipit quaestio pro an. Munere pertinax expetendis quo ea, deleniti repudiandae ut nam. Oblique adversarium ea mea, ei numquam posidonium sed, eu pertinax definiebas cum. Phaedrum atomorum\r\n          disputationi ne his, cu mei consulatu disputationi, quo cu expetenda moderatius persequeris. Vix ne iudico tibique convenire. Id eam elitr convenire, per te elit mandamus, usu putant conceptam ei. Nec noluisse conceptam ea. Ferri dictas adversarium\r\n          pro no, no ius porro vulputate. Eu pro oratio adolescens, id nam dolore quodsi prodesset. Luptatum torquatos mea in, omnis augue virtute ne sea, cu alii principes gubergren sea. Verear copiosae in nec, vidisse scripta id vix. Officiis ponderum\r\n          nominati eos no. Sumo tota ad eum. Inani labore vix ex, offendit iudicabit at quo, et persius liberavisse mel. Eu mei quot sanctus, ad laoreet mediocrem consequat vel. Eos id primis constituto, qui maiorum imperdiet in, ea sale pericula honestatis\r\n          quo. Vix ut invidunt accusata. Ius ei verear senserit consetetur, ne eam fuisset suscipit delicatissimi, vel postea evertitur et. Id tale ornatus intellegam sed. Has ei assum exerci facilisi. Volumus suavitate ut duo, quas suscipit urbanitas\r\n          eam ut, has in eruditi efficiendi. No per blandit argumentum percipitur, mucius copiosae eu has. Sea elit vidit ut. In erant tacimates est. Democritum honestatis scripserit te duo, sed ut elitr aperiam. Id sale mundi iracundia sed, magna adhuc\r\n          commune vis id. Id mel sensibus sententiae, vidit commodo in pri. Ius illud sadipscing et, cum summo iisque in, nec nonumy vituperatoribus et. An facete alterum per. Sit primis postea honestatis ea. No stet omnis epicurei duo, ad nonumy antiopam\r\n          partiendo vim. Malis rationibus in ius, dolorem legendos vix ut, sea ut minimum luptatum recusabo. Velit propriae invenire eum ne, et qui ullum inani. An eruditi repudiandae mea, eos in dicunt timeam, vel enim solet cu. Quot eius maiestatis\r\n          ei mel, quo sententiae elaboraret dissentiet ei. Pro in errem deleniti definitiones. Per iusto moderatius et. Modo ponderum explicari sit ei, dicta eloquentiam ei pri, ea mel dicit vocibus. Semper verear ea pro, an sed wisi labore expetenda.\r\n          <br/>\r\n          <br/>\r\n          Est cibo erat mandamus at, at amet meliore deseruisse vix, reque aeterno vix no. Patrioque iracundia in est, quodsi admodum ocurreret te pro, est an facer accommodare. Eam debet doming evertitur ei, qui eligendi suscipit recusabo no, denique hendrerit\r\n          ius ad. Dissentiet reformidans intellegebat quo ei, pro magna adhuc et. No adolescens delicatissimi vix, et eam error aliquam. Id sanctus maiestatis per. Cu vel omnis ignota noluisse, sea propriae imperdiet eu. Ea pri cetero euismod definiebas,\r\n          tale lobortis cu mea. Quo ad ullum oratio impetus, his cu luptatum tacimates, vel te nobis persius. Te electram consetetur mel, ei mea mutat affert ubique, vim ea appetere evertitur. Cum probo solet liberavisse te, an dolor soluta pri. Dico\r\n          agam admodum pri ne, has utroque invidunt instructior cu, cu vix populo menandri. Mel noluisse percipitur ei. Quis mentitum vix ex, mei purto feugait interesset cu. Nec hinc scriptorem in, ex postulant assentior vim. Ludus electram consequuntur\r\n          mea no, an vis eius abhorreant definitiones. No sea eirmod persecuti, eam unum legere id. Ne expetenda abhorreant mei, id nam aeque omnium commodo. Et has assum option nonumes, vix fierent iracundia no. Ad diam urbanitas his. At legere intellegebat\r\n          vituperatoribus cum, invidunt scribentur id usu. Sed putent tincidunt ad. Sea ad persecuti vituperata, ius simul consul ne. Ex sit dicta labore, graeci volumus dignissim eam te. Cu est omnium nominavi maluisset, brute timeam insolens cu est.\r\n          In cum sanctus placerat convenire, ius repudiare incorrupte in. Et molestie indoctum incorrupte mel. Eu pri iisque dolorum, ne mea malis malorum phaedrum, mel eu veniam dolore. Has ei inciderint neglegentur, sit nisl quaestio accusamus te. Per\r\n          ei detracto legendos. Iudicabit dissentiunt pri ad, erant copiosae eos no, nulla ancillae ut eam. Has graeci elaboraret ei, in sanctus mediocritatem mei. Simul incorrupte nec ut. Cu possit habemus eam, in sit labore quaestio, ei nam mucius everti\r\n          intellegam. Est incorrupte consequuntur et, ad nec alii hinc. Duo case mazim pertinacia ne. Causae aperiam pri an. Cibo nihil luptatum nam ne. Ut pro elitr quaeque, probo docendi efficiantur in sed. Explicari moderatius suscipiantur sed ut,\r\n          nobis mollis debitis id nam. Harum hendrerit te sit. In quo dolore eligendi electram. Pro lobortis principes eu, id mel ullum alienum, tation habemus ad duo. An nam epicuri sensibus. Mei id feugiat efficiendi mediocritatem, et est enim epicuri.\r\n          Eu his indoctum interpretaris, ea stet maiestatis sea, eos equidem consequat eu. Vis ad utroque splendide efficiendi, per ad sint munere euripidis. Id quando percipit delicatissimi vim. Id deleniti quaestio patrioque vel. Sit ei adipiscing disputando,\r\n          modo ludus prompta no his. Ridens doctus atomorum per at, sit regione efficiantur te. Sonet vidisse sensibus in eum, cu nec amet nibh. Legendos evertitur usu ut, cum eu aliquid facilisis, omittam facilisis te his.\r\n          <br/>\r\n          <br/>\r\n          Quando referrentur id eam, quidam similique dissentias eu duo. Et quod omnis mea. In eos munere conceptam, ad etiam dicunt vel. Vel erat posse an, in illum equidem officiis eos. Eu eos utinam perpetua, ei solet ubique eirmod mei. Purto eripuit an eum,\r\n          ea his tation gloriatur, ei eam tempor aliquid volumus. Ea mea harum inimicus instructior, graecis scribentur ex eum. Iudico ridens.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/deleted-users/deleted-users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  deleted-users works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/deleted-users/deleted-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletedUsersComponent; });
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
<<<<<<< HEAD
var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);

//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var DeletedUsersComponent = (function () {
    function DeletedUsersComponent() {
    }
    DeletedUsersComponent.prototype.ngOnInit = function () {
    };
    return DeletedUsersComponent;
}());
DeletedUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'deleted-users',
        template: __webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/deleted-users/deleted-users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DeletedUsersComponent);

//# sourceMappingURL=deleted-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  disabled-users works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/disabled-users/disabled-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabledUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD


var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        // private _getUrl = '/api/polls';
        this._postUrl = '/products/addnew';
        this._putUrl = '/products/update/';
        this._getUrl = '/products/products';
        this._deleteUrl = '/products/updatedel';
        this.url = "http://localhost:3000/";
    }
    ProductService.prototype.getAllClosedProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/closed_products', { headers: headers })
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._putUrl + pro._id, JSON.stringify(pro), Options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (pro) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var Options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put(this._deleteUrl + pro._id, JSON.stringify(pro), Options)
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var DisabledUsersComponent = (function () {
    function DisabledUsersComponent() {
    }
    DisabledUsersComponent.prototype.ngOnInit = function () {
    };
    return DisabledUsersComponent;
}());
DisabledUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disabled-users',
        template: __webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/disabled-users/disabled-users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DisabledUsersComponent);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
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
<<<<<<< HEAD
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._regUrl = "/user/register";
        this._verifyUrl = "/user/verify/";
        this.url = "http://localhost:3000/";
    }
    UserService.prototype.registerUser = function (user) {
        // console.log(JSON.stringify(user));
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
var EmailVerificationComponent = (function () {
    function EmailVerificationComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userService.generateToken(params.id).subscribe(function (data) {
                if (data == true) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'email-verification',
        template: __webpack_require__("../../../../../src/app/email-verification/email-verification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-verification/email-verification.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _c || Object])
], EmailVerificationComponent);

var _a, _b, _c;
//# sourceMappingURL=email-verification.component.js.map

/***/ }),

/***/ "../../../../../src/app/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

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

module.exports = "<div class=\"container\">\r\n  <div id=\"f-auction\" class=\"auction-section\">\r\n      <h4 class=\"page-head\">Closed Auctions</h4>\r\n      <div *ngIf=\"existStatus; else noProduct\">\r\n        <div  *ngFor=\"let item of products\">\r\n          <!-- {{item}} -->\r\n          <app-card [item]=\"item\"></app-card>\r\n        </div>\r\n      </div>\r\n      <ng-template #noProduct>\r\n        <div class=\"no-item\">\r\n            <h4>Sorrry! No items to display!</h4>\r\n        </div>\r\n      </ng-template>\r\n      \r\n      \r\n  </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finishedauction/finishedauction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishedauctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service_service__ = __webpack_require__("../../../../../src/app/product-service.service.ts");
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
    function FinishedauctionComponent(_productService) {
        this._productService = _productService;
        this.existStatus = false;
    }
    FinishedauctionComponent.prototype.ngOnInit = function () {
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
        // console.log(this.products);
    };
    return FinishedauctionComponent;
}());
FinishedauctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-finishedauction',
        template: __webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/finishedauction/finishedauction.component.css")],
        inputs: ['products']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */]) === "function" && _a || Object])
], FinishedauctionComponent);

var _a;
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

module.exports = "<footer class=\"sticky-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"text-center\">\r\n      <small>Copyright © Your Website 2017</small>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<app-runningauction></app-runningauction>\r\n<app-finishedauction></app-finishedauction>\r\n<app-upcomingauctions></app-upcomingauctions>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 15px;\r\n    font-size: 12px\r\n  }\r\n  .main {\r\n    max-width: 320px;\r\n    margin: 0 auto;\r\n  }\r\n  .login-or {\r\n    position: relative;\r\n    font-size: 18px;\r\n    color: #aaa;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .span-or {\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -2px;\r\n    margin-left: -25px;\r\n    background-color: #fff;\r\n    width: 50px;\r\n    text-align: center;\r\n  }\r\n  .hr-or {\r\n    background-color: #cdcdcd;\r\n    height: 1px;\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n  }\r\n  h3 {\r\n    text-align: center;\r\n    line-height: 300%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"main\">\n\n      <h3>Please Log In, or <a [routerLink]=\"['/registration']\">Sign Up</a></h3>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <a href=\"/auth/facebook\" target=\"_blank\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <a href=\"/auth/google\" target=\"_blank\" class=\"btn btn-lg btn-info btn-block\">Google</a>\n        </div>\n      </div>\n      <div class=\"login-or\">\n        <hr class=\"hr-or\">\n        <span class=\"span-or\">or</span>\n      </div>\n\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n          <label for=\"inputUsernameEmail\">Username or email</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\" required [(ngModel)]=\"newLogin.email\" name=\"email\" #email=\"ngModel\">\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n          <label for=\"inputPassword\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\">\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <button type=\"submit\" class=\"btn btn btn-primary\">\n          Log In\n        </button>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && status }\">\n            <div *ngIf=\"status\" class=\"help-block\">!{{msg}}</div>\n       </div> \n      </form>\n      \n    </div>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.authenticateUser(this.newLogin).subscribe(function (data) {
            if (data.success == false) {
                _this.status = true;
            }
            if (data.success) {
                _this.userService.storeUserData(data.token, data.user);
                if (data.user.role == "user") {
                    _this.routes.navigate(['/home']);
                }
                if (data.user.role == "admin") {
                    _this.routes.navigate(['/dashboard']);
                }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>"

/***/ }),

/***/ "../../../../../src/app/myauctions/myauctions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyauctionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function MyauctionsComponent() {
    }
    MyauctionsComponent.prototype.ngOnInit = function () {
    };
    return MyauctionsComponent;
}());
MyauctionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-myauctions',
        template: __webpack_require__("../../../../../src/app/myauctions/myauctions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/myauctions/myauctions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyauctionsComponent);

//# sourceMappingURL=myauctions.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    font: sans-serif;\r\n    background: #E8E8E8;\r\n}\r\nheader {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0 0 ;\r\n    z-index: 11;\r\n    /* background: #E8E8E8; */\r\n    border-bottom: none;\r\n}\r\nheader .box {\r\n    background: #084da7;\r\n    padding: 6px 0;\r\n    text-align: left;\r\n}\r\nheader .box .title1 {\r\n    font-size: 25px ;\r\n    color: #ffffff;\r\n    margin: 0 9px 0 0;\r\n    float: left;\r\n}\r\nheader .box .title2 {\r\n    font-size: 14px ;\r\n    color: #888;\r\n    margin: 10px 0 0 0;\r\n    float: left;\r\n}\r\n\r\nheader .btn-default.btn1 {\r\n    margin: 0 0 0 6px;\r\n    float: right;\r\n}\r\n.box .dropdown {\r\n    float: right;\r\n    clear: right;\r\n    list-style: none;\r\n}\r\n.box .dropdown ul{\r\n    padding: 0;\r\n    background: #084DA7;\r\n}\r\n.box .dropdown ul li a{\r\n    padding: 10px 20px;\r\n    \r\n}\r\n.box .dropdown ul li:hover{\r\n    background: #fff;\r\n    \r\n}\r\n.box .dropdown ul li:hover a{\r\n    color: #084DA7;\r\n}\r\n.navbar-toggle{\r\n    margin-top: 25px;\r\n}\r\na {\r\n    color: #ffffff;\r\n}\r\na:hover, a:focus {\r\n    color: #FFD213;\r\n}\r\n.box .dropdown-menu{\r\n    margin-top: 5px;\r\n    border-radius: 0;\r\n}\r\n.box .dropdown li a{\r\n    color: #ffd613;\r\n}\r\n.btn-default.btn1 {\r\n    box-shadow: none;\r\n    position: relative;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 10px 15px;\r\n    font-size: 17px ;\r\n    font-weight: 600;\r\n    background: #373737;\r\n    border-radius: 7px;\r\n    color: #ffffff;\r\n    float: none;\r\n    transition: all 0.35s;\r\n}\r\n\r\nheader .btn-default.btn1 {\r\n    margin: 0 0 0 6px;\r\n    float: right;\r\n}\r\n.btn-default.btn1 {\r\n    box-shadow: none;\r\n    position: relative;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 4px 15px;\r\n    font-size: 17px ;\r\n    font-weight: 600;\r\n    background: #ffd613;\r\n    border-radius: 4px;\r\n    color: #ffffff;\r\n    float: none;\r\n    transition: all 0.35s;\r\n}\r\n.btn-default.btn1:hover {\r\n    color: #191919;\r\n    background: #ffd613;\r\n    text-decoration: none;\r\n}\r\nh1.navbar-brand_ {\r\n    margin: 31px 0 0 0;\r\n    padding: 0;\r\n    float: left;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\nh1.navbar-brand_ a {\r\n    display: inline-block;\r\n}\r\na {\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\nh1.navbar-brand_ a img {\r\n    width: 100%;\r\n}\r\n\r\nnav.tm_navbar {\r\n    border: none;\r\n    padding: 0;\r\n    margin: 62px 0 0 0;\r\n    float: right;\r\n    min-height: 0;\r\n    background: none;\r\n}\r\n\r\nnav.tm_navbar li:first-child {\r\n    margin: 0;\r\n}\r\nnav.tm_navbar li {\r\n    position: relative;\r\n    font-size: 15px;\r\n    line-height: 25px;\r\n    padding: 0;\r\n    margin: 0 0 0 30px;\r\n    float: left;\r\n}\r\n\r\nav.tm_navbar li.active > a {\r\n    color: #191919;\r\n    background: none !important;\r\n}\r\nnav.tm_navbar li a {\r\n    padding: 0;\r\n    font: 600 21px 'Raleway';\r\n    color: #777;\r\n    background: none;\r\n    position: relative;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav.tm_navbar li.active > a::after {\r\n    width: 100%;\r\n}\r\nnav.tm_navbar li a::after {\r\n    position: absolute;\r\n    bottom: -15px;\r\n    left: 0;\r\n    height: 11px;\r\n    width: 0;\r\n    background: #ffd613;\r\n    content: '';\r\n    display: block;\r\n    transition: all 0.25s;\r\n}\r\n\r\nnav.tm_navbar li:hover > a {\r\n    color: #191919;\r\n    background: none !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    height: auto;\r\n    padding: 15px 14px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    overflow: hidden;\r\n    color: #ffffff;\r\n}\r\n.navbar-brand img{\r\n    width:48%;\r\n}\r\n.navbar-nav > li > a {\r\n    padding-top: 8px !important;\r\n    padding-bottom: 4px !important;\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n    margin: 28px 0;\r\n    padding: 10px 7px;\r\n    cursor: pointer;\r\n}\r\n.navbar-nav > li {\r\n    margin-left: 6px;\r\n}\r\n.navbar-default {\r\n    /* background-color: #f8f8f8; */\r\n    border: none;\r\n    background: #2882F7;\r\n}\r\n.navbar-right .active a{\r\n    border-bottom: 3px solid #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {\r\n    color: #ffffff;\r\n    background-color: transparent !important;\r\n}\r\n.navbar {\r\n    border-radius: 0 !important;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: #ffffff;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n}\r\ndefault .navbar-toggle:hover {\r\n    background-color: #AD1457;\r\n}\r\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n    background-color: #fff;\r\n}\r\n.navbar-default .navbar-toggle:hover .icon-bar, .navbar-default .navbar-toggle:focus .icon-bar{\r\n    background-color: #084da7;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .navbar-brand {\r\n        width:78%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  \r\n  <div class=\"fluid-container\">\r\n    <nav class=\"navbar navbar-default  navbar-fixed-top\">\r\n        <div class=\"box\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                     <!-- <div class=\"col-lg-8 col-md-8\">\r\n                        <p class=\"title1\">Free phone: <strong>800-2345-6789</strong></p>\r\n                        <p class=\"title2\">Hours:  8am-8pm PST M-Th;   6am-3pm PST Fri</p>\r\n                    </div> -->\r\n                    <div class=\"col-lg-4 col-md-4 pull-right\">\r\n                        <li class=\"dropdown\" >\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">My Account <span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          \r\n                          <li><a [routerLink]=\"['/myauctions']\">My Bids</a></li>\r\n                          <li><a (click)=\"logout()\" href=\"#\">Log Out</a></li>\r\n                          \r\n                        </ul>\r\n                      </li>\r\n                        <!-- <a href=\"#\" class=\"btn-default btn1\">Sign In</a> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n      <div class=\"container\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"../../assets/images/brand.png\" alt=\"brand\"></a>\r\n          </div>\r\n      \r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            \r\n           \r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"active\" ><a [routerLink]=\"['/home']\" >Home <span class=\"sr-only\">(current)</span></a></li>\r\n                <!-- <li class=\"dropdown\" >\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Manage <span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    \r\n                    <li><a href=\"#\">Users</a></li>\r\n                    <li><a href=\"#\">Polls</a></li>\r\n                    <li><a href=\"#\">Asign Poll</a></li>\r\n                    \r\n                  </ul>\r\n                </li> -->\r\n              <li ><a pageScroll href=\"#c-auction\">Running Auctions</a></li>\r\n              <!-- <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/registration']\">Registration</a></li> -->\r\n              <li ><a pageScroll [pageScrollOffset]=\"180\" href=\"#f-auction\">Closed Auctions</a></li>\r\n              <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li> -->\r\n              <li ><a  pageScroll [pageScrollOffset]=\"180\" href=\"#u-auction\">Upcoming Auctions</a></li>\r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n      </div>\r\n    </nav>\r\n  \r\n</div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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



var NavigationComponent = (function () {
    function NavigationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.brand_logo = "brand.png";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    return ProductServiceService;
}());
ProductServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductServiceService);

var _a;
//# sourceMappingURL=product-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/read-more/read-more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return ReadMoreComponent;
}());
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ReadMoreComponent);

var _a;
//# sourceMappingURL=read-more.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: table;\r\n  overflow: hidden;\r\n  background: #1a1a1a;\r\n}\r\n\r\na {\r\n  color: #6897bb !important;\r\n  outline: none !important;\r\n  text-decoration: underline !important;\r\n}\r\n\r\n.checkbox {\r\n  color:black;\r\n}\r\n\r\n\r\ntextarea,\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"datetime\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"date\"],\r\ninput[type=\"month\"],\r\ninput[type=\"time\"],\r\ninput[type=\"week\"],\r\ninput[type=\"number\"],\r\ninput[type=\"email\"],\r\ninput[type=\"url\"],\r\ninput[type=\"search\"],\r\ninput[type=\"tel\"],\r\ninput[type=\"color\"],\r\n.uneditable-input {\r\n  /* border: 3px solid; */\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n  height: 50px;\r\n}\r\n\r\ntextarea:focus,\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ninput[type=\"datetime\"]:focus,\r\ninput[type=\"datetime-local\"]:focus,\r\ninput[type=\"date\"]:focus,\r\ninput[type=\"month\"]:focus,\r\ninput[type=\"time\"]:focus,\r\ninput[type=\"week\"]:focus,\r\ninput[type=\"number\"]:focus,\r\ninput[type=\"email\"]:focus,\r\ninput[type=\"url\"]:focus,\r\ninput[type=\"search\"]:focus,\r\ninput[type=\"tel\"]:focus,\r\ninput[type=\"color\"]:focus,\r\n.uneditable-input:focus {\r\n  border: 3px solid #6897bb;\r\n  box-shadow: none;\r\n  outline: 0 none;\r\n}\r\n\r\n.modal-footer .btn-default {\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.modal-footer .btn-default:hover {\r\n  border: 1px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n/* .btn-default {\r\n  border: 3px solid transparent;\r\n} */\r\n\r\n.btn-default:hover {\r\n  border: 3px solid #6897bb;\r\n  background: #fff;\r\n}\r\n\r\n/* /* .wrapper {\r\n  /* display: table-cell; */\r\n  /* vertical-align: middle; */\r\n/* } */  */\r\n\r\n\r\n.wrapper\r\n{\r\n    border: 3px solid bl;\r\n}\r\n.modal-body {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<div class=\"wrapper\">\n  <br>\n  <form class=\"form-horizontal\" role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onRegisterSubmit();\" novalidate>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !name.valid }\">\n        <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n        <!-- <label for=\"exampleInputEmail1\">Name</label> -->\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"newUser.name\" name=\"name\" #name=\"ngModel\">\n          <div *ngIf=\"f.submitted && !name.valid\" class=\"help-block\">! Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n      <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n      <!-- <label >User Name</label> -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"newUser.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" #email=\"ngModel\">\n        <div *ngIf=\"f.submitted && email.invalid\">\n            <!-- <div *ngIf=\"!email.valid && newUser.email=='' \" class=\"help-block\">Email is required</div> -->\n          <div *ngIf=\"email.errors.pattern\" class=\"help-block\">! Email id is not valid</div>\n          <div *ngIf=\"email.errors.required\" class=\"help-block\">! Email id is required</div>\n        </div> \n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\n      <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n      <!-- <label >Phone Number</label> --> \n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" minlength=\"10\" maxlength=\"10\" pattern=\"^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\d{3}\\s\\d{3}\\s\\d{3}\" required [(ngModel)]=\"newUser.phone\" name=\"phone\" #phone=\"ngModel\">\n        <div *ngIf=\"f.submitted && phone.invalid\">\n          <div *ngIf=\"phone.errors.minlength || phone.errors.maxlength\" class=\"help-block\">! Phone Number should be 10 digits</div>\n          <div *ngIf=\"phone.errors.required\" class=\"help-block\">! Phone Number is required</div>\n          <div *ngIf=\"phone.errors.pattern\" class=\"help-block\">! Valid Phone Number is required</div>\n        </div> \n      </div>\n     </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"> \n      \n      <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$\" required validateEqual=\"confirmPassword\" reverse=\"true\" [(ngModel)]=\"newUser.password\" name=\"password\" #password=\"ngModel\"> \n        <div *ngIf=\"f.submitted && password.invalid\">\n            <div *ngIf=\"password.errors.required\" class=\"help-block\">! Password is required</div>\n            <div *ngIf=\"password.errors.pattern\" class=\"help-block\">! Password contain atleast 6 characters and should contain one number,one character and one special character</div>\n        </div> \n        </div>\n    </div> \n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\n     \n      <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" required validateEqual=\"password\" placeholder=\"Confirm Password\" required validateEqual=\"password\" reverse=\"false\" [(ngModel)]=\"User.confirmPassword\" name=\"confirmPassword\" #confirmPassword=\"ngModel\"> \n        <div *ngIf=\"!confirmPassword.valid || (!confirmPassword.pristine && f.submitted)\" class=\"help-block\">! Password not Match</div>   \n        \n        </div>\n    </div> \n\n\n    <div class=\"form-group\">\n      <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n        <button type=\"submit\" class=\"btn btn-default\">Sign up</button>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n          <div class=\"checkbox\">\n            <label>\n              By creating an account, you agree to Auction's<a href=\"#myModal\" data-toggle=\"modal\" data-target=\"#myModal\">\n            Terms and Conditions\n            </a>\n          </label>\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"form-group\">\n        <div class=\"col-md-3 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2\">\n          \n            <label>Already have an account?  <a [routerLink]=\"['/login']\">\n            Sign In\n            </a>\n          </label>\n          \n        </div>\n    </div>\n\n</form>\n</div>\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\"> \n            Terms and Conditions</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h4>Conditions of Use</h4>\n          \n          <p>Welcome to Auction. Auction Services LLC and/or its affiliates (\"Auction\") provide website features and other products and services to you when you visit or bid at Auction.com, use Auction products or services, use Auction applications for mobile, or use software provided by Auction in connection with any of the foregoing (collectively, \"Auction Services\"). Auction provides the Auction Services subject to the following conditions.\n              <br>\n              <b>By using Auction Services, you agree to these conditions. Please read them carefully.</b>\n              <br>\n             When you using Auction, you also will be subject to the guidelines, terms and agreements applicable to that Auction Service (\"Service Terms\"). If these Conditions of Use are inconsistent with the Service Terms, those Service Terms will control.\n              <br>\n             <b> ELECTRONIC COMMUNICATIONS</b>\n              <br>\n              When you use Auction Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site or through the other Auction Services, such as our Message Center, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.\n              <br>\n              <b>COPYRIGHT</b>\n              <br>\n              All content included in or made available through any Auction Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of Auction or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any Auction Service is the exclusive property of Auction and protected by U.S. and international copyright laws.\n              <br>\n              <b>LICENSE AND ACCESS</b>\n              <br>\n              Subject to your compliance with these Conditions of Use and any Service Terms, and your payment of any applicable fees, Auction or its content providers grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Auction Services. This license does not include any resale or commercial use of any Auction Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any Auction Service or its contents; any downloading, copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction tools. All rights not expressly granted to you in these Conditions of Use or any Service Terms are reserved and retained by Auction or its licensors, suppliers, publishers, rightsholders, or other content providers. No Auction Service, nor any part of any Auction Service, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Auction. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Auction without express written consent. You may not use any meta tags or any other \"hidden text\" utilizing Auction's name or trademarks without the express written consent of Auction. You may not misuse the Auction Services. You may use the Auction Services only as permitted by law. The licenses granted by Auction terminate if you do not comply with these Conditions of Use or any Service Terms.\n              </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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


var RegistrationComponent = (function () {
    function RegistrationComponent(userService, routes) {
        this.userService = userService;
        this.routes = routes;
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
            if (data) {
                alert("Account created successfully, Please verify your Email address");
                _this.routes.navigate(['/login']);
                console.log("successfull created user");
            }
            else {
                alert("Error");
                console.log("error created user");
            }
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:20px;\">\r\n    <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n        <div *ngFor=\"let product of products\"  class=\"item  col-xs-4 col-lg-4\">\r\n            <div class=\"thumbnail\">\r\n                \r\n                <img class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n                <div class=\"caption\">\r\n                    <h4 class=\"group inner list-group-item-heading text-center\">\r\n                        {{product.name}}</h4>\r\n                        <hr>\r\n                        <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                        <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                      </p>\r\n                    <hr>\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            Bid Start Price\r\n                            <p class=\"lead\"> {{product.bid_amount | number:'1.2-2'}}</p>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                          Ends In\r\n                            <p class=\"lead\">\r\n                              <!-- {{product.end_date | date: 'dd-mm-yyyy h:mm:ss'}} -->\r\n                              <app-count-down-timer [inputDate]=\"product.end_date\"></app-count-down-timer>\r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date | date: 'MMMM dd, yyyy h:mm:ss'\"></app-count-down-timer> -->\r\n\r\n                             \r\n                              \r\n                              <!-- <app-count-down-timer inputDate=\"product.end_date\"></app-count-down-timer> -->\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row margn\" >\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12 text-center\">\r\n                           <a href=\"#\" (click)=\"updateInvolved(product)\" data-target=\"#myModal\" data-toggle=\"modal\" > Users Involved - {{product.bidders.length}}</a>\r\n                           \r\n                        </div>\r\n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n                            <div class=\"modal-dialog\">\r\n                          \r\n                              <!-- Modal content-->\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                  <h4 class=\"modal-title\">User Involved - {{involvedUsers.length}}</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <table class=\"table\">\r\n                                        <thead class=\"thead-inverse\">\r\n                                    <tr>\r\n                                      <th>Slno</th>\r\n                                      <th>Name</th>\r\n                                      <th>Bid Amount</th>\r\n                                      <th>Time</th>\r\n                                      <th>Status</th>\r\n                                    \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody *ngIf=\"involvedUsers.length ==0\">\r\n                                      <tr >\r\n                                            <td colspan=\"4\" class=\"text-center\">No User Involved</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  <tbody *ngIf=\"involvedUsers.length > 0\" >\r\n                                \r\n                                      <tr  *ngFor=\"let usr of involvedUsers;let i = index\" >\r\n                                            <td >{{i+1}}</td>\r\n                                            <td >{{product.user_details[i].name}}</td>\r\n                                            <td >{{usr.amount | number:'1.2-2'}}</td>\r\n                                            <td >{{usr.date_time | date: 'dd-MM-yyyy h:mm a'}}</td>\r\n                                            <td >{{usr.bid_status}}</td>\r\n                                      </tr>\r\n                                  </tbody>\r\n                                  </table>\r\n                                \r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                </div>\r\n                              </div>\r\n                          \r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        \r\n                        <div class=\"col-xs-12 col-md-12\">\r\n                            <div *ngIf=\"product.bidders.length > 0\" class=\"alert alert-success text-center margn\">\r\n                                <strong>Last Bid Amount - {{product.lastBidprice | number:'1.2-2'}}</strong>\r\n                                 <br>\r\n                                 {{product.lastBiduser}} \r\n                                 <br> {{product.lastBidTime | date: 'dd-MM-yyyy h:mm a'}}\r\n                      \r\n                        </div>\r\n                        <div *ngIf=\"product.bidders.length == 0\" class=\"alert alert-danger text-center \">\r\n                           No bidder Found\r\n                          </div>\r\n               \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n</div>\r\n<div *ngIf=\"products?.length == 0\" class=\"row list-group\">\r\n    <h3 class=\"text-center\"> No Product Found</h3>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/running-auction-back/running-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
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
    function RunningAuctionBackComponent(productService) {
        this.productService = productService;
        this.involvedUsers = [];
    }
    RunningAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllrunningProduct().subscribe(function (data) {
            data.forEach(function (item, index) {
                var lastBidprice = item.bid_amount;
                var lastBiduser = '';
                var lastBidTime = '';
                item.bidders.forEach(function (user, i) {
                    if (user.amount >= lastBidprice) {
                        lastBidprice = user.amount;
                        lastBiduser = item.user_details[i].name;
                        lastBidTime = user.date_time;
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
    RunningAuctionBackComponent.prototype.updateInvolved = function (product) {
        this.involvedUsers = product.bidders;
        console.log(this.involvedUsers);
    };
    return RunningAuctionBackComponent;
}());
RunningAuctionBackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-running-auction-back',
        template: __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], RunningAuctionBackComponent);

var _a;
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

module.exports = "<div class=\"container\" id=\"c-auction\">\r\n    <h4 class=\"page-head mrgn-nav-top\">Running Auctions</h4>\r\n    <app-card-running></app-card-running>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/runningauction/runningauction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningauctionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function RunningauctionComponent() {
    }
    RunningauctionComponent.prototype.ngOnInit = function () {
    };
    return RunningauctionComponent;
}());
RunningauctionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-runningauction',
        template: __webpack_require__("../../../../../src/app/runningauction/runningauction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/runningauction/runningauction.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RunningauctionComponent);

//# sourceMappingURL=runningauction.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
        this.url = "http://localhost:3000/";
    }
    ProductService.prototype.getAllClosedProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'products/closed_products', { headers: headers })
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
        return this.http.get(this.url + 'products/upcoming_products', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    }
    UserService.prototype.registerUser = function (user) {
        // console.log(JSON.stringify(user));
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this._regUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.verifyUser = function (verif_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
<<<<<<< HEAD
<<<<<<< HEAD
        return this.http.put(this._verifyUrl + verif_id, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.sendmail = function () {
        // console.log("hi");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + 'user/getemail', { headers: headers })
            .map(function (res) { return res.json(); });
    };
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
        console.log(this._verifyUrl + verif_id);
        return this.http.put(this._verifyUrl + verif_id, options)
            .map(function (response) { return response.json(); });
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
<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\r\n    <a class=\"nav-link\" routerLink=\"/\">\r\n      <i class=\"fa fa-fw fa-dashboard\"></i>\r\n      <span class=\"nav-link-text\">Dashboard</span>\r\n    </a>\r\n  </li>\r\n \r\n  \r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Components\">\r\n    <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseComponents\" data-parent=\"#exampleAccordion\">\r\n      <i class=\"fa fa-users\"></i>\r\n      <span class=\"nav-link-text\">Users Management</span>\r\n    </a>\r\n    <ul class=\"sidenav-second-level collapse\" id=\"collapseComponents\">\r\n      <li>\r\n        <a routerLink=\"/AllUsers\">All Users</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/DisabledUsers\">Disabled Users</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/DeletedUser\">Deleted Users</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Example Pages\">\r\n    <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseExamplePages\" data-parent=\"#exampleAccordion\">\r\n      <i class=\"fa fa-product-hunt\"></i>\r\n      <span class=\"nav-link-text\">Product Management</span>\r\n    </a>\r\n    <ul class=\"sidenav-second-level collapse\" id=\"collapseExamplePages\">\r\n      <li>\r\n        <a routerLink=\"/allusers\">Add Product</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/allusers\">Manage Product</a>\r\n      </li>\r\n      \r\n      \r\n    </ul>\r\n  </li>\r\n  <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Menu Levels\">\r\n    <a class=\"nav-link nav-link-collapse collapsed\" data-toggle=\"collapse\" href=\"#collapseMulti\" data-parent=\"#exampleAccordion\">\r\n      <i class=\"fa fa-snowflake-o\"></i>\r\n      <span class=\"nav-link-text\">Auction</span>\r\n    </a>\r\n    <ul class=\"sidenav-second-level collapse\" id=\"collapseMulti\">\r\n      <li>\r\n        <a href=\"#\">Running Auction</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Upcoming Auction</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Closed Auction</a>\r\n      </li>\r\n     \r\n    </ul>\r\n  </li>\r\n \r\n</ul>\r\n<!--<ul class=\"navbar-nav sidenav-toggler\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link text-center\" id=\"sidenavToggler\">\r\n      <i class=\"fa fa-fw fa-angle-left\"></i>\r\n    </a>\r\n  </li>\r\n</ul>-->"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialmediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'socialmedia',
        template: __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _c || Object])
], SocialmediaComponent);

var _a, _b, _c;
//# sourceMappingURL=socialmedia.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-nav .dropdown-menu{left:inherit !important;right:0;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\r\n <img src=\"./assets/image/jk.png\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">AUCTION</a>\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n   \r\n\r\n    <app-side-bar></app-side-bar>\r\n\r\n\r\n    \r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <!--<li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"messagesDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-fw fa-envelope\"></i>\r\n          <span class=\"d-lg-none\">Messages\r\n            <span class=\"badge badge-pill badge-primary\">12 New</span>\r\n          </span>\r\n          <span class=\"indicator text-primary d-none d-lg-block\">\r\n            <i class=\"fa fa-fw fa-circle\"></i>\r\n          </span>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"messagesDropdown\">\r\n          <h6 class=\"dropdown-header\">New Messages:</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <strong>David Miller</strong>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <strong>Jane Smith</strong>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <strong>John Doe</strong>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item small\" href=\"#\">View all messages</a>\r\n        </div>\r\n      </li>-->\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"alertsDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-fw fa-bell\"></i>\r\n          <span class=\"d-lg-none\">Alerts\r\n            <span class=\"badge badge-pill badge-warning\">6 New</span>\r\n          </span>\r\n          <span class=\"indicator text-warning d-none d-lg-block\">\r\n            <i class=\"fa fa-fw fa-circle\"></i>\r\n          </span>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"alertsDropdown\">\r\n          <h6 class=\"dropdown-header\">New Alerts:</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <span class=\"text-success\">\r\n              <strong>\r\n                <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\r\n            </span>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <span class=\"text-danger\">\r\n              <strong>\r\n                <i class=\"fa fa-long-arrow-down fa-fw\"></i>Status Update</strong>\r\n            </span>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <span class=\"text-success\">\r\n              <strong>\r\n                <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\r\n            </span>\r\n            <span class=\"small float-right text-muted\">11:21 AM</span>\r\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item small\" href=\"#\">View all alerts</a>\r\n        </div>\r\n      </li>\r\n      <!--<li class=\"nav-item\">\r\n        <form class=\"form-inline my-2 my-lg-0 mr-lg-2\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-primary\" type=\"button\">\r\n                <i class=\"fa fa-search\"></i>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </form>\r\n      </li>-->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n          <i class=\"fa fa-fw fa-sign-out\"></i>Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__("../../../../../src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-bar/top-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopBarComponent);

//# sourceMappingURL=top-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:20px;\">\r\n    \r\n      <div *ngIf=\"products?.length > 0\" id=\"products\" class=\"row list-group\">\r\n          <div  *ngFor=\"let product of products;let i = index;\" class=\"item  col-xs-4 col-lg-4\">\r\n              <div class=\"thumbnail\">\r\n                  \r\n                  <!-- <img class=\"group list-group-image\" src=\"http://placehold.it/400x250/ccc/fff\" alt=\"\" /> -->\r\n                  <img  class=\"group list-group-image\" src=\"assets/uploads/{{product.image||'default.png'}}\" alt=\"{{product.name}}\" />\r\n             \r\n                  <div class=\"caption\">\r\n                      <h4 class=\"group inner list-group-item-heading text-center\">\r\n                          {{product.name}}</h4>\r\n                          <hr>\r\n                          <p class=\"group inner list-group-item-text\" style=\"min-height: 50px;\">\r\n                          <read-more [text]=\"product.desc\" [maxLength]=\"100\"></read-more>\r\n                        </p>\r\n                      <hr>\r\n            \r\n                      <div class=\"row text-center\">\r\n                          <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid Start On<br>\r\n                              <b>\r\n                                {{product.start_date | date: 'dd-MM-yyyy'}}\r\n                                <br>\r\n                                {{product.start_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                           <div class=\"col-xs-12 col-md-4 col-md-offset-1\">\r\n                              Bid End On<br>\r\n                              <b>\r\n                                  {{product.end_date | date: 'dd-MM-yyyy'}}\r\n                                  <br>\r\n                                  {{product.end_date | date : 'mediumTime'}}\r\n                              </b>\r\n                          </div>\r\n                      </div>\r\n                      <hr>\r\n                      <div class=\"row \">\r\n                          \r\n                          <div class=\"col-xs-12 col-md-12\">\r\n                              <div  class=\"alert alert-success text-center \">\r\n                                <div >\r\n                                <strong>Bid Start Price - {{product.bid_amount | number:'1.2-2'}}</strong>\r\n                                </div>\r\n                            </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    \r\n      </div>\r\n    </div>\r\n      <div *ngIf=\"products?.length == 0\" id=\"products\" class=\"row list-group\">\r\n       <h3 class=\"text-center\"> No Product Found</h3>\r\n      </div>\r\n      </div>\r\n          \r\n         "

/***/ }),

/***/ "../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingAuctionBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpcomingAuctionBackComponent = (function () {
    function UpcomingAuctionBackComponent(productService) {
        this.productService = productService;
    }
    UpcomingAuctionBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllUpcomingProduct().subscribe(function (data) {
            console.log(data);
            _this.products = data;
            // if(data.bidders.length >0){
            //    // data.bidders[data.bidders.length-1]
            // }
        });
    };
    return UpcomingAuctionBackComponent;
}());
UpcomingAuctionBackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upcoming-auction-back',
        template: __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], UpcomingAuctionBackComponent);

var _a;
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

module.exports = "<div class=\"container\">\r\n    <div id=\"u-auction\" class=\"auction-section\">\r\n        <h4 class=\"page-head\">Upcoming Auctions</h4>\r\n        <div *ngIf=\"existStatus; else noProduct\">\r\n            <div *ngFor=\"let item of products\">\r\n                <!-- {{item}} -->\r\n                <app-card [item]=\"item\"></app-card>\r\n            </div>\r\n        </div>\r\n       \r\n        <ng-template #noProduct>\r\n            <div class=\"no-item\">\r\n                <h4>Sorrry! No items to display!</h4>\r\n            </div>\r\n        </ng-template>\r\n      \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/upcomingauctions/upcomingauctions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingauctionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service_service__ = __webpack_require__("../../../../../src/app/product-service.service.ts");
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
    function UpcomingauctionsComponent(_productService) {
        this._productService = _productService;
        this.existStatus = false;
    }
    UpcomingauctionsComponent.prototype.ngOnInit = function () {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upcomingauctions',
        template: __webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upcomingauctions/upcomingauctions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service_service__["a" /* ProductServiceService */]) === "function" && _a || Object])
], UpcomingauctionsComponent);

var _a;
//# sourceMappingURL=upcomingauctions.component.js.map

/***/ }),

<<<<<<< HEAD
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
=======
>>>>>>> 97571871f429a69376c69a38fcd9bca2650b3b24
/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map