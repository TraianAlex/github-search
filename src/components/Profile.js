import React from 'react';
import { Table, Alert } from 'react-bootstrap';
import Loader from './Loader';
import SortButtons from './SortButtons';
import { useProfile } from '../store/useProfile';

export function Profile() {
  const { profile, loading, error } = useProfile();

  return loading ? (
    <Loader />
  ) : error ? (
    <Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>
  ) : !error && profile.length > 0 ? (
    <>
      <SortButtons />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Total stargazers</th>
            <th>Total watchers</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {profile.map((row) => (
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
  ) : null;
}

export default Profile;
