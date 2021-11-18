import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#0e0e86"
        height={80}
        width={80}
        // timeout={3000}
        className={s.Loader}
      />
    );
  }
}
