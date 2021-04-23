import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';
import store from './store';

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
