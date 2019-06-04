import React from 'react';

const PostContainer = props => {
	console.log(props.posts);
	return (
		<div>
		 {props.posts.map(post => {
			 return (
				<p>New Post</p>
			 );
			})}
		</div>
	);
};
export default PostContainer;