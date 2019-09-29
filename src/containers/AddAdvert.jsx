import { connect } from 'react-redux';

import AddAdvert from '../components/pages/addAdvert/AddAdvert';
import { createAdvert } from '../redux/adverts/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { createAdvert }
)(AddAdvert);
