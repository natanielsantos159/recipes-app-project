import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route exact path="/" component={ Login } />
            {/* <Route path="/comidas" component={} />
      <Route path="/bebidas" component={} />
      <Route path="/comidas/{id-da-receita}" component={}/>
      <Route path="/bebidas/{id-da-receita}" component={}/>
      <Route path="/comidas/{id-da-receita}/in-progress" component={}/>
      <Route path="/bebidas/{id-da-receita}/in-progress" component={}/>
      <Route path="/explorar" component={}/>
      <Route path="/explorar/comidas" component={}/>
      <Route path="/explorar/bebidas" component={}/>
      <Route path="/explorar/comidas/ingredientes" component={}/>
      <Route path="/explorar/bebidas/ingredientes" component={}/>
      <Route path="/explorar/comidas/area" component={}/>
      <Route path="/perfil" component={}/>
      <Route path="/receitas-feitas" component={}/>
      <Route path="/receitas-favoritas" component={}/> */}
          </Switch>
        </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
