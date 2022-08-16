import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,
  Routes,
  Route,
  Navigate} from "react-router-dom"
import Home from './page/Home';
import Portafolio from './page/Potafolio';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import Panel from './page/Panel/Panel';


function App() {


   return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/portafolio" element={<Portafolio />} />
                <Route exact path="/Register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path='/panel' element={
                  <RequireAuth redirectTo={"/login"} >
                      <Panel />
                  </RequireAuth>
                } />
            </Routes>
        </BrowserRouter>
    </div>
  )
  
}

export default App;


const Auth = {
  isLogedIn: () => true
};

const RequireAuth = ({ children, redirectTo }) => {
  const isAuthenticated = Auth.isLogedIn();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
