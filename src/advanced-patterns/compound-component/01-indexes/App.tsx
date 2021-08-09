import React, {Component, ReactChildren} from 'react'
import {Container} from '../../shared/Container'
import {Title} from '../../shared/Title'

// TODO: By only changing the code of the component ComponentsCounter
// get to the following result: https://i.imgur.com/aJQxZNy.png
const ComponentsCounter = ({children}: {children: ReactChildren}) => (
  <Container>
    <Title>You passed 0 element</Title>
    {children}
  </Container>
)

const Element = ({index}: {index:number}) => <Title small>Im the element number {index}</Title>

export function App (){
  return (
    <ComponentsCounter>
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
    </ComponentsCounter>
  )
}
