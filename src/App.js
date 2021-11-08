import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import detalhesBebidas from './pages/DetalhesBebidas';
import detalhesComidas from './pages/DetalhesComidas';
import Explorar from './pages/Explorar';
import explorarBebidas from './pages/ExplorarBebidas';
import explorarComidas from './pages/ExplorarComidas';
import explorarIngredientes from './pages/ExplorarIngredientes';
import explorarOrigem from './pages/ExplorarOrigem';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitaFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/comidas/:id-da-receita/in-progress" component={ Bebidas } />
            <Route path="/bebidas/:id-da-bebida/in-progress" component={ Bebidas } />
            <Route path="/comidas/:id-da-receita" component={ detalhesComidas } />
            <Route path="/bebidas/:id-da-bebida" component={ detalhesBebidas } />
            <Route exact path="/comidas" component={ Comidas } />
            <Route exact path="/bebidas" component={ Bebidas } />
            <Route path="/explorar/comidas/area" component={ explorarOrigem } />
            <Route
              path="/explorar/comidas/ingredientes"
              component={ explorarIngredientes }
            />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ explorarIngredientes }
            />
            <Route path="/explorar/comidas" component={ explorarComidas } />
            <Route path="/explorar/bebidas" component={ explorarBebidas } />
            <Route path="/explorar" component={ Explorar } />
            <Route path="/perfil" component={ Perfil } />
            <Route path="/receitas-feitas" component={ ReceitasFeitas } />
            <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
          </Switch>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
