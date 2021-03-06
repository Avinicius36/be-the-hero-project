import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './Register';


export default function Routes() {
    return (

        <BrowserRouter>
        <Switch>
        <Route path ="/" exact component={Logon} />
        <Route path ="/register" component={Register} />

        </Switch>

        </BrowserRouter>
    )
    //switch garante que cada rota seja executada de uma vez
}