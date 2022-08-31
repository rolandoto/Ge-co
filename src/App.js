import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,
  Switch,
  Route,} from "react-router-dom"
import Home from './page/Home';
import Portafolio from './page/Potafolio';
import Register from './page/Register/Register';
import Login from './page/Login/Login';
import { AutoProvider } from './PrivateRoute/AuthContext';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Product from './page/Product/Product';
import SubirProduct from './page/SubirProduct/SubirProduct';
import Provedor from './page/Provedor/Provedor';
import SubirProvedor from './page/SubirProvedor/SubirProvedor';
import SearchResult from './page/SearchResult/SearchResult';
import SearchProduct from './page/SearchProduct/SearchProduct';

function App() {

   return (
    <div className="App">
      <AutoProvider>
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portafolio" component={Portafolio} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path='/producto' component={Product} />
                <PrivateRoute exact path='/SubirProducto' component={SubirProduct} />
                <PrivateRoute exact path='/Provedor' component={Provedor} />
                <PrivateRoute exact path='/SubirProvedor' component={SubirProvedor} />
                <PrivateRoute exact path='/SeachResult/:id' component={SearchResult} />
                <PrivateRoute exact path='/SeachResultProduct/:id' component={SearchProduct} />

            </Switch>
        </BrowserRouter>
      </AutoProvider>
    </div>
  )
  
}

export default App;


