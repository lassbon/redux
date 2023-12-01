import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../cartItems';

const initialState = {
  cartItems: cartItems,
  itemCount: cartItems.reduce((total, item) =>  total+=item.amount,0),
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
     state.itemCount = 0;
      state.cartItems = [];

    },
    removeItem : (state, {payload}) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    addItem: (state, {payload}) => {
        const newItem = payload;
        state.cartItems = [...state.cartItems, newItem];
    },
    calculateTotal: (state) => {
        let { total, itemCount } = state.cartItems.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
    
            cartTotal.total = cartTotal.total  + itemTotal;
            cartTotal.itemCount += amount;
    
            return cartTotal;
            },
            {
            total: 0,
            itemCount: 0,
            }
        );
    
        total = parseFloat(total.toFixed(2));
    
        state.total = total;
        state.itemCount = itemCount;

    },
    increaseItem : (state, {payload})=>{
        const data = state.cartItems.find((item) => item.id === payload);
        data.amount = data.amount + 1;
        let total = state.cartItems.reduce((total, item) => {
            return (total += item.amount);
        }, 0);
        state.itemCount = total;
    },
    decreaseItem : (state, {payload})=>{
        const data = state.cartItems.find((item) => item.id === payload);
        if(data.amount > 0) {
            data.amount = data.amount - 1;
        }
        let total = state.cartItems.reduce((total, item) => {
            return (total += item.amount);
        }, 0);
        state.itemCount = total;
        
    },


  }
});

console.log(cartSlice);

export const { clear, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;