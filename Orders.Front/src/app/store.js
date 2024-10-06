import { configureStore, createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    branch: '',
    items: [],
    orderSubmitted: false
  },
  reducers: {
    setBranch: (state, action) => {
      state.branch = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearOrder: (state) => {
      state.branch = '';
      state.items = [];
      state.orderSubmitted = false;
    },
    submitOrder: (state) => {
      state.orderSubmitted = true;
    }
  }
});

export const { setBranch, addItem, clearOrder, submitOrder } = orderSlice.actions;

const store = configureStore({
  reducer: {
    order: orderSlice.reducer
  }
});

export default store;
