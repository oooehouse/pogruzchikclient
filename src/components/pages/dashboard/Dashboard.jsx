import React, { Component } from 'react';
import './dashboard.scss';
import Button from '../../../common/button/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Button>
          <i className='fas fa-plus'></i> Добавить объявление
        </Button>
        {user && (
          <>
            <section>
              <h2>Данные пользователя</h2>

              <p>Имя пользователя: {user.name};</p>
              <p>Электронная почта: {user.email};</p>
            </section>
            <section>
              <h2>Объявления {user.name}</h2>
            </section>
            <section>
              <h2>Добавленные в понравившиеся</h2>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default Dashboard;
