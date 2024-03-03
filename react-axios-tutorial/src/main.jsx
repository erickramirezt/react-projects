// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'
axios.defaults.timeout = 5000
// axios.defaults.headers = {
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer auth token',
// }
axios.interceptors.request.use(
  (config) => {
    // console.log('Request Interceptor:', config)
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'Bearer auth',
      },
    }
  },
  (error) => {
    console.error('Request Interceptor Error:', error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response)
    return {
      ...response,
      data: { resp: response.data, title: 'api interceptor' },
    }
  },
  (error) => {
    console.error('Response Interceptor Error:', error)
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
