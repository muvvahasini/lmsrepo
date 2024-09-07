import {Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import './App.css'

const App = () =>(
  <Switch>
  <Route exact path = '/' component={Home} />
  <Route exact path='/login' component={LoginPage} />
  </Switch>
)

export default App