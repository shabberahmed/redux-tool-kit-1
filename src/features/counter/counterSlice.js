import {  createSlice } from '@reduxjs/toolkit';


const x = [
{fname:"ahemd",lname:"shaik",pho:"3232323",email:"sdsddsfdfd@fdd.com",batch:"3232",course:"2sdds"},
{fname:"shaik"}
]
 const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:x
  },
  reducers: {
    add:(state,action) => {
      state.value.push(action.payload)
    },de:(state,action)=>{
      state.value=state.value.filter(val=>val.id!==action.payload)
    },
    edit:(state,action)=>{
      state.value=state.value.map(val=>val.id===action.payload.id?action.payload:val)
    }
  }})

export default counterSlice.reducer;
export const {add,de,edit}=counterSlice.actions


