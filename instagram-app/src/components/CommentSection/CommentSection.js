// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import AddComment from "../AddComment/AddComment";
import "../CommentSection/CommentSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

// const CommentSection = props => {

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      likes: props.likes,
      comments: props.comments,
      time: props.time,
      postIndex: props.postIndex,
      commentInput: ""
    };
  }

  formInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
  };

  render() {
    console.log(this.props);
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
              />
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                className="reader-icon-comment"
              />
            </div>
            <div className="likes">
              {parseInt(this.props.likes).toLocaleString()} likes{" "}
              {/* Displays likes with comma as needed */}
            </div>
          </div>

          {/* Map over comments and add each one to comment stream. */}
          {this.props.comments.map(comment => {
            return (
              <div key={comment.id} className="comment-container">
                <p className="username">{comment.username}</p>
                <p className="comment-text">{comment.text}</p>
              </div>
            );
          })}
          <div className="time-stamp">{this.props.time}</div>
        </div>

        <AddComment formInputChange={this.formInputChange} />
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
