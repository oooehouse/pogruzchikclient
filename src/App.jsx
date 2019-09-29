import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/layout/Layout.jsx';
import SiteRouter from './router/SiteRouter.jsx';
import { createBrowserHistory } from 'history';
import { loadUser } from './redux/user/action';

export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { token, loadUser } = this.props;
    if (!!token) {
      loadUser();
    }
  }

  render() {
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
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
