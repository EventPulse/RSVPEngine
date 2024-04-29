import { Outlet, Link } from 'react-router-dom';
const App = () => (
  <div className='app'>
    <div>RSVPEngine</div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default App;
