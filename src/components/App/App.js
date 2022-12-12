import './App.css';
import Main from '../Main/Main.js'
import Projects from '../Projects/Projects.jsx'
import Footer from '../Footer/Footer.jsx'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
