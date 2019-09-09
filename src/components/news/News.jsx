import React from 'react';
import { NavLink } from 'react-router-dom';
import './news.scss';

const News = props => {
  return (
    <div>
      <h3>Новсти</h3>
      <div className='news-contaner'>
        <NavLink to='/concept-volvo'>
          Концепт Volvo CE – автономный фронтальный погрузчик ZEUX
        </NavLink>
      </div>

      <div className='news-contaner'>
        <NavLink to='/concept-case'>
          Концепт Case - фронтальный погрузчик Tetra
        </NavLink>
      </div>

      <div className='news-contaner'>
        <NavLink to='/doosan'>
          Обновление линейки - фронтальный погрузчик DOOSAN
        </NavLink>
      </div>
      <div className='news-contaner'>
        <NavLink to='/cat-electro-pogr'>
          Инновации - Фронтальный погрузчик CAT 906 с электрическим приводом
        </NavLink>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
