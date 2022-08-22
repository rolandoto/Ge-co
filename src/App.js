import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,
  Switch,
  Route,} from "react-router-dom"
import Home from './page/Home';
import Portafolio from './page/Potafolio';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import Panel from './page/Panel/Panel';
import { AutoProvider } from './PrivateRoute/AuthContext';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import RegisterProduct from './page/RegisterProduct/RegisterProduct';
import RegisterProvedor from './page/RegisterProvedor/RegisterProvedor';
import Sidebar from './components/sidebar/sidebar';


function App() {

   return (
    <div className="App">
      <AutoProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portafolio" component={Portafolio} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/registerproduct" component={RegisterProduct} />
                <PrivateRoute exact path="/registerprovedor" component={RegisterProvedor} />
                <PrivateRoute exact path='/panel' component={Panel} />
            </Switch>
        </BrowserRouter>
      </AutoProvider>
    </div>
  )
  
}

export default App;


