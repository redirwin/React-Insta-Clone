import React from "react";
// import PropTypes from "prop-types";
import "../CommentSection/CommentSection.scss";

const AddComment = props => {
  // console.log(props);
  return (
    <div>
      {/* Form for adding new comment to comment stream. */}
      <form
        className="add-comment-container"
        onSubmit={event => props.addNewComment(event)}
      >
        <input
          type="text"
          className="comment-input"
          name="comment-input"
          placeholder="Add a comment..."
          onChange={event => props.commentFormChange(event, props.postIndex)}
        />
        <button className="submit-button" type="submit" value="Post">
          Post
        </button>
      </form>
    </div>
  );
};

export default AddComment;
