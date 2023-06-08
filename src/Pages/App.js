import '../Styles/app.css';
import Header from '../Components/Header';
import Navleft from '../Components/Navleft';
import VideoCard from './VideoCard';
import { vidTextHome } from '../lng/fr';
import vidhome1 from '../Img/vidhome1.jpg'
import vidhome2 from '../Img/vidhome2.jpg'
import vidhome3 from '../Img/vidhome3.jpg'

function App() {
  return (
    <div className="">
      <div>
        <Header/>
        <Navleft/>
      </div>
      <div className='homePres'>
        <div className="alignVid">
          <VideoCard  elsrc={vidhome1}titreVid={vidTextHome.titreVid} autVid={vidTextHome.autVid} nbVues={vidTextHome.nbVues} date={vidTextHome.date} />
          <VideoCard elsrc={vidhome2}titreVid={vidTextHome.titreVid2} autVid={vidTextHome.autVid2} nbVues={vidTextHome.nbVues2} date={vidTextHome.date2} />
          <VideoCard elsrc={vidhome3}titreVid={vidTextHome.titreVid3} autVid={vidTextHome.autVid3} nbVues={vidTextHome.nbVues3} date={vidTextHome.date3} />
        </div>
        <div className="alignVid2">
          <VideoCard elsrc={vidhome1}titreVid={vidTextHome.titreVid} autVid={vidTextHome.autVid} nbVues={vidTextHome.nbVues} date={vidTextHome.date} />
          <VideoCard elsrc={vidhome2}titreVid={vidTextHome.titreVid2} autVid={vidTextHome.autVid2} nbVues={vidTextHome.nbVues2} date={vidTextHome.date2} />
          <VideoCard elsrc={vidhome3}titreVid={vidTextHome.titreVid3} autVid={vidTextHome.autVid3} nbVues={vidTextHome.nbVues3} date={vidTextHome.date3} />
        </div>
      </div>
    </div>

  );
}

export default App;
