import PrimaryButton from './PrimaryButton';
import { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      event: {
        eventName: formData.eventName,
        startTime: new Date(formData.startTime),
        endTime: new Date(formData.endTime),
        location: formData.location,
        description: formData.description,
      },
    };
    console.log(data);
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
    </div>
  );
};

export default EventForm;
