import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Counter extends Component {
    state ={
        qty: 0
    };
        tambah = ()=> {
            this.setState({
            qty: this.state.qty + 1
            });
            this.props.tambahtotalHarga(this.props.harga);
        };
        kurang = ()=> {
            if (this.state.qty === 0) {
                return;
            }
            this.setState({
            qty: this.state.qty - 1
            });
            this.props.kurangtotalHarga(this.props.harga);
        };

    render() {
        return (
        <div>
            <Card style={{margin: "15px"}}>
            <CardImg top width="100%" src={this.props.gambar}/>
            <CardBody>
            <h2>{this.props.name}</h2>
                <br></br>
                <CardSubtitle><h6>Buat pesananmu sekarang</h6></CardSubtitle>
                <p>Harga: Rp{this.props.harga}</p>
                <hr color="orange"></hr>
                <Navbar style={{backgroundColor: "white"}} color="faded" light>
                <Button onClick={this.tambah} color="success">Plus</Button>{' '}
                <h5 align="center">{this.state.qty}</h5>
                <Button onClick={this.kurang} color="danger">Minus</Button>{' '}
                </Navbar>
            </CardBody>
            </Card>
        </div>
        );
    }
}