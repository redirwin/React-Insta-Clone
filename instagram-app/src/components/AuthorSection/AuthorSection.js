import React from "react";
import PropTypes from "prop-types";
// import "../AuthorSection/AuthorSection.scss";
import styled from "styled-components";

const AboutAuthor = styled.div`
  background-color: #ffffff;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  padding: 2%;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 3px;
    border: 1px solid red;
  }
  div {
    align-self: center;
    margin-left: 2%;
    font-weight: bold;
  }
`;

const PostImageContainer = styled.div`
  .post-image {
    img {
      width: 100%;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
    }
  }
`;

const PostImage = styled.img`
  width: 100%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

const AuthorSection = props => {
  return (
    <AuthorPost>
      <AboutAuthor>
        <img src={props.thumbnail} alt="Post Author Thumnail" />
        <div>{props.author}</div>
      </AboutAuthor>
      <PostImageContainer>
        <PostImage src={props.postContent} alt="Post Content" />
      </PostImageContainer>
    </AuthorPost>
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
