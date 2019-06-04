import React from "react";
import "../AuthorSection/AuthorSection.scss";

const AuthorSection = props => {
  console.log(props);
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

export default AuthorSection;
