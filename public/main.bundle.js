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

module.exports = "\r\n  <!-- Navigation-->\r\n  <!-- <app-top-bar></app-top-bar> -->\r\n  <!-- <div class=\"content-wrapper\">\r\n    <div class=\"container-fluid\"> -->\r\n      <!-- Breadcrumbs-->\r\n     \r\n      \r\n         <router-outlet></router-outlet>\r\n       \r\n    <!-- </div> -->\r\n\r\n\r\n"

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
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__equal_validator_directive__ = __webpack_require__("../../../../../src/app/equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_verification_email_verification_component__ = __webpack_require__("../../../../../src/app/email-verification/email-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__closed_auction_back_closed_auction_back_component__ = __webpack_require__("../../../../../src/app/closed-auction-back/closed-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__upcoming_auction_back_upcoming_auction_back_component__ = __webpack_require__("../../../../../src/app/upcoming-auction-back/upcoming-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__running_auction_back_running_auction_back_component__ = __webpack_require__("../../../../../src/app/running-auction-back/running-auction-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__socialmedia_socialmedia_component__ = __webpack_require__("../../../../../src/app/socialmedia/socialmedia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    // {path:'', redirectTo:'/login', pathMatch:'full'},
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'email-verification/:id', component: __WEBPACK_IMPORTED_MODULE_12__email_verification_email_verification_component__["a" /* EmailVerificationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'closed-auction', component: __WEBPACK_IMPORTED_MODULE_13__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */] },
    { path: 'upcoming-auction', component: __WEBPACK_IMPORTED_MODULE_14__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */] },
    { path: 'socialmedia/:id', component: __WEBPACK_IMPORTED_MODULE_16__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__closed_auction_back_closed_auction_back_component__["a" /* ClosedAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_14__upcoming_auction_back_upcoming_auction_back_component__["a" /* UpcomingAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_15__running_auction_back_running_auction_back_component__["a" /* RunningAuctionBackComponent */],
            __WEBPACK_IMPORTED_MODULE_16__socialmedia_socialmedia_component__["a" /* SocialmediaComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/closed-auction-back/closed-auction-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.margn{\r\n    margin-bottom: 15px;\r\n}\r\nhr {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n.list-group-item-text{\r\n    text-align: justify;\r\n}\r\n.alert {\r\n    margin-bottom: 8px;\r\n    padding: 5px;\r\n}\r\n.lead {\r\n    margin-bottom: 10px;\r\n}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

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
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userService.generateToken(params.id).subscribe(function (data) {
                if (data == true) {
                    alert("Success, Redirecting ...");
                    _this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

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
                    _this.routes.navigate(['/registration']);
                }
                if (data.user.role == "admin") {
                    _this.routes.navigate(['/registration']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
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
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
                        _this.router.navigate(['/registration']);
                    }
                    if (data.user.role == "admin") {
                        _this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SocialmediaComponent);

var _a, _b, _c;
//# sourceMappingURL=socialmedia.component.js.map

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