import React from 'react';
import case_concept from '../../../../images/case_concept.jpg';

const CaseConcept = () => {
  return (
    <div>
      <h2>Концепт Case - фронтальный погрузчик Tetra</h2>
      <img
        src={case_concept}
        alt='pogruzchik'
        className='img-float-right img-page'
      />
      <p>
        На выставке спец техники Bauma 2019 прошедшей в апреле компания Case
        показала для зрителей концепт фронтального погрузчика получившего
        название проекта «Project Tetra». Большинство компаний, представленных
        на выставке делали упор на спец технику работающих с применением
        электроприводы или гибридных систем. «Project Tetra» - ориентирован на
        применение природного газа, который соответствует действующим
        экологическим стандартам и соответствует основным техническим
        характеристикам что и дизельный вариант.
        <br />
        Двигатель фронтального погрузчика разработан производителем совместно с
        его дочерней компанией и развивает максимальную мощность до 230 л.с.
        <br />
        Компания Case одна из первых реализовала внедрение футуристического
        дизайна для фронтального погрузчика.
        <br />
        Значительная часть кабины оператора переработана и обеспечивает ее
        улучшенную функциональность.
        <br />
        Несущие элементы кабины оптимизированы и уменьшены без потери несущей
        способности и безопасности, что увеличивает обзорность для оператора.
        Внедрены сенсорные экраны и голосовое управление фронтальным
        погрузчиком, появились системы обнаружения препятствий, биометрические
        системы. Использовали шины MICHELIN нового поколения специально
        разработанные для фронтального погрузчика.
      </p>

      <br />
      <h3>От концепта</h3>
      <div className='iframe-alignment'>
        <iframe
          title='Case_Concept'
          width='1000'
          height='560'
          src='https://www.youtube.com/embed/bpEHmcoshTo'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <h3>до реализации</h3>
      <div className='iframe-alignment'>
        <iframe
          title='Case_Prodaction'
          width='1000'
          height='560'
          src='https://www.youtube.com/embed/W-Tv9qJViM8'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default CaseConcept;
