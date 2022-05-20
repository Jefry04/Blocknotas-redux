import { legacy_createStore as createStore } from "redux";

export const ADDTASK = "ADDTASK";

export function addTask(value) {
  return {
    type: ADDTASK,
    payload: value,
  };
}

const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  tasks: [],
};

export const store = createStore(reducer, initialState);
