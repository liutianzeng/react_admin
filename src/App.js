import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import storage from "./utils/storageUtil";


class App extends React.Component {
 render(){

     return(
         <BrowserRouter>
         <Switch>
             <Route path='/login' component={Login}></Route>
             <Route path='/' component={Admin}></Route>
         </Switch>
         </BrowserRouter>
     )

 }
}

export default App;

