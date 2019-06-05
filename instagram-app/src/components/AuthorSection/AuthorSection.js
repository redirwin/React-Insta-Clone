import React from "react";
import PropTypes from "prop-types";
import "../AuthorSection/AuthorSection.scss";

const AuthorSection = props => {
  return (
    <div className="author-section">
      <div className="about-author">
        <img src={props.thumbnail} alt="Post Author Thumnail" />
        <div>{props.author}</div>
      </div>
      <div className="post-image">
        <img src={props.postContent} alt="Post Content" />
      </div>
    </div>
  );
};

AuthorSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      postContent: PropTypes.string
    })
  )
};

export default AuthorSection;
