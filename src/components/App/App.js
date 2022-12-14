import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Projects from '../Projects/Projects'
import {ThemeWrapper} from "../ThemeWrapper/ThemeWrapper";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index element={<Main/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
