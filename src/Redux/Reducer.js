import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartValues:[],
    totalPrice:0
}

const Reducer=createSlice({
    name:"Reducer",
    initialState,
    reducers:{
        incrementcart:(state,action)=>{
            state.cartValues.push(action.payload)
            const price=state.cartValues.map(obj=>obj.productPrice)
            state.totalPrice=price.reduce((a,b)=>a+b)
            
        },
         decrementcart:(state,action)=>{
            const index=state.cartValues.findIndex(obj=>obj.productName===action.payload.productName)
            if(index>-1)
            {
                state.cartValues.splice(index,1);
            }
        

               const price=state.cartValues.map(obj=>obj.productPrice)
              
            state.totalPrice=price.reduce((a,b)=>a+b)  
              
        }
    } 
})

export const {incrementcart,decrementcart}=Reducer.actions;
export default Reducer.reducer;