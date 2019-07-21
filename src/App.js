import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <ul className="link-list">
              <li>
                <Link to={'/'} >Novo</Link>
              </li>
              <li>
                <Link to={'/list'} >Lista</Link>
              </li>
            </ul>
          </header>
          <div>
            <Route path={'/'} exact component={NewProductView} ></Route>
            <Route path={'/list'} exact component={ProductListView} ></Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
