import './App.css';
import Nav from './components/nav'
import Login from './components/Login.jsx'
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';

function App() {
  return (
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
