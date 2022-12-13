import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //class -> className


  //데이터 바인딩할 때는 중괄호{} 사용
  //style = {{스타일명(캐멀 케이스) : '값'}}

  //state : html 자동 재렌더링
  let [postTitle,setPostTitle] = useState(['남자 코트 추천', '남자 하의 추천', '어린이 코트 추천']);
  let [like,setLike] = useState([0,0,0]);
  let [modal,setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'orange', fontSize : '16px'}}>Blog</h4>
      </div>
      {
        postTitle.map((data,i)=>{
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{ postTitle[i] } <span onClick={()=>{
                let copiedLike = [...like];
                copiedLike[i]++;
                setLike(copiedLike); 
                }}>👍</span>{ like[i] }</h4>
              <p>7월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
