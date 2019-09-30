import React from 'react';
import './ads.scss';
import AdvertWrapper from './advertWrapper/AdvertWrapper';

const Ads = ({ adverts }) => {
  return (
    <div className='vehicle-adv-wrapper'>
      {!!adverts && adverts.map(ad => <AdvertWrapper key={ad._id} {...ad} />)}
    </div>
  );
};

export default Ads;
