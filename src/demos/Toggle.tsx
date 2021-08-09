// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from './Switch'

function Toggle({children}: {children: JSX.Element[]}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // APIs will be using today
  // https://reactjs.org/docs/react-api.html#reactchildren
  // https://reactjs.org/docs/react-api.html#cloneelement


  return <Switch on={on} onClick={toggle}/>
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = () => null;


// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = () => null

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = () => null

export function App() {
  return (
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <ToggleButton />
    </Toggle>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
