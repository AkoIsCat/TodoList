import Header from './component/Header/Header';
import Layout from './component/UI/Layout';
import Card from './component/UI/Card';
import TodoList from './component/Todo/TodoList/TodoList';
import TodoCreate from './component/Todo/TodoCreate/TodoCreate';

function App() {
  return (
    <div>
      <Card>
        <Layout>
          <Header />
          <TodoList />
          <TodoCreate />
        </Layout>
      </Card>
    </div>
  );
}

export default App;
