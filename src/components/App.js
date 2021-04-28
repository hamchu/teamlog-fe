import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApiLoadProvider } from '../contexts/apiLoad';
import { AuthenticationProvider } from '../contexts/authentication';
import { ErrorProvider } from '../contexts/error';
import { ThemeProvider } from '../contexts/theme';
import MapPage from './pages/MapPage';

const App = () => (
  <ThemeProvider>
    <ErrorProvider>
      <ApiLoadProvider>
        <AuthenticationProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={MapPage} />
            </Switch>
          </Router>
        </AuthenticationProvider>
      </ApiLoadProvider>
    </ErrorProvider>
  </ThemeProvider>
);

export default App;
