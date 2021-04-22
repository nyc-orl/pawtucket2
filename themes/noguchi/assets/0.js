(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../default/js/browse.js":
/*!*******************************!*\
  !*** ../default/js/browse.js ***!
  \*******************************/
/*! exports provided: BrowseUI, BrowseStatistics, BrowseFilters, BrowseResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowseUI\", function() { return BrowseUI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowseStatistics\", function() { return BrowseStatistics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowseFilters\", function() { return BrowseFilters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BrowseResults\", function() { return BrowseResults; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js?7c21\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\n *\n */\n\nvar BrowseUI =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BrowseUI, _React$Component);\n\n  function BrowseUI(props) {\n    var _this;\n\n    _classCallCheck(this, BrowseUI);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BrowseUI).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  return BrowseUI;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n/**\n * Browse statistics display: # of hits, Etc.\n */\n\nvar BrowseStatistics =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(BrowseStatistics, _React$Component2);\n\n  function BrowseStatistics() {\n    _classCallCheck(this, BrowseStatistics);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BrowseStatistics).apply(this, arguments));\n  }\n\n  _createClass(BrowseStatistics, [{\n    key: \"render\",\n    value: function render() {\n      //let theme = this.context;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Stats\");\n    }\n  }]);\n\n  return BrowseStatistics;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //BrowseStatistics.contextType = ThemeContext;\n\n/**\n * Browse filter: list of applied filters\n */\n\nvar BrowseFilters =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(BrowseFilters, _React$Component3);\n\n  function BrowseFilters() {\n    _classCallCheck(this, BrowseFilters);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BrowseFilters).apply(this, arguments));\n  }\n\n  _createClass(BrowseFilters, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Filters\");\n    }\n  }]);\n\n  return BrowseFilters;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n/**\n * Browse results\n */\n\nvar BrowseResults =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(BrowseResults, _React$Component4);\n\n  function BrowseResults() {\n    _classCallCheck(this, BrowseResults);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BrowseResults).apply(this, arguments));\n  }\n\n  _createClass(BrowseResults, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Browse results\");\n    }\n  }]);\n\n  return BrowseResults;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //Browse.contextType = ThemeContext;\n\n//# sourceURL=webpack:///../default/js/browse.js?");

/***/ }),

