import React, { Component } from 'react';
import Input from '../../../common/input/Input';
import Button from '../../../common/button/Button';
import './addNews.scss';

class AddNews extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      description: ''
    };
    this.state = {
      ...this.initialState
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { addNews } = this.props;
    addNews({ ...this.state });
    this.setState(this.initialState);
  };

  render() {
    return (
      <form>
        <h2 className='page-title'>Добавить новость</h2>
        <div className='form-wrapper'>
          <h2>Название новости</h2>
          <Input
            name='title'
            value={this.state.title}
            onChange={this.onChange}
            id='title-add-news-page-id'
            type='title'
            placeholder='Название новости'
          />
          <h2>
            <span className='text-vertical-center'>Описание:</span>
          </h2>
          <textarea
            className='news-description'
            maxLength='22264'
            minLength='40'
            placeholder='Описание новости'
            name='description'
            value={this.state.description}
            onChange={this.onChange}
          />
          <span />
          <Button className='submit-button' onClick={this.onSubmit}>
            Добавить
          </Button>
        </div>
      </form>
    );
  }
}

export default AddNews;
