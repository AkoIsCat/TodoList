import classes from './TodoItemBlock.module.css';

const TodoItemBlock = (props) => {
  return <div className={classes.block}>{props.children}</div>;
};

export default TodoItemBlock;
