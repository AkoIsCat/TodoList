import { Fragment, useState } from 'react';
import {
  useTodoDispatch,
  useTodoNextId,
} from '../../../store/TodoListContextProvider';

import classes from './InsertForm.module.css';

const InsertForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: { id: nextId.current, text: inputValue, check: false },
    });
    setInputValue('');
    props.openHandler(false);
    nextId.current += 1;
  };

  const updateValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          onChange={updateValue}
          value={inputValue}
          className={classes.input}
          placeholder="할 일을 입력해 주세요"
        />
      </form>
    </Fragment>
  );
};

export default InsertForm;
