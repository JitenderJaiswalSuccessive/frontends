import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Trainee, Login, InputDemo, ChildrenDemo,
  NoMatch, TextFieldDemo, Logout,
} from './pages';
import { PrivateRoute, AuthRoute } from './routes';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <AuthRoute path="/login" component={Login} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/trainee" component={Trainee} />
          <PrivateRoute path="/text-field-demo" component={TextFieldDemo} />
          <PrivateRoute path="/input-demo" component={InputDemo} />
          <PrivateRoute path="/children-demo" component={ChildrenDemo} />
          <PrivateRoute component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
