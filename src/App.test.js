import React from 'react';
import App from './App';
import{ render, fireEvent} from'@testing-library/react';
import'@testing-library/jest-dom/extend-expect'

test('addtodo', () => {
  const { container, getByText, getByPlaceholderText} = render(<App/>);
  
  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target:{ value:'Go to coffee'} })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('Go to coffee');
})

test('add date', () => {
  const {container, getByText, getByPlaceholderText} = render(<App />);

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target:{ value:'29.01.2021'} })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('29.01.2021');
})

test('remove all', () => {
  const {getByText, getByTestId} = render(<App />);
  const button = getByText('Remove All');
  fireEvent.click(button);

  expect(getByTestId('todoTableBody')).toBeEmptyDOMElement()
})