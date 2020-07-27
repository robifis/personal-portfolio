import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	return (
		<div className='card bg-dark text-light'>
			<img
				className='card-img-top'
				src='https://res.cloudinary.com/balls-to-code/image/upload/ar_1:1,c_fill,g_auto,w_400/v1595600894/Personal%20Images/IMG_20190807_151446_pjqia3.jpg'
				alt=''
			/>
			<div className='h3 card-header'>Robert (Bobby) Olejnik</div>
			<div className='card-body'>
				<div className='card-title h6 text-muted'>
					Position <p className='card-text h5 text-white '>Full Stack Developer</p>
				</div>
				<div className='card-title h6 text-muted'>
					Phone<div className='card-text h5 text-white'>+44745011355</div>
				</div>
				<div className='card-title h6 text-muted'>
					Email<div className='card-text'>
						<a className='text-white h5' href='mailto:bobby@olejnik.dev'>
							bobby@olejnik.dev
						</a>
					</div>
				</div>
				<div className='my-3 d-flex justify-content-center'>
					<a href='http://instagram.com'>
						<FontAwesomeIcon icon={faInstagram} className='mr-3 text-white' size='2x' />
					</a>
					<a href='http://instagram.com'>
						<FontAwesomeIcon icon={faTwitter} className='text-white mr-3' size='2x' />
					</a>
					<a href='http://instagram.com'>
						<FontAwesomeIcon icon={faGithub} className='text-white mr-3' size='2x' />
					</a>
					<a href='http://instagram.com'>
						<FontAwesomeIcon icon={faFile} className='text-white mr-3' size='2x' />
					</a>
				</div>
				<button className='btn btn-lg btn-block btn-primary'>Enter Page</button>
			</div>
		</div>
	);
};

export default Home;
