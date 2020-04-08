"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.timers");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style/style.css");

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var icons = {
  info: 'icon-info',
  success: 'icon-success',
  danger: 'icon-circle',
  primary: 'icon-zan',
  warning: 'icon-warning'
};

var Toast = function Toast(_ref) {
  var notice = _ref.notice,
      callback = _ref.callback,
      duration = _ref.duration,
      onClose = _ref.onClose;

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1]; // 执行退场动画


  if (duration !== -1) {
    var _timer = setTimeout(function () {
      setShow(false);
      clearTimeout(_timer);
      _timer = null;
    }, duration);
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactTransitionGroup.TransitionGroup, {
    component: null,
    appear: true
  }, show ? _react["default"].createElement(_reactTransitionGroup.CSSTransition, {
    timeout: 300,
    classNames: "down",
    appear: true
  }, _react["default"].createElement("div", {
    className: notice.type
  }, _react["default"].createElement("i", {
    className: "react-toast-icon ".concat(icons[notice.type])
  }), _react["default"].createElement("strong", null, notice.content), onClose ? _react["default"].createElement("i", {
    className: "react-toast-icon icon-close close",
    onClick: function onClick() {
      return callback();
    }
  }) : null)) : null));
};

var _default = Toast;
exports["default"] = _default;