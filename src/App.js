import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Calculator from './components/calculator';
import Nav from './components/Navigation';

const App = () => (
  <>
    <header>
      <Nav />
    </header>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Calculator">
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
