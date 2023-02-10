import styled from 'styled-components';

import { useTodoState } from '../../store/todoItem-context';

const RemainingCss = styled.div`
  margin-top: 2rem;
  padding-bottom: 1.5rem;
  color: #38d9a9;
  font-weight: bold;
  border-bottom: 1px solid rgb(175, 175, 175);
`;

const RemainingTodo = () => {
  const todos = useTodoState();

  const RemainingItems = todos.filter((item) => !item.done);

  return <RemainingCss>할 일 {RemainingItems.length}개 남음</RemainingCss>;
};

export default RemainingTodo;
