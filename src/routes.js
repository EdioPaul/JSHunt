import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

//cria componente usando função, sem utilizar classe.
const Routes = () => (
   //BrowserRouter define que estamos utilizando rotas através de um Browser.
   //Switch permite que apenas uma unica rota seja chamada ao mesmo tempo.
   <BrowserRouter>
     <Switch>
       <Route exact path="/" component= { Main } />
       <Route path="/products/:id" component={ Product } />
     </Switch>
   </BrowserRouter>

   );

   export default Routes;