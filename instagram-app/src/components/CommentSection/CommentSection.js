import React from "react";
import PropTypes from "prop-types";
import "../CommentSection/CommentSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="reader-interaction">
        <div className="reader-icons-container">
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="reader-icon-heart"
          />
          <FontAwesomeIcon
            icon={faComment}
            size="lg"
            className="reader-icon-comment"
          />
        </div>
        <div className="likes">
          {parseInt(props.likes).toLocaleString()} likes
        </div>
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
