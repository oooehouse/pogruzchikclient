import React from 'react';

const AdvertWrapper = ({
  company,
  phone,
  description,
  price,
  vehicle,
  location
}) => {
  return (
    <div className='advert-wrapper'>
      <p>Организация: {company ? company : 'нет названия'}</p>
      <p>Описание: {description ? description : 'описание отсутствует'}</p>
      <p>Наименование техники: {vehicle ? vehicle : 'погрузчик'}</p>
      <p>Расположение: {location ? location : 'Минск'}</p>
      <p>Цена: {price ? price + 'р.час' : 'договорная'}</p>
      <p>
        Тел.: <a href='tel:+375299452002'>+375(29)9452002</a>
      </p>
    </div>
  );
};

export default AdvertWrapper;
