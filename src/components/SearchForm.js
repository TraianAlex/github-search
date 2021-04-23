import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchForm({ handleSubmit }) {
  const [user, setUser] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(user);
    setUser('');
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Button variant="outline-success" onClick={submitForm}>
        Search
      </Button>
    </Form>
  );
}
