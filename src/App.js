import TodayPage from './pages/TodayPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/today" component={TodayPage} />
            <Route path="/" component={Home} />
          </Switch>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
