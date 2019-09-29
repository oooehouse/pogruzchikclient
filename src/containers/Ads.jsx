import { connect } from 'react-redux';

import Ads from '../components/pages/addAdvert/AddAdvert';
import { setAlert } from '../redux/alert/action';

const mapStateToProps = state => {
  return {
    adverts: state.adverts.adverts
  };
};

export default connect(
  mapStateToProps,
  { setAlert }
)(Ads);
