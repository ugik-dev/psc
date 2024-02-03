(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Channel: function() { return /* binding */ Channel; },
/* harmony export */   Connector: function() { return /* binding */ Connector; },
/* harmony export */   EventFormatter: function() { return /* binding */ EventFormatter; },
/* harmony export */   "default": function() { return /* binding */ Echo; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/**
 * This class represents a basic channel.
 */
var Channel = /*#__PURE__*/function () {
  function Channel() {
    _classCallCheck(this, Channel);
  }

  _createClass(Channel, [{
    key: "listenForWhisper",
    value:
    /**
     * Listen for a whisper event on the channel instance.
     */
    function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "notification",
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    /**
     * Stop listening for a whisper event on the channel instance.
     */

  }, {
    key: "stopListeningForWhisper",
    value: function stopListeningForWhisper(event, callback) {
      return this.stopListening('.client-' + event, callback);
    }
  }]);

  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function EventFormatter(namespace) {
    _classCallCheck(this, EventFormatter);

    this.namespace = namespace; //
  }
  /**
   * Format the given event name.
   */


  _createClass(EventFormatter, [{
    key: "format",
    value: function format(event) {
      if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
        return event.substr(1);
      } else if (this.namespace) {
        event = this.namespace + '.' + event;
      }

      return event.replace(/\./g, '\\');
    }
    /**
     * Set the event namespace.
     */

  }, {
    key: "setNamespace",
    value: function setNamespace(value) {
      this.namespace = value;
    }
  }]);

  return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */

var PusherChannel = /*#__PURE__*/function (_Channel) {
  _inherits(PusherChannel, _Channel);

  var _super = _createSuper(PusherChannel);

  /**
   * Create a new class instance.
   */
  function PusherChannel(pusher, name, options) {
    var _this;

    _classCallCheck(this, PusherChannel);

    _this = _super.call(this);
    _this.name = name;
    _this.pusher = pusher;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Pusher channel.
   */


  _createClass(PusherChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.subscription = this.pusher.subscribe(this.name);
    }
    /**
     * Unsubscribe from a Pusher channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.pusher.unsubscribe(this.name);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      var _this2 = this;

      this.subscription.bind_global(function (event, data) {
        if (event.startsWith('pusher:')) {
          return;
        }

        var namespace = _this2.options.namespace.replace(/\./g, '\\');

        var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : '.' + event;
        callback(formattedEvent, data);
      });
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      if (callback) {
        this.subscription.unbind(this.eventFormatter.format(event), callback);
      } else {
        this.subscription.unbind(this.eventFormatter.format(event));
      }

      return this;
    }
    /**
     * Stop listening for all events on the channel instance.
     */

  }, {
    key: "stopListeningToAll",
    value: function stopListeningToAll(callback) {
      if (callback) {
        this.subscription.unbind_global(callback);
      } else {
        this.subscription.unbind_global();
      }

      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('pusher:subscription_succeeded', function () {
        callback();
      });
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      this.on('pusher:subscription_error', function (status) {
        callback(status);
      });
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      this.subscription.bind(event, callback);
      return this;
    }
  }]);

  return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */

var PusherPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherPrivateChannel);

  function PusherPrivateChannel() {
    _classCallCheck(this, PusherPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher private channel.
 */

var PusherEncryptedPrivateChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherEncryptedPrivateChannel, _PusherChannel);

  var _super = _createSuper(PusherEncryptedPrivateChannel);

  function PusherEncryptedPrivateChannel() {
    _classCallCheck(this, PusherEncryptedPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherEncryptedPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
  }]);

  return PusherEncryptedPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */

var PusherPresenceChannel = /*#__PURE__*/function (_PusherChannel) {
  _inherits(PusherPresenceChannel, _PusherChannel);

  var _super = _createSuper(PusherPresenceChannel);

  function PusherPresenceChannel() {
    _classCallCheck(this, PusherPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(PusherPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('pusher:subscription_succeeded', function (data) {
        callback(Object.keys(data.members).map(function (k) {
          return data.members[k];
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('pusher:member_added', function (member) {
        callback(member.info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('pusher:member_removed', function (member) {
        callback(member.info);
      });
      return this;
    }
  }]);

  return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */

var SocketIoChannel = /*#__PURE__*/function (_Channel) {
  _inherits(SocketIoChannel, _Channel);

  var _super = _createSuper(SocketIoChannel);

  /**
   * Create a new class instance.
   */
  function SocketIoChannel(socket, name, options) {
    var _this;

    _classCallCheck(this, SocketIoChannel);

    _this = _super.call(this);
    /**
     * The event callbacks applied to the socket.
     */

    _this.events = {};
    /**
     * User supplied callbacks for events on this channel.
     */

    _this.listeners = {};
    _this.name = name;
    _this.socket = socket;
    _this.options = options;
    _this.eventFormatter = new EventFormatter(_this.options.namespace);

    _this.subscribe();

    return _this;
  }
  /**
   * Subscribe to a Socket.io channel.
   */


  _createClass(SocketIoChannel, [{
    key: "subscribe",
    value: function subscribe() {
      this.socket.emit('subscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Unsubscribe from channel and ubind event callbacks.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.unbind();
      this.socket.emit('unsubscribe', {
        channel: this.name,
        auth: this.options.auth || {}
      });
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      this.on(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.unbindEvent(this.eventFormatter.format(event), callback);
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      this.on('connect', function (socket) {
        callback(socket);
      });
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind the channel's socket to an event and store the callback.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      var _this2 = this;

      this.listeners[event] = this.listeners[event] || [];

      if (!this.events[event]) {
        this.events[event] = function (channel, data) {
          if (_this2.name === channel && _this2.listeners[event]) {
            _this2.listeners[event].forEach(function (cb) {
              return cb(data);
            });
          }
        };

        this.socket.on(event, this.events[event]);
      }

      this.listeners[event].push(callback);
      return this;
    }
    /**
     * Unbind the channel's socket from all stored event callbacks.
     */

  }, {
    key: "unbind",
    value: function unbind() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (event) {
        _this3.unbindEvent(event);
      });
    }
    /**
     * Unbind the listeners for the given event.
     */

  }, {
    key: "unbindEvent",
    value: function unbindEvent(event, callback) {
      this.listeners[event] = this.listeners[event] || [];

      if (callback) {
        this.listeners[event] = this.listeners[event].filter(function (cb) {
          return cb !== callback;
        });
      }

      if (!callback || this.listeners[event].length === 0) {
        if (this.events[event]) {
          this.socket.removeListener(event, this.events[event]);
          delete this.events[event];
        }

        delete this.listeners[event];
      }
    }
  }]);

  return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io private channel.
 */

var SocketIoPrivateChannel = /*#__PURE__*/function (_SocketIoChannel) {
  _inherits(SocketIoPrivateChannel, _SocketIoChannel);

  var _super = _createSuper(SocketIoPrivateChannel);

  function SocketIoPrivateChannel() {
    _classCallCheck(this, SocketIoPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
  }]);

  return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */

var SocketIoPresenceChannel = /*#__PURE__*/function (_SocketIoPrivateChann) {
  _inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

  var _super = _createSuper(SocketIoPresenceChannel);

  function SocketIoPresenceChannel() {
    _classCallCheck(this, SocketIoPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(SocketIoPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      this.on('presence:subscribed', function (members) {
        callback(members.map(function (m) {
          return m.user_info;
        }));
      });
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      this.on('presence:joining', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      this.socket.emit('client event', {
        channel: this.name,
        event: "client-".concat(eventName),
        data: data
      });
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      this.on('presence:leaving', function (member) {
        return callback(member.user_info);
      });
      return this;
    }
  }]);

  return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */

var NullChannel = /*#__PURE__*/function (_Channel) {
  _inherits(NullChannel, _Channel);

  var _super = _createSuper(NullChannel);

  function NullChannel() {
    _classCallCheck(this, NullChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullChannel, [{
    key: "subscribe",
    value:
    /**
     * Subscribe to a channel.
     */
    function subscribe() {//
    }
    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {//
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: "listen",
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Listen for all events on the channel instance.
     */

  }, {
    key: "listenToAll",
    value: function listenToAll(callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime a subscription succeeds.
     */

  }, {
    key: "subscribed",
    value: function subscribed(callback) {
      return this;
    }
    /**
     * Register a callback to be called anytime an error occurs.
     */

  }, {
    key: "error",
    value: function error(callback) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: "on",
    value: function on(event, callback) {
      return this;
    }
  }]);

  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */

var NullPrivateChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPrivateChannel, _NullChannel);

  var _super = _createSuper(NullPrivateChannel);

  function NullPrivateChannel() {
    _classCallCheck(this, NullPrivateChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPrivateChannel, [{
    key: "whisper",
    value:
    /**
     * Send a whisper event to other clients in the channel.
     */
    function whisper(eventName, data) {
      return this;
    }
  }]);

  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */

var NullPresenceChannel = /*#__PURE__*/function (_NullChannel) {
  _inherits(NullPresenceChannel, _NullChannel);

  var _super = _createSuper(NullPresenceChannel);

  function NullPresenceChannel() {
    _classCallCheck(this, NullPresenceChannel);

    return _super.apply(this, arguments);
  }

  _createClass(NullPresenceChannel, [{
    key: "here",
    value:
    /**
     * Register a callback to be called anytime the member list changes.
     */
    function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: "joining",
    value: function joining(callback) {
      return this;
    }
    /**
     * Send a whisper event to other clients in the channel.
     */

  }, {
    key: "whisper",
    value: function whisper(eventName, data) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: "leaving",
    value: function leaving(callback) {
      return this;
    }
  }]);

  return NullPresenceChannel;
}(NullChannel);

var Connector = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Connector(options) {
    _classCallCheck(this, Connector);

    /**
     * Default connector options.
     */
    this._defaultOptions = {
      auth: {
        headers: {}
      },
      authEndpoint: '/broadcasting/auth',
      userAuthentication: {
        endpoint: '/broadcasting/user-auth',
        headers: {}
      },
      broadcaster: 'pusher',
      csrfToken: null,
      bearerToken: null,
      host: null,
      key: null,
      namespace: 'App.Events'
    };
    this.setOptions(options);
    this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */


  _createClass(Connector, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = _extends(this._defaultOptions, options);
      var token = this.csrfToken();

      if (token) {
        this.options.auth.headers['X-CSRF-TOKEN'] = token;
        this.options.userAuthentication.headers['X-CSRF-TOKEN'] = token;
      }

      token = this.options.bearerToken;

      if (token) {
        this.options.auth.headers['Authorization'] = 'Bearer ' + token;
        this.options.userAuthentication.headers['Authorization'] = 'Bearer ' + token;
      }

      return options;
    }
    /**
     * Extract the CSRF token from the page.
     */

  }, {
    key: "csrfToken",
    value: function csrfToken() {
      var selector;

      if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
        return window['Laravel'].csrfToken;
      } else if (this.options.csrfToken) {
        return this.options.csrfToken;
      } else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
        return selector.getAttribute('content');
      }

      return null;
    }
  }]);

  return Connector;
}();

/**
 * This class creates a connector to Pusher.
 */

var PusherConnector = /*#__PURE__*/function (_Connector) {
  _inherits(PusherConnector, _Connector);

  var _super = _createSuper(PusherConnector);

  function PusherConnector() {
    var _this;

    _classCallCheck(this, PusherConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Pusher connection.
   */


  _createClass(PusherConnector, [{
    key: "connect",
    value: function connect() {
      if (typeof this.options.client !== 'undefined') {
        this.pusher = this.options.client;
      } else if (this.options.Pusher) {
        this.pusher = new this.options.Pusher(this.options.key, this.options);
      } else {
        this.pusher = new Pusher(this.options.key, this.options);
      }
    }
    /**
     * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
     */

  }, {
    key: "signin",
    value: function signin() {
      this.pusher.signin();
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new PusherChannel(this.pusher, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      if (!this.channels['private-encrypted-' + name]) {
        this.channels['private-encrypted-' + name] = new PusherEncryptedPrivateChannel(this.pusher, 'private-encrypted-' + name, this.options);
      }

      return this.channels['private-encrypted-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this2 = this;

      var channels = [name, 'private-' + name, 'private-encrypted-' + name, 'presence-' + name];
      channels.forEach(function (name, index) {
        _this2.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.pusher.connection.socket_id;
    }
    /**
     * Disconnect Pusher connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.pusher.disconnect();
    }
  }]);

  return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */

var SocketIoConnector = /*#__PURE__*/function (_Connector) {
  _inherits(SocketIoConnector, _Connector);

  var _super = _createSuper(SocketIoConnector);

  function SocketIoConnector() {
    var _this;

    _classCallCheck(this, SocketIoConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh Socket.io connection.
   */


  _createClass(SocketIoConnector, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var io = this.getSocketIO();
      this.socket = io(this.options.host, this.options);
      this.socket.on('reconnect', function () {
        Object.values(_this2.channels).forEach(function (channel) {
          channel.subscribe();
        });
      });
      return this.socket;
    }
    /**
     * Get socket.io module from global scope or options.
     */

  }, {
    key: "getSocketIO",
    value: function getSocketIO() {
      if (typeof this.options.client !== 'undefined') {
        return this.options.client;
      }

      if (typeof io !== 'undefined') {
        return io;
      }

      throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return this.channel(name).listen(event, callback);
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      if (!this.channels[name]) {
        this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
      }

      return this.channels[name];
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      if (!this.channels['private-' + name]) {
        this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
      }

      return this.channels['private-' + name];
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      if (!this.channels['presence-' + name]) {
        this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
      }

      return this.channels['presence-' + name];
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {
      var _this3 = this;

      var channels = [name, 'private-' + name, 'presence-' + name];
      channels.forEach(function (name) {
        _this3.leaveChannel(name);
      });
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {
      if (this.channels[name]) {
        this.channels[name].unsubscribe();
        delete this.channels[name];
      }
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.socket.id;
    }
    /**
     * Disconnect Socketio connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.socket.disconnect();
    }
  }]);

  return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */

var NullConnector = /*#__PURE__*/function (_Connector) {
  _inherits(NullConnector, _Connector);

  var _super = _createSuper(NullConnector);

  function NullConnector() {
    var _this;

    _classCallCheck(this, NullConnector);

    _this = _super.apply(this, arguments);
    /**
     * All of the subscribed channel names.
     */

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  _createClass(NullConnector, [{
    key: "connect",
    value: function connect() {//
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: "channel",
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "privateChannel",
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivateChannel",
    value: function encryptedPrivateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "presenceChannel",
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(name) {//
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(name) {//
    }
    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {//
    }
  }]);

  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = /*#__PURE__*/function () {
  /**
   * Create a new class instance.
   */
  function Echo(options) {
    _classCallCheck(this, Echo);

    this.options = options;
    this.connect();

    if (!this.options.withoutInterceptors) {
      this.registerInterceptors();
    }
  }
  /**
   * Get a channel instance by name.
   */


  _createClass(Echo, [{
    key: "channel",
    value: function channel(_channel) {
      return this.connector.channel(_channel);
    }
    /**
     * Create a new connection.
     */

  }, {
    key: "connect",
    value: function connect() {
      if (this.options.broadcaster == 'pusher') {
        this.connector = new PusherConnector(this.options);
      } else if (this.options.broadcaster == 'socket.io') {
        this.connector = new SocketIoConnector(this.options);
      } else if (this.options.broadcaster == 'null') {
        this.connector = new NullConnector(this.options);
      } else if (typeof this.options.broadcaster == 'function') {
        this.connector = new this.options.broadcaster(this.options);
      }
    }
    /**
     * Disconnect from the Echo server.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.connector.disconnect();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: "join",
    value: function join(channel) {
      return this.connector.presenceChannel(channel);
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: "leave",
    value: function leave(channel) {
      this.connector.leave(channel);
    }
    /**
     * Leave the given channel.
     */

  }, {
    key: "leaveChannel",
    value: function leaveChannel(channel) {
      this.connector.leaveChannel(channel);
    }
    /**
     * Leave all channels.
     */

  }, {
    key: "leaveAllChannels",
    value: function leaveAllChannels() {
      for (var channel in this.connector.channels) {
        this.leaveChannel(channel);
      }
    }
    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: "listen",
    value: function listen(channel, event, callback) {
      return this.connector.listen(channel, event, callback);
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: "private",
    value: function _private(channel) {
      return this.connector.privateChannel(channel);
    }
    /**
     * Get a private encrypted channel instance by name.
     */

  }, {
    key: "encryptedPrivate",
    value: function encryptedPrivate(channel) {
      return this.connector.encryptedPrivateChannel(channel);
    }
    /**
     * Get the Socket ID for the connection.
     */

  }, {
    key: "socketId",
    value: function socketId() {
      return this.connector.socketId();
    }
    /**
     * Register 3rd party request interceptiors. These are used to automatically
     * send a connections socket id to a Laravel app with a X-Socket-Id header.
     */

  }, {
    key: "registerInterceptors",
    value: function registerInterceptors() {
      if (typeof Vue === 'function' && Vue.http) {
        this.registerVueRequestInterceptor();
      }

      if (typeof axios === 'function') {
        this.registerAxiosRequestInterceptor();
      }

      if (typeof jQuery === 'function') {
        this.registerjQueryAjaxSetup();
      }

      if ((typeof Turbo === "undefined" ? "undefined" : _typeof(Turbo)) === 'object') {
        this.registerTurboRequestInterceptor();
      }
    }
    /**
     * Register a Vue HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerVueRequestInterceptor",
    value: function registerVueRequestInterceptor() {
      var _this = this;

      Vue.http.interceptors.push(function (request, next) {
        if (_this.socketId()) {
          request.headers.set('X-Socket-ID', _this.socketId());
        }

        next();
      });
    }
    /**
     * Register an Axios HTTP interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerAxiosRequestInterceptor",
    value: function registerAxiosRequestInterceptor() {
      var _this2 = this;

      axios.interceptors.request.use(function (config) {
        if (_this2.socketId()) {
          config.headers['X-Socket-Id'] = _this2.socketId();
        }

        return config;
      });
    }
    /**
     * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
     */

  }, {
    key: "registerjQueryAjaxSetup",
    value: function registerjQueryAjaxSetup() {
      var _this3 = this;

      if (typeof jQuery.ajax != 'undefined') {
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (_this3.socketId()) {
            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
          }
        });
      }
    }
    /**
     * Register the Turbo Request interceptor to add the X-Socket-ID header.
     */

  }, {
    key: "registerTurboRequestInterceptor",
    value: function registerTurboRequestInterceptor() {
      var _this4 = this;

      document.addEventListener('turbo:before-fetch-request', function (event) {
        event.detail.fetchOptions.headers['X-Socket-Id'] = _this4.socketId();
      });
    }
  }]);

  return Echo;
}();




/***/ }),

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/***/ (function(module) {

/*!
 * Pusher JavaScript Library v8.4.0-rc2
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_673__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_673__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_673__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_673__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_673__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_673__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_673__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_673__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_673__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_673__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_673__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_673__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_673__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_673__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_673__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_673__(__nested_webpack_require_673__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package base64 implements Base64 encoding and decoding.
 */
// Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */
var Coder = /** @class */ (function () {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) { _paddingCharacter = "="; }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            out += this._encodeByte((c >>> 1 * 6) & 63);
            out += this._encodeByte((c >>> 0 * 6) & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            if (left === 2) {
                out += this._encodeByte((c >>> 1 * 6) & 63);
            }
            else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function (s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            out[op++] = (v1 << 4) | (v2 >>> 2);
            out[op++] = (v2 << 6) | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = (v1 << 4) | (v2 >>> 2);
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v2 << 6) | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);
        // c == 47 (c > 46 and c < 48)
        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}());
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */
var URLSafeCoder = /** @class */ (function (_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);
        // c == 95 (c > 94 and c < 96)
        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    return URLSafeCoder;
}(Coder));
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function (length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function (length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function (s) {
    return stdCoder.decodedLength(s);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package utf8 implements UTF-8 encoding and decoding.
 */
var INVALID_UTF16 = "utf8: invalid string";
var INVALID_UTF8 = "utf8: invalid source encoding";
/**
 * Encodes the given string into UTF-8 byte array.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encode(s) {
    // Calculate result length and allocate output array.
    // encodedLength() also validates string and throws errors,
    // so we don't need repeat validation here.
    var arr = new Uint8Array(encodedLength(s));
    var pos = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            arr[pos++] = c;
        }
        else if (c < 0x800) {
            arr[pos++] = 0xc0 | c >> 6;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else if (c < 0xd800) {
            arr[pos++] = 0xe0 | c >> 12;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else {
            i++; // get one more character
            c = (c & 0x3ff) << 10;
            c |= s.charCodeAt(i) & 0x3ff;
            c += 0x10000;
            arr[pos++] = 0xf0 | c >> 18;
            arr[pos++] = 0x80 | (c >> 12) & 0x3f;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
    }
    return arr;
}
exports.encode = encode;
/**
 * Returns the number of bytes required to encode the given string into UTF-8.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encodedLength(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            result += 1;
        }
        else if (c < 0x800) {
            result += 2;
        }
        else if (c < 0xd800) {
            result += 3;
        }
        else if (c <= 0xdfff) {
            if (i >= s.length - 1) {
                throw new Error(INVALID_UTF16);
            }
            i++; // "eat" next character
            result += 4;
        }
        else {
            throw new Error(INVALID_UTF16);
        }
    }
    return result;
}
exports.encodedLength = encodedLength;
/**
 * Decodes the given byte array from UTF-8 into a string.
 * Throws if encoding is invalid.
 */
function decode(arr) {
    var chars = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
            var min = void 0;
            if (b < 0xe0) {
                // Need 1 more byte.
                if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                if ((n1 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x1f) << 6 | (n1 & 0x3f);
                min = 0x80;
            }
            else if (b < 0xf0) {
                // Need 2 more bytes.
                if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | (n2 & 0x3f);
                min = 0x800;
            }
            else if (b < 0xf8) {
                // Need 3 more bytes.
                if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                var n3 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | (n3 & 0x3f);
                min = 0x10000;
            }
            else {
                throw new Error(INVALID_UTF8);
            }
            if (b < min || (b >= 0xd800 && b <= 0xdfff)) {
                throw new Error(INVALID_UTF8);
            }
            if (b >= 0x10000) {
                // Surrogate pair.
                if (b > 0x10ffff) {
                    throw new Error(INVALID_UTF8);
                }
                b -= 0x10000;
                chars.push(String.fromCharCode(0xd800 | (b >> 10)));
                b = 0xdc00 | (b & 0x3ff);
            }
        }
        chars.push(String.fromCharCode(b));
    }
    return chars.join("");
}
exports.decode = decode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_19905__) {

// required so we don't have to do require('pusher').default etc.
module.exports = __nested_webpack_require_19905__(3).default;


/***/ }),
/* 3 */
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_20109__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_20109__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
class ScriptReceiverFactory {
    constructor(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
    }
    create(callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function () {
            if (!called) {
                callback.apply(null, arguments);
                called = true;
            }
        };
        this[number] = callbackWrapper;
        return { number: number, id: id, name: name, callback: callbackWrapper };
    }
    remove(receiver) {
        delete this[receiver.number];
    }
}
var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

// CONCATENATED MODULE: ./src/core/defaults.ts
var Defaults = {
    VERSION: "8.4.0-rc2",
    PROTOCOL: 7,
    wsPort: 80,
    wssPort: 443,
    wsPath: '',
    httpHost: 'sockjs.pusher.com',
    httpPort: 80,
    httpsPort: 443,
    httpPath: '/pusher',
    stats_host: 'stats.pusher.com',
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax',
    activityTimeout: 120000,
    pongTimeout: 30000,
    unavailableTimeout: 10000,
    userAuthentication: {
        endpoint: '/pusher/user-auth',
        transport: 'ajax'
    },
    channelAuthorization: {
        endpoint: '/pusher/auth',
        transport: 'ajax'
    },
    cdn_http: "http://js.pusher.com",
    cdn_https: "https://js.pusher.com",
    dependency_suffix: ""
};
/* harmony default export */ var defaults = (Defaults);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts


class dependency_loader_DependencyLoader {
    constructor(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
    }
    load(name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
            self.loading[name].push(callback);
        }
        else {
            self.loading[name] = [callback];
            var request = runtime.createScriptRequest(self.getPath(name, options));
            var receiver = self.receivers.create(function (error) {
                self.receivers.remove(receiver);
                if (self.loading[name]) {
                    var callbacks = self.loading[name];
                    delete self.loading[name];
                    var successCallback = function (wasSuccessful) {
                        if (!wasSuccessful) {
                            request.cleanup();
                        }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                    }
                }
            });
            request.send(receiver);
        }
    }
    getRoot(options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if ((options && options.useTLS) || protocol === 'https:') {
            cdn = this.options.cdn_https;
        }
        else {
            cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
    }
    getPath(name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts



var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
var Dependencies = new dependency_loader_DependencyLoader({
    cdn_http: defaults.cdn_http,
    cdn_https: defaults.cdn_https,
    version: defaults.VERSION,
    suffix: defaults.dependency_suffix,
    receivers: DependenciesReceivers
});

// CONCATENATED MODULE: ./src/core/utils/url_store.ts
const urlStore = {
    baseUrl: 'https://pusher.com',
    urls: {
        authenticationEndpoint: {
            path: '/docs/channels/server_api/authenticating_users'
        },
        authorizationEndpoint: {
            path: '/docs/channels/server_api/authorizing-users/'
        },
        javascriptQuickStart: {
            path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
            path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
            fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
    }
};
const buildLogSuffix = function (key) {
    const urlPrefix = 'See:';
    const urlObj = urlStore.urls[key];
    if (!urlObj)
        return '';
    let url;
    if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
    }
    else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
    }
    if (!url)
        return '';
    return `${urlPrefix} ${url}`;
};
/* harmony default export */ var url_store = ({ buildLogSuffix });

// CONCATENATED MODULE: ./src/core/auth/options.ts
var AuthRequestType;
(function (AuthRequestType) {
    AuthRequestType["UserAuthentication"] = "user-authentication";
    AuthRequestType["ChannelAuthorization"] = "channel-authorization";
})(AuthRequestType || (AuthRequestType = {}));

// CONCATENATED MODULE: ./src/core/errors.ts
class BadEventName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class BadChannelName extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class RequestTimedOut extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportPriorityTooLow extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class TransportClosed extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedFeature extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedTransport extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class UnsupportedStrategy extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class HTTPAuthError extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts




const ajax = function (context, query, authOptions, authRequestType, callback) {
    const xhr = runtime.createXHR();
    xhr.open('POST', authOptions.endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var headerName in authOptions.headers) {
        xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
    }
    if (authOptions.headersProvider != null) {
        let dynamicHeaders = authOptions.headersProvider();
        for (var headerName in dynamicHeaders) {
            xhr.setRequestHeader(headerName, dynamicHeaders[headerName]);
        }
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data;
                let parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (e) {
                    callback(new HTTPAuthError(200, `JSON returned from ${authRequestType.toString()} endpoint was invalid, yet status code was 200. Data was: ${xhr.responseText}`), null);
                }
                if (parsed) {
                    callback(null, data);
                }
            }
            else {
                let suffix = '';
                switch (authRequestType) {
                    case AuthRequestType.UserAuthentication:
                        suffix = url_store.buildLogSuffix('authenticationEndpoint');
                        break;
                    case AuthRequestType.ChannelAuthorization:
                        suffix = `Clients must be authorized to join private or presence channels. ${url_store.buildLogSuffix('authorizationEndpoint')}`;
                        break;
                }
                callback(new HTTPAuthError(xhr.status, `Unable to retrieve auth string from ${authRequestType.toString()} endpoint - ` +
                    `received status: ${xhr.status} from ${authOptions.endpoint}. ${suffix}`), null);
            }
        }
    };
    xhr.send(query);
    return xhr;
};
/* harmony default export */ var xhr_auth = (ajax);

// CONCATENATED MODULE: ./src/core/base64.ts
function encode(s) {
    return btoa(utob(s));
}
var fromCharCode = String.fromCharCode;
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = {};
for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
    b64tab[b64chars.charAt(base64_i)] = base64_i;
}
var cb_utob = function (c) {
    var cc = c.charCodeAt(0);
    return cc < 0x80
        ? c
        : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                fromCharCode(0x80 | (cc & 0x3f));
};
var utob = function (u) {
    return u.replace(/[^\x00-\x7F]/g, cb_utob);
};
var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3];
    var ord = (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    var chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
    ];
    return chars.join('');
};
var btoa = window.btoa ||
    function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

// CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
class Timer {
    constructor(set, clear, delay, callback) {
        this.clear = clear;
        this.timer = set(() => {
            if (this.timer) {
                this.timer = callback(this.timer);
            }
        }, delay);
    }
    isRunning() {
        return this.timer !== null;
    }
    ensureAborted() {
        if (this.timer) {
            this.clear(this.timer);
            this.timer = null;
        }
    }
}
/* harmony default export */ var abstract_timer = (Timer);

// CONCATENATED MODULE: ./src/core/utils/timers/index.ts

function timers_clearTimeout(timer) {
    window.clearTimeout(timer);
}
function timers_clearInterval(timer) {
    window.clearInterval(timer);
}
class timers_OneOffTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setTimeout, timers_clearTimeout, delay, function (timer) {
            callback();
            return null;
        });
    }
}
class timers_PeriodicTimer extends abstract_timer {
    constructor(delay, callback) {
        super(setInterval, timers_clearInterval, delay, function (timer) {
            callback();
            return timer;
        });
    }
}

// CONCATENATED MODULE: ./src/core/util.ts

var Util = {
    now() {
        if (Date.now) {
            return Date.now();
        }
        else {
            return new Date().valueOf();
        }
    },
    defer(callback) {
        return new timers_OneOffTimer(0, callback);
    },
    method(name, ...args) {
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
            return object[name].apply(object, boundArguments.concat(arguments));
        };
    }
};
/* harmony default export */ var util = (Util);

// CONCATENATED MODULE: ./src/core/utils/collections.ts


function extend(target, ...sources) {
    for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
            if (extensions[property] &&
                extensions[property].constructor &&
                extensions[property].constructor === Object) {
                target[property] = extend(target[property] || {}, extensions[property]);
            }
            else {
                target[property] = extensions[property];
            }
        }
    }
    return target;
}
function stringify() {
    var m = ['Pusher'];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(arguments[i]);
        }
        else {
            m.push(safeJSONStringify(arguments[i]));
        }
    }
    return m.join(' : ');
}
function arrayIndexOf(array, item) {
    var nativeIndexOf = Array.prototype.indexOf;
    if (array === null) {
        return -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
function objectApply(object, f) {
    for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            f(object[key], key, object);
        }
    }
}
function keys(object) {
    var keys = [];
    objectApply(object, function (_, key) {
        keys.push(key);
    });
    return keys;
}
function values(object) {
    var values = [];
    objectApply(object, function (value) {
        values.push(value);
    });
    return values;
}
function apply(array, f, context) {
    for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
    }
}
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
    }
    return result;
}
function mapObject(object, f) {
    var result = {};
    objectApply(object, function (value, key) {
        result[key] = f(value);
    });
    return result;
}
function filter(array, test) {
    test =
        test ||
            function (value) {
                return !!value;
            };
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
            result.push(array[i]);
        }
    }
    return result;
}
function filterObject(object, test) {
    var result = {};
    objectApply(object, function (value, key) {
        if ((test && test(value, key, object, result)) || Boolean(value)) {
            result[key] = value;
        }
    });
    return result;
}
function flatten(object) {
    var result = [];
    objectApply(object, function (value, key) {
        result.push([key, value]);
    });
    return result;
}
function any(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function collections_all(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
function encodeParamsObject(data) {
    return mapObject(data, function (value) {
        if (typeof value === 'object') {
            value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
    });
}
function buildQueryString(data) {
    var params = filterObject(data, function (value) {
        return value !== undefined;
    });
    var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
    return query;
}
function decycleObject(object) {
    var objects = [], paths = [];
    return (function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }
                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return { $ref: paths[i] };
                    }
                }
                objects.push(value);
                paths.push(path);
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                }
                else {
                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    })(object, '$');
}
function safeJSONStringify(source) {
    try {
        return JSON.stringify(source);
    }
    catch (e) {
        return JSON.stringify(decycleObject(source));
    }
}

// CONCATENATED MODULE: ./src/core/logger.ts


class logger_Logger {
    constructor() {
        this.globalLog = (message) => {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };
    }
    debug(...args) {
        this.log(this.globalLog, args);
    }
    warn(...args) {
        this.log(this.globalLogWarn, args);
    }
    error(...args) {
        this.log(this.globalLogError, args);
    }
    globalLogWarn(message) {
        if (window.console && window.console.warn) {
            window.console.warn(message);
        }
        else {
            this.globalLog(message);
        }
    }
    globalLogError(message) {
        if (window.console && window.console.error) {
            window.console.error(message);
        }
        else {
            this.globalLogWarn(message);
        }
    }
    log(defaultLoggingFunction, ...args) {
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
            core_pusher.log(message);
        }
        else if (core_pusher.logToConsole) {
            const log = defaultLoggingFunction.bind(this);
            log(message);
        }
    }
}
/* harmony default export */ var logger = (new logger_Logger());

// CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

var jsonp = function (context, query, authOptions, authRequestType, callback) {
    if (authOptions.headers !== undefined ||
        authOptions.headersProvider != null) {
        logger.warn(`To send headers with the ${authRequestType.toString()} request, you must use AJAX, rather than JSONP.`);
    }
    var callbackName = context.nextAuthCallbackID.toString();
    context.nextAuthCallbackID++;
    var document = context.getDocument();
    var script = document.createElement('script');
    context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
    };
    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
    script.src =
        authOptions.endpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            query;
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};
/* harmony default export */ var jsonp_auth = (jsonp);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
class ScriptRequest {
    constructor(src) {
        this.src = src;
    }
    send(receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
            self.script.onerror = function () {
                receiver.callback(errorString);
            };
            self.script.onload = function () {
                receiver.callback(null);
            };
        }
        else {
            self.script.onreadystatechange = function () {
                if (self.script.readyState === 'loaded' ||
                    self.script.readyState === 'complete') {
                    receiver.callback(null);
                }
            };
        }
        if (self.script.async === undefined &&
            document.attachEvent &&
            /opera/i.test(navigator.userAgent)) {
            self.errorScript = document.createElement('script');
            self.errorScript.id = receiver.id + '_error';
            self.errorScript.text = receiver.name + "('" + errorString + "');";
            self.script.async = self.errorScript.async = false;
        }
        else {
            self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
            head.insertBefore(self.errorScript, self.script.nextSibling);
        }
    }
    cleanup() {
        if (this.script) {
            this.script.onload = this.script.onerror = null;
            this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
            this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts


class jsonp_request_JSONPRequest {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }
    send(receiver) {
        if (this.request) {
            return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
    }
    cleanup() {
        if (this.request) {
            this.request.cleanup();
        }
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts


var getAgent = function (sender, useTLS) {
    return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
            ScriptReceivers.remove(receiver);
            request.cleanup();
            if (result && result.host) {
                sender.host = result.host;
            }
            if (callback) {
                callback(error, result);
            }
        });
        request.send(receiver);
    };
};
var jsonp_timeline_jsonp = {
    name: 'jsonp',
    getAgent
};
/* harmony default export */ var jsonp_timeline = (jsonp_timeline_jsonp);

// CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

function getGenericURL(baseScheme, params, path) {
    var scheme = baseScheme + (params.useTLS ? 's' : '');
    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
    return scheme + '://' + host + path;
}
function getGenericPath(key, queryString) {
    var path = '/app/' + key;
    var query = '?protocol=' +
        defaults.PROTOCOL +
        '&client=js' +
        '&version=' +
        defaults.VERSION +
        (queryString ? '&' + queryString : '');
    return path + query;
}
var ws = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
    }
};
var http = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
    }
};
var sockjs = {
    getInitial: function (key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
    },
    getPath: function (key, params) {
        return getGenericPath(key);
    }
};

// CONCATENATED MODULE: ./src/core/events/callback_registry.ts

class callback_registry_CallbackRegistry {
    constructor() {
        this._callbacks = {};
    }
    get(name) {
        return this._callbacks[prefix(name)];
    }
    add(name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] =
            this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    }
    remove(name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
            this.removeCallback(names, callback, context);
        }
        else {
            this.removeAllCallbacks(names);
        }
    }
    removeCallback(names, callback, context) {
        apply(names, function (name) {
            this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
                return ((callback && callback !== binding.fn) ||
                    (context && context !== binding.context));
            });
            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }, this);
    }
    removeAllCallbacks(names) {
        apply(names, function (name) {
            delete this._callbacks[name];
        }, this);
    }
}
function prefix(name) {
    return '_' + name;
}

// CONCATENATED MODULE: ./src/core/events/dispatcher.ts


class dispatcher_Dispatcher {
    constructor(failThrough) {
        this.callbacks = new callback_registry_CallbackRegistry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
    }
    bind(eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_callbacks.push(callback);
        return this;
    }
    unbind(eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    }
    unbind_global(callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], c => c !== callback);
        return this;
    }
    unbind_all() {
        this.unbind();
        this.unbind_global();
        return this;
    }
    emit(eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
            args.push(data, metadata);
        }
        else if (data) {
            args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.apply(callbacks[i].context || window, args);
            }
        }
        else if (this.failThrough) {
            this.failThrough(eventName, data);
        }
        return this;
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport_connection.ts





class transport_connection_TransportConnection extends dispatcher_Dispatcher {
    constructor(hooks, name, priority, key, options) {
        super();
        this.initialize = runtime.transportConnectionInitializer;
        this.hooks = hooks;
        this.name = name;
        this.priority = priority;
        this.key = key;
        this.options = options;
        this.state = 'new';
        this.timeline = options.timeline;
        this.activityTimeout = options.activityTimeout;
        this.id = this.timeline.generateUniqueID();
    }
    handlesActivityChecks() {
        return Boolean(this.hooks.handlesActivityChecks);
    }
    supportsPing() {
        return Boolean(this.hooks.supportsPing);
    }
    connect() {
        if (this.socket || this.state !== 'initialized') {
            return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
            this.socket = this.hooks.getSocket(url, this.options);
        }
        catch (e) {
            util.defer(() => {
                this.onError(e);
                this.changeState('closed');
            });
            return false;
        }
        this.bindListeners();
        logger.debug('Connecting', { transport: this.name, url });
        this.changeState('connecting');
        return true;
    }
    close() {
        if (this.socket) {
            this.socket.close();
            return true;
        }
        else {
            return false;
        }
    }
    send(data) {
        if (this.state === 'open') {
            util.defer(() => {
                if (this.socket) {
                    this.socket.send(data);
                }
            });
            return true;
        }
        else {
            return false;
        }
    }
    ping() {
        if (this.state === 'open' && this.supportsPing()) {
            this.socket.ping();
        }
    }
    onOpen() {
        if (this.hooks.beforeOpen) {
            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
    }
    onError(error) {
        this.emit('error', { type: 'WebSocketError', error: error });
        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
    }
    onClose(closeEvent) {
        if (closeEvent) {
            this.changeState('closed', {
                code: closeEvent.code,
                reason: closeEvent.reason,
                wasClean: closeEvent.wasClean
            });
        }
        else {
            this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
    }
    onMessage(message) {
        this.emit('message', message);
    }
    onActivity() {
        this.emit('activity');
    }
    bindListeners() {
        this.socket.onopen = () => {
            this.onOpen();
        };
        this.socket.onerror = error => {
            this.onError(error);
        };
        this.socket.onclose = closeEvent => {
            this.onClose(closeEvent);
        };
        this.socket.onmessage = message => {
            this.onMessage(message);
        };
        if (this.supportsPing()) {
            this.socket.onactivity = () => {
                this.onActivity();
            };
        }
    }
    unbindListeners() {
        if (this.socket) {
            this.socket.onopen = undefined;
            this.socket.onerror = undefined;
            this.socket.onclose = undefined;
            this.socket.onmessage = undefined;
            if (this.supportsPing()) {
                this.socket.onactivity = undefined;
            }
        }
    }
    changeState(state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
            state: state,
            params: params
        }));
        this.emit(state, params);
    }
    buildTimelineMessage(message) {
        return extend({ cid: this.id }, message);
    }
}

// CONCATENATED MODULE: ./src/core/transports/transport.ts

class transport_Transport {
    constructor(hooks) {
        this.hooks = hooks;
    }
    isSupported(environment) {
        return this.hooks.isSupported(environment);
    }
    createConnection(name, priority, key, options) {
        return new transport_connection_TransportConnection(this.hooks, name, priority, key, options);
    }
}

// CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts




var WSTransport = new transport_Transport({
    urls: ws,
    handlesActivityChecks: false,
    supportsPing: false,
    isInitialized: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    isSupported: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    getSocket: function (url) {
        return runtime.createWebSocket(url);
    }
});
var httpConfiguration = {
    urls: http,
    handlesActivityChecks: false,
    supportsPing: true,
    isInitialized: function () {
        return true;
    }
};
var streamingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
    }
}, httpConfiguration);
var pollingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createPollingSocket(url);
    }
}, httpConfiguration);
var xhrConfiguration = {
    isSupported: function () {
        return runtime.isXHRSupported();
    }
};
var XHRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xhrConfiguration)));
var XHRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xhrConfiguration));
var Transports = {
    ws: WSTransport,
    xhr_streaming: XHRStreamingTransport,
    xhr_polling: XHRPollingTransport
};
/* harmony default export */ var transports = (Transports);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts






var SockJSTransport = new transport_Transport({
    file: 'sockjs',
    urls: sockjs,
    handlesActivityChecks: true,
    supportsPing: false,
    isSupported: function () {
        return true;
    },
    isInitialized: function () {
        return window.SockJS !== undefined;
    },
    getSocket: function (url, options) {
        return new window.SockJS(url, null, {
            js_path: Dependencies.getPath('sockjs', {
                useTLS: options.useTLS
            }),
            ignore_null_origin: options.ignoreNullOrigin
        });
    },
    beforeOpen: function (socket, path) {
        socket.send(JSON.stringify({
            path: path
        }));
    }
});
var xdrConfiguration = {
    isSupported: function (environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
    }
};
var XDRStreamingTransport = new transport_Transport((extend({}, streamingConfiguration, xdrConfiguration)));
var XDRPollingTransport = new transport_Transport(extend({}, pollingConfiguration, xdrConfiguration));
transports.xdr_streaming = XDRStreamingTransport;
transports.xdr_polling = XDRPollingTransport;
transports.sockjs = SockJSTransport;
/* harmony default export */ var transports_transports = (transports);

// CONCATENATED MODULE: ./src/runtimes/web/net_info.ts

class net_info_NetInfo extends dispatcher_Dispatcher {
    constructor() {
        super();
        var self = this;
        if (window.addEventListener !== undefined) {
            window.addEventListener('online', function () {
                self.emit('online');
            }, false);
            window.addEventListener('offline', function () {
                self.emit('offline');
            }, false);
        }
    }
    isOnline() {
        if (window.navigator.onLine === undefined) {
            return true;
        }
        else {
            return window.navigator.onLine;
        }
    }
}
var net_info_Network = new net_info_NetInfo();

// CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts


class assistant_to_the_transport_manager_AssistantToTheTransportManager {
    constructor(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
    }
    createConnection(name, priority, key, options) {
        options = extend({}, options, {
            activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function () {
            connection.unbind('open', onOpen);
            connection.bind('closed', onClosed);
            openTimestamp = util.now();
        };
        var onClosed = closeEvent => {
            connection.unbind('closed', onClosed);
            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                this.manager.reportDeath();
            }
            else if (!closeEvent.wasClean && openTimestamp) {
                var lifespan = util.now() - openTimestamp;
                if (lifespan < 2 * this.maxPingDelay) {
                    this.manager.reportDeath();
                    this.pingDelay = Math.max(lifespan / 2, this.minPingDelay);
                }
            }
        };
        connection.bind('open', onOpen);
        return connection;
    }
    isSupported(environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
    }
}

// CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
const Protocol = {
    decodeMessage: function (messageEvent) {
        try {
            var messageData = JSON.parse(messageEvent.data);
            var pusherEventData = messageData.data;
            if (typeof pusherEventData === 'string') {
                try {
                    pusherEventData = JSON.parse(messageData.data);
                }
                catch (e) { }
            }
            var pusherEvent = {
                event: messageData.event,
                channel: messageData.channel,
                data: pusherEventData
            };
            if (messageData.user_id) {
                pusherEvent.user_id = messageData.user_id;
            }
            return pusherEvent;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: messageEvent.data };
        }
    },
    encodeMessage: function (event) {
        return JSON.stringify(event);
    },
    processHandshake: function (messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
            if (!message.data.activity_timeout) {
                throw 'No activity timeout specified in handshake';
            }
            return {
                action: 'connected',
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === 'pusher:error') {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw 'Invalid handshake';
        }
    },
    getCloseAction: function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return 'backoff';
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return 'tls_only';
        }
        else if (closeEvent.code < 4100) {
            return 'refused';
        }
        else if (closeEvent.code < 4200) {
            return 'backoff';
        }
        else if (closeEvent.code < 4300) {
            return 'retry';
        }
        else {
            return 'refused';
        }
    },
    getCloseError: function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    }
};
/* harmony default export */ var protocol_protocol = (Protocol);

// CONCATENATED MODULE: ./src/core/connection/connection.ts




class connection_Connection extends dispatcher_Dispatcher {
    constructor(id, transport) {
        super();
        this.id = id;
        this.transport = transport;
        this.activityTimeout = transport.activityTimeout;
        this.bindListeners();
    }
    handlesActivityChecks() {
        return this.transport.handlesActivityChecks();
    }
    send(data) {
        return this.transport.send(data);
    }
    send_event(name, data, channel) {
        var event = { event: name, data: data };
        if (channel) {
            event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
    }
    ping() {
        if (this.transport.supportsPing()) {
            this.transport.ping();
        }
        else {
            this.send_event('pusher:ping', {});
        }
    }
    close() {
        this.transport.close();
    }
    bindListeners() {
        var listeners = {
            message: (messageEvent) => {
                var pusherEvent;
                try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                }
                catch (e) {
                    this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    });
                }
                if (pusherEvent !== undefined) {
                    logger.debug('Event recd', pusherEvent);
                    switch (pusherEvent.event) {
                        case 'pusher:error':
                            this.emit('error', {
                                type: 'PusherError',
                                data: pusherEvent.data
                            });
                            break;
                        case 'pusher:ping':
                            this.emit('ping');
                            break;
                        case 'pusher:pong':
                            this.emit('pong');
                            break;
                    }
                    this.emit('message', pusherEvent);
                }
            },
            activity: () => {
                this.emit('activity');
            },
            error: error => {
                this.emit('error', error);
            },
            closed: closeEvent => {
                unbindListeners();
                if (closeEvent && closeEvent.code) {
                    this.handleCloseEvent(closeEvent);
                }
                this.transport = null;
                this.emit('closed');
            }
        };
        var unbindListeners = () => {
            objectApply(listeners, (listener, event) => {
                this.transport.unbind(event, listener);
            });
        };
        objectApply(listeners, (listener, event) => {
            this.transport.bind(event, listener);
        });
    }
    handleCloseEvent(closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
            this.emit('error', error);
        }
        if (action) {
            this.emit(action, { action: action, error: error });
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/handshake/index.ts



class handshake_Handshake {
    constructor(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
    }
    close() {
        this.unbindListeners();
        this.transport.close();
    }
    bindListeners() {
        this.onMessage = m => {
            this.unbindListeners();
            var result;
            try {
                result = protocol_protocol.processHandshake(m);
            }
            catch (e) {
                this.finish('error', { error: e });
                this.transport.close();
                return;
            }
            if (result.action === 'connected') {
                this.finish('connected', {
                    connection: new connection_Connection(result.id, this.transport),
                    activityTimeout: result.activityTimeout
                });
            }
            else {
                this.finish(result.action, { error: result.error });
                this.transport.close();
            }
        };
        this.onClosed = closeEvent => {
            this.unbindListeners();
            var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
            var error = protocol_protocol.getCloseError(closeEvent);
            this.finish(action, { error: error });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
    }
    unbindListeners() {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
    }
    finish(action, params) {
        this.callback(extend({ transport: this.transport, action: action }, params));
    }
}

// CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

class timeline_sender_TimelineSender {
    constructor(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
    }
    send(useTLS, callback) {
        if (this.timeline.isEmpty()) {
            return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/channel.ts





class channel_Channel extends dispatcher_Dispatcher {
    constructor(name, pusher) {
        super(function (event, data) {
            logger.debug('No callbacks on ' + name + ' for ' + event);
        });
        this.name = name;
        this.pusher = pusher;
        this.subscribed = false;
        this.subscriptionPending = false;
        this.subscriptionCancelled = false;
    }
    authorize(socketId, callback) {
        return callback(null, { auth: '' });
    }
    trigger(event, data) {
        if (event.indexOf('client-') !== 0) {
            throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
            var suffix = url_store.buildLogSuffix('triggeringClientEvents');
            logger.warn(`Client event triggered before channel 'subscription_succeeded' event . ${suffix}`);
        }
        return this.pusher.send_event(event, data, this.name);
    }
    disconnect() {
        this.subscribed = false;
        this.subscriptionPending = false;
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
            this.handleSubscriptionSucceededEvent(event);
        }
        else if (eventName === 'pusher_internal:subscription_count') {
            this.handleSubscriptionCountEvent(event);
        }
        else if (eventName.indexOf('pusher_internal:') !== 0) {
            var metadata = {};
            this.emit(eventName, data, metadata);
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.emit('pusher:subscription_succeeded', event.data);
        }
    }
    handleSubscriptionCountEvent(event) {
        if (event.data.subscription_count) {
            this.subscriptionCount = event.data.subscription_count;
        }
        this.emit('pusher:subscription_count', event.data);
    }
    subscribe() {
        if (this.subscribed) {
            return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, (error, data) => {
            if (error) {
                this.subscriptionPending = false;
                logger.error(error.toString());
                this.emit('pusher:subscription_error', Object.assign({}, {
                    type: 'AuthError',
                    error: error.message
                }, error instanceof HTTPAuthError ? { status: error.status } : {}));
            }
            else {
                this.pusher.send_event('pusher:subscribe', {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: this.name
                });
            }
        });
    }
    unsubscribe() {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
            channel: this.name
        });
    }
    cancelSubscription() {
        this.subscriptionCancelled = true;
    }
    reinstateSubscription() {
        this.subscriptionCancelled = false;
    }
}

// CONCATENATED MODULE: ./src/core/channels/private_channel.ts

class private_channel_PrivateChannel extends channel_Channel {
    authorize(socketId, callback) {
        return this.pusher.config.channelAuthorizer({
            channelName: this.name,
            socketId: socketId
        }, callback);
    }
}

// CONCATENATED MODULE: ./src/core/channels/members.ts

class members_Members {
    constructor() {
        this.reset();
    }
    get(id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
            return {
                id: id,
                info: this.members[id]
            };
        }
        else {
            return null;
        }
    }
    each(callback) {
        objectApply(this.members, (member, id) => {
            callback(this.get(id));
        });
    }
    setMyID(id) {
        this.myID = id;
    }
    onSubscription(subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
    }
    addMember(memberData) {
        if (this.get(memberData.user_id) === null) {
            this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
    }
    removeMember(memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
            delete this.members[memberData.user_id];
            this.count--;
        }
        return member;
    }
    reset() {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
    }
}

// CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class presence_channel_PresenceChannel extends private_channel_PrivateChannel {
    constructor(name, pusher) {
        super(name, pusher);
        this.members = new members_Members();
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => __awaiter(this, void 0, void 0, function* () {
            if (!error) {
                authData = authData;
                if (authData.channel_data != null) {
                    var channelData = JSON.parse(authData.channel_data);
                    this.members.setMyID(channelData.user_id);
                }
                else {
                    yield this.pusher.user.signinDonePromise;
                    if (this.pusher.user.user_data != null) {
                        this.members.setMyID(this.pusher.user.user_data.id);
                    }
                    else {
                        let suffix = url_store.buildLogSuffix('authorizationEndpoint');
                        logger.error(`Invalid auth response for channel '${this.name}', ` +
                            `expected 'channel_data' field. ${suffix}, ` +
                            `or the user should be signed in.`);
                        callback('Invalid auth response');
                        return;
                    }
                }
            }
            callback(error, authData);
        }));
    }
    handleEvent(event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
            this.handleInternalEvent(event);
        }
        else {
            var data = event.data;
            var metadata = {};
            if (event.user_id) {
                metadata.user_id = event.user_id;
            }
            this.emit(eventName, data, metadata);
        }
    }
    handleInternalEvent(event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
            case 'pusher_internal:subscription_succeeded':
                this.handleSubscriptionSucceededEvent(event);
                break;
            case 'pusher_internal:subscription_count':
                this.handleSubscriptionCountEvent(event);
                break;
            case 'pusher_internal:member_added':
                var addedMember = this.members.addMember(data);
                this.emit('pusher:member_added', addedMember);
                break;
            case 'pusher_internal:member_removed':
                var removedMember = this.members.removeMember(data);
                if (removedMember) {
                    this.emit('pusher:member_removed', removedMember);
                }
                break;
        }
    }
    handleSubscriptionSucceededEvent(event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.members.onSubscription(event.data);
            this.emit('pusher:subscription_succeeded', this.members);
        }
    }
    disconnect() {
        this.members.reset();
        super.disconnect();
    }
}

// EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
var utf8 = __nested_webpack_require_20109__(1);

// EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
var base64 = __nested_webpack_require_20109__(0);

// CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts





class encrypted_channel_EncryptedChannel extends private_channel_PrivateChannel {
    constructor(name, pusher, nacl) {
        super(name, pusher);
        this.key = null;
        this.nacl = nacl;
    }
    authorize(socketId, callback) {
        super.authorize(socketId, (error, authData) => {
            if (error) {
                callback(error, authData);
                return;
            }
            let sharedSecret = authData['shared_secret'];
            if (!sharedSecret) {
                callback(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                return;
            }
            this.key = Object(base64["decode"])(sharedSecret);
            delete authData['shared_secret'];
            callback(null, authData);
        });
    }
    trigger(event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
    }
    handleEvent(event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 ||
            eventName.indexOf('pusher:') === 0) {
            super.handleEvent(event);
            return;
        }
        this.handleEncryptedEvent(eventName, data);
    }
    handleEncryptedEvent(event, data) {
        if (!this.key) {
            logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
            return;
        }
        if (!data.ciphertext || !data.nonce) {
            logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                data);
            return;
        }
        let cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
            logger.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${cipherText.length}`);
            return;
        }
        let nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
            logger.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${nonce.length}`);
            return;
        }
        let bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
            logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
            this.authorize(this.pusher.connection.socket_id, (error, authData) => {
                if (error) {
                    logger.error(`Failed to make a request to the authEndpoint: ${authData}. Unable to fetch new key, so dropping encrypted event`);
                    return;
                }
                bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
                if (bytes === null) {
                    logger.error(`Failed to decrypt event with new key. Dropping encrypted event`);
                    return;
                }
                this.emit(event, this.getDataToEmit(bytes));
                return;
            });
            return;
        }
        this.emit(event, this.getDataToEmit(bytes));
    }
    getDataToEmit(bytes) {
        let raw = Object(utf8["decode"])(bytes);
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return raw;
        }
    }
}

// CONCATENATED MODULE: ./src/core/connection/connection_manager.ts





class connection_manager_ConnectionManager extends dispatcher_Dispatcher {
    constructor(key, options) {
        super();
        this.state = 'initialized';
        this.connection = null;
        this.key = key;
        this.options = options;
        this.timeline = this.options.timeline;
        this.usingTLS = this.options.useTLS;
        this.errorCallbacks = this.buildErrorCallbacks();
        this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', () => {
            this.timeline.info({ netinfo: 'online' });
            if (this.state === 'connecting' || this.state === 'unavailable') {
                this.retryIn(0);
            }
        });
        Network.bind('offline', () => {
            this.timeline.info({ netinfo: 'offline' });
            if (this.connection) {
                this.sendActivityCheck();
            }
        });
        this.updateStrategy();
    }
    switchCluster(key) {
        this.key = key;
        this.updateStrategy();
        this.retryIn(0);
    }
    connect() {
        if (this.connection || this.runner) {
            return;
        }
        if (!this.strategy.isSupported()) {
            this.updateState('failed');
            return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
    }
    send(data) {
        if (this.connection) {
            return this.connection.send(data);
        }
        else {
            return false;
        }
    }
    send_event(name, data, channel) {
        if (this.connection) {
            return this.connection.send_event(name, data, channel);
        }
        else {
            return false;
        }
    }
    disconnect() {
        this.disconnectInternally();
        this.updateState('disconnected');
    }
    isUsingTLS() {
        return this.usingTLS;
    }
    startConnecting() {
        var callback = (error, handshake) => {
            if (error) {
                this.runner = this.strategy.connect(0, callback);
            }
            else {
                if (handshake.action === 'error') {
                    this.emit('error', {
                        type: 'HandshakeError',
                        error: handshake.error
                    });
                    this.timeline.error({ handshakeError: handshake.error });
                }
                else {
                    this.abortConnecting();
                    this.handshakeCallbacks[handshake.action](handshake);
                }
            }
        };
        this.runner = this.strategy.connect(0, callback);
    }
    abortConnecting() {
        if (this.runner) {
            this.runner.abort();
            this.runner = null;
        }
    }
    disconnectInternally() {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
            var connection = this.abandonConnection();
            connection.close();
        }
    }
    updateStrategy() {
        this.strategy = this.options.getStrategy({
            key: this.key,
            timeline: this.timeline,
            useTLS: this.usingTLS
        });
    }
    retryIn(delay) {
        this.timeline.info({ action: 'retry', delay: delay });
        if (delay > 0) {
            this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new timers_OneOffTimer(delay || 0, () => {
            this.disconnectInternally();
            this.connect();
        });
    }
    clearRetryTimer() {
        if (this.retryTimer) {
            this.retryTimer.ensureAborted();
            this.retryTimer = null;
        }
    }
    setUnavailableTimer() {
        this.unavailableTimer = new timers_OneOffTimer(this.options.unavailableTimeout, () => {
            this.updateState('unavailable');
        });
    }
    clearUnavailableTimer() {
        if (this.unavailableTimer) {
            this.unavailableTimer.ensureAborted();
        }
    }
    sendActivityCheck() {
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new timers_OneOffTimer(this.options.pongTimeout, () => {
            this.timeline.error({ pong_timed_out: this.options.pongTimeout });
            this.retryIn(0);
        });
    }
    resetActivityCheck() {
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
            this.activityTimer = new timers_OneOffTimer(this.activityTimeout, () => {
                this.sendActivityCheck();
            });
        }
    }
    stopActivityCheck() {
        if (this.activityTimer) {
            this.activityTimer.ensureAborted();
        }
    }
    buildConnectionCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            message: message => {
                this.resetActivityCheck();
                this.emit('message', message);
            },
            ping: () => {
                this.send_event('pusher:pong', {});
            },
            activity: () => {
                this.resetActivityCheck();
            },
            error: error => {
                this.emit('error', error);
            },
            closed: () => {
                this.abandonConnection();
                if (this.shouldRetry()) {
                    this.retryIn(1000);
                }
            }
        });
    }
    buildHandshakeCallbacks(errorCallbacks) {
        return extend({}, errorCallbacks, {
            connected: (handshake) => {
                this.activityTimeout = Math.min(this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                this.clearUnavailableTimer();
                this.setConnection(handshake.connection);
                this.socket_id = this.connection.id;
                this.updateState('connected', { socket_id: this.socket_id });
            }
        });
    }
    buildErrorCallbacks() {
        let withErrorEmitted = callback => {
            return (result) => {
                if (result.error) {
                    this.emit('error', { type: 'WebSocketError', error: result.error });
                }
                callback(result);
            };
        };
        return {
            tls_only: withErrorEmitted(() => {
                this.usingTLS = true;
                this.updateStrategy();
                this.retryIn(0);
            }),
            refused: withErrorEmitted(() => {
                this.disconnect();
            }),
            backoff: withErrorEmitted(() => {
                this.retryIn(1000);
            }),
            retry: withErrorEmitted(() => {
                this.retryIn(0);
            })
        };
    }
    setConnection(connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
            this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
    }
    abandonConnection() {
        if (!this.connection) {
            return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
            this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
    }
    updateState(newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
            var newStateDescription = newState;
            if (newStateDescription === 'connected') {
                newStateDescription += ' with new socket ID ' + data.socket_id;
            }
            logger.debug('State changed', previousState + ' -> ' + newStateDescription);
            this.timeline.info({ state: newState, params: data });
            this.emit('state_change', { previous: previousState, current: newState });
            this.emit(newState, data);
        }
    }
    shouldRetry() {
        return this.state === 'connecting' || this.state === 'connected';
    }
}

// CONCATENATED MODULE: ./src/core/channels/channels.ts




class channels_Channels {
    constructor() {
        this.channels = {};
    }
    add(name, pusher) {
        if (!this.channels[name]) {
            this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
    }
    all() {
        return values(this.channels);
    }
    find(name) {
        return this.channels[name];
    }
    remove(name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
    }
    disconnect() {
        objectApply(this.channels, function (channel) {
            channel.disconnect();
        });
    }
}
function createChannel(name, pusher) {
    if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
            return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        let errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        let suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(`${errMsg}. ${suffix}`);
    }
    else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
    }
    else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
    }
    else if (name.indexOf('#') === 0) {
        throw new BadChannelName('Cannot create a channel with name "' + name + '".');
    }
    else {
        return factory.createChannel(name, pusher);
    }
}

// CONCATENATED MODULE: ./src/core/utils/factory.ts









var Factory = {
    createChannels() {
        return new channels_Channels();
    },
    createConnectionManager(key, options) {
        return new connection_manager_ConnectionManager(key, options);
    },
    createChannel(name, pusher) {
        return new channel_Channel(name, pusher);
    },
    createPrivateChannel(name, pusher) {
        return new private_channel_PrivateChannel(name, pusher);
    },
    createPresenceChannel(name, pusher) {
        return new presence_channel_PresenceChannel(name, pusher);
    },
    createEncryptedChannel(name, pusher, nacl) {
        return new encrypted_channel_EncryptedChannel(name, pusher, nacl);
    },
    createTimelineSender(timeline, options) {
        return new timeline_sender_TimelineSender(timeline, options);
    },
    createHandshake(transport, callback) {
        return new handshake_Handshake(transport, callback);
    },
    createAssistantToTheTransportManager(manager, transport, options) {
        return new assistant_to_the_transport_manager_AssistantToTheTransportManager(manager, transport, options);
    }
};
/* harmony default export */ var factory = (Factory);

// CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

class transport_manager_TransportManager {
    constructor(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
    }
    getAssistant(transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
            minPingDelay: this.options.minPingDelay,
            maxPingDelay: this.options.maxPingDelay
        });
    }
    isAlive() {
        return this.livesLeft > 0;
    }
    reportDeath() {
        this.livesLeft -= 1;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts



class sequential_strategy_SequentialStrategy {
    constructor(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = (error, handshake) => {
            if (handshake) {
                callback(null, handshake);
            }
            else {
                current = current + 1;
                if (this.loop) {
                    current = current % strategies.length;
                }
                if (current < strategies.length) {
                    if (timeout) {
                        timeout = timeout * 2;
                        if (this.timeoutLimit) {
                            timeout = Math.min(timeout, this.timeoutLimit);
                        }
                    }
                    runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
                }
                else {
                    callback(true);
                }
            }
        };
        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
    tryStrategy(strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
            timer = new timers_OneOffTimer(options.timeout, function () {
                runner.abort();
                callback(true);
            });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
            if (error && timer && timer.isRunning() && !options.failFast) {
                return;
            }
            if (timer) {
                timer.ensureAborted();
            }
            callback(error, handshake);
        });
        return {
            abort: function () {
                if (timer) {
                    timer.ensureAborted();
                }
                runner.abort();
            },
            forceMinPriority: function (p) {
                runner.forceMinPriority(p);
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts


class best_connected_ever_strategy_BestConnectedEverStrategy {
    constructor(strategies) {
        this.strategies = strategies;
    }
    isSupported() {
        return any(this.strategies, util.method('isSupported'));
    }
    connect(minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
            return function (error, handshake) {
                runners[i].error = error;
                if (error) {
                    if (allRunnersFailed(runners)) {
                        callback(true);
                    }
                    return;
                }
                apply(runners, function (runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                });
                callback(null, handshake);
            };
        });
    }
}
function connect(strategies, minPriority, callbackBuilder) {
    var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
    });
    return {
        abort: function () {
            apply(runners, abortRunner);
        },
        forceMinPriority: function (p) {
            apply(runners, function (runner) {
                runner.forceMinPriority(p);
            });
        }
    };
}
function allRunnersFailed(runners) {
    return collections_all(runners, function (runner) {
        return Boolean(runner.error);
    });
}
function abortRunner(runner) {
    if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/websocket_prioritized_cached_strategy.ts




class websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy {
    constructor(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var cacheSkipCount = info && info.cacheSkipCount ? info.cacheSkipCount : 0;
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
            var transport = this.transports[info.transport];
            if (transport) {
                if (['ws', 'wss'].includes(info.transport) || cacheSkipCount > 3) {
                    this.timeline.info({
                        cached: true,
                        transport: info.transport,
                        latency: info.latency
                    });
                    strategies.push(new sequential_strategy_SequentialStrategy([transport], {
                        timeout: info.latency * 2 + 1000,
                        failFast: true
                    }));
                }
                else {
                    cacheSkipCount++;
                }
            }
        }
        var startTimestamp = util.now();
        var runner = strategies
            .pop()
            .connect(minPriority, function cb(error, handshake) {
            if (error) {
                flushTransportCache(usingTLS);
                if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                }
                else {
                    callback(error);
                }
            }
            else {
                storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp, cacheSkipCount);
                callback(null, handshake);
            }
        });
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}
function getTransportCacheKey(usingTLS) {
    return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
}
function fetchTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            var serializedCache = storage[getTransportCacheKey(usingTLS)];
            if (serializedCache) {
                return JSON.parse(serializedCache);
            }
        }
        catch (e) {
            flushTransportCache(usingTLS);
        }
    }
    return null;
}
function storeTransportCache(usingTLS, transport, latency, cacheSkipCount) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                timestamp: util.now(),
                transport: transport,
                latency: latency,
                cacheSkipCount: cacheSkipCount
            });
        }
        catch (e) {
        }
    }
}
function flushTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            delete storage[getTransportCacheKey(usingTLS)];
        }
        catch (e) {
        }
    }
}

// CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

class delayed_strategy_DelayedStrategy {
    constructor(strategy, { delay: number }) {
        this.strategy = strategy;
        this.options = { delay: number };
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new timers_OneOffTimer(this.options.delay, function () {
            runner = strategy.connect(minPriority, callback);
        });
        return {
            abort: function () {
                timer.ensureAborted();
                if (runner) {
                    runner.abort();
                }
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    }
}

// CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
class IfStrategy {
    constructor(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    isSupported() {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
    }
    connect(minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
    }
}

// CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
class FirstConnectedStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    isSupported() {
        return this.strategy.isSupported();
    }
    connect(minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
            if (handshake) {
                runner.abort();
            }
            callback(error, handshake);
        });
        return runner;
    }
}

// CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts







function testSupportsStrategy(strategy) {
    return function () {
        return strategy.isSupported();
    };
}
var getDefaultStrategy = function (config, baseOptions, defineTransport) {
    var definedTransports = {};
    function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
    }
    var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
    });
    var wss_options = Object.assign({}, ws_options, {
        useTLS: true
    });
    var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
    });
    var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
    };
    var ws_manager = new transport_manager_TransportManager({
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var streaming_manager = new transport_manager_TransportManager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
    var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
    var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
    var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
    var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
    var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
    var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
    var ws_loop = new sequential_strategy_SequentialStrategy([ws_transport], timeouts);
    var wss_loop = new sequential_strategy_SequentialStrategy([wss_transport], timeouts);
    var sockjs_loop = new sequential_strategy_SequentialStrategy([sockjs_transport], timeouts);
    var streaming_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
    ], timeouts);
    var polling_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
    ], timeouts);
    var http_loop = new sequential_strategy_SequentialStrategy([
        new IfStrategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy_BestConnectedEverStrategy([
            streaming_loop,
            new delayed_strategy_DelayedStrategy(polling_loop, { delay: 4000 })
        ]), polling_loop)
    ], timeouts);
    var http_fallback_loop = new IfStrategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
    var wsStrategy;
    if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 2000 })
        ]);
    }
    else {
        wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
            ws_loop,
            new delayed_strategy_DelayedStrategy(wss_loop, { delay: 2000 }),
            new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 5000 })
        ]);
    }
    return new websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy(new FirstConnectedStrategy(new IfStrategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
    });
};
/* harmony default export */ var default_strategy = (getDefaultStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

/* harmony default export */ var transport_connection_initializer = (function () {
    var self = this;
    self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
    }));
    if (self.hooks.isInitialized()) {
        self.changeState('initialized');
    }
    else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
            if (self.hooks.isInitialized()) {
                self.changeState('initialized');
                callback(true);
            }
            else {
                if (error) {
                    self.onError(error);
                }
                self.onClose();
                callback(false);
            }
        });
    }
    else {
        self.onClose();
    }
});

// CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

var http_xdomain_request_hooks = {
    getRequest: function (socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
            socket.emit('error', new RequestTimedOut());
            socket.close();
        };
        xdr.onerror = function (e) {
            socket.emit('error', e);
            socket.close();
        };
        xdr.onprogress = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
        };
        xdr.onload = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
            socket.emit('finished', 200);
            socket.close();
        };
        return xdr;
    },
    abortRequest: function (xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
    }
};
/* harmony default export */ var http_xdomain_request = (http_xdomain_request_hooks);

// CONCATENATED MODULE: ./src/core/http/http_request.ts


const MAX_BUFFER_LENGTH = 256 * 1024;
class http_request_HTTPRequest extends dispatcher_Dispatcher {
    constructor(hooks, method, url) {
        super();
        this.hooks = hooks;
        this.method = method;
        this.url = url;
    }
    start(payload) {
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = () => {
            this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
            this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
    }
    close() {
        if (this.unloader) {
            runtime.removeUnloadListener(this.unloader);
            this.unloader = null;
        }
        if (this.xhr) {
            this.hooks.abortRequest(this.xhr);
            this.xhr = null;
        }
    }
    onChunk(status, data) {
        while (true) {
            var chunk = this.advanceBuffer(data);
            if (chunk) {
                this.emit('chunk', { status: status, data: chunk });
            }
            else {
                break;
            }
        }
        if (this.isBufferTooLong(data)) {
            this.emit('buffer_too_long');
        }
    }
    advanceBuffer(buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
            this.position += endOfLinePosition + 1;
            return unreadData.slice(0, endOfLinePosition);
        }
        else {
            return null;
        }
    }
    isBufferTooLong(buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
    }
}

// CONCATENATED MODULE: ./src/core/http/state.ts
var State;
(function (State) {
    State[State["CONNECTING"] = 0] = "CONNECTING";
    State[State["OPEN"] = 1] = "OPEN";
    State[State["CLOSED"] = 3] = "CLOSED";
})(State || (State = {}));
/* harmony default export */ var state = (State);

// CONCATENATED MODULE: ./src/core/http/http_socket.ts



var autoIncrement = 1;
class http_socket_HTTPSocket {
    constructor(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
    }
    send(payload) {
        return this.sendRaw(JSON.stringify([payload]));
    }
    ping() {
        this.hooks.sendHeartbeat(this);
    }
    close(code, reason) {
        this.onClose(code, reason, true);
    }
    sendRaw(payload) {
        if (this.readyState === state.OPEN) {
            try {
                runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    reconnect() {
        this.closeStream();
        this.openStream();
    }
    onClose(code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
            this.onclose({
                code: code,
                reason: reason,
                wasClean: wasClean
            });
        }
    }
    onChunk(chunk) {
        if (chunk.status !== 200) {
            return;
        }
        if (this.readyState === state.OPEN) {
            this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
            case 'o':
                payload = JSON.parse(chunk.data.slice(1) || '{}');
                this.onOpen(payload);
                break;
            case 'a':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                }
                break;
            case 'm':
                payload = JSON.parse(chunk.data.slice(1) || 'null');
                this.onEvent(payload);
                break;
            case 'h':
                this.hooks.onHeartbeat(this);
                break;
            case 'c':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                this.onClose(payload[0], payload[1], true);
                break;
        }
    }
    onOpen(options) {
        if (this.readyState === state.CONNECTING) {
            if (options && options.hostname) {
                this.location.base = replaceHost(this.location.base, options.hostname);
            }
            this.readyState = state.OPEN;
            if (this.onopen) {
                this.onopen();
            }
        }
        else {
            this.onClose(1006, 'Server lost session', true);
        }
    }
    onEvent(event) {
        if (this.readyState === state.OPEN && this.onmessage) {
            this.onmessage({ data: event });
        }
    }
    onActivity() {
        if (this.onactivity) {
            this.onactivity();
        }
    }
    onError(error) {
        if (this.onerror) {
            this.onerror(error);
        }
    }
    openStream() {
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', chunk => {
            this.onChunk(chunk);
        });
        this.stream.bind('finished', status => {
            this.hooks.onFinished(this, status);
        });
        this.stream.bind('buffer_too_long', () => {
            this.reconnect();
        });
        try {
            this.stream.start();
        }
        catch (error) {
            util.defer(() => {
                this.onError(error);
                this.onClose(1006, 'Could not start streaming', false);
            });
        }
    }
    closeStream() {
        if (this.stream) {
            this.stream.unbind_all();
            this.stream.close();
            this.stream = null;
        }
    }
}
function getLocation(url) {
    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
    return {
        base: parts[1],
        queryString: parts[2]
    };
}
function getSendURL(url, session) {
    return url.base + '/' + session + '/xhr_send';
}
function getUniqueURL(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
}
function replaceHost(url, hostname) {
    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
    return urlParts[1] + hostname + urlParts[3];
}
function randomNumber(max) {
    return runtime.randomInt(max);
}
function randomString(length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
    }
    return result.join('');
}
/* harmony default export */ var http_socket = (http_socket_HTTPSocket);

// CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
var http_streaming_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
    },
    onHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
    }
};
/* harmony default export */ var http_streaming_socket = (http_streaming_socket_hooks);

// CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
var http_polling_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
    },
    onHeartbeat: function () {
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        if (status === 200) {
            socket.reconnect();
        }
        else {
            socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
    }
};
/* harmony default export */ var http_polling_socket = (http_polling_socket_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

var http_xhr_request_hooks = {
    getRequest: function (socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
            switch (xhr.readyState) {
                case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit('finished', xhr.status);
                    socket.close();
                    break;
            }
        };
        return xhr;
    },
    abortRequest: function (xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
    }
};
/* harmony default export */ var http_xhr_request = (http_xhr_request_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts





var HTTP = {
    createStreamingSocket(url) {
        return this.createSocket(http_streaming_socket, url);
    },
    createPollingSocket(url) {
        return this.createSocket(http_polling_socket, url);
    },
    createSocket(hooks, url) {
        return new http_socket(hooks, url);
    },
    createXHR(method, url) {
        return this.createRequest(http_xhr_request, method, url);
    },
    createRequest(hooks, method, url) {
        return new http_request_HTTPRequest(hooks, method, url);
    }
};
/* harmony default export */ var http_http = (HTTP);

// CONCATENATED MODULE: ./src/runtimes/web/http/http.ts


http_http.createXDR = function (method, url) {
    return this.createRequest(http_xdomain_request, method, url);
};
/* harmony default export */ var web_http_http = (http_http);

// CONCATENATED MODULE: ./src/runtimes/web/runtime.ts












var Runtime = {
    nextAuthCallbackID: 1,
    auth_callbacks: {},
    ScriptReceivers: ScriptReceivers,
    DependenciesReceivers: DependenciesReceivers,
    getDefaultStrategy: default_strategy,
    Transports: transports_transports,
    transportConnectionInitializer: transport_connection_initializer,
    HTTPFactory: web_http_http,
    TimelineTransport: jsonp_timeline,
    getXHRAPI() {
        return window.XMLHttpRequest;
    },
    getWebSocketAPI() {
        return window.WebSocket || window.MozWebSocket;
    },
    setup(PusherClass) {
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = () => {
            this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
            Dependencies.load('json2', {}, initializeOnDocumentBody);
        }
        else {
            initializeOnDocumentBody();
        }
    },
    getDocument() {
        return document;
    },
    getProtocol() {
        return this.getDocument().location.protocol;
    },
    getAuthorizers() {
        return { ajax: xhr_auth, jsonp: jsonp_auth };
    },
    onDocumentBody(callback) {
        if (document.body) {
            callback();
        }
        else {
            setTimeout(() => {
                this.onDocumentBody(callback);
            }, 0);
        }
    },
    createJSONPRequest(url, data) {
        return new jsonp_request_JSONPRequest(url, data);
    },
    createScriptRequest(src) {
        return new ScriptRequest(src);
    },
    getLocalStorage() {
        try {
            return window.localStorage;
        }
        catch (e) {
            return undefined;
        }
    },
    createXHR() {
        if (this.getXHRAPI()) {
            return this.createXMLHttpRequest();
        }
        else {
            return this.createMicrosoftXHR();
        }
    },
    createXMLHttpRequest() {
        var Constructor = this.getXHRAPI();
        return new Constructor();
    },
    createMicrosoftXHR() {
        return new ActiveXObject('Microsoft.XMLHTTP');
    },
    getNetwork() {
        return net_info_Network;
    },
    createWebSocket(url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
    },
    createSocketRequest(method, url) {
        if (this.isXHRSupported()) {
            return this.HTTPFactory.createXHR(method, url);
        }
        else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
            return this.HTTPFactory.createXDR(method, url);
        }
        else {
            throw 'Cross-origin HTTP requests are not supported';
        }
    },
    isXHRSupported() {
        var Constructor = this.getXHRAPI();
        return (Boolean(Constructor) && new Constructor().withCredentials !== undefined);
    },
    isXDRSupported(useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return (Boolean(window['XDomainRequest']) && documentProtocol === protocol);
    },
    addUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.addEventListener('unload', listener, false);
        }
        else if (window.attachEvent !== undefined) {
            window.attachEvent('onunload', listener);
        }
    },
    removeUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
            window.removeEventListener('unload', listener, false);
        }
        else if (window.detachEvent !== undefined) {
            window.detachEvent('onunload', listener);
        }
    },
    randomInt(max) {
        const random = function () {
            const crypto = window.crypto || window['msCrypto'];
            const random = crypto.getRandomValues(new Uint32Array(1))[0];
            return random / Math.pow(2, 32);
        };
        return Math.floor(random() * max);
    }
};
/* harmony default export */ var runtime = (Runtime);

// CONCATENATED MODULE: ./src/core/timeline/level.ts
var TimelineLevel;
(function (TimelineLevel) {
    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
})(TimelineLevel || (TimelineLevel = {}));
/* harmony default export */ var timeline_level = (TimelineLevel);

// CONCATENATED MODULE: ./src/core/timeline/timeline.ts



class timeline_Timeline {
    constructor(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
    }
    log(level, event) {
        if (level <= this.options.level) {
            this.events.push(extend({}, event, { timestamp: util.now() }));
            if (this.options.limit && this.events.length > this.options.limit) {
                this.events.shift();
            }
        }
    }
    error(event) {
        this.log(timeline_level.ERROR, event);
    }
    info(event) {
        this.log(timeline_level.INFO, event);
    }
    debug(event) {
        this.log(timeline_level.DEBUG, event);
    }
    isEmpty() {
        return this.events.length === 0;
    }
    send(sendfn, callback) {
        var data = extend({
            session: this.session,
            bundle: this.sent + 1,
            key: this.key,
            lib: 'js',
            version: this.options.version,
            cluster: this.options.cluster,
            features: this.options.features,
            timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, (error, result) => {
            if (!error) {
                this.sent++;
            }
            if (callback) {
                callback(error, result);
            }
        });
        return true;
    }
    generateUniqueID() {
        this.uniqueID++;
        return this.uniqueID;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts




class transport_strategy_TransportStrategy {
    constructor(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
    }
    isSupported() {
        return this.transport.isSupported({
            useTLS: this.options.useTLS
        });
    }
    connect(minPriority, callback) {
        if (!this.isSupported()) {
            return failAttempt(new UnsupportedStrategy(), callback);
        }
        else if (this.priority < minPriority) {
            return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function () {
            transport.unbind('initialized', onInitialized);
            transport.connect();
        };
        var onOpen = function () {
            handshake = factory.createHandshake(transport, function (result) {
                connected = true;
                unbindListeners();
                callback(null, result);
            });
        };
        var onError = function (error) {
            unbindListeners();
            callback(error);
        };
        var onClosed = function () {
            unbindListeners();
            var serializedTransport;
            serializedTransport = safeJSONStringify(transport);
            callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function () {
            transport.unbind('initialized', onInitialized);
            transport.unbind('open', onOpen);
            transport.unbind('error', onError);
            transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
            abort: () => {
                if (connected) {
                    return;
                }
                unbindListeners();
                if (handshake) {
                    handshake.close();
                }
                else {
                    transport.close();
                }
            },
            forceMinPriority: p => {
                if (connected) {
                    return;
                }
                if (this.priority < p) {
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                }
            }
        };
    }
}
function failAttempt(error, callback) {
    util.defer(function () {
        callback(error);
    });
    return {
        abort: function () { },
        forceMinPriority: function () { }
    };
}

// CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts





const { Transports: strategy_builder_Transports } = runtime;
var strategy_builder_defineTransport = function (config, name, type, priority, options, manager) {
    var transportClass = strategy_builder_Transports[type];
    if (!transportClass) {
        throw new UnsupportedTransport(type);
    }
    var enabled = (!config.enabledTransports ||
        arrayIndexOf(config.enabledTransports, name) !== -1) &&
        (!config.disabledTransports ||
            arrayIndexOf(config.disabledTransports, name) === -1);
    var transport;
    if (enabled) {
        options = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options);
        transport = new transport_strategy_TransportStrategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
    }
    else {
        transport = strategy_builder_UnsupportedStrategy;
    }
    return transport;
};
var strategy_builder_UnsupportedStrategy = {
    isSupported: function () {
        return false;
    },
    connect: function (_, callback) {
        var deferred = util.defer(function () {
            callback(new UnsupportedStrategy());
        });
        return {
            abort: function () {
                deferred.ensureAborted();
            },
            forceMinPriority: function () { }
        };
    }
};

// CONCATENATED MODULE: ./src/core/options.ts

function validateOptions(options) {
    if (options == null) {
        throw 'You must pass an options object';
    }
    if (options.cluster == null) {
        throw 'Options object must provide a cluster';
    }
    if ('disableStats' in options) {
        logger.warn('The disableStats option is deprecated in favor of enableStats');
    }
}

// CONCATENATED MODULE: ./src/core/auth/user_authenticator.ts


const composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const UserAuthenticator = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
    };
};
/* harmony default export */ var user_authenticator = (UserAuthenticator);

// CONCATENATED MODULE: ./src/core/auth/channel_authorizer.ts


const channel_authorizer_composeChannelQuery = (params, authOptions) => {
    var query = 'socket_id=' + encodeURIComponent(params.socketId);
    query += '&channel_name=' + encodeURIComponent(params.channelName);
    for (var key in authOptions.params) {
        query +=
            '&' +
                encodeURIComponent(key) +
                '=' +
                encodeURIComponent(authOptions.params[key]);
    }
    if (authOptions.paramsProvider != null) {
        let dynamicParams = authOptions.paramsProvider();
        for (var key in dynamicParams) {
            query +=
                '&' +
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(dynamicParams[key]);
        }
    }
    return query;
};
const ChannelAuthorizer = (authOptions) => {
    if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw `'${authOptions.transport}' is not a recognized auth transport`;
    }
    return (params, callback) => {
        const query = channel_authorizer_composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
    };
};
/* harmony default export */ var channel_authorizer = (ChannelAuthorizer);

// CONCATENATED MODULE: ./src/core/auth/deprecated_channel_authorizer.ts
const ChannelAuthorizerProxy = (pusher, authOptions, channelAuthorizerGenerator) => {
    const deprecatedAuthorizerOptions = {
        authTransport: authOptions.transport,
        authEndpoint: authOptions.endpoint,
        auth: {
            params: authOptions.params,
            headers: authOptions.headers
        }
    };
    return (params, callback) => {
        const channel = pusher.channel(params.channelName);
        const channelAuthorizer = channelAuthorizerGenerator(channel, deprecatedAuthorizerOptions);
        channelAuthorizer.authorize(params.socketId, callback);
    };
};

// CONCATENATED MODULE: ./src/core/config.ts





function getConfig(opts, pusher) {
    let config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        cluster: opts.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts),
        userAuthenticator: buildUserAuthenticator(opts),
        channelAuthorizer: buildChannelAuthorizer(opts, pusher)
    };
    if ('disabledTransports' in opts)
        config.disabledTransports = opts.disabledTransports;
    if ('enabledTransports' in opts)
        config.enabledTransports = opts.enabledTransports;
    if ('ignoreNullOrigin' in opts)
        config.ignoreNullOrigin = opts.ignoreNullOrigin;
    if ('timelineParams' in opts)
        config.timelineParams = opts.timelineParams;
    if ('nacl' in opts) {
        config.nacl = opts.nacl;
    }
    return config;
}
function getHttpHost(opts) {
    if (opts.httpHost) {
        return opts.httpHost;
    }
    if (opts.cluster) {
        return `sockjs-${opts.cluster}.pusher.com`;
    }
    return defaults.httpHost;
}
function getWebsocketHost(opts) {
    if (opts.wsHost) {
        return opts.wsHost;
    }
    return getWebsocketHostFromCluster(opts.cluster);
}
function getWebsocketHostFromCluster(cluster) {
    return `ws-${cluster}.pusher.com`;
}
function shouldUseTLS(opts) {
    if (runtime.getProtocol() === 'https:') {
        return true;
    }
    else if (opts.forceTLS === false) {
        return false;
    }
    return true;
}
function getEnableStatsConfig(opts) {
    if ('enableStats' in opts) {
        return opts.enableStats;
    }
    if ('disableStats' in opts) {
        return !opts.disableStats;
    }
    return false;
}
const hasCustomHandler = (auth) => {
    return 'customHandler' in auth && auth['customHandler'] != null;
};
function buildUserAuthenticator(opts) {
    const userAuthentication = Object.assign(Object.assign({}, defaults.userAuthentication), opts.userAuthentication);
    if (hasCustomHandler(userAuthentication)) {
        return userAuthentication['customHandler'];
    }
    return user_authenticator(userAuthentication);
}
function buildChannelAuth(opts, pusher) {
    let channelAuthorization;
    if ('channelAuthorization' in opts) {
        channelAuthorization = Object.assign(Object.assign({}, defaults.channelAuthorization), opts.channelAuthorization);
    }
    else {
        channelAuthorization = {
            transport: opts.authTransport || defaults.authTransport,
            endpoint: opts.authEndpoint || defaults.authEndpoint
        };
        if ('auth' in opts) {
            if ('params' in opts.auth)
                channelAuthorization.params = opts.auth.params;
            if ('headers' in opts.auth)
                channelAuthorization.headers = opts.auth.headers;
        }
        if ('authorizer' in opts) {
            return {
                customHandler: ChannelAuthorizerProxy(pusher, channelAuthorization, opts.authorizer)
            };
        }
    }
    return channelAuthorization;
}
function buildChannelAuthorizer(opts, pusher) {
    const channelAuthorization = buildChannelAuth(opts, pusher);
    if (hasCustomHandler(channelAuthorization)) {
        return channelAuthorization['customHandler'];
    }
    return channel_authorizer(channelAuthorization);
}

// CONCATENATED MODULE: ./src/core/watchlist.ts


class watchlist_WatchlistFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug(`No callbacks on watchlist events for ${eventName}`);
        });
        this.pusher = pusher;
        this.bindWatchlistInternalEvent();
    }
    handleEvent(pusherEvent) {
        pusherEvent.data.events.forEach(watchlistEvent => {
            this.emit(watchlistEvent.name, watchlistEvent);
        });
    }
    bindWatchlistInternalEvent() {
        this.pusher.connection.bind('message', pusherEvent => {
            var eventName = pusherEvent.event;
            if (eventName === 'pusher_internal:watchlist_events') {
                this.handleEvent(pusherEvent);
            }
        });
    }
}

// CONCATENATED MODULE: ./src/core/utils/flat_promise.ts
function flatPromise() {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}
/* harmony default export */ var flat_promise = (flatPromise);

// CONCATENATED MODULE: ./src/core/user.ts





class user_UserFacade extends dispatcher_Dispatcher {
    constructor(pusher) {
        super(function (eventName, data) {
            logger.debug('No callbacks on user for ' + eventName);
        });
        this.signin_requested = false;
        this.user_data = null;
        this.serverToUserChannel = null;
        this.signinDonePromise = null;
        this._signinDoneResolve = null;
        this._onAuthorize = (err, authData) => {
            if (err) {
                logger.warn(`Error during signin: ${err}`);
                this._cleanup();
                return;
            }
            this.pusher.send_event('pusher:signin', {
                auth: authData.auth,
                user_data: authData.user_data
            });
        };
        this.pusher = pusher;
        this.pusher.connection.bind('state_change', ({ previous, current }) => {
            if (previous !== 'connected' && current === 'connected') {
                this._signin();
            }
            if (previous === 'connected' && current !== 'connected') {
                this._cleanup();
                this._newSigninPromiseIfNeeded();
            }
        });
        this.watchlist = new watchlist_WatchlistFacade(pusher);
        this.pusher.connection.bind('message', event => {
            var eventName = event.event;
            if (eventName === 'pusher:signin_success') {
                this._onSigninSuccess(event.data);
            }
            if (this.serverToUserChannel &&
                this.serverToUserChannel.name === event.channel) {
                this.serverToUserChannel.handleEvent(event);
            }
        });
    }
    signin() {
        if (this.signin_requested) {
            return;
        }
        this.signin_requested = true;
        this._signin();
    }
    _signin() {
        if (!this.signin_requested) {
            return;
        }
        this._newSigninPromiseIfNeeded();
        if (this.pusher.connection.state !== 'connected') {
            return;
        }
        this.pusher.config.userAuthenticator({
            socketId: this.pusher.connection.socket_id
        }, this._onAuthorize);
    }
    _onSigninSuccess(data) {
        try {
            this.user_data = JSON.parse(data.user_data);
        }
        catch (e) {
            logger.error(`Failed parsing user data after signin: ${data.user_data}`);
            this._cleanup();
            return;
        }
        if (typeof this.user_data.id !== 'string' || this.user_data.id === '') {
            logger.error(`user_data doesn't contain an id. user_data: ${this.user_data}`);
            this._cleanup();
            return;
        }
        this._signinDoneResolve();
        this._subscribeChannels();
    }
    _subscribeChannels() {
        const ensure_subscribed = channel => {
            if (channel.subscriptionPending && channel.subscriptionCancelled) {
                channel.reinstateSubscription();
            }
            else if (!channel.subscriptionPending &&
                this.pusher.connection.state === 'connected') {
                channel.subscribe();
            }
        };
        this.serverToUserChannel = new channel_Channel(`#server-to-user-${this.user_data.id}`, this.pusher);
        this.serverToUserChannel.bind_global((eventName, data) => {
            if (eventName.indexOf('pusher_internal:') === 0 ||
                eventName.indexOf('pusher:') === 0) {
                return;
            }
            this.emit(eventName, data);
        });
        ensure_subscribed(this.serverToUserChannel);
    }
    _cleanup() {
        this.user_data = null;
        if (this.serverToUserChannel) {
            this.serverToUserChannel.unbind_all();
            this.serverToUserChannel.disconnect();
            this.serverToUserChannel = null;
        }
        if (this.signin_requested) {
            this._signinDoneResolve();
        }
    }
    _newSigninPromiseIfNeeded() {
        if (!this.signin_requested) {
            return;
        }
        if (this.signinDonePromise && !this.signinDonePromise.done) {
            return;
        }
        const { promise, resolve, reject: _ } = flat_promise();
        promise.done = false;
        const setDone = () => {
            promise.done = true;
        };
        promise.then(setDone).catch(setDone);
        this.signinDonePromise = promise;
        this._signinDoneResolve = resolve;
    }
}

// CONCATENATED MODULE: ./src/core/pusher.ts













class pusher_Pusher {
    static ready() {
        pusher_Pusher.isReady = true;
        for (var i = 0, l = pusher_Pusher.instances.length; i < l; i++) {
            pusher_Pusher.instances[i].connect();
        }
    }
    static getClientFeatures() {
        return keys(filterObject({ ws: runtime.Transports.ws }, function (t) {
            return t.isSupported({});
        }));
    }
    constructor(app_key, options) {
        checkAppKey(app_key);
        validateOptions(options);
        this.key = app_key;
        this.options = options;
        this.config = getConfig(this.options, this);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher_Dispatcher();
        this.sessionID = runtime.randomInt(1000000000);
        this.timeline = new timeline_Timeline(this.key, this.sessionID, {
            cluster: this.config.cluster,
            features: pusher_Pusher.getClientFeatures(),
            params: this.config.timelineParams || {},
            limit: 50,
            level: timeline_level.INFO,
            version: defaults.VERSION
        });
        if (this.config.enableStats) {
            this.timelineSender = factory.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: '/timeline/v2/' + runtime.TimelineTransport.name
            });
        }
        var getStrategy = (options) => {
            return runtime.getDefaultStrategy(this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
            getStrategy: getStrategy,
            timeline: this.timeline,
            activityTimeout: this.config.activityTimeout,
            pongTimeout: this.config.pongTimeout,
            unavailableTimeout: this.config.unavailableTimeout,
            useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', () => {
            this.subscribeAll();
            if (this.timelineSender) {
                this.timelineSender.send(this.connection.isUsingTLS());
            }
        });
        this.connection.bind('message', event => {
            var eventName = event.event;
            var internal = eventName.indexOf('pusher_internal:') === 0;
            if (event.channel) {
                var channel = this.channel(event.channel);
                if (channel) {
                    channel.handleEvent(event);
                }
            }
            if (!internal) {
                this.global_emitter.emit(event.event, event.data);
            }
        });
        this.connection.bind('connecting', () => {
            this.channels.disconnect();
        });
        this.connection.bind('disconnected', () => {
            this.channels.disconnect();
        });
        this.connection.bind('error', err => {
            logger.warn(err);
        });
        pusher_Pusher.instances.push(this);
        this.timeline.info({ instances: pusher_Pusher.instances.length });
        this.user = new user_UserFacade(this);
        if (pusher_Pusher.isReady) {
            this.connect();
        }
    }
    switchCluster(options) {
        const { appKey, cluster } = options;
        this.key = appKey;
        this.options = Object.assign(Object.assign({}, this.options), { cluster });
        this.config = getConfig(this.options, this);
        this.connection.switchCluster(this.key);
    }
    channel(name) {
        return this.channels.find(name);
    }
    allChannels() {
        return this.channels.all();
    }
    connect() {
        this.connection.connect();
        if (this.timelineSender) {
            if (!this.timelineSenderTimer) {
                var usingTLS = this.connection.isUsingTLS();
                var timelineSender = this.timelineSender;
                this.timelineSenderTimer = new timers_PeriodicTimer(60000, function () {
                    timelineSender.send(usingTLS);
                });
            }
        }
    }
    disconnect() {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
            this.timelineSenderTimer.ensureAborted();
            this.timelineSenderTimer = null;
        }
    }
    bind(event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
    }
    unbind(event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
    }
    bind_global(callback) {
        this.global_emitter.bind_global(callback);
        return this;
    }
    unbind_global(callback) {
        this.global_emitter.unbind_global(callback);
        return this;
    }
    unbind_all(callback) {
        this.global_emitter.unbind_all();
        return this;
    }
    subscribeAll() {
        var channelName;
        for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
                this.subscribe(channelName);
            }
        }
    }
    subscribe(channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
        }
        else if (!channel.subscriptionPending &&
            this.connection.state === 'connected') {
            channel.subscribe();
        }
        return channel;
    }
    unsubscribe(channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
            channel.cancelSubscription();
        }
        else {
            channel = this.channels.remove(channel_name);
            if (channel && channel.subscribed) {
                channel.unsubscribe();
            }
        }
    }
    send_event(event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
    }
    shouldUseTLS() {
        return this.config.useTLS;
    }
    signin() {
        this.user.signin();
    }
}
pusher_Pusher.instances = [];
pusher_Pusher.isReady = false;
pusher_Pusher.logToConsole = false;
pusher_Pusher.Runtime = runtime;
pusher_Pusher.ScriptReceivers = runtime.ScriptReceivers;
pusher_Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
pusher_Pusher.auth_callbacks = runtime.auth_callbacks;
/* harmony default export */ var core_pusher = __nested_webpack_exports__["default"] = (pusher_Pusher);
function checkAppKey(key) {
    if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
    }
}
runtime.setup(pusher_Pusher);


/***/ })
/******/ ]);
});
//# sourceMappingURL=pusher.js.map

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "./node_modules/datatables.net-dt/js/dataTables.dataTables.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/datatables.net-dt/js/dataTables.dataTables.mjs ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/*! DataTables styling integration
 * ©2018 SpryMedia Ltd - datatables.net/license
 */




// Allow reassignment of the $ variable
let $ = jquery__WEBPACK_IMPORTED_MODULE_0__;




/* harmony default export */ __webpack_exports__["default"] = (datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/datatables.net/js/jquery.dataTables.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/datatables.net/js/jquery.dataTables.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/*! DataTables 1.13.7
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */



// DataTables code uses $ internally, but we want to be able to
// reassign $ with the `use` method, so it is a regular var.
var $ = jquery__WEBPACK_IMPORTED_MODULE_0__;


var DataTable = function ( selector, options )
{
	// Check if called with a window or jQuery object for DOM less applications
	// This is for backwards compatibility
	if (DataTable.factory(selector, options)) {
		return DataTable;
	}

	// When creating with `new`, create a new DataTable, returning the API instance
	if (this instanceof DataTable) {
		return $(selector).DataTable(options);
	}
	else {
		// Argument switching
		options = selector;
	}

	/**
	 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
	 * return the resulting jQuery object.
	 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
	 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
	 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
	 *    criterion ("applied") or all TR elements (i.e. no filter).
	 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
	 *    Can be either 'current', whereby the current sorting of the table is used, or
	 *    'original' whereby the original order the data was read into the table is used.
	 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
	 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
	 *    'current' and filter is 'applied', regardless of what they might be given as.
	 *  @returns {object} jQuery object, filtered by the given selector.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Highlight every second row
	 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
	 *    } );
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Filter to rows with 'Webkit' in them, add a background colour and then
	 *      // remove the filter, thus highlighting the 'Webkit' rows only.
	 *      oTable.fnFilter('Webkit');
	 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
	 *      oTable.fnFilter('');
	 *    } );
	 */
	this.$ = function ( sSelector, oOpts )
	{
		return this.api(true).$( sSelector, oOpts );
	};
	
	
	/**
	 * Almost identical to $ in operation, but in this case returns the data for the matched
	 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
	 * rather than any descendants, so the data can be obtained for the row/cell. If matching
	 * rows are found, the data returned is the original data array/object that was used to
	 * create the row (or a generated array if from a DOM source).
	 *
	 * This method is often useful in-combination with $ where both functions are given the
	 * same parameters and the array indexes will match identically.
	 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
	 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
	 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
	 *    criterion ("applied") or all elements (i.e. no filter).
	 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
	 *    Can be either 'current', whereby the current sorting of the table is used, or
	 *    'original' whereby the original order the data was read into the table is used.
	 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
	 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
	 *    'current' and filter is 'applied', regardless of what they might be given as.
	 *  @returns {array} Data for the matched elements. If any elements, as a result of the
	 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
	 *    entry in the array.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Get the data from the first row in the table
	 *      var data = oTable._('tr:first');
	 *
	 *      // Do something useful with the data
	 *      alert( "First cell is: "+data[0] );
	 *    } );
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Filter to 'Webkit' and get all data for
	 *      oTable.fnFilter('Webkit');
	 *      var data = oTable._('tr', {"search": "applied"});
	 *
	 *      // Do something with the data
	 *      alert( data.length+" rows matched the search" );
	 *    } );
	 */
	this._ = function ( sSelector, oOpts )
	{
		return this.api(true).rows( sSelector, oOpts ).data();
	};
	
	
	/**
	 * Create a DataTables Api instance, with the currently selected tables for
	 * the Api's context.
	 * @param {boolean} [traditional=false] Set the API instance's context to be
	 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
	 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
	 *   or if all tables captured in the jQuery object should be used.
	 * @return {DataTables.Api}
	 */
	this.api = function ( traditional )
	{
		return traditional ?
			new _Api(
				_fnSettingsFromNode( this[ _ext.iApiIndex ] )
			) :
			new _Api( this );
	};
	
	
	/**
	 * Add a single new row or multiple rows of data to the table. Please note
	 * that this is suitable for client-side processing only - if you are using
	 * server-side processing (i.e. "bServerSide": true), then to add data, you
	 * must add it to the data source, i.e. the server-side, through an Ajax call.
	 *  @param {array|object} data The data to be added to the table. This can be:
	 *    <ul>
	 *      <li>1D array of data - add a single row with the data provided</li>
	 *      <li>2D array of arrays - add multiple rows in a single call</li>
	 *      <li>object - data object when using <i>mData</i></li>
	 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
	 *    </ul>
	 *  @param {bool} [redraw=true] redraw the table or not
	 *  @returns {array} An array of integers, representing the list of indexes in
	 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
	 *    the table.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    // Global var for counter
	 *    var giCount = 2;
	 *
	 *    $(document).ready(function() {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *    function fnClickAddRow() {
	 *      $('#example').dataTable().fnAddData( [
	 *        giCount+".1",
	 *        giCount+".2",
	 *        giCount+".3",
	 *        giCount+".4" ]
	 *      );
	 *
	 *      giCount++;
	 *    }
	 */
	this.fnAddData = function( data, redraw )
	{
		var api = this.api( true );
	
		/* Check if we want to add multiple rows or not */
		var rows = Array.isArray(data) && ( Array.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
			api.rows.add( data ) :
			api.row.add( data );
	
		if ( redraw === undefined || redraw ) {
			api.draw();
		}
	
		return rows.flatten().toArray();
	};
	
	
	/**
	 * This function will make DataTables recalculate the column sizes, based on the data
	 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
	 * through the sWidth parameter). This can be useful when the width of the table's
	 * parent element changes (for example a window resize).
	 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable( {
	 *        "sScrollY": "200px",
	 *        "bPaginate": false
	 *      } );
	 *
	 *      $(window).on('resize', function () {
	 *        oTable.fnAdjustColumnSizing();
	 *      } );
	 *    } );
	 */
	this.fnAdjustColumnSizing = function ( bRedraw )
	{
		var api = this.api( true ).columns.adjust();
		var settings = api.settings()[0];
		var scroll = settings.oScroll;
	
		if ( bRedraw === undefined || bRedraw ) {
			api.draw( false );
		}
		else if ( scroll.sX !== "" || scroll.sY !== "" ) {
			/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
			_fnScrollDraw( settings );
		}
	};
	
	
	/**
	 * Quickly and simply clear a table
	 *  @param {bool} [bRedraw=true] redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
	 *      oTable.fnClearTable();
	 *    } );
	 */
	this.fnClearTable = function( bRedraw )
	{
		var api = this.api( true ).clear();
	
		if ( bRedraw === undefined || bRedraw ) {
			api.draw();
		}
	};
	
	
	/**
	 * The exact opposite of 'opening' a row, this function will close any rows which
	 * are currently 'open'.
	 *  @param {node} nTr the table row to 'close'
	 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */
	this.fnClose = function( nTr )
	{
		this.api( true ).row( nTr ).child.hide();
	};
	
	
	/**
	 * Remove a row for the table
	 *  @param {mixed} target The index of the row from aoData to be deleted, or
	 *    the TR element you want to delete
	 *  @param {function|null} [callBack] Callback function
	 *  @param {bool} [redraw=true] Redraw the table or not
	 *  @returns {array} The row that was deleted
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Immediately remove the first row
	 *      oTable.fnDeleteRow( 0 );
	 *    } );
	 */
	this.fnDeleteRow = function( target, callback, redraw )
	{
		var api = this.api( true );
		var rows = api.rows( target );
		var settings = rows.settings()[0];
		var data = settings.aoData[ rows[0][0] ];
	
		rows.remove();
	
		if ( callback ) {
			callback.call( this, settings, data );
		}
	
		if ( redraw === undefined || redraw ) {
			api.draw();
		}
	
		return data;
	};
	
	
	/**
	 * Restore the table to it's original state in the DOM by removing all of DataTables
	 * enhancements, alterations to the DOM structure of the table and event listeners.
	 *  @param {boolean} [remove=false] Completely remove the table from the DOM
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnDestroy();
	 *    } );
	 */
	this.fnDestroy = function ( remove )
	{
		this.api( true ).destroy( remove );
	};
	
	
	/**
	 * Redraw the table
	 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
	 *      oTable.fnDraw();
	 *    } );
	 */
	this.fnDraw = function( complete )
	{
		// Note that this isn't an exact match to the old call to _fnDraw - it takes
		// into account the new data, but can hold position.
		this.api( true ).draw( complete );
	};
	
	
	/**
	 * Filter the input based on data
	 *  @param {string} sInput String to filter the table on
	 *  @param {int|null} [iColumn] Column to limit filtering to
	 *  @param {bool} [bRegex=false] Treat as regular expression or not
	 *  @param {bool} [bSmart=true] Perform smart filtering or not
	 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
	 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sometime later - filter...
	 *      oTable.fnFilter( 'test string' );
	 *    } );
	 */
	this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
	{
		var api = this.api( true );
	
		if ( iColumn === null || iColumn === undefined ) {
			api.search( sInput, bRegex, bSmart, bCaseInsensitive );
		}
		else {
			api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
		}
	
		api.draw();
	};
	
	
	/**
	 * Get the data for the whole table, an individual row or an individual cell based on the
	 * provided parameters.
	 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
	 *    a TR node then the data source for the whole row will be returned. If given as a
	 *    TD/TH cell node then iCol will be automatically calculated and the data for the
	 *    cell returned. If given as an integer, then this is treated as the aoData internal
	 *    data index for the row (see fnGetPosition) and the data for that row used.
	 *  @param {int} [col] Optional column index that you want the data of.
	 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
	 *    returned. If mRow is defined, just data for that row, and is iCol is
	 *    defined, only data for the designated cell is returned.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    // Row data
	 *    $(document).ready(function() {
	 *      oTable = $('#example').dataTable();
	 *
	 *      oTable.$('tr').click( function () {
	 *        var data = oTable.fnGetData( this );
	 *        // ... do something with the array / object of data for the row
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Individual cell data
	 *    $(document).ready(function() {
	 *      oTable = $('#example').dataTable();
	 *
	 *      oTable.$('td').click( function () {
	 *        var sData = oTable.fnGetData( this );
	 *        alert( 'The cell clicked on had the value of '+sData );
	 *      } );
	 *    } );
	 */
	this.fnGetData = function( src, col )
	{
		var api = this.api( true );
	
		if ( src !== undefined ) {
			var type = src.nodeName ? src.nodeName.toLowerCase() : '';
	
			return col !== undefined || type == 'td' || type == 'th' ?
				api.cell( src, col ).data() :
				api.row( src ).data() || null;
		}
	
		return api.data().toArray();
	};
	
	
	/**
	 * Get an array of the TR nodes that are used in the table's body. Note that you will
	 * typically want to use the '$' API method in preference to this as it is more
	 * flexible.
	 *  @param {int} [iRow] Optional row index for the TR element you want
	 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
	 *    in the table's body, or iRow is defined, just the TR element requested.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Get the nodes from the table
	 *      var nNodes = oTable.fnGetNodes( );
	 *    } );
	 */
	this.fnGetNodes = function( iRow )
	{
		var api = this.api( true );
	
		return iRow !== undefined ?
			api.row( iRow ).node() :
			api.rows().nodes().flatten().toArray();
	};
	
	
	/**
	 * Get the array indexes of a particular cell from it's DOM element
	 * and column index including hidden columns
	 *  @param {node} node this can either be a TR, TD or TH in the table's body
	 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
	 *    if given as a cell, an array of [row index, column index (visible),
	 *    column index (all)] is given.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      $('#example tbody td').click( function () {
	 *        // Get the position of the current data from the node
	 *        var aPos = oTable.fnGetPosition( this );
	 *
	 *        // Get the data array for this row
	 *        var aData = oTable.fnGetData( aPos[0] );
	 *
	 *        // Update the data array and return the value
	 *        aData[ aPos[1] ] = 'clicked';
	 *        this.innerHTML = 'clicked';
	 *      } );
	 *
	 *      // Init DataTables
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */
	this.fnGetPosition = function( node )
	{
		var api = this.api( true );
		var nodeName = node.nodeName.toUpperCase();
	
		if ( nodeName == 'TR' ) {
			return api.row( node ).index();
		}
		else if ( nodeName == 'TD' || nodeName == 'TH' ) {
			var cell = api.cell( node ).index();
	
			return [
				cell.row,
				cell.columnVisible,
				cell.column
			];
		}
		return null;
	};
	
	
	/**
	 * Check to see if a row is 'open' or not.
	 *  @param {node} nTr the table row to check
	 *  @returns {boolean} true if the row is currently open, false otherwise
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */
	this.fnIsOpen = function( nTr )
	{
		return this.api( true ).row( nTr ).child.isShown();
	};
	
	
	/**
	 * This function will place a new row directly after a row which is currently
	 * on display on the page, with the HTML contents that is passed into the
	 * function. This can be used, for example, to ask for confirmation that a
	 * particular record should be deleted.
	 *  @param {node} nTr The table row to 'open'
	 *  @param {string|node|jQuery} mHtml The HTML to put into the row
	 *  @param {string} sClass Class to give the new TD cell
	 *  @returns {node} The row opened. Note that if the table row passed in as the
	 *    first parameter, is not found in the table, this method will silently
	 *    return.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */
	this.fnOpen = function( nTr, mHtml, sClass )
	{
		return this.api( true )
			.row( nTr )
			.child( mHtml, sClass )
			.show()
			.child()[0];
	};
	
	
	/**
	 * Change the pagination - provides the internal logic for pagination in a simple API
	 * function. With this function you can have a DataTables table go to the next,
	 * previous, first or last pages.
	 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
	 *    or page number to jump to (integer), note that page 0 is the first page.
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnPageChange( 'next' );
	 *    } );
	 */
	this.fnPageChange = function ( mAction, bRedraw )
	{
		var api = this.api( true ).page( mAction );
	
		if ( bRedraw === undefined || bRedraw ) {
			api.draw(false);
		}
	};
	
	
	/**
	 * Show a particular column
	 *  @param {int} iCol The column whose display should be changed
	 *  @param {bool} bShow Show (true) or hide (false) the column
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Hide the second column after initialisation
	 *      oTable.fnSetColumnVis( 1, false );
	 *    } );
	 */
	this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
	{
		var api = this.api( true ).column( iCol ).visible( bShow );
	
		if ( bRedraw === undefined || bRedraw ) {
			api.columns.adjust().draw();
		}
	};
	
	
	/**
	 * Get the settings for a particular table for external manipulation
	 *  @returns {object} DataTables settings object. See
	 *    {@link DataTable.models.oSettings}
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      var oSettings = oTable.fnSettings();
	 *
	 *      // Show an example parameter from the settings
	 *      alert( oSettings._iDisplayStart );
	 *    } );
	 */
	this.fnSettings = function()
	{
		return _fnSettingsFromNode( this[_ext.iApiIndex] );
	};
	
	
	/**
	 * Sort the table by a particular column
	 *  @param {int} iCol the data index to sort on. Note that this will not match the
	 *    'display index' if you have hidden data entries
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sort immediately with columns 0 and 1
	 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
	 *    } );
	 */
	this.fnSort = function( aaSort )
	{
		this.api( true ).order( aaSort ).draw();
	};
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *  @param {node} nNode the element to attach the sort listener to
	 *  @param {int} iColumn the column that a click on this node will sort on
	 *  @param {function} [fnCallback] callback function when sort is run
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sort on column 1, when 'sorter' is clicked on
	 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
	 *    } );
	 */
	this.fnSortListener = function( nNode, iColumn, fnCallback )
	{
		this.api( true ).order.listener( nNode, iColumn, fnCallback );
	};
	
	
	/**
	 * Update a table cell or row - this method will accept either a single value to
	 * update the cell with, an array of values with one element for each column or
	 * an object in the same format as the original data source. The function is
	 * self-referencing in order to make the multi column updates easier.
	 *  @param {object|array|string} mData Data to update the cell/row with
	 *  @param {node|int} mRow TR element you want to update or the aoData index
	 *  @param {int} [iColumn] The column to update, give as null or undefined to
	 *    update a whole row.
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @param {bool} [bAction=true] Perform pre-draw actions or not
	 *  @returns {int} 0 on success, 1 on error
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
	 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
	 *    } );
	 */
	this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
	{
		var api = this.api( true );
	
		if ( iColumn === undefined || iColumn === null ) {
			api.row( mRow ).data( mData );
		}
		else {
			api.cell( mRow, iColumn ).data( mData );
		}
	
		if ( bAction === undefined || bAction ) {
			api.columns.adjust();
		}
	
		if ( bRedraw === undefined || bRedraw ) {
			api.draw();
		}
		return 0;
	};
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being used, in order
	 * to ensure compatibility.
	 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
	 *    formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
	 *    version, or false if this version of DataTales is not suitable
	 *  @method
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
	 *    } );
	 */
	this.fnVersionCheck = _ext.fnVersionCheck;
	

	var _that = this;
	var emptyInit = options === undefined;
	var len = this.length;

	if ( emptyInit ) {
		options = {};
	}

	this.oApi = this.internal = _ext.internal;

	// Extend with old style plug-in API methods
	for ( var fn in DataTable.ext.internal ) {
		if ( fn ) {
			this[fn] = _fnExternApiFunc(fn);
		}
	}

	this.each(function() {
		// For each initialisation we want to give it a clean initialisation
		// object that can be bashed around
		var o = {};
		var oInit = len > 1 ? // optimisation for single table case
			_fnExtend( o, options, true ) :
			options;

		/*global oInit,_that,emptyInit*/
		var i=0, iLen, j, jLen, k, kLen;
		var sId = this.getAttribute( 'id' );
		var bInitHandedOff = false;
		var defaults = DataTable.defaults;
		var $this = $(this);
		
		
		/* Sanity check */
		if ( this.nodeName.toLowerCase() != 'table' )
		{
			_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
			return;
		}
		
		/* Backwards compatibility for the defaults */
		_fnCompatOpts( defaults );
		_fnCompatCols( defaults.column );
		
		/* Convert the camel-case defaults to Hungarian */
		_fnCamelToHungarian( defaults, defaults, true );
		_fnCamelToHungarian( defaults.column, defaults.column, true );
		
		/* Setting up the initialisation object */
		_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ), true );
		
		
		
		/* Check to see if we are re-initialising a table */
		var allSettings = DataTable.settings;
		for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
		{
			var s = allSettings[i];
		
			/* Base check on table node */
			if (
				s.nTable == this ||
				(s.nTHead && s.nTHead.parentNode == this) ||
				(s.nTFoot && s.nTFoot.parentNode == this)
			) {
				var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
				var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
		
				if ( emptyInit || bRetrieve )
				{
					return s.oInstance;
				}
				else if ( bDestroy )
				{
					s.oInstance.fnDestroy();
					break;
				}
				else
				{
					_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
					return;
				}
			}
		
			/* If the element we are initialising has the same ID as a table which was previously
			 * initialised, but the table nodes don't match (from before) then we destroy the old
			 * instance by simply deleting it. This is under the assumption that the table has been
			 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
			 */
			if ( s.sTableId == this.id )
			{
				allSettings.splice( i, 1 );
				break;
			}
		}
		
		/* Ensure the table has an ID - required for accessibility */
		if ( sId === null || sId === "" )
		{
			sId = "DataTables_Table_"+(DataTable.ext._unique++);
			this.id = sId;
		}
		
		/* Create the settings object for this table and set some of the default parameters */
		var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
			"sDestroyWidth": $this[0].style.width,
			"sInstance":     sId,
			"sTableId":      sId
		} );
		oSettings.nTable = this;
		oSettings.oApi   = _that.internal;
		oSettings.oInit  = oInit;
		
		allSettings.push( oSettings );
		
		// Need to add the instance after the instance after the settings object has been added
		// to the settings array, so we can self reference the table instance if more than one
		oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
		
		// Backwards compatibility, before we apply all the defaults
		_fnCompatOpts( oInit );
		_fnLanguageCompat( oInit.oLanguage );
		
		// If the length menu is given, but the init display length is not, use the length menu
		if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
		{
			oInit.iDisplayLength = Array.isArray( oInit.aLengthMenu[0] ) ?
				oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
		}
		
		// Apply the defaults and init options to make a single init object will all
		// options defined from defaults and instance options.
		oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
		
		
		// Map the initialisation options onto the settings object
		_fnMap( oSettings.oFeatures, oInit, [
			"bPaginate",
			"bLengthChange",
			"bFilter",
			"bSort",
			"bSortMulti",
			"bInfo",
			"bProcessing",
			"bAutoWidth",
			"bSortClasses",
			"bServerSide",
			"bDeferRender"
		] );
		_fnMap( oSettings, oInit, [
			"asStripeClasses",
			"ajax",
			"fnServerData",
			"fnFormatNumber",
			"sServerMethod",
			"aaSorting",
			"aaSortingFixed",
			"aLengthMenu",
			"sPaginationType",
			"sAjaxSource",
			"sAjaxDataProp",
			"iStateDuration",
			"sDom",
			"bSortCellsTop",
			"iTabIndex",
			"fnStateLoadCallback",
			"fnStateSaveCallback",
			"renderer",
			"searchDelay",
			"rowId",
			[ "iCookieDuration", "iStateDuration" ], // backwards compat
			[ "oSearch", "oPreviousSearch" ],
			[ "aoSearchCols", "aoPreSearchCols" ],
			[ "iDisplayLength", "_iDisplayLength" ]
		] );
		_fnMap( oSettings.oScroll, oInit, [
			[ "sScrollX", "sX" ],
			[ "sScrollXInner", "sXInner" ],
			[ "sScrollY", "sY" ],
			[ "bScrollCollapse", "bCollapse" ]
		] );
		_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
		
		/* Callback functions which are array driven */
		_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
		_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
		_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
		_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
		_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
		_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
		_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
		_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
		_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
		_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
		_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
		
		oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
		
		/* Browser support detection */
		_fnBrowserDetect( oSettings );
		
		var oClasses = oSettings.oClasses;
		
		$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
		$this.addClass( oClasses.sTable );
		
		
		if ( oSettings.iInitDisplayStart === undefined )
		{
			/* Display start point, taking into account the save saving */
			oSettings.iInitDisplayStart = oInit.iDisplayStart;
			oSettings._iDisplayStart = oInit.iDisplayStart;
		}
		
		if ( oInit.iDeferLoading !== null )
		{
			oSettings.bDeferLoading = true;
			var tmp = Array.isArray( oInit.iDeferLoading );
			oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
			oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
		}
		
		/* Language definitions */
		var oLanguage = oSettings.oLanguage;
		$.extend( true, oLanguage, oInit.oLanguage );
		
		if ( oLanguage.sUrl )
		{
			/* Get the language definitions from a file - because this Ajax call makes the language
			 * get async to the remainder of this function we use bInitHandedOff to indicate that
			 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
			 */
			$.ajax( {
				dataType: 'json',
				url: oLanguage.sUrl,
				success: function ( json ) {
					_fnCamelToHungarian( defaults.oLanguage, json );
					_fnLanguageCompat( json );
					$.extend( true, oLanguage, json, oSettings.oInit.oLanguage );
		
					_fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
					_fnInitialise( oSettings );
				},
				error: function () {
					// Error occurred loading language file, continue on as best we can
					_fnInitialise( oSettings );
				}
			} );
			bInitHandedOff = true;
		}
		else {
			_fnCallbackFire( oSettings, null, 'i18n', [oSettings]);
		}
		
		/*
		 * Stripes
		 */
		if ( oInit.asStripeClasses === null )
		{
			oSettings.asStripeClasses =[
				oClasses.sStripeOdd,
				oClasses.sStripeEven
			];
		}
		
		/* Remove row stripe classes if they are already on the table row */
		var stripeClasses = oSettings.asStripeClasses;
		var rowOne = $this.children('tbody').find('tr').eq(0);
		if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
			return rowOne.hasClass(el);
		} ) ) !== -1 ) {
			$('tbody tr', this).removeClass( stripeClasses.join(' ') );
			oSettings.asDestroyStripes = stripeClasses.slice();
		}
		
		/*
		 * Columns
		 * See if we should load columns automatically or use defined ones
		 */
		var anThs = [];
		var aoColumnsInit;
		var nThead = this.getElementsByTagName('thead');
		if ( nThead.length !== 0 )
		{
			_fnDetectHeader( oSettings.aoHeader, nThead[0] );
			anThs = _fnGetUniqueThs( oSettings );
		}
		
		/* If not given a column array, generate one with nulls */
		if ( oInit.aoColumns === null )
		{
			aoColumnsInit = [];
			for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
			{
				aoColumnsInit.push( null );
			}
		}
		else
		{
			aoColumnsInit = oInit.aoColumns;
		}
		
		/* Add the columns */
		for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
		{
			_fnAddColumn( oSettings, anThs ? anThs[i] : null );
		}
		
		/* Apply the column definitions */
		_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
			_fnColumnOptions( oSettings, iCol, oDef );
		} );
		
		/* HTML5 attribute detection - build an mData object automatically if the
		 * attributes are found
		 */
		if ( rowOne.length ) {
			var a = function ( cell, name ) {
				return cell.getAttribute( 'data-'+name ) !== null ? name : null;
			};
		
			$( rowOne[0] ).children('th, td').each( function (i, cell) {
				var col = oSettings.aoColumns[i];
		
				if (! col) {
					_fnLog( oSettings, 0, 'Incorrect column count', 18 );
				}
		
				if ( col.mData === i ) {
					var sort = a( cell, 'sort' ) || a( cell, 'order' );
					var filter = a( cell, 'filter' ) || a( cell, 'search' );
		
					if ( sort !== null || filter !== null ) {
						col.mData = {
							_:      i+'.display',
							sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
							type:   sort !== null   ? i+'.@data-'+sort   : undefined,
							filter: filter !== null ? i+'.@data-'+filter : undefined
						};
						col._isArrayHost = true;
		
						_fnColumnOptions( oSettings, i );
					}
				}
			} );
		}
		
		var features = oSettings.oFeatures;
		var loadedInit = function () {
			/*
			 * Sorting
			 * @todo For modularisation (1.11) this needs to do into a sort start up handler
			 */
		
			// If aaSorting is not defined, then we use the first indicator in asSorting
			// in case that has been altered, so the default sort reflects that option
			if ( oInit.aaSorting === undefined ) {
				var sorting = oSettings.aaSorting;
				for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
					sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
				}
			}
		
			/* Do a first pass on the sorting classes (allows any size changes to be taken into
			 * account, and also will apply sorting disabled classes if disabled
			 */
			_fnSortingClasses( oSettings );
		
			if ( features.bSort ) {
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted ) {
						var aSort = _fnSortFlatten( oSettings );
						var sortedColumns = {};
		
						$.each( aSort, function (i, val) {
							sortedColumns[ val.src ] = val.dir;
						} );
		
						_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
						_fnSortAria( oSettings );
					}
				} );
			}
		
			_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
				if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
					_fnSortingClasses( oSettings );
				}
			}, 'sc' );
		
		
			/*
			 * Final init
			 * Cache the header, body and footer as required, creating them if needed
			 */
		
			// Work around for Webkit bug 83867 - store the caption-side before removing from doc
			var captions = $this.children('caption').each( function () {
				this._captionSide = $(this).css('caption-side');
			} );
		
			var thead = $this.children('thead');
			if ( thead.length === 0 ) {
				thead = $('<thead/>').appendTo($this);
			}
			oSettings.nTHead = thead[0];
		
			var tbody = $this.children('tbody');
			if ( tbody.length === 0 ) {
				tbody = $('<tbody/>').insertAfter(thead);
			}
			oSettings.nTBody = tbody[0];
		
			var tfoot = $this.children('tfoot');
			if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
				// If we are a scrolling table, and no footer has been given, then we need to create
				// a tfoot element for the caption element to be appended to
				tfoot = $('<tfoot/>').appendTo($this);
			}
		
			if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
				$this.addClass( oClasses.sNoFooter );
			}
			else if ( tfoot.length > 0 ) {
				oSettings.nTFoot = tfoot[0];
				_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
			}
		
			/* Check if there is data passing into the constructor */
			if ( oInit.aaData ) {
				for ( i=0 ; i<oInit.aaData.length ; i++ ) {
					_fnAddData( oSettings, oInit.aaData[ i ] );
				}
			}
			else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
				/* Grab the data from the page - only do this when deferred loading or no Ajax
				 * source since there is no point in reading the DOM data if we are then going
				 * to replace it with Ajax data
				 */
				_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
			}
		
			/* Copy the data index array */
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
		
			/* Initialisation complete - table can be drawn */
			oSettings.bInitialised = true;
		
			/* Check if we need to initialise the table (it might not have been handed off to the
			 * language processor)
			 */
			if ( bInitHandedOff === false ) {
				_fnInitialise( oSettings );
			}
		};
		
		/* Must be done after everything which can be overridden by the state saving! */
		_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
		
		if ( oInit.bStateSave )
		{
			features.bStateSave = true;
			_fnLoadState( oSettings, oInit, loadedInit );
		}
		else {
			loadedInit();
		}
		
	} );
	_that = null;
	return this;
};


/*
 * It is useful to have variables which are scoped locally so only the
 * DataTables functions can access them and they don't leak into global space.
 * At the same time these functions are often useful over multiple files in the
 * core and API, so we list, or at least document, all variables which are used
 * by DataTables as private variables here. This also ensures that there is no
 * clashing of variable names and that they can easily referenced for reuse.
 */


// Defined else where
//  _selector_run
//  _selector_opts
//  _selector_first
//  _selector_row_indexes

var _ext; // DataTable.ext
var _Api; // DataTable.Api
var _api_register; // DataTable.Api.register
var _api_registerPlural; // DataTable.Api.registerPlural

var _re_dic = {};
var _re_new_lines = /[\r\n\u2028]/g;
var _re_html = /<.*?>/g;

// This is not strict ISO8601 - Date.parse() is quite lax, although
// implementations differ between browsers.
var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;

// Escape regular expression special characters
var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );

// https://en.wikipedia.org/wiki/Foreign_exchange_market
// - \u20BD - Russian ruble.
// - \u20a9 - South Korean Won
// - \u20BA - Turkish Lira
// - \u20B9 - Indian Rupee
// - R - Brazil (R$) and South Africa
// - fr - Swiss Franc
// - kr - Swedish krona, Norwegian krone and Danish krone
// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
// - Ƀ - Bitcoin
// - Ξ - Ethereum
//   standards as thousands separators.
var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;


var _empty = function ( d ) {
	return !d || d === true || d === '-' ? true : false;
};


var _intVal = function ( s ) {
	var integer = parseInt( s, 10 );
	return !isNaN(integer) && isFinite(s) ? integer : null;
};

// Convert from a formatted number with characters other than `.` as the
// decimal place, to a Javascript number
var _numToDecimal = function ( num, decimalPoint ) {
	// Cache created regular expressions for speed as this function is called often
	if ( ! _re_dic[ decimalPoint ] ) {
		_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
	}
	return typeof num === 'string' && decimalPoint !== '.' ?
		num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
		num;
};


var _isNumber = function ( d, decimalPoint, formatted ) {
	var type = typeof d;
	var strType = type === 'string';

	if ( type === 'number' || type === 'bigint') {
		return true;
	}

	// If empty return immediately so there must be a number if it is a
	// formatted string (this stops the string "k", or "kr", etc being detected
	// as a formatted number for currency
	if ( _empty( d ) ) {
		return true;
	}

	if ( decimalPoint && strType ) {
		d = _numToDecimal( d, decimalPoint );
	}

	if ( formatted && strType ) {
		d = d.replace( _re_formatted_numeric, '' );
	}

	return !isNaN( parseFloat(d) ) && isFinite( d );
};


// A string without HTML in it can be considered to be HTML still
var _isHtml = function ( d ) {
	return _empty( d ) || typeof d === 'string';
};


var _htmlNumeric = function ( d, decimalPoint, formatted ) {
	if ( _empty( d ) ) {
		return true;
	}

	var html = _isHtml( d );
	return ! html ?
		null :
		_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
			true :
			null;
};


var _pluck = function ( a, prop, prop2 ) {
	var out = [];
	var i=0, ien=a.length;

	// Could have the test in the loop for slightly smaller code, but speed
	// is essential here
	if ( prop2 !== undefined ) {
		for ( ; i<ien ; i++ ) {
			if ( a[i] && a[i][ prop ] ) {
				out.push( a[i][ prop ][ prop2 ] );
			}
		}
	}
	else {
		for ( ; i<ien ; i++ ) {
			if ( a[i] ) {
				out.push( a[i][ prop ] );
			}
		}
	}

	return out;
};


// Basically the same as _pluck, but rather than looping over `a` we use `order`
// as the indexes to pick from `a`
var _pluck_order = function ( a, order, prop, prop2 )
{
	var out = [];
	var i=0, ien=order.length;

	// Could have the test in the loop for slightly smaller code, but speed
	// is essential here
	if ( prop2 !== undefined ) {
		for ( ; i<ien ; i++ ) {
			if ( a[ order[i] ][ prop ] ) {
				out.push( a[ order[i] ][ prop ][ prop2 ] );
			}
		}
	}
	else {
		for ( ; i<ien ; i++ ) {
			out.push( a[ order[i] ][ prop ] );
		}
	}

	return out;
};


var _range = function ( len, start )
{
	var out = [];
	var end;

	if ( start === undefined ) {
		start = 0;
		end = len;
	}
	else {
		end = start;
		start = len;
	}

	for ( var i=start ; i<end ; i++ ) {
		out.push( i );
	}

	return out;
};


var _removeEmpty = function ( a )
{
	var out = [];

	for ( var i=0, ien=a.length ; i<ien ; i++ ) {
		if ( a[i] ) { // careful - will remove all falsy values!
			out.push( a[i] );
		}
	}

	return out;
};


var _stripHtml = function ( d ) {
	return d
		.replace( _re_html, '' ) // Complete tags
		.replace(/<script/i, ''); // Safety for incomplete script tag
};


/**
 * Determine if all values in the array are unique. This means we can short
 * cut the _unique method at the cost of a single loop. A sorted array is used
 * to easily check the values.
 *
 * @param  {array} src Source array
 * @return {boolean} true if all unique, false otherwise
 * @ignore
 */
var _areAllUnique = function ( src ) {
	if ( src.length < 2 ) {
		return true;
	}

	var sorted = src.slice().sort();
	var last = sorted[0];

	for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
		if ( sorted[i] === last ) {
			return false;
		}

		last = sorted[i];
	}

	return true;
};


/**
 * Find the unique elements in a source array.
 *
 * @param  {array} src Source array
 * @return {array} Array of unique items
 * @ignore
 */
var _unique = function ( src )
{
	if ( _areAllUnique( src ) ) {
		return src.slice();
	}

	// A faster unique method is to use object keys to identify used values,
	// but this doesn't work with arrays or objects, which we must also
	// consider. See jsperf.com/compare-array-unique-versions/4 for more
	// information.
	var
		out = [],
		val,
		i, ien=src.length,
		j, k=0;

	again: for ( i=0 ; i<ien ; i++ ) {
		val = src[i];

		for ( j=0 ; j<k ; j++ ) {
			if ( out[j] === val ) {
				continue again;
			}
		}

		out.push( val );
		k++;
	}

	return out;
};

// Surprisingly this is faster than [].concat.apply
// https://jsperf.com/flatten-an-array-loop-vs-reduce/2
var _flatten = function (out, val) {
	if (Array.isArray(val)) {
		for (var i=0 ; i<val.length ; i++) {
			_flatten(out, val[i]);
		}
	}
	else {
		out.push(val);
	}
  
	return out;
}

var _includes = function (search, start) {
	if (start === undefined) {
		start = 0;
	}

	return this.indexOf(search, start) !== -1;	
};

// Array.isArray polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
if (! Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

if (! Array.prototype.includes) {
	Array.prototype.includes = _includes;
}

// .trim() polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

if (! String.prototype.includes) {
	String.prototype.includes = _includes;
}

/**
 * DataTables utility methods
 * 
 * This namespace provides helper methods that DataTables uses internally to
 * create a DataTable, but which are not exclusively used only for DataTables.
 * These methods can be used by extension authors to save the duplication of
 * code.
 *
 *  @namespace
 */
DataTable.util = {
	/**
	 * Throttle the calls to a function. Arguments and context are maintained
	 * for the throttled function.
	 *
	 * @param {function} fn Function to be called
	 * @param {integer} freq Call frequency in mS
	 * @return {function} Wrapped function
	 */
	throttle: function ( fn, freq ) {
		var
			frequency = freq !== undefined ? freq : 200,
			last,
			timer;

		return function () {
			var
				that = this,
				now  = +new Date(),
				args = arguments;

			if ( last && now < last + frequency ) {
				clearTimeout( timer );

				timer = setTimeout( function () {
					last = undefined;
					fn.apply( that, args );
				}, frequency );
			}
			else {
				last = now;
				fn.apply( that, args );
			}
		};
	},


	/**
	 * Escape a string such that it can be used in a regular expression
	 *
	 *  @param {string} val string to escape
	 *  @returns {string} escaped string
	 */
	escapeRegex: function ( val ) {
		return val.replace( _re_escape_regex, '\\$1' );
	},

	/**
	 * Create a function that will write to a nested object or array
	 * @param {*} source JSON notation string
	 * @returns Write function
	 */
	set: function ( source ) {
		if ( $.isPlainObject( source ) ) {
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return DataTable.util.set( source._ );
		}
		else if ( source === null ) {
			// Nothing to do when the data source is null
			return function () {};
		}
		else if ( typeof source === 'function' ) {
			return function (data, val, meta) {
				source( data, 'set', val, meta );
			};
		}
		else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
				  source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
		{
			// Like the get, we need to get data from a nested object
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ ) {
					// Protect against prototype pollution
					if (a[i] === '__proto__' || a[i] === 'constructor') {
						throw new Error('Cannot set prototype values');
					}
	
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation ) {
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( Array.isArray( val ) ) {
							for ( var j=0, jLen=val.length ; j<jLen ; j++ ) {
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else {
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation ) {
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined ) {
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) ) {
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else {
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, source );
			};
		}
		else {
			// Array or flat object mapping
			return function (data, val) { // meta is also passed in, but not used
				data[source] = val;
			};
		}
	},

	/**
	 * Create a function that will read nested objects from arrays, based on JSON notation
	 * @param {*} source JSON notation string
	 * @returns Value read
	 */
	get: function ( source ) {
		if ( $.isPlainObject( source ) ) {
			// Build an object of get functions, and wrap them in a single call
			var o = {};
			$.each( source, function (key, val) {
				if ( val ) {
					o[key] = DataTable.util.get( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( source === null ) {
			// Give an empty string for rendering / sorting etc
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof source === 'function' ) {
			return function (data, type, row, meta) {
				return source( data, type, row, meta );
			};
		}
		else if ( typeof source === 'string' && (source.indexOf('.') !== -1 ||
				  source.indexOf('[') !== -1 || source.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" ) {
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ ) {
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation ) {
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( Array.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation ) {
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if (data === null || data[ a[i] ] === null) {
							return null;
						}
						else if ( data === undefined || data[ a[i] ] === undefined ) {
							return undefined;
						}

						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, source );
			};
		}
		else {
			// Array or flat object mapping
			return function (data, type) { // row and meta also passed, but not used
				return data[source];
			};
		}
	}
};



/**
 * Create a mapping object that allows camel case parameters to be looked up
 * for their Hungarian counterparts. The mapping is stored in a private
 * parameter called `_hungarianMap` which can be accessed on the source object.
 *  @param {object} o
 *  @memberof DataTable#oApi
 */
function _fnHungarianMap ( o )
{
	var
		hungarian = 'a aa ai ao as b fn i m o s ',
		match,
		newKey,
		map = {};

	$.each( o, function (key, val) {
		match = key.match(/^([^A-Z]+?)([A-Z])/);

		if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
		{
			newKey = key.replace( match[0], match[2].toLowerCase() );
			map[ newKey ] = key;

			if ( match[1] === 'o' )
			{
				_fnHungarianMap( o[key] );
			}
		}
	} );

	o._hungarianMap = map;
}


/**
 * Convert from camel case parameters to Hungarian, based on a Hungarian map
 * created by _fnHungarianMap.
 *  @param {object} src The model object which holds all parameters that can be
 *    mapped.
 *  @param {object} user The object to convert from camel case to Hungarian.
 *  @param {boolean} force When set to `true`, properties which already have a
 *    Hungarian value in the `user` object will be overwritten. Otherwise they
 *    won't be.
 *  @memberof DataTable#oApi
 */
function _fnCamelToHungarian ( src, user, force )
{
	if ( ! src._hungarianMap ) {
		_fnHungarianMap( src );
	}

	var hungarianKey;

	$.each( user, function (key, val) {
		hungarianKey = src._hungarianMap[ key ];

		if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
		{
			// For objects, we need to buzz down into the object to copy parameters
			if ( hungarianKey.charAt(0) === 'o' )
			{
				// Copy the camelCase options over to the hungarian
				if ( ! user[ hungarianKey ] ) {
					user[ hungarianKey ] = {};
				}
				$.extend( true, user[hungarianKey], user[key] );

				_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
			}
			else {
				user[hungarianKey] = user[ key ];
			}
		}
	} );
}


/**
 * Language compatibility - when certain options are given, and others aren't, we
 * need to duplicate the values over, in order to provide backwards compatibility
 * with older language files.
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnLanguageCompat( lang )
{
	// Note the use of the Hungarian notation for the parameters in this method as
	// this is called after the mapping of camelCase to Hungarian
	var defaults = DataTable.defaults.oLanguage;

	// Default mapping
	var defaultDecimal = defaults.sDecimal;
	if ( defaultDecimal ) {
		_addNumericSort( defaultDecimal );
	}

	if ( lang ) {
		var zeroRecords = lang.sZeroRecords;

		// Backwards compatibility - if there is no sEmptyTable given, then use the same as
		// sZeroRecords - assuming that is given.
		if ( ! lang.sEmptyTable && zeroRecords &&
			defaults.sEmptyTable === "No data available in table" )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
		}

		// Likewise with loading records
		if ( ! lang.sLoadingRecords && zeroRecords &&
			defaults.sLoadingRecords === "Loading..." )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
		}

		// Old parameter name of the thousands separator mapped onto the new
		if ( lang.sInfoThousands ) {
			lang.sThousands = lang.sInfoThousands;
		}

		var decimal = lang.sDecimal;
		if ( decimal && defaultDecimal !== decimal ) {
			_addNumericSort( decimal );
		}
	}
}


/**
 * Map one parameter onto another
 *  @param {object} o Object to map
 *  @param {*} knew The new parameter name
 *  @param {*} old The old parameter name
 */
var _fnCompatMap = function ( o, knew, old ) {
	if ( o[ knew ] !== undefined ) {
		o[ old ] = o[ knew ];
	}
};


/**
 * Provide backwards compatibility for the main DT options. Note that the new
 * options are mapped onto the old parameters, so this is an external interface
 * change only.
 *  @param {object} init Object to map
 */
function _fnCompatOpts ( init )
{
	_fnCompatMap( init, 'ordering',      'bSort' );
	_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
	_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
	_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
	_fnCompatMap( init, 'order',         'aaSorting' );
	_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
	_fnCompatMap( init, 'paging',        'bPaginate' );
	_fnCompatMap( init, 'pagingType',    'sPaginationType' );
	_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
	_fnCompatMap( init, 'searching',     'bFilter' );

	// Boolean initialisation of x-scrolling
	if ( typeof init.sScrollX === 'boolean' ) {
		init.sScrollX = init.sScrollX ? '100%' : '';
	}
	if ( typeof init.scrollX === 'boolean' ) {
		init.scrollX = init.scrollX ? '100%' : '';
	}

	// Column search objects are in an array, so it needs to be converted
	// element by element
	var searchCols = init.aoSearchCols;

	if ( searchCols ) {
		for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
			if ( searchCols[i] ) {
				_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
			}
		}
	}
}


/**
 * Provide backwards compatibility for column options. Note that the new options
 * are mapped onto the old parameters, so this is an external interface change
 * only.
 *  @param {object} init Object to map
 */
function _fnCompatCols ( init )
{
	_fnCompatMap( init, 'orderable',     'bSortable' );
	_fnCompatMap( init, 'orderData',     'aDataSort' );
	_fnCompatMap( init, 'orderSequence', 'asSorting' );
	_fnCompatMap( init, 'orderDataType', 'sortDataType' );

	// orderData can be given as an integer
	var dataSort = init.aDataSort;
	if ( typeof dataSort === 'number' && ! Array.isArray( dataSort ) ) {
		init.aDataSort = [ dataSort ];
	}
}


/**
 * Browser feature detection for capabilities, quirks
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnBrowserDetect( settings )
{
	// We don't need to do this every time DataTables is constructed, the values
	// calculated are specific to the browser and OS configuration which we
	// don't expect to change between initialisations
	if ( ! DataTable.__browser ) {
		var browser = {};
		DataTable.__browser = browser;

		// Scrolling feature / quirks detection
		var n = $('<div/>')
			.css( {
				position: 'fixed',
				top: 0,
				left: $(window).scrollLeft()*-1, // allow for scrolling
				height: 1,
				width: 1,
				overflow: 'hidden'
			} )
			.append(
				$('<div/>')
					.css( {
						position: 'absolute',
						top: 1,
						left: 1,
						width: 100,
						overflow: 'scroll'
					} )
					.append(
						$('<div/>')
							.css( {
								width: '100%',
								height: 10
							} )
					)
			)
			.appendTo( 'body' );

		var outer = n.children();
		var inner = outer.children();

		// Numbers below, in order, are:
		// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
		//
		// IE6 XP:                           100 100 100  83
		// IE7 Vista:                        100 100 100  83
		// IE 8+ Windows:                     83  83 100  83
		// Evergreen Windows:                 83  83 100  83
		// Evergreen Mac with scrollbars:     85  85 100  85
		// Evergreen Mac without scrollbars: 100 100 100 100

		// Get scrollbar width
		browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;

		// IE6/7 will oversize a width 100% element inside a scrolling element, to
		// include the width of the scrollbar, while other browsers ensure the inner
		// element is contained without forcing scrolling
		browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;

		// In rtl text layout, some browsers (most, but not all) will place the
		// scrollbar on the left, rather than the right.
		browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;

		// IE8- don't provide height and width for getBoundingClientRect
		browser.bBounding = n[0].getBoundingClientRect().width ? true : false;

		n.remove();
	}

	$.extend( settings.oBrowser, DataTable.__browser );
	settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
}


/**
 * Array.prototype reduce[Right] method, used for browsers which don't support
 * JS 1.6. Done this way to reduce code size, since we iterate either way
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnReduce ( that, fn, init, start, end, inc )
{
	var
		i = start,
		value,
		isSet = false;

	if ( init !== undefined ) {
		value = init;
		isSet = true;
	}

	while ( i !== end ) {
		if ( ! that.hasOwnProperty(i) ) {
			continue;
		}

		value = isSet ?
			fn( value, that[i], i, that ) :
			that[i];

		isSet = true;
		i += inc;
	}

	return value;
}

/**
 * Add a column to the list used for the table with default values
 *  @param {object} oSettings dataTables settings object
 *  @param {node} nTh The th element for this column
 *  @memberof DataTable#oApi
 */
function _fnAddColumn( oSettings, nTh )
{
	// Add column to aoColumns array
	var oDefaults = DataTable.defaults.column;
	var iCol = oSettings.aoColumns.length;
	var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
		"nTh": nTh ? nTh : document.createElement('th'),
		"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
		"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
		"mData": oDefaults.mData ? oDefaults.mData : iCol,
		idx: iCol
	} );
	oSettings.aoColumns.push( oCol );

	// Add search object for column specific search. Note that the `searchCols[ iCol ]`
	// passed into extend can be undefined. This allows the user to give a default
	// with only some of the parameters defined, and also not give a default
	var searchCols = oSettings.aoPreSearchCols;
	searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );

	// Use the default column options function to initialise classes etc
	_fnColumnOptions( oSettings, iCol, $(nTh).data() );
}


/**
 * Apply options for a column
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iCol column index to consider
 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
 *  @memberof DataTable#oApi
 */
function _fnColumnOptions( oSettings, iCol, oOptions )
{
	var oCol = oSettings.aoColumns[ iCol ];
	var oClasses = oSettings.oClasses;
	var th = $(oCol.nTh);

	// Try to get width information from the DOM. We can't get it from CSS
	// as we'd need to parse the CSS stylesheet. `width` option can override
	if ( ! oCol.sWidthOrig ) {
		// Width attribute
		oCol.sWidthOrig = th.attr('width') || null;

		// Style attribute
		var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
		if ( t ) {
			oCol.sWidthOrig = t[1];
		}
	}

	/* User specified column options */
	if ( oOptions !== undefined && oOptions !== null )
	{
		// Backwards compatibility
		_fnCompatCols( oOptions );

		// Map camel case parameters to their Hungarian counterparts
		_fnCamelToHungarian( DataTable.defaults.column, oOptions, true );

		/* Backwards compatibility for mDataProp */
		if ( oOptions.mDataProp !== undefined && !oOptions.mData )
		{
			oOptions.mData = oOptions.mDataProp;
		}

		if ( oOptions.sType )
		{
			oCol._sManualType = oOptions.sType;
		}

		// `class` is a reserved word in Javascript, so we need to provide
		// the ability to use a valid name for the camel case input
		if ( oOptions.className && ! oOptions.sClass )
		{
			oOptions.sClass = oOptions.className;
		}
		if ( oOptions.sClass ) {
			th.addClass( oOptions.sClass );
		}

		var origClass = oCol.sClass;

		$.extend( oCol, oOptions );
		_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );

		// Merge class from previously defined classes with this one, rather than just
		// overwriting it in the extend above
		if (origClass !== oCol.sClass) {
			oCol.sClass = origClass + ' ' + oCol.sClass;
		}

		/* iDataSort to be applied (backwards compatibility), but aDataSort will take
		 * priority if defined
		 */
		if ( oOptions.iDataSort !== undefined )
		{
			oCol.aDataSort = [ oOptions.iDataSort ];
		}
		_fnMap( oCol, oOptions, "aDataSort" );

		// Fall back to the aria-label attribute on the table header if no ariaTitle is
		// provided.
		if (! oCol.ariaTitle) {
			oCol.ariaTitle = th.attr("aria-label");
		}
	}

	/* Cache the data get and set functions for speed */
	var mDataSrc = oCol.mData;
	var mData = _fnGetObjectDataFn( mDataSrc );
	var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;

	var attrTest = function( src ) {
		return typeof src === 'string' && src.indexOf('@') !== -1;
	};
	oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
		attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
	);
	oCol._setter = null;

	oCol.fnGetData = function (rowData, type, meta) {
		var innerData = mData( rowData, type, undefined, meta );

		return mRender && type ?
			mRender( innerData, type, rowData, meta ) :
			innerData;
	};
	oCol.fnSetData = function ( rowData, val, meta ) {
		return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
	};

	// Indicate if DataTables should read DOM data as an object or array
	// Used in _fnGetRowElements
	if ( typeof mDataSrc !== 'number' && ! oCol._isArrayHost ) {
		oSettings._rowReadObject = true;
	}

	/* Feature sorting overrides column specific when off */
	if ( !oSettings.oFeatures.bSort )
	{
		oCol.bSortable = false;
		th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
	}

	/* Check that the class assignment is correct for sorting */
	var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
	var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
	if ( !oCol.bSortable || (!bAsc && !bDesc) )
	{
		oCol.sSortingClass = oClasses.sSortableNone;
		oCol.sSortingClassJUI = "";
	}
	else if ( bAsc && !bDesc )
	{
		oCol.sSortingClass = oClasses.sSortableAsc;
		oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
	}
	else if ( !bAsc && bDesc )
	{
		oCol.sSortingClass = oClasses.sSortableDesc;
		oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
	}
	else
	{
		oCol.sSortingClass = oClasses.sSortable;
		oCol.sSortingClassJUI = oClasses.sSortJUI;
	}
}


/**
 * Adjust the table column widths for new data. Note: you would probably want to
 * do a redraw after calling this function!
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnAdjustColumnSizing ( settings )
{
	/* Not interested in doing column width calculation if auto-width is disabled */
	if ( settings.oFeatures.bAutoWidth !== false )
	{
		var columns = settings.aoColumns;

		_fnCalculateColumnWidths( settings );
		for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].nTh.style.width = columns[i].sWidth;
		}
	}

	var scroll = settings.oScroll;
	if ( scroll.sY !== '' || scroll.sX !== '')
	{
		_fnScrollDraw( settings );
	}

	_fnCallbackFire( settings, null, 'column-sizing', [settings] );
}


/**
 * Convert the index of a visible column to the index in the data array (take account
 * of hidden columns)
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iMatch Visible column index to lookup
 *  @returns {int} i the data index
 *  @memberof DataTable#oApi
 */
function _fnVisibleToColumnIndex( oSettings, iMatch )
{
	var aiVis = _fnGetColumns( oSettings, 'bVisible' );

	return typeof aiVis[iMatch] === 'number' ?
		aiVis[iMatch] :
		null;
}


/**
 * Convert the index of an index in the data array and convert it to the visible
 *   column index (take account of hidden columns)
 *  @param {int} iMatch Column index to lookup
 *  @param {object} oSettings dataTables settings object
 *  @returns {int} i the data index
 *  @memberof DataTable#oApi
 */
function _fnColumnIndexToVisible( oSettings, iMatch )
{
	var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	var iPos = $.inArray( iMatch, aiVis );

	return iPos !== -1 ? iPos : null;
}


/**
 * Get the number of visible columns
 *  @param {object} oSettings dataTables settings object
 *  @returns {int} i the number of visible columns
 *  @memberof DataTable#oApi
 */
function _fnVisbleColumns( oSettings )
{
	var vis = 0;

	// No reduce in IE8, use a loop for now
	$.each( oSettings.aoColumns, function ( i, col ) {
		if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
			vis++;
		}
	} );

	return vis;
}


/**
 * Get an array of column indexes that match a given property
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sParam Parameter in aoColumns to look for - typically
 *    bVisible or bSearchable
 *  @returns {array} Array of indexes with matched properties
 *  @memberof DataTable#oApi
 */
function _fnGetColumns( oSettings, sParam )
{
	var a = [];

	$.map( oSettings.aoColumns, function(val, i) {
		if ( val[sParam] ) {
			a.push( i );
		}
	} );

	return a;
}


/**
 * Calculate the 'type' of a column
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnColumnTypes ( settings )
{
	var columns = settings.aoColumns;
	var data = settings.aoData;
	var types = DataTable.ext.type.detect;
	var i, ien, j, jen, k, ken;
	var col, cell, detectedType, cache;

	// For each column, spin over the 
	for ( i=0, ien=columns.length ; i<ien ; i++ ) {
		col = columns[i];
		cache = [];

		if ( ! col.sType && col._sManualType ) {
			col.sType = col._sManualType;
		}
		else if ( ! col.sType ) {
			for ( j=0, jen=types.length ; j<jen ; j++ ) {
				for ( k=0, ken=data.length ; k<ken ; k++ ) {
					// Use a cache array so we only need to get the type data
					// from the formatter once (when using multiple detectors)
					if ( cache[k] === undefined ) {
						cache[k] = _fnGetCellData( settings, k, i, 'type' );
					}

					detectedType = types[j]( cache[k], settings );

					// If null, then this type can't apply to this column, so
					// rather than testing all cells, break out. There is an
					// exception for the last type which is `html`. We need to
					// scan all rows since it is possible to mix string and HTML
					// types
					if ( ! detectedType && j !== types.length-1 ) {
						break;
					}

					// Only a single match is needed for html type since it is
					// bottom of the pile and very similar to string - but it
					// must not be empty
					if ( detectedType === 'html' && ! _empty(cache[k]) ) {
						break;
					}
				}

				// Type is valid for all data points in the column - use this
				// type
				if ( detectedType ) {
					col.sType = detectedType;
					break;
				}
			}

			// Fall back - if no type was detected, always use string
			if ( ! col.sType ) {
				col.sType = 'string';
			}
		}
	}
}


/**
 * Take the column definitions and static columns arrays and calculate how
 * they relate to column indexes. The callback function will then apply the
 * definition found for a column to a suitable configuration object.
 *  @param {object} oSettings dataTables settings object
 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
 *  @param {array} aoCols The aoColumns array that defines columns individually
 *  @param {function} fn Callback function - takes two parameters, the calculated
 *    column index and the definition for that column.
 *  @memberof DataTable#oApi
 */
function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
{
	var i, iLen, j, jLen, k, kLen, def;
	var columns = oSettings.aoColumns;

	// Column definitions with aTargets
	if ( aoColDefs )
	{
		/* Loop over the definitions array - loop in reverse so first instance has priority */
		for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
		{
			def = aoColDefs[i];

			/* Each definition can target multiple columns, as it is an array */
			var aTargets = def.target !== undefined
				? def.target
				: def.targets !== undefined
					? def.targets
					: def.aTargets;

			if ( ! Array.isArray( aTargets ) )
			{
				aTargets = [ aTargets ];
			}

			for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
			{
				if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
				{
					/* Add columns that we don't yet know about */
					while( columns.length <= aTargets[j] )
					{
						_fnAddColumn( oSettings );
					}

					/* Integer, basic index */
					fn( aTargets[j], def );
				}
				else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
				{
					/* Negative integer, right to left column counting */
					fn( columns.length+aTargets[j], def );
				}
				else if ( typeof aTargets[j] === 'string' )
				{
					/* Class name matching on TH element */
					for ( k=0, kLen=columns.length ; k<kLen ; k++ )
					{
						if ( aTargets[j] == "_all" ||
						     $(columns[k].nTh).hasClass( aTargets[j] ) )
						{
							fn( k, def );
						}
					}
				}
			}
		}
	}

	// Statically defined columns array
	if ( aoCols )
	{
		for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
		{
			fn( i, aoCols[i] );
		}
	}
}

/**
 * Add a data array to the table, creating DOM node etc. This is the parallel to
 * _fnGatherData, but for adding rows from a Javascript source, rather than a
 * DOM source.
 *  @param {object} oSettings dataTables settings object
 *  @param {array} aData data array to be added
 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
 *    DataTables will create a row automatically
 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
 *    if nTr is.
 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
 *  @memberof DataTable#oApi
 */
function _fnAddData ( oSettings, aDataIn, nTr, anTds )
{
	/* Create the object for storing information about this new row */
	var iRow = oSettings.aoData.length;
	var oData = $.extend( true, {}, DataTable.models.oRow, {
		src: nTr ? 'dom' : 'data',
		idx: iRow
	} );

	oData._aData = aDataIn;
	oSettings.aoData.push( oData );

	/* Create the cells */
	var nTd, sThisType;
	var columns = oSettings.aoColumns;

	// Invalidate the column types as the new data needs to be revalidated
	for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
	{
		columns[i].sType = null;
	}

	/* Add to the display array */
	oSettings.aiDisplayMaster.push( iRow );

	var id = oSettings.rowIdFn( aDataIn );
	if ( id !== undefined ) {
		oSettings.aIds[ id ] = oData;
	}

	/* Create the DOM information, or register it if already present */
	if ( nTr || ! oSettings.oFeatures.bDeferRender )
	{
		_fnCreateTr( oSettings, iRow, nTr, anTds );
	}

	return iRow;
}


/**
 * Add one or more TR elements to the table. Generally we'd expect to
 * use this for reading data from a DOM sourced table, but it could be
 * used for an TR element. Note that if a TR is given, it is used (i.e.
 * it is not cloned).
 *  @param {object} settings dataTables settings object
 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
 *  @returns {array} Array of indexes for the added rows
 *  @memberof DataTable#oApi
 */
function _fnAddTr( settings, trs )
{
	var row;

	// Allow an individual node to be passed in
	if ( ! (trs instanceof $) ) {
		trs = $(trs);
	}

	return trs.map( function (i, el) {
		row = _fnGetRowElements( settings, el );
		return _fnAddData( settings, row.data, el, row.cells );
	} );
}


/**
 * Take a TR element and convert it to an index in aoData
 *  @param {object} oSettings dataTables settings object
 *  @param {node} n the TR element to find
 *  @returns {int} index if the node is found, null if not
 *  @memberof DataTable#oApi
 */
function _fnNodeToDataIndex( oSettings, n )
{
	return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
}


/**
 * Take a TD element and convert it into a column data index (not the visible index)
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iRow The row number the TD/TH can be found in
 *  @param {node} n The TD/TH element to find
 *  @returns {int} index if the node is found, -1 if not
 *  @memberof DataTable#oApi
 */
function _fnNodeToColumnIndex( oSettings, iRow, n )
{
	return $.inArray( n, oSettings.aoData[ iRow ].anCells );
}


/**
 * Get the data for a given cell from the internal cache, taking into account data mapping
 *  @param {object} settings dataTables settings object
 *  @param {int} rowIdx aoData row id
 *  @param {int} colIdx Column index
 *  @param {string} type data get type ('display', 'type' 'filter|search' 'sort|order')
 *  @returns {*} Cell data
 *  @memberof DataTable#oApi
 */
function _fnGetCellData( settings, rowIdx, colIdx, type )
{
	if (type === 'search') {
		type = 'filter';
	}
	else if (type === 'order') {
		type = 'sort';
	}

	var draw           = settings.iDraw;
	var col            = settings.aoColumns[colIdx];
	var rowData        = settings.aoData[rowIdx]._aData;
	var defaultContent = col.sDefaultContent;
	var cellData       = col.fnGetData( rowData, type, {
		settings: settings,
		row:      rowIdx,
		col:      colIdx
	} );

	if ( cellData === undefined ) {
		if ( settings.iDrawError != draw && defaultContent === null ) {
			_fnLog( settings, 0, "Requested unknown parameter "+
				(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
				" for row "+rowIdx+", column "+colIdx, 4 );
			settings.iDrawError = draw;
		}
		return defaultContent;
	}

	// When the data source is null and a specific data type is requested (i.e.
	// not the original data), we can use default column data
	if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
		cellData = defaultContent;
	}
	else if ( typeof cellData === 'function' ) {
		// If the data source is a function, then we run it and use the return,
		// executing in the scope of the data object (for instances)
		return cellData.call( rowData );
	}

	if ( cellData === null && type === 'display' ) {
		return '';
	}

	if ( type === 'filter' ) {
		var fomatters = DataTable.ext.type.search;

		if ( fomatters[ col.sType ] ) {
			cellData = fomatters[ col.sType ]( cellData );
		}
	}

	return cellData;
}


/**
 * Set the value for a specific cell, into the internal data cache
 *  @param {object} settings dataTables settings object
 *  @param {int} rowIdx aoData row id
 *  @param {int} colIdx Column index
 *  @param {*} val Value to set
 *  @memberof DataTable#oApi
 */
function _fnSetCellData( settings, rowIdx, colIdx, val )
{
	var col     = settings.aoColumns[colIdx];
	var rowData = settings.aoData[rowIdx]._aData;

	col.fnSetData( rowData, val, {
		settings: settings,
		row:      rowIdx,
		col:      colIdx
	}  );
}


// Private variable that is used to match action syntax in the data property object
var __reArray = /\[.*?\]$/;
var __reFn = /\(\)$/;

/**
 * Split string on periods, taking into account escaped periods
 * @param  {string} str String to split
 * @return {array} Split string
 */
function _fnSplitObjNotation( str )
{
	return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
		return s.replace(/\\\./g, '.');
	} );
}


/**
 * Return a function that can be used to get data from a source object, taking
 * into account the ability to use nested objects as a source
 *  @param {string|int|function} mSource The data source for the object
 *  @returns {function} Data get function
 *  @memberof DataTable#oApi
 */
var _fnGetObjectDataFn = DataTable.util.get;


/**
 * Return a function that can be used to set data from a source object, taking
 * into account the ability to use nested objects as a source
 *  @param {string|int|function} mSource The data source for the object
 *  @returns {function} Data set function
 *  @memberof DataTable#oApi
 */
var _fnSetObjectDataFn = DataTable.util.set;


/**
 * Return an array with the full table data
 *  @param {object} oSettings dataTables settings object
 *  @returns array {array} aData Master data array
 *  @memberof DataTable#oApi
 */
function _fnGetDataMaster ( settings )
{
	return _pluck( settings.aoData, '_aData' );
}


/**
 * Nuke the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnClearTable( settings )
{
	settings.aoData.length = 0;
	settings.aiDisplayMaster.length = 0;
	settings.aiDisplay.length = 0;
	settings.aIds = {};
}


 /**
 * Take an array of integers (index array) and remove a target integer (value - not
 * the key!)
 *  @param {array} a Index array to target
 *  @param {int} iTarget value to find
 *  @memberof DataTable#oApi
 */
function _fnDeleteIndex( a, iTarget, splice )
{
	var iTargetIndex = -1;

	for ( var i=0, iLen=a.length ; i<iLen ; i++ )
	{
		if ( a[i] == iTarget )
		{
			iTargetIndex = i;
		}
		else if ( a[i] > iTarget )
		{
			a[i]--;
		}
	}

	if ( iTargetIndex != -1 && splice === undefined )
	{
		a.splice( iTargetIndex, 1 );
	}
}


/**
 * Mark cached data as invalid such that a re-read of the data will occur when
 * the cached data is next requested. Also update from the data source object.
 *
 * @param {object} settings DataTables settings object
 * @param {int}    rowIdx   Row index to invalidate
 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
 *     or 'data'
 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
 *     row will be invalidated
 * @memberof DataTable#oApi
 *
 * @todo For the modularisation of v1.11 this will need to become a callback, so
 *   the sort and filter methods can subscribe to it. That will required
 *   initialisation options for sorting, which is why it is not already baked in
 */
function _fnInvalidate( settings, rowIdx, src, colIdx )
{
	var row = settings.aoData[ rowIdx ];
	var i, ien;
	var cellWrite = function ( cell, col ) {
		// This is very frustrating, but in IE if you just write directly
		// to innerHTML, and elements that are overwritten are GC'ed,
		// even if there is a reference to them elsewhere
		while ( cell.childNodes.length ) {
			cell.removeChild( cell.firstChild );
		}

		cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
	};

	// Are we reading last data from DOM or the data object?
	if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
		// Read the data from the DOM
		row._aData = _fnGetRowElements(
				settings, row, colIdx, colIdx === undefined ? undefined : row._aData
			)
			.data;
	}
	else {
		// Reading from data object, update the DOM
		var cells = row.anCells;

		if ( cells ) {
			if ( colIdx !== undefined ) {
				cellWrite( cells[colIdx], colIdx );
			}
			else {
				for ( i=0, ien=cells.length ; i<ien ; i++ ) {
					cellWrite( cells[i], i );
				}
			}
		}
	}

	// For both row and cell invalidation, the cached data for sorting and
	// filtering is nulled out
	row._aSortData = null;
	row._aFilterData = null;

	// Invalidate the type for a specific column (if given) or all columns since
	// the data might have changed
	var cols = settings.aoColumns;
	if ( colIdx !== undefined ) {
		cols[ colIdx ].sType = null;
	}
	else {
		for ( i=0, ien=cols.length ; i<ien ; i++ ) {
			cols[i].sType = null;
		}

		// Update DataTables special `DT_*` attributes for the row
		_fnRowAttributes( settings, row );
	}
}


/**
 * Build a data source object from an HTML row, reading the contents of the
 * cells that are in the row.
 *
 * @param {object} settings DataTables settings object
 * @param {node|object} TR element from which to read data or existing row
 *   object from which to re-read the data from the cells
 * @param {int} [colIdx] Optional column index
 * @param {array|object} [d] Data source object. If `colIdx` is given then this
 *   parameter should also be given and will be used to write the data into.
 *   Only the column in question will be written
 * @returns {object} Object with two parameters: `data` the data read, in
 *   document order, and `cells` and array of nodes (they can be useful to the
 *   caller, so rather than needing a second traversal to get them, just return
 *   them from here).
 * @memberof DataTable#oApi
 */
function _fnGetRowElements( settings, row, colIdx, d )
{
	var
		tds = [],
		td = row.firstChild,
		name, col, o, i=0, contents,
		columns = settings.aoColumns,
		objectRead = settings._rowReadObject;

	// Allow the data object to be passed in, or construct
	d = d !== undefined ?
		d :
		objectRead ?
			{} :
			[];

	var attr = function ( str, td  ) {
		if ( typeof str === 'string' ) {
			var idx = str.indexOf('@');

			if ( idx !== -1 ) {
				var attr = str.substring( idx+1 );
				var setter = _fnSetObjectDataFn( str );
				setter( d, td.getAttribute( attr ) );
			}
		}
	};

	// Read data from a cell and store into the data object
	var cellProcess = function ( cell ) {
		if ( colIdx === undefined || colIdx === i ) {
			col = columns[i];
			contents = (cell.innerHTML).trim();

			if ( col && col._bAttrSrc ) {
				var setter = _fnSetObjectDataFn( col.mData._ );
				setter( d, contents );

				attr( col.mData.sort, cell );
				attr( col.mData.type, cell );
				attr( col.mData.filter, cell );
			}
			else {
				// Depending on the `data` option for the columns the data can
				// be read to either an object or an array.
				if ( objectRead ) {
					if ( ! col._setter ) {
						// Cache the setter function
						col._setter = _fnSetObjectDataFn( col.mData );
					}
					col._setter( d, contents );
				}
				else {
					d[i] = contents;
				}
			}
		}

		i++;
	};

	if ( td ) {
		// `tr` element was passed in
		while ( td ) {
			name = td.nodeName.toUpperCase();

			if ( name == "TD" || name == "TH" ) {
				cellProcess( td );
				tds.push( td );
			}

			td = td.nextSibling;
		}
	}
	else {
		// Existing row object passed in
		tds = row.anCells;

		for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
			cellProcess( tds[j] );
		}
	}

	// Read the ID from the DOM if present
	var rowNode = row.firstChild ? row : row.nTr;

	if ( rowNode ) {
		var id = rowNode.getAttribute( 'id' );

		if ( id ) {
			_fnSetObjectDataFn( settings.rowId )( d, id );
		}
	}

	return {
		data: d,
		cells: tds
	};
}
/**
 * Create a new TR element (and it's TD children) for a row
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iRow Row to consider
 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
 *    DataTables will create a row automatically
 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
 *    if nTr is.
 *  @memberof DataTable#oApi
 */
function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
{
	var
		row = oSettings.aoData[iRow],
		rowData = row._aData,
		cells = [],
		nTr, nTd, oCol,
		i, iLen, create;

	if ( row.nTr === null )
	{
		nTr = nTrIn || document.createElement('tr');

		row.nTr = nTr;
		row.anCells = cells;

		/* Use a private property on the node to allow reserve mapping from the node
		 * to the aoData array for fast look up
		 */
		nTr._DT_RowIndex = iRow;

		/* Special parameters can be given by the data source to be used on the row */
		_fnRowAttributes( oSettings, row );

		/* Process each column */
		for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
		{
			oCol = oSettings.aoColumns[i];
			create = nTrIn ? false : true;

			nTd = create ? document.createElement( oCol.sCellType ) : anTds[i];

			if (! nTd) {
				_fnLog( oSettings, 0, 'Incorrect column count', 18 );
			}

			nTd._DT_CellIndex = {
				row: iRow,
				column: i
			};
			
			cells.push( nTd );

			// Need to create the HTML if new, or if a rendering function is defined
			if ( create || ((oCol.mRender || oCol.mData !== i) &&
				 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
			)) {
				nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
			}

			/* Add user defined class */
			if ( oCol.sClass )
			{
				nTd.className += ' '+oCol.sClass;
			}

			// Visibility - add or remove as required
			if ( oCol.bVisible && ! nTrIn )
			{
				nTr.appendChild( nTd );
			}
			else if ( ! oCol.bVisible && nTrIn )
			{
				nTd.parentNode.removeChild( nTd );
			}

			if ( oCol.fnCreatedCell )
			{
				oCol.fnCreatedCell.call( oSettings.oInstance,
					nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
				);
			}
		}

		_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow, cells] );
	}
}


/**
 * Add attributes to a row based on the special `DT_*` parameters in a data
 * source object.
 *  @param {object} settings DataTables settings object
 *  @param {object} DataTables row object for the row to be modified
 *  @memberof DataTable#oApi
 */
function _fnRowAttributes( settings, row )
{
	var tr = row.nTr;
	var data = row._aData;

	if ( tr ) {
		var id = settings.rowIdFn( data );

		if ( id ) {
			tr.id = id;
		}

		if ( data.DT_RowClass ) {
			// Remove any classes added by DT_RowClass before
			var a = data.DT_RowClass.split(' ');
			row.__rowc = row.__rowc ?
				_unique( row.__rowc.concat( a ) ) :
				a;

			$(tr)
				.removeClass( row.__rowc.join(' ') )
				.addClass( data.DT_RowClass );
		}

		if ( data.DT_RowAttr ) {
			$(tr).attr( data.DT_RowAttr );
		}

		if ( data.DT_RowData ) {
			$(tr).data( data.DT_RowData );
		}
	}
}


/**
 * Create the HTML header for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnBuildHead( oSettings )
{
	var i, ien, cell, row, column;
	var thead = oSettings.nTHead;
	var tfoot = oSettings.nTFoot;
	var createHeader = $('th, td', thead).length === 0;
	var classes = oSettings.oClasses;
	var columns = oSettings.aoColumns;

	if ( createHeader ) {
		row = $('<tr/>').appendTo( thead );
	}

	for ( i=0, ien=columns.length ; i<ien ; i++ ) {
		column = columns[i];
		cell = $( column.nTh ).addClass( column.sClass );

		if ( createHeader ) {
			cell.appendTo( row );
		}

		// 1.11 move into sorting
		if ( oSettings.oFeatures.bSort ) {
			cell.addClass( column.sSortingClass );

			if ( column.bSortable !== false ) {
				cell
					.attr( 'tabindex', oSettings.iTabIndex )
					.attr( 'aria-controls', oSettings.sTableId );

				_fnSortAttachListener( oSettings, column.nTh, i );
			}
		}

		if ( column.sTitle != cell[0].innerHTML ) {
			cell.html( column.sTitle );
		}

		_fnRenderer( oSettings, 'header' )(
			oSettings, cell, column, classes
		);
	}

	if ( createHeader ) {
		_fnDetectHeader( oSettings.aoHeader, thead );
	}

	/* Deal with the footer - add classes if required */
	$(thead).children('tr').children('th, td').addClass( classes.sHeaderTH );
	$(tfoot).children('tr').children('th, td').addClass( classes.sFooterTH );

	// Cache the footer cells. Note that we only take the cells from the first
	// row in the footer. If there is more than one row the user wants to
	// interact with, they need to use the table().foot() method. Note also this
	// allows cells to be used for multiple columns using colspan
	if ( tfoot !== null ) {
		var cells = oSettings.aoFooter[0];

		for ( i=0, ien=cells.length ; i<ien ; i++ ) {
			column = columns[i];

			if (column) {
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
			else {
				_fnLog( oSettings, 0, 'Incorrect column count', 18 );
			}
		}
	}
}


/**
 * Draw the header (or footer) element based on the column visibility states. The
 * methodology here is to use the layout array from _fnDetectHeader, modified for
 * the instantaneous column visibility, to construct the new layout. The grid is
 * traversed over cell at a time in a rows x columns grid fashion, although each
 * cell insert can cover multiple elements in the grid - which is tracks using the
 * aApplied array. Cell inserts in the grid will only occur where there isn't
 * already a cell in that position.
 *  @param {object} oSettings dataTables settings object
 *  @param array {objects} aoSource Layout array from _fnDetectHeader
 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
 *  @memberof DataTable#oApi
 */
function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
{
	var i, iLen, j, jLen, k, kLen, n, nLocalTr;
	var aoLocal = [];
	var aApplied = [];
	var iColumns = oSettings.aoColumns.length;
	var iRowspan, iColspan;

	if ( ! aoSource )
	{
		return;
	}

	if (  bIncludeHidden === undefined )
	{
		bIncludeHidden = false;
	}

	/* Make a copy of the master layout array, but without the visible columns in it */
	for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
	{
		aoLocal[i] = aoSource[i].slice();
		aoLocal[i].nTr = aoSource[i].nTr;

		/* Remove any columns which are currently hidden */
		for ( j=iColumns-1 ; j>=0 ; j-- )
		{
			if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
			{
				aoLocal[i].splice( j, 1 );
			}
		}

		/* Prep the applied array - it needs an element for each row */
		aApplied.push( [] );
	}

	for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
	{
		nLocalTr = aoLocal[i].nTr;

		/* All cells are going to be replaced, so empty out the row */
		if ( nLocalTr )
		{
			while( (n = nLocalTr.firstChild) )
			{
				nLocalTr.removeChild( n );
			}
		}

		for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
		{
			iRowspan = 1;
			iColspan = 1;

			/* Check to see if there is already a cell (row/colspan) covering our target
			 * insert point. If there is, then there is nothing to do.
			 */
			if ( aApplied[i][j] === undefined )
			{
				nLocalTr.appendChild( aoLocal[i][j].cell );
				aApplied[i][j] = 1;

				/* Expand the cell to cover as many rows as needed */
				while ( aoLocal[i+iRowspan] !== undefined &&
				        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
				{
					aApplied[i+iRowspan][j] = 1;
					iRowspan++;
				}

				/* Expand the cell to cover as many columns as needed */
				while ( aoLocal[i][j+iColspan] !== undefined &&
				        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
				{
					/* Must update the applied array over the rows for the columns */
					for ( k=0 ; k<iRowspan ; k++ )
					{
						aApplied[i+k][j+iColspan] = 1;
					}
					iColspan++;
				}

				/* Do the actual expansion in the DOM */
				$(aoLocal[i][j].cell)
					.attr('rowspan', iRowspan)
					.attr('colspan', iColspan);
			}
		}
	}
}


/**
 * Insert the required TR nodes into the table for display
 *  @param {object} oSettings dataTables settings object
 *  @param ajaxComplete true after ajax call to complete rendering
 *  @memberof DataTable#oApi
 */
function _fnDraw( oSettings, ajaxComplete )
{
	// Allow for state saving and a custom start position
	_fnStart( oSettings );

	/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
	var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
	if ( $.inArray( false, aPreDraw ) !== -1 )
	{
		_fnProcessingDisplay( oSettings, false );
		return;
	}

	var anRows = [];
	var iRowCount = 0;
	var asStripeClasses = oSettings.asStripeClasses;
	var iStripes = asStripeClasses.length;
	var oLang = oSettings.oLanguage;
	var bServerSide = _fnDataSource( oSettings ) == 'ssp';
	var aiDisplay = oSettings.aiDisplay;
	var iDisplayStart = oSettings._iDisplayStart;
	var iDisplayEnd = oSettings.fnDisplayEnd();

	oSettings.bDrawing = true;

	/* Server-side processing draw intercept */
	if ( oSettings.bDeferLoading )
	{
		oSettings.bDeferLoading = false;
		oSettings.iDraw++;
		_fnProcessingDisplay( oSettings, false );
	}
	else if ( !bServerSide )
	{
		oSettings.iDraw++;
	}
	else if ( !oSettings.bDestroying && !ajaxComplete)
	{
		_fnAjaxUpdate( oSettings );
		return;
	}

	if ( aiDisplay.length !== 0 )
	{
		var iStart = bServerSide ? 0 : iDisplayStart;
		var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;

		for ( var j=iStart ; j<iEnd ; j++ )
		{
			var iDataIndex = aiDisplay[j];
			var aoData = oSettings.aoData[ iDataIndex ];
			if ( aoData.nTr === null )
			{
				_fnCreateTr( oSettings, iDataIndex );
			}

			var nRow = aoData.nTr;

			/* Remove the old striping classes and then add the new one */
			if ( iStripes !== 0 )
			{
				var sStripe = asStripeClasses[ iRowCount % iStripes ];
				if ( aoData._sRowStripe != sStripe )
				{
					$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
					aoData._sRowStripe = sStripe;
				}
			}

			// Row callback functions - might want to manipulate the row
			// iRowCount and j are not currently documented. Are they at all
			// useful?
			_fnCallbackFire( oSettings, 'aoRowCallback', null,
				[nRow, aoData._aData, iRowCount, j, iDataIndex] );

			anRows.push( nRow );
			iRowCount++;
		}
	}
	else
	{
		/* Table is empty - create a row with an empty message in it */
		var sZero = oLang.sZeroRecords;
		if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
		{
			sZero = oLang.sLoadingRecords;
		}
		else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
		{
			sZero = oLang.sEmptyTable;
		}

		anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
			.append( $('<td />', {
				'valign':  'top',
				'colSpan': _fnVisbleColumns( oSettings ),
				'class':   oSettings.oClasses.sRowEmpty
			} ).html( sZero ) )[0];
	}

	/* Header and footer callbacks */
	_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
		_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

	_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
		_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

	var body = $(oSettings.nTBody);

	body.children().detach();
	body.append( $(anRows) );

	/* Call all required callback functions for the end of a draw */
	_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );

	/* Draw is complete, sorting and filtering must be as well */
	oSettings.bSorted = false;
	oSettings.bFiltered = false;
	oSettings.bDrawing = false;
}


/**
 * Redraw the table - taking account of the various features which are enabled
 *  @param {object} oSettings dataTables settings object
 *  @param {boolean} [holdPosition] Keep the current paging position. By default
 *    the paging is reset to the first page
 *  @memberof DataTable#oApi
 */
function _fnReDraw( settings, holdPosition )
{
	var
		features = settings.oFeatures,
		sort     = features.bSort,
		filter   = features.bFilter;

	if ( sort ) {
		_fnSort( settings );
	}

	if ( filter ) {
		_fnFilterComplete( settings, settings.oPreviousSearch );
	}
	else {
		// No filtering, so we want to just use the display master
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	}

	if ( holdPosition !== true ) {
		settings._iDisplayStart = 0;
	}

	// Let any modules know about the draw hold position state (used by
	// scrolling internally)
	settings._drawHold = holdPosition;

	_fnDraw( settings );

	settings._drawHold = false;
}


/**
 * Add the options to the page HTML for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnAddOptionsHtml ( oSettings )
{
	var classes = oSettings.oClasses;
	var table = $(oSettings.nTable);
	var holding = $('<div/>').insertBefore( table ); // Holding element for speed
	var features = oSettings.oFeatures;

	// All DataTables are wrapped in a div
	var insert = $('<div/>', {
		id:      oSettings.sTableId+'_wrapper',
		'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
	} );

	oSettings.nHolding = holding[0];
	oSettings.nTableWrapper = insert[0];
	oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

	/* Loop over the user set positioning and place the elements as needed */
	var aDom = oSettings.sDom.split('');
	var featureNode, cOption, nNewNode, cNext, sAttr, j;
	for ( var i=0 ; i<aDom.length ; i++ )
	{
		featureNode = null;
		cOption = aDom[i];

		if ( cOption == '<' )
		{
			/* New container div */
			nNewNode = $('<div/>')[0];

			/* Check to see if we should append an id and/or a class name to the container */
			cNext = aDom[i+1];
			if ( cNext == "'" || cNext == '"' )
			{
				sAttr = "";
				j = 2;
				while ( aDom[i+j] != cNext )
				{
					sAttr += aDom[i+j];
					j++;
				}

				/* Replace jQuery UI constants @todo depreciated */
				if ( sAttr == "H" )
				{
					sAttr = classes.sJUIHeader;
				}
				else if ( sAttr == "F" )
				{
					sAttr = classes.sJUIFooter;
				}

				/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
				 * breaks the string into parts and applies them as needed
				 */
				if ( sAttr.indexOf('.') != -1 )
				{
					var aSplit = sAttr.split('.');
					nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
					nNewNode.className = aSplit[1];
				}
				else if ( sAttr.charAt(0) == "#" )
				{
					nNewNode.id = sAttr.substr(1, sAttr.length-1);
				}
				else
				{
					nNewNode.className = sAttr;
				}

				i += j; /* Move along the position array */
			}

			insert.append( nNewNode );
			insert = $(nNewNode);
		}
		else if ( cOption == '>' )
		{
			/* End container div */
			insert = insert.parent();
		}
		// @todo Move options into their own plugins?
		else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
		{
			/* Length */
			featureNode = _fnFeatureHtmlLength( oSettings );
		}
		else if ( cOption == 'f' && features.bFilter )
		{
			/* Filter */
			featureNode = _fnFeatureHtmlFilter( oSettings );
		}
		else if ( cOption == 'r' && features.bProcessing )
		{
			/* pRocessing */
			featureNode = _fnFeatureHtmlProcessing( oSettings );
		}
		else if ( cOption == 't' )
		{
			/* Table */
			featureNode = _fnFeatureHtmlTable( oSettings );
		}
		else if ( cOption ==  'i' && features.bInfo )
		{
			/* Info */
			featureNode = _fnFeatureHtmlInfo( oSettings );
		}
		else if ( cOption == 'p' && features.bPaginate )
		{
			/* Pagination */
			featureNode = _fnFeatureHtmlPaginate( oSettings );
		}
		else if ( DataTable.ext.feature.length !== 0 )
		{
			/* Plug-in features */
			var aoFeatures = DataTable.ext.feature;
			for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
			{
				if ( cOption == aoFeatures[k].cFeature )
				{
					featureNode = aoFeatures[k].fnInit( oSettings );
					break;
				}
			}
		}

		/* Add to the 2D features array */
		if ( featureNode )
		{
			var aanFeatures = oSettings.aanFeatures;

			if ( ! aanFeatures[cOption] )
			{
				aanFeatures[cOption] = [];
			}

			aanFeatures[cOption].push( featureNode );
			insert.append( featureNode );
		}
	}

	/* Built our DOM structure - replace the holding div with what we want */
	holding.replaceWith( insert );
	oSettings.nHolding = null;
}


/**
 * Use the DOM source to create up an array of header cells. The idea here is to
 * create a layout grid (array) of rows x columns, which contains a reference
 * to the cell that that point in the grid (regardless of col/rowspan), such that
 * any column / row could be removed and the new grid constructed
 *  @param array {object} aLayout Array to store the calculated layout in
 *  @param {node} nThead The header/footer element for the table
 *  @memberof DataTable#oApi
 */
function _fnDetectHeader ( aLayout, nThead )
{
	var nTrs = $(nThead).children('tr');
	var nTr, nCell;
	var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
	var bUnique;
	var fnShiftCol = function ( a, i, j ) {
		var k = a[i];
                while ( k[j] ) {
			j++;
		}
		return j;
	};

	aLayout.splice( 0, aLayout.length );

	/* We know how many rows there are in the layout - so prep it */
	for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
	{
		aLayout.push( [] );
	}

	/* Calculate a layout array */
	for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
	{
		nTr = nTrs[i];
		iColumn = 0;

		/* For every cell in the row... */
		nCell = nTr.firstChild;
		while ( nCell ) {
			if ( nCell.nodeName.toUpperCase() == "TD" ||
			     nCell.nodeName.toUpperCase() == "TH" )
			{
				/* Get the col and rowspan attributes from the DOM and sanitise them */
				iColspan = nCell.getAttribute('colspan') * 1;
				iRowspan = nCell.getAttribute('rowspan') * 1;
				iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
				iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;

				/* There might be colspan cells already in this row, so shift our target
				 * accordingly
				 */
				iColShifted = fnShiftCol( aLayout, i, iColumn );

				/* Cache calculation for unique columns */
				bUnique = iColspan === 1 ? true : false;

				/* If there is col / rowspan, copy the information into the layout grid */
				for ( l=0 ; l<iColspan ; l++ )
				{
					for ( k=0 ; k<iRowspan ; k++ )
					{
						aLayout[i+k][iColShifted+l] = {
							"cell": nCell,
							"unique": bUnique
						};
						aLayout[i+k].nTr = nTr;
					}
				}
			}
			nCell = nCell.nextSibling;
		}
	}
}


/**
 * Get an array of unique th elements, one for each column
 *  @param {object} oSettings dataTables settings object
 *  @param {node} nHeader automatically detect the layout from this node - optional
 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
 *  @returns array {node} aReturn list of unique th's
 *  @memberof DataTable#oApi
 */
function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
{
	var aReturn = [];
	if ( !aLayout )
	{
		aLayout = oSettings.aoHeader;
		if ( nHeader )
		{
			aLayout = [];
			_fnDetectHeader( aLayout, nHeader );
		}
	}

	for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
	{
		for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
		{
			if ( aLayout[i][j].unique &&
				 (!aReturn[j] || !oSettings.bSortCellsTop) )
			{
				aReturn[j] = aLayout[i][j].cell;
			}
		}
	}

	return aReturn;
}

/**
 * Set the start position for draw
 *  @param {object} oSettings dataTables settings object
 */
function _fnStart( oSettings )
{
	var bServerSide = _fnDataSource( oSettings ) == 'ssp';
	var iInitDisplayStart = oSettings.iInitDisplayStart;

	// Check and see if we have an initial draw position from state saving
	if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
	{
		oSettings._iDisplayStart = bServerSide ?
			iInitDisplayStart :
			iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
				0 :
				iInitDisplayStart;

		oSettings.iInitDisplayStart = -1;
	}
}

/**
 * Create an Ajax call based on the table's settings, taking into account that
 * parameters can have multiple forms, and backwards compatibility.
 *
 * @param {object} oSettings dataTables settings object
 * @param {array} data Data to send to the server, required by
 *     DataTables - may be augmented by developer callbacks
 * @param {function} fn Callback function to run when data is obtained
 */
function _fnBuildAjax( oSettings, data, fn )
{
	// Compatibility with 1.9-, allow fnServerData and event to manipulate
	_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );

	// Convert to object based for 1.10+ if using the old array scheme which can
	// come from server-side processing or serverParams
	if ( data && Array.isArray(data) ) {
		var tmp = {};
		var rbracket = /(.*?)\[\]$/;

		$.each( data, function (key, val) {
			var match = val.name.match(rbracket);

			if ( match ) {
				// Support for arrays
				var name = match[0];

				if ( ! tmp[ name ] ) {
					tmp[ name ] = [];
				}
				tmp[ name ].push( val.value );
			}
			else {
				tmp[val.name] = val.value;
			}
		} );
		data = tmp;
	}

	var ajaxData;
	var ajax = oSettings.ajax;
	var instance = oSettings.oInstance;
	var callback = function ( json ) {
		var status = oSettings.jqXHR
			? oSettings.jqXHR.status
			: null;

		if ( json === null || (typeof status === 'number' && status == 204 ) ) {
			json = {};
			_fnAjaxDataSrc( oSettings, json, [] );
		}

		var error = json.error || json.sError;
		if ( error ) {
			_fnLog( oSettings, 0, error );
		}

		oSettings.json = json;

		_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
		fn( json );
	};

	if ( $.isPlainObject( ajax ) && ajax.data )
	{
		ajaxData = ajax.data;

		var newData = typeof ajaxData === 'function' ?
			ajaxData( data, oSettings ) :  // fn can manipulate data or return
			ajaxData;                      // an object object or array to merge

		// If the function returned something, use that alone
		data = typeof ajaxData === 'function' && newData ?
			newData :
			$.extend( true, data, newData );

		// Remove the data property as we've resolved it already and don't want
		// jQuery to do it again (it is restored at the end of the function)
		delete ajax.data;
	}

	var baseAjax = {
		"data": data,
		"success": callback,
		"dataType": "json",
		"cache": false,
		"type": oSettings.sServerMethod,
		"error": function (xhr, error, thrown) {
			var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );

			if ( $.inArray( true, ret ) === -1 ) {
				if ( error == "parsererror" ) {
					_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
				}
				else if ( xhr.readyState === 4 ) {
					_fnLog( oSettings, 0, 'Ajax error', 7 );
				}
			}

			_fnProcessingDisplay( oSettings, false );
		}
	};

	// Store the data submitted for the API
	oSettings.oAjaxData = data;

	// Allow plug-ins and external processes to modify the data
	_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );

	if ( oSettings.fnServerData )
	{
		// DataTables 1.9- compatibility
		oSettings.fnServerData.call( instance,
			oSettings.sAjaxSource,
			$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
				return { name: key, value: val };
			} ),
			callback,
			oSettings
		);
	}
	else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
	{
		// DataTables 1.9- compatibility
		oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
			url: ajax || oSettings.sAjaxSource
		} ) );
	}
	else if ( typeof ajax === 'function' )
	{
		// Is a function - let the caller define what needs to be done
		oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
	}
	else
	{
		// Object to extend the base settings
		oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );

		// Restore for next time around
		ajax.data = ajaxData;
	}
}


/**
 * Update the table using an Ajax call
 *  @param {object} settings dataTables settings object
 *  @returns {boolean} Block the table drawing or not
 *  @memberof DataTable#oApi
 */
function _fnAjaxUpdate( settings )
{
	settings.iDraw++;
	_fnProcessingDisplay( settings, true );

	// Keep track of drawHold state to handle scrolling after the Ajax call
	var drawHold = settings._drawHold;

	_fnBuildAjax(
		settings,
		_fnAjaxParameters( settings ),
		function(json) {
			settings._drawHold = drawHold;
			_fnAjaxUpdateDraw( settings, json );
			settings._drawHold = false;
		}
	);
}


/**
 * Build up the parameters in an object needed for a server-side processing
 * request. Note that this is basically done twice, is different ways - a modern
 * method which is used by default in DataTables 1.10 which uses objects and
 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
 * the sAjaxSource option is used in the initialisation, or the legacyAjax
 * option is set.
 *  @param {object} oSettings dataTables settings object
 *  @returns {bool} block the table drawing or not
 *  @memberof DataTable#oApi
 */
function _fnAjaxParameters( settings )
{
	var
		columns = settings.aoColumns,
		columnCount = columns.length,
		features = settings.oFeatures,
		preSearch = settings.oPreviousSearch,
		preColSearch = settings.aoPreSearchCols,
		i, data = [], dataProp, column, columnSearch,
		sort = _fnSortFlatten( settings ),
		displayStart = settings._iDisplayStart,
		displayLength = features.bPaginate !== false ?
			settings._iDisplayLength :
			-1;

	var param = function ( name, value ) {
		data.push( { 'name': name, 'value': value } );
	};

	// DataTables 1.9- compatible method
	param( 'sEcho',          settings.iDraw );
	param( 'iColumns',       columnCount );
	param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
	param( 'iDisplayStart',  displayStart );
	param( 'iDisplayLength', displayLength );

	// DataTables 1.10+ method
	var d = {
		draw:    settings.iDraw,
		columns: [],
		order:   [],
		start:   displayStart,
		length:  displayLength,
		search:  {
			value: preSearch.sSearch,
			regex: preSearch.bRegex
		}
	};

	for ( i=0 ; i<columnCount ; i++ ) {
		column = columns[i];
		columnSearch = preColSearch[i];
		dataProp = typeof column.mData=="function" ? 'function' : column.mData ;

		d.columns.push( {
			data:       dataProp,
			name:       column.sName,
			searchable: column.bSearchable,
			orderable:  column.bSortable,
			search:     {
				value: columnSearch.sSearch,
				regex: columnSearch.bRegex
			}
		} );

		param( "mDataProp_"+i, dataProp );

		if ( features.bFilter ) {
			param( 'sSearch_'+i,     columnSearch.sSearch );
			param( 'bRegex_'+i,      columnSearch.bRegex );
			param( 'bSearchable_'+i, column.bSearchable );
		}

		if ( features.bSort ) {
			param( 'bSortable_'+i, column.bSortable );
		}
	}

	if ( features.bFilter ) {
		param( 'sSearch', preSearch.sSearch );
		param( 'bRegex', preSearch.bRegex );
	}

	if ( features.bSort ) {
		$.each( sort, function ( i, val ) {
			d.order.push( { column: val.col, dir: val.dir } );

			param( 'iSortCol_'+i, val.col );
			param( 'sSortDir_'+i, val.dir );
		} );

		param( 'iSortingCols', sort.length );
	}

	// If the legacy.ajax parameter is null, then we automatically decide which
	// form to use, based on sAjaxSource
	var legacy = DataTable.ext.legacy.ajax;
	if ( legacy === null ) {
		return settings.sAjaxSource ? data : d;
	}

	// Otherwise, if legacy has been specified then we use that to decide on the
	// form
	return legacy ? data : d;
}


/**
 * Data the data from the server (nuking the old) and redraw the table
 *  @param {object} oSettings dataTables settings object
 *  @param {object} json json data return from the server.
 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
 *  @param {array} json.aaData The data to display on this page
 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
 *  @memberof DataTable#oApi
 */
function _fnAjaxUpdateDraw ( settings, json )
{
	// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
	// Support both
	var compat = function ( old, modern ) {
		return json[old] !== undefined ? json[old] : json[modern];
	};

	var data = _fnAjaxDataSrc( settings, json );
	var draw            = compat( 'sEcho',                'draw' );
	var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
	var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );

	if ( draw !== undefined ) {
		// Protect against out of sequence returns
		if ( draw*1 < settings.iDraw ) {
			return;
		}
		settings.iDraw = draw * 1;
	}

	// No data in returned object, so rather than an array, we show an empty table
	if ( ! data ) {
		data = [];
	}

	_fnClearTable( settings );
	settings._iRecordsTotal   = parseInt(recordsTotal, 10);
	settings._iRecordsDisplay = parseInt(recordsFiltered, 10);

	for ( var i=0, ien=data.length ; i<ien ; i++ ) {
		_fnAddData( settings, data[i] );
	}
	settings.aiDisplay = settings.aiDisplayMaster.slice();

	_fnDraw( settings, true );

	if ( ! settings._bInitComplete ) {
		_fnInitComplete( settings, json );
	}

	_fnProcessingDisplay( settings, false );
}


/**
 * Get the data from the JSON data source to use for drawing a table. Using
 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
 * source object, or from a processing function.
 *  @param {object} oSettings dataTables settings object
 *  @param  {object} json Data source object / array from the server
 *  @return {array} Array of data to use
 */
 function _fnAjaxDataSrc ( oSettings, json, write )
 {
	var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
		oSettings.ajax.dataSrc :
		oSettings.sAjaxDataProp; // Compatibility with 1.9-.

	if ( ! write ) {
		if ( dataSrc === 'data' ) {
			// If the default, then we still want to support the old style, and safely ignore
			// it if possible
			return json.aaData || json[dataSrc];
		}

		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}

	// set
	_fnSetObjectDataFn( dataSrc )( json, write );
}

/**
 * Generate the node required for filtering text
 *  @returns {node} Filter control element
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlFilter ( settings )
{
	var classes = settings.oClasses;
	var tableId = settings.sTableId;
	var language = settings.oLanguage;
	var previousSearch = settings.oPreviousSearch;
	var features = settings.aanFeatures;
	var input = '<input type="search" class="'+classes.sFilterInput+'"/>';

	var str = language.sSearch;
	str = str.match(/_INPUT_/) ?
		str.replace('_INPUT_', input) :
		str+input;

	var filter = $('<div/>', {
			'id': ! features.f ? tableId+'_filter' : null,
			'class': classes.sFilter
		} )
		.append( $('<label/>' ).append( str ) );

	var searchFn = function(event) {
		/* Update all other filter input elements for the new display */
		var n = features.f;
		var val = !this.value ? "" : this.value; // mental IE8 fix :-(
		if(previousSearch['return'] && event.key !== "Enter") {
			return;
		}
		/* Now do the filter */
		if ( val != previousSearch.sSearch ) {
			_fnFilterComplete( settings, {
				"sSearch": val,
				"bRegex": previousSearch.bRegex,
				"bSmart": previousSearch.bSmart ,
				"bCaseInsensitive": previousSearch.bCaseInsensitive,
				"return": previousSearch['return']
			} );

			// Need to redraw, without resorting
			settings._iDisplayStart = 0;
			_fnDraw( settings );
		}
	};

	var searchDelay = settings.searchDelay !== null ?
		settings.searchDelay :
		_fnDataSource( settings ) === 'ssp' ?
			400 :
			0;

	var jqFilter = $('input', filter)
		.val( previousSearch.sSearch )
		.attr( 'placeholder', language.sSearchPlaceholder )
		.on(
			'keyup.DT search.DT input.DT paste.DT cut.DT',
			searchDelay ?
				_fnThrottle( searchFn, searchDelay ) :
				searchFn
		)
		.on( 'mouseup.DT', function(e) {
			// Edge fix! Edge 17 does not trigger anything other than mouse events when clicking
			// on the clear icon (Edge bug 17584515). This is safe in other browsers as `searchFn`
			// checks the value to see if it has changed. In other browsers it won't have.
			setTimeout( function () {
				searchFn.call(jqFilter[0], e);
			}, 10);
		} )
		.on( 'keypress.DT', function(e) {
			/* Prevent form submission */
			if ( e.keyCode == 13 ) {
				return false;
			}
		} )
		.attr('aria-controls', tableId);

	// Update the input elements whenever the table is filtered
	$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
		if ( settings === s ) {
			// IE9 throws an 'unknown error' if document.activeElement is used
			// inside an iframe or frame...
			try {
				if ( jqFilter[0] !== document.activeElement ) {
					jqFilter.val( previousSearch.sSearch );
				}
			}
			catch ( e ) {}
		}
	} );

	return filter[0];
}


/**
 * Filter the table using both the global filter and column based filtering
 *  @param {object} oSettings dataTables settings object
 *  @param {object} oSearch search information
 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
 *  @memberof DataTable#oApi
 */
function _fnFilterComplete ( oSettings, oInput, iForce )
{
	var oPrevSearch = oSettings.oPreviousSearch;
	var aoPrevSearch = oSettings.aoPreSearchCols;
	var fnSaveFilter = function ( oFilter ) {
		/* Save the filtering values */
		oPrevSearch.sSearch = oFilter.sSearch;
		oPrevSearch.bRegex = oFilter.bRegex;
		oPrevSearch.bSmart = oFilter.bSmart;
		oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		oPrevSearch['return'] = oFilter['return'];
	};
	var fnRegex = function ( o ) {
		// Backwards compatibility with the bEscapeRegex option
		return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
	};

	// Resolve any column types that are unknown due to addition or invalidation
	// @todo As per sort - can this be moved into an event handler?
	_fnColumnTypes( oSettings );

	/* In server-side processing all filtering is done by the server, so no point hanging around here */
	if ( _fnDataSource( oSettings ) != 'ssp' )
	{
		/* Global filter */
		_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
		fnSaveFilter( oInput );

		/* Now do the individual column filter */
		for ( var i=0 ; i<aoPrevSearch.length ; i++ )
		{
			_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
				aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
		}

		/* Custom filtering */
		_fnFilterCustom( oSettings );
	}
	else
	{
		fnSaveFilter( oInput );
	}

	/* Tell the draw function we have been filtering */
	oSettings.bFiltered = true;
	_fnCallbackFire( oSettings, null, 'search', [oSettings] );
}


/**
 * Apply custom filtering functions
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnFilterCustom( settings )
{
	var filters = DataTable.ext.search;
	var displayRows = settings.aiDisplay;
	var row, rowIdx;

	for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
		var rows = [];

		// Loop over each row and see if it should be included
		for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
			rowIdx = displayRows[ j ];
			row = settings.aoData[ rowIdx ];

			if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
				rows.push( rowIdx );
			}
		}

		// So the array reference doesn't break set the results into the
		// existing array
		displayRows.length = 0;
		$.merge( displayRows, rows );
	}
}


/**
 * Filter the table on a per-column basis
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sInput string to filter on
 *  @param {int} iColumn column to filter
 *  @param {bool} bRegex treat search string as a regular expression or not
 *  @param {bool} bSmart use smart filtering or not
 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
 *  @memberof DataTable#oApi
 */
function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
{
	if ( searchStr === '' ) {
		return;
	}

	var data;
	var out = [];
	var display = settings.aiDisplay;
	var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );

	for ( var i=0 ; i<display.length ; i++ ) {
		data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];

		if ( rpSearch.test( data ) ) {
			out.push( display[i] );
		}
	}

	settings.aiDisplay = out;
}


/**
 * Filter the data table based on user input and draw the table
 *  @param {object} settings dataTables settings object
 *  @param {string} input string to filter on
 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
 *  @param {bool} regex treat as a regular expression or not
 *  @param {bool} smart perform smart filtering or not
 *  @param {bool} caseInsensitive Do case insensitive matching or not
 *  @memberof DataTable#oApi
 */
function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
{
	var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
	var prevSearch = settings.oPreviousSearch.sSearch;
	var displayMaster = settings.aiDisplayMaster;
	var display, invalidated, i;
	var filtered = [];

	// Need to take account of custom filtering functions - always filter
	if ( DataTable.ext.search.length !== 0 ) {
		force = true;
	}

	// Check if any of the rows were invalidated
	invalidated = _fnFilterData( settings );

	// If the input is blank - we just want the full data set
	if ( input.length <= 0 ) {
		settings.aiDisplay = displayMaster.slice();
	}
	else {
		// New search - start from the master array
		if ( invalidated ||
			 force ||
			 regex ||
			 prevSearch.length > input.length ||
			 input.indexOf(prevSearch) !== 0 ||
			 settings.bSorted // On resort, the display master needs to be
			                  // re-filtered since indexes will have changed
		) {
			settings.aiDisplay = displayMaster.slice();
		}

		// Search the display array
		display = settings.aiDisplay;

		for ( i=0 ; i<display.length ; i++ ) {
			if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
				filtered.push( display[i] );
			}
		}

		settings.aiDisplay = filtered;
	}
}


/**
 * Build a regular expression object suitable for searching a table
 *  @param {string} sSearch string to search for
 *  @param {bool} bRegex treat as a regular expression or not
 *  @param {bool} bSmart perform smart filtering or not
 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
 *  @returns {RegExp} constructed object
 *  @memberof DataTable#oApi
 */
function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
{
	search = regex ?
		search :
		_fnEscapeRegex( search );
	
	if ( smart ) {
		/* For smart filtering we want to allow the search to work regardless of
		 * word order. We also want double quoted text to be preserved, so word
		 * order is important - a la google. So this is what we want to
		 * generate:
		 * 
		 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
		 */
		var a = $.map( search.match( /["\u201C][^"\u201D]+["\u201D]|[^ ]+/g ) || [''], function ( word ) {
			if ( word.charAt(0) === '"' ) {
				var m = word.match( /^"(.*)"$/ );
				word = m ? m[1] : word;
			}
			else if ( word.charAt(0) === '\u201C' ) {
				var m = word.match( /^\u201C(.*)\u201D$/ );
				word = m ? m[1] : word;
			}

			return word.replace('"', '');
		} );

		search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
	}

	return new RegExp( search, caseInsensitive ? 'i' : '' );
}


/**
 * Escape a string such that it can be used in a regular expression
 *  @param {string} sVal string to escape
 *  @returns {string} escaped string
 *  @memberof DataTable#oApi
 */
var _fnEscapeRegex = DataTable.util.escapeRegex;

var __filter_div = $('<div>')[0];
var __filter_div_textContent = __filter_div.textContent !== undefined;

// Update the filtering data for each row if needed (by invalidation or first run)
function _fnFilterData ( settings )
{
	var columns = settings.aoColumns;
	var column;
	var i, j, ien, jen, filterData, cellData, row;
	var wasInvalidated = false;

	for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
		row = settings.aoData[i];

		if ( ! row._aFilterData ) {
			filterData = [];

			for ( j=0, jen=columns.length ; j<jen ; j++ ) {
				column = columns[j];

				if ( column.bSearchable ) {
					cellData = _fnGetCellData( settings, i, j, 'filter' );

					// Search in DataTables 1.10 is string based. In 1.11 this
					// should be altered to also allow strict type checking.
					if ( cellData === null ) {
						cellData = '';
					}

					if ( typeof cellData !== 'string' && cellData.toString ) {
						cellData = cellData.toString();
					}
				}
				else {
					cellData = '';
				}

				// If it looks like there is an HTML entity in the string,
				// attempt to decode it so sorting works as expected. Note that
				// we could use a single line of jQuery to do this, but the DOM
				// method used here is much faster https://jsperf.com/html-decode
				if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
					__filter_div.innerHTML = cellData;
					cellData = __filter_div_textContent ?
						__filter_div.textContent :
						__filter_div.innerText;
				}

				if ( cellData.replace ) {
					cellData = cellData.replace(/[\r\n\u2028]/g, '');
				}

				filterData.push( cellData );
			}

			row._aFilterData = filterData;
			row._sFilterRow = filterData.join('  ');
			wasInvalidated = true;
		}
	}

	return wasInvalidated;
}


/**
 * Convert from the internal Hungarian notation to camelCase for external
 * interaction
 *  @param {object} obj Object to convert
 *  @returns {object} Inverted object
 *  @memberof DataTable#oApi
 */
function _fnSearchToCamel ( obj )
{
	return {
		search:          obj.sSearch,
		smart:           obj.bSmart,
		regex:           obj.bRegex,
		caseInsensitive: obj.bCaseInsensitive
	};
}



/**
 * Convert from camelCase notation to the internal Hungarian. We could use the
 * Hungarian convert function here, but this is cleaner
 *  @param {object} obj Object to convert
 *  @returns {object} Inverted object
 *  @memberof DataTable#oApi
 */
function _fnSearchToHung ( obj )
{
	return {
		sSearch:          obj.search,
		bSmart:           obj.smart,
		bRegex:           obj.regex,
		bCaseInsensitive: obj.caseInsensitive
	};
}

/**
 * Generate the node required for the info display
 *  @param {object} oSettings dataTables settings object
 *  @returns {node} Information element
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlInfo ( settings )
{
	var
		tid = settings.sTableId,
		nodes = settings.aanFeatures.i,
		n = $('<div/>', {
			'class': settings.oClasses.sInfo,
			'id': ! nodes ? tid+'_info' : null
		} );

	if ( ! nodes ) {
		// Update display on each draw
		settings.aoDrawCallback.push( {
			"fn": _fnUpdateInfo,
			"sName": "information"
		} );

		n
			.attr( 'role', 'status' )
			.attr( 'aria-live', 'polite' );

		// Table is described by our info div
		$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
	}

	return n[0];
}


/**
 * Update the information elements in the display
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnUpdateInfo ( settings )
{
	/* Show information about the table */
	var nodes = settings.aanFeatures.i;
	if ( nodes.length === 0 ) {
		return;
	}

	var
		lang  = settings.oLanguage,
		start = settings._iDisplayStart+1,
		end   = settings.fnDisplayEnd(),
		max   = settings.fnRecordsTotal(),
		total = settings.fnRecordsDisplay(),
		out   = total ?
			lang.sInfo :
			lang.sInfoEmpty;

	if ( total !== max ) {
		/* Record set after filtering */
		out += ' ' + lang.sInfoFiltered;
	}

	// Convert the macros
	out += lang.sInfoPostFix;
	out = _fnInfoMacros( settings, out );

	var callback = lang.fnInfoCallback;
	if ( callback !== null ) {
		out = callback.call( settings.oInstance,
			settings, start, end, max, total, out
		);
	}

	$(nodes).html( out );
}


function _fnInfoMacros ( settings, str )
{
	// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
	// internally
	var
		formatter  = settings.fnFormatNumber,
		start      = settings._iDisplayStart+1,
		len        = settings._iDisplayLength,
		vis        = settings.fnRecordsDisplay(),
		all        = len === -1;

	return str.
		replace(/_START_/g, formatter.call( settings, start ) ).
		replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
		replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
		replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
		replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
		replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
}



/**
 * Draw the table for the first time, adding all required features
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnInitialise ( settings )
{
	var i, iLen, iAjaxStart=settings.iInitDisplayStart;
	var columns = settings.aoColumns, column;
	var features = settings.oFeatures;
	var deferLoading = settings.bDeferLoading; // value modified by the draw

	/* Ensure that the table data is fully initialised */
	if ( ! settings.bInitialised ) {
		setTimeout( function(){ _fnInitialise( settings ); }, 200 );
		return;
	}

	/* Show the display HTML options */
	_fnAddOptionsHtml( settings );

	/* Build and draw the header / footer for the table */
	_fnBuildHead( settings );
	_fnDrawHead( settings, settings.aoHeader );
	_fnDrawHead( settings, settings.aoFooter );

	/* Okay to show that something is going on now */
	_fnProcessingDisplay( settings, true );

	/* Calculate sizes for columns */
	if ( features.bAutoWidth ) {
		_fnCalculateColumnWidths( settings );
	}

	for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
		column = columns[i];

		if ( column.sWidth ) {
			column.nTh.style.width = _fnStringToCss( column.sWidth );
		}
	}

	_fnCallbackFire( settings, null, 'preInit', [settings] );

	// If there is default sorting required - let's do it. The sort function
	// will do the drawing for us. Otherwise we draw the table regardless of the
	// Ajax source - this allows the table to look initialised for Ajax sourcing
	// data (show 'loading' message possibly)
	_fnReDraw( settings );

	// Server-side processing init complete is done by _fnAjaxUpdateDraw
	var dataSrc = _fnDataSource( settings );
	if ( dataSrc != 'ssp' || deferLoading ) {
		// if there is an ajax source load the data
		if ( dataSrc == 'ajax' ) {
			_fnBuildAjax( settings, [], function(json) {
				var aData = _fnAjaxDataSrc( settings, json );

				// Got the data - add it to the table
				for ( i=0 ; i<aData.length ; i++ ) {
					_fnAddData( settings, aData[i] );
				}

				// Reset the init display for cookie saving. We've already done
				// a filter, and therefore cleared it before. So we need to make
				// it appear 'fresh'
				settings.iInitDisplayStart = iAjaxStart;

				_fnReDraw( settings );

				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings, json );
			}, settings );
		}
		else {
			_fnProcessingDisplay( settings, false );
			_fnInitComplete( settings );
		}
	}
}


/**
 * Draw the table for the first time, adding all required features
 *  @param {object} oSettings dataTables settings object
 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
 *    with client-side processing (optional)
 *  @memberof DataTable#oApi
 */
function _fnInitComplete ( settings, json )
{
	settings._bInitComplete = true;

	// When data was added after the initialisation (data or Ajax) we need to
	// calculate the column sizing
	if ( json || settings.oInit.aaData ) {
		_fnAdjustColumnSizing( settings );
	}

	_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
	_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
}


function _fnLengthChange ( settings, val )
{
	var len = parseInt( val, 10 );
	settings._iDisplayLength = len;

	_fnLengthOverflow( settings );

	// Fire length change event
	_fnCallbackFire( settings, null, 'length', [settings, len] );
}


/**
 * Generate the node required for user display length changing
 *  @param {object} settings dataTables settings object
 *  @returns {node} Display length feature node
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlLength ( settings )
{
	var
		classes  = settings.oClasses,
		tableId  = settings.sTableId,
		menu     = settings.aLengthMenu,
		d2       = Array.isArray( menu[0] ),
		lengths  = d2 ? menu[0] : menu,
		language = d2 ? menu[1] : menu;

	var select = $('<select/>', {
		'name':          tableId+'_length',
		'aria-controls': tableId,
		'class':         classes.sLengthSelect
	} );

	for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
		select[0][ i ] = new Option(
			typeof language[i] === 'number' ?
				settings.fnFormatNumber( language[i] ) :
				language[i],
			lengths[i]
		);
	}

	var div = $('<div><label/></div>').addClass( classes.sLength );
	if ( ! settings.aanFeatures.l ) {
		div[0].id = tableId+'_length';
	}

	div.children().append(
		settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
	);

	// Can't use `select` variable as user might provide their own and the
	// reference is broken by the use of outerHTML
	$('select', div)
		.val( settings._iDisplayLength )
		.on( 'change.DT', function(e) {
			_fnLengthChange( settings, $(this).val() );
			_fnDraw( settings );
		} );

	// Update node value whenever anything changes the table's length
	$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
		if ( settings === s ) {
			$('select', div).val( len );
		}
	} );

	return div[0];
}



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Note that most of the paging logic is done in
 * DataTable.ext.pager
 */

/**
 * Generate the node required for default pagination
 *  @param {object} oSettings dataTables settings object
 *  @returns {node} Pagination feature node
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlPaginate ( settings )
{
	var
		type   = settings.sPaginationType,
		plugin = DataTable.ext.pager[ type ],
		modern = typeof plugin === 'function',
		redraw = function( settings ) {
			_fnDraw( settings );
		},
		node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
		features = settings.aanFeatures;

	if ( ! modern ) {
		plugin.fnInit( settings, node, redraw );
	}

	/* Add a draw callback for the pagination on first instance, to update the paging display */
	if ( ! features.p )
	{
		node.id = settings.sTableId+'_paginate';

		settings.aoDrawCallback.push( {
			"fn": function( settings ) {
				if ( modern ) {
					var
						start      = settings._iDisplayStart,
						len        = settings._iDisplayLength,
						visRecords = settings.fnRecordsDisplay(),
						all        = len === -1,
						page = all ? 0 : Math.ceil( start / len ),
						pages = all ? 1 : Math.ceil( visRecords / len ),
						buttons = plugin(page, pages),
						i, ien;

					for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
						_fnRenderer( settings, 'pageButton' )(
							settings, features.p[i], i, buttons, page, pages
						);
					}
				}
				else {
					plugin.fnUpdate( settings, redraw );
				}
			},
			"sName": "pagination"
		} );
	}

	return node;
}


/**
 * Alter the display settings to change the page
 *  @param {object} settings DataTables settings object
 *  @param {string|int} action Paging action to take: "first", "previous",
 *    "next" or "last" or page number to jump to (integer)
 *  @param [bool] redraw Automatically draw the update or not
 *  @returns {bool} true page has changed, false - no change
 *  @memberof DataTable#oApi
 */
function _fnPageChange ( settings, action, redraw )
{
	var
		start     = settings._iDisplayStart,
		len       = settings._iDisplayLength,
		records   = settings.fnRecordsDisplay();

	if ( records === 0 || len === -1 )
	{
		start = 0;
	}
	else if ( typeof action === "number" )
	{
		start = action * len;

		if ( start > records )
		{
			start = 0;
		}
	}
	else if ( action == "first" )
	{
		start = 0;
	}
	else if ( action == "previous" )
	{
		start = len >= 0 ?
			start - len :
			0;

		if ( start < 0 )
		{
		  start = 0;
		}
	}
	else if ( action == "next" )
	{
		if ( start + len < records )
		{
			start += len;
		}
	}
	else if ( action == "last" )
	{
		start = Math.floor( (records-1) / len) * len;
	}
	else
	{
		_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
	}

	var changed = settings._iDisplayStart !== start;
	settings._iDisplayStart = start;

	if ( changed ) {
		_fnCallbackFire( settings, null, 'page', [settings] );

		if ( redraw ) {
			_fnDraw( settings );
		}
	}
	else {
		// No change event - paging was called, but no change
		_fnCallbackFire( settings, null, 'page-nc', [settings] );
	}

	return changed;
}



/**
 * Generate the node required for the processing node
 *  @param {object} settings dataTables settings object
 *  @returns {node} Processing element
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlProcessing ( settings )
{
	return $('<div/>', {
			'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
			'class': settings.oClasses.sProcessing,
			'role': 'status'
		} )
		.html( settings.oLanguage.sProcessing )
		.append('<div><div></div><div></div><div></div><div></div></div>')
		.insertBefore( settings.nTable )[0];
}


/**
 * Display or hide the processing indicator
 *  @param {object} settings dataTables settings object
 *  @param {bool} show Show the processing indicator (true) or not (false)
 *  @memberof DataTable#oApi
 */
function _fnProcessingDisplay ( settings, show )
{
	if ( settings.oFeatures.bProcessing ) {
		$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
	}

	_fnCallbackFire( settings, null, 'processing', [settings, show] );
}

/**
 * Add any control elements for the table - specifically scrolling
 *  @param {object} settings dataTables settings object
 *  @returns {node} Node to add to the DOM
 *  @memberof DataTable#oApi
 */
function _fnFeatureHtmlTable ( settings )
{
	var table = $(settings.nTable);

	// Scrolling from here on in
	var scroll = settings.oScroll;

	if ( scroll.sX === '' && scroll.sY === '' ) {
		return settings.nTable;
	}

	var scrollX = scroll.sX;
	var scrollY = scroll.sY;
	var classes = settings.oClasses;
	var caption = table.children('caption');
	var captionSide = caption.length ? caption[0]._captionSide : null;
	var headerClone = $( table[0].cloneNode(false) );
	var footerClone = $( table[0].cloneNode(false) );
	var footer = table.children('tfoot');
	var _div = '<div/>';
	var size = function ( s ) {
		return !s ? null : _fnStringToCss( s );
	};

	if ( ! footer.length ) {
		footer = null;
	}

	/*
	 * The HTML structure that we want to generate in this function is:
	 *  div - scroller
	 *    div - scroll head
	 *      div - scroll head inner
	 *        table - scroll head table
	 *          thead - thead
	 *    div - scroll body
	 *      table - table (master table)
	 *        thead - thead clone for sizing
	 *        tbody - tbody
	 *    div - scroll foot
	 *      div - scroll foot inner
	 *        table - scroll foot table
	 *          tfoot - tfoot
	 */
	var scroller = $( _div, { 'class': classes.sScrollWrapper } )
		.append(
			$(_div, { 'class': classes.sScrollHead } )
				.css( {
					overflow: 'hidden',
					position: 'relative',
					border: 0,
					width: scrollX ? size(scrollX) : '100%'
				} )
				.append(
					$(_div, { 'class': classes.sScrollHeadInner } )
						.css( {
							'box-sizing': 'content-box',
							width: scroll.sXInner || '100%'
						} )
						.append(
							headerClone
								.removeAttr('id')
								.css( 'margin-left', 0 )
								.append( captionSide === 'top' ? caption : null )
								.append(
									table.children('thead')
								)
						)
				)
		)
		.append(
			$(_div, { 'class': classes.sScrollBody } )
				.css( {
					position: 'relative',
					overflow: 'auto',
					width: size( scrollX )
				} )
				.append( table )
		);

	if ( footer ) {
		scroller.append(
			$(_div, { 'class': classes.sScrollFoot } )
				.css( {
					overflow: 'hidden',
					border: 0,
					width: scrollX ? size(scrollX) : '100%'
				} )
				.append(
					$(_div, { 'class': classes.sScrollFootInner } )
						.append(
							footerClone
								.removeAttr('id')
								.css( 'margin-left', 0 )
								.append( captionSide === 'bottom' ? caption : null )
								.append(
									table.children('tfoot')
								)
						)
				)
		);
	}

	var children = scroller.children();
	var scrollHead = children[0];
	var scrollBody = children[1];
	var scrollFoot = footer ? children[2] : null;

	// When the body is scrolled, then we also want to scroll the headers
	if ( scrollX ) {
		$(scrollBody).on( 'scroll.DT', function (e) {
			var scrollLeft = this.scrollLeft;

			scrollHead.scrollLeft = scrollLeft;

			if ( footer ) {
				scrollFoot.scrollLeft = scrollLeft;
			}
		} );
	}

	$(scrollBody).css('max-height', scrollY);
	if (! scroll.bCollapse) {
		$(scrollBody).css('height', scrollY);
	}

	settings.nScrollHead = scrollHead;
	settings.nScrollBody = scrollBody;
	settings.nScrollFoot = scrollFoot;

	// On redraw - align columns
	settings.aoDrawCallback.push( {
		"fn": _fnScrollDraw,
		"sName": "scrolling"
	} );

	return scroller[0];
}



/**
 * Update the header, footer and body tables for resizing - i.e. column
 * alignment.
 *
 * Welcome to the most horrible function DataTables. The process that this
 * function follows is basically:
 *   1. Re-create the table inside the scrolling div
 *   2. Take live measurements from the DOM
 *   3. Apply the measurements to align the columns
 *   4. Clean up
 *
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnScrollDraw ( settings )
{
	// Given that this is such a monster function, a lot of variables are use
	// to try and keep the minimised size as small as possible
	var
		scroll         = settings.oScroll,
		scrollX        = scroll.sX,
		scrollXInner   = scroll.sXInner,
		scrollY        = scroll.sY,
		barWidth       = scroll.iBarWidth,
		divHeader      = $(settings.nScrollHead),
		divHeaderStyle = divHeader[0].style,
		divHeaderInner = divHeader.children('div'),
		divHeaderInnerStyle = divHeaderInner[0].style,
		divHeaderTable = divHeaderInner.children('table'),
		divBodyEl      = settings.nScrollBody,
		divBody        = $(divBodyEl),
		divBodyStyle   = divBodyEl.style,
		divFooter      = $(settings.nScrollFoot),
		divFooterInner = divFooter.children('div'),
		divFooterTable = divFooterInner.children('table'),
		header         = $(settings.nTHead),
		table          = $(settings.nTable),
		tableEl        = table[0],
		tableStyle     = tableEl.style,
		footer         = settings.nTFoot ? $(settings.nTFoot) : null,
		browser        = settings.oBrowser,
		ie67           = browser.bScrollOversize,
		dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
		headerTrgEls, footerTrgEls,
		headerSrcEls, footerSrcEls,
		headerCopy, footerCopy,
		headerWidths=[], footerWidths=[],
		headerContent=[], footerContent=[],
		idx, correction, sanityWidth,
		zeroOut = function(nSizer) {
			var style = nSizer.style;
			style.paddingTop = "0";
			style.paddingBottom = "0";
			style.borderTopWidth = "0";
			style.borderBottomWidth = "0";
			style.height = 0;
		};

	// If the scrollbar visibility has changed from the last draw, we need to
	// adjust the column sizes as the table width will have changed to account
	// for the scrollbar
	var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
	
	if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
		settings.scrollBarVis = scrollBarVis;
		_fnAdjustColumnSizing( settings );
		return; // adjust column sizing will call this function again
	}
	else {
		settings.scrollBarVis = scrollBarVis;
	}

	/*
	 * 1. Re-create the table inside the scrolling div
	 */

	// Remove the old minimised thead and tfoot elements in the inner table
	table.children('thead, tfoot').remove();

	if ( footer ) {
		footerCopy = footer.clone().prependTo( table );
		footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
		footerSrcEls = footerCopy.find('tr');
		footerCopy.find('[id]').removeAttr('id');
	}

	// Clone the current header and footer elements and then place it into the inner table
	headerCopy = header.clone().prependTo( table );
	headerTrgEls = header.find('tr'); // original header is in its own table
	headerSrcEls = headerCopy.find('tr');
	headerCopy.find('th, td').removeAttr('tabindex');
	headerCopy.find('[id]').removeAttr('id');


	/*
	 * 2. Take live measurements from the DOM - do not alter the DOM itself!
	 */

	// Remove old sizing and apply the calculated column widths
	// Get the unique column headers in the newly created (cloned) header. We want to apply the
	// calculated sizes to this header
	if ( ! scrollX )
	{
		divBodyStyle.width = '100%';
		divHeader[0].style.width = '100%';
	}

	$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
		idx = _fnVisibleToColumnIndex( settings, i );
		el.style.width = settings.aoColumns[idx].sWidth;
	} );

	if ( footer ) {
		_fnApplyToChildren( function(n) {
			n.style.width = "";
		}, footerSrcEls );
	}

	// Size the table as a whole
	sanityWidth = table.outerWidth();
	if ( scrollX === "" ) {
		// No x scrolling
		tableStyle.width = "100%";

		// IE7 will make the width of the table when 100% include the scrollbar
		// - which is shouldn't. When there is a scrollbar we need to take this
		// into account.
		if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
			divBody.css('overflow-y') == "scroll")
		) {
			tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
		}

		// Recalculate the sanity width
		sanityWidth = table.outerWidth();
	}
	else if ( scrollXInner !== "" ) {
		// legacy x scroll inner has been given - use it
		tableStyle.width = _fnStringToCss(scrollXInner);

		// Recalculate the sanity width
		sanityWidth = table.outerWidth();
	}

	// Hidden header should have zero height, so remove padding and borders. Then
	// set the width based on the real headers

	// Apply all styles in one pass
	_fnApplyToChildren( zeroOut, headerSrcEls );

	// Read all widths in next pass
	_fnApplyToChildren( function(nSizer) {
		var style = window.getComputedStyle ?
			window.getComputedStyle(nSizer).width :
			_fnStringToCss( $(nSizer).width() );

		headerContent.push( nSizer.innerHTML );
		headerWidths.push( style );
	}, headerSrcEls );

	// Apply all widths in final pass
	_fnApplyToChildren( function(nToSize, i) {
		nToSize.style.width = headerWidths[i];
	}, headerTrgEls );

	$(headerSrcEls).css('height', 0);

	/* Same again with the footer if we have one */
	if ( footer )
	{
		_fnApplyToChildren( zeroOut, footerSrcEls );

		_fnApplyToChildren( function(nSizer) {
			footerContent.push( nSizer.innerHTML );
			footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, footerSrcEls );

		_fnApplyToChildren( function(nToSize, i) {
			nToSize.style.width = footerWidths[i];
		}, footerTrgEls );

		$(footerSrcEls).height(0);
	}


	/*
	 * 3. Apply the measurements
	 */

	// "Hide" the header and footer that we used for the sizing. We need to keep
	// the content of the cell so that the width applied to the header and body
	// both match, but we want to hide it completely. We want to also fix their
	// width to what they currently are
	_fnApplyToChildren( function(nSizer, i) {
		nSizer.innerHTML = '<div class="dataTables_sizing">'+headerContent[i]+'</div>';
		nSizer.childNodes[0].style.height = "0";
		nSizer.childNodes[0].style.overflow = "hidden";
		nSizer.style.width = headerWidths[i];
	}, headerSrcEls );

	if ( footer )
	{
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing">'+footerContent[i]+'</div>';
			nSizer.childNodes[0].style.height = "0";
			nSizer.childNodes[0].style.overflow = "hidden";
			nSizer.style.width = footerWidths[i];
		}, footerSrcEls );
	}

	// Sanity check that the table is of a sensible width. If not then we are going to get
	// misalignment - try to prevent this by not allowing the table to shrink below its min width
	if ( Math.round(table.outerWidth()) < Math.round(sanityWidth) )
	{
		// The min width depends upon if we have a vertical scrollbar visible or not */
		correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
			divBody.css('overflow-y') == "scroll")) ?
				sanityWidth+barWidth :
				sanityWidth;

		// IE6/7 are a law unto themselves...
		if ( ie67 && (divBodyEl.scrollHeight >
			divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
		) {
			tableStyle.width = _fnStringToCss( correction-barWidth );
		}

		// And give the user a warning that we've stopped the table getting too small
		if ( scrollX === "" || scrollXInner !== "" ) {
			_fnLog( settings, 1, 'Possible column misalignment', 6 );
		}
	}
	else
	{
		correction = '100%';
	}

	// Apply to the container elements
	divBodyStyle.width = _fnStringToCss( correction );
	divHeaderStyle.width = _fnStringToCss( correction );

	if ( footer ) {
		settings.nScrollFoot.style.width = _fnStringToCss( correction );
	}


	/*
	 * 4. Clean up
	 */
	if ( ! scrollY ) {
		/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
		 * the scrollbar height from the visible display, rather than adding it on. We need to
		 * set the height in order to sort this. Don't want to do it in any other browsers.
		 */
		if ( ie67 ) {
			divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
		}
	}

	/* Finally set the width's of the header and footer tables */
	var iOuterWidth = table.outerWidth();
	divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
	divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );

	// Figure out if there are scrollbar present - if so then we need a the header and footer to
	// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
	var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
	var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
	divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";

	if ( footer ) {
		divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
		divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
		divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
	}

	// Correct DOM ordering for colgroup - comes before the thead
	table.children('colgroup').insertBefore( table.children('thead') );

	/* Adjust the position of the header in case we loose the y-scrollbar */
	divBody.trigger('scroll');

	// If sorting or filtering has occurred, jump the scrolling back to the top
	// only if we aren't holding the position
	if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
		divBodyEl.scrollTop = 0;
	}
}



/**
 * Apply a given function to the display child nodes of an element array (typically
 * TD children of TR rows
 *  @param {function} fn Method to apply to the objects
 *  @param array {nodes} an1 List of elements to look through for display children
 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
 *  @memberof DataTable#oApi
 */
function _fnApplyToChildren( fn, an1, an2 )
{
	var index=0, i=0, iLen=an1.length;
	var nNode1, nNode2;

	while ( i < iLen ) {
		nNode1 = an1[i].firstChild;
		nNode2 = an2 ? an2[i].firstChild : null;

		while ( nNode1 ) {
			if ( nNode1.nodeType === 1 ) {
				if ( an2 ) {
					fn( nNode1, nNode2, index );
				}
				else {
					fn( nNode1, index );
				}

				index++;
			}

			nNode1 = nNode1.nextSibling;
			nNode2 = an2 ? nNode2.nextSibling : null;
		}

		i++;
	}
}



var __re_html_remove = /<.*?>/g;


/**
 * Calculate the width of columns for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnCalculateColumnWidths ( oSettings )
{
	var
		table = oSettings.nTable,
		columns = oSettings.aoColumns,
		scroll = oSettings.oScroll,
		scrollY = scroll.sY,
		scrollX = scroll.sX,
		scrollXInner = scroll.sXInner,
		columnCount = columns.length,
		visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
		headerCells = $('th', oSettings.nTHead),
		tableWidthAttr = table.getAttribute('width'), // from DOM element
		tableContainer = table.parentNode,
		userInputs = false,
		i, column, columnIdx, width, outerWidth,
		browser = oSettings.oBrowser,
		ie67 = browser.bScrollOversize;

	var styleWidth = table.style.width;
	if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
		tableWidthAttr = styleWidth;
	}

	/* Convert any user input sizes into pixel sizes */
	var sizes = _fnConvertToWidth(_pluck(columns, 'sWidthOrig'), tableContainer);

	for ( i=0 ; i<visibleColumns.length ; i++ ) {
		column = columns[ visibleColumns[i] ];

		if ( column.sWidth !== null ) {
			column.sWidth = sizes[i];

			userInputs = true;
		}
	}

	/* If the number of columns in the DOM equals the number that we have to
	 * process in DataTables, then we can use the offsets that are created by
	 * the web- browser. No custom sizes can be set in order for this to happen,
	 * nor scrolling used
	 */
	if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
	     columnCount == _fnVisbleColumns( oSettings ) &&
	     columnCount == headerCells.length
	) {
		for ( i=0 ; i<columnCount ; i++ ) {
			var colIdx = _fnVisibleToColumnIndex( oSettings, i );

			if ( colIdx !== null ) {
				columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
			}
		}
	}
	else
	{
		// Otherwise construct a single row, worst case, table with the widest
		// node in the data, assign any user defined widths, then insert it into
		// the DOM and allow the browser to do all the hard work of calculating
		// table widths
		var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
			.css( 'visibility', 'hidden' )
			.removeAttr( 'id' );

		// Clean up the table body
		tmpTable.find('tbody tr').remove();
		var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );

		// Clone the table header and footer - we can't use the header / footer
		// from the cloned table, since if scrolling is active, the table's
		// real header and footer are contained in different table tags
		tmpTable.find('thead, tfoot').remove();
		tmpTable
			.append( $(oSettings.nTHead).clone() )
			.append( $(oSettings.nTFoot).clone() );

		// Remove any assigned widths from the footer (from scrolling)
		tmpTable.find('tfoot th, tfoot td').css('width', '');

		// Apply custom sizing to the cloned header
		headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );

		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];

			headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
				_fnStringToCss( column.sWidthOrig ) :
				'';

			// For scrollX we need to force the column width otherwise the
			// browser will collapse it. If this width is smaller than the
			// width the column requires, then it will have no effect
			if ( column.sWidthOrig && scrollX ) {
				$( headerCells[i] ).append( $('<div/>').css( {
					width: column.sWidthOrig,
					margin: 0,
					padding: 0,
					border: 0,
					height: 1
				} ) );
			}
		}

		// Find the widest cell for each column and put it into the table
		if ( oSettings.aoData.length ) {
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				columnIdx = visibleColumns[i];
				column = columns[ columnIdx ];

				$( _fnGetWidestNode( oSettings, columnIdx ) )
					.clone( false )
					.append( column.sContentPadding )
					.appendTo( tr );
			}
		}

		// Tidy the temporary table - remove name attributes so there aren't
		// duplicated in the dom (radio elements for example)
		$('[name]', tmpTable).removeAttr('name');

		// Table has been built, attach to the document so we can work with it.
		// A holding element is used, positioned at the top of the container
		// with minimal height, so it has no effect on if the container scrolls
		// or not. Otherwise it might trigger scrolling when it actually isn't
		// needed
		var holder = $('<div/>').css( scrollX || scrollY ?
				{
					position: 'absolute',
					top: 0,
					left: 0,
					height: 1,
					right: 0,
					overflow: 'hidden'
				} :
				{}
			)
			.append( tmpTable )
			.appendTo( tableContainer );

		// When scrolling (X or Y) we want to set the width of the table as 
		// appropriate. However, when not scrolling leave the table width as it
		// is. This results in slightly different, but I think correct behaviour
		if ( scrollX && scrollXInner ) {
			tmpTable.width( scrollXInner );
		}
		else if ( scrollX ) {
			tmpTable.css( 'width', 'auto' );
			tmpTable.removeAttr('width');

			// If there is no width attribute or style, then allow the table to
			// collapse
			if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
				tmpTable.width( tableContainer.clientWidth );
			}
		}
		else if ( scrollY ) {
			tmpTable.width( tableContainer.clientWidth );
		}
		else if ( tableWidthAttr ) {
			tmpTable.width( tableWidthAttr );
		}

		// Get the width of each column in the constructed table - we need to
		// know the inner width (so it can be assigned to the other table's
		// cells) and the outer width so we can calculate the full width of the
		// table. This is safe since DataTables requires a unique cell for each
		// column, but if ever a header can span multiple columns, this will
		// need to be modified.
		var total = 0;
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			var cell = $(headerCells[i]);
			var border = cell.outerWidth() - cell.width();

			// Use getBounding... where possible (not IE8-) because it can give
			// sub-pixel accuracy, which we then want to round up!
			var bounding = browser.bBounding ?
				Math.ceil( headerCells[i].getBoundingClientRect().width ) :
				cell.outerWidth();

			// Total is tracked to remove any sub-pixel errors as the outerWidth
			// of the table might not equal the total given here (IE!).
			total += bounding;

			// Width for each column to use
			columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
		}

		table.style.width = _fnStringToCss( total );

		// Finished with the table - ditch it
		holder.remove();
	}

	// If there is a width attr, we want to attach an event listener which
	// allows the table sizing to automatically adjust when the window is
	// resized. Use the width attr rather than CSS, since we can't know if the
	// CSS is a relative value or absolute - DOM read is always px.
	if ( tableWidthAttr ) {
		table.style.width = _fnStringToCss( tableWidthAttr );
	}

	if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
		var bindResize = function () {
			$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
				_fnAdjustColumnSizing( oSettings );
			} ) );
		};

		// IE6/7 will crash if we bind a resize event handler on page load.
		// To be removed in 1.11 which drops IE6/7 support
		if ( ie67 ) {
			setTimeout( bindResize, 1000 );
		}
		else {
			bindResize();
		}

		oSettings._reszEvt = true;
	}
}


/**
 * Throttle the calls to a function. Arguments and context are maintained for
 * the throttled function
 *  @param {function} fn Function to be called
 *  @param {int} [freq=200] call frequency in mS
 *  @returns {function} wrapped function
 *  @memberof DataTable#oApi
 */
var _fnThrottle = DataTable.util.throttle;


/**
 * Convert a set of CSS units width to pixels (e.g. 2em)
 *  @param {string[]} widths widths to be converted
 *  @param {node} parent parent to get the with for (required for relative widths) - optional
 *  @returns {int[]} widths in pixels
 *  @memberof DataTable#oApi
 */
function _fnConvertToWidth ( widths, parent )
{
	var els = [];
	var results = [];

	// Add the elements in a single loop so we only need to reflow once
	for (var i=0 ; i<widths.length ; i++) {
		if (widths[i]) {
			els.push(
				$('<div/>')
					.css( 'width', _fnStringToCss( widths[i] ) )
					.appendTo( parent || document.body )
			)
		}
		else {
			els.push(null);
		}
	}

	// Get the sizes (will reflow once)
	for (var i=0 ; i<widths.length ; i++) {
		results.push(els[i] ? els[i][0].offsetWidth : null);
	}

	// Tidy
	$(els).remove();

	return results;
}


/**
 * Get the widest node
 *  @param {object} settings dataTables settings object
 *  @param {int} colIdx column of interest
 *  @returns {node} widest table node
 *  @memberof DataTable#oApi
 */
function _fnGetWidestNode( settings, colIdx )
{
	var idx = _fnGetMaxLenString( settings, colIdx );
	if ( idx < 0 ) {
		return null;
	}

	var data = settings.aoData[ idx ];
	return ! data.nTr ? // Might not have been created when deferred rendering
		$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
		data.anCells[ colIdx ];
}


/**
 * Get the maximum strlen for each data column
 *  @param {object} settings dataTables settings object
 *  @param {int} colIdx column of interest
 *  @returns {string} max string length for each column
 *  @memberof DataTable#oApi
 */
function _fnGetMaxLenString( settings, colIdx )
{
	var s, max=-1, maxIdx = -1;

	for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
		s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
		s = s.replace( __re_html_remove, '' );
		s = s.replace( /&nbsp;/g, ' ' );

		if ( s.length > max ) {
			max = s.length;
			maxIdx = i;
		}
	}

	return maxIdx;
}


/**
 * Append a CSS unit (only if required) to a string
 *  @param {string} value to css-ify
 *  @returns {string} value with css unit
 *  @memberof DataTable#oApi
 */
function _fnStringToCss( s )
{
	if ( s === null ) {
		return '0px';
	}

	if ( typeof s == 'number' ) {
		return s < 0 ?
			'0px' :
			s+'px';
	}

	// Check it has a unit character already
	return s.match(/\d$/) ?
		s+'px' :
		s;
}



function _fnSortFlatten ( settings )
{
	var
		i, iLen, k, kLen,
		aSort = [],
		aiOrig = [],
		aoColumns = settings.aoColumns,
		aDataSort, iCol, sType, srcCol,
		fixed = settings.aaSortingFixed,
		fixedObj = $.isPlainObject( fixed ),
		nestedSort = [],
		add = function ( a ) {
			if ( a.length && ! Array.isArray( a[0] ) ) {
				// 1D array
				nestedSort.push( a );
			}
			else {
				// 2D array
				$.merge( nestedSort, a );
			}
		};

	// Build the sort array, with pre-fix and post-fix options if they have been
	// specified
	if ( Array.isArray( fixed ) ) {
		add( fixed );
	}

	if ( fixedObj && fixed.pre ) {
		add( fixed.pre );
	}

	add( settings.aaSorting );

	if (fixedObj && fixed.post ) {
		add( fixed.post );
	}

	for ( i=0 ; i<nestedSort.length ; i++ )
	{
		srcCol = nestedSort[i][0];
		aDataSort = aoColumns[ srcCol ].aDataSort;

		for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
		{
			iCol = aDataSort[k];
			sType = aoColumns[ iCol ].sType || 'string';

			if ( nestedSort[i]._idx === undefined ) {
				nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
			}

			aSort.push( {
				src:       srcCol,
				col:       iCol,
				dir:       nestedSort[i][1],
				index:     nestedSort[i]._idx,
				type:      sType,
				formatter: DataTable.ext.type.order[ sType+"-pre" ]
			} );
		}
	}

	return aSort;
}

/**
 * Change the order of the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 *  @todo This really needs split up!
 */
function _fnSort ( oSettings )
{
	var
		i, ien, iLen, j, jLen, k, kLen,
		sDataType, nTh,
		aiOrig = [],
		oExtSort = DataTable.ext.type.order,
		aoData = oSettings.aoData,
		aoColumns = oSettings.aoColumns,
		aDataSort, data, iCol, sType, oSort,
		formatters = 0,
		sortCol,
		displayMaster = oSettings.aiDisplayMaster,
		aSort;

	// Resolve any column types that are unknown due to addition or invalidation
	// @todo Can this be moved into a 'data-ready' handler which is called when
	//   data is going to be used in the table?
	_fnColumnTypes( oSettings );

	aSort = _fnSortFlatten( oSettings );

	for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
		sortCol = aSort[i];

		// Track if we can use the fast sort algorithm
		if ( sortCol.formatter ) {
			formatters++;
		}

		// Load the data needed for the sort, for each cell
		_fnSortData( oSettings, sortCol.col );
	}

	/* No sorting required if server-side or no sorting array */
	if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
	{
		// Create a value - key array of the current row positions such that we can use their
		// current position during the sort, if values match, in order to perform stable sorting
		for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
			aiOrig[ displayMaster[i] ] = i;
		}

		/* Do the sort - here we want multi-column sorting based on a given data source (column)
		 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
		 * follow on it's own, but this is what we want (example two column sorting):
		 *  fnLocalSorting = function(a,b){
		 *    var iTest;
		 *    iTest = oSort['string-asc']('data11', 'data12');
		 *      if (iTest !== 0)
		 *        return iTest;
		 *    iTest = oSort['numeric-desc']('data21', 'data22');
		 *    if (iTest !== 0)
		 *      return iTest;
		 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
		 *  }
		 * Basically we have a test for each sorting column, if the data in that column is equal,
		 * test the next column. If all columns match, then we use a numeric sort on the row
		 * positions in the original data array to provide a stable sort.
		 *
		 * Note - I know it seems excessive to have two sorting methods, but the first is around
		 * 15% faster, so the second is only maintained for backwards compatibility with sorting
		 * methods which do not have a pre-sort formatting function.
		 */
		if ( formatters === aSort.length ) {
			// All sort types have formatting functions
			displayMaster.sort( function ( a, b ) {
				var
					x, y, k, test, sort,
					len=aSort.length,
					dataA = aoData[a]._aSortData,
					dataB = aoData[b]._aSortData;

				for ( k=0 ; k<len ; k++ ) {
					sort = aSort[k];

					x = dataA[ sort.col ];
					y = dataB[ sort.col ];

					test = x<y ? -1 : x>y ? 1 : 0;
					if ( test !== 0 ) {
						return sort.dir === 'asc' ? test : -test;
					}
				}

				x = aiOrig[a];
				y = aiOrig[b];
				return x<y ? -1 : x>y ? 1 : 0;
			} );
		}
		else {
			// Depreciated - remove in 1.11 (providing a plug-in option)
			// Not all sort types have formatting methods, so we have to call their sorting
			// methods.
			displayMaster.sort( function ( a, b ) {
				var
					x, y, k, l, test, sort, fn,
					len=aSort.length,
					dataA = aoData[a]._aSortData,
					dataB = aoData[b]._aSortData;

				for ( k=0 ; k<len ; k++ ) {
					sort = aSort[k];

					x = dataA[ sort.col ];
					y = dataB[ sort.col ];

					fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
					test = fn( x, y );
					if ( test !== 0 ) {
						return test;
					}
				}

				x = aiOrig[a];
				y = aiOrig[b];
				return x<y ? -1 : x>y ? 1 : 0;
			} );
		}
	}

	/* Tell the draw function that we have sorted the data */
	oSettings.bSorted = true;
}


function _fnSortAria ( settings )
{
	var label;
	var nextSort;
	var columns = settings.aoColumns;
	var aSort = _fnSortFlatten( settings );
	var oAria = settings.oLanguage.oAria;

	// ARIA attributes - need to loop all columns, to update all (removing old
	// attributes as needed)
	for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
	{
		var col = columns[i];
		var asSorting = col.asSorting;
		var sTitle = col.ariaTitle || col.sTitle.replace( /<.*?>/g, "" );
		var th = col.nTh;

		// IE7 is throwing an error when setting these properties with jQuery's
		// attr() and removeAttr() methods...
		th.removeAttribute('aria-sort');

		/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
		if ( col.bSortable ) {
			if ( aSort.length > 0 && aSort[0].col == i ) {
				th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
				nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
			}
			else {
				nextSort = asSorting[0];
			}

			label = sTitle + ( nextSort === "asc" ?
				oAria.sSortAscending :
				oAria.sSortDescending
			);
		}
		else {
			label = sTitle;
		}

		th.setAttribute('aria-label', label);
	}
}


/**
 * Function to run on user sort request
 *  @param {object} settings dataTables settings object
 *  @param {node} attachTo node to attach the handler to
 *  @param {int} colIdx column sorting index
 *  @param {boolean} [append=false] Append the requested sort to the existing
 *    sort if true (i.e. multi-column sort)
 *  @param {function} [callback] callback function
 *  @memberof DataTable#oApi
 */
function _fnSortListener ( settings, colIdx, append, callback )
{
	var col = settings.aoColumns[ colIdx ];
	var sorting = settings.aaSorting;
	var asSorting = col.asSorting;
	var nextSortIdx;
	var next = function ( a, overflow ) {
		var idx = a._idx;
		if ( idx === undefined ) {
			idx = $.inArray( a[1], asSorting );
		}

		return idx+1 < asSorting.length ?
			idx+1 :
			overflow ?
				null :
				0;
	};

	// Convert to 2D array if needed
	if ( typeof sorting[0] === 'number' ) {
		sorting = settings.aaSorting = [ sorting ];
	}

	// If appending the sort then we are multi-column sorting
	if ( append && settings.oFeatures.bSortMulti ) {
		// Are we already doing some kind of sort on this column?
		var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );

		if ( sortIdx !== -1 ) {
			// Yes, modify the sort
			nextSortIdx = next( sorting[sortIdx], true );

			if ( nextSortIdx === null && sorting.length === 1 ) {
				nextSortIdx = 0; // can't remove sorting completely
			}

			if ( nextSortIdx === null ) {
				sorting.splice( sortIdx, 1 );
			}
			else {
				sorting[sortIdx][1] = asSorting[ nextSortIdx ];
				sorting[sortIdx]._idx = nextSortIdx;
			}
		}
		else {
			// No sort on this column yet
			sorting.push( [ colIdx, asSorting[0], 0 ] );
			sorting[sorting.length-1]._idx = 0;
		}
	}
	else if ( sorting.length && sorting[0][0] == colIdx ) {
		// Single column - already sorting on this column, modify the sort
		nextSortIdx = next( sorting[0] );

		sorting.length = 1;
		sorting[0][1] = asSorting[ nextSortIdx ];
		sorting[0]._idx = nextSortIdx;
	}
	else {
		// Single column - sort only on this column
		sorting.length = 0;
		sorting.push( [ colIdx, asSorting[0] ] );
		sorting[0]._idx = 0;
	}

	// Run the sort by calling a full redraw
	_fnReDraw( settings );

	// callback used for async user interaction
	if ( typeof callback == 'function' ) {
		callback( settings );
	}
}


/**
 * Attach a sort handler (click) to a node
 *  @param {object} settings dataTables settings object
 *  @param {node} attachTo node to attach the handler to
 *  @param {int} colIdx column sorting index
 *  @param {function} [callback] callback function
 *  @memberof DataTable#oApi
 */
function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
{
	var col = settings.aoColumns[ colIdx ];

	_fnBindAction( attachTo, {}, function (e) {
		/* If the column is not sortable - don't to anything */
		if ( col.bSortable === false ) {
			return;
		}

		// If processing is enabled use a timeout to allow the processing
		// display to be shown - otherwise to it synchronously
		if ( settings.oFeatures.bProcessing ) {
			_fnProcessingDisplay( settings, true );

			setTimeout( function() {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );

				// In server-side processing, the draw callback will remove the
				// processing display
				if ( _fnDataSource( settings ) !== 'ssp' ) {
					_fnProcessingDisplay( settings, false );
				}
			}, 0 );
		}
		else {
			_fnSortListener( settings, colIdx, e.shiftKey, callback );
		}
	} );
}


/**
 * Set the sorting classes on table's body, Note: it is safe to call this function
 * when bSort and bSortClasses are false
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnSortingClasses( settings )
{
	var oldSort = settings.aLastSort;
	var sortClass = settings.oClasses.sSortColumn;
	var sort = _fnSortFlatten( settings );
	var features = settings.oFeatures;
	var i, ien, colIdx;

	if ( features.bSort && features.bSortClasses ) {
		// Remove old sorting classes
		for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
			colIdx = oldSort[i].src;

			// Remove column sorting
			$( _pluck( settings.aoData, 'anCells', colIdx ) )
				.removeClass( sortClass + (i<2 ? i+1 : 3) );
		}

		// Add new column sorting
		for ( i=0, ien=sort.length ; i<ien ; i++ ) {
			colIdx = sort[i].src;

			$( _pluck( settings.aoData, 'anCells', colIdx ) )
				.addClass( sortClass + (i<2 ? i+1 : 3) );
		}
	}

	settings.aLastSort = sort;
}


// Get the data to sort a column, be it from cache, fresh (populating the
// cache), or from a sort formatter
function _fnSortData( settings, idx )
{
	// Custom sorting function - provided by the sort data type
	var column = settings.aoColumns[ idx ];
	var customSort = DataTable.ext.order[ column.sSortDataType ];
	var customData;

	if ( customSort ) {
		customData = customSort.call( settings.oInstance, settings, idx,
			_fnColumnIndexToVisible( settings, idx )
		);
	}

	// Use / populate cache
	var row, cellData;
	var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];

	for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
		row = settings.aoData[i];

		if ( ! row._aSortData ) {
			row._aSortData = [];
		}

		if ( ! row._aSortData[idx] || customSort ) {
			cellData = customSort ?
				customData[i] : // If there was a custom sort function, use data from there
				_fnGetCellData( settings, i, idx, 'sort' );

			row._aSortData[ idx ] = formatter ?
				formatter( cellData ) :
				cellData;
		}
	}
}



/**
 * Save the state of a table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */
function _fnSaveState ( settings )
{
	if (settings._bLoadingState) {
		return;
	}

	/* Store the interesting variables */
	var state = {
		time:    +new Date(),
		start:   settings._iDisplayStart,
		length:  settings._iDisplayLength,
		order:   $.extend( true, [], settings.aaSorting ),
		search:  _fnSearchToCamel( settings.oPreviousSearch ),
		columns: $.map( settings.aoColumns, function ( col, i ) {
			return {
				visible: col.bVisible,
				search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
			};
		} )
	};

	settings.oSavedState = state;
	_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
	if ( settings.oFeatures.bStateSave && !settings.bDestroying )
	{
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}	
}


/**
 * Attempt to load a saved table state
 *  @param {object} oSettings dataTables settings object
 *  @param {object} oInit DataTables init object so we can override settings
 *  @param {function} callback Callback to execute when the state has been loaded
 *  @memberof DataTable#oApi
 */
function _fnLoadState ( settings, oInit, callback )
{
	if ( ! settings.oFeatures.bStateSave ) {
		callback();
		return;
	}

	var loaded = function(state) {
		_fnImplementState(settings, state, callback);
	}

	var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );

	if ( state !== undefined ) {
		_fnImplementState( settings, state, callback );
	}
	// otherwise, wait for the loaded callback to be executed

	return true;
}

function _fnImplementState ( settings, s, callback) {
	var i, ien;
	var columns = settings.aoColumns;
	settings._bLoadingState = true;

	// When StateRestore was introduced the state could now be implemented at any time
	// Not just initialisation. To do this an api instance is required in some places
	var api = settings._bInitComplete ? new DataTable.Api(settings) : null;

	if ( ! s || ! s.time ) {
		settings._bLoadingState = false;
		callback();
		return;
	}

	// Allow custom and plug-in manipulation functions to alter the saved data set and
	// cancelling of loading by returning false
	var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
	if ( $.inArray( false, abStateLoad ) !== -1 ) {
		settings._bLoadingState = false;
		callback();
		return;
	}

	// Reject old data
	var duration = settings.iStateDuration;
	if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
		settings._bLoadingState = false;
		callback();
		return;
	}

	// Number of columns have changed - all bets are off, no restore of settings
	if ( s.columns && columns.length !== s.columns.length ) {
		settings._bLoadingState = false;
		callback();
		return;
	}

	// Store the saved state so it might be accessed at any time
	settings.oLoadedState = $.extend( true, {}, s );

	// Page Length
	if ( s.length !== undefined ) {
		// If already initialised just set the value directly so that the select element is also updated
		if (api) {
			api.page.len(s.length)
		}
		else {
			settings._iDisplayLength   = s.length;
		}
	}

	// Restore key features - todo - for 1.11 this needs to be done by
	// subscribed events
	if ( s.start !== undefined ) {
		if(api === null) {
			settings._iDisplayStart    = s.start;
			settings.iInitDisplayStart = s.start;
		}
		else {
			_fnPageChange(settings, s.start/settings._iDisplayLength);
		}
	}

	// Order
	if ( s.order !== undefined ) {
		settings.aaSorting = [];
		$.each( s.order, function ( i, col ) {
			settings.aaSorting.push( col[0] >= columns.length ?
				[ 0, col[1] ] :
				col
			);
		} );
	}

	// Search
	if ( s.search !== undefined ) {
		$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
	}

	// Columns
	if ( s.columns ) {
		for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
			var col = s.columns[i];

			// Visibility
			if ( col.visible !== undefined ) {
				// If the api is defined, the table has been initialised so we need to use it rather than internal settings
				if (api) {
					// Don't redraw the columns on every iteration of this loop, we will do this at the end instead
					api.column(i).visible(col.visible, false);
				}
				else {
					columns[i].bVisible = col.visible;
				}
			}

			// Search
			if ( col.search !== undefined ) {
				$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
			}
		}
		
		// If the api is defined then we need to adjust the columns once the visibility has been changed
		if (api) {
			api.columns.adjust();
		}
	}

	settings._bLoadingState = false;
	_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
	callback();
};


/**
 * Return the settings object for a particular table
 *  @param {node} table table we are using as a dataTable
 *  @returns {object} Settings object - or null if not found
 *  @memberof DataTable#oApi
 */
function _fnSettingsFromNode ( table )
{
	var settings = DataTable.settings;
	var idx = $.inArray( table, _pluck( settings, 'nTable' ) );

	return idx !== -1 ?
		settings[ idx ] :
		null;
}


/**
 * Log an error message
 *  @param {object} settings dataTables settings object
 *  @param {int} level log error messages, or display them to the user
 *  @param {string} msg error message
 *  @param {int} tn Technical note id to get more information about the error.
 *  @memberof DataTable#oApi
 */
function _fnLog( settings, level, msg, tn )
{
	msg = 'DataTables warning: '+
		(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;

	if ( tn ) {
		msg += '. For more information about this error, please see '+
		'https://datatables.net/tn/'+tn;
	}

	if ( ! level  ) {
		// Backwards compatibility pre 1.10
		var ext = DataTable.ext;
		var type = ext.sErrMode || ext.errMode;

		if ( settings ) {
			_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
		}

		if ( type == 'alert' ) {
			alert( msg );
		}
		else if ( type == 'throw' ) {
			throw new Error(msg);
		}
		else if ( typeof type == 'function' ) {
			type( settings, tn, msg );
		}
	}
	else if ( window.console && console.log ) {
		console.log( msg );
	}
}


/**
 * See if a property is defined on one object, if so assign it to the other object
 *  @param {object} ret target object
 *  @param {object} src source object
 *  @param {string} name property
 *  @param {string} [mappedName] name to map too - optional, name used if not given
 *  @memberof DataTable#oApi
 */
function _fnMap( ret, src, name, mappedName )
{
	if ( Array.isArray( name ) ) {
		$.each( name, function (i, val) {
			if ( Array.isArray( val ) ) {
				_fnMap( ret, src, val[0], val[1] );
			}
			else {
				_fnMap( ret, src, val );
			}
		} );

		return;
	}

	if ( mappedName === undefined ) {
		mappedName = name;
	}

	if ( src[name] !== undefined ) {
		ret[mappedName] = src[name];
	}
}


/**
 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
 * shallow copy arrays. The reason we need to do this, is that we don't want to
 * deep copy array init values (such as aaSorting) since the dev wouldn't be
 * able to override them, but we do want to deep copy arrays.
 *  @param {object} out Object to extend
 *  @param {object} extender Object from which the properties will be applied to
 *      out
 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
 *      independent copy with the exception of the `data` or `aaData` parameters
 *      if they are present. This is so you can pass in a collection to
 *      DataTables and have that used as your data source without breaking the
 *      references
 *  @returns {object} out Reference, just for convenience - out === the return.
 *  @memberof DataTable#oApi
 *  @todo This doesn't take account of arrays inside the deep copied objects.
 */
function _fnExtend( out, extender, breakRefs )
{
	var val;

	for ( var prop in extender ) {
		if ( extender.hasOwnProperty(prop) ) {
			val = extender[prop];

			if ( $.isPlainObject( val ) ) {
				if ( ! $.isPlainObject( out[prop] ) ) {
					out[prop] = {};
				}
				$.extend( true, out[prop], val );
			}
			else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && Array.isArray(val) ) {
				out[prop] = val.slice();
			}
			else {
				out[prop] = val;
			}
		}
	}

	return out;
}


/**
 * Bind an event handers to allow a click or return key to activate the callback.
 * This is good for accessibility since a return on the keyboard will have the
 * same effect as a click, if the element has focus.
 *  @param {element} n Element to bind the action to
 *  @param {object} oData Data object to pass to the triggered function
 *  @param {function} fn Callback function for when the event is triggered
 *  @memberof DataTable#oApi
 */
function _fnBindAction( n, oData, fn )
{
	$(n)
		.on( 'click.DT', oData, function (e) {
				$(n).trigger('blur'); // Remove focus outline for mouse users
				fn(e);
			} )
		.on( 'keypress.DT', oData, function (e){
				if ( e.which === 13 ) {
					e.preventDefault();
					fn(e);
				}
			} )
		.on( 'selectstart.DT', function () {
				/* Take the brutal approach to cancelling text selection */
				return false;
			} );
}


/**
 * Register a callback function. Easily allows a callback function to be added to
 * an array store of callback functions that can then all be called together.
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
 *  @param {function} fn Function to be called back
 *  @param {string} sName Identifying name for the callback (i.e. a label)
 *  @memberof DataTable#oApi
 */
function _fnCallbackReg( oSettings, sStore, fn, sName )
{
	if ( fn )
	{
		oSettings[sStore].push( {
			"fn": fn,
			"sName": sName
		} );
	}
}


/**
 * Fire callback functions and trigger events. Note that the loop over the
 * callback array store is done backwards! Further note that you do not want to
 * fire off triggers in time sensitive applications (for example cell creation)
 * as its slow.
 *  @param {object} settings dataTables settings object
 *  @param {string} callbackArr Name of the array storage for the callbacks in
 *      oSettings
 *  @param {string} eventName Name of the jQuery custom event to trigger. If
 *      null no trigger is fired
 *  @param {array} args Array of arguments to pass to the callback function /
 *      trigger
 *  @memberof DataTable#oApi
 */
function _fnCallbackFire( settings, callbackArr, eventName, args )
{
	var ret = [];

	if ( callbackArr ) {
		ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
			return val.fn.apply( settings.oInstance, args );
		} );
	}

	if ( eventName !== null ) {
		var e = $.Event( eventName+'.dt' );
		var table = $(settings.nTable);

		table.trigger( e, args );

		// If not yet attached to the document, trigger the event
		// on the body directly to sort of simulate the bubble
		if (table.parents('body').length === 0) {
			$('body').trigger( e, args );
		}

		ret.push( e.result );
	}

	return ret;
}


function _fnLengthOverflow ( settings )
{
	var
		start = settings._iDisplayStart,
		end = settings.fnDisplayEnd(),
		len = settings._iDisplayLength;

	/* If we have space to show extra rows (backing up from the end point - then do so */
	if ( start >= end )
	{
		start = end - len;
	}

	// Keep the start record on the current page
	start -= (start % len);

	if ( len === -1 || start < 0 )
	{
		start = 0;
	}

	settings._iDisplayStart = start;
}


function _fnRenderer( settings, type )
{
	var renderer = settings.renderer;
	var host = DataTable.ext.renderer[type];

	if ( $.isPlainObject( renderer ) && renderer[type] ) {
		// Specific renderer for this type. If available use it, otherwise use
		// the default.
		return host[renderer[type]] || host._;
	}
	else if ( typeof renderer === 'string' ) {
		// Common renderer - if there is one available for this type use it,
		// otherwise use the default
		return host[renderer] || host._;
	}

	// Use the default
	return host._;
}


/**
 * Detect the data source being used for the table. Used to simplify the code
 * a little (ajax) and to make it compress a little smaller.
 *
 *  @param {object} settings dataTables settings object
 *  @returns {string} Data source
 *  @memberof DataTable#oApi
 */
function _fnDataSource ( settings )
{
	if ( settings.oFeatures.bServerSide ) {
		return 'ssp';
	}
	else if ( settings.ajax || settings.sAjaxSource ) {
		return 'ajax';
	}
	return 'dom';
}




/**
 * Computed structure of the DataTables API, defined by the options passed to
 * `DataTable.Api.register()` when building the API.
 *
 * The structure is built in order to speed creation and extension of the Api
 * objects since the extensions are effectively pre-parsed.
 *
 * The array is an array of objects with the following structure, where this
 * base array represents the Api prototype base:
 *
 *     [
 *       {
 *         name:      'data'                -- string   - Property name
 *         val:       function () {},       -- function - Api method (or undefined if just an object
 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
 *       },
 *       {
 *         name:     'row'
 *         val:       {},
 *         methodExt: [ ... ],
 *         propExt:   [
 *           {
 *             name:      'data'
 *             val:       function () {},
 *             methodExt: [ ... ],
 *             propExt:   [ ... ]
 *           },
 *           ...
 *         ]
 *       }
 *     ]
 *
 * @type {Array}
 * @ignore
 */
var __apiStruct = [];


/**
 * `Array.prototype` reference.
 *
 * @type object
 * @ignore
 */
var __arrayProto = Array.prototype;


/**
 * Abstraction for `context` parameter of the `Api` constructor to allow it to
 * take several different forms for ease of use.
 *
 * Each of the input parameter types will be converted to a DataTables settings
 * object where possible.
 *
 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
 *   of:
 *
 *   * `string` - jQuery selector. Any DataTables' matching the given selector
 *     with be found and used.
 *   * `node` - `TABLE` node which has already been formed into a DataTable.
 *   * `jQuery` - A jQuery object of `TABLE` nodes.
 *   * `object` - DataTables settings object
 *   * `DataTables.Api` - API instance
 * @return {array|null} Matching DataTables settings objects. `null` or
 *   `undefined` is returned if no matching DataTable is found.
 * @ignore
 */
var _toSettings = function ( mixed )
{
	var idx, jq;
	var settings = DataTable.settings;
	var tables = $.map( settings, function (el, i) {
		return el.nTable;
	} );

	if ( ! mixed ) {
		return [];
	}
	else if ( mixed.nTable && mixed.oApi ) {
		// DataTables settings object
		return [ mixed ];
	}
	else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
		// Table node
		idx = $.inArray( mixed, tables );
		return idx !== -1 ? [ settings[idx] ] : null;
	}
	else if ( mixed && typeof mixed.settings === 'function' ) {
		return mixed.settings().toArray();
	}
	else if ( typeof mixed === 'string' ) {
		// jQuery selector
		jq = $(mixed);
	}
	else if ( mixed instanceof $ ) {
		// jQuery object (also DataTables instance)
		jq = mixed;
	}

	if ( jq ) {
		return jq.map( function(i) {
			idx = $.inArray( this, tables );
			return idx !== -1 ? settings[idx] : null;
		} ).toArray();
	}
};


/**
 * DataTables API class - used to control and interface with  one or more
 * DataTables enhanced tables.
 *
 * The API class is heavily based on jQuery, presenting a chainable interface
 * that you can use to interact with tables. Each instance of the API class has
 * a "context" - i.e. the tables that it will operate on. This could be a single
 * table, all tables on a page or a sub-set thereof.
 *
 * Additionally the API is designed to allow you to easily work with the data in
 * the tables, retrieving and manipulating it as required. This is done by
 * presenting the API class as an array like interface. The contents of the
 * array depend upon the actions requested by each method (for example
 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
 * return an array of objects or arrays depending upon your table's
 * configuration). The API object has a number of array like methods (`push`,
 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
 * `unique` etc) to assist your working with the data held in a table.
 *
 * Most methods (those which return an Api instance) are chainable, which means
 * the return from a method call also has all of the methods available that the
 * top level object had. For example, these two calls are equivalent:
 *
 *     // Not chained
 *     api.row.add( {...} );
 *     api.draw();
 *
 *     // Chained
 *     api.row.add( {...} ).draw();
 *
 * @class DataTable.Api
 * @param {array|object|string|jQuery} context DataTable identifier. This is
 *   used to define which DataTables enhanced tables this API will operate on.
 *   Can be one of:
 *
 *   * `string` - jQuery selector. Any DataTables' matching the given selector
 *     with be found and used.
 *   * `node` - `TABLE` node which has already been formed into a DataTable.
 *   * `jQuery` - A jQuery object of `TABLE` nodes.
 *   * `object` - DataTables settings object
 * @param {array} [data] Data to initialise the Api instance with.
 *
 * @example
 *   // Direct initialisation during DataTables construction
 *   var api = $('#example').DataTable();
 *
 * @example
 *   // Initialisation using a DataTables jQuery object
 *   var api = $('#example').dataTable().api();
 *
 * @example
 *   // Initialisation as a constructor
 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
 */
_Api = function ( context, data )
{
	if ( ! (this instanceof _Api) ) {
		return new _Api( context, data );
	}

	var settings = [];
	var ctxSettings = function ( o ) {
		var a = _toSettings( o );
		if ( a ) {
			settings.push.apply( settings, a );
		}
	};

	if ( Array.isArray( context ) ) {
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			ctxSettings( context[i] );
		}
	}
	else {
		ctxSettings( context );
	}

	// Remove duplicates
	this.context = _unique( settings );

	// Initial data
	if ( data ) {
		$.merge( this, data );
	}

	// selector
	this.selector = {
		rows: null,
		cols: null,
		opts: null
	};

	_Api.extend( this, this, __apiStruct );
};

DataTable.Api = _Api;

// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
// isPlainObject.
$.extend( _Api.prototype, {
	any: function ()
	{
		return this.count() !== 0;
	},


	concat:  __arrayProto.concat,


	context: [], // array of table settings objects


	count: function ()
	{
		return this.flatten().length;
	},


	each: function ( fn )
	{
		for ( var i=0, ien=this.length ; i<ien; i++ ) {
			fn.call( this, this[i], i, this );
		}

		return this;
	},


	eq: function ( idx )
	{
		var ctx = this.context;

		return ctx.length > idx ?
			new _Api( ctx[idx], this[idx] ) :
			null;
	},


	filter: function ( fn )
	{
		var a = [];

		if ( __arrayProto.filter ) {
			a = __arrayProto.filter.call( this, fn, this );
		}
		else {
			// Compatibility for browsers without EMCA-252-5 (JS 1.6)
			for ( var i=0, ien=this.length ; i<ien ; i++ ) {
				if ( fn.call( this, this[i], i, this ) ) {
					a.push( this[i] );
				}
			}
		}

		return new _Api( this.context, a );
	},


	flatten: function ()
	{
		var a = [];
		return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
	},


	join:    __arrayProto.join,


	indexOf: __arrayProto.indexOf || function (obj, start)
	{
		for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
			if ( this[i] === obj ) {
				return i;
			}
		}
		return -1;
	},

	iterator: function ( flatten, type, fn, alwaysNew ) {
		var
			a = [], ret,
			i, ien, j, jen,
			context = this.context,
			rows, items, item,
			selector = this.selector;

		// Argument shifting
		if ( typeof flatten === 'string' ) {
			alwaysNew = fn;
			fn = type;
			type = flatten;
			flatten = false;
		}

		for ( i=0, ien=context.length ; i<ien ; i++ ) {
			var apiInst = new _Api( context[i] );

			if ( type === 'table' ) {
				ret = fn.call( apiInst, context[i], i );

				if ( ret !== undefined ) {
					a.push( ret );
				}
			}
			else if ( type === 'columns' || type === 'rows' ) {
				// this has same length as context - one entry for each table
				ret = fn.call( apiInst, context[i], this[i], i );

				if ( ret !== undefined ) {
					a.push( ret );
				}
			}
			else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
				// columns and rows share the same structure.
				// 'this' is an array of column indexes for each context
				items = this[i];

				if ( type === 'column-rows' ) {
					rows = _selector_row_indexes( context[i], selector.opts );
				}

				for ( j=0, jen=items.length ; j<jen ; j++ ) {
					item = items[j];

					if ( type === 'cell' ) {
						ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
					}
					else {
						ret = fn.call( apiInst, context[i], item, i, j, rows );
					}

					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
			}
		}

		if ( a.length || alwaysNew ) {
			var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
			var apiSelector = api.selector;
			apiSelector.rows = selector.rows;
			apiSelector.cols = selector.cols;
			apiSelector.opts = selector.opts;
			return api;
		}
		return this;
	},


	lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
	{
		// Bit cheeky...
		return this.indexOf.apply( this.toArray.reverse(), arguments );
	},


	length:  0,


	map: function ( fn )
	{
		var a = [];

		if ( __arrayProto.map ) {
			a = __arrayProto.map.call( this, fn, this );
		}
		else {
			// Compatibility for browsers without EMCA-252-5 (JS 1.6)
			for ( var i=0, ien=this.length ; i<ien ; i++ ) {
				a.push( fn.call( this, this[i], i ) );
			}
		}

		return new _Api( this.context, a );
	},


	pluck: function ( prop )
	{
		var fn = DataTable.util.get(prop);

		return this.map( function ( el ) {
			return fn(el);
		} );
	},

	pop:     __arrayProto.pop,


	push:    __arrayProto.push,


	// Does not return an API instance
	reduce: __arrayProto.reduce || function ( fn, init )
	{
		return _fnReduce( this, fn, init, 0, this.length, 1 );
	},


	reduceRight: __arrayProto.reduceRight || function ( fn, init )
	{
		return _fnReduce( this, fn, init, this.length-1, -1, -1 );
	},


	reverse: __arrayProto.reverse,


	// Object with rows, columns and opts
	selector: null,


	shift:   __arrayProto.shift,


	slice: function () {
		return new _Api( this.context, this );
	},


	sort:    __arrayProto.sort, // ? name - order?


	splice:  __arrayProto.splice,


	toArray: function ()
	{
		return __arrayProto.slice.call( this );
	},


	to$: function ()
	{
		return $( this );
	},


	toJQuery: function ()
	{
		return $( this );
	},


	unique: function ()
	{
		return new _Api( this.context, _unique(this) );
	},


	unshift: __arrayProto.unshift
} );


_Api.extend = function ( scope, obj, ext )
{
	// Only extend API instances and static properties of the API
	if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
		return;
	}

	var
		i, ien,
		struct,
		methodScoping = function ( scope, fn, struc ) {
			return function () {
				var ret = fn.apply( scope, arguments );

				// Method extension
				_Api.extend( ret, ret, struc.methodExt );
				return ret;
			};
		};

	for ( i=0, ien=ext.length ; i<ien ; i++ ) {
		struct = ext[i];

		// Value
		obj[ struct.name ] = struct.type === 'function' ?
			methodScoping( scope, struct.val, struct ) :
			struct.type === 'object' ?
				{} :
				struct.val;

		obj[ struct.name ].__dt_wrapper = true;

		// Property extension
		_Api.extend( scope, obj[ struct.name ], struct.propExt );
	}
};


// @todo - Is there need for an augment function?
// _Api.augment = function ( inst, name )
// {
// 	// Find src object in the structure from the name
// 	var parts = name.split('.');

// 	_Api.extend( inst, obj );
// };


//     [
//       {
//         name:      'data'                -- string   - Property name
//         val:       function () {},       -- function - Api method (or undefined if just an object
//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
//       },
//       {
//         name:     'row'
//         val:       {},
//         methodExt: [ ... ],
//         propExt:   [
//           {
//             name:      'data'
//             val:       function () {},
//             methodExt: [ ... ],
//             propExt:   [ ... ]
//           },
//           ...
//         ]
//       }
//     ]

_Api.register = _api_register = function ( name, val )
{
	if ( Array.isArray( name ) ) {
		for ( var j=0, jen=name.length ; j<jen ; j++ ) {
			_Api.register( name[j], val );
		}
		return;
	}

	var
		i, ien,
		heir = name.split('.'),
		struct = __apiStruct,
		key, method;

	var find = function ( src, name ) {
		for ( var i=0, ien=src.length ; i<ien ; i++ ) {
			if ( src[i].name === name ) {
				return src[i];
			}
		}
		return null;
	};

	for ( i=0, ien=heir.length ; i<ien ; i++ ) {
		method = heir[i].indexOf('()') !== -1;
		key = method ?
			heir[i].replace('()', '') :
			heir[i];

		var src = find( struct, key );
		if ( ! src ) {
			src = {
				name:      key,
				val:       {},
				methodExt: [],
				propExt:   [],
				type:      'object'
			};
			struct.push( src );
		}

		if ( i === ien-1 ) {
			src.val = val;
			src.type = typeof val === 'function' ?
				'function' :
				$.isPlainObject( val ) ?
					'object' :
					'other';
		}
		else {
			struct = method ?
				src.methodExt :
				src.propExt;
		}
	}
};

_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
	_Api.register( pluralName, val );

	_Api.register( singularName, function () {
		var ret = val.apply( this, arguments );

		if ( ret === this ) {
			// Returned item is the API instance that was passed in, return it
			return this;
		}
		else if ( ret instanceof _Api ) {
			// New API instance returned, want the value from the first item
			// in the returned array for the singular result.
			return ret.length ?
				Array.isArray( ret[0] ) ?
					new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
					ret[0] :
				undefined;
		}

		// Non-API return - just fire it back
		return ret;
	} );
};


/**
 * Selector for HTML tables. Apply the given selector to the give array of
 * DataTables settings objects.
 *
 * @param {string|integer} [selector] jQuery selector string or integer
 * @param  {array} Array of DataTables settings objects to be filtered
 * @return {array}
 * @ignore
 */
var __table_selector = function ( selector, a )
{
	if ( Array.isArray(selector) ) {
		return $.map( selector, function (item) {
			return __table_selector(item, a);
		} );
	}

	// Integer is used to pick out a table by index
	if ( typeof selector === 'number' ) {
		return [ a[ selector ] ];
	}

	// Perform a jQuery selector on the table nodes
	var nodes = $.map( a, function (el, i) {
		return el.nTable;
	} );

	return $(nodes)
		.filter( selector )
		.map( function (i) {
			// Need to translate back from the table node to the settings
			var idx = $.inArray( this, nodes );
			return a[ idx ];
		} )
		.toArray();
};



/**
 * Context selector for the API's context (i.e. the tables the API instance
 * refers to.
 *
 * @name    DataTable.Api#tables
 * @param {string|integer} [selector] Selector to pick which tables the iterator
 *   should operate on. If not given, all tables in the current context are
 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
 *   select multiple tables or as an integer to select a single table.
 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
 */
_api_register( 'tables()', function ( selector ) {
	// A new instance is created if there was a selector specified
	return selector !== undefined && selector !== null ?
		new _Api( __table_selector( selector, this.context ) ) :
		this;
} );


_api_register( 'table()', function ( selector ) {
	var tables = this.tables( selector );
	var ctx = tables.context;

	// Truncate to the first matched table
	return ctx.length ?
		new _Api( ctx[0] ) :
		tables;
} );


_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
	return this.iterator( 'table', function ( ctx ) {
		return ctx.nTable;
	}, 1 );
} );


_api_registerPlural( 'tables().body()', 'table().body()' , function () {
	return this.iterator( 'table', function ( ctx ) {
		return ctx.nTBody;
	}, 1 );
} );


_api_registerPlural( 'tables().header()', 'table().header()' , function () {
	return this.iterator( 'table', function ( ctx ) {
		return ctx.nTHead;
	}, 1 );
} );


_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
	return this.iterator( 'table', function ( ctx ) {
		return ctx.nTFoot;
	}, 1 );
} );


_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
	return this.iterator( 'table', function ( ctx ) {
		return ctx.nTableWrapper;
	}, 1 );
} );



/**
 * Redraw the tables in the current context.
 */
_api_register( 'draw()', function ( paging ) {
	return this.iterator( 'table', function ( settings ) {
		if ( paging === 'page' ) {
			_fnDraw( settings );
		}
		else {
			if ( typeof paging === 'string' ) {
				paging = paging === 'full-hold' ?
					false :
					true;
			}

			_fnReDraw( settings, paging===false );
		}
	} );
} );



/**
 * Get the current page index.
 *
 * @return {integer} Current page index (zero based)
 *//**
 * Set the current page.
 *
 * Note that if you attempt to show a page which does not exist, DataTables will
 * not throw an error, but rather reset the paging.
 *
 * @param {integer|string} action The paging action to take. This can be one of:
 *  * `integer` - The page index to jump to
 *  * `string` - An action to take:
 *    * `first` - Jump to first page.
 *    * `next` - Jump to the next page
 *    * `previous` - Jump to previous page
 *    * `last` - Jump to the last page.
 * @returns {DataTables.Api} this
 */
_api_register( 'page()', function ( action ) {
	if ( action === undefined ) {
		return this.page.info().page; // not an expensive call
	}

	// else, have an action to take on all tables
	return this.iterator( 'table', function ( settings ) {
		_fnPageChange( settings, action );
	} );
} );


/**
 * Paging information for the first table in the current context.
 *
 * If you require paging information for another table, use the `table()` method
 * with a suitable selector.
 *
 * @return {object} Object with the following properties set:
 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
 *  * `pages` - Total number of pages
 *  * `start` - Display index for the first record shown on the current page
 *  * `end` - Display index for the last record shown on the current page
 *  * `length` - Display length (number of records). Note that generally `start
 *    + length = end`, but this is not always true, for example if there are
 *    only 2 records to show on the final page, with a length of 10.
 *  * `recordsTotal` - Full data set length
 *  * `recordsDisplay` - Data set length once the current filtering criterion
 *    are applied.
 */
_api_register( 'page.info()', function ( action ) {
	if ( this.context.length === 0 ) {
		return undefined;
	}

	var
		settings   = this.context[0],
		start      = settings._iDisplayStart,
		len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
		visRecords = settings.fnRecordsDisplay(),
		all        = len === -1;

	return {
		"page":           all ? 0 : Math.floor( start / len ),
		"pages":          all ? 1 : Math.ceil( visRecords / len ),
		"start":          start,
		"end":            settings.fnDisplayEnd(),
		"length":         len,
		"recordsTotal":   settings.fnRecordsTotal(),
		"recordsDisplay": visRecords,
		"serverSide":     _fnDataSource( settings ) === 'ssp'
	};
} );


/**
 * Get the current page length.
 *
 * @return {integer} Current page length. Note `-1` indicates that all records
 *   are to be shown.
 *//**
 * Set the current page length.
 *
 * @param {integer} Page length to set. Use `-1` to show all records.
 * @returns {DataTables.Api} this
 */
_api_register( 'page.len()', function ( len ) {
	// Note that we can't call this function 'length()' because `length`
	// is a Javascript property of functions which defines how many arguments
	// the function expects.
	if ( len === undefined ) {
		return this.context.length !== 0 ?
			this.context[0]._iDisplayLength :
			undefined;
	}

	// else, set the page length
	return this.iterator( 'table', function ( settings ) {
		_fnLengthChange( settings, len );
	} );
} );



var __reload = function ( settings, holdPosition, callback ) {
	// Use the draw event to trigger a callback
	if ( callback ) {
		var api = new _Api( settings );

		api.one( 'draw', function () {
			callback( api.ajax.json() );
		} );
	}

	if ( _fnDataSource( settings ) == 'ssp' ) {
		_fnReDraw( settings, holdPosition );
	}
	else {
		_fnProcessingDisplay( settings, true );

		// Cancel an existing request
		var xhr = settings.jqXHR;
		if ( xhr && xhr.readyState !== 4 ) {
			xhr.abort();
		}

		// Trigger xhr
		_fnBuildAjax( settings, [], function( json ) {
			_fnClearTable( settings );

			var data = _fnAjaxDataSrc( settings, json );
			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				_fnAddData( settings, data[i] );
			}

			_fnReDraw( settings, holdPosition );
			_fnProcessingDisplay( settings, false );
		} );
	}
};


/**
 * Get the JSON response from the last Ajax request that DataTables made to the
 * server. Note that this returns the JSON from the first table in the current
 * context.
 *
 * @return {object} JSON received from the server.
 */
_api_register( 'ajax.json()', function () {
	var ctx = this.context;

	if ( ctx.length > 0 ) {
		return ctx[0].json;
	}

	// else return undefined;
} );


/**
 * Get the data submitted in the last Ajax request
 */
_api_register( 'ajax.params()', function () {
	var ctx = this.context;

	if ( ctx.length > 0 ) {
		return ctx[0].oAjaxData;
	}

	// else return undefined;
} );


/**
 * Reload tables from the Ajax data source. Note that this function will
 * automatically re-draw the table when the remote data has been loaded.
 *
 * @param {boolean} [reset=true] Reset (default) or hold the current paging
 *   position. A full re-sort and re-filter is performed when this method is
 *   called, which is why the pagination reset is the default action.
 * @returns {DataTables.Api} this
 */
_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
	return this.iterator( 'table', function (settings) {
		__reload( settings, resetPaging===false, callback );
	} );
} );


/**
 * Get the current Ajax URL. Note that this returns the URL from the first
 * table in the current context.
 *
 * @return {string} Current Ajax source URL
 *//**
 * Set the Ajax URL. Note that this will set the URL for all tables in the
 * current context.
 *
 * @param {string} url URL to set.
 * @returns {DataTables.Api} this
 */
_api_register( 'ajax.url()', function ( url ) {
	var ctx = this.context;

	if ( url === undefined ) {
		// get
		if ( ctx.length === 0 ) {
			return undefined;
		}
		ctx = ctx[0];

		return ctx.ajax ?
			$.isPlainObject( ctx.ajax ) ?
				ctx.ajax.url :
				ctx.ajax :
			ctx.sAjaxSource;
	}

	// set
	return this.iterator( 'table', function ( settings ) {
		if ( $.isPlainObject( settings.ajax ) ) {
			settings.ajax.url = url;
		}
		else {
			settings.ajax = url;
		}
		// No need to consider sAjaxSource here since DataTables gives priority
		// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
		// value of `sAjaxSource` redundant.
	} );
} );


/**
 * Load data from the newly set Ajax URL. Note that this method is only
 * available when `ajax.url()` is used to set a URL. Additionally, this method
 * has the same effect as calling `ajax.reload()` but is provided for
 * convenience when setting a new URL. Like `ajax.reload()` it will
 * automatically redraw the table once the remote data has been loaded.
 *
 * @returns {DataTables.Api} this
 */
_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
	// Same as a reload, but makes sense to present it for easy access after a
	// url change
	return this.iterator( 'table', function ( ctx ) {
		__reload( ctx, resetPaging===false, callback );
	} );
} );




var _selector_run = function ( type, selector, selectFn, settings, opts )
{
	var
		out = [], res,
		a, i, ien, j, jen,
		selectorType = typeof selector;

	// Can't just check for isArray here, as an API or jQuery instance might be
	// given with their array like look
	if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
		selector = [ selector ];
	}

	for ( i=0, ien=selector.length ; i<ien ; i++ ) {
		// Only split on simple strings - complex expressions will be jQuery selectors
		a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
			selector[i].split(',') :
			[ selector[i] ];

		for ( j=0, jen=a.length ; j<jen ; j++ ) {
			res = selectFn( typeof a[j] === 'string' ? (a[j]).trim() : a[j] );

			if ( res && res.length ) {
				out = out.concat( res );
			}
		}
	}

	// selector extensions
	var ext = _ext.selector[ type ];
	if ( ext.length ) {
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			out = ext[i]( settings, opts, out );
		}
	}

	return _unique( out );
};


var _selector_opts = function ( opts )
{
	if ( ! opts ) {
		opts = {};
	}

	// Backwards compatibility for 1.9- which used the terminology filter rather
	// than search
	if ( opts.filter && opts.search === undefined ) {
		opts.search = opts.filter;
	}

	return $.extend( {
		search: 'none',
		order: 'current',
		page: 'all'
	}, opts );
};


var _selector_first = function ( inst )
{
	// Reduce the API instance to the first item found
	for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
		if ( inst[i].length > 0 ) {
			// Assign the first element to the first item in the instance
			// and truncate the instance and context
			inst[0] = inst[i];
			inst[0].length = 1;
			inst.length = 1;
			inst.context = [ inst.context[i] ];

			return inst;
		}
	}

	// Not found - return an empty instance
	inst.length = 0;
	return inst;
};


var _selector_row_indexes = function ( settings, opts )
{
	var
		i, ien, tmp, a=[],
		displayFiltered = settings.aiDisplay,
		displayMaster = settings.aiDisplayMaster;

	var
		search = opts.search,  // none, applied, removed
		order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
		page   = opts.page;    // all, current

	if ( _fnDataSource( settings ) == 'ssp' ) {
		// In server-side processing mode, most options are irrelevant since
		// rows not shown don't exist and the index order is the applied order
		// Removed is a special case - for consistency just return an empty
		// array
		return search === 'removed' ?
			[] :
			_range( 0, displayMaster.length );
	}
	else if ( page == 'current' ) {
		// Current page implies that order=current and filter=applied, since it is
		// fairly senseless otherwise, regardless of what order and search actually
		// are
		for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
			a.push( displayFiltered[i] );
		}
	}
	else if ( order == 'current' || order == 'applied' ) {
		if ( search == 'none') {
			a = displayMaster.slice();
		}
		else if ( search == 'applied' ) {
			a = displayFiltered.slice();
		}
		else if ( search == 'removed' ) {
			// O(n+m) solution by creating a hash map
			var displayFilteredMap = {};

			for ( var i=0, ien=displayFiltered.length ; i<ien ; i++ ) {
				displayFilteredMap[displayFiltered[i]] = null;
			}

			a = $.map( displayMaster, function (el) {
				return ! displayFilteredMap.hasOwnProperty(el) ?
					el :
					null;
			} );
		}
	}
	else if ( order == 'index' || order == 'original' ) {
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			if ( search == 'none' ) {
				a.push( i );
			}
			else { // applied | removed
				tmp = $.inArray( i, displayFiltered );

				if ((tmp === -1 && search == 'removed') ||
					(tmp >= 0   && search == 'applied') )
				{
					a.push( i );
				}
			}
		}
	}

	return a;
};


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Rows
 *
 * {}          - no selector - use all available rows
 * {integer}   - row aoData index
 * {node}      - TR node
 * {string}    - jQuery selector to apply to the TR elements
 * {array}     - jQuery array of nodes, or simply an array of TR nodes
 *
 */
var __row_selector = function ( settings, selector, opts )
{
	var rows;
	var run = function ( sel ) {
		var selInt = _intVal( sel );
		var i, ien;
		var aoData = settings.aoData;

		// Short cut - selector is a number and no options provided (default is
		// all records, so no need to check if the index is in there, since it
		// must be - dev error if the index doesn't exist).
		if ( selInt !== null && ! opts ) {
			return [ selInt ];
		}

		if ( ! rows ) {
			rows = _selector_row_indexes( settings, opts );
		}

		if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
			// Selector - integer
			return [ selInt ];
		}
		else if ( sel === null || sel === undefined || sel === '' ) {
			// Selector - none
			return rows;
		}

		// Selector - function
		if ( typeof sel === 'function' ) {
			return $.map( rows, function (idx) {
				var row = aoData[ idx ];
				return sel( idx, row._aData, row.nTr ) ? idx : null;
			} );
		}

		// Selector - node
		if ( sel.nodeName ) {
			var rowIdx = sel._DT_RowIndex;  // Property added by DT for fast lookup
			var cellIdx = sel._DT_CellIndex;

			if ( rowIdx !== undefined ) {
				// Make sure that the row is actually still present in the table
				return aoData[ rowIdx ] && aoData[ rowIdx ].nTr === sel ?
					[ rowIdx ] :
					[];
			}
			else if ( cellIdx ) {
				return aoData[ cellIdx.row ] && aoData[ cellIdx.row ].nTr === sel.parentNode ?
					[ cellIdx.row ] :
					[];
			}
			else {
				var host = $(sel).closest('*[data-dt-row]');
				return host.length ?
					[ host.data('dt-row') ] :
					[];
			}
		}

		// ID selector. Want to always be able to select rows by id, regardless
		// of if the tr element has been created or not, so can't rely upon
		// jQuery here - hence a custom implementation. This does not match
		// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
		// but to select it using a CSS selector engine (like Sizzle or
		// querySelect) it would need to need to be escaped for some characters.
		// DataTables simplifies this for row selectors since you can select
		// only a row. A # indicates an id any anything that follows is the id -
		// unescaped.
		if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
			// get row index from id
			var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
			if ( rowObj !== undefined ) {
				return [ rowObj.idx ];
			}

			// need to fall through to jQuery in case there is DOM id that
			// matches
		}
		
		// Get nodes in the order from the `rows` array with null values removed
		var nodes = _removeEmpty(
			_pluck_order( settings.aoData, rows, 'nTr' )
		);

		// Selector - jQuery selector string, array of nodes or jQuery object/
		// As jQuery's .filter() allows jQuery objects to be passed in filter,
		// it also allows arrays, so this will cope with all three options
		return $(nodes)
			.filter( sel )
			.map( function () {
				return this._DT_RowIndex;
			} )
			.toArray();
	};

	return _selector_run( 'row', selector, run, settings, opts );
};


_api_register( 'rows()', function ( selector, opts ) {
	// argument shifting
	if ( selector === undefined ) {
		selector = '';
	}
	else if ( $.isPlainObject( selector ) ) {
		opts = selector;
		selector = '';
	}

	opts = _selector_opts( opts );

	var inst = this.iterator( 'table', function ( settings ) {
		return __row_selector( settings, selector, opts );
	}, 1 );

	// Want argument shifting here and in __row_selector?
	inst.selector.rows = selector;
	inst.selector.opts = opts;

	return inst;
} );

_api_register( 'rows().nodes()', function () {
	return this.iterator( 'row', function ( settings, row ) {
		return settings.aoData[ row ].nTr || undefined;
	}, 1 );
} );

_api_register( 'rows().data()', function () {
	return this.iterator( true, 'rows', function ( settings, rows ) {
		return _pluck_order( settings.aoData, rows, '_aData' );
	}, 1 );
} );

_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
	return this.iterator( 'row', function ( settings, row ) {
		var r = settings.aoData[ row ];
		return type === 'search' ? r._aFilterData : r._aSortData;
	}, 1 );
} );

_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
	return this.iterator( 'row', function ( settings, row ) {
		_fnInvalidate( settings, row, src );
	} );
} );

_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
	return this.iterator( 'row', function ( settings, row ) {
		return row;
	}, 1 );
} );

_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
	var a = [];
	var context = this.context;

	// `iterator` will drop undefined values, but in this case we want them
	for ( var i=0, ien=context.length ; i<ien ; i++ ) {
		for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
			var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
			a.push( (hash === true ? '#' : '' )+ id );
		}
	}

	return new _Api( context, a );
} );

_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
	var that = this;

	this.iterator( 'row', function ( settings, row, thatIdx ) {
		var data = settings.aoData;
		var rowData = data[ row ];
		var i, ien, j, jen;
		var loopRow, loopCells;

		data.splice( row, 1 );

		// Update the cached indexes
		for ( i=0, ien=data.length ; i<ien ; i++ ) {
			loopRow = data[i];
			loopCells = loopRow.anCells;

			// Rows
			if ( loopRow.nTr !== null ) {
				loopRow.nTr._DT_RowIndex = i;
			}

			// Cells
			if ( loopCells !== null ) {
				for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
					loopCells[j]._DT_CellIndex.row = i;
				}
			}
		}

		// Delete from the display arrays
		_fnDeleteIndex( settings.aiDisplayMaster, row );
		_fnDeleteIndex( settings.aiDisplay, row );
		_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes

		// For server-side processing tables - subtract the deleted row from the count
		if ( settings._iRecordsDisplay > 0 ) {
			settings._iRecordsDisplay--;
		}

		// Check for an 'overflow' they case for displaying the table
		_fnLengthOverflow( settings );

		// Remove the row's ID reference if there is one
		var id = settings.rowIdFn( rowData._aData );
		if ( id !== undefined ) {
			delete settings.aIds[ id ];
		}
	} );

	this.iterator( 'table', function ( settings ) {
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			settings.aoData[i].idx = i;
		}
	} );

	return this;
} );


_api_register( 'rows.add()', function ( rows ) {
	var newRows = this.iterator( 'table', function ( settings ) {
			var row, i, ien;
			var out = [];

			for ( i=0, ien=rows.length ; i<ien ; i++ ) {
				row = rows[i];

				if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
					out.push( _fnAddTr( settings, row )[0] );
				}
				else {
					out.push( _fnAddData( settings, row ) );
				}
			}

			return out;
		}, 1 );

	// Return an Api.rows() extended instance, so rows().nodes() etc can be used
	var modRows = this.rows( -1 );
	modRows.pop();
	$.merge( modRows, newRows );

	return modRows;
} );





/**
 *
 */
_api_register( 'row()', function ( selector, opts ) {
	return _selector_first( this.rows( selector, opts ) );
} );


_api_register( 'row().data()', function ( data ) {
	var ctx = this.context;

	if ( data === undefined ) {
		// Get
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ]._aData :
			undefined;
	}

	// Set
	var row = ctx[0].aoData[ this[0] ];
	row._aData = data;

	// If the DOM has an id, and the data source is an array
	if ( Array.isArray( data ) && row.nTr && row.nTr.id ) {
		_fnSetObjectDataFn( ctx[0].rowId )( data, row.nTr.id );
	}

	// Automatically invalidate
	_fnInvalidate( ctx[0], this[0], 'data' );

	return this;
} );


_api_register( 'row().node()', function () {
	var ctx = this.context;

	return ctx.length && this.length ?
		ctx[0].aoData[ this[0] ].nTr || null :
		null;
} );


_api_register( 'row.add()', function ( row ) {
	// Allow a jQuery object to be passed in - only a single row is added from
	// it though - the first element in the set
	if ( row instanceof $ && row.length ) {
		row = row[0];
	}

	var rows = this.iterator( 'table', function ( settings ) {
		if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
			return _fnAddTr( settings, row )[0];
		}
		return _fnAddData( settings, row );
	} );

	// Return an Api.rows() extended instance, with the newly added row selected
	return this.row( rows[0] );
} );


$(document).on('plugin-init.dt', function (e, context) {
	var api = new _Api( context );
	var namespace = 'on-plugin-init';
	var stateSaveParamsEvent = 'stateSaveParams.' + namespace;
	var destroyEvent = 'destroy. ' + namespace;

	api.on( stateSaveParamsEvent, function ( e, settings, d ) {
		// This could be more compact with the API, but it is a lot faster as a simple
		// internal loop
		var idFn = settings.rowIdFn;
		var data = settings.aoData;
		var ids = [];

		for (var i=0 ; i<data.length ; i++) {
			if (data[i]._detailsShow) {
				ids.push( '#' + idFn(data[i]._aData) );
			}
		}

		d.childRows = ids;
	});

	api.on( destroyEvent, function () {
		api.off(stateSaveParamsEvent + ' ' + destroyEvent);
	});

	var loaded = api.state.loaded();

	if ( loaded && loaded.childRows ) {
		api
			.rows( $.map(loaded.childRows, function (id){
				return id.replace(/:/g, '\\:')
			}) )
			.every( function () {
				_fnCallbackFire( context, null, 'requestChild', [ this ] )
			});
	}
});

var __details_add = function ( ctx, row, data, klass )
{
	// Convert to array of TR elements
	var rows = [];
	var addRow = function ( r, k ) {
		// Recursion to allow for arrays of jQuery objects
		if ( Array.isArray( r ) || r instanceof $ ) {
			for ( var i=0, ien=r.length ; i<ien ; i++ ) {
				addRow( r[i], k );
			}
			return;
		}

		// If we get a TR element, then just add it directly - up to the dev
		// to add the correct number of columns etc
		if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
			rows.push( r );
		}
		else {
			// Otherwise create a row with a wrapper
			var created = $('<tr><td></td></tr>').addClass( k );
			$('td', created)
				.addClass( k )
				.html( r )
				[0].colSpan = _fnVisbleColumns( ctx );

			rows.push( created[0] );
		}
	};

	addRow( data, klass );

	if ( row._details ) {
		row._details.detach();
	}

	row._details = $(rows);

	// If the children were already shown, that state should be retained
	if ( row._detailsShow ) {
		row._details.insertAfter( row.nTr );
	}
};


// Make state saving of child row details async to allow them to be batch processed
var __details_state = DataTable.util.throttle(
	function (ctx) {
		_fnSaveState( ctx[0] )
	},
	500
);


var __details_remove = function ( api, idx )
{
	var ctx = api.context;

	if ( ctx.length ) {
		var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];

		if ( row && row._details ) {
			row._details.remove();

			row._detailsShow = undefined;
			row._details = undefined;
			$( row.nTr ).removeClass( 'dt-hasChild' );
			__details_state( ctx );
		}
	}
};


var __details_display = function ( api, show ) {
	var ctx = api.context;

	if ( ctx.length && api.length ) {
		var row = ctx[0].aoData[ api[0] ];

		if ( row._details ) {
			row._detailsShow = show;

			if ( show ) {
				row._details.insertAfter( row.nTr );
				$( row.nTr ).addClass( 'dt-hasChild' );
			}
			else {
				row._details.detach();
				$( row.nTr ).removeClass( 'dt-hasChild' );
			}

			_fnCallbackFire( ctx[0], null, 'childRow', [ show, api.row( api[0] ) ] )

			__details_events( ctx[0] );
			__details_state( ctx );
		}
	}
};


var __details_events = function ( settings )
{
	var api = new _Api( settings );
	var namespace = '.dt.DT_details';
	var drawEvent = 'draw'+namespace;
	var colvisEvent = 'column-sizing'+namespace;
	var destroyEvent = 'destroy'+namespace;
	var data = settings.aoData;

	api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );

	if ( _pluck( data, '_details' ).length > 0 ) {
		// On each draw, insert the required elements into the document
		api.on( drawEvent, function ( e, ctx ) {
			if ( settings !== ctx ) {
				return;
			}

			api.rows( {page:'current'} ).eq(0).each( function (idx) {
				// Internal data grab
				var row = data[ idx ];

				if ( row._detailsShow ) {
					row._details.insertAfter( row.nTr );
				}
			} );
		} );

		// Column visibility change - update the colspan
		api.on( colvisEvent, function ( e, ctx, idx, vis ) {
			if ( settings !== ctx ) {
				return;
			}

			// Update the colspan for the details rows (note, only if it already has
			// a colspan)
			var row, visible = _fnVisbleColumns( ctx );

			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				row = data[i];

				if ( row._details ) {
					row._details.each(function () {
						var el = $(this).children('td');

						if (el.length == 1) {
							el.attr('colspan', visible);
						}
					});
				}
			}
		} );

		// Table destroyed - nuke any child rows
		api.on( destroyEvent, function ( e, ctx ) {
			if ( settings !== ctx ) {
				return;
			}

			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				if ( data[i]._details ) {
					__details_remove( api, i );
				}
			}
		} );
	}
};

// Strings for the method names to help minification
var _emp = '';
var _child_obj = _emp+'row().child';
var _child_mth = _child_obj+'()';

// data can be:
//  tr
//  string
//  jQuery or array of any of the above
_api_register( _child_mth, function ( data, klass ) {
	var ctx = this.context;

	if ( data === undefined ) {
		// get
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ]._details :
			undefined;
	}
	else if ( data === true ) {
		// show
		this.child.show();
	}
	else if ( data === false ) {
		// remove
		__details_remove( this );
	}
	else if ( ctx.length && this.length ) {
		// set
		__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
	}

	return this;
} );


_api_register( [
	_child_obj+'.show()',
	_child_mth+'.show()' // only when `child()` was called with parameters (without
], function ( show ) {   // it returns an object and this method is not executed)
	__details_display( this, true );
	return this;
} );


_api_register( [
	_child_obj+'.hide()',
	_child_mth+'.hide()' // only when `child()` was called with parameters (without
], function () {         // it returns an object and this method is not executed)
	__details_display( this, false );
	return this;
} );


_api_register( [
	_child_obj+'.remove()',
	_child_mth+'.remove()' // only when `child()` was called with parameters (without
], function () {           // it returns an object and this method is not executed)
	__details_remove( this );
	return this;
} );


_api_register( _child_obj+'.isShown()', function () {
	var ctx = this.context;

	if ( ctx.length && this.length ) {
		// _detailsShown as false or undefined will fall through to return false
		return ctx[0].aoData[ this[0] ]._detailsShow || false;
	}
	return false;
} );



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Columns
 *
 * {integer}           - column index (>=0 count from left, <0 count from right)
 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
 * "{string}:name"     - column name
 * "{string}"          - jQuery selector on column header nodes
 *
 */

// can be an array of these items, comma separated list, or an array of comma
// separated lists

var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;


// r1 and r2 are redundant - but it means that the parameters match for the
// iterator callback in columns().data()
var __columnData = function ( settings, column, r1, r2, rows ) {
	var a = [];
	for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
		a.push( _fnGetCellData( settings, rows[row], column ) );
	}
	return a;
};


var __column_selector = function ( settings, selector, opts )
{
	var
		columns = settings.aoColumns,
		names = _pluck( columns, 'sName' ),
		nodes = _pluck( columns, 'nTh' );

	var run = function ( s ) {
		var selInt = _intVal( s );

		// Selector - all
		if ( s === '' ) {
			return _range( columns.length );
		}

		// Selector - index
		if ( selInt !== null ) {
			return [ selInt >= 0 ?
				selInt : // Count from left
				columns.length + selInt // Count from right (+ because its a negative value)
			];
		}

		// Selector = function
		if ( typeof s === 'function' ) {
			var rows = _selector_row_indexes( settings, opts );

			return $.map( columns, function (col, idx) {
				return s(
						idx,
						__columnData( settings, idx, 0, 0, rows ),
						nodes[ idx ]
					) ? idx : null;
			} );
		}

		// jQuery or string selector
		var match = typeof s === 'string' ?
			s.match( __re_column_selector ) :
			'';

		if ( match ) {
			switch( match[2] ) {
				case 'visIdx':
				case 'visible':
					var idx = parseInt( match[1], 10 );
					// Visible index given, convert to column index
					if ( idx < 0 ) {
						// Counting from the right
						var visColumns = $.map( columns, function (col,i) {
							return col.bVisible ? i : null;
						} );
						return [ visColumns[ visColumns.length + idx ] ];
					}
					// Counting from the left
					return [ _fnVisibleToColumnIndex( settings, idx ) ];

				case 'name':
					// match by name. `names` is column index complete and in order
					return $.map( names, function (name, i) {
						return name === match[1] ? i : null;
					} );

				default:
					return [];
			}
		}

		// Cell in the table body
		if ( s.nodeName && s._DT_CellIndex ) {
			return [ s._DT_CellIndex.column ];
		}

		// jQuery selector on the TH elements for the columns
		var jqResult = $( nodes )
			.filter( s )
			.map( function () {
				return $.inArray( this, nodes ); // `nodes` is column index complete and in order
			} )
			.toArray();

		if ( jqResult.length || ! s.nodeName ) {
			return jqResult;
		}

		// Otherwise a node which might have a `dt-column` data attribute, or be
		// a child or such an element
		var host = $(s).closest('*[data-dt-column]');
		return host.length ?
			[ host.data('dt-column') ] :
			[];
	};

	return _selector_run( 'column', selector, run, settings, opts );
};


var __setColumnVis = function ( settings, column, vis ) {
	var
		cols = settings.aoColumns,
		col  = cols[ column ],
		data = settings.aoData,
		row, cells, i, ien, tr;

	// Get
	if ( vis === undefined ) {
		return col.bVisible;
	}

	// Set
	// No change
	if ( col.bVisible === vis ) {
		return;
	}

	if ( vis ) {
		// Insert column
		// Need to decide if we should use appendChild or insertBefore
		var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );

		for ( i=0, ien=data.length ; i<ien ; i++ ) {
			tr = data[i].nTr;
			cells = data[i].anCells;

			if ( tr ) {
				// insertBefore can act like appendChild if 2nd arg is null
				tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
			}
		}
	}
	else {
		// Remove column
		$( _pluck( settings.aoData, 'anCells', column ) ).detach();
	}

	// Common actions
	col.bVisible = vis;
};


_api_register( 'columns()', function ( selector, opts ) {
	// argument shifting
	if ( selector === undefined ) {
		selector = '';
	}
	else if ( $.isPlainObject( selector ) ) {
		opts = selector;
		selector = '';
	}

	opts = _selector_opts( opts );

	var inst = this.iterator( 'table', function ( settings ) {
		return __column_selector( settings, selector, opts );
	}, 1 );

	// Want argument shifting here and in _row_selector?
	inst.selector.cols = selector;
	inst.selector.opts = opts;

	return inst;
} );

_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
	return this.iterator( 'column', function ( settings, column ) {
		return settings.aoColumns[column].nTh;
	}, 1 );
} );

_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
	return this.iterator( 'column', function ( settings, column ) {
		return settings.aoColumns[column].nTf;
	}, 1 );
} );

_api_registerPlural( 'columns().data()', 'column().data()', function () {
	return this.iterator( 'column-rows', __columnData, 1 );
} );

_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
	return this.iterator( 'column', function ( settings, column ) {
		return settings.aoColumns[column].mData;
	}, 1 );
} );

_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
	return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
		return _pluck_order( settings.aoData, rows,
			type === 'search' ? '_aFilterData' : '_aSortData', column
		);
	}, 1 );
} );

_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
	return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
		return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
	}, 1 );
} );

_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
	var that = this;
	var ret = this.iterator( 'column', function ( settings, column ) {
		if ( vis === undefined ) {
			return settings.aoColumns[ column ].bVisible;
		} // else
		__setColumnVis( settings, column, vis );
	} );

	// Group the column visibility changes
	if ( vis !== undefined ) {
		this.iterator( 'table', function ( settings ) {
			// Redraw the header after changes
			_fnDrawHead( settings, settings.aoHeader );
			_fnDrawHead( settings, settings.aoFooter );
	
			// Update colspan for no records display. Child rows and extensions will use their own
			// listeners to do this - only need to update the empty table item here
			if ( ! settings.aiDisplay.length ) {
				$(settings.nTBody).find('td[colspan]').attr('colspan', _fnVisbleColumns(settings));
			}
	
			_fnSaveState( settings );

			// Second loop once the first is done for events
			that.iterator( 'column', function ( settings, column ) {
				_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
			} );

			if ( calc === undefined || calc ) {
				that.columns.adjust();
			}
		});
	}

	return ret;
} );

_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
	return this.iterator( 'column', function ( settings, column ) {
		return type === 'visible' ?
			_fnColumnIndexToVisible( settings, column ) :
			column;
	}, 1 );
} );

_api_register( 'columns.adjust()', function () {
	return this.iterator( 'table', function ( settings ) {
		_fnAdjustColumnSizing( settings );
	}, 1 );
} );

_api_register( 'column.index()', function ( type, idx ) {
	if ( this.context.length !== 0 ) {
		var ctx = this.context[0];

		if ( type === 'fromVisible' || type === 'toData' ) {
			return _fnVisibleToColumnIndex( ctx, idx );
		}
		else if ( type === 'fromData' || type === 'toVisible' ) {
			return _fnColumnIndexToVisible( ctx, idx );
		}
	}
} );

_api_register( 'column()', function ( selector, opts ) {
	return _selector_first( this.columns( selector, opts ) );
} );

var __cell_selector = function ( settings, selector, opts )
{
	var data = settings.aoData;
	var rows = _selector_row_indexes( settings, opts );
	var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
	var allCells = $(_flatten( [], cells ));
	var row;
	var columns = settings.aoColumns.length;
	var a, i, ien, j, o, host;

	var run = function ( s ) {
		var fnSelector = typeof s === 'function';

		if ( s === null || s === undefined || fnSelector ) {
			// All cells and function selectors
			a = [];

			for ( i=0, ien=rows.length ; i<ien ; i++ ) {
				row = rows[i];

				for ( j=0 ; j<columns ; j++ ) {
					o = {
						row: row,
						column: j
					};

					if ( fnSelector ) {
						// Selector - function
						host = data[ row ];

						if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
							a.push( o );
						}
					}
					else {
						// Selector - all
						a.push( o );
					}
				}
			}

			return a;
		}
		
		// Selector - index
		if ( $.isPlainObject( s ) ) {
			// Valid cell index and its in the array of selectable rows
			return s.column !== undefined && s.row !== undefined && $.inArray( s.row, rows ) !== -1 ?
				[s] :
				[];
		}

		// Selector - jQuery filtered cells
		var jqResult = allCells
			.filter( s )
			.map( function (i, el) {
				return { // use a new object, in case someone changes the values
					row:    el._DT_CellIndex.row,
					column: el._DT_CellIndex.column
 				};
			} )
			.toArray();

		if ( jqResult.length || ! s.nodeName ) {
			return jqResult;
		}

		// Otherwise the selector is a node, and there is one last option - the
		// element might be a child of an element which has dt-row and dt-column
		// data attributes
		host = $(s).closest('*[data-dt-row]');
		return host.length ?
			[ {
				row: host.data('dt-row'),
				column: host.data('dt-column')
			} ] :
			[];
	};

	return _selector_run( 'cell', selector, run, settings, opts );
};




_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
	// Argument shifting
	if ( $.isPlainObject( rowSelector ) ) {
		// Indexes
		if ( rowSelector.row === undefined ) {
			// Selector options in first parameter
			opts = rowSelector;
			rowSelector = null;
		}
		else {
			// Cell index objects in first parameter
			opts = columnSelector;
			columnSelector = null;
		}
	}
	if ( $.isPlainObject( columnSelector ) ) {
		opts = columnSelector;
		columnSelector = null;
	}

	// Cell selector
	if ( columnSelector === null || columnSelector === undefined ) {
		return this.iterator( 'table', function ( settings ) {
			return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
		} );
	}

	// The default built in options need to apply to row and columns
	var internalOpts = opts ? {
		page: opts.page,
		order: opts.order,
		search: opts.search
	} : {};

	// Row + column selector
	var columns = this.columns( columnSelector, internalOpts );
	var rows = this.rows( rowSelector, internalOpts );
	var i, ien, j, jen;

	var cellsNoOpts = this.iterator( 'table', function ( settings, idx ) {
		var a = [];

		for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
			for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
				a.push( {
					row:    rows[idx][i],
					column: columns[idx][j]
				} );
			}
		}

		return a;
	}, 1 );

	// There is currently only one extension which uses a cell selector extension
	// It is a _major_ performance drag to run this if it isn't needed, so this is
	// an extension specific check at the moment
	var cells = opts && opts.selected ?
		this.cells( cellsNoOpts, opts ) :
		cellsNoOpts;

	$.extend( cells.selector, {
		cols: columnSelector,
		rows: rowSelector,
		opts: opts
	} );

	return cells;
} );


_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
	return this.iterator( 'cell', function ( settings, row, column ) {
		var data = settings.aoData[ row ];

		return data && data.anCells ?
			data.anCells[ column ] :
			undefined;
	}, 1 );
} );


_api_register( 'cells().data()', function () {
	return this.iterator( 'cell', function ( settings, row, column ) {
		return _fnGetCellData( settings, row, column );
	}, 1 );
} );


_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
	type = type === 'search' ? '_aFilterData' : '_aSortData';

	return this.iterator( 'cell', function ( settings, row, column ) {
		return settings.aoData[ row ][ type ][ column ];
	}, 1 );
} );


_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
	return this.iterator( 'cell', function ( settings, row, column ) {
		return _fnGetCellData( settings, row, column, type );
	}, 1 );
} );


_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
	return this.iterator( 'cell', function ( settings, row, column ) {
		return {
			row: row,
			column: column,
			columnVisible: _fnColumnIndexToVisible( settings, column )
		};
	}, 1 );
} );


_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
	return this.iterator( 'cell', function ( settings, row, column ) {
		_fnInvalidate( settings, row, src, column );
	} );
} );



_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
	return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
} );


_api_register( 'cell().data()', function ( data ) {
	var ctx = this.context;
	var cell = this[0];

	if ( data === undefined ) {
		// Get
		return ctx.length && cell.length ?
			_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
			undefined;
	}

	// Set
	_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
	_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );

	return this;
} );



/**
 * Get current ordering (sorting) that has been applied to the table.
 *
 * @returns {array} 2D array containing the sorting information for the first
 *   table in the current context. Each element in the parent array represents
 *   a column being sorted upon (i.e. multi-sorting with two columns would have
 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
 *   the column index that the sorting condition applies to, the second is the
 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
 *   index of the sorting order from the `column.sorting` initialisation array.
 *//**
 * Set the ordering for the table.
 *
 * @param {integer} order Column index to sort upon.
 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
 * @returns {DataTables.Api} this
 *//**
 * Set the ordering for the table.
 *
 * @param {array} order 1D array of sorting information to be applied.
 * @param {array} [...] Optional additional sorting conditions
 * @returns {DataTables.Api} this
 *//**
 * Set the ordering for the table.
 *
 * @param {array} order 2D array of sorting information to be applied.
 * @returns {DataTables.Api} this
 */
_api_register( 'order()', function ( order, dir ) {
	var ctx = this.context;

	if ( order === undefined ) {
		// get
		return ctx.length !== 0 ?
			ctx[0].aaSorting :
			undefined;
	}

	// set
	if ( typeof order === 'number' ) {
		// Simple column / direction passed in
		order = [ [ order, dir ] ];
	}
	else if ( order.length && ! Array.isArray( order[0] ) ) {
		// Arguments passed in (list of 1D arrays)
		order = Array.prototype.slice.call( arguments );
	}
	// otherwise a 2D array was passed in

	return this.iterator( 'table', function ( settings ) {
		settings.aaSorting = order.slice();
	} );
} );


/**
 * Attach a sort listener to an element for a given column
 *
 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
 *   listener to. This can take the form of a single DOM node, a jQuery
 *   collection of nodes or a jQuery selector which will identify the node(s).
 * @param {integer} column the column that a click on this node will sort on
 * @param {function} [callback] callback function when sort is run
 * @returns {DataTables.Api} this
 */
_api_register( 'order.listener()', function ( node, column, callback ) {
	return this.iterator( 'table', function ( settings ) {
		_fnSortAttachListener( settings, node, column, callback );
	} );
} );


_api_register( 'order.fixed()', function ( set ) {
	if ( ! set ) {
		var ctx = this.context;
		var fixed = ctx.length ?
			ctx[0].aaSortingFixed :
			undefined;

		return Array.isArray( fixed ) ?
			{ pre: fixed } :
			fixed;
	}

	return this.iterator( 'table', function ( settings ) {
		settings.aaSortingFixed = $.extend( true, {}, set );
	} );
} );


// Order by the selected column(s)
_api_register( [
	'columns().order()',
	'column().order()'
], function ( dir ) {
	var that = this;

	return this.iterator( 'table', function ( settings, i ) {
		var sort = [];

		$.each( that[i], function (j, col) {
			sort.push( [ col, dir ] );
		} );

		settings.aaSorting = sort;
	} );
} );



_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
	var ctx = this.context;

	if ( input === undefined ) {
		// get
		return ctx.length !== 0 ?
			ctx[0].oPreviousSearch.sSearch :
			undefined;
	}

	// set
	return this.iterator( 'table', function ( settings ) {
		if ( ! settings.oFeatures.bFilter ) {
			return;
		}

		_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
			"sSearch": input+"",
			"bRegex":  regex === null ? false : regex,
			"bSmart":  smart === null ? true  : smart,
			"bCaseInsensitive": caseInsen === null ? true : caseInsen
		} ), 1 );
	} );
} );


_api_registerPlural(
	'columns().search()',
	'column().search()',
	function ( input, regex, smart, caseInsen ) {
		return this.iterator( 'column', function ( settings, column ) {
			var preSearch = settings.aoPreSearchCols;

			if ( input === undefined ) {
				// get
				return preSearch[ column ].sSearch;
			}

			// set
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}

			$.extend( preSearch[ column ], {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} );

			_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
		} );
	}
);

/*
 * State API methods
 */

_api_register( 'state()', function () {
	return this.context.length ?
		this.context[0].oSavedState :
		null;
} );


_api_register( 'state.clear()', function () {
	return this.iterator( 'table', function ( settings ) {
		// Save an empty object
		settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
	} );
} );


_api_register( 'state.loaded()', function () {
	return this.context.length ?
		this.context[0].oLoadedState :
		null;
} );


_api_register( 'state.save()', function () {
	return this.iterator( 'table', function ( settings ) {
		_fnSaveState( settings );
	} );
} );



/**
 * Set the jQuery or window object to be used by DataTables
 *
 * @param {*} module Library / container object
 * @param {string} [type] Library or container type `lib`, `win` or `datetime`.
 *   If not provided, automatic detection is attempted.
 */
DataTable.use = function (module, type) {
	if (type === 'lib' || module.fn) {
		$ = module;
	}
	else if (type == 'win' || module.document) {
		window = module;
		document = module.document;
	}
	else if (type === 'datetime' || module.type === 'DateTime') {
		DataTable.DateTime = module;
	}
}

/**
 * CommonJS factory function pass through. This will check if the arguments
 * given are a window object or a jQuery object. If so they are set
 * accordingly.
 * @param {*} root Window
 * @param {*} jq jQUery
 * @returns {boolean} Indicator
 */
DataTable.factory = function (root, jq) {
	var is = false;

	// Test if the first parameter is a window object
	if (root && root.document) {
		window = root;
		document = root.document;
	}

	// Test if the second parameter is a jQuery object
	if (jq && jq.fn && jq.fn.jquery) {
		$ = jq;
		is = true;
	}

	return is;
}

/**
 * Provide a common method for plug-ins to check the version of DataTables being
 * used, in order to ensure compatibility.
 *
 *  @param {string} version Version string to check for, in the format "X.Y.Z".
 *    Note that the formats "X" and "X.Y" are also acceptable.
 *  @returns {boolean} true if this version of DataTables is greater or equal to
 *    the required version, or false if this version of DataTales is not
 *    suitable
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
 */
DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
{
	var aThis = DataTable.version.split('.');
	var aThat = version.split('.');
	var iThis, iThat;

	for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
		iThis = parseInt( aThis[i], 10 ) || 0;
		iThat = parseInt( aThat[i], 10 ) || 0;

		// Parts are the same, keep comparing
		if (iThis === iThat) {
			continue;
		}

		// Parts are different, return immediately
		return iThis > iThat;
	}

	return true;
};


/**
 * Check if a `<table>` node is a DataTable table already or not.
 *
 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
 *      selector for the table to test. Note that if more than more than one
 *      table is passed on, only the first will be checked
 *  @returns {boolean} true the table given is a DataTable, or false otherwise
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
 *      $('#example').dataTable();
 *    }
 */
DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
{
	var t = $(table).get(0);
	var is = false;

	if ( table instanceof DataTable.Api ) {
		return true;
	}

	$.each( DataTable.settings, function (i, o) {
		var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
		var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;

		if ( o.nTable === t || head === t || foot === t ) {
			is = true;
		}
	} );

	return is;
};


/**
 * Get all DataTable tables that have been initialised - optionally you can
 * select to get only currently visible tables.
 *
 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
 *    or visible tables only.
 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
 *    DataTables
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    $.each( $.fn.dataTable.tables(true), function () {
 *      $(table).DataTable().columns.adjust();
 *    } );
 */
DataTable.tables = DataTable.fnTables = function ( visible )
{
	var api = false;

	if ( $.isPlainObject( visible ) ) {
		api = visible.api;
		visible = visible.visible;
	}

	var a = $.map( DataTable.settings, function (o) {
		if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
			return o.nTable;
		}
	} );

	return api ?
		new _Api( a ) :
		a;
};


/**
 * Convert from camel case parameters to Hungarian notation. This is made public
 * for the extensions to provide the same ability as DataTables core to accept
 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
 * parameters.
 *
 *  @param {object} src The model object which holds all parameters that can be
 *    mapped.
 *  @param {object} user The object to convert from camel case to Hungarian.
 *  @param {boolean} force When set to `true`, properties which already have a
 *    Hungarian value in the `user` object will be overwritten. Otherwise they
 *    won't be.
 */
DataTable.camelToHungarian = _fnCamelToHungarian;



/**
 *
 */
_api_register( '$()', function ( selector, opts ) {
	var
		rows   = this.rows( opts ).nodes(), // Get all rows
		jqRows = $(rows);

	return $( [].concat(
		jqRows.filter( selector ).toArray(),
		jqRows.find( selector ).toArray()
	) );
} );


// jQuery functions to operate on the tables
$.each( [ 'on', 'one', 'off' ], function (i, key) {
	_api_register( key+'()', function ( /* event, handler */ ) {
		var args = Array.prototype.slice.call(arguments);

		// Add the `dt` namespace automatically if it isn't already present
		args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
			return ! e.match(/\.dt\b/) ?
				e+'.dt' :
				e;
			} ).join( ' ' );

		var inst = $( this.tables().nodes() );
		inst[key].apply( inst, args );
		return this;
	} );
} );


_api_register( 'clear()', function () {
	return this.iterator( 'table', function ( settings ) {
		_fnClearTable( settings );
	} );
} );


_api_register( 'settings()', function () {
	return new _Api( this.context, this.context );
} );


_api_register( 'init()', function () {
	var ctx = this.context;
	return ctx.length ? ctx[0].oInit : null;
} );


_api_register( 'data()', function () {
	return this.iterator( 'table', function ( settings ) {
		return _pluck( settings.aoData, '_aData' );
	} ).flatten();
} );


_api_register( 'destroy()', function ( remove ) {
	remove = remove || false;

	return this.iterator( 'table', function ( settings ) {
		var classes   = settings.oClasses;
		var table     = settings.nTable;
		var tbody     = settings.nTBody;
		var thead     = settings.nTHead;
		var tfoot     = settings.nTFoot;
		var jqTable   = $(table);
		var jqTbody   = $(tbody);
		var jqWrapper = $(settings.nTableWrapper);
		var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
		var i, ien;

		// Flag to note that the table is currently being destroyed - no action
		// should be taken
		settings.bDestroying = true;

		// Fire off the destroy callbacks for plug-ins etc
		_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );

		// If not being removed from the document, make all columns visible
		if ( ! remove ) {
			new _Api( settings ).columns().visible( true );
		}

		// Blitz all `DT` namespaced events (these are internal events, the
		// lowercase, `dt` events are user subscribed and they are responsible
		// for removing them
		jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
		$(window).off('.DT-'+settings.sInstance);

		// When scrolling we had to break the table up - restore it
		if ( table != thead.parentNode ) {
			jqTable.children('thead').detach();
			jqTable.append( thead );
		}

		if ( tfoot && table != tfoot.parentNode ) {
			jqTable.children('tfoot').detach();
			jqTable.append( tfoot );
		}

		settings.aaSorting = [];
		settings.aaSortingFixed = [];
		_fnSortingClasses( settings );

		$( rows ).removeClass( settings.asStripeClasses.join(' ') );

		$('th, td', thead).removeClass( classes.sSortable+' '+
			classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
		);

		// Add the TR elements back into the table in their original order
		jqTbody.children().detach();
		jqTbody.append( rows );

		var orig = settings.nTableWrapper.parentNode;

		// Remove the DataTables generated nodes, events and classes
		var removedMethod = remove ? 'remove' : 'detach';
		jqTable[ removedMethod ]();
		jqWrapper[ removedMethod ]();

		// If we need to reattach the table to the document
		if ( ! remove && orig ) {
			// insertBefore acts like appendChild if !arg[1]
			orig.insertBefore( table, settings.nTableReinsertBefore );

			// Restore the width of the original table - was read from the style property,
			// so we can restore directly to that
			jqTable
				.css( 'width', settings.sDestroyWidth )
				.removeClass( classes.sTable );

			// If the were originally stripe classes - then we add them back here.
			// Note this is not fool proof (for example if not all rows had stripe
			// classes - but it's a good effort without getting carried away
			ien = settings.asDestroyStripes.length;

			if ( ien ) {
				jqTbody.children().each( function (i) {
					$(this).addClass( settings.asDestroyStripes[i % ien] );
				} );
			}
		}

		/* Remove the settings object from the settings array */
		var idx = $.inArray( settings, DataTable.settings );
		if ( idx !== -1 ) {
			DataTable.settings.splice( idx, 1 );
		}
	} );
} );


// Add the `every()` method for rows, columns and cells in a compact form
$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
	_api_register( type+'s().every()', function ( fn ) {
		var opts = this.selector.opts;
		var api = this;

		return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
			// Rows and columns:
			//  arg1 - index
			//  arg2 - table counter
			//  arg3 - loop counter
			//  arg4 - undefined
			// Cells:
			//  arg1 - row index
			//  arg2 - column index
			//  arg3 - table counter
			//  arg4 - loop counter
			fn.call(
				api[ type ](
					arg1,
					type==='cell' ? arg2 : opts,
					type==='cell' ? opts : undefined
				),
				arg1, arg2, arg3, arg4
			);
		} );
	} );
} );


// i18n method for extensions to be able to use the language object from the
// DataTable
_api_register( 'i18n()', function ( token, def, plural ) {
	var ctx = this.context[0];
	var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );

	if ( resolved === undefined ) {
		resolved = def;
	}

	if ( plural !== undefined && $.isPlainObject( resolved ) ) {
		resolved = resolved[ plural ] !== undefined ?
			resolved[ plural ] :
			resolved._;
	}

	return typeof resolved === 'string'
		? resolved.replace( '%d', plural ) // nb: plural might be undefined,
		: resolved;
} );
/**
 * Version string for plug-ins to check compatibility. Allowed format is
 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
 * only for non-release builds. See https://semver.org/ for more information.
 *  @member
 *  @type string
 *  @default Version number
 */
DataTable.version = "1.13.7";

/**
 * Private data store, containing all of the settings objects that are
 * created for the tables on a given page.
 *
 * Note that the `DataTable.settings` object is aliased to
 * `jQuery.fn.dataTableExt` through which it may be accessed and
 * manipulated, or `jQuery.fn.dataTable.settings`.
 *  @member
 *  @type array
 *  @default []
 *  @private
 */
DataTable.settings = [];

/**
 * Object models container, for the various models that DataTables has
 * available to it. These models define the objects that are used to hold
 * the active state and configuration of the table.
 *  @namespace
 */
DataTable.models = {};



/**
 * Template object for the way in which DataTables holds information about
 * search information for the global filter and individual column filters.
 *  @namespace
 */
DataTable.models.oSearch = {
	/**
	 * Flag to indicate if the filtering should be case insensitive or not
	 *  @type boolean
	 *  @default true
	 */
	"bCaseInsensitive": true,

	/**
	 * Applied search term
	 *  @type string
	 *  @default <i>Empty string</i>
	 */
	"sSearch": "",

	/**
	 * Flag to indicate if the search term should be interpreted as a
	 * regular expression (true) or not (false) and therefore and special
	 * regex characters escaped.
	 *  @type boolean
	 *  @default false
	 */
	"bRegex": false,

	/**
	 * Flag to indicate if DataTables is to use its smart filtering or not.
	 *  @type boolean
	 *  @default true
	 */
	"bSmart": true,

	/**
	 * Flag to indicate if DataTables should only trigger a search when
	 * the return key is pressed.
	 *  @type boolean
	 *  @default false
	 */
	"return": false
};




/**
 * Template object for the way in which DataTables holds information about
 * each individual row. This is the object format used for the settings
 * aoData array.
 *  @namespace
 */
DataTable.models.oRow = {
	/**
	 * TR element for the row
	 *  @type node
	 *  @default null
	 */
	"nTr": null,

	/**
	 * Array of TD elements for each row. This is null until the row has been
	 * created.
	 *  @type array nodes
	 *  @default []
	 */
	"anCells": null,

	/**
	 * Data object from the original data source for the row. This is either
	 * an array if using the traditional form of DataTables, or an object if
	 * using mData options. The exact type will depend on the passed in
	 * data from the data source, or will be an array if using DOM a data
	 * source.
	 *  @type array|object
	 *  @default []
	 */
	"_aData": [],

	/**
	 * Sorting data cache - this array is ostensibly the same length as the
	 * number of columns (although each index is generated only as it is
	 * needed), and holds the data that is used for sorting each column in the
	 * row. We do this cache generation at the start of the sort in order that
	 * the formatting of the sort data need be done only once for each cell
	 * per sort. This array should not be read from or written to by anything
	 * other than the master sorting methods.
	 *  @type array
	 *  @default null
	 *  @private
	 */
	"_aSortData": null,

	/**
	 * Per cell filtering data cache. As per the sort data cache, used to
	 * increase the performance of the filtering in DataTables
	 *  @type array
	 *  @default null
	 *  @private
	 */
	"_aFilterData": null,

	/**
	 * Filtering data cache. This is the same as the cell filtering cache, but
	 * in this case a string rather than an array. This is easily computed with
	 * a join on `_aFilterData`, but is provided as a cache so the join isn't
	 * needed on every search (memory traded for performance)
	 *  @type array
	 *  @default null
	 *  @private
	 */
	"_sFilterRow": null,

	/**
	 * Cache of the class name that DataTables has applied to the row, so we
	 * can quickly look at this variable rather than needing to do a DOM check
	 * on className for the nTr property.
	 *  @type string
	 *  @default <i>Empty string</i>
	 *  @private
	 */
	"_sRowStripe": "",

	/**
	 * Denote if the original data source was from the DOM, or the data source
	 * object. This is used for invalidating data, so DataTables can
	 * automatically read data from the original source, unless uninstructed
	 * otherwise.
	 *  @type string
	 *  @default null
	 *  @private
	 */
	"src": null,

	/**
	 * Index in the aoData array. This saves an indexOf lookup when we have the
	 * object, but want to know the index
	 *  @type integer
	 *  @default -1
	 *  @private
	 */
	"idx": -1
};


/**
 * Template object for the column information object in DataTables. This object
 * is held in the settings aoColumns array and contains all the information that
 * DataTables needs about each individual column.
 *
 * Note that this object is related to {@link DataTable.defaults.column}
 * but this one is the internal data store for DataTables's cache of columns.
 * It should NOT be manipulated outside of DataTables. Any configuration should
 * be done through the initialisation options.
 *  @namespace
 */
DataTable.models.oColumn = {
	/**
	 * Column index. This could be worked out on-the-fly with $.inArray, but it
	 * is faster to just hold it as a variable
	 *  @type integer
	 *  @default null
	 */
	"idx": null,

	/**
	 * A list of the columns that sorting should occur on when this column
	 * is sorted. That this property is an array allows multi-column sorting
	 * to be defined for a column (for example first name / last name columns
	 * would benefit from this). The values are integers pointing to the
	 * columns to be sorted on (typically it will be a single integer pointing
	 * at itself, but that doesn't need to be the case).
	 *  @type array
	 */
	"aDataSort": null,

	/**
	 * Define the sorting directions that are applied to the column, in sequence
	 * as the column is repeatedly sorted upon - i.e. the first value is used
	 * as the sorting direction when the column if first sorted (clicked on).
	 * Sort it again (click again) and it will move on to the next index.
	 * Repeat until loop.
	 *  @type array
	 */
	"asSorting": null,

	/**
	 * Flag to indicate if the column is searchable, and thus should be included
	 * in the filtering or not.
	 *  @type boolean
	 */
	"bSearchable": null,

	/**
	 * Flag to indicate if the column is sortable or not.
	 *  @type boolean
	 */
	"bSortable": null,

	/**
	 * Flag to indicate if the column is currently visible in the table or not
	 *  @type boolean
	 */
	"bVisible": null,

	/**
	 * Store for manual type assignment using the `column.type` option. This
	 * is held in store so we can manipulate the column's `sType` property.
	 *  @type string
	 *  @default null
	 *  @private
	 */
	"_sManualType": null,

	/**
	 * Flag to indicate if HTML5 data attributes should be used as the data
	 * source for filtering or sorting. True is either are.
	 *  @type boolean
	 *  @default false
	 *  @private
	 */
	"_bAttrSrc": false,

	/**
	 * Developer definable function that is called whenever a cell is created (Ajax source,
	 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
	 * allowing you to modify the DOM element (add background colour for example) when the
	 * element is available.
	 *  @type function
	 *  @param {element} nTd The TD node that has been created
	 *  @param {*} sData The Data for the cell
	 *  @param {array|object} oData The data for the whole row
	 *  @param {int} iRow The row index for the aoData data store
	 *  @default null
	 */
	"fnCreatedCell": null,

	/**
	 * Function to get data from a cell in a column. You should <b>never</b>
	 * access data directly through _aData internally in DataTables - always use
	 * the method attached to this property. It allows mData to function as
	 * required. This function is automatically assigned by the column
	 * initialisation method
	 *  @type function
	 *  @param {array|object} oData The data array/object for the array
	 *    (i.e. aoData[]._aData)
	 *  @param {string} sSpecific The specific data type you want to get -
	 *    'display', 'type' 'filter' 'sort'
	 *  @returns {*} The data for the cell from the given row's data
	 *  @default null
	 */
	"fnGetData": null,

	/**
	 * Function to set data for a cell in the column. You should <b>never</b>
	 * set the data directly to _aData internally in DataTables - always use
	 * this method. It allows mData to function as required. This function
	 * is automatically assigned by the column initialisation method
	 *  @type function
	 *  @param {array|object} oData The data array/object for the array
	 *    (i.e. aoData[]._aData)
	 *  @param {*} sValue Value to set
	 *  @default null
	 */
	"fnSetData": null,

	/**
	 * Property to read the value for the cells in the column from the data
	 * source array / object. If null, then the default content is used, if a
	 * function is given then the return from the function is used.
	 *  @type function|int|string|null
	 *  @default null
	 */
	"mData": null,

	/**
	 * Partner property to mData which is used (only when defined) to get
	 * the data - i.e. it is basically the same as mData, but without the
	 * 'set' option, and also the data fed to it is the result from mData.
	 * This is the rendering method to match the data method of mData.
	 *  @type function|int|string|null
	 *  @default null
	 */
	"mRender": null,

	/**
	 * Unique header TH/TD element for this column - this is what the sorting
	 * listener is attached to (if sorting is enabled.)
	 *  @type node
	 *  @default null
	 */
	"nTh": null,

	/**
	 * Unique footer TH/TD element for this column (if there is one). Not used
	 * in DataTables as such, but can be used for plug-ins to reference the
	 * footer for each column.
	 *  @type node
	 *  @default null
	 */
	"nTf": null,

	/**
	 * The class to apply to all TD elements in the table's TBODY for the column
	 *  @type string
	 *  @default null
	 */
	"sClass": null,

	/**
	 * When DataTables calculates the column widths to assign to each column,
	 * it finds the longest string in each column and then constructs a
	 * temporary table and reads the widths from that. The problem with this
	 * is that "mmm" is much wider then "iiii", but the latter is a longer
	 * string - thus the calculation can go wrong (doing it properly and putting
	 * it into an DOM object and measuring that is horribly(!) slow). Thus as
	 * a "work around" we provide this option. It will append its value to the
	 * text that is found to be the longest string for the column - i.e. padding.
	 *  @type string
	 */
	"sContentPadding": null,

	/**
	 * Allows a default value to be given for a column's data, and will be used
	 * whenever a null data source is encountered (this can be because mData
	 * is set to null, or because the data source itself is null).
	 *  @type string
	 *  @default null
	 */
	"sDefaultContent": null,

	/**
	 * Name for the column, allowing reference to the column by name as well as
	 * by index (needs a lookup to work by name).
	 *  @type string
	 */
	"sName": null,

	/**
	 * Custom sorting data type - defines which of the available plug-ins in
	 * afnSortData the custom sorting will use - if any is defined.
	 *  @type string
	 *  @default std
	 */
	"sSortDataType": 'std',

	/**
	 * Class to be applied to the header element when sorting on this column
	 *  @type string
	 *  @default null
	 */
	"sSortingClass": null,

	/**
	 * Class to be applied to the header element when sorting on this column -
	 * when jQuery UI theming is used.
	 *  @type string
	 *  @default null
	 */
	"sSortingClassJUI": null,

	/**
	 * Title of the column - what is seen in the TH element (nTh).
	 *  @type string
	 */
	"sTitle": null,

	/**
	 * Column sorting and filtering type
	 *  @type string
	 *  @default null
	 */
	"sType": null,

	/**
	 * Width of the column
	 *  @type string
	 *  @default null
	 */
	"sWidth": null,

	/**
	 * Width of the column when it was first "encountered"
	 *  @type string
	 *  @default null
	 */
	"sWidthOrig": null
};


/*
 * Developer note: The properties of the object below are given in Hungarian
 * notation, that was used as the interface for DataTables prior to v1.10, however
 * from v1.10 onwards the primary interface is camel case. In order to avoid
 * breaking backwards compatibility utterly with this change, the Hungarian
 * version is still, internally the primary interface, but is is not documented
 * - hence the @name tags in each doc comment. This allows a Javascript function
 * to create a map from Hungarian notation to camel case (going the other direction
 * would require each property to be listed, which would add around 3K to the size
 * of DataTables, while this method is about a 0.5K hit).
 *
 * Ultimately this does pave the way for Hungarian notation to be dropped
 * completely, but that is a massive amount of work and will break current
 * installs (therefore is on-hold until v2).
 */

/**
 * Initialisation options that can be given to DataTables at initialisation
 * time.
 *  @namespace
 */
DataTable.defaults = {
	/**
	 * An array of data to use for the table, passed in at initialisation which
	 * will be used in preference to any data which is already in the DOM. This is
	 * particularly useful for constructing tables purely in Javascript, for
	 * example with a custom Ajax call.
	 *  @type array
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.data
	 *
	 *  @example
	 *    // Using a 2D array data source
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "data": [
	 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
	 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
	 *        ],
	 *        "columns": [
	 *          { "title": "Engine" },
	 *          { "title": "Browser" },
	 *          { "title": "Platform" },
	 *          { "title": "Version" },
	 *          { "title": "Grade" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using an array of objects as a data source (`data`)
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "data": [
	 *          {
	 *            "engine":   "Trident",
	 *            "browser":  "Internet Explorer 4.0",
	 *            "platform": "Win 95+",
	 *            "version":  4,
	 *            "grade":    "X"
	 *          },
	 *          {
	 *            "engine":   "Trident",
	 *            "browser":  "Internet Explorer 5.0",
	 *            "platform": "Win 95+",
	 *            "version":  5,
	 *            "grade":    "C"
	 *          }
	 *        ],
	 *        "columns": [
	 *          { "title": "Engine",   "data": "engine" },
	 *          { "title": "Browser",  "data": "browser" },
	 *          { "title": "Platform", "data": "platform" },
	 *          { "title": "Version",  "data": "version" },
	 *          { "title": "Grade",    "data": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"aaData": null,


	/**
	 * If ordering is enabled, then DataTables will perform a first pass sort on
	 * initialisation. You can define which column(s) the sort is performed
	 * upon, and the sorting direction, with this variable. The `sorting` array
	 * should contain an array for each column to be sorted initially containing
	 * the column's index and a direction string ('asc' or 'desc').
	 *  @type array
	 *  @default [[0,'asc']]
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.order
	 *
	 *  @example
	 *    // Sort by 3rd column first, and then 4th column
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "order": [[2,'asc'], [3,'desc']]
	 *      } );
	 *    } );
	 *
	 *    // No initial sorting
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "order": []
	 *      } );
	 *    } );
	 */
	"aaSorting": [[0,'asc']],


	/**
	 * This parameter is basically identical to the `sorting` parameter, but
	 * cannot be overridden by user interaction with the table. What this means
	 * is that you could have a column (visible or hidden) which the sorting
	 * will always be forced on first - any sorting after that (from the user)
	 * will then be performed as required. This can be useful for grouping rows
	 * together.
	 *  @type array
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.orderFixed
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "orderFixed": [[0,'asc']]
	 *      } );
	 *    } )
	 */
	"aaSortingFixed": [],


	/**
	 * DataTables can be instructed to load data to display in the table from a
	 * Ajax source. This option defines how that Ajax call is made and where to.
	 *
	 * The `ajax` property has three different modes of operation, depending on
	 * how it is defined. These are:
	 *
	 * * `string` - Set the URL from where the data should be loaded from.
	 * * `object` - Define properties for `jQuery.ajax`.
	 * * `function` - Custom data get function
	 *
	 * `string`
	 * --------
	 *
	 * As a string, the `ajax` property simply defines the URL from which
	 * DataTables will load data.
	 *
	 * `object`
	 * --------
	 *
	 * As an object, the parameters in the object are passed to
	 * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
	 * of the Ajax request. DataTables has a number of default parameters which
	 * you can override using this option. Please refer to the jQuery
	 * documentation for a full description of the options available, although
	 * the following parameters provide additional options in DataTables or
	 * require special consideration:
	 *
	 * * `data` - As with jQuery, `data` can be provided as an object, but it
	 *   can also be used as a function to manipulate the data DataTables sends
	 *   to the server. The function takes a single parameter, an object of
	 *   parameters with the values that DataTables has readied for sending. An
	 *   object may be returned which will be merged into the DataTables
	 *   defaults, or you can add the items to the object that was passed in and
	 *   not return anything from the function. This supersedes `fnServerParams`
	 *   from DataTables 1.9-.
	 *
	 * * `dataSrc` - By default DataTables will look for the property `data` (or
	 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
	 *   from an Ajax source or for server-side processing - this parameter
	 *   allows that property to be changed. You can use Javascript dotted
	 *   object notation to get a data source for multiple levels of nesting, or
	 *   it my be used as a function. As a function it takes a single parameter,
	 *   the JSON returned from the server, which can be manipulated as
	 *   required, with the returned value being that used by DataTables as the
	 *   data source for the table. This supersedes `sAjaxDataProp` from
	 *   DataTables 1.9-.
	 *
	 * * `success` - Should not be overridden it is used internally in
	 *   DataTables. To manipulate / transform the data returned by the server
	 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
	 *
	 * `function`
	 * ----------
	 *
	 * As a function, making the Ajax call is left up to yourself allowing
	 * complete control of the Ajax request. Indeed, if desired, a method other
	 * than Ajax could be used to obtain the required data, such as Web storage
	 * or an AIR database.
	 *
	 * The function is given four parameters and no return is required. The
	 * parameters are:
	 *
	 * 1. _object_ - Data to send to the server
	 * 2. _function_ - Callback function that must be executed when the required
	 *    data has been obtained. That data should be passed into the callback
	 *    as the only parameter
	 * 3. _object_ - DataTables settings object for the table
	 *
	 * Note that this supersedes `fnServerData` from DataTables 1.9-.
	 *
	 *  @type string|object|function
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.ajax
	 *  @since 1.10.0
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax.
	 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
	 *   $('#example').dataTable( {
	 *     "ajax": "data.json"
	 *   } );
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
	 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": "tableData"
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
	 *   // from a plain array rather than an array in an object
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": ""
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Manipulate the data returned from the server - add a link to data
	 *   // (note this can, should, be done using `render` for the column - this
	 *   // is just a simple example of how the data can be manipulated).
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": function ( json ) {
	 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
	 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
	 *         }
	 *         return json;
	 *       }
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Add data to the request
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "data": function ( d ) {
	 *         return {
	 *           "extra_search": $('#extra').val()
	 *         };
	 *       }
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Send request as POST
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "type": "POST"
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Get the data from localStorage (could interface with a form for
	 *   // adding, editing and removing rows).
	 *   $('#example').dataTable( {
	 *     "ajax": function (data, callback, settings) {
	 *       callback(
	 *         JSON.parse( localStorage.getItem('dataTablesData') )
	 *       );
	 *     }
	 *   } );
	 */
	"ajax": null,


	/**
	 * This parameter allows you to readily specify the entries in the length drop
	 * down menu that DataTables shows when pagination is enabled. It can be
	 * either a 1D array of options which will be used for both the displayed
	 * option and the value, or a 2D array which will use the array in the first
	 * position as the value, and the array in the second position as the
	 * displayed options (useful for language strings such as 'All').
	 *
	 * Note that the `pageLength` property will be automatically set to the
	 * first value given in this array, unless `pageLength` is also provided.
	 *  @type array
	 *  @default [ 10, 25, 50, 100 ]
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.lengthMenu
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
	 *      } );
	 *    } );
	 */
	"aLengthMenu": [ 10, 25, 50, 100 ],


	/**
	 * The `columns` option in the initialisation parameter allows you to define
	 * details about the way individual columns behave. For a full list of
	 * column options that can be set, please see
	 * {@link DataTable.defaults.column}. Note that if you use `columns` to
	 * define your columns, you must have an entry in the array for every single
	 * column that you have in your table (these can be null if you don't which
	 * to specify any options).
	 *  @member
	 *
	 *  @name DataTable.defaults.column
	 */
	"aoColumns": null,

	/**
	 * Very similar to `columns`, `columnDefs` allows you to target a specific
	 * column, multiple columns, or all columns, using the `targets` property of
	 * each object in the array. This allows great flexibility when creating
	 * tables, as the `columnDefs` arrays can be of any length, targeting the
	 * columns you specifically want. `columnDefs` may use any of the column
	 * options available: {@link DataTable.defaults.column}, but it _must_
	 * have `targets` defined in each object in the array. Values in the `targets`
	 * array may be:
	 *   <ul>
	 *     <li>a string - class name will be matched on the TH for the column</li>
	 *     <li>0 or a positive integer - column index counting from the left</li>
	 *     <li>a negative integer - column index counting from the right</li>
	 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
	 *   </ul>
	 *  @member
	 *
	 *  @name DataTable.defaults.columnDefs
	 */
	"aoColumnDefs": null,


	/**
	 * Basically the same as `search`, this parameter defines the individual column
	 * filtering state at initialisation time. The array must be of the same size
	 * as the number of columns, and each element be an object with the parameters
	 * `search` and `escapeRegex` (the latter is optional). 'null' is also
	 * accepted and the default will be used.
	 *  @type array
	 *  @default []
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.searchCols
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "searchCols": [
	 *          null,
	 *          { "search": "My filter" },
	 *          null,
	 *          { "search": "^[0-9]", "escapeRegex": false }
	 *        ]
	 *      } );
	 *    } )
	 */
	"aoSearchCols": [],


	/**
	 * An array of CSS classes that should be applied to displayed rows. This
	 * array may be of any length, and DataTables will apply each class
	 * sequentially, looping when required.
	 *  @type array
	 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
	 *    options</i>
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.stripeClasses
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
	 *      } );
	 *    } )
	 */
	"asStripeClasses": null,


	/**
	 * Enable or disable automatic column width calculation. This can be disabled
	 * as an optimisation (it takes some time to calculate the widths) if the
	 * tables widths are passed in using `columns`.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.autoWidth
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "autoWidth": false
	 *      } );
	 *    } );
	 */
	"bAutoWidth": true,


	/**
	 * Deferred rendering can provide DataTables with a huge speed boost when you
	 * are using an Ajax or JS data source for the table. This option, when set to
	 * true, will cause DataTables to defer the creation of the table elements for
	 * each row until they are needed for a draw - saving a significant amount of
	 * time.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.deferRender
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajax": "sources/arrays.txt",
	 *        "deferRender": true
	 *      } );
	 *    } );
	 */
	"bDeferRender": false,


	/**
	 * Replace a DataTable which matches the given selector and replace it with
	 * one which has the properties of the new initialisation object passed. If no
	 * table matches the selector, then the new DataTable will be constructed as
	 * per normal.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.destroy
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "srollY": "200px",
	 *        "paginate": false
	 *      } );
	 *
	 *      // Some time later....
	 *      $('#example').dataTable( {
	 *        "filter": false,
	 *        "destroy": true
	 *      } );
	 *    } );
	 */
	"bDestroy": false,


	/**
	 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
	 * that it allows the end user to input multiple words (space separated) and
	 * will match a row containing those words, even if not in the order that was
	 * specified (this allow matching across multiple columns). Note that if you
	 * wish to use filtering in DataTables this must remain 'true' - to remove the
	 * default filtering input box and retain filtering abilities, please use
	 * {@link DataTable.defaults.dom}.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.searching
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "searching": false
	 *      } );
	 *    } );
	 */
	"bFilter": true,


	/**
	 * Enable or disable the table information display. This shows information
	 * about the data that is currently visible on the page, including information
	 * about filtered data if that action is being performed.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.info
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "info": false
	 *      } );
	 *    } );
	 */
	"bInfo": true,


	/**
	 * Allows the end user to select the size of a formatted page from a select
	 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.lengthChange
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "lengthChange": false
	 *      } );
	 *    } );
	 */
	"bLengthChange": true,


	/**
	 * Enable or disable pagination.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.paging
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "paging": false
	 *      } );
	 *    } );
	 */
	"bPaginate": true,


	/**
	 * Enable or disable the display of a 'processing' indicator when the table is
	 * being processed (e.g. a sort). This is particularly useful for tables with
	 * large amounts of data where it can take a noticeable amount of time to sort
	 * the entries.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.processing
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "processing": true
	 *      } );
	 *    } );
	 */
	"bProcessing": false,


	/**
	 * Retrieve the DataTables object for the given selector. Note that if the
	 * table has already been initialised, this parameter will cause DataTables
	 * to simply return the object that has already been set up - it will not take
	 * account of any changes you might have made to the initialisation object
	 * passed to DataTables (setting this parameter to true is an acknowledgement
	 * that you understand this). `destroy` can be used to reinitialise a table if
	 * you need.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.retrieve
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      initTable();
	 *      tableActions();
	 *    } );
	 *
	 *    function initTable ()
	 *    {
	 *      return $('#example').dataTable( {
	 *        "scrollY": "200px",
	 *        "paginate": false,
	 *        "retrieve": true
	 *      } );
	 *    }
	 *
	 *    function tableActions ()
	 *    {
	 *      var table = initTable();
	 *      // perform API operations with oTable
	 *    }
	 */
	"bRetrieve": false,


	/**
	 * When vertical (y) scrolling is enabled, DataTables will force the height of
	 * the table's viewport to the given height at all times (useful for layout).
	 * However, this can look odd when filtering data down to a small data set,
	 * and the footer is left "floating" further down. This parameter (when
	 * enabled) will cause DataTables to collapse the table's viewport down when
	 * the result set will fit within the given Y height.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.scrollCollapse
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollY": "200",
	 *        "scrollCollapse": true
	 *      } );
	 *    } );
	 */
	"bScrollCollapse": false,


	/**
	 * Configure DataTables to use server-side processing. Note that the
	 * `ajax` parameter must also be given in order to give DataTables a
	 * source to obtain the required data for each draw.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverSide
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "xhr.php"
	 *      } );
	 *    } );
	 */
	"bServerSide": false,


	/**
	 * Enable or disable sorting of columns. Sorting of individual columns can be
	 * disabled by the `sortable` option for each column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.ordering
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "ordering": false
	 *      } );
	 *    } );
	 */
	"bSort": true,


	/**
	 * Enable or display DataTables' ability to sort multiple columns at the
	 * same time (activated by shift-click by the user).
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.orderMulti
	 *
	 *  @example
	 *    // Disable multiple column sorting ability
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "orderMulti": false
	 *      } );
	 *    } );
	 */
	"bSortMulti": true,


	/**
	 * Allows control over whether DataTables should use the top (true) unique
	 * cell that is found for a single column, or the bottom (false - default).
	 * This is useful when using complex headers.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.orderCellsTop
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "orderCellsTop": true
	 *      } );
	 *    } );
	 */
	"bSortCellsTop": false,


	/**
	 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
	 * `sorting\_3` to the columns which are currently being sorted on. This is
	 * presented as a feature switch as it can increase processing time (while
	 * classes are removed and added) so for large data sets you might want to
	 * turn this off.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.orderClasses
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "orderClasses": false
	 *      } );
	 *    } );
	 */
	"bSortClasses": true,


	/**
	 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
	 * used to save table display information such as pagination information,
	 * display length, filtering and sorting. As such when the end user reloads
	 * the page the display display will match what thy had previously set up.
	 *
	 * Due to the use of `localStorage` the default state saving is not supported
	 * in IE6 or 7. If state saving is required in those browsers, use
	 * `stateSaveCallback` to provide a storage solution such as cookies.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.stateSave
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "stateSave": true
	 *      } );
	 *    } );
	 */
	"bStateSave": false,


	/**
	 * This function is called when a TR element is created (and all TD child
	 * elements have been inserted), or registered if using a DOM source, allowing
	 * manipulation of the TR element (adding classes etc).
	 *  @type function
	 *  @param {node} row "TR" element for the current row
	 *  @param {array} data Raw data array for this row
	 *  @param {int} dataIndex The index of this row in the internal aoData array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.createdRow
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "createdRow": function( row, data, dataIndex ) {
	 *          // Bold the grade for all 'A' grade browsers
	 *          if ( data[4] == "A" )
	 *          {
	 *            $('td:eq(4)', row).html( '<b>A</b>' );
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */
	"fnCreatedRow": null,


	/**
	 * This function is called on every 'draw' event, and allows you to
	 * dynamically modify any aspect you want about the created DOM.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.drawCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "drawCallback": function( settings ) {
	 *          alert( 'DataTables has redrawn the table' );
	 *        }
	 *      } );
	 *    } );
	 */
	"fnDrawCallback": null,


	/**
	 * Identical to fnHeaderCallback() but for the table footer this function
	 * allows you to modify the table footer on every 'draw' event.
	 *  @type function
	 *  @param {node} foot "TR" element for the footer
	 *  @param {array} data Full table data (as derived from the original HTML)
	 *  @param {int} start Index for the current display starting point in the
	 *    display array
	 *  @param {int} end Index for the current display ending point in the
	 *    display array
	 *  @param {array int} display Index array to translate the visual position
	 *    to the full data array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.footerCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "footerCallback": function( tfoot, data, start, end, display ) {
	 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
	 *        }
	 *      } );
	 *    } )
	 */
	"fnFooterCallback": null,


	/**
	 * When rendering large numbers in the information element for the table
	 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
	 * to have a comma separator for the 'thousands' units (e.g. 1 million is
	 * rendered as "1,000,000") to help readability for the end user. This
	 * function will override the default method DataTables uses.
	 *  @type function
	 *  @member
	 *  @param {int} toFormat number to be formatted
	 *  @returns {string} formatted string for DataTables to show the number
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.formatNumber
	 *
	 *  @example
	 *    // Format a number using a single quote for the separator (note that
	 *    // this can also be done with the language.thousands option)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "formatNumber": function ( toFormat ) {
	 *          return toFormat.toString().replace(
	 *            /\B(?=(\d{3})+(?!\d))/g, "'"
	 *          );
	 *        };
	 *      } );
	 *    } );
	 */
	"fnFormatNumber": function ( toFormat ) {
		return toFormat.toString().replace(
			/\B(?=(\d{3})+(?!\d))/g,
			this.oLanguage.sThousands
		);
	},


	/**
	 * This function is called on every 'draw' event, and allows you to
	 * dynamically modify the header row. This can be used to calculate and
	 * display useful information about the table.
	 *  @type function
	 *  @param {node} head "TR" element for the header
	 *  @param {array} data Full table data (as derived from the original HTML)
	 *  @param {int} start Index for the current display starting point in the
	 *    display array
	 *  @param {int} end Index for the current display ending point in the
	 *    display array
	 *  @param {array int} display Index array to translate the visual position
	 *    to the full data array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.headerCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "fheaderCallback": function( head, data, start, end, display ) {
	 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
	 *        }
	 *      } );
	 *    } )
	 */
	"fnHeaderCallback": null,


	/**
	 * The information element can be used to convey information about the current
	 * state of the table. Although the internationalisation options presented by
	 * DataTables are quite capable of dealing with most customisations, there may
	 * be times where you wish to customise the string further. This callback
	 * allows you to do exactly that.
	 *  @type function
	 *  @param {object} oSettings DataTables settings object
	 *  @param {int} start Starting position in data for the draw
	 *  @param {int} end End position in data for the draw
	 *  @param {int} max Total number of rows in the table (regardless of
	 *    filtering)
	 *  @param {int} total Total number of rows in the data set, after filtering
	 *  @param {string} pre The string that DataTables has formatted using it's
	 *    own rules
	 *  @returns {string} The string to be displayed in the information element.
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.infoCallback
	 *
	 *  @example
	 *    $('#example').dataTable( {
	 *      "infoCallback": function( settings, start, end, max, total, pre ) {
	 *        return start +" to "+ end;
	 *      }
	 *    } );
	 */
	"fnInfoCallback": null,


	/**
	 * Called when the table has been initialised. Normally DataTables will
	 * initialise sequentially and there will be no need for this function,
	 * however, this does not hold true when using external language information
	 * since that is obtained using an async XHR call.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.initComplete
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "initComplete": function(settings, json) {
	 *          alert( 'DataTables has finished its initialisation.' );
	 *        }
	 *      } );
	 *    } )
	 */
	"fnInitComplete": null,


	/**
	 * Called at the very start of each table draw and can be used to cancel the
	 * draw by returning false, any other return (including undefined) results in
	 * the full draw occurring).
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @returns {boolean} False will cancel the draw, anything else (including no
	 *    return) will allow it to complete.
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.preDrawCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "preDrawCallback": function( settings ) {
	 *          if ( $('#test').val() == 1 ) {
	 *            return false;
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */
	"fnPreDrawCallback": null,


	/**
	 * This function allows you to 'post process' each row after it have been
	 * generated for each table draw, but before it is rendered on screen. This
	 * function might be used for setting the row class name etc.
	 *  @type function
	 *  @param {node} row "TR" element for the current row
	 *  @param {array} data Raw data array for this row
	 *  @param {int} displayIndex The display index for the current table draw
	 *  @param {int} displayIndexFull The index of the data in the full list of
	 *    rows (after filtering)
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.rowCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
	 *          // Bold the grade for all 'A' grade browsers
	 *          if ( data[4] == "A" ) {
	 *            $('td:eq(4)', row).html( '<b>A</b>' );
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */
	"fnRowCallback": null,


	/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * This parameter allows you to override the default function which obtains
	 * the data from the server so something more suitable for your application.
	 * For example you could use POST data, or pull information from a Gears or
	 * AIR database.
	 *  @type function
	 *  @member
	 *  @param {string} source HTTP source to obtain the data from (`ajax`)
	 *  @param {array} data A key/value pair object containing the data to send
	 *    to the server
	 *  @param {function} callback to be called on completion of the data get
	 *    process that will draw the data on the page.
	 *  @param {object} settings DataTables settings object
	 *
	 *  @dtopt Callbacks
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverData
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */
	"fnServerData": null,


	/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 *  It is often useful to send extra data to the server when making an Ajax
	 * request - for example custom filtering information, and this callback
	 * function makes it trivial to send extra information to the server. The
	 * passed in parameter is the data set that has been constructed by
	 * DataTables, and you can add to this or modify it as you require.
	 *  @type function
	 *  @param {array} data Data array (array of objects which are name/value
	 *    pairs) that has been constructed by DataTables and will be sent to the
	 *    server. In the case of Ajax sourced data with server-side processing
	 *    this will be an empty array, for server-side processing there will be a
	 *    significant number of parameters!
	 *  @returns {undefined} Ensure that you modify the data array passed in,
	 *    as this is passed by reference.
	 *
	 *  @dtopt Callbacks
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverParams
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */
	"fnServerParams": null,


	/**
	 * Load the table state. With this function you can define from where, and how, the
	 * state of a table is loaded. By default DataTables will load from `localStorage`
	 * but you might wish to use a server-side database or cookies.
	 *  @type function
	 *  @member
	 *  @param {object} settings DataTables settings object
	 *  @param {object} callback Callback that can be executed when done. It
	 *    should be passed the loaded state object.
	 *  @return {object} The DataTables state object to be loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoadCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadCallback": function (settings, callback) {
	 *          $.ajax( {
	 *            "url": "/state_load",
	 *            "dataType": "json",
	 *            "success": function (json) {
	 *              callback( json );
	 *            }
	 *          } );
	 *        }
	 *      } );
	 *    } );
	 */
	"fnStateLoadCallback": function ( settings ) {
		try {
			return JSON.parse(
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname
				)
			);
		} catch (e) {
			return {};
		}
	},


	/**
	 * Callback which allows modification of the saved state prior to loading that state.
	 * This callback is called when the table is loading state from the stored data, but
	 * prior to the settings object being modified by the saved state. Note that for
	 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
	 * a plug-in.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object that is to be loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoadParams
	 *
	 *  @example
	 *    // Remove a saved filter, so filtering is never loaded
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadParams": function (settings, data) {
	 *          data.oSearch.sSearch = "";
	 *        }
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Disallow state loading by returning false
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadParams": function (settings, data) {
	 *          return false;
	 *        }
	 *      } );
	 *    } );
	 */
	"fnStateLoadParams": null,


	/**
	 * Callback that is called when the state has been loaded from the state saving method
	 * and the DataTables settings object has been modified as a result of the loaded state.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object that was loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoaded
	 *
	 *  @example
	 *    // Show an alert with the filtering value that was saved
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoaded": function (settings, data) {
	 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
	 *        }
	 *      } );
	 *    } );
	 */
	"fnStateLoaded": null,


	/**
	 * Save the table state. This function allows you to define where and how the state
	 * information for the table is stored By default DataTables will use `localStorage`
	 * but you might wish to use a server-side database or cookies.
	 *  @type function
	 *  @member
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object to be saved
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateSaveCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateSaveCallback": function (settings, data) {
	 *          // Send an Ajax request to the server with the state object
	 *          $.ajax( {
	 *            "url": "/state_save",
	 *            "data": data,
	 *            "dataType": "json",
	 *            "method": "POST"
	 *            "success": function () {}
	 *          } );
	 *        }
	 *      } );
	 *    } );
	 */
	"fnStateSaveCallback": function ( settings, data ) {
		try {
			(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
				'DataTables_'+settings.sInstance+'_'+location.pathname,
				JSON.stringify( data )
			);
		} catch (e) {}
	},


	/**
	 * Callback which allows modification of the state to be saved. Called when the table
	 * has changed state a new state save is required. This method allows modification of
	 * the state saving object prior to actually doing the save, including addition or
	 * other state properties or modification. Note that for plug-in authors, you should
	 * use the `stateSaveParams` event to save parameters for a plug-in.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object to be saved
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateSaveParams
	 *
	 *  @example
	 *    // Remove a saved filter, so filtering is never saved
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateSaveParams": function (settings, data) {
	 *          data.oSearch.sSearch = "";
	 *        }
	 *      } );
	 *    } );
	 */
	"fnStateSaveParams": null,


	/**
	 * Duration for which the saved state information is considered valid. After this period
	 * has elapsed the state will be returned to the default.
	 * Value is given in seconds.
	 *  @type int
	 *  @default 7200 <i>(2 hours)</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.stateDuration
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateDuration": 60*60*24; // 1 day
	 *      } );
	 *    } )
	 */
	"iStateDuration": 7200,


	/**
	 * When enabled DataTables will not make a request to the server for the first
	 * page draw - rather it will use the data already on the page (no sorting etc
	 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
	 * is used to indicate that deferred loading is required, but it is also used
	 * to tell DataTables how many records there are in the full table (allowing
	 * the information element and pagination to be displayed correctly). In the case
	 * where a filtering is applied to the table on initial load, this can be
	 * indicated by giving the parameter as an array, where the first element is
	 * the number of records available after filtering and the second element is the
	 * number of records without filtering (allowing the table information element
	 * to be shown correctly).
	 *  @type int | array
	 *  @default null
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.deferLoading
	 *
	 *  @example
	 *    // 57 records available in the table, no filtering applied
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "scripts/server_processing.php",
	 *        "deferLoading": 57
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "scripts/server_processing.php",
	 *        "deferLoading": [ 57, 100 ],
	 *        "search": {
	 *          "search": "my_filter"
	 *        }
	 *      } );
	 *    } );
	 */
	"iDeferLoading": null,


	/**
	 * Number of rows to display on a single page when using pagination. If
	 * feature enabled (`lengthChange`) then the end user will be able to override
	 * this to a custom setting using a pop-up menu.
	 *  @type int
	 *  @default 10
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.pageLength
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "pageLength": 50
	 *      } );
	 *    } )
	 */
	"iDisplayLength": 10,


	/**
	 * Define the starting point for data display when using DataTables with
	 * pagination. Note that this parameter is the number of records, rather than
	 * the page number, so if you have 10 records per page and want to start on
	 * the third page, it should be "20".
	 *  @type int
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.displayStart
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "displayStart": 20
	 *      } );
	 *    } )
	 */
	"iDisplayStart": 0,


	/**
	 * By default DataTables allows keyboard navigation of the table (sorting, paging,
	 * and filtering) by adding a `tabindex` attribute to the required elements. This
	 * allows you to tab through the controls and press the enter key to activate them.
	 * The tabindex is default 0, meaning that the tab follows the flow of the document.
	 * You can overrule this using this parameter if you wish. Use a value of -1 to
	 * disable built-in keyboard navigation.
	 *  @type int
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.tabIndex
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "tabIndex": 1
	 *      } );
	 *    } );
	 */
	"iTabIndex": 0,


	/**
	 * Classes that DataTables assigns to the various components and features
	 * that it adds to the HTML table. This allows classes to be configured
	 * during initialisation in addition to through the static
	 * {@link DataTable.ext.oStdClasses} object).
	 *  @namespace
	 *  @name DataTable.defaults.classes
	 */
	"oClasses": {},


	/**
	 * All strings that DataTables uses in the user interface that it creates
	 * are defined in this object, allowing you to modified them individually or
	 * completely replace them all as required.
	 *  @namespace
	 *  @name DataTable.defaults.language
	 */
	"oLanguage": {
		/**
		 * Strings that are used for WAI-ARIA labels and controls only (these are not
		 * actually visible on the page, but will be read by screenreaders, and thus
		 * must be internationalised as well).
		 *  @namespace
		 *  @name DataTable.defaults.language.aria
		 */
		"oAria": {
			/**
			 * ARIA label that is added to the table headers when the column may be
			 * sorted ascending by activing the column (click or return when focused).
			 * Note that the column header is prefixed to this string.
			 *  @type string
			 *  @default : activate to sort column ascending
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.aria.sortAscending
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "aria": {
			 *            "sortAscending": " - click/return to sort ascending"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sSortAscending": ": activate to sort column ascending",

			/**
			 * ARIA label that is added to the table headers when the column may be
			 * sorted descending by activing the column (click or return when focused).
			 * Note that the column header is prefixed to this string.
			 *  @type string
			 *  @default : activate to sort column ascending
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.aria.sortDescending
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "aria": {
			 *            "sortDescending": " - click/return to sort descending"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sSortDescending": ": activate to sort column descending"
		},

		/**
		 * Pagination string used by DataTables for the built-in pagination
		 * control types.
		 *  @namespace
		 *  @name DataTable.defaults.language.paginate
		 */
		"oPaginate": {
			/**
			 * Text to use when using the 'full_numbers' type of pagination for the
			 * button to take the user to the first page.
			 *  @type string
			 *  @default First
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.first
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "first": "First page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sFirst": "First",


			/**
			 * Text to use when using the 'full_numbers' type of pagination for the
			 * button to take the user to the last page.
			 *  @type string
			 *  @default Last
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.last
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "last": "Last page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sLast": "Last",


			/**
			 * Text to use for the 'next' pagination button (to take the user to the
			 * next page).
			 *  @type string
			 *  @default Next
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.next
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "next": "Next page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sNext": "Next",


			/**
			 * Text to use for the 'previous' pagination button (to take the user to
			 * the previous page).
			 *  @type string
			 *  @default Previous
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.previous
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "previous": "Previous page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */
			"sPrevious": "Previous"
		},

		/**
		 * This string is shown in preference to `zeroRecords` when the table is
		 * empty of data (regardless of filtering). Note that this is an optional
		 * parameter - if it is not given, the value of `zeroRecords` will be used
		 * instead (either the default or given value).
		 *  @type string
		 *  @default No data available in table
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.emptyTable
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "emptyTable": "No data available in table"
		 *        }
		 *      } );
		 *    } );
		 */
		"sEmptyTable": "No data available in table",


		/**
		 * This string gives information to the end user about the information
		 * that is current on display on the page. The following tokens can be
		 * used in the string and will be dynamically replaced as the table
		 * display updates. This tokens can be placed anywhere in the string, or
		 * removed as needed by the language requires:
		 *
		 * * `\_START\_` - Display index of the first record on the current page
		 * * `\_END\_` - Display index of the last record on the current page
		 * * `\_TOTAL\_` - Number of records in the table after filtering
		 * * `\_MAX\_` - Number of records in the table without filtering
		 * * `\_PAGE\_` - Current page number
		 * * `\_PAGES\_` - Total number of pages of data in the table
		 *
		 *  @type string
		 *  @default Showing _START_ to _END_ of _TOTAL_ entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.info
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "info": "Showing page _PAGE_ of _PAGES_"
		 *        }
		 *      } );
		 *    } );
		 */
		"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


		/**
		 * Display information string for when the table is empty. Typically the
		 * format of this string should match `info`.
		 *  @type string
		 *  @default Showing 0 to 0 of 0 entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoEmpty
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoEmpty": "No entries to show"
		 *        }
		 *      } );
		 *    } );
		 */
		"sInfoEmpty": "Showing 0 to 0 of 0 entries",


		/**
		 * When a user filters the information in a table, this string is appended
		 * to the information (`info`) to give an idea of how strong the filtering
		 * is. The variable _MAX_ is dynamically updated.
		 *  @type string
		 *  @default (filtered from _MAX_ total entries)
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoFiltered
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoFiltered": " - filtering from _MAX_ records"
		 *        }
		 *      } );
		 *    } );
		 */
		"sInfoFiltered": "(filtered from _MAX_ total entries)",


		/**
		 * If can be useful to append extra information to the info string at times,
		 * and this variable does exactly that. This information will be appended to
		 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
		 * being used) at all times.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoPostFix
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoPostFix": "All records shown are derived from real information."
		 *        }
		 *      } );
		 *    } );
		 */
		"sInfoPostFix": "",


		/**
		 * This decimal place operator is a little different from the other
		 * language options since DataTables doesn't output floating point
		 * numbers, so it won't ever use this for display of a number. Rather,
		 * what this parameter does is modify the sort methods of the table so
		 * that numbers which are in a format which has a character other than
		 * a period (`.`) as a decimal place will be sorted numerically.
		 *
		 * Note that numbers with different decimal places cannot be shown in
		 * the same table and still be sortable, the table must be consistent.
		 * However, multiple different tables on the page can use different
		 * decimal place characters.
		 *  @type string
		 *  @default 
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.decimal
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "decimal": ","
		 *          "thousands": "."
		 *        }
		 *      } );
		 *    } );
		 */
		"sDecimal": "",


		/**
		 * DataTables has a build in number formatter (`formatNumber`) which is
		 * used to format large numbers that are used in the table information.
		 * By default a comma is used, but this can be trivially changed to any
		 * character you wish with this parameter.
		 *  @type string
		 *  @default ,
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.thousands
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "thousands": "'"
		 *        }
		 *      } );
		 *    } );
		 */
		"sThousands": ",",


		/**
		 * Detail the action that will be taken when the drop down menu for the
		 * pagination length option is changed. The '_MENU_' variable is replaced
		 * with a default select list of 10, 25, 50 and 100, and can be replaced
		 * with a custom select box if required.
		 *  @type string
		 *  @default Show _MENU_ entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.lengthMenu
		 *
		 *  @example
		 *    // Language change only
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "lengthMenu": "Display _MENU_ records"
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Language and options change
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "lengthMenu": 'Display <select>'+
		 *            '<option value="10">10</option>'+
		 *            '<option value="20">20</option>'+
		 *            '<option value="30">30</option>'+
		 *            '<option value="40">40</option>'+
		 *            '<option value="50">50</option>'+
		 *            '<option value="-1">All</option>'+
		 *            '</select> records'
		 *        }
		 *      } );
		 *    } );
		 */
		"sLengthMenu": "Show _MENU_ entries",


		/**
		 * When using Ajax sourced data and during the first draw when DataTables is
		 * gathering the data, this message is shown in an empty row in the table to
		 * indicate to the end user the the data is being loaded. Note that this
		 * parameter is not used when loading data by server-side processing, just
		 * Ajax sourced data with client-side processing.
		 *  @type string
		 *  @default Loading...
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.loadingRecords
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "loadingRecords": "Please wait - loading..."
		 *        }
		 *      } );
		 *    } );
		 */
		"sLoadingRecords": "Loading...",


		/**
		 * Text which is displayed when the table is processing a user action
		 * (usually a sort command or similar).
		 *  @type string
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.processing
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "processing": "DataTables is currently busy"
		 *        }
		 *      } );
		 *    } );
		 */
		"sProcessing": "",


		/**
		 * Details the actions that will be taken when the user types into the
		 * filtering input text box. The variable "_INPUT_", if used in the string,
		 * is replaced with the HTML text box for the filtering input allowing
		 * control over where it appears in the string. If "_INPUT_" is not given
		 * then the input box is appended to the string automatically.
		 *  @type string
		 *  @default Search:
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.search
		 *
		 *  @example
		 *    // Input text box will be appended at the end automatically
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "search": "Filter records:"
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Specify where the filter should appear
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "search": "Apply filter _INPUT_ to table"
		 *        }
		 *      } );
		 *    } );
		 */
		"sSearch": "Search:",


		/**
		 * Assign a `placeholder` attribute to the search `input` element
		 *  @type string
		 *  @default 
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.searchPlaceholder
		 */
		"sSearchPlaceholder": "",


		/**
		 * All of the language information can be stored in a file on the
		 * server-side, which DataTables will look up if this parameter is passed.
		 * It must store the URL of the language file, which is in a JSON format,
		 * and the object has the same properties as the oLanguage object in the
		 * initialiser object (i.e. the above parameters). Please refer to one of
		 * the example language files to see how this works in action.
		 *  @type string
		 *  @default <i>Empty string - i.e. disabled</i>
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.url
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "url": "https://www.sprymedia.co.uk/dataTables/lang.txt"
		 *        }
		 *      } );
		 *    } );
		 */
		"sUrl": "",


		/**
		 * Text shown inside the table records when the is no information to be
		 * displayed after filtering. `emptyTable` is shown when there is simply no
		 * information in the table at all (regardless of filtering).
		 *  @type string
		 *  @default No matching records found
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.zeroRecords
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "zeroRecords": "No records to display"
		 *        }
		 *      } );
		 *    } );
		 */
		"sZeroRecords": "No matching records found"
	},


	/**
	 * This parameter allows you to have define the global filtering state at
	 * initialisation time. As an object the `search` parameter must be
	 * defined, but all other parameters are optional. When `regex` is true,
	 * the search string will be treated as a regular expression, when false
	 * (default) it will be treated as a straight string. When `smart`
	 * DataTables will use it's smart filtering methods (to word match at
	 * any point in the data), when false this will not be done.
	 *  @namespace
	 *  @extends DataTable.models.oSearch
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.search
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "search": {"search": "Initial search"}
	 *      } );
	 *    } )
	 */
	"oSearch": $.extend( {}, DataTable.models.oSearch ),


	/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * By default DataTables will look for the property `data` (or `aaData` for
	 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
	 * source or for server-side processing - this parameter allows that
	 * property to be changed. You can use Javascript dotted object notation to
	 * get a data source for multiple levels of nesting.
	 *  @type string
	 *  @default data
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.ajaxDataProp
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */
	"sAjaxDataProp": "data",


	/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * You can instruct DataTables to load data from an external
	 * source using this parameter (use aData if you want to pass data in you
	 * already have). Simply provide a url a JSON object can be obtained from.
	 *  @type string
	 *  @default null
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.ajaxSource
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */
	"sAjaxSource": null,


	/**
	 * This initialisation variable allows you to specify exactly where in the
	 * DOM you want DataTables to inject the various controls it adds to the page
	 * (for example you might want the pagination controls at the top of the
	 * table). DIV elements (with or without a custom class) can also be added to
	 * aid styling. The follow syntax is used:
	 *   <ul>
	 *     <li>The following options are allowed:
	 *       <ul>
	 *         <li>'l' - Length changing</li>
	 *         <li>'f' - Filtering input</li>
	 *         <li>'t' - The table!</li>
	 *         <li>'i' - Information</li>
	 *         <li>'p' - Pagination</li>
	 *         <li>'r' - pRocessing</li>
	 *       </ul>
	 *     </li>
	 *     <li>The following constants are allowed:
	 *       <ul>
	 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
	 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
	 *       </ul>
	 *     </li>
	 *     <li>The following syntax is expected:
	 *       <ul>
	 *         <li>'&lt;' and '&gt;' - div elements</li>
	 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
	 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
	 *       </ul>
	 *     </li>
	 *     <li>Examples:
	 *       <ul>
	 *         <li>'&lt;"wrapper"flipt&gt;'</li>
	 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
	 *       </ul>
	 *     </li>
	 *   </ul>
	 *  @type string
	 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
	 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.dom
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
	 *      } );
	 *    } );
	 */
	"sDom": "lfrtip",


	/**
	 * Search delay option. This will throttle full table searches that use the
	 * DataTables provided search input element (it does not effect calls to
	 * `dt-api search()`, providing a delay before the search is made.
	 *  @type integer
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.searchDelay
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "searchDelay": 200
	 *      } );
	 *    } )
	 */
	"searchDelay": null,


	/**
	 * DataTables features six different built-in options for the buttons to
	 * display for pagination control:
	 *
	 * * `numbers` - Page number buttons only
	 * * `simple` - 'Previous' and 'Next' buttons only
	 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
	 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
	 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
	 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
	 *  
	 * Further methods can be added using {@link DataTable.ext.oPagination}.
	 *  @type string
	 *  @default simple_numbers
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.pagingType
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "pagingType": "full_numbers"
	 *      } );
	 *    } )
	 */
	"sPaginationType": "simple_numbers",


	/**
	 * Enable horizontal scrolling. When a table is too wide to fit into a
	 * certain layout, or you have a large number of columns in the table, you
	 * can enable x-scrolling to show the table in a viewport, which can be
	 * scrolled. This property can be `true` which will allow the table to
	 * scroll horizontally when needed, or any CSS unit, or a number (in which
	 * case it will be treated as a pixel measurement). Setting as simply `true`
	 * is recommended.
	 *  @type boolean|string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.scrollX
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollX": true,
	 *        "scrollCollapse": true
	 *      } );
	 *    } );
	 */
	"sScrollX": "",


	/**
	 * This property can be used to force a DataTable to use more width than it
	 * might otherwise do when x-scrolling is enabled. For example if you have a
	 * table which requires to be well spaced, this parameter is useful for
	 * "over-sizing" the table, and thus forcing scrolling. This property can by
	 * any CSS unit, or a number (in which case it will be treated as a pixel
	 * measurement).
	 *  @type string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.scrollXInner
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollX": "100%",
	 *        "scrollXInner": "110%"
	 *      } );
	 *    } );
	 */
	"sScrollXInner": "",


	/**
	 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
	 * to the given height, and enable scrolling for any data which overflows the
	 * current viewport. This can be used as an alternative to paging to display
	 * a lot of data in a small area (although paging and scrolling can both be
	 * enabled at the same time). This property can be any CSS unit, or a number
	 * (in which case it will be treated as a pixel measurement).
	 *  @type string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.scrollY
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollY": "200px",
	 *        "paginate": false
	 *      } );
	 *    } );
	 */
	"sScrollY": "",


	/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * Set the HTTP method that is used to make the Ajax call for server-side
	 * processing or Ajax sourced data.
	 *  @type string
	 *  @default GET
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverMethod
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */
	"sServerMethod": "GET",


	/**
	 * DataTables makes use of renderers when displaying HTML elements for
	 * a table. These renderers can be added or modified by plug-ins to
	 * generate suitable mark-up for a site. For example the Bootstrap
	 * integration plug-in for DataTables uses a paging button renderer to
	 * display pagination buttons in the mark-up required by Bootstrap.
	 *
	 * For further information about the renderers available see
	 * DataTable.ext.renderer
	 *  @type string|object
	 *  @default null
	 *
	 *  @name DataTable.defaults.renderer
	 *
	 */
	"renderer": null,


	/**
	 * Set the data property name that DataTables should use to get a row's id
	 * to set as the `id` property in the node.
	 *  @type string
	 *  @default DT_RowId
	 *
	 *  @name DataTable.defaults.rowId
	 */
	"rowId": "DT_RowId"
};

_fnHungarianMap( DataTable.defaults );



/*
 * Developer note - See note in model.defaults.js about the use of Hungarian
 * notation and camel case.
 */

/**
 * Column options that can be given to DataTables at initialisation time.
 *  @namespace
 */
DataTable.defaults.column = {
	/**
	 * Define which column(s) an order will occur on for this column. This
	 * allows a column's ordering to take multiple columns into account when
	 * doing a sort or use the data from a different column. For example first
	 * name / last name columns make sense to do a multi-column sort over the
	 * two columns.
	 *  @type array|int
	 *  @default null <i>Takes the value of the column index automatically</i>
	 *
	 *  @name DataTable.defaults.column.orderData
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
	 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
	 *          { "orderData": 2, "targets": [ 2 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "orderData": [ 0, 1 ] },
	 *          { "orderData": [ 1, 0 ] },
	 *          { "orderData": 2 },
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"aDataSort": null,
	"iDataSort": -1,


	/**
	 * You can control the default ordering direction, and even alter the
	 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
	 * using this parameter.
	 *  @type array
	 *  @default [ 'asc', 'desc' ]
	 *
	 *  @name DataTable.defaults.column.orderSequence
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
	 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
	 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          { "orderSequence": [ "asc" ] },
	 *          { "orderSequence": [ "desc", "asc", "asc" ] },
	 *          { "orderSequence": [ "desc" ] },
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"asSorting": [ 'asc', 'desc' ],


	/**
	 * Enable or disable filtering on the data in this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.searchable
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "searchable": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "searchable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bSearchable": true,


	/**
	 * Enable or disable ordering on this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.orderable
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderable": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "orderable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bSortable": true,


	/**
	 * Enable or disable the display of this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.visible
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "visible": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "visible": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bVisible": true,


	/**
	 * Developer definable function that is called whenever a cell is created (Ajax source,
	 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
	 * allowing you to modify the DOM element (add background colour for example) when the
	 * element is available.
	 *  @type function
	 *  @param {element} td The TD node that has been created
	 *  @param {*} cellData The Data for the cell
	 *  @param {array|object} rowData The data for the whole row
	 *  @param {int} row The row index for the aoData data store
	 *  @param {int} col The column index for aoColumns
	 *
	 *  @name DataTable.defaults.column.createdCell
	 *  @dtopt Columns
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [3],
	 *          "createdCell": function (td, cellData, rowData, row, col) {
	 *            if ( cellData == "1.7" ) {
	 *              $(td).css('color', 'blue')
	 *            }
	 *          }
	 *        } ]
	 *      });
	 *    } );
	 */
	"fnCreatedCell": null,


	/**
	 * This parameter has been replaced by `data` in DataTables to ensure naming
	 * consistency. `dataProp` can still be used, as there is backwards
	 * compatibility in DataTables for this option, but it is strongly
	 * recommended that you use `data` in preference to `dataProp`.
	 *  @name DataTable.defaults.column.dataProp
	 */


	/**
	 * This property can be used to read data from any data source property,
	 * including deeply nested objects / properties. `data` can be given in a
	 * number of different ways which effect its behaviour:
	 *
	 * * `integer` - treated as an array index for the data source. This is the
	 *   default that DataTables uses (incrementally increased for each column).
	 * * `string` - read an object property from the data source. There are
	 *   three 'special' options that can be used in the string to alter how
	 *   DataTables reads the data from the source object:
	 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
	 *      Javascript to read from nested objects, so to can the options
	 *      specified in `data`. For example: `browser.version` or
	 *      `browser.name`. If your object parameter name contains a period, use
	 *      `\\` to escape it - i.e. `first\\.name`.
	 *    * `[]` - Array notation. DataTables can automatically combine data
	 *      from and array source, joining the data with the characters provided
	 *      between the two brackets. For example: `name[, ]` would provide a
	 *      comma-space separated list from the source array. If no characters
	 *      are provided between the brackets, the original array source is
	 *      returned.
	 *    * `()` - Function notation. Adding `()` to the end of a parameter will
	 *      execute a function of the name given. For example: `browser()` for a
	 *      simple function on the data source, `browser.version()` for a
	 *      function in a nested property or even `browser().version` to get an
	 *      object property if the function called returns an object. Note that
	 *      function notation is recommended for use in `render` rather than
	 *      `data` as it is much simpler to use as a renderer.
	 * * `null` - use the original data source for the row rather than plucking
	 *   data directly from it. This action has effects on two other
	 *   initialisation options:
	 *    * `defaultContent` - When null is given as the `data` option and
	 *      `defaultContent` is specified for the column, the value defined by
	 *      `defaultContent` will be used for the cell.
	 *    * `render` - When null is used for the `data` option and the `render`
	 *      option is specified for the column, the whole data source for the
	 *      row is used for the renderer.
	 * * `function` - the function given will be executed whenever DataTables
	 *   needs to set or get the data for a cell in the column. The function
	 *   takes three parameters:
	 *    * Parameters:
	 *      * `{array|object}` The data source for the row
	 *      * `{string}` The type call data requested - this will be 'set' when
	 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
	 *        when gathering data. Note that when `undefined` is given for the
	 *        type DataTables expects to get the raw data for the object back<
	 *      * `{*}` Data to set when the second parameter is 'set'.
	 *    * Return:
	 *      * The return value from the function is not required when 'set' is
	 *        the type of call, but otherwise the return is what will be used
	 *        for the data requested.
	 *
	 * Note that `data` is a getter and setter option. If you just require
	 * formatting of data for output, you will likely want to use `render` which
	 * is simply a getter and thus simpler to use.
	 *
	 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
	 * name change reflects the flexibility of this property and is consistent
	 * with the naming of mRender. If 'mDataProp' is given, then it will still
	 * be used by DataTables, as it automatically maps the old name to the new
	 * if required.
	 *
	 *  @type string|int|function|null
	 *  @default null <i>Use automatically calculated column index</i>
	 *
	 *  @name DataTable.defaults.column.data
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Read table data from objects
	 *    // JSON structure for each row:
	 *    //   {
	 *    //      "engine": {value},
	 *    //      "browser": {value},
	 *    //      "platform": {value},
	 *    //      "version": {value},
	 *    //      "grade": {value}
	 *    //   }
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/objects.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          { "data": "platform" },
	 *          { "data": "version" },
	 *          { "data": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Read information from deeply nested objects
	 *    // JSON structure for each row:
	 *    //   {
	 *    //      "engine": {value},
	 *    //      "browser": {value},
	 *    //      "platform": {
	 *    //         "inner": {value}
	 *    //      },
	 *    //      "details": [
	 *    //         {value}, {value}
	 *    //      ]
	 *    //   }
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/deep.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          { "data": "platform.inner" },
	 *          { "data": "details.0" },
	 *          { "data": "details.1" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `data` as a function to provide different information for
	 *    // sorting, filtering and display. In this case, currency (price)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": function ( source, type, val ) {
	 *            if (type === 'set') {
	 *              source.price = val;
	 *              // Store the computed display and filter values for efficiency
	 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
	 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
	 *              return;
	 *            }
	 *            else if (type === 'display') {
	 *              return source.price_display;
	 *            }
	 *            else if (type === 'filter') {
	 *              return source.price_filter;
	 *            }
	 *            // 'sort', 'type' and undefined all just use the integer
	 *            return source.price;
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using default content
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null,
	 *          "defaultContent": "Click to edit"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using array notation - outputting a list from an array
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": "name[, ]"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 */
	"mData": null,


	/**
	 * This property is the rendering partner to `data` and it is suggested that
	 * when you want to manipulate data for display (including filtering,
	 * sorting etc) without altering the underlying data for the table, use this
	 * property. `render` can be considered to be the the read only companion to
	 * `data` which is read / write (then as such more complex). Like `data`
	 * this option can be given in a number of different ways to effect its
	 * behaviour:
	 *
	 * * `integer` - treated as an array index for the data source. This is the
	 *   default that DataTables uses (incrementally increased for each column).
	 * * `string` - read an object property from the data source. There are
	 *   three 'special' options that can be used in the string to alter how
	 *   DataTables reads the data from the source object:
	 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
	 *      Javascript to read from nested objects, so to can the options
	 *      specified in `data`. For example: `browser.version` or
	 *      `browser.name`. If your object parameter name contains a period, use
	 *      `\\` to escape it - i.e. `first\\.name`.
	 *    * `[]` - Array notation. DataTables can automatically combine data
	 *      from and array source, joining the data with the characters provided
	 *      between the two brackets. For example: `name[, ]` would provide a
	 *      comma-space separated list from the source array. If no characters
	 *      are provided between the brackets, the original array source is
	 *      returned.
	 *    * `()` - Function notation. Adding `()` to the end of a parameter will
	 *      execute a function of the name given. For example: `browser()` for a
	 *      simple function on the data source, `browser.version()` for a
	 *      function in a nested property or even `browser().version` to get an
	 *      object property if the function called returns an object.
	 * * `object` - use different data for the different data types requested by
	 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
	 *   of the object is the data type the property refers to and the value can
	 *   defined using an integer, string or function using the same rules as
	 *   `render` normally does. Note that an `_` option _must_ be specified.
	 *   This is the default value to use if you haven't specified a value for
	 *   the data type requested by DataTables.
	 * * `function` - the function given will be executed whenever DataTables
	 *   needs to set or get the data for a cell in the column. The function
	 *   takes three parameters:
	 *    * Parameters:
	 *      * {array|object} The data source for the row (based on `data`)
	 *      * {string} The type call data requested - this will be 'filter',
	 *        'display', 'type' or 'sort'.
	 *      * {array|object} The full data source for the row (not based on
	 *        `data`)
	 *    * Return:
	 *      * The return value from the function is what will be used for the
	 *        data requested.
	 *
	 *  @type string|int|function|object|null
	 *  @default null Use the data source value.
	 *
	 *  @name DataTable.defaults.column.render
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Create a comma separated list from an array of objects
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/deep.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          {
	 *            "data": "platform",
	 *            "render": "[, ].name"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Execute a function to obtain data
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null, // Use the full data source object for the renderer's source
	 *          "render": "browserName()"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // As an object, extracting different data for the different types
	 *    // This would be used with a data source such as:
	 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
	 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
	 *    // (which has both forms) is used for filtering for if a user inputs either format, while
	 *    // the formatted phone number is the one that is shown in the table.
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null, // Use the full data source object for the renderer's source
	 *          "render": {
	 *            "_": "phone",
	 *            "filter": "phone_filter",
	 *            "display": "phone_display"
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Use as a function to create a link from the data source
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": "download_link",
	 *          "render": function ( data, type, full ) {
	 *            return '<a href="'+data+'">Download</a>';
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 */
	"mRender": null,


	/**
	 * Change the cell type created for the column - either TD cells or TH cells. This
	 * can be useful as TH cells have semantic meaning in the table body, allowing them
	 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
	 *  @type string
	 *  @default td
	 *
	 *  @name DataTable.defaults.column.cellType
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Make the first column use TH cells
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "cellType": "th"
	 *        } ]
	 *      } );
	 *    } );
	 */
	"sCellType": "td",


	/**
	 * Class to give to each cell in this column.
	 *  @type string
	 *  @default <i>Empty string</i>
	 *
	 *  @name DataTable.defaults.column.class
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "class": "my_class", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "class": "my_class" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sClass": "",

	/**
	 * When DataTables calculates the column widths to assign to each column,
	 * it finds the longest string in each column and then constructs a
	 * temporary table and reads the widths from that. The problem with this
	 * is that "mmm" is much wider then "iiii", but the latter is a longer
	 * string - thus the calculation can go wrong (doing it properly and putting
	 * it into an DOM object and measuring that is horribly(!) slow). Thus as
	 * a "work around" we provide this option. It will append its value to the
	 * text that is found to be the longest string for the column - i.e. padding.
	 * Generally you shouldn't need this!
	 *  @type string
	 *  @default <i>Empty string<i>
	 *
	 *  @name DataTable.defaults.column.contentPadding
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          null,
	 *          {
	 *            "contentPadding": "mmm"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sContentPadding": "",


	/**
	 * Allows a default value to be given for a column's data, and will be used
	 * whenever a null data source is encountered (this can be because `data`
	 * is set to null, or because the data source itself is null).
	 *  @type string
	 *  @default null
	 *
	 *  @name DataTable.defaults.column.defaultContent
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          {
	 *            "data": null,
	 *            "defaultContent": "Edit",
	 *            "targets": [ -1 ]
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          null,
	 *          {
	 *            "data": null,
	 *            "defaultContent": "Edit"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sDefaultContent": null,


	/**
	 * This parameter is only used in DataTables' server-side processing. It can
	 * be exceptionally useful to know what columns are being displayed on the
	 * client side, and to map these to database fields. When defined, the names
	 * also allow DataTables to reorder information from the server if it comes
	 * back in an unexpected order (i.e. if you switch your columns around on the
	 * client-side, your server-side code does not also need updating).
	 *  @type string
	 *  @default <i>Empty string</i>
	 *
	 *  @name DataTable.defaults.column.name
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "name": "engine", "targets": [ 0 ] },
	 *          { "name": "browser", "targets": [ 1 ] },
	 *          { "name": "platform", "targets": [ 2 ] },
	 *          { "name": "version", "targets": [ 3 ] },
	 *          { "name": "grade", "targets": [ 4 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "name": "engine" },
	 *          { "name": "browser" },
	 *          { "name": "platform" },
	 *          { "name": "version" },
	 *          { "name": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sName": "",


	/**
	 * Defines a data source type for the ordering which can be used to read
	 * real-time information from the table (updating the internally cached
	 * version) prior to ordering. This allows ordering to occur on user
	 * editable elements such as form inputs.
	 *  @type string
	 *  @default std
	 *
	 *  @name DataTable.defaults.column.orderDataType
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
	 *          { "type": "numeric", "targets": [ 3 ] },
	 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
	 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          { "orderDataType": "dom-text" },
	 *          { "orderDataType": "dom-text", "type": "numeric" },
	 *          { "orderDataType": "dom-select" },
	 *          { "orderDataType": "dom-checkbox" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sSortDataType": "std",


	/**
	 * The title of this column.
	 *  @type string
	 *  @default null <i>Derived from the 'TH' value for this column in the
	 *    original HTML table.</i>
	 *
	 *  @name DataTable.defaults.column.title
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "title": "My column title", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "title": "My column title" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sTitle": null,


	/**
	 * The type allows you to specify how the data for this column will be
	 * ordered. Four types (string, numeric, date and html (which will strip
	 * HTML tags before ordering)) are currently available. Note that only date
	 * formats understood by Javascript's Date() object will be accepted as type
	 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
	 * 'numeric', 'date' or 'html' (by default). Further types can be adding
	 * through plug-ins.
	 *  @type string
	 *  @default null <i>Auto-detected from raw data</i>
	 *
	 *  @name DataTable.defaults.column.type
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "type": "html", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "type": "html" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sType": null,


	/**
	 * Defining the width of the column, this parameter may take any CSS value
	 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
	 * been given a specific width through this interface ensuring that the table
	 * remains readable.
	 *  @type string
	 *  @default null <i>Automatic</i>
	 *
	 *  @name DataTable.defaults.column.width
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "width": "20%", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "width": "20%" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sWidth": null
};

_fnHungarianMap( DataTable.defaults.column );



/**
 * DataTables settings object - this holds all the information needed for a
 * given table, including configuration, data and current application of the
 * table options. DataTables does not have a single instance for each DataTable
 * with the settings attached to that instance, but rather instances of the
 * DataTable "class" are created on-the-fly as needed (typically by a
 * $().dataTable() call) and the settings object is then applied to that
 * instance.
 *
 * Note that this object is related to {@link DataTable.defaults} but this
 * one is the internal data store for DataTables's cache of columns. It should
 * NOT be manipulated outside of DataTables. Any configuration should be done
 * through the initialisation options.
 *  @namespace
 *  @todo Really should attach the settings object to individual instances so we
 *    don't need to create new instances on each $().dataTable() call (if the
 *    table already exists). It would also save passing oSettings around and
 *    into every single function. However, this is a very significant
 *    architecture change for DataTables and will almost certainly break
 *    backwards compatibility with older installations. This is something that
 *    will be done in 2.0.
 */
DataTable.models.oSettings = {
	/**
	 * Primary features of DataTables and their enablement state.
	 *  @namespace
	 */
	"oFeatures": {

		/**
		 * Flag to say if DataTables should automatically try to calculate the
		 * optimum table and columns widths (true) or not (false).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bAutoWidth": null,

		/**
		 * Delay the creation of TR and TD elements until they are actually
		 * needed by a driven page draw. This can give a significant speed
		 * increase for Ajax source and Javascript source data, but makes no
		 * difference at all for DOM and server-side processing tables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bDeferRender": null,

		/**
		 * Enable filtering on the table or not. Note that if this is disabled
		 * then there is no filtering at all on the table, including fnFilter.
		 * To just remove the filtering input use sDom and remove the 'f' option.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bFilter": null,

		/**
		 * Table information element (the 'Showing x of y records' div) enable
		 * flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bInfo": null,

		/**
		 * Present a user control allowing the end user to change the page size
		 * when pagination is enabled.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bLengthChange": null,

		/**
		 * Pagination enabled or not. Note that if this is disabled then length
		 * changing must also be disabled.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bPaginate": null,

		/**
		 * Processing indicator enable flag whenever DataTables is enacting a
		 * user request - typically an Ajax request for server-side processing.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bProcessing": null,

		/**
		 * Server-side processing enabled flag - when enabled DataTables will
		 * get all data from the server for every draw - there is no filtering,
		 * sorting or paging done on the client-side.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bServerSide": null,

		/**
		 * Sorting enablement flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSort": null,

		/**
		 * Multi-column sorting
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortMulti": null,

		/**
		 * Apply a class to the columns which are being sorted to provide a
		 * visual highlight or not. This can slow things down when enabled since
		 * there is a lot of DOM interaction.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortClasses": null,

		/**
		 * State saving enablement flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bStateSave": null
	},


	/**
	 * Scrolling settings for a table.
	 *  @namespace
	 */
	"oScroll": {
		/**
		 * When the table is shorter in height than sScrollY, collapse the
		 * table container down to the height of the table (when true).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bCollapse": null,

		/**
		 * Width of the scrollbar for the web-browser's platform. Calculated
		 * during table initialisation.
		 *  @type int
		 *  @default 0
		 */
		"iBarWidth": 0,

		/**
		 * Viewport width for horizontal scrolling. Horizontal scrolling is
		 * disabled if an empty string.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sX": null,

		/**
		 * Width to expand the table to when using x-scrolling. Typically you
		 * should not need to use this.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @deprecated
		 */
		"sXInner": null,

		/**
		 * Viewport height for vertical scrolling. Vertical scrolling is disabled
		 * if an empty string.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sY": null
	},

	/**
	 * Language information for the table.
	 *  @namespace
	 *  @extends DataTable.defaults.oLanguage
	 */
	"oLanguage": {
		/**
		 * Information callback function. See
		 * {@link DataTable.defaults.fnInfoCallback}
		 *  @type function
		 *  @default null
		 */
		"fnInfoCallback": null
	},

	/**
	 * Browser support parameters
	 *  @namespace
	 */
	"oBrowser": {
		/**
		 * Indicate if the browser incorrectly calculates width:100% inside a
		 * scrolling element (IE6/7)
		 *  @type boolean
		 *  @default false
		 */
		"bScrollOversize": false,

		/**
		 * Determine if the vertical scrollbar is on the right or left of the
		 * scrolling container - needed for rtl language layout, although not
		 * all browsers move the scrollbar (Safari).
		 *  @type boolean
		 *  @default false
		 */
		"bScrollbarLeft": false,

		/**
		 * Flag for if `getBoundingClientRect` is fully supported or not
		 *  @type boolean
		 *  @default false
		 */
		"bBounding": false,

		/**
		 * Browser scrollbar width
		 *  @type integer
		 *  @default 0
		 */
		"barWidth": 0
	},


	"ajax": null,


	/**
	 * Array referencing the nodes which are used for the features. The
	 * parameters of this object match what is allowed by sDom - i.e.
	 *   <ul>
	 *     <li>'l' - Length changing</li>
	 *     <li>'f' - Filtering input</li>
	 *     <li>'t' - The table!</li>
	 *     <li>'i' - Information</li>
	 *     <li>'p' - Pagination</li>
	 *     <li>'r' - pRocessing</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */
	"aanFeatures": [],

	/**
	 * Store data information - see {@link DataTable.models.oRow} for detailed
	 * information.
	 *  @type array
	 *  @default []
	 */
	"aoData": [],

	/**
	 * Array of indexes which are in the current display (after filtering etc)
	 *  @type array
	 *  @default []
	 */
	"aiDisplay": [],

	/**
	 * Array of indexes for display - no filtering
	 *  @type array
	 *  @default []
	 */
	"aiDisplayMaster": [],

	/**
	 * Map of row ids to data indexes
	 *  @type object
	 *  @default {}
	 */
	"aIds": {},

	/**
	 * Store information about each column that is in use
	 *  @type array
	 *  @default []
	 */
	"aoColumns": [],

	/**
	 * Store information about the table's header
	 *  @type array
	 *  @default []
	 */
	"aoHeader": [],

	/**
	 * Store information about the table's footer
	 *  @type array
	 *  @default []
	 */
	"aoFooter": [],

	/**
	 * Store the applied global search information in case we want to force a
	 * research or compare the old search to a new one.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @namespace
	 *  @extends DataTable.models.oSearch
	 */
	"oPreviousSearch": {},

	/**
	 * Store the applied search for each column - see
	 * {@link DataTable.models.oSearch} for the format that is used for the
	 * filtering information for each column.
	 *  @type array
	 *  @default []
	 */
	"aoPreSearchCols": [],

	/**
	 * Sorting that is applied to the table. Note that the inner arrays are
	 * used in the following manner:
	 * <ul>
	 *   <li>Index 0 - column number</li>
	 *   <li>Index 1 - current sorting direction</li>
	 * </ul>
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @todo These inner arrays should really be objects
	 */
	"aaSorting": null,

	/**
	 * Sorting that is always applied to the table (i.e. prefixed in front of
	 * aaSorting).
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */
	"aaSortingFixed": [],

	/**
	 * Classes to use for the striping of a table.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */
	"asStripeClasses": null,

	/**
	 * If restoring a table - we should restore its striping classes as well
	 *  @type array
	 *  @default []
	 */
	"asDestroyStripes": [],

	/**
	 * If restoring a table - we should restore its width
	 *  @type int
	 *  @default 0
	 */
	"sDestroyWidth": 0,

	/**
	 * Callback functions array for every time a row is inserted (i.e. on a draw).
	 *  @type array
	 *  @default []
	 */
	"aoRowCallback": [],

	/**
	 * Callback functions for the header on each draw.
	 *  @type array
	 *  @default []
	 */
	"aoHeaderCallback": [],

	/**
	 * Callback function for the footer on each draw.
	 *  @type array
	 *  @default []
	 */
	"aoFooterCallback": [],

	/**
	 * Array of callback functions for draw callback functions
	 *  @type array
	 *  @default []
	 */
	"aoDrawCallback": [],

	/**
	 * Array of callback functions for row created function
	 *  @type array
	 *  @default []
	 */
	"aoRowCreatedCallback": [],

	/**
	 * Callback functions for just before the table is redrawn. A return of
	 * false will be used to cancel the draw.
	 *  @type array
	 *  @default []
	 */
	"aoPreDrawCallback": [],

	/**
	 * Callback functions for when the table has been initialised.
	 *  @type array
	 *  @default []
	 */
	"aoInitComplete": [],


	/**
	 * Callbacks for modifying the settings to be stored for state saving, prior to
	 * saving state.
	 *  @type array
	 *  @default []
	 */
	"aoStateSaveParams": [],

	/**
	 * Callbacks for modifying the settings that have been stored for state saving
	 * prior to using the stored values to restore the state.
	 *  @type array
	 *  @default []
	 */
	"aoStateLoadParams": [],

	/**
	 * Callbacks for operating on the settings object once the saved state has been
	 * loaded
	 *  @type array
	 *  @default []
	 */
	"aoStateLoaded": [],

	/**
	 * Cache the table ID for quick access
	 *  @type string
	 *  @default <i>Empty string</i>
	 */
	"sTableId": "",

	/**
	 * The TABLE node for the main table
	 *  @type node
	 *  @default null
	 */
	"nTable": null,

	/**
	 * Permanent ref to the thead element
	 *  @type node
	 *  @default null
	 */
	"nTHead": null,

	/**
	 * Permanent ref to the tfoot element - if it exists
	 *  @type node
	 *  @default null
	 */
	"nTFoot": null,

	/**
	 * Permanent ref to the tbody element
	 *  @type node
	 *  @default null
	 */
	"nTBody": null,

	/**
	 * Cache the wrapper node (contains all DataTables controlled elements)
	 *  @type node
	 *  @default null
	 */
	"nTableWrapper": null,

	/**
	 * Indicate if when using server-side processing the loading of data
	 * should be deferred until the second draw.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type boolean
	 *  @default false
	 */
	"bDeferLoading": false,

	/**
	 * Indicate if all required information has been read in
	 *  @type boolean
	 *  @default false
	 */
	"bInitialised": false,

	/**
	 * Information about open rows. Each object in the array has the parameters
	 * 'nTr' and 'nParent'
	 *  @type array
	 *  @default []
	 */
	"aoOpenRows": [],

	/**
	 * Dictate the positioning of DataTables' control elements - see
	 * {@link DataTable.model.oInit.sDom}.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default null
	 */
	"sDom": null,

	/**
	 * Search delay (in mS)
	 *  @type integer
	 *  @default null
	 */
	"searchDelay": null,

	/**
	 * Which type of pagination should be used.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default two_button
	 */
	"sPaginationType": "two_button",

	/**
	 * The state duration (for `stateSave`) in seconds.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type int
	 *  @default 0
	 */
	"iStateDuration": 0,

	/**
	 * Array of callback functions for state saving. Each array element is an
	 * object with the following parameters:
	 *   <ul>
	 *     <li>function:fn - function to call. Takes two parameters, oSettings
	 *       and the JSON string to save that has been thus far created. Returns
	 *       a JSON string to be inserted into a json object
	 *       (i.e. '"param": [ 0, 1, 2]')</li>
	 *     <li>string:sName - name of callback</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */
	"aoStateSave": [],

	/**
	 * Array of callback functions for state loading. Each array element is an
	 * object with the following parameters:
	 *   <ul>
	 *     <li>function:fn - function to call. Takes two parameters, oSettings
	 *       and the object stored. May return false to cancel state loading</li>
	 *     <li>string:sName - name of callback</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */
	"aoStateLoad": [],

	/**
	 * State that was saved. Useful for back reference
	 *  @type object
	 *  @default null
	 */
	"oSavedState": null,

	/**
	 * State that was loaded. Useful for back reference
	 *  @type object
	 *  @default null
	 */
	"oLoadedState": null,

	/**
	 * Source url for AJAX data for the table.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default null
	 */
	"sAjaxSource": null,

	/**
	 * Property from a given object from which to read the table data from. This
	 * can be an empty string (when not server-side processing), in which case
	 * it is  assumed an an array is given directly.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 */
	"sAjaxDataProp": null,

	/**
	 * The last jQuery XHR object that was used for server-side data gathering.
	 * This can be used for working with the XHR information in one of the
	 * callbacks
	 *  @type object
	 *  @default null
	 */
	"jqXHR": null,

	/**
	 * JSON returned from the server in the last Ajax request
	 *  @type object
	 *  @default undefined
	 */
	"json": undefined,

	/**
	 * Data submitted as part of the last Ajax request
	 *  @type object
	 *  @default undefined
	 */
	"oAjaxData": undefined,

	/**
	 * Function to get the server-side data.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type function
	 */
	"fnServerData": null,

	/**
	 * Functions which are called prior to sending an Ajax request so extra
	 * parameters can easily be sent to the server
	 *  @type array
	 *  @default []
	 */
	"aoServerParams": [],

	/**
	 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
	 * required).
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 */
	"sServerMethod": null,

	/**
	 * Format numbers for display.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type function
	 */
	"fnFormatNumber": null,

	/**
	 * List of options that can be used for the user selectable length menu.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */
	"aLengthMenu": null,

	/**
	 * Counter for the draws that the table does. Also used as a tracker for
	 * server-side processing
	 *  @type int
	 *  @default 0
	 */
	"iDraw": 0,

	/**
	 * Indicate if a redraw is being done - useful for Ajax
	 *  @type boolean
	 *  @default false
	 */
	"bDrawing": false,

	/**
	 * Draw index (iDraw) of the last error when parsing the returned data
	 *  @type int
	 *  @default -1
	 */
	"iDrawError": -1,

	/**
	 * Paging display length
	 *  @type int
	 *  @default 10
	 */
	"_iDisplayLength": 10,

	/**
	 * Paging start point - aiDisplay index
	 *  @type int
	 *  @default 0
	 */
	"_iDisplayStart": 0,

	/**
	 * Server-side processing - number of records in the result set
	 * (i.e. before filtering), Use fnRecordsTotal rather than
	 * this property to get the value of the number of records, regardless of
	 * the server-side processing setting.
	 *  @type int
	 *  @default 0
	 *  @private
	 */
	"_iRecordsTotal": 0,

	/**
	 * Server-side processing - number of records in the current display set
	 * (i.e. after filtering). Use fnRecordsDisplay rather than
	 * this property to get the value of the number of records, regardless of
	 * the server-side processing setting.
	 *  @type boolean
	 *  @default 0
	 *  @private
	 */
	"_iRecordsDisplay": 0,

	/**
	 * The classes to use for the table
	 *  @type object
	 *  @default {}
	 */
	"oClasses": {},

	/**
	 * Flag attached to the settings object so you can check in the draw
	 * callback if filtering has been done in the draw. Deprecated in favour of
	 * events.
	 *  @type boolean
	 *  @default false
	 *  @deprecated
	 */
	"bFiltered": false,

	/**
	 * Flag attached to the settings object so you can check in the draw
	 * callback if sorting has been done in the draw. Deprecated in favour of
	 * events.
	 *  @type boolean
	 *  @default false
	 *  @deprecated
	 */
	"bSorted": false,

	/**
	 * Indicate that if multiple rows are in the header and there is more than
	 * one unique cell per column, if the top one (true) or bottom one (false)
	 * should be used for sorting / title by DataTables.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type boolean
	 */
	"bSortCellsTop": null,

	/**
	 * Initialisation object that is used for the table
	 *  @type object
	 *  @default null
	 */
	"oInit": null,

	/**
	 * Destroy callback functions - for plug-ins to attach themselves to the
	 * destroy so they can clean up markup and events.
	 *  @type array
	 *  @default []
	 */
	"aoDestroyCallback": [],


	/**
	 * Get the number of records in the current record set, before filtering
	 *  @type function
	 */
	"fnRecordsTotal": function ()
	{
		return _fnDataSource( this ) == 'ssp' ?
			this._iRecordsTotal * 1 :
			this.aiDisplayMaster.length;
	},

	/**
	 * Get the number of records in the current record set, after filtering
	 *  @type function
	 */
	"fnRecordsDisplay": function ()
	{
		return _fnDataSource( this ) == 'ssp' ?
			this._iRecordsDisplay * 1 :
			this.aiDisplay.length;
	},

	/**
	 * Get the display end point - aiDisplay index
	 *  @type function
	 */
	"fnDisplayEnd": function ()
	{
		var
			len      = this._iDisplayLength,
			start    = this._iDisplayStart,
			calc     = start + len,
			records  = this.aiDisplay.length,
			features = this.oFeatures,
			paginate = features.bPaginate;

		if ( features.bServerSide ) {
			return paginate === false || len === -1 ?
				start + records :
				Math.min( start+len, this._iRecordsDisplay );
		}
		else {
			return ! paginate || calc>records || len===-1 ?
				records :
				calc;
		}
	},

	/**
	 * The DataTables object for this table
	 *  @type object
	 *  @default null
	 */
	"oInstance": null,

	/**
	 * Unique identifier for each instance of the DataTables object. If there
	 * is an ID on the table node, then it takes that value, otherwise an
	 * incrementing internal counter is used.
	 *  @type string
	 *  @default null
	 */
	"sInstance": null,

	/**
	 * tabindex attribute value that is added to DataTables control elements, allowing
	 * keyboard navigation of the table and its controls.
	 */
	"iTabIndex": 0,

	/**
	 * DIV container for the footer scrolling table if scrolling
	 */
	"nScrollHead": null,

	/**
	 * DIV container for the footer scrolling table if scrolling
	 */
	"nScrollFoot": null,

	/**
	 * Last applied sort
	 *  @type array
	 *  @default []
	 */
	"aLastSort": [],

	/**
	 * Stored plug-in instances
	 *  @type object
	 *  @default {}
	 */
	"oPlugins": {},

	/**
	 * Function used to get a row's id from the row's data
	 *  @type function
	 *  @default null
	 */
	"rowIdFn": null,

	/**
	 * Data location where to store a row's id
	 *  @type string
	 *  @default null
	 */
	"rowId": null
};

/**
 * Extension object for DataTables that is used to provide all extension
 * options.
 *
 * Note that the `DataTable.ext` object is available through
 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
 *  @namespace
 *  @extends DataTable.models.ext
 */


/**
 * DataTables extensions
 * 
 * This namespace acts as a collection area for plug-ins that can be used to
 * extend DataTables capabilities. Indeed many of the build in methods
 * use this method to provide their own capabilities (sorting methods for
 * example).
 *
 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
 * reasons
 *
 *  @namespace
 */
DataTable.ext = _ext = {
	/**
	 * Buttons. For use with the Buttons extension for DataTables. This is
	 * defined here so other extensions can define buttons regardless of load
	 * order. It is _not_ used by DataTables core.
	 *
	 *  @type object
	 *  @default {}
	 */
	buttons: {},


	/**
	 * Element class names
	 *
	 *  @type object
	 *  @default {}
	 */
	classes: {},


	/**
	 * DataTables build type (expanded by the download builder)
	 *
	 *  @type string
	 */
	builder: "-source-",


	/**
	 * Error reporting.
	 * 
	 * How should DataTables report an error. Can take the value 'alert',
	 * 'throw', 'none' or a function.
	 *
	 *  @type string|function
	 *  @default alert
	 */
	errMode: "alert",


	/**
	 * Feature plug-ins.
	 * 
	 * This is an array of objects which describe the feature plug-ins that are
	 * available to DataTables. These feature plug-ins are then available for
	 * use through the `dom` initialisation option.
	 * 
	 * Each feature plug-in is described by an object which must have the
	 * following properties:
	 * 
	 * * `fnInit` - function that is used to initialise the plug-in,
	 * * `cFeature` - a character so the feature can be enabled by the `dom`
	 *   instillation option. This is case sensitive.
	 *
	 * The `fnInit` function has the following input parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 *
	 * And the following return is expected:
	 * 
	 * * {node|null} The element which contains your feature. Note that the
	 *   return may also be void if your plug-in does not require to inject any
	 *   DOM elements into DataTables control (`dom`) - for example this might
	 *   be useful when developing a plug-in which allows table control via
	 *   keyboard entry
	 *
	 *  @type array
	 *
	 *  @example
	 *    $.fn.dataTable.ext.features.push( {
	 *      "fnInit": function( oSettings ) {
	 *        return new TableTools( { "oDTSettings": oSettings } );
	 *      },
	 *      "cFeature": "T"
	 *    } );
	 */
	feature: [],


	/**
	 * Row searching.
	 * 
	 * This method of searching is complimentary to the default type based
	 * searching, and a lot more comprehensive as it allows you complete control
	 * over the searching logic. Each element in this array is a function
	 * (parameters described below) that is called for every row in the table,
	 * and your logic decides if it should be included in the searching data set
	 * or not.
	 *
	 * Searching functions have the following input parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 * 2. `{array|object}` Data for the row to be processed (same as the
	 *    original format that was passed in as the data source, or an array
	 *    from a DOM data source
	 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
	 *    can be useful to retrieve the `TR` element if you need DOM interaction.
	 *
	 * And the following return is expected:
	 *
	 * * {boolean} Include the row in the searched result set (true) or not
	 *   (false)
	 *
	 * Note that as with the main search ability in DataTables, technically this
	 * is "filtering", since it is subtractive. However, for consistency in
	 * naming we call it searching here.
	 *
	 *  @type array
	 *  @default []
	 *
	 *  @example
	 *    // The following example shows custom search being applied to the
	 *    // fourth column (i.e. the data[3] index) based on two input values
	 *    // from the end-user, matching the data in a certain range.
	 *    $.fn.dataTable.ext.search.push(
	 *      function( settings, data, dataIndex ) {
	 *        var min = document.getElementById('min').value * 1;
	 *        var max = document.getElementById('max').value * 1;
	 *        var version = data[3] == "-" ? 0 : data[3]*1;
	 *
	 *        if ( min == "" && max == "" ) {
	 *          return true;
	 *        }
	 *        else if ( min == "" && version < max ) {
	 *          return true;
	 *        }
	 *        else if ( min < version && "" == max ) {
	 *          return true;
	 *        }
	 *        else if ( min < version && version < max ) {
	 *          return true;
	 *        }
	 *        return false;
	 *      }
	 *    );
	 */
	search: [],


	/**
	 * Selector extensions
	 *
	 * The `selector` option can be used to extend the options available for the
	 * selector modifier options (`selector-modifier` object data type) that
	 * each of the three built in selector types offer (row, column and cell +
	 * their plural counterparts). For example the Select extension uses this
	 * mechanism to provide an option to select only rows, columns and cells
	 * that have been marked as selected by the end user (`{selected: true}`),
	 * which can be used in conjunction with the existing built in selector
	 * options.
	 *
	 * Each property is an array to which functions can be pushed. The functions
	 * take three attributes:
	 *
	 * * Settings object for the host table
	 * * Options object (`selector-modifier` object type)
	 * * Array of selected item indexes
	 *
	 * The return is an array of the resulting item indexes after the custom
	 * selector has been applied.
	 *
	 *  @type object
	 */
	selector: {
		cell: [],
		column: [],
		row: []
	},


	/**
	 * Internal functions, exposed for used in plug-ins.
	 * 
	 * Please note that you should not need to use the internal methods for
	 * anything other than a plug-in (and even then, try to avoid if possible).
	 * The internal function may change between releases.
	 *
	 *  @type object
	 *  @default {}
	 */
	internal: {},


	/**
	 * Legacy configuration options. Enable and disable legacy options that
	 * are available in DataTables.
	 *
	 *  @type object
	 */
	legacy: {
		/**
		 * Enable / disable DataTables 1.9 compatible server-side processing
		 * requests
		 *
		 *  @type boolean
		 *  @default null
		 */
		ajax: null
	},


	/**
	 * Pagination plug-in methods.
	 * 
	 * Each entry in this object is a function and defines which buttons should
	 * be shown by the pagination rendering method that is used for the table:
	 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
	 * buttons are displayed in the document, while the functions here tell it
	 * what buttons to display. This is done by returning an array of button
	 * descriptions (what each button will do).
	 *
	 * Pagination types (the four built in options and any additional plug-in
	 * options defined here) can be used through the `paginationType`
	 * initialisation parameter.
	 *
	 * The functions defined take two parameters:
	 *
	 * 1. `{int} page` The current page index
	 * 2. `{int} pages` The number of pages in the table
	 *
	 * Each function is expected to return an array where each element of the
	 * array can be one of:
	 *
	 * * `first` - Jump to first page when activated
	 * * `last` - Jump to last page when activated
	 * * `previous` - Show previous page when activated
	 * * `next` - Show next page when activated
	 * * `{int}` - Show page of the index given
	 * * `{array}` - A nested array containing the above elements to add a
	 *   containing 'DIV' element (might be useful for styling).
	 *
	 * Note that DataTables v1.9- used this object slightly differently whereby
	 * an object with two functions would be defined for each plug-in. That
	 * ability is still supported by DataTables 1.10+ to provide backwards
	 * compatibility, but this option of use is now decremented and no longer
	 * documented in DataTables 1.10+.
	 *
	 *  @type object
	 *  @default {}
	 *
	 *  @example
	 *    // Show previous, next and current page buttons only
	 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
	 *      return [ 'previous', page, 'next' ];
	 *    };
	 */
	pager: {},


	renderer: {
		pageButton: {},
		header: {}
	},


	/**
	 * Ordering plug-ins - custom data source
	 * 
	 * The extension options for ordering of data available here is complimentary
	 * to the default type based ordering that DataTables typically uses. It
	 * allows much greater control over the the data that is being used to
	 * order a column, but is necessarily therefore more complex.
	 * 
	 * This type of ordering is useful if you want to do ordering based on data
	 * live from the DOM (for example the contents of an 'input' element) rather
	 * than just the static string that DataTables knows of.
	 * 
	 * The way these plug-ins work is that you create an array of the values you
	 * wish to be ordering for the column in question and then return that
	 * array. The data in the array much be in the index order of the rows in
	 * the table (not the currently ordering order!). Which order data gathering
	 * function is run here depends on the `dt-init columns.orderDataType`
	 * parameter that is used for the column (if any).
	 *
	 * The functions defined take two parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 * 2. `{int}` Target column index
	 *
	 * Each function is expected to return an array:
	 *
	 * * `{array}` Data for the column to be ordering upon
	 *
	 *  @type array
	 *
	 *  @example
	 *    // Ordering using `input` node values
	 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
	 *    {
	 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
	 *        return $('input', td).val();
	 *      } );
	 *    }
	 */
	order: {},


	/**
	 * Type based plug-ins.
	 *
	 * Each column in DataTables has a type assigned to it, either by automatic
	 * detection or by direct assignment using the `type` option for the column.
	 * The type of a column will effect how it is ordering and search (plug-ins
	 * can also make use of the column type if required).
	 *
	 * @namespace
	 */
	type: {
		/**
		 * Type detection functions.
		 *
		 * The functions defined in this object are used to automatically detect
		 * a column's type, making initialisation of DataTables super easy, even
		 * when complex data is in the table.
		 *
		 * The functions defined take two parameters:
		 *
	     *  1. `{*}` Data from the column cell to be analysed
	     *  2. `{settings}` DataTables settings object. This can be used to
	     *     perform context specific type detection - for example detection
	     *     based on language settings such as using a comma for a decimal
	     *     place. Generally speaking the options from the settings will not
	     *     be required
		 *
		 * Each function is expected to return:
		 *
		 * * `{string|null}` Data type detected, or null if unknown (and thus
		 *   pass it on to the other type detection functions.
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Currency type detection plug-in:
		 *    $.fn.dataTable.ext.type.detect.push(
		 *      function ( data, settings ) {
		 *        // Check the numeric part
		 *        if ( ! data.substring(1).match(/[0-9]/) ) {
		 *          return null;
		 *        }
		 *
		 *        // Check prefixed by currency
		 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
		 *          return 'currency';
		 *        }
		 *        return null;
		 *      }
		 *    );
		 */
		detect: [],


		/**
		 * Type based search formatting.
		 *
		 * The type based searching functions can be used to pre-format the
		 * data to be search on. For example, it can be used to strip HTML
		 * tags or to de-format telephone numbers for numeric only searching.
		 *
		 * Note that is a search is not defined for a column of a given type,
		 * no search formatting will be performed.
		 * 
		 * Pre-processing of searching data plug-ins - When you assign the sType
		 * for a column (or have it automatically detected for you by DataTables
		 * or a type detection plug-in), you will typically be using this for
		 * custom sorting, but it can also be used to provide custom searching
		 * by allowing you to pre-processing the data and returning the data in
		 * the format that should be searched upon. This is done by adding
		 * functions this object with a parameter name which matches the sType
		 * for that target column. This is the corollary of <i>afnSortData</i>
		 * for searching data.
		 *
		 * The functions defined take a single parameter:
		 *
	     *  1. `{*}` Data from the column cell to be prepared for searching
		 *
		 * Each function is expected to return:
		 *
		 * * `{string|null}` Formatted string that will be used for the searching.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
		 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
		 *    }
		 */
		search: {},


		/**
		 * Type based ordering.
		 *
		 * The column type tells DataTables what ordering to apply to the table
		 * when a column is sorted upon. The order for each type that is defined,
		 * is defined by the functions available in this object.
		 *
		 * Each ordering option can be described by three properties added to
		 * this object:
		 *
		 * * `{type}-pre` - Pre-formatting function
		 * * `{type}-asc` - Ascending order function
		 * * `{type}-desc` - Descending order function
		 *
		 * All three can be used together, only `{type}-pre` or only
		 * `{type}-asc` and `{type}-desc` together. It is generally recommended
		 * that only `{type}-pre` is used, as this provides the optimal
		 * implementation in terms of speed, although the others are provided
		 * for compatibility with existing Javascript sort functions.
		 *
		 * `{type}-pre`: Functions defined take a single parameter:
		 *
	     *  1. `{*}` Data from the column cell to be prepared for ordering
		 *
		 * And return:
		 *
		 * * `{*}` Data to be sorted upon
		 *
		 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
		 * functions, taking two parameters:
		 *
	     *  1. `{*}` Data to compare to the second parameter
	     *  2. `{*}` Data to compare to the first parameter
		 *
		 * And returning:
		 *
		 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
		 *   than the second parameter, ===0 if the two parameters are equal and
		 *   >0 if the first parameter should be sorted height than the second
		 *   parameter.
		 * 
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Numeric ordering of formatted numbers with a pre-formatter
		 *    $.extend( $.fn.dataTable.ext.type.order, {
		 *      "string-pre": function(x) {
		 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		 *        return parseFloat( a );
		 *      }
		 *    } );
		 *
		 *  @example
		 *    // Case-sensitive string ordering, with no pre-formatting method
		 *    $.extend( $.fn.dataTable.ext.order, {
		 *      "string-case-asc": function(x,y) {
		 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		 *      },
		 *      "string-case-desc": function(x,y) {
		 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		 *      }
		 *    } );
		 */
		order: {}
	},

	/**
	 * Unique DataTables instance counter
	 *
	 * @type int
	 * @private
	 */
	_unique: 0,


	//
	// Depreciated
	// The following properties are retained for backwards compatibility only.
	// The should not be used in new projects and will be removed in a future
	// version
	//

	/**
	 * Version check function.
	 *  @type function
	 *  @depreciated Since 1.10
	 */
	fnVersionCheck: DataTable.fnVersionCheck,


	/**
	 * Index for what 'this' index API functions should use
	 *  @type int
	 *  @deprecated Since v1.10
	 */
	iApiIndex: 0,


	/**
	 * jQuery UI class container
	 *  @type object
	 *  @deprecated Since v1.10
	 */
	oJUIClasses: {},


	/**
	 * Software version
	 *  @type string
	 *  @deprecated Since v1.10
	 */
	sVersion: DataTable.version
};


//
// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
//
$.extend( _ext, {
	afnFiltering: _ext.search,
	aTypes:       _ext.type.detect,
	ofnSearch:    _ext.type.search,
	oSort:        _ext.type.order,
	afnSortData:  _ext.order,
	aoFeatures:   _ext.feature,
	oApi:         _ext.internal,
	oStdClasses:  _ext.classes,
	oPagination:  _ext.pager
} );


$.extend( DataTable.ext.classes, {
	"sTable": "dataTable",
	"sNoFooter": "no-footer",

	/* Paging buttons */
	"sPageButton": "paginate_button",
	"sPageButtonActive": "current",
	"sPageButtonDisabled": "disabled",

	/* Striping classes */
	"sStripeOdd": "odd",
	"sStripeEven": "even",

	/* Empty row */
	"sRowEmpty": "dataTables_empty",

	/* Features */
	"sWrapper": "dataTables_wrapper",
	"sFilter": "dataTables_filter",
	"sInfo": "dataTables_info",
	"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
	"sLength": "dataTables_length",
	"sProcessing": "dataTables_processing",

	/* Sorting */
	"sSortAsc": "sorting_asc",
	"sSortDesc": "sorting_desc",
	"sSortable": "sorting", /* Sortable in both directions */
	"sSortableAsc": "sorting_desc_disabled",
	"sSortableDesc": "sorting_asc_disabled",
	"sSortableNone": "sorting_disabled",
	"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

	/* Filtering */
	"sFilterInput": "",

	/* Page length */
	"sLengthSelect": "",

	/* Scrolling */
	"sScrollWrapper": "dataTables_scroll",
	"sScrollHead": "dataTables_scrollHead",
	"sScrollHeadInner": "dataTables_scrollHeadInner",
	"sScrollBody": "dataTables_scrollBody",
	"sScrollFoot": "dataTables_scrollFoot",
	"sScrollFootInner": "dataTables_scrollFootInner",

	/* Misc */
	"sHeaderTH": "",
	"sFooterTH": "",

	// Deprecated
	"sSortJUIAsc": "",
	"sSortJUIDesc": "",
	"sSortJUI": "",
	"sSortJUIAscAllowed": "",
	"sSortJUIDescAllowed": "",
	"sSortJUIWrapper": "",
	"sSortIcon": "",
	"sJUIHeader": "",
	"sJUIFooter": ""
} );


var extPagination = DataTable.ext.pager;

function _numbers ( page, pages ) {
	var
		numbers = [],
		buttons = extPagination.numbers_length,
		half = Math.floor( buttons / 2 ),
		i = 1;

	if ( pages <= buttons ) {
		numbers = _range( 0, pages );
	}
	else if ( page <= half ) {
		numbers = _range( 0, buttons-2 );
		numbers.push( 'ellipsis' );
		numbers.push( pages-1 );
	}
	else if ( page >= pages - 1 - half ) {
		numbers = _range( pages-(buttons-2), pages );
		numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
		numbers.splice( 0, 0, 0 );
	}
	else {
		numbers = _range( page-half+2, page+half-1 );
		numbers.push( 'ellipsis' );
		numbers.push( pages-1 );
		numbers.splice( 0, 0, 'ellipsis' );
		numbers.splice( 0, 0, 0 );
	}

	numbers.DT_el = 'span';
	return numbers;
}


$.extend( extPagination, {
	simple: function ( page, pages ) {
		return [ 'previous', 'next' ];
	},

	full: function ( page, pages ) {
		return [  'first', 'previous', 'next', 'last' ];
	},

	numbers: function ( page, pages ) {
		return [ _numbers(page, pages) ];
	},

	simple_numbers: function ( page, pages ) {
		return [ 'previous', _numbers(page, pages), 'next' ];
	},

	full_numbers: function ( page, pages ) {
		return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
	},
	
	first_last_numbers: function (page, pages) {
 		return ['first', _numbers(page, pages), 'last'];
 	},

	// For testing and plug-ins to use
	_numbers: _numbers,

	// Number of number buttons (including ellipsis) to show. _Must be odd!_
	numbers_length: 7
} );


$.extend( true, DataTable.ext.renderer, {
	pageButton: {
		_: function ( settings, host, idx, buttons, page, pages ) {
			var classes = settings.oClasses;
			var lang = settings.oLanguage.oPaginate;
			var aria = settings.oLanguage.oAria.paginate || {};
			var btnDisplay, btnClass;

			var attach = function( container, buttons ) {
				var i, ien, node, button;
				var disabledClass = classes.sPageButtonDisabled;
				var clickHandler = function ( e ) {
					_fnPageChange( settings, e.data.action, true );
				};

				for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
					button = buttons[i];

					if ( Array.isArray( button ) ) {
						var inner = $( '<'+(button.DT_el || 'div')+'/>' )
							.appendTo( container );
						attach( inner, button );
					}
					else {
						var disabled = false;

						btnDisplay = null;
						btnClass = button;

						switch ( button ) {
							case 'ellipsis':
								container.append('<span class="ellipsis">&#x2026;</span>');
								break;

							case 'first':
								btnDisplay = lang.sFirst;

								if ( page === 0 ) {
									disabled = true;
								}
								break;

							case 'previous':
								btnDisplay = lang.sPrevious;

								if ( page === 0 ) {
									disabled = true;
								}
								break;

							case 'next':
								btnDisplay = lang.sNext;

								if ( pages === 0 || page === pages-1 ) {
									disabled = true;
								}
								break;

							case 'last':
								btnDisplay = lang.sLast;

								if ( pages === 0 || page === pages-1 ) {
									disabled = true;
								}
								break;

							default:
								btnDisplay = settings.fnFormatNumber( button + 1 );
								btnClass = page === button ?
									classes.sPageButtonActive : '';
								break;
						}

						if ( btnDisplay !== null ) {
							var tag = settings.oInit.pagingTag || 'a';

							if (disabled) {
								btnClass += ' ' + disabledClass;
							}

							node = $('<'+tag+'>', {
									'class': classes.sPageButton+' '+btnClass,
									'aria-controls': settings.sTableId,
									'aria-disabled': disabled ? 'true' : null,
									'aria-label': aria[ button ],
									'role': 'link',
									'aria-current': btnClass === classes.sPageButtonActive ? 'page' : null,
									'data-dt-idx': button,
									'tabindex': disabled ? -1 : settings.iTabIndex,
									'id': idx === 0 && typeof button === 'string' ?
										settings.sTableId +'_'+ button :
										null
								} )
								.html( btnDisplay )
								.appendTo( container );

							_fnBindAction(
								node, {action: button}, clickHandler
							);
						}
					}
				}
			};

			// IE9 throws an 'unknown error' if document.activeElement is used
			// inside an iframe or frame. Try / catch the error. Not good for
			// accessibility, but neither are frames.
			var activeEl;

			try {
				// Because this approach is destroying and recreating the paging
				// elements, focus is lost on the select button which is bad for
				// accessibility. So we want to restore focus once the draw has
				// completed
				activeEl = $(host).find(document.activeElement).data('dt-idx');
			}
			catch (e) {}

			attach( $(host).empty(), buttons );

			if ( activeEl !== undefined ) {
				$(host).find( '[data-dt-idx='+activeEl+']' ).trigger('focus');
			}
		}
	}
} );



// Built in type detection. See model.ext.aTypes for information about
// what is required from this methods.
$.extend( DataTable.ext.type.detect, [
	// Plain numbers - first since V8 detects some plain numbers as dates
	// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
	function ( d, settings )
	{
		var decimal = settings.oLanguage.sDecimal;
		return _isNumber( d, decimal ) ? 'num'+decimal : null;
	},

	// Dates (only those recognised by the browser's Date.parse)
	function ( d, settings )
	{
		// V8 tries _very_ hard to make a string passed into `Date.parse()`
		// valid, so we need to use a regex to restrict date formats. Use a
		// plug-in for anything other than ISO8601 style strings
		if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
			return null;
		}
		var parsed = Date.parse(d);
		return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
	},

	// Formatted numbers
	function ( d, settings )
	{
		var decimal = settings.oLanguage.sDecimal;
		return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
	},

	// HTML numeric
	function ( d, settings )
	{
		var decimal = settings.oLanguage.sDecimal;
		return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
	},

	// HTML numeric, formatted
	function ( d, settings )
	{
		var decimal = settings.oLanguage.sDecimal;
		return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
	},

	// HTML (this is strict checking - there must be html)
	function ( d, settings )
	{
		return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
			'html' : null;
	}
] );



// Filter formatting functions. See model.ext.ofnSearch for information about
// what is required from these methods.
// 
// Note that additional search methods are added for the html numbers and
// html formatted numbers by `_addNumericSort()` when we know what the decimal
// place is


$.extend( DataTable.ext.type.search, {
	html: function ( data ) {
		return _empty(data) ?
			data :
			typeof data === 'string' ?
				data
					.replace( _re_new_lines, " " )
					.replace( _re_html, "" ) :
				'';
	},

	string: function ( data ) {
		return _empty(data) ?
			data :
			typeof data === 'string' ?
				data.replace( _re_new_lines, " " ) :
				data;
	}
} );



var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
	if ( d !== 0 && (!d || d === '-') ) {
		return -Infinity;
	}
	
	var type = typeof d;

	if (type === 'number' || type === 'bigint') {
		return d;
	}

	// If a decimal place other than `.` is used, it needs to be given to the
	// function so we can detect it and replace with a `.` which is the only
	// decimal place Javascript recognises - it is not locale aware.
	if ( decimalPlace ) {
		d = _numToDecimal( d, decimalPlace );
	}

	if ( d.replace ) {
		if ( re1 ) {
			d = d.replace( re1, '' );
		}

		if ( re2 ) {
			d = d.replace( re2, '' );
		}
	}

	return d * 1;
};


// Add the numeric 'deformatting' functions for sorting and search. This is done
// in a function to provide an easy ability for the language options to add
// additional methods if a non-period decimal place is used.
function _addNumericSort ( decimalPlace ) {
	$.each(
		{
			// Plain numbers
			"num": function ( d ) {
				return __numericReplace( d, decimalPlace );
			},

			// Formatted numbers
			"num-fmt": function ( d ) {
				return __numericReplace( d, decimalPlace, _re_formatted_numeric );
			},

			// HTML numeric
			"html-num": function ( d ) {
				return __numericReplace( d, decimalPlace, _re_html );
			},

			// HTML numeric, formatted
			"html-num-fmt": function ( d ) {
				return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
			}
		},
		function ( key, fn ) {
			// Add the ordering method
			_ext.type.order[ key+decimalPlace+'-pre' ] = fn;

			// For HTML types add a search formatter that will strip the HTML
			if ( key.match(/^html\-/) ) {
				_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
			}
		}
	);
}


// Default sort methods
$.extend( _ext.type.order, {
	// Dates
	"date-pre": function ( d ) {
		var ts = Date.parse( d );
		return isNaN(ts) ? -Infinity : ts;
	},

	// html
	"html-pre": function ( a ) {
		return _empty(a) ?
			'' :
			a.replace ?
				a.replace( /<.*?>/g, "" ).toLowerCase() :
				a+'';
	},

	// string
	"string-pre": function ( a ) {
		// This is a little complex, but faster than always calling toString,
		// https://jsperf.com/tostring-v-check
		return _empty(a) ?
			'' :
			typeof a === 'string' ?
				a.toLowerCase() :
				! a.toString ?
					'' :
					a.toString();
	},

	// string-asc and -desc are retained only for compatibility with the old
	// sort methods
	"string-asc": function ( x, y ) {
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	},

	"string-desc": function ( x, y ) {
		return ((x < y) ? 1 : ((x > y) ? -1 : 0));
	}
} );


// Numeric sorting types - order doesn't matter here
_addNumericSort( '' );


$.extend( true, DataTable.ext.renderer, {
	header: {
		_: function ( settings, cell, column, classes ) {
			// No additional mark-up required
			// Attach a sort listener to update on sort - note that using the
			// `DT` namespace will allow the event to be removed automatically
			// on destroy, while the `dt` namespaced event is the one we are
			// listening for
			$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
				if ( settings !== ctx ) { // need to check this this is the host
					return;               // table, not a nested one
				}

				var colIdx = column.idx;

				cell
					.removeClass(
						classes.sSortAsc +' '+
						classes.sSortDesc
					)
					.addClass( columns[ colIdx ] == 'asc' ?
						classes.sSortAsc : columns[ colIdx ] == 'desc' ?
							classes.sSortDesc :
							column.sSortingClass
					);
			} );
		},

		jqueryui: function ( settings, cell, column, classes ) {
			$('<div/>')
				.addClass( classes.sSortJUIWrapper )
				.append( cell.contents() )
				.append( $('<span/>')
					.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
				)
				.appendTo( cell );

			// Attach a sort listener to update on sort
			$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
				if ( settings !== ctx ) {
					return;
				}

				var colIdx = column.idx;

				cell
					.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
					.addClass( columns[ colIdx ] == 'asc' ?
						classes.sSortAsc : columns[ colIdx ] == 'desc' ?
							classes.sSortDesc :
							column.sSortingClass
					);

				cell
					.find( 'span.'+classes.sSortIcon )
					.removeClass(
						classes.sSortJUIAsc +" "+
						classes.sSortJUIDesc +" "+
						classes.sSortJUI +" "+
						classes.sSortJUIAscAllowed +" "+
						classes.sSortJUIDescAllowed
					)
					.addClass( columns[ colIdx ] == 'asc' ?
						classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
							classes.sSortJUIDesc :
							column.sSortingClassJUI
					);
			} );
		}
	}
} );

/*
 * Public helper functions. These aren't used internally by DataTables, or
 * called by any of the options passed into DataTables, but they can be used
 * externally by developers working with DataTables. They are helper functions
 * to make working with DataTables a little bit easier.
 */

var __htmlEscapeEntities = function ( d ) {
	if (Array.isArray(d)) {
		d = d.join(',');
	}

	return typeof d === 'string' ?
		d
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;') :
		d;
};

// Common logic for moment, luxon or a date action
function __mld( dt, momentFn, luxonFn, dateFn, arg1 ) {
	if (window.moment) {
		return dt[momentFn]( arg1 );
	}
	else if (window.luxon) {
		return dt[luxonFn]( arg1 );
	}
	
	return dateFn ? dt[dateFn]( arg1 ) : dt;
}


var __mlWarning = false;
function __mldObj (d, format, locale) {
	var dt;

	if (window.moment) {
		dt = window.moment.utc( d, format, locale, true );

		if (! dt.isValid()) {
			return null;
		}
	}
	else if (window.luxon) {
		dt = format && typeof d === 'string'
			? window.luxon.DateTime.fromFormat( d, format )
			: window.luxon.DateTime.fromISO( d );

		if (! dt.isValid) {
			return null;
		}

		dt.setLocale(locale);
	}
	else if (! format) {
		// No format given, must be ISO
		dt = new Date(d);
	}
	else {
		if (! __mlWarning) {
			alert('DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17');
		}

		__mlWarning = true;
	}

	return dt;
}

// Wrapper for date, datetime and time which all operate the same way with the exception of
// the output string for auto locale support
function __mlHelper (localeString) {
	return function ( from, to, locale, def ) {
		// Luxon and Moment support
		// Argument shifting
		if ( arguments.length === 0 ) {
			locale = 'en';
			to = null; // means toLocaleString
			from = null; // means iso8601
		}
		else if ( arguments.length === 1 ) {
			locale = 'en';
			to = from;
			from = null;
		}
		else if ( arguments.length === 2 ) {
			locale = to;
			to = from;
			from = null;
		}

		var typeName = 'datetime-' + to;

		// Add type detection and sorting specific to this date format - we need to be able to identify
		// date type columns as such, rather than as numbers in extensions. Hence the need for this.
		if (! DataTable.ext.type.order[typeName]) {
			// The renderer will give the value to type detect as the type!
			DataTable.ext.type.detect.unshift(function (d) {
				return d === typeName ? typeName : false;
			});

			// The renderer gives us Moment, Luxon or Date obects for the sorting, all of which have a
			// `valueOf` which gives milliseconds epoch
			DataTable.ext.type.order[typeName + '-asc'] = function (a, b) {
				var x = a.valueOf();
				var y = b.valueOf();

				return x === y
					? 0
					: x < y
						? -1
						: 1;
			}

			DataTable.ext.type.order[typeName + '-desc'] = function (a, b) {
				var x = a.valueOf();
				var y = b.valueOf();

				return x === y
					? 0
					: x > y
						? -1
						: 1;
			}
		}
	
		return function ( d, type ) {
			// Allow for a default value
			if (d === null || d === undefined) {
				if (def === '--now') {
					// We treat everything as UTC further down, so no changes are
					// made, as such need to get the local date / time as if it were
					// UTC
					var local = new Date();
					d = new Date( Date.UTC(
						local.getFullYear(), local.getMonth(), local.getDate(),
						local.getHours(), local.getMinutes(), local.getSeconds()
					) );
				}
				else {
					d = '';
				}
			}

			if (type === 'type') {
				// Typing uses the type name for fast matching
				return typeName;
			}

			if (d === '') {
				return type !== 'sort'
					? ''
					: __mldObj('0000-01-01 00:00:00', null, locale);
			}

			// Shortcut. If `from` and `to` are the same, we are using the renderer to
			// format for ordering, not display - its already in the display format.
			if ( to !== null && from === to && type !== 'sort' && type !== 'type' && ! (d instanceof Date) ) {
				return d;
			}

			var dt = __mldObj(d, from, locale);

			if (dt === null) {
				return d;
			}

			if (type === 'sort') {
				return dt;
			}
			
			var formatted = to === null
				? __mld(dt, 'toDate', 'toJSDate', '')[localeString]()
				: __mld(dt, 'format', 'toFormat', 'toISOString', to);

			// XSS protection
			return type === 'display' ?
				__htmlEscapeEntities( formatted ) :
				formatted;
		};
	}
}

// Based on locale, determine standard number formatting
// Fallback for legacy browsers is US English
var __thousands = ',';
var __decimal = '.';

if (window.Intl !== undefined) {
	try {
		var num = new Intl.NumberFormat().formatToParts(100000.1);
	
		for (var i=0 ; i<num.length ; i++) {
			if (num[i].type === 'group') {
				__thousands = num[i].value;
			}
			else if (num[i].type === 'decimal') {
				__decimal = num[i].value;
			}
		}
	}
	catch (e) {
		// noop
	}
}

// Formatted date time detection - use by declaring the formats you are going to use
DataTable.datetime = function ( format, locale ) {
	var typeName = 'datetime-detect-' + format;

	if (! locale) {
		locale = 'en';
	}

	if (! DataTable.ext.type.order[typeName]) {
		DataTable.ext.type.detect.unshift(function (d) {
			var dt = __mldObj(d, format, locale);
			return d === '' || dt ? typeName : false;
		});

		DataTable.ext.type.order[typeName + '-pre'] = function (d) {
			return __mldObj(d, format, locale) || 0;
		}
	}
}

/**
 * Helpers for `columns.render`.
 *
 * The options defined here can be used with the `columns.render` initialisation
 * option to provide a display renderer. The following functions are defined:
 *
 * * `number` - Will format numeric data (defined by `columns.data`) for
 *   display, retaining the original unformatted data for sorting and filtering.
 *   It takes 5 parameters:
 *   * `string` - Thousands grouping separator
 *   * `string` - Decimal point indicator
 *   * `integer` - Number of decimal points to show
 *   * `string` (optional) - Prefix.
 *   * `string` (optional) - Postfix (/suffix).
 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
 *   parameters.
 *
 * @example
 *   // Column definition using the number renderer
 *   {
 *     data: "salary",
 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
 *   }
 *
 * @namespace
 */
DataTable.render = {
	date: __mlHelper('toLocaleDateString'),
	datetime: __mlHelper('toLocaleString'),
	time: __mlHelper('toLocaleTimeString'),
	number: function ( thousands, decimal, precision, prefix, postfix ) {
		// Auto locale detection
		if (thousands === null || thousands === undefined) {
			thousands = __thousands;
		}

		if (decimal === null || decimal === undefined) {
			decimal = __decimal;
		}

		return {
			display: function ( d ) {
				if ( typeof d !== 'number' && typeof d !== 'string' ) {
					return d;
				}

				if (d === '' || d === null) {
					return d;
				}

				var negative = d < 0 ? '-' : '';
				var flo = parseFloat( d );

				// If NaN then there isn't much formatting that we can do - just
				// return immediately, escaping any HTML (this was supposed to
				// be a number after all)
				if ( isNaN( flo ) ) {
					return __htmlEscapeEntities( d );
				}

				flo = flo.toFixed( precision );
				d = Math.abs( flo );

				var intPart = parseInt( d, 10 );
				var floatPart = precision ?
					decimal+(d - intPart).toFixed( precision ).substring( 2 ):
					'';

				// If zero, then can't have a negative prefix
				if (intPart === 0 && parseFloat(floatPart) === 0) {
					negative = '';
				}

				return negative + (prefix||'') +
					intPart.toString().replace(
						/\B(?=(\d{3})+(?!\d))/g, thousands
					) +
					floatPart +
					(postfix||'');
			}
		};
	},

	text: function () {
		return {
			display: __htmlEscapeEntities,
			filter: __htmlEscapeEntities
		};
	}
};


/*
 * This is really a good bit rubbish this method of exposing the internal methods
 * publicly... - To be fixed in 2.0 using methods on the prototype
 */


/**
 * Create a wrapper function for exporting an internal functions to an external API.
 *  @param {string} fn API function name
 *  @returns {function} wrapped function
 *  @memberof DataTable#internal
 */
function _fnExternApiFunc (fn)
{
	return function() {
		var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
			Array.prototype.slice.call(arguments)
		);
		return DataTable.ext.internal[fn].apply( this, args );
	};
}


/**
 * Reference to internal functions for use by plug-in developers. Note that
 * these methods are references to internal functions and are considered to be
 * private. If you use these methods, be aware that they are liable to change
 * between versions.
 *  @namespace
 */
$.extend( DataTable.ext.internal, {
	_fnExternApiFunc: _fnExternApiFunc,
	_fnBuildAjax: _fnBuildAjax,
	_fnAjaxUpdate: _fnAjaxUpdate,
	_fnAjaxParameters: _fnAjaxParameters,
	_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
	_fnAjaxDataSrc: _fnAjaxDataSrc,
	_fnAddColumn: _fnAddColumn,
	_fnColumnOptions: _fnColumnOptions,
	_fnAdjustColumnSizing: _fnAdjustColumnSizing,
	_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
	_fnColumnIndexToVisible: _fnColumnIndexToVisible,
	_fnVisbleColumns: _fnVisbleColumns,
	_fnGetColumns: _fnGetColumns,
	_fnColumnTypes: _fnColumnTypes,
	_fnApplyColumnDefs: _fnApplyColumnDefs,
	_fnHungarianMap: _fnHungarianMap,
	_fnCamelToHungarian: _fnCamelToHungarian,
	_fnLanguageCompat: _fnLanguageCompat,
	_fnBrowserDetect: _fnBrowserDetect,
	_fnAddData: _fnAddData,
	_fnAddTr: _fnAddTr,
	_fnNodeToDataIndex: _fnNodeToDataIndex,
	_fnNodeToColumnIndex: _fnNodeToColumnIndex,
	_fnGetCellData: _fnGetCellData,
	_fnSetCellData: _fnSetCellData,
	_fnSplitObjNotation: _fnSplitObjNotation,
	_fnGetObjectDataFn: _fnGetObjectDataFn,
	_fnSetObjectDataFn: _fnSetObjectDataFn,
	_fnGetDataMaster: _fnGetDataMaster,
	_fnClearTable: _fnClearTable,
	_fnDeleteIndex: _fnDeleteIndex,
	_fnInvalidate: _fnInvalidate,
	_fnGetRowElements: _fnGetRowElements,
	_fnCreateTr: _fnCreateTr,
	_fnBuildHead: _fnBuildHead,
	_fnDrawHead: _fnDrawHead,
	_fnDraw: _fnDraw,
	_fnReDraw: _fnReDraw,
	_fnAddOptionsHtml: _fnAddOptionsHtml,
	_fnDetectHeader: _fnDetectHeader,
	_fnGetUniqueThs: _fnGetUniqueThs,
	_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
	_fnFilterComplete: _fnFilterComplete,
	_fnFilterCustom: _fnFilterCustom,
	_fnFilterColumn: _fnFilterColumn,
	_fnFilter: _fnFilter,
	_fnFilterCreateSearch: _fnFilterCreateSearch,
	_fnEscapeRegex: _fnEscapeRegex,
	_fnFilterData: _fnFilterData,
	_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
	_fnUpdateInfo: _fnUpdateInfo,
	_fnInfoMacros: _fnInfoMacros,
	_fnInitialise: _fnInitialise,
	_fnInitComplete: _fnInitComplete,
	_fnLengthChange: _fnLengthChange,
	_fnFeatureHtmlLength: _fnFeatureHtmlLength,
	_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
	_fnPageChange: _fnPageChange,
	_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
	_fnProcessingDisplay: _fnProcessingDisplay,
	_fnFeatureHtmlTable: _fnFeatureHtmlTable,
	_fnScrollDraw: _fnScrollDraw,
	_fnApplyToChildren: _fnApplyToChildren,
	_fnCalculateColumnWidths: _fnCalculateColumnWidths,
	_fnThrottle: _fnThrottle,
	_fnConvertToWidth: _fnConvertToWidth,
	_fnGetWidestNode: _fnGetWidestNode,
	_fnGetMaxLenString: _fnGetMaxLenString,
	_fnStringToCss: _fnStringToCss,
	_fnSortFlatten: _fnSortFlatten,
	_fnSort: _fnSort,
	_fnSortAria: _fnSortAria,
	_fnSortListener: _fnSortListener,
	_fnSortAttachListener: _fnSortAttachListener,
	_fnSortingClasses: _fnSortingClasses,
	_fnSortData: _fnSortData,
	_fnSaveState: _fnSaveState,
	_fnLoadState: _fnLoadState,
	_fnImplementState: _fnImplementState,
	_fnSettingsFromNode: _fnSettingsFromNode,
	_fnLog: _fnLog,
	_fnMap: _fnMap,
	_fnBindAction: _fnBindAction,
	_fnCallbackReg: _fnCallbackReg,
	_fnCallbackFire: _fnCallbackFire,
	_fnLengthOverflow: _fnLengthOverflow,
	_fnRenderer: _fnRenderer,
	_fnDataSource: _fnDataSource,
	_fnRowAttributes: _fnRowAttributes,
	_fnExtend: _fnExtend,
	_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
	                                // in 1.10, so this dead-end function is
	                                // added to prevent errors
} );


// jQuery access
$.fn.dataTable = DataTable;

// Provide access to the host jQuery object (circular reference)
DataTable.$ = $;

// Legacy aliases
$.fn.dataTableSettings = DataTable.settings;
$.fn.dataTableExt = DataTable.ext;

// With a capital `D` we return a DataTables API instance rather than a
// jQuery object
$.fn.DataTable = function ( opts ) {
	return $(this).dataTable( opts ).api();
};

// All properties that are available to $.fn.dataTable should also be
// available on $.fn.DataTable
$.each( DataTable, function ( prop, val ) {
	$.fn.DataTable[ prop ] = val;
} );

/* harmony default export */ __webpack_exports__["default"] = (DataTable);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-dt */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.mjs");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Add custom scripts here
*/



window.Pusher = (pusher_js__WEBPACK_IMPORTED_MODULE_2___default());
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_1__["default"]({
  broadcaster: 'pusher',
  key: /* unsupported import.meta.env.VITE_PUSHER_APP_KEY */ undefined.VITE_PUSHER_APP_KEY,
  cluster: /* unsupported import.meta.env.VITE_PUSHER_APP_CLUSTER */ undefined.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true
});

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;
// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: import.meta.env.VITE_PUSHER_APP_KEY,
//   cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//   wsHost: import.meta.env.VITE_PUSHER_HOST
//     ? import.meta.env.VITE_PUSHER_HOST
//     : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//   wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//   wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//   forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//   enabledTransports: ['ws', 'wss']
// });
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});