import CheckCircle from './CheckCircle';
import Remove from './Remove';
import Text from './Text';
import TodoItemBlock from './TodoItemBlock';

import { useTodoDispatch } from '../../../store/TodoListContextProvider';

const TodoItem = (props) => {
  const dispatch = useTodoDispatch();

  const onClickToggleHandler = () => {
    dispatch({ type: 'TOGGLE', id: props.id });
  };

  const removeHandler = () => {
    console.log('remove', props.id);
    dispatch({ type: 'REMOVE', id: props.id });
  };

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onClickToggleHandler} check={props.check} />
      <Text
        text={props.text}
        onClick={onClickToggleHandler}
        check={props.check}
      />
      <Remove onClick={removeHandler} />
    </TodoItemBlock>
  );
};

export default TodoItem;
