import TodoListBlock from './TodoListBlock';
import TodoItem from '../TodoItem/TodoItem';

import { useTodoState } from '../../../store/TodoListContextProvider';

const TodoList = () => {
  const item = useTodoState();

  console.log(item);

  return (
    <TodoListBlock>
      {item.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          check={item.check}
          text={item.text}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
