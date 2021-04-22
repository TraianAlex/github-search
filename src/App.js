import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { sortBy, reverse } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "components/SearchForm";
import SortButtons from "components/SortButtons";
import Profile from "components/Profile";
import Loader from "components/Loader";

const sortByProperty = (obj, param, func) =>
  func(reverse(sortBy(obj, [param])));

const App = () => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (user) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://api.github.com/orgs/${user}/repos`);
      sortByProperty(data, "stargazers_count", setProfile);
      setError("");
    } catch(error) {
      setError(error);
      setProfile([]);
    }
    setLoading(false);
  };

  const sortAlpha = () => sortByProperty(profile, "name", setProfile);
  const sortDefault = () =>
    sortByProperty(profile, "stargazers_count", setProfile);

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
