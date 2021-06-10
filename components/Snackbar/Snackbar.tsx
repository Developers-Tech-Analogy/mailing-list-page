import React, { PureComponent } from 'react';
import styles from './Snackbar.module.css'

export class Snackbar extends PureComponent {
  message = ''

  state = {
    isActive: false,
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  }

  closeSnackBar = () => {
    this.setState({isActive: false});
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className = {isActive ? [styles.snackbar, styles.show, "bg-white text-black text-base"].join(" ") : styles.snackbar}>
        {this.message}
      </div>
    )
  }
}