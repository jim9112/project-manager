import TodayPage from './pages/TodayPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <UserContextProvider>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/today" component={TodayPage} />
              <Route path="/home" component={Home} />
            </Switch>
          </UserContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
