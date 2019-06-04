import React from "react";
import PropTypes from "prop-types";
import "../CommentSection/CommentSection.scss";

const CommentSection = props => {
  //   console.log(props);
  return (
    <div className="comment-section">
      <div className="reader-interaction">
        <div className="reader-icons">
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
        </div>
        <div className="likes">{props.likes} likes</div>
      </div>
      {props.comments.map(post => {
        return (
          <div key={post.id} className="comment-container">
            <p className="username">{post.username}</p>
            <p className="comment-text">{post.text}</p>
          </div>
        );
      })}
      <div className="time-stamp">{props.time}</div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string,
      time: PropTypes.string
    })
  )
};

export default CommentSection;
