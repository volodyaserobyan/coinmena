import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import { Home, Trade } from './pages';
import { LoginModal } from './modals';
import { useAppSelector } from './redux/store';
import { authSelectors } from './redux/slices/authSlice';

import './App.scss';

const App: React.FC = () => {
  const openLoginModal = useAppSelector(authSelectors.logIn);
  return (
    <div className='Main'>
      <Router>
        <Navigation />
        <div className='Main-container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trade" component={Trade} />
          </Switch>
          {
            openLoginModal && <LoginModal />
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
