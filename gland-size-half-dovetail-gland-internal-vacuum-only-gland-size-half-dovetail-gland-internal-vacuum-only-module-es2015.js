(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule", function() { return GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gland-size-half-dovetail-gland-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts");





const routes = [
    { path: '', component: _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"], pathMatch: 'full' }
];
class GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule {
}
GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule });
GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule_Factory(t) { return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent", function() { return GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rectangle-gland-calc.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rectangle-gland-calc-validation.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
/* harmony import */ var _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gland-size-half-dovetail-gland-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");
// core imports

// third party imports



















function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("reset", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.onReset(); })("print", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.onPrint(); })("copy", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.onCopy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "dynamic-form-two-column-layout", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r0.glandSizeHalfDovetailGlandForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx_r0.glandSizeHalfDovetailGlandForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowCopyBtn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("form", ctx_r0.glandSizeHalfDovetailGlandForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
} }
class GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent {
    constructor(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, rectangleGlandCalcValidationService, glandSizeHalfDovetailGlandInternalVacuumOnlyService, helperService, toastService) {
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.rectangleGlandCalcValidationService = rectangleGlandCalcValidationService;
        this.glandSizeHalfDovetailGlandInternalVacuumOnlyService = glandSizeHalfDovetailGlandInternalVacuumOnlyService;
        this.helperService = helperService;
        this.toastService = toastService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.bottomRadiiMaxLimit = 0.035;
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        // get gland-size-dovetail-gland-vacuum-only config value from O-Ring JSON 
        const rectangleJSONConfig = this.rectangleGlandCalcService.getCurrentGlandSizeCalcConfigValue;
        // gland-size calculator config subscription
        if (rectangleJSONConfig) {
            this.initializeOringConfig(rectangleJSONConfig);
        }
        else {
            this.glandSizeDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe((x) => {
                if (x) {
                    this.initializeOringConfig(x);
                }
            });
        }
        // unit change update calculator values handler
        this.onUnitChangeUpdateCalculator();
        // temperature change perform operations
        this.onTemperatureChangeUpdateCalculator();
    }
    get CalculatedData() {
        return this.calculatedData;
    }
    set CalculatedData(val) {
        this.calculatedData = val;
        const currentUnit = this.unitButtonService.getCurrentUnitValue;
        if (this.calculatedData && this.calculatedData.unit && currentUnit && (+currentUnit.id) !== (+this.calculatedData.unit)) {
            this.calculatedData.unit = currentUnit.id.toString();
            const keys = Object.keys(this.calculatedData);
            for (let index = 0; index < keys.length; index++) {
                // do not convert the glandAngle calculated result
                // if (keys[index] === "glandAngleMin" || keys[index] === "glandAngleNominal" || keys[index] === "glandAngleMax") {
                if (keys[index] === "glandAngleNominal") {
                    continue;
                }
                if ((+currentUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                    this.calculatedData[keys[index]] = this.helperService.convertToMillimeter((+this.calculatedData[keys[index]]));
                }
                else {
                    this.calculatedData[keys[index]] = this.helperService.convertToInch((+this.calculatedData[keys[index]]));
                }
            }
        }
    }
    // initialize gland-size-dovetail-gland-vacuum-only calculator by json config param
    initializeOringConfig(glandSizeJsonConfig) {
        // calculator - Half Dovetail Gland - Internal Vacuum Only
        const glandSizeDovetailGlandVacuumOnly = Object.assign({}, glandSizeJsonConfig.calculators[2]);
        this.calculatorConfig = glandSizeDovetailGlandVacuumOnly;
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(glandSizeDovetailGlandVacuumOnly);
        // create form
        this.createForm();
    }
    ngOnInit() {
        this.CalculatedData = null;
    }
    // form control changes subcription and update the graph data
    getControlValue(fieldName) {
        if (this.glandSizeHalfDovetailGlandForm
            && this.glandSizeHalfDovetailGlandForm.controls[fieldName]
            && this.glandSizeHalfDovetailGlandForm.controls[fieldName].value) {
            return (+this.glandSizeHalfDovetailGlandForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3);
        }
    }
    // get calculated field values by fieldname
    getCalculatedControlValue(fieldName) {
        if (this.CalculatedData) {
            const fieldValue = this.CalculatedData[fieldName];
            if (fieldValue) {
                return (+fieldValue).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3);
            }
        }
    }
    // unit change update output values handler
    onUnitChangeUpdateCalculator() {
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x) => {
            if (x) {
                if (x.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                    // millimeter
                    this.bottomRadiiMaxLimit = 0.89;
                }
                else {
                    // Inch
                    this.bottomRadiiMaxLimit = 0.035;
                }
                // calculated change detection when by changing the object
                if (this.CalculatedData) {
                    this.CalculatedData = Object.assign({}, this.CalculatedData);
                }
                // convert the form data
                const convertedForm = this.helperService.convertFormUnitControlValuesAndSet((this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null), this.glandSizeHalfDovetailGlandForm, x);
                if (convertedForm) {
                    this.glandSizeHalfDovetailGlandForm = convertedForm;
                }
                /// recalculate the data
                this.onSubmit();
            }
        });
    }
    // create form group
    createForm() {
        // get form controls nested array
        const leftFormControls = this.calculatorConfig.form.left_column.form_layout_row.map(row => row.form_layout_columns.map((column) => {
            let formControls = [];
            for (let index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (this.glandSizeHalfDovetailGlandForm) {
                    const fc = this.glandSizeHalfDovetailGlandForm.get(column.form_controls[index].key);
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
                if (this.glandSizeHalfDovetailGlandForm) {
                    const fc = this.glandSizeHalfDovetailGlandForm.get(column.form_controls[index].key);
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
        this.glandSizeHalfDovetailGlandForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        const validations = [];
        // get validation key from json config object
        let jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
            const validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.operatingTemperatureValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators"].O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringCrossSectionNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                    validations.push(this.rectangleGlandCalcValidationService.oRingIDAS568AStandardsWarning());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                    break;
            }
        }
        // set custom validations with params
        this.glandSizeHalfDovetailGlandForm.setValidators(validations);
    }
    // form submit event
    onSubmit(isSubmitted = false) {
        this.CalculatedData = null;
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        // this.payLoad = this.glandSizeHalfDovetailGlandForm.value;
        this.isSubmitted = isSubmitted;
        // stop here if form is invalid/Not_valid
        if (!this.glandSizeHalfDovetailGlandForm || this.glandSizeHalfDovetailGlandForm.invalid) {
            return;
        }
        // perform calculation
        this.glandSizeHalfDovetailGlandInternalVacuumOnlyService.createGland(this.glandSizeHalfDovetailGlandForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe((resp) => {
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
                // when toleranc or minmax option is selected than also bind calculated labels received after calculation
                // Bind left form data
                // loop through each form left column row
                for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
                    // loop through columns
                    for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                        // loop through controls
                        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                            // get form control of JSON
                            const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                            // get fields key from resp data
                            // const responseDataKeys = Object.keys(resp.data);
                            for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? (formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[keyIndex]].toFixed((this.unitButtonService.getCurrentUnitValue && this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3)) : resp.data[responseDataKeys[keyIndex]]) : resp.data[responseDataKeys[keyIndex]];
                                }
                            }
                        }
                    }
                }
                // Bind right form data
                // loop through each form left column row
                for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
                    // loop through columns
                    for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                        // loop through controls
                        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                            // get form control of JSON
                            const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                            // get fields key from resp data
                            // const responseDataKeys = Object.keys(resp.data);
                            for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? (formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[keyIndex]].toFixed((this.unitButtonService.getCurrentUnitValue && this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3)) : resp.data[responseDataKeys[keyIndex]]) : resp.data[responseDataKeys[keyIndex]];
                                }
                            }
                        }
                    }
                }
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
                                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                        // set JSON output label
                                        // bind calculated result to output label
                                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `${(resp.data[responseDataKeys[keyIndex]] !== null && resp.data[responseDataKeys[keyIndex]] !== undefined && !isNaN((+resp.data[responseDataKeys[keyIndex]]))) ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(1) : resp.data[responseDataKeys[keyIndex]]}%`;
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
    // reset auth token
    setAuth() {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(r => r);
    }
    // temperature change update output values handler
    onTemperatureChangeUpdateCalculator() {
        // unit switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe((x) => {
            if (x) {
                this.resetFormAndCalculation();
            }
        });
    }
    // on reset button handler
    // on reset button handler
    onReset() {
        // reset dynamically created form controls
        // get form controls key
        const formControlKeys = Object.keys(this.glandSizeHalfDovetailGlandForm.controls);
        // loop through the reactive form/formgroup controls 
        for (let index = 0; index < formControlKeys.length; index++) {
            const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.glandSizeHalfDovetailGlandForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.glandSizeHalfDovetailGlandForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    }
    resetFormAndCalculation() {
        // reset form submitted status to false 
        this.isSubmitted = false;
        // reset client errors and warnings
        this.resetErroAndWarnings();
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
                    if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel)) {
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
                    // get fields key from resp data
                    // const responseDataKeys = Object.keys(resp.data);
                    if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel)) {
                        // set JSON output label
                        // bind calculated result to output label
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
                        // const responseDataKeys = Object.keys(resp.data);
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `%`;
                        }
                    }
                }
            }
        }
        // reset calculated data received after calculation
        this.CalculatedData = null;
    }
    // print button event handler
    onPrint() {
        this.printService.generatePdf("halfDovetailGland");
    }
    // copy event handler of toolbar
    onCopy() {
        let formAndOutputData;
        // save calculated data to local storage
        if (this.CalculatedData) {
            formAndOutputData = Object.assign(Object.assign({}, this.glandSizeHalfDovetailGlandForm.value), this.CalculatedData);
        }
        else {
            formAndOutputData = Object.assign({}, this.glandSizeHalfDovetailGlandForm.value);
        }
        formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly;
        localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].HALF_DOVETAIL_GLAND, JSON.stringify(formAndOutputData));
        // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));
        this.toastService.showSucces("Calculator data copied !");
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
        if (!this.calculatorConfig) {
            return;
        }
        // reset left form data
        // loop through each form left column row
        for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
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
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
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
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = " %";
                        }
                    }
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
        }
        if (this.glandSizeDataSubscription) {
            this.glandSizeDataSubscription.unsubscribe();
        }
        if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
        }
    }
}
GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent.??fac = function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_Factory(t) { return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"])); };
GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent, selectors: [["app-gland-size-half-dovetail-gland-internal-vacuum-only"]], decls: 47, vars: 8, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg", "halfDovtail-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gld-angle"], [1, "gap-full-comp"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Gland Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "CL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " (to centerline)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "GLAND WIDTH: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "(sharp corners to OD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "GLAND DEPTH: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "TOP RADII: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "BOTTOM RADII: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "GLAND ANGLE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "GAP: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "(may or may not exist)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "user-rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.calculatorConfig && ctx.glandSizeHalfDovetailGlandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCalculatedControlValue("glandCenterlineNominal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCalculatedControlValue("topRadiiNominal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.getCalculatedControlValue("bottomRadiiNominal"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getCalculatedControlValue("glandAngleNominal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.getControlValue("gapNominal"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_15__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%]   .halfDovtail-bg[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/half_dovtail_graph.jpg) no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\r\n    bottom: 66px;\r\n    left: inherit;\r\n    right: -4px;\r\n    width: 88px;\r\n    display: inline-block;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\r\n    bottom: 20px;\r\n    right: 4px;\r\n    width: 100px;\r\n    left: inherit;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\r\n    bottom: 60px;\r\n    left: 10px;\r\n    background: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\r\n    left: 9px;\r\n    right: inherit;\r\n    top: 92px;\r\n    width: 100px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-angle[_ngcontent-%COMP%] {\r\n    bottom: 18px;\r\n    font-size: .70em;\r\n    right: 148px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gap-full-comp[_ngcontent-%COMP%] {\r\n    top: 65px;\r\n    font-size: .70em;\r\n    right: 22px;\r\n    width: 102px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\r\n    top: 57px;\r\n    left: 46px;\r\n    width: 80px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1oYWxmLWRvdmV0YWlsLWdsYW5kLWludGVybmFsLXZhY3V1bS1vbmx5L2dsYW5kLXNpemUtaGFsZi1kb3ZldGFpbC1nbGFuZC1pbnRlcm5hbC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7SUFDSSw2REFBNkQ7SUFDN0Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL2dsYW5kLXNpemUtaGFsZi1kb3ZldGFpbC1nbGFuZC1pbnRlcm5hbC12YWN1dW0tb25seS9nbGFuZC1zaXplLWhhbGYtZG92ZXRhaWwtZ2xhbmQtaW50ZXJuYWwtdmFjdXVtLW9ubHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdyYXBoIENTUyAqL1xyXG5cclxuLmdyYXBoLXNlYyAuaGFsZkRvdnRhaWwtYmcge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2hhbGZfZG92dGFpbF9ncmFwaC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LnRvcC1yYWRpaSB7XHJcbiAgICBib3R0b206IDY2cHg7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB3aWR0aDogODhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmJvdHRvbS1yYWRpaSB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC1kZXB0aCB7XHJcbiAgICBib3R0b206IDYwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC13aWR0aCB7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbiAgICByaWdodDogaW5oZXJpdDtcclxuICAgIHRvcDogOTJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC1hbmdsZSB7XHJcbiAgICBib3R0b206IDE4cHg7XHJcbiAgICBmb250LXNpemU6IC43MGVtO1xyXG4gICAgcmlnaHQ6IDE0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5oYWxmRG92dGFpbC1iZyBkaXYuZ2FwLWZ1bGwtY29tcCB7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IC43MGVtO1xyXG4gICAgcmlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMTAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmFwaC1zZWMgLmdyYXBoLWJnLmhhbGZEb3Z0YWlsLWJnIGRpdi5nbGQtaWQge1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogNDZweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gland-size-half-dovetail-gland-internal-vacuum-only',
                templateUrl: './gland-size-half-dovetail-gland-internal-vacuum-only.component.html',
                styleUrls: ['./gland-size-half-dovetail-gland-internal-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"] }, { type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__["RectangleGlandCalcValidationService"] }, { type: _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }, { type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyModule", function() { return GlandSizeHalfDovetailGlandInternalVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gland-size-half-dovetail-gland-internal-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts");
/* harmony import */ var _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gland-size-half-dovetail-gland-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts");
/* harmony import */ var _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gland-size-half-dovetail-gland-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts");
// core improts



// application imports






class GlandSizeHalfDovetailGlandInternalVacuumOnlyModule {
}
GlandSizeHalfDovetailGlandInternalVacuumOnlyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: GlandSizeHalfDovetailGlandInternalVacuumOnlyModule });
GlandSizeHalfDovetailGlandInternalVacuumOnlyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function GlandSizeHalfDovetailGlandInternalVacuumOnlyModule_Factory(t) { return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyModule)(); }, providers: [
        _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
            _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GlandSizeHalfDovetailGlandInternalVacuumOnlyModule, { declarations: [_gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                    _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]
                ],
                providers: [
                    _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyService", function() { return GlandSizeHalfDovetailGlandInternalVacuumOnlyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_GlandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/GlandSizeRectangularGlandInternalVacuumOnlyDTO */ "./client/app/models/GlandSizeRectangularGlandInternalVacuumOnlyDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
// core imports

// application imports





class GlandSizeHalfDovetailGlandInternalVacuumOnlyService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    createGland(form, unit, unitTemp) {
        let body = new _models_GlandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax.toString();
        body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].GLAND_SIZING;
        body.glandType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["glandType"].HALF_DOVETAIL;
        return this._http.post(`${this.baseUrl}glandsizecalc/createGland`, body);
    }
}
GlandSizeHalfDovetailGlandInternalVacuumOnlyService.??fac = function GlandSizeHalfDovetailGlandInternalVacuumOnlyService_Factory(t) { return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GlandSizeHalfDovetailGlandInternalVacuumOnlyService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: GlandSizeHalfDovetailGlandInternalVacuumOnlyService, factory: GlandSizeHalfDovetailGlandInternalVacuumOnlyService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module-es2015.js.map