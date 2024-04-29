import { useState } from 'react';
import Attendee from './Attendee.jsx';

const EventApp = () => {
  const [eventName, setEventName] = useState('Event name');
  const [startTime, setStartTime] = useState('startTime');
  const [endTime, setEndTime] = useState('endTime');
  const [location, setLocation] = useState('location');
  const [description, setDescription] = useState('description');
  const [attendeeName, setAttendeeName] = useState('');
  const [attendees, setAttendees] = useState([
    { name: 'Ivan', response: 'Yes' },
    { name: 'Olivia', response: 'Yes' },
  
  ])

  const handleChange = (event) => {
    setAttendeeName(event.target.value);
  };

  const handleClick = (event) => {
    if (attendeeName.length > 0) {
      console.log(attendeeName);
      console.log(event.target.textContent); // Yes, No, Maybe
      setAttendeeName(''); // reset attendee name
    }
  };

  const attendeesList = attendees.map((person) => (
    <Attendee name={person.name} response={person.response} />
  ));

  return (
    <div className='background main'>
      <div className='containerDiv'>
        <div className='h1W'>
          <h1>{eventName}</h1>
          <h1>
            {startTime} - {endTime}
          </h1>
          <h1>{location}</h1>
        </div>
        <input type='text' placeholder='name' value={attendeeName} onChange={handleChange} />
        <div className='chooses'>
          <button className='btn-hover color-1' onClick={handleClick}>
            Yes
          </button>
          <button className='btn-hover color-1' onClick={handleClick}>
            No
          </button>
          <button className='btn-hover color-1' onClick={handleClick}>
            Maybe
          </button>
        </div>
        <h1>{description}</h1>
        <h1 className='att'>Attendees</h1>
        <div className='attendees'>{attendeesList}</div>
      </div>
    </div>
  );
};

export default EventApp;
