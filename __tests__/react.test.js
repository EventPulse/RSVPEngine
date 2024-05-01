import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../client/src/App';
import Attendee from '../client/src/components/Attendee';
import EventApp from '../client/src/components/EventApp';
import EventForm from '../client/src/components/EventForm';
import PrimaryButton from '../client/src/components/PrimaryButton';
import Root from '../client/src/components/Root';

describe('Unit testing create events components', () => {
  let role;
  beforeEach(() => {
    render(<EventForm />);
    role = screen.getAllByRole('textbox');
  });
  // TODO:
  // feel free to take out anything here just added them for now
  // 1. form data updates correctly
  // 2. test creating event which generates a link which redirects
  // 3. test rerouting to /e/:id by comparing generated url to website url
  it('Allow user to input event name', async () => {
    await userEvent.type(role[0], 'picnic');
    expect(role[0].value).toEqual('picnic');
  });

  it('Allow user to input start/end date and time', async () => {
    const date = screen.getAllByRole('date');
    await userEvent.type(date[0], '2024-04-30T18:36');
    expect(date[0].value).toEqual('2024-04-30T18:36');

    await userEvent.type(date[1], '2024-04-30T18:36');
    expect(date[1].value).toEqual('2024-04-30T18:36');
  });

  it('Allow user to input location and description', async () => {
    await userEvent.type(role[1], 'nyc');
    expect(role[1].value).toEqual('nyc');

    await userEvent.type(role[2], 'Some Description');
    expect(role[2].value).toEqual('Some Description');
  });

  // possibly integration testing
  // it('Create event button generates a hyperlink', async () => {
  //   const button = screen.getByRole('button');
  //   await userEvent.click(button);
  //   // some logic to check if hyperlink is not undefined
  //   const hyperlink = screen.getByText('Event Link') ? true : false;
  //   expect(hyperlink).toEqual(true);
  // });
});

describe('Unit testing eventapp components', () => {
  // TODO:
  // 2. test rendering date/time
  // 3. test updating name field
  // 4. test yes/no/maybe buttons
  // 5. test attendees list updating
  // 6. test Attendee response and name to match input
});
