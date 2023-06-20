function reducer(state, action) {
  switch (action.type) {
    case 'Handle_Title_Change':
      return {
        ...state,
        blog_title: action.payload
      };

    case 'Handle_Author_Change':
      return {
        ...state,
        author_name: action.payload
      };

    case 'Handle_Snippet_Change':
      return {
        ...state,
        blog_snippet: action.payload
      };

    case 'Handle_Blog_Change':
      return {
        ...state,
        blog_content: action.payload
      };

    case 'CLEAR_FORM':
      return {
        ...state,
        blog_title: action.payload,
        author_name: action.payload,
        blog_snippet: action.payload,
        blog_content: action.payload
      };

    default:
      throw new Error();
  }
}

export { reducer };