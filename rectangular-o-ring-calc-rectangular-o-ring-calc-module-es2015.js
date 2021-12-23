(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rectangular-o-ring-calc-rectangular-o-ring-calc-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RectangularORingCalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangularORingCalcRoutingModule", function() { return RectangularORingCalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rectangular_o_ring_calc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rectangular-o-ring-calc.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.component.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
// core imports


// application imports




const routes = [
    {
        path: '', component: _rectangular_o_ring_calc_component__WEBPACK_IMPORTED_MODULE_2__["RectangularORingCalcComponent"], children: [
            { path: 'createRectangularORing', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingInternalVacuumOnly }, loadChildren: () => Promise.all(/*! import() | o-ring-internal-vacuum-only-o-ring-internal-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("o-ring-internal-vacuum-only-o-ring-internal-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.module.ts")).then(m => m.ORingInternalVacuumOnlyModule) },
            { path: 'createDovetailORing', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingDovetailGlandVacuumOnly }, loadChildren: () => Promise.all(/*! import() | o-ring-dovetail-gland-vacuum-only-o-ring-dovetail-gland-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("o-ring-dovetail-gland-vacuum-only-o-ring-dovetail-gland-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.module.ts")).then(m => m.ORingDovetailGlandVacuumOnlyModule) },
            { path: 'createHalfDovetailGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly }, loadChildren: () => Promise.all(/*! import() | o-ring-half-dovetail-gland-internal-vacuum-only-o-ring-half-dovetail-gland-internal-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("o-ring-half-dovetail-gland-internal-vacuum-only-o-ring-half-dovetail-gland-internal-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./o-ring-half-dovetail-gland-internal-vacuum-only/o-ring-half-dovetail-gland-internal-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-half-dovetail-gland-internal-vacuum-only/o-ring-half-dovetail-gland-internal-vacuum-only.module.ts")).then(m => m.ORingHalfDovetailGlandInternalVacuumOnlyModule) },
            { path: 'createRectangleOdGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly }, loadChildren: () => Promise.all(/*! import() | o-ring-rectangular-gland-external-vacuum-only-o-ring-rectangular-gland-external-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("o-ring-rectangular-gland-external-vacuum-only-o-ring-rectangular-gland-external-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./o-ring-rectangular-gland-external-vacuum-only/o-ring-rectangular-gland-external-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-rectangular-gland-external-vacuum-only/o-ring-rectangular-gland-external-vacuum-only.module.ts")).then(m => m.ORingRectangularGlandExternalVacuumOnlyModule) }
        ],
    }
];
class RectangularORingCalcRoutingModule {
}
RectangularORingCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RectangularORingCalcRoutingModule });
RectangularORingCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RectangularORingCalcRoutingModule_Factory(t) { return new (t || RectangularORingCalcRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RectangularORingCalcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangularORingCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.component.ts":
/*!******************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RectangularORingCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangularORingCalcComponent", function() { return RectangularORingCalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_form_control_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/form-control.model */ "./client/app/models/form-control.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rectangular-o-ring-calc.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.service.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.component */ "./client/app/shared/components/unit-button/unit-button.component.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/temperature-button/temperature-button.component */ "./client/app/shared/components/temperature-button/temperature-button.component.ts");
/* harmony import */ var _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/custom-controls/drop-down/drop-down.component */ "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts");
// core imports


// application imports











function RectangularORingCalcComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "custom-drop-down", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RectangularORingCalcComponent_div_7_Template_custom_drop_down_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onCalculatorChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.calculatorTypeDDl)("form", ctx_r0.calculatorTypeDDLFormGroup)("control", ctx_r0.calculatorTypeDDl[0]);
} }
class RectangularORingCalcComponent {
    constructor(rectangularORingCalcService, router, controlBaseService, activatedRoute) {
        this.rectangularORingCalcService = rectangularORingCalcService;
        this.router = router;
        this.controlBaseService = controlBaseService;
        this.activatedRoute = activatedRoute;
        this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY = "O_RING_CALCULATOR_TYPE";
        this.currrentSelectedCalculatorId = 0;
        this.isJSONConfigFetched = false;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlType"];
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(() => {
            // console.log('route data');
            // console.log(this.activatedRoute.root);
            let calculatorId = 0;
            if (this.activatedRoute.snapshot.firstChild && this.activatedRoute.snapshot.firstChild.data) {
                calculatorId = this.activatedRoute.snapshot.firstChild.data.calculatorType;
            }
            if (calculatorId) {
                this.currrentSelectedCalculatorId = calculatorId;
            }
        });
    }
    ngOnInit() {
        // get JSON config from server
        this.rectangularORingCalcService.getRectangularORingCalcConfig().subscribe((resp) => {
            this.isJSONConfigFetched = true;
            this.jsonConfiguration = resp;
            // bind calculator type ddl 
            const calculatorTypes = [...this.getCalculatorTypeArray(this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY)];
            this.calculatorTypeDDl = calculatorTypes;
            // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
            let calculatorTypeDDLGroup = [];
            // below calculatorTypeDDLGroup.push also sets the default dropdown selection
            // create form groupd with initial value of control "calculatorTypes[0]"
            if (this.currrentSelectedCalculatorId && this.currrentSelectedCalculatorId >= 0) {
                // get calculator index by calculator id
                const getCalcuilatorindex = calculatorTypes.findIndex((calc) => {
                    if (calc.form_control_id === this.currrentSelectedCalculatorId) {
                        return calc;
                    }
                });
                // set selected calcalcutor in calculator dropdown
                if (getCalcuilatorindex) {
                    calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
                }
                else {
                    // set selected calcalcutor in calculator dropdown
                    calculatorTypeDDLGroup.push(calculatorTypes[0]);
                }
            }
            else {
                // set selected calcalcutor in calculator dropdown
                calculatorTypeDDLGroup.push(calculatorTypes[0]);
            }
            // create form group with default option selection
            this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
            // calculator change
            // send o-ring config value to subscribers
            this.rectangularORingCalcService.sendORingConfigValue(this.jsonConfiguration);
        }, (error) => {
            throw new Error(error.message);
        });
    }
    // component destroy handler
    ngOnDestroy() {
        this.isJSONConfigFetched = false;
        if (this.activatedRouteSubscription) {
            this.activatedRouteSubscription.unsubscribe();
        }
    }
    // calculator types
    getCalculatorTypeArray(formControlKey) {
        let calculatorTypeDDl = [];
        for (let index = 0; index < this.jsonConfiguration.calculators.length; index++) {
            const fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_3__["FormControlModel"]({ form_control_id: this.jsonConfiguration.calculators[index].id, key: formControlKey, label: this.jsonConfiguration.calculators[index].display_calculator_title, value: this.jsonConfiguration.calculators[index] });
            calculatorTypeDDl.push(fc);
        }
        return calculatorTypeDDl;
    }
    ;
    // create form group
    // params => formControls
    createCalculatorTypeFormGroup(formControls) {
        // calculator type dropdown form group
        this.calculatorTypeDDLFormGroup = this.controlBaseService.toFormGroup(formControls);
    }
    // calculator change handler
    onCalculatorChange(event) {
        const calculator = event.value;
        switch (+(calculator.id)) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateoringglands', 'createRectangularORing']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateoringglands', 'createDovetailORing']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateoringglands', 'createHalfDovetailGland']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateoringglands', 'createRectangleOdGland']);
                break;
            default:
                break;
        }
    }
}
RectangularORingCalcComponent.ɵfac = function RectangularORingCalcComponent_Factory(t) { return new (t || RectangularORingCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangularORingCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RectangularORingCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RectangularORingCalcComponent, selectors: [["app-rectangular-o-ring-calc"]], decls: 27, vars: 1, consts: [[1, "container"], [1, "row", "ignorePdf"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", "p-1"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [1, "info-tab", "pt-0"], ["class", "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-1", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-0"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6", "p-0"], [1, "pull-left", "unit-section__label"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-5", "col-xl-5", "p-1"], [3, "options", "form", "control", "selectionChange"]], template: function RectangularORingCalcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Use this tool for analyzing your current gland and o-ring combination. Modifications to the o-ring size recommended to optimize the users design to improve lifetime of seal. Please contact Greene Tweed engineering for help or advice if required as some applications are difficult to optimize both at ambient and operating temperatures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RectangularORingCalcComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Units:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "unit-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "temperature-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calculatorTypeDDl && ctx.calculatorTypeDDl.length > 0 && ctx.calculatorTypeDDLFormGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_8__["UnitButtonComponent"], _shared_components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_10__["DropDownComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVIiwiZmlsZSI6ImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdyYXBoICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangularORingCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rectangular-o-ring-calc',
                templateUrl: './rectangular-o-ring-calc.component.html',
                styleUrls: ['./rectangular-o-ring-calc.component.css']
            }]
    }], function () { return [{ type: _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangularORingCalcService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_6__["ControlBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.module.ts":
/*!***************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: RectangularORingCalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangularORingCalcModule", function() { return RectangularORingCalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _rectangular_o_ring_calc_rectangular_o_ring_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rectangular-o-ring-calc/rectangular-o-ring-calc-routing.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc-routing.module.ts");
/* harmony import */ var _rectangular_o_ring_calc_rectangular_o_ring_calc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rectangular-o-ring-calc/rectangular-o-ring-calc.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.component.ts");
/* harmony import */ var _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rectangular-o-ring-calc.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.service.ts");
// core imports
// o-ring tool calculators module



// application imports






class RectangularORingCalcModule {
}
RectangularORingCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RectangularORingCalcModule });
RectangularORingCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RectangularORingCalcModule_Factory(t) { return new (t || RectangularORingCalcModule)(); }, providers: [_rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_7__["RectangularORingCalcService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _rectangular_o_ring_calc_rectangular_o_ring_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangularORingCalcRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RectangularORingCalcModule, { declarations: [_rectangular_o_ring_calc_rectangular_o_ring_calc_component__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _rectangular_o_ring_calc_rectangular_o_ring_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangularORingCalcRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangularORingCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rectangular_o_ring_calc_rectangular_o_ring_calc_component__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _rectangular_o_ring_calc_rectangular_o_ring_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangularORingCalcRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [_rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_7__["RectangularORingCalcService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.service.ts":
/*!****************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: RectangularORingCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangularORingCalcService", function() { return RectangularORingCalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
// core imports


// application imports



class RectangularORingCalcService {
    /*  Constructor */
    constructor(_http) {
        this._http = _http;
        /* Private Properties   */
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        // oRing config state management subject and observable
        // private oRingConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
        this.oRingConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Expose the observable part of the oRingConfig subject (read only stream)
        this.oRingConfig$ = this.oRingConfigSubject.asObservable();
    }
    // service state management property "oRingConfig"
    // the getter will return the last value emitted oRingConfigSubject subject
    get oRingConfig() {
        return this.oRingConfigSubject.getValue();
    }
    // assigning a value to this.oRingConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.oRingConfig = {})
    set oRingConfig(val) {
        this.oRingConfigSubject.next(val);
    }
    /* Public Properties   */
    // get config value directly using behaviour subject
    get getCurrentORingConfigValue() {
        return this.oRingConfig;
    }
    // Methods/functions
    // send oring config
    // assigning a value to this.oRingConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.oRingConfig = {})
    sendORingConfigValue(val) {
        this.oRingConfig = val;
    }
    /*  Public Methods   */
    // get o-ring config from server
    getRectangularORingCalcConfig() {
        return this._http.get(`${this.baseUrl}oringglandanalysistool/rectangularglandinternalvacuumonly`);
    }
}
RectangularORingCalcService.ɵfac = function RectangularORingCalcService_Factory(t) { return new (t || RectangularORingCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RectangularORingCalcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RectangularORingCalcService, factory: RectangularORingCalcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangularORingCalcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=rectangular-o-ring-calc-rectangular-o-ring-calc-module-es2015.js.map