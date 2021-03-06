import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MenuAppBar from '../../../MenuAppBar/MenuAppBar'
import { connect } from 'react-redux';
import {
  LandingCanvas,
  ThemePropagator,
  GenericBrick,
  DoubleContentBrick,
  StrongMessageBrick,
  EnumerationBrick,
  EmailSqueezeBrick,
  FooterBrick,
  CallToAction,
  FeatureItem,
  PlaceHolder
} from 'landricks-components';

// Import Images
import background from '../../images/background_mirror.jpg';

// Material
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';


import BoolLogoSvg from '../../../App/IconSvg'

// Import Components
// import PostList from '../../components/PostList';

// Import Actions
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
// import { getPosts } from '../../PostReducer';

//images
// Import Images
import logoImageWhite from '../../images/logo_trans.png';
import groceriesImage from '../../images/groceries.jpg';

const BASE_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '18px'
};

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  // backgroundColor: '#71A2B6',
  backgroundColor: 'white',
  textColor: '#000000',
  primaryColor: '#000000',
  primaryContrastColor: '#71A2B6',
  objectDesign: 'square-solid',
  backgroundImage: `${background}`
};

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#699aad',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#000000',
  secondaryColor: '#C99DA3',
  objectDesign: 'square-outline'
};

const LIGHT_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#8fcfe8',
  // textColor: '#888888',
  textColor: '#FFFFFF',
  primaryColor: '#996888',
  secondaryColor: '#C99DA3'
};

