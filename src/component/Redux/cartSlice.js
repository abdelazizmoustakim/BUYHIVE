// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartQuantity += 1;
    },
  },
});
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;