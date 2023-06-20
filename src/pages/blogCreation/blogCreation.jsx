import React, { useState, useReducer } from 'react';

import { reducer } from '../../reducer/reducer';

import { baseUrl } from '../../index';

import styles from './blogCreation.module.css';

const BlogCreation = () => {

  let data = {
    blog_title: "",
    author_name: "",
    blog_snippet: "",
    blog_content: ""
  };

  const [state, dispatch] = useReducer(reducer, data);

  const fnHandleTitleChange = (event) => {
    dispatch({
      type: 'Handle_Title_Change',
      payload: event.target.value,
    });
  }

  const fnHandleAuthorChange = (event) => {
    dispatch({
      type: 'Handle_Author_Change',
      payload: event.target.value,
    });
  }

  const fnHandleSnippetChange = (event) => {
    dispatch({
      type: 'Handle_Snippet_Change',
      payload: event.target.value,
    });
  }

  const fnHandleContentChange = (event) => {
    dispatch({
      type: 'Handle_Blog_Change',
      payload: event.target.value,
    });
  }

  const fnSubmitHandler = (event) => {
    event.preventDefault();

    data = {
      id: Math.floor(Math.random() * 100),
      blog_title: state.blog_title,
      author_name: state.author_name,
      blog_snippet: state.blog_snippet,
      blog_content: state.blog_content
    }

    fetch(`${baseUrl}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Blog Created 🎉");
        dispatch({
          type: 'CLEAR_FORM',
          payload: '',
        });
      })
      .catch((error) => {
        alert("Oops something went wrong 😕");
      });
  }

  return (
    <div>
      <form onSubmit={fnSubmitHandler} className={styles.form_wrapper}>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder='Blog Title'
            value={state.blog_title}
            onChange={(e) => fnHandleTitleChange(e)} />
        </div>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder='Author Name'
            value={state.author}
            onChange={(e) => fnHandleAuthorChange(e)} />
        </div>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder='Snippet'
            value={state.snippet}
            onChange={(e) => fnHandleSnippetChange(e)} />
        </div>
        <div className={styles.input_wrapper}>
          <textarea
            placeholder='Blog Content'
            value={state.content}
            onChange={(e) => fnHandleContentChange(e)} />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default BlogCreation;
