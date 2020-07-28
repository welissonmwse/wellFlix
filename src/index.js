import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import Home from '../src/Pages/Home';
import CadastroVideo from './Pages/cadastro/Video'
import Categoria from './Pages/cadastro/Categoria'

const Pagina404 = () => (<div>Página404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={Categoria} />
      <Route component={Pagina404}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
