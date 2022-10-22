// /* eslint-disable */ //Lint 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '울산 라면 맛집';
  let [title, titleChange] = useState(['남자 코트 추천', '남자 바지 추천', '남자 신발 추천']); //디스트럭처링
  let [like, likeChange] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  // [1,2,3].map(function(ele){
  //   console.log(ele)
  // })


  // function like_fnc(){
  //   console.log(1);
  // }
 
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button onClick = { ()=>{
        let titleCopy = [...title];
        titleCopy[0] = '여자 코트 추천';
        titleChange(titleCopy);
        } }>글수정</button>

        <button onClick={()=>{
          let titleCopy2 = [...title];
          titleChange(titleCopy2.sort());
        }}>가나다순 정렬</button>

      {/* <div className="list"> 
        <h4>{ title[0] } <span onClick={ () => { likeChange(like+1) } }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
            modal==true ? setModal(false) : setModal(true)
           }}>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        modal==true? <Modal/> : null
      }

      {/* <Modal/> */}

      {
        title.map(function(ele, i){
          return (
            <div className="list" key={i}>
          <h4>{ ele } <span onClick={ () => {
            let likeCopy = [...like];
            likeCopy[i]=likeCopy[i]+1;
              likeChange(likeCopy);
            } }>👍</span> { like[i] }</h4>
          {/* <h4>{ title[i] }</h4> */}
          <p>2월 17일 발행</p>
        </div>
        )
        })
      }

    </div>
  );
}

function Modal(){
  return (
      <div className="modal" >
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

// let Modal = () => {
//   return (
//     <div></div>
//   )
// }


export default App;
