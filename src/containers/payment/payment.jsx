import React, { Component } from 'react';
import Header from "../../Components/header";
import Pembayaran from '../../Components/pembayaran';


export default class Payment extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pembayaran />
      </div>
    )
  }
}
