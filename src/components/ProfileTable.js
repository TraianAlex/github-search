import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sortByName, sortByStars } from 'store/actions/gitActions';
import { getProfileState } from 'store/reducers/profileReducer';

export const ProfileTable = () => {
  const { profile } = useSelector(getProfileState);
  const dispatch = useDispatch();
  const sortAlpha = () => dispatch(sortByName(profile));
  const sortDefault = () => dispatch(sortByStars(profile));

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
