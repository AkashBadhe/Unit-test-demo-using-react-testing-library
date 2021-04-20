import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import TodoForm from '../TodoForm'

test('TodoForm should add new item and call onAddItem callback prop', () => {
  const addItem = jest.fn()
  const {getByTestId} = render(<TodoForm onAddItem={addItem}/>)

  let newItem = 'Get Milk'
  fireEvent.change(getByTestId('newItemField'), {target: {value: newItem}})
  getByTestId('addBtn').click()

  expect(addItem).toBeCalledWith({newItemValue: newItem})
  expect(addItem).toHaveBeenCalledTimes(1);
})

test('TodoForm should add new item and call onAddItem callback prop', () => {
  const addItem = jest.fn()
  const {getByTestId} = render(<TodoForm onAddItem={addItem}/>)
  const input = getByTestId('newItemField');
  let newItem = 'Get Milk'
  fireEvent.change(input, {target: {value: newItem}})
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  expect(addItem).toBeCalledWith({newItemValue: newItem})
  expect(addItem).toHaveBeenCalledTimes(1);
})
