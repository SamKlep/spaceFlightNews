import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/about' component={AboutScreen} />
    </Router>
  )
}

export default App
