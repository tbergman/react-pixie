/* Third Party */
import React from 'react';
import {
  Router,
  Route
} from 'react-router'
import { createBrowserHistory } from 'history'

import { AppContext } from './AppContext'
import { DARK, LIGHT } from './Constants/Settings'
import * as Pages from './Pages'
import { Footer } from './Components/Footer'
import { Colors } from './Constants/Colors'

/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export const history = createBrowserHistory()

export const App = () => {
  const [theme, setTheme] = React.useState(DARK)


  return (
    <AppContext.Provider
      value={{ theme, setTheme }}>
      <div
        style={{
          // @ts-ignore
          backgroundColor: Colors[theme].backgroundColor,
          // @ts-ignore
          color: Colors[theme].primaryColor
        }}
        className="container-fluid">
        <Router history={history}>
            <Route exact path="/" component={Pages.Home} />
            <Route path="/resume">
              <Pages.Resume />
            </Route>
        </Router>
      </div>
      <Footer
        colors={Colors}
        theme={theme} />
    </AppContext.Provider>
  );
}

export default App;
