import '../Styles/app.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "./Accueil/Home"
import Mgs from "./Mgs/Mgs"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/page" Component={Mgs} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
