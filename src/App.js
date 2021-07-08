import './App.css';
import Nav from './components/nav'
import Login from './components/Login.jsx'
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello <code>src/App.js</code> ayham kamal
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    <Router>
    <div>
    <Nav/>
      <Switch>
      <Route path="/login" exact component = {Login}/>
      </Switch>

    </div>

    </Router>
  );
}

export default App;
