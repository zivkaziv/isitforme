/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var userConstants = exports.userConstants = {
	  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
	  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
	  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
	
	  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
	  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
	  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
	
	  LOGOUT: 'USERS_LOGOUT',
	
	  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
	  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
	  GETALL_FAILURE: 'USERS_GETALL_FAILURE',
	
	  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
	  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
	  DELETE_FAILURE: 'USERS_DELETE_FAILURE'
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _UserActions = __webpack_require__(25);
	
	// let initialDob = new Date();
	// initialDob.setFullYear(initialDob.getFullYear() - 25);
	// Initial State
	var initialState = { user: {} };
	
	var UserReducer = function UserReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _UserActions.INIT_USER:
	      return _extends({}, action.user);
	    case _UserActions.UPDATE_USER:
	      console.log('update');
	      return _extends({}, action.user);
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	var getUser = exports.getUser = function getUser(state) {
	  return state.user;
	};
	
	// Get post by cuid
	// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
	
	// Export Reducer
	exports.default = UserReducer;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMedicalRightsForUser = exports.getSelectedMedicalRights = exports.getMedicalRights = undefined;
	
	var _WizardActions = __webpack_require__(26);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = {
	  data: [],
	  selected: []
	};
	
	var WizardReducer = function WizardReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _WizardActions.INIT_MEDICAL_RIGHTS:
	      return {
	        data: action.medicalRights,
	        selected: []
	      };
	
	    case _WizardActions.SELECT_MEDICAL_CONDITION:
	      return {
	        data: [].concat(_toConsumableArray(state.data)),
	        selected: [action.medicalCondition].concat(_toConsumableArray(state.selected))
	      };
	
	    case _WizardActions.UNSELECT_MEDICAL_CONDITION:
	      return {
	        data: [].concat(_toConsumableArray(state.data)),
	        selected: state.selected.filter(function (item) {
	          return item.condition !== action.medicalCondition.condition;
	        })
	      };
	    // case DELETE_POST :
	    //   return {
	    //     data: state.data.filter(post => post.cuid !== action.cuid),
	    //   };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getMedicalRights = exports.getMedicalRights = function getMedicalRights(state) {
	  return state.medicalRights.data;
	};
	
	var getSelectedMedicalRights = exports.getSelectedMedicalRights = function getSelectedMedicalRights(state) {
	  return state.medicalRights.selected;
	};
	
	var getMedicalRightsForUser = exports.getMedicalRightsForUser = function getMedicalRightsForUser(state) {
	  var userMedicalRights = [];
	  state.medicalRights.selected.filter(function (selected) {
	    selected.rights.filter(function (right) {
	      isRelevantForUser(right, state.user) ? addMedicalRight(userMedicalRights, right) : '';
	    });
	  });
	  console.log(userMedicalRights);
	  return userMedicalRights;
	};
	
	function addMedicalRight(rights, rightToAdd) {
	  var isAlreadyExist = false;
	  rights.forEach(function (right) {
	    if (right['Medical Right'] === rightToAdd['Medical Right']) {
	      isAlreadyExist = true;
	      right.condition += ' & ' + rightToAdd.condition;
	    }
	  });
	  if (!isAlreadyExist) {
	    rights.push(rightToAdd);
	  }
	}
	
	function isRelevantForUser(right, user) {
	  var isRelevant = false;
	  // console.log(right);
	  // console.log(user);
	  //Medical health provider
	  if (right['Insurance Provider'] === user.healthInsurance) {
	    isRelevant = true;
	    //Smoking condition
	    if (right['Smoking']) {
	      if (right['Smoking'] === 'TRUE' && user.isSmoking) {
	        console.log('Smoking condition ' + right['Medical Right'] + ' - pass');
	      } else {
	        console.log('Smoking condition ' + right['Medical Right'] + ' - failed');
	        return false;
	      }
	    } else {
	      console.log('No smoking condition ' + right['Medical Right']);
	    }
	
	    //Age condition
	    if (right['Age']) {
	      if (right['Age'].min && right['Age'].min <= user.age && right['Age'].max && right['Age'].max >= user.age) {
	        console.log('Age condition ' + right['Medical Right'] + ' - pass');
	      } else {
	        console.log('Age condition ' + right['Medical Right'] + ' - failed');
	        return false;
	      }
	    } else {
	      console.log('No age condition ' + right['Medical Right']);
	    }
	  }
	  return isRelevant;
	}
	
	// Get post by cuid
	// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
	
	// Export Reducer
	exports.default = WizardReducer;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var FETCH_DEVICE = exports.FETCH_DEVICE = 'FETCH_DEVICE';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(17);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(15);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(108);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(19);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(7);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var schema = new Schema({
	  condition: { type: 'String', required: true },
	  rights: { type: 'Object', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('MedicalEntry', schema);

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  // mongoURL: 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' || 'mongodb://localhost:27017/mern-starter',
	  //Test12345
	  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/mazor',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/baseThemes/lightBaseTheme");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDevice = exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(14);
	
	var _mobileDetect = __webpack_require__(115);
	
	var _mobileDetect2 = _interopRequireDefault(_mobileDetect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var mobileDetect = new MobileDetect(window.navigator.userAgent);
	//How to check if the device is mobile or not
	// console.log(mobileDetect.mobile());
	
	// Initial State
	// Import Actions
	var initialState = {
	  showAddPost: false,
	  isMobile: false
	};
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	var getDevice = exports.getDevice = function getDevice(state, userAgent) {
	  if (userAgent) {
	    var mobileDetect = new _mobileDetect2.default(userAgent);
	    state.app.isMobile = mobileDetect.mobile() !== null;
	  } else {
	    state.app.isMobile = false;
	  }
	  return state.app.isMobile;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TERMS_AGREE = exports.UPDATE_USER = exports.INIT_USER = undefined;
	exports.initUser = initUser;
	exports.updateUser = updateUser;
	exports.fetchUser = fetchUser;
	exports.updateUserDetails = updateUserDetails;
	exports.getAge = getAge;
	
	var _apiCaller = __webpack_require__(17);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _universalCookie = __webpack_require__(128);
	
	var _universalCookie2 = _interopRequireDefault(_universalCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	/**
	 * Created by ziv on 11/05/2017.
	 */
	var INIT_USER = exports.INIT_USER = 'INIT_USER';
	var UPDATE_USER = exports.UPDATE_USER = 'UPDATE_USER';
	var TERMS_AGREE = exports.TERMS_AGREE = 'TERMS_AGREE';
	
	function initUser(user) {
	  return {
	    type: INIT_USER,
	    user: user
	  };
	}
	
	function updateUser(user) {
	  return {
	    type: UPDATE_USER,
	    user: user
	  };
	}
	
	function fetchUser() {
	  return function (dispatch) {
	
	    //try to load from cookies otherwise use default
	    var cookies = new _universalCookie2.default();
	    var user = cookies.get('mzr_usr');
	    if (!user) {
	      user = getDefaultUser();
	    }
	    if (!user.age) {
	      user.age = getAge(user.dob);
	    }
	    dispatch(initUser(user));
	  };
	}
	
	function updateUserDetails(userToUpdate) {
	  return function (dispatch) {
	    //try to load from cookies otherwise use default
	    var cookies = new _universalCookie2.default();
	    cookies.set('mzr_usr', userToUpdate);
	    userToUpdate.age = getAge(userToUpdate.dob);
	    dispatch(updateUser(userToUpdate));
	  };
	}
	
	function getDefaultUser() {
	  var initialDob = new Date();
	  initialDob.setFullYear(initialDob.getFullYear() - 40);
	  return {
	    gender: 'female',
	    isSmoking: false,
	    dob: initialDob,
	    healthInsurance: 'MEDICARE',
	    weight: 150,
	    agreed_terms: false
	  };
	}
	
	function getAge(dateString) {
	  var today = new Date();
	  var birthDate = new Date(dateString);
	  var age = today.getFullYear() - birthDate.getFullYear();
	  var m = today.getMonth() - birthDate.getMonth();
	  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
	    age--;
	  }
	  return age;
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECT_MEDICAL_CONDITION = exports.SELECT_MEDICAL_CONDITION = exports.INIT_MEDICAL_RIGHTS = undefined;
	exports.fetchMedicalRights = fetchMedicalRights;
	exports.selectCondition = selectCondition;
	exports.unselectCondition = unselectCondition;
	
	var _apiCaller = __webpack_require__(17);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var INIT_MEDICAL_RIGHTS = exports.INIT_MEDICAL_RIGHTS = 'INIT_MEDICAL_RIGHTS'; /**
	                                                                                * Created by ziv on 11/05/2017.
	                                                                                */
	var SELECT_MEDICAL_CONDITION = exports.SELECT_MEDICAL_CONDITION = 'SELECT_MEDICAL_CONDITION';
	var UNSELECT_MEDICAL_CONDITION = exports.UNSELECT_MEDICAL_CONDITION = 'UNSELECT_MEDICAL_CONDITION';
	
	function initMedicalRights(medicalRights) {
	  return {
	    type: INIT_MEDICAL_RIGHTS,
	    medicalRights: medicalRights
	  };
	}
	
	function selectMedicalCondition(medicalCondition) {
	  return {
	    type: SELECT_MEDICAL_CONDITION,
	    medicalCondition: medicalCondition
	  };
	}
	
	function unselectMedicalCondition(medicalCondition) {
	  return {
	    type: UNSELECT_MEDICAL_CONDITION,
	    medicalCondition: medicalCondition
	  };
	}
	
	function fetchMedicalRights() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('medicalrights').then(function (res) {
	      // console.log(res.rights);
	      res.medicalEntry.map(function (conditionEntry) {
	        conditionEntry.rights.map(function (medicalRight) {
	          medicalRight.condition = conditionEntry.condition;
	        });
	      });
	      res.medicalEntry.sort();
	      dispatch(initMedicalRights(res.medicalEntry));
	    });
	  };
	}
	
	function selectCondition(medicalCondition) {
	  return function (dispatch) {
	    // console.log(res.rights);
	    dispatch(selectMedicalCondition(medicalCondition));
	  };
	}
	
	function unselectCondition(medicalCondition) {
	  return function (dispatch) {
	    // console.log(res.rights);
	    dispatch(unselectMedicalCondition(medicalCondition));
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(3);
	
	var _intl = __webpack_require__(104);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(105);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(106);
	
	var _en = __webpack_require__(120);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(69);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(107);
	
	var _fr = __webpack_require__(121);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(70);
	
	var _fr4 = _interopRequireDefault(_fr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);
	
	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userActions = undefined;
	
	var _user = __webpack_require__(8);
	
	var _user2 = __webpack_require__(90);
	
	var _alert = __webpack_require__(71);
	
	// import { history } from '../util/history';
	
	var userActions = exports.userActions = {
	  login: login,
	  logout: logout,
	  register: register,
	  getAll: getAll,
	  delete: _delete
	};
	
	function login(username, password) {
	  return function (dispatch) {
	    dispatch(request({ username: username }));
	
	    _user2.userService.login(username, password).then(function (user) {
	      dispatch(success(user));
	      // history.push('/');
	    }, function (error) {
	      dispatch(failure(error));
	      dispatch(_alert.alertActions.error(error));
	    });
	  };
	
	  function request(user) {
	    return { type: _user.userConstants.LOGIN_REQUEST, user: user };
	  }
	  function success(user) {
	    return { type: _user.userConstants.LOGIN_SUCCESS, user: user };
	  }
	  function failure(error) {
	    return { type: _user.userConstants.LOGIN_FAILURE, error: error };
	  }
	}
	
	function logout() {
	  _user2.userService.logout();
	  return { type: _user.userConstants.LOGOUT };
	}
	
	function register(user) {
	  return function (dispatch) {
	    dispatch(request(user));
	
	    _user2.userService.register(user).then(function (user) {
	      dispatch(success());
	      // history.push('/login');
	      dispatch(_alert.alertActions.success('Registration successful'));
	    }, function (error) {
	      dispatch(failure(error));
	      dispatch(_alert.alertActions.error(error));
	    });
	  };
	
	  function request(user) {
	    return { type: _user.userConstants.REGISTER_REQUEST, user: user };
	  }
	  function success(user) {
	    return { type: _user.userConstants.REGISTER_SUCCESS, user: user };
	  }
	  function failure(error) {
	    return { type: _user.userConstants.REGISTER_FAILURE, error: error };
	  }
	}
	
	function getAll() {
	  return function (dispatch) {
	    dispatch(request());
	
	    _user2.userService.getAll().then(function (users) {
	      return dispatch(success(users));
	    }, function (error) {
	      return dispatch(failure(error));
	    });
	  };
	
	  function request() {
	    return { type: _user.userConstants.GETALL_REQUEST };
	  }
	  function success(users) {
	    return { type: _user.userConstants.GETALL_SUCCESS, users: users };
	  }
	  function failure(error) {
	    return { type: _user.userConstants.GETALL_FAILURE, error: error };
	  }
	}
	
	// prefixed function name with underscore because delete is a reserved word in javascript
	function _delete(id) {
	  return function (dispatch) {
	    dispatch(request(id));
	
	    _user2.userService.delete(id).then(function (user) {
	      dispatch(success(id));
	    }, function (error) {
	      dispatch(failure(id, error));
	    });
	  };
	
	  function request(id) {
	    return { type: _user.userConstants.DELETE_REQUEST, id: id };
	  }
	  function success(id) {
	    return { type: _user.userConstants.DELETE_SUCCESS, id: id };
	  }
	  function failure(id, error) {
	    return { type: _user.userConstants.DELETE_FAILURE, id: id, error: error };
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var alertConstants = exports.alertConstants = {
	  SUCCESS: 'ALERT_SUCCESS',
	  ERROR: 'ALERT_ERROR',
	  CLEAR: 'ALERT_CLEAR'
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(123);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(125);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(124);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  {
	    toggleVisibilityKey: 'ctrl-h',
	    changePositionKey: 'ctrl-w',
	    defaultIsVisible: false },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(27);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Checkbox");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Dialog");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconButton");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconMenu");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RadioButton");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Toggle");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	IntlWrapper.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  intl: _react.PropTypes.object.isRequired
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _App = __webpack_require__(72);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Login = __webpack_require__(75);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Register = __webpack_require__(83);
	
	var _Register2 = _interopRequireDefault(_Register);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	/* eslint-disable global-require */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(82);
	  __webpack_require__(81);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, {
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(2).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(129).default);
	      }).bind(null, __webpack_require__));
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/wizard',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(130).default);
	      }).bind(null, __webpack_require__));
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/login',
	    component: _Login2.default
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/register',
	    component: _Register2.default
	  })
	);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(40);
	
	var _reduxThunk = __webpack_require__(126);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(30);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(85);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _medicalEntry2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var dummyRights = {
	      "Medical_Condition": "OSA1",
	      "rights": [{
	        "Medical_Right": "hopa",
	        "Medical_Right_Description": "Bla",
	        "description": "CPAP (continuous positive airway pressure)",
	        "filters": [{
	          "name": "Age",
	          "filter_type": "date",
	          "min": 10,
	          "max": 30
	        }, {
	          "name": "Weight",
	          "filter_type": "range",
	          "min": 10,
	          "max": 30
	        }, {
	          "name": "Smoking",
	          "filter_type": "boolean",
	          "value": false
	        }, {
	          "name": "Family_Background",
	          "filter_type": "boolean",
	          "value": true
	        }]
	      }]
	    };
	
	    var me1 = new _medicalEntry2.default({ condition: 'OSA1', rights: dummyRights });
	
	    _medicalEntry2.default.create([me1], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _medicalEntry = __webpack_require__(18);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _medicalrights = __webpack_require__(92);
	
	var MedicalRightsController = _interopRequireWildcard(_medicalrights);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by ziv on 22/04/2017.
	 */
	var router = new _express.Router();
	
	// Get all conditions
	router.route('/medicalConditions').get(MedicalRightsController.getAllConditions);
	
	// Get all rights
	router.route('/medicalright').get(MedicalRightsController.getMedicalRight);
	router.route('/medicalrights').get(MedicalRightsController.getMedicalRights);
	router.route('/medicalrightsmock').get(MedicalRightsController.getMedicalRightsMock);
	
	// Get one post by cuid
	router.route('/medicalrights/:condition').get(MedicalRightsController.getMedicalRights);
	
	exports.default = router;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _populateDB = __webpack_require__(93);
	
	var PopulateDBController = _interopRequireWildcard(_populateDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all rights from DB and save to DB
	router.route('/populateDB').get(PopulateDBController.populateDB);
	
	exports.default = router;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _post = __webpack_require__(94);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _user = __webpack_require__(95);
	
	var userController = _interopRequireWildcard(_user);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all rights from DB and save to DB
	router.route('/users/login').get(userController.login);
	router.route('/users/register').post(userController.register);
	
	exports.default = router;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(99);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(21);
	var cssnext = __webpack_require__(117);
	var postcssFocus = __webpack_require__(118);
	var postcssReporter = __webpack_require__(119);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  node: {
	    dns: 'mock',
	    net: 'mock'
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _MedicalDiagnosticItem = __webpack_require__(84);
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _reactSearchInput = __webpack_require__(122);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _RaisedButton = __webpack_require__(61);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Dialog = __webpack_require__(34);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(11);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _getMuiTheme = __webpack_require__(23);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(22);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _WizardReducer = __webpack_require__(12);
	
	var _StepNumber = {
	  "search-input": "_8botdKKhaM9xtYcWvL4jG"
	};
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//  Material
	
	
	// Import Selectors
	
	
	// Styles
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350
	    // maxWidth: 679,
	    // overflow:'auto',
	  },
	  medicalDiagnosticsContainer: {
	    display: 'flex'
	  },
	  searchContainer: {
	    height: 383,
	    overflow: 'auto'
	  },
	  cantFindContainer: {
	    textAlign: 'center',
	    width: '100%'
	  },
	  dialogContentStyle: {
	    width: '50%',
	    maxWidth: 'none'
	  }
	};
	
	var KEYS_TO_FILTERS = ['condition'];
	
	var StepNumber1 = function (_Component) {
	  _inherits(StepNumber1, _Component);
	
	  function StepNumber1(props) {
	    _classCallCheck(this, StepNumber1);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber1.__proto__ || Object.getPrototypeOf(StepNumber1)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ dialogOpen: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.handleCantFindDialogOpen = function () {
	      _this.context.mixpanel.track('Wizard step button', { 'ab_version': 'v1', 'step': '1', 'button': "can't find" });
	      _this.setState({ cantFindDialogOpen: true });
	    };
	
	    _this.handleCantFindDialogClose = function () {
	      _this.setState({ cantFindDialogOpen: false });
	    };
	
	    _this.state = {
	      searchTerm: '',
	      dialogOpen: false,
	      cantFindDialogOpen: false
	    };
	
	    _this.searchUpdated = _this.searchUpdated.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.handleCantFindDialogOpen = _this.handleCantFindDialogOpen.bind(_this);
	    _this.handleCantFindDialogClose = _this.handleCantFindDialogClose.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber1, [{
	    key: 'isValidated',
	    value: function isValidated() {
	      console.log('check is validate');
	      var isValid = false;
	      for (var index = 0; index < this.props.medicalRights.length; index++) {
	        if (this.props.medicalRights[index].isSelected) {
	          isValid = true;
	          break;
	        }
	      }
	      if (!isValid) {
	        this.handleOpen();
	      }
	
	      return isValid;
	    }
	  }, {
	    key: 'searchUpdated',
	    value: function searchUpdated(term) {
	      console.log(term);
	      this.setState({ searchTerm: term });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '1' });
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var filteredMedicalDiagnostics = this.props.medicalRights.filter((0, _reactSearchInput.createFilter)(this.state.searchTerm, KEYS_TO_FILTERS));
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Ok',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleClose
	      })];
	
	      var actionsCantFind = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'OK',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleCantFindDialogClose
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step1', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.searchContainer },
	            _react2.default.createElement(_reactSearchInput2.default, { placeholder: 'Search for your medical diagnostic',
	              className: _StepNumber2.default['search-input'],
	              onChange: this.searchUpdated }),
	            filteredMedicalDiagnostics.map(function (medicalRight, i) {
	              return _react2.default.createElement(_MedicalDiagnosticItem2.default, { key: i, medicalRight: medicalRight });
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.cantFindContainer },
	            _react2.default.createElement(_FlatButton2.default, {
	              label: 'Can\'t find proper diagnostic',
	              primary: true,
	              fullWidth: true,
	              keyboardFocused: false,
	              contentStyle: styles.dialogContentStyle,
	              onTouchTap: this.handleCantFindDialogOpen
	            })
	          ),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'Can\'t find',
	              actions: actionsCantFind,
	              modal: true,
	              open: this.state.cantFindDialogOpen,
	              contentStyle: styles.dialogContentStyle,
	              onRequestClose: this.handleCantFindDialogClose },
	            'Sorry, but we aren\'t support it yet...'
	          ),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'Please choose',
	              actions: actions,
	              modal: true,
	              open: this.state.dialogOpen,
	              onRequestClose: this.handleClose
	            },
	            'You must select at least one medical diagnostic'
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber1;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	StepNumber1.propTypes = {
	  medicalRight: _propTypes2.default.any
	};
	
	StepNumber1.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	StepNumber1.contextTypes = {
	  router: _react2.default.PropTypes.object,
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber1);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _DatePicker = __webpack_require__(112);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RadioButton = __webpack_require__(37);
	
	var _SelectField = __webpack_require__(67);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(13);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Checkbox = __webpack_require__(33);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _TextField = __webpack_require__(11);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _UserReducer = __webpack_require__(9);
	
	var _UserActions = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material design
	
	
	// Import Selectors
	
	
	// Import Actions
	
	
	// Styles
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    // maxWidth: 679,
	    overflow: 'auto'
	  },
	  title: {
	    display: 'inline-flex',
	    width: '100%'
	  },
	  personalDetails: {
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  block: {
	    maxWidth: 250
	  },
	  radioButton: {
	    marginBottom: 16
	  },
	  toggle: {
	    marginBottom: 16
	  },
	
	  userDetailSection: {
	    display: 'flex',
	    borderBottom: '1px solid #AAA',
	    padding: '7px 0px',
	    fontSize: '16px',
	    alignItems: 'center'
	  },
	
	  userDetailSectionWithNoAlign: {
	    display: 'flex',
	    borderBottom: '1px solid #AAA',
	    padding: '4px 0px',
	    fontSize: '16px'
	  },
	
	  userDetailText: {
	    minWidth: '25%',
	    fontWeight: 'bold',
	    position: 'relative',
	    top: '2px'
	  },
	
	  userDetailNote: {
	    fontSize: '8px'
	  },
	
	  // Gender
	  genderRadioButton: {
	    // display:'flex'
	  }
	};
	
	var StepNumber2 = function (_Component) {
	  _inherits(StepNumber2, _Component);
	
	  function StepNumber2(props) {
	    _classCallCheck(this, StepNumber2);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber2.__proto__ || Object.getPrototypeOf(StepNumber2)).call(this, props));
	
	    _this.sendUserDetails = function () {
	      _this.context.mixpanel.track('User details', {
	        'gender': _this.props.user.gender,
	        'is_smoking': _this.props.user.isSmoking,
	        'dob': new Date(_this.props.user.dob),
	        'health_insurance': _this.props.user.healthInsurance,
	        'weight': _this.props.user.weight
	      });
	    };
	
	    _this.state = {};
	
	    //Binds
	    _this.handleHealthInsuranceChange = _this.handleHealthInsuranceChange.bind(_this);
	    _this.handleGenderChange = _this.handleGenderChange.bind(_this);
	    _this.handleDOBChange = _this.handleDOBChange.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    _this.updateState = _this.updateState.bind(_this);
	    _this.handleWeightChange = _this.handleWeightChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber2, [{
	    key: 'isValidated',
	    value: function isValidated() {
	      (0, _UserActions.updateUserDetails)();
	      //send them with mixpanel
	      this.sendUserDetails();
	      return true;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '2' });
	    }
	  }, {
	    key: 'handleHealthInsuranceChange',
	    value: function handleHealthInsuranceChange(event, index, value) {
	      console.log('the new value is' + value);
	      this.props.user.healthInsurance = value;
	      this.updateState();
	    }
	  }, {
	    key: 'handleGenderChange',
	    value: function handleGenderChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.gender = value;
	      this.updateState();
	    }
	  }, {
	    key: 'handleDOBChange',
	    value: function handleDOBChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.dob = value;
	      this.updateState();
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState() {
	      this.props.dispatch((0, _UserActions.updateUserDetails)(this.props.user));
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'handleIsSmokingChange',
	    value: function handleIsSmokingChange(e, checked) {
	      this.props.user.isSmoking = !this.props.user.isSmoking;
	      this.updateState();
	    }
	  }, {
	    key: 'handleWeightChange',
	    value: function handleWeightChange(e, value) {
	      console.log('the new weight is' + value);
	      this.props.user.weight = value;
	      console.log(this.props.user);
	      this.updateState();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step2', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'section',
	          { style: styles.title },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'We need a few more details to help you'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-12', style: styles.personalDetails },
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSectionWithNoAlign },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Gender'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                _RadioButton.RadioButtonGroup,
	                { name: 'gender',
	                  defaultSelected: this.props.user.gender,
	                  valueSelected: this.props.user.gender,
	                  style: styles.genderRadioButton,
	                  onChange: this.handleGenderChange },
	                _react2.default.createElement(_RadioButton.RadioButton, {
	                  value: 'male',
	                  label: 'Male',
	                  style: styles.radioButton
	                }),
	                _react2.default.createElement(_RadioButton.RadioButton, {
	                  value: 'female',
	                  label: 'Female',
	                  style: styles.radioButton
	                })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSection },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Date of birth'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(_DatePicker2.default, {
	                hintText: 'Select your birth date',
	                defaultDate: new Date(this.props.user.dob),
	                onChange: this.handleDOBChange,
	                formatDate: null
	              })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSection },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Health insurance'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                _SelectField2.default
	                // floatingLabelText="Health insurance"
	                ,
	                { value: this.props.user.healthInsurance,
	                  onChange: this.handleHealthInsuranceChange
	                },
	                _react2.default.createElement(_MenuItem2.default, { value: 'MEDICARE', primaryText: 'Medicare' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'UNITED_HEALTH', primaryText: 'Unitedhealth Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'WELL_POINT', primaryText: 'Wellpoint Inc. Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'KAISER', primaryText: 'Kaiser Foundation Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HUMANA', primaryText: 'Humana Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'AETNA', primaryText: 'Aetna Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HCSC', primaryText: 'HCSC Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'CIGNA_HEALTH', primaryText: 'Cigna Health Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HIGHMARK', primaryText: 'Highmark Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'BLUE_CROSS_SHILD', primaryText: 'Blue Cross Blue Shield Group' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.userDetailNote },
	                'If you can\'t find your insurance company it\'s must be because we are still working on analyze this data...'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSectionWithNoAlign },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Critical information'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                'div',
	                { style: styles.block },
	                _react2.default.createElement(_Checkbox2.default, {
	                  label: 'Smoking',
	                  checked: !!this.props.user.isSmoking,
	                  onCheck: function onCheck(e, checked) {
	                    return _this2.handleIsSmokingChange(e, checked);
	                  } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.block },
	                _react2.default.createElement(_TextField2.default, {
	                  floatingLabelText: 'Your weight in lb',
	                  hintText: 'Weight',
	                  value: this.props.user.weight,
	                  onChange: this.handleWeightChange
	                })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber2;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber2.propTypes = {
	  user: _propTypes2.default.any
	};
	
	StepNumber2.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber2);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _UserReducer = __webpack_require__(9);
	
	var _Toggle = __webpack_require__(38);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Dialog = __webpack_require__(34);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	// Material
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    minWidth: 317
	    // maxWidth: 679,
	    // overflow:'auto',
	  },
	  termsSection: {
	    maxHeight: 383,
	    overflow: 'auto',
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  toggle: {
	    // marginBottom: 15,
	    marginTop: 15,
	    maxWidth: 250,
	    display: 'inline-flex',
	    width: '100%'
	  }
	};
	
	var StepNumber3 = function (_Component) {
	  _inherits(StepNumber3, _Component);
	
	  function StepNumber3(props) {
	    _classCallCheck(this, StepNumber3);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber3.__proto__ || Object.getPrototypeOf(StepNumber3)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ dialogOpen: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.state = {
	      dialogOpen: false
	    };
	
	    //Binds
	    _this.stateChanged = _this.stateChanged.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber3, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '3' });
	    }
	  }, {
	    key: 'isValidated',
	    value: function isValidated() {
	      console.log(this.state);
	      if (!this.props.user.agreed_terms) {
	        this.handleOpen();
	      }
	      return this.props.user.agreed_terms;
	    }
	  }, {
	    key: 'stateChanged',
	    value: function stateChanged(value, isInputChecked) {
	      this.props.user.agreed_terms = isInputChecked;
	      this.setState({ user: this.props.user });
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Ok',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleClose
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step2', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'section',
	          { style: styles.termsSection },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Terms of Use'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Last Updated Date: August 30th, 2016'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'PLEASE READ THIS TERMS OF USE AGREEMENT (THE ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CTERMS\u201D'
	              ),
	              ') CAREFULLY. BY ACCESSING OR USING THIS WEBSITE OR ANY OTHER WEBSITES OF INSTRUCTURE, INC. (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CINSTRUCTURE\u201D'
	              ),
	              ') WITH LINKS TO THIS AGREEMENT (COLLECTIVELY, THE ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CWEBSITE\u201D'
	              ),
	              ') IN ANY WAY, INCLUDING USING THE SERVICES ENABLED VIA THE WEBSITE (THE ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CSERVICES\u201D'
	              ),
	              ') BY INSTRUCTURE OR USERS OF THE SITE (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CUSERS\u201D'
	              ),
	              '), CLICKING THE \u201CI ACCEPT\u201D CHECK BOX, OR MERELY BROWSING THE WEBSITE, YOU REPRESENT THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS.  ',
	              _react2.default.createElement(
	                'b',
	                null,
	                'IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS, YOU MAY NOT ACCESS OR USE THIS WEBSITE OR THE SERVICES.'
	              ),
	              ' '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'THESE TERMS INCLUDE A CLASS ACTION WAIVER AND WAIVER OF JURY TRIALS, AND REQUIRE BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'The Services include, but are not limited to, a learning management system that entities (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CEntities\u201D'
	              ),
	              ') may subscribe to and provide to their instructors and learners (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CInstructors\u201D'
	              ),
	              ' and ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CLearners\u201D'
	              ),
	              ') in connection with courses (each, a ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CCourse\u201D'
	              ),
	              '). Instructure provides an account that enables a designated User to manage the Services, manage Learner and Instructor access to the Services, and provide general support on behalf of an Entity. \u201CUser\u201D means any user of the Services, including Learners, and Instructors. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'PLEASE NOTE THAT THE TERMS ARE SUBJECT TO CHANGE BY INSTRUCTURE IN ITS SOLE DISCRETION AT ANY TIME.  When changes are made, Instructure will make a new copy of the Terms available at the Website.  We will also update the \u201CLast Updated\u201D date at the top of the Terms.  If we make any material changes, and you have registered to use the Services, we will also send an e-mail to you at the last e-mail address you provided to us.  Any changes to the Terms will be effective immediately for new Users of the Website or Services and will be effective thirty (30) days after posting of notice of such changes on the Website for existing User.  Instructure may require you to provide consent to the updated Terms in a specified manner before further use of the Website or the Services is permitted.  If you do not agree to any change(s) after receiving a notice of such change(s), you shall stop using the Website and/or the Services.  Otherwise, your continued use of the Website and/or the Services constitutes your acceptance of such change(s).  PLEASE REGULARLY CHECK THE WEBSITE TO VIEW THE THEN-CURRENT TERMS. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '1. Use of the Services and Instructure Properties.'
	              ),
	              '  The Website, the Services, and the information and content made available (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CContent\u201D'
	              ),
	              ') by Instructure on the Website and in the Services (collectively, the ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CInstructure Properties\u201D'
	              ),
	              ') are protected by copyright laws throughout the world.  Subject to the Terms, Instructure grants you a limited license to reproduce portions of the Instructure Properties for the sole purpose of using the Services for your personal purposes or, in the event you are an Instructor, your educational purposes. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '1.1 Application License.'
	              ),
	              '  Instructure also provides a mobile application (the ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CApplication\u201D'
	              ),
	              ') for use with the Services. Your use of the Application is governed by the End User License Agreement that accompanies the Application in the marketplace where you download it. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '1.2 Certain Restrictions.'
	              ),
	              '  The rights granted to you in the Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, reproduce, distribute, host or otherwise commercially exploit the Instructure Properties, (b) you shall not use framing techniques to enclose any trademark, logo, or other Instructure Properties; (c) you shall not use any metatags or other \u201Chidden text\u201D using Instructure\u2019s name or trademarks; (d) you shall not modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any part of the Instructure Properties except to the extent the foregoing restrictions are expressly prohibited by applicable law; (e) you shall not use any manual or automated software, devices, or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools, or the like) to \u201Cscrape\u201D or download data from any web pages contained in the Website; (f) except as expressly stated herein, no part of the Instructure Properties may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means; and (g) you shall not remove or destroy any copyright notices or other proprietary markings contained on or in the Instructure Properties. Any future release, update or other addition to the Instructure Properties shall be subject to the Terms.  Instructure, its suppliers and service providers reserve all rights not granted in the Terms.  Any unauthorized use of the Instructure Properties terminates the licenses granted by Instructure pursuant to the Terms. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2. Registration.'
	              ),
	              ' In order to access certain features of the Instructure Properties you must create an account (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CAccount\u201D'
	              ),
	              ').  Certain features are only available to Instructor Accounts.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2.1 Instructor Accounts.'
	              ),
	              '  If you an Instructor, Instructure will provide you with access to an Instructor Account, provided that you (1) provide any necessary information about you and/or your school when registering the Account (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CRegistration Data\u201D'
	              ),
	              ') and (2) accept the Terms. Using your Instructor Account, you may create invitations for Learner Accounts by generating invite codes that you may provide to your Students.  You will be responsible for any activities, including any violation of the Terms that occur under Student Accounts created using your Instructor Account.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2.2 Learner Accounts.'
	              ),
	              ' To create a Learner Account, you must (1) be provided with access to an account invite code by an Instructor, (2) provide us with any Registration Data requested in the registration form, and (3) accept the Terms.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2.3 Registration Data.'
	              ),
	              '  In registering for the Services, you agree to (1) provide true, current, and complete Registration Data; and (2) maintain and promptly update the Registration Data to keep it true, current, and complete. You are responsible for all activities that occur under your Account. You may not share your Account or password with anyone, and you agree to notify Instructure immediately of any unauthorized use of your password or any other breach of security.  You agree not to create or access an Account using a false identity or information, or on behalf of someone other than yourself.  You agree that you shall not have more than one Account at any given time.  You agree not to create an Account or use the Instructure Properties if you have been previously removed by Instructure, or if you have been previously banned from any of the Instructure Properties.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2.4 Social Networking Services.'
	              ),
	              ' We may permit you to login to the Services with your login credentials from certain social networking sites (e.g., Facebook) (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CSNS\u201D'
	              ),
	              '). If you log in or otherwise associate your Account with your login credentials from such SNS, we may receive information about you from such SNS, in accordance with the terms and conditions (e.g., terms of use and privacy policy) of the SNS (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CSNS Terms\u201D'
	              ),
	              '). If you elect to share your information with these SNS, we will share information with them in accordance with your election. The SNS Terms of such SNS will apply to the information we disclose to them.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '2.5 Necessary Equipment and Software.'
	              ),
	              '  You must provide all equipment and software necessary to connect to the Instructure Properties, including but not limited to, a mobile device that is suitable to connect with and use the Application.  You are solely responsible for any fees, including Internet connection or mobile fees, that you incur when accessing the Instructure Properties.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '3. Payment Terms.'
	              ),
	              ' Some of the Courses offered as part of the Services are available to Learners in exchange for a fee. You may purchase such Courses by following the directions on the Site.  If you purchase a Course, you agree to pay the then-current applicable Course fee listed on the Site (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CCourse Fees\u201D'
	              ),
	              ') and Instructure will bill the credit card or PayPal account you submit in purchasing the Course.  All payments are refundable according to Instructure\u2019s standard refund policy or the refund policy posted on the applicable Course enrollment page, if any.  In the event of a conflict between Instructure\u2019s standard refund policy and the refund policy posted on a Course enrollment page, the Course enrollment page will control. You hereby authorize Instructure to bill your credit card or PayPal account, as applicable, for the Course Fees as described above.  Course Fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you are responsible for payment of all such taxes, levies or duties. If any Course Fee cannot be charged to your credit card or PayPal account for any reason, Instructure may provide you, via email, notice of such non-payment and a link for you to update your payment information.  If such non-payment is not remedied within seven (7) days after receiving such notice of non-payment, Instructure may terminate your access to the applicable Course'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '4. Responsibility for Content.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '4.1 Types of Content.'
	              ),
	              '  You acknowledge that all Content, including the Instructure Properties, is the sole responsibility of the party from whom such Content originated.  This means that you, and not Instructure, are entirely responsible for all Content that you upload, post, e-mail, transmit or otherwise make available (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CMake Available\u201D'
	              ),
	              ') through the Instructure Properties (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CYour Content\u201D'
	              ),
	              ').  Other Users of the Instructure Properties, and not Instructure, are similarly responsible for all Content such other Users Make Available through the Instructure Properties (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CUser Content\u201D'
	              ),
	              ').'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '4.2 No Obligation to Pre-Screen Content.'
	              ),
	              '  You acknowledge that Instructure has no obligation to pre-screen Content (including, but not limited to, Your Content and User Content), although Instructure reserves the right in its sole discretion to pre-screen, refuse, or remove any Content that (1) violates any law or regulation, (2) violates these Terms, including the User Code of Conduct set forth in Section 5.4 hereof, and/or (3) otherwise creates liability for Instructure.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5. Ownership.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5.1 Instructure Properties.'
	              ),
	              '  Except with respect to Your Content and User Content, you agree that Instructure and its suppliers own all rights, title and interest in the Instructure Properties.  Instructure\u2019s name and other related graphics, logos, service marks and trade names used on or in connection with the Instructure Properties are the trademarks of Instructure and may not be used without permission in connection with any third-party products or services.  Other trademarks, service marks and trade names that may appear on or in the Instructure Properties are the property of their respective owners.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5.2 Your Content.'
	              ),
	              ' Your Content shall at all times remain your sole property and you agree that you have no right, title or interest in or to any other Content that appears on or in the Instructure Properties. You represent that you have all necessary right, power and authority to post Your Content to the Instructure Properties. You agree to allow Instructure and its applicable contractors to freely host, reproduce, transmit, modify, display and otherwise use Your Content (in whole or in part) as reasonably necessary to provide the Services to you, and in accordance with Instructure\u2019s agreement with your Entity, if applicable.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5.3 Your Account.'
	              ),
	              '  Notwithstanding anything contained herein to the contrary, by submitting Your Content to any forums, comments or any other area on or in the Instructure Properties, you hereby expressly permit Instructure to identify you by your username as the contributor of Your Content in any publication in any form, media, or technology now known or later developed in connection with Your Content. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5.4 User Code of Conduct.'
	              ),
	              '  As a condition of use, you agree not to use the Instructure Properties for any purpose that is prohibited by the Terms or by applicable law. Do not post, or permit others to post, content on the Instructure Properties or on your profile that (i) encourages illegal activities, is fraudulent, or is unlawful; (ii) insults, defames, harasses, or threatens others; (iii) violates the copyright or intellectual property or privacy rights of others; (iv) contains obscene, vulgar, pornographic, or libelous material; (v) harms or impersonates others, including other Users; or (vi) advertises or sells a product or service. Do not reproduce content from your Course or other Learners unless allowed by the express copyright terms laid out by the Instructor (e.g. Creative Commons). Do not share the solutions to assignments with others unless this is expressly authorized by the Instructor. Do not submit the work of others as your own work. Respect the privacy of other Users. Respect the diversity of opinions and cultures that will be presented by other Users. Do not attempt or engage in, any potentially harmful acts that are directed against the Instructure Properties, including but not limited to violating or attempting to violate any security features of the Instructure Properties, introducing viruses, worms, or similar harmful code into the Instructure Properties, or interfering or attempting to interfere with use of the Instructure Properties by any other user, host or network, including by means of overloading, \u201Cflooding,\u201D \u201Cspamming,\u201D \u201Cmail bombing,\u201D or \u201Ccrashing\u201D the Instructure Properties.  If you believe that someone has violated this code of conduct, begin by notifying the Instructor of the Course. If the issue is not addressed by the Instructor to your satisfaction, contact ',
	              _react2.default.createElement(
	                'a',
	                { href: 'mailto:conduct@canvas.net', target: '_blank' },
	                'conduct@canvas.net'
	              ),
	              ' with your concerns.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '5.5 Feedback.'
	              ),
	              '  You agree that submission of any ideas, suggestions, documents, and/or proposals to Instructure through its suggestion, feedback, wiki, forum or similar pages (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CFeedback\u201D'
	              ),
	              ') is at your own risk and that Instructure has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback.  You represent and warrant that you have all rights necessary to submit the Feedback.  You hereby grant to Instructure a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of the Instructure Properties.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '6. Investigations.'
	              ),
	              '  Instructure may, but is not obligated to, monitor or review the Instructure Properties and Content at any time.  Without limiting the foregoing, Instructure shall have the right, in its sole discretion, to remove any of Your Content for any reason (or no reason), including if such Content violates the Terms or any applicable law.  Although Instructure does not generally monitor user activity occurring in connection with the Instructure Properties, if Instructure becomes aware of any possible violations by you of any provision of the Terms, Instructure reserves the right to investigate such violations, and Instructure may, at its sole discretion, terminate your license to use the Instructure Properties, or change, alter or remove Your Content, in whole or in part.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '7. Interactions with Other Users.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '7.1 User Responsibility.'
	              ),
	              '  You are solely responsible for your interactions with other Users of the Services and any other parties with whom you interact through the Services; provided, however, that Instructure reserves the right, but has no obligation, to intercede in disputes among Users.  You agree that Instructure will not be responsible for any liabilities incurred as the result of such interaction.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '7.2 Content Provided by Other Users.'
	              ),
	              '  The Instructure Properties may contain User Content provided by other Users.  Instructure is not responsible for and does not control User Content.  Instructure has no obligation to review or monitor, and does not approve, endorse or make any representations or warranties with respect to User Content.  You use all User Content and interact with other Users at your own risk.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '8. Third-Party Websites.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '8.1 Third-Party Websites.'
	              ),
	              '  The Instructure Properties may contain links to third-party websites (',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CThird-Party Websites\u201D'
	              ),
	              ').  When you click on a link to a Third-Party Website, we will not warn you that you have left the Instructure Properties and are subject to separate terms and conditions or privacy policies.  Such Third-Party Websites are not under the control of Instructure.  Instructure is not responsible for any Third-Party Websites and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites, or their products or services.  You use all links in Third-Party Websites at your own risk. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third-party. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '8.2 App Stores.'
	              ),
	              '  You acknowledge and agree that the availability of the Application and the Services is dependent on the third-party from which you received the Application, e.g., the Apple or Android app stores.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '9. Indemnification.'
	              ),
	              ' You agree to indemnify, defend, and hold Instructure, its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (collectively the ',
	              _react2.default.createElement(
	                'b',
	                null,
	                '\u201CInstructure Parties\u201D'
	              ),
	              ') harmless from any losses, costs, liabilities and expenses (including reasonable attorneys\u2019 fees) relating to or arising out of: (a) Your Content; (b) your use of, or inability to use, the Instructure Properties; (c) your violation of the Terms; (d) your violation of any rights of another party, including any User; or (e) your violation of any applicable laws, rules or regulations.  Instructure reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Instructure in asserting any available defenses.  You agree that the provisions in this section will survive any termination of your Account, the Terms, or your access to the Instructure Properties. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '10. Disclaimer of Warranties.'
	              ),
	              ' YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF THE INSTRUCTURE PROPERTIES IS AT YOUR SOLE RISK, AND THE INSTRUCTURE PROPERTIES ARE PROVIDED ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS, WITH ALL FAULTS.  INSTRUCTURE PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. INSTRUCTURE PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) THE INSTRUCTURE PROPERTIES WILL MEET YOUR REQUIREMENTS; (2) YOUR USE OF THE INSTRUCTURE PROPERTIES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE INSTRUCTURE PROPERTIES WILL BE ACCURATE OR RELIABLE; OR (4) ANY ERRORS IN THE INSTRUCTURE PROPERTIES WILL BE CORRECTED. ANY CONTENT DOWNLOADED FROM OR OTHERWISE ACCESSED THROUGH THE INSTRUCTURE PROPERTIES IS ACCESSED AT YOUR OWN RISK, AND YOU SHALL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY OR PERSON, INCLUDING, BUT NOT LIMITED TO, YOUR COMPUTER SYSTEM AND ANY DEVICE YOU USE TO ACCESS THE INSTRUCTURE PROPERTIES, OR ANY OTHER LOSS THAT RESULTS FROM ACCESSING SUCH CONTENT. THE SERVICES MAY BE SUBJECT TO DELAYS, CANCELLATIONS AND OTHER DISRUPTIONS.  INSTRUCTURE MAKES NO WARRANTY, REPRESENTATION OR CONDITION WITH RESPECT TO THE SERVICES, INCLUDING BUT NOT LIMITED TO, THE QUALITY, EFFECTIVENESS, REPUTATION AND OTHER CHARACTERISTICS OF THE SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM INSTRUCTURE OR THROUGH THE INSTRUCTURE PROPERTIES WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11. Limitation of Liability.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11.1 Disclaimer of Certain Damages.'
	              ),
	              '  YOU UNDERSTAND AND AGREE THAT IN NO EVENT SHALL INSTRUCTURE PARTIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE INSTRUCTURE PROPERTIES, INCLUDING, WITHOUT LIMITATION, ANY DAMAGES RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER OR NOT INSTRUCTURE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION WITH THE TERMS, OR FROM ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH OTHER USERS OF THE INSTRUCTURE PROPERTIES, ON ANY THEORY OF LIABILITY, RESULTING FROM: (1) THE USE OR INABILITY TO USE THE INSTRUCTURE PROPERTIES; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED FOR TRANSACTIONS ENTERED INTO THROUGH THE INSTRUCTURE PROPERTIES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (4) STATEMENTS OR CONDUCT OF ANY THIRD-PARTY ON INSTRUCTURE PROPERTIES; OR (5) ANY OTHER MATTER RELATED TO THE INSTRUCTURE PROPERTIES, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11.2 Cap on Liability.'
	              ),
	              '  UNDER NO CIRCUMSTANCES WILL INSTRUCTURE PARTIES BE LIABLE TO YOU FOR MORE THAN FIFTY DOLLARS ($50). '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11.3 User Content.'
	              ),
	              '  INSTRUCTURE PARTIES ASSUME NO RESPONSIBILITY FOR THE TIMELINESS, DELETION, MIS-DELIVERY OR FAILURE TO STORE ANY CONTENT (INCLUDING, BUT NOT LIMITED TO, YOUR CONTENT AND USER CONTENT), USER COMMUNICATIONS OR PERSONALIZATION SETTINGS.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11.4 No Liability for Conduct of Third Parties or Other Users.'
	              ),
	              '  YOU ACKNOWLEDGE AND AGREE THAT INSTRUCTURE PARTIES ARE NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD INSTRUCTURE PARTIES LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND THAT THE RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE INSTRUCTURE PROPERTIES. YOU UNDERSTAND THAT INSTRUCTURE DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF THE INSTRUCTURE PROPERTIES. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '11.5 Basis of the Bargain.'
	              ),
	              '  THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN INSTRUCTURE AND YOU. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '12. Procedure for Making Claims of Copyright Infringement.'
	              ),
	              '  It is Instructure\u2019s policy to terminate membership privileges of any User who repeatedly infringes copyright upon prompt notification to Instructure by the copyright owner or the copyright owner\u2019s legal agent.  Without limiting the foregoing, if you believe that your work has been copied and posted on the Instructure Properties in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information: (1) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; (2) a description of the copyrighted work that you claim has been infringed; (3) a description of the location on the Instructure Properties of the material that you claim is infringing; (4) your address, telephone number and e-mail address; (5) a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; (6) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\u2019s behalf.  Contact information for Instructure\u2019s Copyright Agent for notice of claims of copyright infringement is as follows: Howard Baik; 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121; ',
	              _react2.default.createElement(
	                'a',
	                { href: 'mailto:legal@instructure.com', target: '_blank' },
	                'legal@instructure.com'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '13. Term and Termination.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '13.1 Term.'
	              ),
	              '  The Terms commence on the date when you accept them (as described in the preamble above) and remain in full force and effect while you use the Instructure Properties, unless terminated earlier in accordance with the Terms.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '13.2 Termination of Services by Instructure.'
	              ),
	              '  If you have breached any provision of the Terms, or if Instructure is required to do so by law (e.g., where the provision of the Website, the Application, or the Services is, or becomes, unlawful), Instructure has the right to suspend or terminate any Services provided to you or to delete any of Your Content. You agree that all terminations for cause shall be made in Instructure\u2019s sole discretion and that Instructure shall not be liable to you or any third-party for any termination of your Account. Termination of any Service includes removal of access to such Service and barring of further use of the Service.  Termination of  all Services also may include deletion of your password and all related information, files and Content associated with or inside your Account (or any part thereof), including Your Content.  Upon termination of any Service, your right to use such Service will automatically terminate immediately.  Instructure will not have any liability whatsoever to you for any suspension or termination, including for deletion of Your Content.  All provisions of the Terms which by their nature should survive, shall survive termination of Services, including without limitation, ownership provisions, warranty disclaimers, and limitation of liability.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14. General Provisions.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.1 Electronic Communications.'
	              ),
	              '  The communications between you and Instructure use electronic means, whether you visit the Instructure Properties or send Instructure e-mails, or whether Instructure posts notices on the Instructure Properties or communicates with you via e-mail.  For contractual purposes, you (1) consent to receive communications from Instructure in an electronic form; and (2) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Instructure provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing.  The foregoing does not affect any statutory rights you may have.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.2 Release.'
	              ),
	              '  You hereby release Instructure Parties and their successors from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from any interactions with or conduct of other Website Users or third-party websites of any kind arising in connection with or as a result of the Terms or your use of the Instructure Properties.  If you are a California resident, you hereby waive California Civil Code Section 1542, which states, \u201CA general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor.\u201D'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.3 Assignment.'
	              ),
	              '  The Terms, and your rights and obligations hereunder, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Instructure\u2019s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Instructure may assign its rights and obligations under these Terms to a third party without your consent.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.4 Force Majeure.'
	              ),
	              '  Instructure shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents, strikes or shortages of transportation facilities, fuel, energy, labor or materials.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.5 Compliance.'
	              ),
	              '  If you believe that Instructure has not adhered to the Terms, please contact Instructure by emailing us at ',
	              _react2.default.createElement(
	                'a',
	                { href: 'mailto:legal@instructure.com', target: '_blank' },
	                'legal@instructure.com'
	              ),
	              '.  We will do our best to address your concerns.  If you feel that your complaint has been addressed incompletely, we invite you to let us know for further investigation.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.6 Arbitration Agreement; Class Waiver; Waiver of Trial by Jury. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Please read this Arbitration Agreement carefully.  It is part of your contract with Instructure and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.   '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(a) Applicability of Arbitration Agreement. All claims and disputes (excluding claims for injunctive or other equitable relief as set forth below) in connection with the Terms or the use of any product or service provided by Instructure that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  This Arbitration Agreement applies to you and Instructure, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(b) Notice Requirement and Informal Dispute Resolution.  Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute (\u201CNotice\u201D) describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to Instructure should be sent to: Attn: Legal Department, 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121.  After the Notice is received, you and Instructure may attempt to resolve the claim or dispute informally.  If you and Instructure do not resolve the claim or dispute within 30 days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(c) Arbitration Rules.  Arbitration shall be initiated through the American Arbitration Association (\u201CAAA\u201D), an established alternative dispute resolution provider (\u201CADR Provider\u201D) that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of this arbitration, including but not limited to the method of initiating and/or demanding arbitration, except to the extent such rules are in conflict with the Terms. The AAA Consumer Arbitration Rules governing the arbitration are available online at www.adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may  be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Each party shall bear its own costs (including attorney\u2019s fees) and disbursements arising out of the arbitration, and shall pay an equal share of the fees and costs of the ADR Provider.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(d) Additional Rules for Non-appearance Based Arbitration: If non-appearance arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(e) Time Limits.  If you or Instructure pursue arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the AAA Rules for the pertinent claim.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(f) Authority of Arbitrator.  If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of you and Instructure, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and Instructure.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(g) Waiver of Jury Trial.  THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in court and are subject to very limited review by a court.  In the event any litigation should arise between you and Instructure in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND INSTRUCTURE WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(h) Waiver of Class or Consolidated Actions.  ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(i) Confidentiality. All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law.  This Paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief. '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(j) Severability. If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(k) Right to Waive.  Any or all of the rights and limitations set forth in this Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or effect any other portion of this Agreement.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(l) Survival of Agreement. This Arbitration Agreement will survive the termination of your relationship with Instructure.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(m) Small Claims Court.  Notwithstanding the foregoing, either you or Instructure may bring an individual action in small claims court.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(n) Emergency Equitable Relief.  Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(o) Claims Not Subject To Arbitration.  Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party\u2019s patent, copyright, trademark, or trade secret shall not be subject to this arbitration agreement.  '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              '(p) Courts.  In any circumstances where the foregoing Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Salt Lake County, Utah, for such purpose.    '
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.7 Governing Law.'
	              ),
	              '  The Terms and any action related thereto will be governed and interpreted by and under the laws of the State of Utah, consistent with the Federal Arbitration Act, without giving effect to any conflicts of law principles that provide for the application of the law of another jurisdiction.  The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.8 Notice.'
	              ),
	              '  Where Instructure requires that you provide an e-mail address to access certain features of the Instructure Properties, you are responsible for providing Instructure with your most current e-mail address.  In the event that the last e-mail address you provided to Instructure is not valid, or for any reason is not capable of delivering to you any notices required/ permitted by the Terms, Instructure\u2019s dispatch of the e-mail containing such notice will nonetheless constitute effective notice.  You may give notice to Instructure at the following address:  Attn: Legal Department, 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121.  Such notice shall be deemed given when received by Instructure by letter delivered by nationally recognized overnight delivery service or first class postage prepaid mail at the above address.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.9 Waiver.'
	              ),
	              '  Any waiver or failure by Instructure to enforce any provision of the Terms on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.10 Severability.'
	              ),
	              '  If any provision of the Terms is, for any reason, held to be invalid or unenforceable, the other provisions of the Terms will remain enforceable, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'b',
	                null,
	                '14.11 Entire Agreement.'
	              ),
	              '  The Terms are the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.block, className: 'col-md-12' },
	          _react2.default.createElement(_Toggle2.default, {
	            label: 'I agree',
	            style: styles.toggle,
	            onToggle: this.stateChanged,
	            toggled: this.props.user.agreed_terms
	          })
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Agree terms',
	            actions: actions,
	            modal: false,
	            open: this.state.dialogOpen,
	            onRequestClose: this.handleClose
	          },
	          'You must agree in order to see your results'
	        )
	      );
	    }
	  }]);
	
	  return StepNumber3;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber3.propTypes = {
	  user: _propTypes2.default.any
	};
	
	StepNumber3.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber3);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _TextField = __webpack_require__(11);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _CircularProgress = __webpack_require__(66);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(65);
	
	var _MedicalRIghtItem2 = _interopRequireDefault(_MedicalRIghtItem);
	
	var _WizardReducer = __webpack_require__(12);
	
	var _UserReducer = __webpack_require__(9);
	
	var _onwork = '/' + "df4c810f4fde7a200fbc980b2ea5f232.png";
	
	var _onwork2 = _interopRequireDefault(_onwork);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	//images
	// Import Images
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    // maxWidth: 679,
	    minWidth: 318,
	    overflow: 'auto'
	  },
	  medicalRightsTitle: {
	    display: 'inline-flex',
	    width: '100%'
	  },
	  medicalRightsContainer: {
	    // overflow:'auto',
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  brokenServerContainer: {
	    textAlign: 'center',
	    marginTop: '10%',
	    // display:'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  brokenServerImg: {
	    height: 120
	  },
	  brokenServerText: {
	    fontSize: 20,
	    fontWeight: 'bold'
	  },
	  errorSection: {
	    width: '100%',
	    // display:'inline-flex',
	    flexDirection: 'column'
	  },
	  spacer: {
	    width: '100%',
	    display: 'inline-flex'
	  }
	};
	
	var StepNumber4 = function (_Component) {
	  _inherits(StepNumber4, _Component);
	
	  function StepNumber4(props) {
	    _classCallCheck(this, StepNumber4);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber4.__proto__ || Object.getPrototypeOf(StepNumber4)).call(this, props));
	
	    _this.emailHasChanged = function (email) {
	      _this.state.email = email;
	    };
	
	    _this.submitEmail = function () {
	      var selected = _this.props.selectedDiagnostics.map(function (x) {
	        return x.condition;
	      }).join(',');
	
	      _this.context.mixpanel.track('No rights - But update me', {
	        'ab_version': 'v1',
	        'email': _this.state.email,
	        'selected': selected,
	        'user': JSON.stringify(_this.props.user)
	      });
	
	      _this.setState({ isEmailSubmitted: true });
	    };
	
	    _this.state = {
	      isEmailSubmitted: false,
	      email: ''
	    };
	
	    return _this;
	  }
	
	  _createClass(StepNumber4, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '4' });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.mixpanel.track('Medical right results', {
	        'num_of_rights_found': this.props.medicalRights.length,
	        'num_of_selected_medical_conditions': this.props.selectedDiagnostics.length,
	        'selected': this.props.selectedDiagnostics.map(function (x) {
	          return x.condition;
	        }).join(','),
	        'user': JSON.stringify(this.props.user)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var medicalRights = this.props.medicalRights;
	
	      console.log(medicalRights);
	
	      var results = null;
	      if (this.props.medicalRights.length > 0) {
	        results = _react2.default.createElement(
	          'div',
	          { className: 'step', style: styles.wizardStepPageStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'section',
	              { style: styles.medicalRightsTitle },
	              _react2.default.createElement(
	                'h2',
	                null,
	                'Based on your input, these are your medical rights:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.medicalRightsContainer },
	              this.props.medicalRights.map(function (medicalRight, i) {
	                // console.log(selectedConditions);
	                return _react2.default.createElement(_MedicalRIghtItem2.default, { key: i, medicalRight: medicalRight });
	              })
	            )
	          )
	        );
	        //Display server error
	      } else {
	        results = _react2.default.createElement(
	          'div',
	          { className: 'step', style: styles.wizardStepPageStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.errorSection },
	            _react2.default.createElement(
	              'div',
	              { style: styles.brokenServerContainer },
	              _react2.default.createElement('img', { src: _onwork2.default, style: styles.brokenServerImg }),
	              _react2.default.createElement(
	                'div',
	                { style: styles.brokenServerText },
	                'We didn\'t find any medical rights for you..',
	                _react2.default.createElement('br', null),
	                'Our insurance experts are working on it.',
	                _react2.default.createElement('br', null),
	                'If you wanna stay updated, we can send you an email when it will be ready',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(_TextField2.default, {
	                  hintText: 'Email',
	                  onChange: this.emailHasChanged()
	                }),
	                function (showMe) {
	                  if (showMe) {
	                    return _react2.default.createElement(
	                      'div',
	                      null,
	                      _react2.default.createElement(_FlatButton2.default, {
	                        style: { marginTop: 30 },
	                        label: 'Sent',
	                        disabled: true,
	                        primary: true,
	                        keyboardFocused: false
	                      })
	                    );
	                  }
	                }(this.state.isEmailSubmitted),
	                function (showMe, submit) {
	                  if (showMe) {
	                    return _react2.default.createElement(
	                      'div',
	                      null,
	                      _react2.default.createElement(_FlatButton2.default, {
	                        style: { marginTop: 30 },
	                        label: 'Send',
	                        primary: true,
	                        keyboardFocused: false,
	                        onTouchTap: submit
	                      })
	                    );
	                  }
	                }(!this.state.isEmailSubmitted, this.submitEmail)
	              ),
	              _react2.default.createElement('span', { style: styles.spacer })
	            )
	          )
	        );
	      }
	
	      return results;
	    }
	  }]);
	
	  return StepNumber4;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    medicalRights: (0, _WizardReducer.getMedicalRightsForUser)(state),
	    selectedDiagnostics: (0, _WizardReducer.getSelectedMedicalRights)(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber4.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber4);

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	/**
	 * Bool short logo svg
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _logo_trans = '/' + "cb8163d33fdfd9ad100950b151a8773e.png";
	
	var _logo_trans2 = _interopRequireDefault(_logo_trans);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoolLogoSvg = function (_Component) {
	  _inherits(BoolLogoSvg, _Component);
	
	  function BoolLogoSvg() {
	    _classCallCheck(this, BoolLogoSvg);
	
	    return _possibleConstructorReturn(this, (BoolLogoSvg.__proto__ || Object.getPrototypeOf(BoolLogoSvg)).apply(this, arguments));
	  }
	
	  _createClass(BoolLogoSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          width = _props.width,
	          color = _props.color,
	          className = _props.className;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('img', { src: _logo_trans2.default, style: {
	            height: '30px',
	            marginRight: '10px'
	          } }),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Insu'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'rights'
	        )
	      );
	    }
	  }]);
	
	  return BoolLogoSvg;
	}(_react.Component);
	
	exports.default = BoolLogoSvg;
	
	
	BoolLogoSvg.propTypes = {
	  width: _react2.default.PropTypes.number,
	  color: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string
	};
	
	BoolLogoSvg.defaultProps = {
	  color: '#154a99',
	  width: 200,
	  className: ''
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(3);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
	  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI",
	  "logo": "LNLY14D54Y1IQaktsExe3"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _IconSvg = __webpack_require__(62);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Style
	function Header(props, context) {
	  // const languageNodes = props.intl.enabledLanguages.map(
	  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
	  // );
	
	  return _react2.default.createElement(
	    'div',
	    { className: _Header2.default.header },
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: '/' },
	      _react2.default.createElement(
	        'div',
	        { className: _Header2.default.logo },
	        _react2.default.createElement(_IconSvg2.default, null)
	      )
	    ),
	    _react2.default.createElement('div', { className: _Header2.default['language-switcher'] })
	  );
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	Header.propTypes = {
	  toggleAddPost: _react.PropTypes.any,
	  switchLanguage: _react.PropTypes.any,
	  intl: _react.PropTypes.any
	};
	
	exports.default = Header;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _AppBar = __webpack_require__(110);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _LoginMenuBar = __webpack_require__(77);
	
	var _LoginMenuBar2 = _interopRequireDefault(_LoginMenuBar);
	
	var _Logged = __webpack_require__(76);
	
	var _Logged2 = _interopRequireDefault(_Logged);
	
	var _IconButton = __webpack_require__(35);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _Toggle = __webpack_require__(38);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _close = __webpack_require__(114);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _getMuiTheme = __webpack_require__(23);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(22);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * This example is taking advantage of the composability of the `AppBar`
	 * to render different components depending on the application state.
	 */
	var MenuAppBar = function (_Component) {
	  _inherits(MenuAppBar, _Component);
	
	  function MenuAppBar() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MenuAppBar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      logged: false
	    }, _this.handleChange = function (event, logged) {
	      _this.setState({ logged: logged });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MenuAppBar, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_AppBar2.default
	        // title="Title"
	        , { showMenuIconButton: false
	          // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
	          , iconElementRight: this.state.logged ? _react2.default.createElement(_Logged2.default, null) : _react2.default.createElement(_LoginMenuBar2.default, null)
	        })
	      );
	    }
	  }]);
	
	  return MenuAppBar;
	}(_react.Component);
	
	MenuAppBar.childContextTypes = {
	  muiTheme: _propTypes2.default.object
	};
	
	exports.default = MenuAppBar;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(111);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _RadioButton = __webpack_require__(37);
	
	var _RadioButton2 = _interopRequireDefault(_RadioButton);
	
	var _FontIcon = __webpack_require__(113);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _MedicalRightItem = {
	  "medical-right-item": "_2OPQaFLVSkPuvLOeotACNW",
	  "medical-condition": "_-zsAwla7bqudwL3lryVKn",
	  "radioButtonKnew": "_2gY4EkWSl0gbnoPy9jdX0c"
	};
	
	var _MedicalRightItem2 = _interopRequireDefault(_MedicalRightItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MedicalRightItem(props) {
	  return _react2.default.createElement(
	    _Card.Card,
	    null,
	    _react2.default.createElement(_Card.CardHeader, {
	      title: props.medicalRight['Medical Right'],
	      subtitle: props.medicalRight.condition,
	      actAsExpander: true,
	      showExpandableButton: true
	    }),
	    _react2.default.createElement(
	      _Card.CardActions,
	      null,
	      _react2.default.createElement(
	        _RadioButton.RadioButtonGroup,
	        {
	          name: 'userRightKnowledgeStatus' },
	        _react2.default.createElement(_RadioButton.RadioButton, {
	          value: 'DIDNT_KNOW',
	          label: 'I didn\'t know'
	        }),
	        _react2.default.createElement(_RadioButton.RadioButton, {
	          value: 'ALREADY_KNOW',
	          label: 'Already knew'
	        })
	      ),
	      _react2.default.createElement(_FlatButton2.default, { primary: true,
	        label: 'Chat with us'
	        // href="https://www.facebook.com/sharer.php?u=http://www.ynet.co.il/articles/0,7340,L-4970913,00.html"
	        // target="_blank"
	        , icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
	      })
	    ),
	    _react2.default.createElement(
	      _Card.CardText,
	      { expandable: true },
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Description:'
	            ),
	            '  ',
	            props.medicalRight['Medical Right Description']
	          );
	        }
	      }(props.medicalRight['Medical Right Description']),
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Comments:'
	            ),
	            '  ',
	            props.medicalRight['Comments']
	          );
	        }
	      }(props.medicalRight['Comments']),
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Family Background:'
	            ),
	            '  ',
	            props.medicalRight['Family Background']
	          );
	        }
	      }(props.medicalRight['Family Background'])
	    )
	  );
	}
	
	// Import Style
	
	
	MedicalRightItem.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	exports.default = MedicalRightItem;

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("material-ui/CircularProgress");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("material-ui/SelectField");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("react-stepzilla");

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alertActions = undefined;
	
	var _alert = __webpack_require__(29);
	
	var alertActions = exports.alertActions = {
	  success: success,
	  error: error,
	  clear: clear
	};
	
	function success(message) {
	  return { type: _alert.alertConstants.SUCCESS, message: message };
	}
	
	function error(message) {
	  return { type: _alert.alertConstants.ERROR, message: message };
	}
	
	function clear() {
	  return { type: _alert.alertConstants.CLEAR };
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "progtrckr": "_3Y6DQZh1IQy_Ho6ycb_ahP",
	  "progtrckr-todo": "_1N_rZ4VqyEgJwR20fEJFZ1",
	  "progtrckr-doing": "_3uNOy-0WRNUayqAfLXOFGF",
	  "progtrckr-done": "_-ZF6hpRyofG5f3ViJeGlc"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(30);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _MenuAppBar = __webpack_require__(64);
	
	var _MenuAppBar2 = _interopRequireDefault(_MenuAppBar);
	
	var _Header = __webpack_require__(63);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(73);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(14);
	
	var _IntlActions = __webpack_require__(31);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _react2.default.createElement(_DevTools2.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_reactHelmet2.default, {
	            title: 'Insurights',
	            titleTemplate: '%s - Know your rights',
	            meta: [{ charset: 'utf-8' }, {
	              'http-equiv': 'X-UA-Compatible',
	              content: 'IE=edge'
	            }, {
	              name: 'viewport',
	              content: 'width=device-width, initial-scale=1'
	            }]
	          }),
	          _react2.default.createElement(_MenuAppBar2.default, null),
	          _react2.default.createElement(
	            'div',
	            { className: _App2.default.container },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.propTypes = {
	  children: _react.PropTypes.object.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  intl: _react.PropTypes.object.isRequired
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(3);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";
	
	var _headerBk2 = _interopRequireDefault(_headerBk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Style
	function Footer() {
	  return _react2.default.createElement(
	    'div',
	    { style: { background: '#FFF url(' + _headerBk2.default + ') center' }, className: _Footer2.default.footer },
	    _react2.default.createElement(
	      'p',
	      null,
	      '\xA9 2017 \xB7 Hashnode \xB7 MazorTech Inc.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'twitterMessage' }),
	      ' : ',
	      _react2.default.createElement(
	        'a',
	        { href: 'https://twitter.com/zikaziv1', target: '_Blank' },
	        '@Mazor'
	      )
	    )
	  );
	}
	
	// Import Images
	exports.default = Footer;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(27);
	
	var _IntlActions = __webpack_require__(31);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(1);
	
	var _user = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginPage = function (_Component) {
	  _inherits(LoginPage, _Component);
	
	  function LoginPage(props) {
	    _classCallCheck(this, LoginPage);
	
	    // reset login status
	    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));
	
	    _this.props.dispatch(_user.userActions.logout());
	
	    _this.state = {
	      username: '',
	      password: '',
	      submitted: false
	    };
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(LoginPage, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var _e$target = e.target,
	          name = _e$target.name,
	          value = _e$target.value;
	
	      this.setState(_defineProperty({}, name, value));
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	
	      this.setState({ submitted: true });
	      var _state = this.state,
	          username = _state.username,
	          password = _state.password;
	      var dispatch = this.props.dispatch;
	
	      if (username && password) {
	        dispatch(_user.userActions.login(username, password));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var loggingIn = this.props.loggingIn;
	      var _state2 = this.state,
	          username = _state2.username,
	          password = _state2.password,
	          submitted = _state2.submitted;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-md-6 col-md-offset-3' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Login'
	        ),
	        _react2.default.createElement(
	          'form',
	          { name: 'form', onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !username ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'username' },
	              'Username'
	            ),
	            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'username', value: username, onChange: this.handleChange }),
	            submitted && !username && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'Username is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', value: password, onChange: this.handleChange }),
	            submitted && !password && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'Password is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-primary' },
	              'Login'
	            ),
	            loggingIn && _react2.default.createElement('img', { src: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/register', className: 'btn btn-link' },
	              'Register'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LoginPage;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  var loggingIn = state.authentication.loggingIn;
	
	  return {
	    loggingIn: loggingIn
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LoginPage);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconMenu = __webpack_require__(36);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(13);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _moreVert = __webpack_require__(39);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconButton = __webpack_require__(35);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Logged = function Logged(props) {
	  return _react2.default.createElement(
	    _IconMenu2.default,
	    _extends({}, props, {
	      iconButtonElement: _react2.default.createElement(
	        _IconButton2.default,
	        null,
	        _react2.default.createElement(_moreVert2.default, null)
	      ),
	      targetOrigin: { horizontal: 'right', vertical: 'top' },
	      anchorOrigin: { horizontal: 'right', vertical: 'top' }
	    }),
	    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
	    _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
	  );
	};
	
	Logged.muiName = 'IconMenu';
	
	exports.default = Logged;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _IconMenu = __webpack_require__(36);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(13);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _moreVert = __webpack_require__(39);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginAppBar = function (_Component) {
	  _inherits(LoginAppBar, _Component);
	
	  function LoginAppBar() {
	    _classCallCheck(this, LoginAppBar);
	
	    return _possibleConstructorReturn(this, (LoginAppBar.__proto__ || Object.getPrototypeOf(LoginAppBar)).apply(this, arguments));
	  }
	
	  _createClass(LoginAppBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/login' },
	        _react2.default.createElement(_FlatButton2.default, _extends({}, this.props, { label: 'Login' }))
	      );
	    }
	  }]);
	
	  return LoginAppBar;
	}(_react.Component);
	
	LoginAppBar.muiName = 'FlatButton';
	exports.default = LoginAppBar;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(3);
	
	var _PostCreateWidget = {
	  "form": "_1HNxVmVCIfsWU6Q22cRSd7",
	  "form-content": "VlHIHfXe5nkoruuc0N8pJ",
	  "form-title": "_32cczwmKrlcNdTsvCr-oBL",
	  "form-field": "_1srubE9zVaJuCqkgKCA3lY",
	  "post-submit-button": "_2m9Bzr_sJcQ7FK3o3X0PBL",
	  "appear": "_30KT3DYyUvGj_5sBYnixvw"
	};
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);
	
	  function PostCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var nameRef = _this.refs.name;
	      var titleRef = _this.refs.title;
	      var contentRef = _this.refs.content;
	      if (nameRef.value && titleRef.value && contentRef.value) {
	        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
	        nameRef.value = titleRef.value = contentRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
	      return _react2.default.createElement(
	        'div',
	        { className: cls },
	        _react2.default.createElement(
	          'div',
	          { className: _PostCreateWidget2.default['form-content'] },
	          _react2.default.createElement(
	            'h2',
	            { className: _PostCreateWidget2.default['form-title'] },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'createNewPost' })
	          ),
	          _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }),
	          _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }),
	          _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }),
	          _react2.default.createElement(
	            'a',
	            { className: _PostCreateWidget2.default['post-submit-button'], href: '#', onClick: this.addPost },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'submit' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return PostCreateWidget;
	}(_react.Component);
	
	PostCreateWidget.propTypes = {
	  addPost: _react.PropTypes.func.isRequired,
	  showAddPost: _react.PropTypes.bool.isRequired,
	  intl: _reactIntl.intlShape.isRequired
	};
	
	exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = __webpack_require__(80);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _progTracker = {
	  "progtrckr": "_1gots0T1qmximnr_geso4_",
	  "val-err-tooltip": "_9vCWgvVPszZxQNscac2Ic",
	  "step": "_1Lw7KWNcw1KcP4MogUxDao",
	  "row": "_1A0QsO2w5NaRQ1G9oYcU3c",
	  "form-horizontal": "_3t_6TlM0CU-IisvGk9NK_y",
	  "form-group": "_1xMhoS_wFX3PDFN6THuRiq",
	  "footer-buttons": "_3cHwoF0oTMYhUOY_AVxIc1",
	  "step3": "_33jkjCKn4b9H8dFr-OmDco",
	  "step4": "_25JJ0qY_sVAf94SdmFzzUc",
	  "control-label": "VkflfFTpn4gmWEjpfgmN6",
	  "review": "WcHoTG7viE6JzKImJwJkt",
	  "txt": "_2DSVPD_z8OekWJPFr5Ujkt",
	  "saving": "HMvG0YAmEQQck0GZo6Yjn",
	  "eg-jump-lnk": "_1mqogYJsRWO_p1owkPkKBp",
	  "lib-version": "_GRxm4KrXd1_JhsPoR7uo",
	  "content": "_1vKtlU1rl8N2NCVRsmsyp8",
	  "red": "_1ZjFff1GaWnOAAEtd87glv",
	  "green": "_3tgNwq-qgolFUVj6lS-DqJ",
	  "bold": "_1bJvCGENAbkau4FdN7nAlF",
	  "hoc-alert": "_1xGGQMpWFglkUzMznl314f",
	  "form-block-holder": "_1xQyqqV63sg3I0HCeTAJfQ",
	  "progtrckr-todo": "_3ojFsatz22_d65C5w_LGhd",
	  "progtrckr-doing": "_1UpcKFdVQwIpotH0H44uYE",
	  "progtrckr-done": "_21aScf6uurGWYPvd6q37Cr"
	};
	
	var _progTracker2 = _interopRequireDefault(_progTracker);
	
	var _reactStepzilla = __webpack_require__(68);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _StepNumber = __webpack_require__(57);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(58);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(59);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(60);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Steps
	function PostList(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Diagnosis', component: _react2.default.createElement(_StepNumber2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Info', component: _react2.default.createElement(_StepNumber4.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_StepNumber6.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Rights', component: _react2.default.createElement(_StepNumber8.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }];
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'listView' },
	    _react2.default.createElement(
	      'div',
	      { className: 'step-progress' },
	      _react2.default.createElement(_reactStepzilla2.default, { steps: steps })
	    )
	  );
	}
	
	// Import Components
	
	
	PostList.propTypes = {
	  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  })).isRequired,
	  handleDeletePost: _react.PropTypes.func.isRequired
	};
	
	exports.default = PostList;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(3);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PostListItem(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _PostListItem2.default['single-post'] },
	    _react2.default.createElement(
	      'h3',
	      { className: _PostListItem2.default['post-title'] },
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/posts/' + props.post.slug + '-' + props.post.cuid },
	        props.post.title
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['author-name'] },
	      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'by' }),
	      ' ',
	      props.post.name
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['post-desc'] },
	      props.post.content
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['post-action'] },
	      _react2.default.createElement(
	        'a',
	        { href: '#', onClick: props.onDelete },
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'deletePost' })
	      )
	    ),
	    _react2.default.createElement('hr', { className: _PostListItem2.default.divider })
	  );
	}
	
	// Import Style
	
	
	PostListItem.propTypes = {
	  post: _react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  }).isRequired,
	  onDelete: _react.PropTypes.func.isRequired
	};
	
	exports.default = PostListItem;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostDetailPage = PostDetailPage;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(3);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostActions = __webpack_require__(15);
	
	var _PostReducer = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Actions
	function PostDetailPage(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactHelmet2.default, { title: props.post.title }),
	    _react2.default.createElement(
	      'div',
	      { className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail'] },
	      _react2.default.createElement(
	        'h3',
	        { className: _PostListItem2.default['post-title'] },
	        props.post.title
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: _PostListItem2.default['author-name'] },
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'by' }),
	        ' ',
	        props.post.name
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: _PostListItem2.default['post-desc'] },
	        props.post.content
	      )
	    )
	  );
	}
	
	// Actions required to provide data for this component to render in sever side.
	
	
	// Import Selectors
	
	
	// Import Style
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid)
	  };
	}
	
	PostDetailPage.propTypes = {
	  post: _react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  }).isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _PostList = __webpack_require__(79);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(78);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(15);
	
	var _AppActions = __webpack_require__(14);
	
	var _AppReducer = __webpack_require__(24);
	
	var _PostReducer = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);
	
	  function PostListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddPost = function (name, title, content) {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_PostCreateWidget2.default, { addPost: this.handleAddPost, showAddPost: this.props.showAddPost }),
	        _react2.default.createElement(_PostList2.default, { handleDeletePost: this.handleDeletePost, posts: this.props.posts })
	      );
	    }
	  }]);
	
	  return PostListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPost: (0, _AppReducer.getShowAddPost)(state),
	    posts: (0, _PostReducer.getPosts)(state)
	  };
	}
	
	PostListPage.propTypes = {
	  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired
	  })).isRequired,
	  showAddPost: _react.PropTypes.bool.isRequired,
	  dispatch: _react.PropTypes.func.isRequired
	};
	
	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(1);
	
	var _user = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RegisterPage = function (_React$Component) {
	  _inherits(RegisterPage, _React$Component);
	
	  function RegisterPage(props) {
	    _classCallCheck(this, RegisterPage);
	
	    var _this = _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this, props));
	
	    _this.state = {
	      user: {
	        firstName: '',
	        lastName: '',
	        email: '',
	        password: ''
	      },
	      submitted: false
	    };
	
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(RegisterPage, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var _event$target = event.target,
	          name = _event$target.name,
	          value = _event$target.value;
	      var user = this.state.user;
	
	      this.setState({
	        user: _extends({}, user, _defineProperty({}, name, value))
	      });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      this.setState({ submitted: true });
	      var user = this.state.user;
	      var dispatch = this.props.dispatch;
	
	      if (user.firstName && user.lastName && user.email && user.password) {
	        dispatch(_user.userActions.register(user));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var registering = this.props.registering;
	      var _state = this.state,
	          user = _state.user,
	          submitted = _state.submitted;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-md-6 col-md-offset-3' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Register'
	        ),
	        _react2.default.createElement(
	          'form',
	          { name: 'form', onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !user.firstName ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'firstName' },
	              'First Name'
	            ),
	            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'firstName', value: user.firstName, onChange: this.handleChange }),
	            submitted && !user.firstName && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'First Name is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !user.lastName ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'lastName' },
	              'Last Name'
	            ),
	            _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'lastName', value: user.lastName, onChange: this.handleChange }),
	            submitted && !user.lastName && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'Last Name is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !user.username ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'email' },
	              'Email'
	            ),
	            _react2.default.createElement('input', { type: 'email', className: 'form-control', name: 'email', value: user.email, onChange: this.handleChange }),
	            submitted && !user.email && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'Email is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'password' },
	              'Password'
	            ),
	            _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', value: user.password, onChange: this.handleChange }),
	            submitted && !user.password && _react2.default.createElement(
	              'div',
	              { className: 'help-block' },
	              'Password is required'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-primary' },
	              'Register'
	            ),
	            registering && _react2.default.createElement('img', { src: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/login', className: 'btn btn-link' },
	              'Cancel'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return RegisterPage;
	}(_react2.default.Component);
	
	function mapStateToProps(state) {
	  var registering = state.registration.registering;
	
	  return {
	    registering: registering
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegisterPage);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MedicalDiagnosticItem = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(3);
	
	var _Checkbox = __webpack_require__(33);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _MedicalDiagnosticItem = {
	  "medical-diagnostic-item": "_Uhygq52TmiRQTOLmE_0"
	};
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _WizardActions = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var MedicalDiagnosticItem = exports.MedicalDiagnosticItem = function (_Component) {
	  _inherits(MedicalDiagnosticItem, _Component);
	
	  function MedicalDiagnosticItem(props) {
	    _classCallCheck(this, MedicalDiagnosticItem);
	
	    var _this = _possibleConstructorReturn(this, (MedicalDiagnosticItem.__proto__ || Object.getPrototypeOf(MedicalDiagnosticItem)).call(this, props));
	
	    _this.state = {};
	
	    //Bind
	    _this.onCheck = _this.onCheck.bind(_this);
	    return _this;
	  }
	
	  _createClass(MedicalDiagnosticItem, [{
	    key: 'onCheck',
	    value: function onCheck(e, checked) {
	      this.props.medicalRight.isSelected = !this.props.medicalRight.isSelected;
	
	      this.props.medicalRight.isSelected ? this.props.dispatch((0, _WizardActions.selectCondition)(this.props.medicalRight)) : this.props.dispatch((0, _WizardActions.unselectCondition)(this.props.medicalRight));
	
	      this.setState({ medicalRight: this.props.medicalRight });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _MedicalDiagnosticItem2.default['medical-diagnostic-item'] },
	        _react2.default.createElement(_Checkbox2.default, { className: _MedicalDiagnosticItem2.default['medical-diagnostic'],
	          label: this.props.medicalRight.condition,
	          checked: !!this.props.medicalRight.isSelected,
	          onCheck: function onCheck(e, checked) {
	            return _this2.onCheck(e, checked);
	          } })
	      );
	    }
	  }]);
	
	  return MedicalDiagnosticItem;
	}(_react.Component);
	
	MedicalDiagnosticItem.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	function mapStateToProps(state) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MedicalDiagnosticItem);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(40);
	
	var _AppReducer = __webpack_require__(24);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(16);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(74);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _WizardReducer = __webpack_require__(12);
	
	var _WizardReducer2 = _interopRequireDefault(_WizardReducer);
	
	var _UserReducer = __webpack_require__(9);
	
	var _UserReducer2 = _interopRequireDefault(_UserReducer);
	
	var _user = __webpack_require__(89);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _alert = __webpack_require__(86);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _registration = __webpack_require__(88);
	
	var _registration2 = _interopRequireDefault(_registration);
	
	var _authentication = __webpack_require__(87);
	
	var _authentication2 = _interopRequireDefault(_authentication);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default,
	  medicalRights: _WizardReducer2.default,
	  user: _UserReducer2.default,
	
	  userReducer: _user2.default,
	  alerts: _alert2.default,
	  registration: _registration2.default,
	  authentication: _authentication2.default
	});
	
	// Import Reducers

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = alert;
	
	var _alert = __webpack_require__(29);
	
	function alert() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _alert.alertConstants.SUCCESS:
	      return {
	        type: 'alert-success',
	        message: action.message
	      };
	    case _alert.alertConstants.ERROR:
	      return {
	        type: 'alert-danger',
	        message: action.message
	      };
	    case _alert.alertConstants.CLEAR:
	      return {};
	    default:
	      return state;
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = authentication;
	
	var _user = __webpack_require__(8);
	
	var user = {};
	// if(localStorage) {
	//   user = JSON.parse(localStorage.getItem('user'));
	// }
	var initialState = user ? { loggedIn: true, user: user } : {};
	
	function authentication() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _user.userConstants.LOGIN_REQUEST:
	      return {
	        loggingIn: true,
	        user: action.user
	      };
	    case _user.userConstants.LOGIN_SUCCESS:
	      return {
	        loggedIn: true,
	        user: action.user
	      };
	    case _user.userConstants.LOGIN_FAILURE:
	      return {};
	    case _user.userConstants.LOGOUT:
	      return {};
	    default:
	      return state;
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = registration;
	
	var _user = __webpack_require__(8);
	
	function registration() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _user.userConstants.REGISTER_REQUEST:
	      return { registering: true };
	    case _user.userConstants.REGISTER_SUCCESS:
	      return {};
	    case _user.userConstants.REGISTER_FAILURE:
	      return {};
	    default:
	      return state;
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = users;
	
	var _user = __webpack_require__(8);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function users() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _user.userConstants.GETALL_REQUEST:
	      return {
	        loading: true
	      };
	    case _user.userConstants.GETALL_SUCCESS:
	      return {
	        items: action.users
	      };
	    case _user.userConstants.GETALL_FAILURE:
	      return {
	        error: action.error
	      };
	    case _user.userConstants.DELETE_REQUEST:
	      // add 'deleting:true' property to user being deleted
	      return _extends({}, state, {
	        items: state.items.map(function (user) {
	          return user.id === action.id ? _extends({}, user, { deleting: true }) : user;
	        })
	      });
	    case _user.userConstants.DELETE_SUCCESS:
	      // remove deleted user from state
	      return {
	        items: state.items.filter(function (user) {
	          return user.id !== action.id;
	        })
	      };
	    case _user.userConstants.DELETE_FAILURE:
	      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
	      return _extends({}, state, {
	        items: state.items.map(function (user) {
	          if (user.id === action.id) {
	            // make copy of user without 'deleting:true' property
	            var deleting = user.deleting,
	                userCopy = _objectWithoutProperties(user, ['deleting']);
	            // return copy of user with 'deleteError:[error]' property
	
	
	            return _extends({}, userCopy, { deleteError: action.error });
	          }
	
	          return user;
	        })
	      });
	    default:
	      return state;
	  }
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userService = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _authHeader = __webpack_require__(91);
	
	var userService = exports.userService = {
	  login: login,
	  logout: logout,
	  register: register,
	  getAll: getAll,
	  getById: getById,
	  update: update,
	  delete: _delete
	};
	
	function login(username, password) {
	  var requestOptions = {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify({ username: username, password: password })
	  };
	
	  return fetch('api/users/authenticate', requestOptions).then(function (response) {
	    if (!response.ok) {
	      return Promise.reject(response.statusText);
	    }
	
	    return response.json();
	  }).then(function (user) {
	    // login successful if there's a jwt token in the response
	    if (user && user.token) {
	      // store user details and jwt token in local storage to keep user logged in between page refreshes
	      localStorage.setItem('user', JSON.stringify(user));
	    }
	
	    return user;
	  });
	}
	
	function logout() {
	  // remove user from local storage to log user out
	  localStorage.removeItem('user');
	}
	
	function getAll() {
	  var requestOptions = {
	    method: 'GET',
	    headers: (0, _authHeader.authHeader)()
	  };
	
	  return fetch('/users', requestOptions).then(handleResponse);
	}
	
	function getById(id) {
	  var requestOptions = {
	    method: 'GET',
	    headers: (0, _authHeader.authHeader)()
	  };
	
	  return fetch('/users/' + _id, requestOptions).then(handleResponse);
	}
	
	function register(user) {
	  var requestOptions = {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(user)
	  };
	
	  return fetch('api/users/register', requestOptions).then(handleResponse);
	}
	
	function update(user) {
	  var requestOptions = {
	    method: 'PUT',
	    headers: _extends({}, (0, _authHeader.authHeader)(), { 'Content-Type': 'application/json' }),
	    body: JSON.stringify(user)
	  };
	
	  return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
	}
	
	// prefixed function name with underscore because delete is a reserved word in javascript
	function _delete(id) {
	  var requestOptions = {
	    method: 'DELETE',
	    headers: (0, _authHeader.authHeader)()
	  };
	
	  return fetch('/users/' + id, requestOptions).then(handleResponse);;
	}
	
	function handleResponse(response) {
	  if (!response.ok) {
	    return Promise.reject(response.statusText);
	  }
	
	  return response.json();
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authHeader = authHeader;
	function authHeader() {
	  // return authorization header with jwt token
	  var user = JSON.parse(localStorage.getItem('user'));
	
	  if (user && user.token) {
	    return { 'Authorization': 'Bearer ' + user.token };
	  } else {
	    return {};
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMedicalRights = getMedicalRights;
	exports.getMedicalRight = getMedicalRight;
	exports.getMedicalRightsMock = getMedicalRightsMock;
	exports.getAllConditions = getAllConditions;
	
	var _medicalEntry = __webpack_require__(18);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var right1 = {
	  "condition": "OSA",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right2 = {
	  "condition": "OSA1",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right3 = {
	  "condition": "OSA2",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right4 = {
	  "condition": "OSA3",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right5 = {
	  "condition": "OSA4",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right6 = {
	  "condition": "OSA5",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right7 = {
	  "condition": "OSA6",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right8 = {
	  "condition": "OSA7",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right9 = {
	  "condition": "OSA8",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	
	var medicalEntry = [];
	medicalEntry.push(right1, right2, right3, right4, right5, right6, right7, right8, right9);
	
	function getMedicalRights(req, res) {
	  _medicalEntry2.default.find({}).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}
	
	function getMedicalRight(req, res) {
	  _medicalEntry2.default.findOne(req.params).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}
	
	function getMedicalRightsMock(req, res) {
	  res.json({ medicalEntry: medicalEntry });
	}
	
	function getAllConditions(req, res) {
	  _medicalEntry2.default.find({}).select({ "condition": 1, "_id": 0 }).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateDB = populateDB;
	
	var _medicalEntry = __webpack_require__(18);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function populateDB(req, res) {
	  var csv = __webpack_require__(102);
	  var hashMap = __webpack_require__(103);
	  var map = new hashMap();
	  var medRightArr = [];
	
	  csv.fromPath("C:\\mp2.csv", { headers: true }).on("data", function (data) {
	    //data is now a JSON object whereas CSV header is the parameter name, and the row is the value.
	    var med_con = data["Medical Condition"];
	    delete data["Medical Condition"];
	
	    //Manage hashmap of array values (to consolidate similar keys)
	    if (!map.has(med_con)) {
	      var arr = [];
	      map.set(med_con, arr);
	    }
	
	    for (var key in data) {
	      if (!data[key]) {
	        delete data[key];
	      } else if (data.Age) {
	        var rangeStr = data.Age + "";
	        var range = rangeStr.split(";");
	        var age = {};
	        for (var index = 0; index < range.length; index++) {
	          console.log("str: " + rangeStr);
	          var sign = range[index].substring(0, 1);
	          if (sign === "<") {
	            age.max = range[index].substring(1);
	            data.Age = age;
	          }
	          if (sign === ">") {
	            age.min = range[index].substring(1);
	            data.Age = age;
	          }
	        }
	      }
	    }
	
	    map.get(med_con).push(data);
	  }).on("end", function () {
	
	    //value in the first parameter, confusing, isn't it?
	    map.forEach(function (value, key) {
	      var me = new _medicalEntry2.default({ condition: key, rights: value });
	      medRightArr.push(me);
	    });
	
	    //Create all DB rows at one shot
	    if (typeof medRightArr !== 'undefined' && medRightArr.length > 0) {
	      _medicalEntry2.default.create(medRightArr, function (error) {
	        if (error) {
	          console.log("An Error took place upon saving to DB" + error);
	        }
	      });
	    } else {
	      console.log("No Entry was updated in the DB");
	    }
	  });
	  console.log("DB update finished!");
	  var rights = [];
	  res.json({ rights: rights });
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(97);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(101);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(109);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(127);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.register = register;
	var crypto = __webpack_require__(32);
	var jwt = __webpack_require__(20);
	var moment = __webpack_require__(116);
	var UserEntry = __webpack_require__(96);
	
	exports.ensureAuthenticated = function (req, res, next) {
	  if (req.isAuthenticated()) {
	    next();
	  } else {
	    res.status(401).send({ msg: 'Unauthorized' });
	  }
	};
	
	function generateToken(user) {
	  var payload = {
	    iss: 'my.domain.com',
	    sub: user.id,
	    iat: moment().unix(),
	    exp: moment().add(7, 'days').unix()
	  };
	  return jwt.sign(payload, process.env.TOKEN_SECRET);
	}
	
	function login(req, res) {
	  req.assert('email', 'Email is not valid').isEmail();
	  req.assert('email', 'Email cannot be blank').notEmpty();
	  req.assert('password', 'Password cannot be blank').notEmpty();
	  req.sanitize('email').normalizeEmail({ remove_dots: false });
	
	  var errors = req.validationErrors();
	
	  if (errors) {
	    return res.status(400).send(errors);
	  }
	
	  UserEntry.findOne({ email: req.body.email }, function (err, user) {
	    if (!user) {
	      return res.status(401).send({ msg: 'The email address ' + req.body.email + ' is not associated with any account. ' + 'Double-check your email address and try again.'
	      });
	    }
	    user.comparePassword(req.body.password, function (err, isMatch) {
	      if (!isMatch) {
	        return res.status(401).send({ msg: 'Invalid email or password' });
	      }
	      user.loginDate = new Date();
	      user.save();
	      res.send({ token: generateToken(user), user: user.toJSON() });
	    });
	  });
	};
	
	function register(req, res) {
	  req.assert('name', 'Name cannot be blank').notEmpty();
	  req.assert('email', 'Email is not valid').isEmail();
	  req.assert('email', 'Email cannot be blank').notEmpty();
	  req.assert('password', 'Password must be at least 4 characters long').len(4);
	  req.sanitize('email').normalizeEmail({ remove_dots: false });
	
	  var errors = req.validationErrors();
	
	  if (errors) {
	    return res.status(400).send(errors);
	  }
	
	  UserEntry.findOne({ email: req.body.email }, function (err, user) {
	    if (user) {
	      return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });
	    }
	    user = new UserEntry({
	      first_name: req.body.firstName,
	      last_name: req.body.lastName,
	      email: req.body.email,
	      password: req.body.password
	    });
	    user.save(function (err) {
	      res.send({ token: generateToken(user), user: user });
	    });
	  });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	var crypto = __webpack_require__(32);
	var bcrypt = __webpack_require__(100);
	var mongoose = __webpack_require__(7);
	
	var schemaOptions = {
	  timestamps: true,
	  toJSON: {
	    virtuals: true
	  }
	};
	
	var userSchema = new mongoose.Schema({
	  name: String,
	  email: { type: String, unique: true },
	  password: String,
	  passwordResetToken: String,
	  passwordResetExpires: Date,
	  gender: String,
	  location: String,
	  website: String,
	  picture: String,
	  facebook: String,
	  twitter: String,
	  google: String,
	  github: String,
	  ionic_id: String,
	  push_token: String,
	  vk: String,
	  allergies: [{}],
	  searches: [{}],
	  reactions: [{}],
	  loginDate: Date,
	  dob: Date
	}, schemaOptions);
	
	userSchema.pre('save', function (next) {
	  var user = this;
	  if (!user.isModified('password')) {
	    return next();
	  }
	  bcrypt.genSalt(10, function (err, salt) {
	    bcrypt.hash(user.password, salt, null, function (err, hash) {
	      user.password = hash;
	      next();
	    });
	  });
	});
	
	userSchema.methods.comparePassword = function (password, cb) {
	  bcrypt.compare(password, this.password, function (err, isMatch) {
	    cb(err, isMatch);
	  });
	};
	
	userSchema.virtual('gravatar').get(function () {
	  if (!this.get('email')) {
	    return 'https://gravatar.com/avatar/?s=200&d=retro';
	  }
	  var md5 = crypto.createHash('md5').update(this.get('email')).digest('hex');
	  return 'https://gravatar.com/avatar/' + md5 + '?s=200&d=retro';
	});
	
	userSchema.options.toJSON = {
	  transform: function transform(doc, ret, options) {
	    delete ret.password;
	    delete ret.passwordResetToken;
	    delete ret.passwordResetExpires;
	  }
	};
	
	var User = mongoose.model('User', userSchema);
	
	module.exports = User;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(7);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(52);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(7);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(51);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(53);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(41);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _jsonwebtoken = __webpack_require__(20);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _webpack = __webpack_require__(21);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(50);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(55);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(56);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(43);
	
	var _reactRedux = __webpack_require__(1);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(54);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(42);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(49);
	
	var _post = __webpack_require__(47);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _medicalrights = __webpack_require__(45);
	
	var _medicalrights2 = _interopRequireDefault(_medicalrights);
	
	var _populateDB = __webpack_require__(46);
	
	var _populateDB2 = _interopRequireDefault(_populateDB);
	
	var _user = __webpack_require__(48);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _dummyData = __webpack_require__(44);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(19);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	
	
	// Webpack Requirements
	var app = new _express2.default();
	
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	app.use(function (req, res, next) {
	  req.isAuthenticated = function () {
	    var token = req.headers.authorization && req.headers.authorization.split(' ')[1] || req.cookies && req.cookies.token;
	    try {
	      var tokenSecret = process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET : 'zivIsTheKing';
	      return _jsonwebtoken2.default.verify(token, tokenSecret);
	    } catch (err) {
	      return false;
	    }
	  };
	
	  if (req.isAuthenticated()) {
	    var payload = req.isAuthenticated();
	    User.findById(payload.sub, function (err, user) {
	      req.user = user;
	      next();
	    });
	  } else {
	    next();
	  }
	});
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  //dummyData();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _post2.default);
	app.use('/api', _medicalrights2.default);
	app.use('/api', _populateDB2.default);
	app.use('/api', _user2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" type=\'text/css\'>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          _IntlWrapper2.default,
	          null,
	          _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	        )
	      ));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("bcrypt-nodejs");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("fast-csv");

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = require("hashmap");

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = require("material-ui/AppBar");

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = require("material-ui/DatePicker");

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FontIcon");

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/close");

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = require("mobile-detect");

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = require("react-search-input");

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = require("universal-cookie");

/***/ },
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Stepper");

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = require("material-ui/internal/ExpandTransition");

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = require("landricks-components");

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = require("react-scroll");

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = require("react-stars");

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = require("window-or-global");

/***/ }
/******/ ]);