import React from 'react';
import { Router } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import SiteRouter from './router/SiteRouter.jsx';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className='app'>
        <Layout>
          <SiteRouter />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
