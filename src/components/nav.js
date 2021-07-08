import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <Link to ='/login'
        style={{
          textDecoration: 'none',
         }}>
            <div className="section">
            login</div>
        </Link>
    </div>
  );
}

export default Nav;
