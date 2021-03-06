'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _styler = require('../ons/styler');

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright 2013-2015 ASIAL CORPORATION
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var defaultClassName = 'speed-dial';
var scheme = {
  '': 'speed-dial--*'
};

/**
 * @element ons-speed-dial
 * @category control
 * @description
 *   [en]
 *     Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
 *
 *     The Speed dial looks like a `<ons-fab>` element but will expand a menu when tapped.
 *   [/en]
 *   [ja][/ja]
 * @codepen dYQYLg
 * @tutorial vanilla/Reference/speed-dial
 * @seealso ons-speed-dial-item
 *   [en]The `<ons-speed-dial-item>` represents a menu item.[/en]
 *   [ja]ons-speed-dial-item?????????????????????[/ja]
 * @seealso ons-fab
 *   [en]ons-fab component[/en]
 *   [ja]ons-fab?????????????????????[/ja]
 * @example
 * <ons-speed-dial position="left bottom">
 *   <ons-fab>
 *     <ons-icon icon="fa-twitter"></ons-icon>
 *   </ons-fab>
 *   <ons-speed-dial-item>A</ons-speed-dial-item>
 *   <ons-speed-dial-item>B</ons-speed-dial-item>
 *   <ons-speed-dial-item>C</ons-speed-dial-item>
 * </ons-speed-dial>
 */

