import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  //   console.log(props);
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

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
