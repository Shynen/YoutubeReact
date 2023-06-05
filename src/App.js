import './Style/App.css';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar'
import BlocVideo from './Components/BlocVideo';
function App() {
  return (
    <div className="App">
      <Navbar className="menu"/>
      <Searchbar className="search"/>
      <BlocVideo className="video"/>
    </div>
  );
}

export default App;
