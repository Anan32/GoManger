import React, { Component } from 'react';
import Header from "./header";
import { Jumbotron, Container } from 'reactstrap';


export default class Pembayaran extends Component {

  componentDidMount(){
    var jumlah = sessionStorage.total;
    document.getElementById("total").innerHTML = jumlah;
}

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Checkout Pembayaran</h1>
            <hr></hr>
            <p className="lead">Total Pembayaran:</p>
            <p id="total" />
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
