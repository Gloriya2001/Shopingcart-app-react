import logo from './logo.svg';
import './App.css';
import ViewObj from './components/ViewObj';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
   
      <Add />
      <Search />
      <Delete />
      <ViewObj />
    </div>
  );
}

export default App;
