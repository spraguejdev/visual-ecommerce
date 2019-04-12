/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAdmins = exports.fetchProducts = exports.fetchCurrentUser = exports.fetchUsers = exports.FETCH_ADMINS = exports.FETCH_CURRENT_USER = exports.FETCH_PRODUCTS = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = "fetch_users";
var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = "fetch_products";
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";
var FETCH_ADMINS = exports.FETCH_ADMINS = "fetch_admins";

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/users");

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/current_user");

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

// When redux thunk calls the function, (atuomaticall invoke), it will now have two extra arguments.
var fetchProducts = exports.fetchProducts = function fetchProducts() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _axios2.default.get("http://visual-commerce-api.herokuapp.com/products");

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_PRODUCTS,
                payload: res
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.get("/admins");

            case 2:
              res = _context4.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x8, _x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(13);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(14);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _ProductsPage = __webpack_require__(15);

var _ProductsPage2 = _interopRequireDefault(_ProductsPage);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(18);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(19);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App is the component that will be shown on all pages
exports.default = [_extends({}, _App2.default, {
  routes: [_extends({
    path: "/"
  }, _HomePage2.default, {
    exact: true
  }), _extends({}, _AdminsListPage2.default, {
    path: "/admins"
  }), _extends({}, _UsersListPage2.default, {
    path: "/users",
    exact: true
  }), _extends({}, _ProductsPage2.default, {
    path: "/products",
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _serverStore = __webpack_require__(24);

var _serverStore2 = _interopRequireDefault(_serverStore);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(31);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;

var app = (0, _express2.default)();

// Proxy for api, any route trying to access this route will be sent off to the api
app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:" + port;
    return opts;
  }
}));

app.use(_express2.default.static("public"));
// Route handler
app.get("*", function (req, res) {
  // Create our server Store here
  // Pass in our req objet to the createStore function to we can use the cookie
  var store = (0, _serverStore2.default)(req);

  // Chain on a second.map here so that we map over each promise, check to see if it is a promise
  // We are created an arrap of promisses for all requests related to a particular routes. After that array is created
  // We will map over the array of promises, and create a new promise for each one. Whenever the new promise is resolved,
  // Or when the new promise is rejected, we will instantly resolve that the promise that was created, no matter what.
  // Essentially, that will give us new list of promises, some might containt the data from the store, and some might
  // Contain the value null
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, function () {
  console.log("Hido ho, mate!");
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(23);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize a static server to be used with our server side codebase
exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return "\n    <html>\n      <head>\n      <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.2/css/all.css\" integrity=\"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr\"\n      crossorigin=\"anonymous\">\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n        <link rel=\"stylesheet\" href=\"../styles/styles.css\">\n        <style>\n        .side-bar {\n          background-color: #363c42;\n          display: table-row;\n          color: #f5f5f5;\n        }\n        img {\n          max-height: 250px;\n        }\n        \n        .dashboard {\n          background-color: #ededed;\n          display: table-row;\n        }\n        .margin {\n          margin-right: 10px;\n        }\n        .property-card {\n          color: rgba(0, 0, 0, 0.87);\n          /* position: relative; */\n          font-size: 20px;\n          margin: 30px, 10px, 0px, 10px;\n          /* box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.14); */\n          margin-bottom: 30px;\n          border-radius: 6px;\n          margin-right: 20px;\n        }\n        .cardUpper {\n          text-align: right;\n          background: transparent;\n          box-shadow: none;\n          color: #fff;\n          margin: 0 15px;\n          padding: 0;\n          position: relative;\n          border-bottom: none;\n          box-sizing: border-box;\n          display: block;\n        }\n        .cardUpper {\n          text-align: right;\n          background: transparent;\n          box-shadow: none;\n          color: #fff;\n          margin: 0 15px;\n          padding: 0;\n          position: relative;\n          border-bottom: none;\n          box-sizing: border-box;\n          display: block;\n        }\n        \n        .cardLower {\n          border-top: 1px solid#eee;\n          margin-top: 20px;\n          margin: 0 15px 10px;\n          border: 0;\n          padding: 0;\n          display: flex;\n          padding-top: 10px;\n          align-items: center;\n          border-radius: 0;\n          justify-content: space-between;\n          background-color: transparent;\n        }\n        .product-image {\n          /* float: left;\n          padding: 15px;\n          margin-top: -20px;\n          margin-right: 15px; */\n          border-radius: 3px;\n          background-color: #999;\n          background: linear-gradient(60deg, #999, #f3f4f4);\n          box-shadow: 2px 0px 6px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px #999;\n        }\n        \n        .productText {\n          color: #999;\n          margin: 0;\n          font-size: 14px;\n          margin-top: 0;\n          padding-top: 10px;\n          margin-bottom: 0;\n        }\n        html * {\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n        }\n        \n        .button {\n          margin: 20px;\n          width: 75px;\n        }\n        \n        .card-style {\n          width: 18rem;\n          margin-top: 75px;\n          box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #999;\n          border-radius: 6px;\n          margin-right: 40px;\n        }\n        \n        .card-quantity {\n          font-size: 40px;\n        }\n        \n        .card-img-height {\n          height: 25%;\n        }\n        \n        .card-seperator {\n          border-top: 1px solid#eee;\n        }\n        \n        #admin {\n          text-align: center;\n          font-size: 24px;\n          font-weight: 500;\n        }\n        \n        #dashboard-icon {\n          font-size: 24;\n        }\n        #dashboard {\n          text-align: left;\n          font-size: 24px;\n          font-weight: 500;\n        }\n        \n        .safe {\n          border: none;\n        }\n        \n        .low-qty {\n          border: 2px solid red;\n          background-color: red;\n          opacity: 0.6;\n        }\n        \n        .max-height {\n          height: 288px;\n        }\n        \n        .add-product-icon {\n          float: center;\n          font-size: 15px;\n          padding-left: 15px;\n        }\n        \n        .add-product-from {\n        }\n        \n        #add-product-input {\n          padding-top: -5px;\n        }\n        \n        #add-product-button {\n          margin: 5px;\n          width: 75px;\n          text-align: center;\n          padding-bottom: 4px;\n          margin-bottom: 15px;\n        }\n        \n        #center {\n          text-align: center;\n        }\n        \n        </style>\n        </head>\n      <body>\n        <div id='root'>\n          " + content + " \n        </div>\n        <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n      <script>\n        window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n      </script>\n      <script src='bundle.js'></script>\n      <body>\n    </html>\n  ";
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    { className: "jumbotron jumbotron-fluid" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "h1",
        { className: "display-4 text-center" },
        "Welcome!"
      ),
      _react2.default.createElement(
        "p",
        { className: "lead text-center", style: { paddingBottom: "20px" } },
        "Checkout these awesome Server Side Rendering Features!",
        _react2.default.createElement(
          "h3",
          { className: "text-center" },
          "Built With"
        ),
        _react2.default.createElement(
          "div",
          { className: "container", style: { maxWidth: "500px" } },
          _react2.default.createElement(
            "ul",
            { className: "list-group text-center" },
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Javascript ES6"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "React"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Redux"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "React Router"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Express"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Node.js"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Mongodb"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "Bootstrap"
            ),
            _react2.default.createElement(
              "li",
              { className: "list-group-item" },
              "OAuth Authenication"
            )
          )
        )
      )
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList(props) {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call(this, props));
  }

  _createClass(UsersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container text-center", style: { maxWidth: "500px" } },
        _react2.default.createElement(
          "h1",
          { style: { padding: "20px 0 20px 0 " } },
          "Here Is A big List Of Users"
        ),
        _react2.default.createElement(
          "ul",
          { className: "list-group" },
          this.props.users.map(function (user) {
            return _react2.default.createElement(
              "li",
              { className: "list-group-item", key: user.id },
              user.name
            );
          })
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

function loadData(store) {
  return store.dispatch((0, _index.fetchUsers)());
}

function mapStateToProps(state) {
  return { users: state.users };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _index.fetchUsers })(UsersList),
  loadData: loadData
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsPage = function (_Component) {
  _inherits(ProductsPage, _Component);

  function ProductsPage(props) {
    _classCallCheck(this, ProductsPage);

    return _possibleConstructorReturn(this, (ProductsPage.__proto__ || Object.getPrototypeOf(ProductsPage)).call(this, props));
  }

  _createClass(ProductsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchProducts();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container text-center", style: { maxWidth: "500px" } },
        _react2.default.createElement(
          "h1",
          { style: { padding: "20px 0 20px 0 " } },
          " ",
          "Here Is A Big List Of Products"
        ),
        _react2.default.createElement(
          "ul",
          { className: "list-group" },
          this.props.products.map(function (product, i) {
            return _react2.default.createElement(
              "li",
              { className: "list-group-item", key: i },
              product.name
            );
          })
        )
      );
    }
  }]);

  return ProductsPage;
}(_react.Component);

