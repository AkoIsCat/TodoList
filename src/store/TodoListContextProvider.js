import React, { createContext, useContext, useReducer, useRef } from 'react';

const DUMMY = [
  {
    id: 'm1',
    text: '공부하기',
    check: false,
  },
  {
    id: 'm2',
    text: '또 공부하기',
    check: false,
  },
  {
    id: 'm3',
    text: '놀기',
    check: false,
  },
  {
    id: 'm4',
    text: 'firebase에서 가져오도록 Fatching 구현 해보기',
    check: false,
  },
  {
    id: 'm5',
    text: '수정 기능 추가하기',
    check: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, check: !todo.check } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const TodoListContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, DUMMY);
  let nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {props.children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoListContextProvider;

export const useTodoState = () => {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};

export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
};
