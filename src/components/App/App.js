import './App.css';
import Project from '../Project/Project.jsx'
import projects from '../../mock/projects.js'

function App() {
  return (
    <div className="App">
      <Project
        previewPath={projects[0]['preview-path']}
        name={projects[0]['name']}
        developers={projects[0]['developers']}
        kind={projects[0]['kind']}
        description={projects[0]['description']}
        developmentStack={projects[0]['development-stack']}
      />
    </div>
  );
}

export default App;
