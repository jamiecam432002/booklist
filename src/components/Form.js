import React from "react";

const Form = ({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setIsbn,
  currentBookId,
}) => {
  return (
    <form>
      <label>Title</label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>Author</label>
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <label>ISBN</label>
      <input
        type="text"
        required
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      ></input>
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default Form;
