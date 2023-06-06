import './Styles/App.css';
import Navbar from './Components/Navbar';
import BlocVideo from './Components/BlocVideo';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header className="top"/>
      <Navbar className="menu"/>
      <BlocVideo className="video"/>
    </div>
  );
}

export default App;
