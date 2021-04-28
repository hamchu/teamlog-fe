import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthenticationProvider } from '../contexts/authentication';
import { ErrorProvider } from '../contexts/error';
import { ThemeProvider } from '../contexts/theme';
import MapPage from './pages/MapPage';

const App = () => (
  <ThemeProvider>
    <ErrorProvider>
      <AuthenticationProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={MapPage} />
          </Switch>
        </Router>
      </AuthenticationProvider>
    </ErrorProvider>
  </ThemeProvider>
);

export default App;
