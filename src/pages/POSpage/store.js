/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { createStore } from 'redux';

const ADD = 'ADD';
const PLUS = 'PLUS';
const DELETE = 'DELETE';
const CLEAR = 'CLEAR';

export const addList = data => ({
  type: ADD,
  data,
});

export const plusCount = id => ({
  type: PLUS,
  id,
});

export const deleteList = id => ({
  type: DELETE,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      state.push({ ...action.data, count: 1 });
      return state;
    case PLUS:
      state[action.id].count++;
      return state;
    case DELETE:
      state.splice(action.id, 1);
      return state;
    case CLEAR:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
