import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Vedika from './views/vedika'
import Home from './views/home'
import Utkarsh from './views/utkarsh'
import Khushi from './views/khushi'
import Siddhant from './views/siddhant'
import Pooja from './views/pooja'
import Sumit from './views/sumit'
import About from './views/about'
import Rohan from './views/rohan'
import Diksha from './views/diksha'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Vedika} exact path="/vedika" />
        <Route component={Home} exact path="/" />
        <Route component={Utkarsh} exact path="/utkarsh" />
        <Route component={Khushi} exact path="/khushi" />
        <Route component={Siddhant} exact path="/siddhant" />
        <Route component={Pooja} exact path="/pooja" />
        <Route component={Sumit} exact path="/sumit" />
        <Route component={About} exact path="/about1" />
        <Route component={Rohan} exact path="/rohan" />
        <Route component={Diksha} exact path="/diksha" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
