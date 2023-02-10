import styled from 'styled-components';

import TodoItem from './TodoItem';
import { useTodoState } from '../../store/todoItem-context';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          done={item.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
