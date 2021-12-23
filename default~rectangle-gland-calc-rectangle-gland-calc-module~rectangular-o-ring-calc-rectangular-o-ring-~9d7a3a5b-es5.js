function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~rectangle-gland-calc-rectangle-gland-calc-module~rectangular-o-ring-calc-rectangular-o-ring-~9d7a3a5b"], {
  /***/
  "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: DynamicFormTwoColumnLayoutComponent */

  /***/
  function clientAppDynamicFormDynamicFormTwoColumnLayoutDynamicFormTwoColumnLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFormTwoColumnLayoutComponent", function () {
      return DynamicFormTwoColumnLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_error_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/error.model */
    "./client/app/models/error.model.ts");
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _shared_components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/dash-size-details/dash-size-details.component */
    "./client/app/shared/components/dash-size-details/dash-size-details.component.ts");
    /* harmony import */


    var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/control-base.service */
    "./client/app/shared/services/control-base.service.ts");
    /* harmony import */


    var _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/material-choice.service */
    "./client/app/shared/services/material-choice.service.ts");
    /* harmony import */


    var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/unit-button/unit-button.service */
    "./client/app/shared/components/unit-button/unit-button.service.ts");
    /* harmony import */


    var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/temperature-button/temperature-button.service */
    "./client/app/shared/components/temperature-button/temperature-button.service.ts");
    /* harmony import */


    var _dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
    /* harmony import */


    var _shared_components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/dash-size-details/dash-size-details.service */
    "./client/app/shared/components/dash-size-details/dash-size-details.service.ts");
    /* harmony import */


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/services/helper.service */
    "./client/app/shared/services/helper.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/custom-controls/textbox/textbox.component */
    "./client/app/shared/components/custom-controls/textbox/textbox.component.ts");
    /* harmony import */


    var _shared_components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/components/custom-controls/numeric-textbox/numeric-textbox.component */
    "./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts");
    /* harmony import */


    var _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/components/custom-controls/drop-down/drop-down.component */
    "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts"); // core imports


    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_span_2_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var columnIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var rowIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", control_r14.sub_type === ctx_r22.controlSubType.temperatureLabel ? "" : control_r14.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.required && rowIndex_r9 !== 0 && columnIndex_r12 === 0);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", control_r14.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", control_r14.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_span_3_Template, 1, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_span_4_Template, 1, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.sub_type !== ctx_r16.controlSubType.calculated_label && control_r14.label === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.label !== "" && control_r14.sub_type !== ctx_r16.controlSubType.temperatureLabel && control_r14.sub_type !== ctx_r16.controlSubType.degreeLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.sub_type === ctx_r16.controlSubType.temperatureLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.sub_type === ctx_r16.controlSubType.degreeLabel);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_textbox_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-textbox", 24);
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r14)("form", ctx_r17.form)("isFormSubmitted", ctx_r17.isSubmitted);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_numeric_textbox_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-numeric-textbox", 25);
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r14)("form", ctx_r18.form)("isFormSubmitted", ctx_r18.isSubmitted)("isFormatInputOnBlur", control_r14.sub_type === ctx_r18.controlSubType.temperature || control_r14.sub_type === ctx_r18.controlSubType.degree ? false : true)("isNegetiveNumber", control_r14.sub_type === ctx_r18.controlSubType.temperature ? true : false)("maxLength", control_r14.sub_type === ctx_r18.controlSubType.degree ? 2 : 6)("clientErrors", ctx_r18.allClientErrors)("clientWarnings", ctx_r18.allClientWarnings)("serverErrors", ctx_r18.serverErrors)("serverWarnings", ctx_r18.serverWarnings);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_drop_down_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-drop-down", 26);
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r14)("form", ctx_r19.form)("isFormSubmitted", ctx_r19.isSubmitted)("options", ctx_r19.getDDLOptions(control_r14.key, control_r14.sub_type))("isAddChooseOption", ctx_r19.isAddChooseOption)("chooseOptionLabel", ctx_r19.dropdownChooseOptionLabel);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r37.buttonClick($event, control_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](control_r14.css_classes == null ? null : control_r14.css_classes.join(" "));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", control_r14.sub_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r14.label);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](control_r14.css_classes == null ? null : control_r14.css_classes.join(" "));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", control_r14.sub_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r14.label);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template, 2, 5, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_button_2_Template, 2, 5, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.sub_type === ctx_r20.controlSubType.button);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.sub_type !== ctx_r20.controlSubType.button);
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "sms-section__label": a0,
        "form-group": a1,
        "sms-section__range fw-600": a2,
        "red": a3
      };
    };

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_Template, 5, 4, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_textbox_2_Template, 1, 3, "custom-textbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_numeric_textbox_3_Template, 1, 10, "custom-numeric-textbox", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_custom_drop_down_4_Template, 1, 6, "custom-drop-down", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_ng_container_5_Template, 3, 2, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var columnIndex_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var rowIndex_r9 = ctx_r45.index;
        var row_r8 = ctx_r45.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", control_r14.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, control_r14.type === ctx_r15.controlType.label && columnIndex_r12 === 0, rowIndex_r9 !== 0 && columnIndex_r12 !== 0 && columnIndex_r12 !== row_r8.form_layout_columns.length - 1 && control_r14.type !== ctx_r15.controlType.button, columnIndex_r12 !== 0 && columnIndex_r12 !== row_r8.form_layout_columns.length - 1 && control_r14.type !== ctx_r15.controlType.button, ctx_r15.checkErrorOnCalculatedResult(control_r14)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r15.controlType.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r15.controlType.textbox);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r15.controlType.numerictextbox);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r15.controlType.dropdown);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r15.controlType.button);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_div_1_Template, 6, 12, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r14.show);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r11.form_controls);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "sms-section__heading": a0,
        "sms-section__inputs": a1
      };
    };

    function DynamicFormTwoColumnLayoutComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r8 = ctx.$implicit;
        var rowIndex_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row ", row_r8.css_classes.join(" "), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, rowIndex_r9 === 0, rowIndex_r9 !== 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r8.form_layout_columns);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_span_2_Template, 2, 0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var columnIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var rowIndex_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", control_r52.sub_type === ctx_r60.controlSubType.temperatureLabel ? "" : control_r52.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.required && rowIndex_r47 !== 0 && columnIndex_r50 === 0);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", control_r52.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", control_r52.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_span_3_Template, 1, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_span_4_Template, 1, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.sub_type !== ctx_r54.controlSubType.calculated_label && control_r52.label === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.label !== "" && control_r52.sub_type !== ctx_r54.controlSubType.temperatureLabel && control_r52.sub_type !== ctx_r54.controlSubType.degreeLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.sub_type === ctx_r54.controlSubType.temperatureLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.sub_type === ctx_r54.controlSubType.degreeLabel);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_textbox_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-textbox", 24);
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r52)("form", ctx_r55.form)("isFormSubmitted", ctx_r55.isSubmitted);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_numeric_textbox_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-numeric-textbox", 25);
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r52)("form", ctx_r56.form)("isFormSubmitted", ctx_r56.isSubmitted)("isFormatInputOnBlur", control_r52.sub_type === ctx_r56.controlSubType.temperature || control_r52.sub_type === ctx_r56.controlSubType.degree ? false : true)("isNegetiveNumber", control_r52.sub_type === ctx_r56.controlSubType.temperature ? true : false)("maxLength", control_r52.sub_type === ctx_r56.controlSubType.degree ? 2 : 6)("clientErrors", ctx_r56.allClientErrors)("clientWarnings", ctx_r56.allClientWarnings)("serverErrors", ctx_r56.serverErrors)("serverWarnings", ctx_r56.serverWarnings);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_drop_down_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-drop-down", 26);
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", control_r52)("form", ctx_r57.form)("isFormSubmitted", ctx_r57.isSubmitted)("options", ctx_r57.getDDLOptions(control_r52.key, control_r52.sub_type))("isAddChooseOption", ctx_r57.isAddChooseOption)("chooseOptionLabel", ctx_r57.dropdownChooseOptionLabel);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r75.buttonClick($event, control_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](control_r52.css_classes == null ? null : control_r52.css_classes.join(" "));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", control_r52.sub_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r52.label);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](control_r52.css_classes == null ? null : control_r52.css_classes.join(" "));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", control_r52.sub_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r52.label);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_button_1_Template, 2, 5, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_button_2_Template, 2, 5, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.sub_type === ctx_r58.controlSubType.button);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.sub_type !== ctx_r58.controlSubType.button);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_1_Template, 5, 4, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_textbox_2_Template, 1, 3, "custom-textbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_numeric_textbox_3_Template, 1, 10, "custom-numeric-textbox", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_custom_drop_down_4_Template, 1, 6, "custom-drop-down", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_ng_container_5_Template, 3, 2, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var columnIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var rowIndex_r47 = ctx_r83.index;
        var row_r46 = ctx_r83.$implicit;

        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", control_r52.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, control_r52.type === ctx_r53.controlType.label && columnIndex_r50 === 0 && control_r52.sub_type !== ctx_r53.controlSubType.temperatureLabel, rowIndex_r47 !== 0 && columnIndex_r50 !== 0 && columnIndex_r50 !== row_r46.form_layout_columns.length - 1 && control_r52.type !== ctx_r53.controlType.button, columnIndex_r50 !== 0 && columnIndex_r50 !== row_r46.form_layout_columns.length - 1 && control_r52.type !== ctx_r53.controlType.button, ctx_r53.checkErrorOnCalculatedResult(control_r52)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r53.controlType.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r53.controlType.textbox);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r53.controlType.numerictextbox);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r53.controlType.dropdown);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r53.controlType.button);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_div_1_Template, 6, 12, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r52.show);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r49 == null ? null : column_r49.css_classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r49.form_controls);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_10_ng_container_1_Template, 2, 4, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r46 = ctx.$implicit;
        var rowIndex_r47 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row ", row_r46.css_classes.join(" "), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, rowIndex_r47 === 0, rowIndex_r47 !== 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r46.form_layout_columns);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Please enter a valid value for the fields highlighted in red.", "\n");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r91 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r91, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gError_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gError_r85.errors);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "selected": a0
      };
    };

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var gErrorIndex_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r93.onShowGroupedClientError(gErrorIndex_r86);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_div_4_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gError_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, gError_r85.isDetailOpened));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gError_r85.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gError_r85.isDetailOpened);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r98 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r98, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gError_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gError_r85.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_1_Template, 5, 5, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_12_div_6_ng_container_2_Template, 2, 1, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gError_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gError_r85.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gError_r85.title);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click '");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "' for more details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormTwoColumnLayoutComponent_div_12_div_6_Template, 3, 2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.groupedAllClientErrors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var warning_r107 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warning_r107, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gWarning_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gWarning_r101.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var gWarningIndex_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r109.onShowGroupedClientWarning(gWarningIndex_r102);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_div_4_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gWarning_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, gWarning_r101.isDetailOpened));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gWarning_r101.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gWarning_r101.isDetailOpened);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var warning_r114 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warning_r114, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gWarning_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gWarning_r101.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_1_Template, 5, 5, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_13_div_6_ng_container_2_Template, 2, 1, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gWarning_r101 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gWarning_r101.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gWarning_r101.title);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click '");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "' for more details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormTwoColumnLayoutComponent_div_13_div_6_Template, 3, 2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.groupedAllClientWarning);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r123 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r123, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gServerError_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gServerError_r117.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var gServerErrorIndex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r125.onShowGroupedServerError(gServerErrorIndex_r118);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_div_4_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gServerError_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, gServerError_r117.isDetailOpened));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gServerError_r117.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gServerError_r117.isDetailOpened);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var error_r130 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r130, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gServerError_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gServerError_r117.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_1_Template, 5, 5, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_14_div_6_ng_container_2_Template, 2, 1, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gServerError_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gServerError_r117.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gServerError_r117.title);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Click '");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "' for more details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormTwoColumnLayoutComponent_div_14_div_6_Template, 3, 2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.groupedAllServerErrors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141);

          var gServerWarningIndex_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r139.onShowGroupedServerWarning(gServerWarningIndex_r134);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gServerWarning_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, gServerWarning_r133.isDetailOpened));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gServerWarning_r133.title);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var warning_r144 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warning_r144, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gServerWarning_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gServerWarning_r133.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_1_Template, 3, 4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_div_2_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gServerWarning_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gServerWarning_r133.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gServerWarning_r133.isDetailOpened);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var warning_r148 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warning_r148, " ");
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gServerWarning_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", gServerWarning_r133.errors);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_1_Template, 3, 2, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormTwoColumnLayoutComponent_div_15_div_6_ng_container_2_Template, 2, 1, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gServerWarning_r133 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gServerWarning_r133.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !gServerWarning_r133.title);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click '");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "' for more details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormTwoColumnLayoutComponent_div_15_div_6_Template, 3, 2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.groupedAllServerWarning);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r160.label);
      }
    }

    var _c3 = function _c3(a0, a1, a2) {
      return {
        "calculation-results__label": a0,
        "calculation-results__range fw-600": a1,
        "red": a2
      };
    };

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var control_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var columnIndex_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", control_r160.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c3, control_r160.type === ctx_r161.controlType.label && columnIndex_r158 === 0, columnIndex_r158 !== 0, ctx_r161.checkErrorOnCalculatedResult(control_r160)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r161.controlType.label);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_div_1_Template, 2, 7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var control_r160 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r160.show);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r157 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r157 == null ? null : column_r157.css_classes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r157.form_controls);
      }
    }

    var _c4 = function _c4(a0, a1) {
      return {
        "calculation-results__heading": a0,
        "calculation-results__outputs": a1
      };
    };

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_ng_container_1_Template, 2, 4, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r154 = ctx.$implicit;
        var rowIndex_r155 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row ", row_r154.css_classes.join(" "), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c4, rowIndex_r155 === 0, rowIndex_r155 !== 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r154.form_layout_columns);
      }
    }

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit RFQ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Engineering Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DynamicFormTwoColumnLayoutComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_8_Template, 2, 8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DynamicFormTwoColumnLayoutComponent_ng_container_18_div_9_Template, 5, 0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var output_r150 = ctx.$implicit;
        var outputIndex_r151 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.columnWidth(ctx_r7.calculatorJSON.form_output.length));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row ", output_r150 == null ? null : output_r150.css_classes.join(" "), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r150.display_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", output_r150.row);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", outputIndex_r151 === ctx_r7.calculatorJSON.form_output.length - 1);
      }
    }

    var DynamicFormTwoColumnLayoutComponent = /*#__PURE__*/function () {
      // constructor
      function DynamicFormTwoColumnLayoutComponent(controlBaseService, materialChoiceService, unitButtonService, temperatureButtonService, dynamicFormTwoColumnLayoutService, dashSizeDetailsService, helperService) {
        _classCallCheck(this, DynamicFormTwoColumnLayoutComponent);

        this.controlBaseService = controlBaseService;
        this.materialChoiceService = materialChoiceService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.dashSizeDetailsService = dashSizeDetailsService;
        this.helperService = helperService;
        this.isSubmitted = false;
        this.clientErrorsArr = []; // client warnings that doesnot prevent to submit forms/calculation
        // but need to show in client warnings div

        this.clientWarningsArr = []; // server errors

        this.serverErrorsArr = []; // server warnings

        this.serverWarningsArr = [];
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlType"];
        this.controlSubType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"];
        this.errorDetailOpened = false; // dropdown default choose option text/label

        this.dropdownChooseOptionLabel = undefined;
        this.isAddChooseOption = false;
        this.allClientErrors = [];
        this.groupedAllClientErrors = [];
        this.groupedAllClientWarning = [];
        this.groupedAllServerErrors = [];
        this.groupedAllServerWarning = [];
        this.allClientWarnings = []; // unit change update calculator values handler

        this.onUnitChangeUpdateCalculator(); // temperature change update calculator values handler

        this.onTemperatureChangeUpdateCalculator();
      } // client errors that doesnot prevent to submit forms/calculation
      // but need to show in client error div


      _createClass(DynamicFormTwoColumnLayoutComponent, [{
        key: "ngOnInit",
        // component init handler
        value: function ngOnInit() {
          var _this = this;

          // form value changes perform operations
          this.formValueChangesSubscription = this.form.valueChanges.subscribe(function (val) {
            _this.getClientErrorsValidations;
            _this.getClientWarnings;
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "checkErrorOnCalculatedResult",
        // calculated output result errror
        value: function checkErrorOnCalculatedResult(formControl) {
          var isError = false;

          if (formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
            return isError;
          }

          var serverErrorIndex = this.serverErrors.findIndex(function (se) {
            return se.field === formControl.key;
          });
          var serverWarningIndex = this.serverWarnings.findIndex(function (se) {
            return se.field === formControl.key;
          });

          if (serverErrorIndex > -1 || serverWarningIndex > -1) {
            isError = true;
          }

          return isError;
        } // helper methods
        // columnWidth 
        // param => columnLength => accepts number of columns in a row
        // returns the bootstrap col classes with equal width

      }, {
        key: "columnWidth",
        value: function columnWidth(columnLength, classes) {
          var classesStr = "";

          if (classes) {
            classesStr = classes.join(' ');
          }

          var colWidth = this.getSizeNumber(columnLength);
          return "col-12 \tcol-sm-12 \tcol-md-".concat(colWidth, " \tcol-lg-").concat(colWidth, " \tcol-xl-").concat(colWidth, " ").concat(classesStr);
        }
      }, {
        key: "getSizeNumber",
        // column column size
        value: function getSizeNumber(columnLength) {
          return this.controlBaseService.getColumnNumber(columnLength);
        } // show client error

      }, {
        key: "onShowClientError",
        value: function onShowClientError(index) {
          return this.allClientErrors[index].isDetailOpened = !this.allClientErrors[index].isDetailOpened;
        } // show grouped client error

      }, {
        key: "onShowGroupedClientError",
        value: function onShowGroupedClientError(index) {
          return this.groupedAllClientErrors[index].isDetailOpened = !this.groupedAllClientErrors[index].isDetailOpened;
        } // show grouped client warning

      }, {
        key: "onShowGroupedClientWarning",
        value: function onShowGroupedClientWarning(index) {
          return this.groupedAllClientWarning[index].isDetailOpened = !this.groupedAllClientWarning[index].isDetailOpened;
        } // show client warning

      }, {
        key: "onShowClientWarning",
        value: function onShowClientWarning(index) {
          return this.allClientWarnings[index].isDetailOpened = !this.allClientWarnings[index].isDetailOpened;
        } // show server error

      }, {
        key: "onShowServerError",
        value: function onShowServerError(index) {
          return this.serverErrors[index].isDetailOpened = !this.serverErrors[index].isDetailOpened;
        } // show grouped server Error

      }, {
        key: "onShowGroupedServerError",
        value: function onShowGroupedServerError(index) {
          return this.groupedAllServerErrors[index].isDetailOpened = !this.groupedAllServerErrors[index].isDetailOpened;
        } // show server warning

      }, {
        key: "onShowServerWarning",
        value: function onShowServerWarning(index) {
          return this.serverWarnings[index].isDetailOpened = !this.serverWarnings[index].isDetailOpened;
        } // show grouped server warning

      }, {
        key: "onShowGroupedServerWarning",
        value: function onShowGroupedServerWarning(index) {
          return this.groupedAllServerWarning[index].isDetailOpened = !this.groupedAllServerWarning[index].isDetailOpened;
        } // get dropdownlist options

      }, {
        key: "getDDLOptions",
        value: function getDDLOptions(formControlKey, ddlType) {
          var ddlOptions = [];

          switch (ddlType) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].material_choice_dropdown:
              this.dropdownChooseOptionLabel = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["DropdownChooseOptionTitle"].MaterialChoiceDropdown;
              this.isAddChooseOption = true;
              ddlOptions = _toConsumableArray(this.helperService.getMaterialChoiceList(formControlKey));
              break;

            default:
              break;
          }

          return ddlOptions;
        } // unit change update output values handler

      }, {
        key: "onUnitChangeUpdateCalculator",
        value: function onUnitChangeUpdateCalculator() {
          var _this2 = this;

          // unit switch button click/change subscription
          this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
              // update units of form input labels 
              _this2.dynamicFormTwoColumnLayoutService.updateUnitOfInputControlLabels(x); // convert form output labels


              _this2.dynamicFormTwoColumnLayoutService.convertOutputLabel(x);
            }
          });
        } // temperature change update output values handler

      }, {
        key: "onTemperatureChangeUpdateCalculator",
        value: function onTemperatureChangeUpdateCalculator() {
          var _this3 = this;

          // unit switch button click/change subscription
          this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
              _this3.dynamicFormTwoColumnLayoutService.updateTemperatureOfInputControlLabels(x);
            }
          });
        } // button click handler

      }, {
        key: "buttonClick",
        value: function buttonClick(e, formControl) {
          var _this4 = this;

          // form control type button value work as key for action method
          switch (formControl.value) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ButtonActionKeys"].DashSizeDetail:
              // get dash sizes from server
              this.dashSizeDetailsService.getDashSizeDetails().subscribe(function (oRingSizes) {
                if (oRingSizes) {
                  // send value to subject so subscribers can get the value
                  _this4.dashSizeDetailsService.sendORingSizes(oRingSizes); // open the modal of dashSizes


                  var dashSizeDetailsComponentModalRef = _this4.helperService.openNgbModal(_shared_components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_3__["DashSizeDetailsComponent"]); // row click event subscription


                  dashSizeDetailsComponentModalRef.componentInstance.dashSizeRowClick.subscribe(function (x) {
                    if (x) {
                      _this4.bindFormControlForORingDashSizes(x);
                    }

                    dashSizeDetailsComponentModalRef.close();
                  });
                }
              });
              break;

            default:
              break;
          }
        } // bind form controls based in the dash size selection

      }, {
        key: "bindFormControlForORingDashSizes",
        value: function bindFormControlForORingDashSizes(dashSizes) {
          this.form.patchValue({
            dashSize: dashSizes.dashSize,
            oringCrossSectionNominal: dashSizes.oringCrossSectionSize,
            oringIdNominal: dashSizes.oringDiameterSize,
            glandIdNominal: dashSizes.glandIdSize,
            glandIdTolerance: dashSizes.glandIdTolerance
          });
        } // on component destriy handler

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
          }

          if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
          }

          if (this.formValueChangesSubscription) {
            this.formValueChangesSubscription.unsubscribe();
          }
        }
      }, {
        key: "clientErrors",
        set: function set(val) {
          this.clientErrorsArr = val; // below property call will combined form error and errors of calculation/onSubmit function

          this.getClientErrorsValidations;
        },
        get: function get() {
          return this.clientErrorsArr;
        }
      }, {
        key: "clientWarnings",
        set: function set(val) {
          this.clientWarningsArr = val; // below property call will combined form error and errors of calculation/onSubmit function

          this.getClientWarnings;
        },
        get: function get() {
          return this.clientWarningsArr;
        }
      }, {
        key: "serverErrors",
        set: function set(val) {
          var _this5 = this;

          this.serverErrorsArr = val;
          this.helperService.groupClientErrors(this.serverErrorsArr).then(function (groupedErrors) {
            _this5.groupedAllServerErrors = groupedErrors;
          });
        },
        get: function get() {
          return this.serverErrorsArr;
        }
      }, {
        key: "serverWarnings",
        set: function set(val) {
          var _this6 = this;

          this.serverWarningsArr = val;
          this.helperService.groupClientErrors(this.serverWarningsArr).then(function (groupedWarnings) {
            _this6.groupedAllServerWarning = groupedWarnings;
          });
        },
        get: function get() {
          return this.serverWarningsArr;
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        } // get required validation

      }, {
        key: "isRequired",
        get: function get() {
          var _a;

          var isReq = false; // form control objects keys

          var formControlKeys = Object.keys(this.form.controls); // loop through the controls and 

          for (var index = 0; index < formControlKeys.length; index++) {
            if ((_a = this.form.controls[formControlKeys[index]].errors) === null || _a === void 0 ? void 0 : _a.required) {
              isReq = this.form.controls[formControlKeys[index]].errors.required; // true

              break;
            }
          }

          return isReq;
        }
        /* property to get all client side form control errors and client error that need to show in
        client error div but allow calculator calculation */

      }, {
        key: "getClientErrorsValidations",
        get: function get() {
          var _this7 = this;

          var _a;

          this.allClientErrors = [];
          var controlErrorsArr = []; // form control objects keys

          var formControlKeys = Object.keys(this.form.controls); // loop through the controls and 

          for (var index = 0; index < formControlKeys.length; index++) {
            // skip required error
            if ((_a = this.form.controls[formControlKeys[index]].errors) === null || _a === void 0 ? void 0 : _a.required) {
              continue;
            }

            var controlErrors = this.form.controls[formControlKeys[index]].errors ? this.form.controls[formControlKeys[index]].errors : null;

            if (controlErrors instanceof _models_error_model__WEBPACK_IMPORTED_MODULE_1__["ErrorModel"]) {
              // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 
              if (controlErrors && controlErrors.type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Error) {
                controlErrorsArr.push(controlErrors);
              }
            } else if (controlErrors) {
              var errorKeys = Object.keys(controlErrors);

              for (var _index = 0; _index < errorKeys.length; _index++) {
                var error = controlErrors[errorKeys[_index]]; // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 

                if (error && error.type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Error) {
                  controlErrorsArr.push(error);
                }
              }
            } // const controlErrors: ErrorModel = this.form.controls[formControlKeys[index]].errors ? (this.form.controls[formControlKeys[index]].errors as ErrorModel) : null;
            // // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 
            // if (controlErrors && controlErrors.type === ErrorTypes.Error) {
            //   controlErrorsArr.push(controlErrors as ErrorModel);
            // }

          }

          this.allClientErrors = Array.from(new Set(this.clientErrors.concat(controlErrorsArr))); // group the error with field, title

          this.helperService.groupClientErrors(this.allClientErrors).then(function (groupedErrors) {
            _this7.groupedAllClientErrors = groupedErrors;
          });
          this.allClientErrors = this.allClientErrors.slice();
          return this.allClientErrors;
        } // property to get client side form warnings 
        // some warning preventing form submission means do not allow user to perform form submission
        // some warnings are just informative and allow to submit form

      }, {
        key: "getClientWarnings",
        get: function get() {
          var _this8 = this;

          var _a;

          this.allClientWarnings = [];
          var controlErrorsAsWarningArr = []; // form control objects keys

          var formControlKeys = Object.keys(this.form.controls); // loop through the controls and 

          for (var index = 0; index < formControlKeys.length; index++) {
            // skip required error
            if ((_a = this.form.controls[formControlKeys[index]].errors) === null || _a === void 0 ? void 0 : _a.required) {
              continue;
            } // get warnings that setted to form control and warnings that doesnot allow user to submit the form 
            // need to show in client warnings div nstead of client errors div
            // const controlErrorAsWarnings: ErrorModel = this.form.controls[formControlKeys[index]].errors ? (this.form.controls[formControlKeys[index]].errors as ErrorModel) : null;
            // if (controlErrorAsWarnings && controlErrorAsWarnings.type === ErrorTypes.Warning) {
            //   controlErrorsAsWarningArr.push(controlErrorAsWarnings as ErrorModel);
            // }
            // get warnings that setted to form control and warnings that doesnot allow user to submit the form 


            var controlErrorAsWarnings = this.form.controls[formControlKeys[index]].errors ? this.form.controls[formControlKeys[index]].errors : null;

            if (controlErrorAsWarnings instanceof _models_error_model__WEBPACK_IMPORTED_MODULE_1__["ErrorModel"]) {
              if (controlErrorAsWarnings && controlErrorAsWarnings.type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning) {
                controlErrorsAsWarningArr.push(controlErrorAsWarnings);
              }
            } else if (controlErrorAsWarnings) {
              var errorKeys = Object.keys(controlErrorAsWarnings);

              for (var _index2 = 0; _index2 < errorKeys.length; _index2++) {
                var warning = controlErrorAsWarnings[errorKeys[_index2]]; // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 

                if (warning && warning.type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning) {
                  controlErrorsAsWarningArr.push(warning);
                }
              }
            }
          }

          this.allClientWarnings = Array.from(new Set(this.clientWarnings.concat(controlErrorsAsWarningArr))); // group the warnings with field, title

          this.helperService.groupClientErrors(this.allClientWarnings).then(function (groupedErrors) {
            _this8.groupedAllClientWarning = groupedErrors;
          });
          this.allClientWarnings = this.allClientWarnings.slice();
          return this.allClientWarnings;
        }
      }]);

      return DynamicFormTwoColumnLayoutComponent;
    }();

    DynamicFormTwoColumnLayoutComponent.ɵfac = function DynamicFormTwoColumnLayoutComponent_Factory(t) {
      return new (t || DynamicFormTwoColumnLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__["MaterialChoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_6__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_9__["DashSizeDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"]));
    };

    DynamicFormTwoColumnLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicFormTwoColumnLayoutComponent,
      selectors: [["dynamic-form-two-column-layout"]],
      inputs: {
        calculatorJSON: "calculatorJSON",
        form: "form",
        isSubmitted: "isSubmitted",
        clientErrors: "clientErrors",
        clientWarnings: "clientWarnings",
        serverErrors: "serverErrors",
        serverWarnings: "serverWarnings"
      },
      decls: 19,
      vars: 10,
      consts: [[1, "sms-section", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-12", "p-0"], [1, "cal-heading"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6", "no-padding"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6"], ["class", "error-message", 4, "ngIf"], ["class", "warning-message", 4, "ngIf"], [1, "row", "calculation-results"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngSwitch", "ngClass", 4, "ngIf"], [3, "ngSwitch", "ngClass"], [4, "ngSwitchCase"], [3, "control", "form", "isFormSubmitted", 4, "ngSwitchCase"], [3, "control", "form", "isFormSubmitted", "isFormatInputOnBlur", "isNegetiveNumber", "maxLength", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings", 4, "ngSwitchCase"], [3, "control", "form", "isFormSubmitted", "options", "isAddChooseOption", "chooseOptionLabel", 4, "ngSwitchCase"], [4, "ngIf"], ["class", "float-left", 3, "innerHTML", 4, "ngIf"], ["class", "required", 4, "ngIf"], [1, "required"], [1, "float-left", 3, "innerHTML"], [3, "control", "form", "isFormSubmitted"], [3, "control", "form", "isFormSubmitted", "isFormatInputOnBlur", "isNegetiveNumber", "maxLength", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"], [3, "control", "form", "isFormSubmitted", "options", "isAddChooseOption", "chooseOptionLabel"], [3, "type", "class", "click", 4, "ngIf"], [3, "type", "class", 4, "ngIf"], [3, "type", "click"], [3, "type"], [3, "class", 4, "ngFor", "ngForOf"], [1, "error-message"], [1, "error-message__note"], ["class", "error-body", 4, "ngFor", "ngForOf"], [1, "error-body"], [3, "ngClass", "click"], ["title", "Click for more details"], [1, ""], [1, "warning-message"], ["class", "warning-message__body", 4, "ngFor", "ngForOf"], [1, "warning-message__body"], [3, "ngClass", "click", 4, "ngIf"], [1, "col-md-12", "column"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-0"], ["class", "text-right mailto-button", 4, "ngIf"], [1, "text-right", "mailto-button"], ["href", "mailto:mhitchens@gtweed.com?subject=Submit RFQ"], ["href", "mailto:athrash@gtweed.com?subject=Request Engineering Support"]],
      template: function DynamicFormTwoColumnLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormTwoColumnLayoutComponent_div_8_Template, 2, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormTwoColumnLayoutComponent_div_10_Template, 2, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormTwoColumnLayoutComponent_div_11_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormTwoColumnLayoutComponent_div_12_Template, 7, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormTwoColumnLayoutComponent_div_13_Template, 7, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormTwoColumnLayoutComponent_div_14_Template, 7, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicFormTwoColumnLayoutComponent_div_15_Template, 7, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicFormTwoColumnLayoutComponent_ng_container_18_Template, 10, 9, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.calculatorJSON.display_calculator_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculatorJSON.form.left_column.form_layout_row);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculatorJSON.form.right_column.form_layout_row);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.groupedAllClientErrors.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.groupedAllClientWarning.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.groupedAllServerErrors && ctx.groupedAllServerErrors.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.groupedAllServerWarning && ctx.groupedAllServerWarning.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculatorJSON.form_output);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _shared_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_13__["TextboxComponent"], _shared_components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_14__["NumericTextboxComponent"], _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_15__["DropDownComponent"]],
      styles: [".cal-heading[_ngcontent-%COMP%] {\r\n    background: #225a8a;\r\n    color: #fff;\r\n    margin: 0;\r\n    font-size: 1.3rem;\r\n    padding: 10px 16px 10px 20px;\r\n}\r\n\r\n.form-horizontal[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-right: 12px;\r\n    margin-left: 0px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sms-section__range[_ngcontent-%COMP%] {\r\n    width: 72px;\r\n    text-align: center;\r\n    float: left;\r\n    margin-right: 12px;\r\n}\r\n\r\n.fw-600[_ngcontent-%COMP%] {\r\n    \r\n    font-family: 'open_sanssemibold';\r\n}\r\n\r\n.sms-section__inputs[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #d2d2d2;\r\n    margin-top: 2%;\r\n    padding-bottom: 2%;\r\n    min-height: 67px;\r\n    position: relative;\r\n}\r\n\r\n.sms-section__inputs[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.sms-section__label[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    \r\n    text-align: right;\r\n    color: #777;\r\n}\r\n\r\n.sms-section__inputs[_ngcontent-%COMP%]   .sms-section__label[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 18px;\r\n    font-size: 1rem;\r\n    \r\n    line-height: 1.2rem;\r\n    position: relative;\r\n}\r\n\r\n.sms-section__label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\r\n    color: #ff0000;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\n.sms-section__heading[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #d2d2d2;\r\n}\r\n\r\n.sms-section__heading[_ngcontent-%COMP%]   .sms-section__label[_ngcontent-%COMP%], .sms-section__heading[_ngcontent-%COMP%]   .sms-section__range[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sms-section__heading[_ngcontent-%COMP%]   .sms-section__label[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 18px;\r\n}\r\n\r\n.sms-section__heading[_ngcontent-%COMP%]   .sms-section__label[_ngcontent-%COMP%], .sms-section__heading[_ngcontent-%COMP%]   .sms-section__range[_ngcontent-%COMP%] {\r\n    padding: 15px 0;\r\n    white-space: nowrap;\r\n}\r\n\r\n.form-horizontal[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-right: 12px;\r\n    margin-left: 0px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sms-celcius[_ngcontent-%COMP%], .sms-fahrenheit[_ngcontent-%COMP%] {\r\n    width: 15px;\r\n    height: 15px;\r\n    background-size: contain!important;\r\n    position: absolute;\r\n    top: 6px;\r\n}\r\n\r\n.sms-celcius[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_celcius.png) no-repeat;\r\n    right: -24px;\r\n}\r\n\r\n.custom-button[_ngcontent-%COMP%] {\r\n    background: #225a8a;\r\n    border: #225a8a;\r\n}\r\n\r\n.calculate[_ngcontent-%COMP%] {\r\n    background: #329f59;\r\n    border: none;\r\n}\r\n\r\n.calculate[_ngcontent-%COMP%], .custom-button[_ngcontent-%COMP%], .reset[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #fff;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    padding: 3px 15px;\r\n    \r\n    margin-right: 11px;\r\n}\r\n\r\n.calculation-results[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.calculation-results[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\r\n    \r\n    background: #f9f9f9;\r\n}\r\n\r\n.calculation-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #8b8b8b;\r\n    font-size: 1rem;\r\n    padding: 10px 16px 10px 20px;\r\n    margin: 0;\r\n}\r\n\r\n.calculation-results__heading[_ngcontent-%COMP%], .graph-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #d2d2d2;\r\n}\r\n\r\n.calculation-results__range[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    width: 62px;\r\n    float: left;\r\n    margin-right: 12px;\r\n    padding: 10px 0;\r\n}\r\n\r\n.calculation-results__outputs[_ngcontent-%COMP%]   .calculation-results__range[_ngcontent-%COMP%] {\r\n    padding: 0 0 10px;\r\n    text-align: right;\r\n    width: 62px;\r\n}\r\n\r\n.calculation-results__outputs[_ngcontent-%COMP%] {\r\n    \r\n    border-bottom: 1px solid #d2d2d2;\r\n    margin-top: 10px;\r\n    padding-bottom: 10px;\r\n    min-height: 44px;\r\n}\r\n\r\n.calculation-results__outputs[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.calculation-results__label[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 18px;\r\n    width: 120px;\r\n    text-align: right;\r\n    color: #777;\r\n    font-size: 1rem;\r\n    line-height: 1.2rem;\r\n}\r\n\r\n.calculation-results__outputs[_ngcontent-%COMP%]   .calculation-results__label[_ngcontent-%COMP%] {\r\n    padding-top: 2px;\r\n}\r\n\r\n\r\n\r\n.mailto-button[_ngcontent-%COMP%] {\r\n    padding-top: 23px;\r\n}\r\n\r\n.mailto-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    background: url(/assets/img/bg_email-gray.png) no-repeat 0 2px;\r\n    margin-right: 15px;\r\n    padding-left: 28px;\r\n    padding-bottom: 10px;\r\n    color: #225a8a;\r\n    font-size: 14px;\r\n    font-family: 'open_sanssemibold';\r\n    background-size: 20px;\r\n}\r\n\r\n\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_error.png) 15px 15px no-repeat #fceded;\r\n    border: 1px solid #fc5353;\r\n    color: #8c2e0b;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    padding-left: 53px;\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n    position: relative;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-right: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after, .warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"+\";\r\n    font-size: 21px;\r\n    right: 0;\r\n    top: -4px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 9px;\r\n    width: 9px;\r\n    height: 3px;\r\n    background: #8c2e0b;\r\n    content: \"\";\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%]   .error-message__note[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 18px;\r\n    top: 6px;\r\n    color: #8c2e0b;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .error-message__sec[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before, .error-message__sec[_ngcontent-%COMP%]:before {\r\n    content: \".\";\r\n    font-size: 29px;\r\n    line-height: 20px;\r\n    left: -9px;\r\n    position: absolute;\r\n    top: -8px;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before {\r\n    top: -6px;\r\n}\r\n\r\n.error-body[_ngcontent-%COMP%]:before, .error-message[_ngcontent-%COMP%]   .error-message__note[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n}\r\n\r\n\r\n\r\n.warning-message[_ngcontent-%COMP%] {\r\n    background: url(/assets/img/icon_warning.png) 15px 15px no-repeat #fcf8e3;\r\n    border: 1px solid #faebcc;\r\n    color: #8c2e0b;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    padding-left: 53px;\r\n    margin-bottom: 20px;\r\n    margin-top: 15px;\r\n    position: relative;\r\n    background-size: 25px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    width: 16px;\r\n    height: 16px;\r\n    background: url(/assets/img/icon_warning_close.png) no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-right: 18px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%]:before {\r\n    content: \".\";\r\n    font-size: 29px;\r\n    line-height: 20px;\r\n    left: -9px;\r\n    position: absolute;\r\n    top: -8px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-right: 18px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"+\";\r\n    font-size: 21px;\r\n    right: 0;\r\n    top: -4px;\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body[_ngcontent-%COMP%] > div.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 9px;\r\n    width: 9px;\r\n    height: 3px;\r\n    background: #8c2e0b;\r\n    content: \"\";\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .warning-message__body.selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    right: 2px;\r\n    top: 9px;\r\n    width: 9px;\r\n    height: 3px;\r\n    background: #8c2e0b;\r\n    content: \"\";\r\n}\r\n\r\n.warning-message[_ngcontent-%COMP%]   .error-message__note[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 18px;\r\n    top: 6px;\r\n    color: #8c2e0b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS10d28tY29sdW1uLWxheW91dC9keW5hbWljLWZvcm0tdHdvLWNvbHVtbi1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO2tCQUNjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOERBQThEO0lBQzlELGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksdUVBQXVFO0lBQ3ZFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0kseUVBQXlFO0lBQ3pFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiw2REFBNkQ7SUFDN0QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsY0FBYztBQUNsQiIsImZpbGUiOiJjbGllbnQvYXBwL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0tdHdvLWNvbHVtbi1sYXlvdXQvZHluYW1pYy1mb3JtLXR3by1jb2x1bW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9ybS1ob3Jpem9udGFsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XHJcbn0gKi9cclxuXHJcbi5jYWwtaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjI1YThhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9fcmFuZ2Uge1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLmZ3LTYwMCB7XHJcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNzZW1pYm9sZCc7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9faW5wdXRzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBtaW4taGVpZ2h0OiA2N3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc21zLXNlY3Rpb25fX2lucHV0czpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9fbGFiZWwge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgLyogd2lkdGg6IDEzJTsgKi9cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9faW5wdXRzIC5zbXMtc2VjdGlvbl9fbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAvKiBmb250LXNpemU6IGluaGVyaXQ7ICovXHJcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc21zLXNlY3Rpb25fX2xhYmVsIC5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4uc21zLXNlY3Rpb25fX2hlYWRpbmcge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XHJcbn1cclxuXHJcbi5zbXMtc2VjdGlvbl9faGVhZGluZyAuc21zLXNlY3Rpb25fX2xhYmVsLCAuc21zLXNlY3Rpb25fX2hlYWRpbmcgLnNtcy1zZWN0aW9uX19yYW5nZSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uc21zLXNlY3Rpb25fX2hlYWRpbmcgLnNtcy1zZWN0aW9uX19sYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLnNtcy1zZWN0aW9uX19oZWFkaW5nIC5zbXMtc2VjdGlvbl9fbGFiZWwsIC5zbXMtc2VjdGlvbl9faGVhZGluZyAuc21zLXNlY3Rpb25fX3JhbmdlIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zbXMtY2VsY2l1cywgLnNtcy1mYWhyZW5oZWl0IHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG59XHJcblxyXG4uc21zLWNlbGNpdXMge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fY2VsY2l1cy5wbmcpIG5vLXJlcGVhdDtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzIyNWE4YTtcclxuICAgIGJvcmRlcjogIzIyNWE4YTtcclxufVxyXG5cclxuLmNhbGN1bGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI5ZjU5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FsY3VsYXRlLCAuY3VzdG9tLWJ1dHRvbiwgLnJlc2V0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0cyAuY29sdW1uIHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0cyBoMyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM4YjhiOGI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHggMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0c19faGVhZGluZywgLmdyYXBoLXNlYyBoMyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX3JhbmdlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX291dHB1dHMgLmNhbGN1bGF0aW9uLXJlc3VsdHNfX3JhbmdlIHtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjJweDtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX291dHB1dHMge1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDRweDtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX291dHB1dHM6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2FsY3VsYXRpb24tcmVzdWx0c19fbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX291dHB1dHMgLmNhbGN1bGF0aW9uLXJlc3VsdHNfX2xhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi8qIG1haWwgdG8gZGl2IGNzcyAqL1xyXG5cclxuLm1haWx0by1idXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIzcHg7XHJcbn1cclxuXHJcbi5tYWlsdG8tYnV0dG9uIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2JnX2VtYWlsLWdyYXkucG5nKSBuby1yZXBlYXQgMCAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjMjI1YThhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNzZW1pYm9sZCc7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEVycm9yIG1lc3NhZ2UgKi9cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9pY29uX2Vycm9yLnBuZykgMTVweCAxNXB4IG5vLXJlcGVhdCAjZmNlZGVkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjNTM1MztcclxuICAgIGNvbG9yOiAjOGMyZTBiO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSBkaXYgYiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSBkaXYgYjphZnRlciwgLndhcm5pbmctbWVzc2FnZSAud2FybmluZy1tZXNzYWdlX19ib2R5IGI6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCIrXCI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTRweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2UgZGl2LnNlbGVjdGVkIGI6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzhjMmUwYjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIC5lcnJvci1tZXNzYWdlX19ub3RlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzhjMmUwYjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2UgZGl2LCAuZXJyb3ItbWVzc2FnZV9fc2VjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2U+ZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2U+ZGl2OmJlZm9yZSwgLmVycm9yLW1lc3NhZ2VfX3NlYzpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIuXCI7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IC05cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04cHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlPmRpdjpiZWZvcmUge1xyXG4gICAgdG9wOiAtNnB4O1xyXG59XHJcblxyXG4uZXJyb3ItYm9keTpiZWZvcmUsIC5lcnJvci1tZXNzYWdlIC5lcnJvci1tZXNzYWdlX19ub3RlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4vKiBXYXJuaW5nIG1lc3NhZ2UgKi9cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fd2FybmluZy5wbmcpIDE1cHggMTVweCBuby1yZXBlYXQgI2ZjZjhlMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYWViY2M7XHJcbiAgICBjb2xvcjogIzhjMmUwYjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLndhcm5pbmctbWVzc2FnZT5kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ud2FybmluZy1tZXNzYWdlIC53YXJuaW5nLW1lc3NhZ2VfX2Nsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2ljb25fd2FybmluZ19jbG9zZS5wbmcpIG5vLXJlcGVhdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndhcm5pbmctbWVzc2FnZSAud2FybmluZy1tZXNzYWdlX19ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2UgLndhcm5pbmctbWVzc2FnZV9fYm9keTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIuXCI7XHJcbiAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IC05cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04cHg7XHJcbn1cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2UgLndhcm5pbmctbWVzc2FnZV9fYm9keSBiIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2UgLndhcm5pbmctbWVzc2FnZV9fYm9keSBiOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiK1wiO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC00cHg7XHJcbn1cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2UgLndhcm5pbmctbWVzc2FnZV9fYm9keT5kaXYuc2VsZWN0ZWQgYjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGMyZTBiO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLndhcm5pbmctbWVzc2FnZSAud2FybmluZy1tZXNzYWdlX19ib2R5LnNlbGVjdGVkIGI6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzhjMmUwYjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi53YXJuaW5nLW1lc3NhZ2UgLmVycm9yLW1lc3NhZ2VfX25vdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE4cHg7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGNvbG9yOiAjOGMyZTBiO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormTwoColumnLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dynamic-form-two-column-layout',
          templateUrl: './dynamic-form-two-column-layout.component.html',
          styleUrls: ['./dynamic-form-two-column-layout.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]
        }, {
          type: _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_5__["MaterialChoiceService"]
        }, {
          type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_6__["UnitButtonService"]
        }, {
          type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"]
        }, {
          type: _dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__["DynamicFormTwoColumnLayoutService"]
        }, {
          type: _shared_components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_9__["DashSizeDetailsService"]
        }, {
          type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"]
        }];
      }, {
        calculatorJSON: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSubmitted: [{
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
        }]
      });
    })();
    /***/

  },

  /***/
  "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts":
  /*!**********************************************************************************************************!*\
    !*** ./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: DynamicFormTwoColumnLayoutService */

  /***/
  function clientAppDynamicFormDynamicFormTwoColumnLayoutDynamicFormTwoColumnLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFormTwoColumnLayoutService", function () {
      return DynamicFormTwoColumnLayoutService;
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


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");
    /* harmony import */


    var _models_form_control_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/form-control.model */
    "./client/app/models/form-control.model.ts");
    /* harmony import */


    var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/helper.service */
    "./client/app/shared/services/helper.service.ts"); // core imports
    // thirs party imports


    var DynamicFormTwoColumnLayoutService = /*#__PURE__*/function () {
      function DynamicFormTwoColumnLayoutService(helperService) {
        _classCallCheck(this, DynamicFormTwoColumnLayoutService);

        this.helperService = helperService;
        this.calculatorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.calculator$ = this.calculatorSubject.asObservable();
      }

      _createClass(DynamicFormTwoColumnLayoutService, [{
        key: "sendCalculator",
        value: function sendCalculator(val) {
          this.calculator = Object.assign({}, val);
        } // show or hide controls based on options => Nominal, Tolerance and MinAndMax

      }, {
        key: "showOrHideControlsBasedOnOption",
        value: function showOrHideControlsBasedOnOption(selectedOption) {
          // copy calculator data
          var updateCalculator = Object.assign({}, this.calculator); // update selected option value

          updateCalculator.toolbarOption.value = selectedOption.toString(); // copy calculator form data

          var calculatorForm = Object.assign({}, this.calculator.form); // set show flag of left column

          var calculatorLeftColumnRows = this.setShowFlag(calculatorForm.left_column.form_layout_row, selectedOption); // set show flag of right column

          var calculatorRightColumnRows = this.setShowFlag(calculatorForm.right_column.form_layout_row, selectedOption); // update updatedCalculatorForm object

          var updatedCalculatorForm = Object.assign(Object.assign({}, calculatorForm), {
            left_column: {
              form_layout_row: calculatorLeftColumnRows
            },
            right_column: {
              form_layout_row: calculatorRightColumnRows
            }
          }); // form output 

          var formOutput = updateCalculator.form_output;

          if (formOutput.length > 0) {
            for (var index = 0; index < formOutput.length; index++) {
              // copy form output object
              var formOutputObj = Object.assign({}, formOutput[index]); // set show flag

              var formOutputObjRow = this.setShowFlag(formOutputObj.row, selectedOption); // merge row of form output

              formOutputObj = Object.assign(Object.assign({}, formOutputObj), {
                row: formOutputObjRow
              }); // update form output with updated show flag

              formOutput[index] = formOutputObj;
            }
          } // updated copied calculator object


          updateCalculator = Object.assign(Object.assign({}, updateCalculator), {
            form: updatedCalculatorForm,
            form_output: formOutput
          });
          this.calculator = Object.assign(Object.assign({}, this.calculator), updateCalculator);
        } // update input controls units

      }, {
        key: "updateUnitOfInputControlLabels",
        value: function updateUnitOfInputControlLabels(selectedUnit) {
          // Immutable way of updating the object
          var updateCalculator = Object.assign({}, this.calculator); // cpy calculator form data

          var calculatorForm = Object.assign({}, this.calculator.form); // set show flag of left column

          var calculatorLeftColumnRows = this.setUnit(calculatorForm.left_column.form_layout_row, selectedUnit); // set show flag of right column

          var calculatorRightColumnRows = this.setUnit(calculatorForm.right_column.form_layout_row, selectedUnit); // calculator form object

          var updatedCalculatorForm = Object.assign(Object.assign({}, calculatorForm), {
            left_column: {
              form_layout_row: calculatorLeftColumnRows
            },
            right_column: {
              form_layout_row: calculatorRightColumnRows
            }
          });
          updateCalculator = Object.assign(Object.assign({}, updateCalculator), {
            form: updatedCalculatorForm
          });
          this.calculator = Object.assign({}, updateCalculator);
        } // update temperature of label of temperature controls

      }, {
        key: "updateTemperatureOfInputControlLabels",
        value: function updateTemperatureOfInputControlLabels(selectedTemperature) {
          var updateCalculator = Object.assign({}, this.calculator); // copy calculator form data

          var calculatorForm = Object.assign({}, this.calculator.form); // set show flag of left column

          var calculatorLeftColumnRows = this.setTemperature(calculatorForm.left_column.form_layout_row, selectedTemperature); // set show flag of right column

          var calculatorRightColumnRows = this.setTemperature(calculatorForm.right_column.form_layout_row, selectedTemperature); // calculator form object

          var updatedCalculatorForm = Object.assign(Object.assign({}, calculatorForm), {
            left_column: {
              form_layout_row: calculatorLeftColumnRows
            },
            right_column: {
              form_layout_row: calculatorRightColumnRows
            }
          });
          updateCalculator = Object.assign(Object.assign({}, updateCalculator), {
            form: updatedCalculatorForm
          });
          this.calculator = Object.assign(Object.assign({}, this.calculator), updateCalculator);
        } // form output label value from Inch to Millimeter and vice versa 

      }, {
        key: "convertOutputLabel",
        value: function convertOutputLabel(selectedUnit) {
          // copy calculator data
          var updateCalculator = Object.assign({}, this.calculator); // Convert left form data
          // loop through each form left column row

          for (var rowIndex = 0; rowIndex < updateCalculator.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (var controlIndex = 0; controlIndex < updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                var formControl = updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex]; // get fields key from resp data

                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && formControl.label) {
                  // set JSON output label
                  // bind calculated result to output label
                  updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = selectedUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? this.helperService.convertToMillimeter(+formControl.label) : this.helperService.convertToInch(+formControl.label);
                }
              }
            }
          } // Comvert right form data
          // loop through each form right column row


          for (var _rowIndex = 0; _rowIndex < updateCalculator.form.right_column.form_layout_row.length; _rowIndex++) {
            // loop through columns
            for (var _columnIndex = 0; _columnIndex < updateCalculator.form.right_column.form_layout_row[_rowIndex].form_layout_columns.length; _columnIndex++) {
              // loop through controls
              for (var _controlIndex = 0; _controlIndex < updateCalculator.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls.length; _controlIndex++) {
                // get form control of JSON
                var _formControl = updateCalculator.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls[_controlIndex]; // get fields key from resp data
                // const responseDataKeys = Object.keys(resp.data);

                if (_formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label && _formControl.label) {
                  // set JSON output label
                  // bind calculated result to output label
                  updateCalculator.form.right_column.form_layout_row[_rowIndex].form_layout_columns[_columnIndex].form_controls[_controlIndex].label = selectedUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? this.helperService.convertToMillimeter(+_formControl.label) : this.helperService.convertToInch(+_formControl.label);
                }
              }
            }
          }

          this.calculator = Object.assign(Object.assign({}, this.calculator), updateCalculator);
        } // get default value of control

      }, {
        key: "getDefaultControlValueFromCalculatorJSONConfig",
        value: function getDefaultControlValueFromCalculatorJSONConfig(formControlKey) {
          // cpy calculator form data
          var calculatorForm = Object.assign({}, this.calculator.form); // left column

          var fc = this.getFormControl(calculatorForm.left_column.form_layout_row, formControlKey);

          if (fc && fc.key) {
            return fc.value;
          } else {
            // right column
            fc = this.getFormControl(calculatorForm.right_column.form_layout_row, formControlKey);

            if (fc && fc.key) {
              return fc.value;
            } else {
              return "";
            }
          }
        } // set show flag of calculator config

      }, {
        key: "setShowFlag",
        value: function setShowFlag(rows, selectedOption) {
          var _a; // iterate over left column rows


          for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              // iterate over left column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                if (rows[row].form_layout_columns[column].form_controls[control].hasOwnProperty('show')) {
                  // controlGroup is an array which holds the options(Nominal = 1, Tolerance = 2 and MinandMax = 3) values on which we need to show the controls
                  var controlGroup = (_a = rows[row].form_layout_columns[column].form_controls[control]) === null || _a === void 0 ? void 0 : _a.show_control_option;

                  if (controlGroup && controlGroup.length) {
                    // has control group array
                    if (controlGroup.includes(selectedOption)) {
                      // check form control belong to the controlGroup
                      rows[row].form_layout_columns[column].form_controls[control].show = true;
                    } else {
                      rows[row].form_layout_columns[column].form_controls[control].show = false;
                    }
                  }
                }
              }
            }
          }

          return rows;
        } // set units

      }, {
        key: "setUnit",
        value: function setUnit(rows, selectedUnit) {
          // iterate over left column rows
          for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              // iterate over column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                // check control sub-type is unitLabel and update the label and value
                if (rows[row].form_layout_columns[column].form_controls[control].sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].unitLabel) {
                  // set display label value
                  rows[row].form_layout_columns[column].form_controls[control].label = selectedUnit.display_Short_title;

                  if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH === +selectedUnit.id) {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH;
                  } else if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER === +selectedUnit.id) {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER;
                  } else {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH;
                  }
                }
              }
            }
          }

          return rows;
        } // set temperature lable

      }, {
        key: "setTemperature",
        value: function setTemperature(rows, selectedTemperature) {
          // iterate over left column rows
          for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              // iterate over column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                // check control sub-type is unit and update the label and value
                if (rows[row].form_layout_columns[column].form_controls[control].sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].temperatureLabel) {
                  // set display label value
                  rows[row].form_layout_columns[column].form_controls[control].label = selectedTemperature.display_Short_title;

                  if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS === +selectedTemperature.id) {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS;
                  } else if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT === +selectedTemperature.id) {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT;
                  } else {
                    rows[row].form_layout_columns[column].form_controls[control].value = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS;
                  }
                }
              }
            }
          }

          return rows;
        } // set convert output

      }, {
        key: "convertOutputToInchOrMillimeter",
        value: function convertOutputToInchOrMillimeter(rows, selectedUnit) {
          // iterate over left column rows
          for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              // iterate over left column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                if (rows[row].form_layout_columns[column].form_controls[control].hasOwnProperty('sub_type')) {
                  // const controlKey = this.control?.key;
                  // temperature conversion
                  if (rows[row].form_layout_columns[column].form_controls[control].sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].calculated_label) {
                    var currentVal = rows[row].form_layout_columns[column].form_controls[control].value;

                    if (currentVal) {
                      var convertedValue = selectedUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER ? this.helperService.convertToMillimeter(currentVal) : this.helperService.convertToInch(currentVal);
                      rows[row].form_layout_columns[column].form_controls[control].value = convertedValue;
                      rows[row].form_layout_columns[column].form_controls[control].label = "".concat(convertedValue, " %");
                    } else {
                      // default value
                      // rows[row].form_layout_columns[column].form_controls[control].value = 0.00;
                      rows[row].form_layout_columns[column].form_controls[control].label = " %";
                    }
                  }
                }
              }
            }
          }

          return rows;
        } // set temperature lable

      }, {
        key: "getFormControl",
        value: function getFormControl(rows, formControlKey) {
          var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_3__["FormControlModel"]({}); // iterate over left column rows

          for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
              // iterate over column controls
              for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                // key matched
                if (formControlKey === rows[row].form_layout_columns[column].form_controls[control].key) {
                  fc = rows[row].form_layout_columns[column].form_controls[control];
                }
              }
            }
          }

          return fc;
        }
      }, {
        key: "calculator",
        get: function get() {
          return this.calculatorSubject.getValue();
        },
        set: function set(val) {
          this.calculatorSubject.next(val);
        }
      }, {
        key: "getCurrentValue",
        get: function get() {
          return this.calculator;
        }
      }]);

      return DynamicFormTwoColumnLayoutService;
    }();

    DynamicFormTwoColumnLayoutService.ɵfac = function DynamicFormTwoColumnLayoutService_Factory(t) {
      return new (t || DynamicFormTwoColumnLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]));
    };

    DynamicFormTwoColumnLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DynamicFormTwoColumnLayoutService,
      factory: DynamicFormTwoColumnLayoutService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormTwoColumnLayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./client/app/dynamic-form/dynamic-form.module.ts":
  /*!********************************************************!*\
    !*** ./client/app/dynamic-form/dynamic-form.module.ts ***!
    \********************************************************/

  /*! exports provided: DynamicFormModule */

  /***/
  function clientAppDynamicFormDynamicFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function () {
      return DynamicFormModule;
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


    var _dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");
    /* harmony import */


    var _dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */
    "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./client/app/shared/shared.module.ts"); // core imports
    // application imports


    var DynamicFormModule = function DynamicFormModule() {
      _classCallCheck(this, DynamicFormModule);
    };

    DynamicFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DynamicFormModule
    });
    DynamicFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DynamicFormModule_Factory(t) {
        return new (t || DynamicFormModule)();
      },
      providers: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_4__["DynamicFormTwoColumnLayoutService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DynamicFormModule, {
        declarations: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormTwoColumnLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormTwoColumnLayoutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormTwoColumnLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          exports: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_3__["DynamicFormTwoColumnLayoutComponent"]],
          providers: [_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_4__["DynamicFormTwoColumnLayoutService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./client/app/models/error.model.ts":
  /*!******************************************!*\
    !*** ./client/app/models/error.model.ts ***!
    \******************************************/

  /*! exports provided: ErrorModel */

  /***/
  function clientAppModelsErrorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorModel", function () {
      return ErrorModel;
    });
    /* harmony import */


    var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/helpers/constants */
    "./client/app/shared/helpers/constants.ts");

    var ErrorModel = function ErrorModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ErrorModel);

      this.field = options.field;
      this.title = options.title;
      this.detail = options.detail;
      this.isDetailOpened = options.isDetailOpened ? options.isDetailOpened : false;
      this.type = options.type || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Error;
    };
    /***/

  }
}]);
//# sourceMappingURL=default~rectangle-gland-calc-rectangle-gland-calc-module~rectangular-o-ring-calc-rectangular-o-ring-~9d7a3a5b-es5.js.map