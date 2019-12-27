import React from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import AuthContainer from './Containers/AuthContainer.js'
import SearchContainer from './Containers/SearchContainer.js'
import HeaderContainer from './Containers/HeaderContainer.js'
import FooterContainer from './Containers/FooterContainer.js'


function App() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path="/(|login)" render={({location, history}) => <AuthContainer location={location} history={history}/>}/>
        <Route exact path="/search" render={({location, history}) => <SearchContainer location={location} history={history}/>}/>
      </Switch>
      <FooterContainer />
    </React.Fragment>
  );
}

export default App;
