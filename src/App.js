import './App.css';
import Home from './components/homepage/home';
import Stats from './components/dashboard/statistics/stats';
import Income from './components/dashboard/income/income'
import Expenses from './components/dashboard/expenses/expenses'
import Todo from './components/dashboard/todo/todo'
import Profile from './components/dashboard/profile/profile'
import Settings from './components/dashboard/settings/settings'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const auth = localStorage.getItem('security')
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/income" component={Income} />
              <Route exact path="/expenses" component={Expenses} />
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
