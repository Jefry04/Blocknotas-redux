import { legacy_createStore as createStore } from "redux";

export const ADDTASK = 'ADDTASK'
// export const TASKDESCRIPTION = 'TASKDESCRIPTION'
// export const TASKPRIORITY = 'TASKPRIORITY'

export function addTask(value){
  return {
    type: ADDTASK,
    payload: value,
  }
}


const reducer = (state, action)=>{
  switch (action.type){
    case ADDTASK:
      return [
        ...state,
        ...action.payload
      ]
      default: return state
  }
}

const initialState = [{
  title: '',
  description: '',
  priority: '',
}]

// const initialState = {
//   title: "",
//   description: "",
//   priority: "",
//   task: [],
// };

export const store = createStore(reducer, initialState)




