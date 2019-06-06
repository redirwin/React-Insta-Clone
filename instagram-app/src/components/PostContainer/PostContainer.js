import React from "react";
import AuthorSection from "../AuthorSection/AuthorSection";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";

const BodyContainer = styled.div`
  background-color: #fafafa;
  border-top: 1px solid grey;
`;

const Posts = styled.div`
  width: 50%;
  max-width: 600px;
  margin: 5% auto;
`;

const PostContainer = props => {
  console.log(props);
  return (
    <BodyContainer>
      {props.posts.map(post => {
        return (
          <Posts key={post.id} className="post-container">
            <div className="post-data">
              <AuthorSection
                author={post.username}
                thumbnail={post.thumbnailUrl}
                postContent={post.imageUrl}
              />
            </div>
            <CommentSection
              likes={post.likes}
              time={post.timestamp}
              comments={post.comments}
              post={post}
            />
          </Posts>
        );
      })}
    </BodyContainer>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
