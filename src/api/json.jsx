const fetchPosts = () => {
  return fetch('http://localhost:4000/api/v1/posts').then((res) => {
    return res.json()
  })
}

export default fetchPosts
