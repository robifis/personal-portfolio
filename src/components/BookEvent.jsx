/* global gapi */
import React, { useState, useEffect } from 'react';
import keys from '../calendar-config.js';
import moment from 'moment';
import { useForm } from 'react-hook-form';

const BookEvent = () => {
	const gapi = window.gapi;
	// Start Of Google Calendar API

	// Importing Data
	const CLIENT_ID = keys.google.clientId;
	const API_KEY = keys.google.apiKey;
	const DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

	const [
		data,
		setData,
	] = useState({
		name      : '',
		email     : '',
		subject   : '',
		startTime : moment(new Date()).toISOString(),
		endTime   : moment(new Date()).add(1, 'h').toISOString(),
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
					description : `Event booked by ${data.name}`,
					start       : {
						dateTime : data.startTime,
						timeZone : 'Europe/London',
					},
					end         : {
						dateTime : data.endTime,
						timeZone : 'Europe/London',
					},
					attendees   : [
						{ email: data.email },
						{ email: 'bobby@olejnik.dev' },
					],
					reminders   : {
						useDefault : false,
						overrides  : [
							{ method: 'email', minutes: 24 * 60 * 7 },
							{ method: 'email', minutes: 24 * 60 },
							{ method: 'email', minutes: 10 },
						],
					},
				};

				// const event = {
				// 	summary     : data.subject,
				// 	description : `Website Booking by ${data.name}`,
				// 	start       : {
				// 		dateTime : `${data.date}T${data.time}`,
				// 		timeZone : `Europe/London`,
				// 	},
				// 	end         : {
				// 		dateTime : `${data.date}T${data.time}`,
				// 		timeZone : `Europe/London`,
				// 	},
				// 	attendees   : [
				// 		{ email: 'bobby@olejnik.dev' },
				// 		{ email: data.email },
				// 	],
				// 	reminders   : {
				// 		useDefault : false,
				// 		overrides  : [
				// 			{ method: 'popup', minutes: 24 * 60 },
				// 			{ method: 'email', minutes: 24 * 60 },
				// 			{ method: 'email', minutes: 10 },
				// 			{ method: 'popup', minutes: 10 },
				// 		],
				// 	},
				// };

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
						placeholder='What would you like to talk about?'
						className='form-control'
						onChange={handleChange}
						name='subject'
						value={data.subject}
						id='subject'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='date'>Date and Time</label>
					<input
						type='datetime-local'
						className='form-control'
						onChange={handleChange}
						name='date'
						defaultValue={data.dateTime}
						id='date'
					/>
				</div>
				<div className='form-group'>
					<button onClick={handleSubmit} className='btn btn-block btn-primary'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default BookEvent;
