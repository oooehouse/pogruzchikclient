import React from 'react';
import './ads.scss';
import AdvertWrapper from './advertWrapper/AdvertWrapper';

const Ads = ({ adverts }) => {
  return <div>{!!adverts && adverts.map(ad => <AdvertWrapper {...ad} />)}</div>;
};

export default Ads;
