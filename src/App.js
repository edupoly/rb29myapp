import { Outlet } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Countries from "./features/countries/Countries";
import Posts from "./features/posts/Posts";
import Products from "./features/products/Products";
import Todolist from "./features/todolist/Todolist";
import Header from "./shared/Header";

function App() {
  return (
    <div className='border border-5 border-info m-2 p-2'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
