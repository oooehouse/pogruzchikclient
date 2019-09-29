import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/layout/Layout.jsx';
import SiteRouter from './router/SiteRouter.jsx';
import { createBrowserHistory } from 'history';
import { loadUser } from './redux/user/action';
import { loadAdverts } from './redux/adverts/action';

export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   const { loadAdverts } = this.props;
  // }

  componentDidMount() {
    const { token, loadUser, loadAdverts } = this.props;
    loadAdverts();
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
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token
  };
};

export default connect(
  mapStateToProps,
  { loadUser, loadAdverts }
)(App);
