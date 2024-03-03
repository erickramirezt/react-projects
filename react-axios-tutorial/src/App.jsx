import './App.css'
import { AddProduct } from './components/add-product'
import { ListOfProducts } from './components/list-of-products'

function App() {
  return (
    <div>
      <div>React Axios</div>
      <ListOfProducts />
      <AddProduct />
    </div>
  )
}

export default App