const styles = {
  homePageContainer:{
    // background: `url("${background}") no-repeat center`,
    // textAlign:'center',
    height:'100%'
    // marginBottom:'100px'
  },
  logo:{
    position:'fixed',
    top:'10px',
    left:'15px',
    color:'black'
  },
  homePageTextContainer: {
    position: 'relative',
    top: '26%',
    textAlign:'center',
    color:'black'
  },
  homePageTextTitle: {
    fontSize:'30px',
    fontWeight:"bold",
    marginBottom:"10px"
  },
  homePageTextSubTitle: {
    fontSize:'18px',
    marginBottom:"15px"
  },
  button: {
    textAlign: 'center',
    display: 'inline-flex',
    fontSize:"24px",
    // fontWeight:"bold"
  },
  callForAction:{
    // backgroundColor:'#71A2B6',
    // color:'#FFFFFF'
  },
  callForActionContainer:{
    marginTop:'35px'
  },
  logoContainer:{

  },
  logoTitleContainer:{
    // display:'flex',
    // alignItems:'center',
    // marginTop: '90px'
  },
  logoImage:{
    height:'90px'
  },
  logoTitle:{
    fontSize:'25px',
    fontWeight:'bold',
  },
  logoTagline:{
    marginTop:'10px',
    fontSize:'14px'
  },
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callToActionText:'Let me know when it\'s ready...',
      email:''
    };

    this.registerUser = this.registerUser.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }

  componentDidMount() {
    this.context.mixpanel.track('LandingPage login',{'ab_version':'v1'});
  }

  emailHasChanged(email){
    this.state.email = email;
  }

  registerUser(){
    this.setState({callToActionText: 'Sent'});
    this.context.mixpanel.track('Register email',{
      'ab_version':'v1',
      'email':this.state.email,
    });
  }

  render() {
    return (
      <LandingCanvas  wrapperStyle={{
          width:'100%'
        }
      }>
          <GenericBrick
            theme={ HEADER_BAND_THEME }
            wrapperStyle={
              styles.homePageContainer
            }>
          <ThemePropagator>
            <div style={{
              display:'flex',
              alignItems:'flex-end',
              textAlign:'center',
              justifyContent:'center'
            }}>
              <div>
              <div style={styles.logoContainer}>
                <div style={styles.logoTitleContainer} >
                  <img src={logoImageWhite} style={styles.logoImage} />
                </div>
                {/*<div style={styles.logoTagline}>Find out if products matches your exact taste</div>*/}
              </div>
              <div style={styles.callForActionContainer}>
                <div style={{
                  fontSize:'30px'
                }}>All the products in one place</div>
                <div style={{
                  fontSize:'20px',
                  marginBottom:'20px'
                }}>Easy to understand if it's fits for you or not</div>
                <div style={{
                  fontSize:'14px',
                  marginBottom:'10px'
                }}>Coming soon</div>
                {/*<Link to={'/wizard'} style={styles.callForAction}>*/}
                <TextField
                  hintText="Email"
                  onChange={this.emailHasChanged()}
                />
                <CallToAction
                  wrapperStyle={{
                    backgroundColor:'#71A2B6',
                    color:'white'
                  }}
                  label={this.state.callToActionText}
                  onClick={this.registerUser}/>
              {/*</Link>*/}
              </div>
              {/*<div style={{*/}
                {/*textAlign: 'center',*/}
                {/*fontSize:'14px'*/}
              {/*}}>We don't save any information</div>*/}
            </div>
              <div>
              <img src={groceriesImage} style={{ height:'300px'}} />
            </div>
            </div>
          </ThemePropagator>
            {/*theme={ HEADER_BAND_THEME }*/}
            {/*messageLevel1="Find now your medical rights"*/}
            {/*messageLevel2="Easy way to see your medical rights according to your doctor diagnostic"*/}
            {/*CTAs={ <CallToAction label="Get started" onClick={this.goToWizard} href={'/wizard'}/>}*/}
          {/*/>*/}
          </GenericBrick>
          <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
            <ThemePropagator>
              <h1>Our vision</h1>
              <p>We aim to improve human health by being the most accessible platform for dependable and accurate medical rights information.</p>
              {/*<CallToAction label="learn more" />*/}
            </ThemePropagator>
            <PlaceHolder
              label={''}
              wrapperStyle={
                {
                  background: 'url("http://www.freepngimg.com/thumb/vision/3-2-vision-free-download-png-thumb.png") no-repeat center',
                  border:'none'
                }
              }/>
          </DoubleContentBrick>
          <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
            <PlaceHolder
              label={''}
              wrapperStyle={
                {
                  background: 'url("https://nelioabtesting.com/wp-content/uploads/2014/07/goal-icon.png") no-repeat center',
                  border:'none'
                }
              }/>
            <ThemePropagator wrapperStyle={ {marginLeft: '20px'} }>
              <h1>Our goal</h1>
              <p>Every insurance policy is different and often very hard to interpret - We want to improve your health by rising your awareness to your medical rights..</p>
            </ThemePropagator>
          </DoubleContentBrick>

          {/*<EnumerationBrick*/}
            {/*theme={ HEAVY_BAND_THEME }*/}
            {/*title="Awesome features"*/}
            {/*subtitle="You can add any number of them">*/}
            {/*<FeatureItem*/}
              {/*icon="rocket"*/}
              {/*title="Feature 1"*/}
              {/*// description="bla bla bla bla bla"*/}
            {/*/>*/}
            {/*<FeatureItem*/}
              {/*icon="rocket"*/}
              {/*title="Feature 2"*/}
              {/*// description="bla bla bla bla bla"*/}
            {/*/>*/}
            {/*<FeatureItem*/}
              {/*icon="rocket"*/}
              {/*title="Feature 3"*/}
              {/*// description="bla bla bla bla bla"*/}
            {/*/>*/}
          {/*</EnumerationBrick>*/}

          {/*<DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>*/}
            {/*<PlaceHolder label="image placeholder" />*/}
            {/*<PlaceHolder useLoremIpsum={ true } />*/}
          {/*</DoubleContentBrick>*/}
          {/*<DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>*/}
            {/*<PlaceHolder useLoremIpsum={ true } />*/}
            {/*<PlaceHolder label="image placeholder" />*/}
          {/*</DoubleContentBrick>*/}
          {/*<EmailSqueezeBrick*/}
            {/*title="If you wanna stay updated about medical insurance updates"*/}
            {/*subtitle="Always stay updated"*/}
            {/*theme={ HEAVY_BAND_THEME }*/}
            {/*buttonLabel="Send"*/}
            {/*placeholder="Enter your email"*/}
          {/*/>*/}
        </LandingCanvas>
    );
  }
}

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
  muiTheme: React.PropTypes.object
};

LandingPage.contextTypes = {
  router: PropTypes.object,
  mixpanel: PropTypes.object
};

export default connect(mapStateToProps)(LandingPage);
