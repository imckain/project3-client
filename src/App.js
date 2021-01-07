import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage />
            } />
            <Route exact path='/login' render={props =>
              <LoginPage />
            } />
            <Route exact path='/signup' render={props =>
              <SignupPage {...props} />
            } />
            <Route exact path='/dashboard' render={props =>
              <DashboardPage {...props} />
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
};

export default App;
