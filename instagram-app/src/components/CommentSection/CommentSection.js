import React from 'react';

const CommentSection = props => {
	console.log(props.comments);
	return (
		<div>
		 {props.comments.map(post => {
			 return (
				<p>From CommentSection</p>
			 );
			})}
		</div>
	);
};
export default CommentSection;
