import axios from 'axios'

function query(setData, url, setIsOk, setIsLoading, setIsError) {
  const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  })

  setIsError(false)
  setIsLoading(true)
  setIsOk(false)
  API.get(url)
    .then((repsone) => {
      setData(repsone.data)
      setIsLoading(false)
      setIsOk(true)
    })
    .catch((err) => {
      console.log(err)
      setIsError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
}

export default makeQuery;