import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Trainee, Login, TextFieldDemo, InputDemo, ChildrenDemo, NoMatch, TraineeList, TraineeDetail,
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
          <Route exact path="/trainee" component={TraineeList} />
          <Route path="/trainee/:id" component={TraineeDetail} />
          <Route path="/" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
