import React, { Component } from 'react';
import Input from '../../../../common/input/Input';
import Button from '../../../../common/button/Button';
import './logInForm.scss';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isTypeVisible: 'password'
    };
  }

  togglePassword = () => {
    if (this.state.isTypeVisible === 'password') {
      this.setState({ isTypeVisible: 'text' });
    } else this.setState({ isTypeVisible: 'password' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { login } = this.props;
    const datalogin = {
      email: this.state.email,
      password: this.state.password
    };
    login(datalogin);
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form>
        <h2 className='page-title'>Sign in</h2>
        <div className='form-wrapper'>
          <h2>Enter your email</h2>
          <Input
            name='email'
            value={this.state.email}
            onChange={e => this.onChange(e)}
            id='email-log-in-id'
            type='email'
            placeholder='email'
          />
          <h2>Enter your password</h2>
          <Input
            value={this.state.password}
            onChange={e => this.onChange(e)}
            name='password'
            id='password-sign-log-in-id'
            type={this.state.isTypeVisible}
            placeholder='password'
            passwordToggleVisible={e => this.togglePassword(e)}
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

export default LogInForm;
