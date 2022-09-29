import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';
// import CompanyList from './pages/CompanyList';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:name" component={CompanyDetail}></Route>
        {/* <Route exact path="/company-list" component={CompanyList}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
