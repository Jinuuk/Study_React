import { useDeferredValue, useEffect, useState, useTransition } from "react";
import { changeAge } from "./store/userSlice";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name)
  let [count,setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(()=>{
    if(count !=0 && count<3){
      setAge(age+1);
    }
  },[count])

  return (
    <div className="App">
      <input onChange ={e=>
        startTransition(()=>{
          setName(e.target.value)
        })
        }></input>
      {
        isPending ? "로딩중..." :
        a.map(()=>{
          return <div>{state}</div>
        })
      }

      <div>안녕하세요 전 {age}</div>
      <button onClick={()=>{
        setCount(count+1);
        }}>버튼</button>
    </div>
  )
}





export default App;
