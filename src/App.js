import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import AdminTool from './component/Admin';
import CV from './component/CV';
import Home from './component/Home';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/admin" element={<AdminTool />} />
      </Routes>
    </Router>
  );
}

export default App;
