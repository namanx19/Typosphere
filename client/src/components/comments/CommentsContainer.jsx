/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, loggedInUserId, comments }) => {
  const [affectedComment, setAffectedComment] = useState(null);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {};

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHanlder={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={loggedInUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;