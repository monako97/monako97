import React from 'react';
import "../style/style.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const icons = {
    info: 'icon-info',
    success: 'icon-success',
    danger: 'icon-circle',
    primary: 'icon-zan',
    warning: 'icon-warning'
};
const Toast = ({notice, callback, duration, onClose}) => {
    const [show, setShow] = React.useState(true);
    // 执行退场动画
    if (duration !== -1) {
        let _timer = setTimeout(() => {
            setShow(false);
            clearTimeout(_timer);
            _timer = null;
        }, duration);
    }
    return React.createElement(React.Fragment, null,
        React.createElement(TransitionGroup, {
            component: null,
            appear: true
        }, show ?
            React.createElement(CSSTransition, {
                    timeout: 300,
                    classNames: "down",
                    appear: true
                },
                React.createElement("div", {
                        className: notice.type
                    },
                    React.createElement("i", {
                        className: "react-toast-icon ".concat(icons[notice.type])
                    }),
                    React.createElement("strong", null, notice.content), onClose ?
                        React.createElement("i", {
                            className: "react-toast-icon icon-close close",
                            onClick: function onClick() {
                                return callback();
                            }
                        }) : null)) : null));
};
export default Toast;
