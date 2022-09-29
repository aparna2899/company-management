import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:name" component={CompanyDetail}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
