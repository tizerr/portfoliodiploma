import './App.css';
<<<<<<< HEAD
import Team from '../Team/Team.js'
import Main from '../Main/Main.js'
import Projects from '../Projects/Projects.jsx'
import {MapSection} from "../MapSection/MapSection";
import {YMaps} from "@pbe/react-yandex-maps";
=======
import Projects from '../Projects/Projects.jsx'
import Main from '../Main/Main.js'
>>>>>>> bd2be4dc25426ba8457bffec4ad85b372514fe13
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
<<<<<<< HEAD
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Routes>
    </div>
=======
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
>>>>>>> bd2be4dc25426ba8457bffec4ad85b372514fe13
    </BrowserRouter>
  );
}

export default App;
