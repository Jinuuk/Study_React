import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //class -> className

  //서버에서 가져온 데이터라고 가정
  let post = '울산 우동 맛집';
  let postId = 'postId';

  //데이터 바인딩할 때는 중괄호{} 사용
  //style = {{스타일명(캐멀 케이스) : '값'}}

  //state : html 자동 재렌더링
  let [postTitle,setPostTitle] = useState(['남자 코트 추천', '남자 하의 추천', '어린이 코트 추천']);
  let [like,setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'orange', fontSize : '16px'}}>Blog</h4>
      </div>
      <div className='list'>
        {/* <h4 id={ postId }>{ post }</h4> */}
        <h4 id={ postId }>{ postTitle[0] } <span onClick={()=>{
          setLike(++like); 
          }}>👍</span>{ like }</h4>
        <p>7월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 id={ postId }>{ postTitle[1] }</h4>
        <p>7월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 id={ postId }>{ postTitle[2] }</h4>
        <p>7월 17일 발행</p>
      </div>
      <button onClick={()=>{
        let copiedPostTitle = [...postTitle];
        copiedPostTitle[0] = '여자 코트 추천';
        setPostTitle(copiedPostTitle)}}>글 제목 변경</button>
      <button onClick={()=>{
        let copiedPostTitle2 = [...postTitle];
        copiedPostTitle2.sort();
        setPostTitle(copiedPostTitle2);
      }}>가나다순 정렬</button>
    </div>
  );
}

export default App;
