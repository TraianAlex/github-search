import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { sortBy, reverse } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "components/SearchForm";
import SortButtons from "components/SortButtons";
import Profile from "components/Profile";

const sortByProperty = (obj, param, func) =>
  func(reverse(sortBy(obj, [param])));

const App = () => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (user) => {
    await axios
      .get(`https://api.github.com/orgs/${user}/repos`)
      .then((r) => {
        sortByProperty(r.data, "stargazers_count", setProfile);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setProfile([]);
      });
  };

  const sortAlpha = () => sortByProperty(profile, "name", setProfile);
  const sortDefault = () =>
    sortByProperty(profile, "stargazers_count", setProfile);

  return (
    <div className="container mt-3">
      <SearchForm handleSubmit={handleSubmit} />
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
