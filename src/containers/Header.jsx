import { connect } from 'react-redux';

import Header from '../components/layout/header/Header';
import { logout } from '../redux/user/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
