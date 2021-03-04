import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  fetchProfile,
  sortByName,
  sortByStars,
} from "./store/actions/gitActions";
import SearchForm from "components/SearchForm";
import SortButtons from "components/SortButtons";
import Profile from "components/Profile";

const App = ({ profile, fetchProfile, sortByName, sortByStars }) => {
  const error = profile.name === "Error" ? "No Organization Found" : null;

  const handleSubmit = (user) => {
    fetchProfile(user);
  };

  const sortAlpha = () => sortByName(profile);
  const sortDefault = () => sortByStars(profile);

  return (
    <div className="container mt-3">
      <SearchForm handleSubmit={handleSubmit} />
      {!error && profile.length > 0 && (
        <SortButtons sortAlpha={sortAlpha} sortDefault={sortDefault} />
      )}
      <Profile profile={profile} error={error} />
      {error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  fetchProfile,
  sortByName,
  sortByStars,
})(App);
