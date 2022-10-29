import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      // console.log(state.findIndex(ele=>ele.id == 0));
      state.find(ele=>ele.id == action.payload).count += 1;
      //findIndex 함수도 사용 가능
    },
    changeCart(state,action){
      if(state.findIndex(ele=>ele.id == action.payload.id) == -1){
        state.push({id:action.payload.id, name:action.payload.title, count:1})
      }else{
        state.find(ele=>ele.id == action.payload.id).count += 1;
      }
    },
    removeItem(state,action){
      let foundIndex = state.findIndex(ele=>ele.id == action.payload);
      state.splice(foundIndex,1);
    }
  }
})

export let {changeCount, changeCart, removeItem} = cart.actions;

export default configureStore({
  reducer : {
    user : user.reducer,
    cart : cart.reducer
  }
})