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


function App() {

   return (
    <div className="App">
      <AutoProvider>
        <BrowserRouter>
          <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portafolio" component={Portafolio} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path='/panel' component={Panel} />
            </Switch>
        </BrowserRouter>
      </AutoProvider>
    </div>
  )
  
}

export default App;


