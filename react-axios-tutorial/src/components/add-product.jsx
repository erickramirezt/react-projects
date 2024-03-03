import axios from 'axios'
import { useState } from 'react'

export function AddProduct() {
  const [state, setState] = useState([])


  const postProduct = async () => {
    // promise handle using them
    axios
      .post('/products/add', { title: state })
      .then((response) => console.log(response))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <>
      <div>Add product</div>
      <input
        type='text'
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder='Enter title'
      />
      <button onClick={postProduct}>Add product</button>
    </>
  )
}
