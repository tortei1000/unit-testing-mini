const {greeting, returnTwo, add, multiply, divide, subtract} = require('./functions')

test('returnTwo should return 2', ()=>{
  expect(returnTwo()).toBe(2)
})



test('greeting should say Hello and name passed', ()=>{
  expect(greeting("James")).toBe(`Hello, James`)
  expect(greeting("Jill")).toBe(`Hello, Jill`)
})




test('add should add num1 and num2', ()=>{
  expect(add(1, 2)).toBe(3)
  expect(add(5, 9)).toBe(14)
})

describe('math functions tests', ()=>{
  test('multiply should * num1 and num2', ()=>{
    expect(multiply(2, 2)).toBe(4)
  })
  test('divide should / num1 and num2', ()=>{
    expect(divide(4, 2)).toBe(2)
  })
  test('subtract should - num1 and num2', ()=>{
    expect(subtract(2, 2)).toBe(0)
  })
})