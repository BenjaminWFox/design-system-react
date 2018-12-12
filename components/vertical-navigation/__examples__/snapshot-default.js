"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _verticalNavigation = require("../../../../components/vertical-navigation");

var _verticalNavigation2 = _interopRequireDefault(_verticalNavigation);

var _iconSettings = require("../../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _verticalNavigation3 = require("../../../../utilities/sample-data/vertical-navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Example = (0, _createReactClass2.default)({
  displayName: 'NavigationExample',
  render: function render() {
    return _react2.default.createElement(_iconSettings2.default, {
      iconPath: "/assets/icons"
    }, _react2.default.createElement(_verticalNavigation2.default, _extends({
      id: "sample-navigation",
      categories: _verticalNavigation3.sampleReportCategories
    }, this.props)));
  }
});
exports.default = Example;