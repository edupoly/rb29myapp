import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to ReactJS Edupoly</h1>
      <Link to="/countries">Countries</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
