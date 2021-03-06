/* eslint-disable global-require */
import React, {Component} from 'react';
import { Route, IndexRoute,Redirect } from 'react-router';
import App from './modules/App/App';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    {/*<IndexRoute*/}
      {/*getComponent={(nextState, cb) => {*/}
        {/*require.ensure([], require => {*/}
          {/*cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);*/}
        {/*});*/}
      {/*}}*/}
    {/*/>*/}
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Wizard/pages/LandingPage/LandingPage').default);
        });
      }}
    />
    <Route
      path="/wizard"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Wizard/pages/WizardPage/WizardPage').default);
        });
      }}
    />
    <Route
      path="/login"
      component={Login}
    />
    <Route
      path="/register"
      component={Register}
    />
    {/*<Route*/}
      {/*path="/landing2"*/}
      {/*getComponent={(nextState, cb) => {*/}
        {/*require.ensure([], require => {*/}
          {/*cb(null, require('./modules/Wizard/pages/LandingPageV2/LandingPageV2').default);*/}
        {/*});*/}
      {/*}}*/}
    {/*/>*/}
    {/*<Route*/}
      {/*path="/posts/:slug-:cuid"*/}
      {/*getComponent={(nextState, cb) => {*/}
        {/*require.ensure([], require => {*/}
          {/*cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);*/}
        {/*});*/}
      {/*}}*/}
    {/*/>*/}
  </Route>
);
