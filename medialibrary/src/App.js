import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import { useDispatch } from 'react-redux';
import { initAuthors } from './actions/actions-types';
import AddAuthor from './components/AddAuthor';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/authors"); // await attend que le serveur réponde 
      const data = await response.json(); // Puis dans response on demande à fetch de nous renvoyer les data dans un JSON
      dispatch(initAuthors(data));
    }

    fetchData();

  }, []);

  return (
    <Router >
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/author/add" component={AddAuthor} />
        <Route component={({ location }) => (<p>404 Page Not Found </p>)} />
      </Switch>
    </Router>
  )
}

export default App;