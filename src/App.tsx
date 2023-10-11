import BookList from './components/BookList'
import Navbar from './components/Navbar'
import './assets/styles/main.scss'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container main-content">
        <BookList />
      </div>
    </>
  )
}

export default App
