import React from "react";
// import PropTypes from "prop-types";
import "../CommentSection/CommentSection.scss";

const AddComment = props => {
  console.log(props);
  return (
    <div>
      {/* Form for adding new comment to comment stream. */}
      <form className="add-comment-container">
        <input
          type="text"
          className="comment-input"
          name="comment-input"
          placeholder="Add a comment..."
        />
        <input className="submit-button" type="submit" value="Post" />
      </form>
    </div>
  );
};

export default AddComment;
