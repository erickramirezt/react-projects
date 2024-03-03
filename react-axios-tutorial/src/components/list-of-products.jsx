// import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
// import { instance } from '../axios'
import axios from 'axios'

export function ListOfProducts() {
  const [state, setState] = useState([])

  // promise handle using them
  // useEffect(() => {
  //   axios
  //     .get('/products')
  //     .then((response) => setState(response.data.products))
  //     .catch((error) => console.error('Error:', error))
  // }, [])
  
  // const token = 'auth_token'

  // promise handle using async/await
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/products')
        if (response.status !== 200)
          throw new Error('Error:', response.status, response.statusText)
        setState(response.data.resp.products)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div>List of Products</div>
      <div>
        {state.map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <div>${product.price}</div>
          </div>
        ))}
      </div>
    </>
  )
}
