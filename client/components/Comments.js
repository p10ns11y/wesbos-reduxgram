import React from 'react';

export default function Comments(props) {

  const {
    postComments,
    params: { postId },
    addComment,
    removeComment
  } = props;


  let authorRef = null;
  let commentRef = null;
  let commentFormRef = null;

  function renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>
            {comment.user}
            {comment.text}
            <button
              className="remove-comment"
              onClick={() => removeComment(postId, i)}
            >
              &times;
            </button>
          </strong>
        </p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const { params: { postId }, addComment } = props;
    const author = authorRef.value;
    const comment = commentRef.value;
    addComment(postId, author, comment);
    commentFormRef.reset();
  }


  return (
    <div className="comments">
      {postComments.map(renderComment)}
      <form
        ref={(elm) => { commentFormRef = elm; }}
        className="comment-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          ref={(elm) => { authorRef = elm; }}
          placeholder="author"
        />
        <input
          type="text"
          ref={(elm) => { commentRef = elm; }}
          placeholder="comment"
        />
        <input type="submit" hidden/>
      </form>
    </div>
  );
}
