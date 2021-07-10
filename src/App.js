import './App.css';
import SignUp from './components/signup.jsx'
import Login from './components/Login.jsx'
import Computer from './components/sections/computers'
import Mobile from './components/sections/mobiles'
import Tv from './components/sections/tv'
import All from './components/sections/all'
import Camera from './components/sections/cameras'
import Game from './components/sections/game'
import Upload from './components/ubload'
import Accessories from './components/sections/accessories'
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
      <Switch>
      <Route path="/" exact component = {Login}/>
      <Route path="/all" component = {All}/>
      <Route path="/computer" component = {Computer}/>
      <Route path="/mobile" component = {Mobile}/>
      <Route path="/tv" component = {Tv}/>
      <Route path="/accessories" component = {Accessories}/>
      <Route path="/cameras" component = {Camera}/>
      <Route path="/game" component = {Game}/>
      <Route path="/ubload" component = {Upload}/>
      <Route path="/signup" component = {SignUp}/>
      </Switch>

    </div>

    </Router>
  );
}

export default App;
