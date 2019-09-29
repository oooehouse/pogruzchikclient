import { connect } from 'react-redux';

import RegisterForm from '../components/pages/logIn/registerFrom/RegisterForm';
import { register } from '../redux/user/action';
import { setAlert } from '../redux/alert/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register, setAlert }
)(RegisterForm);
