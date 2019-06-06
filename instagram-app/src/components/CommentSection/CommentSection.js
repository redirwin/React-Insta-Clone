// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";
// import AddComment from "../AddComment/AddComment";
import "../CommentSection/CommentSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

class CommentSection extends Component {
  state = {
    likes: this.props.likes,
    comments: this.props.comments,
    time: this.props.time,
    post: this.post,
    commentInput: ""
  };

  // Manage the form input.
  manageCommentInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addComment = e => {
    e.preventDefault();
    const commentInput = {
      username: "davzbeard",
      text: this.state.commentInput
    };
    this.setState({
      comments: [...this.state.comments, commentInput],
      commentInput: ""
    });
  };

  likePost = e => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <div>
        <div className="comment-section">
          {/* Display icons and likes. */}
          <div className="reader-interaction">
            <div className="reader-icons-container">
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="reader-icon-heart"
                onClick={e => this.likePost(e)}
              />
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                className="reader-icon-comment"
              />
            </div>
            <div className="likes">
              {parseInt(this.state.likes).toLocaleString()} likes{" "}
              {/* Displays likes with comma as needed */}
            </div>
          </div>
          {/* Map over comments and add each one to comment stream. */}
          {this.state.comments.map(comment => {
            return (
              <div
                className="comment-container"
                key={this.props.post.id.concat(comment.id)}
              >
                <p className="username">{comment.username}</p>
                <p className="comment-text">{comment.text}</p>
              </div>
            );
          })}
          <div className="time-stamp">{this.props.time}</div>
        </div>

        {/* Form for adding new comment to comment stream. */}
        <form
          className="add-comment-container"
          onSubmit={e => this.addComment(e)}
        >
          <input
            type="text"
            className="comment-input"
            name="commentInput"
            placeholder="Add a comment..."
            value={this.state.commentInput}
            onChange={e => this.manageCommentInput(e)}
          />
          <button
            className="submit-button"
            type="submit"
            value="Post"
            onClick={e => this.addComment(e)}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  likes: PropTypes.number,
  time: PropTypes.string,
  postIndex: PropTypes.string
};

export default CommentSection;
