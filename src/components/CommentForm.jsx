import React, { useState } from "react";
import axios from "axios";

const CommentForm = props => {
  const initialState = {
    comment: "",
    author: ""
  };
  const [state, setState] = useState(initialState);

  const handleOnChange = ({ target: { name, value } }) =>
    setState(_prevState => ({
      ..._prevState,
      [name]: value
    }));

  const hasInvalidFields = () => {
    if (state.comment.trim() !== "" && state.author.trim() !== "") {
      return false;
    }
    return true;
  };

  const isDisabled = hasInvalidFields() ? true : false;

  const handleOnSubmit = event => {
    event.preventDefault();
    const newComment = state;
    createComment(newComment);
  };
  const createComment = newComment => {
    axios
      .post("/api/comments", { newComment })
      .then(comment => {
        props.addComment(comment);
        clearForm();
      })
      .catch(console.error);
  };
  const clearForm = () => setState(_prevState => initialState);

  return (
    // <form onSubmit={handleOnSubmit}>
    <form>
      <div>
        <textarea
          onChange={handleOnChange}
          placeholder="Write something..."
          name="comment"
          value={state.comment}
        />
      </div>
      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          onChange={handleOnChange}
          id="author"
          type="text"
          name="author"
          value={state.author}
        />
      </div>
      <button disabled={isDisabled} onClick={handleOnSubmit}>
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
