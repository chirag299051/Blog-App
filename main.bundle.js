webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background-color: #04192E;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <div class=\"container\">\n     <div class=\"row header\">\n       <div class=\"col-md-12\">\n         <a style=\"color:white;\" [routerLink]=\"['/']\">{{title}}</a>\n       </div>\n     </div>\n     <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          \n        </div>\n    \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <li><a [routerLink]=\"['/about']\">About</a></li>\n            <li><a [routerLink]=\"['/create']\">Post a Blog</a></li>\n            \n          </ul>\n        \n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n      \n  </div>\n  \n  <br/>\n <router-outlet></router-outlet>\n \n \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_view_blog_view_component__ = __webpack_require__("./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_create_blog_create_component__ = __webpack_require__("./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_edit_blog_edit_component__ = __webpack_require__("./src/app/blog-edit/blog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blog_http_service__ = __webpack_require__("./src/app/blog-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__blog_view_blog_view_component__["a" /* BlogViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blog_create_blog_create_component__["a" /* BlogCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__blog_edit_blog_edit_component__["a" /* BlogEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */] },
                    { path: 'blog/:blogId', component: __WEBPACK_IMPORTED_MODULE_8__blog_view_blog_view_component__["a" /* BlogViewComponent */] },
                    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_9__blog_create_blog_create_component__["a" /* BlogCreateComponent */] },
                    { path: 'edit/:blogId', component: __WEBPACK_IMPORTED_MODULE_10__blog_edit_blog_edit_component__["a" /* BlogEditComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_13__blog_http_service__["a" /* BlogHttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-create/blog-create.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n\n        <div class=\"form-group\">\n\n\n          <label>Blog Title</label>\n          <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n            required>\n\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n         Blog Title is required \n        </div>\n\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Enter the blog body</label>\n          <textarea name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select [(ngModel)]=\"blogCategory\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n              </select>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Post the blog</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_http_service__ = __webpack_require__("./src/app/blog-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(blogHttpService, _route, router, toastr, vcr) {
        this.blogHttpService = blogHttpService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
        this.toastr.setRootViewContainerRef(vcr);
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.createBlog = function () {
        var _this = this;
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyHtml,
            category: this.blogCategory
        };
        console.log(blogData);
        this.blogHttpService.createBlog(blogData).subscribe(function (data) {
            console.log("Blog Created");
            console.log(data);
            _this.toastr.success('Blog Posted successfully', 'Success');
            setTimeout(function () {
                _this.router.navigate(['/blog', data.data.blogId]);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            _this.toastr.error('Some error occured', 'Error');
        });
    }; // end create blog me
    BlogCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__("./src/app/blog-create/blog-create.component.html"),
            styles: [__webpack_require__("./src/app/blog-create/blog-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_http_service__["a" /* BlogHttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentBlog\">\n  <h3>Edit this blog</h3>\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"editThisBlog()\">\n\n        <div class=\"form-group\">\n\n\n          <label>Blog Title</label>\n          <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n            required>\n\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n         Blog Title is required \n        </div>\n\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Enter the blog body</label>\n          <textarea name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select [(ngModel)]=\"currentBlog.category\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n              </select>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Edit the blog</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_http_service__ = __webpack_require__("./src/app/blog-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(_route, router, blogService, blogHttpService, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.blogService = blogService;
        this.blogHttpService = blogHttpService;
        this.location = location;
        this.toastr = toastr;
        this.possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
        this.toastr.setRootViewContainerRef(vcr);
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        //this.currentBlog = this.blogService.getSingleBlog(myBlogId);
        this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data["data"];
            console.log("current blog is");
            console.log(_this.currentBlog);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BlogEditComponent.prototype.editThisBlog = function () {
        var _this = this;
        this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Blog edited successfully', 'Success!');
            setTimeout(function () {
                _this.router.navigate(['/blog', _this.currentBlog.blogId]);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            _this.toastr.error('Some error occured', 'Error');
        });
    }; // end delete this blog 
    BlogEditComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BlogEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__("./src/app/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__("./src/app/blog-edit/blog-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_3__blog_http_service__["a" /* BlogHttpService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
        this.authToken = 'OWMyNDIwODhjMTUyNDJjZmVmNTFjNDljZjdjZTUwZmM3OGJhOTU5YTk1YjdiN2Y3YjU1NDg1NWY1MGU2MjlmNjU4YWZjYTRiZTM1ZmUyYWFlNDQwNzcwODFjZmY3MzA4NGM5Y2JiMzFlNmViYTkwOThhOWRjZTI3MDFmMTk3MGY0Yw==';
        console.log('blog-http service was called');
    }
    BlogHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    BlogHttpService.prototype.getAllBlogs = function () {
        var myResponse = this._http.get(this.baseUrl + '/all?authToken=OWMyNDIwODhjMTUyNDJjZmVmNTFjNDljZjdjZTUwZmM3OGJhOTU5YTk1YjdiN2Y3YjU1NDg1NWY1MGU2MjlmNjU4YWZjYTRiZTM1ZmUyYWFlNDQwNzcwODFjZmY3MzA4NGM5Y2JiMzFlNmViYTkwOThhOWRjZTI3MDFmMTk3MGY0Yw==');
        console.log(myResponse);
        return myResponse;
    };
    BlogHttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        var myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
        return myResponse;
    };
    BlogHttpService.prototype.createBlog = function (blogData) {
        var myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
        return myResponse;
    }; // end create blog
    BlogHttpService.prototype.deleteBlog = function (blogId) {
        var data = {};
        var myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
        return myResponse;
    }; // end delete blog
    BlogHttpService.prototype.editBlog = function (blogId, blogData) {
        var myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
        return myResponse;
    }; // end delete blog
    BlogHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BlogHttpService);
    return BlogHttpService;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-12\">\n      <h2>{{currentBlog.title}}</h2>\n      <!-- <small>blog number - {{currentBlog.blogId}}</small> -->\n      <p>posted by {{currentBlog.author}} on {{currentBlog.created | date}}</p>\n      <p *ngIf=\"currentBlog.tags.length>0\">tags : <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last ? '' : ', '}}</span></p>\n      <hr>\n      <div [innerHtml]=\"currentBlog.bodyHtml\"></div>\n      <hr>\n      <h5>category - {{currentBlog.category}}</h5>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-primary\"  [routerLink]=\"['/edit',currentBlog.blogId]\">Edit </a>\n\n    </div>\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-danger\" (click)=\"deleteThisBlog()\">Delete </a>\n\n    </div>\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_http_service__ = __webpack_require__("./src/app/blog-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(_route, router, blogHttpService, toastr, vcr, location) {
        this._route = _route;
        this.router = router;
        this.blogHttpService = blogHttpService;
        this.toastr = toastr;
        this.location = location;
        console.log("constructor is called");
        this.toastr.setRootViewContainerRef(vcr);
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit called");
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BlogViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Blog Deleted successfully', 'Success!');
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
            _this.toastr.error('Some error occured', 'Error');
        });
    }; // end delete this blog 
    BlogViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BlogViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__("./src/app/blog-view/blog-view.component.html"),
            styles: [__webpack_require__("./src/app/blog-view/blog-view.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__blog_http_service__["a" /* BlogHttpService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogService = /** @class */ (function () {
    function BlogService() {
        this.allBlogs = [
            {
                "blogId": "1",
                "lastModified": "2017-10-20T12:20:47.854Z",
                "created": "2017-10-20T12:20:47.854Z",
                "tags": [],
                "author": "Admin",
                "category": "Comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "this is blog body ",
                "description": "this is blog 1 description",
                "title": "This is blog 1"
            },
            {
                "blogId": "2",
                "lastModified": "2017-10-21T21:47:51.678Z",
                "created": "2017-10-21T21:47:51.678Z",
                "tags": [],
                "author": "Admin",
                "category": "Comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "<h1>This is big text </h1> <p>Small text</p>",
                "description": "This is the description of the example blog and this is edited",
                "title": "This is an example blog"
            },
            {
                "blogId": "3",
                "lastModified": "2017-11-14T14:15:54.407Z",
                "created": "2017-11-14T14:15:54.407Z",
                "tags": [],
                "author": "Admin",
                "category": "Comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. this is the blog body. ",
                "description": "this is the third blog description",
                "title": "this is the third blog"
            }
        ];
        console.log("service constructor is called");
    }
    BlogService.prototype.getAllBlogs = function () {
        return this.allBlogs;
    };
    BlogService.prototype.getSingleBlogInformation = function (currentBlogId) {
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.blogId == currentBlogId) {
                this.currentBlog = blog;
            }
        }
        return this.currentBlog;
    };
    BlogService.prototype.newMethod = function () {
        console.log(this.currentBlog);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\r\n    <div class=\"row\" style=\"text-align:center\">\r\n      <div class=\"col-md-12\" style=\"font-size:22px\">All Blogs </div>\r\n      <br><br><br><br>\r\n    </div>\r\n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBlogs.length>0\">\r\n      <div *ngFor=\"let blog of allBlogs\" class=\"col-md-4\">\r\n  \r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">{{blog.title | uppercase}}</div>\r\n          <div class=\"panel-body\">\r\n           \r\n              <p>{{blog.description}}</p>\r\n          </div>\r\n          <div class=\"panel-footer\">Posted on {{blog.created | date}}<br/> by {{blog.author}}\r\n          <br/><br/><a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">Read</a>\r\n          \r\n          </div>\r\n          \r\n        </div>\r\n  \r\n        <br/>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_http_service__ = __webpack_require__("./src/app/blog-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogHttpService) {
        this.blogHttpService = blogHttpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.allBlogs = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_http_service__["a" /* BlogHttpService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map