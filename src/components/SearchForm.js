// @ts-nocheck
import React, { useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import GitContext from '../store/context';

export function SearchForm() {
  const { user, setUser, fetchProfile } = useContext(GitContext);

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
