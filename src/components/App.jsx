import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskList } from './TaskList/TaskList';
import { TaskForm } from './TaskForm/TaskForm';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
