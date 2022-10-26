import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import styled from 'styled-components'

// let Btn = styled.button`
//   background:${props=>props.bg};
//   color:${props=>props.bg=='blue'?'white':'black'};
//   padding:10px;
// `
// let NewBtn = styled.button(Btn)`
//   margin:5px;
// `
// let Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

// 컴포넌트에 갈고리 다는 법 : 예전 방식
// class Detail2 extends React.Component { 
//   componentDidMount(){ //컴포넌트 mount시 여기 코드 실행

//   }
//   componentDidUpdate(){ //컴포넌트 update시 여기 코드 실행

//   }
//   componentWillUnmount(){ //컴포넌트 unmount시 여기 코드 실행

//   }
// }

function Detail(props){
  // 컴포넌트에 갈고리 다는 법 : 요즘 방식
  useEffect(()=>{ //mount, update시 여기 코드 실행됨
                          //html 렌더링 후에 동작됨
                          //어려운 연산
                          //서버에서 데이터를 가져오는 작업
                          //타이머 장착
    console.log('안녕');
    // setTimeout(()=>{document.getElementsByClassName('alert')[0].style.display = 'none'},2000);
    // setTimeout(()=>{setDisplay('none')},2000)
    let timer = setTimeout(()=>{setAlert(false)},2000)

    return()=>{
      //useEffect가 동작되기 전에 실행, mount시 실행안됨, unmount시 실행됨
      //예) 기존 타이머 제거
      clearTimeout(timer);
      //예) 기존 데이터 요청 제거

    }
    


  }, []) //[]는 seEffect 실행 조건을 넣는 곳, 비워두면 mount에만 실행됨

  let [count,setCount] = useState(0)
  // let [display,setDisplay] = useState('block');
  let [alert, setAlert] = useState(true);
  let [chkInput, setChkInput] = useState(false);

  let {id} = useParams();

  let foundItem = props.shoes.find(ele => ele.id == id);
  console.log(foundItem);

  return (
    <div className="container">
      {/* <Box>
      <Btn bg="blue">버튼</Btn>
      </Box> */}
      {/* {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button> */}
      {/* <div className="alert alert-warning" style ={{display : display}}>
        2초 이내 구매 시 할인
      </div> */}
      {
        alert == true ? <div className="alert alert-warning">
        2초 이내 구매 시 할인
      </div> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          {
            chkInput == true ? <div>경고 : 숫자만 입력하세요.</div> : null
          }
          <input onChange={e=>{setChkInput(isNaN(e.target.value))}}/>
          <h4 className="pt-5">{foundItem.title}</h4>
          <p>{foundItem.content}</p>
          <p>{foundItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;