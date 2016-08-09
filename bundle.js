require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  display: 'inline-block',
  marginRight: '.75em'
};

var Badge = (function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    _get(Object.getPrototypeOf(Badge.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'ReactCard-Badge' }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return Badge;
})(_react2['default'].Component);

Badge.propTypes = {
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Badge;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  float: 'left',
  fontSize: 12,
  marginBottom: 2
};

var BadgeList = (function (_React$Component) {
  _inherits(BadgeList, _React$Component);

  function BadgeList() {
    _classCallCheck(this, BadgeList);

    _get(Object.getPrototypeOf(BadgeList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BadgeList, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'ReactCard-BadgeList' }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return BadgeList;
})(_react2['default'].Component);

BadgeList.propTypes = {
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = BadgeList;
module.exports = exports['default'];

},{"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  backgroundColor: 'white',
  boxShadow: '0 .0625em .125em -.0625em rgba(0,0,0,.3)',
  padding: '1em',
  borderRadius: '.25em',
  overflow: 'hidden'
};

var Card = (function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'ReactCard' }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return Card;
})(_react2['default'].Component);

Card.propTypes = {
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Card;
module.exports = exports['default'];

},{"react":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function styles(props) {
  return {
    minWidth: 'calc(100% + 2em)',
    margin: '-1em',
    marginBottom: '1em',
    backgroundImage: 'url("' + props.src + '")',
    height: 150, // props
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };
}

var Image = (function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    _get(Object.getPrototypeOf(Image.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', _extends({}, this.props, { style: this.styles }));
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles(this.props), this.props.style);
    }
  }]);

  return Image;
})(_react2['default'].Component);

Image.propTypes = {
  alt: _react2['default'].PropTypes.string.isRequired,
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  src: _react2['default'].PropTypes.string.isRequired,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Image;
module.exports = exports['default'];

},{"react":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  display: 'inline-block',
  height: 10,
  width: '17.5%',
  marginRight: '2.5%',
  borderRadius: 4
};

var Label = (function (_React$Component) {
  _inherits(Label, _React$Component);

  function Label() {
    _classCallCheck(this, Label);

    _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Label, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', _extends({ className: 'ReactCard-Label' }, this.props, { style: this.styles }));
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return Label;
})(_react2['default'].Component);

Label.propTypes = {
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Label;
module.exports = exports['default'];

},{"react":undefined}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {};

var LabelList = (function (_React$Component) {
  _inherits(LabelList, _React$Component);

  function LabelList() {
    _classCallCheck(this, LabelList);

    _get(Object.getPrototypeOf(LabelList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(LabelList, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        _extends({ className: "ReactCard-LabelList" }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: "styles",
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return LabelList;
})(_react2["default"].Component);

LabelList.propTypes = {
  children: _react2["default"].PropTypes.node,
  noStyle: _react2["default"].PropTypes.bool,
  style: _react2["default"].PropTypes.object
};

exports["default"] = LabelList;
module.exports = exports["default"];

},{"react":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function firstAndLast(item, i, all) {
  if (i === 0 || i === all.length - 1) {
    return item;
  }
}

function firstCharacters(item) {
  return item.slice(0, 1);
}

function initials(name) {
  return name.split(' ').map(firstAndLast).map(firstCharacters).join('');
}

var styles = {};

var Member = (function (_React$Component) {
  _inherits(Member, _React$Component);

  function Member() {
    _classCallCheck(this, Member);

    _get(Object.getPrototypeOf(Member.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Member, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'ReactCard-Member' }, this.props, { style: this.styles }),
        initials(this.props.name)
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return Member;
})(_react2['default'].Component);

Member.propTypes = {
  children: _react2['default'].PropTypes.node,
  name: _react2['default'].PropTypes.string.isRequired,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Member;
module.exports = exports['default'];

},{"react":undefined}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {};

var MemberList = (function (_React$Component) {
  _inherits(MemberList, _React$Component);

  function MemberList() {
    _classCallCheck(this, MemberList);

    _get(Object.getPrototypeOf(MemberList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MemberList, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        _extends({ className: "ReactCard-MemberList" }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: "styles",
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return MemberList;
})(_react2["default"].Component);

MemberList.propTypes = {
  children: _react2["default"].PropTypes.node,
  noStyle: _react2["default"].PropTypes.bool,
  style: _react2["default"].PropTypes.object
};

exports["default"] = MemberList;
module.exports = exports["default"];

},{"react":undefined}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  fontSize: '1.4em'
};

var Title = (function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'ReactCard-title' }, this.props, { style: this.styles }),
        this.props.children
      );
    }
  }, {
    key: 'styles',
    get: function get() {
      return _extends({}, !this.props.noStyle && styles, this.props.style);
    }
  }]);

  return Title;
})(_react2['default'].Component);

Title.propTypes = {
  children: _react2['default'].PropTypes.node,
  noStyle: _react2['default'].PropTypes.bool,
  style: _react2['default'].PropTypes.object
};

exports['default'] = Title;
module.exports = exports['default'];

},{"react":undefined}],"react-card-object":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CardJs = require('./Card.js');

var _CardJs2 = _interopRequireDefault(_CardJs);

var _TitleJs = require('./Title.js');

var _TitleJs2 = _interopRequireDefault(_TitleJs);

var _ImageJs = require('./Image.js');

var _ImageJs2 = _interopRequireDefault(_ImageJs);

var _LabelJs = require('./Label.js');

var _LabelJs2 = _interopRequireDefault(_LabelJs);

var _LabelListJs = require('./LabelList.js');

var _LabelListJs2 = _interopRequireDefault(_LabelListJs);

var _BadgeListJs = require('./BadgeList.js');

var _BadgeListJs2 = _interopRequireDefault(_BadgeListJs);

var _BadgeJs = require('./Badge.js');

var _BadgeJs2 = _interopRequireDefault(_BadgeJs);

var _MemberListJs = require('./MemberList.js');

var _MemberListJs2 = _interopRequireDefault(_MemberListJs);

var _MemberJs = require('./Member.js');

var _MemberJs2 = _interopRequireDefault(_MemberJs);

exports['default'] = {
  Card: _CardJs2['default'],
  Title: _TitleJs2['default'],
  Image: _ImageJs2['default'],
  LabelList: _LabelListJs2['default'],
  Label: _LabelJs2['default'],
  BadgeList: _BadgeListJs2['default'],
  Badge: _BadgeJs2['default'],
  MemberList: _MemberListJs2['default'],
  Member: _MemberJs2['default']
};
module.exports = exports['default'];

},{"./Badge.js":1,"./BadgeList.js":2,"./Card.js":3,"./Image.js":4,"./Label.js":5,"./LabelList.js":6,"./Member.js":7,"./MemberList.js":8,"./Title.js":9}]},{},[]);
