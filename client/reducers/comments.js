function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { author: user, comment: text } = action
      // return with new user and comment
      return [...state, {
        user,
        text
      }]

    case 'REMOVE_COMMENT':
      console.log('remove', action.i);
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
  }
  return state
}

function comments(state=[], action) {
  if (action.postId !== 'undefined') {
    return {
      // current
      ...state,
      // override post with newone
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
