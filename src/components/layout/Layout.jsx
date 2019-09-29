import React, { Fragment } from 'react';
import './layout.scss';
import Header from '../../containers/Header';
import Footer from './footer/Footer.jsx';
import Nav from '../nav/Nav.jsx';
import News from '../news/News.jsx';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className='layout-body-wrapper'>
        <div className='left-block'>
          <Nav />
          <h2>Новости</h2>
          <News />
        </div>
        <div className='pages-wrapper'>{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {};

export default Layout;
