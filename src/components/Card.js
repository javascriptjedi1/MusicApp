import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className ='bg-light-green dib br3 pa3 ma3 grow'>
		<div>
		<img alt='photo' src={`https://robohash.org/${id}?200x200`} />
		<h2> {name} </h2>
		<p> {email} </p>
		</div>
				</div>

		);
}

export default Card;