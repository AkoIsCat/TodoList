import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';

import { MdAdd } from 'react-icons/md';
import { useTodoDispatch } from '../../store/todoItem-context';
import { useTodoNextId } from '../../store/todoItem-context';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useTodoDispatch();

  const nextId = useTodoNextId();

  const openHandler = () => {
    setOpen(() => !open);
  };

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: inputValue,
        done: false,
      },
    });
    setInputValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <Fragment>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={SubmitHandler}>
            <Input
              placeholder="할 일을 입력해 주세요"
              onChange={changeHandler}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={openHandler}>
        <MdAdd size="70" />
      </CircleButton>
    </Fragment>
  );
};

export default TodoCreate;
