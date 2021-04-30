import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchForm({ user, onUserChange, handleSubmit }) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={onUserChange}
      />
      <Button variant="outline-success" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}