function loadData(store) {
  return store.dispatch((0, _index.fetchProducts)());
}

function mapStateToProps(state) {
  return { products: state.products };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _index.fetchProducts })(ProductsPage),
  loadData: loadData
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _index.fetchCurrentUser)());
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;

  // Look at the value of auth, and show appropiate button
  var authButton = auth ?
  // We are using making a request to the api, we want it to be proxied though our renderer server, so we set up our cookies with the renderer server and not the api
  // We use anchor tags because we want the entire browser to change the address it's looking at
  _react2.default.createElement(
    "a",
    { className: "nav-link", href: "/api/logout" },
    "Logout"
  ) : _react2.default.createElement(
    "a",
    { className: "nav-link", href: "/api/auth/google" },
    "Login"
  );
  return _react2.default.createElement(
    "nav",
    { className: "navbar navbar-expand-lg navbar navbar-dark bg-dark" },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/", className: "navbar-brand" },
      "Visual E-commerce"
    ),
    _react2.default.createElement(
      "div",
      {
        className: "collapse navbar-collapse d-flex justify-content-end",
        id: "navbarNav"
      },
      _react2.default.createElement(
        "ul",
        { className: "navbar-nav " },
        _react2.default.createElement(
          "li",
          { className: "nav-item active" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: "nav-link", to: "/products" },
            "Products"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: "nav-link", to: "/users" },
            "Users"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: "nav-link", to: "/admins" },
            "Admins"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          authButton
        )
      )
    )
  );
};

