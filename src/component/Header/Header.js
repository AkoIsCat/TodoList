import React from 'react';

import CurrentData from './CurrentData';
import RemainingTodo from './RemainingTodo';

const Header = () => {
  return (
    <div>
      <CurrentData />
      <RemainingTodo />
    </div>
  );
};

export default Header;
