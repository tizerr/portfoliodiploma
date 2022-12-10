import './App.css';
import Team from '../Team/Team.js'
import {Footer} from "../../components/Footer/Footer";
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";


function App() {
  return (
    <div className="App">
      <YMaps>
        <Team/>
        <MapSection width='75%'/>
        <Footer/>
      </YMaps>
    </div>
  );
}

export default App;
