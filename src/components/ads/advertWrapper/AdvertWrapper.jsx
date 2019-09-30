import React from 'react';
import './advertWrapper.scss';

const AdvertWrapper = ({
  company,
  phone,
  description,
  price,
  vehicle,
  location
}) => (
  <div className='vehicle-adv'>
    <p>
      Техника: <strong> {vehicle ? vehicle : 'погрузчик'} </strong>
    </p>
    <p>Организация: {company ? company : 'нет названия'}</p>
    <p>Описание: {description ? description : 'описание отсутствует'}</p>
    <p>Расположение: {location ? location : 'Минск'}</p>
    <p>Цена: {price ? price + ' р.час' : 'договорная'}</p>
    <p>
      Тел.: <a href='tel:+375299452002'>{phone}</a>
    </p>
  </div>
);
console.log('you are inside adverWrapper');

export default AdvertWrapper;
