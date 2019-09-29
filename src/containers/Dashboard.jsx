import { connect } from 'react-redux';

import Dashboard from '../components/pages/dashboard/Dashboard';
import { changeProfile, deleteUser } from '../redux/user/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { changeProfile, deleteUser }
)(Dashboard);
