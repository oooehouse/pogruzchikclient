import { connect } from 'react-redux';

import Header from '../components/layout/header/Header';
import { logOut } from '../redux/user/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(Header);
