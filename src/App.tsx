import BookList from './components/BookList'
import './styles.scss'

const App: React.FC = () => {
  return (
    <>
      <h1>Listing all Available Books</h1>
      <BookList />
      <button className="btn btn-primary">Primary button</button>
    </>
  )
}

export default App
