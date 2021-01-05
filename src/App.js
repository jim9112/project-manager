import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import AuthContext from './context/AuthContext';
import TodayPage from './pages/TodayPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <ProtectedRoute
              path="/today"
              exact
              component={TodayPage}
              user={user}
            />
            <ProtectedRoute path="/home" exact component={Home} user={user} />
            <Route path="*" component={NotFound} />
          </Switch>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
