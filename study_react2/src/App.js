import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
// import breadImage from './bread1.jpg'
// import 작명 from './data.js';
// import {a,b} from './data.js';
import data from './data.js';


function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KimShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    {/* <div className="main-bg" style={{backgroundImage : 'url('+breadImage+')'}}></div> */}
    <div className = "main-bg"></div>
    <Container>
      <Row>
        {/* <Col sm>
          <img src={process.env.PUBLIC_URL + '/bread2.jpg'} width="100%" />
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].price}</p>
        </Col>
        <Col sm>
        <img src={process.env.PUBLIC_URL + '/bread3.jpg'} width="100%" />
        <h4>{shoes[1].title}</h4>
          <p>{shoes[1].price}</p>
        </Col>
        <Col sm>
        <img src={process.env.PUBLIC_URL + '/bread4.jpg'}  width="100%" />
        <h4>{shoes[2].title}</h4>
          <p>{shoes[2].price}</p>
        </Col> */}
      {
        shoes.map(function(ele,i){
          return (
            <Item item={ele} order={i+2}/>
          )
        })
      }
      </Row>
    </Container>
    </div>
  );
}

function Item(props) {
  return(
    <Col sm>
    <img src={process.env.PUBLIC_URL + '/bread'+props.order+'.jpg'} width="100%" />
    <h4>{props.item.title}</h4>
    <p>{props.item.price}</p>
  </Col>
  )
}

export default App;
