import React from 'react';
import googleSignIn from '../styles/images/google_signin.png';

let dashStyle = {
	backgroundImage: 'url(https://static.pexels.com/photos/317355/pexels-photo-317355.jpeg)',
	textAlign: 'center',
	color: 'white'
}

const Landing = () => {
	return (
		<div id="landing-pg" style={dashStyle}>
			<h1>FeedBackBack</h1>
			<p>Collect feedback from your users</p>
			<a href="/auth/google"><img src={ googleSignIn } style={{height: 40}}></img></a>
		</div>
	);
};

export default Landing;
