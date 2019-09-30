import React, { Component } from 'react';
import Input from '../../../common/input/Input';
import Button from '../../../common/button/Button';
import './addAdvert.scss';

class AddAdvert extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      vehicle: '',
      company: '',
      location: '',
      price: '',
      phone: '',
      email: '',
      description: ''
    };
    this.state = {
      ...this.initialState
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { createAdvert } = this.props;
    createAdvert({ ...this.state });
    this.setState(this.initialState);
  };

  render() {
    return (
      <form>
        <h2 className='page-title'>Подать объявление</h2>
        <div className='form-wrapper'>
          <h2>Наименование техники</h2>
          <Input
            name='vehicle'
            value={this.state.vehicle}
            onChange={e => this.onChange(e)}
            id='vehicle-add-advert-page-id'
            type='vehicle'
            placeholder='Название техники'
          />
          <h2>Название организации</h2>
          <Input
            name='company'
            value={this.state.company}
            onChange={e => this.onChange(e)}
            id='company-add-advert-page-id'
            type='company'
            placeholder='Название компании'
          />
          <h2>Расположение</h2>
          <Input
            name='location'
            value={this.state.location}
            onChange={e => this.onChange(e)}
            id='location-add-advert-page-id'
            type='location'
            placeholder='Расположение, город, район ...'
          />
          <h2>Цена за час, в бел. руб.</h2>
          <Input
            name='price'
            value={this.state.price}
            onChange={e => this.onChange(e)}
            id='price-add-advert-page-id'
            type='price'
            placeholder='Цена в бел. руб. за час'
          />
          <h2>Контактный номер телефона</h2>
          <Input
            name='phone'
            value={this.state.phone}
            onChange={e => this.onChange(e)}
            id='phone-add-advert-page-id'
            type='phone'
            placeholder='+375 00 000 00 00'
          />
          <h2>Контактный e-mail</h2>
          <Input
            name='email'
            value={this.state.email}
            onChange={e => this.onChange(e)}
            id='email-add-advert-page-id'
            type='email'
            placeholder='info@gmail.com'
          />

          <h2>
            <span className='text-vertical-center'>Описание:</span>
          </h2>
          <textarea
            className='advert-description'
            maxLength='264'
            minLength='40'
            rows='5'
            placeholder='Дайте описание вашей техники'
            name='description'
            value={this.state.description}
            onChange={this.onChange}
          />
          <span />
          <Button className='submit-button' onClick={e => this.onSubmit(e)}>
            Отправить
          </Button>
        </div>
      </form>
    );
  }
}

export default AddAdvert;
