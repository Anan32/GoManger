import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";


const Jumbo = props => {
    return (
    <div>
      <Jumbotron align="center">
        <h3 className="display-3">GO-Manger Is Ready To Deliver From Sabang to Merauke!</h3>
        <hr className="my-2" />
          <Button tag={Link} to="/dashboard" color="success">Buy Now</Button>
      </Jumbotron>
    </div>
    );
};

export default Jumbo;