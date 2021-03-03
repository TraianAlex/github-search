import { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  InputGroup,
  Table,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { sortBy, reverse } from 'lodash';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .get(`https://api.github.com/orgs/${user}/repos`)
      .then((r) => {
        setProfile(reverse(sortBy(r.data, ['stargazers_count'])));
        setError('');
      })
      .catch((error) => {
        setError(error);
        setProfile([]);
      });
    setUser("");
  };

  const sortAlpha = () => {
    setProfile(reverse(sortBy(profile, ['name'])));
  };

  const sortDefault = () => {
    setProfile(reverse(sortBy(profile, ['stargazers_count'])));
  };

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

      {profile.length > 0 && (
        <div className="mt-2">
          <label>Sort by</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary" onClick={sortAlpha}>Alphabetical</Button>
              <Button variant="outline-secondary" onClick={sortDefault}>By Most Stars</Button>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      )}

      <Table striped bordered hover>
        <thead>
          {profile.length > 0 && (
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
          {profile &&
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
          <Alert.Heading>No Organization found!</Alert.Heading>
        </Alert>
      )}
    </div>
  );
}

export default App;
