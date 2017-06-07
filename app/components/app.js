import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({match: { params: {filter}}}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={filter}/>
    <Footer />
  </div>
)

export default App
