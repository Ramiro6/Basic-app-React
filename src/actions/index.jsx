import fetchPosts from '../api/json.jsx';

export const fetchPost = (post) => {
  return async (dispatch, getState) => {
    const response = await fetchPosts

    console.log(response)

    dispatch({type: 'FETCH_POSTS', payload: response})

  }
  // const response = fetchPosts
  // console.log(response)
  // return {
  //   type: 'FETCH_POST',
  //   payload: post
  // }
}