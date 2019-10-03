import { connect } from 'react-redux';

import AddNews from '../components/pages/addNews/AddNews';
import { addNews } from '../redux/news/action';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { addNews }
)(AddNews);