// The only property we care about is whether or not the user is authencated
function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// StaticRouter turns the context prop into a new name, staticContext here
// We have to default the value of staticContext because in the browser, the router is being rendered with the browserRouter, and does not have the contect obj
var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  // After we render the component, if the property not found and it's = to true, we can show that something bad happenend in our app
  staticContext.notFound = true;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Oops! Page not found."
    )
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

var _requireAuth = __webpack_require__(20);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _AddProductCard = __webpack_require__(21);

var _AddProductCard2 = _interopRequireDefault(_AddProductCard);

var _ProductCard = __webpack_require__(22);

var _ProductCard2 = _interopRequireDefault(_ProductCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchProducts();
    }
  }, {
    key: "renderAdmins",
    value: function renderAdmins() {
      return this.props.products.map(function (admin) {
        return _react2.default.createElement(
          "li",
          { className: "list-group-item", key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "h-100" },
        _react2.default.createElement(
          "div",
          { className: "row h-1000" },
          _react2.default.createElement(
            "div",
            { className: "col-2 no-flow side-bar text-center" },
            _react2.default.createElement("i", { className: "far fa-user-circle", id: "admin" }),
            _react2.default.createElement(
              "p3",
              { id: "admin" },
              " Admin"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-10 no-float " },
            _react2.default.createElement("i", { className: "fas fa-tachometer-alt" }),
            _react2.default.createElement(
              "p3",
              { id: "dashboard" },
              " Dashboard"
            ),
            _react2.default.createElement(
              "div",
              { className: "row" },
              this.props.products.map(function (item, i) {
                return _react2.default.createElement(_ProductCard2.default, {
                  item: item,
                  key: i,
                  handleUpdate: _this2.getProducts
                });
              })
            )
          )
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var products = _ref.products;

  return { products: products };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _index.fetchProducts })((0, _requireAuth2.default)(AdminsListPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _index.fetchProducts)());
  }
};
// <AddProductCard
// handleAddProductClick={this.handleAddProductClick}
// getProducts={this.getProducts}
// />

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: "render",
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
          case null:
            return _react2.default.createElement(
              "div",
              null,
              "Loading..."
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddProductCard = function (_React$Component) {
  _inherits(AddProductCard, _React$Component);

  function AddProductCard(props) {
    _classCallCheck(this, AddProductCard);

    var _this = _possibleConstructorReturn(this, (AddProductCard.__proto__ || Object.getPrototypeOf(AddProductCard)).call(this, props));

    _this.state = {
      productInfo: {},
      addProductIsHidden: true
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(AddProductCard, [{
    key: "handleChange",
    value: function handleChange() {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      var information = this.state.productInfo;
      if (name === "qty") {
        value = Number(value);
      }
      information["" + name] = value;
      this.setState({
        productInfo: information
      });
    }
  }, {
    key: "postProduct",
    value: function postProduct(productInfo) {
      var _this2 = this;

      _axios2.default.post("/products", productInfo).then(function () {
        _this2.props.getProducts;
      });
    }
  }, {
    key: "handleAddClick",
    value: function handleAddClick(e) {
      e.preventDefault();
      var productInfo = this.state.productInfo;
      productInfo.photo = "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/image1.jpeg";
      if (!productInfo.photo || !productInfo.name || !productInfo.qty || !productInfo.description) {
        alert("Please fill in all textboxes");
        return;
      }
      this.postProduct(productInfo);
      this.setState({
        addProductIsHidden: !this.state.addProductIsHidden
      });
    }
  }, {
    key: "handleAddProductClick",
    value: function handleAddProductClick(e) {
      e.preventDefault();
      this.setState({
        addProductIsHidden: !this.state.addProductIsHidden
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        "div",
        null,
        this.state.addProductIsHidden && _react2.default.createElement(
          "div",
          { className: "col-sm-3" },
          _react2.default.createElement(
            "div",
            { className: "card card-style product-card safe" },
            _react2.default.createElement("img", {
              className: "card-img-top",
              src: "./images/checkMark2.png",
              onClick: this.handleAddProductClick.bind(this)
            }),
            _react2.default.createElement(
              "div",
              { className: "card-body" },
              _react2.default.createElement(
                "h1",
                { className: "card-title text-center" },
                "0"
              ),
              _react2.default.createElement("p", { className: "card-text card-seperator" }),
              _react2.default.createElement(
                "a",
                { href: "#", className: "btn btn-danger button", name: "dec" },
                _react2.default.createElement("i", { className: "far fa-minus-square " })
              ),
              _react2.default.createElement(
                "a",
                { href: "#", className: "btn btn-success button" },
                _react2.default.createElement("i", { className: "far fa-plus-square" })
              )
            )
          )
        ),
        !this.state.addProductIsHidden && _react2.default.createElement(
          "div",
          { className: "col-sm-3" },
          _react2.default.createElement(
            "div",
            { className: "card card-style product-card safe padding" },
            _react2.default.createElement(
              "form",
              null,
              _react2.default.createElement(
                "div",
                { className: "form-group add-product-padding" },
                _react2.default.createElement(
                  "label",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-tags add-product-icon" })
                ),
                _react2.default.createElement("input", {
                  type: "text",
                  className: "form-control form-control-sm",
                  name: "name",
                  onChange: this.handleChange,
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group add-product-padding" },
                _react2.default.createElement(
                  "label",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-tshirt add-product-icon" })
                ),
                _react2.default.createElement("input", {
                  type: "text",
                  className: "form-control form-control-sm",
                  name: "product_type",
                  onChange: this.handleChange,
                  required: true,
                  requires: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  null,
                  _react2.default.createElement("i", { className: "fab fa-slack-hash add-product-icon" })
                ),
                _react2.default.createElement(
                  "select",
                  {
                    className: "form-control form-control-sm",
                    name: "qty",
                    onChange: this.handleChange
                  },
                  _react2.default.createElement(
                    "option",
                    null,
                    "1"
                  ),
                  _react2.default.createElement(
                    "option",
                    null,
                    "2"
                  ),
                  _react2.default.createElement(
                    "option",
                    null,
                    "3"
                  ),
                  _react2.default.createElement(
                    "option",
                    null,
                    "4"
                  ),
                  _react2.default.createElement(
                    "option",
                    null,
                    "5"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  null,
                  _react2.default.createElement("i", { className: "far fa-comments add-product-icon" })
                ),
                _react2.default.createElement("textarea", {
                  className: "form-control",
                  name: "description",
                  rows: "2",
                  onChange: this.handleChange,
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "form-group" },
                _react2.default.createElement(
                  "label",
                  { className: "mx-auto" },
                  _react2.default.createElement("i", { className: "far fa-images add-product-icon" })
                ),
                _react2.default.createElement("input", {
                  type: "file",
                  className: "form-control-file",
                  id: "add-product-input",
                  name: "photo"
                })
              ),
              _react2.default.createElement(
                "div",
                { id: "center" },
                _react2.default.createElement(
                  "a",
                  {
                    onClick: this.handleAddClick.bind(this),
                    href: "#",
                    className: "btn btn-success",
                    id: "add-product-button"
                  },
                  _react2.default.createElement("i", { className: "far fa-plus-square" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddProductCard;
}(_react2.default.Component);

exports.default = AddProductCard;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyCard = function (_React$Component) {
  _inherits(PropertyCard, _React$Component);

  function PropertyCard(props) {
    _classCallCheck(this, PropertyCard);

    var _this = _possibleConstructorReturn(this, (PropertyCard.__proto__ || Object.getPrototypeOf(PropertyCard)).call(this, props));

    _this.state = {
      lowQty: false,
      currentProduct: {},
      disableMinusButton: false
    };
    _this.postItemUpdate = _this.postItemUpdate.bind(_this);
    // this.getSingleItem = this.getSingleItem.bind(this);
    return _this;
  }

  _createClass(PropertyCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var newState = Object.assign(this.state);
      newState.currentProduct = this.props.item;
      this.setState(newState);
    }

    // getSingleItem(product_id) {
    //   Axios.get("/product/single-item", {
    //     params: { product_id: product_id }
    //   }).then(res => {
    //     var newState = Object.assign(this.state);
    //     newState.products = res.data;
    //     console.log("this is response data: ", res);
    //     this.setState(newState);
    //   });
    // }

  }, {
    key: "postItemUpdate",
    value: function postItemUpdate(currentProduct) {
      _axios2.default.put("/product-update", currentProduct).then(function (data) {
        // this.getSingleItem(product_id);
      });
    }
  }, {
    key: "handleIncreaseInventory",
    value: function handleIncreaseInventory(e) {
      e.preventDefault();
      var newState = Object.assign(this.state);
      var currentQty = this.state.currentProduct.qty;
      // If quantity level is equal to zero, disable minus button and jump out of method.
      if (currentQty === 0 && e.target.name === "dec") {
        newState.disableMinusButton = !newState.disableMinusButton;
        this.setState(newState);
        return;
      } else {
        newState.disableMinusButton = false;
        this.setState({ newState: newState });
      }
      // Decide if we will increment the qty or decrement the qty
      if (e.target.name === "dec") {
        currentQty -= 1;
      } else {
        currentQty += 1;
      }
      newState.currentProduct.qty = currentQty;
      this.postItemUpdate(newState.currentProduct);
    }
  }, {
    key: "render",
    value: function render() {
      var qtyLevelStyle = this.props.item.qty <= 5 ? "low-qty card card-style product-card " : " card card-style product-card safe";
      var _props$item = this.props.item,
          name = _props$item.name,
          photo = _props$item.photo,
          product_id = _props$item.product_id,
          qty = _props$item.qty,
          product_type = _props$item.product_type;

      var decrementButtonClass = "btn btn-danger button";
      if (this.state.disableMinusButton) {
        decrementButtonClass = "btn btn-danger button disabled";
      }
      return _react2.default.createElement(
        "div",
        { className: "col" },
        _react2.default.createElement(
          "div",
          { className: qtyLevelStyle },
          _react2.default.createElement("img", { className: "card-img-top", src: photo }),
          _react2.default.createElement(
            "div",
            { className: "card-body" },
            _react2.default.createElement(
              "h1",
              { className: "card-title text-center" },
              qty
            ),
            _react2.default.createElement("p", { className: "card-text card-seperator" }),
            _react2.default.createElement(
              "a",
              {
                href: "#",
                className: decrementButtonClass,
                name: "dec",
                onClick: this.handleIncreaseInventory.bind(this)
              },
              _react2.default.createElement("i", { className: "far fa-minus-square" })
            ),
            _react2.default.createElement(
              "a",
              {
                href: "#",
                className: "btn btn-success button",
                onClick: this.handleIncreaseInventory.bind(this)
              },
              _react2.default.createElement("i", { className: "far fa-plus-square" })
            )
          )
        )
      );
    }
  }]);

  return PropertyCard;
}(_react2.default.Component);

exports.default = PropertyCard;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _combineReducers = __webpack_require__(26);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  // Becasue we are accessing our api, we need the full url
  var axiosInstance = _axios2.default.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    // We need a default value for our cookie in the case a user makes a request hat is not needed to be authenicated
    // We don't want a header of undefined, if it is, it will crash.
    headers: { cookie: req.get("cookie") || "" }
  });

  var store = (0, _redux.createStore)(_combineReducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _usersReducer = __webpack_require__(27);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _productsReducer = __webpack_require__(28);

var _productsReducer2 = _interopRequireDefault(_productsReducer);

var _authReducer = __webpack_require__(29);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(30);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  products: _productsReducer2.default,
  auth: _authReducer2.default,
  admins: _adminsReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _index = __webpack_require__(1);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);