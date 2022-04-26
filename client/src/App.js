import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
          <Route exact path="/products/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        {/* FOOTER */}
      </div>
    </Router>
  );
}

export default App;
