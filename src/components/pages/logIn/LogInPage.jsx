import React, { Component } from 'react';
import Button from '../../../common/button/Button';
import ButtonGroup from '../../../common/buttonGroup/ButtonGroup';
import LogInForm from './logInForm/LogInForm';
import RegisterForm from './registerFrom/RegisterForm';
import { Redirect } from 'react-router-dom';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true
    };
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  };
  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  };

  render() {
    const { switchOn } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div>
        <ButtonGroup className='register-singin-menu'>
          <Button onClick={this.handleSwitchOn} active={switchOn}>
            Log in
          </Button>
          <Button onClick={this.handleSwitchOff} active={!switchOn}>
            Register
          </Button>
        </ButtonGroup>

        {switchOn ? <LogInForm /> : <RegisterForm />}
      </div>
    );
  }
}

export default LogInPage;
