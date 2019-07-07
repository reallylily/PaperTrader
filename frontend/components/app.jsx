import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// import GreetingContainer from './greeting/home';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import HomeContainer from './home/home_container'
// import StockIndexContainer from './stocks/stock_index_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// {/* <img src={window.images.logo} /> */}

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path='/' component={HomeContainer} />

      {/* <ProtectedRoute exact path="/stocks" component={StockIndexContainer}/> */}
      {/* <Route exact path='/' component={StockIndexContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
