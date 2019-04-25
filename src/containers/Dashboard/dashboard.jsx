import React, { Component } from 'react';
import Header from'../../Components/header';
import Counter from'../../Components/counter';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';



class Dashboard extends Component {
  state={
    makanan:[{
      id: 1,
      number: 0,
      price: 20000,
      nama: "Sate Taichan",
      gambar:"http://www.dapurkobe.co.id/wp-content/uploads/sate-taichan.jpg",
    },
    {
      id: 2,
      number: 0,
      price: 15000,
      nama: "Sate Madura",
      gambar:"http://inforesepmasakansederhana.com/wp-content/uploads/2018/03/sate-ayam-madura.jpg"
    },
    {
      id: 3,
      number: 0,
      price: 30000,
      nama: "Sate Padang",
      gambar:"https://cdn.idntimes.com/content-images/community/2018/05/kuliner-sate-padang-medan-f749f649241cd270ad3caed203ae87a8_600x400.jpg"
    },
    {
      id: 4,
      number: 0,
      price: 20000,
      nama: "Sate Klathak",
      gambar:"https://bonvoyagejogja.com/wp-content/uploads/2017/03/2-Pong.jpg"
    },
    {
      id: 5,
      number: 0,
      price: 40000,
      nama: "Sate Maranggi",
      gambar:"http://traverse.id/wp-content/uploads/2018/02/Sate-Maranggi-Purwakarta-Menikmati-Lezatnya-Kuliner-Khas-Purwakarta.jpg"
    },
    {
      id: 6,
      number: 0,
      price: 25000,
      nama: "Sate Loso",
      gambar:"http://4.bp.blogspot.com/-u5zKfjz4iw4/UjFqow3GmpI/AAAAAAAAAQY/PE-Ym9JdLlk/s1600/Sate-Loso-Pemalang.jpg"
    }
  ],
  total: 0
  };
  tambahtotalHarga= harga =>{
    this.setState({
      total: this.state.total + harga
    });
  };

  kurangtotalHarga= harga =>{
    this.setState({
      total: this.state.total - harga
    });
  };

  render() {
    return (
      <div>
        <Header />
        <br></br> 
        <Row>
          {this.state.makanan.map(item=> (
          <Col xs="12" md="6" lg="4" sm="4"><Counter 
          nomor={item.nomor} 
          tambahtotalHarga={this.tambahtotalHarga} 
          kurangtotalHarga={this.kurangtotalHarga} 
          gambar={item.gambar} 
          name={item.nama} 
          harga={item.price} />
          </Col>
        ))}
        </Row>
        <Jumbotron>
        <h1>Total Harga:</h1>
        <ul type="square">
          <li>{this.state.total}</li>
        </ul>
      </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;
