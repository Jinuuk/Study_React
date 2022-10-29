import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age:20},
  reducers : {
    changeName(state){
      state.name = 'park'
    },
    changeAge(state, action){
      // console.log(state.age);
      // state.age = state.age + 1
      state.age += action.payload
    }
  }
})

export let {changeName,changeAge} = user.actions;

export default user;