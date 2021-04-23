import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from 'routes';
import { theme, GlobalStyles } from './theme';
import Header from './components/Header';
import People from './pages/People';
import AddEditPeople from './pages/AddEditPeople';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={routes.people.list} exact>
            <People />
          </Route>
          <Route path={routes.people.add}>
            <AddEditPeople />
          </Route>
          <Route path={routes.people.edit}>
            <AddEditPeople />
          </Route>
          <Route path="*">
            <Redirect to={routes.people.list} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
