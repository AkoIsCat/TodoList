import React from 'react';

import CurrentData from '../Top/CurrentData';
import RemainingTodo from '../Top/RemainingTodo';
import Layout from '../UI/Layout';

const Header = () => {
  return (
    <Layout>
      <CurrentData />
      <RemainingTodo />
    </Layout>
  );
};

export default Header;
