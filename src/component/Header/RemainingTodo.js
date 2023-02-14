import { useTodoState } from '../../store/TodoListContextProvider';

import classes from './RemainingTodo.module.css';

const RemainingTodo = () => {
  const state = useTodoState();

  const remainingItem = state.filter((item) => !item.check);

  return (
    <div className={classes.remainingTodo}>
      할 일 {remainingItem.length}개 남음
    </div>
  );
};

export default RemainingTodo;
