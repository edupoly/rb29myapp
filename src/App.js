import Counter from "./Counter";
import Countries from "./Countries";
import Todolist from "./Todolist";
function App() {
  return (
    <div className="mybox">
      <h1>Welcome to ReactJS Edupoly</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Countries></Countries>
    </div>
  );
}

export default App;
