function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./client/app/app-routing.module.ts":
  /*!******************************************!*\
    !*** ./client/app/app-routing.module.ts ***!
    \******************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function clientAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");

    var routes = [{
      path: 'oringgland',
      data: {
        calculatorGroup: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorGroup"].ORingNGlandCalcs
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | oring-and-gland-calc-oring-and-gland-calc-module */
        [__webpack_require__.e("default~ar-wr-calc-ar-wr-calc-module~oring-and-gland-calc-oring-and-gland-calc-module"), __webpack_require__.e("oring-and-gland-calc-oring-and-gland-calc-module")]).then(__webpack_require__.bind(null,
        /*! ./oring-and-gland-calc/oring-and-gland-calc.module */
        "./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts")).then(function (m) {
          return m.ORingAndGlandCalcModule;
        });
      }
    }, {
      path: 'wrar',
      data: {
        calculatorGroup: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorGroup"].WrArCalcs
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | ar-wr-calc-ar-wr-calc-module */
        [__webpack_require__.e("default~ar-wr-calc-ar-wr-calc-module~oring-and-gland-calc-oring-and-gland-calc-module"), __webpack_require__.e("ar-wr-calc-ar-wr-calc-module")]).then(__webpack_require__.bind(null,
        /*! ./ar-wr-calc/ar-wr-calc.module */
        "./client/app/ar-wr-calc/ar-wr-calc.module.ts")).then(function (m) {
          return m.ArWrCalcModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'oringgland/evaluateglandsizecalculatorsglands/createRectangleGland',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/app.component.ts":
  /*!*************************************!*\
    !*** ./client/app/app.component.ts ***!
    \*************************************/

  /*! exports provided: AppComponent */

  /***/
  function clientAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./client/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/services/material-choice.service */
    "./client/app/shared/services/material-choice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./client/app/footer/footer.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/components/toasts-container/toasts-container.component */
    "./client/app/shared/components/toasts-container/toasts-container.component.ts"); // core imports
    // third party imports
    // application imports


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(titleService, authService, materialChoiceService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        this.authService = authService;
        this.materialChoiceService = materialChoiceService;
        this.title = '';
        this.setTitle();
        this.authDataSubscription = this.authService.authData.subscribe(function (x) {
          return _this.authData = x;
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setAuth(); // get material choice

          this.getMaterialChoice();
        } // set browser title

      }, {
        key: "setTitle",
        value: function setTitle() {
          this.titleService.setTitle(_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.app.title);
        } // method to get authentication token and store it into cookies

      }, {
        key: "setAuth",
        value: function setAuth() {
          this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (r) {
            return r;
          });
        } // get material choice

      }, {
        key: "getMaterialChoice",
        value: function getMaterialChoice() {
          var _this2 = this;

          this.materialChoiceService.getMaterialChoice().subscribe(function (resp) {
            _this2.materialChoiceService.sendMaterialChoiceList(resp);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.authDataSubscription) {
            this.authDataSubscription.unsubscribe();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__["MaterialChoiceService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "square-jelly-box", 3, "fullScreen"], [2, "color", "white"], ["aria-live", "polite", "aria-atomic", "true"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-toasts-container", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_9__["ToastsContainerComponent"]],
      styles: ["/* bootstrap  */\r\n\r\n.content {\r\n    margin: 25px 0 20px;\r\n}\r\n\r\n.errorMessage {\r\n    color: red;\r\n}\r\n\r\n.sms-section {\r\n    /* border: 1px solid #d2d2d2; */\r\n    background: #f9f9f9;\r\n    margin-top: 10px;\r\n}\r\n\r\n.pl-1-perc {\r\n    padding-left: 1%;\r\n}\r\n\r\n.pr-1-right {\r\n    padding-right: 1%;\r\n}\r\n\r\n.pl-1-row-left > .row {\r\n    padding-left: 1%;\r\n}\r\n\r\n.pr-1-row-right > .row {\r\n    padding-right: 1%;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib290c3RyYXAgICovXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDI1cHggMCAyMHB4O1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbiB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyOyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wbC0xLXBlcmMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxufVxyXG5cclxuLnByLTEtcmlnaHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcbn1cclxuXHJcbi5wbC0xLXJvdy1sZWZ0ID4gLnJvdyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcblxyXG4ucHItMS1yb3ctcmlnaHQgPiAucm93IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__["MaterialChoiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/app.config.service.ts":
  /*!******************************************!*\
    !*** ./client/app/app.config.service.ts ***!
    \******************************************/

  /*! exports provided: AppConfig */

  /***/
  function clientAppAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
      return AppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppConfig = /*#__PURE__*/function () {
      function AppConfig(handler) {
        _classCallCheck(this, AppConfig);

        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler);
      }

      _createClass(AppConfig, [{
        key: "load",
        value: function load() {
          var _this3 = this;

          // let jsonFile = `assets/config/config.${environment.name}.json`;
          // if (!environment.name || (environment.name && environment.name.toLowerCase() === 'dev')) {
          var jsonFile = "assets/config/config.json"; // }

          return new Promise(function (resolve, reject) {
            _this3.httpClient.get(jsonFile).toPromise().then(function (response) {
              AppConfig.settings = response;
              resolve();
            })["catch"](function (response) {
              reject("Could not load file '".concat(jsonFile, "': ").concat(JSON.stringify(response)));
            });
          });
        }
      }]);

      return AppConfig;
    }();

    AppConfig.ɵfac = function AppConfig_Factory(t) {
      return new (t || AppConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]));
    };

    AppConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfig,
      factory: AppConfig.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/app.module.ts":
  /*!**********************************!*\
    !*** ./client/app/app.module.ts ***!
    \**********************************/

  /*! exports provided: initializeApp, AppModule */

  /***/
  function clientAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeApp", function () {
      return initializeApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./client/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./client/app/app.component.ts");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./helpers/interceptors/error.interceptor */
    "./client/app/helpers/interceptors/error.interceptor.ts");
    /* harmony import */


    var _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./helpers/interceptors/jwt.interceptor */
    "./client/app/helpers/interceptors/jwt.interceptor.ts");
    /* harmony import */


    var _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./helpers/interceptors/spinner.interceptor */
    "./client/app/helpers/interceptors/spinner.interceptor.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./client/app/footer/footer.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./client/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/services/global-error-handler */
    "./client/app/shared/services/global-error-handler.ts"); // core imports
    // third party imports
    // application imports


    function initializeApp(appConfig) {
      return function () {
        return appConfig.load();
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: initializeApp,
        deps: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"]],
        multi: true
      }, // processes all errors
      {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        useClass: _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__["GlobalErrorHandler"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__["SpinnerInterceptor"],
        multi: true
      }, // interceptor for HTTP errors
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]],
          providers: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: initializeApp,
            deps: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"]],
            multi: true
          }, // processes all errors
          {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__["GlobalErrorHandler"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__["SpinnerInterceptor"],
            multi: true
          }, // interceptor for HTTP errors
          {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
            multi: true
          }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/footer/footer.component.ts":
  /*!***********************************************!*\
    !*** ./client/app/footer/footer.component.ts ***!
    \***********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function clientAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 1,
      consts: [[1, "footer"], [1, "footer-top"], [1, "container"], [1, "container", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disclaimer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The information provided in this tool is solely for vacuum and low pressure applications within semiconductor manufacturing and processing applications, and may not function in any other application. The tool will be revised as new or modified information becomes available. The data reflects material properties and specifications gathered by Greene, Tweed at their expense, but may not represent actual situational conditions found in a particular application. Data provided is for general guidance in choosing an appropriate product. Testing should be done to confirm suitability to the specific purpose and more information can be had by contacting Greene, Tweed Semiconductor Engineering. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Greene, Tweed cannot include all actual end use conditions applied to the products in its internal testing and assumes no liability and makes no warranties based upon information garnered from the tool. Use of the tool is done so by the consumer at their own risk. Greene, Tweed retains all intellectual property rights associated with the tool and products. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chemraz&reg is a registered Trademark of Greene, Tweed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", ctx.currentYear, " Greene, Tweed ");
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n    background: #CCC;\r\n    padding: 0 0 20px;\r\n    color: #777;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\r\n    background: #eaeaea;\r\n    margin-bottom: 20px;\r\n    margin-top: 50px;\r\n    padding: 20px 0 10px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n}\r\n\r\n.footer-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-family: 'open_sansbold', Helvetica, Arial, Verdana, Tahoma, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkVBQTJFO0FBQy9FIiwiZmlsZSI6ImNsaWVudC9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLXRvcCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmZvb3Rlci10b3AgcCBzdHJvbmcge1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNib2xkJywgSGVsdmV0aWNhLCBBcmlhbCwgVmVyZGFuYSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/helpers/interceptors/error.interceptor.ts":
  /*!**************************************************************!*\
    !*** ./client/app/helpers/interceptors/error.interceptor.ts ***!
    \**************************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function clientAppHelpersInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/Observable */
    "./node_modules/rxjs/internal/Observable.js");
    /* harmony import */


    var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/alert-modal/alert-modal.component */
    "./client/app/shared/components/alert-modal/alert-modal.component.ts");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"); // core imports
    // third party imports
    // application imports


    var ErrorInterceptor = /*#__PURE__*/function () {
      // private isRefreshing = false;
      // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
      function ErrorInterceptor(modalService, spinner) {
        _classCallCheck(this, ErrorInterceptor);

        this.modalService = modalService;
        this.spinner = spinner;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this4 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              // auto logout if 401 response returned from api
              _this4.handle401Error();

              return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
            } else {
              return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
          }));
        } // http error 401 handler

      }, {
        key: "handle401Error",
        value: function handle401Error() {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5.spinner.hide(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__["HTTP_SPINNER"]);

            var options = {}; //     If true, the backdrop element will be created for a given modal.
            // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.

            options.backdrop = 'static'; // If true, the modal will be closed when Escape key is pressed

            options.keyboard = false;

            var modalRef = _this5.modalService.open(_shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__["AlertModalComponent"], options);

            modalRef.componentInstance.title = 'Alert!!';
            modalRef.componentInstance.message = 'Token expired, Please refresh the page.';
            modalRef.componentInstance.name = 'World';
          });
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/helpers/interceptors/jwt.interceptor.ts":
  /*!************************************************************!*\
    !*** ./client/app/helpers/interceptors/jwt.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function clientAppHelpersInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./client/app/shared/services/auth.service.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authService) {
        _classCallCheck(this, JwtInterceptor);

        this.authService = authService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to the api url
          var authObject = this.authService.currentAuthValue;
          var baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
          var isApiUrl = request.url.startsWith(baseUrl); // exclude assets config files
          // const isAssetsConfig = request.url.startsWith('assets/config/');

          if (authObject && authObject.token && isApiUrl) {
            // console.log('jwt interceptor');
            request = request.clone({
              setHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'Authorization': "Bearer ".concat(authObject.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/helpers/interceptors/spinner.interceptor.ts":
  /*!****************************************************************!*\
    !*** ./client/app/helpers/interceptors/spinner.interceptor.ts ***!
    \****************************************************************/

  /*! exports provided: SpinnerInterceptor */

  /***/
  function clientAppHelpersInterceptorsSpinnerInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function () {
      return SpinnerInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"); // core imports


    var SpinnerInterceptor = /*#__PURE__*/function () {
      function SpinnerInterceptor(spinner) {
        _classCallCheck(this, SpinnerInterceptor);

        this.spinner = spinner;
        this.count = 0;
      }

      _createClass(SpinnerInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this6 = this;

          this.spinner.show(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_SPINNER"]);
          this.count++;
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            return console.log(event);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this6.count--;

            if (_this6.count == 0) {
              _this6.spinner.hide(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_SPINNER"]);
            }

            ;
          }));
        }
      }]);

      return SpinnerInterceptor;
    }();

    SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) {
      return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]));
    };

    SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpinnerInterceptor,
      factory: SpinnerInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/models/auth.model.ts":
  /*!*****************************************!*\
    !*** ./client/app/models/auth.model.ts ***!
    \*****************************************/

  /*! exports provided: AuthModel */

  /***/
  function clientAppModelsAuthModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModel", function () {
      return AuthModel;
    });

    var AuthModel = function AuthModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AuthModel);

      this.token = options.token;
    };
    /***/

  },

  /***/
  "./client/app/models/dropdown-change.model.ts":
  /*!****************************************************!*\
    !*** ./client/app/models/dropdown-change.model.ts ***!
    \****************************************************/

  /*! exports provided: DropDownChangeModel */

  /***/
  function clientAppModelsDropdownChangeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownChangeModel", function () {
      return DropDownChangeModel;
    });

    var DropDownChangeModel = function DropDownChangeModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DropDownChangeModel);

      this.formControl = options.formControl;
      this.value = options.value;
    };
    /***/

  },

  /***/
  "./client/app/models/form-control.model.ts":
  /*!*************************************************!*\
    !*** ./client/app/models/form-control.model.ts ***!
    \*************************************************/

  /*! exports provided: FormControlModel */

  /***/
  function clientAppModelsFormControlModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlModel", function () {
      return FormControlModel;
    });

    var FormControlModel = function FormControlModel(options) {
      _classCallCheck(this, FormControlModel);

      this.show = true;
      this.required = false;
      this.isDisabled = false;
      this.form_control_id = options.form_control_id;
      this.order = options.order || 0;
      this.key = options.key;
      this.label = options.label;
      this.showLabel = options.showLabel;
      this.value = options.value;
      this.placeholder = options.placeholder;
      this.type = options.type;
      this.sub_type = options.sub_type;
      this.show = options.show;
      this.required = options.required;
      this.isDisabled = options.isDisabled || false;
      this.validation = options.validation;
      this.css_classes = options.css_classes;
      this.decimal_point = options.decimal_point || null;
    };
    /***/

  },

  /***/
  "./client/app/models/log.model.ts":
  /*!****************************************!*\
    !*** ./client/app/models/log.model.ts ***!
    \****************************************/

  /*! exports provided: LogModel */

  /***/
  function clientAppModelsLogModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogModel", function () {
      return LogModel;
    });

    var LogModel = function LogModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, LogModel);

      this.message = options.message;
      this.level = options.level;
    };
    /***/

  },

  /***/
  "./client/app/models/switch-button.model.ts":
  /*!**************************************************!*\
    !*** ./client/app/models/switch-button.model.ts ***!
    \**************************************************/

  /*! exports provided: SwitchButtonModel */

  /***/
  function clientAppModelsSwitchButtonModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchButtonModel", function () {
      return SwitchButtonModel;
    });

    var SwitchButtonModel = function SwitchButtonModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SwitchButtonModel);

      this.id = options.id;
      this.title = options.title;
      this.display_title = options.display_title;
      this.display_Short_title = options.display_Short_title;
      this.isActive = options.isActive ? options.isActive : false;
      this.actionType = options.actionType || 0;
    };
    /***/

  },

  /***/
  "./client/app/models/view-error.model.ts":
  /*!***********************************************!*\
    !*** ./client/app/models/view-error.model.ts ***!
    \***********************************************/

  /*! exports provided: ViewErrorModel */

  /***/
  function clientAppModelsViewErrorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewErrorModel", function () {
      return ViewErrorModel;
    });
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");

    var ViewErrorModel = function ViewErrorModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ViewErrorModel);

      this.field = options.field;
      this.title = options.title;
      this.isDetailOpened = options.isDetailOpened ? options.isDetailOpened : false;
      this.type = options.type || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Error;
      this.errors = options.errors || [];
    };
    /***/

  },

  /***/
  "./client/app/shared/components/alert-modal/alert-modal.component.ts":
  /*!***************************************************************************!*\
    !*** ./client/app/shared/components/alert-modal/alert-modal.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AlertModalComponent */

  /***/
  function clientAppSharedComponentsAlertModalAlertModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertModalComponent", function () {
      return AlertModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js"); // core imports


    var AlertModalComponent = /*#__PURE__*/function () {
      function AlertModalComponent(activeModal) {
        _classCallCheck(this, AlertModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(AlertModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertModalComponent;
    }();

    AlertModalComponent.ɵfac = function AlertModalComponent_Factory(t) {
      return new (t || AlertModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    AlertModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertModalComponent,
      selectors: [["ngb-alert-modal"]],
      inputs: {
        title: "title",
        message: "message"
      },
      decls: 12,
      vars: 2,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-describedby", "close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
      template: function AlertModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertModalComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertModalComponent_Template_button_click_10_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: [".modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]\r\n{\r\n    outline: none;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0LW1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIC5jbG9zZVxyXG57XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngb-alert-modal',
          templateUrl: './alert-modal.component.html',
          styleUrls: ['./alert-modal.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CalculatorToolbarComponent */

  /***/
  function clientAppSharedComponentsCalculatorToolbarCalculatorToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorToolbarComponent", function () {
      return CalculatorToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // core imports


    function CalculatorToolbarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_1_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onOptionClick($event, ctx_r5.options.Nominal);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nominal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.options.Nominal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.getFormControl())("name", ctx_r0.control.key)("id", ctx_r0.control.key + 1);
      }
    }

    function CalculatorToolbarComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_2_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onOptionClick($event, ctx_r7.options.WithTolerance);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " With Tolerance ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.options.WithTolerance);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.getFormControl())("name", ctx_r1.control.key)("id", ctx_r1.control.key + 2);
      }
    }

    function CalculatorToolbarComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_3_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onOptionClick($event, ctx_r9.options.WithMinMax);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Min and Max ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.options.WithMinMax);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.getFormControl())("name", ctx_r2.control.key)("id", ctx_r2.control.key + 3);
      }
    }

    function CalculatorToolbarComponent_input_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_input_5_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onCopy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CalculatorToolbarComponent_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_input_6_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onPaste();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "col-md-3": a0,
        "col-md-12": a1
      };
    };

    var CalculatorToolbarComponent = /*#__PURE__*/function () {
      function CalculatorToolbarComponent(calculatorToolbarService, helperService) {
        _classCallCheck(this, CalculatorToolbarComponent);

        this.calculatorToolbarService = calculatorToolbarService;
        this.helperService = helperService;
        this.isSubmitted = false;
        this.isShowOptions = false;
        this.isShowPasteBtn = false;
        this.isShowCopyBtn = false;
        this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.print = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.copy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["CalculatorOption"];
      }

      _createClass(CalculatorToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // convenience getter for easy access to form fields

      }, {
        key: "onConvertToPdf",
        value: function onConvertToPdf() {
          this.print.emit();
        }
      }, {
        key: "onResetField",
        value: function onResetField() {
          // this.form.reset();
          this.reset.emit();
        }
      }, {
        key: "onOptionClick",
        value: function onOptionClick(e, option) {
          this.optionChange.emit(option);
        } // return form control

      }, {
        key: "getFormControl",
        value: function getFormControl() {
          if (this.control && this.control.key) {
            return this.form.get(this.control.key);
          }
        }
      }, {
        key: "onPaste",
        value: function onPaste() {
          var calculatedData = this.helperService.getCalculatedStoredData(+this.calculatorConfig.id);

          if (calculatedData) {
            this.calculatorToolbarService.paste.emit(calculatedData);
          }
        }
      }, {
        key: "onCopy",
        value: function onCopy() {
          this.copy.emit();
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return CalculatorToolbarComponent;
    }();

    CalculatorToolbarComponent.ɵfac = function CalculatorToolbarComponent_Factory(t) {
      return new (t || CalculatorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorToolbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]));
    };

    CalculatorToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculatorToolbarComponent,
      selectors: [["calculator-toolbar"]],
      inputs: {
        control: "control",
        form: "form",
        isSubmitted: "isSubmitted",
        isShowOptions: "isShowOptions",
        isShowPasteBtn: "isShowPasteBtn",
        isShowCopyBtn: "isShowCopyBtn",
        calculatorConfig: "calculatorConfig"
      },
      outputs: {
        optionChange: "optionChange",
        reset: "reset",
        print: "print",
        paste: "paste",
        copy: "copy"
      },
      decls: 9,
      vars: 10,
      consts: [[1, "row", 3, "formGroup"], ["class", "sms-radio-wrapper col-md-3", 4, "ngIf"], [1, "sms-radio-wrapper", "text-right", 3, "ngClass"], ["class", "reset", "type", "button", "value", "Copy", "id", "copybtn", "title", "Copy", 3, "click", 4, "ngIf"], ["class", "reset", "type", "button", "value", "Paste", "id", "pastebtn", "title", "Paste", 3, "click", 4, "ngIf"], ["type", "button", "value", "Reset", "id", "resetbtn", "title", "Reset", 1, "reset", 3, "click"], ["type", "button", "value", "", "id", "printbtn", 1, "printbtn", 3, "click"], [1, "sms-radio-wrapper", "col-md-3"], ["type", "radio", "name", "calc-options", 3, "value", "formControl", "name", "id", "click"], ["type", "button", "value", "Copy", "id", "copybtn", "title", "Copy", 1, "reset", 3, "click"], ["type", "button", "value", "Paste", "id", "pastebtn", "title", "Paste", 1, "reset", 3, "click"]],
      template: function CalculatorToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculatorToolbarComponent_div_1_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculatorToolbarComponent_div_2_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalculatorToolbarComponent_div_3_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalculatorToolbarComponent_input_5_Template, 1, 0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalculatorToolbarComponent_input_6_Template, 1, 0, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_Template_input_click_7_listener() {
            return ctx.onResetField();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_Template_input_click_8_listener() {
            return ctx.onConvertToPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.isShowOptions, !ctx.isShowOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowCopyBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPasteBtn);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"]],
      styles: [".sms-radio-wrapper[_ngcontent-%COMP%] {\r\n    float: left;\r\n    \r\n    margin-top: 5px;\r\n    color: #225a8a;\r\n    font-family: 'open_sanssemibold', sans-serif;\r\n}\r\n\r\n.sms-radio-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 3px;\r\n}\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n    \r\n    background: #ec971f;\r\n    border: #ec971f;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 4px 15px;\r\n    margin-right: 11px;\r\n}\r\n\r\n.calculate[_ngcontent-%COMP%], .custom-button[_ngcontent-%COMP%], .reset[_ngcontent-%COMP%] {\r\n    \r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    padding: 3px 15px;\r\n    margin-right: 11px;\r\n}\r\n\r\n.printbtn[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_print.png) no-repeat;\r\n    background-size: 90%;\r\n    opacity: .6;\r\n    margin-right: 0;\r\n}\r\n\r\n.printbtn[_ngcontent-%COMP%], .resetbtn[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    border: none;\r\n    \r\n    margin-top: 5px;\r\n    vertical-align: bottom;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FsY3VsYXRvci10b29sYmFyL2NhbGN1bGF0b3ItdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztJQUNkLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYWxjdWxhdG9yLXRvb2xiYXIvY2FsY3VsYXRvci10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21zLXJhZGlvLXdyYXBwZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDE1cHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogIzIyNWE4YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbl9zYW5zc2VtaWJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc21zLXJhZGlvLXdyYXBwZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59XHJcblxyXG4ucmVzZXQge1xyXG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2VjOTcxZjtcclxuICAgIGJvcmRlcjogI2VjOTcxZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRlLCAuY3VzdG9tLWJ1dHRvbiwgLnJlc2V0IHtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4ucHJpbnRidG4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fcHJpbnQucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJpbnRidG4sIC5yZXNldGJ0biB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'calculator-toolbar',
          templateUrl: './calculator-toolbar.component.html',
          styleUrls: ['./calculator-toolbar.component.css']
        }]
      }], function () {
        return [{
          type: _calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorToolbarService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
        }];
      }, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isShowOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isShowPasteBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isShowCopyBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        calculatorConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        optionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        reset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        print: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        paste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        copy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts":
  /*!***************************************************************************************!*\
    !*** ./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts ***!
    \***************************************************************************************/

  /*! exports provided: CalculatorToolbarService */

  /***/
  function clientAppSharedComponentsCalculatorToolbarCalculatorToolbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorToolbarService", function () {
      return CalculatorToolbarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CalculatorToolbarService = function CalculatorToolbarService() {
      _classCallCheck(this, CalculatorToolbarService);

      // paste event for copy and paste event
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalculatorToolbarService.ɵfac = function CalculatorToolbarService_Factory(t) {
      return new (t || CalculatorToolbarService)();
    };

    CalculatorToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalculatorToolbarService,
      factory: CalculatorToolbarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts":
  /*!***************************************************************************************!*\
    !*** ./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DropDownComponent */

  /***/
  function clientAppSharedComponentsCustomControlsDropDownDropDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownComponent", function () {
      return DropDownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_dropdown_change_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../models/dropdown-change.model */
    "./client/app/models/dropdown-change.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DropDownComponent_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chooseOptionLabel);
      }
    }

    function DropDownComponent_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r2.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.label);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var DropDownComponent = /*#__PURE__*/function () {
      function DropDownComponent() {
        _classCallCheck(this, DropDownComponent);

        this.isFormSubmitted = false;
        this.isAddChooseOption = false;
        this.chooseOptionLabel = "Please select"; // @Output() selectionChange: EventEmitter<FormControlModel> = new EventEmitter<FormControlModel>();

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // convenience getter for easy access to form fields


      _createClass(DropDownComponent, [{
        key: "getFormControl",
        // return form control
        value: function getFormControl() {
          return this.form.get(this.control.key);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange(event) {
          var dropdownObject = new _models_dropdown_change_model__WEBPACK_IMPORTED_MODULE_1__["DropDownChangeModel"]({
            formControl: this.control,
            value: this.controlValue
          });
          this.selectionChange.emit(dropdownObject); // this.selectionChange.emit(this.controlValue);
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        } // getter property to get the control validity

      }, {
        key: "isValid",
        get: function get() {
          return this.f[this.control.key].valid;
        }
      }, {
        key: "controlValue",
        get: function get() {
          return this.f[this.control.key].value;
        }
      }]);

      return DropDownComponent;
    }();

    DropDownComponent.ɵfac = function DropDownComponent_Factory(t) {
      return new (t || DropDownComponent)();
    };

    DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropDownComponent,
      selectors: [["custom-drop-down"]],
      inputs: {
        form: "form",
        options: "options",
        control: "control",
        isFormSubmitted: "isFormSubmitted",
        isAddChooseOption: "isAddChooseOption",
        chooseOptionLabel: "chooseOptionLabel"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      decls: 4,
      vars: 11,
      consts: [[3, "formGroup"], [3, "formGroup", "formControl", "ngClass", "change"], ["value", "", "disabled", "", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["value", "", "disabled", "", 3, "ngValue"], [3, "ngValue"]],
      template: function DropDownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropDownComponent_Template_select_change_1_listener($event) {
            return ctx.onSelectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_option_2_Template, 2, 1, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropDownComponent_option_3_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ddl-options form-control ", ctx.control.css_classes == null ? null : ctx.control.css_classes.join(" "), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form)("formControl", ctx.getFormControl())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isFormSubmitted && !ctx.isValid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddChooseOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: [".ddl-options[_ngcontent-%COMP%] {\r\n    \r\n    width: 100%;\r\n    border-radius: 0;\r\n    border: 1px solid #d2d2d2;\r\n    box-shadow: none;\r\n    height: 40px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    background: url(/assets/img/icon_select_arrow-gray.png) no-repeat center right;\r\n    float: left;\r\n    font-size: 1em;\r\n    padding-right: 20px;\r\n}\r\n\r\n.ddl-options.form-control.is-invalid[_ngcontent-%COMP%], .ddl-options.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\r\n    color: #777;\r\n}\r\n\r\n.materialChoice[_ngcontent-%COMP%] {\r\n    width: 200%;\r\n    background-color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLWNvbnRyb2xzL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsOEVBQThFO0lBQzlFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbS1jb250cm9scy9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGRsLW9wdGlvbnMge1xyXG4gICAgLyogd2lkdGg6IDMzMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbl9zZWxlY3RfYXJyb3ctZ3JheS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmRkbC1vcHRpb25zLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkLCAuZGRsLW9wdGlvbnMud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5tYXRlcmlhbENob2ljZSB7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIC5tYXRlcmlhbENob2ljZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTU3cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59ICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-drop-down',
          templateUrl: './drop-down.component.html',
          styleUrls: ['./drop-down.component.css']
        }]
      }], function () {
        return [];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isFormSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAddChooseOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chooseOptionLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: NumericTextboxComponent */

  /***/
  function clientAppSharedComponentsCustomControlsNumericTextboxNumericTextboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumericTextboxComponent", function () {
      return NumericTextboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../temperature-button/temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../calculator-toolbar/calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../directives/numeric.directive */
    "./client/app/shared/directives/numeric.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // core imports


    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var NumericTextboxComponent = /*#__PURE__*/function () {
      function NumericTextboxComponent(unitButtonService, helperService, temperatureButtonService, calculatorToolbarService) {
        _classCallCheck(this, NumericTextboxComponent);

        this.unitButtonService = unitButtonService;
        this.helperService = helperService;
        this.temperatureButtonService = temperatureButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.isFormSubmitted = false;
        this.isFormatInputOnBlur = true;
        this.isNegetiveNumber = false;
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        this.maxLength = 6;
        this.decimalPoint = 2;
        this.isUpdateDecimalPointOnUnitChange = true; // events

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unitChange();
        this.temperatureChange();
      } // resizeSub: Subscription;
      // convenience getter for easy access to form fields


      _createClass(NumericTextboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          var fc = this.getFormControl(); // input value changes
          // debounce keystroke events          

          this.formCtrlSub = fc.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000)).subscribe(function (newValue) {
            //  this.firstName = newValue;
            // console.log(`numeric value   ${newValue}`);
            _this7.valueChange.emit({
              key: _this7.control.key,
              formControl: fc
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.unitButtonChange) {
            this.unitButtonChange.unsubscribe();
          }

          if (this.temperatureButtonChange) {
            this.temperatureButtonChange.unsubscribe();
          }

          if (this.formCtrlSub) {
            this.formCtrlSub.unsubscribe();
          }
        } // return form control

      }, {
        key: "getFormControl",
        value: function getFormControl() {
          return this.form.get(this.control.key);
        } // unit change handler

      }, {
        key: "unitChange",
        value: function unitChange() {
          var _this8 = this;

          // unit change subscription
          this.unitButtonChange = this.unitButtonService.unit$.subscribe(function (x) {
            if (_this8.isUpdateDecimalPointOnUnitChange) {
              if (x) {
                if (x.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                  _this8.decimalPoint = 2;
                } else {
                  _this8.decimalPoint = 3;
                }
              }
            }
          });
        } // temperature change handler

      }, {
        key: "temperatureChange",
        value: function temperatureChange() {
          var _this9 = this;

          // temperature change subscription
          this.temperatureButtonChange = this.temperatureButtonService.temperature$.subscribe(function (x) {
            var _a;

            if (x) {
              var controlKey = (_a = _this9.control) === null || _a === void 0 ? void 0 : _a.key; // temperature conversion

              if (x.actionType !== _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Paste && controlKey && _this9.control && _this9.control.sub_type === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].temperature) {
                var formControl = _this9.getFormControl();

                var formControlValue = formControl.value;
                var unit = _this9.unitButtonService.getCurrentUnitValue;

                if (formControlValue) {
                  // convert the input form control value
                  var convertedValue = x.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT ? _this9.helperService.convertCelciusToFahrenheit(formControlValue) : _this9.helperService.convertFahrenheitToCelcius(formControlValue);
                  formControl.setValue(convertedValue);
                }
              }
            }
          });
        } // on input change event

      }, {
        key: "onChangeEvent",
        value: function onChangeEvent(event) {}
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        } // getter property to get the control validity

      }, {
        key: "isValid",
        get: function get() {
          var _this10 = this;

          // check client errors
          if (this.clientErrors && this.clientErrors.length > 0 || this.clientWarnings && this.clientWarnings.length > 0 || this.serverErrors && this.serverErrors.length > 0 || this.serverWarnings && this.serverWarnings.length > 0) {
            // client error index
            var errorIndex = this.clientErrors.findIndex(function (e) {
              return _this10.control.key === e.field;
            }); // client warning index

            var warningIndex = this.clientWarnings.findIndex(function (e) {
              return _this10.control.key === e.field;
            }); // server error index

            var serverErrorIndex = this.serverErrors.findIndex(function (e) {
              return _this10.control.key === e.field;
            }); // server warning index

            var serverWarningIndex = this.serverWarnings.findIndex(function (e) {
              return _this10.control.key === e.field;
            }); // if ((errorIndex > -1) || (warningIndex > -1) || (serverErrorIndex > -1) || (serverWarningIndex > -1)) {

            if (errorIndex > -1 || serverErrorIndex > -1) {
              return false;
            } else {
              return !this.form.controls[this.control.key].invalid; // this.form.controls[this.control.key].valid;
            }
          } else {
            return !this.form.controls[this.control.key].invalid; //this.form.controls[this.control.key].valid;
          }
        }
      }]);

      return NumericTextboxComponent;
    }();

    NumericTextboxComponent.ɵfac = function NumericTextboxComponent_Factory(t) {
      return new (t || NumericTextboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["CalculatorToolbarService"]));
    };

    NumericTextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NumericTextboxComponent,
      selectors: [["custom-numeric-textbox"]],
      inputs: {
        control: "control",
        form: "form",
        isFormSubmitted: "isFormSubmitted",
        isFormatInputOnBlur: "isFormatInputOnBlur",
        isNegetiveNumber: "isNegetiveNumber",
        clientErrors: "clientErrors",
        clientWarnings: "clientWarnings",
        serverErrors: "serverErrors",
        serverWarnings: "serverWarnings",
        maxLength: "maxLength",
        decimalPoint: "decimalPoint",
        isUpdateDecimalPointOnUnitChange: "isUpdateDecimalPointOnUnitChange"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 12,
      consts: [[3, "formGroup"], ["numeric", "", 1, "form-control", 3, "maxLength", "decimals", "isFormatInputOnBlur", "isNegetiveNumber", "type", "formControl", "placeholder", "id", "ngClass"]],
      template: function NumericTextboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxLength", ctx.maxLength)("decimals", ctx.decimalPoint)("isFormatInputOnBlur", ctx.isFormatInputOnBlur)("isNegetiveNumber", ctx.isNegetiveNumber)("type", ctx.control.sub_type)("formControl", ctx.getFormControl())("placeholder", ctx.control.placeholder)("id", ctx.control.key)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isFormSubmitted && !ctx.isValid));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__["NumericDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbS1jb250cm9scy9udW1lcmljLXRleHRib3gvbnVtZXJpYy10ZXh0Ym94LmNvbXBvbmVudC5jc3MifQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericTextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-numeric-textbox',
          templateUrl: './numeric-textbox.component.html',
          styleUrls: ['./numeric-textbox.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]
        }, {
          type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
        }, {
          type: _temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__["TemperatureButtonService"]
        }, {
          type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["CalculatorToolbarService"]
        }];
      }, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isFormSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isFormatInputOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isNegetiveNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clientErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clientWarnings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        serverErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        serverWarnings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        decimalPoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isUpdateDecimalPointOnUnitChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SwitchButtonComponent */

  /***/
  function clientAppSharedComponentsCustomControlsSwitchButtonSwitchButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchButtonComponent", function () {
      return SwitchButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function SwitchButtonComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchButtonComponent_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var switchOptionIndex_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onSwitchClicked(switchOptionIndex_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var switchOption_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, switchOption_r1.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](switchOption_r1.display_title);
      }
    }

    var SwitchButtonComponent = /*#__PURE__*/function () {
      function SwitchButtonComponent() {
        _classCallCheck(this, SwitchButtonComponent);

        this.switchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SwitchButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSwitchClicked",
        value: function onSwitchClicked(switchIndex) {
          this.setActive(switchIndex);
          this.switchClicked.emit(this.switchOptions[switchIndex]);
        }
      }, {
        key: "setActive",
        value: function setActive(switchIndex) {
          for (var index = 0; index < this.switchOptions.length; index++) {
            this.switchOptions[index].isActive = false;
          }

          this.switchOptions[switchIndex].isActive = true;
        }
      }]);

      return SwitchButtonComponent;
    }();

    SwitchButtonComponent.ɵfac = function SwitchButtonComponent_Factory(t) {
      return new (t || SwitchButtonComponent)();
    };

    SwitchButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SwitchButtonComponent,
      selectors: [["custom-switch-button"]],
      inputs: {
        switchOptions: "switchOptions"
      },
      outputs: {
        switchClicked: "switchClicked"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "switch-btn-section", "pull-left"], [1, "pull-left", "switch-btn-section__option"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
      template: function SwitchButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SwitchButtonComponent_span_2_Template, 2, 4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.switchOptions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".switch-btn-section[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    background: #329f59;\r\n}\r\n\r\n.switch-btn-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    width: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.switch-btn-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 6px 8px;\r\n    color: #777;\r\n    background: #eee;\r\n    cursor: pointer;\r\n    width: 85px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLWNvbnRyb2xzL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9jdXN0b20tY29udHJvbHMvc3dpdGNoLWJ1dHRvbi9zd2l0Y2gtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoLWJ0bi1zZWN0aW9uIHNwYW4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzMyOWY1OTtcclxufVxyXG5cclxuLnN3aXRjaC1idG4tc2VjdGlvbiBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3dpdGNoLWJ0bi1zZWN0aW9uIHNwYW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-switch-button',
          templateUrl: './switch-button.component.html',
          styleUrls: ['./switch-button.component.css']
        }]
      }], function () {
        return [];
      }, {
        switchOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        switchClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/custom-controls/textbox/textbox.component.ts":
  /*!***********************************************************************************!*\
    !*** ./client/app/shared/components/custom-controls/textbox/textbox.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TextboxComponent */

  /***/
  function clientAppSharedComponentsCustomControlsTextboxTextboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextboxComponent", function () {
      return TextboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var TextboxComponent = /*#__PURE__*/function () {
      function TextboxComponent() {
        _classCallCheck(this, TextboxComponent);

        this.decimalPoint = 2;
        this.isFormSubmitted = false;
      } // @Input() columnSize: number = 12;
      // convenience getter for easy access to form fields


      _createClass(TextboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // return form control

      }, {
        key: "getFormControl",
        value: function getFormControl() {
          return this.form.get(this.control.key);
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        } // getter property to get the control validity

      }, {
        key: "isValid",
        get: function get() {
          return this.form.controls[this.control.key].valid;
        }
      }]);

      return TextboxComponent;
    }();

    TextboxComponent.ɵfac = function TextboxComponent_Factory(t) {
      return new (t || TextboxComponent)();
    };

    TextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextboxComponent,
      selectors: [["custom-textbox"]],
      inputs: {
        decimalPoint: "decimalPoint",
        control: "control",
        form: "form",
        isFormSubmitted: "isFormSubmitted"
      },
      decls: 2,
      vars: 8,
      consts: [[3, "formGroup"], [1, "form-control", 3, "type", "formControl", "placeholder", "id", "ngClass"]],
      template: function TextboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.control.sub_type)("formControl", ctx.getFormControl())("placeholder", ctx.control.placeholder)("id", ctx.control.key)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isFormSubmitted && !ctx.isValid));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbS1jb250cm9scy90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LmNzcyJ9 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-textbox',
          templateUrl: './textbox.component.html',
          styleUrls: ['./textbox.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        decimalPoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isFormSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/dash-size-details/dash-size-details.component.ts":
  /*!***************************************************************************************!*\
    !*** ./client/app/shared/components/dash-size-details/dash-size-details.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DashSizeDetailsComponent */

  /***/
  function clientAppSharedComponentsDashSizeDetailsDashSizeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashSizeDetailsComponent", function () {
      return DashSizeDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dash-size-details.service */
    "./client/app/shared/components/dash-size-details/dash-size-details.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // core imports
    // application imports


    function DashSizeDetailsComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashSizeDetailsComponent_tr_14_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var dashSize_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.rowClick(dashSize_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dashSize_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pad(dashSize_r1.dashSize, 3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dashSize_r1.oringCrossSectionSize.toFixed(ctx_r0.fixedTo));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dashSize_r1.oringDiameterSize.toFixed(ctx_r0.fixedTo));
      }
    }

    var DashSizeDetailsComponent = /*#__PURE__*/function () {
      function DashSizeDetailsComponent(activeModal, unitButtonService, dashSizeDetailsService) {
        _classCallCheck(this, DashSizeDetailsComponent);

        this.activeModal = activeModal;
        this.unitButtonService = unitButtonService;
        this.dashSizeDetailsService = dashSizeDetailsService;
        this.dashSizeRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fixedTo = 3;
        this.unitChangeUpdateCalculator();
        this.dashSizeChange();
      }

      _createClass(DashSizeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setFixedTo();
        } // set decimal places value

      }, {
        key: "setFixedTo",
        value: function setFixedTo() {
          if (this.unitButtonService.getCurrentUnitValue.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["Units"].INCH) {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].INCH;
          } else if (this.unitButtonService.getCurrentUnitValue.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["Units"].MILLI_METER) {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].MILLI_METER;
          } else {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].INCH;
          }
        }
      }, {
        key: "pad",
        value: function pad(n, length) {
          n = n * -1;
          var len = length - ('' + n).length;
          var a = (len > 0 ? new Array(++len).join('0') : '') + n;
          return '-' + a;
        } // unit change update output values handler

      }, {
        key: "unitChangeUpdateCalculator",
        value: function unitChangeUpdateCalculator() {
          var _this11 = this;

          // unit switch button click/change subscription
          this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
              _this11.setFixedTo();
            }
          });
        } // dash size update 

      }, {
        key: "dashSizeChange",
        value: function dashSizeChange() {
          var _this12 = this;

          this.dashSizeDetailSubscription = this.dashSizeDetailsService.dashSizeDetail$.subscribe(function (x) {
            if (x) {
              _this12.dashSizes = x;
            }
          });
        }
      }, {
        key: "rowClick",
        value: function rowClick(data) {
          this.dashSizeRowClick.emit(data);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
          }

          if (this.dashSizeDetailSubscription) {
            this.dashSizeDetailSubscription.unsubscribe();
          }
        }
      }]);

      return DashSizeDetailsComponent;
    }();

    DashSizeDetailsComponent.ɵfac = function DashSizeDetailsComponent_Factory(t) {
      return new (t || DashSizeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__["DashSizeDetailsService"]));
    };

    DashSizeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashSizeDetailsComponent,
      selectors: [["app-dash-size-details"]],
      outputs: {
        dashSizeRowClick: "dashSizeRowClick"
      },
      decls: 18,
      vars: 1,
      consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["aria-describedby", "O-ring and Gland Size", 1, "table", "table-bordered", "table-fixed"], ["scope", "col"], [3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "click"]],
      template: function DashSizeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "O-ring and Gland Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dash Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "O-ring Cross Section Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "O-ring Diameter Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashSizeDetailsComponent_tr_14_Template, 7, 3, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashSizeDetailsComponent_Template_button_click_16_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashSizes.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".modal-body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 15px;\r\n    height: 400px;\r\n    overflow-y: scroll;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\r\n    background-color: #add8e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFzaC1zaXplLWRldGFpbHMvZGFzaC1zaXplLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9kYXNoLXNpemUtZGV0YWlscy9kYXNoLXNpemUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRib2R5PnRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGJvZHk+dHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashSizeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dash-size-details',
          templateUrl: './dash-size-details.component.html',
          styleUrls: ['./dash-size-details.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]
        }, {
          type: _dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__["DashSizeDetailsService"]
        }];
      }, {
        dashSizeRowClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/dash-size-details/dash-size-details.service.ts":
  /*!*************************************************************************************!*\
    !*** ./client/app/shared/components/dash-size-details/dash-size-details.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: DashSizeDetailsService */

  /***/
  function clientAppSharedComponentsDashSizeDetailsDashSizeDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashSizeDetailsService", function () {
      return DashSizeDetailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts"); // core imports
    // third party imports
    // application imports


    var DashSizeDetailsService = /*#__PURE__*/function () {
      function DashSizeDetailsService(_http, unitButtonService) {
        _classCallCheck(this, DashSizeDetailsService);

        this._http = _http;
        this.unitButtonService = unitButtonService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        this.dashSizeDetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); // Expose the observable part of the 

        this.dashSizeDetail$ = this.dashSizeDetailSubject.asObservable();
      }

      _createClass(DashSizeDetailsService, [{
        key: "sendORingSizes",
        value: function sendORingSizes(val) {
          this.dashSizeDetail = val;
        }
      }, {
        key: "getDashSizeDetails",
        value: function getDashSizeDetails() {
          var currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;

          if (currentSelectedUnit) {
            var body = {
              unit: currentSelectedUnit.id
            };
            return this._http.post("".concat(this.baseUrl, "oringglandanalysistool/dashSizeDetails"), body);
          }
        }
      }, {
        key: "dashSizeDetail",
        get: function get() {
          return this.dashSizeDetailSubject.getValue();
        },
        set: function set(val) {
          this.dashSizeDetailSubject.next(val);
        }
        /* Public Properties   */

      }, {
        key: "getCurrentORingConfigValue",
        get: function get() {
          return this.dashSizeDetail;
        }
      }]);

      return DashSizeDetailsService;
    }();

    DashSizeDetailsService.ɵfac = function DashSizeDetailsService_Factory(t) {
      return new (t || DashSizeDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"]));
    };

    DashSizeDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashSizeDetailsService,
      factory: DashSizeDetailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashSizeDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/measure-button/measure-button.component.ts":
  /*!*********************************************************************************!*\
    !*** ./client/app/shared/components/measure-button/measure-button.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MeasureButtonComponent */

  /***/
  function clientAppSharedComponentsMeasureButtonMeasureButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasureButtonComponent", function () {
      return MeasureButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../calculator-toolbar/calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../custom-controls/switch-button/switch-button.component */
    "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts"); // core imorts


    var MeasureButtonComponent = /*#__PURE__*/function () {
      function MeasureButtonComponent(helperService, unitButtonService, calculatorToolbarService) {
        _classCallCheck(this, MeasureButtonComponent);

        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
      }

      _createClass(MeasureButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // get measures 
          this.measures = this.helperService.getMeasures(); // get current active unit

          var activeMeasureIndex = this.measures.findIndex(function (u) {
            return u.isActive === true;
          });

          if (activeMeasureIndex > -1) {
            this.currentMeasure = Object.assign({}, this.measures[activeMeasureIndex]);
            this.previousMeasure = Object.assign({}, this.measures[activeMeasureIndex]);
          } else {
            // default selected unit
            this.currentMeasure = Object.assign({}, this.measures[0]);
            this.previousMeasure = Object.assign({}, this.measures[0]);
          }
        } // unit switch clicked handler

      }, {
        key: "onMeasureSwitchClicked",
        value: function onMeasureSwitchClicked(event) {
          // reset action
          this.resetAction(); // set previous 

          this.previousMeasure = Object.assign({}, this.currentMeasure); // set changed value to current

          this.currentMeasure = Object.assign({}, event);

          if (this.previousMeasure && this.previousMeasure.id !== event.id) {
            // TODO: 
            this.unitButtonService.sendUnitValue(event);
          }
        } // onPaste bt click
        // onPaste() {
        //   this.calculatorToolbarService.paste.subscribe((x: any) => {
        //     // reset action
        //     this.resetAction();
        //     if (x) {
        //       this.setActiveMeasureOnPaste(x);
        //     }
        //   });
        // }
        // set active unit switch based on calculated data stored in local storage

      }, {
        key: "setActiveMeasureOnPaste",
        value: function setActiveMeasureOnPaste(calculatedData) {
          if (this.measures && this.measures.length > 0 && calculatedData && calculatedData.unit) {
            var activeIndex = this.measures.findIndex(function (u) {
              return u.id === +calculatedData.unit;
            });

            if (activeIndex > -1) {
              for (var index = 0; index < this.measures.length; index++) {
                this.measures[index].isActive = false;
              }

              this.measures[activeIndex].isActive = true; // set action type

              this.measures[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ActionType"].Paste; // set previous 

              this.previousMeasure = Object.assign({}, this.currentMeasure); // set changed value to current

              this.currentMeasure = Object.assign({}, this.measures[activeIndex]); // send unit change

              this.unitButtonService.sendUnitValue(this.measures[activeIndex]);
            }
          }
        }
      }, {
        key: "setActiveSwitchButton",
        value: function setActiveSwitchButton(switchButton) {
          // get measures 
          this.measures = this.helperService.getMeasures();
          var activeIndex = this.measures.findIndex(function (u) {
            return u.id === +switchButton.id;
          });

          if (activeIndex > -1) {
            for (var index = 0; index < this.measures.length; index++) {
              this.measures[index].isActive = false;
            }

            this.measures[activeIndex].isActive = true; // set previous 

            this.previousMeasure = Object.assign({}, this.currentMeasure); // set changed value to current

            this.currentMeasure = Object.assign({}, this.measures[activeIndex]);
          }
        }
      }, {
        key: "resetAction",
        value: function resetAction() {
          // reset action
          for (var index = 0; index < this.measures.length; index++) {
            this.measures[index].actionType = 0;
          }
        }
      }, {
        key: "defaultMeasure",
        get: function get() {
          return this._defaultMeasure;
        },
        set: function set(value) {
          if (value) {
            this._defaultMeasure = value;
            this.setActiveSwitchButton(this._defaultMeasure);
          }
        }
      }]);

      return MeasureButtonComponent;
    }();

    MeasureButtonComponent.ɵfac = function MeasureButtonComponent_Factory(t) {
      return new (t || MeasureButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]));
    };

    MeasureButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeasureButtonComponent,
      selectors: [["measure-button"]],
      inputs: {
        defaultMeasure: "defaultMeasure"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "switchOptions", "switchClicked"]],
      template: function MeasureButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "custom-switch-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switchClicked", function MeasureButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) {
            return ctx.onMeasureSwitchClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("switchOptions", ctx.measures);
        }
      },
      directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__["SwitchButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lYXN1cmUtYnV0dG9uL21lYXN1cmUtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasureButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'measure-button',
          templateUrl: './measure-button.component.html',
          styleUrls: ['./measure-button.component.css']
        }]
      }], function () {
        return [{
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]
        }, {
          type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]
        }];
      }, {
        defaultMeasure: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/tab-nav/tab-nav.component.ts":
  /*!*******************************************************************!*\
    !*** ./client/app/shared/components/tab-nav/tab-nav.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TabNavComponent */

  /***/
  function clientAppSharedComponentsTabNavTabNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabNavComponent", function () {
      return TabNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Core imports


    var _c0 = function _c0(a0) {
      return {
        exact: a0
      };
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function TabNavComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", tab_r2.childrenModuleRoute);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, tab_r2.pathExactmatch));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, tab_r2.rootModuleRoute));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r2.linkLabel);
      }
    }

    function TabNavComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Chemraz Microsite \xBB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.chemrazURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var TabNavComponent = /*#__PURE__*/function () {
      function TabNavComponent(router, activatedRoute) {
        var _this13 = this;

        _classCallCheck(this, TabNavComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tabMenu = [];
        this.currrentCalculatorGroup = _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorGroup"].ORingNGlandCalcs;
        this.isShowChemrazBtn = false;
        this.chemrazURL = 'https://semi-chemraz.gtweed.com/'; // get route data

        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function () {
          if (_this13.activatedRoute.snapshot && _this13.activatedRoute.snapshot.data) {
            _this13.currrentCalculatorGroup = _this13.activatedRoute.snapshot.data.calculatorGroup;
          }
        });
      }

      _createClass(TabNavComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activatedRouteSubscription) {
            this.activatedRouteSubscription.unsubscribe();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "redirectTo",
        value: function redirectTo(redirectPath) {}
      }]);

      return TabNavComponent;
    }();

    TabNavComponent.ɵfac = function TabNavComponent_Factory(t) {
      return new (t || TabNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    TabNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabNavComponent,
      selectors: [["app-tab-nav"]],
      inputs: {
        tabMenu: "tabMenu"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "row"], [1, "col-md-12", "regulator-tabs"], [1, "regulator-tabs__main"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["class", "view-chemraz-btn", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [3, "routerLink"], [1, "view-chemraz-btn", 3, "href"]],
      template: function TabNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabNavComponent_li_4_Template, 3, 8, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabNavComponent_a_5_Template, 2, 1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowChemrazBtn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".regulator-tabs__main[_ngcontent-%COMP%] {\r\n    \r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: block;\r\n    border-bottom: 1px solid #ddd;\r\n    clear: both;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    \r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.regulator-tabs__main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    position: relative;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    \r\n    \r\n    \r\n    color: #757575;\r\n}\r\n\r\n.regulator-tabs__main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #329f59;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #225a8a;\r\n    position: relative;\r\n    background: #eee;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%] {\r\n    padding: 8px 14px;\r\n    background: #225a8a;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    z-index: 9;\r\n}\r\n\r\n.regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%]:hover, .regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%]:focus {\r\n    text-decoration: none;\r\n    background: #10385a;\r\n}\r\n\r\n@media (min-width: 700px) {\r\n    .regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        right: 15px;\r\n        top: -8px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiLW5hdi90YWItbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBLE9BQU87O0FBRVA7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItbmF2L3RhYi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWd1bGF0b3ItdGFic19fbWFpbiB7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA0MHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ3VsYXRvci10YWJzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ucmVndWxhdG9yLXRhYnMgdWwgbGkge1xyXG4gICAgLyogbWFyZ2luOiAwIDVweCAtMXB4OyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucmVndWxhdG9yLXRhYnMgdWwgbGkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKnYyLjEqL1xyXG5cclxuLnJlZ3VsYXRvci10YWJzX19tYWluIGEge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7ICovXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG5cclxuLnJlZ3VsYXRvci10YWJzX19tYWluIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMjlmNTk7XHJcbn1cclxuXHJcbi5yZWd1bGF0b3ItdGFicyB1bCBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogIzIyNWE4YTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcbi5yZWd1bGF0b3ItdGFicyB1bCBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLnJlZ3VsYXRvci10YWJzIGEudmlldy1jaGVtcmF6LWJ0biB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMjVhOGE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5yZWd1bGF0b3ItdGFicyBhLnZpZXctY2hlbXJhei1idG46aG92ZXIsIC5yZWd1bGF0b3ItdGFicyBhLnZpZXctY2hlbXJhei1idG46Zm9jdXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzEwMzg1YTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAucmVndWxhdG9yLXRhYnMgYS52aWV3LWNoZW1yYXotYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab-nav',
          templateUrl: './tab-nav.component.html',
          styleUrls: ['./tab-nav.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        tabMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/temperature-button/temperature-button.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./client/app/shared/components/temperature-button/temperature-button.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TemperatureButtonComponent */

  /***/
  function clientAppSharedComponentsTemperatureButtonTemperatureButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureButtonComponent", function () {
      return TemperatureButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _temperature_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../calculator-toolbar/calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../custom-controls/switch-button/switch-button.component */
    "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts"); // core imports


    var TemperatureButtonComponent = /*#__PURE__*/function () {
      // constructor
      function TemperatureButtonComponent(helperService, temperatureButtonService, calculatorToolbarService) {
        _classCallCheck(this, TemperatureButtonComponent);

        this.helperService = helperService;
        this.temperatureButtonService = temperatureButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.onPaste();
      } // oninit of component


      _createClass(TemperatureButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // temperature object
          this.temperature = this.helperService.getTemperature(); // get current active unit

          var activeTemperatureIndex = this.temperature.findIndex(function (u) {
            return u.isActive === true;
          });

          if (activeTemperatureIndex > -1) {
            this.currentTemperature = Object.assign({}, this.temperature[activeTemperatureIndex]);
            this.previousTemperature = Object.assign({}, this.temperature[activeTemperatureIndex]);
          } else {
            // default selected temperature
            this.currentTemperature = Object.assign({}, this.temperature[0]);
            this.previousTemperature = Object.assign({}, this.temperature[0]);
          }
        } // temperture switch clicked handler

      }, {
        key: "onTemperatureSwitchClicked",
        value: function onTemperatureSwitchClicked(event) {
          // reset action
          this.resetAction(); // set previous 

          this.previousTemperature = Object.assign({}, this.currentTemperature); // set changed value to current

          this.currentTemperature = Object.assign({}, event);

          if (this.previousTemperature && this.previousTemperature.id !== event.id) {
            this.temperatureButtonService.sendTemperatureValue(event);
          }
        } // onPaste bt click

      }, {
        key: "onPaste",
        value: function onPaste() {
          var _this14 = this;

          this.calculatorToolbarService.paste.subscribe(function (x) {
            // reset action
            _this14.resetAction();

            if (x) {
              _this14.setActiveTemperatureOnPaste(x);
            }
          });
        } // set active unitTemp switch based on calculated data stored in local storage

      }, {
        key: "setActiveTemperatureOnPaste",
        value: function setActiveTemperatureOnPaste(calculatedData) {
          if (this.temperature && this.temperature.length > 0 && calculatedData && calculatedData.unitTemp) {
            var activeIndex = this.temperature.findIndex(function (u) {
              return u.id === +calculatedData.unitTemp;
            });

            if (activeIndex > -1) {
              for (var index = 0; index < this.temperature.length; index++) {
                this.temperature[index].isActive = false;
              } // set action type


              this.temperature[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ActionType"].Paste; // set active button

              this.temperature[activeIndex].isActive = true; // set previous 

              this.previousTemperature = Object.assign({}, this.currentTemperature); // set changed value to current

              this.currentTemperature = Object.assign({}, this.temperature[activeIndex]); // send unitTemp change

              this.temperatureButtonService.sendTemperatureValue(this.temperature[activeIndex]);
            }
          }
        }
      }, {
        key: "resetAction",
        value: function resetAction() {
          // reset action
          for (var index = 0; index < this.temperature.length; index++) {
            this.temperature[index].actionType = 0;
          }
        }
      }]);

      return TemperatureButtonComponent;
    }();

    TemperatureButtonComponent.ɵfac = function TemperatureButtonComponent_Factory(t) {
      return new (t || TemperatureButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_temperature_button_service__WEBPACK_IMPORTED_MODULE_3__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]));
    };

    TemperatureButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemperatureButtonComponent,
      selectors: [["temperature-button"]],
      decls: 1,
      vars: 1,
      consts: [[3, "switchOptions", "switchClicked"]],
      template: function TemperatureButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "custom-switch-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switchClicked", function TemperatureButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) {
            return ctx.onTemperatureSwitchClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("switchOptions", ctx.temperature);
        }
      },
      directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__["SwitchButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RlbXBlcmF0dXJlLWJ1dHRvbi90ZW1wZXJhdHVyZS1idXR0b24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'temperature-button',
          templateUrl: './temperature-button.component.html',
          styleUrls: ['./temperature-button.component.css']
        }]
      }], function () {
        return [{
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _temperature_button_service__WEBPACK_IMPORTED_MODULE_3__["TemperatureButtonService"]
        }, {
          type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/temperature-button/temperature-button.service.ts":
  /*!***************************************************************************************!*\
    !*** ./client/app/shared/components/temperature-button/temperature-button.service.ts ***!
    \***************************************************************************************/

  /*! exports provided: TemperatureButtonService */

  /***/
  function clientAppSharedComponentsTemperatureButtonTemperatureButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureButtonService", function () {
      return TemperatureButtonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts"); // core imports
    // third party imports


    var TemperatureButtonService = /*#__PURE__*/function () {
      function TemperatureButtonService() {
        _classCallCheck(this, TemperatureButtonService);

        this.initialValue = {
          id: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS,
          title: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS],
          display_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
          display_Short_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
          isActive: true,
          actionType: 0
        };
        this.temperatureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialValue);
        this.temperature$ = this.temperatureSubject.asObservable();
      }
      /* private Properties */
      // service state management property "unit"
      // the getter will return the last value emitted unitSubject subject


      _createClass(TemperatureButtonService, [{
        key: "sendTemperatureValue",
        // send oring config
        // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        value: function sendTemperatureValue(val) {
          // this.oRingConfigSubject.next(val);
          this.temperature = Object.assign(Object.assign({}, val), {
            isActive: true
          });
        }
      }, {
        key: "temperature",
        get: function get() {
          return this.temperatureSubject.getValue();
        } // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        ,
        set: function set(val) {
          this.temperatureSubject.next(val);
        } // get config value directly using behaviour subject

      }, {
        key: "getCurrentTemperatureValue",
        get: function get() {
          return this.temperature;
        }
      }]);

      return TemperatureButtonService;
    }();

    TemperatureButtonService.ɵfac = function TemperatureButtonService_Factory(t) {
      return new (t || TemperatureButtonService)();
    };

    TemperatureButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TemperatureButtonService,
      factory: TemperatureButtonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/toasts-container/toast-service.ts":
  /*!************************************************************************!*\
    !*** ./client/app/shared/components/toasts-container/toast-service.ts ***!
    \************************************************************************/

  /*! exports provided: ToastService */

  /***/
  function clientAppSharedComponentsToastsContainerToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toasts = [];
      }

      _createClass(ToastService, [{
        key: "show",
        value: function show(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, options));
        }
      }, {
        key: "showSucces",
        value: function showSucces(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            classname: 'bg-success text-light',
            delay: 10000
          };
          var paramOptions;
          paramOptions = Object.assign(Object.assign({}, paramOptions), options);
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, paramOptions));
        }
      }, {
        key: "showError",
        value: function showError(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            classname: 'bg-danger text-light',
            delay: 15000
          };
          // this.toasts.push({ textOrTpl, ...options });
          var paramOptions;
          paramOptions = Object.assign(Object.assign({}, paramOptions), options);
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, paramOptions));
        }
      }, {
        key: "remove",
        value: function remove(toast) {
          this.toasts = this.toasts.filter(function (t) {
            return t !== toast;
          });
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵfac = function ToastService_Factory(t) {
      return new (t || ToastService)();
    };

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastService,
      factory: ToastService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/toasts-container/toasts-container.component.ts":
  /*!*************************************************************************************!*\
    !*** ./client/app/shared/components/toasts-container/toasts-container.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ToastsContainerComponent */

  /***/
  function clientAppSharedComponentsToastsContainerToastsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function () {
      return ToastsContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast-service */
    "./client/app/shared/components/toasts-container/toast-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ToastsContainerComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

    function ToastsContainerComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsContainerComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
      }
    }

    function ToastsContainerComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
      }
    }

    function ToastsContainerComponent_ngb_toast_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastsContainerComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var toast_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toastService.remove(toast_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastsContainerComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastsContainerComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var toast_r1 = ctx.$implicit;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 5000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
      }
    }

    var ToastsContainerComponent = /*#__PURE__*/function () {
      function ToastsContainerComponent(toastService) {
        _classCallCheck(this, ToastsContainerComponent);

        this.toastService = toastService;
      }

      _createClass(ToastsContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isTemplate",
        value: function isTemplate(toast) {
          return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        }
      }]);

      return ToastsContainerComponent;
    }();

    ToastsContainerComponent.ɵfac = function ToastsContainerComponent_Factory(t) {
      return new (t || ToastsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
    };

    ToastsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastsContainerComponent,
      selectors: [["app-toasts-container"]],
      hostVars: 2,
      hostBindings: function ToastsContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]],
      template: function ToastsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsContainerComponent_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0cy1jb250YWluZXIvdG9hc3RzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toasts-container',
          templateUrl: './toasts-container.component.html',
          styleUrls: ['./toasts-container.component.css'],
          host: {
            '[class.ngb-toasts]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/unit-button/unit-button.component.ts":
  /*!***************************************************************************!*\
    !*** ./client/app/shared/components/unit-button/unit-button.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UnitButtonComponent */

  /***/
  function clientAppSharedComponentsUnitButtonUnitButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitButtonComponent", function () {
      return UnitButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../calculator-toolbar/calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../custom-controls/switch-button/switch-button.component */
    "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts"); // core imorts


    var UnitButtonComponent = /*#__PURE__*/function () {
      function UnitButtonComponent(helperService, unitButtonService, calculatorToolbarService) {
        _classCallCheck(this, UnitButtonComponent);

        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.onPaste();
      }

      _createClass(UnitButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // get units 
          this.units = this.helperService.getUnits(); // get current active unit

          var activeUnitIndex = this.units.findIndex(function (u) {
            return u.isActive === true;
          });

          if (activeUnitIndex > -1) {
            this.currentUnit = Object.assign({}, this.units[activeUnitIndex]);
            this.previousUnit = Object.assign({}, this.units[activeUnitIndex]);
          } else {
            // default selected unit
            this.currentUnit = Object.assign({}, this.units[0]);
            this.previousUnit = Object.assign({}, this.units[0]);
          }
        } // unit switch clicked handler

      }, {
        key: "onUnitSwitchClicked",
        value: function onUnitSwitchClicked(event) {
          // reset action
          this.resetAction(); // set previous 

          this.previousUnit = Object.assign({}, this.currentUnit); // set changed value to current

          this.currentUnit = Object.assign({}, event);

          if (this.previousUnit && this.previousUnit.id !== event.id) {
            this.unitButtonService.sendUnitValue(event);
          }
        } // onPaste bt click

      }, {
        key: "onPaste",
        value: function onPaste() {
          var _this15 = this;

          this.calculatorToolbarService.paste.subscribe(function (x) {
            // reset action
            _this15.resetAction();

            if (x) {
              _this15.setActiveUnitOnPaste(x);
            }
          });
        } // set active unit switch based on calculated data stored in local storage

      }, {
        key: "setActiveUnitOnPaste",
        value: function setActiveUnitOnPaste(calculatedData) {
          if (this.units && this.units.length > 0 && calculatedData && calculatedData.unit) {
            var activeIndex = this.units.findIndex(function (u) {
              return u.id === +calculatedData.unit;
            });

            if (activeIndex > -1) {
              for (var index = 0; index < this.units.length; index++) {
                this.units[index].isActive = false;
              }

              this.units[activeIndex].isActive = true; // set action type

              this.units[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ActionType"].Paste; // set previous 

              this.previousUnit = Object.assign({}, this.currentUnit); // set changed value to current

              this.currentUnit = Object.assign({}, this.units[activeIndex]); // send unit change

              this.unitButtonService.sendUnitValue(this.units[activeIndex]);
            }
          }
        }
      }, {
        key: "resetAction",
        value: function resetAction() {
          // reset action
          for (var index = 0; index < this.units.length; index++) {
            this.units[index].actionType = 0;
          }
        }
      }]);

      return UnitButtonComponent;
    }();

    UnitButtonComponent.ɵfac = function UnitButtonComponent_Factory(t) {
      return new (t || UnitButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]));
    };

    UnitButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnitButtonComponent,
      selectors: [["unit-button"]],
      decls: 1,
      vars: 1,
      consts: [[3, "switchOptions", "switchClicked"]],
      template: function UnitButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "custom-switch-button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("switchClicked", function UnitButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) {
            return ctx.onUnitSwitchClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("switchOptions", ctx.units);
        }
      },
      directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_5__["SwitchButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VuaXQtYnV0dG9uL3VuaXQtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'unit-button',
          templateUrl: './unit-button.component.html',
          styleUrls: ['./unit-button.component.css']
        }]
      }], function () {
        return [{
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]
        }, {
          type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorToolbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/unit-button/unit-button.service.ts":
  /*!*************************************************************************!*\
    !*** ./client/app/shared/components/unit-button/unit-button.service.ts ***!
    \*************************************************************************/

  /*! exports provided: UnitButtonService */

  /***/
  function clientAppSharedComponentsUnitButtonUnitButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitButtonService", function () {
      return UnitButtonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../helpers/constants */
    "./client/app/shared/helpers/constants.ts"); // core imports
    // third party imports


    var UnitButtonService = /*#__PURE__*/function () {
      function UnitButtonService() {
        _classCallCheck(this, UnitButtonService);

        this.initialValue = {
          id: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH,
          title: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][0]],
          display_title: "Inch",
          display_Short_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["UnitsAbbreviation"].INCH,
          isActive: true,
          actionType: 0
        };
        this.unitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialValue);
        this.unit$ = this.unitSubject.asObservable();
      }
      /* private Properties */
      // service state management property "unit"
      // the getter will return the last value emitted unitSubject subject


      _createClass(UnitButtonService, [{
        key: "sendUnitValue",
        // send oring config
        // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        value: function sendUnitValue(val) {
          this.unit = Object.assign(Object.assign({}, val), {
            isActive: true
          });
        }
      }, {
        key: "unit",
        get: function get() {
          return this.unitSubject.getValue();
        } // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        ,
        set: function set(val) {
          this.unitSubject.next(val);
        } // get config value directly using behaviour subject

      }, {
        key: "getCurrentUnitValue",
        get: function get() {
          return this.unit;
        }
      }]);

      return UnitButtonService;
    }();

    UnitButtonService.ɵfac = function UnitButtonService_Factory(t) {
      return new (t || UnitButtonService)();
    };

    UnitButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnitButtonService,
      factory: UnitButtonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/components/user-rules/user-rules.component.ts":
  /*!*************************************************************************!*\
    !*** ./client/app/shared/components/user-rules/user-rules.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserRulesComponent */

  /***/
  function clientAppSharedComponentsUserRulesUserRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRulesComponent", function () {
      return UserRulesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRulesComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nominal Compression recommended for 20-25% at operating temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Depending on the operating temperature, ambient compression can be lower(but not below 15%), but with risk of sealing at ambient. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Higher compression than 25% can result in reduced lifetime of product.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nominal Gland Fill recommended for 85-90% at operating temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Higher gland fill can result in reduced lifetime of product. As gland fill reaches 100% premature failure of the o-ring increases ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lower gland fill is acceptable, however gland fill improves the sealing force of the o-ring");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nominal Stretch recommended is 1- 3% at ambient ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Higher stretch can result in reduced lifetime of product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Less than 1% stretch is acceptable for o-rings under 1\" in diameter.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stretch is required to account for o-ring tolerances and prevent bunching up of the o-ring in the groove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stretch is not calculated at operating temperature. It is encapsulated by the gland, which makes gland fill and compression calculations important for improved lifetime.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nominal Radial Compression recommended is 0% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRulesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rectangular Glands ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "It is recommended for the gland width to be larger than the cross section of the o-ring");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "One Dimension to the ID or OD of the gland only, and then dimension the gland width. Otherwise total tolerance stackup is too large and causes problems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This enables the ID or OD tolerance to only affect stretch or radial compression");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This enables the gland width tolerance to only affect gland fill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dovetail Glands ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Use the centerline of the gland for machining and stretch calculations");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Always call out a top radius. No top radius callout has resulted in cut o-rings during o-ring installation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dovetail Gland Angle recommended 55-66 degrees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Use 66 degrees for ambient up to approximately 140C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Use 55 degrees for temperatures above approximately 140C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "45 degree angles may have to be used for very small cross section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Half Dovetail Glands ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Greene Tweed does not typically recommend the use of these glands due to very high gland fill, which leads to premature seal failures");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "For large chamber seals, the Greene Tweed half dovetail gland design allows for thermal expansion and could be used for easier installation compared to standard rectangular glands");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stretch is calculated similar to full dovetail glands via centerline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "High Gland Fill is usually the result as there is not enough room for a full dovetail gland");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Only stretch is used to hold the seal in place during installation. If the tool is taken down and the o-ring wiped clean, it may not be reusable as the seal has likely grown slightly and therefore stretch may not exists to hold the seal during re installation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Minimum radii is .005\" due to typical machining standards though sharp edges can occur on dovetail grooves if not called out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserRulesComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All tolerances are based upon AS568A sizes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No tolerance changes allowed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Custom o-ring sizes can result in higher tolerances");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "O-ring Cross Sections ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".070 and .103 (-000 and -100 sizes) cross sections not recommended for high temperatures");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ".139 (-200 size) cross sections will have sealing limitations as ambient as temperatures increase past 200C. Greene Tweed does offer custom seal designs that can seal both at 300C and at ambient temperatures.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".210 and .275 (-300 and -400 sizes) cross sections recommended for highest temperatures when the user wants to use standard o-ring sizes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Each material has a maximum temperature limit.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "selected": a0
      };
    };

    var UserRulesComponent = /*#__PURE__*/function () {
      function UserRulesComponent() {
        _classCallCheck(this, UserRulesComponent);

        this.collapsed = false;
        this.collapsedOring = false;
        this.collapsedSizing = false;
      }

      _createClass(UserRulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserRulesComponent;
    }();

    UserRulesComponent.ɵfac = function UserRulesComponent_Factory(t) {
      return new (t || UserRulesComponent)();
    };

    UserRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRulesComponent,
      selectors: [["user-rules"]],
      decls: 12,
      vars: 12,
      consts: [["id", "siderule", 1, "user-rules", "m-b-5"], [1, "user-rules__header", 3, "ngClass", "click"], ["class", "user-rules__rules in", 4, "ngIf"], ["id", "siderules", 1, "user-rules", "m-b-5"], [1, "user-rules__rules", "in"]],
      template: function UserRulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_1_listener() {
            return ctx.collapsed = !ctx.collapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parameters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserRulesComponent_div_3_Template, 26, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_5_listener() {
            return ctx.collapsedOring = !ctx.collapsedOring;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gland Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserRulesComponent_div_7_Template, 43, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_9_listener() {
            return ctx.collapsedSizing = !ctx.collapsedSizing;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "O-ring Sizing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserRulesComponent_div_11_Template, 18, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.collapsed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.collapsedOring));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsedOring);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.collapsedSizing));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsedSizing);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".m-b-5[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%] {\r\n    border: 1px solid #d2d2d2;\r\n}\r\n\r\n.user-rules__header[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #225a8a;\r\n    font-weight: 400;\r\n    \r\n    padding: 10px 15px;\r\n    background: url(/assets/img/icon_plus_userheading.png) no-repeat right center;\r\n    cursor: pointer;\r\n}\r\n\r\n.user-rules__header.selected[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_minus_userheading.png) no-repeat right center;\r\n    cursor: pointer;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%] {\r\n    padding: 10px 15px 15px;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_arrow_userlist.png) no-repeat 0px 5px;\r\n    padding-left: 15px;\r\n    margin-bottom: 10px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 1px;\r\n    background: #4d4d4d;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 6px;\r\n}\r\n\r\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 14px;\r\n    margin: 9px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1ydWxlcy91c2VyLXJ1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLDZFQUE2RTtJQUM3RSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItcnVsZXMvdXNlci1ydWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tYi01IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnVzZXItcnVsZXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxufVxyXG5cclxuLnVzZXItcnVsZXNfX2hlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjMjI1YThhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyOyAqL1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fcGx1c191c2VyaGVhZGluZy5wbmcpIG5vLXJlcGVhdCByaWdodCBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLXJ1bGVzX19oZWFkZXIuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fbWludXNfdXNlcmhlYWRpbmcucG5nKSBuby1yZXBlYXQgcmlnaHQgY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci1ydWxlcyAudXNlci1ydWxlc19fcnVsZXMgdWwsIC51c2VyLXJ1bGVzIC51c2VyLXJ1bGVzX19ydWxlcyB1bCBsaSB1bCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLXJ1bGVzIC51c2VyLXJ1bGVzX19ydWxlcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTVweDtcclxufVxyXG5cclxuLnVzZXItcnVsZXMgLnVzZXItcnVsZXNfX3J1bGVzIHVsIGxpIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9pY29uX2Fycm93X3VzZXJsaXN0LnBuZykgbm8tcmVwZWF0IDBweCA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi51c2VyLXJ1bGVzIC51c2VyLXJ1bGVzX19ydWxlcyBwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG5cclxuLnVzZXItcnVsZXMgLnVzZXItcnVsZXNfX3J1bGVzIHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gICAgbWFyZ2luOiA5cHggMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-rules',
          templateUrl: './user-rules.component.html',
          styleUrls: ['./user-rules.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/directives/numeric.directive.ts":
  /*!***********************************************************!*\
    !*** ./client/app/shared/directives/numeric.directive.ts ***!
    \***********************************************************/

  /*! exports provided: NumericDirective */

  /***/
  function clientAppSharedDirectivesNumericDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumericDirective", function () {
      return NumericDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NumericDirective = /*#__PURE__*/function () {
      function NumericDirective(el, control) {
        _classCallCheck(this, NumericDirective);

        this.el = el;
        this.control = control;
        this.decimals = 0;
        this.maxLength = 6;
        this.isFormatInputOnBlur = true;
        this.isNegetiveNumber = true;
      }

      _createClass(NumericDirective, [{
        key: "checkAllowNegative",
        value: function checkAllowNegative(value) {
          if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^-?\d+$/));
          } else {
            var regExpString = "^-?\\s*((\\d{0," + this.maxLength + "}?(\\.\\d{0," + this.decimals + "})?)|((\\d*(\\.\\d{1," + this.decimals + "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
          }
        }
      }, {
        key: "check",
        value: function check(value) {
          if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
          } else {
            var regExpString = "^\\s*((\\d{0," + this.maxLength + "}?(\\.\\d{0," + this.decimals + "})?)|((\\d*(\\.\\d{1," + this.decimals + "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
          }
        }
      }, {
        key: "run",
        value: function run(oldValue, event) {
          var _this16 = this;

          setTimeout(function () {
            var currentValue = _this16.el.nativeElement.value;
            var allowNegative = _this16.isNegetiveNumber;

            if (allowNegative) {
              if (!["", "-"].includes(currentValue) && !_this16.checkAllowNegative(currentValue)) {
                // event.preventDefault();
                // event.stopPropagation();
                //  event.stopImmediatePropagation();
                _this16.el.nativeElement.value = oldValue;
              }
            } else {
              if (currentValue !== "" && !_this16.check(currentValue)) {
                // // event.preventDefault();
                _this16.el.nativeElement.value = oldValue; // event.stopPropagation();
                //  event.stopImmediatePropagation();
              }
            }
          });
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          this.run(this.el.nativeElement.value, event);
        }
      }, {
        key: "onPaste",
        value: function onPaste(event) {
          this.run(this.el.nativeElement.value, event);
        }
      }, {
        key: "onBlur",
        value: function onBlur(event) {
          if (!this.isFormatInputOnBlur) {
            return;
          }

          var current = this.el.nativeElement.value;

          if (current) {
            // const transformedValue = this.decimalPipe.transform(+(current), `0.${this.decimals}-${this.decimals}`);
            var transformedValue = this.formatNumber(current);
            this.el.nativeElement.value = transformedValue;

            if (this.control.control) {
              this.control.control.setValue(transformedValue);
            }
          }
        } // format number to decimal places

      }, {
        key: "formatNumber",
        value: function formatNumber(val) {
          if (!val) {
            return '';
          }

          var clean = val.replace(/[^0-9\.]/g, '');
          var negativeCheck = clean.split('-');
          var decimalCheck = clean.split('.');

          if (negativeCheck[1]) {
            negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
            clean = negativeCheck[0] + '-' + negativeCheck[1];

            if (negativeCheck[0].length > 0) {
              clean = negativeCheck[0];
            }
          }

          if (decimalCheck[1]) {
            decimalCheck[1] = decimalCheck[1].slice(0, this.decimals);
            clean = decimalCheck[0] + '.' + decimalCheck[1];
          } else {
            // clean = (+decimalCheck[0]).toFixed(this.decimals);
            clean = decimalCheck[0];
          }

          if (clean) {
            clean = (+clean).toFixed(this.decimals).toString();
          }

          return clean;
        }
      }]);

      return NumericDirective;
    }();

    NumericDirective.ɵfac = function NumericDirective_Factory(t) {
      return new (t || NumericDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]));
    };

    NumericDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumericDirective,
      selectors: [["", "numeric", ""]],
      hostBindings: function NumericDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NumericDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("paste", function NumericDirective_paste_HostBindingHandler($event) {
            return ctx.onPaste($event);
          })("blur", function NumericDirective_blur_HostBindingHandler($event) {
            return ctx.onBlur($event);
          });
        }
      },
      inputs: {
        decimals: "decimals",
        maxLength: "maxLength",
        isFormatInputOnBlur: "isFormatInputOnBlur",
        isNegetiveNumber: "isNegetiveNumber"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[numeric]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]
        }];
      }, {
        decimals: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['decimals']
        }],
        maxLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['maxLength']
        }],
        isFormatInputOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['isFormatInputOnBlur']
        }],
        isNegetiveNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['isNegetiveNumber']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["keydown", ["$event"]]
        }],
        onPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["paste", ["$event"]]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['blur', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/shared/helpers/constants.ts":
  /*!************************************************!*\
    !*** ./client/app/shared/helpers/constants.ts ***!
    \************************************************/

  /*! exports provided: copyPasteObjKey, HTTP_SPINNER, supportEmail, calculatedDataKeys, calculationType, rectangleType, glandType, Validators, ORingTool_InternalVacuumOnly_Validators, ORingTool_DovetailGlandVacuumOnly_Validators, ORingTool_Half_DovetailGlandVacuumOnly_Validators, ORingTool_RactangleExternalVacuumOnly_Validators, GlandSizeCalc_InternalVacuumOnly_Validators, GlandSizeCalc_DovetailGlandVacuumOnly_Validators, GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators, WrArCalc_PressIn_Validators, WrArCalc_FloatingIn_Validators, Units, UnitsAbbreviation, Measures, UnitsDecimalPlaces, Temperature, CalculatorOption, LoggingLevels, CalculatorTypes, CalculatorGroup, ControlType, ControlSubType, TextboxType, TemperatureCelsiusCode, TemperatureFahrenheitCode, DropdownChooseOptionTitle, ButtonActionKeys, ErrorTypes, ActionType */

  /***/
  function clientAppSharedHelpersConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyPasteObjKey", function () {
      return copyPasteObjKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_SPINNER", function () {
      return HTTP_SPINNER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportEmail", function () {
      return supportEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calculatedDataKeys", function () {
      return calculatedDataKeys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calculationType", function () {
      return calculationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rectangleType", function () {
      return rectangleType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "glandType", function () {
      return glandType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingTool_InternalVacuumOnly_Validators", function () {
      return ORingTool_InternalVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingTool_DovetailGlandVacuumOnly_Validators", function () {
      return ORingTool_DovetailGlandVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingTool_Half_DovetailGlandVacuumOnly_Validators", function () {
      return ORingTool_Half_DovetailGlandVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingTool_RactangleExternalVacuumOnly_Validators", function () {
      return ORingTool_RactangleExternalVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_InternalVacuumOnly_Validators", function () {
      return GlandSizeCalc_InternalVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_DovetailGlandVacuumOnly_Validators", function () {
      return GlandSizeCalc_DovetailGlandVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators", function () {
      return GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrArCalc_PressIn_Validators", function () {
      return WrArCalc_PressIn_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrArCalc_FloatingIn_Validators", function () {
      return WrArCalc_FloatingIn_Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Units", function () {
      return Units;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsAbbreviation", function () {
      return UnitsAbbreviation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Measures", function () {
      return Measures;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitsDecimalPlaces", function () {
      return UnitsDecimalPlaces;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Temperature", function () {
      return Temperature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorOption", function () {
      return CalculatorOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingLevels", function () {
      return LoggingLevels;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorTypes", function () {
      return CalculatorTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorGroup", function () {
      return CalculatorGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlType", function () {
      return ControlType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlSubType", function () {
      return ControlSubType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextboxType", function () {
      return TextboxType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureCelsiusCode", function () {
      return TemperatureCelsiusCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureFahrenheitCode", function () {
      return TemperatureFahrenheitCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownChooseOptionTitle", function () {
      return DropdownChooseOptionTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonActionKeys", function () {
      return ButtonActionKeys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorTypes", function () {
      return ErrorTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionType", function () {
      return ActionType;
    });

    var copyPasteObjKey = "lastCalculatedData";
    var HTTP_SPINNER = "HTTP_SPINNER";
    var supportEmail;

    (function (supportEmail) {
      supportEmail["EmailPressIn"] = "athrash@gtweed.com";
      supportEmail["EmailWrAr"] = "tshirayama@gtweed.com";
    })(supportEmail || (supportEmail = {}));

    var calculatedDataKeys;

    (function (calculatedDataKeys) {
      calculatedDataKeys["RECTANGULAR_GLAND_INTERNAL"] = "RECTANGULAR_GLAND_INTERNAL";
      calculatedDataKeys["RECTANGULAR_GLAND_EXTERNAL"] = "RECTANGULAR_GLAND_EXTERNAL";
      calculatedDataKeys["DOVETAIL_GLAND"] = "DOVETAIL_GLAND";
      calculatedDataKeys["HALF_DOVETAIL_GLAND"] = "HALF_DOVETAIL_GLAND";
    })(calculatedDataKeys || (calculatedDataKeys = {}));

    var calculationType;

    (function (calculationType) {
      calculationType["ORING_SIZING"] = "oringSizing";
      calculationType["GLAND_SIZING"] = "glandSizing";
    })(calculationType || (calculationType = {}));

    var rectangleType;

    (function (rectangleType) {
      rectangleType["RECTANGLE_OD"] = "rectangleOD";
    })(rectangleType || (rectangleType = {}));

    var glandType;

    (function (glandType) {
      glandType["RECTANGLE"] = "rectangle";
      glandType["DOVETAIL"] = "dovetail";
      glandType["HALF_DOVETAIL"] = "halfDovetail";
    })(glandType || (glandType = {}));

    var Validators;

    (function (Validators) {
      Validators["NUMBER_VALIDATOR"] = "NUMBER_VALIDATOR";
    })(Validators || (Validators = {}));

    var ORingTool_InternalVacuumOnly_Validators;

    (function (ORingTool_InternalVacuumOnly_Validators) {
      ORingTool_InternalVacuumOnly_Validators["GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION"] = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION";
      ORingTool_InternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_InternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_VALIDATION"] = "BOTTOM_RADII_NOMINAL_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["O_RING_ID_VALIDATION"] = "O_RING_ID_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_InternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(ORingTool_InternalVacuumOnly_Validators || (ORingTool_InternalVacuumOnly_Validators = {}));

    var ORingTool_DovetailGlandVacuumOnly_Validators;

    (function (ORingTool_DovetailGlandVacuumOnly_Validators) {
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_NOMINAL_VALIDATION"] = "GLAND_ANGLE_NOMINAL_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MIN_VALIDATION"] = "GLAND_ANGLE_MIN_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MAX_VALIDATION"] = "GLAND_ANGLE_MAX_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_NOMINAL_VALIDATION"] = "GLAND_WIDTH_NOMINAL_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MIN_VALIDATION"] = "GLAND_WIDTH_MIN_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MAX_VALIDATION"] = "GLAND_WIDTH_MAX_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION"] = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(ORingTool_DovetailGlandVacuumOnly_Validators || (ORingTool_DovetailGlandVacuumOnly_Validators = {}));

    var ORingTool_Half_DovetailGlandVacuumOnly_Validators;

    (function (ORingTool_Half_DovetailGlandVacuumOnly_Validators) {
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_NOMINAL_VALIDATION"] = "GLAND_ANGLE_NOMINAL_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MIN_VALIDATION"] = "GLAND_ANGLE_MIN_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MAX_VALIDATION"] = "GLAND_ANGLE_MAX_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_NOMINAL_VALIDATION"] = "GLAND_WIDTH_NOMINAL_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MIN_VALIDATION"] = "GLAND_WIDTH_MIN_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MAX_VALIDATION"] = "GLAND_WIDTH_MAX_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION"] = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_Half_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(ORingTool_Half_DovetailGlandVacuumOnly_Validators || (ORingTool_Half_DovetailGlandVacuumOnly_Validators = {}));

    var ORingTool_RactangleExternalVacuumOnly_Validators;

    (function (ORingTool_RactangleExternalVacuumOnly_Validators) {
      ORingTool_RactangleExternalVacuumOnly_Validators["GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION"] = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION";
      ORingTool_RactangleExternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
      ORingTool_RactangleExternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_VALIDATION"] = "BOTTOM_RADII_NOMINAL_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_ID_VALIDATION"] = "O_RING_ID_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
      ORingTool_RactangleExternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(ORingTool_RactangleExternalVacuumOnly_Validators || (ORingTool_RactangleExternalVacuumOnly_Validators = {}));

    var GlandSizeCalc_InternalVacuumOnly_Validators;

    (function (GlandSizeCalc_InternalVacuumOnly_Validators) {
      GlandSizeCalc_InternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      GlandSizeCalc_InternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
      GlandSizeCalc_InternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      GlandSizeCalc_InternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(GlandSizeCalc_InternalVacuumOnly_Validators || (GlandSizeCalc_InternalVacuumOnly_Validators = {}));

    var GlandSizeCalc_DovetailGlandVacuumOnly_Validators;

    (function (GlandSizeCalc_DovetailGlandVacuumOnly_Validators) {
      GlandSizeCalc_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      GlandSizeCalc_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
      GlandSizeCalc_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      GlandSizeCalc_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(GlandSizeCalc_DovetailGlandVacuumOnly_Validators || (GlandSizeCalc_DovetailGlandVacuumOnly_Validators = {}));

    var GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators;

    (function (GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators) {
      GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
      GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
      GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
      GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
    })(GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators || (GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators = {})); // WrAr


    var WrArCalc_PressIn_Validators;

    (function (WrArCalc_PressIn_Validators) {
      WrArCalc_PressIn_Validators["CLEARANCE_VALIDATION"] = "CLEARANCE_VALIDATION";
      WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_MIN"] = "SERVICE_STORAGE_TEMPERATURE_MIN";
      WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_MAX"] = "SERVICE_STORAGE_TEMPERATURE_MAX";
    })(WrArCalc_PressIn_Validators || (WrArCalc_PressIn_Validators = {}));

    var WrArCalc_FloatingIn_Validators;

    (function (WrArCalc_FloatingIn_Validators) {
      WrArCalc_FloatingIn_Validators["CLEARANCE_VALIDATION"] = "CLEARANCE_VALIDATION";
      WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_MIN"] = "SERVICE_STORAGE_TEMPERATURE_MIN";
      WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_MAX"] = "SERVICE_STORAGE_TEMPERATURE_MAX";
    })(WrArCalc_FloatingIn_Validators || (WrArCalc_FloatingIn_Validators = {}));

    var Units;

    (function (Units) {
      Units[Units["INCH"] = 1] = "INCH";
      Units[Units["MILLI_METER"] = 2] = "MILLI_METER";
    })(Units || (Units = {}));

    var UnitsAbbreviation;

    (function (UnitsAbbreviation) {
      UnitsAbbreviation["INCH"] = "in";
      UnitsAbbreviation["MILLI_METER"] = "mm";
    })(UnitsAbbreviation || (UnitsAbbreviation = {}));

    var Measures;

    (function (Measures) {
      Measures[Measures["Imperial"] = 1] = "Imperial";
      Measures[Measures["Metric"] = 2] = "Metric";
    })(Measures || (Measures = {}));

    var UnitsDecimalPlaces;

    (function (UnitsDecimalPlaces) {
      UnitsDecimalPlaces[UnitsDecimalPlaces["INCH"] = 3] = "INCH";
      UnitsDecimalPlaces[UnitsDecimalPlaces["MILLI_METER"] = 2] = "MILLI_METER";
    })(UnitsDecimalPlaces || (UnitsDecimalPlaces = {}));

    var Temperature;

    (function (Temperature) {
      Temperature[Temperature["FAHRENHEIT"] = 1] = "FAHRENHEIT";
      Temperature[Temperature["CELCIUS"] = 2] = "CELCIUS";
    })(Temperature || (Temperature = {}));

    var CalculatorOption;

    (function (CalculatorOption) {
      CalculatorOption[CalculatorOption["Nominal"] = 1] = "Nominal";
      CalculatorOption[CalculatorOption["WithTolerance"] = 2] = "WithTolerance";
      CalculatorOption[CalculatorOption["WithMinMax"] = 3] = "WithMinMax";
    })(CalculatorOption || (CalculatorOption = {}));

    var LoggingLevels;

    (function (LoggingLevels) {
      LoggingLevels[LoggingLevels["error"] = 0] = "error";
      LoggingLevels[LoggingLevels["warn"] = 1] = "warn";
      LoggingLevels[LoggingLevels["info"] = 2] = "info";
      LoggingLevels[LoggingLevels["verbose"] = 3] = "verbose";
      LoggingLevels[LoggingLevels["debug"] = 4] = "debug";
      LoggingLevels[LoggingLevels["silly"] = 5] = "silly";
    })(LoggingLevels || (LoggingLevels = {}));

    var CalculatorTypes;

    (function (CalculatorTypes) {
      CalculatorTypes[CalculatorTypes["ORingInternalVacuumOnly"] = 1] = "ORingInternalVacuumOnly";
      CalculatorTypes[CalculatorTypes["ORingDovetailGlandVacuumOnly"] = 2] = "ORingDovetailGlandVacuumOnly";
      CalculatorTypes[CalculatorTypes["ORingHalfDovetailGlandInternalVacuumOnly"] = 3] = "ORingHalfDovetailGlandInternalVacuumOnly";
      CalculatorTypes[CalculatorTypes["ORingRectangularGlandExternalVacuumOnly"] = 4] = "ORingRectangularGlandExternalVacuumOnly";
      CalculatorTypes[CalculatorTypes["WrArPressIn"] = 5] = "WrArPressIn";
      CalculatorTypes[CalculatorTypes["WrArFloating"] = 6] = "WrArFloating";
    })(CalculatorTypes || (CalculatorTypes = {}));

    var CalculatorGroup;

    (function (CalculatorGroup) {
      CalculatorGroup[CalculatorGroup["ORingNGlandCalcs"] = 1] = "ORingNGlandCalcs";
      CalculatorGroup[CalculatorGroup["WrArCalcs"] = 2] = "WrArCalcs";
    })(CalculatorGroup || (CalculatorGroup = {}));

    var ControlType;

    (function (ControlType) {
      ControlType["label"] = "label";
      ControlType["textbox"] = "textbox";
      ControlType["numerictextbox"] = "numerictextbox";
      ControlType["dropdown"] = "dropdown";
      ControlType["button"] = "button";
      ControlType["html"] = "html";
    })(ControlType || (ControlType = {})); // enum to seperate specific purpose controls


    var ControlSubType;

    (function (ControlSubType) {
      ControlSubType["unit"] = "unit";
      ControlSubType["unitLabel"] = "unitlabel";
      ControlSubType["outputHeaderUnitLabel"] = "outputHeaderUnitLabel";
      ControlSubType["pressureLabel"] = "pressureLabel";
      ControlSubType["temperature"] = "temperature";
      ControlSubType["temperatureLabel"] = "temperaturelabel";
      ControlSubType["degree"] = "degree";
      ControlSubType["degreeLabel"] = "degreelabel";
      ControlSubType["material_choice_dropdown"] = "materialchoicedropdown";
      ControlSubType["button"] = "button";
      ControlSubType["calculated_label"] = "calculatedlabel";
      ControlSubType["calculatedDegreeLabel"] = "calculatedDegreeLabel";
      ControlSubType["arWrPumptypeDropdown"] = "arWrPumptypeDropdown";
      ControlSubType["arWrComponenttypeDropdown"] = "arWrComponenttypeDropdown";
      ControlSubType["arWrCompositetypeDropdown"] = "arWrCompositetypeDropdown";
      ControlSubType["arWrInterFerenceTargetPressInDropdown"] = "arWrInterFerenceTargetPressInDropdown";
      ControlSubType["arWrClearanceTargetDropdown"] = "arWrClearanceTargetDropdown";
      ControlSubType["arWrRotatingMaterial"] = "arWrRotatingMaterial";
      ControlSubType["arWrStationaryMaterial"] = "arWrStationaryMaterial";
      ControlSubType["cteUnitLabel"] = "cteUnitLabel";
    })(ControlSubType || (ControlSubType = {}));

    var TextboxType;

    (function (TextboxType) {
      TextboxType["text"] = "text";
      TextboxType["password"] = "password";
      TextboxType["number"] = "number";
    })(TextboxType || (TextboxType = {}));

    var TemperatureCelsiusCode;

    (function (TemperatureCelsiusCode) {
      TemperatureCelsiusCode["UNICODE"] = "U+02103";
      TemperatureCelsiusCode["HEX_CODE"] = "&#x2103";
      TemperatureCelsiusCode["HTML_CODE"] = "&#8451";
      TemperatureCelsiusCode["CSS_CODE"] = "2103";
      TemperatureCelsiusCode["HEXA_DECIMAL_CODE"] = "\xB0C";
    })(TemperatureCelsiusCode || (TemperatureCelsiusCode = {}));

    var TemperatureFahrenheitCode;

    (function (TemperatureFahrenheitCode) {
      TemperatureFahrenheitCode["UNICODE"] = "U+02109";
      TemperatureFahrenheitCode["HEX_CODE"] = "&#x2109";
      TemperatureFahrenheitCode["HTML_CODE"] = "&#8457";
      TemperatureFahrenheitCode["CSS_CODE"] = "2109";
      TemperatureFahrenheitCode["HEXA_DECIMAL_CODE"] = "\xB0F";
    })(TemperatureFahrenheitCode || (TemperatureFahrenheitCode = {}));

    var DropdownChooseOptionTitle;

    (function (DropdownChooseOptionTitle) {
      DropdownChooseOptionTitle["MaterialChoiceDropdown"] = "Select Material";
      DropdownChooseOptionTitle["DefaultDropdown"] = "Select";
    })(DropdownChooseOptionTitle || (DropdownChooseOptionTitle = {}));

    var ButtonActionKeys;

    (function (ButtonActionKeys) {
      ButtonActionKeys["DashSizeDetail"] = "DashSizeDetail";
    })(ButtonActionKeys || (ButtonActionKeys = {}));

    var ErrorTypes;

    (function (ErrorTypes) {
      ErrorTypes[ErrorTypes["Error"] = 1] = "Error";
      ErrorTypes[ErrorTypes["Warning"] = 2] = "Warning";
    })(ErrorTypes || (ErrorTypes = {}));

    var ActionType;

    (function (ActionType) {
      ActionType[ActionType["Paste"] = 1] = "Paste";
    })(ActionType || (ActionType = {}));
    /***/

  },

  /***/
  "./client/app/shared/services/ar-wr-drop-down-data.service.ts":
  /*!********************************************************************!*\
    !*** ./client/app/shared/services/ar-wr-drop-down-data.service.ts ***!
    \********************************************************************/

  /*! exports provided: ArWrDropDownDataService */

  /***/
  function clientAppSharedServicesArWrDropDownDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArWrDropDownDataService", function () {
      return ArWrDropDownDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ArWrDropDownDataService = /*#__PURE__*/function () {
      function ArWrDropDownDataService(_http) {
        _classCallCheck(this, ArWrDropDownDataService);

        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api; // properties for dropdown items

        this.dropdownItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.dropdownItems$ = this.dropdownItemsSubject.asObservable();
      }

      _createClass(ArWrDropDownDataService, [{
        key: "getCurrentDropdownItems",
        value: function getCurrentDropdownItems() {
          return this.dropdownItems;
        }
      }, {
        key: "sendDropdownItems",
        value: function sendDropdownItems(val) {
          this.dropdownItems = val;
        }
      }, {
        key: "getDropdownsItemsByKey",
        value: function getDropdownsItemsByKey(key) {
          if (this.dropdownItems && key) {
            return this.dropdownItems[key];
          } else {
            return [];
          }
        }
      }, {
        key: "getDropdownItems",
        value: function getDropdownItems() {
          return this._http.get("".concat(this.baseUrl, "wrar/getdropdownitems"));
        }
      }, {
        key: "dropdownItems",
        get: function get() {
          return this.dropdownItemsSubject.getValue();
        },
        set: function set(val) {
          this.dropdownItemsSubject.next(val);
        }
      }]);

      return ArWrDropDownDataService;
    }();

    ArWrDropDownDataService.ɵfac = function ArWrDropDownDataService_Factory(t) {
      return new (t || ArWrDropDownDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ArWrDropDownDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArWrDropDownDataService,
      factory: ArWrDropDownDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrDropDownDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/auth.service.ts":
  /*!****************************************************!*\
    !*** ./client/app/shared/services/auth.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthService */

  /***/
  function clientAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/auth.model */
    "./client/app/models/auth.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_http, cookieService) {
        _classCallCheck(this, AuthService);

        this._http = _http;
        this.cookieService = cookieService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api; // get token from cookie and initialize the bahaviour subject
        // const storedAuthData = new AuthModel({ token: localStorage.getItem('token')});

        var storedAuthData = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__["AuthModel"]({
          token: cookieService.get('token')
        });
        this.authDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](storedAuthData);
        this.authData = this.authDataSubject.asObservable();
      } // method to get authentication token and store it into cookies


      _createClass(AuthService, [{
        key: "authenticate",
        value: function authenticate() {
          var _this17 = this;

          // return this._http.get(`${this.baseUrl}auth`);
          return this._http.get("".concat(this.baseUrl, "auth")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (respData) {
            // store auth data details and jwt token in local storage to keep auth between page refreshes
            // localStorage.setItem('token', JSON.stringify(respData));
            // localStorage.setItem('token', respData.token);
            // delete token
            if (_this17.cookieService.check('token')) {
              _this17.cookieService["delete"]('token', '/');
            } // set token in cookies


            _this17.cookieService.set('token', respData.token);

            _this17.authDataSubject.next(respData);

            return respData;
          }));
        } // property to get last authentication value

      }, {
        key: "currentAuthValue",
        get: function get() {
          return this.authDataSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/control-base.service.ts":
  /*!************************************************************!*\
    !*** ./client/app/shared/services/control-base.service.ts ***!
    \************************************************************/

  /*! exports provided: ControlBaseService */

  /***/
  function clientAppSharedServicesControlBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlBaseService", function () {
      return ControlBaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/custom-validation.service */
    "./client/app/shared/services/custom-validation.service.ts");

    var ControlBaseService = /*#__PURE__*/function () {
      function ControlBaseService(customValidationService) {
        _classCallCheck(this, ControlBaseService);

        this.customValidationService = customValidationService;
      } // iterate over each control and creates formControl
      // return FormGroup of


      _createClass(ControlBaseService, [{
        key: "toFormGroup",
        value: function toFormGroup(controls, formGroupValidators) {
          var _this18 = this;

          var group = {};
          controls.forEach(function (control) {
            var _a;

            if (control.validation && control.validation.length > 0) {
              var validations = [];

              for (var index = 0; index < control.validation.length; index++) {
                // if not null or undefined
                var validationFunc = _this18.customValidationService.getValidationFunc((_a = control[index]) === null || _a === void 0 ? void 0 : _a.validation);

                if (validationFunc) {
                  return validations.push(validationFunc);
                }
              }

              if (control.required) {
                // merge required validation and other validation
                if (validations.length > 0) {
                  validations = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required].concat(_toConsumableArray(validations));
                } else {
                  validations = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
                }
              } // create form control with value


              group[control.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](control.value || control.defaultvalue || '', validations); // disable controls

              if (control.isDisabled) {
                group[control.key].disable();
              }
            } else {
              // create form control with value
              // add validation and create form control then add to formgroup object
              // adding required validation
              group[control.key] = control.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](control.value || control.defaultvalue || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](control.value || control.defaultvalue || ''); // disable controls

              if (control.isDisabled) {
                group[control.key].disable();
              }
            }
          });
          var fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
          fg.setValidators(formGroupValidators);
          return fg;
        } // input => array or any nested array or iterable object
        // return flattened array

      }, {
        key: "flatten",
        value: function flatten(input) {
          var stack = _toConsumableArray(input);

          var res = [];

          while (stack.length) {
            // pop value from stack
            var next = stack.pop();

            if (Array.isArray(next)) {
              // push back array items, won't modify the original input
              stack.push.apply(stack, _toConsumableArray(next));
            } else {
              res.push(next);
            }
          } // reverse to restore input order


          return res.reverse();
        } // helper method to get the equal size columns

      }, {
        key: "getColumnNumber",
        value: function getColumnNumber(columnLength) {
          if (columnLength <= 12) {
            return 12 / (columnLength || 1);
          } else {
            return 12;
          }
        }
      }]);

      return ControlBaseService;
    }();

    ControlBaseService.ɵfac = function ControlBaseService_Factory(t) {
      return new (t || ControlBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_2__["CustomValidationService"]));
    };

    ControlBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ControlBaseService,
      factory: ControlBaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_2__["CustomValidationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/custom-validation.service.ts":
  /*!*****************************************************************!*\
    !*** ./client/app/shared/services/custom-validation.service.ts ***!
    \*****************************************************************/

  /*! exports provided: CustomValidationService */

  /***/
  function clientAppSharedServicesCustomValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidationService", function () {
      return CustomValidationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../helpers/constants */
    "./client/app/shared/helpers/constants.ts");

    var CustomValidationService = /*#__PURE__*/function () {
      function CustomValidationService() {
        _classCallCheck(this, CustomValidationService);
      }

      _createClass(CustomValidationService, [{
        key: "getValidationFunc",
        value: function getValidationFunc(validationKey) {
          switch (validationKey) {
            // example
            // case Validators.FORBIDDEN_NAME_VALIDATOR: // TODO: just for test remove it 
            //   return forbiddenNameValidator(/bob/i);
            //   break;
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ORingTool_InternalVacuumOnly_Validators"].GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION:
              // return largerThanValidation();
              break;

            default:
              return null;
              break;
          }
        }
      }]);

      return CustomValidationService;
    }();

    CustomValidationService.ɵfac = function CustomValidationService_Factory(t) {
      return new (t || CustomValidationService)();
    };

    CustomValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomValidationService,
      factory: CustomValidationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/error.service.ts":
  /*!*****************************************************!*\
    !*** ./client/app/shared/services/error.service.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorService */

  /***/
  function clientAppSharedServicesErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorService = /*#__PURE__*/function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);
      }

      _createClass(ErrorService, [{
        key: "getClientErrorMessage",
        value: function getClientErrorMessage(error) {
          return error.message ? error.message : error.toString();
        }
      }, {
        key: "getServerErrorMessage",
        value: function getServerErrorMessage(error) {
          return navigator.onLine ? error.message : 'No Internet Connection';
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ɵfac = function ErrorService_Factory(t) {
      return new (t || ErrorService)();
    };

    ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorService,
      factory: ErrorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/global-error-handler.ts":
  /*!************************************************************!*\
    !*** ./client/app/shared/services/global-error-handler.ts ***!
    \************************************************************/

  /*! exports provided: GlobalErrorHandler */

  /***/
  function clientAppSharedServicesGlobalErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
      return GlobalErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error.service */
    "./client/app/shared/services/error.service.ts");
    /* harmony import */


    var _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/toasts-container/toast-service */
    "./client/app/shared/components/toasts-container/toast-service.ts");
    /* harmony import */


    var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/logger.service */
    "./client/app/shared/services/logger.service.ts");
    /* harmony import */


    var _models_log_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/log.model */
    "./client/app/models/log.model.ts"); // core imports
    // application imports


    var GlobalErrorHandler = /*#__PURE__*/function () {
      function GlobalErrorHandler(injector) {
        _classCallCheck(this, GlobalErrorHandler);

        this.injector = injector;
      }

      _createClass(GlobalErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          var _this19 = this;

          var genericMessage = "Something went wrong, please try again later !";
          var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
          var notifier = this.injector.get(_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]);
          var logger = this.injector.get(_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]);
          var message = this.getErrorMessage(error);

          if (message) {
            // notifier
            notifier.showError(genericMessage);
            console.log(message); // notifier.showError(message);
            // log the error message to server logs(Winston Logger)

            var logError = new _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogModel"]({
              message: " Client side error: ".concat(message),
              level: 0
            });
            logger.log(logError).subscribe(function (data) {
              /*console.log("Success in log the error.");*/
            }, function (error) {
              var httpLogError = _this19.getErrorMessage(error);

              var httpLogErrObj = new _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogModel"]({
                message: httpLogError,
                level: 0
              });
              logger.log(httpLogErrObj);
            });
          }
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(error) {
          var errMessage = "";
          var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);

          if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // Server error
            errMessage = errorService.getServerErrorMessage(error);
          } else {
            // Client Error
            errMessage = errorService.getClientErrorMessage(error);
          }

          return errMessage;
        }
      }]);

      return GlobalErrorHandler;
    }();

    GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
      return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandler,
      factory: GlobalErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/helper.service.ts":
  /*!******************************************************!*\
    !*** ./client/app/shared/services/helper.service.ts ***!
    \******************************************************/

  /*! exports provided: HelperService */

  /***/
  function clientAppSharedServicesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/switch-button.model */
    "./client/app/models/switch-button.model.ts");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _models_view_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/view-error.model */
    "./client/app/models/view-error.model.ts");
    /* harmony import */


    var _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/form-control.model */
    "./client/app/models/form-control.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _material_choice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material-choice.service */
    "./client/app/shared/services/material-choice.service.ts");
    /* harmony import */


    var _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/temperature-button/temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts"); // core imports
    // application imports


    var HelperService = /*#__PURE__*/function () {
      function HelperService(modalService, materialChoiceService, temperatureButtonService, unitButtonService) {
        _classCallCheck(this, HelperService);

        this.modalService = modalService;
        this.materialChoiceService = materialChoiceService;
        this.temperatureButtonService = temperatureButtonService;
        this.unitButtonService = unitButtonService;
      }

      _createClass(HelperService, [{
        key: "getUnits",
        value: function getUnits() {
          return [new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][0]],
            display_title: "Inch",
            display_Short_title: "in",
            isActive: true
          }), new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][1]],
            display_title: "Millimeter",
            display_Short_title: "mm",
            isActive: false
          })];
        }
      }, {
        key: "getTemperature",
        value: function getTemperature() {
          return [new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS],
            display_title: "Celsius",
            display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
            isActive: true
          }), new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT],
            display_title: "Fahrenheit",
            display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE,
            isActive: false
          })];
        }
      }, {
        key: "getMeasures",
        value: function getMeasures() {
          return [new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"].Imperial,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][0]],
            display_title: "Imperial",
            display_Short_title: "in",
            isActive: true
          }), new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
            id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"].Metric,
            title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][1]],
            display_title: "Metric",
            display_Short_title: "mm",
            isActive: false
          })];
        } // set default measure/unit for WrAr

      }, {
        key: "setDefaultMeasure",
        value: function setDefaultMeasure() {
          // get measures 
          var measures = this.getMeasures();
          this.unitButtonService.sendUnitValue(measures[0]);
          return measures[0];
        }
      }, {
        key: "convertToInch",
        value: function convertToInch(val, decimalPoint) {
          if (!val && val !== 0) {
            return;
          } // 0.0393701 => 0.03936996


          return (val * 0.03936996).toFixed(decimalPoint || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["UnitsDecimalPlaces"].INCH);
        }
      }, {
        key: "convertToMillimeter",
        value: function convertToMillimeter(val, decimalPoint) {
          if (!val && val !== 0) {
            return;
          }

          return (val * 25.4).toFixed(decimalPoint || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["UnitsDecimalPlaces"].MILLI_METER);
        }
      }, {
        key: "convertFahrenheitToCelcius",
        value: function convertFahrenheitToCelcius(inputTempInFahrenheit) {
          return +((parseFloat(inputTempInFahrenheit) - 32) * 5 / 9).toFixed(3);
        }
        /* This function convert temperature in Celsius to Fahrenheit*/

      }, {
        key: "convertCelciusToFahrenheit",
        value: function convertCelciusToFahrenheit(inputTempInCelsius) {
          return +(parseFloat(inputTempInCelsius) * 9 / 5 + 32).toFixed(3);
        } // modal open helper

      }, {
        key: "openNgbModal",
        value: function openNgbModal(component) {
          var options = {}; //     If true, the backdrop element will be created for a given modal.
          // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.

          options.backdrop = 'static'; // If true, the modal will be closed when Escape key is pressed

          options.keyboard = false;
          var modalRef = this.modalService.open(component, options);
          return modalRef;
        } // group the client error in the respective field or if field already added then check title and error message
        // if field already added then title and similiar error message already exist then do not add error message again
        // if field already added then title exist and similiar error message not already exist then add error message in same title
        // else push new error
        // it will reduce the duplicacy of error messages

      }, {
        key: "groupClientErrors",
        value: function groupClientErrors(errors) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            var groupedErrors = []; // loop on client error

            var _loop = function _loop(index) {
              var clientError = errors[index]; // findIndex of field which already added in grouped errors with field key

              var fieldErrorIndex = groupedErrors.findIndex(function (e) {
                return e.field === clientError.field;
              }); // get index of title in grouped all client errors

              var titleErrorIndex = groupedErrors.findIndex(function (e) {
                return e.title === clientError.title;
              }); // if error doesnot have any titlle then need to show generic message
              // prevent to display multiple generic errors

              if (!clientError.title) {
                // findIndex empty title error in the grouped client error
                var alreadyAddedGenericErrorMessageIndex = groupedErrors.findIndex(function (gError) {
                  var similarErrorDetailIndex = gError.errors.findIndex(function (errorMsg) {
                    if (errorMsg === clientError.detail) {
                      return errorMsg;
                    }
                  });

                  if (!gError.title && similarErrorDetailIndex > -1) {
                    return gError;
                  }
                }); // if not already added client error message then add it

                if (!(alreadyAddedGenericErrorMessageIndex > -1)) {
                  _this20.addErrorToGroupedArray(groupedErrors, clientError);
                }
              } else if (clientError.title && titleErrorIndex > -1) {
                // condition to show the generic message with grouped by title
                // title of error already there in grouped error and already have the specific error detail or error mesage is ther then do not add it again
                // findIndex already added client error message
                var alreadyAddedGenericWarningMessageIndex = groupedErrors[titleErrorIndex].errors.findIndex(function (errorMsg) {
                  if (errorMsg === clientError.detail) {
                    return errorMsg;
                  }
                }); // if not already added client error message then add it

                if (!(alreadyAddedGenericWarningMessageIndex > -1)) {
                  // add client error messages which have title
                  // and field already exist in the grouped client errors
                  groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
                }
              } else if (fieldErrorIndex && fieldErrorIndex > -1 && clientError.title) {
                // add client error messages which have title
                // and field already exist in the grouped client errors
                groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
              } else {
                // add field error
                _this20.addErrorToGroupedArray(groupedErrors, clientError);
              }
            };

            for (var index = 0; index < errors.length; index++) {
              _loop(index);
            }

            return resolve(groupedErrors);
          });
        } // add error to grouped client error array

      }, {
        key: "addErrorToGroupedArray",
        value: function addErrorToGroupedArray(groupedErrors, clientError) {
          var viewError = new _models_view_error_model__WEBPACK_IMPORTED_MODULE_3__["ViewErrorModel"]({
            field: clientError.field,
            title: clientError.title,
            isDetailOpened: clientError.isDetailOpened,
            type: clientError.type,
            errors: [clientError.detail]
          });
          groupedErrors.push(viewError);
        }
      }, {
        key: "setFormValidationErrorToControl",
        value: function setFormValidationErrorToControl(control, field, error) {
          if (error && !control.controls[error.field].errors) {
            // set error to form control
            control.controls[error.field].setErrors(error);
          } else {
            var fc = control.controls[field];

            if (fc) {
              // set error to form control
              control.controls[field].setErrors(error);
            }
          }
        } // set form control errors

      }, {
        key: "setValidationErrorToFormControl",
        value: function setValidationErrorToFormControl(control, error, errorKey) {
          // form control and form control has already setted error
          if (control && control.errors) {
            var errorKeys = Object.keys(control.errors);
            var alreadyControlHaveErrorByKeyIndex = errorKeys.findIndex(function (eKey) {
              if (eKey === errorKey) {
                return eKey;
              }
            });

            if (alreadyControlHaveErrorByKeyIndex > -1 && !error) {
              // formcontrol have error and error is null then delete error from control
              delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];

              if (!(Object.keys(control.errors).length > 0)) {
                control.setErrors(null);
              }
            } else if (alreadyControlHaveErrorByKeyIndex > -1 && error) {
              // formcontrol have error and error is null then delete error from control
              delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];
              control.errors[errorKey] = error;
            } else if (!(alreadyControlHaveErrorByKeyIndex > -1) && error) {
              // formcontrol not have error and error has value
              // not already error added to control then add
              control.errors[errorKey] = error;
            } // else {
            //   control.setErrors(null);
            // }

          } else {
            if (errorKey && error) {
              // set error to form control
              var e = {};
              e[errorKey] = error;
              control.setErrors(e);
            } else {
              control.setErrors(null);
            }
          }
        }
      }, {
        key: "maxOringIdValue",
        value: function maxOringIdValue(unit) {
          if (unit) {
            if (unit && unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
              // millimeter
              return 914.4;
            } else {
              // Inch
              return 36;
            }
          }
        }
      }, {
        key: "bottomRadiiMinLimit",
        value: function bottomRadiiMinLimit(unit) {
          if (unit) {
            if (unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
              // millimeter
              return 0.005 * 25.40;
            } else {
              // Inch
              return 0.005;
            }
          }
        }
      }, {
        key: "bottomRadiiMaxLimit",
        value: function bottomRadiiMaxLimit(unit) {
          if (unit) {
            if (unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
              // millimeter
              return 0.89;
            } else {
              // Inch
              return 0.035;
            }
          }
        } // get material choice

      }, {
        key: "getMaterialChoiceList",
        value: function getMaterialChoiceList(formControlKey) {
          // convert an array object to formControl Array
          var calculatorTypeDDl = [];
          var materialChoices = this.materialChoiceService.getCurrentMaterialChoiceList();

          if (materialChoices && materialChoices.length > 0) {
            for (var index = 0; index < materialChoices.length; index++) {
              var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__["FormControlModel"]({
                key: formControlKey,
                label: materialChoices[index].mname,
                value: materialChoices[index]
              });
              calculatorTypeDDl.push(fc);
            }
          }

          return calculatorTypeDDl;
        } // create and return dropdown items

      }, {
        key: "getDropdownItems",
        value: function getDropdownItems(formControlKey, ddlItems) {
          // convert an array object to formControl Array
          var calculatorTypeDDl = [];

          if (ddlItems && ddlItems.length > 0) {
            for (var index = 0; index < ddlItems.length; index++) {
              var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__["FormControlModel"]({
                key: formControlKey,
                label: ddlItems[index].label,
                value: ddlItems[index]
              });
              calculatorTypeDDl.push(fc);
            }
          }

          return calculatorTypeDDl;
        } // get calculated local stored data

      }, {
        key: "getCalculatedStoredData",
        value: function getCalculatedStoredData(calculatorId) {
          var calculatedData = null;

          switch (calculatorId) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL));
              break;

            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_EXTERNAL));
              break;

            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].DOVETAIL_GLAND));
              break;

            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].HALF_DOVETAIL_GLAND));
              break;

            default:
              break;
          }

          return calculatedData;
        } // check calculated data exist in local storage 

      }, {
        key: "isCalculatedDataExist",
        value: function isCalculatedDataExist(calculatorId) {
          if (!calculatorId) {
            return false;
          }

          var calculatedData = null;

          switch (calculatorId) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL));
              break;

            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_EXTERNAL));
              break;

            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
              calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].DOVETAIL_GLAND));
              break;

            default:
              break;
          }

          if (calculatedData) {
            return true;
          } else {
            return false;
          }
        } // convert form unit controls

      }, {
        key: "convertFormUnitControlValuesAndSet",
        value: function convertFormUnitControlValuesAndSet(calculatorForm, form, selectedUnit) {
          if (!calculatorForm && !form) {
            return;
          } // set unit of left column


          var calculatorLeftColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.left_column.form_layout_row, selectedUnit); // set unit of right column

          var calculatorRightColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.right_column.form_layout_row, selectedUnit);
          return form;
        } // convert form unit controls values

      }, {
        key: "setConvertedUnitValueToForm",
        value: function setConvertedUnitValueToForm(form, rows, selectedUnit) {
          var _this21 = this;

          var _loop2 = function _loop2(row) {
            var _loop3 = function _loop3(column) {
              var _loop4 = function _loop4(control) {
                // check form control key exist 
                var formControlKeys = Object.keys(form.controls);
                var formKeyIndex = formControlKeys.findIndex(function (key) {
                  return key === rows[row].form_layout_columns[column].form_controls[control].key;
                }); // check control sub-type is unit and convert and set the form control value

                if (formKeyIndex > -1 && rows[row].form_layout_columns[column].form_controls[control].sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].unit) {
                  var decimalPoint = rows[row].form_layout_columns[column].form_controls[control].decimal_point;

                  if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH === +selectedUnit.id) {
                    form.controls[formControlKeys[formKeyIndex]].setValue(_this21.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                  } else if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER === +selectedUnit.id) {
                    form.controls[formControlKeys[formKeyIndex]].setValue(_this21.convertToMillimeter(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                  } else {
                    form.controls[formControlKeys[formKeyIndex]].setValue(_this21.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                  }
                }
              };

              // iterate over column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                _loop4(control);
              }
            };

            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              _loop3(column);
            }
          };

          // iterate over left column rows
          for (var row = 0; row < rows.length; row++) {
            _loop2(row);
          }

          return rows;
        }
      }, {
        key: "getBottomRadiiRange",
        value: function getBottomRadiiRange(glandDepthNominalControlValue) {
          var ranges = {
            bottomRadiiWarningMinRange1: 3 / 100 * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMaxRange1: 17 / 100 * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMinRange2: 32 / 100 * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMaxRange2: 33 / 100 * parseFloat(glandDepthNominalControlValue)
          };
          return ranges;
        }
      }, {
        key: "setAndSendTemperatureManually",
        value: function setAndSendTemperatureManually(temperatureId) {
          if (temperatureId === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
            var fahrenheitObj = {
              id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT,
              title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT],
              display_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE,
              display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE,
              isActive: true,
              actionType: 0
            };
            this.temperatureButtonService.sendTemperatureValue(fahrenheitObj);
          }

          if (temperatureId === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS) {
            var celciusObj = {
              id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS,
              title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS],
              display_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
              display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
              isActive: true,
              actionType: 0
            };
            this.temperatureButtonService.sendTemperatureValue(celciusObj);
          }
        } // convert to 10 power -6 to X.XXXXXX

      }, {
        key: "formatToTenPowerSix",
        value: function formatToTenPowerSix(val) {
          return val ? val / 1000000 : 0.000;
        } // convert from 10 power -6 to XX.XX or XX.X or X.X

      }, {
        key: "convertFromNegetivePowerOfSix",
        value: function convertFromNegetivePowerOfSix(value) {
          return value * 1000000;
        }
      }]);

      return HelperService;
    }();

    HelperService.ɵfac = function HelperService_Factory(t) {
      return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_material_choice_service__WEBPACK_IMPORTED_MODULE_6__["MaterialChoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]));
    };

    HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HelperService,
      factory: HelperService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _material_choice_service__WEBPACK_IMPORTED_MODULE_6__["MaterialChoiceService"]
        }, {
          type: _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"]
        }, {
          type: _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/logger.service.ts":
  /*!******************************************************!*\
    !*** ./client/app/shared/services/logger.service.ts ***!
    \******************************************************/

  /*! exports provided: LoggerService */

  /***/
  function clientAppSharedServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoggerService = /*#__PURE__*/function () {
      function LoggerService(_http) {
        _classCallCheck(this, LoggerService);

        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
      }

      _createClass(LoggerService, [{
        key: "log",
        value: function log(body) {
          return this._http.post("".concat(this.baseUrl, "logger/log"), body);
        }
      }]);

      return LoggerService;
    }();

    LoggerService.ɵfac = function LoggerService_Factory(t) {
      return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggerService,
      factory: LoggerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/material-choice.service.ts":
  /*!***************************************************************!*\
    !*** ./client/app/shared/services/material-choice.service.ts ***!
    \***************************************************************/

  /*! exports provided: MaterialChoiceService */

  /***/
  function clientAppSharedServicesMaterialChoiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialChoiceService", function () {
      return MaterialChoiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MaterialChoiceService = /*#__PURE__*/function () {
      function MaterialChoiceService(http) {
        _classCallCheck(this, MaterialChoiceService);

        this.http = http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
        this.materialChoiceListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.materialchoiceList$ = this.materialChoiceListSubject.asObservable();
      }

      _createClass(MaterialChoiceService, [{
        key: "getCurrentMaterialChoiceList",
        value: function getCurrentMaterialChoiceList() {
          return this.materialchoiceList;
        }
      }, {
        key: "sendMaterialChoiceList",
        value: function sendMaterialChoiceList(val) {
          this.materialchoiceList = _toConsumableArray(val);
        }
      }, {
        key: "getMaterialChoice",
        value: function getMaterialChoice() {
          return this.http.get("".concat(this.baseUrl, "common/materialchoice"));
        }
      }, {
        key: "materialchoiceList",
        get: function get() {
          return this.materialChoiceListSubject.getValue();
        },
        set: function set(val) {
          this.materialChoiceListSubject.next(val);
        }
      }]);

      return MaterialChoiceService;
    }();

    MaterialChoiceService.ɵfac = function MaterialChoiceService_Factory(t) {
      return new (t || MaterialChoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    MaterialChoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MaterialChoiceService,
      factory: MaterialChoiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialChoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/services/print.service.ts":
  /*!*****************************************************!*\
    !*** ./client/app/shared/services/print.service.ts ***!
    \*****************************************************/

  /*! exports provided: PrintService */

  /***/
  function clientAppSharedServicesPrintServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintService", function () {
      return PrintService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"); // core imports
    // third party imports
    // (window as any).html2canvas = html2canvas;


    var PrintService = /*#__PURE__*/function () {
      function PrintService(document, spinner) {
        _classCallCheck(this, PrintService);

        this.document = document;
        this.spinner = spinner;
      } // generate pdf


      _createClass(PrintService, [{
        key: "generatePdf",
        value: function generatePdf(fileName) {
          var _this22 = this;

          // show spinner
          this.spinner.show();
          var div = this.document.getElementsByTagName("body")[0]; //document.getElementsByTagName("body")[0];

          var options = {
            background: "white",
            height: div.clientHeight,
            width: div.clientWidth
          }; // hide controls

          var elements = this.document.getElementsByClassName('ignorePdf');
          Array.from(elements).forEach(function (element) {
            element.classList.add("hide");
          });
          html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(div, options).then(function (canvas) {
            var imgWidth = 214; // const pageHeight = 295;

            var imgHeight = canvas.height * imgWidth / canvas.width; // const heightLeft = imgHeight;
            // const contentDataURL = canvas.toDataURL('image/png');

            var position = 0; //Initialize JSPDF

            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__("p", "mm", "a4", 1); //Converting canvas to Image

            var imgData = canvas.toDataURL("image/PNG"); //Add image Canvas to PDF

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
            var pdfOutput = doc.output(); // using ArrayBuffer will allow you to put image inside PDF

            var buffer = new ArrayBuffer(pdfOutput.length);
            var array = new Uint8Array(buffer);

            for (var i = 0; i < pdfOutput.length; i++) {
              array[i] = pdfOutput.charCodeAt(i);
            } //Name of pdf


            var fileNameFullName = "".concat(fileName, ".pdf"); // Make file

            doc.save(fileNameFullName); // show controls

            Array.from(elements).forEach(function (element) {
              element.classList.remove("hide"); // element.classList.add("show");
            }); // show spinner

            _this22.spinner.hide();
          });
        }
      }]);

      return PrintService;
    }();

    PrintService.ɵfac = function PrintService_Factory(t) {
      return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
    };

    PrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PrintService,
      factory: PrintService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/shared/shared.module.ts":
  /*!********************************************!*\
    !*** ./client/app/shared/shared.module.ts ***!
    \********************************************/

  /*! exports provided: SharedModule */

  /***/
  function clientAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/unit-button/unit-button.component */
    "./client/app/shared/components/unit-button/unit-button.component.ts");
    /* harmony import */


    var _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/temperature-button/temperature-button.component */
    "./client/app/shared/components/temperature-button/temperature-button.component.ts");
    /* harmony import */


    var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/temperature-button/temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/custom-controls/textbox/textbox.component */
    "./client/app/shared/components/custom-controls/textbox/textbox.component.ts");
    /* harmony import */


    var _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/custom-controls/switch-button/switch-button.component */
    "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts");
    /* harmony import */


    var _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/custom-controls/drop-down/drop-down.component */
    "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts");
    /* harmony import */


    var _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/calculator-toolbar/calculator-toolbar.component */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
    /* harmony import */


    var _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/user-rules/user-rules.component */
    "./client/app/shared/components/user-rules/user-rules.component.ts");
    /* harmony import */


    var _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/alert-modal/alert-modal.component */
    "./client/app/shared/components/alert-modal/alert-modal.component.ts");
    /* harmony import */


    var _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/custom-controls/numeric-textbox/numeric-textbox.component */
    "./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts");
    /* harmony import */


    var _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/dash-size-details/dash-size-details.component */
    "./client/app/shared/components/dash-size-details/dash-size-details.component.ts");
    /* harmony import */


    var _components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/dash-size-details/dash-size-details.service */
    "./client/app/shared/components/dash-size-details/dash-size-details.service.ts");
    /* harmony import */


    var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./directives/numeric.directive */
    "./client/app/shared/directives/numeric.directive.ts");
    /* harmony import */


    var _services_material_choice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/material-choice.service */
    "./client/app/shared/services/material-choice.service.ts");
    /* harmony import */


    var _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/custom-validation.service */
    "./client/app/shared/services/custom-validation.service.ts");
    /* harmony import */


    var _services_control_base_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/control-base.service */
    "./client/app/shared/services/control-base.service.ts");
    /* harmony import */


    var _services_print_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/print.service */
    "./client/app/shared/services/print.service.ts");
    /* harmony import */


    var _services_error_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/error.service */
    "./client/app/shared/services/error.service.ts");
    /* harmony import */


    var _services_global_error_handler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/global-error-handler */
    "./client/app/shared/services/global-error-handler.ts");
    /* harmony import */


    var _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/toasts-container/toasts-container.component */
    "./client/app/shared/components/toasts-container/toasts-container.component.ts");
    /* harmony import */


    var _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/toasts-container/toast-service */
    "./client/app/shared/components/toasts-container/toast-service.ts");
    /* harmony import */


    var _components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/calculator-toolbar/calculator-toolbar.service */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
    /* harmony import */


    var _services_logger_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/logger.service */
    "./client/app/shared/services/logger.service.ts");
    /* harmony import */


    var _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/measure-button/measure-button.component */
    "./client/app/shared/components/measure-button/measure-button.component.ts");
    /* harmony import */


    var _services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/ar-wr-drop-down-data.service */
    "./client/app/shared/services/ar-wr-drop-down-data.service.ts");
    /* harmony import */


    var _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/tab-nav/tab-nav.component */
    "./client/app/shared/components/tab-nav/tab-nav.component.ts"); // core imports
    // third party imports
    // application imports


    var SharedModule = /*#__PURE__*/function () {
      function SharedModule() {
        _classCallCheck(this, SharedModule);
      }

      _createClass(SharedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: SharedModule,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_20__["CustomValidationService"], _services_control_base_service__WEBPACK_IMPORTED_MODULE_21__["ControlBaseService"], _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"], _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"], _services_material_choice_service__WEBPACK_IMPORTED_MODULE_19__["MaterialChoiceService"], _components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_17__["DashSizeDetailsService"], _services_print_service__WEBPACK_IMPORTED_MODULE_22__["PrintService"], _services_error_service__WEBPACK_IMPORTED_MODULE_23__["ErrorService"], _services_global_error_handler__WEBPACK_IMPORTED_MODULE_24__["GlobalErrorHandler"], _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_26__["ToastService"], _components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_27__["CalculatorToolbarService"], _services_logger_service__WEBPACK_IMPORTED_MODULE_28__["LoggerService"], _services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_30__["ArWrDropDownDataService"]]
          };
        }
      }]);

      return SharedModule;
    }();

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"], _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"], _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"], _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"], _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"], _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"], _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"], _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"], _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"], _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"], _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"], _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"], _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        exports: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"], _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"], _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"], _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"], _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"], _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"], _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"], _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"], _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"], _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"], _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"], _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"], _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"], _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"], _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"], _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"], _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"], _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"], _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"], _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"], _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"], _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"], _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"], _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"], _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          exports: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"], _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"], _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"], _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"], _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"], _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"], _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"], _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"], _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"], _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"], _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"], _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"], _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/environments/environment.ts":
  /*!********************************************!*\
    !*** ./client/environments/environment.ts ***!
    \********************************************/

  /*! exports provided: environment */

  /***/
  function clientEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    // production: false,


    var environment = {
      production: false,
      name: 'dev'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./client/main.ts":
  /*!************************!*\
    !*** ./client/main.ts ***!
    \************************/

  /*! no exports provided */

  /***/
  function clientMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./client/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./client/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!******************************!*\
    !*** multi ./client/main.ts ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Ravindra_Workplace\Projects\GreenTweed\Code\NGv09SMS\client\main.ts */
    "./client/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map