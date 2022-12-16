import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import mainImg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className='navbar-container'>
          <Navbar.Brand href="#home">Shoes-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage : 'url('+mainImg+')'}}></div>
        <Container>
          <Row>
            {
              shoes.map((ele,i)=>{
                return <Card ele={ele}></Card> 
              })
            }
          </Row>
      </Container>
    </div>
  );
}

function Card(props){
  return (
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${props.ele.id+1}.jpg`} width="80%"/>
      <h4>{props.ele.title}</h4>
      <p>{props.ele.price}원</p>
    </Col>
  )
}

export default App;
