import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost/CreatePost';
import SinglePage from './pages/SinglePage/SinglePage';
import EditPost from './pages/EditPost/EditPost';
function App() {

  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/create' element={<CreatePost/>}/>
          <Route exact path='/post/:id' element={< SinglePage/>} />
          <Route exact path='/edit/:id' element={<EditPost/>} />
        </Routes>
      </Router>
    </UserContextProvider>

  );
}

export default App;
