import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from "./component/content";
import NavBar from "./component/navBar";
import { AuthProvider } from "./context/authContext";
import Home from "./page/home";
import Login from "./page/login";
import PRoutes from './page/utiles';

function App() {
  return (
    <AuthProvider>
      <Router>
        
        <Routes>
          <Route path='/' element={<PRoutes>
            <NavBar />
            <Home />
            </PRoutes>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
