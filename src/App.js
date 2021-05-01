import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';
import store from './store';


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
