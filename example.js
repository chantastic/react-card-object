require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCardObject = require('react-card-object');

var children = [_react2['default'].createElement(_reactCardObject.Image, { alt: 'Steve Urkel', src: 'http://vignette4.wikia.nocookie.net/familymatters/images/e/e0/Steve_Urkel.jpg/revision/latest?cb=20140617201815' }), _react2['default'].createElement(
  _reactCardObject.Title,
  null,
  'ReactCard'
), _react2['default'].createElement(
  'p',
  null,
  'A React Card with styled inline.'
)];

_react2['default'].render(_react2['default'].createElement(
  _reactCardObject.Card,
  null,
  children
), document.getElementById('exampleOne'));

_react2['default'].render(_react2['default'].createElement(
  _reactCardObject.Card,
  { style: { backgroundColor: "red", color: "white", padding: 30 } },
  children
), document.getElementById('exampleTwo'));

_react2['default'].render(_react2['default'].createElement(
  _reactCardObject.Card,
  { className: 'test-card' },
  children
), document.getElementById('exampleThree'));

_react2['default'].render(_react2['default'].createElement(
  _reactCardObject.Card,
  { noStyle: true, style: { position: "relative" } },
  children
), document.getElementById('exampleFour'));

var TrelloCardStyles = {
  root: {
    borderBottom: '1px solid #ccc',
    boxShadow: 'none',
    maxWidth: 200,
    font: '14px "Helvetica Neue",Arial,Helvetica,sans-serif',
    color: '#4d4d4d'
  },
  badgeList: {
    color: '#999'
  },
  memberList: {
    float: 'right',
    margin: '2px -8px -8px 0'
  },
  member: {
    display: 'inline-block',
    marginLeft: '.35em',
    backgroundColor: '#D6DADC',
    height: 30,
    width: 30,
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: 3,
    fontWeight: 'bold'
  }
};

var members = ['Carl Winslow', 'Harriette Winslow', 'Eddie Winslow', 'Laura Winslow'];

var TrelloCard = _react2['default'].createElement(
  _reactCardObject.Card,
  { style: TrelloCardStyles.root },
  _react2['default'].createElement(_reactCardObject.Image, { alt: 'Steve Urkel', src: 'http://vignette4.wikia.nocookie.net/familymatters/images/e/e0/Steve_Urkel.jpg/revision/latest?cb=20140617201815' }),
  _react2['default'].createElement(
    _reactCardObject.LabelList,
    null,
    _react2['default'].createElement(_reactCardObject.Label, { style: { backgroundColor: '#2ECC40' } }),
    _react2['default'].createElement(_reactCardObject.Label, { style: { backgroundColor: '#FFDC00' } }),
    _react2['default'].createElement(_reactCardObject.Label, { style: { backgroundColor: '#FF851B' } }),
    _react2['default'].createElement(_reactCardObject.Label, { style: { backgroundColor: '#FF4136' } }),
    _react2['default'].createElement(_reactCardObject.Label, { style: { backgroundColor: '#B10DC9' } })
  ),
  _react2['default'].createElement(
    'p',
    null,
    'Trello-like description/title.'
  ),
  _react2['default'].createElement(
    _reactCardObject.BadgeList,
    { style: TrelloCardStyles.badgeList },
    _react2['default'].createElement(
      _reactCardObject.Badge,
      null,
      _react2['default'].createElement('i', { className: 'fa fa-align-left' })
    ),
    _react2['default'].createElement(
      _reactCardObject.Badge,
      null,
      _react2['default'].createElement('i', { className: 'fa fa-comment-o' }),
      ' 6'
    ),
    _react2['default'].createElement(
      _reactCardObject.Badge,
      null,
      _react2['default'].createElement('i', { className: 'fa fa-paperclip' }),
      ' 2'
    ),
    _react2['default'].createElement(
      _reactCardObject.Badge,
      null,
      _react2['default'].createElement('i', { className: 'fa fa-check-square-o' }),
      ' 3/11'
    )
  ),
  _react2['default'].createElement(
    _reactCardObject.MemberList,
    { style: TrelloCardStyles.memberList },
    members.map(function (name) {
      return _react2['default'].createElement(_reactCardObject.Member, { style: TrelloCardStyles.member, name: name });
    })
  )
);

_react2['default'].render(TrelloCard, document.getElementById('exampleFive'));

},{"react":undefined,"react-card-object":undefined}]},{},[1]);
