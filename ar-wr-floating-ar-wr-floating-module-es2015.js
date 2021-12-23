(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ar-wr-floating-ar-wr-floating-module"],{

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ArWrFloatingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingRoutingModule", function() { return ArWrFloatingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ar-wr-floating.component */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts");
// core imports


// application imports



const routes = [
    { path: '', component: _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_2__["ArWrFloatingComponent"], pathMatch: 'full' }
];
class ArWrFloatingRoutingModule {
}
ArWrFloatingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrFloatingRoutingModule });
ArWrFloatingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrFloatingRoutingModule_Factory(t) { return new (t || ArWrFloatingRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrFloatingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts":
/*!***********************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ArWrFloatingValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingValidationService", function() { return ArWrFloatingValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
// core imports

// application imports






class ArWrFloatingValidationService {
    constructor(helperService, unitButtonService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
    }
    /********************************************************************/
    /*********************** Client Side Validation *********************/
    /******************** Prevent the form submission********************/
    /********************************************************************/
    // Function serviceStorageTemperature min validation
    serviceStorageTemperatureMinValidation() {
        return (control) => {
            const serviceStorageTemperatureAmbient75FMinControl = control.get('serviceStorageTemperatureAmbient75FMin');
            const currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
            let error = null;
            if (serviceStorageTemperatureAmbient75FMinControl
                && serviceStorageTemperatureAmbient75FMinControl.value) {
                // check O-ring cross section is in range or not else set error message
                let serviceStorageTemperatureAmbient75FMinError;
                let oringCrossSectionNominalLargerThanRangeError;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                    serviceStorageTemperatureAmbient75FMinError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(serviceStorageTemperatureAmbient75FMinControl.value, "75", "serviceStorageTemperatureAmbient75FMin", "Minimum Temperature", "Must be 75°F or less");
                }
                else if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    serviceStorageTemperatureAmbient75FMinError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(serviceStorageTemperatureAmbient75FMinControl.value, "24", "serviceStorageTemperatureAmbient75FMin", "Minimum Temperature", "Must be 24°C or less");
                }
                if (serviceStorageTemperatureAmbient75FMinError) {
                    error = serviceStorageTemperatureAmbient75FMinError;
                }
            }
            this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMinControl, error, "serviceStorageTemperatureAmbientMin");
            return error;
        };
    }
    // Function serviceStorageTemperature max validation
    serviceStorageTemperatureMaxValidation() {
        return (control) => {
            const serviceStorageTemperatureAmbient75FMaxControl = control.get('serviceStorageTemperatureAmbient75FMax');
            const currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
            let error = null;
            if (serviceStorageTemperatureAmbient75FMaxControl
                && serviceStorageTemperatureAmbient75FMaxControl.value) {
                // check O-ring cross section is in range or not else set error message
                let serviceStorageTemperatureAmbient75FMaxError;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                    serviceStorageTemperatureAmbient75FMaxError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(serviceStorageTemperatureAmbient75FMaxControl.value, "75", "serviceStorageTemperatureAmbient75FMax", "Maximum Temperature", "Must be 75°F or more");
                }
                else if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    serviceStorageTemperatureAmbient75FMaxError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(serviceStorageTemperatureAmbient75FMaxControl.value, "24", "serviceStorageTemperatureAmbient75FMax", "Maximum Temperature", "Must be 24°C or more");
                }
                if (serviceStorageTemperatureAmbient75FMaxError) {
                    error = serviceStorageTemperatureAmbient75FMaxError;
                }
            }
            this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMaxControl, error, "serviceStorageTemperatureAmbientMax");
            return error;
        };
    }
    /********************************************************************/
    /************** O-Ring - Internal Vacuum only Warnings **************/
    /**************** Doen't prevent the form submission*****************/
    /********************************************************************/
    // gland width validation
    clearanceValidationBasedOnPumpAndComponentType(control) {
        const pumpTypeControl = control.get('pumpType');
        const componentTypeControl = control.get('componentType');
        if (pumpTypeControl && pumpTypeControl.value && componentTypeControl && componentTypeControl.value) {
            const currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
            // const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            const error = new _models_error_model__WEBPACK_IMPORTED_MODULE_2__["ErrorModel"]();
            error.field = '';
            error.type = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning;
            const bushing = "Follow OEM Bushing Clearance if Available";
            const bearing = "Follow OEM Bearing Clearance if Available";
            if (pumpTypeControl.value.id === 3 && componentTypeControl.value.id === 1) // pumpType "VS" and componentType "Wear Ring"
             {
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    error.detail = "Normal Wear Ring Clearance For VS Pumps is .05 mm Over Bearing Clearance (Or OEM Standard)";
                }
                else {
                    // default inch unit is considered
                    error.detail = "Normal Wear Ring Clearance For VS Pumps is .002 inch Over Bearing Clearance(Or OEM Standard)";
                }
            }
            else if (componentTypeControl.value.id === 2) // componentType "Bushing"
             {
                error.detail = bushing;
            }
            else if (componentTypeControl.value.id === 3) // componentType Bearing"
             {
                error.detail = bearing;
            }
            else {
                return null;
            }
            return error;
        }
        else {
            return null;
        }
    }
}
ArWrFloatingValidationService.ɵfac = function ArWrFloatingValidationService_Factory(t) { return new (t || ArWrFloatingValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"])); };
ArWrFloatingValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrFloatingValidationService, factory: ArWrFloatingValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts":
/*!**************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArWrFloatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingComponent", function() { return ArWrFloatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ar-wr-floating.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts");
/* harmony import */ var _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ar-wr-floating-validation.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");
// core imports

// third party imports


















function ArWrFloatingComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArWrFloatingComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "calculator-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reset", function ArWrFloatingComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onReset(); })("print", function ArWrFloatingComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onPrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dynamic-form-two-column-layout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropdownSelectionChange", function ArWrFloatingComponent_form_2_Template_dynamic_form_two_column_layout_dropdownSelectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dropdownSelectionChange($event); })("numericInputValueChange", function ArWrFloatingComponent_form_2_Template_dynamic_form_two_column_layout_numericInputValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.numericInputValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.arwrFloatingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calculatorConfig", ctx_r0.calculatorConfig)("form", ctx_r0.arwrFloatingForm)("isSubmitted", ctx_r0.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.arwrFloatingForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("isShowNotes", true)("decimalPoint", 3)("isUpdateDecimalPointOnUnitChange", false)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings)("isWrAr", true);
} }
class ArWrFloatingComponent {
    // constructor
    constructor(controlBaseService, authService, arWrCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, helperService, arWrFloatingService, arWrFloatingValidationService) {
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.arWrCalcService = arWrCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.helperService = helperService;
        this.arWrFloatingService = arWrFloatingService;
        this.arWrFloatingValidationService = arWrFloatingValidationService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        // o-ring calculator config subscription
        this.arWrDataSubscription = this.arWrCalcService.arWrConfig$.subscribe((x) => {
            if (x) {
                // calculator - Wr/Ar Floating
                this.calculatorConfig = x.calculators[1];
                // send calculator to dynamic form service
                this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[1]);
                // create form
                this.createForm();
            }
        });
        // unit change
        this.onUnitChange();
    }
    get CalculatedData() {
        return this.calculatedData;
    }
    set CalculatedData(val) {
        this.calculatedData = val;
    }
    // form control changes subcription and update the graph data
    getControlValue(fieldName) {
        if (this.arwrFloatingForm && this.arwrFloatingForm.controls[fieldName]) {
            return this.arwrFloatingForm.controls[fieldName].value;
        }
        else {
            return "";
        }
    }
    // onInit
    ngOnInit() {
        this.onReset();
        this.isSubmitted = false;
        this.CalculatedData = {};
    }
    // unit change perform operations
    onUnitChange() {
        // reset 
        this.resetFormAndCalculation();
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x) => {
            var _a, _b, _c, _d;
            if (x) {
                // reset 
                this.resetFormAndCalculation();
                // set temperature
                this.setTemperature();
                if (this.CalculatedData) {
                    // calculated change detection when by changing the object
                    this.CalculatedData = Object.assign({}, this.CalculatedData);
                }
                // get rotor and stator cte dropdown controls
                const selectedCustomRotatingMaterialControl = (_a = this.arwrFloatingForm) === null || _a === void 0 ? void 0 : _a.controls["customRotatingMaterial"];
                const selectedCustomStationaryMaterialControl = (_b = this.arwrFloatingForm) === null || _b === void 0 ? void 0 : _b.controls["customStationaryMaterial"];
                // clear rotor CTE custom input values
                if (selectedCustomRotatingMaterialControl) {
                    selectedCustomRotatingMaterialControl.setValue("");
                }
                // clear stator CTE custom input values
                if (selectedCustomStationaryMaterialControl) {
                    selectedCustomStationaryMaterialControl.setValue("");
                }
                // convert the form data
                const convertedForm = this.helperService.convertFormUnitControlValuesAndSet((this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null), this.arwrFloatingForm, x);
                // rotating material dropdown selected and not custom selected
                const selectedRotatingMaterialControl = (_c = this.arwrFloatingForm) === null || _c === void 0 ? void 0 : _c.controls["rotatingMaterial"];
                const selectedStationaryMaterialControl = (_d = this.arwrFloatingForm) === null || _d === void 0 ? void 0 : _d.controls["stationaryMaterial"];
                // rotating material dropdown selected and not custom selected
                // convert 10 power -6 to XX.XX
                if (selectedRotatingMaterialControl && selectedRotatingMaterialControl.value && selectedRotatingMaterialControl.value.value > 0) {
                    this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, "rotatingMaterial", "customRotatingMaterial", selectedRotatingMaterialControl.value);
                }
                // stationary material dropdown selected and not custom selected
                // convert 10 power -6 to XX.XX
                if (selectedStationaryMaterialControl && selectedStationaryMaterialControl.value && selectedStationaryMaterialControl.value.value > 0) {
                    this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, "stationaryMaterial", "customStationaryMaterial", selectedStationaryMaterialControl.value);
                }
                if (convertedForm) {
                    this.arwrFloatingForm = convertedForm;
                }
            }
        });
    }
    // set temperature
    setTemperature() {
        let currentUnit = this.unitButtonService.getCurrentUnitValue;
        let currentTemp = this.temperatureButtonService.getCurrentTemperatureValue;
        if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) {
                this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT);
            }
        }
        if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS) {
                this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS);
            }
        }
    }
    onSubmit() {
        this.CalculatedData = {};
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        if (!this.calculatorConfig) {
            return;
        }
        if (!this.arwrFloatingForm || !this.arwrFloatingForm.value) {
            return;
        }
        this.payLoad = this.arwrFloatingForm.value;
        this.isSubmitted = true;
        // client errors that doesnot prevent to submit forms/calculation
        // glandWidth validation
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["WrArCalc_FloatingIn_Validators"].CLEARANCE_VALIDATION)) {
            const clearanceBasedOnPumpAndComponentTypeError = this.arWrFloatingValidationService.clearanceValidationBasedOnPumpAndComponentType(this.arwrFloatingForm);
            if (clearanceBasedOnPumpAndComponentTypeError) {
                this.addClientErrors(clearanceBasedOnPumpAndComponentTypeError);
            }
        }
        // stop here if form is invalid/Not_valid
        if (!this.arwrFloatingForm || this.arwrFloatingForm.invalid) {
            return;
        }
        // perform calculation
        this.arWrFloatingService.floatingCalculation(this.arwrFloatingForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe((resp) => {
            // response
            if (resp.data) {
                // set CalculatedData
                // this will set the graph data also
                this.CalculatedData = Object.assign({}, resp.data);
                if (resp.data.error && resp.data.error.length > 0) {
                    this.serverErrors = resp.data.error.slice();
                }
                if (resp.data.warning && resp.data.warning.length > 0) {
                    this.serverWarnings = resp.data.warning;
                }
                const responseDataKeys = Object.keys(resp.data);
                // Bind output form data
                // loop through each output
                for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
                    // loop through rows
                    for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                        // loop through columns
                        for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                            // loop through controls
                            for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                                // get form control of JSON
                                const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                                // get fields key from resp data
                                // const responseDataKeys = Object.keys(resp.data);
                                for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                        // output values validation
                                        // Check cross section thickness validation
                                        const outMachineCompositeODInch = resp.data['machineCompositeODInch'];
                                        const outFinishMachineCompositeIDAfterInstallationInch = resp.data['finishMachineCompositeIDAfterInstallationInch'];
                                        let crosssectionThickness = 0.236;
                                        if (this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                                            crosssectionThickness = 0.6;
                                        }
                                        if (!((outMachineCompositeODInch - outFinishMachineCompositeIDAfterInstallationInch) > crosssectionThickness)) {
                                            const crossSectionThicknessError = new _models_error_model__WEBPACK_IMPORTED_MODULE_2__["ErrorModel"]();
                                            crossSectionThicknessError.field = '';
                                            crossSectionThicknessError.type = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error;
                                            crossSectionThicknessError.detail = "Check cross section thickness.";
                                            this.addClientErrors(crossSectionThicknessError);
                                        }
                                        // set JSON output label
                                        // bind calculated result to output label
                                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `${(resp.data[responseDataKeys[keyIndex]] && resp.data[responseDataKeys[keyIndex]] !== null && resp.data[responseDataKeys[keyIndex]] !== undefined && !isNaN((+resp.data[responseDataKeys[keyIndex]]))) ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed((this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3)) : resp.data[responseDataKeys[keyIndex]]}`;
                                    }
                                }
                            }
                        }
                    }
                }
                // reset auth token 
                this.setAuth();
            }
        }, (error) => {
            // reset auth token 
            this.setAuth();
            // TODO: show error if any
            console.log(error);
        });
    }
    // create form group
    createForm() {
        // get form controls nested array
        const leftFormControls = this.calculatorConfig.form.left_column.form_layout_row.map(row => row.form_layout_columns.map((column) => {
            let formControls = [];
            for (let index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (this.arwrFloatingForm) {
                    const fc = this.arwrFloatingForm.get(column.form_controls[index].key);
                    if (fc) {
                        column.form_controls[index].value = fc.value;
                    }
                }
                // create reactive form of only those control which are show = true
                if (column.form_controls[index].show) {
                    formControls.push(column.form_controls[index]);
                }
            }
            return formControls;
        }));
        const rightFormControls = this.calculatorConfig.form.right_column.form_layout_row.map(row => row.form_layout_columns.map((column) => {
            let formControls = [];
            for (let index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (this.arwrFloatingForm) {
                    const fc = this.arwrFloatingForm.get(column.form_controls[index].key);
                    if (fc) {
                        column.form_controls[index].value = fc.value;
                    }
                }
                // createreaxctive form of only those control which are show = true
                if (column.form_controls[index].show) {
                    formControls.push(column.form_controls[index]);
                }
            }
            return formControls;
        }));
        // make form control flatten array
        this.flattenedFormControls = [];
        // add calculator toolbar option
        this.flattenedFormControls.push(this.calculatorConfig.toolbarOption);
        this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(leftFormControls)];
        this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(rightFormControls)];
        // exclude formcontrol which is type of label
        const filteredControls = this.flattenedFormControls.filter(fc => {
            // exclude labels and buttons from formgroup
            if (fc && fc.type !== this.controlType.label && fc.type !== this.controlType.button) {
                return fc;
            }
        });
        this.arwrFloatingForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        const validations = [];
        // get validation key from json config object
        let jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
            const validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_MIN:
                    validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMinValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_MAX:
                    validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMaxValidation());
                    break;
            }
        }
        // set custom validations with params
        this.arwrFloatingForm.setValidators(validations);
    }
    // reset auth token
    setAuth() {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(r => r);
    }
    // add client errors
    addClientErrors(error) {
        if (this.clientErrors.length > 0) {
            for (let index = 0; index < this.clientErrors.length; index++) {
                if (this.clientErrors[index].field && this.clientErrors[index].field !== error.field) {
                    this.clientErrors.push(error);
                }
            }
        }
        else {
            this.clientErrors.push(error);
        }
        this.clientErrors = this.clientErrors.slice();
    }
    // add client warnings
    addClientWarnings(warning) {
        if (this.clientWarnings.length > 0) {
            for (let index = 0; index < this.clientWarnings.length; index++) {
                if (this.clientWarnings[index] && this.clientWarnings[index].field !== warning.field) {
                    this.clientWarnings.push(warning);
                }
            }
        }
        else {
            this.clientWarnings.push(warning);
        }
        this.clientWarnings = this.clientWarnings.slice();
    }
    // reset error, warnings of client and server
    resetErroAndWarnings() {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    }
    // reset calculated label or output value in JSOn config
    resetCalculatedLabelValue() {
        this.CalculatedData = {};
        // reset left form data
        // loop through each form left column row
        for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // reset calculated result to output label
                        this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                    }
                }
            }
        }
        // reset right form data
        // loop through each form left column row
        for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                    }
                }
            }
        }
        // reset output form data
        // loop through each output
        for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                // loop through columns
                for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                    // loop through controls
                    for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                        // get form control of JSON
                        const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                        }
                    }
                }
            }
        }
    }
    resetFormAndCalculation() {
        // reset form submitted status to false 
        this.isSubmitted = false;
        // reset client errors and warnings
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        if (!this.calculatorConfig) {
            return;
        }
        // reset glandsize rectangle-internal-vacuum-only JSON config data
        // reset left form data
        // loop through each form left column row
        for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                }
            }
        }
        // reset right form data
        // loop through each form left column row
        for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                }
            }
        }
        // reset output form data
        // loop through each output
        for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                // loop through columns
                for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                    // loop through controls
                    for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                        // get form control of JSON
                        const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                        // get fields key from resp data
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = ``;
                        }
                    }
                }
            }
        }
        // reset calculated data received after calculation
        this.CalculatedData = null;
    }
    // on reset button handler
    onReset() {
        if (!this.arwrFloatingForm) {
            return;
        }
        // get form controls key
        const formControlKeys = Object.keys(this.arwrFloatingForm.controls);
        // loop through the reactive form/formgroup controls 
        for (let index = 0; index < formControlKeys.length; index++) {
            const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.arwrFloatingForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.arwrFloatingForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    }
    // print button event handler
    onPrint() {
        this.printService.generatePdf("WrArFloating");
    }
    // dropdown change event handler of the dynamic form
    dropdownSelectionChange(event) {
        // clearance dropdown selected value
        this.calculateAndSetClearanceTarget();
        // get and set rotating material change when custom no selected
        if (event.formControl.key === "rotatingMaterial" && event.value.value > 0) {
            this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customRotatingMaterial", event.value);
        }
        // get and set stationary material change when custom no selected
        if (event.formControl.key === "stationaryMaterial" && event.value.value > 0) {
            this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customStationaryMaterial", event.value);
        }
    }
    // numeric input value change event handler of the dynamic form
    numericInputValueChange(event) {
        if (event.key.toLowerCase() === ("rotatingElementODMax").toLowerCase()) {
            this.calculateAndSetClearanceTarget();
        }
    }
    // calculate clearanceCLR based on the "rotatingElementODMax"
    calculateAndSetClearanceTarget() {
        // clearance dropdown selected value
        const customClearanceTargetDDLFC = this.arwrFloatingForm.controls["clearanceTarget"];
        // stabdard clearance
        if (customClearanceTargetDDLFC && customClearanceTargetDDLFC.value.value > 0) {
            const customClearanceTargetFC = this.arwrFloatingForm.controls["customClearanceTarget"];
            // standard option selected
            this.arWrCalcService.getClearance(this.arwrFloatingForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].WrArFloating).subscribe((x) => {
                if (x && customClearanceTargetFC && (customClearanceTargetFC.value != x)) {
                    customClearanceTargetFC.setValue(x.toFixed((this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3)));
                }
            });
        }
    }
    // component destroy
    ngOnDestroy() {
        if (this.arWrDataSubscription) {
            this.arWrDataSubscription.unsubscribe();
        }
    }
}
ArWrFloatingComponent.ɵfac = function ArWrFloatingComponent_Factory(t) { return new (t || ArWrFloatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_12__["ArWrFloatingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_13__["ArWrFloatingValidationService"])); };
ArWrFloatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArWrFloatingComponent, selectors: [["app-ar-wr-floating"]], decls: 3, vars: 1, consts: [[1, "row", "wr-ar-pressin"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], [3, "calculatorConfig", "form", "isSubmitted", "reset", "print"], [3, "form", "isSubmitted", "calculatorJSON", "isShowNotes", "decimalPoint", "isUpdateDecimalPointOnUnitChange", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings", "isWrAr", "dropdownSelectionChange", "numericInputValueChange"]], template: function ArWrFloatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArWrFloatingComponent_form_2_Template, 6, 18, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.arwrFloatingForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_17__["DynamicFormTwoColumnLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL2FyLXdyLWNhbGMvYXItd3ItZmxvYXRpbmcvYXItd3ItZmxvYXRpbmcuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ar-wr-floating',
                templateUrl: './ar-wr-floating.component.html',
                styleUrls: ['./ar-wr-floating.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"] }, { type: _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_12__["ArWrFloatingService"] }, { type: _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_13__["ArWrFloatingValidationService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts":
/*!***********************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts ***!
  \***********************************************************************/
/*! exports provided: ArWrFloatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingModule", function() { return ArWrFloatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ar-wr-floating-routing.module */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts");
/* harmony import */ var _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ar-wr-floating.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts");
/* harmony import */ var _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ar-wr-floating-validation.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts");
/* harmony import */ var _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ar-wr-floating.component */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts");
// core improts



// application imports







class ArWrFloatingModule {
}
ArWrFloatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrFloatingModule });
ArWrFloatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrFloatingModule_Factory(t) { return new (t || ArWrFloatingModule)(); }, providers: [
        _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__["ArWrFloatingService"],
        _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__["ArWrFloatingValidationService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrFloatingModule, { declarations: [_ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__["ArWrFloatingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__["ArWrFloatingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [
                    _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__["ArWrFloatingService"],
                    _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__["ArWrFloatingValidationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts":
/*!************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts ***!
  \************************************************************************/
/*! exports provided: ArWrFloatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingService", function() { return ArWrFloatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var client_app_models_pressInDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/app/models/pressInDTO */ "./client/app/models/pressInDTO.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
// core imports

// application imports




class ArWrFloatingService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    floatingCalculation(form, unit, unitTemp) {
        let body = new client_app_models_pressInDTO__WEBPACK_IMPORTED_MODULE_2__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        return this._http.post(`${this.baseUrl}wrar/floatingCalculation`, body);
    }
}
ArWrFloatingService.ɵfac = function ArWrFloatingService_Factory(t) { return new (t || ArWrFloatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ArWrFloatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrFloatingService, factory: ArWrFloatingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=ar-wr-floating-ar-wr-floating-module-es2015.js.map