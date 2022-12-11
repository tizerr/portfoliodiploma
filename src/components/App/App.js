import './App.css';
import Team from '../Team/Team.js'
import {Footer} from "../../components/Footer/Footer";
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Projects from '../Projects/Projects'

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
