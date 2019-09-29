import { connect } from 'react-redux';

import LogInPage from '../components/pages/logIn/LogInPage';
import { setAlert } from '../redux/alert/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { setAlert }
)(LogInPage);
