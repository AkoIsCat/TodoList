import React from 'react';

import classes from './TodoLIstBlock.module.css';

const TodoListBlock = (props) => {
  return <div className={classes.block}>{props.children}</div>;
};

export default TodoListBlock;
