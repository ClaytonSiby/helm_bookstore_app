import BookList from './features/book/BookList'
import './styles.css'

const App: React.FC = () => {
  return (
    <>
      <h1>Listing all Available Books</h1>
      <BookList />
    </>
  )
}

export default App
