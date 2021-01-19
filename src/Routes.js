import React from 'react';
import {Router, Switch, Route} from 'react-router';

import login from './paginas/Log_Cad_Hom/login';

import cadastro from './paginas/Log_Cad_Hom/cadastro';

import principal from './paginas/Log_Cad_Hom/principal';



import Home from './paginas/Home';



import {history} from './history';

import Notfound from './NotFound/Notfound';

const Routes = () =>(


    <Router history={history}>
        <Switch>
            {/**DEFINIÇÃO DE TODAS AS ROTAS DO PROJECTO */}
            <Route component={login} exact path="/login"/>;
            <Route component={cadastro} exact path="/cadastro"/>;

            <Route component={principal} exact path="/principal"/>;
           
            <Route component={Home} exact path="/"/>;
            <Route component={Notfound} />;
        </Switch>
    </Router>
)

export default Routes;