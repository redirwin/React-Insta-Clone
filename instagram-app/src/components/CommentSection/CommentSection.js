import React from "react";

const CommentSection = props => {
  console.log(props);
  return (
    <div>
      {props.comments.map(post => {
        return (
          <div key={post.id} className="comment-container">
            <p className="username">{post.username}</p>
            <p className="comment-text">{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CommentSection;
