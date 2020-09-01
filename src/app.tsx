import React, { FC, PropsWithChildren } from 'react'

import Header from '@/components/Header'
import './index.less'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

interface IProps extends PropsWithChildren<unknown> {
  name: string
  age: number
}

const App: FC<IProps> = (properties) => {
  const { name, age } = properties
  return (
    <Router>
      <Header />
      <div>{`Hello, I'm ${name}, I'm ${age} years old`}</div>
      <Routes />
    </Router>
  )
}

export default App
