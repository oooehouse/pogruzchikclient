import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  togglePassword = () => {
    if (this.state.isTypeVisible === 'password') {
      this.setState({ isTypeVisible: 'text' });
    } else this.setState({ isTypeVisible: 'password' });
  };

  render() {
    const {
      id,
      className,
      label,
      value,
      passwordToggleVisible,
      error,
      ...attrs
    } = this.props;
    const classes = classNames('input', className, { error });
    const classesIcon = classNames(
      'fa',
      'eye-icon-password',
      'fa-eye',
      `${attrs.type === 'text' && 'red-eye'}`
    );
    return (
      <div className='inputWrapper'>
        <div className='labelsWrapper'>
          {label && (
            <label className='inputLabel' htmlFor={id}>
              {label}
            </label>
          )}
          {attrs.required && <span className='inputRequired'>Required</span>}
        </div>
        {attrs.name === 'password' || attrs.name === 'rePassword' ? (
          <Fragment>
            <input
              autoComplete='user password'
              name={id}
              id={id}
              className={classes}
              placeholder={attrs.placeholder}
              {...attrs}
            />
            <span className={classesIcon} onClick={passwordToggleVisible} />
          </Fragment>
        ) : (
          <input
            name={id}
            value={value}
            id={id}
            className={classes}
            {...attrs}
          />
        )}
        {error && <span className='inputError'>{error}</span>}
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
};

Input.defaultProps = {
  className: '',
  label: '',
  error: ''
};

export default Input;
