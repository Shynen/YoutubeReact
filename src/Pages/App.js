import '../Styles/app.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "./Accueil/Home"
import Shorts from "./Shorts/Shorts"
import Sub from "./Abonnements/Sub"
import Library from "./Bibliotheque/Biblio"
import History from "./Historique/Historique"
import Latert from "./Plus Tard/Later"
import UrVideo from "./Vos Vidéos/UrVids"
import VideoLikes from "./VideoJaime/VideoLike"
import Mgs from "./Mgs/Mgs"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Shorts" Component={Shorts} />
        <Route path="/Abonnements" Component={Sub} />
        <Route path="/Bibliotheque" Component={Library} />
        <Route path="/Historique" Component={History} />
        <Route path="/VosVideos" Component={UrVideo} />
        <Route path="/PlusTard" Component={Latert} />
        <Route path="/VideoJaime" Component={VideoLikes} />
        <Route path="/page" Component={Mgs} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
