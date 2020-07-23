import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Card bg={'dark'} text={'light'} style={{ width: '40rem' }}>
			<Card.Img
				variant='top'
				src='https://res.cloudinary.com/balls-to-code/image/upload/c_scale,w_800/v1595503620/IMG_0137_ox8ujh.jpg'
				fluid
				rounded-circle
				border={'dark'}
			/>
			<Card.Header>A bit about me</Card.Header>
			<Card.Body>
				<Card.Title>
					<span className='custom-text'>Name: </span>Robert (Bobby) Olejnik
				</Card.Title>
				<Card.Text className='mb-2'>
					<span className='custom-text'>Position: </span>Full Stack Developer
				</Card.Text>
				<Card.Text className='mb-2 custom-text'>
					<span className='custom-text'>Email: </span>
					<a href='mailto:bobby@olejnik.dev' target='_blank' className='text-white'>
						bobby@olejnik.dev
					</a>
				</Card.Text>
				<Card.Text>
					<span className='custom-text'>Phone: </span>
					+447450113553
				</Card.Text>
			</Card.Body>
			<Card.Header>Let's Connect</Card.Header>
			<Card.Body>
				<a href='http://instagram.com' target='_blank' className='text-light'>
					<FontAwesomeIcon className='mr-3 custom-text' size='lg' icon={faInstagram} />
				</a>
				<a href='http://twitter.com' target='_blank' className='text-light'>
					<FontAwesomeIcon className='mr-3 custom-text' size='lg' icon={faTwitter} />
				</a>
				<a href='http://github.com' target='_blank' className='text-light'>
					<FontAwesomeIcon className='mr-3 custom-text' size='lg' icon={faGithub} />
				</a>
				<a href='http://linkedin.com' target='_blank' className='text-light'>
					<FontAwesomeIcon className='mr-3 custom-text' size='lg' icon={faLinkedin} />
				</a>
				<a href='http://linkedin.com' target='_blank' className='text-light'>
					<FontAwesomeIcon className='mr-3 custom-text' size='lg' icon={faFileText} />
				</a>
			</Card.Body>
			<Link to='/main'>
				<Button block size='lg' variant='dark'>
					Enter Page
				</Button>
			</Link>
		</Card>
	);
};

export default Home;
