(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ar-wr-calc-ar-wr-calc-module"],{

/***/ "./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts":
/*!************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ArWrCalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcRoutingModule", function() { return ArWrCalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ar-wr-calc.component */ "./client/app/ar-wr-calc/ar-wr-calc.component.ts");
// core imports



// application imports



const routes = [
    {
        path: '', component: _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_3__["ArWrCalcComponent"], children: [
            {
                path: 'pressin',
                data: {
                    calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].WrArPressIn
                },
                loadChildren: () => Promise.all(/*! import() | ar-wr-press-in-ar-wr-press-in-module */[__webpack_require__.e("common"), __webpack_require__.e("ar-wr-press-in-ar-wr-press-in-module")]).then(__webpack_require__.bind(null, /*! ./ar-wr-press-in/ar-wr-press-in.module */ "./client/app/ar-wr-calc/ar-wr-press-in/ar-wr-press-in.module.ts")).then(m => m.ArWrPressInModule)
            },
            {
                path: 'floating',
                data: {
                    calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].WrArFloating
                },
                loadChildren: () => Promise.all(/*! import() | ar-wr-floating-ar-wr-floating-module */[__webpack_require__.e("common"), __webpack_require__.e("ar-wr-floating-ar-wr-floating-module")]).then(__webpack_require__.bind(null, /*! ./ar-wr-floating/ar-wr-floating.module */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts")).then(m => m.ArWrFloatingModule)
            }
        ]
    }
];
class ArWrCalcRoutingModule {
}
ArWrCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrCalcRoutingModule });
ArWrCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrCalcRoutingModule_Factory(t) { return new (t || ArWrCalcRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrCalcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.component.ts":
/*!*******************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.component.ts ***!
  \*******************************************************/
/*! exports provided: ArWrCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcComponent", function() { return ArWrCalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var server_src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! server/src/constants */ "./server/src/constants.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/ar-wr-drop-down-data.service */ "./client/app/shared/services/ar-wr-drop-down-data.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./client/app/ar-wr-calc/header/header.component.ts");
/* harmony import */ var _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/tab-nav/tab-nav.component */ "./client/app/shared/components/tab-nav/tab-nav.component.ts");
/* harmony import */ var _shared_components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/measure-button/measure-button.component */ "./client/app/shared/components/measure-button/measure-button.component.ts");
// core imports



// application imports













