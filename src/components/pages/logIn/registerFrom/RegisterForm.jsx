import React, { Component } from 'react';
import Input from '../../../../common/input/Input';
import Button from '../../../../common/button/Button';
import './registerForm.scss';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    };
    this.state = {
      isTypeVisible: 'password',
      isTypeVisible2: 'password',
      ...this.initialState
    };
  }

  togglePassword = () => {
    if (this.state.isTypeVisible === 'password') {
      this.setState({ isTypeVisible: 'text' });
    } else this.setState({ isTypeVisible: 'password' });
  };
  toggleRePassword = () => {
    if (this.state.isTypeVisible2 === 'password') {
      this.setState({ isTypeVisible2: 'text' });
    } else this.setState({ isTypeVisible2: 'password' });
  };

  onChange = ({ target }) => this.setState({ [target.name]: target.value });

  onSubmit = e => {
    e.preventDefault();
    const { register, setAlert } = this.props;

    if (this.state.password !== this.state.rePassword) {
      setAlert('Password do not match', 'danger');
    }

    const dataRegister = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    register(dataRegister);

    this.setState(this.initialState);
  };

  render() {
    return (
      <form>
        <h2 className='page-title'> Register From</h2>

        <div className='form-wrapper'>
          <h2>Enter your name</h2>
          <Input
            id='name-register-id'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={e => this.onChange(e)}
            name='name'
          />
          <h2>Enter your email</h2>
          <Input
            id='email-register-id'
            type='email'
            placeholder='email'
            value={this.state.email}
            onChange={e => this.onChange(e)}
            name='email'
          />
          <h2>Enter your password</h2>
          <Input
            id='password-form-register-id'
            type={this.state.isTypeVisible}
            placeholder='password'
            value={this.state.password}
            onChange={e => this.onChange(e)}
            name='password'
            passwordToggleVisible={e => this.togglePassword(e)}
          />
          <h2>Confirm your password</h2>
          <Input
            id='password-confirm-register-id'
            type={this.state.isTypeVisible2}
            placeholder='confirm password'
            value={this.state.rePassword}
            onChange={e => this.onChange(e)}
            name='rePassword'
            passwordToggleVisible={e => this.toggleRePassword(e)}
          />
          <span />
          <Button className='submit-button' onClick={e => this.onSubmit(e)}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
