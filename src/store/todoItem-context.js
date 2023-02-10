import React, { useContext, useReducer, useRef } from 'react';

const initialState = [
  {
    id: 'm1',
    text: '로아하기',
    done: false,
  },
  {
    id: 'm2',
    text: '공부하기',
    done: false,
  },
  {
    id: 'm3',
    text: '알 때 까지 공부하기',
    done: false,
  },
  {
    id: 'm4',
    text: 'firebase에서 가져오도록 Fatching 구현 해보기',
    done: false,
  },
];

const reducer = (state, action) => {
  // switch문은 default 값으로 맞는 타입이 없을 시 에러를 발생시키기 쉽지만
  // if문은 if...else를 계속 반복해주어야 하므로 reducer에서는 switch가 더 가독성이 좋은 것 같다.
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      // map을 돌려 기존의 id와 event가 발생한 id가 같다면 done을 기존state의 반대로 갱신해주고 ...todo로 done을 제외한 기존의 state를 덮어준다.
      // id가 같지 않다면 기존 state를 반환한다.
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const TodoNextIdContext = React.createContext();

const TodoListStoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(5);

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

export default TodoListStoreProvider;

export const useTodoState = () => {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};

export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
};
