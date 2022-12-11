import './App.css';
import Team from '../Team/Team.js'
import Main from '../Main/Main.js'
import Projects from '../Projects/Projects.jsx'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
