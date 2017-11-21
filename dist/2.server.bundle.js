exports.ids = [2];
exports.modules = {

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// Import Images
	
	
	// Material
	
	
	// Import Components
	// import PostList from '../../components/PostList';
	
	// Import Actions
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	// import { getPosts } from '../../PostReducer';
	
	//images
	// Import Images
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(1);
	
	var _landricksComponents = __webpack_require__(111);
	
	var _background = '/' + "2caa7ab318c0e290315b2e5d1ea02f76.jpg";
	
	var _background2 = _interopRequireDefault(_background);
	
	var _RaisedButton = __webpack_require__(44);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(46);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(45);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _IconSvg = __webpack_require__(51);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	var _logo_trans = '/' + "cb8163d33fdfd9ad100950b151a8773e.png";
	
	var _logo_trans2 = _interopRequireDefault(_logo_trans);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BASE_THEME = {
	  fontFamily: 'Lato',
	  baseFontSize: '18px'
	};
	
	var HEADER_BAND_THEME = _extends({}, BASE_THEME, {
	  baseFontSize: '18px',
	  backgroundColor: '#71A2B6',
	  textColor: '#000000',
	  primaryColor: '#000000',
	  primaryContrastColor: '#71A2B6',
	  objectDesign: 'square-solid',
	  backgroundImage: '' + _background2.default
	});
	
	var HEAVY_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#699aad',
	  textColor: '#FFFFFF',
	  primaryColor: '#FFFFFF',
	  primaryContrastColor: '#000000',
	  secondaryColor: '#C99DA3',
	  objectDesign: 'square-outline'
	});
	
	var LIGHT_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#8fcfe8',
	  // textColor: '#888888',
	  textColor: '#FFFFFF',
	  primaryColor: '#996888',
	  secondaryColor: '#C99DA3'
	});
	
	var styles = {
	  homePageContainer: {
	    background: 'url("http://content.mysupermarket.co.il/Content/HomePage/Images/HP-BG.jpg") no-repeat center',
	    textAlign: 'center',
	    height: '100%'
	  },
	  logo: {
	    position: 'fixed',
	    top: '10px',
	    left: '15px',
	    color: 'black'
	  },
	  homePageTextContainer: {
	    position: 'relative',
	    top: '26%',
	    textAlign: 'center',
	    color: 'black'
	  },
	  homePageTextTitle: {
	    fontSize: '30px',
	    fontWeight: "bold",
	    marginBottom: "10px"
	  },
	  homePageTextSubTitle: {
	    fontSize: '18px',
	    marginBottom: "15px"
	  },
	  button: {
	    textAlign: 'center',
	    display: 'inline-flex',
	    fontSize: "24px"
	    // fontWeight:"bold"
	  },
	  callForAction: {
	    color: '#71A2B6'
	  },
	  callForActionContainer: {
	    marginTop: '60px'
	  },
	  logoContainer: {},
	  logoTitleContainer: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center'
	  },
	  logoImage: {
	    height: '90px'
	  },
	  logoTitle: {
	    fontSize: '25px',
	    fontWeight: 'bold'
	  },
	  logoTagline: {
	    marginTop: '10px',
	    fontSize: '14px'
	  }
	};
	
	var LandingPage = function (_Component) {
	  _inherits(LandingPage, _Component);
	
	  function LandingPage(props) {
	    _classCallCheck(this, LandingPage);
	
	    var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));
	
	    _this.state = {};
	
	    _this.goToWizard = _this.goToWizard.bind(_this);
	    return _this;
	  }
	
	  _createClass(LandingPage, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('LandingPage login', { 'ab_version': 'v1' });
	    }
	  }, {
	    key: 'goToWizard',
	    value: function goToWizard() {
	      this.context.mixpanel.track('LandingPage login');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _landricksComponents.LandingCanvas,
	        { wrapperStyle: {
	            width: '100%'
	          } },
	        _react2.default.createElement(
	          _landricksComponents.GenericBrick,
	          {
	            theme: HEADER_BAND_THEME,
	            wrapperStyle: styles.homePageContainer },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: styles.logoContainer },
	              _react2.default.createElement(
	                'div',
	                { style: styles.logoTitleContainer },
	                _react2.default.createElement('img', { src: _logo_trans2.default, style: styles.logoImage })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.logoTagline },
	                'Find out if products matches your exact taste'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.callForActionContainer },
	              _react2.default.createElement(
	                'div',
	                { style: {
	                    fontSize: '30px'
	                  } },
	                'All the products in one place'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: {
	                    fontSize: '20px',
	                    marginBottom: '20px'
	                  } },
	                'Easy to understand if it\'s fits for you'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/wizard', style: styles.callForAction },
	                _react2.default.createElement(_landricksComponents.CallToAction, {
	                  wrapperStyle: {
	                    backgroundColor: 'white',
	                    color: '#71A2B6'
	                  },
	                  label: 'Get started',
	                  onClick: this.goToWizard })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: HEAVY_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our vision'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'We aim to improve human health by being the most accessible platform for dependable and accurate medical rights information.'
	            )
	          ),
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("http://www.freepngimg.com/thumb/vision/3-2-vision-free-download-png-thumb.png") no-repeat center',
	              border: 'none'
	            } })
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: LIGHT_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("https://nelioabtesting.com/wp-content/uploads/2014/07/goal-icon.png") no-repeat center',
	              border: 'none'
	            } }),
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            { wrapperStyle: { marginLeft: '20px' } },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our goal'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Every insurance policy is different and often very hard to interpret - We want to improve your health by rising your awareness to your medical rights..'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LandingPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// PostListPage.need = [() => { return fetchPosts(); }];
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    // posts: getPosts(state),
	  };
	}
	
	LandingPage.propTypes = {
	  // posts: PropTypes.arrayOf(PropTypes.shape({
	  //   name: PropTypes.string.isRequired,
	  //   title: PropTypes.string.isRequired,
	  //   content: PropTypes.string.isRequired,
	  // })).isRequired,
	  // showAddPost: PropTypes.bool.isRequired,
	  // dispatch: PropTypes.func.isRequired,
	};
	LandingPage.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	LandingPage.contextTypes = {
	  router: _react2.default.PropTypes.object,
	  mixpanel: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LandingPage);

/***/ }

};;