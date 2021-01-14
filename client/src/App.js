import './App.css';
import Example from './pages/Example';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Example />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
