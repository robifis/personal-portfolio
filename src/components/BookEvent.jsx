/* global gapi */
import React, { useState, useEffect } from 'react';
import keys from '../calendar-config.js';

const BookEvent = () => {
	const gapi = window.gapi;
	// Start Of Google Calendar API

	// Importing Data
	const CLIENT_ID = keys.google.clientId;
	const API_KEY = keys.google.apiKey;
	const DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	const [
		data,
		setData,
	] = useState({
		name    : '',
		email   : '',
		subject : '',
		date    : '',
		time    : '',
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		gapi.load('client:auth2', () => {
			console.log('client loaded');

			gapi.client.init({
				apiKey        : API_KEY,
				clientId      : CLIENT_ID,
				discoveryDocs : DISCOVERY_DOCS,
				scope         : SCOPES,
			});

			gapi.client.load('calendar', 'v3', () => console.log('Loaded Calendar v3'));

			gapi.auth2.getAuthInstance().signIn().then(() => {
				const event = {
					summary     : data.subject,
					description : `Website Booking by ${data.name}`,
					start       : {
						dateTime : `${data.date}T${data.time}`,
						timeZone : `GMT`,
					},
					end         : {
						dateTime : `${data.date}T${data.time + 2}`,
						timeZone : `GMT`,
					},
					attendees   : [
						{ email: 'bobby@olejnik.dev' },
						{ email: data.email },
					],
					reminders   : {
						useDefault : false,
						overrides  : [
							{ method: 'popup', minutes: 24 * 60 },
							{ method: 'email', minutes: 24 * 60 },
							{ method: 'email', minutes: 10 },
							{ method: 'popup', minutes: 10 },
						],
					},
				};

				const request = gapi.client.calendar.events.insert({
					calendarId : 'primary',
					resource   : event,
				});

				request.execute((event) => {
					console.log(event);
					window.open(event.htmlLink);
				});
			});
		});
	};

	return (
		<div className='bg-dark text-light card w-50'>
			<h1 className='card-header'>Book an event</h1>
			<form className='card-body'>
				<div className='form-group'>
					<label htmlFor='name' className='card-title'>
						Name
					</label>
					<input
						type='text'
						className='form-control'
						onChange={handleChange}
						name='name'
						value={data.name}
						placeholder='Enter your name'
						id='name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email' className='card-title'>
						Email Address
					</label>
					<input
						type='email'
						placeholder='Enter your email'
						className='form-control'
						onChange={handleChange}
						name='email'
						value={data.email}
						id='email'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='subject' className='card-title'>
						Topic
					</label>
					<input
						type='text'
						placeholder='Please enter a subject'
						className='form-control'
						onChange={handleChange}
						name='subject'
						value={data.subject}
						id='subject'
					/>
				</div>
				<div className='form-group'>
					<div className='row'>
						<label htmlFor='date' className='col'>
							Date
						</label>
						<label htmlFor='date' className='col'>
							Time
						</label>
					</div>
					<div className='row'>
						<div className='col'>
							<input
								type='date'
								className='form-control'
								onChange={handleChange}
								name='date'
								value={data.date}
								id='date'
							/>
						</div>
						<div className='col'>
							<input
								type='time'
								className='form-control'
								onChange={handleChange}
								name='time'
								value={data.time}
								id='time'
							/>
						</div>
					</div>
				</div>
				<button onClick={handleSubmit} className='btn btn-block btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default BookEvent;
