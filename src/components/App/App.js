import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Game from '../Game/Game';
import Nav from '../Nav/Nav'
import Pictures from '../Pictures/Pictures';
import Profile from '../Profile/Profile';
import Total from '../Total/Total';
import store from '../../redux/store'
import './App.css'


function App() {
  return (

    <Provider store={store}>
      <Router>
        <Nav />
        <div className="wrapper">
          <Switch>
            <Route path={'/'} exact component={Game} />
            <Route path={'/game'} exact component={Game} />
            <Route path={'/profile'} component={Profile} />
            <Route path={'/pictures'} component={Pictures} />
            <Route path={'/total'} component={Total} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
