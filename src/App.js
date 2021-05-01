import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from 'components/SearchForm';
import SortButtons from 'components/SortButtons';
import Profile from 'components/Profile';
import Loader from 'components/Loader';
import { useProfile } from 'hooks/useProfile2';

const App = () => {
  const {
    user,
    loading,
    profile,
    error,
    isCard,
    setUser,
    fetchProfile,
    sortByName,
    sortByStars,
    toggleView,
  } = useProfile();

  const handleSubmit = () => fetchProfile(user);
  const handleSelect = (user) => {
    setUser(user);
    fetchProfile(user);
  };

  const sortAlpha = () => sortByName(profile);
  const sortDefault = () => sortByStars(profile);
  const changeView = () => toggleView(isCard);

  return (
    <Container>
      <SearchForm
        user={user}
        onUserChange={({ target }) => setUser(target.value)}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
      />
      {loading && <Loader />}
      {profile.length > 0 && (
        <>
          <div className="mt-4 mb-3 h5">
            Listing repositories for the user "{profile[0].owner.login}": found{' '}
            {profile.length} repositories
            <span
              className="clearfix float-right font-weight-light text-black-50"
              onClick={changeView}
            >
              Toggle view
            </span>
          </div>
          {isCard && (
            <SortButtons sortAlpha={sortAlpha} sortDefault={sortDefault} />
          )}
          <Profile
            profile={profile}
            sortAlpha={sortAlpha}
            sortDefault={sortDefault}
            display={isCard}
          />
        </>
      )}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
    </Container>
  );
};

export default App;
