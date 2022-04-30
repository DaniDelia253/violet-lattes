import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Commissions from './pages/Commissions';
import AboutTheArtist from './pages/AboutTheArtist';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Cart />

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/commissions" component={Commissions} />
            <Route exact path="/about" component={AboutTheArtist} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
            <Route exact path="/products/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
          {/* FOOTER */}
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
