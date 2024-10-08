import { configureStore, createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    category: '',
    items: [],
    orderSubmitted: false
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearOrder: (state) => {
      state.category = '';
      state.items = [];
      state.orderSubmitted = false;
    },
    submitOrder: (state) => {
      state.orderSubmitted = true;
    }
  }
});

export const { setCategory, addItem, clearOrder, submitOrder } = orderSlice.actions;

const store = configureStore({
  reducer: {
    order: orderSlice.reducer
  }
});

export default store;
