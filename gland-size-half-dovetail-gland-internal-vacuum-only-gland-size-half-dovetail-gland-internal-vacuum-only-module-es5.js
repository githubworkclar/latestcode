function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module"], {
  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts":
  /*!****************************************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts ***!
    \****************************************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeHalfDovetailGlandInternalVacuumOnlyGlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule", function () {
      return GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule;
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


    var _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gland-size-half-dovetail-gland-internal-vacuum-only.component */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts");

    var routes = [{
      path: '',
      component: _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"],
      pathMatch: 'full'
    }];

    var GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule = function GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule() {
      _classCallCheck(this, GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule);
    };

    GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule
    });
    GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule_Factory(t) {
        return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule, [{
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
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts":
  /*!***********************************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts ***!
    \***********************************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeHalfDovetailGlandInternalVacuumOnlyGlandSizeHalfDovetailGlandInternalVacuumOnlyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent", function () {
      return GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent;
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
    /*! ../../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/control-base.service */
    "./client/app/shared/services/control-base.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/auth.service */
    "./client/app/shared/services/auth.service.ts");
    /* harmony import */


    var _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../rectangle-gland-calc.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts");
    /* harmony import */


    var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
    /* harmony import */


    var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/print.service */
    "./client/app/shared/services/print.service.ts");
    /* harmony import */


    var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/temperature-button/temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../rectangle-gland-calc-validation.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
    /* harmony import */


    var _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./gland-size-half-dovetail-gland-internal-vacuum-only.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts");
    /* harmony import */


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/components/toasts-container/toast-service */
    "./client/app/shared/components/toasts-container/toast-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/components/user-rules/user-rules.component */
    "./client/app/shared/components/user-rules/user-rules.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
    /* harmony import */


    var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts"); // core imports
    // third party imports


    function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onSubmit(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "calculator-toolbar", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reset", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onReset();
        })("print", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onPrint();
        })("copy", function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onCopy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dynamic-form-two-column-layout", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.glandSizeHalfDovetailGlandForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.glandSizeHalfDovetailGlandForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowCopyBtn", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.glandSizeHalfDovetailGlandForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
      }
    }

    var GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent = /*#__PURE__*/function () {
      function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, rectangleGlandCalcValidationService, glandSizeHalfDovetailGlandInternalVacuumOnlyService, helperService, toastService) {
        var _this = this;

        _classCallCheck(this, GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent);

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
        this.serverWarnings = []; // get gland-size-dovetail-gland-vacuum-only config value from O-Ring JSON 

        var rectangleJSONConfig = this.rectangleGlandCalcService.getCurrentGlandSizeCalcConfigValue; // gland-size calculator config subscription

        if (rectangleJSONConfig) {
          this.initializeOringConfig(rectangleJSONConfig);
        } else {
          this.glandSizeDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe(function (x) {
            if (x) {
              _this.initializeOringConfig(x);
            }
          });
        } // unit change update calculator values handler


        this.onUnitChangeUpdateCalculator(); // temperature change perform operations

        this.onTemperatureChangeUpdateCalculator();
      }

      _createClass(GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent, [{
        key: "initializeOringConfig",
        // initialize gland-size-dovetail-gland-vacuum-only calculator by json config param
        value: function initializeOringConfig(glandSizeJsonConfig) {
          // calculator - Half Dovetail Gland - Internal Vacuum Only
          var glandSizeDovetailGlandVacuumOnly = Object.assign({}, glandSizeJsonConfig.calculators[2]);
          this.calculatorConfig = glandSizeDovetailGlandVacuumOnly; // send calculator to dynamic form service

          this.dynamicFormTwoColumnLayoutService.sendCalculator(glandSizeDovetailGlandVacuumOnly); // create form

          this.createForm();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.CalculatedData = null;
        } // form control changes subcription and update the graph data

      }, {
        key: "getControlValue",
        value: function getControlValue(fieldName) {
          if (this.glandSizeHalfDovetailGlandForm && this.glandSizeHalfDovetailGlandForm.controls[fieldName] && this.glandSizeHalfDovetailGlandForm.controls[fieldName].value) {
            return (+this.glandSizeHalfDovetailGlandForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3);
          }
        } // get calculated field values by fieldname

      }, {
        key: "getCalculatedControlValue",
        value: function getCalculatedControlValue(fieldName) {
          if (this.CalculatedData) {
            var fieldValue = this.CalculatedData[fieldName];

            if (fieldValue) {
              return (+fieldValue).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3);
            }
          }
        } // unit change update output values handler

      }, {
        key: "onUnitChangeUpdateCalculator",
        value: function onUnitChangeUpdateCalculator() {
          var _this2 = this;

          // unit switch button click/change subscription
          this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
              if (x.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                // millimeter
                _this2.bottomRadiiMaxLimit = 0.89;
              } else {
                // Inch
                _this2.bottomRadiiMaxLimit = 0.035;
              } // calculated change detection when by changing the object


              if (_this2.CalculatedData) {
                _this2.CalculatedData = Object.assign({}, _this2.CalculatedData);
              } // convert the form data


              var convertedForm = _this2.helperService.convertFormUnitControlValuesAndSet(_this2.calculatorConfig && _this2.calculatorConfig.form ? _this2.calculatorConfig.form : null, _this2.glandSizeHalfDovetailGlandForm, x);

              if (convertedForm) {
                _this2.glandSizeHalfDovetailGlandForm = convertedForm;
              } /// recalculate the data


              _this2.onSubmit();
            }
          });
        } // create form group

      }, {
        key: "createForm",
        value: function createForm() {
          var _this3 = this;

          // get form controls nested array
          var leftFormControls = this.calculatorConfig.form.left_column.form_layout_row.map(function (row) {
            return row.form_layout_columns.map(function (column) {
              var formControls = [];

              for (var index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (_this3.glandSizeHalfDovetailGlandForm) {
                  var fc = _this3.glandSizeHalfDovetailGlandForm.get(column.form_controls[index].key);

                  if (fc) {
                    column.form_controls[index].value = fc.value;
                  }
                } // create reactive form of only those control which are show = true


                if (column.form_controls[index].show) {
                  formControls.push(column.form_controls[index]);
                }
              }

              return formControls;
            });
          });
          var rightFormControls = this.calculatorConfig.form.right_column.form_layout_row.map(function (row) {
            return row.form_layout_columns.map(function (column) {
              var formControls = [];

              for (var index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (_this3.glandSizeHalfDovetailGlandForm) {
                  var fc = _this3.glandSizeHalfDovetailGlandForm.get(column.form_controls[index].key);

                  if (fc) {
                    column.form_controls[index].value = fc.value;
                  }
                } // createreaxctive form of only those control which are show = true


                if (column.form_controls[index].show) {
                  formControls.push(column.form_controls[index]);
                }
              }

              return formControls;
            });
          }); // make form control flatten array

          this.flattenedFormControls = []; // add calculator toolbar option

          this.flattenedFormControls.push(this.calculatorConfig.toolbarOption);
          this.flattenedFormControls = [].concat(_toConsumableArray(this.flattenedFormControls), _toConsumableArray(this.controlBaseService.flatten(leftFormControls)));
          this.flattenedFormControls = [].concat(_toConsumableArray(this.flattenedFormControls), _toConsumableArray(this.controlBaseService.flatten(rightFormControls))); // exclude formcontrol which is type of label

          var filteredControls = this.flattenedFormControls.filter(function (fc) {
            // exclude labels and buttons from formgroup
            if (fc && fc.type !== _this3.controlType.label && fc.type !== _this3.controlType.button) {
              return fc;
            }
          });
          this.glandSizeHalfDovetailGlandForm = this.controlBaseService.toFormGroup(filteredControls); // get and set validations

          var validations = []; // get validation key from json config object

          var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;

          for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];

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
          } // set custom validations with params


          this.glandSizeHalfDovetailGlandForm.setValidators(validations);
        } // form submit event

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          var isSubmitted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.CalculatedData = null; // reset error, warnings

          this.resetErroAndWarnings(); // reset calculated output

          this.resetCalculatedLabelValue(); // this.payLoad = this.glandSizeHalfDovetailGlandForm.value;

          this.isSubmitted = isSubmitted; // stop here if form is invalid/Not_valid

          if (!this.glandSizeHalfDovetailGlandForm || this.glandSizeHalfDovetailGlandForm.invalid) {
            return;
          } // perform calculation


          this.glandSizeHalfDovetailGlandInternalVacuumOnlyService.createGland(this.glandSizeHalfDovetailGlandForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
            if (resp.data) {
              // set CalculatedData
              // this will set the graph data also
              _this4.CalculatedData = Object.assign({}, resp.data);

              if (resp.data.error && resp.data.error.length > 0) {
                _this4.serverErrors = resp.data.error.slice();
              }

              if (resp.data.warning && resp.data.warning.length > 0) {
                _this4.serverWarnings = resp.data.warning;
              }

              var responseDataKeys = Object.keys(resp.data); // when toleranc or minmax option is selected than also bind calculated labels received after calculation
              // Bind left form data
              // loop through each form left column row

              for (var rowIndex = 0; rowIndex < _this4.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
                // loop through columns
                for (var columnIndex = 0; columnIndex < _this4.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                  // loop through controls
                  for (var controlIndex = 0; controlIndex < _this4.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = _this4.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex]; // get fields key from resp data
                    // const responseDataKeys = Object.keys(resp.data);

                    for (var keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                      if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[keyIndex] === formControl.key) {
                        // set JSON output label
                        // bind calculated result to output label
                        _this4.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[keyIndex]].toFixed(_this4.unitButtonService.getCurrentUnitValue && _this4.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3) : resp.data[responseDataKeys[keyIndex]] : resp.data[responseDataKeys[keyIndex]];
                      }
                    }
                  }
                }
              } // Bind right form data
              // loop through each form left column row


              for (var _rowIndex = 0; _rowIndex < _this4.calculatorConfig.form.right_column.form_layout_row.length; _rowIndex++) {
                // loop through columns
                for (var _columnIndex = 0; _columnIndex < _this4.calculatorConfig.form.right_column.form_layout_row[_rowIndex].form_layout_columns.length; _columnIndex++) {
                  // loop through controls
                  for (var _controlIndex = 0; _controlIndex < _this4.calculatorConfig.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls.length; _controlIndex++) {
                    // get form control of JSON
                    var _formControl = _this4.calculatorConfig.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls[_controlIndex]; // get fields key from resp data
                    // const responseDataKeys = Object.keys(resp.data);

                    for (var _keyIndex = 0; _keyIndex < responseDataKeys.length; _keyIndex++) {
                      if ((_formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || _formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[_keyIndex] === _formControl.key) {
                        // set JSON output label
                        // bind calculated result to output label
                        _this4.calculatorConfig.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls[_controlIndex].label = resp.data[responseDataKeys[_keyIndex]] ? _formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[_keyIndex]].toFixed(_this4.unitButtonService.getCurrentUnitValue && _this4.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3) : resp.data[responseDataKeys[_keyIndex]] : resp.data[responseDataKeys[_keyIndex]];
                      }
                    }
                  }
                }
              } // Bind output form data
              // loop through each output


              for (var outputIndex = 0; outputIndex < _this4.calculatorConfig.form_output.length; outputIndex++) {
                // loop through rows
                for (var _rowIndex2 = 0; _rowIndex2 < _this4.calculatorConfig.form_output[outputIndex].row.length; _rowIndex2++) {
                  // loop through columns
                  for (var _columnIndex2 = 0; _columnIndex2 < _this4.calculatorConfig.form_output[outputIndex].row[_rowIndex2].form_layout_columns.length; _columnIndex2++) {
                    // loop through controls
                    for (var _controlIndex2 = 0; _controlIndex2 < _this4.calculatorConfig.form_output[outputIndex].row[_rowIndex2].form_layout_columns[_columnIndex2].form_controls.length; _controlIndex2++) {
                      // get form control of JSON
                      var _formControl2 = _this4.calculatorConfig.form_output[outputIndex].row[_rowIndex2].form_layout_columns[_columnIndex2].form_controls[_controlIndex2]; // get fields key from resp data
                      // const responseDataKeys = Object.keys(resp.data);

                      for (var _keyIndex2 = 0; _keyIndex2 < responseDataKeys.length; _keyIndex2++) {
                        if (_formControl2.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && responseDataKeys[_keyIndex2] === _formControl2.key) {
                          // set JSON output label
                          // bind calculated result to output label
                          _this4.calculatorConfig.form_output[outputIndex].row[_rowIndex2].form_layout_columns[_columnIndex2].form_controls[_controlIndex2].label = "".concat(resp.data[responseDataKeys[_keyIndex2]] !== null && resp.data[responseDataKeys[_keyIndex2]] !== undefined && !isNaN(+resp.data[responseDataKeys[_keyIndex2]]) ? parseFloat(resp.data[responseDataKeys[_keyIndex2]]).toFixed(1) : resp.data[responseDataKeys[_keyIndex2]], "%");
                        }
                      }
                    }
                  }
                }
              } // reset auth token 


              _this4.setAuth();
            }
          }, function (error) {
            // reset auth token 
            _this4.setAuth(); // TODO: show error if any


            console.log(error);
          });
        } // reset auth token

      }, {
        key: "setAuth",
        value: function setAuth() {
          this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (r) {
            return r;
          });
        } // temperature change update output values handler

      }, {
        key: "onTemperatureChangeUpdateCalculator",
        value: function onTemperatureChangeUpdateCalculator() {
          var _this5 = this;

          // unit switch button click/change subscription
          this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
              _this5.resetFormAndCalculation();
            }
          });
        } // on reset button handler
        // on reset button handler

      }, {
        key: "onReset",
        value: function onReset() {
          // reset dynamically created form controls
          // get form controls key
          var formControlKeys = Object.keys(this.glandSizeHalfDovetailGlandForm.controls); // loop through the reactive form/formgroup controls 

          for (var index = 0; index < formControlKeys.length; index++) {
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);

            if (formControlDefaultValue) {
              this.glandSizeHalfDovetailGlandForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            } else {
              this.glandSizeHalfDovetailGlandForm.controls[formControlKeys[index]].setValue('');
            }
          }

          this.resetFormAndCalculation();
        }
      }, {
        key: "resetFormAndCalculation",
        value: function resetFormAndCalculation() {
          // reset form submitted status to false 
          this.isSubmitted = false; // reset client errors and warnings

          this.resetErroAndWarnings();

          if (!this.calculatorConfig) {
            return;
          } // reset glandsize rectangle-internal-vacuum-only JSON config data
          // reset left form data
          // loop through each form left column row


          for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];

                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) {
                  // set JSON output label
                  // bind calculated result to output label
                  this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                }
              }
            }
          } // reset right form data
          // loop through each form left column row


          for (var _rowIndex3 = 0; _rowIndex3 < this.calculatorConfig.form.right_column.form_layout_row.length; _rowIndex3++) {
            // loop through columns
            for (var _columnIndex3 = 0; _columnIndex3 < this.calculatorConfig.form.right_column.form_layout_row[_rowIndex3].form_layout_columns.length; _columnIndex3++) {
              // loop through controls
              for (var _controlIndex3 = 0; _controlIndex3 < this.calculatorConfig.form.right_column.form_layout_row[_rowIndex3].form_layout_columns[_columnIndex3].form_controls.length; _controlIndex3++) {
                // get form control of JSON
                var _formControl3 = this.calculatorConfig.form.right_column.form_layout_row[_rowIndex3].form_layout_columns[_columnIndex3].form_controls[_controlIndex3]; // get fields key from resp data
                // const responseDataKeys = Object.keys(resp.data);

                if (_formControl3.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label || _formControl3.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculatedDegreeLabel) {
                  // set JSON output label
                  // bind calculated result to output label
                  this.calculatorConfig.form.right_column.form_layout_row[_rowIndex3].form_layout_columns[_columnIndex3].form_controls[_controlIndex3].label = '';
                }
              }
            }
          } // reset output form data
          // loop through each output


          for (var outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (var _rowIndex4 = 0; _rowIndex4 < this.calculatorConfig.form_output[outputIndex].row.length; _rowIndex4++) {
              // loop through columns
              for (var _columnIndex4 = 0; _columnIndex4 < this.calculatorConfig.form_output[outputIndex].row[_rowIndex4].form_layout_columns.length; _columnIndex4++) {
                // loop through controls
                for (var _controlIndex4 = 0; _controlIndex4 < this.calculatorConfig.form_output[outputIndex].row[_rowIndex4].form_layout_columns[_columnIndex4].form_controls.length; _controlIndex4++) {
                  // get form control of JSON
                  var _formControl4 = this.calculatorConfig.form_output[outputIndex].row[_rowIndex4].form_layout_columns[_columnIndex4].form_controls[_controlIndex4]; // get fields key from resp data
                  // const responseDataKeys = Object.keys(resp.data);

                  if (_formControl4.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form_output[outputIndex].row[_rowIndex4].form_layout_columns[_columnIndex4].form_controls[_controlIndex4].label = "%";
                  }
                }
              }
            }
          } // reset calculated data received after calculation


          this.CalculatedData = null;
        } // print button event handler

      }, {
        key: "onPrint",
        value: function onPrint() {
          this.printService.generatePdf("halfDovetailGland");
        } // copy event handler of toolbar

      }, {
        key: "onCopy",
        value: function onCopy() {
          var formAndOutputData; // save calculated data to local storage

          if (this.CalculatedData) {
            formAndOutputData = Object.assign(Object.assign({}, this.glandSizeHalfDovetailGlandForm.value), this.CalculatedData);
          } else {
            formAndOutputData = Object.assign({}, this.glandSizeHalfDovetailGlandForm.value);
          }

          formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly;
          localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].HALF_DOVETAIL_GLAND, JSON.stringify(formAndOutputData)); // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));

          this.toastService.showSucces("Calculator data copied !");
        } // reset error, warnings of client and server

      }, {
        key: "resetErroAndWarnings",
        value: function resetErroAndWarnings() {
          this.clientErrors = [];
          this.clientWarnings = [];
          this.serverErrors = [];
          this.serverWarnings = [];
        } // reset calculated label or output value in JSOn config

      }, {
        key: "resetCalculatedLabelValue",
        value: function resetCalculatedLabelValue() {
          this.CalculatedData = {};

          if (!this.calculatorConfig) {
            return;
          } // reset left form data
          // loop through each form left column row


          for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];

                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                  // set JSON output label
                  // reset calculated result to output label
                  this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                }
              }
            }
          } // reset right form data
          // loop through each form left column row


          for (var _rowIndex5 = 0; _rowIndex5 < this.calculatorConfig.form.right_column.form_layout_row.length; _rowIndex5++) {
            // loop through columns
            for (var _columnIndex5 = 0; _columnIndex5 < this.calculatorConfig.form.right_column.form_layout_row[_rowIndex5].form_layout_columns.length; _columnIndex5++) {
              // loop through controls
              for (var _controlIndex5 = 0; _controlIndex5 < this.calculatorConfig.form.right_column.form_layout_row[_rowIndex5].form_layout_columns[_columnIndex5].form_controls.length; _controlIndex5++) {
                // get form control of JSON
                var _formControl5 = this.calculatorConfig.form.right_column.form_layout_row[_rowIndex5].form_layout_columns[_columnIndex5].form_controls[_controlIndex5];

                if (_formControl5.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                  // set JSON output label
                  // bind calculated result to output label
                  this.calculatorConfig.form.right_column.form_layout_row[_rowIndex5].form_layout_columns[_columnIndex5].form_controls[_controlIndex5].label = "";
                }
              }
            }
          } // reset output form data
          // loop through each output


          for (var outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (var _rowIndex6 = 0; _rowIndex6 < this.calculatorConfig.form_output[outputIndex].row.length; _rowIndex6++) {
              // loop through columns
              for (var _columnIndex6 = 0; _columnIndex6 < this.calculatorConfig.form_output[outputIndex].row[_rowIndex6].form_layout_columns.length; _columnIndex6++) {
                // loop through controls
                for (var _controlIndex6 = 0; _controlIndex6 < this.calculatorConfig.form_output[outputIndex].row[_rowIndex6].form_layout_columns[_columnIndex6].form_controls.length; _controlIndex6++) {
                  // get form control of JSON
                  var _formControl6 = this.calculatorConfig.form_output[outputIndex].row[_rowIndex6].form_layout_columns[_columnIndex6].form_controls[_controlIndex6];

                  if (_formControl6.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form_output[outputIndex].row[_rowIndex6].form_layout_columns[_columnIndex6].form_controls[_controlIndex6].label = " %";
                  }
                }
              }
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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
      }, {
        key: "CalculatedData",
        get: function get() {
          return this.calculatedData;
        },
        set: function set(val) {
          this.calculatedData = val;
          var currentUnit = this.unitButtonService.getCurrentUnitValue;

          if (this.calculatedData && this.calculatedData.unit && currentUnit && +currentUnit.id !== +this.calculatedData.unit) {
            this.calculatedData.unit = currentUnit.id.toString();
            var keys = Object.keys(this.calculatedData);

            for (var index = 0; index < keys.length; index++) {
              // do not convert the glandAngle calculated result
              // if (keys[index] === "glandAngleMin" || keys[index] === "glandAngleNominal" || keys[index] === "glandAngleMax") {
              if (keys[index] === "glandAngleNominal") {
                continue;
              }

              if (+currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                this.calculatedData[keys[index]] = this.helperService.convertToMillimeter(+this.calculatedData[keys[index]]);
              } else {
                this.calculatedData[keys[index]] = this.helperService.convertToInch(+this.calculatedData[keys[index]]);
              }
            }
          }
        }
      }]);

      return GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent;
    }();

    GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent.ɵfac = function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_Factory(t) {
      return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]));
    };

    GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent,
      selectors: [["app-gland-size-half-dovetail-gland-internal-vacuum-only"]],
      decls: 47,
      vars: 8,
      consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg", "halfDovtail-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gld-angle"], [1, "gap-full-comp"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]],
      template: function GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gland Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (to centerline)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GLAND WIDTH: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(sharp corners to OD)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "GLAND DEPTH: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TOP RADII: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "BOTTOM RADII: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "GLAND ANGLE: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "GAP: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "(may or may not exist)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "user-rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.glandSizeHalfDovetailGlandForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandCenterlineNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("topRadiiNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getCalculatedControlValue("bottomRadiiNominal"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandAngleNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_15__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormTwoColumnLayoutComponent"]],
      styles: [".graph-sec[_ngcontent-%COMP%]   .halfDovtail-bg[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/half_dovtail_graph.jpg) no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\r\n    bottom: 66px;\r\n    left: inherit;\r\n    right: -4px;\r\n    width: 88px;\r\n    display: inline-block;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\r\n    bottom: 20px;\r\n    right: 4px;\r\n    width: 100px;\r\n    left: inherit;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\r\n    bottom: 60px;\r\n    left: 10px;\r\n    background: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\r\n    left: 9px;\r\n    right: inherit;\r\n    top: 92px;\r\n    width: 100px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-angle[_ngcontent-%COMP%] {\r\n    bottom: 18px;\r\n    font-size: .70em;\r\n    right: 148px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gap-full-comp[_ngcontent-%COMP%] {\r\n    top: 65px;\r\n    font-size: .70em;\r\n    right: 22px;\r\n    width: 102px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.halfDovtail-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\r\n    top: 57px;\r\n    left: 46px;\r\n    width: 80px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1oYWxmLWRvdmV0YWlsLWdsYW5kLWludGVybmFsLXZhY3V1bS1vbmx5L2dsYW5kLXNpemUtaGFsZi1kb3ZldGFpbC1nbGFuZC1pbnRlcm5hbC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7SUFDSSw2REFBNkQ7SUFDN0Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsY0FBYztJQUNkLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL2dsYW5kLXNpemUtaGFsZi1kb3ZldGFpbC1nbGFuZC1pbnRlcm5hbC12YWN1dW0tb25seS9nbGFuZC1zaXplLWhhbGYtZG92ZXRhaWwtZ2xhbmQtaW50ZXJuYWwtdmFjdXVtLW9ubHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdyYXBoIENTUyAqL1xyXG5cclxuLmdyYXBoLXNlYyAuaGFsZkRvdnRhaWwtYmcge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2hhbGZfZG92dGFpbF9ncmFwaC5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LnRvcC1yYWRpaSB7XHJcbiAgICBib3R0b206IDY2cHg7XHJcbiAgICBsZWZ0OiBpbmhlcml0O1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB3aWR0aDogODhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmJvdHRvbS1yYWRpaSB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbGVmdDogaW5oZXJpdDtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC1kZXB0aCB7XHJcbiAgICBib3R0b206IDYwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC13aWR0aCB7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbiAgICByaWdodDogaW5oZXJpdDtcclxuICAgIHRvcDogOTJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuaGFsZkRvdnRhaWwtYmcgZGl2LmdsZC1hbmdsZSB7XHJcbiAgICBib3R0b206IDE4cHg7XHJcbiAgICBmb250LXNpemU6IC43MGVtO1xyXG4gICAgcmlnaHQ6IDE0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5oYWxmRG92dGFpbC1iZyBkaXYuZ2FwLWZ1bGwtY29tcCB7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IC43MGVtO1xyXG4gICAgcmlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMTAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmFwaC1zZWMgLmdyYXBoLWJnLmhhbGZEb3Z0YWlsLWJnIGRpdi5nbGQtaWQge1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogNDZweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gland-size-half-dovetail-gland-internal-vacuum-only',
          templateUrl: './gland-size-half-dovetail-gland-internal-vacuum-only.component.html',
          styleUrls: ['./gland-size-half-dovetail-gland-internal-vacuum-only.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__["ControlBaseService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcService"]
        }, {
          type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__["DynamicFormTwoColumnLayoutService"]
        }, {
          type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]
        }, {
          type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]
        }, {
          type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"]
        }, {
          type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_10__["RectangleGlandCalcValidationService"]
        }, {
          type: _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]
        }, {
          type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]
        }, {
          type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module.ts":
  /*!********************************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module.ts ***!
    \********************************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyModule */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeHalfDovetailGlandInternalVacuumOnlyGlandSizeHalfDovetailGlandInternalVacuumOnlyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyModule", function () {
      return GlandSizeHalfDovetailGlandInternalVacuumOnlyModule;
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
    /*! ../../../shared/shared.module */
    "./client/app/shared/shared.module.ts");
    /* harmony import */


    var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../dynamic-form/dynamic-form.module */
    "./client/app/dynamic-form/dynamic-form.module.ts");
    /* harmony import */


    var _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gland-size-half-dovetail-gland-internal-vacuum-only-routing.module */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only-routing.module.ts");
    /* harmony import */


    var _gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gland-size-half-dovetail-gland-internal-vacuum-only.component */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.component.ts");
    /* harmony import */


    var _gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gland-size-half-dovetail-gland-internal-vacuum-only.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts"); // core improts
    // application imports


    var GlandSizeHalfDovetailGlandInternalVacuumOnlyModule = function GlandSizeHalfDovetailGlandInternalVacuumOnlyModule() {
      _classCallCheck(this, GlandSizeHalfDovetailGlandInternalVacuumOnlyModule);
    };

    GlandSizeHalfDovetailGlandInternalVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlandSizeHalfDovetailGlandInternalVacuumOnlyModule
    });
    GlandSizeHalfDovetailGlandInternalVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlandSizeHalfDovetailGlandInternalVacuumOnlyModule_Factory(t) {
        return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyModule)();
      },
      providers: [_gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeHalfDovetailGlandInternalVacuumOnlyModule, {
        declarations: [_gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_gland_size_half_dovetail_gland_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"], _gland_size_half_dovetail_gland_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule"]],
          providers: [_gland_size_half_dovetail_gland_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeHalfDovetailGlandInternalVacuumOnlyService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts":
  /*!*********************************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.service.ts ***!
    \*********************************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeHalfDovetailGlandInternalVacuumOnlyService */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeHalfDovetailGlandInternalVacuumOnlyGlandSizeHalfDovetailGlandInternalVacuumOnlyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeHalfDovetailGlandInternalVacuumOnlyService", function () {
      return GlandSizeHalfDovetailGlandInternalVacuumOnlyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.config.service */
    "./client/app/app.config.service.ts");
    /* harmony import */


    var _models_GlandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/GlandSizeRectangularGlandInternalVacuumOnlyDTO */
    "./client/app/models/GlandSizeRectangularGlandInternalVacuumOnlyDTO.ts");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // core imports
    // application imports


    var GlandSizeHalfDovetailGlandInternalVacuumOnlyService = /*#__PURE__*/function () {
      function GlandSizeHalfDovetailGlandInternalVacuumOnlyService(_http) {
        _classCallCheck(this, GlandSizeHalfDovetailGlandInternalVacuumOnlyService);

        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
      }

      _createClass(GlandSizeHalfDovetailGlandInternalVacuumOnlyService, [{
        key: "createGland",
        value: function createGland(form, unit, unitTemp) {
          var body = new _models_GlandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
          body.unit = unit.id.toString();
          body.unitTemp = unitTemp.id.toString();
          body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax.toString();
          body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].GLAND_SIZING;
          body.glandType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["glandType"].HALF_DOVETAIL;
          return this._http.post("".concat(this.baseUrl, "glandsizecalc/createGland"), body);
        }
      }]);

      return GlandSizeHalfDovetailGlandInternalVacuumOnlyService;
    }();

    GlandSizeHalfDovetailGlandInternalVacuumOnlyService.ɵfac = function GlandSizeHalfDovetailGlandInternalVacuumOnlyService_Factory(t) {
      return new (t || GlandSizeHalfDovetailGlandInternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    GlandSizeHalfDovetailGlandInternalVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlandSizeHalfDovetailGlandInternalVacuumOnlyService,
      factory: GlandSizeHalfDovetailGlandInternalVacuumOnlyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeHalfDovetailGlandInternalVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module-es5.js.map