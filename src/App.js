import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Calculator from './components/calculator';
import HomePage from './components/Home';
import Nav from './components/Navigation';
import Quota from './components/Quota';

const App = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Calculator">
          <Calculator />
        </Route>
        <Route path="/Quota">
          <Quota />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
