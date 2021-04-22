import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GitProvider } from 'store/GitProvider';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';

const App = () => {
  return (
    <div className="container mt-3">
      <GitProvider>
        <SearchForm />
        <Profile />
      </GitProvider>
    </div>
  );
};

export default App;
