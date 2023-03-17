import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page2 from './views/page2'
import Home1 from './views/home1'
import Page from './views/page'
import Home3 from './views/home3'
import Page3 from './views/page3'
import Vfdvbfdbgf from './views/vfdvbfdbgf'
import Home4 from './views/home4'
import Page1 from './views/page1'
import IuhIhuihdsAudsa from './views/iuh-ihuihds-audsa'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page2} exact path="/page2" />
        <Route component={Home1} exact path="/home1" />
        <Route component={Page} exact path="/" />
        <Route component={Home3} exact path="/home3" />
        <Route component={Page3} exact path="/page3" />
        <Route component={Vfdvbfdbgf} exact path="/vfdvbfdbgf" />
        <Route component={Home4} path="**" />
        <Route component={Page1} exact path="/page1" />
        <Route component={IuhIhuihdsAudsa} exact path="/iuh-ihuihds-audsa" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
