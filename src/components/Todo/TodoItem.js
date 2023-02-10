import styled, { css } from 'styled-components';

import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../../store/todoItem-context';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  &:hover {
    color: #ff6b6b;
    cursor: pointer;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &: hover {
    ${Remove} {
      display: block;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const TodoItem = (props) => {
  const dispatch = useTodoDispatch();

  const toggleHandler = () => {
    dispatch({ type: 'TOGGLE', id: props.id });
  };

  const removeHandler = () => {
    dispatch({ type: 'REMOVE', id: props.id });
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={props.done} onClick={toggleHandler}>
        {props.done && <MdDone />}
      </CheckCircle>
      <Text done={props.done} onClick={toggleHandler}>
        {props.text}
      </Text>
      <Remove onClick={removeHandler}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
