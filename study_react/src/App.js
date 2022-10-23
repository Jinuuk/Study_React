// /* eslint-disable */ //Lint 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '울산 라면 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '남자 바지 추천', '남자 신발 추천']); //디스트럭처링
  let [modalTitle,setModalTitle] = useState(0);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [inputText,setInputText] = useState(' ');

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

      {/* <button onClick = { ()=>{
        let titleCopy = [...title];
        titleCopy[0] = '여자 코트 추천';
        setTitle(titleCopy);
        } }>글수정</button>

        <button onClick={()=>{
          let titleCopy2 = [...title];
          setTitle(titleCopy2.sort());
        }}>가나다순 정렬</button> */}

      {/* <div className="list"> 
        <h4>{ title[0] } <span onClick={ () => { setLike(like+1) } }>👍</span> { like } </h4>
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


      {/* <Modal/> */}

      {
        title.map(function(ele, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                modal==true ? setModal(false) : setModal(true);
                setModalTitle(i);
              }}>{ ele } <span onClick={ (e) => {
                e.stopPropagation(); //이벤트 버블링 방지
                let likeCopy = [...like];
                likeCopy[i]=likeCopy[i]+1;
                setLike(likeCopy);
              } }>👍</span> { like[i] }</h4>
              {/* <h4>{ title[i] }</h4> */}
              
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let titleCopy = [...title];
                titleCopy.splice(i,1);
                setTitle(titleCopy);
              }}>삭제</button>
        </div>
        )
      })
    }
    
    <input onChange={e=>{
      setInputText(e.target.value);  //늦게 처리됨 (비동기 처리)
      console.log(inputText);}} />
    <button onClick={()=>{
      let titleCopy = [...title];
      titleCopy.push(inputText);
      setTitle(titleCopy);
      like.push(0);
    }}>등록</button>

    {/* {
      modal==true? 
        <Modal color="skyblue"  title = {title[modalTitle]} modifyFnc = { ()=>{
          let titleCopy = [...title];
          titleCopy[0] = '여자 코트 추천';
          setTitle(titleCopy);
          } }/> : null
    } */}

    {
      modal==true? 
        <Modal color="skyblue"  title = {title} modalTitle ={modalTitle} modifyFnc = { ()=>{
          let titleCopy = [...title];
          titleCopy[0] = '여자 코트 추천';
          setTitle(titleCopy);
          } }/> : null
    }

    
    </div>
  );
}
 
// function Modal(props){
//   return (
//       <div className="modal"  style={{background : props.color}}>
//         <h4>{props.title}</h4>
//         <p>날짜</p>
//         <p>상세내용</p>
//         <button onClick = {props.modifyFnc}>글수정</button>
//       </div>
//   )
// }

function Modal(props){
  return (
      <div className="modal"  style={{background : props.color}}>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick = {props.modifyFnc}>글수정</button>
      </div>
  )
}

// let Modal = () => {
//   return (
//     <div></div>
//   )
// }


export default App;
