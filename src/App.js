import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Table,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  fetchProfile,
  sortByName,
  sortByStars,
} from "./store/actions/gitActions";

const App = ({ profile, fetchProfile, sortByName, sortByStars }) => {
  const [user, setUser] = useState("");
  const error = profile.name === 'Error' ? 'No Organization Found' : null;

  const handleSubmit = () => {
    fetchProfile(user);
    setUser('');
  };

  const sortAlpha = () => sortByName(profile);

  const sortDefault = () => sortByStars(profile);

  return (
    <div className="container mt-3">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <Button variant="outline-success" onClick={handleSubmit}>
          Search
        </Button>
      </Form>

      {!error && profile.length > 0 && (
        <div className="mt-2">
          <label>Sort by</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary" onClick={sortAlpha}>
                Alphabetical
              </Button>
              <Button variant="outline-secondary" onClick={sortDefault}>
                By Most Stars
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      )}

      <Table striped bordered hover>
        <thead>
          {!error && profile.length > 0 && (
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Total stargazers</th>
              <th>Total watchers</th>
              <th>Link</th>
            </tr>
          )}
        </thead>
        <tbody>
          {!error && profile.length > 0 &&
            profile.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.stargazers_count}</td>
                <td>{row.watchers_count}</td>
                <td>
                  <a href={row.url}>{row.url}</a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
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
