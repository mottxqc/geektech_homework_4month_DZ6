import { useState, useEffect } from 'react'
import query from '../../query'
import comments from '../comments/comments'
import loading from '../loading/loading'
import styles from './posts.module.css'

function posts() {
  const [posts, setPosts] = useState([])
  const [clickedPost, setClickedPost] = useState(0)
  const [isOk, setIsOk] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const url = `posts`
    makeQuery(setPosts, url, setIsOk, setIsLoading, setIsError)
  }, [])

  const clickHandler = (id) => {
    clickedPost === id ? setClickedPost(0) : setClickedPost(id)
  }

  return (
    <ul className={styles.posts}>
      {isLoading && <loading />}
      {isOk &&
        posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <div>
              <h2>{post.title}</h2>
              <button onClick={() => clickHandler(post.id)}>comments</button>
            </div>
            {clickedPost === post.id && <comments postId={post.id} />}
          </li>
        ))}
      {isError && <h1>Ошибка</h1>}
    </ul>
  )
}

export default posts