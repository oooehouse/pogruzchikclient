import React from 'react';
import './home.scss';
import Ads from '../../../containers/Ads';

const Home = () => {
  return (
    <div>
      <h2>Аренда погрузчика</h2>
      <p>
        Строительство в больших и малых городах привлекает значительное
        количество спецтехники. Аренда строительной техники постоянно
        востребована. Современные компании выделяют в отдельное подразделение
        Управление Механизации со значительным автопарком и оказывают услугу –
        спецтехника аренда. Самый популярный механизм ТО 18 – Аренда Погрузчика.
        Погрузчик многофункциональная техника, имеющая различную
        грузоподъёмность, мощность, а также значительную манёвренность. Основные
        виды работ, где привлекают в аренду фронтальный погрузчик разгрузка и
        погрузка грунта, уборка снега, строительство дорог.
      </p>
      <Ads />
    </div>
  );
};

export default Home;
