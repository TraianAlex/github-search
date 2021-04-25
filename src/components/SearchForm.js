import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useProfile } from '../store/useProfile';

export function SearchForm() {
  const { user, setUser, fetchProfile } = useProfile();

  const submitForm = () => fetchProfile(user);

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <Button variant="outline-success" onClick={submitForm}>
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
