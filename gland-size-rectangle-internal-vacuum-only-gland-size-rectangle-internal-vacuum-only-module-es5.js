function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module"], {
  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeRectangleInternalVacuumOnlyRoutingModule */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeRectangleInternalVacuumOnlyGlandSizeRectangleInternalVacuumOnlyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyRoutingModule", function () {
      return GlandSizeRectangleInternalVacuumOnlyRoutingModule;
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


    var _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gland-size-rectangle-internal-vacuum-only.component */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts");

    var routes = [{
      path: '',
      component: _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangleInternalVacuumOnlyComponent"],
      pathMatch: 'full'
    }];

    var GlandSizeRectangleInternalVacuumOnlyRoutingModule = function GlandSizeRectangleInternalVacuumOnlyRoutingModule() {
      _classCallCheck(this, GlandSizeRectangleInternalVacuumOnlyRoutingModule);
    };

    GlandSizeRectangleInternalVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlandSizeRectangleInternalVacuumOnlyRoutingModule
    });
    GlandSizeRectangleInternalVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlandSizeRectangleInternalVacuumOnlyRoutingModule_Factory(t) {
        return new (t || GlandSizeRectangleInternalVacuumOnlyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangleInternalVacuumOnlyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyRoutingModule, [{
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
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeRectangleInternalVacuumOnlyComponent */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeRectangleInternalVacuumOnlyGlandSizeRectangleInternalVacuumOnlyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyComponent", function () {
      return GlandSizeRectangleInternalVacuumOnlyComponent;
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


    var _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./gland-size-rectangle-internal-vacuum-only.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts");
    /* harmony import */


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../rectangle-gland-calc-validation.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/components/toasts-container/toast-service */
    "./client/app/shared/components/toasts-container/toast-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/components/user-rules/user-rules.component */
    "./client/app/shared/components/user-rules/user-rules.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */
    "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
    /* harmony import */


    var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts"); // core imports
    // third party imports


    function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.onSubmit(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "calculator-toolbar", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reset", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onReset();
        })("print", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onPrint();
        })("copy", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.glandSizeRectangleInternalVacuumForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.glandSizeRectangleInternalVacuumForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowCopyBtn", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.glandSizeRectangleInternalVacuumForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
      }
    }

    var GlandSizeRectangleInternalVacuumOnlyComponent = /*#__PURE__*/function () {
      function GlandSizeRectangleInternalVacuumOnlyComponent(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, glandSizeRectangleInternalVacuumOnlyService, helperService, rectangleGlandCalcValidationService, cookieService, toastService) {
        var _this = this;

        _classCallCheck(this, GlandSizeRectangleInternalVacuumOnlyComponent);

        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.glandSizeRectangleInternalVacuumOnlyService = glandSizeRectangleInternalVacuumOnlyService;
        this.helperService = helperService;
        this.rectangleGlandCalcValidationService = rectangleGlandCalcValidationService;
        this.cookieService = cookieService;
        this.toastService = toastService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = []; // o-ring calculator config subscription

        this.oRingDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe(function (x) {
          if (x) {
            // calculator - internal vacuum only
            _this.calculatorConfig = x.calculators[0]; // send calculator to dynamic form service

            _this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[0]); // create form


            _this.createForm();
          }
        }); // temperature change perform operations

        this.onTemperatureChangeUpdateCalculator(); // unit change

        this.onUnitChange();
      }

      _createClass(GlandSizeRectangleInternalVacuumOnlyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isSubmitted = false;
          this.CalculatedData = null;
        } // unit change perform operations

      }, {
        key: "onUnitChange",
        value: function onUnitChange() {
          var _this2 = this;

          // reset 
          this.resetFormAndCalculation(); // unit switch button click/change subscription

          this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
              if (_this2.CalculatedData) {
                // calculated change detection when by changing the object
                _this2.CalculatedData = Object.assign({}, _this2.CalculatedData);
              } // convert the form data


              var convertedForm = _this2.helperService.convertFormUnitControlValuesAndSet(_this2.calculatorConfig && _this2.calculatorConfig.form ? _this2.calculatorConfig.form : null, _this2.glandSizeRectangleInternalVacuumForm, x);

              if (convertedForm) {
                _this2.glandSizeRectangleInternalVacuumForm = convertedForm;
              } /// recalculate the data


              _this2.onSubmit();
            }
          });
        } // temperature change update output values handler

      }, {
        key: "onTemperatureChangeUpdateCalculator",
        value: function onTemperatureChangeUpdateCalculator() {
          var _this3 = this;

          // temperature switch button click/change subscription
          this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
              _this3.resetFormAndCalculation();
            }
          });
        } // form control changes subcription and update the graph data

      }, {
        key: "getControlValue",
        value: function getControlValue(fieldName) {
          if (this.glandSizeRectangleInternalVacuumForm && this.glandSizeRectangleInternalVacuumForm.controls[fieldName] && this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value) {
            return (+this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3);
          }
        } // get calculated field values by fieldname

      }, {
        key: "getCalculatedControlValue",
        value: function getCalculatedControlValue(fieldName) {
          if (this.CalculatedData) {
            var fieldValue = this.CalculatedData[fieldName];

            if (fieldValue) {
              return this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? (+fieldValue).toFixed(2) : (+fieldValue).toFixed(3);
            }
          }
        } // form submit event

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          var isSubmitted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.CalculatedData = null; // reset error, warnings

          this.resetErroAndWarnings(); // reset calculated output

          this.resetCalculatedLabelValue(); // this.payLoad = this.glandSizeRectangleInternalVacuumForm.value;

          this.isSubmitted = isSubmitted; // stop here if form is invalid/Not_valid

          if (!this.glandSizeRectangleInternalVacuumForm || this.glandSizeRectangleInternalVacuumForm.invalid) {
            return;
          } // perform calculation


          this.glandSizeRectangleInternalVacuumOnlyService.createGland(this.glandSizeRectangleInternalVacuumForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
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

              var responseDataKeys = Object.keys(resp.data); // Bind left form data
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
                      if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                        // set JSON output label
                        // bind calculated result to output label
                        _this4.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed(_this4.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3) : resp.data[responseDataKeys[keyIndex]];
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
                      if (_formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && responseDataKeys[_keyIndex] === _formControl.key) {
                        // set JSON output label
                        // bind calculated result to output label
                        _this4.calculatorConfig.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls[_controlIndex].label = resp.data[responseDataKeys[_keyIndex]] ? resp.data[responseDataKeys[_keyIndex]].toFixed(_this4.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? 2 : 3) : resp.data[responseDataKeys[_keyIndex]];
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
        } // on reset button handler

      }, {
        key: "onReset",
        value: function onReset() {
          // reset dynamically created form controls
          // get form controls key
          var formControlKeys = Object.keys(this.glandSizeRectangleInternalVacuumForm.controls); // loop through the reactive form/formgroup controls 

          for (var index = 0; index < formControlKeys.length; index++) {
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);

            if (formControlDefaultValue) {
              this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            } else {
              this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue('');
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

                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
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
                var _formControl3 = this.calculatorConfig.form.right_column.form_layout_row[_rowIndex3].form_layout_columns[_columnIndex3].form_controls[_controlIndex3];

                if (_formControl3.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                  // set JSON output label
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
                  // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                  // if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {

                  if (_formControl4.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form_output[outputIndex].row[_rowIndex4].form_layout_columns[_columnIndex4].form_controls[_controlIndex4].label = "%";
                  } // }

                }
              }
            }
          } // reset calculated data received after calculation


          this.CalculatedData = null;
        } // print button event handler

      }, {
        key: "onPrint",
        value: function onPrint() {
          this.printService.generatePdf("rectangleGland");
        } // create form group

      }, {
        key: "createForm",
        value: function createForm() {
          var _this5 = this;

          // get form controls nested array
          var leftFormControls = this.calculatorConfig.form.left_column.form_layout_row.map(function (row) {
            return row.form_layout_columns.map(function (column) {
              var formControls = [];

              for (var index = 0; index < column.form_controls.length; index++) {
                // get existing inputted values of form 
                if (_this5.glandSizeRectangleInternalVacuumForm) {
                  var fc = _this5.glandSizeRectangleInternalVacuumForm.get(column.form_controls[index].key);

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
                if (_this5.glandSizeRectangleInternalVacuumForm) {
                  var fc = _this5.glandSizeRectangleInternalVacuumForm.get(column.form_controls[index].key);

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
            if (fc && fc.type !== _this5.controlType.label && fc.type !== _this5.controlType.button) {
              return fc;
            }
          });
          this.glandSizeRectangleInternalVacuumForm = this.controlBaseService.toFormGroup(filteredControls); // get and set validations

          var validations = []; // get validation key from json config object

          var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;

          for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];

            switch (validationFuncKey) {
              case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_InternalVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                validations.push(this.rectangleGlandCalcValidationService.operatingTemperatureValidation());
                break;

              case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_InternalVacuumOnly_Validators"].O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
                validations.push(this.rectangleGlandCalcValidationService.oringCrossSectionNominalValidation());
                break;

              case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_InternalVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                validations.push(this.rectangleGlandCalcValidationService.oRingIDAS568AStandardsWarning());
                break;

              case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["GlandSizeCalc_InternalVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                validations.push(this.rectangleGlandCalcValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                break;
            }
          } // set custom validations with params


          this.glandSizeRectangleInternalVacuumForm.setValidators(validations);
          this.glandSizeRectangleInternalVacuumForm.updateValueAndValidity();
        } // reset auth token

      }, {
        key: "setAuth",
        value: function setAuth() {
          this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (r) {
            return r;
          });
        } // add client errors

      }, {
        key: "addClientErrors",
        value: function addClientErrors(error) {
          if (this.clientErrors.length > 0) {
            for (var index = 0; index < this.clientErrors.length; index++) {
              if (this.clientErrors[index].field && this.clientErrors[index].field !== error.field) {
                this.clientErrors.push(error);
              }
            }
          } else {
            this.clientErrors.push(error);
          }

          this.clientErrors = this.clientErrors.slice();
        } // add client warnings

      }, {
        key: "addClientWarnings",
        value: function addClientWarnings(warning) {
          if (this.clientWarnings.length > 0) {
            for (var index = 0; index < this.clientWarnings.length; index++) {
              if (this.clientWarnings[index] && this.clientWarnings[index].field !== warning.field) {
                this.clientWarnings.push(warning);
              }
            }
          } else {
            this.clientWarnings.push(warning);
          }

          this.clientWarnings = this.clientWarnings.slice();
        } // reset error, warnings of client and server

      }, {
        key: "resetErroAndWarnings",
        value: function resetErroAndWarnings() {
          this.clientErrors = [];
          this.clientWarnings = [];
          this.serverErrors = [];
          this.serverWarnings = [];
        } // reset calculated label or output value in JSON config

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
        } // copy event handler of toolbar

      }, {
        key: "onCopy",
        value: function onCopy() {
          var formAndOutputData; // save calculated data to local storage

          if (this.CalculatedData) {
            formAndOutputData = Object.assign(Object.assign({}, this.glandSizeRectangleInternalVacuumForm.value), this.CalculatedData);
          } else {
            formAndOutputData = Object.assign({}, this.glandSizeRectangleInternalVacuumForm.value);
          }

          formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly;
          localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL, JSON.stringify(formAndOutputData)); // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));

          this.toastService.showSucces("Calculator data copied !");
        } // component destroy

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.oRingDataSubscription) {
            this.oRingDataSubscription.unsubscribe();
          }

          if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
          }

          if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
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
              if (+currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                this.calculatedData[keys[index]] = this.helperService.convertToMillimeter(+this.calculatedData[keys[index]]);
              } else {
                this.calculatedData[keys[index]] = this.helperService.convertToInch(+this.calculatedData[keys[index]]);
              }
            }
          }
        }
      }]);

      return GlandSizeRectangleInternalVacuumOnlyComponent;
    }();

    GlandSizeRectangleInternalVacuumOnlyComponent.ɵfac = function GlandSizeRectangleInternalVacuumOnlyComponent_Factory(t) {
      return new (t || GlandSizeRectangleInternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_3__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_6__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_9__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_10__["GlandSizeRectangleInternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_12__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"]));
    };

    GlandSizeRectangleInternalVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlandSizeRectangleInternalVacuumOnlyComponent,
      selectors: [["app-gland-size-rectangle-internal-vacuum-only"]],
      decls: 41,
      vars: 6,
      consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gap-full-comp", "rect-gap"], [1, "rect-static-value"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]],
      template: function GlandSizeRectangleInternalVacuumOnlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GLAND ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GLAND WIDTH: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GLAND DEPTH: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "TOP RADII ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "BOTTOM RADII: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "GAP: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(may or may not exist) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".005");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "user-rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.glandSizeRectangleInternalVacuumForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandIdNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("bottomRadiiNominal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__["DynamicFormTwoColumnLayoutComponent"]],
      styles: [".graph-sec[_ngcontent-%COMP%] {\r\n    border: 1px solid #d2d2d2;\r\n    padding: 0 15px;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/graph.jpg) no-repeat;\r\n    width: 100%;\r\n    height: 200px;\r\n    background-size: contain;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #606060;\r\n    font-size: 1.1rem;\r\n    margin: 15px 0 10px;\r\n    border-bottom: 1px solid #d2d2d2;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    position: absolute;\r\n    color: #666;\r\n    color: #225a8a;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\r\n    top: 56px;\r\n    left: 20px;\r\n    font-size: 0.7rem;\r\n    background: #fff;\r\n    text-align: center;\r\n    height: 22px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\r\n    bottom: 27px;\r\n    right: 102px;\r\n    font-size: 0.7rem;\r\n    width: 80px;\r\n    text-align: center;\r\n    height: 22px;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\r\n    bottom: 94px;\r\n    left: 5px;\r\n    font-size: 0.7rem;\r\n    background: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\r\n    bottom: 90px;\r\n    left: 30px;\r\n    font-size: 0.7rem;\r\n    display: none;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\r\n    bottom: 29px;\r\n    right: 8px;\r\n    font-size: 0.7rem;\r\n    width: 80px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-gap[_ngcontent-%COMP%] {\r\n    top: 54px;\r\n    right: 38px;\r\n    font-size: 0.7rem;\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-static-value[_ngcontent-%COMP%] {\r\n    top: 120px;\r\n    right: 22px;\r\n    font-size: 0.7rem;\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    color: #329f59;\r\n    font-size: 1.2em;\r\n    font-family: 'open_sansbold', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1yZWN0YW5nbGUtaW50ZXJuYWwtdmFjdXVtLW9ubHkvZ2xhbmQtc2l6ZS1yZWN0YW5nbGUtaW50ZXJuYWwtdmFjdXVtLW9ubHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjOztBQUVkO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1QyIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL2dsYW5kLXNpemUtcmVjdGFuZ2xlLWludGVybmFsLXZhY3V1bS1vbmx5L2dsYW5kLXNpemUtcmVjdGFuZ2xlLWludGVybmFsLXZhY3V1bS1vbmx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBncmFwaCBjc3MgKi9cclxuXHJcbi5ncmFwaC1zZWMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZ3JhcGguanBnKSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5ncmFwaC1zZWMgaDMge1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1hcmdpbjogMTVweCAwIDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgY29sb3I6ICMyMjVhOGE7XHJcbn1cclxuXHJcbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdi5nbGQtaWQge1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgZGl2LmdsZC13aWR0aCB7XHJcbiAgICBib3R0b206IDI3cHg7XHJcbiAgICByaWdodDogMTAycHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYuZ2xkLWRlcHRoIHtcclxuICAgIGJvdHRvbTogOTRweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgZGl2LnRvcC1yYWRpaSB7XHJcbiAgICBib3R0b206IDkwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYuYm90dG9tLXJhZGlpIHtcclxuICAgIGJvdHRvbTogMjlweDtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyAucmVjdC1nYXAge1xyXG4gICAgdG9wOiA1NHB4O1xyXG4gICAgcmlnaHQ6IDM4cHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgLnJlY3Qtc3RhdGljLXZhbHVlIHtcclxuICAgIHRvcDogMTIwcHg7XHJcbiAgICByaWdodDogMjJweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYgc3Ryb25nIHtcclxuICAgIGNvbG9yOiAjMzI5ZjU5O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3Blbl9zYW5zYm9sZCcsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gland-size-rectangle-internal-vacuum-only',
          templateUrl: './gland-size-rectangle-internal-vacuum-only.component.html',
          styleUrls: ['./gland-size-rectangle-internal-vacuum-only.component.css']
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
          type: _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_10__["GlandSizeRectangleInternalVacuumOnlyService"]
        }, {
          type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__["HelperService"]
        }, {
          type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_12__["RectangleGlandCalcValidationService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]
        }, {
          type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module.ts":
  /*!************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module.ts ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeRectangleInternalVacuumOnlyModule */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeRectangleInternalVacuumOnlyGlandSizeRectangleInternalVacuumOnlyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyModule", function () {
      return GlandSizeRectangleInternalVacuumOnlyModule;
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


    var _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gland-size-rectangle-internal-vacuum-only-routing.module */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts");
    /* harmony import */


    var _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gland-size-rectangle-internal-vacuum-only.component */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts");
    /* harmony import */


    var _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gland-size-rectangle-internal-vacuum-only.service */
    "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts"); // core improts
    // application imports


    var GlandSizeRectangleInternalVacuumOnlyModule = function GlandSizeRectangleInternalVacuumOnlyModule() {
      _classCallCheck(this, GlandSizeRectangleInternalVacuumOnlyModule);
    };

    GlandSizeRectangleInternalVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GlandSizeRectangleInternalVacuumOnlyModule
    });
    GlandSizeRectangleInternalVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GlandSizeRectangleInternalVacuumOnlyModule_Factory(t) {
        return new (t || GlandSizeRectangleInternalVacuumOnlyModule)();
      },
      providers: [_gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangleInternalVacuumOnlyService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangleInternalVacuumOnlyModule, {
        declarations: [_gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangleInternalVacuumOnlyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangleInternalVacuumOnlyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]],
          providers: [_gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangleInternalVacuumOnlyService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: GlandSizeRectangleInternalVacuumOnlyService */

  /***/
  function clientAppOringAndGlandCalcRectangleGlandCalcGlandSizeRectangleInternalVacuumOnlyGlandSizeRectangleInternalVacuumOnlyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyService", function () {
      return GlandSizeRectangleInternalVacuumOnlyService;
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


    var GlandSizeRectangleInternalVacuumOnlyService = /*#__PURE__*/function () {
      function GlandSizeRectangleInternalVacuumOnlyService(_http) {
        _classCallCheck(this, GlandSizeRectangleInternalVacuumOnlyService);

        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
      }

      _createClass(GlandSizeRectangleInternalVacuumOnlyService, [{
        key: "createGland",
        value: function createGland(form, unit, unitTemp) {
          var body = new _models_GlandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
          body.unit = unit.id.toString();
          body.unitTemp = unitTemp.id.toString();
          body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax.toString();
          body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].GLAND_SIZING;
          return this._http.post("".concat(this.baseUrl, "glandsizecalc/createGland"), body);
        }
      }]);

      return GlandSizeRectangleInternalVacuumOnlyService;
    }();

    GlandSizeRectangleInternalVacuumOnlyService.ɵfac = function GlandSizeRectangleInternalVacuumOnlyService_Factory(t) {
      return new (t || GlandSizeRectangleInternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    GlandSizeRectangleInternalVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlandSizeRectangleInternalVacuumOnlyService,
      factory: GlandSizeRectangleInternalVacuumOnlyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyService, [{
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
//# sourceMappingURL=gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module-es5.js.map