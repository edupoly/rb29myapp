import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className='border border-5 border-info m-2 p-2'>
      <h1>Welcome to ReactJS Edupoly</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
