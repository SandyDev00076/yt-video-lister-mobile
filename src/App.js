import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DirectoryPage from './pages/Directory/Directory';
import { AppProvider } from './data/appContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DirectoryPage} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
