import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
	console.log(props.posts);
	return (
		<div>
		 {props.posts.map(post => {
			 return (
				 <div>
					<p>From PostContainer</p>
					<CommentSection comments={post.comments} id={post.id} />
				</div>
			 );
			})}
		</div>
	);
};
export default PostContainer;