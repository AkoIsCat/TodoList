import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header/Header';
import TodoCreate from './components/Todo/TodoCreate';
import TodoList from './components/Todo/TodoList';
import TodoTemplate from './components/Todo/TodoTemplate';

// GlobalStyle은 자식을 생성하지 않는다.
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <Header />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
