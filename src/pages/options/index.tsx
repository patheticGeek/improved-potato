import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { setup } from 'twind'
import 'twind/shim'

setup()

const root = document.querySelector('#root')

render(<App />, root)
