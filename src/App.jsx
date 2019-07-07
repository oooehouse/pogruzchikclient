import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
