import React from "react";
import { Table, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import SortButtons from "./SortButtons";

export function Profile({ profile }) {
  const error = profile.name === "Error" ? "No Organization Found" : null;

  return !error && profile.length > 0 ? (
    <>
      <SortButtons profile={profile} />
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
          {!error &&
            profile.length > 0 &&
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
    </>
  ) : error ? (
    <Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>
  ) : null;
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(Profile);
