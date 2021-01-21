import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getUser, logout } from './services/userService';
import { getListings } from './services/listingService';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ListingsPage from './pages/ListingsPage';
// import CreateListing from './pages/CreateListingPage';
// import EditListing from './pages/EditListingPage';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App(props) {
  const [listingsData, setListingsData] = useState({});
  
  useEffect(() => {
    async function getListingData() {
      const data = await getListings();
      setListingsData(data)
    }
    getListingData()
  }, [])

  const [userState, setUserState] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser(),
    });
  };

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header 
        handleLogout={handleLogout} 
        user={userState.user}
      />
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage />
            } />
            <Route exact path='/login' render={props =>
              <LoginPage 
                {...props} 
                handleSignupOrLogin={handleSignupOrLogin} 
              />
            } />
            <Route exact path='/signup' render={props =>
              <SignupPage 
                {...props} 
                handleSignupOrLogin={handleSignupOrLogin} 
              />
            } />
            <Route exact path='/dashboard' render={props =>
              userState.user ?
                <DashboardPage 
                  {...props}
                  isAdmin={userState.user.isAdmin}
                  listings={listingsData}
                />
              :
                <Redirect to='/login' />
            } />
            <Route exact path='/listings' render={props =>
              <ListingsPage 
                {...props}
                listings={listingsData}
              />
            } />
            {/* <Route exact path='/create' render={props =>
              <CreateListing 
                {...props}
              />
            } />
            <Route exact path='/edit/:id' render={props =>
              <EditListing 
                {...props}
              />
            } /> */}
          </Switch>
        </main>
      <Footer />
    </div>
  );
};

export default withRouter(App);
