
import './App.css'
import store from './store/store'
import { Provider } from 'react-redux'
function App() {

  return (

 
    <Provider store={store } >
      <div>hello , world </div>
      </Provider>
   
  )
}

export default App
