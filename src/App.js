import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import Bebida from './pages/Bebida';
import Comida from './pages/Comida';
import Explorar from './pages/Explorar';
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
            <Route path="/comidas" component={ Comida } />
            <Route path="/bebidas" component={ Bebida } />
            <Route path="/comidas/{id-da-receita}" component={ Comida } />
            <Route path="/bebidas/{id-da-receita}" component={ Comida } />
            <Route path="/comidas/{id-da-receita}/in-progress" component={ Bebida } />
            <Route path="/bebidas/{id-da-receita}/in-progress" component={ Bebida } />
            <Route path="/explorar" component={ Explorar } />
            <Route path="/explorar/comidas" component={ Explorar } />
            <Route path="/explorar/bebidas" component={ Explorar } />
            <Route path="/explorar/comidas/ingredientes" component={ Explorar } />
            <Route path="/explorar/bebidas/ingredientes" component={ Explorar } />
            <Route path="/explorar/comidas/area" component={ Explorar } />
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
