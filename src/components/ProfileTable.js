import React from 'react';
import { Table } from 'react-bootstrap';
import { useProfile } from 'store/useProfile';

export const ProfileTable = () => {
  const { profile, sortByName, sortByStars } = useProfile();

  const sortAlpha = () => sortByName(profile);
  const sortDefault = () => sortByStars(profile);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th onClick={sortAlpha}>Name &#11021;</th>
          <th>Description</th>
          <th style={{ minWidth: '177px' }} onClick={sortDefault}>
            Total stargazers &#11021;
          </th>
          <th style={{ minWidth: '151px' }}>Total watchers</th>
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
              <a href={row.url}>{row.name}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
