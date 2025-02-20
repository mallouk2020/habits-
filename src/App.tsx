
import { Container, Typography } from '@mui/material'
import './App.css'
import store from './store/store'
import { Provider } from 'react-redux'
import AddHabitForm from './components/add-habit-form'
import HabitList from './components/habit-list'





function App() {

  return (

 
    <Provider store={store } >
<Container maxWidth= "md" className='container'>

  <Typography component="h1" variant='h2' align='center' style={{ fontFamily: "Sigmar, serif",
  fontWeight: 400,
  fontStyle: "normal",
  } 
}>
  
   to do list</Typography>
  <AddHabitForm></AddHabitForm>
  <HabitList/>
</Container>


  
</Provider>
   
  )
}

export default App
