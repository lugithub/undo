import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const App = ({match: { params: {filter}}}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={filter}/>
    <Footer />
    <UndoRedo />
  </div>
)

export default App
