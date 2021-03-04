import React from "react";
import { Table } from "react-bootstrap";

export default function Profile({ profile }) {
  return (
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
        {profile.length > 0 &&
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
  );
}