/***/ "./js/NoguchiBrowse.js":
/*!*****************************!*\
  !*** ./js/NoguchiArchiveBrowse.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js?7c21\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js?75b0\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var browse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browse */ \"../default/js/browse.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar selector = pawtucketUIApps.NoguchiBrowse.selector;\nvar appData = pawtucketUIApps.NoguchiBrowse.data;\n\nvar NoguchiBrowse =\n/*#__PURE__*/\nfunction (_Browse$BrowseUI) {\n  _inherits(NoguchiBrowse, _Browse$BrowseUI);\n\n  function NoguchiBrowse(props) {\n    _classCallCheck(this, NoguchiBrowse);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowse).call(this, props));\n  }\n\n  _createClass(NoguchiBrowse, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n        className: \"ca archive archive_landing\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseIntro, {\n        headline: this.props.title,\n        description: this.props.description\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseFilters, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseStatistics, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResults, null));\n    }\n  }]);\n\n  return NoguchiBrowse;\n}(browse__WEBPACK_IMPORTED_MODULE_2__[\"BrowseUI\"]);\n\nvar NoguchiBrowseIntro =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(NoguchiBrowseIntro, _React$Component);\n\n  function NoguchiBrowseIntro(props) {\n    _classCallCheck(this, NoguchiBrowseIntro);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseIntro).call(this, props));\n  }\n\n  _createClass(NoguchiBrowseIntro, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"intro\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrap block-large\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrap-max-content\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"block-half subheadline-bold text-align-center\"\n      }, this.props.headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"block-half body-text-l\"\n      }, this.props.description))));\n    }\n  }]);\n\n  return NoguchiBrowseIntro;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar NoguchiBrowseStatistics =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(NoguchiBrowseStatistics, _React$Component2);\n\n  function NoguchiBrowseStatistics() {\n    _classCallCheck(this, NoguchiBrowseStatistics);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseStatistics).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseStatistics, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"current\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"body-sans\"\n      }, \"Showing 16,373 Results.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseCurrentCriteriaList, null));\n    }\n  }]);\n\n  return NoguchiBrowseStatistics;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar NoguchiBrowseCurrentCriteriaList =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(NoguchiBrowseCurrentCriteriaList, _React$Component3);\n\n  function NoguchiBrowseCurrentCriteriaList() {\n    _classCallCheck(this, NoguchiBrowseCurrentCriteriaList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseCurrentCriteriaList).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseCurrentCriteriaList, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"tags\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/removeCriterion/collection_facet/removeID/432/view/images/key/b90f94881b0f3aeab6906aeb8beec39c\",\n        className: \"browseRemoveFacet\"\n      }, \"Photography Collection \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\xD7\")));\n    }\n  }]);\n\n  return NoguchiBrowseCurrentCriteriaList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar NoguchiBrowseFilters =\n/*#__PURE__*/\nfunction (_Browse$BrowseFilters) {\n  _inherits(NoguchiBrowseFilters, _Browse$BrowseFilters);\n\n  function NoguchiBrowseFilters() {\n    _classCallCheck(this, NoguchiBrowseFilters);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseFilters).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseFilters, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"ca_filters\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseNavigation, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"options-filter-widget\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"options text-gray\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"caption-text\"\n      }, \"Filter By:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\",\n        \"data-option\": \"type_facet\"\n      }, \"type\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\",\n        \"data-option\": \"decade_facet\"\n      }, \"decade\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"option_values wrap-negative\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"arrow\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"inner\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"inner-crop\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"ul-options\",\n        \"data-values\": \"type_facet\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/type_facet/id/1085/view/\"\n      }, \"Digital \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(614)\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/type_facet/id/29/view/\"\n      }, \"Documents \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(26)\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/type_facet/id/1069/view/\"\n      }, \"Photographs \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(3)\"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"ul-options\",\n        \"data-values\": \"decade_facet\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/decade_facet/id/1880s/view/\"\n      }, \"1880s \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(1)\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/decade_facet/id/1890s/view/\"\n      }, \"1890s \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(2)\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"checkbox\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        id: \"artwork\",\n        \"data-category\": \"\",\n        className: \"option-input\",\n        type: \"checkbox\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"artwork\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"title\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/key//facet/decade_facet/id/1900s/view/\"\n      }, \"1900s \\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"number\"\n      }, \"(15)\")))))))))))));\n    }\n  }]);\n\n  return NoguchiBrowseFilters;\n}(browse__WEBPACK_IMPORTED_MODULE_2__[\"BrowseFilters\"]);\n\nvar NoguchiBrowseNavigation =\n/*#__PURE__*/\nfunction (_React$Component4) {\n  _inherits(NoguchiBrowseNavigation, _React$Component4);\n\n  function NoguchiBrowseNavigation() {\n    _classCallCheck(this, NoguchiBrowseNavigation);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseNavigation).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseNavigation, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"ca_nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"hide-for-mobile\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrap text-gray\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        action: \"/index.php/Search/archive\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cell text\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/Archive\"\n      }, \"Browse\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cell\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        name: \"search\",\n        type: \"text\",\n        placeholder: \"Search the Archive\",\n        className: \"search\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cell\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"utility-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"utility utility_menu\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\",\n        className: \"trigger\"\n      }, \"All Archival Collections\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"options\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/432\"\n      }, \"Photography Collection\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/434\"\n      }, \"Manuscript Collection\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/436\"\n      }, \"Architectural Collection\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/437\"\n      }, \"Business & Legal Collection\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/438\"\n      }, \"Noguchi Fountain & Plaza\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Browse/archive/facet/collection_facet/id/442\"\n      }, \"Publication & Press Collection\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"misc\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cell text\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/ArchiveInfo/UserGuide\"\n      }, \"User Guide\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cell text\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/ArchiveInfo/About\"\n      }, \"About\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"long\"\n      }, \" The Archive\"))))))));\n    }\n  }]);\n\n  return NoguchiBrowseNavigation;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar NoguchiBrowseResults =\n/*#__PURE__*/\nfunction (_Browse$BrowseResults) {\n  _inherits(NoguchiBrowseResults, _Browse$BrowseResults);\n\n  function NoguchiBrowseResults() {\n    _classCallCheck(this, NoguchiBrowseResults);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseResults).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseResults, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"block block-quarter-top\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid-flexbox-layout grid-ca-archive\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowseResultItem, null))));\n    }\n  }]);\n\n  return NoguchiBrowseResults;\n}(browse__WEBPACK_IMPORTED_MODULE_2__[\"BrowseResults\"]);\n\nvar NoguchiBrowseResultItem =\n/*#__PURE__*/\nfunction (_React$Component5) {\n  _inherits(NoguchiBrowseResultItem, _React$Component5);\n\n  function NoguchiBrowseResultItem() {\n    _classCallCheck(this, NoguchiBrowseResultItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NoguchiBrowseResultItem).apply(this, arguments));\n  }\n\n  _createClass(NoguchiBrowseResultItem, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        \"background-image\": \"url(http://noguchi.whirl-i-gig.com:8081/media/nogarchive/images/8/8/1/64478_ca_object_representations_media_88192_medium.jpg)\"\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"item-grid\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/index.php/Detail/archival/72949\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"img-wrapper archive_thumb block-quarter\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bg-image\",\n        style: styles\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"text\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"text_position\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ca-identifier text-gray\"\n      }, \"01\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"thumb-text clamp\",\n        \"data-lines\": \"3\"\n      }, \"Isamu Noguchi in Mure studio, c.1980\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"text_full\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"ca-identifier text-gray\"\n      }, \"01\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"thumb-text\"\n      }, \"Isamu Noguchi in Mure studio, c.1980\"))))));\n    }\n  }]);\n\n  return NoguchiBrowseResultItem;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoguchiBrowse, {\n  title: appData.title,\n  description: appData.description\n}), document.querySelector(selector));\n\n//# sourceURL=webpack:///./js/NoguchiArchiveBrowse.js?");

/***/ })

}]);