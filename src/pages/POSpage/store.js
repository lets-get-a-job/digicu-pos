/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { createStore } from 'redux';

const ADD = 'ADD';
const PLUS = 'PLUS';
const DELETE = 'DELETE';
const COUPON = 'COUPON';
const CLEAR = 'CLEAR';

export const addList = data => ({
  type: ADD,
  data,
});

export const plusCount = data => ({
  type: PLUS,
  data,
});

export const deleteList = data => ({
  type: DELETE,
  data,
});

export const addCoupon = sale => ({
  type: COUPON,
  sale,
});

export const clearList = () => ({
  type: CLEAR,
});

const initailState = {
  sum: 0,
  sale: 0,
  total: 0,
  menus: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        sum: state.sum + action.data.price,
        total: state.total + action.data.price,
        menus: [...state.menus, { ...action.data, count: 1 }],
      };
    case PLUS:
      state.menus[action.data.id].count++;
      state.sum += action.data.price;
      state.total += action.data.price;
      return { ...state };
    case DELETE:
      state.menus.splice(action.data.id, 1);
      state.sum -= action.data.price * action.data.count;
      state.total -= action.data.price * action.data.count;
      return { ...state };
    case COUPON:
      state.sale = action.sale;
      state.total -= action.sale;
      return { ...state };
    case CLEAR:
      return { ...initailState };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

export default store;
