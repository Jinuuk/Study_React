import { useState } from "react";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
// import breadImage from './bread1.jpg'
// import 작명 from './data.js';
// import {a,b} from './data.js';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">KimShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" className="menu">Home</Link>
            <Link to="/detail" className="menu">Detail</Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path="/" element={
        <>
          <div className = "main-bg"></div>
          <Container>
            <Row>
            {
              shoes.map(function(ele){
                return (
                  <Item item={ele}/>
                )
              })
            }
            </Row>
          </Container>
        </>
      }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

      <Route path="/about" element={<About/>}>
        <Route path="member" element={<div>멤버</div>}/>
        <Route path="location" element={<div>위치</div>}/>
      </Route>

      <Route path="/event" element={<Event/>}>
        <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
        <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
      </Route>



      <Route path="*" element={<div>404 없는 페이지</div>}/>
    </Routes>

    </div>
  );
}

function Item(props) {
  return(
    <Col sm>
    <img src={process.env.PUBLIC_URL + '/bread'+(props.item.id+2)+'.jpg'} width="100%" />
    <h4>{props.item.title}</h4>
    <p>{props.item.price}</p>
  </Col>
  )
}

function About(){
  return (
    <div>
      <h4>about 페이지</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}




export default App;
