import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/Users/Pages/Login'
import Register from './component/Users/Pages/Register'
import NotFound from './component/Users/NotFound'

import Movies  from './component/Users/Pages/Movies';
import  MovieDetails   from './component/Users/Pages/MovieDetails';

import Home from './component/Users/Pages/Home'
import Navbar from './component/Navbar'

function App() {
  return <>
      <BrowserRouter>
      <Navbar />
      <div className="container">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/MovieDetails/:id" component={MovieDetails} />
          <Route exact  path="*" component={NotFound} />

        </Switch>
</div>
      </BrowserRouter>


      {/* <Login/> */}
      {/* <Register/> */}
      {/* { <AppFunctionComponent/>,
  <AppClassComponent/> } */}

  </>
}


export default App;
