import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookList from './components/BookList'
import UpdateBook from './components/UpdateBook'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './assets/styles/main.scss'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container main-content">
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/:bookId" element={<UpdateBook />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App
