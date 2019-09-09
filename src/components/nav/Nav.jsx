import React from 'react';
import ButtonGroup from '../../common/buttonGroup/ButtonGroup.jsx';
import Button from '../../common/button/Button.jsx';

const Nav = props => {
  return (
    <ButtonGroup vertical>
      <Button exact to='/'>
        Главная
      </Button>
      <Button exact to='/use-pogr'>
        Погрузка грунта в самосвалы
      </Button>
      <Button exact to='/clear-snow'>
        Уборка снега погрузчиком
      </Button>
      <Button exact to='/front-pogr18'>
        Фронтальный погрузчик ТО-18
      </Button>
      <Button exact to='/telescop-pogr'>
        Телескопический погрузчик
      </Button>
      <Button exact to='/fork-pogr'>
        Вилочный погрузчик
      </Button>
      <Button exact to='/mini-pogr'>
        Мини-погрузчик
      </Button>
      <Button exact to='/universal-pogr'>
        Универсальность погрузчиков
      </Button>
      <Button exact to='/front-pogr'>
        Фронтальный погрузчик
      </Button>
      <Button exact to='/pogr-build'>
        Погрузчик на стройке
      </Button>
    </ButtonGroup>
  );
};

Nav.propTypes = {};

export default Nav;
