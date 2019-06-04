import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  // console.log(props.posts);
  return (
    <div>
      {props.posts.map(post => {
        return (
          <div key={post.id} className="post-container">
            <CommentSection comments={post.comments} />
            <form className="add-comment-container">
              <input
                type="text"
                name="comment-input"
                placeholder="Add a comment..."
              />
            </form>
          </div>
        );
      })}
    </div>
  );
};
export default PostContainer;
