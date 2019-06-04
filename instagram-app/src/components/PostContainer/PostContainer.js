import React from "react";
import AuthorSection from "../AuthorSection/AuthorSection";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "../PostContainer/PostContainer.scss";

const PostContainer = props => {
  return (
    <div className="body-container">
      {props.posts.map(post => {
        return (
          <div key={post.id} className="post-container">
            <div className="post-data">
              <AuthorSection
                author={post.username}
                thumbnail={post.thumbnailUrl}
                postContent={post.imageUrl}
              />
            </div>
            <CommentSection
              likes={post.likes}
              comments={post.comments}
              time={post.timestamp}
            />
            <form className="add-comment-container">
              <input
                className="comment-input"
                type="text"
                name="comment-input"
                placeholder="Add a comment..."
              />
              <input className="submit-button" type="submit" value="Post" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
