import '../Mgs/mgs.css';
import Navleft from '../../Components/Navleft';
import BlocVideo from './Components/BlocVideo';
import Header from '../../Components/Header';
import {colorT } from '../../lng/fr';

function Mgs() {
  return (
    <div className="myVid">
      <Header classe={colorT.couleurHd}/>
      <Navleft couleur ={colorT.couleur}/>
      <BlocVideo className="video"/>
    </div>
  );
}

export default Mgs;