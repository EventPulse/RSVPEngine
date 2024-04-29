import { Outlet, Link } from 'react-router-dom';
import './stylesheets/root.css';

const App = () => (
  <div className='app'>
    <div>RSVPEngine</div>
    <div>
      <Link to={`e/123`}>A link</Link>
    </div>
    <Outlet />
  </div>
);

export default App;
