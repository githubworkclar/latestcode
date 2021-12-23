function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oring-and-gland-calc-oring-and-gland-calc-module"], {
  /***/
  "./client/app/oring-and-gland-calc/header/header.component.ts":
  /*!********************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/header/header.component.ts ***!
    \********************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function clientAppOringAndGlandCalcHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 0,
      consts: [[1, "gt-banner"], [1, "container"], [1, "gt-header-graphic"], [1, "heading"], [1, "gt-header-logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " O-Ring Analysis & Gland Design Calculator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(For Vacuum System Only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".gt-banner[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/semicalculator-header-img.jpg) no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    height: 175px;\r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 49%;\r\n    -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    color: #fff;\r\n    font-size: 32px;\r\n    width: 80%;\r\n    \r\n    font-family: \"nimbus_san_nov_con\", Arial, sans-serif;\r\n    margin: 0px 20px 0 250px;\r\n    font-weight: 700;\r\n    \r\n    \r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    display: block;\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n    text-shadow: none;\r\n}\r\n\r\n.gt-header-logo[_ngcontent-%COMP%] {\r\n    margin-top: -15px;\r\n    position: absolute;\r\n    \r\n    \r\n    background: url(/assets/img/GTLogo_White-semicalc.png) no-repeat;\r\n    width: 147px;\r\n    height: 54px;\r\n    background-size: contain;\r\n}\r\n\r\n\r\n\r\n@media (max-width:600px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        width: 72%;\r\n        left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        width: 48%;\r\n        padding-top: 0px;\r\n    }\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .gt-header-logo[_ngcontent-%COMP%] {\r\n        width: 112px;\r\n        height: 42px;\r\n        background-size: 112px;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media (min-width:768px) and (max-width:990px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n        width: 58%;\r\n    }\r\n}\r\n\r\n@media (max-width:1060px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 28px;\r\n        width: 73%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0VBQW9FO0lBQ3BFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsK0JBQStCO0lBRS9CLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixtREFBbUQ7SUFDbkQsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0VBQWdFO0lBQ2hFLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSTtRQUNJLFVBQVU7UUFDVixPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndC1iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3NlbWljYWxjdWxhdG9yLWhlYWRlci1pbWcuanBnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ndC1iYW5uZXIgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG4uZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDklO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFwibmltYnVzLXNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogXCJuaW1idXNfc2FuX25vdl9jb25cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDAgMjUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLyogbGV0dGVyLXNwYWNpbmc6IDBweDsgKi9cclxuICAgIC8qIHRleHQtc2hhZG93OiAycHggMnB4IDAgIzFiMzc2NjsgKi9cclxufVxyXG5cclxuLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5ndC1oZWFkZXItbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHJpZ2h0OiAxMnB4OyAqL1xyXG4gICAgLyogYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0dUTG9nb19XaGl0ZS1zZW1pY2FsYy5wbmcpIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxNDdweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLyogbWVkaWEgcXVlcnkgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZ3QtaGVhZGVyLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5ndC1oZWFkZXItZ3JhcGhpYyB7XHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2d0LWhlYWRlci1ncmFwaGljLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAxMzRweDtcclxuICAgICAgICBoZWlnaHQ6IDExOHB4OyAqXHJcbiAgICB9XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTBweCkge1xyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNjBweCkge1xyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MyU7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ORingAndGlandCalcRoutingModule */

  /***/
  function clientAppOringAndGlandCalcOringAndGlandCalcRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingAndGlandCalcRoutingModule", function () {
      return ORingAndGlandCalcRoutingModule;
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


    var _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./oring-and-gland-calc.component */
    "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts"); // core imports
    // application imports


    var routes = [{
      path: '',
      component: _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__["OringAndGlandCalcComponent"],
      children: [{
        path: 'evaluateoringglands',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | rectangular-o-ring-calc-rectangular-o-ring-calc-module */
          "rectangular-o-ring-calc-rectangular-o-ring-calc-module").then(__webpack_require__.bind(null,
          /*! ./rectangular-o-ring-calc/rectangular-o-ring-calc.module */
          "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.module.ts")).then(function (m) {
            return m.RectangularORingCalcModule;
          });
        }
      }, {
        path: 'evaluateglandsizecalculatorsglands',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rectangle-gland-calc-rectangle-gland-calc-module */
          [__webpack_require__.e("common"), __webpack_require__.e("rectangle-gland-calc-rectangle-gland-calc-module")]).then(__webpack_require__.bind(null,
          /*! ./rectangle-gland-calc/rectangle-gland-calc.module */
          "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.module.ts")).then(function (m) {
            return m.RectangleGlandCalcModule;
          });
        }
      }]
    }];

    var ORingAndGlandCalcRoutingModule = function ORingAndGlandCalcRoutingModule() {
      _classCallCheck(this, ORingAndGlandCalcRoutingModule);
    };

    ORingAndGlandCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ORingAndGlandCalcRoutingModule
    });
    ORingAndGlandCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ORingAndGlandCalcRoutingModule_Factory(t) {
        return new (t || ORingAndGlandCalcRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingAndGlandCalcRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingAndGlandCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts":
  /*!***************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts ***!
    \***************************************************************************/

  /*! exports provided: OringAndGlandCalcComponent */

  /***/
  function clientAppOringAndGlandCalcOringAndGlandCalcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OringAndGlandCalcComponent", function () {
      return OringAndGlandCalcComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./client/app/oring-and-gland-calc/header/header.component.ts");
    /* harmony import */


    var _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components/tab-nav/tab-nav.component */
    "./client/app/shared/components/tab-nav/tab-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Core imports


    var OringAndGlandCalcComponent = /*#__PURE__*/function () {
      function OringAndGlandCalcComponent() {
        _classCallCheck(this, OringAndGlandCalcComponent);

        // tabs
        this.oRingTabs = [{
          linkLabel: "O-ring/GLAND Analysis Tool",
          rootModuleRoute: "evaluateoringglands",
          childrenModuleRoute: "/oringgland/evaluateoringglands/createRectangularORing",
          pathExactmatch: false
        }, {
          linkLabel: "Gland Size Calculator",
          rootModuleRoute: "evaluateglandsizecalculatorsglands",
          childrenModuleRoute: "/oringgland/evaluateglandsizecalculatorsglands/createRectangleGland",
          pathExactmatch: false
        }];
      }

      _createClass(OringAndGlandCalcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OringAndGlandCalcComponent;
    }();

    OringAndGlandCalcComponent.ɵfac = function OringAndGlandCalcComponent_Factory(t) {
      return new (t || OringAndGlandCalcComponent)();
    };

    OringAndGlandCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OringAndGlandCalcComponent,
      selectors: [["app-oring-and-gland-calc"]],
      decls: 6,
      vars: 1,
      consts: [[1, "content"], [1, "container", "p-0"], [1, "clearfix"], [1, "ignorePdf", 3, "tabMenu"]],
      template: function OringAndGlandCalcComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tab-nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabMenu", ctx.oRingTabs);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_2__["TabNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL29yaW5nLWFuZC1nbGFuZC1jYWxjLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OringAndGlandCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-oring-and-gland-calc',
          templateUrl: './oring-and-gland-calc.component.html',
          styleUrls: ['./oring-and-gland-calc.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts":
  /*!************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts ***!
    \************************************************************************/

  /*! exports provided: ORingAndGlandCalcModule */

  /***/
  function clientAppOringAndGlandCalcOringAndGlandCalcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORingAndGlandCalcModule", function () {
      return ORingAndGlandCalcModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./client/app/shared/shared.module.ts");
    /* harmony import */


    var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dynamic-form/dynamic-form.module */
    "./client/app/dynamic-form/dynamic-form.module.ts");
    /* harmony import */


    var _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./oring-and-gland-calc-routing.module */
    "./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./client/app/oring-and-gland-calc/header/header.component.ts");
    /* harmony import */


    var _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./oring-and-gland-calc.component */
    "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts"); // core imports
    // application imports


    var ORingAndGlandCalcModule = function ORingAndGlandCalcModule() {
      _classCallCheck(this, ORingAndGlandCalcModule);
    };

    ORingAndGlandCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ORingAndGlandCalcModule
    });
    ORingAndGlandCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ORingAndGlandCalcModule_Factory(t) {
        return new (t || ORingAndGlandCalcModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingAndGlandCalcModule, {
        declarations: [_oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__["OringAndGlandCalcComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingAndGlandCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__["OringAndGlandCalcComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=oring-and-gland-calc-oring-and-gland-calc-module-es5.js.map