const EventApp = () => (
  <div className="background">
  <div className="containerDiv">
    <div className="h1W">
    <h1>event name</h1>
    <h1>date</h1>
    <h1>location</h1>
    </div>
  <input type="text" placeholder="name"></input>
    <div className="chooses">
    <button className="btn-hover color-1">yes</button>
    <button className="btn-hover color-1">no</button>
    <button className="btn-hover color-1">maybe</button>
    </div>
    <h1>description</h1>
    <h1 className="att">attendees</h1>
    <div className="attendees">
    </div>
  </div>
  </div>
  );
  
  export default EventApp;



  