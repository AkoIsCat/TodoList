import InsertForm from './InsertForm';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <InsertForm>
      <input className={classes.input} placeholder="할 일을 입력해 주세요" />
    </InsertForm>
  );
};

export default Input;
