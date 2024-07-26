import { Outlet, Link } from 'react-router-dom';
const App = () => (
  <div className='app'>
    <div className='names'>RSVPEngine</div>
    <div className='form-div'>
      <Outlet />
    </div>
  </div>
);

export default App;