class ArWrCalcComponent {
    constructor(arWrCalcService, router, controlBaseService, activatedRoute, arWrDropDownDataService, unitButtonService, temperatureButtonService, helperService) {
        this.arWrCalcService = arWrCalcService;
        this.router = router;
        this.controlBaseService = controlBaseService;
        this.activatedRoute = activatedRoute;
        this.arWrDropDownDataService = arWrDropDownDataService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.helperService = helperService;
        this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY = "WrAr_CALCULATOR_TYPE";
        this.previuosSelectedCalculatorId = 0;
        this.currrentSelectedCalculatorId = 0;
        this.isJSONConfigFetched = false;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.wrArTabs = [
            { linkLabel: "Press-In", rootModuleRoute: "pressin", childrenModuleRoute: "/wrar/pressin", pathExactmatch: true },
            { linkLabel: "Floating", rootModuleRoute: "floating", childrenModuleRoute: "/wrar/floating", pathExactmatch: true }
        ];
        // currentSelectedCalculator: FormControlModel;
        this.defaultMeasure = null;
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(() => {
            let calculatorId = 0;
            if (this.activatedRoute.snapshot.firstChild && this.activatedRoute.snapshot.firstChild.data) {
                calculatorId = this.activatedRoute.snapshot.firstChild.data.calculatorType;
            }
            if (calculatorId) {
                this.previuosSelectedCalculatorId = this.currrentSelectedCalculatorId;
                this.currrentSelectedCalculatorId = calculatorId;
                this.defaultMeasure = this.helperService.setDefaultMeasure();
            }
        });
    }
    ngOnInit() {
        this.initializeComponent();
        this.getDropdownItems();
        this.setInitialTemperature();
    }
    initializeComponent() {
        // get JSON config from server
        this.arWrCalcService.getArWrPressInCalcConfig().subscribe((resp) => {
            this.isJSONConfigFetched = true;
            this.jsonConfiguration = resp;
            // bind calculator type ddl 
            // // const calculatorTypes: FormControlModel[] = [...this.getCalculatorTypeArray(this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY)];
            // // this.calculatorTypeDDl = calculatorTypes;
            // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
            const calculatorTypeDDLGroup = [];
            // below calculatorTypeDDLGroup.push also sets the default dropdown selection
            // create form groupd with initial value of control "calculatorTypes[0]"
            // if (this.currrentSelectedCalculatorId && this.currrentSelectedCalculatorId >= 0) {
            // get calculator index by calculator id
            //   const getCalcuilatorindex = calculatorTypes.findIndex((calc: FormControlModel) => {
            //     if (calc.form_control_id === this.currrentSelectedCalculatorId) {
            //       return calc;
            //     }
            //   });
            //   // set selected calcalcutor in calculator dropdown
            //   if (getCalcuilatorindex) {
            //     calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
            //   }
            //   else {
            //     // set selected calcalcutor in calculator dropdown
            //     calculatorTypeDDLGroup.push(calculatorTypes[0]);
            //   }
            // }
            // else {
            //   // set selected calcalcutor in calculator dropdown
            //   calculatorTypeDDLGroup.push(calculatorTypes[0]);
            // }
            // create form group with default option selection
            // this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
            // calculator change
            // send o-ring config value to subscribers
            this.arWrCalcService.sendArWrConfigValue(this.jsonConfiguration);
        }, (error) => {
            throw new Error(error.message);
        });
    }
    // get material choice
    getDropdownItems() {
        this.arWrDropDownDataService.getDropdownItems().subscribe((resp) => {
            this.arWrDropDownDataService.sendDropdownItems(resp);
        });
    }
    // set initial temperature for currently selected Unit => Imperial / Metric
    setInitialTemperature() {
        let currentUnit = this.unitButtonService.getCurrentUnitValue;
        let currentTemp = this.temperatureButtonService.getCurrentTemperatureValue;
        if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== server_src_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].FAHRENHEIT) {
                this.helperService.setAndSendTemperatureManually(server_src_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].FAHRENHEIT);
            }
        }
        else if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== server_src_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].CELCIUS) {
                this.helperService.setAndSendTemperatureManually(server_src_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].CELCIUS);
            }
        }
        else {
            this.helperService.setAndSendTemperatureManually(server_src_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].CELCIUS);
        }
    }
}
ArWrCalcComponent.ɵfac = function ArWrCalcComponent_Factory(t) { return new (t || ArWrCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_5__["ArWrCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_7__["ArWrDropDownDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"])); };
ArWrCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArWrCalcComponent, selectors: [["app-ar-wr-calc"]], decls: 21, vars: 2, consts: [[1, "content"], [1, "container", "p-0"], [1, "clearfix"], [1, "ignorePdf", 3, "tabMenu"], [1, "container"], [1, "row", "ignorePdf"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", "p-1"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-0"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6", "p-0"], [1, "pull-left", "unit-section__label"], [3, "defaultMeasure"]], template: function ArWrCalcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tab-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Measure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "measure-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabMenu", ctx.wrArTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultMeasure", ctx.defaultMeasure);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_12__["TabNavComponent"], _shared_components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_13__["MeasureButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".sms-section__label {\r\n    width: 20%;\r\n}\r\n\r\n.materialChoice {\r\n    width: 100%;\r\n}\r\n\r\n.materialChoice {\r\n    width: 156px;\r\n}\r\n\r\n.calculation-results__range {\r\n    text-align: center;\r\n    width: 35%;\r\n}\r\n\r\n.calculation-results__outputs .calculation-results__range {\r\n    text-align: center;\r\n    width: 30%;\r\n}\r\n\r\n.materialChoice {\r\n    width: 100% !important;\r\n    min-width: 156px !important;\r\n}\r\n\r\n.sms-section__label {\r\n    width: 32% !important;\r\n}\r\n\r\n.sms-section__range {\r\n    width: 27% !important;\r\n}\r\n\r\n.calculation-results__label {\r\n    width: 56% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXItd3ItY2FsYy9hci13ci1jYWxjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImNsaWVudC9hcHAvYXItd3ItY2FsYy9hci13ci1jYWxjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21zLXNlY3Rpb25fX2xhYmVsIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbENob2ljZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdGVyaWFsQ2hvaWNlIHtcclxuICAgIHdpZHRoOiAxNTZweDtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX3JhbmdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5jYWxjdWxhdGlvbi1yZXN1bHRzX19vdXRwdXRzIC5jYWxjdWxhdGlvbi1yZXN1bHRzX19yYW5nZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWxDaG9pY2Uge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTU2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNtcy1zZWN0aW9uX19sYWJlbCB7XHJcbiAgICB3aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9fcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDI3JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0c19fbGFiZWwge1xyXG4gICAgd2lkdGg6IDU2JSAhaW1wb3J0YW50O1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ar-wr-calc',
                templateUrl: './ar-wr-calc.component.html',
                styleUrls: ['./ar-wr-calc.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_5__["ArWrCalcService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__["ControlBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_7__["ArWrDropDownDataService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.module.ts":
/*!****************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.module.ts ***!
  \****************************************************/
/*! exports provided: ArWrCalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcModule", function() { return ArWrCalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./client/app/ar-wr-calc/header/header.component.ts");
/* harmony import */ var _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ar-wr-calc-routing.module */ "./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts");
/* harmony import */ var _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ar-wr-calc.component */ "./client/app/ar-wr-calc/ar-wr-calc.component.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
// core imports
// o-ring tool calculators module



// application imports







class ArWrCalcModule {
}
ArWrCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrCalcModule });
ArWrCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrCalcModule_Factory(t) { return new (t || ArWrCalcModule)(); }, providers: [_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__["ArWrCalcService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrCalcModule, { declarations: [_ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__["ArWrCalcService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.service.ts":
/*!*****************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.service.ts ***!
  \*****************************************************/
/*! exports provided: ArWrCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcService", function() { return ArWrCalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pressInDTO */ "./client/app/models/pressInDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_wrArMaterialCteDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/wrArMaterialCteDTO */ "./client/app/models/wrArMaterialCteDTO.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
// core imports


// application imports








class ArWrCalcService {
    /*  Constructor */
    constructor(_http, unitButtonService, helperService) {
        this._http = _http;
        this.unitButtonService = unitButtonService;
        this.helperService = helperService;
        /* Private Properties   */
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        // oRing config state management subject and observable
        this.oRingConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Expose the observable part of the arWrConfig subject (read only stream)
        this.arWrConfig$ = this.oRingConfigSubject.asObservable();
    }
    // service state management property "arWrConfig"
    // the getter will return the last value emitted oRingConfigSubject subject
    get arWrConfig() {
        return this.oRingConfigSubject.getValue();
    }
    // assigning a value to this.arWrConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.arWrConfig = {})
    set arWrConfig(val) {
        this.oRingConfigSubject.next(val);
    }
    /* Public Properties   */
    // get config value directly using behaviour subject
    get getCurrentArWrConfigValue() {
        return this.arWrConfig;
    }
    // Methods/functions
    // send oring config
    // assigning a value to this.arWrConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.arWrConfig = {})
    sendArWrConfigValue(val) {
        this.arWrConfig = val;
    }
    /*  Public Methods   */
    // get o-ring config from server
    getArWrPressInCalcConfig() {
        return this._http.get(`${this.baseUrl}wrar/getjsonconfig`);
    }
    getInterference(form, unit, unitTemp) {
        let body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        return this._http.post(`${this.baseUrl}wrar/getInterference`, body);
    }
    getClearance(form, unit, unitTemp, calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].WrArPressIn) {
        let body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.calculatorType = calculatorType;
        return this._http.post(`${this.baseUrl}wrar/getClearance`, body);
    }
    // get material cte data
    getMaterialCTE(unit, material) {
        let body = new _models_wrArMaterialCteDTO__WEBPACK_IMPORTED_MODULE_5__["WrArMaterialCteDTO"]();
        body.unit = unit.id.toString();
        body.material = material;
        return this._http.post(`${this.baseUrl}wrar/getCTEMaterialDetail`, body);
    }
    // get and set rotor and stator CTE only
    getAndSetMaterialCTE(form, controlKey, bindControlKey, controlValue) {
        this.getMaterialCTE(this.unitButtonService.getCurrentUnitValue, controlValue).subscribe((x) => {
            // rotor CTE
            if (controlKey === "rotatingMaterial") {
                form.controls[bindControlKey].setValue(this.helperService.convertFromNegetivePowerOfSix(x.rotorCTE).toFixed(2));
            }
            else if (controlKey === "stationaryMaterial") { // stator CTE
                form.controls[bindControlKey].setValue(this.helperService.convertFromNegetivePowerOfSix(x.statorCTE).toFixed(2));
            }
        });
    }
}
ArWrCalcService.ɵfac = function ArWrCalcService_Factory(t) { return new (t || ArWrCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"])); };
ArWrCalcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrCalcService, factory: ArWrCalcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./client/app/ar-wr-calc/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "gt-banner"], [1, "container"], [1, "gt-header-graphic"], [1, "heading"], [1, "gt-header-logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " WR\u00AE / AR\u00AE Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".gt-banner[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/wrar/wrarcalculator-header-img.jpg) no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    height: 175px;\r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 49%;\r\n    -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    color: #fff;\r\n    font-size: 32px;\r\n    width: 80%;\r\n    \r\n    font-family: \"nimbus_san_nov_con\", Arial, sans-serif;\r\n    margin: 0px 20px 0 250px;\r\n    font-weight: 700;\r\n    \r\n    \r\n}\r\n\r\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    display: block;\r\n    font-weight: 500;\r\n    letter-spacing: 0;\r\n    text-shadow: none;\r\n}\r\n\r\n.gt-header-logo[_ngcontent-%COMP%] {\r\n    margin-top: -15px;\r\n    position: absolute;\r\n    \r\n    \r\n    background: url(/assets/img/GTLogo_White-semicalc.png) no-repeat;\r\n    width: 147px;\r\n    height: 54px;\r\n    background-size: contain;\r\n}\r\n\r\n\r\n\r\n@media (max-width:600px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        width: 72%;\r\n        left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        width: 48%;\r\n        padding-top: 0px;\r\n    }\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .gt-header-logo[_ngcontent-%COMP%] {\r\n        width: 112px;\r\n        height: 42px;\r\n        background-size: 112px;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media (min-width:768px) and (max-width:990px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n        width: 58%;\r\n    }\r\n}\r\n\r\n@media (max-width:1060px) {\r\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n        font-size: 28px;\r\n        width: 73%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXItd3ItY2FsYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5RUFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUiwrQkFBK0I7SUFFL0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJO1FBQ0ksVUFBVTtRQUNWLE9BQU87SUFDWDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImNsaWVudC9hcHAvYXItd3ItY2FsYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3QtYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy93cmFyL3dyYXJjYWxjdWxhdG9yLWhlYWRlci1pbWcuanBnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ndC1iYW5uZXIgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG4uZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDklO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFwibmltYnVzLXNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogXCJuaW1idXNfc2FuX25vdl9jb25cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDAgMjUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLyogbGV0dGVyLXNwYWNpbmc6IDBweDsgKi9cclxuICAgIC8qIHRleHQtc2hhZG93OiAycHggMnB4IDAgIzFiMzc2NjsgKi9cclxufVxyXG5cclxuLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5ndC1oZWFkZXItbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIHJpZ2h0OiAxMnB4OyAqL1xyXG4gICAgLyogYm90dG9tOiAxNXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0dUTG9nb19XaGl0ZS1zZW1pY2FsYy5wbmcpIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxNDdweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLyogbWVkaWEgcXVlcnkgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgICAgICB3aWR0aDogNzIlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZ3QtaGVhZGVyLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5ndC1oZWFkZXItZ3JhcGhpYyB7XHJcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2d0LWhlYWRlci1ncmFwaGljLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAxMzRweDtcclxuICAgICAgICBoZWlnaHQ6IDExOHB4OyAqXHJcbiAgICB9XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTBweCkge1xyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiA1OCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwNjBweCkge1xyXG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MyU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/models/pressInDTO.ts":
/*!*****************************************!*\
  !*** ./client/app/models/pressInDTO.ts ***!
  \*****************************************/
/*! exports provided: PressInDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressInDTO", function() { return PressInDTO; });
class PressInDTO {
    constructor(options = {}) {
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.pumpType = options.pumpType;
        this.componentType = options.componentType;
        this.composite = options.composite;
        this.interferenceTarget = options.interferenceTarget;
        this.customInterferenceTarget = options.customInterferenceTarget;
        this.clearanceTarget = options.clearanceTarget;
        this.customClearanceTarget = options.customClearanceTarget;
        this.rotatingElementODMin = options.rotatingElementODMin;
        this.rotatingElementODMax = options.rotatingElementODMax;
        this.rotatingMaterial = options.rotatingMaterial;
        this.customRotatingMaterial = options.customRotatingMaterial;
        this.stationaryElementIDMin = options.stationaryElementIDMin;
        this.stationaryElementIDMax = options.stationaryElementIDMax;
        this.stationaryMaterial = options.stationaryMaterial;
        this.customStationaryMaterial = options.customStationaryMaterial;
        this.stationaryBoreDepthMin = options.stationaryBoreDepthMin;
        this.serviceStorageTemperatureAmbient75FMin = options.serviceStorageTemperatureAmbient75FMin;
        this.serviceStorageTemperatureAmbient75FMax = options.serviceStorageTemperatureAmbient75FMax;
        this.calculatorType = options.calculatorType;
    }
}


/***/ }),

/***/ "./client/app/models/wrArMaterialCteDTO.ts":
/*!*************************************************!*\
  !*** ./client/app/models/wrArMaterialCteDTO.ts ***!
  \*************************************************/
/*! exports provided: WrArMaterialCteDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrArMaterialCteDTO", function() { return WrArMaterialCteDTO; });
class WrArMaterialCteDTO {
    constructor(options = {}) {
        this.unit = options.unit;
        this.material = options.material;
    }
}


/***/ }),

/***/ "./server/src/constants.ts":
/*!*********************************!*\
  !*** ./server/src/constants.ts ***!
  \*********************************/
/*! exports provided: Units, Temperature, CalculatorOption, ErrorTypes, WrArCalcTypes, customValue, CalculatorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Units", function() { return Units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorOption", function() { return CalculatorOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return ErrorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrArCalcTypes", function() { return WrArCalcTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customValue", function() { return customValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorTypes", function() { return CalculatorTypes; });
var Units;
(function (Units) {
    Units[Units["INCH"] = 1] = "INCH";
    Units[Units["MILLI_METER"] = 2] = "MILLI_METER";
})(Units || (Units = {}));
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
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes[ErrorTypes["Error"] = 1] = "Error";
    ErrorTypes[ErrorTypes["Warning"] = 2] = "Warning";
})(ErrorTypes || (ErrorTypes = {}));
var WrArCalcTypes;
(function (WrArCalcTypes) {
    WrArCalcTypes["PressIn"] = "pressIn";
    WrArCalcTypes["Floating"] = "floating";
})(WrArCalcTypes || (WrArCalcTypes = {}));
const customValue = 0;
var CalculatorTypes;
(function (CalculatorTypes) {
    CalculatorTypes[CalculatorTypes["ORingInternalVacuumOnly"] = 1] = "ORingInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingDovetailGlandVacuumOnly"] = 2] = "ORingDovetailGlandVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingHalfDovetailGlandInternalVacuumOnly"] = 3] = "ORingHalfDovetailGlandInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingRectangularGlandExternalVacuumOnly"] = 4] = "ORingRectangularGlandExternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["WrArPressIn"] = 5] = "WrArPressIn";
    CalculatorTypes[CalculatorTypes["WrArFloating"] = 6] = "WrArFloating";
})(CalculatorTypes || (CalculatorTypes = {}));


/***/ })

}]);
//# sourceMappingURL=ar-wr-calc-ar-wr-calc-module-es2015.js.map