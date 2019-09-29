import { connect } from 'react-redux';

import LogInForm from '../components/pages/logIn/logInForm/LogInForm';
import { login } from '../redux/user/action';
import { setAlert } from '../redux/alert/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { login, setAlert }
)(LogInForm);
