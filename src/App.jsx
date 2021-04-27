import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Trainee, Login, TextFieldDemo, InputDemo, ChildrenDemo, NoMatch,
} from './pages';
import { Navbar } from './layouts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Trainee} />
          <Route path="/login" component={Login} />
          <Route path="/text-field-demo" component={TextFieldDemo} />
          <Route path="/input-demo" component={InputDemo} />
          <Route path="/children-demo" component={ChildrenDemo} />
          <Route path="/" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
