import Counter from './Counter';
import Todolist from './Todolist';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className='border container border-2 border-danger p-2'>
      <Provider store={store}>
        <h1>Welcome to ReactJS Edupoly</h1>
        <Todolist></Todolist>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
