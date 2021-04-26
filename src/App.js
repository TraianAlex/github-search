import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';

const App = () => {
  return (
    <div className="container mt-3">
      <Provider store={store}>
        <SearchForm />
        <Profile />
      </Provider>
    </div>
  );
};

export default App;
