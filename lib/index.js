"use strict";

require("core-js/modules/web.timers");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var render = module.hot ? _reactDom["default"].render : _reactDom["default"].hydrate;

var notice = function notice(type, content) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;
  var onClose = arguments.length > 3 ? arguments[3] : undefined;
  var div = document.createElement('div');
  div.className = "react-toast ".concat(type);
  document.body.appendChild(div);

  var _toastTime;

  var delDom = function delDom() {
    _reactDom["default"].unmountComponentAtNode(div);

    document.body.removeChild(div);
    clearTimeout(_toastTime);
    _toastTime = null;
  }; // 当 duration 为 -1 时，显示伪不自动关闭


  if (duration !== -1) _toastTime = setTimeout(delDom, duration + 300); // +300 为离开动画所需要的时间

  render(_react["default"].createElement(_Toast["default"], {
    callback: delDom,
    notice: {
      content: content,
      type: type
    },
    onClose: onClose,
    duration: duration
  }), div);
};

var _default = {
  info: function info() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Info";
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('info', content, duration, onClose);
  },
  success: function success() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作成功';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('success', content, duration, onClose);
  },
  danger: function danger() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "发送错误";
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('danger', content, duration, onClose);
  },
  loading: function loading() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading...';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('loading', content, duration, onClose);
  },
  warning: function warning() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '警告';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('warning', content, duration, onClose);
  },
  primary: function primary() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'OK';
    var duration = arguments.length > 1 ? arguments[1] : undefined;
    var onClose = arguments.length > 2 ? arguments[2] : undefined;
    return notice('primary', content, duration, onClose);
  }
};
exports["default"] = _default;