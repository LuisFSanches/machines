import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//COMPONENTS
import Home from './pages/Home'
import AddMachines from './pages/AddMachines'


function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/nova-maquina" exact component={AddMachines}/>
      </Switch>
    </BrowserRouter>
  )
}

export default routes;