import Header from './components/header'
import Loading from './components/loading'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Header />
      <Home />
      <Loading />
    </ThemeProvider>
  )
}

export default App
