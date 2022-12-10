import './App.css';
import Team from '../Team/Team.js'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <YMaps>
        <Team/>
        <MapSection width='75%'/>
      </YMaps>
    </div>
  );
}

export default App;
