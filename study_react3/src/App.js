import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [postTitle,setPostTitle] = useState(['남자 코트 추천', '남자 하의 추천', '어린이 코트 추천']);
  let [like,setLike] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [postTitleOrder,setPostTitleOrder] = useState(0);
  let [inputVal,setInputVal] = useState('');
  let [date,setDate] = useState(['2022. 12. 14. 오전 10:33:46','2022. 12. 14. 오전 10:33:46','2022. 12. 14. 오전 10:33:46'])

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{fontSize : '16px'}}>Blog</h4>
      </div>
      {
        postTitle.map((data,i)=>{
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{
                setModal(!modal);
                setPostTitleOrder(i);
              }}>{ postTitle[i] } <span onClick={e=>{
                e.stopPropagation();
                let copiedLike = [...like];
                copiedLike[i]++;
                setLike(copiedLike); 
                }}>👍</span>{ like[i] }</h4>
              <p>{date[i]}
                <button className='btn' onClick={()=>{
                  let copiedPostTitle = [...postTitle];
                  copiedPostTitle.splice(i,1);
                  setPostTitle(copiedPostTitle);

                  let copiedLike = [...like];
                  copiedLike.splice(i,1);
                  setLike(copiedLike);

                  let copiedDate = [...date];
                  copiedDate.splice(i,1);
                  setDate(copiedDate);
                }}>글삭제</button>
              </p>
            </div>
          )
        })
      }

      <input onChange={e => {
        setInputVal(e.target.value);
        console.log(inputVal);
        }} />
        <button className='btn' onClick={()=>{
          if(inputVal.length == 0) return alert('제목을 입력하세요');
          let copiedPostTitle = [...postTitle];
          copiedPostTitle.unshift(inputVal);
          setPostTitle(copiedPostTitle);

          let copiedLike = [...like];
          copiedLike.unshift(0);
          setLike(copiedLike);

          let copiedDate = [...date];
          let createdDate = new Date();
          copiedDate.unshift(createdDate.toLocaleString());
          setDate(copiedDate);
        }}>글작성</button>

      {
        modal ? <Modal postTitle={postTitle} postTitleOrder={postTitleOrder} chageTitle = {()=>{
          let copiedPostTitle = [...postTitle];
          copiedPostTitle[0] = '여자 코트 추천';
          setPostTitle(copiedPostTitle);
        }}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.postTitle[props.postTitleOrder]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.chageTitle}>글수정</button>
    </div>
  )
}

// class를 이용한 component 생성 문법 (예전)
// class Modal2 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return (
//       <div>안녕 { this.state.age }
//         <button onClick={()=>{ this.setState({age : 21}) }}>버튼</button>
//         <div>{this.props.propsName}</div>
//       </div>
//     )
//   }
// }

export default App;
