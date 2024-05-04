import PrimaryButton from './PrimaryButton';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
  });

  const [showLink, setShowLink] = useState(false);

  const [eventId, setEventId] = useState('');

  useEffect(() => {
    console.log(`event id is ${eventId}`);
  }, [eventId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.eventName.length === 0 || !formData.startTime) {
      return;
    }
    const data = {
      eventName: formData.eventName,
      startTime: new Date(formData.startTime).toISOString(),
      endTime: formData.endTime ? new Date(formData.endTime).toISOString() : '',
      location: formData.location,
      description: formData.description,
      attendees: [],
    };
    console.log('data to be sent:', data);
    fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => {
        setEventId(res.event.eventId);
        setShowLink(true);
      })
      .catch(() => console.log('error creating new event'));
  };

  return (
    <div className='create-event-form' onSubmit={handleSubmit}>
      <form>
        <div>
          <h3>Create event</h3>
        </div>
        <input
          className='input-lg'
          placeholder='Event name'
          id='eventName'
          name='eventName'
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <div className='date-time'>
          <div className='date-time-inner'>
            <label htmlFor='startTime'>Start time:</label>
            <input
              placeholder='Start time'
              id='startTime'
              name='startTime'
              type='datetime-local'
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className='date-time-inner'>
            <label htmlFor='endTime'>End time (optional):</label>
            <input
              placeholder='End time'
              id='endTime'
              name='endTime'
              type='datetime-local'
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          placeholder='Location (optional)'
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
        <input
          placeholder='Description (optional)'
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <PrimaryButton text={'Create event'} />
      </form>
      <div>{showLink && <Link to={`e/${eventId}`}>Event Link</Link>}</div>
    </div>
  );
};

export default EventForm;