var SpeedDialElement = function (_BaseElement) {
  _inherits(SpeedDialElement, _BaseElement);

  /**
   * @event open
   * @description
   *   [en]Fired when the menu items are shown.[/en]
   *   [ja][/ja]
   */

  /**
   * @event close
   * @description
   *   [en]Fired when the menu items are hidden.[/en]
   *   [ja][/ja]
   */

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the component.[/en]
   *   [ja]?????????????????????????????????????????????????????????[/ja]
   */

  /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */

  /**
   * @attribute position
   * @type {String}
   * @description
   *   [en]
   *     Specify the vertical and horizontal position of the component.
   *     I.e. to display it in the top right corner specify "right top".
   *     Choose from "right", "left", "top" and "bottom".
   *   [/en]
   *   [ja]
   *     ????????????????????????????????????????????????????????????????????????
   *     ?????????????????????????????????????????????"right top"?????????????????????
   *     ??????????????????????????????????????????right???left???top???bottom????????????????????????????????????
   *   [/ja]
   */

  /**
   * @attribute direction
   * @type {String}
   * @description
   *   [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
   *   [ja]
   *     ????????????????????????????????????????????????up, down, left, right????????????????????????
   *   [/ja]
   */

  /**
   * @attribute disabled
   * @description
   *   [en]Specify if button should be disabled.[/en]
   *   [ja]??????????????????????????????????????????[/ja]
   */

  function SpeedDialElement() {
    _classCallCheck(this, SpeedDialElement);

    var _this = _possibleConstructorReturn(this, (SpeedDialElement.__proto__ || Object.getPrototypeOf(SpeedDialElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      _this._compile();
    });

    _this._itemShown = false;
    _this._boundOnClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(SpeedDialElement, [{
    key: '_compile',
    value: function _compile() {
      this.classList.add(defaultClassName);
      _autostyle2.default.prepare(this);
      this._updateRipple();
      _modifierUtil2.default.initModifier(this, scheme);

      if (this.hasAttribute('direction')) {
        this._updateDirection(this.getAttribute('direction'));
      } else {
        this._updateDirection('up');
      }

      this._updatePosition();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this2 = this;

      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          break;
        case 'ripple':
          (0, _contentReady2.default)(this, function () {
            return _this2._updateRipple();
          });
          break;
        case 'direction':
          (0, _contentReady2.default)(this, function () {
            return _this2._updateDirection(current);
          });
          break;
        case 'position':
          (0, _contentReady2.default)(this, function () {
            return _this2._updatePosition();
          });
          break;
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.addEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      if (this.onClick) {
        this.onClick.apply(this);
        return Promise.resolve();
      } else if (!this.disabled && this.visible) {
        return this.toggleItems();
      }
    }
  }, {
    key: '_show',
    value: function _show() {
      if (!this.inline) {
        return this.show();
      }
      return Promise.resolve();
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _this3 = this;

      return new Promise(function (resolve) {
        if (!_this3.inline) {
          setImmediate(function () {
            return _this3.hide().then(resolve);
          });
        } else {
          resolve();
        }
      });
    }
  }, {
    key: '_updateRipple',
    value: function _updateRipple() {
      if (this._fab) {
        this.hasAttribute('ripple') ? this._fab.setAttribute('ripple', '') : this._fab.removeAttribute('ripple');
      }
    }
  }, {
    key: '_updateDirection',
    value: function _updateDirection(direction) {
      var children = this.items;
      for (var i = 0; i < children.length; i++) {
        (0, _styler2.default)(children[i], {
          transitionDelay: 25 * i + 'ms',
          bottom: 'auto',
          right: 'auto',
          top: 'auto',
          left: 'auto'
        });
      }
      switch (direction) {
        case 'up':
          for (var _i = 0; _i < children.length; _i++) {
            children[_i].style.bottom = 72 + 56 * _i + 'px';
            children[_i].style.right = '8px';
          }
          break;
        case 'down':
          for (var _i2 = 0; _i2 < children.length; _i2++) {
            children[_i2].style.top = 72 + 56 * _i2 + 'px';
            children[_i2].style.left = '8px';
          }
          break;
        case 'left':
          for (var _i3 = 0; _i3 < children.length; _i3++) {
            children[_i3].style.top = '8px';
            children[_i3].style.right = 72 + 56 * _i3 + 'px';
          }
          break;
        case 'right':
          for (var _i4 = 0; _i4 < children.length; _i4++) {
            children[_i4].style.top = '8px';
            children[_i4].style.left = 72 + 56 * _i4 + 'px';
          }
          break;
        default:
          _util2.default.throw('Argument must be one of up, down, left or right.');
      }
    }
  }, {
    key: '_updatePosition',
    value: function _updatePosition() {
      var position = this.getAttribute('position');
      this.classList.remove('fab--top__left', 'fab--bottom__right', 'fab--bottom__left', 'fab--top__right', 'fab--top__center', 'fab--bottom__center');
      switch (position) {
        case 'top right':
        case 'right top':
          this.classList.add('fab--top__right');
          break;
        case 'top left':
        case 'left top':
          this.classList.add('fab--top__left');
          break;
        case 'bottom right':
        case 'right bottom':
          this.classList.add('fab--bottom__right');
          break;
        case 'bottom left':
        case 'left bottom':
          this.classList.add('fab--bottom__left');
          break;
        case 'center top':
        case 'top center':
          this.classList.add('fab--top__center');
          break;
        case 'center bottom':
        case 'bottom center':
          this.classList.add('fab--bottom__center');
          break;
        default:
          break;
      }
    }
  }, {
    key: '_getTranslate',
    value: function _getTranslate() {
      var isBottom = (this.getAttribute('position') || '').indexOf('bottom') >= 0;
      var translate = isBottom ? 'translate3d(0px, -' + (_util2.default.globals.fabOffset || 0) + 'px, 0px) ' : '';
      return translate;
    }

    /**
     * @method show
     * @signature show()
     * @description
     *   [en]Show the speed dial.[/en]
     *   [ja]Speed dial?????????????????????[/ja]
     */

  }, {
    key: 'show',
    value: function show() {
      this._fab.show();
      (0, _styler2.default)(this, { transform: this._getTranslate });
      return Promise.resolve();
    }

    /**
     * @method hide
     * @signature hide()
     * @description
     *   [en]Hide the speed dial.[/en]
     *   [ja]Speed dial???????????????????????????[/ja]
     */

  }, {
    key: 'hide',
    value: function hide() {
      var _this4 = this;

      return this.hideItems().then(function () {
        return _this4._fab.hide();
      });
    }

    /**
     * @method showItems
     * @signature showItems()
     * @description
     *   [en]Show the speed dial items.[/en]
     *   [ja]Speed dial?????????????????????????????????[/ja]
     */

  }, {
    key: 'showItems',
    value: function showItems() {
      if (this.hasAttribute('direction')) {
        this._updateDirection(this.getAttribute('direction'));
      } else {
        this._updateDirection('up');
      }

      var totalDelay = 0;
      if (!this._itemShown) {
        var children = this.items;
        for (var i = 0; i < children.length; i++) {
          var delay = 25 * i;
          totalDelay += delay;
          (0, _styler2.default)(children[i], {
            transform: 'scale(1)',
            transitionDelay: delay + 'ms'
          });
        }
        totalDelay += 50;

        this._itemShown = true;
        _util2.default.triggerElementEvent(this, 'open');
      }

      var deferred = _util2.default.defer();
      setTimeout(deferred.resolve, totalDelay);
      return deferred.promise;
    }

    /**
     * @method hideItems
     * @signature hideItems()
     * @description
     *   [en]Hide the speed dial items.[/en]
     *   [ja]Speed dial???????????????????????????????????????[/ja]
     */

  }, {
    key: 'hideItems',
    value: function hideItems() {
      var totalDelay = 0;
      if (this._itemShown) {
        var children = this.items;
        for (var i = 0; i < children.length; i++) {
          var delay = 25 * (children.length - i);
          totalDelay += delay;
          (0, _styler2.default)(children[i], {
            transform: 'scale(0)',
            transitionDelay: delay + 'ms'
          });
        }
        totalDelay += 50;

        this._itemShown = false;
        _util2.default.triggerElementEvent(this, 'close');
      }

      var deferred = _util2.default.defer();
      setTimeout(deferred.resolve, totalDelay);
      return deferred.promise;
    }

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]?????????????????????????????????`true`???[/ja]
     */

  }, {
    key: 'isOpen',


    /**
     * @method isOpen
     * @signature isOpen()
     * @description
     *   [en]Returns whether the menu is open or not.[/en]
     *   [ja][/ja]
     */
    value: function isOpen() {
      return this._itemShown;
    }

    /**
     * @method toggle
     * @signature toggle()
     * @description
     *   [en]Toggle visibility.[/en]
     *   [ja]Speed dial??????????????????????????????????????????[/ja]
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      return this.visible ? this.hide() : this.show();
    }

    /**
     * @method toggleItems
     * @signature toggleItems()
     * @description
     *   [en]Toggle item visibility.[/en]
     *   [ja]Speed dial??????????????????????????????????????????????????????[/ja]
     */

  }, {
    key: 'toggleItems',
    value: function toggleItems() {
      return this.isOpen() ? this.hideItems() : this.showItems();
    }
  }, {
    key: 'items',
    get: function get() {
      return _util2.default.arrayFrom(this.querySelectorAll('ons-speed-dial-item'));
    }
  }, {
    key: '_fab',
    get: function get() {
      return _util2.default.findChild(this, 'ons-fab');
    }
  }, {
    key: 'disabled',
    set: function set(value) {
      if (value) {
        this.hideItems();
      }
      _util2.default.arrayFrom(this.children).forEach(function (e) {
        _util2.default.match(e, '.fab') && _util2.default.toggleAttribute(e, 'disabled', value);
      });

      return _util2.default.toggleAttribute(this, 'disabled', value);
    },
    get: function get() {
      return this.hasAttribute('disabled');
    }

    /**
     * @property inline
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is inline or not.[/en]
     *   [ja]?????????????????????????????????`true`???[/ja]
     */

  }, {
    key: 'inline',
    get: function get() {
      return this.hasAttribute('inline');
    }

    /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]???????????????????????????`true`???[/ja]
     */

  }, {
    key: 'visible',
    get: function get() {
      return this._fab.visible && this.style.display !== 'none';
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['class', 'modifier', 'ripple', 'direction', 'position'];
    }
  }, {
    key: 'events',
    get: function get() {
      return ['open', 'close'];
    }
  }]);

  return SpeedDialElement;
}(_baseElement2.default);

exports.default = SpeedDialElement;


_elements2.default.SpeedDial = SpeedDialElement;
customElements.define('ons-speed-dial', SpeedDialElement);