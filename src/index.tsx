import { createRoot } from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
