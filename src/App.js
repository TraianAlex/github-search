import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <SearchForm />
        <Profile />
      </Provider>
    </Container>
  );
};

export default App;
