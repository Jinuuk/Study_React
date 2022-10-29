import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {changeName, changeAge} from './../store/userSlice.js';
import {changeCount, removeItem} from './../store.js'

function Cart(){
  let state = useSelector(state=>state)
  let dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      <button onClick={()=>{dispatch(changeAge(2))}}>버튼</button>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>삭제하기</th>
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
                  dispatch(changeCount(ele.id))
                }}>+</button></td>
                <td><button onClick={()=>{
                  dispatch(removeItem(ele.id))
                }}>삭제</button></td>
                </tr>
              )
            })
          }
          
      </tbody>
    </Table> 
    </div>
  )
}


export default Cart;