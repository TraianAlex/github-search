import React from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from 'components/SearchForm';
import SortButtons from 'components/SortButtons';
import Profile from 'components/Profile';
import Loader from 'components/Loader';
import { useProfile } from 'hooks/useProfile';

const App = () => {
  const {loading, profile, error, handleSubmit, sortDefault, sortAlpha} = useProfile();

  return (
    <div className="container mt-3">
      <SearchForm handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {profile.length > 0 && (
        <>
          <SortButtons sortAlpha={sortAlpha} sortDefault={sortDefault} />
          <Profile profile={profile} />
        </>
      )}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>No Organization found!</Alert.Heading>
        </Alert>
      )}
    </div>
  );
};

export default App;
