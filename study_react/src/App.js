// /* eslint-disable */ //Lint 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '울산 라면 맛집';
  let [title, titleChange] = useState(['남자 코트 추천', '남자 바지 추천', '남자 신발 추천']); //디스트럭처링
  let [like, likeChange] = useState(0);

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

      <div className="list"> 
        <h4>{ title[0] } <span onClick={ () => { likeChange(like+1) } }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
