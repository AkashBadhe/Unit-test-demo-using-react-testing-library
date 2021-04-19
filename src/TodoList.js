import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList(props){
    const {items, removeItem, markTodoDone} = props
    return (
      <table className="pure-table pure-table-horizontal">
        <tbody>
        {
          items.map((item, index) => <TodoListItem key={index} {...{item, index, removeItem, markTodoDone}} />)
        }
        </tbody>
      </table>
    )
}
