import { render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import BookList from '../components/BookList'

const mock = new MockAdapter(axios)

it('should make a GET request when rendering BookList component', async () => {
  const mockResponse = { books: [{ title: 'Book 1' }, { title: 'Book 2' }] }
  mock.onGet('/api/books').reply(200, mockResponse)

  // Render the BookList component
  render(
    <Provider store={store}>
      <BookList />
    </Provider>
  )

  // Wait for the GET request to complete
  await waitFor(() => {
    expect(mock.history.get.length).toBe(2)
  })
})
