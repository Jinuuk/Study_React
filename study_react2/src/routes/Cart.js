import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {changeName} from './../store.js';

function Cart(){
  let state = useSelector(state=>state)
  let dispatch = useDispatch();

  return (
    <Table>
      {/* <div>{state.user}</div> */}
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>{state[0].name}</td>
          <td>{state[0].count}</td>
          <td>안녕</td>
        </tr> */}
          {/* {
            state.map(function(ele){
              return (<TableContents/>)
            })
          } */}
          {
            state.cart.map(function(ele,i){
              return (
                <tr key={i}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.count}</td>
                <td><button onClick={()=>{
                  dispatch(changeName())
                }}>+</button></td>
                </tr>
              )
            })
          }
          
      </tbody>
    </Table> 
  )
}


export default Cart;