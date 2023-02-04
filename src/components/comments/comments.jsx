import { useEffect, useState } from 'react'
import query from '../../query'
import loading from '../loading/loading'
import styles from './comments.module.css'

function comments({ postId }) {
  const [comments, setComments] = useState([])
  const [isOk, setIsOk] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const url = `posts/${postId}/comments`
    query(setComments, url, setIsOk, setIsLoading, setIsError)
  }, [])

  return (
    <ul className={styles.comments}>
      <h3 className="header">comments:</h3>
      {isLoading && <loading />}
      {isOk &&
        (comments ? (
          comments.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              {comment.body}
            </li>
          ))
        ) : (
          <h3>Здесь пока ничего нет</h3>
        ))}
      {isError && <h1>Ошибка</h1>}
    </ul>
  )
}

export default comments