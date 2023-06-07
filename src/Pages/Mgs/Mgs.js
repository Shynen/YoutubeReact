import '../../Styles/mgs.css';
import Navleft from '../../Components/Navleft';
import BlocVideo from './Components/BlocVideo';
import Header from '../../Components/Header';

function Mgs() {
  return (
    <div className="App">
      <Header className="top"/>
      <Navleft className="menu"/>
      <BlocVideo className="video"/>
    </div>
  );
}

export default Mgs;