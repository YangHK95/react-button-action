import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the conter start at 0', () => {
  render(<App />);
  const conuterElement = screen.getByTestId("counter");
  expect(conuterElement).toHaveTextContent(0)
});

test('minus button has coreect text', () => { 
  render(<App/>);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-")
 })

 test('plus buuton has correct text',()=>{
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+")
 })

 test("When the + button is pressed, the counter changes to 1", ()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId("plus-button")
  fireEvent.click(buttonElement);
  const conuterElement = screen.getByTestId("counter");
  expect(conuterElement).toHaveTextContent(1); 
 })

 test("on/off button has blue color", ()=>{
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:"blue"})
 })

 test("Prevent the -,+ button from being pressed when the on/off button is clicked",()=>{
  render(<App/>);
  const onOffButtonElement = screen.getByTestId("on/off-button")
  fireEvent.click(onOffButtonElement)
  const plusButtonElement = screen.getByTestId("plus-button")
  expect(plusButtonElement).toBeDisabled()
 })