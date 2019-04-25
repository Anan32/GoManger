import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";


const Jumbo = props => {
    return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <hr className="my-2" />
          <Button tag={Link} to="/dashboard" color="primary">Buy Now</Button>
      </Jumbotron>
    </div>
    );
};

export default Jumbo;