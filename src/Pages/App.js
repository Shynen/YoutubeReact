import '../Styles/app.css';
import Header from '../Components/Header';
import Navleft from '../Components/Navleft';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="">
      <div>
        <Header/>
        <Navleft/>
      </div>
      <div className="">
      <VideoCard/>
      </div>
    </div>

  );
}

export default App;
