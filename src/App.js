import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { GitProvider } from 'store/GitProvider';
import SearchForm from 'components/SearchForm';
import Profile from 'components/Profile';

const App = () => {
  return (
    <Container>
      <GitProvider>
        <SearchForm />
        <Profile />
      </GitProvider>
    </Container>
  );
};

export default App;
