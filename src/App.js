import TodayPage from './pages/TodayPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import AuthContext from './context/UserContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { useContext } from 'react';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <UserContextProvider>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <ProtectedRoute
                path="/today"
                exact
                user={user}
                component={TodayPage}
              />
              <Route path="/home" exact component={Home} />
            </Switch>
          </UserContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
